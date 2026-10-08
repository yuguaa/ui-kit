import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XPopoverProps {
  /** 是否显示 */
  open?: boolean
  /** 触发方式 */
  trigger?: "hover" | "click"
  /** 位置 */
  side?: "top" | "bottom" | "left" | "right"
  /** 是否显示指向触发元素的箭头 */
  arrow?: boolean
  /** 内容 */
  content?: React.ReactNode
  /** 标题 */
  title?: React.ReactNode
  /** 触发元素 */
  children: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  className?: string
}

export function XPopover({
  open: openProp,
  trigger = "hover",
  side = "top",
  arrow = false,
  content,
  title,
  children,
  onOpenChange,
  className,
}: XPopoverProps) {
  const [innerOpen, setInnerOpen] = React.useState(false)
  const open = openProp ?? innerOpen

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        if (openProp == null) setInnerOpen(next)
        onOpenChange?.(next)
      }}
    >
      <PopoverTrigger
        openOnHover={trigger === "hover"}
        render={
          React.isValidElement(children) ? (
            children
          ) : (
            <button type="button" className="inline-flex">{children}</button>
          )
        }
      />
      <PopoverContent
        side={side}
        sideOffset={arrow ? 8 : undefined}
        className={cn("w-64", className)}
      >
        {arrow && (
          <PopoverPrimitive.Arrow className="size-3 rotate-45 bg-popover" />
        )}
        {title != null && (
          <PopoverHeader>
            <PopoverTitle>{title}</PopoverTitle>
          </PopoverHeader>
        )}
        <PopoverDescription render={<div>{content}</div>} />
      </PopoverContent>
    </Popover>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XPopoverApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、内容等） */
  setState: (patch: Pick<Partial<XPopoverProps>, "title" | "content" | "side">) => void
}

/** 创建与 api 绑定的气泡：调用即得 [Popover, popoverApi] */
export function useXPopover({ defaultOpen = false, ...componentProps }: Partial<XPopoverProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      content: componentProps.content,
      side: componentProps.side,
    }),
  )[0]

  const api = React.useMemo<XPopoverApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
      setState: (patch) => store.set(patch),
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
          title={state.title}
          content={state.content}
          side={state.side ?? "top"}
          onOpenChange={(next) => store.set({ open: next })}
        >
          {props.children ?? (componentProps.children as React.ReactNode)}
        </XPopover>
      )
    }
  }, [])

  return [Popover, api] as const
}
