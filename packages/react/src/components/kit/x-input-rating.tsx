/**
 * XInputRating 评分：以星标形式进行评分输入。
 * 按 Nuxt UI input-rating 结构对齐：root > item(空星层 emptyIcon + 高亮层 indicator > icon)。
 * 支持半星、五档尺寸、七种语义色、横竖方向与自定义图标（XIcon 名称或组件）。
 */
import * as React from "react"
import { Star } from "lucide-react"
import { useRender } from "@base-ui/react/use-render"
import { XIcon } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XInputRatingSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XInputRatingColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XInputRatingOrientation = "horizontal" | "vertical"

/** XIcon 内置图标名 */
export type XInputRatingIconName = "star"
/** 图标：XIcon 名称或自定义组件 */
export type XInputRatingIcon = XInputRatingIconName | React.ElementType

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XInputRatingUi {
  root?: string
  item?: string
  indicator?: string
  icon?: string
  emptyIcon?: string
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
  /** 组件颜色（填充星与聚焦描边） */
  color?: XInputRatingColor
  /** 排列方向 */
  orientation?: XInputRatingOrientation
  /** 高亮星图标，缺省使用空星图标 */
  icon?: XInputRatingIcon
  /** 空星图标，缺省使用 icon */
  emptyIcon?: XInputRatingIcon
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 根元素 id */
  id?: string
  /** 评分变化回调 */
  onChange?: (value: number) => void
  /** 自定义图标渲染 */
  item?: (state: { index: number; filled: boolean; half: boolean }) => React.ReactNode
  /** 主题插槽类名 */
  ui?: XInputRatingUi
  className?: string
}

/** 五档星星尺寸 */
const ratingSizeClasses: Record<XInputRatingSize, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-7",
}

/** 填充星颜色（星体填充与描边） */
const ratingIndicatorColorClasses: Record<XInputRatingColor, string> = {
  primary: "fill-primary-6 text-primary-6",
  secondary: "fill-secondary text-secondary",
  neutral: "fill-foreground text-foreground",
  success: "fill-success-6 text-success-6",
  info: "fill-info-6 text-info-6",
  warning: "fill-warning-6 text-warning-6",
  error: "fill-error-6 text-error-6",
}

/** 聚焦描边颜色 */
const ratingItemColorClasses: Record<XInputRatingColor, string> = {
  primary: "outline-primary-6/25 focus-visible:outline-3",
  secondary: "outline-secondary/25 focus-visible:outline-3",
  neutral: "outline-foreground/25 focus-visible:outline-3",
  success: "outline-success-6/25 focus-visible:outline-3",
  info: "outline-info-6/25 focus-visible:outline-3",
  warning: "outline-warning-6/25 focus-visible:outline-3",
  error: "outline-error-6/25 focus-visible:outline-3",
}

function isIconName(icon: XInputRatingIcon | undefined): icon is XInputRatingIconName {
  return typeof icon === "string"
}

export function XInputRating({
  value,
  defaultValue = 0,
  max = 5,
  allowHalf = false,
  disabled = false,
  readonly = false,
  size = "md",
  color = "primary",
  orientation = "horizontal",
  icon,
  emptyIcon,
  render,
  id,
  onChange,
  item,
  ui,
  className,
}: XInputRatingProps) {
  const [innerValue, setInnerValue] = React.useState(defaultValue)
  const current = value ?? innerValue
  const resolvedEmptyIcon = emptyIcon ?? icon

  const pick = (index: number, half: boolean) => {
    if (disabled || readonly) return
    const next = half && allowHalf ? index + 0.5 : index + 1
    if (value == null) setInnerValue(next)
    onChange?.(next)
  }

  const renderIcon = (slot: string, target: XInputRatingIcon | undefined, fallback: React.ElementType, extra: string) => {
    if (isIconName(target)) return <XIcon name={target} data-slot={slot} className={extra} />
    const Comp = target ?? fallback
    return <Comp data-slot={slot} className={extra} />
  }

  return useRender({
    defaultTagName: "span",
    props: {
      id,
      "data-slot": "root",
      role: "radiogroup",
      "aria-label": "rating",
      "aria-readonly": readonly || undefined,
      className: cn(
        orientation === "vertical"
          ? "inline-flex flex-col items-center gap-0.5"
          : "inline-flex items-center gap-0.5",
        disabled && "pointer-events-none opacity-60",
        ui?.root,
        className,
      ),
      children: Array.from({ length: max }, (_, index) => {
        const filled = current >= index + 1
        const half = !filled && allowHalf && current >= index + 0.5
        const starSize = ratingSizeClasses[size]
        return (
          <button
            key={index}
            type="button"
            aria-label={`${index + 1} 星`}
            tabIndex={readonly ? -1 : 0}
            onClick={(event) =>
              pick(
                index,
                allowHalf &&
                  event.clientX > event.currentTarget.getBoundingClientRect().left + event.currentTarget.offsetWidth / 2,
              )
            }
            className={cn(
              "relative inline-block cursor-pointer rounded-xs outline-none select-none transition",
              readonly ? "cursor-default" : cn("hover:scale-110", ratingItemColorClasses[color]),
              ui?.item,
            )}
          >
            {item ? (
              item({ index, filled, half })
            ) : (
              <>
                {renderIcon("emptyIcon", resolvedEmptyIcon, Star, cn(starSize, "block h-full w-full text-muted-foreground", ui?.emptyIcon))}
                {(filled || half) && (
                  <span
                    data-slot="indicator"
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 overflow-hidden",
                      half && "[clip-path:inset(0_50%_0_0)]",
                      ratingIndicatorColorClasses[color],
                      ui?.indicator,
                    )}
                  >
                    {renderIcon("icon", icon, Star, cn(starSize, "block", ui?.icon))}
                  </span>
                )}
              </>
            )}
          </button>
        )
      }),
    },
    render,
    state: { slot: "root" },
  })
}
