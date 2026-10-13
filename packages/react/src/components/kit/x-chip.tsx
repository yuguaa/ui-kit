/**
 * XChip 芯片：标记属性或数值的角标。
 * root 为定位壳，base 为芯片本体；支持七种语义色、五档尺寸、
 * 角标定位（position / inset / standalone）、显隐属性与可选关闭按钮。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XChipColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
/* 与 Nuxt UI 4.11 对齐：3xs(4px) ~ 3xl(12px) 像素级角标尺寸 */
export type XChipSize = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
export type XChipPosition = "top-right" | "bottom-right" | "top-left" | "bottom-left"

const chipColorClasses: Record<XChipColor, string> = {
  primary: "bg-primary text-inverted",
  secondary: "bg-secondary text-inverted",
  neutral: "bg-inverted text-bg",
  success: "bg-success text-inverted",
  info: "bg-info text-inverted",
  warning: "bg-warning text-inverted",
  error: "bg-error text-inverted",
}

const chipSizeClasses: Record<XChipSize, string> = {
  "3xs": "h-[4px] min-w-[4px] text-[4px]",
  "2xs": "h-[5px] min-w-[5px] text-[5px]",
  xs: "h-[6px] min-w-[6px] text-[6px]",
  sm: "h-[7px] min-w-[7px] text-[7px]",
  md: "h-[8px] min-w-[8px] text-[8px]",
  lg: "h-[9px] min-w-[9px] text-[9px]",
  xl: "h-[10px] min-w-[10px] text-[10px]",
  "2xl": "h-[11px] min-w-[11px] text-[11px]",
  "3xl": "h-[12px] min-w-[12px] text-[12px]",
}

const chipPositionClasses: Record<XChipPosition, string> = {
  "top-right": "top-0 right-0",
  "bottom-right": "bottom-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-left": "bottom-0 left-0",
}

/** 非 inset 时外移半个身位，贴合圆角元素边沿 */
const chipTranslateClasses: Record<XChipPosition, string> = {
  "top-right": "-translate-y-1/2 translate-x-1/2",
  "bottom-right": "translate-y-1/2 translate-x-1/2",
  "top-left": "-translate-y-1/2 -translate-x-1/2",
  "bottom-left": "translate-y-1/2 -translate-x-1/2",
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XChipUi {
  root?: string
  base?: string
}

export interface XChipProps extends Omit<React.ComponentProps<"div">, "color" | "content"> {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 芯片文本 */
  text?: string | number
  /** 标签颜色 */
  color?: XChipColor
  /** 标签尺寸 */
  size?: XChipSize
  /** 角标位置 */
  position?: XChipPosition
  /** 位于圆角元素内部时保持位置，不加外移 */
  inset?: boolean
  /** 相对父容器渲染，不做绝对定位 */
  standalone?: boolean
  /** 控制本体显隐，与 Nuxt UI 的 show 属性对齐 */
  show?: boolean
  /** 显隐变化回调（对齐 Nuxt 的 v-model:show） */
  onShowChange?: (show: boolean) => void
  /** 芯片内容，优先于 children 与 text */
  content?: React.ReactNode
  /** 主题插槽类名 */
  ui?: XChipUi
  children?: React.ReactNode
}

export function XChip({
  render,
  text,
  color = "primary",
  size = "md",
  position = "top-right",
  inset = false,
  standalone = false,
  show = true,
  onShowChange,
  content,
  ui,
  className,
  children,
  ...rest
}: XChipProps) {
  return useRender({
    defaultTagName: "div",
    props: {
      className: cn(
        "relative inline-flex shrink-0 items-center justify-center",
        !standalone && "absolute",
        chipPositionClasses[position],
        !standalone && !inset && chipTranslateClasses[position],
        ui?.root,
        className,
      ),
      children: show ? (
        <span
          data-slot="base"
          className={cn(
            "inline-flex items-center justify-center rounded-full ring ring-bg font-medium whitespace-nowrap",
            chipColorClasses[color],
            chipSizeClasses[size],
            ui?.base,
          )}
        >
          {content ?? children ?? text}
        </span>
      ) : null,
      ...rest,
    },
    render,
    state: { slot: "root" },
  })
}
