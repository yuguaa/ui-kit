import * as React from "react"
import { cn } from "@/lib/utils"

export type XLinkColor = "primary" | "secondary" | "neutral"

const linkColorClasses: Record<XLinkColor, string> = {
  primary: "text-primary-6 hover:text-primary-5",
  secondary: "text-foreground hover:text-muted-foreground",
  neutral: "text-muted-foreground hover:text-foreground",
}

export interface XLinkProps extends Omit<React.ComponentProps<"a">, "href"> {
  /** 链接地址 */
  to?: string
  /** 颜色 */
  color?: XLinkColor
  /** 激活态 */
  active?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 前置图标 */
  leading?: React.ReactNode
  /** 后置图标 */
  trailing?: React.ReactNode
}

export function XLink({
  to,
  color = "primary",
  active = false,
  disabled = false,
  leading,
  trailing,
  className,
  children,
  onClick,
  ...props
}: XLinkProps) {
  return (
    <a
      href={disabled ? undefined : to}
      aria-current={active ? "page" : undefined}
      aria-disabled={disabled || undefined}
      onClick={(event) => {
        if (!to || disabled) event.preventDefault()
        onClick?.(event)
      }}
      className={cn(
        "inline-flex items-center gap-1 rounded text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        linkColorClasses[color],
        active && "text-primary-7 underline underline-offset-4",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      {...props}
    >
      {leading}
      {children}
      {trailing}
    </a>
  )
}
