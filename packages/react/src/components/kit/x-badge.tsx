/**
 * XBadge 徽标：展示数量或状态提示，支持数字、溢出与圆点模式。
 * 有 children 时作为右上角角标包裹内容，无 children 时独立展示。
 * 变体体系：solid | outline | soft | subtle × 七种语义色 × 五档尺寸。
 */
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type XBadgeColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XBadgeSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XBadgeVariant = "solid" | "outline" | "soft" | "subtle"

/** 变体 × 语义色样式（字面量，保证 Tailwind 可扫描） */
const badgeColorClasses: Record<XBadgeVariant, Record<XBadgeColor, string>> = {
  solid: {
    primary: "bg-primary-6 text-white",
    secondary: "bg-secondary text-secondary-foreground",
    neutral: "bg-neutral-6 text-white",
    success: "bg-success-6 text-white",
    info: "bg-info-6 text-white",
    warning: "bg-warning-6 text-white",
    error: "bg-error-6 text-white",
  },
  outline: {
    primary: "text-primary-6 ring-1 ring-inset ring-primary-5",
    secondary: "text-foreground ring-1 ring-inset ring-border",
    neutral: "text-neutral-6 ring-1 ring-inset ring-neutral-5",
    success: "text-success-6 ring-1 ring-inset ring-success-5",
    info: "text-info-6 ring-1 ring-inset ring-info-5",
    warning: "text-warning-7 ring-1 ring-inset ring-warning-5",
    error: "text-error-6 ring-1 ring-inset ring-error-5",
  },
  soft: {
    primary: "bg-primary-1 text-primary-7",
    secondary: "bg-muted text-secondary-foreground",
    neutral: "bg-neutral-1 text-neutral-7",
    success: "bg-success-1 text-success-7",
    info: "bg-info-1 text-info-7",
    warning: "bg-warning-1 text-warning-8",
    error: "bg-error-1 text-error-7",
  },
  subtle: {
    primary: "bg-primary-1 text-primary-7 ring-1 ring-inset ring-primary-2",
    secondary: "bg-muted text-secondary-foreground ring-1 ring-inset ring-border",
    neutral: "bg-neutral-1 text-neutral-7 ring-1 ring-inset ring-neutral-2",
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

export interface XBadgeProps extends Omit<React.ComponentProps<typeof Badge>, "variant" | "color"> {
  /** 显示数字 */
  count?: number
  /** 圆点模式，不显示数字 */
  dot?: boolean
  /** 超出后显示 99+ */
  overflowCount?: number
  /** 预设样式 */
  variant?: XBadgeVariant
  /** 徽标颜色 */
  color?: XBadgeColor
  /** 徽标尺寸 */
  size?: XBadgeSize
  children?: React.ReactNode
}

export function XBadge({
  count,
  dot = false,
  overflowCount = 99,
  variant = "soft",
  color = "primary",
  size = "md",
  className,
  children,
  ...props
}: XBadgeProps) {
  const display = count != null && count > overflowCount ? `${overflowCount}+` : count

  if (dot) {
    return (
      <span className={cn("relative inline-flex", className)} {...props}>
        <span className="absolute top-0 right-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-error-6" />
        {children}
      </span>
    )
  }

  const badge = (
    <Badge className={cn(badgeColorClasses[variant][color], badgeSizeClasses[size], className)} {...props}>
      {display}
    </Badge>
  )

  if (children == null) return badge

  return (
    <span className="relative inline-flex">
      {children}
      <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">{badge}</span>
    </span>
  )
}
