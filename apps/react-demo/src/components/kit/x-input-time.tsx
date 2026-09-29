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
  /** 绑定时间（HH:mm） */
  value?: string
  /** 默认时间 */
  defaultValue?: string
  /** 12 小时制 */
  hour12?: boolean
  /** 步长（分钟） */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 时间变化回调 */
  onChange?: (time: string) => void
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
  hour12 = false,
  step = 1,
  disabled = false,
  onChange,
  className,
}: XInputTimeProps) {
  const [innerValue, setInnerValue] = React.useState(defaultValue ?? "")
  const current = value ?? innerValue
  const options = React.useMemo(() => buildTimeOptions(hour12, step), [hour12, step])

  const handleSelect = (time: string) => {
    if (value == null) setInnerValue(time)
    onChange?.(time)
  }

  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        render={
          <button type="button" className={cn("w-full", className)}>
            <span className="relative flex w-full items-center">
              <Input readOnly value={current} placeholder="选择时间" className="h-9 pl-9 text-left" />
              <Clock className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            </span>
          </button>
        }
      />
      <PopoverContent align="start" className="flex w-(--anchor-width) min-w-32 flex-col p-0">
        <div className="flex max-h-60 flex-col gap-0.5 overflow-auto p-1">
          {options.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => handleSelect(time)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none",
                "hover:bg-muted focus-visible:bg-muted",
                current === time && "bg-primary-1 text-primary-7 hover:bg-primary-2",
              )}
            >
              {time}
              {current === time && <Check className="size-4" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
