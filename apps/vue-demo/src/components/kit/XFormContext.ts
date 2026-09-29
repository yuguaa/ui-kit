/**
 * XForm 上下文：表单状态、校验规则类型与注入工具。
 * XForm 与 XFormField 共享本模块。
 */
import type { InjectionKey } from 'vue'
import { inject } from 'vue'

export interface FormRule {
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

export interface FormContext {
  values: Record<string, unknown>
  errors: Record<string, string>
  disabled: boolean
  setValue: (name: string, value: unknown) => void
}

export const XFormContextKey: InjectionKey<FormContext> = Symbol('x-form')

/** 在表单控件中读取/更新表单状态 */
export function injectXForm(): FormContext {
  const context = inject(XFormContextKey)
  if (!context) throw new Error('injectXForm 必须在 XForm 内部使用')
  return context
}

/** 纯校验：按规则计算全部字段错误（XForm 组件与 useXForm hook 共用） */
export function validateFormValues(
  values: Record<string, unknown>,
  rules: Record<string, FormRule[]>,
): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const [name, fieldRules] of Object.entries(rules)) {
    let message: string | null = null
    for (const rule of fieldRules) {
      const isEmpty = values[name] == null || values[name] === ''
      if (rule.required && isEmpty) {
        message = rule.message ?? '此项为必填项'
        break
      }
      if (isEmpty) continue
      if (rule.pattern && typeof values[name] === 'string' && !rule.pattern.test(values[name] as string)) {
        message = rule.message ?? '格式不正确'
        break
      }
      const size = typeof values[name] === 'number' ? values[name] : typeof values[name] === 'string' ? (values[name] as string).length : 0
      if (rule.min != null && (size as number) < rule.min) {
        message = rule.message ?? `不能小于 ${rule.min}`
        break
      }
      if (rule.max != null && (size as number) > rule.max) {
        message = rule.message ?? `不能大于 ${rule.max}`
        break
      }
      if (rule.validator) {
        const result = rule.validator(values[name])
        if (result !== true) {
          message = result
          break
        }
      }
    }
    if (message) errors[name] = message
  }
  return errors
}
