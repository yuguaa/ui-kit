<script setup lang="ts">
/**
 * XSeparator 分割线：在内容之间插入水平或垂直分隔。
 */
import type { HTMLAttributes } from 'vue'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 方向 */
  orientation?: 'horizontal' | 'vertical'
  /** 颜色 */
  color?: string
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <Separator
    :orientation="orientation"
    :class="cn(
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      props.class,
    )"
    :style="color ? { backgroundColor: color } : undefined"
  />
</template>
