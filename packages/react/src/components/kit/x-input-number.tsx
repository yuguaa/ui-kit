/**
 * XInputNumber 数字输入：带加减步进按钮的数字输入框。
 * orientation 区分横向（两侧步进）与纵向（右侧堆叠步进）；
 * increment / decrement 支持布尔开关、自定义内容与独立禁用态。
 */
import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XInputNumberSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XInputNumberOrientation = "horizontal" | "vertical"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XInputNumberUi {
  base?: string
}

/** 尺寸 → 输入框高度与内边距 */
const inputNumberSizeClasses: Record<XInputNumberSize, string> = {
  xs: "h-6 px-2 text-sm",
  sm: "h-7 px-2.5 text-sm",
  md: "h-8 px-2.5 text-base",
  lg: "h-9 px-3 text-base",
  xl: "h-11 px-3 text-base",
}

/** 输入框宽度（随控件尺寸） */
const widthClasses: Record<XInputNumberSize, string> = {
  xs: "w-16", sm: "w-18", md: "w-20", lg: "w-22", xl: "w-24",
}

/** 横向步进按钮尺寸 */
const buttonSizes: Record<XInputNumberSize, string> = {
  xs: "size-6", sm: "size-7", md: "size-8", lg: "size-9", xl: "size-10",
}

/** 纵向步进按钮宽度 */
const verticalButtonWidths: Record<XInputNumberSize, string> = {
  xs: "w-6", sm: "w-7", md: "w-8", lg: "w-9", xl: "w-10",
}

/** 步进按钮存在时，输入框补足的水平内边距 */
const decrementPaddings: Record<XInputNumberSize, string> = {
  xs: "pl-7", sm: "pl-8", md: "pl-9", lg: "pl-10", xl: "pl-11",
}
const incrementPaddings: Record<XInputNumberSize, string> = {
  xs: "pr-7", sm: "pr-8", md: "pr-9", lg: "pr-10", xl: "pr-11",
}

/** 步进图标尺寸（随控件尺寸） */
const iconSizes: Record<XInputNumberSize, string> = {
  xs: "size-3", sm: "size-3.5", md: "size-4", lg: "size-4", xl: "size-5",
}

/* 步进按钮公共样式 */
const buttonClasses =
  "absolute flex cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"

export interface XInputNumberProps
  extends Omit<React.ComponentProps<"input">, "value" | "defaultValue" | "onChange" | "size"> {
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
  /** 步进按钮方向：horizontal 两侧 / vertical 右侧堆叠 */
  orientation?: XInputNumberOrientation
  /** 控件尺寸 */
  size?: XInputNumberSize
  /** 占位提示文字 */
  placeholder?: string
  /** 是否显示加号按钮，或加号按钮的自定义内容 */
  increment?: boolean | React.ReactNode
  /** 是否显示减号按钮，或减号按钮的自定义内容 */
  decrement?: boolean | React.ReactNode
  /** 禁用加号按钮 */
  incrementDisabled?: boolean
  /** 禁用减号按钮 */
  decrementDisabled?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XInputNumberUi
  /** 值变化回调 */
  onChange?: (value: number) => void
}

export const XInputNumber = React.forwardRef<HTMLInputElement, XInputNumberProps>(
  function XInputNumber(
    {
      value,
      defaultValue = 0,
      min,
      max,
      step = 1,
      disabled = false,
      orientation = "horizontal",
      size = "md",
      placeholder,
      increment = true,
      decrement = true,
      incrementDisabled = false,
      decrementDisabled = false,
      render,
      ui,
      onChange,
      className,
      ...props
    },
    ref,
  ) {
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

    const showDecrement = decrement !== false
    const showIncrement = increment !== false

    /* 非布尔值时视为步进按钮的自定义内容 */
    const decrementContent = typeof decrement === "boolean" ? null : decrement
    const incrementContent = typeof increment === "boolean" ? null : increment

    const root = useRender<Record<string, unknown>, HTMLSpanElement>({
      render,
      defaultTagName: "span",
      props: {
        "data-slot": "root",
        className: cn("relative inline-flex w-fit items-center", className),
        children: (
          <>
            {showDecrement && (
              <button
                type="button"
                aria-label="decrement"
                disabled={disabled || decrementDisabled || (min != null && current <= min)}
                onClick={() => update(current - step)}
                className={cn(
                  buttonClasses,
                  orientation === "horizontal"
                    ? cn("inset-y-0 left-1", buttonSizes[size])
                    : cn("bottom-0 right-1 h-1/2 rounded-br-md", verticalButtonWidths[size]),
                )}
              >
                {decrementContent ?? <Minus className={iconSizes[size]} />}
              </button>
            )}
            <input
              ref={ref}
              type="number"
              value={current}
              data-slot="base"
              className={cn(
                "appearance-none rounded-md border border-input bg-background placeholder:text-muted-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-75",
                "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                inputNumberSizeClasses[size],
                widthClasses[size],
                orientation === "horizontal" && (showDecrement ? "text-center" : "text-start"),
                orientation === "horizontal" && showDecrement && decrementPaddings[size],
                (orientation === "horizontal" ? showIncrement : (showIncrement || showDecrement)) &&
                  incrementPaddings[size],
                ui?.base,
              )}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              placeholder={placeholder}
              onChange={handleInput}
              {...props}
            />
            {showIncrement && (
              <button
                type="button"
                aria-label="increment"
                disabled={disabled || incrementDisabled || (max != null && current >= max)}
                onClick={() => update(current + step)}
                className={cn(
                  buttonClasses,
                  orientation === "horizontal"
                    ? cn("inset-y-0 right-1", buttonSizes[size])
                    : cn("top-0 right-1 h-1/2 rounded-tr-md", verticalButtonWidths[size]),
                )}
              >
                {incrementContent ?? <Plus className={iconSizes[size]} />}
              </button>
            )}
          </>
        ),
      },
    })

    return root
  },
)
