import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { XAvatar, type XAvatarProps, type XAvatarSize } from "@/components/kit/x-avatar"
import { XButton } from "@/components/kit/x-button"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { XKbd, type XKbdSize } from "@/components/kit/x-kbd"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export type XMenuSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XMenuColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"

/** 菜单图标：XIcon 名称或自定义组件 */
export type XMenuIcon =
  | XIconName
  | React.ComponentType<{
      className?: string
      "aria-hidden"?: boolean | "true" | "false"
      "data-slot"?: string
    }>

/** 菜单项头像：复用 XAvatar 属性（尺寸由菜单 size 决定） */
export type XMenuAvatar = Omit<XAvatarProps, "size" | "ui" | "render" | "className">

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XDropdownMenuUi {
  content?: string
  input?: string
  empty?: string
  viewport?: string
  arrow?: string
  group?: string
  label?: string
  separator?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: XAvatarSize
  itemTrailing?: string
  itemTrailingIcon?: string
  itemTrailingKbds?: string
  itemTrailingKbdsSize?: XKbdSize
  itemWrapper?: string
  itemLabel?: string
  itemDescription?: string
  itemLabelExternalIcon?: string
}

export interface XDropdownMenuItem {
  /** 菜单项唯一标识（可用 valueKey 指定其他字段） */
  key?: string
  /** 菜单项标题（可用 labelKey 指定其他字段） */
  label?: React.ReactNode
  /** 菜单项说明文字（可用 descriptionKey 指定其他字段） */
  description?: React.ReactNode
  /** 快捷键数组 */
  kbds?: string[]
  /** 快捷键（单条简写，等价于 kbds: [shortcut]） */
  shortcut?: string
  /** 项类型：label 分组标题 / separator 分隔线 / checkbox 勾选项 */
  type?: "label" | "separator" | "item" | "checkbox"
  /** 是否禁用 */
  disabled?: boolean
  /** checkbox 选中态 */
  checked?: boolean
  /** 加载态：前置图标显示旋转的 loadingIcon */
  loading?: boolean
  /** 前置图标 */
  icon?: XMenuIcon
  /** 前置头像 */
  avatar?: XMenuAvatar
  /** 项语义色 */
  color?: XMenuColor
  /** 链接目标，为 _blank 时标签后显示 externalIcon */
  target?: string
  /** 子菜单项 */
  children?: XDropdownMenuItem[]
  /** 子菜单受控展开状态 */
  open?: boolean
  /** 子菜单默认展开状态 */
  defaultOpen?: boolean
  /** 选中回调 */
  onSelect?: (item: XDropdownMenuItem) => void
  /** checkbox 选中态变化回调 */
  onUpdateChecked?: (checked: boolean) => void
  className?: string
  [key: string]: any
}

/** 浮层定位配置 */
export interface XMenuContentOptions {
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  alignOffset?: number
  sideOffset?: number
}

/** 过滤搜索框配置 */
export interface XMenuFilterOptions {
  placeholder?: string
}

