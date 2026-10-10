/**
 * XInputDate 日期选择：输入框 + popover 日历。
 * 按 Nuxt UI input-date 对齐：root(触发按钮) > base(输入容器) > leading / input / separator / trailing。
 * 支持最小/最大日期、底部自定义内容与日期区间（range）；range 时两个输入框由 separatorIcon 分隔。
 * 容器注入 Nuxt UI 语义：variant × color、highlight、fixed。
 */
import * as React from "react"
import { Calendar as CalendarIcon, Minus } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { XIcon } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XInputDateSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XInputDateColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XInputDateVariant = "outline" | "soft" | "subtle" | "ghost" | "none"

/** 图标：XIcon 名称或自定义组件 */
export type XInputDateIcon = "chevron-right" | React.ElementType

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XInputDateUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  separatorIcon?: string
  trailing?: string
}

export interface XInputDateProps {
  /** 绑定日期（yyyy-MM-dd，range 时为 [开始, 结束]） */
  value?: string | string[]
  /** 默认日期 */
  defaultValue?: string | string[]
  /** 日期区间选择 */
  range?: boolean
  /** 最小日期 */
  min?: string
  /** 最大日期 */
  max?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文字 */
  placeholder?: string
  /** 控件尺寸 */
  size?: XInputDateSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: XInputDateColor
  /** 预设样式 */
  variant?: XInputDateVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 区间分隔图标 */
  separatorIcon?: XInputDateIcon
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 挂载后自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延迟（毫秒） */
  autofocusDelay?: number
  /** 日期变化回调 */
  onChange?: (date: string | string[]) => void
  /** 前置内容 */
  leading?: React.ReactNode
  /** 区间分隔内容 */
  separator?: React.ReactNode
  /** 后置内容 */
  trailing?: React.ReactNode
  /** 底部自定义内容 */
  footer?: React.ReactNode
  /** 主题插槽类名 */
  ui?: XInputDateUi
  className?: string
}

