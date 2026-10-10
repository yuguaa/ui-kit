/**
 * XBadge 徽标：label / count 展示数量或状态，支持圆点、包裹角标与图标头像。
 * 有 children 且带 count / dot 时作为右上角角标包裹内容，其余场景作为独立徽标展示。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { Badge } from "@/components/ui/badge"
import { XAvatar, type XAvatarProps } from "@/components/kit/x-avatar"
import { XIcon, type XIconName, type XIconSize } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XBadgeColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XBadgeSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XBadgeVariant = "solid" | "outline" | "soft" | "subtle"

/** 变体 × 语义色样式（字面量，保证 Tailwind 可扫描） */
const badgeColorClasses: Record<XBadgeVariant, Record<XBadgeColor, string>> = {
  solid: {
    primary: "bg-primary-6 text-white",
    secondary: "bg-secondary text-secondary-foreground",
    neutral: "bg-foreground text-background",
    success: "bg-success-6 text-white",
    info: "bg-info-6 text-white",
    warning: "bg-warning-6 text-white",
    error: "bg-error-6 text-white",
  },
  outline: {
    primary: "text-primary-6 ring-1 ring-inset ring-primary-5",
    secondary: "text-foreground ring-1 ring-inset ring-border",
    neutral: "text-foreground ring-1 ring-inset ring-border",
    success: "text-success-6 ring-1 ring-inset ring-success-5",
    info: "text-info-6 ring-1 ring-inset ring-info-5",
    warning: "text-warning-7 ring-1 ring-inset ring-warning-5",
    error: "text-error-6 ring-1 ring-inset ring-error-5",
  },
  soft: {
    primary: "bg-primary-1 text-primary-7",
    secondary: "bg-muted text-secondary-foreground",
    neutral: "bg-muted text-foreground",
    success: "bg-success-1 text-success-7",
    info: "bg-info-1 text-info-7",
    warning: "bg-warning-1 text-warning-8",
    error: "bg-error-1 text-error-7",
  },
  subtle: {
    primary: "bg-primary-1 text-primary-7 ring-1 ring-inset ring-primary-2",
    secondary: "bg-muted text-secondary-foreground ring-1 ring-inset ring-border",
    neutral: "bg-muted text-foreground ring-1 ring-inset ring-border",
    success: "bg-success-1 text-success-7 ring-1 ring-inset ring-success-2",
    info: "bg-info-1 text-info-7 ring-1 ring-inset ring-info-2",
    warning: "bg-warning-1 text-warning-8 ring-1 ring-inset ring-warning-2",
    error: "bg-error-1 text-error-7 ring-1 ring-inset ring-error-2",
  },
}

const badgeSizeClasses: Record<XBadgeSize, string> = {
  xs: "h-4 min-w-4 gap-0.5 px-1 text-[10px]",
  sm: "h-5 min-w-5 gap-1 px-1.5 text-xs",
  md: "h-6 min-w-6 gap-1 px-2 text-sm",
  lg: "h-7 min-w-7 gap-1.5 px-2.5 text-sm",
  xl: "h-8 min-w-8 gap-1.5 px-3 text-base",
}

/** square 模式：去掉水平内边距，宽度与高度一致 */
const badgeSquareClasses: Record<XBadgeSize, string> = {
  xs: "w-4 px-0",
  sm: "w-5 px-0",
  md: "w-6 px-0",
  lg: "w-7 px-0",
  xl: "w-8 px-0",
}

/** 图标尺寸随徽标尺寸 */
const badgeIconSizes: Record<XBadgeSize, XIconSize> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md",
  xl: "md",
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XBadgeUi {
  base?: string
  label?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: XAvatarProps["size"]
  trailingIcon?: string
}

export interface XBadgeProps
  extends Omit<React.ComponentProps<typeof Badge>, "variant" | "color" | "render"> {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 徽标文本 */
  label?: string | number
  /** 显示数字（kit 既有属性） */
  count?: number
  /** 圆点模式，不显示数字（kit 既有属性） */
  dot?: boolean
  /** 超出后显示 99+（kit 既有属性） */
  overflowCount?: number
  /** 预设样式 */
  variant?: XBadgeVariant
  /** 徽标颜色 */
  color?: XBadgeColor
  /** 徽标尺寸 */
  size?: XBadgeSize
  /** 等边距模式，宽度等于高度，适合只放图标或单字符 */
  square?: boolean
  /** 图标名，显示在左侧 */
  icon?: XIconName
  /** 左侧图标名 */
  leadingIcon?: XIconName
  /** 右侧图标名 */
  trailingIcon?: XIconName
  /** 左侧头像配置 */
  avatar?: XAvatarProps
  /** 徽标内容之前的内容 */
  leading?: React.ReactNode
  /** 徽标内容之后的内容 */
  trailing?: React.ReactNode
  /** 主题插槽类名 */
  ui?: XBadgeUi
  children?: React.ReactNode
}

export function XBadge({
  render,
  label,
  count,
  dot = false,
  overflowCount = 99,
  variant = "solid",
  color = "primary",
  size = "md",
  square = false,
  icon,
  leadingIcon,
  trailingIcon,
  avatar,
  leading,
  trailing,
  ui,
  className,
  children,
  ...rest
}: XBadgeProps) {
  const display = count != null && count > overflowCount ? `${overflowCount}+` : count
  const leadingIconName = leadingIcon ?? icon

  /** 圆点或带 count 的内容触发包裹模式，徽标定位在内容右上角 */
  const wrapMode = dot || (count != null && children != null)

  /** 空徽标自动等边距（Nuxt UI 行为） */
  const isSquare = square || (children == null && label == null && count == null)

  const badgeText = wrapMode ? (label ?? display) : (children ?? label ?? display)

  const leadingContent =
    leading != null ? (
      leading
    ) : leadingIconName != null ? (
      <XIcon name={leadingIconName} size={badgeIconSizes[size]} className={cn("shrink-0", ui?.leadingIcon)} />
    ) : avatar != null ? (
      <XAvatar
        {...avatar}
        size={ui?.leadingAvatarSize ?? avatar.size}
        className={cn("shrink-0", ui?.leadingAvatar)}
      />
    ) : null

  const trailingContent =
    trailing != null ? (
      trailing
    ) : trailingIcon != null ? (
      <XIcon name={trailingIcon} size={badgeIconSizes[size]} className={cn("shrink-0", ui?.trailingIcon)} />
    ) : null

  const badge = (
    <Badge
      render={render}
      className={cn(
        badgeColorClasses[variant][color],
        badgeSizeClasses[size],
        isSquare && badgeSquareClasses[size],
        ui?.base,
        className,
      )}
      {...rest}
    >
      {leadingContent}
      {label != null ? (
        <span className={cn("truncate", ui?.label)}>{label}</span>
      ) : badgeText != null ? (
        badgeText
      ) : null}
      {trailingContent}
    </Badge>
  )

  if (dot) {
    return useRender({
      defaultTagName: "span",
      props: {
        className: cn("relative inline-flex", className),
        children: (
          <>
            <span
              className={cn(
                "absolute top-0 right-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-error-6",
                ui?.base,
              )}
            />
            {children}
          </>
        ),
        ...rest,
      },
      render,
      state: { slot: "badge" },
    })
  }

  if (count != null && children != null) {
    return (
      <span className="relative inline-flex">
        {children}
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">{badge}</span>
      </span>
    )
  }

  return badge
}
