<script setup lang="ts">
/**
 * XSkeleton 骨架屏：内容加载时的占位骨架。
 * loading 为 true 时渲染骨架，为 false 时渲染默认插槽中的真实内容。
 * 骨架元素带 aria-busy / aria-label / aria-live / role 无障碍标记。
 */
import type { Component, HTMLAttributes } from 'vue'
import { useAttrs } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

type SkeletonVariant = 'text' | 'circle' | 'rect'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface SkeletonUi {
  base?: string
}

const props = withDefaults(defineProps<{
  /** 是否显示骨架 */
  loading?: boolean
  /** 形状 */
  variant?: SkeletonVariant
  /** 宽度（覆盖 variant 默认宽度） */
  width?: number | string
  /** 高度（覆盖 variant 默认高度） */
  height?: number | string
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: SkeletonUi
  class?: HTMLAttributes['class']
}>(), {
  loading: true,
  variant: 'rect',
  as: 'div',
})

defineOptions({ name: 'XSkeleton', inheritAttrs: false })

const attrs = useAttrs()

const variantClasses: Record<SkeletonVariant, string> = {
  text: 'h-4 w-full',
  circle: 'size-10 rounded-full',
  rect: 'h-24 w-full rounded-md',
}
</script>

<template>
  <Primitive
    v-if="loading"
    :as="as"
    v-bind="attrs"
    data-slot="skeleton"
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="alert"
    :class="cn('animate-pulse rounded-md bg-muted', variantClasses[variant], ui?.base, props.class)"
    :style="[{ width, height }, attrs.style]"
  >
    <slot />
  </Primitive>
  <slot v-else />
</template>
