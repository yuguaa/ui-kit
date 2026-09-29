/**
 * XChip 芯片：用于标记属性，支持多种语义色与可选关闭按钮。
 */
import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type XChipColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XChipSize = "xs" | "sm" | "md" | "lg" | "xl"

const chipColorClasses: Record<XChipColor, string> = {
  primary: "border-primary-3 bg-primary-1 text-primary-7",
  secondary: "border-border bg-secondary text-secondary-foreground",
  neutral: "border-border bg-muted text-muted-foreground",
  success: "border-success-3 bg-success-1 text-success-7",
  info: "border-info-3 bg-info-1 text-info-7",
  warning: "border-warning-3 bg-warning-1 text-warning-8",
  error: "border-error-3 bg-error-1 text-error-7",
}

const chipSizeClasses: Record<XChipSize, string> = {
  xs: "h-4.5 gap-0.5 px-1.5 text-[10px]",
  sm: "h-5.5 gap-1 px-2 text-xs",
  md: "h-7 gap-1 px-2.5 text-sm",
  lg: "h-8 gap-1.5 px-3 text-sm",
  xl: "h-9 gap-1.5 px-3.5 text-base",
}

export interface XChipProps extends Omit<React.ComponentProps<"span">, "color"> {
  /** 标签颜色 */
  color?: XChipColor
  /** 标签尺寸 */
  size?: XChipSize
  /** 是否可关闭 */
  closable?: boolean
  /** 标签图标 */
  icon?: React.ReactNode
  /** 关闭时回调 */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function XChip({
  color = "primary",
  size = "md",
  closable = false,
  icon,
  onClose,
  className,
  children,
  ...props
}: XChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium whitespace-nowrap",
        chipColorClasses[color],
        chipSizeClasses[size],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
      {closable && (
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          aria-label="close"
          onClick={onClose}
          className="-mr-1 size-4 rounded-full opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3"
        >
          <X />
        </Button>
      )}
    </span>
  )
}
