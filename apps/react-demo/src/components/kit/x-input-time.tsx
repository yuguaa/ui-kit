import * as React from "react"
import { Check, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

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
  /** 时间变化回调 */
  onChange?: (time: string | string[]) => void
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

export function XInputTime({
  value,
  defaultValue,
  range = false,
  hour12 = false,
  step = 1,
  disabled = false,
  onChange,
  className,
}: XInputTimeProps) {
  const [open, setOpen] = React.useState(false)
  const [innerValue, setInnerValue] = React.useState<string | string[]>(defaultValue ?? "")
  /** range 模式下已点选的开始时间，空表示等待首次点击 */
  const [draftStart, setDraftStart] = React.useState<string | null>(null)
  const current = value ?? innerValue
  const options = React.useMemo(() => buildTimeOptions(hour12, step), [hour12, step])

  const displayText = range
    ? (() => {
        const pair = Array.isArray(current) ? current : []
        if (pair[0] == null) return ""
        return pair[1] != null ? `${pair[0]} → ${pair[1]}` : pair[0]
      })()
    : (current as string)

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

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) setDraftStart(null)
      }}
    >
      <PopoverTrigger
        disabled={disabled}
        render={
          <button type="button" className={cn("w-full cursor-pointer", className)}>
            <span className="relative flex w-full items-center">
              <Input readOnly value={displayText} placeholder="选择时间" className="h-9 pl-9 text-left" />
              <Clock className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            </span>
          </button>
        }
      />
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
                isActive(time) && "bg-primary-1 text-primary-7 hover:bg-primary-2",
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
