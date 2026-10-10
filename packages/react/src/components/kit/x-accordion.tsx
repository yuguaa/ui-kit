/**
 * XAccordion 手风琴：可展开与折叠的内容分组。
 * 结构对齐 Nuxt UI：root → item → header → trigger（leading / label / trailing）→ content → body。
 */
import * as React from "react"
import { Accordion } from "@base-ui/react/accordion"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XAccordionUi {
  root?: string
  item?: string
  header?: string
  trigger?: string
  content?: string
  body?: string
  leadingIcon?: string
  trailingIcon?: string
  label?: string
}

/** 单项主题插槽类名 */
export interface XAccordionItemUi {
  item?: string
  header?: string
  trigger?: string
  leadingIcon?: string
  label?: string
  trailingIcon?: string
  content?: string
  body?: string
}

/** 图标：XIcon 图标名或自定义组件 */
type XAccordionIcon = XIconName | React.ComponentType<{ className?: string; "data-slot"?: string }>

/** 手风琴项：labelKey / valueKey 决定字段来源 */
export interface XAccordionItem {
  /** 标题文本（字段名由 labelKey 决定） */
  label?: string
  /** 前置图标 */
  icon?: XAccordionIcon
  /** 后置图标，优先于组件级 trailingIcon */
  trailingIcon?: XAccordionIcon
  /** 内容 */
  content?: React.ReactNode
  /** 唯一值（字段名由 valueKey 决定），默认取索引 */
  value?: string
  /** 该项是否禁用 */
  disabled?: boolean
  className?: string
  ui?: XAccordionItemUi
  [key: string]: any
}

export interface XAccordionSlotProps {
  item: XAccordionItem
  index: number
  open: boolean
}

export type XAccordionSlot = React.ReactNode | ((props: XAccordionSlotProps) => React.ReactNode)

export interface XAccordionProps {
  /** 手风琴项数组 */
  items?: XAccordionItem[]
  /** 是否可多开 */
  multiple?: boolean
  /** 展开项是否可全部收起 */
  collapsible?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 隐藏时是否卸载内容 */
  unmountOnHide?: boolean
  /** 默认展开项 */
  defaultValue?: string[]
  /** 标签字段名 */
  labelKey?: string
  /** 值字段名 */
  valueKey?: string
  /** 后置图标，单项 trailingIcon 优先 */
  trailingIcon?: XAccordionIcon
  /** 受控展开项 */
  value?: string[]
  /** 展开状态变化回调 */
  onChange?: (value: string[]) => void
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XAccordionUi
  /** 前置插槽 */
  leading?: XAccordionSlot
  /** 后置插槽 */
  trailing?: XAccordionSlot
  /** 内容插槽：替换整个内容区 */
  content?: XAccordionSlot
  /** body 插槽：内容容器内的内容 */
  body?: XAccordionSlot
  /** 标题插槽（等价 default） */
  children?: XAccordionSlot
  className?: string
}

/** 按字段名（支持点路径）从项中取值 */
function getValue(item: XAccordionItem, key: string): unknown {
  let value: unknown = item
  for (const part of key.split(".")) {
    if (value == null) return undefined
    value = (value as Record<string, unknown>)[part]
  }
  return value
}

/** 渲染命名插槽：函数形式拿到 { item, index, open } */
function renderSlot(slot: XAccordionSlot | undefined, slotProps: XAccordionSlotProps): React.ReactNode {
  return typeof slot === "function" ? slot(slotProps) : slot
}

/** 渲染图标：字符串走 XIcon，否则渲染组件 */
function renderIcon(icon: XAccordionIcon, className: string, slot: string): React.ReactNode {
  if (typeof icon === "string") return <XIcon name={icon} className={className} data-slot={slot} />
  const Comp = icon
  return <Comp className={className} data-slot={slot} />
}

