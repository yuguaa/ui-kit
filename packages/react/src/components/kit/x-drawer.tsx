/**
 * XDrawer 抽屉：与 Nuxt UI Drawer 对齐的抽屉面板。
 * 属性、插槽与 ui 主题插槽键（overlay / content / handle / container / header / wrapper / title / description / actions / body / footer / close）一比一对应。
 * 支持方向、inset 内嵌、handle 拖拽把手与 close 关闭按钮。
 */
import * as React from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer"
import { XIcon } from "lucide-react"
import { XButton } from "@/components/kit/x-button"
import type { XButtonColor, XButtonSize, XButtonVariant } from "@/components/kit/x-button"
import { cn } from "@/lib/utils"

/** close 为对象时透传给关闭按钮的属性 */
export type XDrawerClose =
  | boolean
  | {
      size?: XButtonSize
      color?: XButtonColor
      variant?: XButtonVariant
    }

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XDrawerUi {
  overlay?: string
  content?: string
  handle?: string
  container?: string
  header?: string
  wrapper?: string
  title?: string
  description?: string
  actions?: string
  body?: string
  footer?: string
  close?: string
}

export interface XDrawerProps {
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
  /** 滑出方向 */
  direction?: "top" | "right" | "bottom" | "left"
  /** 预设停靠位置（0-1 比例或像素值） */
  snapPoints?: (number | string)[]
  /** 渲染遮罩 */
  overlay?: boolean
  /** 渲染拖拽把手 */
  handle?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 嵌套在另一个抽屉中（嵌套关系由底层原语自动识别） */
  nested?: boolean
  /** 与屏幕边缘保留间距 */
  inset?: boolean
  /** 显示关闭按钮（对象透传给按钮，元素作为 close 插槽渲染） */
  close?: XDrawerClose | React.ReactNode
  /** 关闭按钮图标 */
  closeIcon?: React.ReactNode
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  className?: string
  /** 主题插槽类名 */
  ui?: XDrawerUi
  /** 触发元素（对应 default 插槽） */
  children?: React.ReactNode
  /** 内容（对应 content 插槽，替换默认 container） */
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
  onOpenChange?: (open: boolean, details: DrawerPrimitive.Root.ChangeEventDetails) => void
  /** 关闭被阻止（dismissible 为 false 时点击外部、按 Esc 或拖拽） */
  onClosePrevent?: () => void
}

/** Nuxt 方向（top / bottom）映射到 Base UI 的滑动方向（up / down） */
const swipeDirectionMap: Record<NonNullable<XDrawerProps["direction"]>, NonNullable<DrawerPrimitive.Root.Props["swipeDirection"]>> = {
  top: "up",
  right: "right",
  bottom: "down",
  left: "left",
}

/** 内容面板定位：方向 + inset 组合 */
const contentPositionClasses: Record<NonNullable<XDrawerProps["direction"]>, { plain: string; inset: string }> = {
  top: {
    plain:
      "data-[swipe-direction=up]:inset-x-0 data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:mb-24 data-[swipe-direction=up]:max-h-[96%] data-[swipe-direction=up]:rounded-b-lg data-[swipe-direction=up]:border-b data-[swipe-direction=up]:border-border data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:var(--drawer-swipe-movement-y,0px)]",
    inset:
      "data-[swipe-direction=up]:inset-x-4 data-[swipe-direction=up]:top-4 rounded-lg overflow-hidden data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:var(--drawer-swipe-movement-y,0px)]",
  },
  right: {
    plain:
      "data-[swipe-direction=right]:inset-y-0 data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:max-w-[calc(100%-2rem)] data-[swipe-direction=right]:rounded-l-lg data-[swipe-direction=right]:border-l data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:var(--drawer-swipe-movement-x,0px)]",
    inset:
      "data-[swipe-direction=right]:inset-y-4 data-[swipe-direction=right]:right-4 rounded-lg overflow-hidden data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:var(--drawer-swipe-movement-x,0px)]",
  },
  bottom: {
    plain:
      "data-[swipe-direction=down]:inset-x-0 data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:mt-24 data-[swipe-direction=down]:max-h-[96%] data-[swipe-direction=down]:rounded-t-lg data-[swipe-direction=down]:border-t data-[swipe-direction=down]:border-border data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:var(--drawer-swipe-movement-y,0px)]",
    inset:
      "data-[swipe-direction=down]:inset-x-4 data-[swipe-direction=down]:bottom-4 rounded-lg overflow-hidden data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:var(--drawer-swipe-movement-y,0px)]",
  },
  left: {
    plain:
      "data-[swipe-direction=left]:inset-y-0 data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:max-w-[calc(100%-2rem)] data-[swipe-direction=left]:rounded-r-lg data-[swipe-direction=left]:border-r data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:var(--drawer-swipe-movement-x,0px)]",
    inset:
      "data-[swipe-direction=left]:inset-y-4 data-[swipe-direction=left]:left-4 rounded-lg overflow-hidden data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:var(--drawer-swipe-movement-x,0px)]",
  },
}

