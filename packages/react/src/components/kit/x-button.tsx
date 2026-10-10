/**
 * XButton 二次封装按钮：
 * 在 shadcn 按钮原子上注入变体语义（variant × color）。
 * 变体：solid | outline | soft | ghost | subtle | link
 * 颜色：primary | secondary | neutral | success | info | warning | error
 * 动效（Nuxt UI 模式）：hover / active 仅颜色过渡，无位移与缩放，loading 图标旋转
 */
import * as React from "react"
import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    solid: "bg-primary text-background hover:bg-primary/75 active:bg-primary/75",
    outline: "border-0 ring-1 ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10",
    soft: "bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/15",
    ghost: "text-primary hover:bg-primary/10 active:bg-primary/10",
    subtle: "text-primary ring-1 ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15",
    link: "text-primary underline-offset-4 hover:text-primary/75",
  },
  secondary: {
    solid: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-0 ring-1 ring-inset ring-border text-foreground hover:bg-muted",
    soft: "bg-muted text-secondary-foreground hover:bg-secondary",
    ghost: "text-secondary-foreground hover:bg-muted",
    subtle: "text-secondary-foreground ring-1 ring-inset ring-border bg-muted hover:bg-secondary",
    link: "text-secondary-foreground underline-offset-4 hover:underline",
  },
  neutral: {
    solid: "bg-foreground text-background hover:bg-foreground/75 active:bg-foreground/75",
    outline: "border-0 ring-1 ring-inset ring-border text-foreground hover:bg-muted active:bg-border",
    soft: "bg-muted text-foreground hover:bg-border active:bg-border",
    ghost: "text-foreground hover:bg-muted active:bg-border",
    subtle: "text-foreground ring-1 ring-inset ring-border bg-muted hover:bg-border",
    link: "text-foreground underline-offset-4 hover:underline",
  },
  success: {
    solid: "bg-success text-background hover:bg-success/75 active:bg-success/75",
    outline: "border-0 ring-1 ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10",
    soft: "bg-success/10 text-success hover:bg-success/15 active:bg-success/15",
    ghost: "text-success hover:bg-success/10 active:bg-success/10",
    subtle: "text-success ring-1 ring-inset ring-success/25 bg-success/10 hover:bg-success/15",
    link: "text-success underline-offset-4 hover:text-success/75",
  },
  info: {
    solid: "bg-info text-background hover:bg-info/75 active:bg-info/75",
    outline: "border-0 ring-1 ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10",
    soft: "bg-info/10 text-info hover:bg-info/15 active:bg-info/15",
    ghost: "text-info hover:bg-info/10 active:bg-info/10",
    subtle: "text-info ring-1 ring-inset ring-info/25 bg-info/10 hover:bg-info/15",
    link: "text-info underline-offset-4 hover:text-info/75",
  },
  warning: {
    solid: "bg-warning text-background hover:bg-warning/75 active:bg-warning/75",
    outline: "border-0 ring-1 ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10",
    soft: "bg-warning/10 text-warning hover:bg-warning/15 active:bg-warning/15",
    ghost: "text-warning hover:bg-warning/10 active:bg-warning/10",
    subtle: "text-warning ring-1 ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15",
    link: "text-warning underline-offset-4 hover:text-warning/75",
  },
  error: {
    solid: "bg-error text-background hover:bg-error/75 active:bg-error/75",
    outline: "border-0 ring-1 ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10",
    soft: "bg-error/10 text-error hover:bg-error/15 active:bg-error/15",
    ghost: "text-error hover:bg-error/10 active:bg-error/10",
    subtle: "text-error ring-1 ring-inset ring-error/25 bg-error/10 hover:bg-error/15",
    link: "text-error underline-offset-4 hover:text-error/75",
  },
}

/** 方形按钮（仅图标）尺寸映射 */
const atomSquareSizeMap: Record<XButtonSize, "icon-xs" | "icon-sm" | "icon" | "icon-lg"> = {
  xs: "icon-xs",
  sm: "icon-sm",
  md: "icon",
  lg: "icon-lg",
  xl: "icon-lg",
}

/** xl 尺寸补足：在原子 lg 基础上加高加宽 */
const buttonSizeOverrides: Partial<Record<XButtonSize, string>> = {
  xl: "h-10 gap-2 px-4 text-base",
}

/** xl 方形补足 */
const buttonSquareSizeOverrides: Partial<Record<XButtonSize, string>> = {
  xl: "size-10",
}

