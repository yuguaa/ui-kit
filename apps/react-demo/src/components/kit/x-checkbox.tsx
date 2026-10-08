import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type CheckboxColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
type CheckboxSize = "sm" | "md" | "lg"

/* 选中与半选时控件自身的语义色，Base UI 以 data-checked / data-indeterminate 标记状态 */
const colorClasses: Record<CheckboxColor, string> = {
  primary:
    "data-checked:border-primary-6 data-checked:bg-primary-6 data-checked:text-white data-checked:ring-primary-6 dark:data-checked:border-primary-6 dark:data-checked:bg-primary-6 dark:data-checked:text-white dark:data-checked:ring-primary-6 data-indeterminate:border-primary-6 data-indeterminate:bg-primary-6 data-indeterminate:text-white data-indeterminate:ring-primary-6",
  secondary:
    "data-checked:border-secondary data-checked:bg-secondary data-checked:text-secondary-foreground data-checked:ring-secondary dark:data-checked:border-secondary dark:data-checked:bg-secondary dark:data-checked:text-secondary-foreground dark:data-checked:ring-secondary data-indeterminate:border-secondary data-indeterminate:bg-secondary data-indeterminate:text-secondary-foreground data-indeterminate:ring-secondary",
  neutral:
    "data-checked:border-neutral-6 data-checked:bg-neutral-6 data-checked:text-white data-checked:ring-neutral-6 dark:data-checked:border-neutral-6 dark:data-checked:bg-neutral-6 dark:data-checked:text-white dark:data-checked:ring-neutral-6 data-indeterminate:border-neutral-6 data-indeterminate:bg-neutral-6 data-indeterminate:text-white data-indeterminate:ring-neutral-6",
  success:
    "data-checked:border-success-6 data-checked:bg-success-6 data-checked:text-white data-checked:ring-success-6 dark:data-checked:border-success-6 dark:data-checked:bg-success-6 dark:data-checked:text-white dark:data-checked:ring-success-6 data-indeterminate:border-success-6 data-indeterminate:bg-success-6 data-indeterminate:text-white data-indeterminate:ring-success-6",
  info:
    "data-checked:border-info-6 data-checked:bg-info-6 data-checked:text-white data-checked:ring-info-6 dark:data-checked:border-info-6 dark:data-checked:bg-info-6 dark:data-checked:text-white dark:data-checked:ring-info-6 data-indeterminate:border-info-6 data-indeterminate:bg-info-6 data-indeterminate:text-white data-indeterminate:ring-info-6",
  warning:
    "data-checked:border-warning-6 data-checked:bg-warning-6 data-checked:text-white data-checked:ring-warning-6 dark:data-checked:border-warning-6 dark:data-checked:bg-warning-6 dark:data-checked:text-white dark:data-checked:ring-warning-6 data-indeterminate:border-warning-6 data-indeterminate:bg-warning-6 data-indeterminate:text-white data-indeterminate:ring-warning-6",
  error:
    "data-checked:border-error-6 data-checked:bg-error-6 data-checked:text-white data-checked:ring-error-6 dark:data-checked:border-error-6 dark:data-checked:bg-error-6 dark:data-checked:text-white dark:data-checked:ring-error-6 data-indeterminate:border-error-6 data-indeterminate:bg-error-6 data-indeterminate:text-white data-indeterminate:ring-error-6",
}

/* 控件尺寸与内部图标同步缩放，data-slot 为原子写定的标识 */
const sizeClasses: Record<CheckboxSize, string> = {
  sm: "size-3.5 [&_[data-slot=checkbox-indicator]>svg]:size-3",
  md: "size-4 [&_[data-slot=checkbox-indicator]>svg]:size-3.5",
  lg: "size-5 [&_[data-slot=checkbox-indicator]>svg]:size-4",
}

export interface XCheckboxProps extends Omit<React.ComponentProps<typeof Checkbox>, "value" | "checked"> {
  /** 是否选中 */
  checked?: boolean
  /** 半选状态 */
  indeterminate?: boolean
  /** 选项文字 */
  label?: React.ReactNode
  /** 选项文字下方的辅助说明 */
  description?: React.ReactNode
  /** 选项的值 */
  value?: string | number
  /** 选中与半选时控件的语义色 */
  color?: CheckboxColor
  /** 控件尺寸 */
  size?: CheckboxSize
}

export const XCheckbox = React.forwardRef<HTMLButtonElement, XCheckboxProps>(function XCheckbox(
  { indeterminate = false, label, description, value, id, className, checked, color = "primary", size = "md", disabled, ...props },
  ref,
) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <Checkbox
        ref={ref}
        id={id}
        value={value == null ? undefined : String(value)}
        checked={checked}
        indeterminate={indeterminate}
        disabled={disabled}
        className={cn(colorClasses[color], sizeClasses[size])}
        {...props}
      />
      {(label != null || description != null) && (
        <span className="flex flex-col">
          {label != null && (
            <Label
              htmlFor={id}
              className={cn("text-sm font-normal", disabled && "cursor-not-allowed opacity-50")}
            >
              {label}
            </Label>
          )}
          {description != null && (
            <p className={cn("text-sm text-muted-foreground", disabled && "opacity-50")}>
              {description}
            </p>
          )}
        </span>
      )}
    </span>
  )
})
