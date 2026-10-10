/**
 * XTabs 标签页：按 Nuxt UI tabs 结构二次封装。
 * items 字段(label / icon / avatar / badge / slot / content / value)驱动，
 * variant 支持 pill / link，orientation 支持 horizontal / vertical，
 * 支持受控 value 与非受控 defaultValue，内容区按 item.slot 分发渲染函数。
 */
import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { XAvatar, type XAvatarProps } from "@/components/kit/x-avatar"
import { XBadge, type XBadgeColor, type XBadgeSize, type XBadgeVariant } from "@/components/kit/x-badge"
import { XIcon, type XIconName, type XIconSize } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XTabsColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XTabsVariant = "pill" | "link"
export type XTabsSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XTabsOrientation = "horizontal" | "vertical"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致(leadingAvatarSize / trailingBadgeSize 为尺寸值) */
export interface XTabsUi {
  root?: string
  list?: string
  indicator?: string
  trigger?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: XAvatarProps["size"]
  label?: string
  trailingBadge?: string
  trailingBadgeSize?: XBadgeSize
  content?: string
}

/** 标签项字段映射，与 Nuxt UI TabsItem 保持一致 */
export interface XTabsItem {
  label?: string
  icon?: XIconName
  avatar?: {
    src?: string
    alt?: string
    text?: string
    size?: XAvatarProps["size"]
    shape?: XAvatarProps["shape"]
    color?: XAvatarProps["color"]
  }
  badge?: string | number | {
    label?: string | number
    color?: XBadgeColor
    variant?: XBadgeVariant
    size?: XBadgeSize
  }
  slot?: string
  content?: string
  value?: string | number
  disabled?: boolean
  className?: string
  ui?: Partial<Pick<XTabsUi, "trigger" | "leadingIcon" | "leadingAvatar" | "leadingAvatarSize" | "label" | "trailingBadge" | "trailingBadgeSize" | "content">>
  [key: string]: any
}

export interface XTabsProps {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 标签项数组 */
  items?: XTabsItem[]
  /** 组件颜色 */
  color?: XTabsColor
  /** 预设样式 */
  variant?: XTabsVariant
  /** 标签尺寸 */
  size?: XTabsSize
  /** 标签排列方向 */
  orientation?: XTabsOrientation
  /** 是否渲染内容区 */
  content?: boolean
  /** 从标签项取 value 的字段，支持点路径 */
  valueKey?: string
  /** 从标签项取 label 的字段，支持点路径 */
  labelKey?: string
  /** 初始激活的标签 value */
  defaultValue?: string | number
  /** 当前激活的标签 value(受控) */
  value?: string | number
  /** 隐藏面板时是否卸载内容 */
  unmountOnHide?: boolean
  /** 激活标签变化回调 */
  onValueChange?: (value: string | number) => void
  /** 主题插槽类名 */
  ui?: XTabsUi
  className?: string
  /** 前置内容(图标 / 头像) */
  leading?: (props: { item: XTabsItem; index: number; ui?: XTabsUi }) => React.ReactNode
  /** 后置内容(徽标) */
  trailing?: (props: { item: XTabsItem; index: number; ui?: XTabsUi }) => React.ReactNode
  /** 标签文字渲染函数 */
  children?: (props: { item: XTabsItem; index: number }) => React.ReactNode
  /** 内容面板渲染函数(等价于 content 插槽) */
  contentSlot?: (props: { item: XTabsItem; index: number; ui?: XTabsUi }) => React.ReactNode
  /** 列表前内容 */
  listLeading?: React.ReactNode
  /** 列表后内容 */
  listTrailing?: React.ReactNode
}

/** 变体 × 语义色:指示器背景、激活态文字与内容聚焦环(完整字面量) */
const tabsColorClasses: Record<XTabsColor, Record<XTabsVariant, { indicator: string; trigger: string; content: string }>> = {
  primary: {
    pill: {
      indicator: "bg-primary-6",
      trigger: "data-active:text-white outline-primary-6/25 focus-visible:outline-3",
      content: "outline-primary-6/25",
    },
    link: {
      indicator: "bg-primary-6",
      trigger: "data-active:text-primary-6 outline-primary-6/25 focus-visible:outline-3",
      content: "outline-primary-6/25",
    },
  },
  secondary: {
    pill: {
      indicator: "bg-secondary",
      trigger: "data-active:text-secondary-foreground outline-secondary/25 focus-visible:outline-3",
      content: "outline-secondary/25",
    },
    link: {
      indicator: "bg-secondary",
      trigger: "data-active:text-secondary-foreground outline-secondary/25 focus-visible:outline-3",
      content: "outline-secondary/25",
    },
  },
  neutral: {
    pill: {
      indicator: "bg-foreground",
      trigger: "data-active:text-background outline-foreground/25 focus-visible:outline-3",
      content: "outline-foreground/25",
    },
    link: {
      indicator: "bg-foreground",
      trigger: "data-active:text-foreground outline-foreground/25 focus-visible:outline-3",
      content: "outline-foreground/25",
    },
  },
  success: {
    pill: {
      indicator: "bg-success-6",
      trigger: "data-active:text-white outline-success-6/25 focus-visible:outline-3",
      content: "outline-success-6/25",
    },
    link: {
      indicator: "bg-success-6",
      trigger: "data-active:text-success-6 outline-success-6/25 focus-visible:outline-3",
      content: "outline-success-6/25",
    },
  },
  info: {
    pill: {
      indicator: "bg-info-6",
      trigger: "data-active:text-white outline-info-6/25 focus-visible:outline-3",
      content: "outline-info-6/25",
    },
    link: {
      indicator: "bg-info-6",
      trigger: "data-active:text-info-6 outline-info-6/25 focus-visible:outline-3",
      content: "outline-info-6/25",
    },
  },
  warning: {
    pill: {
      indicator: "bg-warning-6",
      trigger: "data-active:text-white outline-warning-6/25 focus-visible:outline-3",
      content: "outline-warning-6/25",
    },
    link: {
      indicator: "bg-warning-6",
      trigger: "data-active:text-warning-6 outline-warning-6/25 focus-visible:outline-3",
      content: "outline-warning-6/25",
    },
  },
  error: {
    pill: {
      indicator: "bg-error-6",
      trigger: "data-active:text-white outline-error-6/25 focus-visible:outline-3",
      content: "outline-error-6/25",
    },
    link: {
      indicator: "bg-error-6",
      trigger: "data-active:text-error-6 outline-error-6/25 focus-visible:outline-3",
      content: "outline-error-6/25",
    },
  },
}

