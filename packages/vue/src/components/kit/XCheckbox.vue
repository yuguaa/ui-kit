<script setup lang="ts">
/**
 * XCheckbox 多选框:按 Nuxt UI checkbox 结构二次封装。
 * root(容器)> container > base(控件)+ indicator(勾选指示)+ icon;
 * wrapper > label / description。
 * variant 支持 list / card,card 时整个卡片可点击;
 * indicator 支持 start / end / hidden,hidden 时图标显示在 label 上方。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useAttrs, useId } from 'vue'
import { Check, Minus } from '@lucide/vue'
import { CheckboxIndicator, CheckboxRoot, Label as RekaLabel, Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

type CheckboxColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type CheckboxVariant = 'list' | 'card'
type CheckboxSize = 'sm' | 'md' | 'lg'
type CheckboxIndicator = 'start' | 'end' | 'hidden'

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface CheckboxUi {
  root?: string
  container?: string
  base?: string
  indicator?: string
  icon?: string
  wrapper?: string
  label?: string
  description?: string
}

/** 勾选指示块的语义色,选中与半选时填充 */
const indicatorColorClasses: Record<CheckboxColor, string> = {
  primary: 'bg-primary-6 text-white',
  secondary: 'bg-secondary text-secondary-foreground',
  neutral: 'bg-foreground text-background',
  success: 'bg-success-6 text-white',
  info: 'bg-info-6 text-white',
  warning: 'bg-warning-6 text-white',
  error: 'bg-error-6 text-white',
}

/** card 变体的选中描边与浅色底 */
const cardCheckedClasses: Record<CheckboxColor, string> = {
  primary: 'has-data-[state=checked]:border-primary-6/50 has-data-[state=checked]:bg-primary-1',
  secondary: 'has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:bg-secondary',
  neutral: 'has-data-[state=checked]:border-foreground/50 has-data-[state=checked]:bg-muted',
  success: 'has-data-[state=checked]:border-success-6/50 has-data-[state=checked]:bg-success-1',
  info: 'has-data-[state=checked]:border-info-6/50 has-data-[state=checked]:bg-info-1',
  warning: 'has-data-[state=checked]:border-warning-6/50 has-data-[state=checked]:bg-warning-1',
  error: 'has-data-[state=checked]:border-error-6/50 has-data-[state=checked]:bg-error-1',
}

/** highlight 常显聚焦环颜色 */
const highlightClasses: Record<CheckboxColor, string> = {
  primary: 'ring-primary-6',
  secondary: 'ring-secondary',
  neutral: 'ring-foreground',
  success: 'ring-success-6',
  info: 'ring-info-6',
  warning: 'ring-warning-6',
  error: 'ring-error-6',
}

/** 尺寸与 card 内边距、hidden 时上方图标尺寸 */
const sizeClasses: Record<CheckboxSize, { base: string, icon: string, container: string, wrapper: string, card: string, hiddenIcon: string }> = {
  sm: { base: 'size-3.5', icon: 'size-3', container: 'h-4', wrapper: 'text-xs', card: 'p-3', hiddenIcon: 'size-3.5' },
  md: { base: 'size-4', icon: 'size-3.5', container: 'h-5', wrapper: 'text-sm', card: 'p-3.5', hiddenIcon: 'size-4' },
  lg: { base: 'size-5', icon: 'size-4', container: 'h-6', wrapper: 'text-base', card: 'p-4', hiddenIcon: 'size-4.5' },
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 选项文字 */
  label?: string
  /** 选项文字下方的辅助说明 */
  description?: string
  /** 选中与半选时指示块的颜色 */
  color?: CheckboxColor
  /** 展示形式,card 时整个卡片可点击 */
  variant?: CheckboxVariant
  /** 控件尺寸 */
  size?: CheckboxSize
  /** 指示块位置,hidden 时图标显示在 label 上方 */
  indicator?: CheckboxIndicator
  /** 常显高亮聚焦环 */
  highlight?: boolean
  /** 必选项,label 后显示 * */
  required?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 半选状态 */
  indeterminate?: boolean
  /** 选项的值 */
  value?: string | number
  /** 选中时显示的图标 */
  icon?: Component
  /** 半选时显示的图标 */
  indeterminateIcon?: Component
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: CheckboxUi
  class?: HTMLAttributes['class']
}>(), {
  color: 'primary',
  variant: 'list',
  size: 'md',
  indicator: 'start',
  highlight: false,
  required: false,
  disabled: false,
  indeterminate: false,
})

const model = defineModel<boolean | 'indeterminate'>({ default: false })

const emit = defineEmits<{ change: [event: Event] }>()

const attrs = useAttrs()
const generatedId = useId()
const resolvedId = computed(() => (attrs.id as string | undefined) ?? generatedId)

const checkedValue = computed(() => (props.indeterminate ? 'indeterminate' : model.value))

