<script setup lang="ts">
/**
 * XButtonGroup 按钮组：将多个按钮水平/垂直拼接为一个整体。
 * 相邻按钮共享边框与圆角，首尾按钮保留外圆角。
 */
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 排列方向 */
  orientation?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <div
    role="group"
    data-slot="button-group"
    :data-orientation="orientation"
    :class="cn(
      'inline-flex',
      orientation === 'horizontal'
        ? 'flex-row items-center [&>*+*]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none'
        : 'flex-col items-stretch [&>*+*]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