/** 尺寸:触发器内边距字号、图标尺寸与头像尺寸 */
const tabsSizeClasses: Record<XTabsSize, { trigger: string; leadingIcon: XIconSize; leadingAvatarSize: XAvatarProps["size"] }> = {
  xs: { trigger: "px-2 py-1 text-xs gap-1", leadingIcon: "sm", leadingAvatarSize: "xs" },
  sm: { trigger: "px-2.5 py-1.5 text-xs gap-1.5", leadingIcon: "sm", leadingAvatarSize: "xs" },
  md: { trigger: "px-3 py-1.5 text-sm gap-1.5", leadingIcon: "md", leadingAvatarSize: "sm" },
  lg: { trigger: "px-3 py-2 text-sm gap-2", leadingIcon: "md", leadingAvatarSize: "sm" },
  xl: { trigger: "px-3 py-2 text-base gap-2", leadingIcon: "lg", leadingAvatarSize: "md" },
}

/** 变体:列表与指示器形状 */
const tabsVariantClasses: Record<XTabsVariant, { list: string; indicator: string }> = {
  pill: { list: "bg-muted rounded-lg", indicator: "rounded-md shadow-xs" },
  link: { list: "border-border", indicator: "rounded-full" },
}

/** 方向:根、列表、指示器与触发器的布局 */
const tabsOrientationClasses: Record<XTabsOrientation, { root: string; list: string; indicator: string; trigger: string }> = {
  horizontal: {
    root: "flex-col",
    list: "w-full",
    indicator: "left-[var(--active-tab-left)] w-[var(--active-tab-width)]",
    trigger: "justify-center",
  },
  vertical: {
    root: "",
    list: "flex-col",
    indicator: "top-[var(--active-tab-top)] h-[var(--active-tab-height)]",
    trigger: "",
  },
}

/** 方向 × 变体组合:指示器与列表的边距修正 */
const tabsCompoundClasses: Record<XTabsOrientation, Record<XTabsVariant, { list?: string; indicator: string; trigger?: string }>> = {
  horizontal: {
    pill: { indicator: "inset-y-1" },
    link: { list: "border-b -mb-px", indicator: "-bottom-px h-px" },
  },
  vertical: {
    pill: { list: "items-center", indicator: "inset-x-1", trigger: "w-full justify-center" },
    link: { list: "border-s -ms-px", indicator: "-start-px w-px" },
  },
}

/** 取对象字段,支持点路径 */
function get(item: XTabsItem, key: string): string | number | undefined {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc == null || typeof acc !== "object") return undefined
    return (acc as Record<string, unknown>)[part]
  }, item) as string | number | undefined
}

