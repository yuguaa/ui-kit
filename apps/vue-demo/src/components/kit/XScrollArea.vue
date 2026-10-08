<script setup lang="ts">
/**
 * XScrollArea 滚动区域：内容溢出时可滚动的区域。
 */
import type { HTMLAttributes } from 'vue'
import { useTemplateRef } from 'vue'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  /** 区域高度 */
  height?: number | string
  /** 滚动条显示时机 */
  type?: 'auto' | 'always' | 'hover'
  /** 滚动方向 */
  orientation?: 'vertical' | 'horizontal' | 'both'
  class?: HTMLAttributes['class']
}>(), {
  type: 'auto',
  orientation: 'vertical',
})

const viewportRef = useTemplateRef<HTMLDivElement>('viewportRef')

/** 滚动到指定位置 */
function scrollTo(top: number) {
  viewportRef.value?.scrollTo({ top })
}

defineExpose({ scrollTo })
</script>

<template>
  <ScrollArea
    v-bind="$attrs"
    :class="cn(
      'w-full',
      type === 'always' && '[&_[data-slot=scroll-area-scrollbar]]:opacity-100',
      type === 'hover' && '[&_[data-slot=scroll-area-scrollbar]]:opacity-0 hover:[&_[data-slot=scroll-area-scrollbar]]:opacity-100',
      props.class,
    )"
    :style="height != null ? { height: typeof height === 'number' ? `${height}px` : height } : undefined"
  >
    <div
      ref="viewportRef"
      :class="cn(
        'flex gap-1 p-1',
        orientation === 'vertical' && 'flex-col',
        orientation === 'horizontal' && 'w-max flex-row',
        orientation === 'both' && 'w-max flex-col',
      )"
    >
      <slot />
    </div>
    <ScrollBar v-if="orientation !== 'horizontal'" />
    <ScrollBar v-if="orientation !== 'vertical'" orientation="horizontal" />
  </ScrollArea>
</template>
