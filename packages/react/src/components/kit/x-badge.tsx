/**
 * XBadge 徽标：展示数量或状态提示，支持数字、溢出与圆点模式。
 * 有 children 时作为右上角角标包裹内容，无 children 时独立展示。
 */
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type XBadgeColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XBadgeSize = "xs" | "sm" | "md" | "lg" | "xl"

const badgeColorClasses: Record<XBadgeColor, string> = {
  primary: "border-primary-3 bg-primary-1 text-primary-7",
  secondary: "border-border bg-secondary text-secondary-foreground",
  neutral: "border-border bg-muted text-muted-foreground",
  success: "border-success-3 bg-success-1 text-success-7",
  info: "border-info-3 bg-info-1 text-info-7",
  warning: "border-warning-3 bg-warning-1 text-warning-8",
  error: "border-error-3 bg-error-1 text-error-7",
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
    <Badge className={cn(badgeColorClasses[color], badgeSizeClasses[size], className)} {...props}>
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
