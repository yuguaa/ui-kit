/**
 * XCheckbox 多选框:按 Nuxt UI checkbox 结构二次封装。
 * root(容器)> container > base(控件)+ indicator(勾选指示)+ icon;
 * wrapper > label / description。
 * variant 支持 list / card,card 时整个卡片可点击;
 * indicator 支持 start / end / hidden,hidden 时图标显示在 label 上方。
 */
import * as React from "react"
import { Check, Minus } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type XCheckboxColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XCheckboxVariant = "list" | "card"
export type XCheckboxSize = "sm" | "md" | "lg"
export type XCheckboxIndicator = "start" | "end" | "hidden"

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface XCheckboxUi {
  root?: string
  container?: string
  base?: string
  indicator?: string
  icon?: string
  wrapper?: string
  label?: string
  description?: string
}

/** 勾选指示块的语义色,选中与半选时填充 */
const indicatorColorClasses: Record<XCheckboxColor, string> = {
  primary: "bg-primary text-background",
  secondary: "bg-secondary text-secondary-foreground",
  neutral: "bg-foreground text-background",
  success: "bg-success text-background",
  info: "bg-info text-background",
  warning: "bg-warning text-background",
  error: "bg-error text-background",
}

/** card 变体的选中描边与浅色底 */
const cardCheckedClasses: Record<XCheckboxColor, string> = {
  primary: "has-[[data-checked]]:border-primary/50 has-[[data-checked]]:bg-primary/10",
  secondary: "has-[[data-checked]]:border-secondary/50 has-[[data-checked]]:bg-secondary",
  neutral: "has-[[data-checked]]:border-foreground/50 has-[[data-checked]]:bg-muted",
  success: "has-[[data-checked]]:border-success/50 has-[[data-checked]]:bg-success/10",
  info: "has-[[data-checked]]:border-info/50 has-[[data-checked]]:bg-info/10",
  warning: "has-[[data-checked]]:border-warning/50 has-[[data-checked]]:bg-warning/10",
  error: "has-[[data-checked]]:border-error/50 has-[[data-checked]]:bg-error/10",
}

/** highlight 常显聚焦环颜色 */
const highlightClasses: Record<XCheckboxColor, string> = {
  primary: "ring-primary",
  secondary: "ring-secondary",
  neutral: "ring-foreground",
  success: "ring-success",
  info: "ring-info",
  warning: "ring-warning",
  error: "ring-error",
}

/** 尺寸与 card 内边距、hidden 时上方图标尺寸 */
const sizeClasses: Record<XCheckboxSize, { base: string, icon: string, container: string, wrapper: string, card: string, hiddenIcon: string }> = {
  sm: { base: "size-3.5", icon: "size-3", container: "h-4", wrapper: "text-xs", card: "p-3", hiddenIcon: "size-3.5" },
  md: { base: "size-4", icon: "size-3.5", container: "h-5", wrapper: "text-sm", card: "p-3.5", hiddenIcon: "size-4" },
  lg: { base: "size-5", icon: "size-4", container: "h-6", wrapper: "text-base", card: "p-4", hiddenIcon: "size-4.5" },
}

export interface XCheckboxProps extends Omit<React.ComponentPropsWithoutRef<"span">, "children"> {
  /** 是否选中 */
  checked?: boolean
  /** 初始选中状态(非受控) */
  defaultChecked?: boolean
  /** 半选状态 */
  indeterminate?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 必选项,label 后显示 * */
  required?: boolean
  /** 选项的值 */
  value?: string | number
  /** 表单字段名 */
  name?: string
  /** 控件 id,label 通过 htmlFor 关联 */
  id?: string
  /** 选项文字 */
  label?: React.ReactNode
  /** 选项文字下方的辅助说明 */
  description?: React.ReactNode
  /** 选中与半选时指示块的颜色 */
  color?: XCheckboxColor
  /** 展示形式,card 时整个卡片可点击 */
  variant?: XCheckboxVariant
  /** 控件尺寸 */
  size?: XCheckboxSize
  /** 指示块位置,hidden 时图标显示在 label 上方 */
  indicator?: XCheckboxIndicator
  /** 常显高亮聚焦环 */
  highlight?: boolean
  /** 选中时显示的图标 */
  icon?: React.ElementType
  /** 半选时显示的图标 */
  indeterminateIcon?: React.ElementType
  /** 选中状态变化回调 */
  onCheckedChange?: (checked: boolean) => void
  /** 渲染为指定元素 */
  render?: React.ReactElement<React.LabelHTMLAttributes<HTMLLabelElement>>
  /** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
  ui?: XCheckboxUi
  className?: string
}

export const XCheckbox = React.forwardRef<HTMLButtonElement, XCheckboxProps>(function XCheckbox(
  {
    checked,
    defaultChecked,
    indeterminate = false,
    disabled = false,
    required = false,
    value,
    name,
    id,
    label,
    description,
    color = "primary",
    variant = "list",
    size = "md",
    indicator = "start",
    highlight = false,
    icon,
    indeterminateIcon,
    onCheckedChange,
    render,
    ui,
    className,
    ...rest
  },
  ref,
) {
  /* 无显式 id 时用 useId 生成，保证 label 与控件正确关联 */
  const generatedId = React.useId()
  const controlId = id ?? generatedId
  const rootClass = cn(
    "relative flex items-start",
    variant === "card" && cn(
      "rounded-lg border border-border transition-colors hover:bg-muted/50",
      cardCheckedClasses[color],
      sizeClasses[size].card,
    ),
    indicator === "start" && "flex-row",
    indicator === "end" && "flex-row-reverse",
    disabled && "opacity-75",
    ui?.root,
    className,
  )

