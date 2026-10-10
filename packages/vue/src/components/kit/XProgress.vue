<script setup lang="ts">
/**
 * XProgress 进度条：与 Nuxt UI Progress 对齐。
 * modelValue 为 null 时进入不确定进度，按 animation 播放指示器动画；
 * max 传数组时渲染 steps 步骤；status 开关显示百分比文本。
 */
import type { Component, HTMLAttributes, VNode } from 'vue'
import { computed } from 'vue'
import { Primitive, ProgressIndicator, ProgressRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ProgressUi {
  root?: string
  base?: string
  indicator?: string
  status?: string
  steps?: string
  step?: string
}

/** 插槽：status 接收百分比；step-{index} 动态插槽接收当前步骤文案 */
export type ProgressSlots = {
  status?(props: { percent?: number }): VNode[]
} & {
  [key: string]: (props: { step: number }) => VNode[]
}

type ProgressColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type ProgressOrientation = 'horizontal' | 'vertical'
type ProgressAnimation = 'carousel' | 'carousel-inverse' | 'swing' | 'elastic'

defineSlots<ProgressSlots>()

const props = withDefaults(defineProps<{
  /** 最大进度值；传数组时渲染步骤条，值为每步文案 */
  max?: number | Array<any>
  /** 显示当前进度百分比（status 插槽默认内容） */
  status?: boolean
  /** 进度方向是否反转 */
  inverted?: boolean
  /** 指示条与步骤文字颜色 */
  color?: ProgressColor
  /** 进度方向 */
  orientation?: ProgressOrientation
  /** 不确定进度的指示器动画 */
  animation?: ProgressAnimation
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: ProgressUi
  class?: HTMLAttributes['class']
}>(), {
  status: false,
  inverted: false,
  color: 'primary',
  orientation: 'horizontal',
  animation: 'carousel',
})

/** 绑定值：null 表示不确定进度 */
const modelValue = defineModel<number | null>({ default: null })

const isIndeterminate = computed(() => modelValue.value == null)
const hasSteps = computed(() => Array.isArray(props.max))

const realMax = computed(() => {
  if (isIndeterminate.value || props.max == null) return undefined
  if (Array.isArray(props.max)) return props.max.length - 1
  return Number(props.max)
})

const percent = computed(() => {
  if (isIndeterminate.value) return undefined
  const value = modelValue.value as number
  switch (true) {
    case value < 0: return 0
    case value > (realMax.value ?? 100): return 100
    default: return Math.round((value / (realMax.value ?? 100)) * 100)
  }
})

/** 指示器位移：不确定进度时由动画接管 */
const indicatorStyle = computed(() => {
  if (percent.value == null) return undefined
  if (props.orientation === 'vertical') {
    return { transform: `translateY(${props.inverted ? '' : '-'}${100 - percent.value}%)` }
  }
  return { transform: `translateX(${props.inverted ? '' : '-'}${100 - percent.value}%)` }
})

/** 百分比文本容器宽度，通过 CSS 变量驱动 */
const statusStyle = computed(() => ({ '--percent': `${Math.max(percent.value ?? 0, 0)}%` }))

/** 颜色映射：indicator 背景与 steps 文字 */
const colorClasses: Record<ProgressColor, { indicator: string; steps: string }> = {
  primary: { indicator: 'bg-primary', steps: 'text-primary' },
  secondary: { indicator: 'bg-secondary', steps: 'text-secondary-foreground' },
  neutral: { indicator: 'bg-foreground', steps: 'text-foreground' },
  success: { indicator: 'bg-success', steps: 'text-success' },
  info: { indicator: 'bg-info', steps: 'text-info' },
  warning: { indicator: 'bg-warning', steps: 'text-warning' },
  error: { indicator: 'bg-error', steps: 'text-error' },
}

/** 不确定进度动画（keyframes 定义在包入口 index.css） */
const animationClasses: Record<ProgressAnimation, Record<ProgressOrientation, string>> = {
  carousel: {
    horizontal: 'motion-safe:data-[state=indeterminate]:animate-[carousel_2s_linear_infinite]',
    vertical: 'motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_linear_infinite]',
  },
  'carousel-inverse': {
    horizontal: 'motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_linear_infinite]',
    vertical: 'motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_linear_infinite]',
  },
  swing: {
    horizontal: 'motion-safe:data-[state=indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]',
    vertical: 'motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_var(--ease-in-out)_infinite]',
  },
  elastic: {
    horizontal: 'motion-safe:data-[state=indeterminate]:animate-[elastic_2s_var(--ease-in-out)_infinite]',
    vertical: 'motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_var(--ease-in-out)_infinite]',
  },
}

/** 步骤项显隐（激活项显示，其余隐藏） */
const stepVariantClasses: Record<'active' | 'first' | 'other' | 'last', string> = {
  active: 'opacity-100',
  first: 'opacity-100 text-muted-foreground',
  other: 'opacity-0',
  last: '',
}

function isActiveStep(index: number) {
  return index === Number(modelValue.value)
}

function stepVariant(index: number) {
  if (isActiveStep(index) && index !== 0) return 'active'
  if (index === 0 && isActiveStep(index)) return 'first'
  if (index === realMax.value && isActiveStep(index)) return 'last'
  return 'other'
}
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    :data-orientation="orientation"
    data-slot="root"
    :class="cn(
      'gap-2',
      orientation === 'horizontal' ? 'w-full flex flex-col' : 'h-full flex flex-row-reverse',
      ui?.root,
      props.class,
    )"
  >
    <div
      v-if="!isIndeterminate && (status || $slots.status)"
      data-slot="status"
      :class="cn(
        'flex text-muted-foreground duration-200 ease-out motion-reduce:transition-none',
        orientation === 'horizontal'
          ? 'flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]'
          : 'flex-col justify-end h-(--percent) min-h-fit transition-[height]',
        inverted && 'self-end',
        inverted && orientation === 'horizontal' && 'flex-row-reverse',
        ui?.status,
      )"
      :style="statusStyle"
    >
      <slot name="status" :percent="percent">{{ percent }}%</slot>
    </div>

    <ProgressRoot
      v-bind="{ modelValue }"
      :max="realMax"
      data-slot="base"
      :class="cn(
        'relative overflow-hidden rounded-full bg-muted',
        orientation === 'horizontal' ? 'w-full h-2' : 'h-full w-2',
        ui?.base,
      )"
      style="transform: translateZ(0)"
    >
      <ProgressIndicator
        data-slot="indicator"
        :class="cn(
          'rounded-full size-full transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:data-[state=indeterminate]:animate-pulse',
          animationClasses[animation][orientation],
          animation === 'elastic' && 'relative',
          colorClasses[color].indicator,
          ui?.indicator,
        )"
        :style="indicatorStyle"
      />
    </ProgressRoot>

    <div
      v-if="hasSteps"
      data-slot="steps"
      :class="cn(
        'grid items-end',
        inverted && orientation === 'vertical' && 'items-start',
        colorClasses[color].steps,
        ui?.steps,
      )"
    >
      <div
        v-for="(step, index) in max"
        :key="index"
        data-slot="step"
        :class="cn(
          'truncate text-end row-start-1 col-start-1 transition-opacity ease-out',
          stepVariantClasses[stepVariant(index)],
          inverted && orientation === 'horizontal' && 'text-start',
          ui?.step,
        )"
      >
        <slot :name="`step-${index}`" :step="step">{{ step }}</slot>
      </div>
    </div>
  </Primitive>
</template>
