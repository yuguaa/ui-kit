<script setup lang="ts">
/**
 * XContainer 容器：约束内容宽度的居中布局容器。
 */
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  /** 最大宽度 */
  size?: ContainerSize
  /** 渲染标签 */
  as?: string
  class?: HTMLAttributes['class']
}>(), {
  size: 'lg',
  as: 'div',
})

/** 最大宽度：640 / 768 / 1024 / 1280 / 1536 */
const sizeClasses: Record<ContainerSize, string> = {
  xs: 'max-w-160',
  sm: 'max-w-192',
  md: 'max-w-256',
  lg: 'max-w-320',
  xl: 'max-w-384',
}
</script>

<template>
  <component :is="as" :class="cn('mx-auto w-full px-4', sizeClasses[size], props.class)">
    <slot />
  </component>
</template>
