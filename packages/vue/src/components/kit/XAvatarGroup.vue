<script setup lang="ts">
/**
 * XAvatarGroup 头像组：将多个头像重叠排列展示，超出 max 折叠为 +N。
 */
import type { HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import { cn } from '@/lib/utils'

type AvatarGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  /** 最多显示数量 */
  max?: number
  /** 头像尺寸 */
  size?: AvatarGroupSize
  class?: HTMLAttributes['class']
}>(), {
  max: 4,
  size: 'md',
})

const slots = useSlots()

const sizeClasses: Record<AvatarGroupSize, string> = {
  xs: 'size-5 text-[10px]',
  sm: 'size-6 text-xs',
  md: 'size-8 text-sm',
  lg: 'size-10 text-base',
  xl: 'size-12 text-lg',
}

/** 全部子节点、可见部分与溢出数量 */
const children = computed(() => slots.default?.() ?? [])
const visibleNodes = computed(() => children.value.slice(0, Math.max(props.max - 1, 1)))
const overflowCount = computed(() => Math.max(children.value.length - visibleNodes.value.length, 0))
</script>

<template>
  <div :class="cn('inline-flex items-center -space-x-2', props.class)">
    <span
      v-for="(node, index) in visibleNodes"
      :key="index"
      class="relative inline-flex rounded-full ring-2 ring-background"
    >
      <component :is="node" />
    </span>
    <slot v-if="overflowCount > 0" name="plus">
      <span
        :class="cn(
          'relative z-1 inline-flex items-center justify-center rounded-full border border-border bg-muted font-medium text-muted-foreground ring-2 ring-background',
          sizeClasses[size],
        )"
      >
        +{{ overflowCount }}
      </span>
    </slot>
  </div>
</template>