/** 拖拽把手：方向决定尺寸与位置 */
const handleClasses: Record<NonNullable<XDrawerProps["direction"]>, string> = {
  top: "mb-4 !w-12 !h-1.5 mx-auto rounded-full",
  right: "!ml-4 !h-12 !w-1.5 my-auto rounded-full",
  bottom: "mt-4 !w-12 !h-1.5 mx-auto rounded-full",
  left: "!mr-4 !h-12 !w-1.5 my-auto rounded-full",
}

export function XDrawer({
  title,
  description,
  open,
  defaultOpen,
  modal = true,
  direction = "bottom",
  snapPoints,
  overlay = true,
  handle = true,
  portal = true,
  nested = false,
  inset = false,
  close = false,
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
}: XDrawerProps) {
  /* dismissible 为 false 时拦截外部点击、Esc 与拖拽关闭 */
  function handleOpenChange(next: boolean, details: DrawerPrimitive.Root.ChangeEventDetails) {
    if (
      !dismissible &&
      !next &&
      (details.reason === "outside-press" || details.reason === "escape-key" || details.reason === "swipe")
    ) {
      details.cancel()
      onClosePrevent?.()
      return
    }
    onOpenChange?.(next, details)
  }

  const swipeDirection = swipeDirectionMap[direction]
  const positionClass = inset ? contentPositionClasses[direction].inset : contentPositionClasses[direction].plain
  /* close 为元素或文本时作为 close 插槽渲染，布尔与对象作为按钮配置 */
  const closeSlot =
    React.isValidElement(close) || typeof close === "string" || typeof close === "number" ? close : undefined
  const showHeader =
    header != null || title != null || description != null || (close !== false && close != null) || actions != null
  const showActions = actions != null || (close !== false && close != null)
  const closeProps = typeof close === "object" && !React.isValidElement(close) ? close : {}

  /* 无标题或使用 content 插槽时渲染隐藏标题，保证可访问性 */
  const hiddenTitle = title == null || content != null
  const hiddenDescription = description == null || content != null

  const panel = (
    <DrawerPrimitive.Popup
      data-slot="content"
      className={cn(
        "group/drawer-popup pointer-events-auto fixed z-50 flex flex-col bg-background text-sm outline-none select-none",
        "transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)] will-change-transform",
        "transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0",
        "data-ending-style:transform-(--closed-transform) data-starting-style:transform-(--closed-transform)",
        "m-(--drawer-inset,0px)",
        direction === "top" || direction === "bottom" ? "flex-col" : "flex-row",
        positionClass,
        children == null && className,
        ui?.content,
      )}
      style={{ "--drawer-inset": inset ? "1rem" : undefined } as React.CSSProperties}
    >
      {handle && !nested && <div data-slot="handle" aria-hidden="true" className={cn("shrink-0 bg-border", handleClasses[direction], ui?.handle)} />}

      {(hiddenTitle || hiddenDescription) && (
        <>
          {hiddenTitle && <DrawerPrimitive.Title render={<span className="sr-only" />}>{title}</DrawerPrimitive.Title>}
          {hiddenDescription && (
            <DrawerPrimitive.Description render={<span className="sr-only" />}>{description}</DrawerPrimitive.Description>
          )}
        </>
      )}

      {content ?? (
        <div data-slot="container" className={cn("w-full flex flex-col gap-4 p-4 overflow-y-auto", ui?.container)}>
          {showHeader && (
            <div data-slot="header" className={cn("flex items-center gap-1.5", ui?.header)}>
              {header ?? (
                <>
                  {(title != null || description != null) && (
                    <div data-slot="wrapper" className={cn("min-w-0 flex-1", ui?.wrapper)}>
                      {title != null && (
                        <DrawerPrimitive.Title data-slot="title" className={cn("text-foreground font-semibold", ui?.title)}>
                          {title}
                        </DrawerPrimitive.Title>
                      )}
                      {description != null && (
                        <DrawerPrimitive.Description
                          data-slot="description"
                          className={cn("mt-1 text-muted-foreground text-sm", ui?.description)}
                        >
                          {description}
                        </DrawerPrimitive.Description>
                      )}
                    </div>
                  )}

                  {showActions && (
                    <div data-slot="actions" className={cn("flex items-center gap-1.5 shrink-0 ms-auto", ui?.actions)}>
                      {actions}

                      {(close !== false && close != null) && (
                        <DrawerPrimitive.Close
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
                                    className={cn(ui?.close)}
                                    {...closeProps}
                                  />
                                )
                          }
                        >
                          {closeSlot == null ? closeIcon : null}
                        </DrawerPrimitive.Close>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {body != null && (
            <div data-slot="body" className={cn("flex-1", ui?.body)}>
              {body}
            </div>
          )}

          {footer != null && (
            <div data-slot="footer" className={cn("flex flex-col gap-1.5", ui?.footer)}>
              {footer}
            </div>
          )}
        </div>
      )}
    </DrawerPrimitive.Popup>
  )

  const portalElement = (
    <>
      {overlay && !nested && <DrawerPrimitive.Backdrop data-slot="overlay" className={cn("fixed inset-0 z-50 bg-black/50", ui?.overlay)} />}
      <DrawerPrimitive.Viewport
        data-slot="viewport"
        data-modal={modal}
        className="pointer-events-none fixed inset-0 z-50 select-none data-[modal=true]:pointer-events-auto"
      >
        {panel}
      </DrawerPrimitive.Viewport>
    </>
  )

  return (
    <DrawerPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      modal={modal}
      swipeDirection={swipeDirection}
      snapPoints={snapPoints}
      onOpenChange={handleOpenChange}
    >
      {children != null && (
        <DrawerPrimitive.Trigger
          render={React.isValidElement(children) ? children : undefined}
          className={className}
        >
          {React.isValidElement(children) ? undefined : children}
        </DrawerPrimitive.Trigger>
      )}
      {portal ? <DrawerPrimitive.Portal>{portalElement}</DrawerPrimitive.Portal> : portalElement}
    </DrawerPrimitive.Root>
  )
}

/* ============================ hook ============================ */

import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XDrawerApi {
  /** 打开抽屉 */
  open: () => void
  /** 关闭抽屉 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、说明、方向、内嵌等） */
  setState: (patch: Pick<Partial<XDrawerProps>, "title" | "description" | "direction" | "inset">) => void
  /** 写入共享数据，供抽屉内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
}

/** 创建与 api 绑定的抽屉：调用即得 [Drawer, drawerApi] */
export function useXDrawer({ defaultOpen = false, ...componentProps }: Partial<XDrawerProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      description: componentProps.description,
      direction: componentProps.direction,
      inset: componentProps.inset,
    }),
  )[0]

  /** 与抽屉共享的数据载荷 */
  const payload = React.useRef<Record<string, unknown>>({})

  const api = React.useMemo<XDrawerApi>(
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

  const Drawer = React.useMemo(() => {
    return function BoundDrawer(props: Partial<XDrawerProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XDrawer
          {...componentProps}
          {...props}
          open={state.open}
          title={state.title ?? props.title}
          description={state.description ?? props.description}
          direction={state.direction ?? props.direction}
          inset={state.inset ?? props.inset}
          onOpenChange={(next, details) => {
            store.set({ open: next })
            props.onOpenChange?.(next, details)
          }}
        />
      )
    }
  }, [])

  return [Drawer, api] as const
}