const toDate = (value: string): Date | undefined => {
  if (!value) return undefined
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const dateVariantClasses: Record<XInputDateVariant, string> = {
  outline: "bg-background ring-1 ring-inset ring-border",
  soft: "bg-muted/50 hover:bg-muted has-focus-visible:bg-muted disabled:bg-muted/50",
  subtle: "bg-muted ring-1 ring-inset ring-border",
  ghost: "bg-transparent hover:bg-muted has-focus-visible:bg-muted disabled:bg-transparent",
  none: "bg-transparent has-focus-visible:outline-none",
}

/** 聚焦描边（颜色 × 变体）：内部输入聚焦时叠加 outline 与 ring */
const dateFocusStyles: Record<XInputDateColor, Record<XInputDateVariant, string>> = {
  primary: {
    outline: "outline-primary-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary-6",
    soft: "outline-primary-6/25 has-focus-visible:outline-3",
    subtle: "outline-primary-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary-6",
    ghost: "outline-primary-6/25 has-focus-visible:outline-3",
    none: "",
  },
  secondary: {
    outline: "outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-secondary",
    soft: "outline-secondary/25 has-focus-visible:outline-3",
    subtle: "outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-secondary",
    ghost: "outline-secondary/25 has-focus-visible:outline-3",
    none: "",
  },
  neutral: {
    outline: "outline-neutral-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-neutral-6",
    soft: "outline-neutral-6/25 has-focus-visible:outline-3",
    subtle: "outline-neutral-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-neutral-6",
    ghost: "outline-neutral-6/25 has-focus-visible:outline-3",
    none: "",
  },
  success: {
    outline: "outline-success-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success-6",
    soft: "outline-success-6/25 has-focus-visible:outline-3",
    subtle: "outline-success-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success-6",
    ghost: "outline-success-6/25 has-focus-visible:outline-3",
    none: "",
  },
  info: {
    outline: "outline-info-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info-6",
    soft: "outline-info-6/25 has-focus-visible:outline-3",
    subtle: "outline-info-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info-6",
    ghost: "outline-info-6/25 has-focus-visible:outline-3",
    none: "",
  },
  warning: {
    outline: "outline-warning-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning-6",
    soft: "outline-warning-6/25 has-focus-visible:outline-3",
    subtle: "outline-warning-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning-6",
    ghost: "outline-warning-6/25 has-focus-visible:outline-3",
    none: "",
  },
  error: {
    outline: "outline-error-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error-6",
    soft: "outline-error-6/25 has-focus-visible:outline-3",
    subtle: "outline-error-6/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error-6",
    ghost: "outline-error-6/25 has-focus-visible:outline-3",
    none: "",
  },
}

/** 高亮描边色 */
const dateHighlightClasses: Record<XInputDateColor, string> = {
  primary: "ring-1 ring-inset ring-primary-6",
  secondary: "ring-1 ring-inset ring-secondary",
  neutral: "ring-1 ring-inset ring-neutral-6",
  success: "ring-1 ring-inset ring-success-6",
  info: "ring-1 ring-inset ring-info-6",
  warning: "ring-1 ring-inset ring-warning-6",
  error: "ring-1 ring-inset ring-error-6",
}

/** fixed=false 时桌面端缩小一档字号 */
const dateFixedTextClasses: Partial<Record<XInputDateSize, string>> = {
  xs: "md:text-xs",
  sm: "md:text-xs",
  md: "md:text-sm",
  lg: "md:text-sm",
}

/** 容器高度与文本尺寸 */
const dateBaseSizeClasses: Record<XInputDateSize, string> = {
  xs: "h-7 text-sm",
  sm: "h-8 text-sm",
  md: "h-9 text-sm",
  lg: "h-10 text-sm",
  xl: "h-11 text-base",
}

/** 图标尺寸 */
const dateIconSizes: Record<XInputDateSize, string> = {
  xs: "size-4",
  sm: "size-4",
  md: "size-5",
  lg: "size-5",
  xl: "size-6",
}

/** leading / trailing 容器自身的内边距 */
const dateLeadingPaddings: Record<XInputDateSize, string> = {
  xs: "pl-2", sm: "pl-2.5", md: "pl-2.5", lg: "pl-3", xl: "pl-3",
}
const dateTrailingPaddings: Record<XInputDateSize, string> = {
  xs: "pr-2", sm: "pr-2.5", md: "pr-2.5", lg: "pr-3", xl: "pr-3",
}

/** 输入框避让 leading / trailing 的水平内边距 */
const dateLeadingBasePaddings: Record<XInputDateSize, string> = {
  xs: "pl-7", sm: "pl-8", md: "pl-9", lg: "pl-10", xl: "pl-11",
}
const dateTrailingBasePaddings: Record<XInputDateSize, string> = {
  xs: "pr-7", sm: "pr-8", md: "pr-9", lg: "pr-10", xl: "pr-11",
}

function isIconName(icon: XInputDateIcon | undefined): icon is "chevron-right" {
  return typeof icon === "string"
}

export function XInputDate({
  value,
  defaultValue,
  range = false,
  min,
  max,
  disabled = false,
  placeholder = "选择日期",
  size = "md",
  color = "primary",
  variant = "outline",
  highlight = false,
  fixed = true,
  separatorIcon,
  render,
  autofocus = false,
  autofocusDelay = 0,
  onChange,
  leading,
  separator,
  trailing,
  footer,
  ui,
  className,
}: XInputDateProps) {
  const [open, setOpen] = React.useState(false)
  const [innerValue, setInnerValue] = React.useState<string | string[]>(defaultValue ?? "")
  const [innerRange, setInnerRange] = React.useState<DateRange | undefined>(() => {
    if (!Array.isArray(defaultValue)) return undefined
    const from = toDate(defaultValue[0] ?? "")
    const to = toDate(defaultValue[1] ?? "")
    return from && to ? { from, to } : undefined
  })
  /** 选择中的区间：已点开始、未点结束 */
  const [draft, setDraft] = React.useState<DateRange | undefined>(undefined)

  const singleRef = React.useRef<HTMLInputElement>(null)
  const rangeRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (!autofocus) return
    const timeoutId = setTimeout(() => {
      ;(singleRef.current ?? rangeRef.current)?.focus()
    }, autofocusDelay)
    return () => clearTimeout(timeoutId)
  }, [autofocus, autofocusDelay])

  const current = value ?? innerValue
  const pair = Array.isArray(current) ? current : []

  const selectedRange: DateRange | undefined =
    draft ??
    (Array.isArray(value)
      ? { from: toDate(value[0] ?? ""), to: toDate(value[1] ?? "") }
      : innerRange)

  const isDisabledDate = (date: Date) => {
    const minDate = toDate(min ?? "")
    const maxDate = toDate(max ?? "")
    return (minDate != null && date < minDate) || (maxDate != null && date > maxDate)
  }

  const handleSelect = (date: Date | undefined) => {
    if (!date) return
    const next = format(date, "yyyy-MM-dd")
    if (value == null) setInnerValue(next)
    onChange?.(next)
    setOpen(false)
  }

  const handleRangeSelect = (next: DateRange | undefined) => {
    if (!next?.from) return
    if (!next.to) {
      /* 仅确定开始，等待结束 */
      setDraft(next)
      return
    }
    /* 区间完成（react-day-picker 保证 from ≤ to） */
    const pair = [format(next.from, "yyyy-MM-dd"), format(next.to, "yyyy-MM-dd")]
    setDraft(undefined)
    if (value == null) {
      setInnerRange({ from: next.from, to: next.to })
      setInnerValue(pair)
    }
    onChange?.(pair)
    setOpen(false)
  }

  const renderSeparatorIcon = () => {
    if (separatorIcon == null) {
      return <Minus data-slot="separatorIcon" className={cn("shrink-0 size-4 text-muted-foreground", ui?.separatorIcon)} />
    }
    if (isIconName(separatorIcon)) {
      return <XIcon name={separatorIcon} data-slot="separatorIcon" className={cn("shrink-0 size-4 text-muted-foreground", ui?.separatorIcon)} />
    }
    const Comp = separatorIcon
    return <Comp data-slot="separatorIcon" className={cn("shrink-0 size-4 text-muted-foreground", ui?.separatorIcon)} />
  }

  const triggerContent = (
    <span
      data-slot="base"
      className={cn(
        "relative flex w-full items-center rounded-md transition-colors",
        dateVariantClasses[variant],
        dateFocusStyles[color][variant],
        highlight && dateHighlightClasses[color],
        fixed === false && dateFixedTextClasses[size],
        dateBaseSizeClasses[size],
        ui?.base,
      )}
    >
      <span
        data-slot="leading"
        className={cn("absolute inset-y-0 left-0 flex items-center", dateLeadingPaddings[size], ui?.leading)}
      >
        {leading ?? (
          <CalendarIcon
            data-slot="leadingIcon"
            className={cn("shrink-0 text-muted-foreground", dateIconSizes[size], ui?.leadingIcon)}
          />
        )}
      </span>

      {!range ? (
        <input
          ref={singleRef}
          type="text"
          readOnly
          value={current as string}
          placeholder={placeholder}
          className={cn(
            "h-full w-full min-w-0 border-0 bg-transparent px-2.5 outline-none placeholder:text-muted-foreground",
            dateLeadingBasePaddings[size],
            trailing != null && dateTrailingBasePaddings[size],
          )}
        />
      ) : (
        <>
          <input
            ref={rangeRef}
            type="text"
            readOnly
            value={pair[0] ?? ""}
            placeholder={placeholder}
            className={cn(
              "h-full w-full min-w-0 flex-1 border-0 bg-transparent outline-none placeholder:text-muted-foreground",
              dateLeadingBasePaddings[size],
            )}
          />
          {separator ?? renderSeparatorIcon()}
          <input
            type="text"
            readOnly
            value={pair[1] ?? ""}
            placeholder={placeholder}
            className={cn(
              "h-full w-full min-w-0 flex-1 border-0 bg-transparent pr-2.5 outline-none placeholder:text-muted-foreground",
              trailing != null && dateTrailingBasePaddings[size],
            )}
          />
        </>
      )}

      {trailing != null && (
        <span
          data-slot="trailing"
          className={cn("absolute inset-y-0 right-0 flex items-center", dateTrailingPaddings[size], ui?.trailing)}
        >
          {trailing}
        </span>
      )}
    </span>
  )

  /* render 元素存在时克隆并注入内部结构 */
  const trigger = React.isValidElement(render) ? (
    React.cloneElement(render, {
      type: (render.props as Record<string, unknown>).type ?? "button",
      "data-slot": "root",
      className: cn("w-full cursor-pointer", ui?.root, className),
      children: triggerContent,
    } as React.HTMLAttributes<HTMLElement>)
  ) : (
    <button type="button" data-slot="root" className={cn("w-full cursor-pointer", ui?.root, className)}>
      {triggerContent}
    </button>
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} render={trigger} />
      <PopoverContent align="start" className="flex w-auto flex-col p-0">
        {range ? (
          <Calendar
            mode="range"
            resetOnSelect
            selected={selectedRange}
            onSelect={handleRangeSelect}
            disabled={isDisabledDate}
            className="p-2"
          />
        ) : (
          <Calendar
            mode="single"
            selected={toDate(current as string)}
            onSelect={handleSelect}
            disabled={isDisabledDate}
            className="p-2"
          />
        )}
        {footer != null && <div className="border-t border-border p-2">{footer}</div>}
      </PopoverContent>
    </Popover>
  )
}
