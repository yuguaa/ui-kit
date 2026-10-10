/**
 * XInputTime 时间选择：输入框 + popover 时间列表。
 * 按 Nuxt UI input-time 对齐：root(触发按钮) > base(输入容器) > leading / input / separator / trailing。
 * 支持 12/24 小时制、分钟步长与时间区间（range）；range 时两个输入框由 separatorIcon 分隔。
 * 容器注入 Nuxt UI 语义：variant × color、highlight、fixed。
 */
import * as React from "react"
import { Check, Clock, Minus } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { XIcon } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XInputTimeSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XInputTimeColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XInputTimeVariant = "outline" | "soft" | "subtle" | "ghost" | "none"

/** 图标：XIcon 名称或自定义组件 */
export type XInputTimeIcon = "chevron-right" | React.ElementType

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XInputTimeUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  separatorIcon?: string
  trailing?: string
}

export interface XInputTimeProps {
  /** 绑定时间（HH:mm，range 时为 [开始, 结束]） */
  value?: string | string[]
  /** 默认时间 */
  defaultValue?: string | string[]
  /** 时间区间选择 */
  range?: boolean
  /** 12 小时制 */
  hour12?: boolean
  /** 步长（分钟） */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 控件尺寸 */
  size?: XInputTimeSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: XInputTimeColor
  /** 预设样式 */
  variant?: XInputTimeVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 区间分隔图标 */
  separatorIcon?: XInputTimeIcon
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 挂载后自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延迟（毫秒） */
  autofocusDelay?: number
  /** 时间变化回调 */
  onChange?: (time: string | string[]) => void
  /** 前置内容 */
  leading?: React.ReactNode
  /** 区间分隔内容 */
  separator?: React.ReactNode
  /** 后置内容 */
  trailing?: React.ReactNode
  /** 主题插槽类名 */
  ui?: XInputTimeUi
  className?: string
}

