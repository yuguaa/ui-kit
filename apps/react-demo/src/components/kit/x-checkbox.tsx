import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface XCheckboxProps extends Omit<React.ComponentProps<typeof Checkbox>, "value" | "checked"> {
  /** 是否选中 */
  checked?: boolean
  /** 半选状态 */
  indeterminate?: boolean
  /** 选项文字 */
  label?: React.ReactNode
  /** 选项的值 */
  value?: string | number
}

export const XCheckbox = React.forwardRef<HTMLButtonElement, XCheckboxProps>(function XCheckbox(
  { indeterminate = false, label, value, id, className, checked, ...props },
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
        {...props}
      />
      {label != null && (
        <Label htmlFor={id} className="text-sm font-normal">
          {label}
        </Label>
      )}
    </span>
  )
})
