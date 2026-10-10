/**
 * XSlideover 侧滑面板：与 Nuxt UI Slideover 对齐的侧边滑入面板。
 * 属性、插槽与 ui 主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）一比一对应。
 * 支持 side 四向、inset 内嵌与 dismissible 关闭策略。
 */
import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"
import { XButton } from "@/components/kit/x-button"
import type { XButtonColor, XButtonSize, XButtonVariant } from "@/components/kit/x-button"
import { cn } from "@/lib/utils"

/** close 为对象时透传给关闭按钮的属性 */
export type XSlideoverClose =
  | boolean
  | {
      size?: XButtonSize
      color?: XButtonColor
      variant?: XButtonVariant
    }

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XSlideoverUi {
  overlay?: string
  content?: string
  header?: string
  wrapper?: string
  body?: string
  footer?: string
  title?: string
  description?: string
  close?: string
}

export interface XSlideoverProps {
  /** 标题 */
  title?: React.ReactNode
  /** 辅助说明 */
  description?: React.ReactNode
  /** 是否打开（受控） */
  open?: boolean
  /** 初始是否打开 */
  defaultOpen?: boolean
  /** 模态：聚焦锁定与遮罩拦截 */
  modal?: boolean
  /** 关闭后卸载内容 */
  unmountOnHide?: boolean
  /** 渲染遮罩 */
  overlay?: boolean
  /** 开关动画 */
  transition?: boolean
  /** 滑入方向 */
  side?: "top" | "right" | "bottom" | "left"
  /** 与屏幕边缘保留间距 */
  inset?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 显示关闭按钮（对象透传给按钮，元素作为 close 插槽渲染） */
  close?: XSlideoverClose | React.ReactNode
  /** 关闭按钮图标 */
  closeIcon?: React.ReactNode
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  className?: string
  /** 主题插槽类名 */
  ui?: XSlideoverUi
  /** 触发元素（对应 default 插槽） */
  children?: React.ReactNode
  /** 内容（对应 content 插槽，替换默认 header / body / footer） */
  content?: React.ReactNode
  /** 头部（对应 header 插槽） */
  header?: React.ReactNode
  /** 头部操作区（对应 actions 插槽） */
  actions?: React.ReactNode
  /** 正文（对应 body 插槽） */
  body?: React.ReactNode
  /** 底部（对应 footer 插槽） */
  footer?: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean, details: DialogPrimitive.Root.ChangeEventDetails) => void
  /** 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） */
  onClosePrevent?: () => void
}

/** 内容面板定位：side + inset 组合 */
const contentPositionClasses: Record<NonNullable<XSlideoverProps["side"]>, { plain: string; inset: string }> = {
  top: {
    plain: "inset-x-0 top-0 max-h-full",
    inset: "inset-x-4 top-4 max-h-[calc(100%-2rem)]",
  },
  right: {
    plain: "inset-y-0 right-0 w-full max-w-md",
    inset: "inset-y-4 right-4 w-[calc(100%-2rem)]",
  },
  bottom: {
    plain: "inset-x-0 bottom-0 max-h-full",
    inset: "inset-x-4 bottom-4 max-h-[calc(100%-2rem)]",
  },
  left: {
    plain: "inset-y-0 left-0 w-full max-w-md",
    inset: "inset-y-4 left-4 w-[calc(100%-2rem)]",
  },
}

/** 内容面板进出场动画方向 */
const contentAnimationClasses: Record<NonNullable<XSlideoverProps["side"]>, string> = {
  top: "data-[side=top]:data-open:slide-in-from-top data-[side=top]:data-closed:slide-out-to-top",
  right: "data-[side=right]:data-open:slide-in-from-right data-[side=right]:data-closed:slide-out-to-right",
  bottom: "data-[side=bottom]:data-open:slide-in-from-bottom data-[side=bottom]:data-closed:slide-out-to-bottom",
  left: "data-[side=left]:data-open:slide-in-from-left data-[side=left]:data-closed:slide-out-to-left",
}

