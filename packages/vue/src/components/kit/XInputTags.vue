<script setup lang="ts">
/**
 * XInputTags 标签输入：以标签形式输入多个值，回车添加、点击关闭移除。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import XChip from '@/components/kit/XChip.vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 标签数组 */
  modelValue?: string[]
  /** 最大标签数 */
  max?: number
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  modelValue: () => [],
  placeholder: '输入后回车添加…',
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
  /** 添加标签 */
  add: [tag: string]
  /** 删除标签 */
  remove: [index: number]
}>()

const draft = ref('')

function addTag(raw: string) {
  const tag = raw.trim()
  if (!tag || props.modelValue.includes(tag)) return
  if (props.max != null && props.modelValue.length >= props.max) return
  emit('update:modelValue', [...props.modelValue, tag])
  emit('add', tag)
  draft.value = ''
}

function removeTag(index: number) {
  emit('update:modelValue', props.modelValue.filter((_, i) => i !== index))
  emit('remove', index)
}
</script>

<template>
  <span
    :class="cn(
      'flex min-h-9 w-full flex-wrap items-center gap-1.5 rounded-md bg-transparent px-2 py-1.5 transition-[box-shadow,color] ring-1 ring-inset ring-input',
      'focus-within:ring-2 focus-within:ring-ring',
      disabled && 'pointer-events-none opacity-50',
      props.class,
    )"
  >
    <template v-for="(tag, index) in modelValue" :key="`${tag}-${index}`">
      <slot name="tag" :tag="tag" :index="index">
        <XChip size="sm" closable @close="removeTag(index)">{{ tag }}</XChip>
      </slot>
    </template>
    <slot name="leading" />
    <Input
      v-model="draft"
      :disabled="disabled || (max != null && modelValue.length >= max)"
      :placeholder="modelValue.length === 0 ? placeholder : ''"
      class="h-6 min-w-24 flex-1 border-0 bg-transparent p-0 text-sm shadow-none outline-none focus-visible:ring-0 focus-visible:border-0"
      @keydown.enter.prevent="addTag(draft)"
      @keydown.backspace="!draft && modelValue.length > 0 && removeTag(modelValue.length - 1)"
      @blur="addTag(draft)"
    />
  </span>
</template>
