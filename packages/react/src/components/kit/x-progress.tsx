/**
 * XProgress 进度条：与 Nuxt UI Progress 对齐。
 * value 为 null 时进入不确定进度，按 animation 播放指示器动画；
 * max 传数组时渲染 steps 步骤；status 开关显示百分比文本；
 * size 控制指示条粗细与文字尺寸，color 支持主题色与任意 CSS 颜色。
 */
import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XProgressColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XProgressSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
export type XProgressOrientation = "horizontal" | "vertical"
export type XProgressAnimation = "carousel" | "carousel-inverse" | "swing" | "elastic"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XProgressUi {
  root?: string
  base?: string
  indicator?: string
  status?: string
  steps?: string
  step?: string
}

/** 步骤插槽参数（对应 Vue 侧 step-${index} 命名插槽） */
export interface XProgressStepSlotProps {
  /** 当前步骤文案（max 数组对应项） */
  step: any
  /** 步骤索引 */
  index: number
}

export interface XProgressProps
  extends Omit<
    ProgressPrimitive.Root.Props,
    "value" | "max" | "render" | "className" | "children" | "style" | "getAriaValueText"
  > {
  /** 当前值：null 表示不确定进度 */
  value?: number | null
  /** 最大进度值；传数组时渲染步骤条，值为每步文案 */
  max?: number | Array<any>
  /** 显示当前进度百分比（status 插槽默认内容） */
  status?: boolean
  /** 进度方向是否反转 */
  inverted?: boolean
  /** 指示条粗细与文字尺寸 */
  size?: XProgressSize
  /** 指示条与步骤文字颜色：主题色或任意 CSS 颜色值 */
  color?: XProgressColor | (string & {})
  /** 进度方向 */
  orientation?: XProgressOrientation
  /** 不确定进度的指示器动画 */
  animation?: XProgressAnimation
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XProgressUi
  /** status 插槽内容，函数式接收 percent */
  statusContent?: React.ReactNode | ((props: { percent?: number }) => React.ReactNode)
  /** 步骤插槽内容，函数式接收 step 与 index（对应 Vue 侧 step-${index} 插槽） */
  stepContent?: React.ReactNode | ((props: XProgressStepSlotProps) => React.ReactNode)
  /** 无障碍标签生成（对应 Vue 侧 getValueLabel，映射为根元素 aria-label） */
  getValueLabel?: (value: number | null, max?: number) => string | undefined
  /** 无障碍数值文本生成（对应 Vue 侧 getValueText，映射为 Base UI getAriaValueText） */
  getValueText?: (value: number | null, max?: number) => string | undefined
  className?: string
}

/** 颜色映射：indicator 背景与 steps 文字 */
const progressColorClasses: Record<XProgressColor, { indicator: string; steps: string }> = {
  primary: { indicator: "bg-primary", steps: "text-primary" },
  secondary: { indicator: "bg-secondary", steps: "text-secondary-foreground" },
  neutral: { indicator: "bg-foreground", steps: "text-foreground" },
  success: { indicator: "bg-success", steps: "text-success" },
  info: { indicator: "bg-info", steps: "text-info" },
  warning: { indicator: "bg-warning", steps: "text-warning" },
  error: { indicator: "bg-error", steps: "text-error" },
}

/** 不确定进度动画（keyframes 定义在包入口 index.css） */
const progressAnimationClasses: Record<XProgressAnimation, Record<XProgressOrientation, string>> = {
  carousel: {
    horizontal: "motion-safe:data-[indeterminate]:animate-[carousel_2s_linear_infinite]",
    vertical: "motion-safe:data-[indeterminate]:animate-[carousel-vertical_2s_linear_infinite]",
  },
  "carousel-inverse": {
    horizontal: "motion-safe:data-[indeterminate]:animate-[carousel-inverse_2s_linear_infinite]",
    vertical: "motion-safe:data-[indeterminate]:animate-[carousel-inverse-vertical_2s_linear_infinite]",
  },
  swing: {
    horizontal: "motion-safe:data-[indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]",
    vertical: "motion-safe:data-[indeterminate]:animate-[swing-vertical_2s_var(--ease-in-out)_infinite]",
  },
  elastic: {
    horizontal: "motion-safe:data-[indeterminate]:animate-[elastic_2s_var(--ease-in-out)_infinite]",
    vertical: "motion-safe:data-[indeterminate]:animate-[elastic-vertical_2s_var(--ease-in-out)_infinite]",
  },
}

/** 步骤项显隐（激活项显示，其余隐藏） */
const stepVariantClasses: Record<"active" | "first" | "other" | "last", string> = {
  active: "opacity-100",
  first: "opacity-100 text-muted-foreground",
  other: "opacity-0",
  last: "",
}

/** size 映射：status 与 steps 的文字尺寸（与 Nuxt UI 主题一致） */
const progressTextSizeClasses: Record<XProgressSize, string> = {
  "2xs": "text-xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-sm",
  xl: "text-base",
  "2xl": "text-base",
}

/** size 映射：指示条粗细（与 Nuxt UI 主题 compoundVariants 一致） */
const progressBaseSizeClasses: Record<XProgressSize, Record<XProgressOrientation, string>> = {
  "2xs": { horizontal: "h-px", vertical: "w-px" },
  xs: { horizontal: "h-0.5", vertical: "w-0.5" },
  sm: { horizontal: "h-1", vertical: "w-1" },
  md: { horizontal: "h-2", vertical: "w-2" },
  lg: { horizontal: "h-3", vertical: "w-3" },
  xl: { horizontal: "h-4", vertical: "w-4" },
  "2xl": { horizontal: "h-5", vertical: "w-5" },
}

