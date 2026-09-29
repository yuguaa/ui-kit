<script setup lang="ts">
/**
 * XButton 二次封装按钮：
 * 在 shadcn-vue 按钮原子上注入变体语义（variant × color）与 Framer Motion 动效。
 * 变体：solid | outline | soft | ghost | subtle | link
 * 颜色：primary | secondary | neutral | success | info | warning | error
 * 动效：hover 上浮 2px + 阴影，press 缩小 0.98，loading 图标旋转 + 半透明
 */
import type { HTMLAttributes } from 'vue'
import { computed, useAttrs } from 'vue'
import { LoaderCircle } from '@lucide/vue'
import { motion } from 'motion-v'
import { buttonVariants } from '@/components/ui/button'
import { kitMotion } from '@/lib/kit/motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost' | 'subtle' | 'link'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'

/** kit 变体 → shadcn-vue 原子变体映射 */
const atomVariantMap: Record<ButtonVariant, 'default' | 'outline' | 'ghost' | 'link'> = {
  solid: 'default',
  outline: 'outline',
  soft: 'ghost',
  ghost: 'ghost',
  subtle: 'ghost',
  link: 'link',
}

/** kit 尺寸 → shadcn-vue 原子尺寸映射（xl 由 class 覆盖补足） */
const atomSizeMap: Record<ButtonSize, 'xs' | 'sm' | 'default' | 'lg'> = {
  xs: 'xs',
  sm: 'sm',
  md: 'default',
  lg: 'lg',
  xl: 'lg',
}

/** 语义色样式：每个颜色提供六种变体的完整 class（字面量，保证 Tailwind 可扫描） */
const buttonColorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    solid: 'bg-primary-6 text-white hover:bg-primary-5 active:bg-primary-7',
    outline: 'border-primary-5 text-primary-6 hover:bg-primary-1 active:bg-primary-2',
    soft: 'bg-primary-1 text-primary-7 hover:bg-primary-2 active:bg-primary-3',
    ghost: 'text-primary-6 hover:bg-primary-1 active:bg-primary-2',
    subtle: 'text-muted-foreground hover:text-primary-6 hover:bg-primary-1',
    link: 'text-primary-6 underline-offset-4 hover:underline',
  },
  secondary: {
    solid: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border-border text-foreground hover:bg-muted',
    soft: 'bg-muted text-secondary-foreground hover:bg-secondary',
    ghost: 'text-secondary-foreground hover:bg-muted',
    subtle: 'text-muted-foreground hover:text-foreground hover:bg-muted',
    link: 'text-secondary-foreground underline-offset-4 hover:underline',
  },
  neutral: {
    solid: 'bg-neutral-6 text-white hover:bg-neutral-5 active:bg-neutral-7',
    outline: 'border-neutral-5 text-neutral-6 hover:bg-neutral-1 active:bg-neutral-2',
    soft: 'bg-neutral-1 text-neutral-7 hover:bg-neutral-2 active:bg-neutral-3',
    ghost: 'text-neutral-6 hover:bg-neutral-1 active:bg-neutral-2',
    subtle: 'text-muted-foreground hover:text-neutral-6 hover:bg-neutral-1',
    link: 'text-neutral-6 underline-offset-4 hover:underline',
  },
  success: {
    solid: 'bg-success-6 text-white hover:bg-success-5 active:bg-success-7',
    outline: 'border-success-5 text-success-6 hover:bg-success-1 active:bg-success-2',
    soft: 'bg-success-1 text-success-7 hover:bg-success-2 active:bg-success-3',
    ghost: 'text-success-6 hover:bg-success-1 active:bg-success-2',
    subtle: 'text-muted-foreground hover:text-success-6 hover:bg-success-1',
    link: 'text-success-6 underline-offset-4 hover:underline',
  },
  info: {
    solid: 'bg-info-6 text-white hover:bg-info-5 active:bg-info-7',
    outline: 'border-info-5 text-info-6 hover:bg-info-1 active:bg-info-2',
    soft: 'bg-info-1 text-info-7 hover:bg-info-2 active:bg-info-3',
    ghost: 'text-info-6 hover:bg-info-1 active:bg-info-2',
    subtle: 'text-muted-foreground hover:text-info-6 hover:bg-info-1',
    link: 'text-info-6 underline-offset-4 hover:underline',
  },
  warning: {
    solid: 'bg-warning-6 text-white hover:bg-warning-5 active:bg-warning-7',
    outline: 'border-warning-5 text-warning-7 hover:bg-warning-1 active:bg-warning-2',
    soft: 'bg-warning-1 text-warning-8 hover:bg-warning-2 active:bg-warning-3',
    ghost: 'text-warning-7 hover:bg-warning-1 active:bg-warning-2',
    subtle: 'text-muted-foreground hover:text-warning-7 hover:bg-warning-1',
    link: 'text-warning-7 underline-offset-4 hover:underline',
  },
  error: {
    solid: 'bg-error-6 text-white hover:bg-error-5 active:bg-error-7',
    outline: 'border-error-5 text-error-6 hover:bg-error-1 active:bg-error-2',
    soft: 'bg-error-1 text-error-7 hover:bg-error-2 active:bg-error-3',
    ghost: 'text-error-6 hover:bg-error-1 active:bg-error-2',
    subtle: 'text-muted-foreground hover:text-error-6 hover:bg-error-1',
    link: 'text-error-6 underline-offset-4 hover:underline',
  },
}

/** xl 尺寸补足：在原子 lg 基础上加高加宽 */
const sizeOverrides: Partial<Record<ButtonSize, string>> = {
  xl: 'h-10 gap-2 px-4 text-base',
}

const props = withDefaults(defineProps<{
  /** 预设样式 */
  variant?: ButtonVariant
  /** 尺寸 */
  size?: ButtonSize
  /** 组件颜色 */
  color?: ButtonColor
  /** 加载态 */
  loading?: boolean
  class?: HTMLAttributes['class']
}>(), {
  variant: 'solid',
  size: 'md',
  color: 'primary',
  loading: false,
})

defineOptions({ name: 'XButton' })

const attrs = useAttrs()
const isDisabled = computed(() => props.loading || (attrs.disabled as boolean) === true)
</script>

<template>
  <motion.button
    data-slot="button"
    :data-variant="atomVariantMap[variant]"
    :data-size="atomSizeMap[size]"
    :class="cn(
      buttonVariants({ variant: atomVariantMap[variant], size: atomSizeMap[size] }),
      buttonColorStyles[color][variant],
      sizeOverrides[size],
      'hover:shadow-md',
      loading && 'opacity-60',
      props.class,
    )"
    :while-hover="isDisabled ? undefined : { y: -2 }"
    :while-press="isDisabled ? undefined : { scale: 0.98 }"
    :transition="kitMotion.tokens.fast"
    :disabled="isDisabled"
    :aria-busy="loading || undefined"
  >
    <LoaderCircle v-if="loading" class="animate-spin" aria-hidden="true" />
    <slot v-else name="leading" />
    <slot />
    <slot name="trailing" />
  </motion.button>
</template>
