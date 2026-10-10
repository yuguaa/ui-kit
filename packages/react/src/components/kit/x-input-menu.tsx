/**
 * XInputMenu 输入菜单：输入框 + 弹出建议列表（基于 Base UI Combobox）。
 * mode 区分 combobox（输入框即搜索）、autocomplete（自由文本）与 listbox（输入框只读，搜索框在菜单内）；
 * items 支持字符串、对象与二维分组数组，labelKey / valueKey / descriptionKey 映射字段。
 */
import * as React from "react"
import { Combobox } from "@base-ui/react/combobox"
import { XAvatar, type XAvatarProps } from "@/components/kit/x-avatar"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"
import { compare, filterGroups, getDisplayValue, getField, isEmpty } from "@/lib/kit/menu-utils"

/** 图标：XIcon 名称或自定义组件 */
export type XInputMenuIcon =
  | XIconName
  | React.ComponentType<{
      className?: string
      "aria-hidden"?: boolean | "true" | "false"
      "data-slot"?: string
    }>

export type XInputMenuSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XInputMenuColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XInputMenuVariant = "outline" | "soft" | "subtle" | "ghost" | "none"

/** 菜单内搜索框配置 */
export interface XInputMenuSearchInput {
  placeholder?: string
  disabled?: boolean
}

/** 浮层定位配置 */
export interface XInputMenuContentOptions {
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  alignOffset?: number
  sideOffset?: number
}

export interface XInputMenuItem {
  label?: string
  description?: string
  icon?: XInputMenuIcon
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
export interface XInputMenuUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: string
  trailing?: string
  trailingIcon?: string
  trailingClear?: string
  content?: string
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
  tagsInput?: string
  tagsItem?: string
  tagsItemText?: string
  tagsItemDelete?: string
  tagsItemDeleteIcon?: string
  arrow?: string
}

export interface XInputMenuProps {
  /** 建议项数据源，二维数组时按行分组 */
  items?: XInputMenuItem[] | XInputMenuItem[][]
  /** 选中值（受控；autocomplete 模式下为输入文本） */
  value?: unknown
  /** 非受控初始值 */
  defaultValue?: unknown
  /** 受控打开状态 */
  open?: boolean
  /** 初始打开状态 */
  defaultOpen?: boolean
  /** 底层模式：combobox 输入框即搜索，autocomplete 自由文本，listbox 输入框只读、搜索框在菜单内 */
  mode?: "combobox" | "autocomplete" | "listbox"
  /** 菜单内搜索框：true 或 { placeholder, disabled }（listbox 模式） */
  searchInput?: boolean | XInputMenuSearchInput
  /** 组件颜色 */
  color?: XInputMenuColor
  /** 预设样式 */
  variant?: XInputMenuVariant
  /** 尺寸 */
  size?: XInputMenuSize
  /** 原生输入框类型 */
  type?: string
  /** 是否必填 */
  required?: boolean
  /** 占位提示文字 */
  placeholder?: string
  /** 展开图标 */
  trailingIcon?: XInputMenuIcon
  /** 选中态图标 */
  selectedIcon?: XInputMenuIcon
  /** 删除标签图标（multiple 模式） */
  deleteIcon?: XInputMenuIcon
  /** 有选中项时显示清空按钮 */
  clear?: boolean
  /** 清空按钮图标 */
  clearIcon?: XInputMenuIcon
  /** 浮层定位配置 */
  content?: XInputMenuContentOptions
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
  /** 输入框 id */
  id?: string
  /** 表单字段名 */
  name?: string
  /** 前置图标 */
  icon?: XInputMenuIcon
  /** 前置头像 */
  avatar?: Omit<XAvatarProps, "ui"> & { ui?: Record<string, string> }
  /** 加载态 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: XInputMenuIcon
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XInputMenuUi
  className?: string
  /** 值变化回调 */
  onValueChange?: (value: unknown) => void
  /** 值变化回调（事件形式） */
  onChange?: (event: Event) => void
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 输入框失焦回调 */
  onBlur?: (event: FocusEvent) => void
  /** 输入框聚焦回调 */
  onFocus?: (event: FocusEvent) => void
  /** 创建新选项时回调 */
  onCreate?: (item: string) => void
  /** 清空回调 */
  onClear?: () => void
  /** 删除标签回调（multiple 模式） */
  onRemoveTag?: (value: unknown) => void
  /** 高亮项变化回调 */
  onHighlight?: (payload: { ref: HTMLElement; value: unknown } | undefined) => void
  /** 前置内容 */
  leading?: React.ReactNode
  /** 后置内容 */
  trailing?: React.ReactNode
  /** 空数据内容 */
  empty?: React.ReactNode | ((props: { searchTerm: string }) => React.ReactNode)
  /** 自定义选项内容 */
  item?: (props: { item: XInputMenuItem; index: number }) => React.ReactNode
  /** 自定义选项前置区域 */
  itemLeading?: (props: { item: XInputMenuItem; index: number }) => React.ReactNode
  /** 自定义选项标签 */
  itemLabel?: (props: { item: XInputMenuItem; index: number }) => React.ReactNode
  /** 自定义选项说明 */
  itemDescription?: (props: { item: XInputMenuItem; index: number }) => React.ReactNode
  /** 自定义选项尾部区域 */
  itemTrailing?: (props: { item: XInputMenuItem; index: number }) => React.ReactNode
  /** 自定义标签文本（multiple 模式） */
  tagsItemText?: (props: { item: unknown; index: number }) => React.ReactNode
  /** 自定义标签删除按钮（multiple 模式） */
  tagsItemDelete?: (props: { item: unknown; index: number }) => React.ReactNode
  /** 内容顶部区域 */
  contentTop?: React.ReactNode
  /** 内容底部区域 */
  contentBottom?: React.ReactNode
  /** 创建项文案 */
  createItemLabel?: (props: { item: string }) => React.ReactNode
  /** 自定义菜单内搜索框（listbox 模式） */
  searchInputSlot?: (props: { keyword: string; onInput: (value: string) => void }) => React.ReactNode
}

