<script setup lang="ts">
/**
 * XContainer 容器：约束内容宽度的居中布局容器。
 * 五档最大宽度：xs 640 / sm 768 / md 1024 / lg 1280 / xl 1536。
 */
import type { Component, HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ContainerUi {
  base?: string
}

const props = withDefaults(defineProps<{
  /** 最大宽度 */
  size?: ContainerSize
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: ContainerUi
  class?: HTMLAttributes['class']
}>(), {
  size: 'lg',
  as: 'div',
})

defineOptions({ name: 'XContainer', inheritAttrs: false })

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
  <Primitive
    :as="as"
    v-bind="$attrs"
    data-slot="container"
    :class="cn('mx-auto w-full px-4', sizeClasses[size], ui?.base, props.class)"
  >
    <slot />
  </Primitive>
</template>