export function XAccordion({
  items = [],
  multiple = false,
  collapsible = true,
  disabled = false,
  unmountOnHide = true,
  defaultValue = [],
  labelKey = "label",
  valueKey = "value",
  trailingIcon,
  value,
  onChange,
  render,
  ui,
  leading,
  trailing,
  content,
  body,
  children,
  className,
}: XAccordionProps) {
  const [innerValue, setInnerValue] = React.useState<string[]>(defaultValue)
  const currentValue = value ?? innerValue

  return (
    <Accordion.Root
      render={render}
      value={currentValue}
      defaultValue={defaultValue}
      multiple={multiple}
      disabled={disabled}
      keepMounted={!unmountOnHide}
      onValueChange={(next) => {
        /* 单开模式下 collapsible=false 时不允许收起已展开项 */
        if (!multiple && !collapsible && next.length === 0) return
        if (value == null) setInnerValue(next)
        onChange?.(next)
      }}
      className={cn("w-full", ui?.root, className)}
      data-slot="root"
    >
      {items.map((item, index) => {
        const itemValue = String(getValue(item, valueKey) ?? index)
        const open = currentValue.includes(itemValue)
        const slotProps: XAccordionSlotProps = { item, index, open }
        const hasContent = item.content != null || content != null || body != null

        return (
          <Accordion.Item
            key={itemValue}
            value={itemValue}
            disabled={item.disabled}
            data-slot="item"
            className={cn("border-b border-border last:border-b-0", ui?.item, item.ui?.item, item.className)}
          >
            <Accordion.Header
              render={<div />}
              data-slot="header"
              className={cn("flex", ui?.header, item.ui?.header)}
            >
              <Accordion.Trigger
                data-slot="trigger"
                className={cn(
                  "group flex flex-1 items-center gap-1.5 rounded-md py-3.5 font-medium text-sm outline-primary-6/25 min-w-0 focus-visible:outline-3",
                  item.disabled && "cursor-not-allowed opacity-75",
                  ui?.trigger,
                  item.ui?.trigger,
                )}
              >
                {leading != null ? (
                  renderSlot(leading, slotProps)
                ) : (
                  item.icon != null && renderIcon(item.icon, cn("size-5 shrink-0", ui?.leadingIcon, item.ui?.leadingIcon), "leadingIcon")
                )}
                {(getValue(item, labelKey) != null || children != null) && (
                  <span data-slot="label" className={cn("text-start break-words", ui?.label, item.ui?.label)}>
                    {children != null ? renderSlot(children, slotProps) : String(getValue(item, labelKey) ?? "")}
                  </span>
                )}
                {trailing != null ? (
                  renderSlot(trailing, slotProps)
                ) : (
                  renderIcon(
                    item.trailingIcon ?? trailingIcon ?? "chevron-down",
                    cn(
                      "ms-auto size-5 shrink-0 transition-transform duration-200 ease-out group-data-panel-open:rotate-180 motion-reduce:transition-none",
                      ui?.trailingIcon,
                      item.ui?.trailingIcon,
                    ),
                    "trailingIcon",
                  )
                )}
              </Accordion.Trigger>
            </Accordion.Header>
            {hasContent && (
              <Accordion.Panel
                keepMounted={!unmountOnHide}
                data-slot="content"
                className={cn(
                  "data-open:animate-accordion-down data-closed:animate-accordion-up focus:outline-none data-closed:overflow-hidden",
                  ui?.content,
                  item.ui?.content,
                )}
              >
                {content != null ? (
                  renderSlot(content, slotProps)
                ) : (
                  <div
                    data-slot="body"
                    className={cn(
                      "h-(--accordion-panel-height) text-sm pb-3.5 data-ending-style:h-0 data-starting-style:h-0",
                      ui?.body,
                      item.ui?.body,
                    )}
                  >
                    {body != null ? renderSlot(body, slotProps) : item.content}
                  </div>
                )}
              </Accordion.Panel>
            )}
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
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
