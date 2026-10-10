<script setup lang="ts">
/**
 * XButton 二次封装按钮：
 * 在 shadcn-vue 按钮原子上注入变体语义（variant × color）。
 * 变体：solid | outline | soft | ghost | subtle | link
 * 颜色：primary | secondary | neutral | success | info | warning | error
 * 动效（Nuxt UI 模式）：hover / active 仅颜色过渡，无位移与缩放，loading 图标旋转
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, ref, useAttrs } from 'vue'
import { LoaderCircle } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost' | 'subtle' | 'link'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ButtonUi {
  base?: string
  label?: string
  leadingIcon?: string
  trailingIcon?: string
}

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

/** 语义色样式：每个颜色提供六种变体的完整 class（字面量，保证 Tailwind 可扫描，透明度用法与 Nuxt UI 一致） */
const buttonColorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    solid: 'bg-primary text-background hover:bg-primary/75 active:bg-primary/75',
    outline: 'border-0 ring-1 ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10',
    soft: 'bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/15',
    ghost: 'text-primary hover:bg-primary/10 active:bg-primary/10',
    subtle: 'text-primary ring-1 ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15',
    link: 'text-primary underline-offset-4 hover:text-primary/75',
  },
  secondary: {
    solid: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border-0 ring-1 ring-inset ring-border text-foreground hover:bg-muted',
    soft: 'bg-muted text-secondary-foreground hover:bg-secondary',
    ghost: 'text-secondary-foreground hover:bg-muted',
    subtle: 'text-secondary-foreground ring-1 ring-inset ring-border bg-muted hover:bg-secondary',
    link: 'text-secondary-foreground underline-offset-4 hover:underline',
  },
  neutral: {
    solid: 'bg-foreground text-background hover:bg-foreground/75 active:bg-foreground/75',
    outline: 'border-0 ring-1 ring-inset ring-border text-foreground hover:bg-muted active:bg-border',
    soft: 'bg-muted text-foreground hover:bg-border active:bg-border',
    ghost: 'text-foreground hover:bg-muted active:bg-border',
    subtle: 'text-foreground ring-1 ring-inset ring-border bg-muted hover:bg-border',
    link: 'text-foreground underline-offset-4 hover:underline',
  },
  success: {
    solid: 'bg-success text-background hover:bg-success/75 active:bg-success/75',
    outline: 'border-0 ring-1 ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10',
    soft: 'bg-success/10 text-success hover:bg-success/15 active:bg-success/15',
    ghost: 'text-success hover:bg-success/10 active:bg-success/10',
    subtle: 'text-success ring-1 ring-inset ring-success/25 bg-success/10 hover:bg-success/15',
    link: 'text-success underline-offset-4 hover:text-success/75',
  },
  info: {
    solid: 'bg-info text-background hover:bg-info/75 active:bg-info/75',
    outline: 'border-0 ring-1 ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10',
    soft: 'bg-info/10 text-info hover:bg-info/15 active:bg-info/15',
    ghost: 'text-info hover:bg-info/10 active:bg-info/10',
    subtle: 'text-info ring-1 ring-inset ring-info/25 bg-info/10 hover:bg-info/15',
    link: 'text-info underline-offset-4 hover:text-info/75',
  },
  warning: {
    solid: 'bg-warning text-background hover:bg-warning/75 active:bg-warning/75',
    outline: 'border-0 ring-1 ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10',
    soft: 'bg-warning/10 text-warning hover:bg-warning/15 active:bg-warning/15',
    ghost: 'text-warning hover:bg-warning/10 active:bg-warning/10',
    subtle: 'text-warning ring-1 ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15',
    link: 'text-warning underline-offset-4 hover:text-warning/75',
  },
  error: {
    solid: 'bg-error text-background hover:bg-error/75 active:bg-error/75',
    outline: 'border-0 ring-1 ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10',
    soft: 'bg-error/10 text-error hover:bg-error/15 active:bg-error/15',
    ghost: 'text-error hover:bg-error/10 active:bg-error/10',
    subtle: 'text-error ring-1 ring-inset ring-error/25 bg-error/10 hover:bg-error/15',
    link: 'text-error underline-offset-4 hover:text-error/75',
  },
}

