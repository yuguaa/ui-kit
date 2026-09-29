/**
 * XInputNumber 数字输入：带加减步进按钮的数字输入框。
 */
import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface XInputNumberProps extends Omit<React.ComponentProps<typeof Input>, "value" | "defaultValue" | "onChange"> {
  /** 绑定值 */
  value?: number
  /** 默认值 */
  defaultValue?: number
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 值变化回调 */
  onChange?: (value: number) => void
}

export function XInputNumber({
  value,
  defaultValue = 0,
  min,
  max,
  step = 1,
  disabled = false,
  onChange,
  className,
  ...props
}: XInputNumberProps) {
  const [innerValue, setInnerValue] = React.useState<number>(defaultValue)
  const current = value ?? innerValue

  const clamp = (next: number) => {
    if (min != null && next < min) return min
    if (max != null && next > max) return max
    return next
  }

  const update = (next: number) => {
    const clamped = clamp(next)
    if (value == null) setInnerValue(clamped)
    if (clamped !== current) onChange?.(clamped)
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = Number(event.target.value)
    if (Number.isNaN(parsed)) return
    update(parsed)
  }

  return (
    <span className={cn("flex w-fit items-center", className)}>
      <button
        type="button"
        aria-label="decrement"
        disabled={disabled || (min != null && current <= min)}
        onClick={() => update(current - step)}
        className="inline-flex size-9 items-center justify-center rounded-l-lg border border-input text-muted-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
      >
        <Minus className="size-4" />
      </button>
      <Input
        type="number"
        value={current}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handleInput}
        className="h-9 w-20 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        {...props}
      />
      <button
        type="button"
        aria-label="increment"
        disabled={disabled || (max != null && current >= max)}
        onClick={() => update(current + step)}
        className="inline-flex size-9 items-center justify-center rounded-r-lg border border-input text-muted-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
      >
        <Plus className="size-4" />
      </button>
    </span>
  )
}