export interface XButtonProps
  extends Omit<React.ComponentProps<"button">, "children"> {
  /** 预设样式 */
  variant?: XButtonVariant
  /** 尺寸 */
  size?: XButtonSize
  /** 组件颜色 */
  color?: XButtonColor
  /** 加载态 */
  loading?: boolean
  /** 撑满父容器宽度 */
  block?: boolean
  /** 方形按钮，图标场景等边距 */
  square?: boolean
  /** 文本内容（等价于子元素） */
  label?: string
  /** 激活态：配合 activeColor / activeVariant 使用 */
  active?: boolean
  /** 激活态颜色 */
  activeColor?: XButtonColor
  /** 激活态样式 */
  activeVariant?: XButtonVariant
  /** 点击回调返回 Promise 时自动进入加载态 */
  loadingAuto?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
  ui?: XButtonUi
  /** 前置图标 */
  leading?: React.ReactNode
  /** 后置图标 */
  trailing?: React.ReactNode
  children?: React.ReactNode
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XButtonUi {
  base?: string
  label?: string
  leadingIcon?: string
  trailingIcon?: string
}

export const XButton = React.forwardRef<HTMLButtonElement, XButtonProps>(function XButton(
  {
    variant = "solid",
    size = "md",
    color = "primary",
    loading = false,
    block = false,
    square = false,
    label,
    active = false,
    activeColor,
    activeVariant,
    loadingAuto = false,
    render,
    ui,
    leading,
    trailing,
    children,
    className,
    disabled,
    onClick,
    ...rest
  },
  ref,
) {
  /* loadingAuto：点击回调返回 Promise 时自动进入加载态 */
  const [autoLoading, setAutoLoading] = React.useState(false)
  const isLoading = loading || autoLoading
  const isDisabled = disabled || isLoading

  /* 激活态的颜色与样式覆盖 */
  const resolvedVariant = active && activeVariant ? activeVariant : variant
  const resolvedColor = active && activeColor ? activeColor : color
  const atomVariant = atomVariantMap[resolvedVariant]
  const atomSize = square ? atomSquareSizeMap[size] : atomSizeMap[size]

  /* render 为非 button 元素(如链接)时直接渲染该元素，保留原始语义 */
  const renderIsButton = React.isValidElement(render) && render.type === "button"
  const renderAsCustom = React.isValidElement(render) && render.type !== "button"

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const result = onClick?.(event) as unknown
    if (!loadingAuto || result == null || typeof (result as Promise<unknown>).then !== "function") return
    setAutoLoading(true)
    void (result as Promise<unknown>).finally(() => setAutoLoading(false))
  }

  const buttonClassName = cn(
    buttonColorStyles[resolvedColor][resolvedVariant],
    square ? buttonSquareSizeOverrides[size] : buttonSizeOverrides[size],
    block && "w-full",
    isLoading && "opacity-60",
    ui?.base,
    className,
  )

  const buttonContent = (
    <>
      {isLoading ? (
        <LoaderCircle className={cn("animate-spin", ui?.leadingIcon)} aria-hidden="true" />
      ) : (
        leading
      )}
      {(label != null || children != null) && (
        <span className={cn("truncate", ui?.label)}>{children ?? label}</span>
      )}
      {trailing}
    </>
  )

  if (renderAsCustom) {
    /* 链接等自定义元素：保持原始语义，不注入 role=button */
    const customProps = (
      render as React.ReactElement<{
        className?: string
        onClick?: (event: React.MouseEvent) => void
      }>
    ).props ?? {}
    return React.cloneElement(
      render as React.ReactElement<Record<string, unknown>>,
      {
        ...rest,
        ...customProps,
        className: cn(buttonClassName, customProps.className),
        "data-slot": "button",
        "data-variant": atomVariant,
        "data-size": atomSize,
        "aria-busy": isLoading || undefined,
        "aria-disabled": isDisabled || undefined,
        onClick: (event: React.MouseEvent) => {
          if (isDisabled) {
            event.preventDefault()
            return
          }
          customProps.onClick?.(event)
          handleClick(event as React.MouseEvent<HTMLButtonElement>)
        },
      },
      buttonContent,
    )
  }

  return (
    <Button
      ref={ref}
      render={render}
      nativeButton={render == null || renderIsButton ? undefined : false}
      data-variant={atomVariant}
      data-size={atomSize}
      variant={atomVariant}
      size={atomSize}
      className={buttonClassName}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      onClick={handleClick}
      {...rest}
    >
      {buttonContent}
    </Button>
  )
})
