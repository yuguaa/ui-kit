<script setup lang="ts">
/**
 * XCarousel 轮播：多张内容轮播展示。
 * 基于 shadcn-vue carousel（embla），支持自动播放、循环、前后控制、指示点与纵向轮播。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

export interface CarouselDataItem {
  /** 轮播项 key */
  key: string
}

defineOptions({
  inheritAttrs: false,
})

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
  /** 是否显示左右切换按钮 */
  arrows?: boolean
  /** 是否显示指示点 */
  dots?: boolean
  /** 轮播方向 */
  orientation?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}>(), {
  autoplay: false,
  interval: 3000,
  loop: true,
  disabled: false,
  arrows: true,
  dots: false,
  orientation: 'horizontal',
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

const carouselApi = ref<CarouselApi>()
const selectedIndex = ref(0)

/** 拿到 embla api 后监听选中变化，同步指示点高亮 */
function onInitApi(api: CarouselApi) {
  if (!api)
    return

  carouselApi.value = api
  api.on('select', () => {
    selectedIndex.value = api.selectedScrollSnap()
  })
}

/** 暴露 next / prev 供 useXCarousel 等场景直接驱动轮播 */
function next() {
  carouselApi.value?.scrollNext()
  emit('next')
}

function prev() {
  carouselApi.value?.scrollPrev()
  emit('prev')
}

function scrollTo(index: number) {
  carouselApi.value?.scrollTo(index)
}

defineExpose({ next, prev })
</script>

<template>
  <div :class="cn('relative w-full', disabled && 'pointer-events-none opacity-50', props.class)">
    <Carousel
      v-bind="$attrs"
      :opts="{ loop, align: 'start' }"
      :plugins="plugins"
      :orientation="orientation"
      @init-api="onInitApi"
    >
      <CarouselContent>
        <CarouselItem v-for="item in items" :key="item.key" class="basis-full">
          <slot name="item" :item="item" />
        </CarouselItem>
      </CarouselContent>
      <div
        v-if="arrows"
        :class="cn(
          'absolute flex',
          orientation === 'vertical'
            ? 'inset-y-0 left-1/2 -translate-x-1/2 flex-col justify-between py-1'
            : 'inset-x-0 top-1/2 -translate-y-1/2 justify-between px-1',
        )"
      >
        <slot name="prev">
          <XButton
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="上一张"
            class="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
            @click="prev()"
          >
            <ChevronLeft :class="cn('size-4', orientation === 'vertical' && 'rotate-90')" />
          </XButton>
        </slot>
        <slot name="next">
          <XButton
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="下一张"
            class="size-7 rounded-full p-0 opacity-70 hover:opacity-100"
            @click="next()"
          >
            <ChevronRight :class="cn('size-4', orientation === 'vertical' && 'rotate-90')" />
          </XButton>
        </slot>
      </div>
      <div
        v-if="dots"
        :class="cn(
          'absolute flex gap-1.5',
          orientation === 'vertical'
            ? 'right-3 top-1/2 -translate-y-1/2 flex-col'
            : 'bottom-3 left-1/2 -translate-x-1/2',
        )"
      >
        <button
          v-for="(item, index) in items"
          :key="item.key"
          type="button"
          :aria-label="`跳转到第 ${index + 1} 张`"
          :aria-current="index === selectedIndex ? 'true' : undefined"
          :class="cn(
            'size-2 rounded-full transition-colors',
            index === selectedIndex ? 'bg-primary-6' : 'bg-neutral-4 hover:bg-neutral-5',
          )"
          @click="scrollTo(index)"
        />
      </div>
    </Carousel>
  </div>
</template>
