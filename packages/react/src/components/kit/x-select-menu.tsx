/**
 * XSelectMenu 选择菜单：popover + 可搜索选项列表。
 * 支持多选与空状态插槽，选项为 { label, value } 结构。
 */
import * as React from "react"
import { Check, ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export interface XSelectOption {
  label: string
  value: string
}

export interface XSelectMenuProps {
  /** 选项数据源 */
  options: XSelectOption[]
  /** 多选模式 */
  multiple?: boolean
  /** 是否支持搜索 */
  showSearch?: boolean
  /** 占位提示文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 选中值 */
  value?: string | string[]
  /** 默认选中值 */
  defaultValue?: string | string[]
  /** 选中回调 */
  onChange?: (value: string | string[]) => void
  className?: string
}

export function XSelectMenu({
  options,
  multiple = false,
  showSearch = false,
  placeholder = "请选择",
  disabled = false,
  value,
  defaultValue,
  onChange,
  className,
}: XSelectMenuProps) {
  const [innerValue, setInnerValue] = React.useState<string | string[]>(defaultValue ?? (multiple ? [] : ""))
  const [open, setOpen] = React.useState(false)
  const [keyword, setKeyword] = React.useState("")

  const current = value ?? innerValue
  const selected = Array.isArray(current) ? current : current ? [current] : []

  const filtered = showSearch && keyword
    ? options.filter((option) => option.label.toLowerCase().includes(keyword.toLowerCase()))
    : options

  const selectedLabels = options
    .filter((option) => selected.includes(option.value))
    .map((option) => option.label)

  const handleSelect = (optionValue: string) => {
    let next: string | string[]
    if (multiple) {
      const set = new Set(selected)
      if (set.has(optionValue)) set.delete(optionValue)
      else set.add(optionValue)
      next = [...set]
    } else {
      next = optionValue
      setOpen(false)
    }
    if (value == null) setInnerValue(next)
    onChange?.(next)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        render={
          <button
            type="button"
            className={cn(
              "flex h-9 w-full min-w-40 cursor-pointer items-center justify-between gap-2 rounded-md bg-transparent px-3 text-sm transition-[box-shadow,color] outline-none ring-1 ring-inset ring-input",
              "focus-visible:ring-2 focus-visible:ring-ring",
              "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
              open && "ring-2 ring-ring",
              className,
            )}
          >
            <span className={cn("truncate", selectedLabels.length === 0 && "text-muted-foreground")}>
              {selectedLabels.length > 0 ? selectedLabels.join(", ") : placeholder}
            </span>
            <ChevronDown className="size-4 shrink-0 opacity-50" />
          </button>
        }
      />
      <PopoverContent align="start" className="flex w-(--anchor-width) min-w-40 flex-col gap-1 p-1">
        {showSearch && (
          <span className="relative flex items-center px-1 pb-1">
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            <Input
              autoFocus
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="输入关键字搜索"
              className="h-8 pl-9"
            />
          </span>
        )}
        <div className="flex max-h-60 flex-col gap-0.5 overflow-auto">
          {filtered.length === 0 && (
            <div className="px-2 py-4 text-center text-sm text-muted-foreground">无匹配选项</div>
          )}
          {filtered.map((option) => {
            const isSelected = selected.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none",
                  "hover:bg-muted focus-visible:bg-muted",
                  isSelected && "bg-primary-1 text-primary-7 hover:bg-primary-2",
                )}
              >
                <span className="truncate">{option.label}</span>
                {isSelected && <Check className="size-4 shrink-0" />}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
