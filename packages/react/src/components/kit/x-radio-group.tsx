/**
 * XRadioGroup 单选框组:按 Nuxt UI radio-group 结构二次封装。
 * root > fieldset > legend + item(每项)> container > base(控件)+ indicator(选中圆点);
 * wrapper > label / icon / description。
 * 支持 legend 组标题、orientation 方向、字段映射(valueKey / labelKey / descriptionKey)、
 * indicator 位置与语义色;保留 button 变体紧凑展示。
 */
import * as React from "react"
import { Label } from "@/components/ui/label"
import { Radio } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"

export type XRadioGroupColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XRadioGroupVariant = "radio" | "button"
export type XRadioGroupSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XRadioGroupOrientation = "horizontal" | "vertical"
export type XRadioGroupIndicator = "start" | "end" | "hidden"
export type XRadioGroupValue = string | number | bigint | null

/** 单项覆盖的主题插槽类名 */
export interface XRadioGroupItemUi {
  item?: string
  container?: string
  base?: string
  indicator?: string
  wrapper?: string
  label?: string
  icon?: string
  description?: string
}

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface XRadioGroupUi {
  root?: string
  fieldset?: string
  legend?: string
  item?: string
  container?: string
  base?: string
  indicator?: string
  wrapper?: string
  label?: string
  icon?: string
  description?: string
}

export interface XRadioOption {
  /** 选项的值 */
  value?: string | number
  /** 选项文字 */
  label?: React.ReactNode
  /** 选项文字下方的辅助说明 */
  description?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** indicator 为 hidden 时显示在 label 上方的图标 */
  icon?: React.ElementType
  className?: string
  /** 单项覆盖的主题插槽类名 */
  ui?: XRadioGroupItemUi
  /** 业务字段,可通过 valueKey / labelKey / descriptionKey 映射 */
  [key: string]: unknown
}