export const XTabs = React.forwardRef<HTMLDivElement, XTabsProps>(function XTabs(
  {
    render,
    items = [],
    color = "primary",
    variant = "pill",
    size = "md",
    orientation = "horizontal",
    content = true,
    valueKey = "value",
    labelKey = "label",
    defaultValue = "0",
    value,
    unmountOnHide = true,
    onValueChange,
    ui,
    className,
    leading,
    trailing,
    children,
    contentSlot,
    listLeading,
    listTrailing,
  },
  ref,
) {
  const colorClasses = tabsColorClasses[color][variant]
  const sizeClasses = tabsSizeClasses[size]
  const orientationClasses = tabsOrientationClasses[orientation]
  const compoundClasses = tabsCompoundClasses[orientation][variant]

  /* 传给 leading / trailing / content 渲染函数的 ui 对象(与 Vue 侧 slotUi 一致) */
  const slotUi: XTabsUi = {
    root: cn("flex items-center gap-2", orientationClasses.root, ui?.root, className),
    list: cn(
      "relative flex p-1 group",
      orientationClasses.list,
      tabsVariantClasses[variant].list,
      compoundClasses.list,
      ui?.list,
    ),
    indicator: cn(
      "absolute transition-[left,top,width,height] duration-200 ease-out motion-reduce:transition-none",
      tabsVariantClasses[variant].indicator,
      orientationClasses.indicator,
      compoundClasses.indicator,
      colorClasses.indicator,
      ui?.indicator,
    ),
    trigger: ui?.trigger,
    leadingIcon: cn("shrink-0", ui?.leadingIcon),
    leadingAvatar: cn("shrink-0", ui?.leadingAvatar),
    leadingAvatarSize: ui?.leadingAvatarSize ?? sizeClasses.leadingAvatarSize,
    label: cn("truncate", ui?.label),
    trailingBadge: cn("shrink-0", ui?.trailingBadge),
    trailingBadgeSize: ui?.trailingBadgeSize ?? "sm",
    content: ui?.content,
  }

  return (
    <TabsPrimitive.Root
      ref={ref}
      render={render}
      value={value as never}
      defaultValue={defaultValue as never}
      orientation={orientation}
      onValueChange={(next) => onValueChange?.(next as string | number)}
      data-slot="root"
      className={cn("flex items-center gap-2", orientationClasses.root, ui?.root, className)}
    >
      <TabsPrimitive.List
        data-slot="list"
        className={cn(
          "relative flex p-1 group",
          orientationClasses.list,
          tabsVariantClasses[variant].list,
          compoundClasses.list,
          ui?.list,
        )}
      >
        <TabsPrimitive.Indicator
          data-slot="indicator"
          className={cn(
            "absolute transition-[left,top,width,height] duration-200 ease-out motion-reduce:transition-none",
            tabsVariantClasses[variant].indicator,
            orientationClasses.indicator,
            compoundClasses.indicator,
            colorClasses.indicator,
            ui?.indicator,
          )}
        />

        {listLeading}

        {items.map((item, index) => {
          const itemLabel = get(item, labelKey)
          const leadingContent =
            leading != null ? leading({ item, index, ui: slotUi }) : item.icon != null ? (
              <XIcon
                name={item.icon}
                size={sizeClasses.leadingIcon}
                data-slot="leadingIcon"
                className={cn("shrink-0", ui?.leadingIcon, item.ui?.leadingIcon)}
              />
            ) : item.avatar != null ? (
              <XAvatar
                {...item.avatar}
                size={item.ui?.leadingAvatarSize ?? ui?.leadingAvatarSize ?? sizeClasses.leadingAvatarSize}
                data-slot="leadingAvatar"
                className={cn("shrink-0", ui?.leadingAvatar, item.ui?.leadingAvatar)}
              />
            ) : null
          const trailingContent =
            trailing != null ? trailing({ item, index, ui: slotUi }) : item.badge != null ? (
              <XBadge
                {...(typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge)}
                color={typeof item.badge === "object" && item.badge != null ? item.badge.color : "neutral"}
                variant={typeof item.badge === "object" && item.badge != null ? item.badge.variant : "outline"}
                size={
                  (typeof item.badge === "object" && item.badge != null ? item.badge.size : undefined) ??
                  item.ui?.trailingBadgeSize ??
                  ui?.trailingBadgeSize ??
                  "sm"
                }
                data-slot="trailingBadge"
                className={cn("shrink-0", ui?.trailingBadge, item.ui?.trailingBadge)}
              />
            ) : null

          return (
            <TabsPrimitive.Tab
              key={get(item, valueKey) ?? index}
              value={get(item, valueKey) ?? String(index)}
              disabled={item.disabled}
              data-slot="trigger"
              className={cn(
                "relative inline-flex min-w-0 items-center rounded-md font-medium transition-colors",
                "text-muted-foreground hover:text-foreground",
                "disabled:cursor-not-allowed disabled:opacity-75",
                sizeClasses.trigger,
                orientationClasses.trigger,
                compoundClasses.trigger,
                colorClasses.trigger,
                ui?.trigger,
                item.ui?.trigger,
              )}
            >
              {leadingContent}
              {(itemLabel != null || children != null) && (
                <span data-slot="label" className={cn("truncate", ui?.label, item.ui?.label)}>
                  {children != null ? children({ item, index }) : itemLabel}
                </span>
              )}
              {trailingContent}
            </TabsPrimitive.Tab>
          )
        })}

        {listTrailing}
      </TabsPrimitive.List>

      {content &&
        items.map((item, index) => (
          <TabsPrimitive.Panel
            key={get(item, valueKey) ?? index}
            value={get(item, valueKey) ?? String(index)}
            keepMounted={!unmountOnHide}
            data-slot="content"
            className={cn("w-full rounded-md focus-visible:outline-3", colorClasses.content, ui?.content, item.ui?.content, item.className)}
          >
            {contentSlot != null ? contentSlot({ item, index, ui: slotUi }) : item.content}
          </TabsPrimitive.Panel>
        ))}
    </TabsPrimitive.Root>
  )
})
