<script setup lang="ts">
/**
 * XLink 链接：页面内或跨页面的超链接。
 */
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

type LinkColor = 'primary' | 'secondary' | 'neutral'

const props = withDefaults(defineProps<{
  /** 链接地址 */
  to?: string
  /** 颜色 */
  color?: LinkColor
  /** 激活态 */
  active?: boolean
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  color: 'primary',
  active: false,
  disabled: false,
})

const colorClasses: Record<LinkColor, string> = {
  primary: 'text-primary-6 hover:text-primary-5',
  secondary: 'text-foreground hover:text-muted-foreground',
  neutral: 'text-muted-foreground hover:text-foreground',
}
</script>

<template>
  <a
    :href="disabled ? undefined : to"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled || undefined"
    :class="cn(
      'inline-flex items-center gap-1 rounded text-sm font-medium transition-colors outline-none cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50',
      colorClasses[color],
      active && 'text-primary-7 underline underline-offset-4',
      disabled && 'pointer-events-none opacity-50',
      props.class,
    )"
    @click="disabled && $event.preventDefault()"
  >
    <slot name="leading" />
    <slot />
    <slot name="trailing" />
  </a>
</template>