export function XProgress({
  value = null,
  max,
  status = false,
  inverted = false,
  size = "md",
  color = "primary",
  orientation = "horizontal",
  animation = "carousel",
  render,
  ui,
  statusContent,
  stepContent,
  getValueLabel,
  getValueText,
  className,
  ...rest
}: XProgressProps) {
  const isIndeterminate = value == null
  const hasSteps = Array.isArray(max)

  /* 非主题色视为任意 CSS 颜色值，走内联样式（与 Nuxt UI customColor 逻辑一致） */
  const themeColor = color in progressColorClasses ? progressColorClasses[color as XProgressColor] : undefined
  const customColor = themeColor ? undefined : color

  const realMax = isIndeterminate || max == null ? undefined : Array.isArray(max) ? max.length - 1 : max

  const percent =
    isIndeterminate || value == null
      ? undefined
      : value < 0
        ? 0
        : value > (realMax ?? 100)
          ? 100
          : Math.round((value / (realMax ?? 100)) * 100)

  /* 指示器位移：不确定进度时由动画接管；自定义颜色走内联样式 */
  const indicatorStyle: React.CSSProperties | undefined =
    percent == null
      ? customColor
        ? { backgroundColor: customColor }
        : undefined
      : orientation === "vertical"
        ? {
            transform: `translateY(${inverted ? "" : "-"}${100 - percent}%)`,
            ...(customColor ? { backgroundColor: customColor } : undefined),
          }
        : {
            transform: `translateX(${inverted ? "" : "-"}${100 - percent}%)`,
            ...(customColor ? { backgroundColor: customColor } : undefined),
          }

  const statusStyle = { "--percent": `${Math.max(percent ?? 0, 0)}%` } as React.CSSProperties

  function isActiveStep(index: number) {
    return index === Number(value)
  }

  function stepVariant(index: number) {
    if (isActiveStep(index) && index !== 0) return "active"
    if (index === 0 && isActiveStep(index)) return "first"
    if (index === realMax && isActiveStep(index)) return "last"
    return "other"
  }

  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-orientation": orientation,
      "data-slot": "root",
      className: cn(
        "gap-2",
        orientation === "horizontal" ? "w-full flex flex-col" : "h-full flex flex-row-reverse",
        ui?.root,
        className,
      ),
      children: (
        <>
          {!isIndeterminate && (status || statusContent != null) && (
            <div
              data-slot="status"
              className={cn(
                "flex text-muted-foreground duration-200 ease-out motion-reduce:transition-none",
                orientation === "horizontal"
                  ? "flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]"
                  : "flex-col justify-end h-(--percent) min-h-fit transition-[height]",
                progressTextSizeClasses[size],
                inverted && "self-end",
                inverted && orientation === "horizontal" && "flex-row-reverse",
                inverted && orientation === "vertical" && "flex-col-reverse",
                ui?.status,
              )}
              style={statusStyle}
            >
              {typeof statusContent === "function" ? statusContent({ percent }) : (statusContent ?? `${percent}%`)}
            </div>
          )}

          <ProgressPrimitive.Root
            {...rest}
            value={value}
            max={realMax}
            data-slot="base"
            className={cn(
              "relative overflow-hidden rounded-full bg-muted",
              orientation === "horizontal" ? "w-full" : "h-full",
              progressBaseSizeClasses[size][orientation],
              ui?.base,
            )}
            style={{ transform: "translateZ(0)" }}
            aria-label={getValueLabel ? getValueLabel(value, realMax ?? 100) : undefined}
            getAriaValueText={
              getValueText
                ? (_formattedValue, current) => getValueText(current, realMax ?? 100) ?? ""
                : undefined
            }
          >
            <ProgressPrimitive.Track className="relative size-full overflow-hidden">
              <ProgressPrimitive.Indicator
                data-slot="indicator"
                className={cn(
                  "rounded-full size-full transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:data-[indeterminate]:animate-pulse",
                  progressAnimationClasses[animation][orientation],
                  animation === "elastic" && "relative",
                  themeColor?.indicator,
                  ui?.indicator,
                )}
                style={indicatorStyle}
              />
            </ProgressPrimitive.Track>
          </ProgressPrimitive.Root>

          {hasSteps && (
            <div
              data-slot="steps"
              className={cn(
                "grid items-end",
                progressTextSizeClasses[size],
                inverted && orientation === "vertical" && "items-start",
                themeColor?.steps,
                ui?.steps,
              )}
              style={customColor ? { color: customColor } : undefined}
            >
              {(max as Array<any>).map((step, index) => (
                <div
                  key={index}
                  data-slot="step"
                  className={cn(
                    "truncate text-end row-start-1 col-start-1 transition-opacity ease-out",
                    stepVariantClasses[stepVariant(index)],
                    inverted && orientation === "horizontal" && "text-start",
                    ui?.step,
                  )}
                >
                  {typeof stepContent === "function" ? stepContent({ step, index }) : (stepContent ?? step)}
                </div>
              ))}
            </div>
          )}
        </>
      ),
    },
  })
}
