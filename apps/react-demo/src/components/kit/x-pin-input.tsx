import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { cn } from "@/lib/utils"

export type XPinInputSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XPinInputColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XPinInputVariant = "outline" | "soft" | "subtle" | "ghost" | "none"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XPinInputUi {
  root?: string
  base?: string
  separator?: string
}

/** 尺寸 → 输入槽方块与字号 */
const slotSizeClasses: Record<XPinInputSize, string> = {
  xs: "size-6 text-sm/4",
  sm: "size-7 text-sm/4",
  md: "size-8 text-base/5",
  lg: "size-9 text-base/5",
  xl: "size-10 text-base",
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const variantClasses: Record<XPinInputVariant, string> = {
  outline: "bg-background ring-1 ring-inset ring-border",
  soft: "bg-muted/50 hover:bg-muted focus:bg-muted disabled:bg-muted/50",
  subtle: "bg-muted ring-1 ring-inset ring-border",
  ghost: "bg-transparent hover:bg-muted focus:bg-muted disabled:bg-transparent",
  none: "bg-transparent focus:outline-none",
}

/** 聚焦描边（颜色 × 变体）：outline / subtle 聚焦时叠加 ring */
const focusStyles: Record<XPinInputColor, Record<XPinInputVariant, string>> = {
  primary: {
    outline: "outline-primary-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary-6",
    soft: "outline-primary-6/25 focus-visible:outline-3",
    subtle: "outline-primary-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary-6",
    ghost: "outline-primary-6/25 focus-visible:outline-3",
    none: "",
  },
  secondary: {
    outline: "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary",
    soft: "outline-secondary/25 focus-visible:outline-3",
    subtle: "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary",
    ghost: "outline-secondary/25 focus-visible:outline-3",
    none: "",
  },
  neutral: {
    outline: "outline-neutral-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-neutral-6",
    soft: "outline-neutral-6/25 focus-visible:outline-3",
    subtle: "outline-neutral-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-neutral-6",
    ghost: "outline-neutral-6/25 focus-visible:outline-3",
    none: "",
  },
  success: {
    outline: "outline-success-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success-6",
    soft: "outline-success-6/25 focus-visible:outline-3",
    subtle: "outline-success-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success-6",
    ghost: "outline-success-6/25 focus-visible:outline-3",
    none: "",
  },
  info: {
    outline: "outline-info-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info-6",
    soft: "outline-info-6/25 focus-visible:outline-3",
    subtle: "outline-info-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info-6",
    ghost: "outline-info-6/25 focus-visible:outline-3",
    none: "",
  },
  warning: {
    outline: "outline-warning-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning-6",
    soft: "outline-warning-6/25 focus-visible:outline-3",
    subtle: "outline-warning-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning-6",
    ghost: "outline-warning-6/25 focus-visible:outline-3",
    none: "",
  },
  error: {
    outline: "outline-error-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error-6",
    soft: "outline-error-6/25 focus-visible:outline-3",
    subtle: "outline-error-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error-6",
    ghost: "outline-error-6/25 focus-visible:outline-3",
    none: "",
  },
}

/** 高亮描边色 */
const highlightClasses: Record<XPinInputColor, string> = {
  primary: "ring-1 ring-inset ring-primary-6",
  secondary: "ring-1 ring-inset ring-secondary",
  neutral: "ring-1 ring-inset ring-neutral-6",
  success: "ring-1 ring-inset ring-success-6",
  info: "ring-1 ring-inset ring-info-6",
  warning: "ring-1 ring-inset ring-warning-6",
  error: "ring-1 ring-inset ring-error-6",
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<XPinInputSize, string>> = {
  xs: "md:text-xs",
  sm: "md:text-xs",
  md: "md:text-sm",
  lg: "md:text-sm",
}

export interface XPinInputProps
  extends Omit<React.ComponentProps<"input">, "size" | "color" | "value" | "defaultValue" | "onChange"> {
  /** 绑定值 */
  value?: string
  /** 默认值 */
  defaultValue?: string
  /** 位数 */
  length?: number
  /** 是否掩码（视觉隐藏已输入字符） */
  mask?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 控件尺寸 */
  size?: XPinInputSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: XPinInputColor
  /** 预设样式 */
  variant?: XPinInputVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 分组分隔：数字表示每隔 N 个输入槽插入分隔符，数组表示指定位置之后插入 */
  separator?: number | number[]
  /** 自动聚焦第一个输入槽 */
  autofocus?: boolean
  /** 自动聚焦延迟（ms） */
  autofocusDelay?: number
  /** 以一次性验证码形式提示浏览器（autocomplete=one-time-code） */
  otp?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
  ui?: XPinInputUi
  /** 分隔符内容自定义渲染（不传时显示 •） */
  separatorSlot?: (props: { index: number }) => React.ReactNode
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 输入完成回调 */
  onComplete?: (value: string) => void
  className?: string
}

export const XPinInput = React.forwardRef<HTMLDivElement, XPinInputProps>(function XPinInput(
  {
    value,
    defaultValue = "",
    length = 5,
    mask = false,
    disabled = false,
    size = "md",
    color = "primary",
    variant = "outline",
    highlight = false,
    fixed = true,
    separator,
    autofocus = false,
    autofocusDelay = 0,
    otp = false,
    render,
    ui,
    separatorSlot,
    onChange,
    onComplete,
    className,
    placeholder,
    type = "text",
    required,
    id,
    name,
    ...rest
  },
  ref,
) {
  const [innerValue, setInnerValue] = React.useState(defaultValue)
  const current = value ?? innerValue

  const containerRef = React.useRef<HTMLDivElement>(null)

  /* autofocusDelay 后聚焦第一个输入槽 */
  React.useEffect(() => {
    if (!autofocus) return
    const timer = setTimeout(() => {
      containerRef.current?.querySelector("input")?.focus()
    }, autofocusDelay)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (next: string) => {
    if (value == null) setInnerValue(next)
    onChange?.(next)
  }

  /* 分隔符插入位置：与 Nuxt UI PinInput 相同的计算规则 */
  function shouldInsertSeparator(index: number) {
    if (separator === undefined) return false
    const position = index + 1
    if (position >= length) return false
    if (Array.isArray(separator)) return separator.includes(position)
    return Number.isInteger(separator) && separator > 0 && position % separator === 0
  }

  const root = useRender<Record<string, unknown>, HTMLDivElement>({
    render,
    defaultTagName: "div",
    props: {
      ref: (node: HTMLDivElement | null) => {
        containerRef.current = node
        if (typeof ref === "function") ref(node)
        else if (ref != null) ref.current = node
      },
      "data-slot": "root",
      className: cn(
        "relative inline-flex items-center gap-1.5",
        mask && "[&_[data-slot=input-otp-slot]]:text-transparent",
        ui?.root,
        className,
      ),
      ...rest,
      children: (
        <InputOTP
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={otp ? "one-time-code" : undefined}
          inputMode={type === "number" ? "numeric" : undefined}
          maxLength={length}
          value={current}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={handleChange}
          onComplete={onComplete}
          containerClassName="flex items-center gap-1.5"
        >
          <InputOTPGroup className="gap-1.5">
            {Array.from({ length }, (_, index) => (
              <React.Fragment key={index}>
                <InputOTPSlot
                  index={index}
                  className={cn(
                    "rounded-md border-0 placeholder:text-muted-foreground text-center disabled:cursor-not-allowed disabled:opacity-75 transition-colors",
                    slotSizeClasses[size],
                    variantClasses[variant],
                    focusStyles[color][variant],
                    highlight && highlightClasses[color],
                    fixed === false && fixedTextClasses[size],
                    ui?.base,
                  )}
                />
                {shouldInsertSeparator(index) && (
                  <span
                    data-slot="pin-input-separator"
                    role="presentation"
                    aria-hidden="true"
                    className={cn("flex items-center justify-center text-muted-foreground", ui?.separator)}
                  >
                    {separatorSlot != null ? separatorSlot({ index }) : "•"}
                  </span>
                )}
              </React.Fragment>
            ))}
          </InputOTPGroup>
        </InputOTP>
      ),
    },
  })

  return root
})