  const containerClass = cn(
    "flex items-center",
    sizeClasses[size].container,
    indicator === "hidden" && "h-auto",
    ui?.container,
  )

  const baseClass = cn(
    "rounded-sm ring-1 ring-inset overflow-hidden focus-visible:outline-none focus-visible:ring-3",
    highlight ? cn("ring-2", highlightClasses[color]) : "ring-input focus-visible:ring-ring/50",
    sizeClasses[size].base,
    indicator === "hidden" && "sr-only",
    disabled && "cursor-not-allowed",
    ui?.base,
  )

  const indicatorClass = cn(
    "flex items-center justify-center size-full",
    indicatorColorClasses[color],
    ui?.indicator,
  )

  const iconClass = cn(
    "shrink-0",
    indicator === "hidden" ? sizeClasses[size].hiddenIcon : sizeClasses[size].icon,
    ui?.icon,
  )

  const wrapperClass = cn(
    "w-full",
    sizeClasses[size].wrapper,
    indicator === "start" && "ms-2",
    indicator === "end" && "me-2",
    indicator === "hidden" && "flex flex-col items-center gap-1 text-center",
    ui?.wrapper,
  )

  const labelClass = cn(
    "block font-medium text-foreground",
    required && "after:content-['*'] after:ms-0.5 after:text-error",
    disabled && "cursor-not-allowed",
    ui?.label,
  )

  const descriptionClass = cn(
    "text-muted-foreground",
    disabled && "cursor-not-allowed",
    ui?.description,
  )

  const IndicatorIcon = indeterminate ? (indeterminateIcon ?? Minus) : (icon ?? Check)

  const control = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={controlId}
      name={name}
      data-slot="base"
      value={value == null ? undefined : String(value)}
      checked={checked}
      defaultChecked={defaultChecked}
      indeterminate={indeterminate}
      disabled={disabled}
      required={required}
      onCheckedChange={onCheckedChange}
      className={baseClass}
      {...rest}
    >
      <CheckboxPrimitive.Indicator data-slot="indicator" className={indicatorClass}>
        <IndicatorIcon data-slot="icon" className={iconClass} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )

  const content = (
    <React.Fragment>
      <div data-slot="container" className={containerClass}>{control}</div>
      {(indicator === "hidden" && icon != null) || label != null || description != null ? (
        <div data-slot="wrapper" className={wrapperClass}>
          {indicator === "hidden" && icon != null && <IndicatorIcon data-slot="icon" className={iconClass} />}
          {label != null && variant === "card" ? (
            <p data-slot="label" className={labelClass}>{label}</p>
          ) : label != null ? (
            <Label htmlFor={controlId} className={labelClass}>
              {label}
            </Label>
          ) : null}
          {description != null && <p data-slot="description" className={descriptionClass}>{description}</p>}
        </div>
      ) : null}
    </React.Fragment>
  )

  if (render) {
    return React.cloneElement(render, {
      className: cn(render.props.className, rootClass),
      htmlFor: variant === "card" ? controlId : undefined,
      children: content,
    })
  }

  const RootTag = variant === "card" ? "label" : "div"
  return (
    <RootTag data-slot="root" className={rootClass} htmlFor={variant === "card" ? controlId : undefined}>
      {content}
    </RootTag>
  )
})
