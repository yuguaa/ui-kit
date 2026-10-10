/**
 * XChip 芯片：标记属性或数值的角标。
 * root 为定位壳，base 为芯片本体；支持七种语义色、五档尺寸、
 * 角标定位（position / inset / standalone）、显隐属性与可选关闭按钮。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type XChipColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XChipSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XChipPosition = "top-right" | "bottom-right" | "top-left" | "bottom-left"

const chipColorClasses: Record<XChipColor, string> = {
  primary: "border-primary/20 bg-primary/10 text-primary",
  secondary: "border-border bg-secondary text-secondary-foreground",
  neutral: "border-border bg-muted text-muted-foreground",
  success: "border-success/20 bg-success/10 text-success",
  info: "border-info/20 bg-info/10 text-info",
  warning: "border-warning/20 bg-warning/10 text-warning",
  error: "border-error/20 bg-error/10 text-error",
}

const chipSizeClasses: Record<XChipSize, string> = {
  xs: "h-4.5 gap-0.5 px-1.5 text-[10px]",
  sm: "h-5.5 gap-1 px-2 text-xs",
  md: "h-7 gap-1 px-2.5 text-sm",
  lg: "h-8 gap-1.5 px-3 text-sm",
  xl: "h-9 gap-1.5 px-3.5 text-base",
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
  /** 是否可关闭（kit 既有属性） */
  closable?: boolean
  /** 标签图标 */
  icon?: React.ReactNode
  /** 芯片内容，优先于 children 与 text */
  content?: React.ReactNode
  /** 关闭时回调 */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
  closable = false,
  icon,
  content,
  onClose,
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
            "inline-flex items-center justify-center rounded-full border font-medium whitespace-nowrap",
            chipColorClasses[color],
            chipSizeClasses[size],
            ui?.base,
          )}
        >
          {icon}
          {content ?? children ?? text}
          {closable && (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label="close"
              onClick={onClose}
              className="-mr-1 size-4 rounded-full opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3"
            >
              <X />
            </Button>
          )}
        </span>
      ) : null,
      ...rest,
    },
    render,
    state: { slot: "root" },
  })
}
