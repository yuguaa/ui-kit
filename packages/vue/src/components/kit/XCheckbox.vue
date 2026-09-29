<script setup lang="ts">
/**
 * XCheckbox 多选框：shadcn-vue checkbox 原子的二次封装。
 * 支持半选状态与 label 插槽。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 是否禁用 */
  disabled?: boolean
  /** 半选状态 */
  indeterminate?: boolean
  /** 选项的值 */
  value?: string | number
  class?: HTMLAttributes['class']
}>(), {
  indeterminate: false,
})

const model = defineModel<boolean | 'indeterminate'>({ default: false })

const checkedValue = computed(() => (props.indeterminate ? 'indeterminate' : model.value))
</script>

<template>
  <span :class="cn('flex items-center gap-2', props.class)">
    <Checkbox
      :model-value="checkedValue"
      :disabled="disabled"
      :value="value == null ? undefined : String(value)"
      @update:model-value="model = $event"
    />
    <Label v-if="$slots.label" class="text-sm font-normal">
      <slot name="label" />
    </Label>
  </span>
</template>
