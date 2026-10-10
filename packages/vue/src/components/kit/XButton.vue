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

/** 语义色样式：每个颜色提供六种变体的完整 class（字面量，保证 Tailwind 可扫描） */
const buttonColorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    solid: 'bg-primary-6 text-white hover:bg-primary-5 active:bg-primary-7',
    outline: 'border-0 ring-1 ring-inset ring-primary-5 text-primary-6 hover:bg-primary-1 active:bg-primary-2',
    soft: 'bg-primary-1 text-primary-7 hover:bg-primary-2 active:bg-primary-3',
    ghost: 'text-primary-6 hover:bg-primary-1 active:bg-primary-2',
    subtle: 'text-primary-6 ring-1 ring-inset ring-primary-2 bg-primary-1 hover:bg-primary-2',
    link: 'text-primary-6 underline-offset-4 hover:underline',
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
    solid: 'bg-success-6 text-white hover:bg-success-5 active:bg-success-7',
    outline: 'border-0 ring-1 ring-inset ring-success-5 text-success-6 hover:bg-success-1 active:bg-success-2',
    soft: 'bg-success-1 text-success-7 hover:bg-success-2 active:bg-success-3',
    ghost: 'text-success-6 hover:bg-success-1 active:bg-success-2',
    subtle: 'text-success-6 ring-1 ring-inset ring-success-2 bg-success-1 hover:bg-success-2',
    link: 'text-success-6 underline-offset-4 hover:underline',
  },
  info: {
    solid: 'bg-info-6 text-white hover:bg-info-5 active:bg-info-7',
    outline: 'border-0 ring-1 ring-inset ring-info-5 text-info-6 hover:bg-info-1 active:bg-info-2',
    soft: 'bg-info-1 text-info-7 hover:bg-info-2 active:bg-info-3',
    ghost: 'text-info-6 hover:bg-info-1 active:bg-info-2',
    subtle: 'text-info-6 ring-1 ring-inset ring-info-2 bg-info-1 hover:bg-info-2',
    link: 'text-info-6 underline-offset-4 hover:underline',
  },
  warning: {
    solid: 'bg-warning-6 text-white hover:bg-warning-5 active:bg-warning-7',
    outline: 'border-0 ring-1 ring-inset ring-warning-5 text-warning-7 hover:bg-warning-1 active:bg-warning-2',
    soft: 'bg-warning-1 text-warning-8 hover:bg-warning-2 active:bg-warning-3',
    ghost: 'text-warning-7 hover:bg-warning-1 active:bg-warning-2',
    subtle: 'text-warning-7 ring-1 ring-inset ring-warning-2 bg-warning-1 hover:bg-warning-2',
    link: 'text-warning-7 underline-offset-4 hover:underline',
  },
  error: {
    solid: 'bg-error-6 text-white hover:bg-error-5 active:bg-error-7',
    outline: 'border-0 ring-1 ring-inset ring-error-5 text-error-6 hover:bg-error-1 active:bg-error-2',
    soft: 'bg-error-1 text-error-7 hover:bg-error-2 active:bg-error-3',
    ghost: 'text-error-6 hover:bg-error-1 active:bg-error-2',
    subtle: 'text-error-6 ring-1 ring-inset ring-error-2 bg-error-1 hover:bg-error-2',
    link: 'text-error-6 underline-offset-4 hover:underline',
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
