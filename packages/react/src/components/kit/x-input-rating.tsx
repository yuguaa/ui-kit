/**
 * XInputRating 评分：以星标形式进行评分输入，支持半星与自定义图标。
 */
import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export interface XInputRatingProps {
  /** 评分值 */
  value?: number
  /** 默认评分 */
  defaultValue?: number
  /** 最大分值 */
  max?: number
  /** 允许半星 */
  allowHalf?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 评分变化回调 */
  onChange?: (value: number) => void
  /** 自定义图标渲染 */
  item?: (state: { filled: boolean; half: boolean }) => React.ReactNode
  className?: string
}

export function XInputRating({
  value,
  defaultValue = 0,
  max = 5,
  allowHalf = false,
  disabled = false,
  onChange,
  item,
  className,
}: XInputRatingProps) {
  const [innerValue, setInnerValue] = React.useState(defaultValue)
  const current = value ?? innerValue

  const pick = (index: number, half: boolean) => {
    if (disabled) return
    const next = half && allowHalf ? index + 0.5 : index + 1
    if (value == null) setInnerValue(next)
    onChange?.(next)
  }

  const renderStar = (index: number) => {
    const filled = current >= index + 1
    const half = !filled && allowHalf && current >= index + 0.5
    if (item) return item({ filled, half })
    return (
      <span className="relative inline-flex" aria-hidden="true">
        <Star className="size-5 text-border" />
        {half && (
          <Star className="absolute inset-0 size-5 fill-warning-6 text-warning-6 [clip-path:inset(0_50%_0_0)]" />
        )}
        {filled && <Star className="absolute inset-0 size-5 fill-warning-6 text-warning-6" />}
      </span>
    )
  }

  return (
    <span
      role="radiogroup"
      aria-label="rating"
      className={cn("inline-flex items-center gap-0.5", disabled && "pointer-events-none opacity-60", className)}
    >
      {Array.from({ length: max }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`${index + 1} 星`}
          onClick={(event) => pick(index, allowHalf && event.clientX > event.currentTarget.getBoundingClientRect().left + event.currentTarget.offsetWidth / 2)}
          className="cursor-pointer outline-none transition-colors hover:text-primary-6 focus-visible:text-primary-6"
        >
          {renderStar(index)}
        </button>
      ))}
    </span>
  )
}