export function XSlideover({
  title,
  description,
  open,
  defaultOpen,
  modal = true,
  unmountOnHide,
  overlay = true,
  transition = true,
  side = "right",
  inset = false,
  portal = true,
  close = true,
  closeIcon = <XIcon className="size-4" />,
  dismissible = true,
  className,
  ui,
  children,
  content,
  header,
  actions,
  body,
  footer,
  onOpenChange,
  onClosePrevent,
}: XSlideoverProps) {
  const actionsRef = React.useRef<DialogPrimitive.Root.Actions | null>(null)

  /* dismissible 为 false 时拦截外部点击与 Esc 关闭 */
  function handleOpenChange(next: boolean, details: DialogPrimitive.Root.ChangeEventDetails) {
    if (!dismissible && !next && (details.reason === "outside-press" || details.reason === "escape-key")) {
      details.cancel()
      onClosePrevent?.()
      return
    }
    onOpenChange?.(next, details)
  }

  /* close 为元素或文本时作为 close 插槽渲染，布尔与对象作为按钮配置 */
  const closeSlot =
    React.isValidElement(close) || typeof close === "string" || typeof close === "number" ? close : undefined
  const showHeader =
    header != null || title != null || description != null || (close !== false && close != null)
  const closeProps = typeof close === "object" && !React.isValidElement(close) ? close : {}

  /* 无标题或使用 content 插槽时渲染隐藏标题，保证可访问性 */
  const hiddenTitle = title == null || content != null
  const hiddenDescription = description == null || content != null

  const panel = (
    <DialogPrimitive.Popup
      data-slot="content"
      data-side={side}
      className={cn(
        "bg-background divide-y divide-border sm:ring-1 ring-border sm:shadow-lg flex flex-col focus:outline-none fixed z-50",
        inset && "rounded-lg",
        contentPositionClasses[side][inset ? "inset" : "plain"],
        transition &&
          cn(
            "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
            contentAnimationClasses[side],
          ),
        children == null && className,
        ui?.content,
      )}
    >
      {(hiddenTitle || hiddenDescription) && (
        <>
          {hiddenTitle && <DialogPrimitive.Title render={<span className="sr-only" />}>{title}</DialogPrimitive.Title>}
          {hiddenDescription && (
            <DialogPrimitive.Description render={<span className="sr-only" />}>{description}</DialogPrimitive.Description>
          )}
        </>
      )}

      {content ?? (
        <>
          {showHeader && (
            <div data-slot="header" className={cn("flex items-center gap-1.5 p-4 sm:px-6", ui?.header)}>
              {header ?? (
                <>
                  {(title != null || description != null) && (
                    <div data-slot="wrapper" className={cn("min-w-0 flex-1", ui?.wrapper)}>
                      {title != null && (
                        <DialogPrimitive.Title data-slot="title" className={cn("text-foreground font-semibold", ui?.title)}>
                          {title}
                        </DialogPrimitive.Title>
                      )}
                      {description != null && (
                        <DialogPrimitive.Description
                          data-slot="description"
                          className={cn("mt-1 text-muted-foreground text-sm", ui?.description)}
                        >
                          {description}
                        </DialogPrimitive.Description>
                      )}
                    </div>
                  )}

                  {actions}

                  {(close !== false && close != null) && (
                    <DialogPrimitive.Close
                      render={
                        closeSlot != null && React.isValidElement(closeSlot)
                          ? closeSlot
                          : (
                              <XButton
                                data-slot="close"
                                color="neutral"
                                variant="ghost"
                                square
                                aria-label="关闭"
                                className={cn("absolute top-4 right-4", ui?.close)}
                                {...closeProps}
                              />
                            )
                      }
                    >
                      {closeSlot == null ? closeIcon : null}
                    </DialogPrimitive.Close>
                  )}
                </>
              )}
            </div>
          )}

          <div data-slot="body" className={cn("flex-1 overflow-y-auto p-4 sm:p-6", ui?.body)}>
            {body}
          </div>

          {footer != null && (
            <div data-slot="footer" className={cn("flex items-center gap-1.5 p-4 sm:px-6", ui?.footer)}>
              {footer}
            </div>
          )}
        </>
      )}
    </DialogPrimitive.Popup>
  )

  return (
    <DialogPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      modal={modal}
      actionsRef={actionsRef}
      onOpenChange={handleOpenChange}
      onOpenChangeComplete={
        unmountOnHide
          ? (next) => {
              if (!next) actionsRef.current?.unmount()
            }
          : undefined
      }
    >
      {children != null && (
        <DialogPrimitive.Trigger
          render={React.isValidElement(children) ? children : undefined}
          className={className}
        >
          {React.isValidElement(children) ? undefined : children}
        </DialogPrimitive.Trigger>
      )}
      {portal ? (
        <DialogPrimitive.Portal>
          {overlay && (
            <DialogPrimitive.Backdrop
              data-slot="overlay"
              className={cn(
                "fixed inset-0 z-50 bg-black/50",
                transition &&
                  "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
                ui?.overlay,
              )}
            />
          )}
          {panel}
        </DialogPrimitive.Portal>
      ) : (
        <>
          {overlay && (
            <DialogPrimitive.Backdrop
              data-slot="overlay"
              className={cn(
                "fixed inset-0 z-50 bg-black/50",
                transition &&
                  "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
                ui?.overlay,
              )}
            />
          )}
          {panel}
        </>
      )}
    </DialogPrimitive.Root>
  )
}

/* ============================ hook ============================ */

import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XSlideoverApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、说明、方向、内嵌等） */
  setState: (patch: Pick<Partial<XSlideoverProps>, "title" | "description" | "side" | "inset">) => void
  /** 写入共享数据，供面板内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
}

/** 创建与 api 绑定的侧滑面板：调用即得 [Slideover, slideoverApi] */
export function useXSlideover({ defaultOpen = false, ...componentProps }: Partial<XSlideoverProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      description: componentProps.description,
      side: componentProps.side,
      inset: componentProps.inset,
    }),
  )[0]

  /** 与面板共享的数据载荷 */
  const payload = React.useRef<Record<string, unknown>>({})

  const api = React.useMemo<XSlideoverApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
      setState: (patch) => store.set(patch),
      setData: (data: object) => {
        payload.current = data as Record<string, unknown>
      },
      getData: <T extends object = Record<string, unknown>>() => payload.current as T,
    }),
    [],
  )

  const Slideover = React.useMemo(() => {
    return function BoundSlideover(props: Partial<XSlideoverProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XSlideover
          {...componentProps}
          {...props}
          open={state.open}
          title={state.title ?? props.title}
          description={state.description ?? props.description}
          side={state.side ?? props.side}
          inset={state.inset ?? props.inset}
          onOpenChange={(next, details) => {
            store.set({ open: next })
            props.onOpenChange?.(next, details)
          }}
        />
      )
    }
  }, [])

  return [Slideover, api] as const
}
