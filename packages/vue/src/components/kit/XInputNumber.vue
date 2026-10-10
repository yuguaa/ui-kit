<script setup lang="ts">
/**
 * XInputNumber 数字输入：带加减步进按钮的数字输入框。
 * orientation 区分横向（两侧步进）与纵向（右侧堆叠步进）；
 * increment / decrement 插槽与 incrementDisabled / decrementDisabled 控制步进按钮。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useAttrs } from 'vue'
import { Minus, Plus } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

/* 属性透传到内部 input，避免落到外层包装元素 */
defineOptions({ name: 'XInputNumber', inheritAttrs: false })

type InputNumberSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface InputNumberUi {
  base?: string
}

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
  /** 步进按钮方向：horizontal 两侧 / vertical 右侧堆叠 */
  orientation?: 'horizontal' | 'vertical'
  /** 控件尺寸 */
  size?: InputNumberSize
  /** 占位提示文字 */
  placeholder?: string
  /** 是否显示加号按钮 */
  increment?: boolean
  /** 是否显示减号按钮 */
  decrement?: boolean
  /** 禁用加号按钮 */
  incrementDisabled?: boolean
  /** 禁用减号按钮 */
  decrementDisabled?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: InputNumberUi
  class?: HTMLAttributes['class']
}>(), {
  modelValue: 0,
  step: 1,
  orientation: 'horizontal',
  size: 'md',
  increment: true,
  decrement: true,
  incrementDisabled: false,
  decrementDisabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  /** 值变化回调 */
  change: [value: number]
}>()

const attrs = useAttrs()

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

/** 尺寸 → 输入框高度与内边距 */
const sizeClasses: Record<InputNumberSize, string> = {
  xs: 'h-6 px-2 text-sm',
  sm: 'h-7 px-2.5 text-sm',
  md: 'h-8 px-2.5 text-base',
  lg: 'h-9 px-3 text-base',
  xl: 'h-11 px-3.5 text-base',
}

/** 输入框宽度（随控件尺寸） */
const widthClasses: Record<InputNumberSize, string> = {
  xs: 'w-16', sm: 'w-18', md: 'w-20', lg: 'w-22', xl: 'w-24',
}

/** 横向步进按钮尺寸 */
const buttonSizes: Record<InputNumberSize, string> = {
  xs: 'size-6', sm: 'size-7', md: 'size-8', lg: 'size-9', xl: 'size-10',
}

/** 纵向步进按钮宽度 */
const verticalButtonWidths: Record<InputNumberSize, string> = {
  xs: 'w-6', sm: 'w-7', md: 'w-8', lg: 'w-9', xl: 'w-10',
}

/** 步进按钮存在时，输入框补足的水平内边距 */
const decrementPaddings: Record<InputNumberSize, string> = {
  xs: 'pl-7', sm: 'pl-8', md: 'pl-9', lg: 'pl-10', xl: 'pl-11',
}
const incrementPaddings: Record<InputNumberSize, string> = {
  xs: 'pr-7', sm: 'pr-8', md: 'pr-9', lg: 'pr-10', xl: 'pr-11',
}

/** 步进图标尺寸（随控件尺寸） */
const iconSizes: Record<InputNumberSize, string> = {
  xs: 'size-3', sm: 'size-3.5', md: 'size-4', lg: 'size-4', xl: 'size-5',
}

/* 步进按钮公共样式 */
const buttonClasses = 'absolute flex cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50'

function onClick(event: MouseEvent) {
  const handler = attrs.onClick as
    | ((event: MouseEvent) => unknown)
    | Array<(event: MouseEvent) => unknown>
    | undefined
  if (handler == null) return

  /* 透传的处理器可能是数组（上层 as-child 合并后），逐个调用 */
  const handlers = Array.isArray(handler) ? handler : [handler]
  handlers.forEach((fn) => fn(event))
}

/** 透传属性：onClick 换成包装后的处理函数，其余原样透传 */
const forwardedAttrs = computed(() => ({ ...attrs, onClick }))
</script>

<template>
  <Primitive
    :as="as ?? 'span'"
    data-slot="root"
    :class="cn('relative inline-flex w-fit items-center', props.class)"
  >
    <button
      v-if="decrement"
      type="button"
      aria-label="decrement"
      :disabled="disabled || decrementDisabled || (min != null && modelValue <= min)"
      :class="cn(
        buttonClasses,
        orientation === 'horizontal'
          ? cn('inset-y-0 left-1', buttonSizes[size])
          : cn('bottom-0 right-1 h-1/2 rounded-br-md', verticalButtonWidths[size]),
      )"
      @click="update(modelValue - step)"
    >
      <slot name="decrement"><Minus :class="iconSizes[size]" /></slot>
    </button>
    <input
      v-bind="forwardedAttrs"
      type="number"
      :value="modelValue"
      data-slot="base"
      :class="cn(
        'appearance-none rounded-md border border-input bg-background placeholder:text-muted-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-75',
        '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        sizeClasses[size],
        widthClasses[size],
        orientation === 'horizontal' && (decrement ? 'text-center' : 'text-start'),
        orientation === 'horizontal' && decrement && decrementPaddings[size],
        (orientation === 'horizontal' ? increment : (increment || decrement)) && incrementPaddings[size],
        props.ui?.base,
      )"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="update(Number(($event.target as HTMLInputElement).value))"
    />
    <button
      v-if="increment"
      type="button"
      aria-label="increment"
      :disabled="disabled || incrementDisabled || (max != null && modelValue >= max)"
      :class="cn(
        buttonClasses,
        orientation === 'horizontal'
          ? cn('inset-y-0 right-1', buttonSizes[size])
          : cn('top-0 right-1 h-1/2 rounded-tr-md', verticalButtonWidths[size]),
      )"
      @click="update(modelValue + step)"
    >
      <slot name="increment"><Plus :class="iconSizes[size]" /></slot>
    </button>
  </Primitive>
</template>
