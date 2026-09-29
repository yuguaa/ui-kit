<script setup lang="ts">
/**
 * XSlider 滑块：shadcn-vue slider 原子的二次封装。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Slider } from '@/components/ui/slider'
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
  min: 0,
  max: 100,
  step: 1,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  /** 值变化回调 */
  change: [value: number]
}>()

const sliderValue = computed(() => [props.modelValue])

function onUpdate(value: number[] | undefined) {
  const next = value?.[0] ?? props.min
  emit('update:modelValue', next)
  emit('change', next)
}
</script>

<template>
  <Slider
    :model-value="sliderValue"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :class="cn('w-full', props.class)"
    @update:model-value="onUpdate"
  />
</template>
