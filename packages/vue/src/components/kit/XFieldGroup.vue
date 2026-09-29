<script setup lang="ts">
/**
 * XFieldGroup 字段组：将多个字段组合为一行或一组。
 */
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 是否同行排列 */
  inline?: boolean
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
  inline: true,
})

const gapClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
}
</script>

<template>
  <div
    :class="cn(
      inline ? 'flex items-start' : 'flex flex-col',
      gapClasses[size],
      props.class,
    )"
  >
    <slot />
  </div>
</template>
