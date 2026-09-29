import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export interface XInputDateProps {
  /** 绑定日期（yyyy-MM-dd） */
  value?: string
  /** 默认日期 */
  defaultValue?: string
  /** 最小日期 */
  min?: string
  /** 最大日期 */
  max?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文字 */
  placeholder?: string
  /** 日期变化回调 */
  onChange?: (date: string) => void
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
  min,
  max,
  disabled = false,
  placeholder = "选择日期",
  onChange,
  footer,
  className,
}: XInputDateProps) {
  const [innerValue, setInnerValue] = React.useState(defaultValue ?? "")
  const current = value ?? innerValue

  const handleSelect = (date: Date | undefined) => {
    if (!date) return
    const next = format(date, "yyyy-MM-dd")
    if (value == null) setInnerValue(next)
    onChange?.(next)
  }

  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        render={
          <button type="button" className={cn("w-full", className)}>
            <span className="relative flex w-full items-center">
              <Input
                readOnly
                value={current}
                placeholder={placeholder}
                className="h-9 pl-9 text-left"
              />
              <CalendarIcon className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            </span>
          </button>
        }
      />
      <PopoverContent align="start" className="flex w-auto flex-col p-0">
        <Calendar
          mode="single"
          selected={toDate(current)}
          onSelect={handleSelect}
          disabled={(date) => {
            const minDate = toDate(min ?? "")
            const maxDate = toDate(max ?? "")
            return (minDate != null && date < minDate) || (maxDate != null && date > maxDate)
          }}
          className="p-2"
        />
        {footer != null && <div className="border-t border-border p-2">{footer}</div>}
      </PopoverContent>
    </Popover>
  )
}
