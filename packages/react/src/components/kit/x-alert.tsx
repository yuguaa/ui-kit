/**
 * XAlert 警告提示：
 * 在语义色（color × variant）上提供标题、描述、图标/头像、操作区与受控关闭按钮。
 * leading / title / description / actions / close 与 Nuxt UI 插槽对齐，
 * icon / message 为 kit 既有用法保留。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { CircleAlert, CircleCheck, Info, OctagonX } from "lucide-react"
import { XAvatar, type XAvatarProps } from "@/components/kit/x-avatar"
import { XButton, type XButtonProps } from "@/components/kit/x-button"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XAlertType = "success" | "info" | "warning" | "error"
export type XAlertColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XAlertVariant = "solid" | "outline" | "soft" | "subtle"
export type XAlertOrientation = "vertical" | "horizontal"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XAlertUi {
  root?: string
  wrapper?: string
  title?: string
  description?: string
  icon?: string
  avatar?: string
  avatarSize?: XAvatarProps["size"]
  actions?: string
  close?: string
}

/** 按钮配置：close 对象与 actions 数组共用，整体透传给 XButton */
export type XAlertButtonProps = Partial<XButtonProps>

/** 变体 × 语义色样式（字面量，保证 Tailwind 可扫描） */
const alertColorClasses: Record<XAlertColor, Record<XAlertVariant, string>> = {
  primary: {
    solid: "bg-primary text-background",
    outline: "text-primary ring-1 ring-inset ring-primary/25",
    soft: "bg-primary/10 text-primary",
    subtle: "bg-primary/10 text-primary ring-1 ring-inset ring-primary/25",
  },
  secondary: {
    solid: "bg-secondary text-secondary-foreground",
    outline: "text-foreground ring-1 ring-inset ring-border",
    soft: "bg-muted text-secondary-foreground",
    subtle: "bg-muted text-secondary-foreground ring-1 ring-inset ring-border",
  },
  neutral: {
    solid: "bg-foreground text-background",
    outline: "text-foreground ring-1 ring-inset ring-border",
    soft: "bg-muted text-foreground",
    subtle: "bg-muted text-foreground ring-1 ring-inset ring-border",
  },
  success: {
    solid: "bg-success text-background",
    outline: "text-success ring-1 ring-inset ring-success/25",
    soft: "bg-success/10 text-success",
    subtle: "bg-success/10 text-success ring-1 ring-inset ring-success/25",
  },
  info: {
    solid: "bg-info text-background",
    outline: "text-info ring-1 ring-inset ring-info/25",
    soft: "bg-info/10 text-info",
    subtle: "bg-info/10 text-info ring-1 ring-inset ring-info/25",
  },
  warning: {
    solid: "bg-warning text-background",
    outline: "text-warning ring-1 ring-inset ring-warning/25",
    soft: "bg-warning/10 text-warning",
    subtle: "bg-warning/10 text-warning ring-1 ring-inset ring-warning/25",
  },
  error: {
    solid: "bg-error text-background",
    outline: "text-error ring-1 ring-inset ring-error/25",
    soft: "bg-error/10 text-error",
    subtle: "bg-error/10 text-error ring-1 ring-inset ring-error/25",
  },
}

/** 类型默认图标（showIcon 时使用） */
const alertTypeIcons: Record<XAlertType, React.ReactNode> = {
  success: <CircleCheck className="size-5" />,
  info: <Info className="size-5" />,
  warning: <CircleAlert className="size-5" />,
  error: <OctagonX className="size-5" />,
}

export interface XAlertProps
  extends Omit<React.ComponentProps<"div">, "children" | "title" | "role" | "className"> {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 根元素类名 */
  className?: string
  /** 提示类型，作为 color 的回退（kit 既有属性） */
  type?: XAlertType
  /** 语义色 */
  color?: XAlertColor
  /** 预设样式 */
  variant?: XAlertVariant
  /** 内容与操作区的排列方向 */
  orientation?: XAlertOrientation
  /** 提示标题（与 message 并存，优先于 message） */
  title?: React.ReactNode
  /** 提示标题（kit 既有属性） */
  message?: React.ReactNode
  /** 辅助说明文字 */
  description?: React.ReactNode
  /** 图标名或自定义图标 */
  icon?: XIconName | React.ReactNode
  /** 显示类型默认图标（kit 既有属性） */
  showIcon?: boolean
  /** 头像配置 */
  avatar?: XAvatarProps
  /** 前置内容 */
  leading?: React.ReactNode
  /** 操作按钮列表，纵向时位于内容下方，横向时位于内容右侧；也可直接传入自定义内容 */
  actions?: React.ReactNode | XAlertButtonProps[]
  /** 显示关闭按钮，点击后 open 置为 false */
  close?: boolean | XAlertButtonProps
  /** 自定义关闭按钮（对应 close 插槽） */
  closeSlot?: React.ReactNode
  /** 显示关闭按钮（kit 既有属性） */
  closable?: boolean
  /** 关闭按钮图标 */
  closeIcon?: XIconName
  /** 受控关闭模型 */
  open?: boolean
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 点击关闭按钮时的回调（kit 既有事件） */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** 主题插槽类名 */
  ui?: XAlertUi
}

