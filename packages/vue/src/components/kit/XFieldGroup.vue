<script setup lang="ts">
/**
 * XFieldGroup 字段组：将多个字段组合为一行或一组。
 * orientation 控制排列方向（horizontal 同行 / vertical 纵向堆叠），
 * inline 作为旧属性保留：未传 orientation 时由 inline 决定方向。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

type FieldGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FieldGroupOrientation = 'horizontal' | 'vertical'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface FieldGroupUi {
  root?: string
}

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 尺寸（控制字段间距） */
  size?: FieldGroupSize
  /** 排列方向 */
  orientation?: FieldGroupOrientation
  /** 旧属性：true 等价 orientation="horizontal"，false 等价 vertical */
  inline?: boolean
  /** 主题插槽类名 */
  ui?: FieldGroupUi
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
  inline: true,
})

/** orientation 显式传入时优先，否则回退 inline 的旧语义 */
const resolvedOrientation = computed<FieldGroupOrientation>(
  () => props.orientation ?? (props.inline ? 'horizontal' : 'vertical'),
)

const gapClasses: Record<FieldGroupSize, string> = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-5',
}
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    :data-orientation="resolvedOrientation"
    data-slot="root"
    :class="cn(
      resolvedOrientation === 'horizontal' ? 'flex items-start' : 'flex flex-col',
      gapClasses[size],
      props.ui?.root,
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
