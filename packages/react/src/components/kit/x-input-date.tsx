/**
 * XInputDate 日期选择：输入框 + popover 日历。
 * 支持最小/最大日期、底部自定义内容与日期区间（range）。
 */
import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

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
  /** 日期变化回调 */
  onChange?: (date: string | string[]) => void
  /** 底部自定义内容 */
  footer?: React.ReactNode
  className?: string
}

const toDate = (value: string): Date | undefined => {
  if (!value) return undefined
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date
}

export function XInputDate({
  value,
  defaultValue,
  range = false,
  min,
  max,
  disabled = false,
  placeholder = "选择日期",
  onChange,
  footer,
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

  const current = value ?? innerValue

  const displayText = range
    ? (() => {
        const pair = Array.isArray(current) ? current : []
        if (pair[0] == null) return ""
        return pair[1] != null ? `${pair[0]} → ${pair[1]}` : pair[0]
      })()
    : (current as string)

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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        render={
          <button type="button" className={cn("w-full cursor-pointer", className)}>
            <span className="relative flex w-full items-center">
              <Input
                readOnly
                value={displayText}
                placeholder={placeholder}
                className="h-9 pl-9 text-left"
              />
              <CalendarIcon className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            </span>
          </button>
        }
      />
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
