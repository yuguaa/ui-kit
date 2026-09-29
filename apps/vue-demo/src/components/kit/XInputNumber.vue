<script setup lang="ts">
/**
 * XInputNumber 数字输入：带加减步进按钮的数字输入框。
 */
import type { HTMLAttributes } from 'vue'
import { Minus, Plus } from '@lucide/vue'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定值 */
  modelValue?: number
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  modelValue: 0,
  step: 1,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  /** 值变化回调 */
  change: [value: number]
}>()

function clamp(next: number) {
  if (props.min != null && next < props.min) return props.min
  if (props.max != null && next > props.max) return props.max
  return next
}

function update(next: number) {
  const clamped = clamp(next)
  if (clamped !== props.modelValue) {
    emit('update:modelValue', clamped)
    emit('change', clamped)
  }
}
</script>

<template>
  <span :class="cn('flex w-fit items-center', props.class)">
    <button
      type="button"
      aria-label="decrement"
      :disabled="disabled || (min != null && modelValue <= min)"
      class="inline-flex size-9 items-center justify-center rounded-l-lg border border-input text-muted-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
      @click="update(modelValue - step)"
    >
      <slot name="decrement"><Minus class="size-4" /></slot>
    </button>
    <Input
      type="number"
      :model-value="String(modelValue)"
      :disabled="disabled"
      class="h-9 w-20 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      @update:model-value="update(Number($event))"
    />
    <button
      type="button"
      aria-label="increment"
      :disabled="disabled || (max != null && modelValue >= max)"
      class="inline-flex size-9 items-center justify-center rounded-r-lg border border-input text-muted-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
      @click="update(modelValue + step)"
    >
      <slot name="increment"><Plus class="size-4" /></slot>
    </button>
  </span>
</template>