export function XAlert({
  render,
  type,
  color,
  variant = "solid",
  orientation = "vertical",
  title,
  message,
  description,
  icon,
  showIcon = false,
  avatar,
  leading,
  actions,
  close = false,
  closeSlot,
  closable = false,
  closeIcon = "x",
  open,
  onOpenChange,
  onClose,
  ui,
  className,
  ...rest
}: XAlertProps) {
  /* 非受控时内部维护显隐，受控时跟随 open */
  const [internalOpen, setInternalOpen] = React.useState(true)
  const visible = open ?? internalOpen

  const effectiveColor = color ?? type ?? "primary"
  const heading = title ?? message
  const hasClose = closable || !!close
  const closeButtonProps = typeof close === "object" && close !== null ? close : {}

  /* actions 为配置数组时渲染为 xs 尺寸的按钮列表，否则原样渲染 */
  const actionList = Array.isArray(actions) ? (actions as XAlertButtonProps[]) : null
  const actionNodes: React.ReactNode = actionList
    ? actionList.map((action, index) => <XButton key={index} size="xs" {...action} />)
    : (actions as React.ReactNode)
  const hasActions = actionList ? actionList.length > 0 : actions != null

  function handleClose(event: React.MouseEvent<HTMLButtonElement>) {
    onClose?.(event)
    onOpenChange?.(false)
    setInternalOpen(false)
  }

  /* enabled 为 false 时不渲染，保持 hook 顺序稳定 */
  return useRender({
    defaultTagName: "div",
    enabled: visible,
    props: {
      "data-orientation": orientation,
      role: "alert",
      className: cn(
        "relative flex w-full gap-2.5 overflow-hidden rounded-lg p-4",
        orientation === "horizontal" ? "items-center" : "items-start",
        alertColorClasses[effectiveColor][variant],
        ui?.root,
        className,
      ),
      children: (
        <>
            {leading != null ? (
              leading
            ) : avatar != null ? (
              <XAvatar
                {...avatar}
                data-slot="avatar"
                size={ui?.avatarSize ?? avatar.size}
                className={cn("shrink-0", ui?.avatar)}
              />
            ) : icon != null ? (
              typeof icon === "string" ? (
                <XIcon
                  name={icon as XIconName}
                  data-slot="icon"
                  className={cn("shrink-0 size-5", ui?.icon)}
                />
              ) : (
                <span data-slot="icon" className={cn("shrink-0", ui?.icon)}>
                  {icon}
                </span>
              )
            ) : showIcon ? (
              <span data-slot="icon" className={cn("shrink-0", ui?.icon)}>
                {alertTypeIcons[type ?? "info"]}
              </span>
            ) : null}

            <div data-slot="wrapper" className={cn("flex min-w-0 flex-1 flex-col", ui?.wrapper)}>
              {heading != null && (
                <div data-slot="title" className={cn("text-sm font-medium", ui?.title)}>
                  {heading}
                </div>
              )}
              {description != null && (
                <div
                  data-slot="description"
                  className={cn("text-sm opacity-90", heading != null && "mt-1", ui?.description)}
                >
                  {description}
                </div>
              )}
              {orientation === "vertical" && hasActions && (
                <div
                  data-slot="actions"
                  className={cn("mt-2.5 flex shrink-0 flex-wrap items-start gap-1.5", ui?.actions)}
                >
                  {actionNodes}
                </div>
              )}
            </div>

            {((orientation === "horizontal" && hasActions) || hasClose) && (
              <div
                data-slot="actions"
                className={cn(
                  "flex shrink-0 flex-wrap gap-1.5",
                  orientation === "horizontal" ? "items-center" : "items-start",
                  ui?.actions,
                )}
              >
                {orientation === "horizontal" && actionNodes}
                {hasClose &&
                  (closeSlot ?? (
                    <XButton
                      variant="link"
                      color="neutral"
                      size="md"
                      aria-label="关闭"
                      leading={<XIcon name={closeIcon} size="sm" />}
                      {...closeButtonProps}
                      onClick={(event) => {
                        closeButtonProps.onClick?.(event)
                        handleClose(event)
                      }}
                      className={cn("p-0", ui?.close, closeButtonProps.className)}
                    />
                  ))}
              </div>
            )}
          </>
        ),
      ...rest,
    },
    render,
    state: { slot: "root" },
  })
}
