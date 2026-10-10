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
    solid: "bg-primary-6 text-white hover:bg-primary-5 active:bg-primary-7",
    outline: "border-0 ring-1 ring-inset ring-primary-5 text-primary-6 hover:bg-primary-1 active:bg-primary-2",
    soft: "bg-primary-1 text-primary-7 hover:bg-primary-2 active:bg-primary-3",
    ghost: "text-primary-6 hover:bg-primary-1 active:bg-primary-2",
    subtle: "text-primary-6 ring-1 ring-inset ring-primary-2 bg-primary-1 hover:bg-primary-2",
    link: "text-primary-6 underline-offset-4 hover:underline",
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
    solid: "bg-success-6 text-white hover:bg-success-5 active:bg-success-7",
    outline: "border-0 ring-1 ring-inset ring-success-5 text-success-6 hover:bg-success-1 active:bg-success-2",
    soft: "bg-success-1 text-success-7 hover:bg-success-2 active:bg-success-3",
    ghost: "text-success-6 hover:bg-success-1 active:bg-success-2",
    subtle: "text-success-6 ring-1 ring-inset ring-success-2 bg-success-1 hover:bg-success-2",
    link: "text-success-6 underline-offset-4 hover:underline",
  },
  info: {
    solid: "bg-info-6 text-white hover:bg-info-5 active:bg-info-7",
    outline: "border-0 ring-1 ring-inset ring-info-5 text-info-6 hover:bg-info-1 active:bg-info-2",
    soft: "bg-info-1 text-info-7 hover:bg-info-2 active:bg-info-3",
    ghost: "text-info-6 hover:bg-info-1 active:bg-info-2",
    subtle: "text-info-6 ring-1 ring-inset ring-info-2 bg-info-1 hover:bg-info-2",
    link: "text-info-6 underline-offset-4 hover:underline",
  },
  warning: {
    solid: "bg-warning-6 text-white hover:bg-warning-5 active:bg-warning-7",
    outline: "border-0 ring-1 ring-inset ring-warning-5 text-warning-7 hover:bg-warning-1 active:bg-warning-2",
    soft: "bg-warning-1 text-warning-8 hover:bg-warning-2 active:bg-warning-3",
    ghost: "text-warning-7 hover:bg-warning-1 active:bg-warning-2",
    subtle: "text-warning-7 ring-1 ring-inset ring-warning-2 bg-warning-1 hover:bg-warning-2",
    link: "text-warning-7 underline-offset-4 hover:underline",
  },
  error: {
    solid: "bg-error-6 text-white hover:bg-error-5 active:bg-error-7",
    outline: "border-0 ring-1 ring-inset ring-error-5 text-error-6 hover:bg-error-1 active:bg-error-2",
    soft: "bg-error-1 text-error-7 hover:bg-error-2 active:bg-error-3",
    ghost: "text-error-6 hover:bg-error-1 active:bg-error-2",
    subtle: "text-error-6 ring-1 ring-inset ring-error-2 bg-error-1 hover:bg-error-2",
    link: "text-error-6 underline-offset-4 hover:underline",
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
