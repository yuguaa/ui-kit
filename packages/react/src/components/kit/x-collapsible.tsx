/**
 * XCollapsible 折叠：点击触发内容展开或收起。
 */
import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XCollapsibleProps {
  /** 是否展开 */
  open?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 默认展开 */
  defaultOpen?: boolean
  /** 触发器内容 */
  trigger?: React.ReactNode
  /** 折叠内容 */
  children?: React.ReactNode
  /** 展开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  className?: string
}

export interface XCollapsibleApi {
  toggle: () => void
}

export const XCollapsible = React.forwardRef<XCollapsibleApi, XCollapsibleProps>(
  function XCollapsible(
    { open: openProp, disabled = false, defaultOpen = false, trigger, children, onOpenChange, className },
    ref,
  ) {
    const [innerOpen, setInnerOpen] = React.useState(defaultOpen)
    const open = openProp ?? innerOpen

    React.useImperativeHandle(ref, () => ({
      toggle: () => {
        const next = !open
        if (openProp == null) setInnerOpen(next)
        onOpenChange?.(next)
      },
    }))

    return (
      <Collapsible
        open={open}
        disabled={disabled}
        onOpenChange={(next) => {
          if (openProp == null) setInnerOpen(next)
          onOpenChange?.(next)
        }}
        className={cn("flex flex-col gap-1", className)}
      >
        <CollapsibleTrigger
          render={
            <button type="button" className="inline-flex w-fit cursor-pointer items-center gap-1 text-sm font-medium outline-none hover:underline">
              {trigger ?? "展开详情"}
              <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
            </button>
          }
        />
        <CollapsibleContent className="text-sm text-muted-foreground">{children}</CollapsibleContent>
      </Collapsible>
    )
  },
)

/* ============================ vben 风格 hook ============================ */

export interface XCollapsibleInstanceApi {
  /** 是否展开 */
  open: boolean
  /** 切换展开状态 */
  toggle: () => void
  /** 设置展开状态 */
  setOpen: (open: boolean) => void
}

/** 创建与 api 绑定的折叠：调用即得 [Collapsible, collapsibleApi] */
export function useXCollapsible(options: Partial<XCollapsibleProps> = {}) {
  const { defaultOpen = false, ...componentProps } = options
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XCollapsibleInstanceApi>(
    () => ({
      get open() {
        return store.get().open
      },
      toggle: () => store.set({ open: !store.get().open }),
      setOpen: (open) => store.set({ open }),
    }),
    [],
  )

  const Collapsible = React.useMemo(() => {
    return function BoundCollapsible(props: Partial<XCollapsibleProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XCollapsible
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next) => store.set({ open: next })}
        />
      )
    }
  }, [])

  return [Collapsible, api] as const
}