/** 方形按钮（仅图标）尺寸映射 */
const atomSquareSizeMap: Record<ButtonSize, 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg'> = {
  xs: 'icon-xs',
  sm: 'icon-sm',
  md: 'icon',
  lg: 'icon-lg',
  xl: 'icon-lg',
}

/** xl 尺寸补足：在原子 lg 基础上加高加宽 */
const sizeOverrides: Partial<Record<ButtonSize, string>> = {
  xl: 'h-10 gap-2 px-4 text-base',
}

/** xl 方形补足 */
const squareSizeOverrides: Partial<Record<ButtonSize, string>> = {
  xl: 'size-10',
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
  /** 撑满父容器宽度 */
  block?: boolean
  /** 方形按钮，图标场景等边距 */
  square?: boolean
  /** 文本内容（等价于默认插槽） */
  label?: string
  /** 激活态：配合 activeColor / activeVariant 使用 */
  active?: boolean
  /** 激活态颜色 */
  activeColor?: ButtonColor
  /** 激活态样式 */
  activeVariant?: ButtonVariant
  /** 点击回调返回 Promise 时自动进入加载态 */
  loadingAuto?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: ButtonUi
  class?: HTMLAttributes['class']
}>(), {
  variant: 'solid',
  size: 'md',
  color: 'primary',
  loading: false,
  block: false,
  square: false,
  active: false,
  loadingAuto: false,
})

defineOptions({ name: 'XButton', inheritAttrs: false })

const attrs = useAttrs()

/** loadingAuto：点击回调返回 Promise 时自动进入加载态 */
const autoLoading = ref(false)
const isLoading = computed(() => props.loading || autoLoading.value)
const isDisabled = computed(() => isLoading.value || (attrs.disabled as boolean) === true)

function onClick(event: MouseEvent) {
  const handler = attrs.onClick as
    | ((event: MouseEvent) => unknown)
    | Array<(event: MouseEvent) => unknown>
    | undefined
  if (handler == null) return

  /* 透传的处理器可能是数组（上层 as-child 合并后），逐个调用 */
  const handlers = Array.isArray(handler) ? handler : [handler]
  const results = handlers.map((fn) => fn(event))
  if (!props.loadingAuto) return

  const pending = results.filter(
    (result): result is Promise<unknown> =>
      result != null && typeof (result as Promise<unknown>).then === 'function',
  )
  if (pending.length === 0) return
  autoLoading.value = true
  void Promise.all(pending).finally(() => {
    autoLoading.value = false
  })
}

/** 透传属性：onClick 换成包装后的处理函数，其余原样透传 */
const forwardedAttrs = computed(() => ({ ...attrs, onClick }))

/** 激活态颜色与样式覆盖 */
const activeVariant = computed(() => (props.active && props.activeVariant ? props.activeVariant : props.variant))
const activeColor = computed(() => (props.active && props.activeColor ? props.activeColor : props.color))
</script>

<template>
  <Primitive
    :as="as ?? 'button'"
    v-bind="forwardedAttrs"
    :data-slot="(attrs['data-slot'] as string | undefined) ?? 'button'"
    :data-variant="atomVariantMap[activeVariant]"
    :data-size="square ? atomSquareSizeMap[size] : atomSizeMap[size]"
    :class="cn(
      buttonVariants({ variant: atomVariantMap[activeVariant], size: square ? atomSquareSizeMap[size] : atomSizeMap[size] }),
      buttonColorStyles[activeColor][activeVariant],
      square ? squareSizeOverrides[size] : sizeOverrides[size],
      block && 'w-full',
      isLoading && 'opacity-60',
      props.ui?.base,
      props.class,
    )"
    :disabled="isDisabled"
    :aria-busy="isLoading || undefined"
  >
    <LoaderCircle
      v-if="isLoading"
      :class="cn('animate-spin', props.ui?.leadingIcon)"
      aria-hidden="true"
    />
    <slot v-else name="leading" />
    <span v-if="label != null || $slots.default" :class="cn('truncate', props.ui?.label)">
      <slot>{{ label }}</slot>
    </span>
    <slot name="trailing" />
  </Primitive>
</template>
