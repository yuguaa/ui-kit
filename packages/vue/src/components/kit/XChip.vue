<script setup lang="ts">
/**
 * XChip 芯片：用于标记属性，支持多种语义色与可选关闭按钮。
 */
import type { HTMLAttributes } from 'vue'
import { X } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ChipColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type ChipSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  /** 标签颜色 */
  color?: ChipColor
  /** 标签尺寸 */
  size?: ChipSize
  /** 是否可关闭 */
  closable?: boolean
  class?: HTMLAttributes['class']
}>(), {
  color: 'primary',
  size: 'md',
})

const emit = defineEmits<{
  /** 关闭时回调 */
  close: [event: MouseEvent]
}>()

const colorClasses: Record<ChipColor, string> = {
  primary: 'border-primary-3 bg-primary-1 text-primary-7',
  secondary: 'border-border bg-secondary text-secondary-foreground',
  neutral: 'border-border bg-muted text-muted-foreground',
  success: 'border-success-3 bg-success-1 text-success-7',
  info: 'border-info-3 bg-info-1 text-info-7',
  warning: 'border-warning-3 bg-warning-1 text-warning-8',
  error: 'border-error-3 bg-error-1 text-error-7',
}

const sizeClasses: Record<ChipSize, string> = {
  xs: 'h-4.5 gap-0.5 px-1.5 text-[10px]',
  sm: 'h-5.5 gap-1 px-2 text-xs',
  md: 'h-7 gap-1 px-2.5 text-sm',
  lg: 'h-8 gap-1.5 px-3 text-sm',
  xl: 'h-9 gap-1.5 px-3.5 text-base',
}
</script>

<template>
  <span
    :class="cn(
      'inline-flex items-center rounded-full border font-medium whitespace-nowrap',
      colorClasses[color],
      sizeClasses[size],
      props.class,
    )"
  >
    <slot name="icon" />
    <slot />
    <Button
      v-if="closable"
      type="button"
      variant="ghost"
      size="icon-xs"
      aria-label="close"
      class="-mr-1 size-4 rounded-full opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3"
      @click="emit('close', $event)"
    >
      <X />
    </Button>
  </span>
</template>
