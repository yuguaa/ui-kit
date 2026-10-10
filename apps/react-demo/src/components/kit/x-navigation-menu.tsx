import * as React from "react"
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { XAvatar, type XAvatarSize } from "@/components/kit/x-avatar"
import { XBadge, type XBadgeSize } from "@/components/kit/x-badge"
import { XChip, type XChipSize } from "@/components/kit/x-chip"
import { XIcon } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"
import type { XMenuAvatar, XMenuColor, XMenuIcon } from "./x-dropdown-menu"

export type XNavigationMenuOrientation = "horizontal" | "vertical"
export type XNavigationMenuMode = "vertical" | "horizontal" | "inline"
export type XNavigationMenuVariant = "pill" | "link"
export type XNavigationMenuType = "single" | "multiple"
export type XNavigationMenuContentOrientation = "horizontal" | "vertical"

/** 折叠态 tooltip 配置 */
export interface XNavigationMenuTooltipOptions {
  /** 显示延迟（毫秒） */
  delayDuration?: number
  /** 浮层定位 */
  content?: { side?: "top" | "right" | "bottom" | "left"; sideOffset?: number }
}

/** 折叠态 popover 配置 */
export interface XNavigationMenuPopoverOptions {
  /** 浮层定位 */
  content?: {
    side?: "top" | "right" | "bottom" | "left"
    align?: "start" | "center" | "end"
    alignOffset?: number
    sideOffset?: number
  }
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XNavigationMenuUi {
  root?: string
  list?: string
  label?: string
  item?: string
  link?: string
  linkLeadingIcon?: string
  linkLeadingAvatar?: string
  linkLeadingAvatarSize?: XAvatarSize
  linkLeadingChipSize?: XChipSize
  linkTrailing?: string
  linkTrailingBadge?: string
  linkTrailingBadgeSize?: XBadgeSize
  linkTrailingIcon?: string
  linkLabel?: string
  linkLabelExternalIcon?: string
  childList?: string
  childLabel?: string
  childItem?: string
  childLink?: string
  childLinkWrapper?: string
  childLinkIcon?: string
  childLinkLabel?: string
  childLinkLabelExternalIcon?: string
  childLinkDescription?: string
  separator?: string
  viewportWrapper?: string
  viewport?: string
  content?: string
  indicator?: string
  arrow?: string
}

export interface XNavigationMenuItem {
  /** 菜单项唯一标识（可用 valueKey 指定其他字段） */
  key?: string
  /** 菜单项标题（可用 labelKey 指定其他字段） */
  label?: React.ReactNode
  /** 前置图标 */
  icon?: XMenuIcon
  /** 前置头像 */
  avatar?: XMenuAvatar
  /** 尾部徽标 */
  badge?: string | number
  /** 图标外包裹 chip */
  chip?: boolean
  /** 折叠时用 tooltip 显示标签 */
  tooltip?: boolean | XNavigationMenuTooltipOptions
  /** 折叠时用 popover 展示子菜单 */
  popover?: boolean | XNavigationMenuPopoverOptions
  /** 尾部图标（无子菜单时也可显示） */
  trailingIcon?: XMenuIcon
  /** 项类型：label 分组标题（仅垂直方向）/ trigger 强制可折叠 / link 链接 */
  type?: "label" | "trigger" | "link"
  /** 子菜单项 */
  children?: XNavigationMenuItem[]
  /** 子项说明（水平方向子菜单中显示） */
  description?: string
  /** 链接目标，为 _blank 时标签后显示 externalIcon */
  target?: string
  /** 默认展开（垂直手风琴） */
  defaultOpen?: boolean
  /** 受控展开（垂直手风琴） */
  open?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 选中回调 */
  onSelect?: (item: XNavigationMenuItem) => void
  className?: string
  [key: string]: any
}

export interface XNavigationMenuProps {
  /** 菜单项数组，二维数组时渲染多列表并以分隔线隔开 */
  items: XNavigationMenuItem[] | XNavigationMenuItem[][]
  /** 当前选中的 key（或 valueKey 字段值），用于高亮当前项 */
  selectedKeys?: string[]
  /** 受控值：水平方向为打开的面板项值，垂直方向为展开的手风琴项值 */
  value?: string | string[]
  /** 非受控初始值 */
  defaultValue?: string | string[]
  /** 垂直方向手风琴展开模式：single 单开，multiple 多开 */
  type?: XNavigationMenuType
  /** 垂直方向手风琴是否可关闭已展开项 */
  collapsible?: boolean
  /** 根级禁用（垂直方向手风琴） */
  disabled?: boolean
  /** 菜单模式（kit 既有属性，inline 等同垂直手风琴） */
  mode?: XNavigationMenuMode
  /** 排列方向 */
  orientation?: XNavigationMenuOrientation
  /** 语义色：选中项文字颜色 */
  color?: XMenuColor
  /** 预设样式 */
  variant?: XNavigationMenuVariant
  /** 垂直方向折叠为仅图标，子菜单用 popover / 标签用 tooltip 展示 */
  collapsed?: boolean
  /** 折叠时显示标签提示 */
  tooltip?: boolean | XNavigationMenuTooltipOptions
  /** 折叠时子菜单用 popover 展示 */
  popover?: boolean | XNavigationMenuPopoverOptions
  /** 选中项显示指示线 */
  highlight?: boolean
  /** 指示线颜色 */
  highlightColor?: XMenuColor
  /** 子菜单展开图标 */
  trailingIcon?: XMenuIcon
  /** 外链图标，false 时隐藏 */
  externalIcon?: boolean | XMenuIcon
  /** 水平方向显示指示箭头 */
  arrow?: boolean
  /** 水平方向内容面板配置 */
  content?: { align?: "start" | "center" | "end"; alignOffset?: number }
  /** 内容面板排列方向（仅水平模式） */
  contentOrientation?: XNavigationMenuContentOrientation
  /** 菜单项标题字段 */
  labelKey?: string
  /** 菜单项值字段 */
  valueKey?: string
  /** 菜单主题（kit 既有属性，dark 为深色底） */
  theme?: "light" | "dark"
  /** 主题插槽类名 */
  ui?: XNavigationMenuUi
  /** 渲染为指定元素（根容器） */
  render?: React.ReactElement
  /** 点击菜单项的回调 */
  onClick?: (item: XNavigationMenuItem) => void
  /** 选中菜单项的回调 */
  onSelect?: (item: XNavigationMenuItem) => void
  /** 展开值变化回调 */
  onValueChange?: (value: string | string[] | undefined) => void
  /** 列表前内容 */
  listLeadingSlot?: () => React.ReactNode
  /** 列表后内容 */
  listTrailingSlot?: () => React.ReactNode
  /** 自定义项内容面板（水平模式与折叠 popover） */
  itemContentSlot?: (props: {
    item: XNavigationMenuItem
    index: number
    active: boolean
    ui?: XNavigationMenuUi
    close?: () => void
  }) => React.ReactNode
  /** 完全自定义菜单项 */
  itemSlot?: (props: { item: XNavigationMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项前置区域 */
  itemLeadingSlot?: (props: { item: XNavigationMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项标题 */
  itemLabelSlot?: (props: { item: XNavigationMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项尾部区域 */
  itemTrailingSlot?: (props: { item: XNavigationMenuItem; index: number; active: boolean }) => React.ReactNode
  className?: string
}

/** 语义色文字：选中项与图标（link 变体） */
const navColorTextClasses: Record<XMenuColor, string> = {
  primary: "text-primary-6",
  secondary: "text-secondary-foreground",
  neutral: "text-foreground",
  success: "text-success-6",
  info: "text-info-6",
  warning: "text-warning-7",
  error: "text-error-6",
}

/** 语义色选中背景（pill 变体） */
const navActivePillClasses: Record<XMenuColor, string> = {
  primary: "bg-primary-1 text-primary-7",
  secondary: "bg-secondary text-secondary-foreground",
  neutral: "bg-muted text-foreground",
  success: "bg-success-1 text-success-7",
  info: "bg-info-1 text-info-7",
  warning: "bg-warning-1 text-warning-8",
  error: "bg-error-1 text-error-7",
}

/** 语义色指示线 */
const navHighlightLineClasses: Record<XMenuColor, string> = {
  primary: "after:bg-primary-6",
  secondary: "after:bg-secondary",
  neutral: "after:bg-inverted",
  success: "after:bg-success-6",
  info: "after:bg-info-6",
  warning: "after:bg-warning-6",
  error: "after:bg-error-6",
}

/** 把受控值统一转为数组 */
function toValueList(value: string | string[] | undefined): string[] {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

/** 按点分路径读取字段（支持嵌套对象） */
function getField(item: XNavigationMenuItem, key: string): unknown {
  return key.split(".").reduce((acc: any, part) => (acc == null ? acc : acc[part]), item)
}

/** 渲染图标：字符串走 XIcon，组件直接渲染 */
function renderMenuIcon(
  icon: XMenuIcon | undefined,
  className: string,
  dataSlot: string,
): React.ReactNode {
  if (icon == null) return null
  if (typeof icon === "string") {
    return <XIcon name={icon} data-slot={dataSlot} className={className} aria-hidden="true" />
  }
  const Comp = icon
  return <Comp data-slot={dataSlot} className={className} aria-hidden="true" />
}

interface CollapsedPopoverEntryProps {
  item: XNavigationMenuItem
  index: number
  active: boolean
  link: React.ReactElement
  options: XNavigationMenuPopoverOptions
  ui?: XNavigationMenuUi
  itemContentSlot?: XNavigationMenuProps["itemContentSlot"]
  children: React.ReactNode
}

/** 折叠态 popover：受控开合以支持 item-content 插槽关闭浮层 */
function CollapsedPopoverEntry({
  item,
  index,
  active,
  link,
  options,
  ui,
  itemContentSlot,
  children,
}: CollapsedPopoverEntryProps) {
  const [open, setOpen] = React.useState(false)
  const content = options.content ?? {}

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger openOnHover delay={0} render={link} />
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner
          side={content.side ?? "right"}
          align={content.align ?? "start"}
          alignOffset={content.alignOffset ?? 0}
          sideOffset={content.sideOffset ?? 2}
        >
          <PopoverPrimitive.Popup
            data-slot="content"
            className={cn(
              "min-h-6 rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border outline-none",
              "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
              ui?.content,
            )}
          >
            {itemContentSlot != null
              ? itemContentSlot({ item, index, active, ui, close: () => setOpen(false) })
              : children}
          </PopoverPrimitive.Popup>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export function XNavigationMenu({
  items,
  selectedKeys = [],
  value,
  defaultValue,
  type = "multiple",
  collapsible = true,
  disabled = false,
  mode = "vertical",
  orientation,
  color = "primary",
  variant = "pill",
  collapsed = false,
  tooltip = false,
  popover = false,
  highlight = false,
  highlightColor = "primary",
  trailingIcon = "chevron-down",
  externalIcon = true,
  arrow = false,
  content,
  contentOrientation = "horizontal",
  labelKey = "label",
  valueKey = "key",
  theme = "light",
  ui,
  render,
  onClick,
  onSelect,
  onValueChange,
  listLeadingSlot,
  listTrailingSlot,
  itemContentSlot,
  itemSlot,
  itemLeadingSlot,
  itemLabelSlot,
  itemTrailingSlot,
  className,
}: XNavigationMenuProps) {
  const resolvedOrientation: XNavigationMenuOrientation =
    orientation ?? (mode === "horizontal" ? "horizontal" : "vertical")
  const isHorizontal = resolvedOrientation === "horizontal"
  const isCollapsed = !isHorizontal && collapsed
  /* 垂直手风琴非受控展开项：受控值存在时由 value 驱动 */
  const [innerOpenKeys, setInnerOpenKeys] = React.useState<Set<string>>(() => new Set(toValueList(defaultValue)))
  /* 水平模式浮层非受控值：子项选择后关闭 */
  const [innerOpenValue, setInnerOpenValue] = React.useState<string | null>(() =>
    typeof defaultValue === "string" ? defaultValue : null,
  )

  /** 垂直手风琴项是否展开 */
  function isItemOpen(key: string): boolean {
    return value != null ? toValueList(value).includes(key) : innerOpenKeys.has(key)
  }

  /** 手风琴项开合：受控值由调用方维护，非受控值组件内部维护 */
  function toggleItem(key: string) {
    const current = value != null ? toValueList(value) : [...innerOpenKeys]
    const next = current.includes(key)
      ? collapsible
        ? current.filter((k) => k !== key)
        : current
      : type === "single"
        ? [key]
        : [...current, key]
    if (value == null) setInnerOpenKeys(new Set(next))
    onValueChange?.((value != null ? Array.isArray(value) : type === "multiple") ? next : next[0])
  }

  /** 水平浮层开合 */
  function changeOpenValue(next: string | null) {
    if (value == null) setInnerOpenValue(next)
    onValueChange?.(next ?? undefined)
  }

  const openValue = typeof value === "string" ? value : innerOpenValue

  const tooltipOptions: XNavigationMenuTooltipOptions = typeof tooltip === "object" ? tooltip : {}
  const popoverOptions: XNavigationMenuPopoverOptions = typeof popover === "object" ? popover : {}

  const lists: XNavigationMenuItem[][] =
    items.length === 0 ? [] : Array.isArray(items[0]) ? (items as XNavigationMenuItem[][]) : [items as XNavigationMenuItem[]]

  const externalIconValue: XMenuIcon | false =
    externalIcon === false ? false : typeof externalIcon === "string" ? externalIcon : "external-link"

  function itemValueOf(item: XNavigationMenuItem, index: number, level: number, listIndex: number): string {
    const prefix = lists.length > 1 ? `group-${listIndex}-` : ""
    return String(getField(item, valueKey) ?? (level > 0 ? `${prefix}item-${level}-${index}` : `${prefix}item-${index}`))
  }

  function itemLabelOf(item: XNavigationMenuItem): string {
    return String(getField(item, labelKey) ?? "")
  }

  function handleSelect(item: XNavigationMenuItem) {
    item.onSelect?.(item)
    onClick?.(item)
    onSelect?.(item)
  }

  /** 链接样式：基础 + 选中/悬停 + 变体 + 指示线 */
  function linkClasses(item: XNavigationMenuItem, active: boolean, _level: number): string {
    return cn(
      "group relative w-full flex items-center gap-1.5 rounded-md text-sm font-medium outline-none",
      "focus-visible:outline-none focus-visible:before:outline-3 before:absolute before:z-[-1] before:rounded-md",
      isHorizontal ? "px-2.5 py-1.5 before:inset-x-px before:inset-y-0" : "px-2.5 py-1.5 before:inset-y-px before:inset-x-0",
      isCollapsed && "px-1.5",
      item.disabled ? "cursor-not-allowed opacity-75" : "hover:text-highlighted hover:before:bg-muted/50 transition-colors before:transition-colors",
      active && variant === "pill" && navActivePillClasses[color],
      active && variant === "link" && navColorTextClasses[color],
      !active && "text-muted-foreground",
      item.className,
    )
  }

  /** 指示线：垂直在左侧，水平在底部 */
  function highlightClasses(active: boolean, level: number): string {
    if (!highlight || !active) return ""
    if (isHorizontal) {
      return cn(
        "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
        navHighlightLineClasses[highlightColor],
      )
    }
    if (level > 0) {
      return cn(
        "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
        navHighlightLineClasses[highlightColor],
      )
    }
    return ""
  }

  /** 渲染链接内容：前置 + 标签 + 尾部 */
  function renderLinkContent(item: XNavigationMenuItem, index: number, _open: boolean, showTrailingChevron: boolean): React.ReactNode {
    if (itemSlot != null) return itemSlot({ item, index, active: selectedKeys.includes(String(getField(item, valueKey) ?? "")) })

    const label = itemLabelOf(item)
    const hasChildren = (item.children?.length ?? 0) > 0
    const trailingShown = showTrailingChevron && hasChildren

    return (
      <>
        {itemLeadingSlot != null ? (
          itemLeadingSlot({ item, index, active: false })
        ) : item.avatar != null ? (
          <XAvatar
            {...item.avatar}
            size={ui?.linkLeadingAvatarSize ?? "sm"}
            data-slot="linkLeadingAvatar"
            className={cn("shrink-0", ui?.linkLeadingAvatar)}
          />
        ) : item.icon != null && item.chip ? (
          <XChip inset standalone size={ui?.linkLeadingChipSize ?? "sm"} data-slot="linkLeadingChip">
            {renderMenuIcon(item.icon, cn("shrink-0 size-5", ui?.linkLeadingIcon), "linkLeadingIcon")}
          </XChip>
        ) : item.icon != null ? (
          renderMenuIcon(item.icon, cn("shrink-0 size-5", ui?.linkLeadingIcon), "linkLeadingIcon")
        ) : null}

        {(label !== "" || itemLabelSlot != null) && (
          <span data-slot="linkLabel" className={cn("truncate", isCollapsed && "hidden", ui?.linkLabel)}>
            {itemLabelSlot != null ? itemLabelSlot({ item, index, active: false }) : label}
            {item.target === "_blank" && externalIconValue !== false
              ? renderMenuIcon(
                  externalIconValue,
                  cn("inline-block size-3 align-top text-muted-foreground", ui?.linkLabelExternalIcon),
                  "linkLabelExternalIcon",
                )
              : null}
          </span>
        )}

        {(item.badge != null || trailingShown || item.trailingIcon != null || itemTrailingSlot != null) && (
          <span
            data-slot="linkTrailing"
            className={cn("ms-auto inline-flex items-center gap-1.5", isCollapsed && "hidden", ui?.linkTrailing)}
          >
            {itemTrailingSlot != null ? (
              itemTrailingSlot({ item, index, active: false })
            ) : (
              <>
                {item.badge != null && (
                  <XBadge color="neutral" variant="outline" size={ui?.linkTrailingBadgeSize ?? "sm"} label={item.badge} data-slot="linkTrailingBadge" className={cn("shrink-0", ui?.linkTrailingBadge)} />
                )}
                {trailingShown
                  ? renderMenuIcon(
                      trailingIcon,
                      cn(
                        "size-5 shrink-0 transition-transform duration-200 group-data-[popup-open]:rotate-180 group-data-[open]:rotate-180",
                        ui?.linkTrailingIcon,
                      ),
                      "linkTrailingIcon",
                    )
                  : item.trailingIcon != null
                    ? renderMenuIcon(item.trailingIcon, cn("size-5 shrink-0", ui?.linkTrailingIcon), "linkTrailingIcon")
                    : null}
              </>
            )}
          </span>
        )}
      </>
    )
  }

  /** 渲染子菜单项（水平内容面板与折叠 popover 共用） */
  function renderChildItem(child: XNavigationMenuItem, childIndex: number, inPopover: boolean): React.ReactNode {
    const childKey = String(getField(child, valueKey) ?? `child-${childIndex}`)
    const selected = selectedKeys.includes(childKey)
    const label = itemLabelOf(child)

    if (inPopover) {
      return (
        <li key={childKey} data-slot="childItem" className={cn(ui?.childItem, child.className)}>
          <button
            type="button"
            disabled={child.disabled}
            data-slot="childLink"
            onClick={() => handleSelect(child)}
            className={cn(
              "group relative flex size-full items-start gap-1.5 rounded-md p-1.5 text-start text-sm outline-none",
              "hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-75",
              selected && "text-primary-6",
              ui?.childLink,
            )}
          >
            {child.icon != null && (
              <span data-slot="childLinkIcon" className={cn("shrink-0", ui?.childLinkIcon)}>
                {renderMenuIcon(child.icon, "size-5 shrink-0", "childLinkIcon")}
              </span>
            )}
            <span data-slot="childLinkLabel" className={cn("truncate", ui?.childLinkLabel)}>
              {label}
              {child.target === "_blank" && externalIconValue !== false
                ? renderMenuIcon(
                    externalIconValue,
                    cn("inline-block size-3 align-top text-muted-foreground", ui?.childLinkLabelExternalIcon),
                    "childLinkLabelExternalIcon",
                  )
                : null}
            </span>
          </button>
        </li>
      )
    }

    return (
      <li key={childKey} data-slot="childItem" className={cn(ui?.childItem, child.className)}>
        <NavigationMenuPrimitive.Link
          data-slot="childLink"
          onClick={() => {
            handleSelect(child)
            changeOpenValue(null)
          }}
          className={cn(
            "group relative flex size-full items-start gap-2 rounded-md px-3 py-2 text-start text-sm outline-none",
            "hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-75",
            selected && "text-primary-6",
            ui?.childLink,
          )}
        >
          {child.icon != null && (
            <span data-slot="childLinkIcon" className={cn("shrink-0", ui?.childLinkIcon)}>
              {renderMenuIcon(child.icon, "size-5 shrink-0", "childLinkIcon")}
            </span>
          )}
          <div data-slot="childLinkWrapper" className={cn("min-w-0", ui?.childLinkWrapper)}>
            <p data-slot="childLinkLabel" className={cn("truncate font-medium", ui?.childLinkLabel)}>
              {label}
              {child.target === "_blank" && externalIconValue !== false
                ? renderMenuIcon(
                    externalIconValue,
                    cn("inline-block size-3 align-top text-muted-foreground", ui?.childLinkLabelExternalIcon),
                    "childLinkLabelExternalIcon",
                  )
                : null}
            </p>
            {child.description != null && (
              <p data-slot="childLinkDescription" className={cn("text-muted-foreground", ui?.childLinkDescription)}>
                {child.description}
              </p>
            )}
          </div>
        </NavigationMenuPrimitive.Link>
      </li>
    )
  }

  /** 垂直模式递归渲染菜单项 */
  function renderVerticalItems(listItems: XNavigationMenuItem[], level: number, listIndex: number): React.ReactNode {
    return listItems.map((item, index) => {
      const itemKey = itemValueOf(item, index, level, listIndex)
      const selected = selectedKeys.includes(itemKey)
      const hasChildren = (item.children?.length ?? 0) > 0
      const itemClasses = cn("min-w-0", ui?.item)

      if (!isHorizontal && item.type === "label" && !isCollapsed) {
        return (
          <li key={itemKey} data-slot="label" className={cn(ui?.label, item.className)}>
            <span
              className={cn(
                "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-muted-foreground px-2.5 py-1.5",
                "text-foreground",
                item.className,
              )}
            >
              {renderLinkContent(item, index, false, false)}
            </span>
          </li>
        )
      }

      if (hasChildren && !isCollapsed) {
        const isOpen = item.open ?? isItemOpen(itemKey)
        return (
          <li key={itemKey} data-slot="item" className={itemClasses}>
            <button
              type="button"
              disabled={item.disabled || disabled}
              aria-expanded={isOpen}
              data-slot="link"
              onClick={() => toggleItem(itemKey)}
              className={cn(linkClasses(item, selected, level), highlightClasses(selected, level), ui?.link)}
            >
              {renderLinkContent(item, index, isOpen, true)}
            </button>
            {isOpen && (
              <div data-slot="content" className={cn("overflow-hidden", ui?.content)}>
                <ul data-slot="childList" className={cn("ms-5 border-s border-border ps-1.5", ui?.childList)}>
                  {renderVerticalItems(item.children ?? [], level + 1, listIndex)}
                </ul>
              </div>
            )}
          </li>
        )
      }

      if (hasChildren && isCollapsed && (popover || item.popover)) {
        /* 项级配置覆盖根级配置 */
        const itemPopoverOptions: XNavigationMenuPopoverOptions =
          typeof item.popover === "object"
            ? { ...popoverOptions, ...item.popover, content: { ...popoverOptions.content, ...item.popover.content } }
            : popoverOptions

        return (
          <li key={itemKey} data-slot="item" className={itemClasses}>
            <CollapsedPopoverEntry
              item={item}
              index={index}
              active={selected}
              options={itemPopoverOptions}
              ui={ui}
              itemContentSlot={itemContentSlot}
              link={
                <button
                  type="button"
                  data-slot="link"
                  className={cn(linkClasses(item, selected, level), highlightClasses(selected, level), ui?.link)}
                >
                  {renderLinkContent(item, index, false, true)}
                </button>
              }
            >
              <ul data-slot="childList" className={cn("isolate", ui?.childList)}>
                <li data-slot="childLabel" className={cn("px-1.5 py-0.5 text-xs text-muted-foreground", ui?.childLabel)}>
                  {itemLabelOf(item)}
                </li>
                {(item.children ?? []).map((child, childIndex) => renderChildItem(child, childIndex, true))}
              </ul>
            </CollapsedPopoverEntry>
          </li>
        )
      }

      const linkButton = (
        <button
          type="button"
          disabled={item.disabled || disabled}
          data-slot="link"
          onClick={() => handleSelect(item)}
          className={cn(linkClasses(item, selected, level), highlightClasses(selected, level), ui?.link)}
        >
          {renderLinkContent(item, index, false, false)}
        </button>
      )

      if (isCollapsed && (tooltip || item.tooltip)) {
        /* 项级配置覆盖根级配置 */
        const itemTooltipOptions: XNavigationMenuTooltipOptions =
          typeof item.tooltip === "object"
            ? { ...tooltipOptions, ...item.tooltip, content: { ...tooltipOptions.content, ...item.tooltip.content } }
            : tooltipOptions
        const tooltipSide = itemTooltipOptions.content?.side ?? "right"
        const tooltipSideOffset = itemTooltipOptions.content?.sideOffset ?? 8

        return (
          <li key={itemKey} data-slot="item" className={itemClasses}>
            <TooltipPrimitive.Provider delay={itemTooltipOptions.delayDuration ?? 0}>
              <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger render={linkButton} />
                <TooltipPrimitive.Portal>
                  <TooltipPrimitive.Positioner side={tooltipSide} sideOffset={tooltipSideOffset}>
                    <TooltipPrimitive.Popup className="flex items-center gap-1 rounded-sm bg-background px-2.5 py-1 text-xs text-foreground shadow-sm ring-1 ring-border">
                      {itemLabelOf(item)}
                    </TooltipPrimitive.Popup>
                  </TooltipPrimitive.Positioner>
                </TooltipPrimitive.Portal>
              </TooltipPrimitive.Root>
            </TooltipPrimitive.Provider>
          </li>
        )
      }

      return (
        <li key={itemKey} data-slot="item" className={itemClasses}>
          {linkButton}
        </li>
      )
    })
  }

  const rootClasses = cn(
    "relative flex gap-1.5",
    isHorizontal ? "items-center justify-between" : "flex-col",
    theme === "dark" && "bg-neutral-9 p-2 text-white",
    ui?.root,
    className,
  )

  /* 渲染配置：render 元素存在时克隆作为根容器 */
  if (React.isValidElement(render)) {
    const contentNode = isHorizontal ? renderHorizontal() : renderVertical()
    return React.cloneElement(render, {
      "data-slot": "root",
      className: rootClasses,
      children: contentNode,
    } as React.HTMLAttributes<HTMLElement>)
  }

  /** 垂直模式根结构 */
  function renderVertical(): React.ReactNode {
    return lists.map((list, listIndex) => (
      <React.Fragment key={`list-${listIndex}`}>
        {listIndex > 0 && <div data-slot="separator" role="separator" className={cn("h-px bg-border", ui?.separator)} />}
        <ul data-slot="list" className={cn("isolate min-w-0", ui?.list)}>
          {renderVerticalItems(list, 0, listIndex)}
        </ul>
      </React.Fragment>
    ))
  }

  /** 水平模式根结构：Base UI NavigationMenu 原语 */
  function renderHorizontal(): React.ReactNode {
    return (
      <NavigationMenuPrimitive.Root
        value={openValue}
        onValueChange={changeOpenValue}
        orientation="horizontal"
        data-slot="root"
        className={cn("contents", ui?.root)}
      >
        {listLeadingSlot != null && listLeadingSlot()}
        {lists.map((list, listIndex) => (
          <NavigationMenuPrimitive.List key={`list-${listIndex}`} data-slot="list" className={cn("isolate flex min-w-0 items-center", ui?.list)}>
            {list.map((item, index) => {
              const itemKey = itemValueOf(item, index, 0, listIndex)
              const selected = selectedKeys.includes(itemKey)
              const hasChildren = (item.children?.length ?? 0) > 0

              return (
                <NavigationMenuPrimitive.Item key={itemKey} value={itemKey} data-slot="item" className={cn("relative min-w-0 py-2", ui?.item)}>
                  {hasChildren ? (
                    <>
                      <NavigationMenuPrimitive.Trigger
                        data-slot="link"
                        className={cn(linkClasses(item, selected, 0), highlightClasses(selected, 0), ui?.link)}
                      >
                        {renderLinkContent(item, index, false, true)}
                      </NavigationMenuPrimitive.Trigger>
                      {arrow && (
                        <NavigationMenuPrimitive.Icon
                          data-slot="indicator"
                          className={cn(
                            "absolute bottom-0 z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-0",
                            "data-open:animate-in data-open:fade-in data-open:opacity-100 data-closed:animate-out data-closed:fade-out",
                            ui?.indicator,
                          )}
                        >
                          <div data-slot="arrow" className={cn("relative top-[50%] size-2.5 rotate-45 rounded-xs border border-border bg-popover", ui?.arrow)} />
                        </NavigationMenuPrimitive.Icon>
                      )}
                      <NavigationMenuPrimitive.Content
                        data-slot="content"
                        className={cn(
                          "absolute top-0 start-0 w-full max-h-[70vh] overflow-y-auto",
                          contentOrientation === "vertical" && "w-60",
                          ui?.content,
                        )}
                      >
                        {itemContentSlot != null ? (
                          itemContentSlot({ item, index, active: selected, ui })
                        ) : (
                          <ul
                            data-slot="childList"
                            className={cn(
                              contentOrientation === "horizontal" ? "grid grid-cols-2 gap-2 p-2" : "gap-1 p-2",
                              ui?.childList,
                            )}
                          >
                            {(item.children ?? []).map((child, childIndex) => renderChildItem(child, childIndex, false))}
                          </ul>
                        )}
                      </NavigationMenuPrimitive.Content>
                    </>
                  ) : (
                    <NavigationMenuPrimitive.Link
                      data-slot="link"
                      onClick={() => handleSelect(item)}
                      className={cn(linkClasses(item, selected, 0), highlightClasses(selected, 0), ui?.link)}
                    >
                      {renderLinkContent(item, index, false, false)}
                    </NavigationMenuPrimitive.Link>
                  )}
                </NavigationMenuPrimitive.Item>
              )
            })}
          </NavigationMenuPrimitive.List>
        ))}
        {listTrailingSlot != null && listTrailingSlot()}
        <NavigationMenuPrimitive.Portal>
          <NavigationMenuPrimitive.Positioner
            data-slot="viewportWrapper"
            side="bottom"
            sideOffset={8}
            align={content?.align ?? "center"}
            alignOffset={content?.alignOffset ?? 0}
            className={cn("absolute top-full start-0 flex w-full justify-center", ui?.viewportWrapper)}
          >
            <NavigationMenuPrimitive.Popup
              data-slot="viewport"
              className={cn(
                "relative w-full overflow-hidden rounded-md bg-popover shadow-lg ring-1 ring-border outline-none",
                "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                ui?.viewport,
              )}
            >
              <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
            </NavigationMenuPrimitive.Popup>
          </NavigationMenuPrimitive.Positioner>
        </NavigationMenuPrimitive.Portal>
      </NavigationMenuPrimitive.Root>
    )
  }

    return (
      <nav data-slot="root" className={rootClasses}>
        {listLeadingSlot != null && listLeadingSlot()}
        {isHorizontal ? renderHorizontal() : renderVertical()}
        {listTrailingSlot != null && listTrailingSlot()}
      </nav>
    )
}