/** 尺寸映射：base / item / label / empty / 图标 / 左右内边距 */
const sizeClasses: Record<XInputMenuSize, { base: string; leading: string; trailing: string; item: string; label: string; empty: string; icon: string }> = {
  xs: { base: "h-6 text-sm", leading: "ps-2", trailing: "pe-2", item: "p-1 text-xs gap-1", label: "p-1 text-[10px] gap-1", empty: "p-2 text-xs", icon: "size-4" },
  sm: { base: "h-7 text-sm", leading: "ps-2.5", trailing: "pe-2.5", item: "p-1.5 text-xs gap-1.5", label: "p-1.5 text-[10px] gap-1.5", empty: "p-2.5 text-xs", icon: "size-4" },
  md: { base: "h-8 text-base", leading: "ps-3", trailing: "pe-3", item: "p-1.5 text-sm gap-1.5", label: "p-1.5 text-xs gap-1.5", empty: "p-2.5 text-sm", icon: "size-5" },
  lg: { base: "h-9 text-base", leading: "ps-3", trailing: "pe-3", item: "p-2 text-sm gap-2", label: "p-2 text-xs gap-2", empty: "p-3 text-sm", icon: "size-5" },
  xl: { base: "h-11 text-base", leading: "ps-3.5", trailing: "pe-3.5", item: "p-2 text-base gap-2", label: "p-2 text-sm gap-2", empty: "p-3 text-base", icon: "size-6" },
}

/** 变体映射 */
const variantClasses: Record<XInputMenuVariant, string> = {
  outline: "bg-transparent ring-1 ring-inset ring-input",
  soft: "bg-muted/50 hover:bg-muted",
  subtle: "bg-muted ring-1 ring-inset ring-input",
  ghost: "bg-transparent hover:bg-muted",
  none: "bg-transparent",
}

/** 颜色映射：聚焦描边 */
const colorClasses: Record<XInputMenuColor, string> = {
  primary: "focus-within:ring-2 focus-within:ring-primary-5",
  secondary: "focus-within:ring-2 focus-within:ring-secondary",
  neutral: "focus-within:ring-2 focus-within:ring-foreground",
  success: "focus-within:ring-2 focus-within:ring-success-5",
  info: "focus-within:ring-2 focus-within:ring-info-5",
  warning: "focus-within:ring-2 focus-within:ring-warning-5",
  error: "focus-within:ring-2 focus-within:ring-error-5",
}

