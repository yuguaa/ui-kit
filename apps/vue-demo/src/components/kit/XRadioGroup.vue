<script setup lang="ts">
/**
 * XRadioGroup 单选框组：shadcn-vue radio-group 原子的二次封装。
 * 支持普通圆形单选框与按钮样式（outline / solid）。
 */
import type { HTMLAttributes } from 'vue'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

export interface RadioOption {
  /** 选项的值 */
  value: string | number
  /** 选项文字 */
  label?: string
  /** 是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  /** 选项数据源 */
  options: RadioOption[]
  /** 展示形式 */
  variant?: 'radio' | 'button'
  /** 按钮样式（仅在 variant 为 button 时生效） */
  buttonStyle?: 'outline' | 'solid'
  /** 是否禁用（整体） */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  variant: 'radio',
  buttonStyle: 'outline',
})

const model = defineModel<string>({ default: '' })
</script>

<template>
  <RadioGroup
    v-if="variant === 'button'"
    :model-value="model"
    :disabled="disabled"
    :class="cn('inline-flex items-center', props.class)"
    @update:model-value="model = String($event ?? '')"
  >
    <Label
      v-for="option in options"
      :key="String(option.value)"
      :class="cn(
        'inline-flex h-8 cursor-pointer items-center border px-3 text-sm transition-colors',
        'first:rounded-l-lg last:rounded-r-lg [&:not(:first-child)]:border-l-0',
        'has-[[data-state=checked]]:border-primary-5 has-[[data-state=checked]]:bg-primary-1 has-[[data-state=checked]]:text-primary-7',
        buttonStyle === 'solid' && 'has-[[data-state=checked]]:bg-primary-6 has-[[data-state=checked]]:text-white',
        'hover:bg-muted',
        option.disabled && 'pointer-events-none opacity-50',
      )"
    >
      <RadioGroupItem :value="String(option.value)" :disabled="option.disabled" class="sr-only" />
      {{ option.label ?? option.value }}
    </Label>
  </RadioGroup>
  <RadioGroup
    v-else
    :model-value="model"
    :disabled="disabled"
    :class="cn('flex flex-col gap-2', props.class)"
    @update:model-value="model = String($event ?? '')"
  >
    <Label v-for="option in options" :key="String(option.value)" class="flex items-center gap-2 text-sm font-normal">
      <RadioGroupItem :value="String(option.value)" :disabled="option.disabled" />
      {{ option.label ?? option.value }}
    </Label>
  </RadioGroup>
</template>
