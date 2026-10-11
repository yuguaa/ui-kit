/**
 * XSwitch 开关:按 Nuxt UI switch 结构二次封装。
 * root(容器)> container > base(开关)+ thumb(滑块)+ icon(滑块内图标);
 * wrapper > label / description。
 * 支持语义色、滑块内图标(checkedIcon / uncheckedIcon / loadingIcon)、
 * highlight 常显聚焦环与 required 必选项标记。
 */
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
  primary: "data-checked:bg-primary",
  secondary: "data-checked:bg-secondary",
  neutral: "data-checked:bg-foreground",
  success: "data-checked:bg-success",
  info: "data-checked:bg-info",
  warning: "data-checked:bg-warning",
  error: "data-checked:bg-error",
}

/** 选中时滑块内图标的颜色 */
const iconColorClasses: Record<XSwitchColor, string> = {
  primary: "group-data-checked:text-primary",
  secondary: "group-data-checked:text-secondary",
  neutral: "group-data-checked:text-foreground",
  success: "group-data-checked:text-success",
  info: "group-data-checked:text-info",
  warning: "group-data-checked:text-warning",
  error: "group-data-checked:text-error",
}

/** highlight 常显聚焦环颜色 */
const highlightClasses: Record<XSwitchColor, string> = {
  primary: "ring-primary",
  secondary: "ring-secondary",
  neutral: "ring-foreground",
  success: "ring-success",
  info: "ring-info",
  warning: "ring-warning",
  error: "ring-error",
}

/** 尺寸:轨道、滑块、容器高度与文字 */
const sizeClasses: Record<XSwitchSize, { base: string, container: string, thumb: string, wrapper: string, icon: string }> = {
  default: { base: "h-[18.4px] w-8", container: "h-5", thumb: "size-4 data-checked:translate-x-[calc(100%-2px)]", wrapper: "text-sm", icon: "size-3.5" },
  small: { base: "h-3.5 w-6", container: "h-4", thumb: "size-3 data-checked:translate-x-[calc(100%-2px)]", wrapper: "text-xs", icon: "size-2.5" },
}

export interface XSwitchProps<T = boolean> {
  /** 是否选中;与 trueValue / falseValue 配合可映射任意选中值 */
  checked?: T
  /** 初始选中状态(非受控) */
  defaultChecked?: T
  /** 选中时对外比较与上报的值,默认 true */
  trueValue?: T
  /** 未选中时对外比较与上报的值,默认 false */
  falseValue?: T
  /** 选中状态变化回调,值为 trueValue / falseValue */
  onCheckedChange?: (value: T) => void
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

export function XSwitch<T = boolean>({
  checked,
  defaultChecked,
  trueValue,
  falseValue,
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
    ref,
}: XSwitchProps<T> & { ref?: React.Ref<HTMLButtonElement> }) {
  /* trueValue / falseValue 映射:原子只认识 boolean,对外按映射值比较与上报 */
  const trueVal = (trueValue ?? true) as T
  const falseVal = (falseValue ?? false) as T
  const isChecked = checked === undefined ? undefined : checked === trueVal
  const isDefaultChecked = defaultChecked === undefined ? undefined : defaultChecked === trueVal

  /* 无显式 id 时用 useId 生成，保证 label 与控件正确关联 */
  const generatedId = React.useId()
  const controlId = id ?? generatedId
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

  const text = isChecked ? checkedChildren : unCheckedChildren

  const content = (
    <React.Fragment>
      <div data-slot="container" className={cn("flex items-center", sizeClasses[size].container, ui?.container)}>
        <SwitchPrimitive.Root
          ref={ref}
          id={controlId}
          name={name}
          data-slot="base"
          checked={isChecked}
          defaultChecked={isDefaultChecked}
          onCheckedChange={(next) => onCheckedChange?.(next ? trueVal : falseVal)}
          disabled={disabled || loading}
          required={required}
          aria-busy={loading || undefined}
          className={baseClass}
        >
          <SwitchPrimitive.Thumb data-slot="thumb" className={thumbClass}>
            {loading ? (
              <LoadingIcon data-slot="icon" className={cn(iconClass, "animate-spin opacity-100")} aria-hidden="true" />
            ) : isChecked && CheckedIcon != null ? (
              <CheckedIcon data-slot="icon" className={cn(iconClass, "group-data-checked:opacity-100")} />
            ) : !isChecked && UncheckedIcon != null ? (
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
              htmlFor={controlId}
              className={cn(
                "block font-medium text-foreground",
                required && "after:content-['*'] after:ms-0.5 after:text-error",
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
}
