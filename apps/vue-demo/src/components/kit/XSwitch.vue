<script setup lang="ts">
/**
 * XSwitch 开关：shadcn-vue switch 原子的二次封装。
 * 支持选中/未选中文字插槽与 default / small 两档尺寸。
 */
import type { HTMLAttributes } from 'vue'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 是否禁用 */
  disabled?: boolean
  /** 控件尺寸 */
  size?: 'default' | 'small'
  /** 关联文字 */
  label?: string
  class?: HTMLAttributes['class']
}>(), {
  size: 'default',
})

const model = defineModel<boolean>({ default: false })
</script>

<template>
  <span :class="cn('flex items-center gap-2', props.class)">
    <Switch
      :model-value="model"
      :disabled="disabled"
      :size="size === 'small' ? 'sm' : 'default'"
      @update:model-value="model = $event"
    />
    <span v-if="$slots.checkedChildren && model" class="text-sm">
      <slot name="checkedChildren" />
    </span>
    <span v-else-if="$slots.unCheckedChildren && !model" class="text-sm">
      <slot name="unCheckedChildren" />
    </span>
    <Label v-if="label" class="text-sm font-normal">{{ label }}</Label>
  </span>
</template>
