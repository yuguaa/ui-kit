<script setup lang="ts">
/**
 * XSwitch 开关：shadcn-vue switch 原子的二次封装。
 * 支持选中/未选中文字插槽、default / small 两档尺寸、加载态与说明文字插槽。
 */
import type { HTMLAttributes } from 'vue'
import { LoaderCircle } from '@lucide/vue'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

/* 属性透传到内部 Switch，避免落到外层包装元素 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 是否禁用 */
  disabled?: boolean
  /** 控件尺寸 */
  size?: 'default' | 'small'
  /** 关联文字 */
  label?: string
  /** 加载态：阻止交互并显示旋转图标 */
  loading?: boolean
  class?: HTMLAttributes['class']
}>(), {
  size: 'default',
  loading: false,
})

const model = defineModel<boolean>({ default: false })
</script>

<template>
  <span :class="cn('flex items-center gap-2', props.class)">
    <Switch
      v-bind="$attrs"
      :model-value="model"
      :disabled="disabled || loading"
      :aria-busy="loading || undefined"
      :size="size === 'small' ? 'sm' : 'default'"
      @update:model-value="model = $event"
    />
    <LoaderCircle
      v-if="loading"
      :class="cn('animate-spin', size === 'small' ? 'size-3' : 'size-3.5')"
      aria-hidden="true"
    />
    <span v-if="$slots.checkedChildren && model" class="text-sm">
      <slot name="checkedChildren" />
    </span>
    <span v-else-if="$slots.unCheckedChildren && !model" class="text-sm">
      <slot name="unCheckedChildren" />
    </span>
    <span v-if="label || $slots.description" class="flex flex-col gap-0.5">
      <Label v-if="label" class="text-sm font-normal">{{ label }}</Label>
      <span v-if="$slots.description" class="text-xs text-muted-foreground">
        <slot name="description" />
      </span>
    </span>
  </span>
</template>
