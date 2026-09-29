import * as React from "react"
import { LoaderCircle } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { kitMotion } from "@/lib/kit/motion"
import { cn } from "@/lib/utils"

export type XButtonVariant = "solid" | "outline" | "soft" | "ghost" | "subtle" | "link"
export type XButtonSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XButtonColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"

/** kit 变体 → shadcn 原子变体映射 */
const atomVariantMap: Record<XButtonVariant, "default" | "outline" | "ghost" | "link"> = {
  solid: "default",
  outline: "outline",
  soft: "ghost",
  ghost: "ghost",
  subtle: "ghost",
  link: "link",
}

/** kit 尺寸 → shadcn 原子尺寸映射（xl 由 class 覆盖补足） */
const atomSizeMap: Record<XButtonSize, "xs" | "sm" | "default" | "lg"> = {
  xs: "xs",
  sm: "sm",
  md: "default",
  lg: "lg",
  xl: "lg",
}

/** 语义色样式：每个颜色提供六种变体的完整 class（字面量，保证 Tailwind 可扫描） */
const buttonColorStyles: Record<XButtonColor, Record<XButtonVariant, string>> = {
  primary: {
    solid: "bg-primary-6 text-white hover:bg-primary-5 active:bg-primary-7",
    outline: "border-primary-5 text-primary-6 hover:bg-primary-1 active:bg-primary-2",
    soft: "bg-primary-1 text-primary-7 hover:bg-primary-2 active:bg-primary-3",
    ghost: "text-primary-6 hover:bg-primary-1 active:bg-primary-2",
    subtle: "text-muted-foreground hover:text-primary-6 hover:bg-primary-1",
    link: "text-primary-6 underline-offset-4 hover:underline",
  },
  secondary: {
    solid: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-border text-foreground hover:bg-muted",
    soft: "bg-muted text-secondary-foreground hover:bg-secondary",
    ghost: "text-secondary-foreground hover:bg-muted",
    subtle: "text-muted-foreground hover:text-foreground hover:bg-muted",
    link: "text-secondary-foreground underline-offset-4 hover:underline",
  },
  neutral: {
    solid: "bg-neutral-6 text-white hover:bg-neutral-5 active:bg-neutral-7",
    outline: "border-neutral-5 text-neutral-6 hover:bg-neutral-1 active:bg-neutral-2",
    soft: "bg-neutral-1 text-neutral-7 hover:bg-neutral-2 active:bg-neutral-3",
    ghost: "text-neutral-6 hover:bg-neutral-1 active:bg-neutral-2",
    subtle: "text-muted-foreground hover:text-neutral-6 hover:bg-neutral-1",
    link: "text-neutral-6 underline-offset-4 hover:underline",
  },
  success: {
    solid: "bg-success-6 text-white hover:bg-success-5 active:bg-success-7",
    outline: "border-success-5 text-success-6 hover:bg-success-1 active:bg-success-2",
    soft: "bg-success-1 text-success-7 hover:bg-success-2 active:bg-success-3",
    ghost: "text-success-6 hover:bg-success-1 active:bg-success-2",
    subtle: "text-muted-foreground hover:text-success-6 hover:bg-success-1",
    link: "text-success-6 underline-offset-4 hover:underline",
  },
  info: {
    solid: "bg-info-6 text-white hover:bg-info-5 active:bg-info-7",
    outline: "border-info-5 text-info-6 hover:bg-info-1 active:bg-info-2",
    soft: "bg-info-1 text-info-7 hover:bg-info-2 active:bg-info-3",
    ghost: "text-info-6 hover:bg-info-1 active:bg-info-2",
    subtle: "text-muted-foreground hover:text-info-6 hover:bg-info-1",
    link: "text-info-6 underline-offset-4 hover:underline",
  },
  warning: {
    solid: "bg-warning-6 text-white hover:bg-warning-5 active:bg-warning-7",
    outline: "border-warning-5 text-warning-7 hover:bg-warning-1 active:bg-warning-2",
    soft: "bg-warning-1 text-warning-8 hover:bg-warning-2 active:bg-warning-3",
    ghost: "text-warning-7 hover:bg-warning-1 active:bg-warning-2",
    subtle: "text-muted-foreground hover:text-warning-7 hover:bg-warning-1",
    link: "text-warning-7 underline-offset-4 hover:underline",
  },
  error: {
    solid: "bg-error-6 text-white hover:bg-error-5 active:bg-error-7",
    outline: "border-error-5 text-error-6 hover:bg-error-1 active:bg-error-2",
    soft: "bg-error-1 text-error-7 hover:bg-error-2 active:bg-error-3",
    ghost: "text-error-6 hover:bg-error-1 active:bg-error-2",
    subtle: "text-muted-foreground hover:text-error-6 hover:bg-error-1",
    link: "text-error-6 underline-offset-4 hover:underline",
  },
}

/** xl 尺寸补足：在原子 lg 基础上加高加宽 */
const buttonSizeOverrides: Partial<Record<XButtonSize, string>> = {
  xl: "h-10 gap-2 px-4 text-base",
}

export interface XButtonProps
  extends Omit<React.ComponentProps<typeof motion.button>, "children"> {
  /** 预设样式 */
  variant?: XButtonVariant
  /** 尺寸 */
  size?: XButtonSize
  /** 组件颜色 */
  color?: XButtonColor
  /** 加载态 */
  loading?: boolean
  /** 前置图标 */
  leading?: React.ReactNode
  /** 后置图标 */
  trailing?: React.ReactNode
  children?: React.ReactNode
}

export const XButton = React.forwardRef<HTMLButtonElement, XButtonProps>(function XButton(
  { variant = "solid", size = "md", color = "primary", loading = false, leading, trailing, children, className, disabled, ...rest },
  ref,
) {
  const atomVariant = atomVariantMap[variant]
  const atomSize = atomSizeMap[size]
  const isDisabled = disabled || loading
  return (
    <motion.button
      ref={ref}
      data-slot="button"
      data-variant={atomVariant}
      data-size={atomSize}
      whileHover={isDisabled ? undefined : { y: -2 }}
      whileTap={isDisabled ? undefined : { scale: 0.98 }}
      transition={kitMotion.tokens.fast}
      className={cn(
        buttonVariants({ variant: atomVariant, size: atomSize }),
        buttonColorStyles[color][variant],
        buttonSizeOverrides[size],
        "hover:shadow-md",
        loading && "opacity-60",
        className,
      )}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : leading}
      {children}
      {trailing}
    </motion.button>
  )
})