export interface XRadioGroupProps {
  /** 选项数据源,字段名可通过 valueKey / labelKey / descriptionKey 映射 */
  options: XRadioOption[]
  /** 受控选中值 */
  value?: XRadioGroupValue
  /** 初始选中值(非受控) */
  defaultValue?: XRadioGroupValue
  /** 选中值变化回调 */
  onValueChange?: (value: XRadioGroupValue | null) => void
  /** 组标题 */
  legend?: React.ReactNode
  /** 排列方向 */
  orientation?: XRadioGroupOrientation
  /** 取值字段名 */
  valueKey?: string
  /** 文字字段名 */
  labelKey?: string
  /** 辅助说明字段名 */
  descriptionKey?: string
  /** 选中圆点的语义色 */
  color?: XRadioGroupColor
  /** 尺寸 */
  size?: XRadioGroupSize
  /** 指示圆点位置,hidden 时图标显示在 label 上方 */
  indicator?: XRadioGroupIndicator
  /** 常显高亮聚焦环 */
  highlight?: boolean
  /** 必选项,legend 后显示 * */
  required?: boolean
  /** 整体禁用 */
  disabled?: boolean
  /** 展示形式 */
  variant?: XRadioGroupVariant
  /** 按钮样式(仅 variant 为 button 时生效) */
  buttonStyle?: "outline" | "solid"
  /** 组 id,label 通过 htmlFor 关联单项 */
  id?: string
  /** 自定义单项 label 渲染 */
  label?: (option: XRadioOption, value: XRadioGroupValue | undefined) => React.ReactNode
  /** 自定义单项 description 渲染 */
  description?: (option: XRadioOption, value: XRadioGroupValue | undefined) => React.ReactNode
  /** 渲染为指定元素 */
  render?: React.ReactElement<React.HTMLAttributes<HTMLElement>>
  /** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
  ui?: XRadioGroupUi
  className?: string
}

/** 选中圆点的语义色 */
const indicatorColorClasses: Record<XRadioGroupColor, string> = {
  primary: "bg-primary-6",
  secondary: "bg-secondary",
  neutral: "bg-foreground",
  success: "bg-success-6",
  info: "bg-info-6",
  warning: "bg-warning-6",
  error: "bg-error-6",
}

/** highlight 常显聚焦环颜色 */
const highlightClasses: Record<XRadioGroupColor, string> = {
  primary: "ring-primary-6",
  secondary: "ring-secondary",
  neutral: "ring-foreground",
  success: "ring-success-6",
  info: "ring-info-6",
  warning: "ring-warning-6",
  error: "ring-error-6",
}

/** 尺寸:控件、圆点、容器高度、文字与间距 */
const sizeClasses: Record<XRadioGroupSize, { fieldset: string, legend: string, base: string, item: string, container: string, dot: string, hiddenIcon: string }> = {
  xs: { fieldset: "gap-y-0.5", legend: "text-xs", base: "size-3", item: "text-xs", container: "h-4", dot: "size-1", hiddenIcon: "size-3" },
  sm: { fieldset: "gap-y-0.5", legend: "text-xs", base: "size-3.5", item: "text-xs", container: "h-4", dot: "size-1", hiddenIcon: "size-3.5" },
  md: { fieldset: "gap-y-1", legend: "text-sm", base: "size-4", item: "text-sm", container: "h-5", dot: "size-1.5", hiddenIcon: "size-4" },
  lg: { fieldset: "gap-y-1", legend: "text-sm", base: "size-4.5", item: "text-sm", container: "h-5", dot: "size-1.5", hiddenIcon: "size-4.5" },
  xl: { fieldset: "gap-y-1.5", legend: "text-base", base: "size-5", item: "text-base", container: "h-6", dot: "size-2", hiddenIcon: "size-5" },
}

export function XRadioGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  legend,
  orientation = "vertical",
  valueKey = "value",
  labelKey = "label",
  descriptionKey = "description",
  color = "primary",
  size = "md",
  indicator = "start",
  highlight = false,
  required = false,
  disabled = false,
  variant = "radio",
  buttonStyle = "outline",
  id,
  label: renderLabel,
  description: renderDescription,
  render,
  ui,
  className,
}: XRadioGroupProps) {
  function itemValue(option: XRadioOption): string {
    return String(option[valueKey])
  }

  function itemLabel(option: XRadioOption): React.ReactNode {
    const raw = option[labelKey]
    return raw == null ? undefined : (raw as React.ReactNode)
  }

  function itemDescription(option: XRadioOption): React.ReactNode {
    const raw = option[descriptionKey]
    return raw == null ? undefined : (raw as React.ReactNode)
  }

  function itemId(option: XRadioOption): string | undefined {
    return id == null ? undefined : `${id}:${itemValue(option)}`
  }

  const fieldsetClass = cn(
    "flex gap-x-2",
    orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col",
    sizeClasses[size].fieldset,
    ui?.fieldset,
  )

  const legendClass = cn(
    "mb-1 block font-medium text-foreground",
    sizeClasses[size].legend,
    required && "after:content-['*'] after:ms-0.5 after:text-error-6",
    ui?.legend,
  )

  function radioItemClass(option: XRadioOption) {
    return cn(
      "flex items-start",
      sizeClasses[size].item,
      indicator === "start" && "flex-row",
      indicator === "end" && "flex-row-reverse",
      disabled && "opacity-75",
      ui?.item,
      option.ui?.item,
      option.className,
    )
  }

  function radioContainerClass(option: XRadioOption) {
    return cn(
      "flex items-center",
      sizeClasses[size].container,
      indicator === "hidden" && "h-auto",
      ui?.container,
      option.ui?.container,
    )
  }

  function radioBaseClass(option: XRadioOption) {
    return cn(
      "rounded-full ring-1 ring-inset overflow-hidden focus-visible:outline-none focus-visible:ring-3",
      highlight ? cn("ring-2", highlightClasses[color]) : "ring-input focus-visible:ring-ring/50",
      sizeClasses[size].base,
      indicator === "hidden" && "sr-only",
      (option.disabled || disabled) && "cursor-not-allowed",
      ui?.base,
      option.ui?.base,
    )
  }

  function radioIndicatorClass(option: XRadioOption) {
    return cn(
      "flex items-center justify-center size-full",
      indicatorColorClasses[color],
      ui?.indicator,
      option.ui?.indicator,
    )
  }

  function radioWrapperClass(option: XRadioOption) {
    return cn(
      "w-full",
      indicator === "start" && "ms-2",
      indicator === "end" && "me-2",
      indicator === "hidden" && "flex flex-col items-center gap-1 text-center",
      ui?.wrapper,
      option.ui?.wrapper,
    )
  }

  function radioIconClass(option: XRadioOption) {
    return cn(
      "shrink-0",
      indicator === "hidden" ? sizeClasses[size].hiddenIcon : "size-2",
      ui?.icon,
      option.ui?.icon,
    )
  }

  function radioLabelClass(option: XRadioOption) {
    return cn(
      "block font-medium text-foreground",
      (option.disabled || disabled) && "cursor-not-allowed",
      ui?.label,
      option.ui?.label,
    )
  }

  function radioDescriptionClass(option: XRadioOption) {
    return cn(
      "text-muted-foreground",
      (option.disabled || disabled) && "cursor-not-allowed",
      ui?.description,
      option.ui?.description,
    )
  }

  return (
    <RadioGroupPrimitive
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      id={id}
      data-slot="root"
      render={render}
      className={cn("relative", ui?.root, className)}
    >
      <fieldset data-slot="fieldset" className={fieldsetClass}>
        {legend != null && <legend data-slot="legend" className={legendClass}>{legend}</legend>}

        {variant === "button"
          ? options.map((option) => (
              <Label
                key={itemValue(option)}
                data-slot="item"
                className={cn(
                  "h-8 cursor-pointer items-center border px-3 text-sm transition-colors",
                  "first:rounded-l-lg last:rounded-r-lg [&:not(:first-child)]:border-l-0",
                  "has-[[data-checked]]:border-primary-5 has-[[data-checked]]:bg-primary-1 has-[[data-checked]]:text-primary-7",
                  buttonStyle === "solid" &&
                    "has-[[data-checked]]:bg-primary-6 has-[[data-checked]]:text-white",
                  "hover:bg-muted",
                  orientation === "horizontal" ? "inline-flex" : "flex",
                  option.disabled && "pointer-events-none opacity-50",
                  ui?.item,
                  option.ui?.item,
                  option.className,
                )}
              >
                <Radio.Root
                  value={itemValue(option)}
                  disabled={option.disabled || disabled}
                  data-slot="base"
                  className={cn("sr-only", ui?.base, option.ui?.base)}
                />
                {itemLabel(option) ?? option.value}
              </Label>
            ))
          : options.map((option) => {
              const OptionIcon = option.icon
              const optionLabel = renderLabel
                ? renderLabel(option, value)
                : (itemLabel(option) ?? option.value)
              const optionDescription = renderDescription
                ? renderDescription(option, value)
                : itemDescription(option)
              return (
                <div key={itemValue(option)} data-slot="item" className={radioItemClass(option)}>
                  <div data-slot="container" className={radioContainerClass(option)}>
                    <Radio.Root
                      id={itemId(option)}
                      value={itemValue(option)}
                      disabled={option.disabled || disabled}
                      data-slot="base"
                      className={radioBaseClass(option)}
                    >
                      <Radio.Indicator data-slot="indicator" className={radioIndicatorClass(option)}>
                        <span className={cn("block rounded-full bg-white", sizeClasses[size].dot)} />
                      </Radio.Indicator>
                    </Radio.Root>
                  </div>

                  {(indicator === "hidden" && OptionIcon != null) ||
                  optionLabel != null ||
                  optionDescription != null ? (
                    <div data-slot="wrapper" className={radioWrapperClass(option)}>
                      {indicator === "hidden" && OptionIcon != null && (
                        <OptionIcon data-slot="icon" className={radioIconClass(option)} />
                      )}
                      {optionLabel != null && (
                        <Label htmlFor={itemId(option)} className={radioLabelClass(option)}>
                          {optionLabel}
                        </Label>
                      )}
                      {optionDescription != null && (
                        <p data-slot="description" className={radioDescriptionClass(option)}>{optionDescription}</p>
                      )}
                    </div>
                  ) : null}
                </div>
              )
            })}
      </fieldset>
    </RadioGroupPrimitive>
  )
}