function buildTimeOptions(hour12: boolean, step: number): string[] {
  const options: string[] = []
  const totalMinutes = hour12 ? 12 * 60 : 24 * 60
  for (let minutes = 0; minutes < totalMinutes; minutes += step) {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    options.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`)
  }
  return options
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const timeVariantClasses: Record<XInputTimeVariant, string> = {
  outline: "bg-background ring-1 ring-inset ring-border",
  soft: "bg-muted/50 hover:bg-muted has-focus-visible:bg-muted disabled:bg-muted/50",
  subtle: "bg-muted ring-1 ring-inset ring-border",
  ghost: "bg-transparent hover:bg-muted has-focus-visible:bg-muted disabled:bg-transparent",
  none: "bg-transparent has-focus-visible:outline-none",
}

/** 聚焦描边（颜色 × 变体）：内部输入聚焦时叠加 outline 与 ring */
const timeFocusStyles: Record<XInputTimeColor, Record<XInputTimeVariant, string>> = {
  primary: {
    outline: "outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary",
    soft: "outline-primary/25 has-focus-visible:outline-3",
    subtle: "outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary",
    ghost: "outline-primary/25 has-focus-visible:outline-3",
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
    outline: "outline-foreground/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-foreground",
    soft: "outline-foreground/25 has-focus-visible:outline-3",
    subtle: "outline-foreground/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-foreground",
    ghost: "outline-foreground/25 has-focus-visible:outline-3",
    none: "",
  },
  success: {
    outline: "outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success",
    soft: "outline-success/25 has-focus-visible:outline-3",
    subtle: "outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success",
    ghost: "outline-success/25 has-focus-visible:outline-3",
    none: "",
  },
  info: {
    outline: "outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info",
    soft: "outline-info/25 has-focus-visible:outline-3",
    subtle: "outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info",
    ghost: "outline-info/25 has-focus-visible:outline-3",
    none: "",
  },
  warning: {
    outline: "outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning",
    soft: "outline-warning/25 has-focus-visible:outline-3",
    subtle: "outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning",
    ghost: "outline-warning/25 has-focus-visible:outline-3",
    none: "",
  },
  error: {
    outline: "outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error",
    soft: "outline-error/25 has-focus-visible:outline-3",
    subtle: "outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error",
    ghost: "outline-error/25 has-focus-visible:outline-3",
    none: "",
  },
}

/** 高亮描边色 */
const timeHighlightClasses: Record<XInputTimeColor, string> = {
  primary: "ring-1 ring-inset ring-primary",
  secondary: "ring-1 ring-inset ring-secondary",
  neutral: "ring-1 ring-inset ring-border",
  success: "ring-1 ring-inset ring-success",
  info: "ring-1 ring-inset ring-info",
  warning: "ring-1 ring-inset ring-warning",
  error: "ring-1 ring-inset ring-error",
}

/** fixed=false 时桌面端缩小一档字号 */
const timeFixedTextClasses: Partial<Record<XInputTimeSize, string>> = {
  xs: "md:text-xs",
  sm: "md:text-xs",
  md: "md:text-sm",
  lg: "md:text-sm",
}

/** 容器高度与文本尺寸 */
const timeBaseSizeClasses: Record<XInputTimeSize, string> = {
  xs: "h-6 text-sm",
  sm: "h-7 text-sm",
  md: "h-8 text-base",
  lg: "h-9 text-base",
  xl: "h-11 text-base",
}

/** 图标尺寸 */
const timeIconSizes: Record<XInputTimeSize, string> = {
  xs: "size-4",
  sm: "size-4",
  md: "size-5",
  lg: "size-5",
  xl: "size-6",
}

/** leading / trailing 容器自身的内边距 */
const timeLeadingPaddings: Record<XInputTimeSize, string> = {
  xs: "pl-2", sm: "pl-2.5", md: "pl-2.5", lg: "pl-3", xl: "pl-3",
}
const timeTrailingPaddings: Record<XInputTimeSize, string> = {
  xs: "pr-2", sm: "pr-2.5", md: "pr-2.5", lg: "pr-3", xl: "pr-3",
}

/** 输入框避让 leading / trailing 的水平内边距 */
const timeLeadingBasePaddings: Record<XInputTimeSize, string> = {
  xs: "pl-7", sm: "pl-8", md: "pl-9", lg: "pl-10", xl: "pl-11",
}
const timeTrailingBasePaddings: Record<XInputTimeSize, string> = {
  xs: "pr-7", sm: "pr-8", md: "pr-9", lg: "pr-10", xl: "pr-11",
}

function isIconName(icon: XInputTimeIcon | undefined): icon is "chevron-right" {
  return typeof icon === "string"
}

export function XInputTime({
  value,
  defaultValue,
  range = false,
  hour12 = false,
  step = 1,
  disabled = false,
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
  ui,
  className,
}: XInputTimeProps) {
  const [open, setOpen] = React.useState(false)
  const [innerValue, setInnerValue] = React.useState<string | string[]>(defaultValue ?? "")
  /** range 模式下已点选的开始时间，空表示等待首次点击 */
  const [draftStart, setDraftStart] = React.useState<string | null>(null)
  const current = value ?? innerValue
  const options = React.useMemo(() => buildTimeOptions(hour12, step), [hour12, step])
  const pair = Array.isArray(current) ? current : []

  const singleRef = React.useRef<HTMLInputElement>(null)
  const rangeRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (!autofocus) return
    const timeoutId = setTimeout(() => {
      ;(singleRef.current ?? rangeRef.current)?.focus()
    }, autofocusDelay)
    return () => clearTimeout(timeoutId)
  }, [autofocus, autofocusDelay])

  const isActive = (time: string) =>
    range
      ? time === draftStart || (Array.isArray(current) && current.includes(time))
      : current === time

  const handleSelect = (time: string) => {
    if (!range) {
      if (value == null) setInnerValue(time)
      onChange?.(time)
      setOpen(false)
      return
    }
    if (draftStart == null) {
      /* 第一次点击：记录开始，等待结束 */
      setDraftStart(time)
      return
    }
    /* 第二次点击：完成区间（自动排序） */
    const pair = draftStart <= time ? [draftStart, time] : [time, draftStart]
    setDraftStart(null)
    if (value == null) setInnerValue(pair)
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
        timeVariantClasses[variant],
        timeFocusStyles[color][variant],
        highlight && timeHighlightClasses[color],
        fixed === false && timeFixedTextClasses[size],
        timeBaseSizeClasses[size],
        ui?.base,
      )}
    >
      <span
        data-slot="leading"
        className={cn("absolute inset-y-0 left-0 flex items-center", timeLeadingPaddings[size], ui?.leading)}
      >
        {leading ?? (
          <Clock
            data-slot="leadingIcon"
            className={cn("shrink-0 text-muted-foreground", timeIconSizes[size], ui?.leadingIcon)}
          />
        )}
      </span>

      {!range ? (
        <input
          ref={singleRef}
          type="text"
          readOnly
          value={current as string}
          placeholder="选择时间"
          className={cn(
            "h-full w-full min-w-0 border-0 bg-transparent px-2.5 outline-none placeholder:text-muted-foreground",
            timeLeadingBasePaddings[size],
            trailing != null && timeTrailingBasePaddings[size],
          )}
        />
      ) : (
        <>
          <input
            ref={rangeRef}
            type="text"
            readOnly
            value={pair[0] ?? ""}
            placeholder="选择时间"
            className={cn(
              "h-full w-full min-w-0 flex-1 border-0 bg-transparent outline-none placeholder:text-muted-foreground",
              timeLeadingBasePaddings[size],
            )}
          />
          {separator ?? renderSeparatorIcon()}
          <input
            type="text"
            readOnly
            value={pair[1] ?? ""}
            placeholder="选择时间"
            className={cn(
              "h-full w-full min-w-0 flex-1 border-0 bg-transparent pr-2.5 outline-none placeholder:text-muted-foreground",
              trailing != null && timeTrailingBasePaddings[size],
            )}
          />
        </>
      )}

      {trailing != null && (
        <span
          data-slot="trailing"
          className={cn("absolute inset-y-0 right-0 flex items-center", timeTrailingPaddings[size], ui?.trailing)}
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
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) setDraftStart(null)
      }}
    >
      <PopoverTrigger disabled={disabled} render={trigger} />
      <PopoverContent align="start" className="flex w-(--anchor-width) min-w-32 flex-col p-0">
        {range && (
          <div className="border-b border-border px-3 py-1.5 text-xs text-muted-foreground">
            {draftStart ? `${draftStart} → 选择结束时间` : "选择开始时间"}
          </div>
        )}
        <div className="flex max-h-60 flex-col gap-0.5 overflow-auto p-1">
          {options.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => handleSelect(time)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none",
                "hover:bg-muted focus-visible:bg-muted",
                isActive(time) && "bg-primary/10 text-primary hover:bg-primary/15",
              )}
            >
              {time}
              {isActive(time) && <Check className="size-4" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
