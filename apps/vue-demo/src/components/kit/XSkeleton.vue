<script setup lang="ts">
/**
 * XSkeleton 骨架屏：内容加载时的占位骨架。
 */
import type { HTMLAttributes } from 'vue'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

type SkeletonVariant = 'text' | 'circle' | 'rect'

const props = withDefaults(defineProps<{
  /** 是否显示骨架 */
  loading?: boolean
  /** 形状 */
  variant?: SkeletonVariant
  /** 宽度（覆盖 variant 默认宽度） */
  width?: number | string
  /** 高度（覆盖 variant 默认高度） */
  height?: number | string
  class?: HTMLAttributes['class']
}>(), {
  loading: true,
  variant: 'rect',
})

const variantClasses: Record<SkeletonVariant, string> = {
  text: 'h-4 w-full',
  circle: 'size-10 rounded-full',
  rect: 'h-24 w-full rounded-md',
}
</script>

<template>
  <template v-if="loading">
    <Skeleton :class="cn(variantClasses[variant], props.class)" :style="{ width, height }" />
  </template>
  <slot v-else />
</template>
