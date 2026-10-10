/**
 * XSelectMenu 选择菜单：触发按钮 + 弹出选项列表（基于 Base UI Combobox）。
 * mode 区分 combobox（菜单内搜索）与 listbox（纯列表）；
 * items 支持字符串、对象与二维分组数组，labelKey / valueKey / descriptionKey 映射字段；
 * 选项可带 type: 'label' | 'separator' 渲染分组标题与分隔线。
 */
import * as React from "react"
import { Combobox } from "@base-ui/react/combobox"
import { XAvatar, type XAvatarProps } from "@/components/kit/x-avatar"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"
import { compare, filterGroups, getDisplayValue, getField, isEmpty } from "@/lib/kit/menu-utils"

/** 图标：XIcon 名称或自定义组件 */
export type XSelectMenuIcon =
  | XIconName
  | React.ComponentType<{
      className?: string
      "aria-hidden"?: boolean | "true" | "false"
      "data-slot"?: string
    }>

export type XSelectMenuSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XSelectMenuColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XSelectMenuVariant = "outline" | "soft" | "subtle" | "ghost" | "none"

/** 菜单内搜索框配置 */
export interface XSelectMenuSearchInput {
  placeholder?: string
  disabled?: boolean
}

/** 浮层定位配置 */
export interface XSelectMenuContentOptions {
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  alignOffset?: number
  sideOffset?: number
}

