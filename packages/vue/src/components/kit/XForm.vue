<script setup lang="ts">
/**
 * XForm 表单：收集、校验并提交表单数据。
 * 通过 provide 向 XFormField 提供 values / errors / disabled / setValue，
 * 通过 injectXForm 在控件中读写表单状态。
 * 校验支持 rules 规则与 schema（Standard Schema 协议，zod v4 / valibot v1 可直接传入）。
 */
import type { HTMLAttributes } from 'vue'
import { provide, reactive, watch } from 'vue'
import {
  XFormContextKey,
  validateFormValues,
  validateSchemaValues,
  type FormContext,
  type FormRule,
  type StandardSchema,
} from '@/components/kit/XFormContext'
import { cn } from '@/lib/utils'

export type { FormRule, StandardSchema }

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface FormUi {
  root?: string
}

const props = withDefaults(defineProps<{
  /** 表单数据 */
  modelValue?: Record<string, unknown>
  /** 默认表单数据 */
  defaultValues?: Record<string, unknown>
  /** 校验规则（按字段名） */
  rules?: Record<string, FormRule[]>
  /** 标准 schema（zod v4 / valibot v1 等），与 rules 叠加校验 */
  schema?: StandardSchema
  /** 整体禁用 */
  disabled?: boolean
  /** 主题插槽类名 */
  ui?: FormUi
  class?: HTMLAttributes['class']
}>(), {
  defaultValues: () => ({}),
  rules: () => ({}),
})

const emit = defineEmits<{
  /** 提交回调（校验通过后触发） */
  submit: [values: Record<string, unknown>]
  /** 校验失败回调 */
  error: [errors: Record<string, string>]
}>()

const values = reactive<Record<string, unknown>>({ ...props.defaultValues, ...(props.modelValue ?? {}) })
const errors = reactive<Record<string, string>>({})

/* modelValue 变化（如 useXForm 的 setValue）时同步内部状态，保证校验基于最新数据 */
watch(
  () => props.modelValue,
  (next) => {
    if (next == null) return
    Object.keys(values).forEach((key) => delete values[key])
    Object.assign(values, next)
  },
)

function setValue(name: string, value: unknown) {
  values[name] = value
}

/** 写入错误记录 */
function commitErrors(nextErrors: Record<string, string>) {
  Object.keys(errors).forEach((key) => delete errors[key])
  Object.assign(errors, nextErrors)
}

/** 校验表单：无 schema 时同步返回；带 schema 时返回 Promise */
function validate(): Record<string, string> | Promise<Record<string, string>> {
  const nextErrors = validateFormValues(values, props.rules)
  if (!props.schema) {
    commitErrors(nextErrors)
    return nextErrors
  }
  return validateSchemaValues(values, props.schema).then((schemaErrors) => {
    for (const error of schemaErrors) {
      const key = error.name ?? ''
      if (nextErrors[key] == null) {
        nextErrors[key] = error.message
      }
    }
    commitErrors(nextErrors)
    return nextErrors
  })
}

/** 重置表单 */
function reset() {
  Object.keys(values).forEach((key) => delete values[key])
  Object.assign(values, props.defaultValues)
  Object.keys(errors).forEach((key) => delete errors[key])
}

/** 提交表单 */
function submit() {
  const result = validate()
  if (result instanceof Promise) {
    void result.then((nextErrors) => {
      if (Object.keys(nextErrors).length > 0) {
        emit('error', nextErrors)
        return
      }
      emit('submit', { ...values })
    })
    return
  }
  if (Object.keys(result).length > 0) {
    emit('error', result)
    return
  }
  emit('submit', { ...values })
}

defineExpose({ validate, reset, submit })

const context: FormContext = { values, errors, disabled: props.disabled, setValue }
provide(XFormContextKey, context)
</script>

<template>
  <form novalidate :class="cn('flex flex-col gap-4', props.ui?.root, props.class)" @submit.prevent="submit">
    <fieldset :disabled="disabled" class="contents">
      <slot />
    </fieldset>
  </form>
</template>
