import * as React from "react"
import { toast as sonnerToast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { XAvatar, type XAvatarProps, type XAvatarSize } from "./x-avatar"
import { XButton, type XButtonProps } from "./x-button"
import { XIcon, type XIconName } from "./x-icon"
import { XProgress, type XProgressColor, type XProgressUi } from "./x-progress"
import { cn } from "@/lib/utils"

export type XToastColor = "primary" | "success" | "warning" | "error"
export type XToastOrientation = "vertical" | "horizontal"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XToastUi {
  root?: string
  wrapper?: string
  title?: string
  description?: string
  icon?: string
  avatar?: string
  avatarSize?: XAvatarSize
  actions?: string
  progress?: string
  close?: string
}

/** 按钮配置：close 对象与 actions 数组共用，整体透传给 XButton */
export type XToastButtonProps = Partial<XButtonProps>

/** 操作按钮（kit 既有属性）：点击后关闭通知 */
export type XToastActionProps = {
  label?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/** progress 配置：透传 XProgress 的 color 与 ui */
export interface XToastProgressConfig {
  color?: XProgressColor
  ui?: XProgressUi
}

export interface XToastProps {
  /** 通知标题，支持节点自定义渲染（等价 title 插槽） */
  title?: React.ReactNode
  /** 说明文字，支持节点自定义渲染（等价 description 插槽） */
  description?: React.ReactNode
  /** 图标名 */
  icon?: XIconName
  /** 头像配置 */
  avatar?: XAvatarProps
  /** 语义色 */
  color?: XToastColor
  /** 内容与操作区的排列方向 */
  orientation?: XToastOrientation
  /** 显示关闭按钮，支持布尔、按钮配置或节点（等价 close 插槽） */
  close?: boolean | XToastButtonProps | React.ReactNode
  /** 关闭按钮图标 */
  closeIcon?: XIconName
  /** 操作按钮列表或自定义节点（等价 actions 插槽） */
  actions?: XToastButtonProps[] | React.ReactNode
  /** 操作按钮（kit 既有属性），点击后关闭通知 */
  action?: XToastActionProps
  /** 取消按钮（kit 既有属性），点击后关闭通知 */
  cancel?: XToastActionProps
  /** 自定义图标/头像区域（等价 leading 插槽） */
  leading?: React.ReactNode
  /** 显示剩余时长进度条 */
  progress?: boolean | XToastProgressConfig
  /** 展示时长（ms），同时驱动进度条动画 */
  duration?: number
  /** 主题插槽类名 */
  ui?: XToastUi
  className?: string
  /** 关闭回调（内部：由通知 API 注入） */
  onCloseToast?: () => void
  /** 暂停进度计时（内部：由通知 API 注入） */
  isPaused?: boolean
}

/** 语义色样式：root 描边与 icon 文字色 */
const toastColorClasses: Record<XToastColor, { root: string; icon: string }> = {
  primary: { root: "ring-primary-3/25", icon: "text-primary-6" },
  success: { root: "ring-success-3/25", icon: "text-success-6" },
  warning: { root: "ring-warning-3/25", icon: "text-warning-7" },
  error: { root: "ring-error-3/25", icon: "text-error-6" },
}

/** close / actions 支持节点形式 */
function isCloseNode(value: unknown): value is React.ReactNode {
  return React.isValidElement(value)
}

function handleClose(fn?: (event: React.MouseEvent<HTMLButtonElement>) => void, onCloseToast?: () => void) {
  return (event: React.MouseEvent<HTMLButtonElement>) => {
    fn?.(event)
    onCloseToast?.()
  }
}

/** XToast 单条通知结构组件 */
export function XToast({
  title,
  description,
  icon,
  avatar,
  color = "primary",
  orientation = "vertical",
  close = true,
  closeIcon = "x",
  actions,
  action,
  cancel,
  leading,
  progress = true,
  duration = 3000,
  ui,
  className,
  onCloseToast,
  isPaused = false,
}: XToastProps) {
  const closeVisible = close !== false
  const closeConfig = typeof close === "object" && close !== null && !isCloseNode(close) ? close : {}
  const hasActions = (Array.isArray(actions) ? actions.length > 0 : actions != null) || !!(action || cancel)
  const progressEnabled = progress !== false
  const progressConfig = typeof progress === "object" && progress !== null ? progress : {}

  /**
   * 剩余时长进度：rAF 每帧更新，悬停时暂停累计，
   * 与容器侧的自动关闭计时保持同步。
   */
  const [hovered, setHovered] = React.useState(false)
  const [remaining, setRemaining] = React.useState(duration)
  const paused = isPaused || hovered
  const startRef = React.useRef(Date.now())
  const pauseStartRef = React.useRef(0)
  const pausedTotalRef = React.useRef(0)

  React.useEffect(() => {
    if (paused) {
      pauseStartRef.current = Date.now()
    } else if (pauseStartRef.current > 0) {
      pausedTotalRef.current += Date.now() - pauseStartRef.current
      pauseStartRef.current = 0
    }
  }, [paused])

  React.useEffect(() => {
    if (duration <= 0) return
    let rafId = 0
    function tick() {
      const now = Date.now()
      const activePause = pauseStartRef.current > 0 ? now - pauseStartRef.current : 0
      const elapsed = now - startRef.current - pausedTotalRef.current - activePause
      const next = Math.max(0, duration - elapsed)
      setRemaining(next)
      if (next > 0) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [duration])

  const remainingPercent = duration > 0 ? (remaining / duration) * 100 : 0

  const actionButtons = (
    <>
      {Array.isArray(actions) &&
        actions.map((item, index) => (
          <XButton key={index} size="xs" color={color} {...item} onClick={handleClose(item.onClick, onCloseToast)} />
        ))}
      {action && (
        <XButton size="xs" color={color} variant="soft" label={action.label} onClick={handleClose(action.onClick, onCloseToast)} />
      )}
      {cancel && (
        <XButton size="xs" variant="ghost" color="neutral" label={cancel.label} onClick={handleClose(cancel.onClick, onCloseToast)} />
      )}
    </>
  )

  return (
    <div
      data-slot="root"
      data-orientation={orientation}
      className={cn(
        "relative flex gap-2.5 overflow-hidden rounded-lg bg-popover p-4 shadow-lg ring-1 ring-border",
        toastColorClasses[color].root,
        orientation === "horizontal" ? "items-center" : "items-start",
        ui?.root,
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {leading != null ? (
        leading
      ) : avatar ? (
        <XAvatar {...avatar} size={ui?.avatarSize ?? avatar.size ?? "md"} data-slot="avatar" className={cn("shrink-0", ui?.avatar)} />
      ) : icon ? (
        <XIcon name={icon} data-slot="icon" className={cn("shrink-0 size-5", toastColorClasses[color].icon, ui?.icon)} />
      ) : null}

      <div data-slot="wrapper" className={cn("flex min-w-0 flex-1 flex-col", ui?.wrapper)}>
        {title != null && (
          <div data-slot="title" className={cn("text-sm font-medium", ui?.title)}>
            {title}
          </div>
        )}
        {description != null && (
          <div data-slot="description" className={cn("text-sm text-muted-foreground", title != null && "mt-1", ui?.description)}>
            {description}
          </div>
        )}

        {orientation === "vertical" && hasActions && (
          <div data-slot="actions" className={cn("mt-2.5 flex shrink-0 flex-wrap items-start gap-1.5", ui?.actions)}>
            {isCloseNode(actions) ? actions : actionButtons}
          </div>
        )}
      </div>

      {(orientation === "horizontal" && hasActions) || closeVisible ? (
        <div
          data-slot="actions"
          className={cn("flex shrink-0 flex-wrap gap-1.5", orientation === "horizontal" ? "items-center" : "items-start", ui?.actions)}
        >
          {orientation === "horizontal" && hasActions && (isCloseNode(actions) ? actions : actionButtons)}
          {closeVisible &&
            (isCloseNode(close) ? (
              close
            ) : (
              <XButton
                variant="link"
                color="neutral"
                size="md"
                aria-label="关闭"
                leading={<XIcon name={closeIcon} size="sm" />}
                {...closeConfig}
                className={cn("p-0", ui?.close)}
                onClick={onCloseToast}
              />
            ))}
        </div>
      ) : null}

      {progressEnabled && duration > 0 && remaining > 0 && (
        <XProgress
          value={remainingPercent}
          color={progressConfig.color ?? color}
          ui={progressConfig.ui}
          className={cn("absolute inset-x-0 bottom-0", ui?.progress)}
        />
      )}
    </div>
  )
}

/** 挂载通知容器（放在应用根部） */
export function XToaster() {
  return <Toaster position="top-right" />
}

/** 显示通知的选项（不含内部回调） */
export type XToastOptions = Omit<XToastProps, "onCloseToast" | "isPaused"> & {
  /** 通知 id，相同 id 的调用会复用同一条通知 */
  id?: string | number
}

/** 全局通知 API */
export const toast = {
  /** 显示通知，返回 toast id */
  show(options: XToastOptions): string | number {
    const { id, duration = 3000, ...rest } = options
    return sonnerToast.custom(
      (toastId) => <XToast {...rest} duration={duration} onCloseToast={() => sonnerToast.dismiss(toastId)} />,
      { duration, id },
    )
  },
  /** 关闭通知 */
  dismiss(id?: string | number) {
    sonnerToast.dismiss(id)
  },
}
