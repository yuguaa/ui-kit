<script setup lang="ts">
/**
 * XSlider 滑块：slider 原子的二次封装，支持数值提示与纵向布局。
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
  /** 是否显示当前值提示 */
  tooltip?: boolean
  /** 滑块方向 */
  orientation?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  tooltip: false,
  orientation: 'horizontal',
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  /** 值变化回调 */
  change: [value: number]
}>()

const vertical = computed(() => props.orientation === 'vertical')
/** 当前值在轨道上的百分比，用于定位数值提示 */
const percent = computed(() =>
  props.max === props.min ? 0 : ((props.modelValue - props.min) / (props.max - props.min)) * 100,
)

function onUpdate(value: number[] | undefined) {
  const next = value?.[0] ?? props.min
  emit('update:modelValue', next)
  emit('change', next)
}
</script>

<template>
  <div :class="cn('relative', vertical ? 'h-full min-h-40 w-fit' : 'w-full', props.class)">
    <Slider
      :model-value="[modelValue]"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :orientation="orientation"
      :class="cn(vertical && 'h-full')"
      @update:model-value="onUpdate"
    />
    <span
      v-if="tooltip"
      :class="cn(
        'bg-foreground text-background pointer-events-none absolute rounded-md px-1.5 py-0.5 text-xs tabular-nums',
        vertical ? 'left-full ml-2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-6',
      )"
      :style="vertical ? { top: `${100 - percent}%` } : { left: `${percent}%` }"
    >
      {{ modelValue }}
    </span>
  </div>
</template>
