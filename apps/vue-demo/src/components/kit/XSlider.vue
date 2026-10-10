<script setup lang="ts">
/**
 * XSlider 滑块：与 Nuxt UI Slider 对齐。
 * color / size 控制指示条与拇指，tooltip 悬浮显示当前值（可为对象透传 XTooltip），
 * change 事件在值提交（拖动结束）时触发，event.target.value 为提交值。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
import XTooltip from '@/components/kit/XTooltip.vue'
import { cn } from '@/lib/utils'

type TooltipProps = InstanceType<typeof XTooltip>['$props']

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface SliderUi {
  root?: string
  track?: string
  range?: string
  thumb?: string
}

type SliderColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type SliderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type SliderOrientation = 'horizontal' | 'vertical'

defineOptions({ name: 'XSlider', inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 悬浮显示当前值提示，可为 XTooltip 属性对象 */
  tooltip?: boolean | Partial<Omit<TooltipProps, 'text' | 'class'>>
  /** 滑块方向 */
  orientation?: SliderOrientation
  /** 指示条与拇指颜色 */
  color?: SliderColor
  /** 尺寸 */
  size?: SliderSize
  /** 默认值（非受控） */
  defaultValue?: number | number[]
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: SliderUi
  class?: HTMLAttributes['class']
}>(), {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  tooltip: false,
  orientation: 'horizontal',
  color: 'primary',
  size: 'md',
})

/** 绑定值：单值或双值区间 */
const modelValue = defineModel<number | number[]>()

const emit = defineEmits<{
  /** 值提交（拖动结束）回调，event.target.value 为提交值 */
  change: [event: Event]
}>()

/** 颜色映射：指示条背景与拇指描边 */
const colorClasses: Record<SliderColor, { range: string; thumb: string }> = {
  primary: { range: 'bg-primary-6', thumb: 'ring-primary-6 outline-primary-6/25' },
  secondary: { range: 'bg-secondary', thumb: 'ring-secondary outline-secondary/25' },
  neutral: { range: 'bg-neutral-6', thumb: 'ring-neutral-6 outline-neutral-6/25' },
  success: { range: 'bg-success-6', thumb: 'ring-success-6 outline-success-6/25' },
  info: { range: 'bg-info-6', thumb: 'ring-info-6 outline-info-6/25' },
  warning: { range: 'bg-warning-6', thumb: 'ring-warning-6 outline-warning-6/25' },
  error: { range: 'bg-error-6', thumb: 'ring-error-6 outline-error-6/25' },
}

const thumbSizeClasses: Record<SliderSize, string> = {
  xs: 'size-3',
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-4.5',
  xl: 'size-5',
}

const trackSizeClasses: Record<SliderSize, Record<SliderOrientation, string>> = {
  xs: { horizontal: 'h-[6px]', vertical: 'w-[6px]' },
  sm: { horizontal: 'h-[7px]', vertical: 'w-[7px]' },
  md: { horizontal: 'h-[8px]', vertical: 'w-[8px]' },
  lg: { horizontal: 'h-[9px]', vertical: 'w-[9px]' },
  xl: { horizontal: 'h-[10px]', vertical: 'w-[10px]' },
}

function toArray(value: number | number[] | undefined) {
  if (value == null) return undefined
  return typeof value === 'number' ? [value] : value
}

const defaultSliderValue = computed(() => toArray(props.defaultValue))

/** 单值 → 数组，供 SliderRoot 使用 */
const sliderValue = computed({
  get() {
    if (typeof modelValue.value === 'number') return [modelValue.value]
    return modelValue.value ?? defaultSliderValue.value
  },
  set(value: number[]) {
    modelValue.value = value.length === 1 ? value[0] : value
  },
})

const thumbs = computed(() => sliderValue.value?.length ?? 1)

function onChange(value: number[]) {
  const event = new Event('change')
  Object.defineProperty(event, 'target', { value: { value }, enumerable: true })
  emit('change', event)
}
</script>

<template>
  <SliderRoot
    v-model="sliderValue"
    v-bind="$attrs"
    :as="as ?? 'div'"
    data-slot="root"
    :default-value="defaultSliderValue"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :orientation="orientation"
    :class="cn(
      'relative flex items-center select-none touch-none',
      orientation === 'horizontal' ? 'w-full' : 'flex-col h-full',
      disabled && 'opacity-75 cursor-not-allowed',
      ui?.root,
      props.class,
    )"
    @value-commit="onChange"
  >
    <SliderTrack
      data-slot="track"
      :class="cn(
        'relative bg-muted overflow-hidden rounded-full grow',
        trackSizeClasses[size][orientation],
        ui?.track,
      )"
    >
      <SliderRange
        data-slot="range"
        :class="cn(
          'absolute rounded-full',
          colorClasses[color].range,
          orientation === 'horizontal' ? 'h-full' : 'w-full',
          ui?.range,
        )"
      />
    </SliderTrack>

    <template v-for="thumb in thumbs" :key="thumb">
      <XTooltip
        v-if="tooltip"
        :text="thumbs > 1 ? String(sliderValue?.[thumb - 1]) : String(sliderValue)"
        disable-closing-trigger
        v-bind="typeof tooltip === 'object' ? tooltip : {}"
      >
        <SliderThumb
          data-slot="thumb"
          :aria-label="thumbs > 1 ? undefined : ($attrs['aria-label'] as string | undefined) ?? 'Thumb'"
          :class="cn(
            'rounded-full bg-background ring-2 focus-visible:outline-3 focus-visible:outline-offset-2',
            thumbSizeClasses[size],
            colorClasses[color].thumb,
            ui?.thumb,
          )"
        />
      </XTooltip>
      <SliderThumb
        v-else
        data-slot="thumb"
        :aria-label="thumbs > 1 ? undefined : ($attrs['aria-label'] as string | undefined) ?? 'Thumb'"
        :class="cn(
          'rounded-full bg-background ring-2 focus-visible:outline-3 focus-visible:outline-offset-2',
          thumbSizeClasses[size],
          colorClasses[color].thumb,
          ui?.thumb,
        )"
      />
    </template>
  </SliderRoot>
</template>