/** 高亮描边颜色 */
const highlightClasses: Record<XInputMenuColor, string> = {
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
  icon: XInputMenuIcon | undefined,
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

export function XInputMenu({
  items = [],
  value,
  defaultValue,
  open,
  defaultOpen,
  mode = "combobox",
  searchInput = true,
  color = "primary",
  variant = "outline",
  size = "md",
  type = "text",
  required = false,
  placeholder,
  trailingIcon = "chevron-down",
  selectedIcon = "check",
  deleteIcon = "x",
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
  fixed = false,
  createItem = false,
  filterFields,
  ignoreFilter = false,
  autofocus = false,
  autofocusDelay = 0,
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
  onBlur,
  onFocus,
  onCreate,
  onClear,
  onRemoveTag,
  onHighlight,
  leading,
  trailing,
  empty,
  item: itemSlot,
  itemLeading,
  itemLabel,
  itemDescription,
  itemTrailing,
  tagsItemText,
  tagsItemDelete,
  contentTop,
  contentBottom,
  createItemLabel,
  searchInputSlot,
}: XInputMenuProps) {
  const [innerValue, setInnerValue] = React.useState<unknown>(defaultValue)
  const currentValue = value !== undefined ? value : innerValue
  const [innerOpen, setInnerOpen] = React.useState(defaultOpen ?? false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const currentOpen = open !== undefined ? open : innerOpen

  /* autofocus:打开后延迟聚焦输入框 */
  React.useEffect(() => {
    if (!currentOpen || !autofocus) return
    const timer = setTimeout(() => inputRef.current?.focus(), autofocusDelay)
    return () => clearTimeout(timer)
  }, [currentOpen, autofocus, autofocusDelay])
  const [searchTerm, setSearchTerm] = React.useState("")

  const labelField = labelKey || "label"
  const descriptionField = descriptionKey || "description"
  const isAutocomplete = mode === "autocomplete"
  const isListbox = mode === "listbox"
  const isMultiple = multiple && !isAutocomplete

  /* 分组：平铺数组视为单组 */
  const groups = React.useMemo<XInputMenuItem[][]>(() => {
    if (!items?.length) return []
    return Array.isArray(items[0]) ? (items as XInputMenuItem[][]) : [items as XInputMenuItem[]]
  }, [items])
  const flatItems = React.useMemo(() => groups.flatMap((group) => group), [groups])

  /* valueKey 存在时用 createItems 派生选中值与展示标签，value 为字段值而非整个对象 */
  const collection = React.useMemo(
    () =>
      valueKey
        ? Combobox.createItems(flatItems, {
            getValue: (entry: XInputMenuItem) => getField(entry, valueKey),
            getLabel: (entry: XInputMenuItem) => String(getField(entry, labelField) ?? ""),
          })
        : flatItems,
    [flatItems, valueKey, labelField],
  )

  const isStructural = (entry: XInputMenuItem) => !!entry?.type && ["label", "separator"].includes(entry.type)

  /* 过滤：ignoreFilter 或空关键字时保持原样 */
  const filteredGroups = React.useMemo(() => {
    if (ignoreFilter || !searchTerm) return groups
    const fields = Array.isArray(filterFields) ? filterFields : [labelField]
    return filterGroups(groups, searchTerm, { fields, isStructural })
  }, [groups, searchTerm, ignoreFilter, filterFields, labelField])
  const filteredItems = React.useMemo(() => filteredGroups.flatMap((group) => group), [filteredGroups])

  const itemValue = (entry: XInputMenuItem) => (valueKey ? getField(entry, valueKey) : entry)

  const createItemValue = React.useMemo(() => {
    if (!createItem || !searchTerm) return false
    const candidate = valueKey ? { [valueKey]: searchTerm } : searchTerm
    const exists = filteredItems.some((entry) => compare(entry, candidate, valueKey))
    if (createItem === "always" || (typeof createItem === "object" && createItem.when === "always")) return !exists
    return filteredItems.length === 0
  }, [createItem, searchTerm, valueKey, filteredItems])
  const createItemPosition = typeof createItem === "object" ? createItem.position ?? "bottom" : "bottom"

  const selectedValues = React.useMemo(
    () => (isMultiple ? (Array.isArray(currentValue) ? currentValue : []) : isEmpty(currentValue) ? [] : [currentValue]),
    [isMultiple, currentValue],
  )

  /* 输入框显示文本 */
  const displayValue = React.useMemo(() => {
    if (isAutocomplete) return String(currentValue ?? "")
    if (isListbox || isMultiple) return ""
    return getDisplayValue(flatItems, currentValue, { labelKey: labelField, valueKey }) ?? ""
  }, [isAutocomplete, isListbox, isMultiple, currentValue, flatItems, labelField, valueKey])

  const showClear = !!clear && !disabled && selectedValues.length > 0
  const showSearchInput = isListbox && searchInput !== false
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
      else {
        onBlur?.(new FocusEvent("blur"))
        setSearchTerm("")
      }
    },
    [open, onOpenChange, onFocus, onBlur],
  )

  /* 根组件值变化：autocomplete 写入输入文本，其余写入选中值 */
  const handleRootValueChange = (next: any) => {    if (isAutocomplete) {
      const text = getDisplayValue(flatItems, next, { labelKey: labelField, valueKey }) ?? String(next ?? "")
      setSearchTerm(text)
      updateValue(text)
      return
    }
    updateValue(next)
  }

  /* 输入框输入：autocomplete 模式同步值 */
  const handleInputChange = (next: string) => {
    setSearchTerm(next)
    if (isAutocomplete) updateValue(next)
  }

  const handleClear = () => {
    setSearchTerm("")
    updateValue(isMultiple ? [] : undefined)
    onClear?.()
  }

  const handleCreate = (event: React.MouseEvent) => {
    event.preventDefault()
    onCreate?.(searchTerm)
  }

  const listContent = (
    <>
      {createItemValue && createItemPosition === "top" && (
        <Combobox.Group data-slot="group" className={cn("p-1", ui?.group)}>
          <Combobox.Item value={searchTerm} data-slot="item" className={cn("relative flex w-full items-start rounded-md", currentSize.item, ui?.item)} onClick={handleCreate}>
            <span data-slot="itemLabel" className={cn("truncate", ui?.itemLabel)}>
              {createItemLabel != null ? createItemLabel({ item: searchTerm }) : `创建 "${searchTerm}"`}
            </span>
          </Combobox.Item>
        </Combobox.Group>
      )}

      {filteredGroups.map((group, groupIndex) => (
        <Combobox.Group key={`group-${groupIndex}`} data-slot="group" className={cn("p-1", ui?.group)}>
          {group.map((entry, index) => {
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
                  "data-selected:bg-accent data-selected:text-accent-foreground",
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
                  {!isAutocomplete && (
                    <Combobox.ItemIndicator>
                      {renderIcon(selectedIcon, cn("shrink-0", currentSize.icon, ui?.itemTrailingIcon, entry.ui?.itemTrailingIcon), "itemTrailingIcon")}
                    </Combobox.ItemIndicator>
                  )}
                </span>
              </Combobox.Item>
            )
          })}
        </Combobox.Group>
      ))}

      {createItemValue && createItemPosition === "bottom" && (
        <Combobox.Group data-slot="group" className={cn("p-1", ui?.group)}>
          <Combobox.Item value={searchTerm} data-slot="item" className={cn("relative flex w-full items-start rounded-md", currentSize.item, ui?.item)} onClick={handleCreate}>
            <span data-slot="itemLabel" className={cn("truncate", ui?.itemLabel)}>
              {createItemLabel != null ? createItemLabel({ item: searchTerm }) : `创建 "${searchTerm}"`}
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
        {contentTop}

        {showSearchInput && (
          <span className="block p-1">
            {searchInputSlot != null ? (
              searchInputSlot({ keyword: searchTerm, onInput: (next) => setSearchTerm(next) })
            ) : (
              <input
                value={searchTerm}
                placeholder={searchInputPlaceholder ?? "输入关键字搜索"}
                disabled={disabled || (typeof searchInput === "object" && searchInput.disabled)}
                data-slot="input"
                className={cn("h-8 w-full rounded-sm border-0 bg-muted/50 px-2 text-sm outline-none placeholder:text-muted-foreground", ui?.input)}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            )}
          </span>
        )}

        {!createItemValue && (
          <Combobox.Empty data-slot="empty" className={cn("text-center text-muted-foreground", currentSize.empty, ui?.empty)}>
            {empty != null ? (typeof empty === "function" ? empty({ searchTerm }) : empty) : "无匹配选项"}
          </Combobox.Empty>
        )}

        <Combobox.List data-slot="viewport" className={cn("relative max-h-60 flex-1 overflow-y-auto scroll-py-1", ui?.viewport)}>
          {listContent}
        </Combobox.List>

        {contentBottom}

        {arrow && <Combobox.Arrow data-slot="arrow" className={cn("fill-popover stroke-border", ui?.arrow)} />}
      </Combobox.Popup>
    </Combobox.Positioner>
  )

  const inputGroupClass = cn(
    "relative flex w-full items-center rounded-md",
    "ring-1 ring-inset ring-input transition-[box-shadow,color]",
    "has-disabled:cursor-not-allowed has-disabled:opacity-75",
    colorClasses[color],
    highlight && cn("ring-2", highlightClasses[color]),
    variantClasses[variant],
    ui?.root,
    className,
  )

  return (
    <Combobox.Root
      items={collection as any}
      filter={null}
      value={currentValue as any}
      onValueChange={handleRootValueChange}
      open={currentOpen}
      onOpenChange={updateOpen}
      inputValue={isAutocomplete ? searchTerm : searchTerm !== "" ? searchTerm : displayValue}
      onInputValueChange={handleInputChange}
      onItemHighlighted={(next, details) =>
        onHighlight?.(next === undefined ? undefined : { ref: (details as any).event?.target, value: next })
      }
      multiple={isMultiple}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      highlightItemOnHover={highlightOnHover}
      itemToStringLabel={(entry: any) => String(getField(entry, labelField) ?? entry ?? "")}
    >
      <Combobox.InputGroup
        data-slot="root"
        className={inputGroupClass}
        render={render}
        onClick={() => {
          if (!currentOpen) updateOpen(true)
        }}
      >
        {isMultiple && (
          <Combobox.Value>
            {(selected: unknown[]) => (
              <Combobox.Chips className="flex min-h-0 w-full flex-wrap items-center gap-1 px-2 py-1">
                {selected.map((entry, index) => (
                  <Combobox.Chip
                    key={`${String(entry)}-${index}`}
                    data-slot="tagsItem"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-sm bg-elevated px-1.5 py-0.5 text-xs font-medium text-foreground ring-1 ring-inset ring-border",
                      ui?.tagsItem,
                    )}
                  >
                    <span data-slot="tagsItemText" className={cn("truncate", ui?.tagsItemText)}>
                      {tagsItemText != null
                        ? tagsItemText({ item: entry, index })
                        : getDisplayValue(flatItems, entry, { labelKey: labelField, valueKey })}
                    </span>
                    <Combobox.ChipRemove
                      data-slot="tagsItemDelete"
                      className={cn(
                        "inline-flex items-center rounded-xs text-muted-foreground hover:text-foreground disabled:pointer-events-none",
                        ui?.tagsItemDelete,
                      )}
                      onClick={() => onRemoveTag?.(entry)}
                    >
                      {tagsItemDelete != null
                        ? tagsItemDelete({ item: entry, index })
                        : renderIcon(deleteIcon, cn("shrink-0", ui?.tagsItemDeleteIcon), "tagsItemDeleteIcon")}
                    </Combobox.ChipRemove>
                  </Combobox.Chip>
                ))}
                <Combobox.Input
                  placeholder={selected.length > 0 ? "" : placeholder}
                  data-slot="tagsInput"
                  className={cn(
                    "min-w-12 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
                    ui?.base,
                    ui?.tagsInput,
                  )}
                />
              </Combobox.Chips>
            )}
          </Combobox.Value>
        )}

        {!isMultiple && (
          <Combobox.Input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            readOnly={isListbox}
            disabled={disabled}
            data-slot="base"
            ref={inputRef}
            className={cn(
              "w-full border-0 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
              "px-3",
              showLeading && currentSize.leading,
              (showClear || trailingIcon || loading || trailing != null) && currentSize.trailing,
              currentSize.base,
              fixed && "data-fixed",
              ui?.base,
            )}
          />
        )}

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

        {(showClear || trailing != null || trailingIcon != null || loading) && (
          <span data-slot="trailing" className={cn("absolute inset-y-0 end-0 flex items-center", currentSize.trailing, ui?.trailing)}>
            {trailing ?? (
              <>
                {loading ? (
                  renderIcon(loadingIcon, cn("animate-spin shrink-0 text-muted-foreground", currentSize.icon, ui?.trailingIcon), "trailingIcon")
                ) : showClear ? (
                  <button
                    type="button"
                    tabIndex={-1}
                    aria-label="清空"
                    data-slot="trailingClear"
                    className={cn(
                      "flex size-4 items-center justify-center rounded-full p-0 text-muted-foreground opacity-70 hover:opacity-100",
                      ui?.trailingClear,
                    )}
                    onClick={(event) => {
                      event.stopPropagation()
                      handleClear()
                    }}
                  >
                    {renderIcon(clearIcon, "size-3.5")}
                  </button>
                ) : (
                  <span data-slot="trailingIcon" className={cn("flex transition-transform", currentOpen && "rotate-180")}>
                    {renderIcon(trailingIcon, cn("shrink-0 text-muted-foreground", currentSize.icon, ui?.trailingIcon), "trailingIcon")}
                  </span>
                )}
              </>
            )}
          </span>
        )}
      </Combobox.InputGroup>

      {portal ? <Combobox.Portal>{popup}</Combobox.Portal> : popup}
    </Combobox.Root>
  )
}
