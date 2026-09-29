import * as React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XTooltipProps {
  /** 提示内容 */
  title?: React.ReactNode
  /** 弹出位置 */
  placement?: "top" | "bottom" | "left" | "right"
  /** 触发方式 */
  trigger?: "hover" | "click" | "focus"
  /** 受控显示状态 */
  open?: boolean
  /** 是否显示箭头 */
  arrow?: boolean
  /** 触发元素 */
  children: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  className?: string
}

export interface XTooltipApi {
  /** 显示提示气泡 */
  show: () => void
  /** 隐藏提示气泡 */
  hide: () => void
  /** 切换显示状态 */
  toggle: () => void
  /** 更新提示内容 */
  setState: (patch: Pick<Partial<XTooltipProps>, "title" | "placement">) => void
}

/** 创建与 api 绑定的提示气泡：调用即得 [Tooltip, tooltipApi] */
export function useXTooltip({ defaultOpen = false, ...componentProps }: Partial<XTooltipProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      title: componentProps.title,
      placement: componentProps.placement,
    }),
  )[0]

  const api = React.useMemo<XTooltipApi>(
    () => ({
      show: () => store.set({ open: true }),
      hide: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
      setState: (patch) => store.set(patch),
    }),
    [],
  )

  const Tooltip = React.useMemo(() => {
    return function BoundTooltip(props: Partial<XTooltipProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XTooltip
          {...componentProps}
          {...props}
          open={state.open}
          title={state.title}
          placement={state.placement ?? "top"}
          onOpenChange={(next) => store.set({ open: next })}
        >
          {props.children ?? (componentProps.children as React.ReactNode)}
        </XTooltip>
      )
    }
  }, [])

  return [Tooltip, api] as const
}

export function XTooltip({
  title,
  placement = "top",
  trigger = "hover",
  open: openProp,
  children,
  onOpenChange,
  className,
}: XTooltipProps) {
  const [innerOpen, setInnerOpen] = React.useState(false)
  const open = openProp ?? innerOpen

  return (
    <TooltipProvider delay={0}>
      <Tooltip
        open={open}
        onOpenChange={(next) => {
          if (openProp == null) setInnerOpen(next)
          onOpenChange?.(next)
        }}
      >
        <TooltipTrigger
          render={
            trigger === "click" || trigger === "focus" ? (
              <button type="button">{children}</button>
            ) : (
              <span>{children}</span>
            )
          }
        />
        <TooltipContent
          side={placement}
          className={cn(
            trigger === "click" && "[data-popup-open]",
            className,
          )}
        >
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
