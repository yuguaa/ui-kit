/**
 * XListbox 列表选择：可选中项的列表（基于 Base UI Combobox 内联列表）。
 * items 支持字符串、对象与二维分组数组，labelKey / valueKey / descriptionKey 映射字段；
 * filter 开启顶部搜索框，按 filterFields 过滤；选项可带 type: 'label' | 'separator'。
 */
import * as React from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import { Combobox } from "@base-ui/react/combobox"
import { XAvatar, type XAvatarProps } from "@/components/kit/x-avatar"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"
import { filterGroups, getField } from "@/lib/kit/menu-utils"

/** 图标：XIcon 名称或自定义组件 */
export type XListboxIcon =
  | XIconName
  | React.ComponentType<{
      className?: string
      "aria-hidden"?: boolean | "true" | "false"
      "data-slot"?: string
    }>

export type XListboxSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XListboxColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"

/** 顶部过滤搜索框配置 */
export interface XListboxFilterOptions {
  placeholder?: string
  disabled?: boolean
}

/** 虚拟滚动配置（对齐 Vue 版 virtualize） */
export interface XListboxVirtualizeOptions {
  /** 每项估算高度（像素），或按索引返回估算高度的函数；默认按 size 与描述推算 */
  estimateSize?: number | ((index: number) => number)
  /** 可视区域外额外渲染的项数，默认 12 */
  overscan?: number
  /** 每项稳定键，默认使用索引 */
  getItemKey?: (index: number) => string | number
}