export interface XDropdownMenuProps {
  /** 菜单项数组，二维数组时按行分组 */
  items?: XDropdownMenuItem[] | XDropdownMenuItem[][]
  /** 尺寸 */
  size?: XMenuSize
  /** 是否打开 */
  open?: boolean
  /** 默认打开状态（非受控） */
  defaultOpen?: boolean
  /** 模态：打开时锁定页面滚动与指针交互 */
  modal?: boolean
  /** 选择后关闭菜单 */
  closeOnSelect?: boolean
  /** 触发按钮文字 */
  triggerLabel?: React.ReactNode
  /** 自定义触发按钮 */
  trigger?: React.ReactElement
  /** 菜单项标题字段 */
  labelKey?: string
  /** 菜单项值字段 */
  valueKey?: string
  /** 菜单项说明字段 */
  descriptionKey?: string
  /** checkbox 选中态图标 */
  checkedIcon?: XMenuIcon
  /** 加载图标 */
  loadingIcon?: XMenuIcon
  /** 外链图标，false 时隐藏 */
  externalIcon?: boolean | XMenuIcon
  /** 顶部过滤搜索框，对象可配置占位文字 */
  filter?: boolean | XMenuFilterOptions
  /** 过滤时匹配的字段，默认 [labelKey] */
  filterFields?: string[]
  /** 忽略过滤（适合自定义过滤场景） */
  ignoreFilter?: boolean
  /** 浮层定位配置 */
  content?: XMenuContentOptions
  /** 浮层是否渲染到 body，可为选择器或指定容器元素 */
  portal?: boolean | string | HTMLElement
  /** 是否显示指向触发器的箭头 */
  arrow?: boolean
  /** 是否禁用触发按钮 */
  disabled?: boolean
  /** 主题插槽类名 */
  ui?: XDropdownMenuUi
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 选中回调 */
  onSelect?: (item: XDropdownMenuItem) => void
  /** 过滤无结果时的内容 */
  emptySlot?: (props: { searchTerm: string }) => React.ReactNode
  /** 完全自定义菜单项 */
  itemSlot?: (props: { item: XDropdownMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项前置区域 */
  itemLeadingSlot?: (props: { item: XDropdownMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项标题 */
  itemLabelSlot?: (props: { item: XDropdownMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项说明 */
  itemDescriptionSlot?: (props: { item: XDropdownMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项尾部区域 */
  itemTrailingSlot?: (props: { item: XDropdownMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 浮层顶部内容（搜索框之后） */
  contentTopSlot?: (props: { sub: boolean }) => React.ReactNode
  /** 浮层底部内容 */
  contentBottomSlot?: (props: { sub: boolean }) => React.ReactNode
  className?: string
}

/** portal 为选择器时解析为容器元素 */
export function resolvePortalContainer(portal: boolean | string | HTMLElement): HTMLElement | undefined {
  if (typeof portal === "string") return (document.querySelector(portal) as HTMLElement | null) ?? undefined
  if (typeof portal === "object") return portal
  return undefined
}

/** 项尺寸：内边距与字号随 size 变化 */
const sizeItemClasses: Record<XMenuSize, string> = {
  xs: "p-1 text-xs gap-1",
  sm: "p-1.5 text-xs gap-1.5",
  md: "p-1.5 text-sm gap-1.5",
  lg: "p-2 text-sm gap-2",
  xl: "p-2 text-base gap-2",
}

/** 分组标签尺寸 */
const sizeLabelClasses: Record<XMenuSize, string> = {
  xs: "p-1 text-xs gap-1",
  sm: "p-1.5 text-xs gap-1.5",
  md: "p-1.5 text-sm gap-1.5",
  lg: "p-2 text-sm gap-2",
  xl: "p-2 text-base gap-2",
}

/** 空态留白 */
const sizeEmptyClasses: Record<XMenuSize, string> = {
  xs: "p-2 text-xs",
  sm: "p-2.5 text-xs",
  md: "p-2.5 text-sm",
  lg: "p-3 text-sm",
  xl: "p-3 text-base",
}

/** 图标尺寸 */
const sizeIconClasses: Record<XMenuSize, string> = {
  xs: "size-4",
  sm: "size-4",
  md: "size-5",
  lg: "size-5",
  xl: "size-6",
}

/** 头像尺寸映射 */
const sizeAvatarMap: Record<XMenuSize, XAvatarSize> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "sm",
  xl: "md",
}

/** 快捷键尺寸映射 */
const sizeKbdMap: Record<XMenuSize, XKbdSize> = {
  xs: "sm",
  sm: "sm",
  md: "md",
  lg: "md",
  xl: "lg",
}

/** 快捷键容器间距 */
const sizeKbdsGapClasses: Record<XMenuSize, string> = {
  xs: "gap-0.5",
  sm: "gap-0.5",
  md: "gap-0.5",
  lg: "gap-1",
  xl: "gap-1",
}

/** 项语义色：标题与前置图标 */
const menuItemColorClasses: Record<XMenuColor, { item: string; icon: string }> = {
  primary: { item: "text-primary-6", icon: "text-primary-6/75" },
  secondary: { item: "text-secondary-foreground", icon: "text-muted-foreground" },
  neutral: { item: "text-foreground", icon: "text-muted-foreground" },
  success: { item: "text-success-6", icon: "text-success-6/75" },
  info: { item: "text-info-6", icon: "text-info-6/75" },
  warning: { item: "text-warning-7", icon: "text-warning-7/75" },
  error: { item: "text-error-6", icon: "text-error-6/75" },
}

/** 按点分路径读取字段（支持嵌套对象） */
function getField(item: XDropdownMenuItem, key: string): unknown {
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

interface XCheckboxMenuEntryProps {
  item: XDropdownMenuItem
  index: number
  size: XMenuSize
  checkedIcon: XMenuIcon
  itemClasses: string
  renderItemContent: (item: XDropdownMenuItem, index: number, active: boolean) => React.ReactNode
}

/** checkbox 菜单项：选择不关闭菜单，支持受控与非受控选中态 */
function CheckboxMenuEntry({
  item,
  index,
  itemClasses,
  renderItemContent,
}: XCheckboxMenuEntryProps) {
  const [innerChecked, setInnerChecked] = React.useState(item.checked ?? false)
  const checked = item.checked ?? innerChecked

  return (
    <MenuPrimitive.Item
      data-slot="item"
      disabled={item.disabled}
      closeOnClick={false}
      onClick={() => {
        const next = !checked
        if (item.checked == null) setInnerChecked(next)
        item.onUpdateChecked?.(next)
      }}
      className={itemClasses}
    >
      {renderItemContent({ ...item, checked }, index, false)}
    </MenuPrimitive.Item>
  )
}

export function XDropdownMenu({
  items = [],
  size = "md",
  open: openProp,
  defaultOpen = false,
  modal = true,
  closeOnSelect = true,
  triggerLabel = "操作",
  trigger,
  labelKey = "label",
  valueKey = "key",
  descriptionKey = "description",
  checkedIcon = "check",
  loadingIcon = "loader-circle",
  externalIcon = true,
  filter = false,
  filterFields,
  ignoreFilter = false,
  content,
  portal = true,
  arrow = false,
  disabled = false,
  ui,
  onOpenChange,
  onSelect,
  emptySlot,
  itemSlot,
  itemLeadingSlot,
  itemLabelSlot,
  itemDescriptionSlot,
  itemTrailingSlot,
  contentTopSlot,
  contentBottomSlot,
  className,
}: XDropdownMenuProps) {
  const [innerOpen, setInnerOpen] = React.useState(defaultOpen)
  const [searchTerm, setSearchTerm] = React.useState("")
  /* portal 关闭时的本地容器：Base UI 浮层必须在 Portal 内渲染 */
  const [localPortal, setLocalPortal] = React.useState<HTMLDivElement | null>(null)
  const open = openProp ?? innerOpen

  const contentOptions: Required<XMenuContentOptions> = {
    align: content?.align ?? "start",
    side: content?.side ?? "bottom",
    alignOffset: content?.alignOffset ?? 0,
    sideOffset: content?.sideOffset ?? 4,
  }

  const isStructural = (item: XDropdownMenuItem) => item.type === "label" || item.type === "separator"

  /** 分组：平铺数组视为单组 */
  const groups: XDropdownMenuItem[][] =
    items.length === 0 ? [] : Array.isArray(items[0]) ? (items as XDropdownMenuItem[][]) : [items as XDropdownMenuItem[]]

  /** 匹配字段：filterFields 优先，默认 labelKey */
  const matchFields = filterFields?.length ? filterFields : [labelKey]

  /** 过滤：结构性项（标签 / 分隔线）保留 */
  const filteredGroups =
    !filter || ignoreFilter || !searchTerm
      ? groups
      : groups
          .map((group) =>
            group.filter(
              (item) =>
                isStructural(item) ||
                matchFields.some((field) => {
                  const value = getField(item, field)
                  return value != null && String(value).toLowerCase().includes(searchTerm.toLowerCase())
                }),
            ),
          )
          .filter((group) => group.length > 0)

  const hasFilteredItems = filteredGroups.some((group) => group.some((item) => !isStructural(item)))

  function handleOpenChange(next: boolean) {
    if (openProp == null) setInnerOpen(next)
    onOpenChange?.(next)
  }

  function handleSelect(item: XDropdownMenuItem) {
    item.onSelect?.(item)
    onSelect?.(item)
  }

  const externalIconValue: XMenuIcon | false =
    externalIcon === false ? false : typeof externalIcon === "string" ? externalIcon : "external-link"

  /** 渲染项内容：前置 + 主体 + 尾部 */
  function renderItemContent(item: XDropdownMenuItem, index: number, active: boolean): React.ReactNode {
    if (itemSlot != null) return itemSlot({ item, index, active })

    const kbdValues = item.kbds?.length ? item.kbds : item.shortcut ? [item.shortcut] : []
    const label = String(getField(item, labelKey) ?? "")
    const description = getField(item, descriptionKey)
    const hasChildren = (item.children?.length ?? 0) > 0
    const colorClasses = item.color != null ? menuItemColorClasses[item.color] : undefined

    return (
      <>
        {itemLeadingSlot != null ? (
          itemLeadingSlot({ item, index, active })
        ) : item.loading ? (
          renderMenuIcon(
            loadingIcon,
            cn("shrink-0 animate-spin", sizeIconClasses[size], colorClasses?.icon, ui?.itemLeadingIcon),
            "itemLeadingIcon",
          )
        ) : item.icon != null ? (
          renderMenuIcon(
            item.icon,
            cn("shrink-0", sizeIconClasses[size], colorClasses?.icon, ui?.itemLeadingIcon),
            "itemLeadingIcon",
          )
        ) : item.avatar != null ? (
          <XAvatar
            {...item.avatar}
            size={(ui?.itemLeadingAvatarSize as XAvatarSize) ?? sizeAvatarMap[size]}
            data-slot="itemLeadingAvatar"
            className={cn("shrink-0", ui?.itemLeadingAvatar)}
          />
        ) : null}

        {(label !== "" || description != null || itemLabelSlot != null || itemDescriptionSlot != null) && (
          <span data-slot="itemWrapper" className={cn("flex min-w-0 flex-1 flex-col text-start", ui?.itemWrapper)}>
            {(label !== "" || itemLabelSlot != null) && (
              <span data-slot="itemLabel" className={cn("truncate", colorClasses?.item, ui?.itemLabel)}>
                {itemLabelSlot != null ? itemLabelSlot({ item, index, active }) : label}
                {item.target === "_blank" && externalIconValue !== false
                  ? renderMenuIcon(
                      externalIconValue,
                      cn("inline-block size-3 align-top text-muted-foreground", ui?.itemLabelExternalIcon),
                      "itemLabelExternalIcon",
                    )
                  : null}
              </span>
            )}
            {(description != null || itemDescriptionSlot != null) && (
              <span
                data-slot="itemDescription"
                className={cn("truncate text-xs text-muted-foreground", ui?.itemDescription)}
              >
                {itemDescriptionSlot != null ? itemDescriptionSlot({ item, index, active }) : String(description)}
              </span>
            )}
          </span>
        )}

        <span data-slot="itemTrailing" className={cn("ms-auto inline-flex items-center gap-1.5", ui?.itemTrailing)}>
          {itemTrailingSlot != null ? (
            itemTrailingSlot({ item, index, active })
          ) : hasChildren ? (
            renderMenuIcon(
              "chevron-right",
              cn("shrink-0", sizeIconClasses[size], ui?.itemTrailingIcon),
              "itemTrailingIcon",
            )
          ) : kbdValues.length > 0 ? (
            <span
              data-slot="itemTrailingKbds"
              className={cn("inline-flex items-center shrink-0", sizeKbdsGapClasses[size], ui?.itemTrailingKbds)}
            >
              {kbdValues.map((kbd, kbdIndex) => (
                <XKbd key={kbdIndex} size={(ui?.itemTrailingKbdsSize as XKbdSize) ?? sizeKbdMap[size]}>
                  {kbd}
                </XKbd>
              ))}
            </span>
          ) : item.checked === true ? (
            renderMenuIcon(
              checkedIcon,
              cn("shrink-0", sizeIconClasses[size], ui?.itemTrailingIcon),
              "itemTrailingIcon",
            )
          ) : null}
        </span>
      </>
    )
  }

  /** 渲染单个菜单项（含结构性项） */
  function renderMenuItem(item: XDropdownMenuItem, index: number): React.ReactNode {
    const itemValue =
      item.type === "label" || item.type === "separator" ? `${item.type}-${index}` : String(getField(item, valueKey) ?? index)

    if (item.type === "label") {
      return (
        <MenuPrimitive.GroupLabel
          key={itemValue}
          data-slot="label"
          className={cn(
            "w-full flex items-center font-semibold text-muted-foreground",
            sizeLabelClasses[size],
            ui?.label,
            item.className,
          )}
        >
          {itemSlot != null ? itemSlot({ item, index, active: false }) : String(getField(item, labelKey) ?? "")}
        </MenuPrimitive.GroupLabel>
      )
    }

    if (item.type === "separator") {
      return (
        <MenuPrimitive.Separator
          key={itemValue}
          data-slot="separator"
          className={cn("-mx-1 my-1 h-px bg-border", ui?.separator, item.className)}
        />
      )
    }

    const itemClasses = cn(
      "group relative w-full flex items-start select-none outline-none rounded-md",
      "data-highlighted:bg-muted data-disabled:cursor-not-allowed data-disabled:opacity-75",
      sizeItemClasses[size],
      item.color != null ? menuItemColorClasses[item.color].item : "text-foreground",
      ui?.item,
      item.className,
    )

    if ((item.children?.length ?? 0) > 0) {
      return (
        <MenuPrimitive.SubmenuRoot key={itemValue} open={item.open} defaultOpen={item.defaultOpen}>
          <MenuPrimitive.SubmenuTrigger
            data-slot="item"
            render={<button type="button" />}
            disabled={item.disabled}
            className={itemClasses}
          >
            {renderItemContent(item, index, false)}
          </MenuPrimitive.SubmenuTrigger>
          {renderPopupContent([item.children ?? []], true)}
        </MenuPrimitive.SubmenuRoot>
      )
    }

    if (item.type === "checkbox") {
      return (
        <CheckboxMenuEntry
          key={itemValue}
          item={item}
          index={index}
          size={size}
          checkedIcon={checkedIcon}
          itemClasses={itemClasses}
          renderItemContent={renderItemContent}
        />
      )
    }

    return (
      <MenuPrimitive.Item
        key={itemValue}
        data-slot="item"
        disabled={item.disabled}
        closeOnClick={closeOnSelect}
        onClick={() => handleSelect(item)}
        className={itemClasses}
      >
        {renderItemContent(item, index, false)}
      </MenuPrimitive.Item>
    )
  }

  /** 渲染浮层内容（根菜单与子菜单共用） */
  function renderPopupContent(popupGroups: XDropdownMenuItem[][], isSub: boolean): React.ReactNode {
    const positioner = (
      <MenuPrimitive.Positioner
        align={isSub ? "start" : contentOptions.align}
        side={isSub ? "right" : contentOptions.side}
        alignOffset={isSub ? -3 : contentOptions.alignOffset}
        sideOffset={isSub ? 0 : contentOptions.sideOffset}
        className="isolate z-50 outline-none"
      >
        <MenuPrimitive.Popup
          data-slot="content"
          className={cn(
            "z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border duration-100 outline-none",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            ui?.content,
          )}
        >
          {!isSub && filter !== false && filter != null && (
            <div className="relative border-b border-border">
              <XIcon
                name="search"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                autoFocus
                autoComplete="off"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={typeof filter === "object" && filter.placeholder ? filter.placeholder : "搜索…"}
                data-slot="input"
                className={cn("h-9 pl-9", ui?.input)}
              />
            </div>
          )}
          {contentTopSlot != null && contentTopSlot({ sub: isSub })}
          {isSub || !searchTerm || hasFilteredItems ? (
            <div
              role="presentation"
              data-slot="viewport"
              className={cn("relative divide-y divide-border scroll-py-1 overflow-y-auto flex-1", ui?.viewport)}
            >
              {popupGroups.map((group, groupIndex) => (
                <MenuPrimitive.Group
                  key={`group-${groupIndex}`}
                  data-slot="group"
                  className={cn("p-1 isolate", ui?.group)}
                >
                  {group.map((item, index) => renderMenuItem(item, index))}
                </MenuPrimitive.Group>
              ))}
            </div>
          ) : (
            <div data-slot="empty" className={cn("text-center text-muted-foreground", sizeEmptyClasses[size], ui?.empty)}>
              {emptySlot != null ? emptySlot({ searchTerm }) : `未找到与「${searchTerm}」匹配的项`}
            </div>
          )}
          {contentBottomSlot != null && contentBottomSlot({ sub: isSub })}
          {arrow && !isSub && (
            <MenuPrimitive.Arrow data-slot="arrow" className={cn("fill-popover stroke-border", ui?.arrow)} />
          )}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    )

    return (
      <MenuPrimitive.Portal container={portal === false ? localPortal : resolvePortalContainer(portal)}>
        {positioner}
      </MenuPrimitive.Portal>
    )
  }

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange} modal={modal}>
      <DropdownMenuTrigger
        disabled={disabled}
        render={
          trigger ?? (
            <XButton variant="outline" color="neutral" className={className}>
              {triggerLabel}
              <ChevronDown className="size-4" />
            </XButton>
          )
        }
      />
      {portal === false && <div ref={setLocalPortal} className="contents" />}
      {renderPopupContent(filteredGroups, false)}
    </DropdownMenu>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XDropdownMenuApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

/** 创建与 api 绑定的下拉菜单：调用即得 [DropdownMenu, dropdownMenuApi] */
export function useXDropdownMenu({ defaultOpen = false, ...componentProps }: Partial<XDropdownMenuProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XDropdownMenuApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
    }),
    [],
  )

  const DropdownMenu = React.useMemo(() => {
    return function BoundDropdownMenu(props: Partial<XDropdownMenuProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XDropdownMenu
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next) => store.set({ open: next })}
        />
      )
    }
  }, [])

  return [DropdownMenu, api] as const
}
