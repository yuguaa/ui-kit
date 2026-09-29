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

export function useXCarousel(options: { items?: CarouselDataItem[]; autoplay?: boolean; interval?: number; loop?: boolean; disabled?: boolean } = {}) {
  const carouselRef = ref<InstanceType<typeof XCarousel>>()

  const Carousel = defineComponent({
    name: 'XCarouselBound',
    setup(_, { attrs, slots }) {
      return () => h(XCarousel, { ...attrs, ...options, ref: carouselRef } as never, slots as never)
    },
  })

  const api: XCarouselApi = {
    next: () => {
      carouselRef.value?.$el?.querySelector('[aria-label=下一张]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    },
    prev: () => {
      carouselRef.value?.$el?.querySelector('[aria-label=上一张]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    },
  }

  return [Carousel, api] as const
}
