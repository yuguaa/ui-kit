/**
 * XListbox 列表：可选中项的列表选择组件。
 */
import * as React from "react"
import { Check } from "lucide-react"
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
  /** 选中回调 */
  onSelect?: (key: string) => void
  className?: string
}

export function XListbox({
  items,
  selected = [],
  multiple = false,
  disabled = false,
  onSelect,
  className,
}: XListboxProps) {
  const handleSelect = (key: string) => {
    if (disabled) return
    onSelect?.(key)
  }

  return (
    <ul
      role={multiple ? "group" : "listbox"}
      className={cn("flex w-full flex-col gap-0.5 p-1", disabled && "pointer-events-none opacity-50", className)}
    >
      {items.map((item) => {
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
      })}
    </ul>
  )
}
