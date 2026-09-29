/**
 * XAccordion 手风琴：可展开与折叠的内容分组。
 */
import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XAccordionItem {
  /** 标题 */
  title: React.ReactNode
  /** 内容 */
  content?: React.ReactNode
  /** 该项是否禁用 */
  disabled?: boolean
}

export interface XAccordionProps {
  /** 手风琴项数组 */
  items?: XAccordionItem[]
  /** 是否可多开 */
  multiple?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 受控展开项 */
  value?: string[]
  /** 展开状态变化回调 */
  onChange?: (value: string[]) => void
  className?: string
}

export function XAccordion({
  items = [],
  multiple = false,
  disabled = false,
  value,
  onChange,
  className,
}: XAccordionProps) {
  const [innerValue, setInnerValue] = React.useState<string[]>([])
  const currentValue = value ?? innerValue

  return (
    <Accordion
      value={currentValue}
      onValueChange={(next) => {
        /* 单选模式只保留最新展开项 */
        let resolved = next
        if (!multiple) {
          const added = next.filter((key) => !currentValue.includes(key))
          resolved = added.length > 0 ? [added[added.length - 1] ?? ""] : []
        }
        if (value == null) setInnerValue(resolved)
        onChange?.(resolved)
      }}
      disabled={disabled}
      className={cn("w-full", className)}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={String(index)} disabled={item.disabled}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XAccordionInstanceApi {
  /** 当前展开项 */
  value: string[]
  /** 展开指定项 */
  open: (index: number) => void
  /** 折叠指定项 */
  close: (index: number) => void
  /** 切换指定项 */
  toggle: (index: number) => void
}

/** 创建与 api 绑定的手风琴：调用即得 [Accordion, accordionApi] */
export function useXAccordion(
  options: Partial<XAccordionProps> & { defaultValue?: string[] } = {},
) {
  const { defaultValue = [], ...componentProps } = options
  const store = React.useState(() => createBoundStore({ value: defaultValue }))[0]

  const api = React.useMemo<XAccordionInstanceApi>(
    () => ({
      get value() {
        return store.get().value
      },
      open: (index: number) => {
        const key = String(index)
        if (!store.get().value.includes(key)) {
          store.set({ value: [...store.get().value, key] })
        }
      },
      close: (index: number) => {
        store.set({ value: store.get().value.filter((key) => key !== String(index)) })
      },
      toggle: (index: number) => {
        const key = String(index)
        if (store.get().value.includes(key)) {
          store.set({ value: store.get().value.filter((k) => k !== key) })
        } else {
          store.set({ value: [...store.get().value, key] })
        }
      },
    }),
    [],
  )

  const Accordion = React.useMemo(() => {
    return function BoundAccordion(props: Partial<XAccordionProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XAccordion
          {...componentProps}
          {...props}
          value={state.value}
          onChange={(next) => store.set({ value: next })}
        />
      )
    }
  }, [])

  return [Accordion, api] as const
}
