/**
 * XInputMenu 输入菜单：输入框与下拉菜单组合。
 * 输入关键字过滤 items，选中后回填输入框并触发 onSelect。
 */
import * as React from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  /** 有选中项时显示清空按钮 */
  clearable?: boolean
  /** 关键字不存在时允许回车创建新选项 */
  createItem?: boolean
  /** 选中回调 */
  onSelect?: (item: XInputMenuItem) => void
  /** 创建新选项回调 */
  onCreate?: (value: string) => void
  className?: string
}

export function XInputMenu({
  items,
  searchable = true,
  placeholder = "搜索并选择…",
  disabled = false,
  clearable = false,
  createItem = false,
  onSelect,
  onCreate,
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

  /* 关键字非空且与候选项不完全同名时允许创建 */
  const canCreate =
    createItem &&
    keyword.trim() !== "" &&
    !items.some(
      (item) =>
        item.label.toLowerCase() === keyword.trim().toLowerCase() ||
        item.value.toLowerCase() === keyword.trim().toLowerCase(),
    )

  /* 有选中项且未禁用时展示清空按钮 */
  const showClear = clearable && !disabled && selectedLabel !== ""

  const handleSelect = (item: XInputMenuItem) => {
    justSelected.current = true
    setSelectedLabel(item.label)
    setKeyword("")
    setOpen(false)
    onSelect?.(item)
  }

  /** 以当前关键字创建新选项并选中 */
  const handleCreate = () => {
    const value = keyword.trim()
    if (value === "") return
    justSelected.current = true
    setSelectedLabel(value)
    setKeyword("")
    setOpen(false)
    onSelect?.({ label: value, value })
    onCreate?.(value)
  }

  /** 清空已选中的项，恢复为初始空值 */
  const handleClear = () => {
    setSelectedLabel("")
    setKeyword("")
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
            onKeyDown={(event) => {
              if (event.key === "Enter" && canCreate) {
                event.preventDefault()
                handleCreate()
              }
            }}
            placeholder={placeholder}
            className={cn("h-9 pl-9", showClear && "pr-8")}
          />
          {showClear && (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label="清空"
              onMouseDown={(event) => event.preventDefault()}
              onClick={handleClear}
              className="absolute top-1/2 right-2 size-4 -translate-y-1/2 rounded-full text-muted-foreground opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3.5"
            >
              <X />
            </Button>
          )}
        </span>
      </span>
      <PopoverContent align="start" className="flex w-(--anchor-width) min-w-40 flex-col gap-0.5 p-1">
        {filtered.length === 0 && !canCreate && (
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
        {canCreate && (
          <button
            type="button"
            onClick={handleCreate}
            className="rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-muted focus-visible:bg-muted"
          >
            创建 "{keyword}"
          </button>
        )}
      </PopoverContent>
    </Popover>
  )
}
