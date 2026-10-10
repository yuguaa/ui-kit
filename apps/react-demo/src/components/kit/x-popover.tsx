import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "@/lib/utils"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XPopoverUi {
  content?: string
  arrow?: string
}

export interface XPopoverProps {
  /** 触发模式：click 点击 / hover 悬停 */
  mode?: "click" | "hover"
  /** 是否打开（受控） */
  open?: boolean
  /** 初始是否打开 */
  defaultOpen?: boolean
  /** 模态：聚焦锁定与遮罩拦截（仅 click 模式） */
  modal?: boolean
  /** 悬停打开延迟（毫秒，仅 hover 模式） */
  openDelay?: number
  /** 悬停关闭延迟（毫秒，仅 hover 模式） */
  closeDelay?: number
  /** 是否显示指向触发元素的箭头 */
  arrow?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  className?: string
  /** 主题插槽类名 */
  ui?: XPopoverUi
  /** 触发元素（对应 default 插槽） */
  children?: React.ReactNode
  /** 内容（对应 content 插槽，可传函数接收 close 关闭方法） */
  content?: React.ReactNode | ((close: () => void) => React.ReactNode)
  /** 锚点（对应 anchor 插槽，作为定位参考元素） */
  anchor?: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean, details: PopoverPrimitive.Root.ChangeEventDetails) => void
  /** 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） */
  onClosePrevent?: () => void
}

export function XPopover({
  mode = "click",
  open,
  defaultOpen,
  modal = false,
  openDelay = 0,
  closeDelay = 0,
  arrow = false,
  portal = true,
  dismissible = true,
  className,
  ui,
  children,
  content,
  anchor,
  onOpenChange,
  onClosePrevent,
}: XPopoverProps) {
  const actionsRef = React.useRef<PopoverPrimitive.Root.Actions | null>(null)
  /** anchor 插槽元素作为定位参考 */
  const anchorRef = React.useRef<HTMLDivElement | null>(null)

  /* dismissible 为 false 时拦截外部点击与 Esc 关闭 */
  function handleOpenChange(next: boolean, details: PopoverPrimitive.Root.ChangeEventDetails) {
    if (!dismissible && !next && (details.reason === "outside-press" || details.reason === "escape-key")) {
      details.cancel()
      onClosePrevent?.()
      return
    }
    onOpenChange?.(next, details)
  }

  function close() {
    actionsRef.current?.close()
  }

  const popupElement = (
    <PopoverPrimitive.Positioner
      className="isolate z-50"
      side="bottom"
      sideOffset={8}
      collisionPadding={8}
      anchor={anchorRef}
    >
      <PopoverPrimitive.Popup
        data-slot="content"
        className={cn(
          "bg-background shadow-lg rounded-md ring-1 ring-border focus:outline-none pointer-events-auto z-50",
          "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          children == null && className,
          ui?.content,
        )}
      >
        {typeof content === "function" ? content(close) : content}

        {arrow && <PopoverPrimitive.Arrow data-slot="arrow" className={cn("fill-background stroke-border", ui?.arrow)} />}
      </PopoverPrimitive.Popup>
    </PopoverPrimitive.Positioner>
  )

  return (
    <PopoverPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      modal={mode === "click" ? modal : undefined}
      actionsRef={actionsRef}
      onOpenChange={handleOpenChange}
    >
      {anchor != null && <div ref={anchorRef}>{anchor}</div>}

      {children != null && (
        <PopoverPrimitive.Trigger
          render={React.isValidElement(children) ? children : undefined}
          className={className}
          openOnHover={mode === "hover"}
          delay={mode === "hover" ? openDelay : undefined}
          closeDelay={mode === "hover" ? closeDelay : undefined}
        >
          {React.isValidElement(children) ? undefined : children}
        </PopoverPrimitive.Trigger>
      )}

      {portal ? <PopoverPrimitive.Portal>{popupElement}</PopoverPrimitive.Portal> : popupElement}
    </PopoverPrimitive.Root>
  )
}

/* ============================ hook ============================ */

import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XPopoverApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

/** 创建与 api 绑定的气泡：调用即得 [Popover, popoverApi] */
export function useXPopover({ defaultOpen = false, ...componentProps }: Partial<XPopoverProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XPopoverApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
    }),
    [],
  )

  const Popover = React.useMemo(() => {
    return function BoundPopover(props: Partial<XPopoverProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XPopover
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next, details) => {
            store.set({ open: next })
            props.onOpenChange?.(next, details)
          }}
        />
      )
    }
  }, [])

  return [Popover, api] as const
}
