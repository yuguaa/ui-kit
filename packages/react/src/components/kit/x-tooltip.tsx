/**
 * XTooltip 文字提示：与 Nuxt UI Tooltip 对齐的悬浮提示。
 * 支持 text 文本、kbds 快捷键组合、content 插槽与 portal 渲染。
 */
import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { XKbd } from "@/components/kit/x-kbd"
import type { XKbdColor, XKbdSize, XKbdVariant } from "@/components/kit/x-kbd"
import { cn } from "@/lib/utils"

/** 快捷键项：文本或 XKbd 属性对象 */
export type XTooltipKbd =
  | string
  | {
      value?: string
      variant?: XKbdVariant
      color?: XKbdColor
    }

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XTooltipUi {
  content?: string
  arrow?: string
  text?: string
  kbds?: string
  kbdsSize?: XKbdSize
}

export interface XTooltipProps {
  /** 提示文本 */
  text?: string
  /** 快捷键组合 */
  kbds?: XTooltipKbd[]
  /** 是否打开（受控） */
  open?: boolean
  /** 初始是否打开 */
  defaultOpen?: boolean
  /** 打开延迟（毫秒） */
  delayDuration?: number
  /** 内容可悬停保持 */
  disableHoverableContent?: boolean
  /** 禁用提示 */
  disabled?: boolean
  /** 是否显示箭头 */
  arrow?: boolean
  /** 渲染到 body */
  portal?: boolean
  className?: string
  /** 主题插槽类名 */
  ui?: XTooltipUi
  /** 触发元素（对应 default 插槽） */
  children?: React.ReactNode
  /** 内容（对应 content 插槽，替换 text / kbds 默认内容） */
  content?: React.ReactNode
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean, details: TooltipPrimitive.Root.ChangeEventDetails) => void
}

export function XTooltip({
  text,
  kbds,
  open,
  defaultOpen,
  delayDuration,
  disableHoverableContent,
  disabled,
  arrow = false,
  portal = true,
  className,
  ui,
  children,
  content,
  onOpenChange,
}: XTooltipProps) {
  /* 无任何内容时禁用提示 */
  const isDisabled = !(text || kbds?.length || content != null) || Boolean(disabled)

  const popupElement = (
    <TooltipPrimitive.Positioner className="isolate z-50" side="bottom" sideOffset={8} collisionPadding={8}>
      <TooltipPrimitive.Popup
        data-slot="content"
        className={cn(
          "flex items-center gap-1 bg-background text-foreground shadow-sm rounded-sm ring-1 ring-border h-6 px-2.5 py-1 text-xs select-none pointer-events-auto z-50",
          "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          children == null && className,
          ui?.content,
        )}
      >
        {content ?? (
          <>
            {text != null && (
              <span data-slot="text" className={cn("truncate", ui?.text)}>
                {text}
              </span>
            )}

            {kbds != null && kbds.length > 0 && (
              <span data-slot="kbds" className={cn("inline-flex items-center shrink-0 gap-0.5", ui?.kbds)}>
                {kbds.map((kbd, index) => (
                  <XKbd key={index} size={ui?.kbdsSize ?? "sm"} {...(typeof kbd === "string" ? { value: kbd } : kbd)} />
                ))}
              </span>
            )}
          </>
        )}

        {arrow && <TooltipPrimitive.Arrow data-slot="arrow" className={cn("fill-background stroke-border", ui?.arrow)} />}
      </TooltipPrimitive.Popup>
    </TooltipPrimitive.Positioner>
  )

  return (
    <TooltipPrimitive.Provider delay={delayDuration ?? 700}>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        disabled={isDisabled}
        disableHoverablePopup={disableHoverableContent}
        onOpenChange={onOpenChange}
      >
        {children != null && (
          <TooltipPrimitive.Trigger
            render={React.isValidElement(children) ? children : undefined}
            className={className}
          >
            {React.isValidElement(children) ? undefined : children}
          </TooltipPrimitive.Trigger>
        )}
        {portal ? <TooltipPrimitive.Portal>{popupElement}</TooltipPrimitive.Portal> : popupElement}
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

/* ============================ hook ============================ */

import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"

export interface XTooltipApi {
  /** 显示提示气泡 */
  show: () => void
  /** 隐藏提示气泡 */
  hide: () => void
  /** 切换显示状态 */
  toggle: () => void
  /** 更新提示内容 */
  setState: (patch: { text?: string }) => void
}

/** 创建与 api 绑定的提示气泡：调用即得 [Tooltip, tooltipApi] */
export function useXTooltip({ defaultOpen = false, ...componentProps }: Partial<XTooltipProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() =>
    createBoundStore({
      open: defaultOpen,
      text: componentProps.text,
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
          text={state.text ?? props.text}
          onOpenChange={(next, details) => {
            store.set({ open: next })
            props.onOpenChange?.(next, details)
          }}
        />
      )
    }
  }, [])

  return [Tooltip, api] as const
}
