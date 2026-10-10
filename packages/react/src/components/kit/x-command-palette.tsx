/**
 * XCommandPalette 命令面板：全局命令搜索与快捷操作面板。
 * 基于 shadcn command（cmdk）+ dialog，快捷键以 Kbd 形式展示。
 * 支持字段映射（labelKey / valueKey / descriptionKey）、子命令导航（children / back）、
 * 关闭按钮（close）与 ui 主题插槽。
 */
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { XAvatar, type XAvatarSize } from "@/components/kit/x-avatar"
import { XButton, type XButtonColor, type XButtonSize, type XButtonVariant } from "@/components/kit/x-button"
import { XChip, type XChipColor, type XChipSize } from "@/components/kit/x-chip"
import { XIcon } from "@/components/kit/x-icon"
import { XKbd, type XKbdSize } from "@/components/kit/x-kbd"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"
import type { XMenuAvatar, XMenuIcon, XMenuSize } from "./x-dropdown-menu"

/** 命令项 chip：包住图标的语义色块 */
export interface XCommandChip {
  text?: string
  color?: XChipColor
  size?: XChipSize
}

export interface XCommandItem {
  /** 命令唯一标识（可用 valueKey 指定其他字段） */
  key?: string
  /** 命令标题（可用 labelKey 指定其他字段） */
  label?: string
  /** 命令说明（可用 descriptionKey 指定其他字段） */
  description?: string
  /** 标签前缀 */
  prefix?: string
  /** 标签后缀 */
  suffix?: string
  /** 快捷键数组 */
  kbds?: string[]
  /** 快捷键（单条简写，等价于 kbds: [shortcut]） */
  shortcut?: string
  /** 前置图标 */
  icon?: XMenuIcon
  /** 前置头像 */
  avatar?: XMenuAvatar
  /** 前置 chip，包住 icon 显示 */
  chip?: boolean | XCommandChip
  /** 激活态背景 */
  active?: boolean
  /** 加载态：图标显示为旋转的 loadingIcon */
  loading?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 子命令：选中后进入子层导航 */
  children?: XCommandItem[]
  /** 子层输入框占位文字 */
  placeholder?: string
  /** 执行回调 */
  onSelect?: () => void
  className?: string
  [key: string]: any
}

