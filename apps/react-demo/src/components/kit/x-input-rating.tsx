import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

type XInputRatingSize = "sm" | "md" | "lg"

/* 三档星星尺寸 */
const sizeClasses: Record<XInputRatingSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
}

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
  /** 只读展示，禁止点击与键盘操作 */
  readonly?: boolean
  /** 星星尺寸 */
  size?: XInputRatingSize
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
  readonly = false,
  size = "md",
  onChange,
  item,
  className,
}: XInputRatingProps) {
  const [innerValue, setInnerValue] = React.useState(defaultValue)
  const current = value ?? innerValue

  const pick = (index: number, half: boolean) => {
    if (disabled || readonly) return
    const next = half && allowHalf ? index + 0.5 : index + 1
    if (value == null) setInnerValue(next)
    onChange?.(next)
  }

  const renderStar = (index: number) => {
    const starSize = sizeClasses[size]
    const filled = current >= index + 1
    const half = !filled && allowHalf && current >= index + 0.5
    if (item) return item({ filled, half })
    return (
      <span className="relative inline-flex" aria-hidden="true">
        <Star className={cn(starSize, "text-border")} />
        {half && (
          <Star className={cn(starSize, "absolute inset-0 fill-warning-6 text-warning-6 [clip-path:inset(0_50%_0_0)]")} />
        )}
        {filled && <Star className={cn(starSize, "absolute inset-0 fill-warning-6 text-warning-6")} />}
      </span>
    )
  }

  return (
    <span
      role="radiogroup"
      aria-label="rating"
      aria-readonly={readonly || undefined}
      className={cn("inline-flex items-center gap-0.5", disabled && "pointer-events-none opacity-60", className)}
    >
      {Array.from({ length: max }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`${index + 1} 星`}
          tabIndex={readonly ? -1 : 0}
          onClick={(event) => pick(index, allowHalf && event.clientX > event.currentTarget.getBoundingClientRect().left + event.currentTarget.offsetWidth / 2)}
          className={cn(
            "outline-none transition-colors",
            readonly ? "cursor-default" : "cursor-pointer hover:text-primary-6 focus-visible:text-primary-6",
          )}
        >
          {renderStar(index)}
        </button>
      ))}
    </span>
  )
}
