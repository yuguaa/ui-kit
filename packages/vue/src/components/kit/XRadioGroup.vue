<script setup lang="ts">
/**
 * XRadioGroup 单选框组:按 Nuxt UI radio-group 结构二次封装。
 * root > fieldset > legend + item(每项)> container > base(控件)+ indicator(选中圆点);
 * wrapper > label / icon / description。
 * 支持 legend 组标题、orientation 方向、字段映射(valueKey / labelKey / descriptionKey)、
 * indicator 位置与语义色;保留 button 变体紧凑展示。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useId } from 'vue'
import type { AcceptableValue } from 'reka-ui'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot, Label as RekaLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

type RadioGroupColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type RadioGroupVariant = 'radio' | 'button'
type RadioGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type RadioGroupOrientation = 'horizontal' | 'vertical'
type RadioGroupIndicator = 'start' | 'end' | 'hidden'

/** 单项覆盖的主题插槽类名 */
export interface RadioGroupItemUi {
  item?: string
  container?: string
  base?: string
  indicator?: string
  wrapper?: string
  label?: string
  icon?: string
  description?: string
}

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface RadioGroupUi {
  root?: string
  fieldset?: string
  legend?: string
  item?: string
  container?: string
  base?: string
  indicator?: string
  wrapper?: string
  label?: string
  icon?: string
  description?: string
}

export interface RadioOption {
  /** 选项的值 */
  value?: string | number
  /** 选项文字 */
  label?: string
  /** 选项文字下方的辅助说明 */
  description?: string
  /** 是否禁用 */
  disabled?: boolean
  /** indicator 为 hidden 时显示在 label 上方的图标 */
  icon?: Component
  class?: HTMLAttributes['class']
  /** 单项覆盖的主题插槽类名 */
  ui?: RadioGroupItemUi
  /** 业务字段,可通过 valueKey / labelKey / descriptionKey 映射 */
  [key: string]: unknown
}

/** 选中圆点的语义色 */
const indicatorColorClasses: Record<RadioGroupColor, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  neutral: 'bg-foreground',
  success: 'bg-success',
  info: 'bg-info',
  warning: 'bg-warning',
  error: 'bg-error',
}

/** highlight 常显聚焦环颜色 */
const highlightClasses: Record<RadioGroupColor, string> = {
  primary: 'ring-primary',
  secondary: 'ring-secondary',
  neutral: 'ring-foreground',
  success: 'ring-success',
  info: 'ring-info',
  warning: 'ring-warning',
  error: 'ring-error',
}

/** 尺寸:控件、圆点、容器高度、文字与间距 */
const sizeClasses: Record<RadioGroupSize, { fieldset: string, legend: string, base: string, item: string, container: string, dot: string, icon: string, hiddenIcon: string }> = {
  xs: { fieldset: 'gap-y-0.5', legend: 'text-xs', base: 'size-3', item: 'text-xs', container: 'h-4', dot: 'size-1', icon: 'size-1.5', hiddenIcon: 'size-3' },
  sm: { fieldset: 'gap-y-0.5', legend: 'text-xs', base: 'size-3.5', item: 'text-xs', container: 'h-4', dot: 'size-1', icon: 'size-1.5', hiddenIcon: 'size-3.5' },
  md: { fieldset: 'gap-y-1', legend: 'text-sm', base: 'size-4', item: 'text-sm', container: 'h-5', dot: 'size-1.5', icon: 'size-2', hiddenIcon: 'size-4' },
  lg: { fieldset: 'gap-y-1', legend: 'text-sm', base: 'size-4.5', item: 'text-sm', container: 'h-5', dot: 'size-1.5', icon: 'size-2', hiddenIcon: 'size-4.5' },
  xl: { fieldset: 'gap-y-1.5', legend: 'text-base', base: 'size-5', item: 'text-base', container: 'h-6', dot: 'size-2', icon: 'size-2.5', hiddenIcon: 'size-5' },
}

