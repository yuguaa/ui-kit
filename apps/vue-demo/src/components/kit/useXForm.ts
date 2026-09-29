/**
 * useXForm：创建与 api 绑定的表单。
 * 用法：const [Form, formApi] = useXForm({ defaultValues, rules })
 * 组件挂载后通过 formApi 读写数据、校验、重置、提交。
 */
import { defineComponent, h, reactive } from 'vue'
import type { FormRule } from './XFormContext'
import { validateFormValues } from './XFormContext'
import XForm from './XForm.vue'

export interface XFormApi {
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

export function useXForm(options: {
  defaultValues?: Record<string, unknown>
  rules?: Record<string, FormRule[]>
  disabled?: boolean
} = {}) {
  const { defaultValues = {}, rules = {}, disabled = false } = options

  const state = reactive({
    values: { ...defaultValues } as Record<string, unknown>,
    errors: {} as Record<string, string>,
  })

  const events: { onSubmit?: (values: Record<string, unknown>) => void; onError?: (errors: Record<string, string>) => void } = {}

  function validate(): Record<string, string> {
    const nextErrors = validateFormValues(state.values, rules)
    state.errors = nextErrors
    return nextErrors
  }

  function submit() {
    const nextErrors = validateFormValues(state.values, rules)
    state.errors = nextErrors
    if (Object.keys(nextErrors).length === 0) {
      events.onSubmit?.({ ...state.values })
    } else {
      events.onError?.(nextErrors)
    }
  }

  const api: XFormApi = {
    get values() {
      return state.values
    },
    get errors() {
      return state.errors
    },
    setValue: (name, value) => {
      state.values = { ...state.values, [name]: value }
    },
    setValues: (values) => {
      state.values = { ...values }
    },
    validate,
    reset: () => {
      state.values = { ...defaultValues }
      state.errors = {}
    },
    submit,
  }

  const Form = defineComponent({
    name: 'XFormBound',
    setup(_, { attrs, slots, emit }) {
      return () =>
        h(
          XForm,
          {
            ...attrs,
            modelValue: state.values,
            rules,
            disabled,
            onSubmit: (values: Record<string, unknown>) => {
              state.values = { ...values }
              emit('submit', values)
              events.onSubmit?.(values)
            },
            onError: (errors: Record<string, string>) => {
              state.errors = errors
              emit('error', errors)
              events.onError?.(errors)
            },
          } as never,
          slots as never,
        )
    },
  })

  return [Form, api] as const
}
