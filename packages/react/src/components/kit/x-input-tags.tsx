/**
 * XInputTags 标签输入：以标签形式输入多个值，回车添加、点击关闭移除。
 */
import * as React from "react"
import { Input } from "@/components/ui/input"
import { XChip } from "@/components/kit/x-chip"
import { cn } from "@/lib/utils"

export interface XInputTagsProps {
  /** 标签数组 */
  value?: string[]
  /** 默认标签 */
  defaultValue?: string[]
  /** 最大标签数 */
  max?: number
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 添加标签 */
  onAdd?: (tag: string) => void
  /** 删除标签 */
  onRemove?: (index: number) => void
  className?: string
}

export function XInputTags({
  value,
  defaultValue = [],
  max,
  placeholder = "输入后回车添加…",
  disabled = false,
  onAdd,
  onRemove,
  className,
}: XInputTagsProps) {
  const [innerValue, setInnerValue] = React.useState<string[]>(defaultValue)
  const [draft, setDraft] = React.useState("")
  const tags = value ?? innerValue

  const addTag = (raw: string) => {
    const tag = raw.trim()
    if (!tag || tags.includes(tag)) return
    if (max != null && tags.length >= max) return
    const next = [...tags, tag]
    if (value == null) setInnerValue(next)
    setDraft("")
    onAdd?.(tag)
  }

  const removeTag = (index: number) => {
    const next = tags.filter((_, i) => i !== index)
    if (value == null) setInnerValue(next)
    onRemove?.(index)
  }

  return (
    <span
      className={cn(
        "flex min-h-9 w-full flex-wrap items-center gap-1.5 rounded-lg border border-input bg-transparent px-2 py-1.5 transition-colors",
        "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {tags.map((tag, index) => (
        <XChip key={`${tag}-${index}`} size="sm" closable onClose={() => removeTag(index)}>
          {tag}
        </XChip>
      ))}
      <Input
        value={draft}
        disabled={disabled || (max != null && tags.length >= max)}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault()
            addTag(draft)
          }
          if (event.key === "Backspace" && !draft && tags.length > 0) {
            removeTag(tags.length - 1)
          }
        }}
        onBlur={() => addTag(draft)}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="h-6 min-w-24 flex-1 border-0 bg-transparent p-0 text-sm shadow-none outline-none focus-visible:ring-0 focus-visible:border-0"
      />
    </span>
  )
}
