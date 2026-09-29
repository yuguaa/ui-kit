import * as React from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export interface XRadioOption {
  /** 选项的值 */
  value: string | number
  /** 选项文字 */
  label?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
}

export interface XRadioGroupProps extends Omit<React.ComponentProps<typeof RadioGroup>, "onChange"> {
  /** 选项数据源 */
  options: XRadioOption[]
  /** 按钮样式（仅在 variant 为 button 时生效） */
  buttonStyle?: "outline" | "solid"
  /** 展示形式 */
  variant?: "radio" | "button"
}

export function XRadioGroup({
  options,
  buttonStyle = "outline",
  variant = "radio",
  className,
  ...props
}: XRadioGroupProps) {
  if (variant === "button") {
    return (
      <RadioGroup className={cn("inline-flex items-center", className)} {...props}>
        {options.map((option) => (
          <Label
            key={String(option.value)}
            className={cn(
              "inline-flex h-8 cursor-pointer items-center border px-3 text-sm transition-colors",
              "first:rounded-l-lg last:rounded-r-lg [&:not(:first-child)]:border-l-0",
              "has-[[data-state=checked]]:border-primary-5 has-[[data-state=checked]]:bg-primary-1 has-[[data-state=checked]]:text-primary-7",
              buttonStyle === "solid" &&
                "has-[[data-state=checked]]:bg-primary-6 has-[[data-state=checked]]:text-white",
              "hover:bg-muted has-[[data-disabled]]:pointer-events-none has-[[data-disabled]]:opacity-50",
              option.disabled && "pointer-events-none opacity-50",
            )}
          >
            <RadioGroupItem value={String(option.value)} disabled={option.disabled} className="sr-only" />
            {option.label ?? option.value}
          </Label>
        ))}
      </RadioGroup>
    )
  }

  return (
    <RadioGroup className={cn("flex flex-col gap-2", className)} {...props}>
      {options.map((option) => (
        <Label key={String(option.value)} className="flex items-center gap-2 text-sm font-normal">
          <RadioGroupItem value={String(option.value)} disabled={option.disabled} />
          {option.label ?? option.value}
        </Label>
      ))}
    </RadioGroup>
  )
}
