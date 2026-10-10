<script setup lang="ts">
/**
 * XSwitch 开关:按 Nuxt UI switch 结构二次封装。
 * root(容器)> container > base(开关)+ thumb(滑块)+ icon(滑块内图标);
 * wrapper > label / description。
 * 支持语义色、滑块内图标(checkedIcon / uncheckedIcon / loadingIcon)、
 * highlight 常显聚焦环与 required 必选项标记。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useAttrs, useId } from 'vue'
import { LoaderCircle } from '@lucide/vue'
import { Label as RekaLabel, Primitive, SwitchRoot, SwitchThumb } from 'reka-ui'
import { cn } from '@/lib/utils'

type SwitchColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type SwitchSize = 'default' | 'small'

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface SwitchUi {
  root?: string
  base?: string
  container?: string
  thumb?: string
  icon?: string
  wrapper?: string
  label?: string
  description?: string
}

/** 选中时滑块轨道的语义色 */
const baseColorClasses: Record<SwitchColor, string> = {
  primary: 'data-[state=checked]:bg-primary-6',
  secondary: 'data-[state=checked]:bg-secondary',
  neutral: 'data-[state=checked]:bg-foreground',
  success: 'data-[state=checked]:bg-success-6',
  info: 'data-[state=checked]:bg-info-6',
  warning: 'data-[state=checked]:bg-warning-6',
  error: 'data-[state=checked]:bg-error-6',
}

/** 选中时滑块内图标的颜色 */
const iconColorClasses: Record<SwitchColor, string> = {
  primary: 'group-data-[state=checked]:text-primary-6',
  secondary: 'group-data-[state=checked]:text-secondary',
  neutral: 'group-data-[state=checked]:text-foreground',
  success: 'group-data-[state=checked]:text-success-6',
  info: 'group-data-[state=checked]:text-info-6',
  warning: 'group-data-[state=checked]:text-warning-6',
  error: 'group-data-[state=checked]:text-error-6',
}

/** highlight 常显聚焦环颜色 */
const highlightClasses: Record<SwitchColor, string> = {
  primary: 'ring-primary-6',
  secondary: 'ring-secondary',
  neutral: 'ring-foreground',
  success: 'ring-success-6',
  info: 'ring-info-6',
  warning: 'ring-warning-6',
  error: 'ring-error-6',
}

/** 尺寸:轨道、滑块、容器高度与文字 */
const sizeClasses: Record<SwitchSize, { base: string, container: string, thumb: string, wrapper: string, icon: string }> = {
  default: { base: 'h-[18.4px] w-8', container: 'h-5', thumb: 'size-4 data-[state=checked]:translate-x-[calc(100%-2px)]', wrapper: 'text-sm', icon: 'size-3.5' },
  small: { base: 'h-3.5 w-6', container: 'h-4', thumb: 'size-3 data-[state=checked]:translate-x-[calc(100%-2px)]', wrapper: 'text-xs', icon: 'size-2.5' },
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 选中时滑块轨道的语义色 */
  color?: SwitchColor
  /** 控件尺寸 */
  size?: SwitchSize
  /** 常显高亮聚焦环 */
  highlight?: boolean
  /** 必选项,label 后显示 * */
  required?: boolean
  /** 加载态:阻止交互并显示旋转图标 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: Component
  /** 选中时滑块内图标 */
  checkedIcon?: Component
  /** 未选中时滑块内图标 */
  uncheckedIcon?: Component
  /** 是否禁用 */
  disabled?: boolean
  /** 关联文字 */
  label?: string
  /** 关联文字下方的辅助说明 */
  description?: string
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: SwitchUi
  class?: HTMLAttributes['class']
}>(), {
  color: 'primary',
  size: 'default',
  highlight: false,
  required: false,
  loading: false,
  disabled: false,
})

const model = defineModel<boolean>({ default: false })

const emit = defineEmits<{ change: [event: Event] }>()

const attrs = useAttrs()
const generatedId = useId()
const resolvedId = computed(() => (attrs.id as string | undefined) ?? generatedId)

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

function onUpdate(value: boolean) {
  model.value = value
  const event = new Event('change')
  Object.defineProperty(event, 'target', { value: { value } })
  emit('change', event)
}

const baseClass = computed(() => cn(
  'inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent outline-none transition-[background] duration-200 ease-out focus-visible:outline-3 data-[state=unchecked]:bg-input',
  sizeClasses[props.size].base,
  baseColorClasses[props.color],
  props.highlight && cn('ring-2', highlightClasses[props.color]),
  (props.disabled || props.loading) && 'cursor-not-allowed',
  props.ui?.base,
))

const thumbClass = computed(() => cn(
  'group pointer-events-none flex items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 ease-out motion-reduce:transition-none data-[state=unchecked]:translate-x-0',
  sizeClasses[props.size].thumb,
  props.ui?.thumb,
))

const iconClass = computed(() => cn(
  'absolute shrink-0 opacity-0 transition-[color,opacity] duration-200 ease-out group-data-[state=unchecked]:text-muted-foreground',
  iconColorClasses[props.color],
  sizeClasses[props.size].icon,
  props.ui?.icon,
))

const wrapperClass = computed(() => cn(
  'ms-2',
  sizeClasses[props.size].wrapper,
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
    :as="as ?? 'div'"
    data-slot="root"
    :class="cn('relative flex items-start', disabled && 'opacity-75', props.ui?.root, props.class)"
  >
    <div data-slot="container" :class="cn('flex items-center', sizeClasses[size].container, props.ui?.container)">
      <SwitchRoot
        v-bind="forwardedAttrs"
        :id="resolvedId"
        data-slot="base"
        :model-value="model"
        :disabled="disabled || loading"
        :required="required"
        :aria-busy="loading || undefined"
        :class="baseClass"
        @update:model-value="onUpdate"
      >
        <SwitchThumb data-slot="thumb" :class="thumbClass">
          <LoaderCircle
            v-if="loading"
            :class="cn(iconClass, 'animate-spin opacity-100')"
            data-slot="icon"
            aria-hidden="true"
          />
          <component
            v-else-if="model && checkedIcon"
            :is="checkedIcon"
            data-slot="icon"
            :class="cn(iconClass, 'group-data-[state=checked]:opacity-100')"
          />
          <component
            v-else-if="!model && uncheckedIcon"
            :is="uncheckedIcon"
            data-slot="icon"
            :class="cn(iconClass, 'group-data-[state=unchecked]:opacity-100')"
          />
        </SwitchThumb>
      </SwitchRoot>
    </div>

    <span v-if="$slots.checkedChildren && model" class="text-sm">
      <slot name="checkedChildren" />
    </span>
    <span v-else-if="$slots.unCheckedChildren && !model" class="text-sm">
      <slot name="unCheckedChildren" />
    </span>

    <div
      v-if="label || $slots.label || description || $slots.description"
      data-slot="wrapper"
      :class="wrapperClass"
    >
      <RekaLabel
        v-if="label || $slots.label"
        :for="resolvedId"
        data-slot="label"
        :class="labelClass"
      >
        <slot name="label" :label="label">{{ label }}</slot>
      </RekaLabel>
      <p v-if="description || $slots.description" data-slot="description" :class="descriptionClass">
        <slot name="description" :description="description">{{ description }}</slot>
      </p>
    </div>
  </Primitive>
</template>