export interface XSelectMenuItem {
  label?: string
  description?: string
  icon?: XSelectMenuIcon
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
export interface XSelectMenuUi {
  base?: string
  leading?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: string
  trailing?: string
  trailingIcon?: string
  trailingClear?: string
  value?: string
  placeholder?: string
  content?: string
  focusScope?: string
  input?: string
  viewport?: string
  group?: string
  empty?: string
  label?: string
  separator?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: string
  itemWrapper?: string
  itemLabel?: string
  itemDescription?: string
  itemTrailing?: string
  itemTrailingIcon?: string
  arrow?: string
}

export interface XSelectMenuProps {
  /** 选项数据源，二维数组时按行分组 */
  items?: XSelectMenuItem[] | XSelectMenuItem[][]
  /** 选中值（受控） */
  value?: unknown
  /** 非受控初始值 */
  defaultValue?: unknown
  /** 受控打开状态 */
  open?: boolean
  /** 初始打开状态 */
  defaultOpen?: boolean
  /** 受控搜索词 */
  searchTerm?: string
  /** 底层模式：combobox 菜单内可搜索，listbox 纯列表 */
  mode?: "combobox" | "listbox"
  /** 菜单内搜索框：true 或 { placeholder, disabled } */
  searchInput?: boolean | XSelectMenuSearchInput
  /** 组件颜色 */
  color?: XSelectMenuColor
  /** 预设样式 */
  variant?: XSelectMenuVariant
  /** 尺寸 */
  size?: XSelectMenuSize
  /** 是否必填 */
  required?: boolean
  /** 占位提示文字 */
  placeholder?: string
  /** 展开图标 */
  trailingIcon?: XSelectMenuIcon
  /** 选中态图标 */
  selectedIcon?: XSelectMenuIcon
  /** 有选中项时显示清空按钮 */
  clear?: boolean
  /** 清空按钮图标 */
  clearIcon?: XSelectMenuIcon
  /** 浮层定位配置 */
  content?: XSelectMenuContentOptions
  /** 是否显示指向触发器的箭头 */
  arrow?: boolean
  /** 浮层是否渲染到 body */
  portal?: boolean
  /** 选项值字段 */
  valueKey?: string
  /** 选项标签字段 */
  labelKey?: string
  /** 选项说明字段 */
  descriptionKey?: string
  /** 多选模式 */
  multiple?: boolean
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 允许创建新选项：true / 'always' / { position, when } */
  createItem?: boolean | "always" | { position?: "top" | "bottom"; when?: "empty" | "always" }
  /** 过滤字段，默认 [labelKey] */
  filterFields?: string[]
  /** 忽略内置过滤（适合自定义过滤场景） */
  ignoreFilter?: boolean
  /** 是否自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延时（毫秒） */
  autofocusDelay?: number
  /** 指针悬停时高亮选项 */
  highlightOnHover?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 触发器 id */
  id?: string
  /** 表单字段名 */
  name?: string
  /** 前置图标 */
  icon?: XSelectMenuIcon
  /** 前置头像 */
  avatar?: Omit<XAvatarProps, "ui"> & { ui?: Record<string, string> }
  /** 加载态 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: XSelectMenuIcon
  /** 渲染为指定元素（触发按钮） */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XSelectMenuUi
  className?: string
  /** 值变化回调 */
  onValueChange?: (value: unknown) => void
  /** 值变化回调（事件形式） */
  onChange?: (event: Event) => void
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 搜索词变化回调 */
  onSearchTermChange?: (searchTerm: string) => void
  /** 关闭菜单时回调 */
  onBlur?: (event: FocusEvent) => void
  /** 打开菜单时回调 */
  onFocus?: (event: FocusEvent) => void
  /** 创建新选项时回调 */
  onCreate?: (item: string) => void
  /** 清空回调 */
  onClear?: () => void
  /** 高亮项变化回调 */
  onHighlight?: (payload: { ref: HTMLElement; value: unknown } | undefined) => void
  /** 前置内容 */
  leading?: React.ReactNode
  /** 后置内容 */
  trailing?: React.ReactNode
  /** 触发器内容（默认渲染选中值 / 占位文字） */
  children?: React.ReactNode
  /** 空数据内容 */
  empty?: React.ReactNode | ((props: { searchTerm: string }) => React.ReactNode)
  /** 自定义选项内容 */
  item?: (props: { item: XSelectMenuItem; index: number }) => React.ReactNode
  /** 自定义选项前置区域 */
  itemLeading?: (props: { item: XSelectMenuItem; index: number }) => React.ReactNode
  /** 自定义选项标签 */
  itemLabel?: (props: { item: XSelectMenuItem; index: number }) => React.ReactNode
  /** 自定义选项说明 */
  itemDescription?: (props: { item: XSelectMenuItem; index: number }) => React.ReactNode
  /** 自定义选项尾部区域 */
  itemTrailing?: (props: { item: XSelectMenuItem; index: number }) => React.ReactNode
  /** 内容顶部区域 */
  contentTop?: React.ReactNode
  /** 内容底部区域 */
  contentBottom?: React.ReactNode
  /** 创建项文案 */
  createItemLabel?: (props: { item: string }) => React.ReactNode
}

/** 尺寸映射：base / item / label / empty / 图标 / 左右内边距 */
const sizeClasses: Record<XSelectMenuSize, { base: string; leading: string; trailing: string; item: string; label: string; empty: string; icon: string }> = {
  xs: { base: "h-7 text-xs", leading: "ps-2", trailing: "pe-2", item: "p-1 text-xs gap-1", label: "p-1 text-[10px] gap-1", empty: "p-2 text-xs", icon: "size-4" },
  sm: { base: "h-8 text-sm", leading: "ps-2.5", trailing: "pe-2.5", item: "p-1.5 text-xs gap-1.5", label: "p-1.5 text-[10px] gap-1.5", empty: "p-2.5 text-xs", icon: "size-4" },
  md: { base: "h-9 text-sm", leading: "ps-3", trailing: "pe-3", item: "p-1.5 text-sm gap-1.5", label: "p-1.5 text-xs gap-1.5", empty: "p-2.5 text-sm", icon: "size-5" },
  lg: { base: "h-10 text-base", leading: "ps-3", trailing: "pe-3", item: "p-2 text-sm gap-2", label: "p-2 text-xs gap-2", empty: "p-3 text-sm", icon: "size-5" },
  xl: { base: "h-11 text-base", leading: "ps-3.5", trailing: "pe-3.5", item: "p-2 text-base gap-2", label: "p-2 text-sm gap-2", empty: "p-3 text-base", icon: "size-6" },
}

/** 变体映射 */
const variantClasses: Record<XSelectMenuVariant, string> = {
  outline: "bg-transparent ring-1 ring-inset ring-input hover:bg-muted/50",
  soft: "bg-muted/50 hover:bg-muted",
  subtle: "bg-muted ring-1 ring-inset ring-input",
  ghost: "bg-transparent hover:bg-muted",
  none: "bg-transparent",
}

/** 颜色映射：聚焦描边 */
const colorClasses: Record<XSelectMenuColor, string> = {
  primary: "focus-visible:ring-2 focus-visible:ring-primary-5",
  secondary: "focus-visible:ring-2 focus-visible:ring-secondary",
  neutral: "focus-visible:ring-2 focus-visible:ring-foreground",
  success: "focus-visible:ring-2 focus-visible:ring-success-5",
  info: "focus-visible:ring-2 focus-visible:ring-info-5",
  warning: "focus-visible:ring-2 focus-visible:ring-warning-5",
  error: "focus-visible:ring-2 focus-visible:ring-error-5",
}

/** 高亮描边颜色 */
const highlightClasses: Record<XSelectMenuColor, string> = {
  primary: "ring-primary-5",
  secondary: "ring-secondary",
  neutral: "ring-foreground/30",
  success: "ring-success-5",
  info: "ring-info-5",
  warning: "ring-warning-5",
  error: "ring-error-5",
}

/** 渲染图标：字符串走 XIcon，组件直接渲染 */
function renderIcon(
  icon: XSelectMenuIcon | undefined,
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

export function XSelectMenu({
  items = [],
  value,
  defaultValue,
  open,
  defaultOpen,
  searchTerm,
  mode = "combobox",
  searchInput = true,
  color = "primary",
  variant = "outline",
  size = "md",
  required = false,
  placeholder,
  trailingIcon = "chevron-down",
  selectedIcon = "check",
  clear = false,
  clearIcon = "x",
  content,
  arrow = false,
  portal = true,
  valueKey,
  labelKey = "label",
  descriptionKey = "description",
  multiple = false,
  highlight = false,
  fixed: _fixed = false,
  createItem = false,
  filterFields,
  ignoreFilter = false,
  autofocus = false,
  autofocusDelay: _autofocusDelay = 0,
  highlightOnHover = true,
  disabled = false,
  id,
  name,
  icon,
  avatar,
  loading = false,
  loadingIcon = "loader-circle",
  render,
  ui,
  className,
  onValueChange,
  onChange,
  onOpenChange,
  onSearchTermChange,
  onBlur,
  onFocus,
  onCreate,
  onClear,
  onHighlight,
  leading,
  trailing,
  children,
  empty,
  item: itemSlot,
  itemLeading,
  itemLabel,
  itemDescription,
  itemTrailing,
  contentTop,
  contentBottom,
  createItemLabel,
}: XSelectMenuProps) {
  const [innerValue, setInnerValue] = React.useState<unknown>(defaultValue)
  const currentValue = value !== undefined ? value : innerValue
  const [innerOpen, setInnerOpen] = React.useState(defaultOpen ?? false)
  const currentOpen = open !== undefined ? open : innerOpen
  const [innerSearchTerm, setInnerSearchTerm] = React.useState("")
  const currentSearchTerm = searchTerm !== undefined ? searchTerm : innerSearchTerm

  const labelField = labelKey || "label"
  const descriptionField = descriptionKey || "description"

  /* 分组：平铺数组视为单组 */
  const groups = React.useMemo<XSelectMenuItem[][]>(() => {
    if (!items?.length) return []
    return Array.isArray(items[0]) ? (items as XSelectMenuItem[][]) : [items as XSelectMenuItem[]]
  }, [items])
  const flatItems = React.useMemo(() => groups.flatMap((group) => group), [groups])

  const isStructural = (entry: XSelectMenuItem) => !!entry?.type && ["label", "separator"].includes(entry.type)

  /* 过滤：ignoreFilter 或空关键字时保持原样 */
  const filteredGroups = React.useMemo(() => {
    if (ignoreFilter || !currentSearchTerm) return groups
    const fields = Array.isArray(filterFields) ? filterFields : [labelField]
    return filterGroups(groups, currentSearchTerm, { fields, isStructural })
  }, [groups, currentSearchTerm, ignoreFilter, filterFields, labelField])

  const filteredItems = React.useMemo(() => filteredGroups.flatMap((group) => group), [filteredGroups])

  const itemValue = (entry: XSelectMenuItem) => (valueKey ? getField(entry, valueKey) : entry)

  /* 创建项：按 createItem 配置决定是否出现 */
  const createItemValue = React.useMemo(() => {
    if (!createItem || !currentSearchTerm) return false
    const candidate = valueKey ? { [valueKey]: currentSearchTerm } : currentSearchTerm
    const exists = filteredItems.some((entry) => compare(entry, candidate, valueKey))
    if (createItem === "always" || (typeof createItem === "object" && createItem.when === "always")) return !exists
    return filteredItems.length === 0
  }, [createItem, currentSearchTerm, valueKey, filteredItems])
  const createItemPosition = typeof createItem === "object" ? createItem.position ?? "bottom" : "bottom"

  const selectedValues = React.useMemo(
    () => (multiple ? (Array.isArray(currentValue) ? currentValue : []) : isEmpty(currentValue) ? [] : [currentValue]),
    [multiple, currentValue],
  )

  /* 触发器显示文本：多选时逗号拼接 */
  const displayValue = React.useMemo(() => {
    if (multiple && Array.isArray(currentValue)) {
      return (
        currentValue
          .map((entry) => getDisplayValue(flatItems, entry, { labelKey: labelField, valueKey }))
          .filter((entry): entry is string => entry != null && entry !== "")
          .join(", ") || undefined
      )
    }
    return getDisplayValue(flatItems, currentValue, { labelKey: labelField, valueKey })
  }, [multiple, currentValue, flatItems, labelField, valueKey])

  const showClear = !!clear && !disabled && selectedValues.length > 0
  const clearButtonEnd = sizeClasses[size].trailing.replace("pe-", "end-")
  const showSearchInput = mode === "combobox" && searchInput !== false
  const searchInputPlaceholder = typeof searchInput === "object" ? searchInput.placeholder : undefined
  const showLeading = !!icon || !!avatar || leading != null
  const currentSize = sizeClasses[size]

  const updateValue = React.useCallback(
    (next: unknown) => {
      if (value === undefined) setInnerValue(next)
      onValueChange?.(next)
      onChange?.(new Event("change"))
    },
    [value, onValueChange, onChange],
  )

  const updateOpen = React.useCallback(
    (next: boolean) => {
      if (open === undefined) setInnerOpen(next)
      onOpenChange?.(next)
      if (next) onFocus?.(new FocusEvent("focus"))
      else onBlur?.(new FocusEvent("blur"))
      if (!next) {
        setInnerSearchTerm("")
        onSearchTermChange?.("")
      }
    },
    [open, onOpenChange, onFocus, onBlur, onSearchTermChange],
  )

  const updateSearchTerm = React.useCallback(
    (next: string) => {
      if (searchTerm === undefined) setInnerSearchTerm(next)
      onSearchTermChange?.(next)
    },
    [searchTerm, onSearchTermChange],
  )

  const handleClear = () => {
    updateValue(multiple ? [] : undefined)
    onClear?.()
  }

  const handleCreate = (event: React.MouseEvent) => {
    event.preventDefault()
    onCreate?.(currentSearchTerm)
  }

  /* 触发按钮内容：前置、选中值 / 占位、后置图标 */
  const triggerContent = (
    <>
      {showLeading && (
        <span data-slot="leading" className={cn("absolute inset-y-0 start-0 flex items-center", currentSize.leading, ui?.leading)}>
          {leading ?? (
            <>
              {icon != null && renderIcon(icon, cn("shrink-0 text-muted-foreground", currentSize.icon, ui?.leadingIcon), "leadingIcon")}
              {icon == null && avatar != null && (
                <XAvatar {...avatar} data-slot="leadingAvatar" className={cn("shrink-0", ui?.leadingAvatar)} />
              )}
            </>
          )}
        </span>
      )}

      {children ?? (
        displayValue != null ? (
          <span data-slot="value" className={cn("truncate", ui?.value)}>
            {displayValue}
          </span>
        ) : (
          <span data-slot="placeholder" className={cn("truncate text-muted-foreground", ui?.placeholder)}>
            {placeholder ?? "\u00A0"}
          </span>
        )
      )}

      {(trailing != null || trailingIcon != null || loading) && (
        <span data-slot="trailing" className={cn("ms-auto flex shrink-0 items-center gap-1.5", ui?.trailing)}>
          {trailing ?? (
            loading ? (
              renderIcon(loadingIcon, cn("animate-spin text-muted-foreground", currentSize.icon, ui?.trailingIcon), "trailingIcon")
            ) : (
              <span
                data-slot="trailingIcon"
                className={cn("flex transition-transform", currentOpen && "rotate-180")}
              >
                {renderIcon(trailingIcon, cn("shrink-0 text-muted-foreground", currentSize.icon, ui?.trailingIcon), "trailingIcon")}
              </span>
            )
          )}
        </span>
      )}
    </>
  )

  const triggerClasses = cn(
    "group relative flex w-full min-w-40 cursor-pointer items-center gap-2 rounded-md px-3 outline-none",
    "transition-[box-shadow,color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75",
    currentSize.base,
    variantClasses[variant],
    colorClasses[color],
    highlight && cn("ring-2 ring-inset", highlightClasses[color]),
    showLeading && currentSize.leading,
    (showClear || trailing != null || trailingIcon != null || loading) && currentSize.trailing,
    ui?.base,
    className,
  )

  const renderItem = (entry: XSelectMenuItem, index: number): React.ReactNode => {
    if (entry?.type === "label") {
      return (
        <Combobox.GroupLabel
          key={`label-${index}`}
          data-slot="label"
          className={cn("font-semibold text-foreground", currentSize.label, entry.className, ui?.label, entry.ui?.label)}
        >
          {getField(entry, labelField)}
        </Combobox.GroupLabel>
      )
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

    return (
      <Combobox.Item
        key={`item-${index}`}
        value={itemValue(entry)}
        disabled={entry.disabled}
        data-slot="item"
        className={cn(
          "relative flex w-full cursor-default items-start rounded-md outline-none select-none",
          "data-disabled:pointer-events-none data-disabled:opacity-75",
          "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
          currentSize.item,
          entry.className,
          ui?.item,
          entry.ui?.item,
        )}
        onClick={(event) => {
          if (entry.disabled) {
            event.preventDefault()
            return
          }
          entry.onSelect?.(event.nativeEvent)
        }}
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

        <span data-slot="itemWrapper" className={cn("flex min-w-0 flex-1 flex-col", ui?.itemWrapper, entry.ui?.itemWrapper)}>
          <span data-slot="itemLabel" className={cn("truncate", ui?.itemLabel, entry.ui?.itemLabel)}>
            {itemLabel != null ? itemLabel({ item: entry, index }) : getField(entry, labelField) ?? entry}
          </span>
          {(getField(entry, descriptionField) != null || itemDescription != null) && (
            <span data-slot="itemDescription" className={cn("truncate text-muted-foreground", ui?.itemDescription, entry.ui?.itemDescription)}>
              {itemDescription != null ? itemDescription({ item: entry, index }) : getField(entry, descriptionField)}
            </span>
          )}
        </span>

        <span data-slot="itemTrailing" className={cn("ms-auto inline-flex items-center gap-1.5", ui?.itemTrailing, entry.ui?.itemTrailing)}>
          {itemTrailing?.({ item: entry, index })}
          <Combobox.ItemIndicator>
            {renderIcon(selectedIcon, cn("shrink-0", currentSize.icon, ui?.itemTrailingIcon, entry.ui?.itemTrailingIcon), "itemTrailingIcon")}
          </Combobox.ItemIndicator>
        </span>
      </Combobox.Item>
    )
  }

  const listContent = (
    <>
      {createItemValue && createItemPosition === "top" && (
        <Combobox.Group data-slot="group" className={cn("p-1", ui?.group)}>
          <Combobox.Item value={currentSearchTerm} data-slot="item" className={cn("relative flex w-full items-start rounded-md", currentSize.item, ui?.item)} onClick={handleCreate}>
            <span data-slot="itemLabel" className={cn("truncate", ui?.itemLabel)}>
              {createItemLabel != null ? createItemLabel({ item: currentSearchTerm }) : `创建 "${currentSearchTerm}"`}
            </span>
          </Combobox.Item>
        </Combobox.Group>
      )}

      {filteredGroups.map((group, groupIndex) => (
        <Combobox.Group key={`group-${groupIndex}`} data-slot="group" className={cn("p-1", ui?.group)}>
          {group.map((entry, index) => renderItem(entry, index))}
        </Combobox.Group>
      ))}

      {createItemValue && createItemPosition === "bottom" && (
        <Combobox.Group data-slot="group" className={cn("p-1", ui?.group)}>
          <Combobox.Item value={currentSearchTerm} data-slot="item" className={cn("relative flex w-full items-start rounded-md", currentSize.item, ui?.item)} onClick={handleCreate}>
            <span data-slot="itemLabel" className={cn("truncate", ui?.itemLabel)}>
              {createItemLabel != null ? createItemLabel({ item: currentSearchTerm }) : `创建 "${currentSearchTerm}"`}
            </span>
          </Combobox.Item>
        </Combobox.Group>
      )}
    </>
  )

  const popup = (
    <Combobox.Positioner
      side={content?.side ?? "bottom"}
      align={content?.align ?? "start"}
      sideOffset={content?.sideOffset ?? 8}
      alignOffset={content?.alignOffset}
    >
      <Combobox.Popup
        data-slot="content"
        className={cn(
          "z-50 flex w-[var(--anchor-width)] min-w-40 flex-col overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
          ui?.content,
        )}
      >
        <div data-slot="focusScope" className={cn("flex min-h-0 flex-col", ui?.focusScope)}>
          {contentTop}

          {showSearchInput && (
            <Combobox.Input
              autoFocus={autofocus}
              value={currentSearchTerm}
              disabled={disabled || (typeof searchInput === "object" && searchInput.disabled)}
              placeholder={searchInputPlaceholder ?? "输入关键字搜索"}
              data-slot="input"
              className={cn("h-9 w-full border-0 border-b bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground", ui?.input)}
              onChange={(event) => updateSearchTerm(event.target.value)}
            />
          )}

          {!createItemValue && (
            <Combobox.Empty data-slot="empty" className={cn("text-center text-muted-foreground", currentSize.empty, ui?.empty)}>
              {empty != null ? (typeof empty === "function" ? empty({ searchTerm: currentSearchTerm }) : empty) : "无匹配选项"}
            </Combobox.Empty>
          )}

          <Combobox.List data-slot="viewport" className={cn("relative max-h-60 flex-1 overflow-y-auto scroll-py-1", ui?.viewport)}>
            {listContent}
          </Combobox.List>

          {contentBottom}

          {arrow && <Combobox.Arrow data-slot="arrow" className={cn("fill-popover stroke-border", ui?.arrow)} />}
        </div>
      </Combobox.Popup>
    </Combobox.Positioner>
  )

  return (
    <Combobox.Root
      items={flatItems}
      filter={null}
      value={currentValue as any}
      onValueChange={(next) => updateValue(next)}
      open={currentOpen}
      onOpenChange={updateOpen}
      inputValue={currentSearchTerm}
      onInputValueChange={(next) => updateSearchTerm(next)}
      onItemHighlighted={(next, details) => onHighlight?.(next === undefined ? undefined : { ref: (details as any).event?.target, value: next })}
      multiple={mode === "combobox" || mode === "listbox" ? multiple : false}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      highlightItemOnHover={highlightOnHover}
      itemToStringLabel={(entry: any) => String(getField(entry, labelField) ?? entry ?? "")}
    >
      <div data-slot="wrapper" className="relative">
        <Combobox.Trigger
          render={render}
          data-slot="base"
          className={triggerClasses}
          onKeyDown={(event) => {
            if ((event.key === "ArrowDown" || event.key === "ArrowUp") && !currentOpen) {
              event.preventDefault()
              updateOpen(true)
            }
          }}
        >
          {triggerContent}
        </Combobox.Trigger>

        {showClear && trailing == null && (
          <button
            type="button"
            tabIndex={-1}
            aria-label="清空"
            data-slot="trailingClear"
            className={cn(
              "absolute inset-y-0 flex items-center",
              clearButtonEnd,
              "text-muted-foreground opacity-70 hover:opacity-100",
              ui?.trailingClear,
            )}
            onClick={handleClear}
          >
            {renderIcon(clearIcon, "size-3.5")}
          </button>
        )}
      </div>

      {portal ? <Combobox.Portal>{popup}</Combobox.Portal> : popup}
    </Combobox.Root>
  )
}
