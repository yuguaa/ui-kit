/**
 * useXCarousel：创建与 api 绑定的轮播。
 * 用法：const [Carousel, carouselApi] = useXCarousel({ items: [...] })
 */
import { defineComponent, h, ref } from 'vue'
import type { CarouselDataItem } from './XCarousel.vue'
import XCarousel from './XCarousel.vue'

export interface XCarouselApi {
  /** 下一张 */
  next: () => void
  /** 上一张 */
  prev: () => void
}

/** XCarousel 通过 defineExpose 暴露的实例方法 */
interface XCarouselExposed {
  next: () => void
  prev: () => void
}

export function useXCarousel(options: {
  items?: CarouselDataItem[]
  autoplay?: boolean
  interval?: number
  loop?: boolean
  disabled?: boolean
  arrows?: boolean
  dots?: boolean
  orientation?: 'horizontal' | 'vertical'
  fade?: boolean
  autoHeight?: boolean
  autoScroll?: boolean | { speed?: number; direction?: 'forward' | 'backward' }
  wheelGestures?: boolean | { forceWheelAxis?: 'x' | 'y' }
} = {}) {
  const carouselRef = ref<XCarouselExposed>()

  const Carousel = defineComponent({
    name: 'XCarouselBound',
    setup(_, { attrs, slots }) {
      return () => h(XCarousel, { ...attrs, ...options, ref: carouselRef } as never, slots as never)
    },
  })

  const api: XCarouselApi = {
    next: () => carouselRef.value?.next(),
    prev: () => carouselRef.value?.prev(),
  }

  return [Carousel, api] as const
}
