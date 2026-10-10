/**
 * XModal 对话框：与 Nuxt UI Modal 对齐的模态对话框。
 * 属性、插槽与 ui 主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）一比一对应。
 * 支持 scrollable 滚动遮罩、fullscreen 全屏、close 关闭按钮、dismissible 关闭策略。
 */
import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"
import { XButton } from "@/components/kit/x-button"
import type { XButtonColor, XButtonSize, XButtonVariant } from "@/components/kit/x-button"
import { cn } from "@/lib/utils"

/** close 为对象时透传给关闭按钮的属性 */
export type XModalClose =
  | boolean
  | {
      size?: XButtonSize
      color?: XButtonColor
      variant?: XButtonVariant
    }

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XModalUi {
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

export interface XModalProps {
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
  /** 滚动遮罩模式：内容随遮罩滚动居中 */
  scrollable?: boolean
  /** 开关动画 */
  transition?: boolean
  /** 全屏模式 */
  fullscreen?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 显示关闭按钮（对象透传给按钮，元素作为 close 插槽渲染） */
  close?: XModalClose | React.ReactNode
  /** 关闭按钮图标 */
  closeIcon?: React.ReactNode
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  className?: string
  /** 主题插槽类名 */
  ui?: XModalUi
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

export function XModal({
  title,
  description,
  open,
  defaultOpen,
  modal = true,
  unmountOnHide,
  overlay = true,
  scrollable = false,
  transition = true,
  fullscreen = false,
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
}: XModalProps) {
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
  const showHeader = header != null || title != null || description != null || (close !== false && close != null)
  const showWrapper = title != null || description != null
  const closeProps = typeof close === "object" && !React.isValidElement(close) ? close : {}

  /* 无标题或使用 content 插槽时渲染隐藏标题，保证可访问性 */
  const hiddenTitle = title == null || content != null
  const hiddenDescription = description == null || content != null

  const panel = (
    <DialogPrimitive.Popup
      data-slot="content"
      className={cn(
        "bg-background divide-y divide-border flex flex-col focus:outline-none z-50",
        transition &&
          "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        fullscreen
          ? "inset-0"
          : "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring-1 ring-border",
        scrollable
          ? "relative"
          : fullscreen
            ? "fixed"
            : "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden origin-center",
        children == null && className,
        ui?.content,
      )}
    >
      {(hiddenTitle || hiddenDescription) && (
        <>
          {hiddenTitle && (
            <DialogPrimitive.Title render={<span className="sr-only" />}>{title}</DialogPrimitive.Title>
          )}
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
                  {showWrapper && (
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

          {body != null && (
            <div data-slot="body" className={cn("flex-1 p-4 sm:p-6", !scrollable && "overflow-y-auto", ui?.body)}>
              {body}
            </div>
          )}

          {footer != null && (
            <div data-slot="footer" className={cn("flex items-center gap-1.5 p-4 sm:px-6", ui?.footer)}>
              {footer}
            </div>
          )}
        </>
      )}
    </DialogPrimitive.Popup>
  )

  const overlayElement = scrollable ? (
    <DialogPrimitive.Backdrop
      data-slot="overlay"
      className={cn(
        "fixed inset-0 z-50",
        overlay && "bg-black/50",
        transition &&
          "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        "overflow-y-auto grid place-items-center p-4 sm:py-8",
        ui?.overlay,
      )}
    >
      {panel}
    </DialogPrimitive.Backdrop>
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
      {portal ? <DialogPrimitive.Portal>{overlayElement}</DialogPrimitive.Portal> : overlayElement}
    </DialogPrimitive.Root>
  )
}

/* ============================ hook ============================ */

import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XModalApi {
  /** 打开对话框 */
  open: () => void
  /** 关闭对话框 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、说明、全屏等） */
  setState: (patch: Pick<Partial<XModalProps>, "title" | "description" | "fullscreen">) => void
  /** 写入共享数据，供对话框内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
}

/**
 * 创建与 api 绑定的对话框：调用即得 [Modal, modalApi]。
 * 组件引用稳定，状态通过 api 控制，props 用法仍然成立。
 */
export function useXModal({ defaultOpen = false, ...componentProps }: Partial<XModalProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      description: componentProps.description,
      fullscreen: componentProps.fullscreen,
    }),
  )[0]

  /** 与对话框共享的数据载荷 */
  const payload = React.useRef<Record<string, unknown>>({})

  const api = React.useMemo<XModalApi>(
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

  const Modal = React.useMemo(() => {
    return function BoundModal(props: Partial<XModalProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XModal
          {...componentProps}
          {...props}
          open={state.open}
          title={state.title ?? props.title}
          description={state.description ?? props.description}
          fullscreen={state.fullscreen ?? props.fullscreen}
          onOpenChange={(next, details) => {
            store.set({ open: next })
            props.onOpenChange?.(next, details)
          }}
        />
      )
    }
  }, [])

  return [Modal, api] as const
}
