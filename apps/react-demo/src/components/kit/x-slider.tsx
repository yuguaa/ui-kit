import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export interface XSliderProps
  extends Omit<React.ComponentProps<typeof Slider>, "value" | "defaultValue" | "onChange"> {
  /** 绑定值 */
  value?: number[]
  /** 默认值 */
  defaultValue?: number[]
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示当前值提示 */
  tooltip?: boolean
  /** 滑块方向 */
  orientation?: "horizontal" | "vertical"
  /** 值变化回调（单值） */
  onChange?: (value: number) => void
}

export const XSlider = React.forwardRef<HTMLDivElement, XSliderProps>(function XSlider(
  {
    value,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    tooltip = false,
    orientation = "horizontal",
    onChange,
    className,
    ...props
  },
  ref,
) {
  /* 不受控时跟随拖动更新，供数值提示展示 */
  const [innerValue, setInnerValue] = React.useState<number>()
  const current = value?.[0] ?? innerValue ?? defaultValue?.[0] ?? min
  const percent = max === min ? 0 : ((current - min) / (max - min)) * 100
  const vertical = orientation === "vertical"

  return (
    <div className={cn("relative", vertical ? "h-full min-h-40 w-fit" : "w-full", className)}>
      <Slider
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        orientation={orientation}
        className={cn(vertical && "h-full")}
        onValueChange={(next) => {
          /* 原子层的值可能是单值或数组，统一取第一个 */
          const values = Array.isArray(next) ? next : [next]
          if (value == null) setInnerValue(values[0])
          onChange?.(values[0] ?? min)
        }}
        {...props}
      />
      {tooltip && (
        <span
          className={cn(
            "bg-foreground text-background pointer-events-none absolute rounded-md px-1.5 py-0.5 text-xs tabular-nums",
            vertical ? "left-full ml-2 -translate-y-1/2" : "-translate-x-1/2 -translate-y-6",
          )}
          style={vertical ? { top: `${100 - percent}%` } : { left: `${percent}%` }}
        >
          {current}
        </span>
      )}
    </div>
  )
})
