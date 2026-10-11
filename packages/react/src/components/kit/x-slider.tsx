/**
 * XSlider 滑块：与 Nuxt UI Slider 对齐。
 * color / size 控制指示条与拇指，tooltip 悬浮显示当前值（可为对象透传 XTooltip），
 * onChange 在值提交（拖动结束）时触发，event.target.value 为提交值。
 */
import * as React from "react"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { XTooltip, type XTooltipProps } from "@/components/kit/x-tooltip"
import { cn } from "@/lib/utils"

export type XSliderColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XSliderSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XSliderOrientation = "horizontal" | "vertical"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XSliderUi {
  root?: string
  track?: string
  range?: string
  thumb?: string
}

export interface XSliderProps
  extends Omit<
    SliderPrimitive.Root.Props,
    "value" | "defaultValue" | "onValueChange" | "onValueCommitted" | "onChange" | "render" | "children" | "className" | "minStepsBetweenValues"
  > {
  /** 绑定值：单值或双值区间 */
  value?: number | number[]
  /** 默认值（非受控） */
  defaultValue?: number | number[]
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 双拇指最小间隔步数（对应 Vue 侧 minStepsBetweenThumbs，映射为 Base UI minStepsBetweenValues） */
  minStepsBetweenThumbs?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 悬浮显示当前值提示，可为 XTooltip 属性对象 */
  tooltip?: boolean | Partial<Omit<XTooltipProps, "text" | "className">>
  /** 滑块方向 */
  orientation?: XSliderOrientation
  /** 指示条与拇指颜色 */
  color?: XSliderColor
  /** 尺寸 */
  size?: XSliderSize
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XSliderUi
  /** 值变化回调（对应 Vue 侧 update:modelValue） */
  onValueChange?: (value: number | number[]) => void
  /** 值提交（拖动结束）回调，event.target.value 为提交值 */
  onChange?: (event: { target: { value: number | number[] } }) => void
  className?: string
}

/** 颜色映射：指示条背景与拇指描边 */
const sliderColorClasses: Record<XSliderColor, { range: string; thumb: string }> = {
  primary: { range: "bg-primary", thumb: "ring-primary outline-primary/25" },
  secondary: { range: "bg-secondary", thumb: "ring-secondary outline-secondary/25" },
  neutral: { range: "bg-foreground", thumb: "ring-foreground outline-foreground/25" },
  success: { range: "bg-success", thumb: "ring-success outline-success/25" },
  info: { range: "bg-info", thumb: "ring-info outline-info/25" },
  warning: { range: "bg-warning", thumb: "ring-warning outline-warning/25" },
  error: { range: "bg-error", thumb: "ring-error outline-error/25" },
}

const thumbSizeClasses: Record<XSliderSize, string> = {
  xs: "size-3",
  sm: "size-3.5",
  md: "size-4",
  lg: "size-4.5",
  xl: "size-5",
}

const trackSizeClasses: Record<XSliderSize, Record<XSliderOrientation, string>> = {
  xs: { horizontal: "h-[6px]", vertical: "w-[6px]" },
  sm: { horizontal: "h-[7px]", vertical: "w-[7px]" },
  md: { horizontal: "h-[8px]", vertical: "w-[8px]" },
  lg: { horizontal: "h-[9px]", vertical: "w-[9px]" },
  xl: { horizontal: "h-[10px]", vertical: "w-[10px]" },
}

function toArray(value: number | number[] | null | undefined) {
  if (value == null) return undefined
  return typeof value === "number" ? [value] : value
}

export const XSlider = React.forwardRef<HTMLDivElement, XSliderProps>(function XSlider(
  {
    value,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    minStepsBetweenThumbs,
    disabled = false,
    tooltip = false,
    orientation = "horizontal",
    color = "primary",
    size = "md",
    render,
    ui,
    onValueChange,
    onChange,
    className,
    ...rest
  },
  ref,
) {
  /* 非受控时跟随拖动更新，供数值提示展示 */
  const [innerValues, setInnerValues] = React.useState<number[] | null>(null)
  const values: number[] = value != null ? (toArray(value) ?? [min]) : innerValues ?? toArray(defaultValue) ?? [min]
  const thumbCount = values.length

  return (
    <SliderPrimitive.Root
      ref={ref}
      render={render}
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      minStepsBetweenValues={minStepsBetweenThumbs}
      disabled={disabled}
      orientation={orientation}
      data-slot="root"
      className={cn(
        "relative flex items-center select-none touch-none",
        orientation === "horizontal" ? "w-full" : "flex-col h-full",
        disabled && "opacity-75 cursor-not-allowed",
        ui?.root,
        className,
      )}
      onValueChange={(next) => {
        if (value == null) setInnerValues(toArray(next) ?? null)
        onValueChange?.(next as number | number[])
      }}
      onValueCommitted={(next) => {
        onChange?.({ target: { value: next as number | number[] } })
      }}
      {...rest}
    >
      <SliderPrimitive.Control
        className={cn("relative flex items-center touch-none", orientation === "horizontal" ? "w-full" : "h-full flex-col")}
      >
        <SliderPrimitive.Track
          data-slot="track"
          className={cn(
            "relative bg-muted overflow-hidden rounded-full grow",
            trackSizeClasses[size][orientation],
            orientation === "horizontal" ? "w-full" : "h-full",
            ui?.track,
          )}
        >
          <SliderPrimitive.Indicator
            data-slot="range"
            className={cn(
              "absolute rounded-full",
              sliderColorClasses[color].range,
              orientation === "horizontal" ? "h-full" : "w-full",
              ui?.range,
            )}
          />
        </SliderPrimitive.Track>

        {Array.from({ length: thumbCount }, (_, index) => {
          const thumbElement = (
            <SliderPrimitive.Thumb
              key={index}
              data-slot="thumb"
              aria-label={thumbCount > 1 ? `Thumb ${index + 1}` : "Thumb"}
              className={cn(
                "rounded-full bg-background ring-2 focus-visible:outline-3 focus-visible:outline-offset-2",
                thumbSizeClasses[size],
                sliderColorClasses[color].thumb,
                ui?.thumb,
              )}
            />
          )

          if (!tooltip) return thumbElement

          const tooltipProps = typeof tooltip === "object" ? tooltip : {}
          return (
            <XTooltip
              key={index}
              text={thumbCount > 1 ? String(values[index]) : String(values[0])}
              {...tooltipProps}
            >
              {thumbElement}
            </XTooltip>
          )
        })}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
})
