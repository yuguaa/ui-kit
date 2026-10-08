<script setup lang="ts">
/**
 * XCheckbox 多选框：shadcn-vue checkbox 原子的二次封装。
 * 支持半选状态、label/description 插槽、语义色与尺寸。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type CheckboxColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type CheckboxSize = 'sm' | 'md' | 'lg'

/* 选中与半选时控件自身的语义色，reka-ui 通过 data-state 标记状态 */
const colorClasses: Record<CheckboxColor, string> = {
  primary: 'data-[state=checked]:border-primary-6 data-[state=checked]:bg-primary-6 data-[state=checked]:text-white data-[state=checked]:ring-primary-6 data-[state=indeterminate]:border-primary-6 data-[state=indeterminate]:bg-primary-6 data-[state=indeterminate]:text-white data-[state=indeterminate]:ring-primary-6',
  secondary: 'data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:ring-secondary data-[state=indeterminate]:border-secondary data-[state=indeterminate]:bg-secondary data-[state=indeterminate]:text-secondary-foreground data-[state=indeterminate]:ring-secondary',
  neutral: 'data-[state=checked]:border-neutral-6 data-[state=checked]:bg-neutral-6 data-[state=checked]:text-white data-[state=checked]:ring-neutral-6 data-[state=indeterminate]:border-neutral-6 data-[state=indeterminate]:bg-neutral-6 data-[state=indeterminate]:text-white data-[state=indeterminate]:ring-neutral-6',
  success: 'data-[state=checked]:border-success-6 data-[state=checked]:bg-success-6 data-[state=checked]:text-white data-[state=checked]:ring-success-6 data-[state=indeterminate]:border-success-6 data-[state=indeterminate]:bg-success-6 data-[state=indeterminate]:text-white data-[state=indeterminate]:ring-success-6',
  info: 'data-[state=checked]:border-info-6 data-[state=checked]:bg-info-6 data-[state=checked]:text-white data-[state=checked]:ring-info-6 data-[state=indeterminate]:border-info-6 data-[state=indeterminate]:bg-info-6 data-[state=indeterminate]:text-white data-[state=indeterminate]:ring-info-6',
  warning: 'data-[state=checked]:border-warning-6 data-[state=checked]:bg-warning-6 data-[state=checked]:text-white data-[state=checked]:ring-warning-6 data-[state=indeterminate]:border-warning-6 data-[state=indeterminate]:bg-warning-6 data-[state=indeterminate]:text-white data-[state=indeterminate]:ring-warning-6',
  error: 'data-[state=checked]:border-error-6 data-[state=checked]:bg-error-6 data-[state=checked]:text-white data-[state=checked]:ring-error-6 data-[state=indeterminate]:border-error-6 data-[state=indeterminate]:bg-error-6 data-[state=indeterminate]:text-white data-[state=indeterminate]:ring-error-6',
}

/* 控件尺寸与内部图标同步缩放，data-slot 为原子写定的标识 */
const sizeClasses: Record<CheckboxSize, string> = {
  sm: 'size-3.5 [&_[data-slot=checkbox-indicator]>svg]:size-3',
  md: 'size-4 [&_[data-slot=checkbox-indicator]>svg]:size-3.5',
  lg: 'size-5 [&_[data-slot=checkbox-indicator]>svg]:size-4',
}

/* 属性透传到内部 Checkbox，避免落到外层包装元素 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 是否禁用 */
  disabled?: boolean
  /** 半选状态 */
  indeterminate?: boolean
  /** 选项的值 */
  value?: string | number
  /** 选中与半选时控件的语义色 */
  color?: CheckboxColor
  /** 控件尺寸 */
  size?: CheckboxSize
  class?: HTMLAttributes['class']
}>(), {
  indeterminate: false,
  color: 'primary',
  size: 'md',
})

const model = defineModel<boolean | 'indeterminate'>({ default: false })

const checkedValue = computed(() => (props.indeterminate ? 'indeterminate' : model.value))
</script>

<template>
  <span :class="cn('flex items-center gap-2', props.class)">
    <Checkbox
      v-bind="$attrs"
      :model-value="checkedValue"
      :disabled="disabled"
      :value="value == null ? undefined : String(value)"
      :class="cn(colorClasses[color], sizeClasses[size])"
      @update:model-value="model = $event"
    />
    <span v-if="$slots.label || $slots.description" class="flex flex-col">
      <Label
        v-if="$slots.label"
        :class="cn('text-sm font-normal', disabled && 'cursor-not-allowed opacity-50')"
      >
        <slot name="label" />
      </Label>
      <p
        v-if="$slots.description"
        :class="cn('text-sm text-muted-foreground', disabled && 'opacity-50')"
      >
        <slot name="description" />
      </p>
    </span>
  </span>
</template>