export interface XListboxItem {
  label?: string
  description?: string
  icon?: XListboxIcon
  avatar?: Omit<XAvatarProps, "ui"> & { ui?: Record<string, string> }
  /** 项类型：label 分组标题 / separator 分隔线 / item 选项 */
  type?: "label" | "separator" | "item"
  disabled?: boolean
  onSelect?: (e: Event) => void
  className?: string
  ui?: Partial<Record<string, string>>
  [key: string]: any
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XListboxUi {
  root?: string
  input?: string
  content?: string
  group?: string
  label?: string
  separator?: string
  empty?: string
  loading?: string
  loadingIcon?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: string
  itemWrapper?: string
  itemLabel?: string
  itemDescription?: string
  itemTrailing?: string
  itemTrailingIcon?: string
}

export interface XListboxProps {
  /** 列表项数组，二维数组时按行分组 */
  items?: XListboxItem[] | XListboxItem[][]
  /** 选中值（受控） */
  value?: unknown
  /** 非受控初始值 */
  defaultValue?: unknown
  /** 是否多选 */
  multiple?: boolean
  /** 组件颜色 */
  color?: XListboxColor
  /** 尺寸 */
  size?: XListboxSize
  /** 选项值字段 */
  valueKey?: string
  /** 选项标签字段 */
  labelKey?: string
  /** 选项说明字段 */
  descriptionKey?: string
  /** 加载态 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: XListboxIcon
  /** 顶部过滤搜索框：true 或 { placeholder, disabled } */
  filter?: boolean | XListboxFilterOptions
  /** 过滤字段，默认 [labelKey] */
  filterFields?: string[]
  /** 忽略内置过滤（适合自定义过滤场景） */
  ignoreFilter?: boolean
  /** 虚拟滚动：true 或配置对象，适合大数据量列表 */
  virtualize?: boolean | XListboxVirtualizeOptions
  /** 选中态图标 */
  selectedIcon?: XListboxIcon
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 是否自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延时（毫秒） */
  autofocusDelay?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否必填 */
  required?: boolean
  /** 表单字段名 */
  name?: string
  /** 组件 id */
  id?: string
  /** 列表朝向 */
  orientation?: "horizontal" | "vertical"
  /** 指针悬停时高亮选项 */
  highlightOnHover?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XListboxUi
  className?: string
  /** 值变化回调 */
  onValueChange?: (value: unknown) => void
  /** 值变化回调（事件形式） */
  onChange?: (event: Event) => void
  /** 焦点进入回调 */
  onEntryFocus?: (event: Event) => void
  /** 高亮项变化回调 */
  onHighlight?: (payload: { ref: HTMLElement; value: unknown } | undefined) => void
  /** 焦点离开回调 */
  onLeave?: (event: Event) => void
  /** 自定义加载内容 */
  loadingSlot?: React.ReactNode
  /** 自定义空数据内容 */
  empty?: (props: { searchTerm: string }) => React.ReactNode
  /** 自定义选项内容 */
  item?: (props: { item: XListboxItem; index: number }) => React.ReactNode
  /** 自定义选项前置区域 */
  itemLeading?: (props: { item: XListboxItem; index: number }) => React.ReactNode
  /** 自定义选项标签 */
  itemLabel?: (props: { item: XListboxItem; index: number }) => React.ReactNode
  /** 自定义选项说明 */
  itemDescription?: (props: { item: XListboxItem; index: number }) => React.ReactNode
  /** 自定义选项尾部区域 */
  itemTrailing?: (props: { item: XListboxItem; index: number }) => React.ReactNode
}

/** 尺寸映射：item / label / empty / loading / 图标 */
const sizeClasses: Record<XListboxSize, { item: string; label: string; empty: string; loading: string; icon: string }> = {
  xs: { item: "p-1 text-xs gap-1", label: "p-1 text-[10px] gap-1", empty: "py-3 text-xs", loading: "py-3", icon: "size-4" },
  sm: { item: "p-1.5 text-xs gap-1.5", label: "p-1.5 text-[10px] gap-1.5", empty: "py-4 text-xs", loading: "py-4", icon: "size-4" },
  md: { item: "p-1.5 text-sm gap-1.5", label: "p-1.5 text-xs gap-1.5", empty: "py-6 text-sm", loading: "py-6", icon: "size-5" },
  lg: { item: "p-2 text-sm gap-2", label: "p-2 text-xs gap-2", empty: "py-7 text-sm", loading: "py-7", icon: "size-5" },
  xl: { item: "p-2 text-base gap-2", label: "p-2 text-sm gap-2", empty: "py-8 text-base", loading: "py-8", icon: "size-6" },
}

/** 高亮描边颜色 */
const highlightClasses: Record<XListboxColor, string> = {
  primary: "ring-primary",
  secondary: "ring-secondary",
  neutral: "ring-foreground/30",
  success: "ring-success",
  info: "ring-info",
  warning: "ring-warning",
  error: "ring-error",
}

/** 虚拟化估算行高：无说明 / 有说明，对齐 Vue 版 getEstimateSize */
const virtualizeRowSizes: Record<XListboxSize, { plain: number; withDescription: number }> = {
  xs: { plain: 24, withDescription: 44 },
  sm: { plain: 28, withDescription: 48 },
  md: { plain: 32, withDescription: 52 },
  lg: { plain: 36, withDescription: 56 },
  xl: { plain: 40, withDescription: 60 },
}

/** 渲染图标：字符串走 XIcon，组件直接渲染 */
function renderIcon(
  icon: XListboxIcon | undefined,
  className: string,
  dataSlot?: string,
): React.ReactNode {
  if (icon == null) return null
  if (typeof icon === "string") {
    return <XIcon name={icon} data-slot={dataSlot} className={className} aria-hidden="true" />
  }
  const Comp = icon
  return <Comp data-slot={dataSlot} className={className} aria-hidden="true" />
}

export function XListbox({
  items = [],
  value,
  defaultValue,
  multiple = false,
  color = "primary",
  size = "md",
  valueKey,
  labelKey = "label",
  descriptionKey = "description",
  loading = false,
  loadingIcon = "loader-circle",
  filter = false,
  filterFields,
  ignoreFilter = false,
  virtualize = false,
  selectedIcon = "check",
  highlight = false,
  autofocus = false,
  autofocusDelay: _autofocusDelay = 0,
  disabled = false,
  required = false,
  name,
  id,
  orientation: _orientation = "vertical",
  highlightOnHover = true,
  render,
  ui,
  className,
  onValueChange,
  onChange,
  onEntryFocus: _onEntryFocus,
  onHighlight,
  onLeave: _onLeave,
  loadingSlot,
  empty,
  item: itemSlot,
  itemLeading,
  itemLabel,
  itemDescription,
  itemTrailing,
}: XListboxProps) {
  const [innerValue, setInnerValue] = React.useState<unknown>(defaultValue)
  const currentValue = value !== undefined ? value : innerValue
  const [searchTerm, setSearchTerm] = React.useState("")
  const listContainerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const virtualizeOptions = typeof virtualize === "object" ? virtualize : {}
  const isVirtualized = virtualize === true || typeof virtualize === "object"

  const labelField = labelKey || "label"
  const descriptionField = descriptionKey || "description"

  /* 分组：平铺数组视为单组 */
  const groups = React.useMemo<XListboxItem[][]>(() => {
    if (!items?.length) return []
    return Array.isArray(items[0]) ? (items as XListboxItem[][]) : [items as XListboxItem[]]
  }, [items])

  const isStructural = (entry: XListboxItem) => !!entry?.type && ["label", "separator"].includes(entry.type)

  /* 过滤：ignoreFilter 或空关键字时保持原样 */
  const filteredGroups = React.useMemo(() => {
    if (ignoreFilter || !searchTerm) return groups
    const fields = Array.isArray(filterFields) ? filterFields : [labelField]
    return filterGroups(groups, searchTerm, { fields, isStructural })
  }, [groups, searchTerm, ignoreFilter, filterFields, labelField])
  const filteredItems = React.useMemo(() => filteredGroups.flatMap((group) => group), [filteredGroups])

  const itemValue = (entry: XListboxItem) => (valueKey ? getField(entry, valueKey) : entry)
  const currentSize = sizeClasses[size]

  /* 估算行高：显式配置优先，否则对齐 Vue 版按 size 与描述字段推算 */
  const estimateSize = React.useMemo<((index: number) => number) | undefined>(() => {
    const provided = typeof virtualize === "object" ? virtualize.estimateSize : undefined
    if (provided != null) {
      return typeof provided === "function" ? provided : () => provided
    }
    if (!isVirtualized) return undefined
    const rowSizes = virtualizeRowSizes[size]
    if (itemDescription != null) return () => rowSizes.withDescription
    if (!descriptionKey) return () => rowSizes.plain
    return (index: number) => {
      const entry = filteredItems[index]
      const description = typeof entry === "object" && entry !== null ? getField(entry, descriptionField) : undefined
      return description != null && description !== "" ? rowSizes.withDescription : rowSizes.plain
    }
  }, [isVirtualized, virtualize, size, itemDescription, descriptionKey, descriptionField, filteredItems])

  /* 读取滚动容器的 scroll-padding（scroll-py-1），补偿虚拟化首尾偏移 */
  const [scrollPadding, setScrollPadding] = React.useState({ start: 0, end: 0 })
  React.useLayoutEffect(() => {
    if (!isVirtualized) return
    const element = contentRef.current
    if (!element) return
    const style = window.getComputedStyle(element)
    const parse = (value: string) => {
      const parsed = Number.parseFloat(value)
      return Number.isFinite(parsed) ? parsed : 0
    }
    setScrollPadding({ start: parse(style.scrollPaddingTop), end: parse(style.scrollPaddingBottom) })
  }, [isVirtualized])

  /* 虚拟器：窗口由内容区可视高度驱动，未显式配置的 estimateSize 走默认推算 */
  const virtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => contentRef.current,
    estimateSize: (index: number) => (estimateSize != null ? estimateSize(index) : 32),
    overscan: virtualizeOptions.overscan ?? 12,
    getItemKey: virtualizeOptions.getItemKey,
    scrollPaddingStart: scrollPadding.start,
    scrollPaddingEnd: scrollPadding.end,
  })

  /* estimateSize 变化时重置测量缓存，确保新估算高度生效 */
  React.useLayoutEffect(() => {
    if (isVirtualized) virtualizer.measure()
  }, [estimateSize])

  const updateValue = (next: unknown) => {
    if (value === undefined) setInnerValue(next)
    onValueChange?.(next)
    onChange?.(new Event("change"))
  }

  const handleSelect = (entry: XListboxItem, event: React.MouseEvent) => {
    if (entry.disabled) {
      event.preventDefault()
      return
    }
    entry.onSelect?.(event.nativeEvent)
  }

  const renderItem = (entry: XListboxItem, index: number, options?: { virtual?: boolean; total?: number }): React.ReactNode => {
    if (entry?.type === "label") {
      const labelNode = (
        <Combobox.GroupLabel
          key={`label-${index}`}
          data-slot="label"
          className={cn("font-semibold text-foreground", currentSize.label, entry.className, ui?.label, entry.ui?.label)}
        >
          {getField(entry, labelField)}
        </Combobox.GroupLabel>
      )

      /* 虚拟化平铺渲染：GroupLabel 依赖 Group 上下文，包一层无布局影响的 Group */
      if (options?.virtual) {
        return (
          <Combobox.Group key={`label-${index}`} className="contents">
            {labelNode}
          </Combobox.Group>
        )
      }

      return labelNode
    }

    if (entry?.type === "separator") {
      return (
        <Combobox.Separator
          key={`separator-${index}`}
          data-slot="separator"
          className={cn("-mx-1 my-1 h-px bg-border", entry.className, ui?.separator, entry.ui?.separator)}
        />
      )
    }

    if (itemSlot != null) {
      return <React.Fragment key={`item-${index}`}>{itemSlot({ item: entry, index })}</React.Fragment>
    }

    /* 虚拟化时显式传 index，避免从 filtered items 反查造成值不匹配 */
    const virtualItemProps = options?.virtual
      ? { index, "data-index": index, "aria-setsize": options.total, "aria-posinset": index + 1 }
      : {}

    return (
      <Combobox.Item
        key={`item-${index}`}
        {...virtualItemProps}
        value={itemValue(entry)}
        disabled={entry.disabled}
        data-slot="item"
        className={cn(
          "relative flex w-full cursor-default items-start rounded-md outline-none select-none",
          "data-disabled:pointer-events-none data-disabled:opacity-75",
          "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
          "data-selected:bg-accent data-selected:text-accent-foreground",
          currentSize.item,
          entry.className,
          ui?.item,
          entry.ui?.item,
        )}
        onClick={(event) => handleSelect(entry, event)}
      >
        {itemLeading != null ? (
          itemLeading({ item: entry, index })
        ) : (
          <span data-slot="itemLeadingIcon" className={cn("flex", currentSize.icon)}>
            {entry.icon != null && renderIcon(entry.icon, cn("shrink-0 text-muted-foreground", currentSize.icon, ui?.itemLeadingIcon, entry.ui?.itemLeadingIcon))}
            {entry.icon == null && entry.avatar != null && (
              <XAvatar {...entry.avatar} data-slot="itemLeadingAvatar" className={cn("shrink-0", ui?.itemLeadingAvatar, entry.ui?.itemLeadingAvatar)} />
            )}
          </span>
        )}

        {(getField(entry, labelField) || getField(entry, descriptionField) != null || itemLabel != null || itemDescription != null) && (
          <span data-slot="itemWrapper" className={cn("flex min-w-0 flex-1 flex-col", ui?.itemWrapper, entry.ui?.itemWrapper)}>
            {(getField(entry, labelField) != null || itemLabel != null) && (
              <span data-slot="itemLabel" className={cn("truncate", ui?.itemLabel, entry.ui?.itemLabel)}>
                {itemLabel != null ? itemLabel({ item: entry, index }) : getField(entry, labelField)}
              </span>
            )}
            {(getField(entry, descriptionField) != null || itemDescription != null) && (
              <span data-slot="itemDescription" className={cn("truncate text-muted-foreground", ui?.itemDescription, entry.ui?.itemDescription)}>
                {itemDescription != null ? itemDescription({ item: entry, index }) : getField(entry, descriptionField)}
              </span>
            )}
          </span>
        )}

        <span data-slot="itemTrailing" className={cn("ms-auto inline-flex items-center gap-1.5", ui?.itemTrailing, entry.ui?.itemTrailing)}>
          {itemTrailing?.({ item: entry, index })}
          <Combobox.ItemIndicator>
            {renderIcon(selectedIcon, cn("shrink-0", currentSize.icon, ui?.itemTrailingIcon, entry.ui?.itemTrailingIcon), "itemTrailingIcon")}
          </Combobox.ItemIndicator>
        </span>
      </Combobox.Item>
    )
  }

  const showFilter = filter !== false

  return (
    <Combobox.Root
      items={filteredItems}
      filter={null}
      inline
      open
      value={currentValue as any}
      onValueChange={updateValue}
      inputValue={searchTerm}
      onInputValueChange={setSearchTerm}
      onItemHighlighted={(next, details) => {
        /* 虚拟化：高亮变化时滚动窗口跟随（对齐 Vue 版 virtualHighlightHook） */
        if (isVirtualized && next !== undefined && details.index != null) {
          queueMicrotask(() => {
            virtualizer.scrollToIndex(details.index, { align: "start" })
          })
        }
        onHighlight?.(next === undefined ? undefined : { ref: (details.event as any)?.target, value: next })
      }}
      multiple={multiple}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      virtualized={isVirtualized}
      highlightItemOnHover={highlightOnHover}
      itemToStringLabel={(entry: any) => String(getField(entry, labelField) ?? entry ?? "")}
    >
      <Combobox.InputGroup
        ref={listContainerRef}
        data-slot="root"
        render={render}
        className={cn(
          "flex flex-col min-h-0 min-w-0 overflow-hidden rounded-lg ring-1 ring-inset ring-input",
          disabled && "cursor-not-allowed opacity-75",
          highlight && cn("ring-2", highlightClasses[color]),
          ui?.root,
          className,
        )}
        onClick={() => {
          /* 内联列表：点击容器时聚焦容器内的过滤输入框（作用域限定，避免误聚焦页面其他输入框） */
          listContainerRef.current?.querySelector<HTMLInputElement>("[data-slot='input']")?.focus()
        }}
      >
        {showFilter && (
          <Combobox.Input
            autoFocus={autofocus}
            disabled={disabled || (typeof filter === "object" && filter.disabled) || loading}
            placeholder={(typeof filter === "object" ? filter.placeholder : undefined) ?? "搜索…"}
            data-slot="input"
            className={cn(
              "w-full border-0 border-b border-border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
              ui?.input,
            )}
          />
        )}

        <Combobox.List
          ref={contentRef}
          data-slot="content"
          className={cn("relative max-h-60 flex-1 overflow-y-auto scroll-py-1 focus:outline-none", ui?.content)}
        >
          {loading ? (
            <div data-slot="loading" className={cn("flex items-center justify-center text-muted-foreground", currentSize.loading, ui?.loading)}>
              {loadingSlot ?? renderIcon(loadingIcon, cn("animate-spin shrink-0", currentSize.icon, ui?.loadingIcon), "loadingIcon")}
            </div>
          ) : !filteredItems.length ? (
            <div data-slot="empty" className={cn("text-center text-muted-foreground", currentSize.empty, ui?.empty)}>
              {empty != null ? empty({ searchTerm }) : "暂无匹配项"}
            </div>
          ) : isVirtualized ? (
            /* 虚拟滚动：相对容器撑起总高度，窗口项绝对定位（对齐 Vue 版 ListboxVirtualizer） */
            <div data-slot="virtualizer" role="presentation" className="relative w-full" style={{ height: virtualizer.getTotalSize() }}>
              {virtualizer.getVirtualItems().map((virtualItem) => {
                const entry = filteredItems[virtualItem.index]
                if (entry == null) return null
                return (
                  <div
                    key={virtualItem.key}
                    role="presentation"
                    data-index={virtualItem.index}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                  >
                    {renderItem(entry, virtualItem.index, { virtual: true, total: filteredItems.length })}
                  </div>
                )
              })}
            </div>
          ) : (
            filteredGroups.map((group, groupIndex) => (
              <Combobox.Group key={`group-${groupIndex}`} data-slot="group" className={cn("p-1 isolate", ui?.group)}>
                {group.map((entry, index) => renderItem(entry, index))}
              </Combobox.Group>
            ))
          )}
        </Combobox.List>
      </Combobox.InputGroup>
    </Combobox.Root>
  )
}
