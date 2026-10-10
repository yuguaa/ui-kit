import * as React from "react"
import { LoaderCircle } from "lucide-react"
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type XSwitchColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XSwitchSize = "default" | "small"

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface XSwitchUi {
  root?: string
  base?: string
  container?: string
  thumb?: string
  icon?: string
  wrapper?: string
  label?: string
  description?: string
}

/** 选中时滑块轨道的语义色 */
const baseColorClasses: Record<XSwitchColor, string> = {
  primary: "data-checked:bg-primary-6",
  secondary: "data-checked:bg-secondary",
  neutral: "data-checked:bg-neutral-6",
  success: "data-checked:bg-success-6",
  info: "data-checked:bg-info-6",
  warning: "data-checked:bg-warning-6",
  error: "data-checked:bg-error-6",
}

/** 选中时滑块内图标的颜色 */
const iconColorClasses: Record<XSwitchColor, string> = {
  primary: "group-data-checked:text-primary-6",
  secondary: "group-data-checked:text-secondary",
  neutral: "group-data-checked:text-neutral-6",
  success: "group-data-checked:text-success-6",
  info: "group-data-checked:text-info-6",
  warning: "group-data-checked:text-warning-6",
  error: "group-data-checked:text-error-6",
}

/** highlight 常显聚焦环颜色 */
const highlightClasses: Record<XSwitchColor, string> = {
  primary: "ring-primary-6",
  secondary: "ring-secondary",
  neutral: "ring-neutral-6",
  success: "ring-success-6",
  info: "ring-info-6",
  warning: "ring-warning-6",
  error: "ring-error-6",
}

/** 尺寸:轨道、滑块、容器高度与文字 */
const sizeClasses: Record<XSwitchSize, { base: string, container: string, thumb: string, wrapper: string, icon: string }> = {
  default: { base: "h-[18.4px] w-8", container: "h-5", thumb: "size-4 data-checked:translate-x-[calc(100%-2px)]", wrapper: "text-sm", icon: "size-3.5" },
  small: { base: "h-3.5 w-6", container: "h-4", thumb: "size-3 data-checked:translate-x-[calc(100%-2px)]", wrapper: "text-xs", icon: "size-2.5" },
}

export interface XSwitchProps {
  /** 是否选中 */
  checked?: boolean
  /** 初始选中状态(非受控) */
  defaultChecked?: boolean
  /** 选中状态变化回调 */
  onCheckedChange?: (checked: boolean) => void
  /** 选中时滑块轨道的语义色 */
  color?: XSwitchColor
  /** 控件尺寸 */
  size?: XSwitchSize
  /** 常显高亮聚焦环 */
  highlight?: boolean
  /** 必选项,label 后显示 * */
  required?: boolean
  /** 加载态:阻止交互并显示旋转图标 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: React.ElementType
  /** 选中时滑块内图标 */
  checkedIcon?: React.ElementType
  /** 未选中时滑块内图标 */
  uncheckedIcon?: React.ElementType
  /** 是否禁用 */
  disabled?: boolean
  /** 表单字段名 */
  name?: string
  /** 控件 id,label 通过 htmlFor 关联 */
  id?: string
  /** 关联文字 */
  label?: React.ReactNode
  /** 关联文字下方的辅助说明 */
  description?: React.ReactNode
  /** 选中时显示内容 */
  checkedChildren?: React.ReactNode
  /** 未选中时显示内容 */
  unCheckedChildren?: React.ReactNode
  /** 渲染为指定元素 */
  render?: React.ReactElement<React.HTMLAttributes<HTMLElement>>
  /** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
  ui?: XSwitchUi
  className?: string
}

export const XSwitch = React.forwardRef<HTMLButtonElement, XSwitchProps>(function XSwitch(
  {
    checked,
    defaultChecked,
    onCheckedChange,
    color = "primary",
    size = "default",
    highlight = false,
    required = false,
    loading = false,
    loadingIcon: LoadingIcon = LoaderCircle,
    checkedIcon: CheckedIcon,
    uncheckedIcon: UncheckedIcon,
    disabled = false,
    name,
    id,
    label,
    description,
    checkedChildren,
    unCheckedChildren,
    render,
    ui,
    className,
  },
  ref,
) {
  const baseClass = cn(
    "inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent outline-none transition-[background] duration-200 ease-out focus-visible:outline-3 data-unchecked:bg-input",
    sizeClasses[size].base,
    baseColorClasses[color],
    highlight && cn("ring-2", highlightClasses[color]),
    (disabled || loading) && "cursor-not-allowed",
    ui?.base,
  )

  const thumbClass = cn(
    "group pointer-events-none flex items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 ease-out motion-reduce:transition-none data-unchecked:translate-x-0",
    sizeClasses[size].thumb,
    ui?.thumb,
  )

  const iconClass = cn(
    "absolute shrink-0 opacity-0 transition-[color,opacity] duration-200 ease-out group-data-unchecked:text-muted-foreground",
    iconColorClasses[color],
    sizeClasses[size].icon,
    ui?.icon,
  )

  const text = checked ? checkedChildren : unCheckedChildren

  const content = (
    <React.Fragment>
      <div data-slot="container" className={cn("flex items-center", sizeClasses[size].container, ui?.container)}>
        <SwitchPrimitive.Root
          ref={ref}
          id={id}
          name={name}
          data-slot="base"
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled || loading}
          required={required}
          aria-busy={loading || undefined}
          className={baseClass}
        >
          <SwitchPrimitive.Thumb data-slot="thumb" className={thumbClass}>
            {loading ? (
              <LoadingIcon data-slot="icon" className={cn(iconClass, "animate-spin opacity-100")} aria-hidden="true" />
            ) : checked && CheckedIcon != null ? (
              <CheckedIcon data-slot="icon" className={cn(iconClass, "group-data-checked:opacity-100")} />
            ) : !checked && UncheckedIcon != null ? (
              <UncheckedIcon data-slot="icon" className={cn(iconClass, "group-data-unchecked:opacity-100")} />
            ) : null}
          </SwitchPrimitive.Thumb>
        </SwitchPrimitive.Root>
      </div>

      {text != null && <span className="text-sm">{text}</span>}

      {label != null || description != null ? (
        <div data-slot="wrapper" className={cn("ms-2", sizeClasses[size].wrapper, ui?.wrapper)}>
          {label != null && (
            <Label
              htmlFor={id}
              className={cn(
                "block font-medium text-foreground",
                required && "after:content-['*'] after:ms-0.5 after:text-error-6",
                disabled && "cursor-not-allowed",
                ui?.label,
              )}
            >
              {label}
            </Label>
          )}
          {description != null && (
            <p data-slot="description" className={cn("text-muted-foreground", disabled && "cursor-not-allowed", ui?.description)}>
              {description}
            </p>
          )}
        </div>
      ) : null}
    </React.Fragment>
  )

  if (render) {
    return React.cloneElement(render, {
      className: cn(render.props.className, "relative flex items-start", disabled && "opacity-75", ui?.root, className),
      children: content,
    })
  }

  return (
    <div
      data-slot="root"
      className={cn("relative flex items-start", disabled && "opacity-75", ui?.root, className)}
    >
      {content}
    </div>
  )
})