export interface XCommandGroup {
  /** 分组唯一标识 */
  id?: string
  /** 分组标题 */
  label?: string
  /** 命令数组 */
  items?: XCommandItem[]
  /** 命令数组（kit 既有字段，与 items 等价） */
  commands?: XCommandItem[]
  /** 项高亮时显示的尾部图标 */
  highlightedIcon?: XMenuIcon
  /** 子层输入框占位文字 */
  placeholder?: string
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XCommandPaletteUi {
  root?: string
  input?: string
  close?: string
  back?: string
  content?: string
  footer?: string
  viewport?: string
  group?: string
  empty?: string
  label?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: XAvatarSize
  itemLeadingChip?: string
  itemLeadingChipSize?: XChipSize
  itemTrailing?: string
  itemTrailingIcon?: string
  itemTrailingHighlightedIcon?: string
  itemTrailingKbds?: string
  itemTrailingKbdsSize?: XKbdSize
  itemWrapper?: string
  itemLabel?: string
  itemLabelBase?: string
  itemLabelPrefix?: string
  itemLabelSuffix?: string
  itemDescription?: string
}

export interface XCommandPaletteProps {
  /** 是否打开 */
  open?: boolean
  /** 命令分组数组 */
  groups?: XCommandGroup[]
  /** 尺寸 */
  size?: XMenuSize
  /** 是否可搜索（kit 既有属性，等价于 input !== false） */
  searchable?: boolean
  /** 是否显示输入框，对象可配置占位文字 */
  input?: boolean | { placeholder?: string }
  /** 输入框占位文字 */
  placeholder?: string
  /** 挂载后自动聚焦输入框 */
  autofocus?: boolean
  /** 输入框前置图标，false 时隐藏 */
  icon?: XMenuIcon | false
  /** 输入框尾部图标 */
  trailingIcon?: XMenuIcon
  /** 输入框加载态 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: XMenuIcon
  /** 子命令项尾部的进入图标 */
  childrenIcon?: XMenuIcon
  /** 选中项图标 */
  selectedIcon?: XMenuIcon
  /** 显示返回按钮（子命令层级），对象可透传 XButton 属性 */
  back?: boolean | { size?: XButtonSize; color?: XButtonColor; variant?: XButtonVariant }
  /** 返回按钮图标 */
  backIcon?: XMenuIcon
  /** 显示关闭按钮，对象可透传 XButton 属性 */
  close?: boolean | { size?: XButtonSize; color?: XButtonColor; variant?: XButtonVariant }
  /** 关闭按钮图标 */
  closeIcon?: XMenuIcon
  /** 命令标题字段 */
  labelKey?: string
  /** 命令值字段 */
  valueKey?: string
  /** 命令说明字段 */
  descriptionKey?: string
  /** 选择后关闭面板 */
  closeOnSelect?: boolean
  /** 渲染为指定元素（面板根容器） */
  render?: React.ReactElement
  /** 空状态内容 */
  empty?: React.ReactNode
  /** 底部内容 */
  footer?: React.ReactNode
  /** 主题插槽类名 */
  ui?: XCommandPaletteUi
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 命令执行回调 */
  onSelect?: (item: XCommandItem) => void
  /** 自定义返回按钮 */
  backSlot?: (props: { ui?: XCommandPaletteUi }) => React.ReactNode
  /** 自定义关闭按钮 */
  closeSlot?: (props: { ui?: XCommandPaletteUi }) => React.ReactNode
  /** 完全自定义命令项 */
  itemSlot?: (props: { item: XCommandItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项前置区域 */
  itemLeadingSlot?: (props: { item: XCommandItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项标签 */
  itemLabelSlot?: (props: { item: XCommandItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项说明 */
  itemDescriptionSlot?: (props: { item: XCommandItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义项尾部区域 */
  itemTrailingSlot?: (props: { item: XCommandItem; index: number; active: boolean }) => React.ReactNode
  /** 自定义分组标题 */
  groupLabelSlot?: (props: { group: XCommandGroup; label: string }) => React.ReactNode
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
  xs: "p-1 text-[10px] gap-1",
  sm: "p-1.5 text-[10px] gap-1.5",
  md: "p-1.5 text-xs gap-1.5",
  lg: "p-2 text-xs gap-2",
  xl: "p-2 text-sm gap-2",
}

/** 空态留白 */
const sizeEmptyClasses: Record<XMenuSize, string> = {
  xs: "py-3 text-xs",
  sm: "py-4 text-xs",
  md: "py-6 text-sm",
  lg: "py-7 text-sm",
  xl: "py-8 text-base",
}

/** 输入框高度 */
const sizeInputClasses: Record<XMenuSize, string> = {
  xs: "h-10",
  sm: "h-11",
  md: "h-12",
  lg: "h-13",
  xl: "h-14",
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

/** chip 尺寸映射 */
const sizeChipMap: Record<XMenuSize, XChipSize> = {
  xs: "sm",
  sm: "sm",
  md: "md",
  lg: "md",
  xl: "lg",
}

/** 快捷键尺寸映射 */
const sizeKbdMap: Record<XMenuSize, XKbdSize> = {
  xs: "sm",
  sm: "sm",
  md: "md",
  lg: "md",
  xl: "lg",
}

/** 按点分路径读取字段（支持嵌套对象） */
function getField(item: XCommandItem, key: string): unknown {
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

export interface XCommandPaletteApi {
  open: () => void
  close: () => void
  toggle: () => void
}

/** 创建与 api 绑定的命令面板：调用即得 [CommandPalette, commandPaletteApi] */
export function useXCommandPalette({ defaultOpen = false, ...componentProps }: Partial<XCommandPaletteProps> & { defaultOpen?: boolean } = {}) {
  const store = React.useState(() => createBoundStore({ open: defaultOpen }))[0]

  const api = React.useMemo<XCommandPaletteApi>(
    () => ({
      open: () => store.set({ open: true }),
      close: () => store.set({ open: false }),
      toggle: () => store.set({ open: !store.get().open }),
    }),
    [],
  )

  const CommandPalette = React.useMemo(() => {
    return function BoundCommandPalette(props: Partial<XCommandPaletteProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XCommandPalette
          {...componentProps}
          {...props}
          open={state.open}
          onOpenChange={(next) => store.set({ open: next })}
        />
      )
    }
  }, [])

  return [CommandPalette, api] as const
}

export const XCommandPalette = React.forwardRef<XCommandPaletteApi, XCommandPaletteProps>(
  function XCommandPalette(
    {
      open: openProp,
      groups = [],
      size = "md",
      searchable = true,
      input = true,
      placeholder = "搜索命令…",
      autofocus = true,
      icon = "search",
      trailingIcon,
      loading = false,
      loadingIcon = "loader-circle",
      childrenIcon = "chevron-right",
      selectedIcon = "check",
      back = true,
      backIcon = "arrow-left",
      close = false,
      closeIcon = "x",
      labelKey = "label",
      valueKey = "key",
      descriptionKey = "description",
      closeOnSelect = true,
      render,
      empty,
      footer,
      ui,
      onOpenChange,
      onSelect,
      backSlot,
      closeSlot,
      itemSlot,
      itemLeadingSlot,
      itemLabelSlot,
      itemDescriptionSlot,
      itemTrailingSlot,
      groupLabelSlot,
      className,
    },
    ref,
  ) {
    const [innerOpen, setInnerOpen] = React.useState(false)
    const [keyword, setKeyword] = React.useState("")
    const [history, setHistory] = React.useState<XCommandGroup[]>([])
    const open = openProp ?? innerOpen

    const showInput = input !== false && searchable

    /* 当前导航层：无历史时显示顶层分组 */
    const currentGroup = history.length > 0 ? history[history.length - 1] : undefined
    const visibleGroups = currentGroup ? [currentGroup] : groups
    const currentPlaceholder = currentGroup?.placeholder ?? placeholder

    const setOpen = (next: boolean) => {
      if (openProp == null) setInnerOpen(next)
      onOpenChange?.(next)
    }

    React.useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen(!open),
    }))

    const itemKeyOf = (item: XCommandItem, index: number) => String(getField(item, valueKey) ?? index)
    const itemLabelOf = (item: XCommandItem) => String(getField(item, labelKey) ?? "")

    function goBack() {
      setHistory((prev) => prev.slice(0, -1))
      setKeyword("")
    }

    function handleSelect(item: XCommandItem) {
      if (item.children?.length) {
        setHistory((prev) => [
          ...prev,
          { id: itemKeyOf(item, prev.length), label: itemLabelOf(item), items: item.children, placeholder: item.placeholder },
        ])
        setKeyword("")
        return
      }
      item.onSelect?.()
      onSelect?.(item)
      if (closeOnSelect) setOpen(false)
    }

    /** 渲染命令项 */
    function renderItem(item: XCommandItem, index: number, group: XCommandGroup) {
      const kbdValues = item.kbds?.length ? item.kbds : item.shortcut ? [item.shortcut] : []
      const hasChildren = (item.children?.length ?? 0) > 0
      const active = item.active === true
      const label = itemLabelOf(item)
      const description = getField(item, descriptionKey)
      /* cmdk 按 value 文本过滤，拼接全部可检索字段 */
      const searchValue = [label, String(description ?? ""), item.suffix ?? "", item.prefix ?? ""]
        .filter(Boolean)
        .join(" ")

      return (
        <CommandItem
          key={itemKeyOf(item, index)}
          value={searchValue}
          disabled={item.disabled}
          onSelect={() => handleSelect(item)}
          data-slot="item"
          className={cn(sizeItemClasses[size], active && "bg-muted", ui?.item, item.className)}
        >
          {itemSlot != null ? (
            itemSlot({ item, index, active })
          ) : (
            <>
              {itemLeadingSlot != null ? (
                itemLeadingSlot({ item, index, active })
              ) : item.loading ? (
                renderMenuIcon(
                  loadingIcon,
                  cn("shrink-0 animate-spin", sizeIconClasses[size], ui?.itemLeadingIcon),
                  "itemLeadingIcon",
                )
              ) : item.icon != null && item.chip ? (
                <XChip
                  inset
                  standalone
                  size={(ui?.itemLeadingChipSize as XChipSize) ?? sizeChipMap[size]}
                  {...(typeof item.chip === "object" ? item.chip : {})}
                  data-slot="itemLeadingChip"
                  className={cn("shrink-0", ui?.itemLeadingChip)}
                >
                  {renderMenuIcon(item.icon, cn("shrink-0", sizeIconClasses[size], ui?.itemLeadingIcon), "itemLeadingIcon")}
                </XChip>
              ) : item.icon != null ? (
                renderMenuIcon(
                  item.icon,
                  cn("shrink-0 text-muted-foreground", sizeIconClasses[size], ui?.itemLeadingIcon),
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

              {(label !== "" || description != null || item.prefix != null || item.suffix != null || itemLabelSlot != null || itemDescriptionSlot != null) && (
                <span data-slot="itemWrapper" className={cn("flex min-w-0 flex-1 flex-col text-start", ui?.itemWrapper)}>
                  {(label !== "" || itemLabelSlot != null) && (
                    <span data-slot="itemLabel" className={cn("flex min-w-0 items-baseline gap-1", ui?.itemLabel)}>
                      {itemLabelSlot != null ? (
                        itemLabelSlot({ item, index, active })
                      ) : (
                        <>
                          {item.prefix != null && (
                            <span data-slot="itemLabelPrefix" className={cn("text-muted-foreground", ui?.itemLabelPrefix)}>
                              {item.prefix}
                            </span>
                          )}
                          <span data-slot="itemLabelBase" className={cn("truncate", ui?.itemLabelBase)}>
                            {label}
                          </span>
                          {item.suffix != null && (
                            <span data-slot="itemLabelSuffix" className={cn("text-muted-foreground", ui?.itemLabelSuffix)}>
                              {item.suffix}
                            </span>
                          )}
                        </>
                      )}
                    </span>
                  )}
                  {itemDescriptionSlot != null
                    ? itemDescriptionSlot({ item, index, active })
                    : description != null && (
                        <span data-slot="itemDescription" className={cn("truncate text-xs text-muted-foreground", ui?.itemDescription)}>
                          {String(description)}
                        </span>
                      )}
                </span>
              )}

              <span data-slot="itemTrailing" className={cn("ms-auto inline-flex items-center gap-1.5", ui?.itemTrailing)}>
                {itemTrailingSlot != null ? (
                  itemTrailingSlot({ item, index, active })
                ) : hasChildren ? (
                  renderMenuIcon(
                    childrenIcon,
                    cn("shrink-0", sizeIconClasses[size], ui?.itemTrailingIcon),
                    "itemTrailingIcon",
                  )
                ) : kbdValues.length > 0 ? (
                  <span
                    data-slot="itemTrailingKbds"
                    className={cn("inline-flex items-center shrink-0", ui?.itemTrailingKbds)}
                  >
                    {kbdValues.map((kbd, kbdIndex) => (
                      <XKbd key={kbdIndex} size={(ui?.itemTrailingKbdsSize as XKbdSize) ?? sizeKbdMap[size]}>
                        {kbd}
                      </XKbd>
                    ))}
                  </span>
                ) : group.highlightedIcon != null ? (
                  renderMenuIcon(
                    group.highlightedIcon,
                    cn(
                      "shrink-0 text-muted-foreground hidden group-data-[selected=true]:inline-flex",
                      sizeIconClasses[size],
                      ui?.itemTrailingHighlightedIcon,
                    ),
                    "itemTrailingHighlightedIcon",
                  )
                ) : null}
                {active &&
                  renderMenuIcon(
                    selectedIcon,
                    cn("shrink-0", sizeIconClasses[size], ui?.itemTrailingIcon),
                    "itemTrailingIcon",
                  )}
              </span>
            </>
          )}
        </CommandItem>
      )
    }

    const paletteContent = (
      <>
        {showInput && (
          <div className="flex items-center gap-0.5 border-b border-border p-1">
            <div className="relative flex min-w-0 flex-1 items-center gap-1 rounded-lg bg-muted/30 px-2 ring-1 ring-inset ring-border">
              {history.length > 0 && back !== false &&
                (backSlot != null ? (
                  backSlot({ ui })
                ) : (
                  <XButton
                    size={size}
                    color="neutral"
                    variant="link"
                    square
                    aria-label="返回"
                    {...(typeof back === "object" ? back : {})}
                    data-slot="back"
                    className={cn("shrink-0", ui?.back)}
                    onClick={goBack}
                  >
                    {renderMenuIcon(backIcon, "shrink-0", "back")}
                  </XButton>
                ))}
              {icon !== false &&
                renderMenuIcon(icon, "pointer-events-none size-4 shrink-0 text-muted-foreground", "icon")}
              <CommandPrimitive.Input
                autoFocus={autofocus}
                value={keyword}
                onValueChange={setKeyword}
                placeholder={currentPlaceholder}
                data-slot="input"
                className={cn(
                  sizeInputClasses[size],
                  "w-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50",
                  ui?.input,
                )}
              />
              {loading
                ? renderMenuIcon(
                    loadingIcon,
                    "pointer-events-none size-4 shrink-0 animate-spin text-muted-foreground",
                    "loadingIcon",
                  )
                : trailingIcon != null
                  ? renderMenuIcon(
                      trailingIcon,
                      "pointer-events-none size-4 shrink-0 text-muted-foreground",
                      "trailingIcon",
                    )
                  : null}
              {close !== false &&
                (closeSlot != null ? (
                  closeSlot({ ui })
                ) : (
                  <XButton
                    size="sm"
                    color="neutral"
                    variant="ghost"
                    square
                    aria-label="关闭"
                    {...(typeof close === "object" ? close : {})}
                    data-slot="close"
                    className={cn("shrink-0", ui?.close)}
                    onClick={() => setOpen(false)}
                  >
                    {renderMenuIcon(closeIcon, "shrink-0", "close")}
                  </XButton>
                ))}
            </div>
          </div>
        )}

        <CommandList data-slot="content" className={cn(ui?.content)}>
          <div data-slot="viewport" className={cn(ui?.viewport)}>
            <CommandEmpty data-slot="empty" className={cn(sizeEmptyClasses[size], ui?.empty)}>
              {empty ?? "无匹配命令"}
            </CommandEmpty>
            {visibleGroups.map((group, groupIndex) => {
              const groupItems = group.items ?? group.commands ?? []
              return (
                <CommandGroup
                  key={group.id ?? group.label ?? `group-${groupIndex}`}
                  data-slot="group"
                  className={cn("p-1", ui?.group)}
                >
                  {group.label != null && (
                    <div
                      data-slot="label"
                      className={cn("font-semibold text-muted-foreground", sizeLabelClasses[size], ui?.label)}
                    >
                      {groupLabelSlot != null ? groupLabelSlot({ group, label: String(group.label) }) : group.label}
                    </div>
                  )}
                  {groupItems.map((item, index) => renderItem(item, index, group))}
                </CommandGroup>
              )
            })}
          </div>
        </CommandList>

        {footer != null && (
          <div data-slot="footer" className={cn("border-t border-border p-1", ui?.footer)}>
            {footer}
          </div>
        )}
      </>
    )

    /* 渲染配置：render 元素存在时作为面板根容器 */
    const commandNode = React.isValidElement(render) ? (
      React.cloneElement(render as React.ReactElement<Record<string, unknown>>, {
        "data-slot": "root",
        className: cn(ui?.root),
        children: <Command data-slot="root">{paletteContent}</Command>,
      })
    ) : (
      <Command data-slot="root" className={cn(ui?.root)}>
        {paletteContent}
      </Command>
    )

    return (
      <CommandDialog open={open} onOpenChange={setOpen} className={className}>
        {commandNode}
      </CommandDialog>
    )
  },
)
