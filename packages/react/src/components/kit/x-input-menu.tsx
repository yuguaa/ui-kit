/**
 * XInputMenu 输入菜单：输入框与下拉菜单组合。
 * 输入关键字过滤 items，选中后回填输入框并触发 onSelect。
 */
import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export interface XInputMenuItem {
  label: string
  value: string
}

export interface XInputMenuProps {
  /** 菜单项数组 */
  items: XInputMenuItem[]
  /** 是否可搜索 */
  searchable?: boolean
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 选中回调 */
  onSelect?: (item: XInputMenuItem) => void
  className?: string
}

export function XInputMenu({
  items,
  searchable = true,
  placeholder = "搜索并选择…",
  disabled = false,
  onSelect,
  className,
}: XInputMenuProps) {
  const [open, setOpen] = React.useState(false)
  const [keyword, setKeyword] = React.useState("")
  const [selectedLabel, setSelectedLabel] = React.useState("")
  /** 选中后焦点回弹会重新触发 onFocus，用标记抑制一次 */
  const justSelected = React.useRef(false)

  const filtered = searchable && keyword
    ? items.filter((item) => item.label.toLowerCase().includes(keyword.toLowerCase()))
    : items

  const handleSelect = (item: XInputMenuItem) => {
    justSelected.current = true
    setSelectedLabel(item.label)
    setKeyword("")
    setOpen(false)
    onSelect?.(item)
  }

  const handleFocus = () => {
    if (justSelected.current) {
      justSelected.current = false
      return
    }
    setKeyword("")
    setOpen(true)
  }

  const displayValue = searchable ? (open ? keyword : selectedLabel) : selectedLabel

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <span className={cn("relative block w-full", className)}>
        <PopoverTrigger
          nativeButton={false}
          render={<span aria-hidden="true" className="pointer-events-none absolute inset-0" />}
        />
        <span className="relative flex w-full items-center">
          <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
          <Input
            readOnly={!searchable}
            disabled={disabled}
            value={displayValue}
            onChange={(event) => setKeyword(event.target.value)}
            onFocus={handleFocus}
            placeholder={placeholder}
            className="h-9 pl-9"
          />
        </span>
      </span>
      <PopoverContent align="start" className="flex w-(--anchor-width) min-w-40 flex-col gap-0.5 p-1">
        {filtered.length === 0 && (
          <div className="px-2 py-4 text-center text-sm text-muted-foreground">无匹配选项</div>
        )}
        {filtered.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => handleSelect(item)}
            className="rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-muted focus-visible:bg-muted"
          >
            {item.label}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
