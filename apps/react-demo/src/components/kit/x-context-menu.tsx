import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { XAvatar, type XAvatarSize } from "@/components/kit/x-avatar"
import { resolvePortalContainer } from "./x-dropdown-menu"
import { XIcon } from "@/components/kit/x-icon"
import { XKbd, type XKbdSize } from "@/components/kit/x-kbd"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"
import type { XMenuAvatar, XMenuColor, XMenuContentOptions, XMenuIcon, XMenuSize } from "./x-dropdown-menu"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XContextMenuUi {
  content?: string
  viewport?: string
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

export interface XContextMenuItem {
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
  children?: XContextMenuItem[]
  /** 子菜单受控展开状态 */
  open?: boolean
  /** 子菜单默认展开状态 */
  defaultOpen?: boolean
  /** 选中回调 */
  onSelect?: (item: XContextMenuItem) => void
  /** checkbox 选中态变化回调 */
  onUpdateChecked?: (checked: boolean) => void
  className?: string
  [key: string]: any
}

export interface XContextMenuProps {
  /** 菜单项数组，二维数组时按行分组 */
  items?: XContextMenuItem[] | XContextMenuItem[][]
  /** 尺寸 */
  size?: XMenuSize
  /** 是否打开 */
  open?: boolean
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
  /** 浮层定位配置 */
  content?: XMenuContentOptions
  /** 浮层是否渲染到 body，可为选择器或指定容器元素 */
  portal?: boolean | string | HTMLElement
  /** 是否禁用触发区域 */
  disabled?: boolean
  /** 主题插槽类名 */
  ui?: XContextMenuUi
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 选中回调 */
  onSelect?: (item: XContextMenuItem) => void
  /** 完全自定义菜单项 */
  itemSlot?: (props: { item: XContextMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项前置区域 */
  itemLeadingSlot?: (props: { item: XContextMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项标题 */
  itemLabelSlot?: (props: { item: XContextMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项说明 */
  itemDescriptionSlot?: (props: { item: XContextMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项尾部区域 */
  itemTrailingSlot?: (props: { item: XContextMenuItem; index: number; active: boolean }) => React.ReactNode
  /** 浮层顶部内容 */
  contentTopSlot?: (props: { sub: boolean }) => React.ReactNode
  /** 浮层底部内容 */
  contentBottomSlot?: (props: { sub: boolean }) => React.ReactNode
  /** 触发区域内容 */
  children?: React.ReactNode
  className?: string
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

/** 图标尺寸 */
const sizeIconClasses: Record<XMenuSize, string> = {
  xs: "size-4",
  sm: "size-4",
  md: "size-5",
  lg: "size-5",
  xl: "size-6",
}

/** 头像尺寸映射 */
const sizeAvatarMap: Record<XMenuSize, "xs" | "sm" | "md"> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "sm",
  xl: "md",
}

/** 快捷键尺寸映射 */
const sizeKbdMap: Record<XMenuSize, "sm" | "md" | "lg"> = {
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
function getField(item: XContextMenuItem, key: string): unknown {
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
  item: XContextMenuItem
  index: number
  itemClasses: string
  renderItemContent: (item: XContextMenuItem, index: number, active: boolean) => React.ReactNode
}

/** checkbox 菜单项：选择不关闭菜单，支持受控与非受控选中态 */
function CheckboxMenuEntry({ item, index, itemClasses, renderItemContent }: XCheckboxMenuEntryProps) {
  const [innerChecked, setInnerChecked] = React.useState(item.checked ?? false)
  const checked = item.checked ?? innerChecked

  return (
    <ContextMenuPrimitive.Item
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
    </ContextMenuPrimitive.Item>
  )
}

export function XContextMenu({
  items = [],
  size = "md",
  open: openProp,
  labelKey = "label",
  valueKey = "key",
  descriptionKey = "description",
  checkedIcon = "check",
  loadingIcon = "loader-circle",
  externalIcon = true,
  content,
  portal = true,
  disabled = false,
  ui,
  onOpenChange,
  onSelect,
  itemSlot,
  itemLeadingSlot,
  itemLabelSlot,
  itemDescriptionSlot,
  itemTrailingSlot,
  contentTopSlot,
  contentBottomSlot,
  children,
  className,
}: XContextMenuProps) {
  const [innerOpen, setInnerOpen] = React.useState(false)
  const open = openProp ?? innerOpen
  /* portal 关闭时的本地容器：Base UI 浮层必须在 Portal 内渲染 */
  const [localPortal, setLocalPortal] = React.useState<HTMLDivElement | null>(null)

  const contentOptions: Required<XMenuContentOptions> = {
    align: content?.align ?? "start",
    side: content?.side ?? "right",
    alignOffset: content?.alignOffset ?? 0,
    sideOffset: content?.sideOffset ?? 0,
  }

  /** 分组：平铺数组视为单组 */
  const groups: XContextMenuItem[][] =
    items.length === 0 ? [] : Array.isArray(items[0]) ? (items as XContextMenuItem[][]) : [items as XContextMenuItem[]]

  function handleOpenChange(next: boolean) {
    if (openProp == null) setInnerOpen(next)
    onOpenChange?.(next)
  }

  function handleSelect(item: XContextMenuItem) {
    item.onSelect?.(item)
    onSelect?.(item)
  }

  const externalIconValue: XMenuIcon | false =
    externalIcon === false ? false : typeof externalIcon === "string" ? externalIcon : "external-link"

  /** 渲染项内容：前置 + 主体 + 尾部 */
  function renderItemContent(item: XContextMenuItem, index: number, active: boolean): React.ReactNode {
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
  function renderMenuItem(item: XContextMenuItem, index: number): React.ReactNode {
    const itemValue =
      item.type === "label" || item.type === "separator" ? `${item.type}-${index}` : String(getField(item, valueKey) ?? index)

    if (item.type === "label") {
      return (
        <ContextMenuPrimitive.GroupLabel
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
        </ContextMenuPrimitive.GroupLabel>
      )
    }

    if (item.type === "separator") {
      return (
        <ContextMenuPrimitive.Separator
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
        <ContextMenuPrimitive.SubmenuRoot key={itemValue} open={item.open} defaultOpen={item.defaultOpen}>
          <ContextMenuPrimitive.SubmenuTrigger
            data-slot="item"
            render={<button type="button" />}
            disabled={item.disabled}
            className={itemClasses}
          >
            {renderItemContent(item, index, false)}
          </ContextMenuPrimitive.SubmenuTrigger>
          {renderPopupContent([item.children ?? []], true)}
        </ContextMenuPrimitive.SubmenuRoot>
      )
    }

    if (item.type === "checkbox") {
      return (
        <CheckboxMenuEntry
          key={itemValue}
          item={item}
          index={index}
          itemClasses={itemClasses}
          renderItemContent={renderItemContent}
        />
      )
    }

    return (
      <ContextMenuPrimitive.Item
        key={itemValue}
        data-slot="item"
        disabled={item.disabled}
        onClick={() => handleSelect(item)}
        className={itemClasses}
      >
        {renderItemContent(item, index, false)}
      </ContextMenuPrimitive.Item>
    )
  }

  /** 渲染浮层内容（根菜单与子菜单共用） */
  function renderPopupContent(popupGroups: XContextMenuItem[][], isSub: boolean): React.ReactNode {
    const positioner = (
      <ContextMenuPrimitive.Positioner
        align={isSub ? "start" : contentOptions.align}
        side={isSub ? "right" : contentOptions.side}
        alignOffset={isSub ? -3 : contentOptions.alignOffset}
        sideOffset={isSub ? 0 : contentOptions.sideOffset}
        className="isolate z-50 outline-none"
      >
        <ContextMenuPrimitive.Popup
          data-slot="content"
          className={cn(
            "z-50 max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border duration-100 outline-none",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            ui?.content,
          )}
        >
          {contentTopSlot != null && contentTopSlot({ sub: isSub })}
          <div
            role="presentation"
            data-slot="viewport"
            className={cn("relative divide-y divide-border scroll-py-1 overflow-y-auto flex-1", ui?.viewport)}
          >
            {popupGroups.map((group, groupIndex) => (
              <ContextMenuPrimitive.Group
                key={`group-${groupIndex}`}
                data-slot="group"
                className={cn("p-1 isolate", ui?.group)}
              >
                {group.map((item, index) => renderMenuItem(item, index))}
              </ContextMenuPrimitive.Group>
            ))}
          </div>
          {contentBottomSlot != null && contentBottomSlot({ sub: isSub })}
        </ContextMenuPrimitive.Popup>
      </ContextMenuPrimitive.Positioner>
    )

    return (
      <ContextMenuPrimitive.Portal container={portal === false ? localPortal : resolvePortalContainer(portal)}>
        {positioner}
      </ContextMenuPrimitive.Portal>
    )
  }

  return (
    <ContextMenu open={open} onOpenChange={handleOpenChange}>
      <ContextMenuTrigger
        render={<span className={cn("block", disabled && "pointer-events-none", className)}>{children}</span>}
      />
      {portal === false && <div ref={setLocalPortal} className="contents" />}
      {renderPopupContent(groups, false)}
    </ContextMenu>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XContextMenuApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

/** 创建与 api 绑定的右键菜单：调用即得 [ContextMenu, contextMenuApi] */
export function useXContextMenu({ defaultOpen = false, ...componentProps }: Partial<XContextMenuProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XContextMenuApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
    }),
    [],
  )

  const ContextMenu = React.useMemo(() => {
    return function BoundContextMenu(props: Partial<XContextMenuProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XContextMenu
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next) => store.set({ open: next })}
        >
          {props.children ?? (componentProps.children as React.ReactNode)}
        </XContextMenu>
      )
    }
  }, [])

  return [ContextMenu, api] as const
}
