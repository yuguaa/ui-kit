import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useXFormContext } from "@/components/kit/x-form"

export type XFormFieldSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XFormFieldOrientation = "vertical" | "horizontal"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XFormFieldUi {
  root?: string
  wrapper?: string
  labelWrapper?: string
  label?: string
  container?: string
  description?: string
  error?: string
  hint?: string
  help?: string
}

/** 提供给字段内表单控件的配置（对应 Nuxt UI 的 useFormField） */
export interface XFormFieldContextValue {
  name?: string
  size?: XFormFieldSize
  error?: boolean | string | React.ReactNode
  eagerValidation?: boolean
  validateOnInputDelay?: number
  errorPattern?: RegExp
  hint?: React.ReactNode
  description?: React.ReactNode
  help?: React.ReactNode
  ariaId: string
}

const XFormFieldContext = React.createContext<XFormFieldContextValue | null>(null)

/** 在表单控件中读取所在 XFormField 的配置 */
export function useXFormFieldContext(): XFormFieldContextValue | null {
  return React.useContext(XFormFieldContext)
}

/** 尺寸 → 根节点字号（对齐 Nuxt UI form-field 主题） */
const fieldSizeClasses: Record<XFormFieldSize, string> = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm",
  xl: "text-base",
}

export interface XFormFieldProps
  extends Omit<React.ComponentProps<"div">, "children" | "color" | "size"> {
  /** 字段名（关联表单校验结果） */
  name?: string
  /** 正则匹配表单错误名，用于数组字段（如 tags.0） */
  errorPattern?: RegExp
  /** 标签内容 */
  label?: React.ReactNode
  /** 辅助说明 */
  description?: React.ReactNode
  /** 无错误时显示的帮助文案 */
  help?: React.ReactNode
  /** 错误信息：true 强制错误态，false 关闭错误显示 */
  error?: boolean | React.ReactNode
  /** 标签右侧的提示文案（说明填写要求） */
  hint?: React.ReactNode
  /** 尺寸（控制根节点字号） */
  size?: XFormFieldSize
  /** 是否必填 */
  required?: boolean
  /** 输入时立即校验，不等待 blur */
  eagerValidation?: boolean
  /** 输入校验的防抖延迟（毫秒） */
  validateOnInputDelay?: number
  /** 排列方向 */
  orientation?: XFormFieldOrientation
  /** 控件 id（label 关联用） */
  id?: string
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XFormFieldUi
  children?: React.ReactNode
}

export function XFormField({
  name,
  errorPattern,
  label,
  description,
  help,
  error,
  hint,
  size,
  required = false,
  eagerValidation,
  validateOnInputDelay = 300,
  orientation = "vertical",
  id,
  render,
  ui,
  className,
  children,
  ...props
}: XFormFieldProps) {
  const form = useXFormContext()
  const fallbackId = React.useId()
  const ariaId = id ?? fallbackId

  /** 字段错误：error prop 优先，其次按 name / errorPattern 匹配表单错误 */
  const fieldError = (() => {
    if (error !== undefined && error !== false) return error
    if (name != null && form.errors[name]) return form.errors[name]
    if (errorPattern != null) {
      const key = Object.keys(form.errors).find((field) => errorPattern.test(field))
      if (key != null) return form.errors[key]
    }
    return undefined
  })()

  /** 错误区显隐：error=true 只标记错误态，字符串与 ReactNode 渲染内容（对齐 Nuxt UI 门控） */
  const hasErrorContent =
    error !== false && fieldError !== true && fieldError != null && fieldError !== ""

  /** 有标签或说明时 container 才参与布局（对齐 Nuxt UI 门控） */
  const hasLabel = label != null && label !== ""
  const hasDescription = description != null && description !== ""
  const hasHint = hint != null && hint !== ""
  const hasHelp = help != null && help !== ""
  const hasMeta = hasLabel || hasDescription

  const contextValue = React.useMemo<XFormFieldContextValue>(
    () => ({
      name,
      size,
      error: fieldError,
      eagerValidation,
      validateOnInputDelay,
      errorPattern,
      hint,
      description,
      help,
      ariaId,
    }),
    [name, size, fieldError, eagerValidation, validateOnInputDelay, errorPattern, hint, description, help, ariaId],
  )

  const root = useRender<Record<string, unknown>, HTMLDivElement>({
    render,
    defaultTagName: "div",
    props: {
      "data-slot": "root",
      "data-orientation": orientation,
      className: cn(
        fieldSizeClasses[size ?? "md"],
        orientation === "horizontal" && "flex justify-between place-items-baseline gap-2",
        ui?.root,
        className,
      ),
      children: (
        <>
          <div data-slot="wrapper" className={cn(ui?.wrapper)}>
            {hasLabel && (
              <div
                data-slot="labelWrapper"
                className={cn("flex content-center items-center justify-between gap-1", ui?.labelWrapper)}
              >
                <Label htmlFor={ariaId} data-slot="label" className={cn("block font-medium text-foreground", ui?.label)}>
                  {label}
                  {required && <span className="ml-0.5 text-error-6">*</span>}
                </Label>
                {hasHint && (
                  <span
                    id={`${ariaId}-hint`}
                    data-slot="hint"
                    className={cn("text-muted-foreground", ui?.hint)}
                  >
                    {hint}
                  </span>
                )}
              </div>
            )}

            {hasDescription && (
              <p
                id={`${ariaId}-description`}
                data-slot="description"
                className={cn("text-muted-foreground", ui?.description)}
              >
                {description}
              </p>
            )}
          </div>

          <div
            className={
              hasMeta
                ? cn(
                    "relative",
                    orientation === "vertical" && "mt-1",
                    ui?.container,
                  )
                : undefined
            }
          >
            {children}
            {hasErrorContent && (
              <div
                id={`${ariaId}-error`}
                role="alert"
                data-slot="error"
                className={cn("mt-2 text-error-6", ui?.error)}
              >
                {fieldError}
              </div>
            )}
            {!hasErrorContent && hasHelp && (
              <div
                id={`${ariaId}-help`}
                data-slot="help"
                className={cn("mt-2 text-muted-foreground", ui?.help)}
              >
                {help}
              </div>
            )}
          </div>
        </>
      ),
      ...props,
    },
  })

  return <XFormFieldContext.Provider value={contextValue}>{root}</XFormFieldContext.Provider>
}
