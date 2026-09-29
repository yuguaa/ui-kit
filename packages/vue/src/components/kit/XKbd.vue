<script setup lang="ts">
/**
 * XKbd 键盘按键：展示快捷键或按键组合。
 */
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

type KbdSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  /** 按键内容 */
  value?: string
  /** 尺寸 */
  size?: KbdSize
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
})

const sizeClasses: Record<KbdSize, string> = {
  xs: 'h-4 min-w-4 px-1 text-[10px]',
  sm: 'h-5 min-w-5 px-1 text-xs',
  md: 'h-6 min-w-6 px-1.5 text-sm',
  lg: 'h-7 min-w-7 px-2 text-sm',
  xl: 'h-8 min-w-8 px-2.5 text-base',
}
</script>

<template>
  <kbd
    :class="cn(
      'inline-flex items-center justify-center rounded-md border border-border bg-muted font-sans font-medium text-muted-foreground shadow-xs',
      sizeClasses[size],
      props.class,
    )"
  >
    <slot>{{ value }}</slot>
  </kbd>
</template>
