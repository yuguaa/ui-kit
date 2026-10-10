<script setup lang="ts">
/**
 * XKbd 键盘按键：展示快捷键或按键组合。
 * 变体体系：solid | outline | soft | subtle × 七种语义色 × 五档尺寸，
 * as 渲染为指定元素或组件，ui.base 定制根元素类名。
 */
import type { Component, HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

type KbdSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type KbdColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type KbdVariant = 'solid' | 'outline' | 'soft' | 'subtle'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface KbdUi {
  base?: string
}

const props = withDefaults(defineProps<{
  /** 按键内容 */
  value?: string
  /** 预设样式 */
  variant?: KbdVariant
  /** 按键颜色 */
  color?: KbdColor
  /** 尺寸 */
  size?: KbdSize
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: KbdUi
  class?: HTMLAttributes['class']
}>(), {
  variant: 'outline',
  color: 'neutral',
  size: 'md',
  as: 'kbd',
})

defineOptions({ name: 'XKbd', inheritAttrs: false })

const sizeClasses: Record<KbdSize, string> = {
  xs: 'h-4 min-w-4 px-1 text-[10px]',
  sm: 'h-5 min-w-5 px-1 text-xs',
  md: 'h-6 min-w-6 px-1.5 text-sm',
  lg: 'h-7 min-w-7 px-2 text-sm',
  xl: 'h-8 min-w-8 px-2.5 text-base',
}

/** 变体 × 语义色样式（字面量，保证 Tailwind 可扫描） */
const colorClasses: Record<KbdVariant, Record<KbdColor, string>> = {
  solid: {
    primary: 'bg-primary text-background',
    secondary: 'bg-secondary text-secondary-foreground',
    neutral: 'bg-foreground text-background',
    success: 'bg-success text-background',
    info: 'bg-info text-background',
    warning: 'bg-warning text-background',
    error: 'bg-error text-background',
  },
  outline: {
    primary: 'bg-transparent text-primary ring-1 ring-inset ring-primary/50',
    secondary: 'bg-transparent text-foreground ring-1 ring-inset ring-border',
    neutral: 'bg-transparent text-foreground ring-1 ring-inset ring-border',
    success: 'bg-transparent text-success ring-1 ring-inset ring-success/50',
    info: 'bg-transparent text-info ring-1 ring-inset ring-info/50',
    warning: 'bg-transparent text-warning ring-1 ring-inset ring-warning/50',
    error: 'bg-transparent text-error ring-1 ring-inset ring-error/50',
  },
  soft: {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-muted text-secondary-foreground',
    neutral: 'bg-muted text-foreground',
    success: 'bg-success/10 text-success',
    info: 'bg-info/10 text-info',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error',
  },
  subtle: {
    primary: 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/25',
    secondary: 'bg-muted text-secondary-foreground ring-1 ring-inset ring-border',
    neutral: 'bg-muted text-foreground ring-1 ring-inset ring-border',
    success: 'bg-success/10 text-success ring-1 ring-inset ring-success/25',
    info: 'bg-info/10 text-info ring-1 ring-inset ring-info/25',
    warning: 'bg-warning/10 text-warning ring-1 ring-inset ring-warning/25',
    error: 'bg-error/10 text-error ring-1 ring-inset ring-error/25',
  },
}
</script>

<template>
  <Primitive
    :as="as"
    v-bind="$attrs"
    data-slot="kbd"
    :class="cn(
      'inline-flex items-center justify-center rounded-sm font-sans font-medium uppercase shadow-xs',
      colorClasses[variant][color],
      sizeClasses[size],
      ui?.base,
      props.class,
    )"
  >
    <slot>{{ value }}</slot>
  </Primitive>
</template>
