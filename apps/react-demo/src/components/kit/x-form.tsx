import * as React from "react"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XFormRule {
  /** 必填 */
  required?: boolean
  /** 正则校验 */
  pattern?: RegExp
  /** 最小值（数值或字符串长度） */
  min?: number
  /** 最大值（数值或字符串长度） */
  max?: number
  /** 自定义校验：返回 true 通过，返回字符串为错误信息 */
  validator?: (value: unknown) => true | string
  /** 错误信息 */
  message?: string
}

export interface XFormContextValue {
  values: Record<string, unknown>
  errors: Record<string, string>
  disabled: boolean
  setValue: (name: string, value: unknown) => void
  /** 校验表单，返回错误记录 */
  validate: () => Record<string, string>
  /** 重置表单 */
  reset: () => void
  /** 提交表单 */
  submit: () => void
}

const XFormContext = React.createContext<XFormContextValue | null>(null)

/** 在表单控件中读取/更新表单状态（XForm 内部与 XFormField 使用） */
export function useXFormContext(): XFormContextValue {
  const context = React.useContext(XFormContext)
  if (!context) throw new Error("useXFormContext 必须在 XForm 内部使用")
  return context
}

export interface XFormApi {
  /** 校验表单，返回错误记录 */
  validate: () => Record<string, string>
  /** 重置表单 */
  reset: () => void
  /** 提交表单 */
  submit: () => void
}

export interface XFormProps extends Omit<React.ComponentProps<"form">, "onSubmit" | "onError"> {
  /** 表单数据 */
  values?: Record<string, unknown>
  /** 默认表单数据 */
  defaultValues?: Record<string, unknown>
  /** 校验规则（按字段名） */
  rules?: Record<string, XFormRule[]>
  /** 整体禁用 */
  disabled?: boolean
  /** 提交回调（校验通过后触发） */
  onSubmit?: (values: Record<string, unknown>) => void
  /** 校验失败回调 */
  onError?: (errors: Record<string, string>) => void
}

function validateValue(value: unknown, rules: XFormRule[]): string | null {
  for (const rule of rules) {
    const isEmpty = value == null || value === ""
    if (rule.required && isEmpty) return rule.message ?? "此项为必填项"
    if (isEmpty) continue
    if (rule.pattern && typeof value === "string" && !rule.pattern.test(value)) {
      return rule.message ?? "格式不正确"
    }
    const size = typeof value === "number" ? value : typeof value === "string" ? value.length : 0
    if (rule.min != null && size < rule.min) return rule.message ?? `不能小于 ${rule.min}`
    if (rule.max != null && size > rule.max) return rule.message ?? `不能大于 ${rule.max}`
    if (rule.validator) {
      const result = rule.validator(value)
      if (result !== true) return result
    }
  }
  return null
}

/** 纯校验：按规则计算全部字段错误 */
export function validateFormValues(
  values: Record<string, unknown>,
  rules: Record<string, XFormRule[]>,
): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const [name, fieldRules] of Object.entries(rules)) {
    const message = validateValue(values[name], fieldRules)
    if (message) errors[name] = message
  }
  return errors
}

export function XForm({
  values,
  defaultValues = {},
  rules = {},
  disabled = false,
  onSubmit,
  onError,
  className,
  children,
  ...props
}: XFormProps) {
  const [innerValues, setInnerValues] = React.useState<Record<string, unknown>>(defaultValues)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const currentValues = values ?? innerValues
  const formRef = React.useRef<HTMLFormElement>(null)

  const setValue = (name: string, value: unknown) => {
    if (values == null) setInnerValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = validateFormValues(currentValues, rules)
    setErrors(nextErrors)
    return nextErrors
  }

  const reset = () => {
    setInnerValues(defaultValues)
    setErrors({})
  }

  const submit = () => {
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      onError?.(nextErrors)
      return
    }
    onSubmit?.(currentValues)
  }

  const contextValue = React.useMemo<XFormContextValue>(
    () => ({ values: currentValues, errors, disabled, setValue, validate, reset, submit }),
    [currentValues, errors, disabled],
  )

  return (
    <XFormContext.Provider value={contextValue}>
      <form
        ref={formRef}
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          submit()
        }}
        className={cn("flex flex-col gap-4", className)}
        {...props}
      >
        <fieldset disabled={disabled} className="contents">
          {children}
        </fieldset>
      </form>
    </XFormContext.Provider>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XFormInstanceApi {
  /** 表单数据 */
  values: Record<string, unknown>
  /** 校验错误 */
  errors: Record<string, string>
  /** 更新单个字段 */
  setValue: (name: string, value: unknown) => void
  /** 批量更新字段 */
  setValues: (values: Record<string, unknown>) => void
  /** 校验表单，返回错误记录 */
  validate: () => Record<string, string>
  /** 重置表单 */
  reset: () => void
  /** 提交表单 */
  submit: () => void
}

/**
 * 创建与 api 绑定的表单：调用即得 [Form, formApi]。
 * 组件挂载后通过 formApi 读写数据、校验、提交。
 */
export function useXForm(options: {
  /** 默认表单数据 */
  defaultValues?: Record<string, unknown>
  /** 校验规则（按字段名） */
  rules?: Record<string, XFormRule[]>
  /** 整体禁用 */
  disabled?: boolean
} = {}) {
  const { defaultValues = {}, rules = {}, disabled = false } = options
  const store = React.useState(() =>
    createBoundStore({
      values: defaultValues as Record<string, unknown>,
      errors: {} as Record<string, string>,
    }),
  )[0]
  const eventsRef = React.useRef<{
    onSubmit?: (values: Record<string, unknown>) => void
    onError?: (errors: Record<string, string>) => void
  }>({})

  const setValue = (name: string, value: unknown) => {
    store.set({ values: { ...store.get().values, [name]: value } })
  }

  const validate = () => {
    const nextErrors = validateFormValues(store.get().values, rules)
    store.set({ errors: nextErrors })
    return nextErrors
  }

  const reset = () => {
    store.set({ values: { ...defaultValues }, errors: {} })
  }

  const submit = () => {
    const nextErrors = validateFormValues(store.get().values, rules)
    store.set({ errors: nextErrors })
    if (Object.keys(nextErrors).length === 0) {
      eventsRef.current.onSubmit?.(store.get().values)
    } else {
      eventsRef.current.onError?.(nextErrors)
    }
  }

  const api = React.useMemo<XFormInstanceApi>(
    () => ({
      get values() {
        return store.get().values
      },
      get errors() {
        return store.get().errors
      },
      setValue,
      setValues: (next: Record<string, unknown>) => store.set({ values: { ...next } }),
      validate,
      reset,
      submit,
    }),
    [],
  )

  const Form = React.useMemo(() => {
    return function BoundForm(
      props: {
        onSubmit?: (values: Record<string, unknown>) => void
        onError?: (errors: Record<string, string>) => void
      } & React.ComponentProps<"form">,
    ) {
      eventsRef.current.onSubmit = props.onSubmit
      eventsRef.current.onError = props.onError
      const state = useBoundStore(store)
      return (
        <XForm
          {...props}
          values={state.values}
          rules={rules}
          disabled={disabled}
          onSubmit={(next) => {
            store.set({ values: { ...next } })
            props.onSubmit?.(next)
          }}
          onError={(next) => {
            store.set({ errors: next })
            props.onError?.(next)
          }}
        />
      )
    }
  }, [])

  return [Form, api] as const
}
