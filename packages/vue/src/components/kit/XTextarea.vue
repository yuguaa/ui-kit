<script setup lang="ts">
/**
 * XTextarea 多行文本：shadcn-vue textarea 原子的二次封装。
 * 支持行数、自动调整高度与 error / warning 校验状态。
 */
import type { HTMLAttributes } from 'vue'
import { useTemplateRef } from 'vue'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定值 */
  modelValue?: string
  /** 行数 */
  rows?: number
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自动调整高度 */
  autosize?: boolean
  /** 校验状态 */
  status?: 'error' | 'warning'
  class?: HTMLAttributes['class']
}>(), {
  rows: 3,
  autosize: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const statusClasses = {
  error: 'border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20',
  warning: 'border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20',
}

const textareaRef = useTemplateRef<HTMLTextAreaElement>('textareaRef')

function focus() {
  textareaRef.value?.focus()
}

function blur() {
  textareaRef.value?.blur()
}

defineExpose({ focus, blur })
</script>

<template>
  <Textarea
    ref="textareaRef"
    :model-value="modelValue"
    :rows="rows"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="cn(
      status && statusClasses[status],
      autosize && 'field-sizing-content resize-none',
      props.class,
    )"
    @update:model-value="emit('update:modelValue', String($event ?? ''))"
  />
</template>
