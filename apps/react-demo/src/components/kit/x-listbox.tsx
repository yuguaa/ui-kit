import * as React from "react"
import { Check, LoaderCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface XListItem {
  /** 列表项 key */
  key: string
  /** 列表项标题 */
  label: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 图标 */
  icon?: React.ReactNode
}

export interface XListboxProps {
  /** 列表项数组 */
  items: XListItem[]
  /** 选中项 */
  selected?: string[]
  /** 是否多选 */
  multiple?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示搜索框 */
  filterable?: boolean
  /** 加载态：显示加载提示并禁止交互 */
  loading?: boolean
  /** 搜索框占位文字 */
  searchPlaceholder?: string
  /** 过滤结果为空时的提示文字 */
  emptyText?: string
  /** 选中回调 */
  onSelect?: (key: string) => void
  className?: string
}

export function XListbox({
  items,
  selected = [],
  multiple = false,
  disabled = false,
  filterable = false,
  loading = false,
  searchPlaceholder = "搜索…",
  emptyText = "暂无匹配项",
  onSelect,
  className,
}: XListboxProps) {
  const [keyword, setKeyword] = React.useState("")

  /** 按 label 文本过滤列表项，大小写不敏感 */
  const filteredItems = keyword
    ? items.filter((item) => {
        const label = typeof item.label === "string" ? item.label : ""
        return label.toLowerCase().includes(keyword.toLowerCase())
      })
    : items

  const handleSelect = (key: string) => {
    if (disabled || loading) return
    onSelect?.(key)
  }

  const listClass = cn(
    "flex w-full flex-col gap-0.5 p-1",
    (disabled || loading) && "pointer-events-none opacity-50",
  )

  const listContent = (
    <>
      {loading ? (
        <li className="flex items-center justify-center gap-2 px-2 py-4 text-sm text-muted-foreground">
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          加载中…
        </li>
      ) : filteredItems.length === 0 ? (
        <li className="px-2 py-4 text-center text-sm text-muted-foreground">{emptyText}</li>
      ) : (
        filteredItems.map((item) => {
          const isSelected = selected.includes(item.key)
          return (
            <li key={item.key}>
              <button
                type="button"
                role={multiple ? "checkbox" : "option"}
                aria-selected={isSelected}
                aria-checked={multiple ? isSelected : undefined}
                disabled={item.disabled}
                onClick={() => handleSelect(item.key)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none cursor-pointer transition-colors",
                  "hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-50",
                  isSelected && "bg-primary-1 text-primary-7 hover:bg-primary-2",
                )}
              >
                {item.icon}
                <span className="flex-1 truncate">{item.label}</span>
                {isSelected && <Check className="size-4 shrink-0" />}
              </button>
            </li>
          )
        })
      )}
    </>
  )

  if (filterable) {
    return (
      <div className={cn("flex w-full flex-col", className)}>
        <div className="px-1 pb-1">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder={searchPlaceholder}
              disabled={disabled || loading}
              className="h-9 pl-9"
            />
          </div>
        </div>
        <ul role={multiple ? "group" : "listbox"} className={listClass}>
          {listContent}
        </ul>
      </div>
    )
  }

  return (
    <ul role={multiple ? "group" : "listbox"} className={cn(listClass, className)}>
      {listContent}
    </ul>
  )
}