/** indicator 为 hidden 时图标渲染在 label 上方,仅当显式传入 icon 时展示 */
const labelIcon = computed(() => (props.indicator === 'hidden' ? props.icon : undefined))

/** 透传属性:onClick 可能是数组(上层 as-child 合并),逐个调用 */
function onClick(event: MouseEvent) {
  const handler = attrs.onClick as
    | ((event: MouseEvent) => unknown)
    | Array<(event: MouseEvent) => unknown>
    | undefined
  if (handler == null) return

  const handlers = Array.isArray(handler) ? handler : [handler]
  for (const fn of handlers) fn(event)
}

const forwardedAttrs = computed(() => {
  const { 'data-state': _dataState, ...rest } = attrs
  return { ...rest, onClick }
})

function onUpdate(value: boolean | 'indeterminate') {
  model.value = value
  const event = new Event('change')
  Object.defineProperty(event, 'target', { value: { value } })
  emit('change', event)
}

const rootClass = computed(() => cn(
  'relative flex items-start',
  props.variant === 'card' && cn(
    'rounded-lg border border-border transition-colors hover:bg-muted/50',
    cardCheckedClasses[props.color],
    sizeClasses[props.size].card,
  ),
  props.indicator === 'start' && 'flex-row',
  props.indicator === 'end' && 'flex-row-reverse',
  props.disabled && 'opacity-75',
  props.ui?.root,
  props.class,
))

const containerClass = computed(() => cn(
  'flex items-center',
  sizeClasses[props.size].container,
  props.indicator === 'hidden' && 'h-auto',
  props.ui?.container,
))

const baseClass = computed(() => cn(
  'rounded-sm ring-1 ring-inset overflow-hidden focus-visible:outline-none focus-visible:ring-3',
  props.highlight ? cn('ring-2', highlightClasses[props.color]) : 'ring-input focus-visible:ring-ring/50',
  sizeClasses[props.size].base,
  props.indicator === 'hidden' && 'sr-only',
  props.disabled && 'cursor-not-allowed',
  props.ui?.base,
))

const indicatorClass = computed(() => cn(
  'flex items-center justify-center size-full',
  indicatorColorClasses[props.color],
  props.ui?.indicator,
))

const iconClass = computed(() => cn(
  'shrink-0',
  props.indicator === 'hidden' ? sizeClasses[props.size].hiddenIcon : sizeClasses[props.size].icon,
  props.ui?.icon,
))

const wrapperClass = computed(() => cn(
  'w-full',
  sizeClasses[props.size].wrapper,
  props.indicator === 'start' && 'ms-2',
  props.indicator === 'end' && 'me-2',
  props.indicator === 'hidden' && 'flex flex-col items-center gap-1 text-center',
  props.ui?.wrapper,
))

const labelClass = computed(() => cn(
  'block font-medium text-foreground',
  props.required && "after:content-['*'] after:ms-0.5 after:text-error-6",
  props.disabled && 'cursor-not-allowed',
  props.ui?.label,
))

const descriptionClass = computed(() => cn(
  'text-muted-foreground',
  props.disabled && 'cursor-not-allowed',
  props.ui?.description,
))
</script>

<template>
  <Primitive
    :as="variant === 'card' ? RekaLabel : (as ?? 'div')"
    :for="variant === 'card' ? resolvedId : undefined"
    data-slot="root"
    :class="rootClass"
  >
    <div data-slot="container" :class="containerClass">
      <CheckboxRoot
        v-bind="forwardedAttrs"
        v-slot="{ state }"
        :id="resolvedId"
        data-slot="base"
        :model-value="checkedValue"
        :value="value == null ? undefined : String(value)"
        :disabled="disabled"
        :required="required"
        :class="baseClass"
        @update:model-value="onUpdate"
      >
        <CheckboxIndicator data-slot="indicator" :class="indicatorClass">
          <component
            :is="state === 'indeterminate' ? (indeterminateIcon ?? Minus) : (icon ?? Check)"
            data-slot="icon"
            :class="iconClass"
          />
        </CheckboxIndicator>
      </CheckboxRoot>
    </div>

    <div
      v-if="labelIcon || label || $slots.label || description || $slots.description"
      data-slot="wrapper"
      :class="wrapperClass"
    >
      <component v-if="labelIcon" :is="labelIcon" data-slot="icon" :class="iconClass" />
      <RekaLabel
        v-if="(label || $slots.label) && variant !== 'card'"
        :for="resolvedId"
        data-slot="label"
        :class="labelClass"
      >
        <slot name="label" :label="label">{{ label }}</slot>
      </RekaLabel>
      <p v-else-if="label || $slots.label" data-slot="label" :class="labelClass">
        <slot name="label" :label="label">{{ label }}</slot>
      </p>
      <p v-if="description || $slots.description" data-slot="description" :class="descriptionClass">
        <slot name="description" :description="description">{{ description }}</slot>
      </p>
    </div>
  </Primitive>
</template>