const props = withDefaults(defineProps<{
  /** 选项数据源,字段名可通过 valueKey / labelKey / descriptionKey 映射 */
  options: RadioOption[]
  /** 组标题 */
  legend?: string
  /** 排列方向 */
  orientation?: RadioGroupOrientation
  /** 取值字段名 */
  valueKey?: string
  /** 文字字段名 */
  labelKey?: string
  /** 辅助说明字段名 */
  descriptionKey?: string
  /** 选中圆点的语义色 */
  color?: RadioGroupColor
  /** 尺寸 */
  size?: RadioGroupSize
  /** 指示圆点位置,hidden 时图标显示在 label 上方 */
  indicator?: RadioGroupIndicator
  /** 常显高亮聚焦环 */
  highlight?: boolean
  /** 必选项,legend 后显示 * */
  required?: boolean
  /** 整体禁用 */
  disabled?: boolean
  /** 展示形式 */
  variant?: RadioGroupVariant
  /** 按钮样式(仅 variant 为 button 时生效) */
  buttonStyle?: 'outline' | 'solid'
  /** 组 id,label 通过 for 关联单项 */
  id?: string
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: RadioGroupUi
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'vertical',
  valueKey: 'value',
  labelKey: 'label',
  descriptionKey: 'description',
  color: 'primary',
  size: 'md',
  indicator: 'start',
  highlight: false,
  required: false,
  disabled: false,
  variant: 'radio',
  buttonStyle: 'outline',
})

const model = defineModel<AcceptableValue>()

const emit = defineEmits<{ change: [event: Event] }>()

const generatedId = useId()
const resolvedId = computed(() => props.id ?? generatedId)

function itemValue(option: RadioOption): string {
  return String((option as Record<string, unknown>)[props.valueKey])
}

function itemLabel(option: RadioOption): string | undefined {
  const raw = (option as Record<string, unknown>)[props.labelKey]
  return raw == null ? undefined : String(raw)
}

function itemDescription(option: RadioOption): string | undefined {
  const raw = (option as Record<string, unknown>)[props.descriptionKey]
  return raw == null ? undefined : String(raw)
}

function itemId(option: RadioOption): string {
  return `${resolvedId.value}:${itemValue(option)}`
}

/** indicator 为 hidden 时图标渲染在 label 上方 */
function labelIcon(option: RadioOption) {
  return props.indicator === 'hidden' ? option.icon : undefined
}

function onUpdate(value: unknown) {
  model.value = value as AcceptableValue
  const event = new Event('change')
  Object.defineProperty(event, 'target', { value: { value } })
  emit('change', event)
}

const fieldsetClass = computed(() => cn(
  'flex gap-x-2',
  props.orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
  sizeClasses[props.size].fieldset,
  props.ui?.fieldset,
))

const legendClass = computed(() => cn(
  'mb-1 block font-medium text-foreground',
  sizeClasses[props.size].legend,
  props.required && "after:content-['*'] after:ms-0.5 after:text-error",
  props.ui?.legend,
))

function radioItemClass(option: RadioOption) {
  return cn(
    'flex items-start',
    sizeClasses[props.size].item,
    props.indicator === 'start' && 'flex-row',
    props.indicator === 'end' && 'flex-row-reverse',
    props.disabled && 'opacity-75',
    props.ui?.item,
    option.ui?.item,
    option.class,
  )
}

function radioContainerClass(option: RadioOption) {
  return cn(
    'flex items-center',
    sizeClasses[props.size].container,
    props.indicator === 'hidden' && 'h-auto',
    props.ui?.container,
    option.ui?.container,
  )
}

function radioBaseClass(option: RadioOption) {
  return cn(
    'rounded-full ring-1 ring-inset overflow-hidden focus-visible:outline-none focus-visible:ring-3',
    props.highlight ? cn('ring-2', highlightClasses[props.color]) : 'ring-input focus-visible:ring-ring/50',
    sizeClasses[props.size].base,
    props.indicator === 'hidden' && 'sr-only',
    (option.disabled || props.disabled) && 'cursor-not-allowed',
    props.ui?.base,
    option.ui?.base,
  )
}

function radioIndicatorClass(option: RadioOption) {
  return cn(
    'flex items-center justify-center size-full',
    indicatorColorClasses[props.color],
    props.ui?.indicator,
    option.ui?.indicator,
  )
}

