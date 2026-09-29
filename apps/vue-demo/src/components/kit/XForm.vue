<script setup lang="ts">
/**
 * XForm 表单：收集、校验并提交表单数据。
 * 通过 provide 向 XFormField 提供 values / errors / disabled / setValue，
 * 通过 injectXForm 在控件中读写表单状态。
 */
import type { HTMLAttributes } from 'vue'
import { provide, reactive } from 'vue'
import { XFormContextKey, validateFormValues, type FormContext, type FormRule } from '@/components/kit/XFormContext'
import { cn } from '@/lib/utils'

export type { FormContext, FormRule }

const props = withDefaults(defineProps<{
  /** 表单数据 */
  modelValue?: Record<string, unknown>
  /** 默认表单数据 */
  defaultValues?: Record<string, unknown>
  /** 校验规则（按字段名） */
  rules?: Record<string, FormRule[]>
  /** 整体禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  modelValue: () => ({}),
  defaultValues: () => ({}),
  rules: () => ({}),
})

const emit = defineEmits<{
  /** 提交回调（校验通过后触发） */
  submit: [values: Record<string, unknown>]
  /** 校验失败回调 */
  error: [errors: Record<string, string>]
}>()

const values = reactive<Record<string, unknown>>({ ...props.defaultValues, ...props.modelValue })
const errors = reactive<Record<string, string>>({})

function setValue(name: string, value: unknown) {
  values[name] = value
}

/** 校验表单，返回错误记录 */
function validate(): Record<string, string> {
  const nextErrors = validateFormValues(values, props.rules)
  Object.keys(errors).forEach((key) => delete errors[key])
  Object.assign(errors, nextErrors)
  return nextErrors
}

/** 重置表单 */
function reset() {
  Object.keys(values).forEach((key) => delete values[key])
  Object.assign(values, props.defaultValues)
  Object.keys(errors).forEach((key) => delete errors[key])
}

/** 提交表单 */
function submit() {
  const nextErrors = validate()
  if (Object.keys(nextErrors).length > 0) {
    emit('error', nextErrors)
    return
  }
  emit('submit', { ...values })
}

defineExpose({ validate, reset, submit })

const context: FormContext = { values, errors, disabled: props.disabled, setValue }
provide(XFormContextKey, context)
</script>

<template>
  <form novalidate :class="cn('flex flex-col gap-4', props.class)" @submit.prevent="submit">
    <fieldset :disabled="disabled" class="contents">
      <slot />
    </fieldset>
  </form>
</template>
