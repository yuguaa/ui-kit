/**
 * XKbd 键盘按键：展示快捷键或按键组合。
 * 变体体系：solid | outline | soft | subtle × 七种语义色 × 五档尺寸，
 * render 渲染为指定元素，ui.base 定制根元素类名。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XKbdSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XKbdColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XKbdVariant = "solid" | "outline" | "soft" | "subtle"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XKbdUi {
  base?: string
}

const kbdSizeClasses: Record<XKbdSize, string> = {
  xs: "h-4 min-w-4 px-1 text-[10px]",
  sm: "h-5 min-w-5 px-1 text-xs",
  md: "h-6 min-w-6 px-1.5 text-sm",
  lg: "h-7 min-w-7 px-2 text-sm",
  xl: "h-8 min-w-8 px-2.5 text-base",
}

/** 变体 × 语义色样式（字面量，保证 Tailwind 可扫描） */
const kbdColorClasses: Record<XKbdVariant, Record<XKbdColor, string>> = {
  solid: {
    primary: "bg-primary-6 text-white",
    secondary: "bg-secondary text-secondary-foreground",
    neutral: "bg-foreground text-background",
    success: "bg-success-6 text-white",
    info: "bg-info-6 text-white",
    warning: "bg-warning-6 text-white",
    error: "bg-error-6 text-white",
  },
  outline: {
    primary: "bg-transparent text-primary-6 ring-1 ring-inset ring-primary-5",
    secondary: "bg-transparent text-foreground ring-1 ring-inset ring-border",
    neutral: "bg-transparent text-foreground ring-1 ring-inset ring-border",
    success: "bg-transparent text-success-6 ring-1 ring-inset ring-success-5",
    info: "bg-transparent text-info-6 ring-1 ring-inset ring-info-5",
    warning: "bg-transparent text-warning-7 ring-1 ring-inset ring-warning-5",
    error: "bg-transparent text-error-6 ring-1 ring-inset ring-error-5",
  },
  soft: {
    primary: "bg-primary-1 text-primary-7",
    secondary: "bg-muted text-secondary-foreground",
    neutral: "bg-muted text-foreground",
    success: "bg-success-1 text-success-7",
    info: "bg-info-1 text-info-7",
    warning: "bg-warning-1 text-warning-8",
    error: "bg-error-1 text-error-7",
  },
  subtle: {
    primary: "bg-primary-1 text-primary-7 ring-1 ring-inset ring-primary-2",
    secondary: "bg-muted text-secondary-foreground ring-1 ring-inset ring-border",
    neutral: "bg-muted text-foreground ring-1 ring-inset ring-border",
    success: "bg-success-1 text-success-7 ring-1 ring-inset ring-success-2",
    info: "bg-info-1 text-info-7 ring-1 ring-inset ring-info-2",
    warning: "bg-warning-1 text-warning-8 ring-1 ring-inset ring-warning-2",
    error: "bg-error-1 text-error-7 ring-1 ring-inset ring-error-2",
  },
}

export interface XKbdProps extends Omit<React.ComponentProps<"kbd">, "children"> {
  /** 按键内容 */
  value?: string
  /** 预设样式 */
  variant?: XKbdVariant
  /** 按键颜色 */
  color?: XKbdColor
  /** 尺寸 */
  size?: XKbdSize
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XKbdUi
  children?: React.ReactNode
}

export const XKbd = React.forwardRef<HTMLElement, XKbdProps>(function XKbd(
  { value, variant = "outline", color = "neutral", size = "md", render, ui, className, children, ...rest },
  ref,
) {
  return useRender({
    render,
    ref,
    props: {
      "data-slot": "kbd",
      className: cn(
        "inline-flex items-center justify-center rounded-sm font-sans font-medium uppercase shadow-xs",
        kbdColorClasses[variant][color],
        kbdSizeClasses[size],
        ui?.base,
        className,
      ),
      children: value ?? children,
      ...rest,
    },
  })
})
