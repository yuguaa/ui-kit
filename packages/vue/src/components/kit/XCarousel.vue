<script setup lang="ts">
/**
 * XCarousel 轮播：多张内容横向轮播展示。
 * 基于 shadcn-vue carousel（embla），支持自动播放、循环与前后控制。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

export interface CarouselDataItem {
  /** 轮播项 key */
  key: string
}

const props = withDefaults(defineProps<{
  /** 轮播项数组 */
  items: CarouselDataItem[]
  /** 自动播放 */
  autoplay?: boolean
  /** 自动播放间隔（ms） */
  interval?: number
  /** 循环播放 */
  loop?: boolean
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  autoplay: false,
  interval: 3000,
  loop: true,
  disabled: false,
})

const emit = defineEmits<{
  /** 下一张 */
  next: []
  /** 上一张 */
  prev: []
}>()
const plugins = computed(() =>
  props.autoplay ? [Autoplay({ delay: props.interval, stopOnInteraction: true })] : undefined,
)
</script>

<template>
  <div :class="cn('relative w-full', disabled && 'pointer-events-none opacity-50', props.class)">
    <Carousel v-slot="{ scrollPrev, scrollNext }" :opts="{ loop, align: 'start' }" :plugins="plugins">
      <CarouselContent>
        <CarouselItem v-for="item in items" :key="item.key" class="basis-full">
          <slot name="item" :item="item" />
        </CarouselItem>
      </CarouselContent>
      <div class="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-1">
        <slot name="prev">
          <XButton
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="上一张"
            class="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
            @click="scrollPrev(); emit('prev')"
          >
            <ChevronLeft class="size-4" />
          </XButton>
        </slot>
        <slot name="next">
          <XButton
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="下一张"
            class="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
            @click="scrollNext(); emit('next')"
          >
            <ChevronRight class="size-4" />
          </XButton>
        </slot>
      </div>
    </Carousel>
  </div>
</template>
