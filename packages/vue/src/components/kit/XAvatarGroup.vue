<script setup lang="ts">
/**
 * XAvatarGroup 头像组：将多个头像重叠排列展示，超出 max 折叠为 +N。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, provide, useSlots } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import XAvatar from './XAvatar.vue'
import {
  XAvatarGroupColorKey,
  XAvatarGroupSizeKey,
  type AvatarColor,
  type AvatarSize,
} from './XAvatarGroupContext'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface AvatarGroupUi {
  root?: string
  base?: string
}

const props = defineProps<{
  /** 最多显示数量，超出部分折叠为 +N */
  max?: number | string
  /** 头像尺寸，透传给未指定 size 的子头像 */
  size?: AvatarSize
  /** 透传给子头像的语义色（子头像自身指定 color 时不覆盖） */
  color?: AvatarColor
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: AvatarGroupUi
  class?: HTMLAttributes['class']
}>()

defineOptions({ name: 'XAvatarGroup', inheritAttrs: false })

const slots = useSlots()

/** 向子头像透传语义色与尺寸 */
provide(XAvatarGroupColorKey, computed(() => props.color))
provide(XAvatarGroupSizeKey, computed(() => props.size))

/** base 环形描边与负边距（Nuxt avatar-group 主题按尺寸分档） */
const baseSizeClasses: Record<AvatarSize, string> = {
  xs: 'ring -me-0.5',
  sm: 'ring-2 -me-1.5',
  md: 'ring-2 -me-1.5',
  lg: 'ring-2 -me-1.5',
  xl: 'ring-3 -me-2',
}

const baseClass = computed(() =>
  cn('relative rounded-full ring-background', baseSizeClasses[props.size ?? 'md'], props.ui?.base),
)

/** max 支持字符串，与 Nuxt 行为一致（parseInt） */
const maxCount = computed(() => (typeof props.max === 'string' ? Number.parseInt(props.max, 10) : props.max))

/** 全部子节点、可见部分与溢出数量 */
const children = computed(() => {
  const nodes = slots.default?.()
  if (!nodes?.length) return []
  return nodes
    .flatMap((child: any) => {
      /* v-if="false" 产生的注释节点不参与计数 */
      if (typeof child.type === 'symbol') {
        if (typeof child.children === 'string') return []
        return child.children
      }
      return child
    })
    .filter(Boolean)
})
const visibleNodes = computed(() => {
  if (maxCount.value != null && maxCount.value > 0) return children.value.slice(0, maxCount.value)
  return [...children.value]
})
const reversedVisible = computed(() => [...visibleNodes.value].reverse())
const overflowCount = computed(() => children.value.length - visibleNodes.value.length)
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    data-slot="root"
    v-bind="$attrs"
    :class="cn('inline-flex flex-row-reverse justify-end', props.ui?.root, props.class)"
  >
    <span v-if="overflowCount > 0" data-slot="base" :class="baseClass">
      <slot name="plus">
        <XAvatar :size="size ?? 'md'" :text="`+${overflowCount}`" />
      </slot>
    </span>
    <span v-for="(node, index) in reversedVisible" :key="index" data-slot="base" :class="baseClass">
      <component :is="node" />
    </span>
  </Primitive>
</template>
