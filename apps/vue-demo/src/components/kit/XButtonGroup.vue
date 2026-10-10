<script setup lang="ts">
/**
 * XButtonGroup 按钮组：将多个按钮水平/垂直拼接为一个整体。
 * 相邻按钮共享边框与圆角，首尾按钮保留外圆角；
 * as 渲染为指定元素或组件，ui.root 定制根元素类名。
 */
import type { Component, HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ButtonGroupUi {
  root?: string
}

const props = withDefaults(defineProps<{
  /** 排列方向 */
  orientation?: 'horizontal' | 'vertical'
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: ButtonGroupUi
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
  as: 'div',
})

defineOptions({ name: 'XButtonGroup', inheritAttrs: false })
</script>

<template>
  <Primitive
    :as="as"
    v-bind="$attrs"
    role="group"
    data-slot="button-group"
    :data-orientation="orientation"
    :class="cn(
      'inline-flex',
      orientation === 'horizontal'
        ? 'flex-row items-center [&>*+*]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none'
        : 'flex-col items-stretch [&>*+*]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none',
      ui?.root,
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