function radioWrapperClass(option: RadioOption) {
  return cn(
    'w-full',
    props.indicator === 'start' && 'ms-2',
    props.indicator === 'end' && 'me-2',
    props.indicator === 'hidden' && 'flex flex-col items-center gap-1 text-center',
    props.ui?.wrapper,
    option.ui?.wrapper,
  )
}

function radioIconClass(option: RadioOption) {
  return cn(
    'shrink-0',
    props.indicator === 'hidden' ? sizeClasses[props.size].hiddenIcon : sizeClasses[props.size].icon,
    props.ui?.icon,
    option.ui?.icon,
  )
}

function radioLabelClass(option: RadioOption) {
  return cn(
    'block font-medium text-foreground',
    (option.disabled || props.disabled) && 'cursor-not-allowed',
    props.ui?.label,
    option.ui?.label,
  )
}

function radioDescriptionClass(option: RadioOption) {
  return cn(
    'text-muted-foreground',
    (option.disabled || props.disabled) && 'cursor-not-allowed',
    props.ui?.description,
    option.ui?.description,
  )
}
</script>

<template>
  <RadioGroupRoot
    :as="as ?? 'div'"
    :id="resolvedId"
    :model-value="model"
    :disabled="disabled"
    :orientation="orientation === 'horizontal' ? 'horizontal' : 'vertical'"
    data-slot="root"
    :class="cn('relative', props.ui?.root, props.class)"
    @update:model-value="onUpdate"
  >
    <fieldset data-slot="fieldset" :class="fieldsetClass">
      <legend v-if="legend || $slots.legend" data-slot="legend" :class="legendClass">
        <slot name="legend">{{ legend }}</slot>
      </legend>

      <RekaLabel
        v-if="variant === 'button'"
        v-for="option in options"
        :key="itemValue(option)"
        data-slot="item"
        :class="cn(
          'h-8 cursor-pointer items-center border px-3 text-sm transition-colors',
          'first:rounded-l-lg last:rounded-r-lg [&:not(:first-child)]:border-l-0',
          'has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/10 has-[[data-state=checked]]:text-primary',
          buttonStyle === 'solid' && 'has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-background',
          'hover:bg-muted',
          orientation === 'horizontal' ? 'inline-flex' : 'flex',
          option.disabled && 'pointer-events-none opacity-50',
          props.ui?.item,
          option.ui?.item,
          option.class,
        )"
      >
        <RadioGroupItem
          :value="itemValue(option)"
          :disabled="option.disabled || disabled"
          data-slot="base"
          :class="cn('sr-only', props.ui?.base, option.ui?.base)"
        />
        {{ itemLabel(option) ?? option.value }}
      </RekaLabel>

      <div
        v-else
        v-for="option in options"
        :key="itemValue(option)"
        data-slot="item"
        :class="radioItemClass(option)"
      >
        <div data-slot="container" :class="radioContainerClass(option)">
          <RadioGroupItem
            :id="itemId(option)"
            :value="itemValue(option)"
            :disabled="option.disabled || disabled"
            data-slot="base"
            :class="radioBaseClass(option)"
          >
            <RadioGroupIndicator data-slot="indicator" :class="radioIndicatorClass(option)">
              <span :class="cn('block rounded-full bg-white', sizeClasses[size].dot)" />
            </RadioGroupIndicator>
          </RadioGroupItem>
        </div>

        <div
          v-if="labelIcon(option) || itemLabel(option) != null || $slots.label || itemDescription(option) != null || $slots.description"
          data-slot="wrapper"
          :class="radioWrapperClass(option)"
        >
          <component v-if="labelIcon(option)" :is="labelIcon(option)" data-slot="icon" :class="radioIconClass(option)" />
          <RekaLabel
            v-if="itemLabel(option) != null || $slots.label"
            :for="itemId(option)"
            data-slot="label"
            :class="radioLabelClass(option)"
          >
            <slot name="label" :item="option" :model-value="model">
              {{ itemLabel(option) ?? option.value }}
            </slot>
          </RekaLabel>
          <p
            v-if="itemDescription(option) != null || $slots.description"
            data-slot="description"
            :class="radioDescriptionClass(option)"
          >
            <slot name="description" :item="option" :model-value="model">
              {{ itemDescription(option) }}
            </slot>
          </p>
        </div>
      </div>
    </fieldset>
  </RadioGroupRoot>
</template>
