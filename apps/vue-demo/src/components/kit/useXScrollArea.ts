/**
 * useXScrollArea：创建与 api 绑定的滚动区域。
 * 用法：const [ScrollArea, scrollAreaApi] = useXScrollArea({ height: 200 })
 */
import { defineComponent, h, ref } from 'vue'
import XScrollArea from './XScrollArea.vue'

export interface XScrollAreaApi {
  /** 滚动到指定位置 */
  scrollTo: (top: number) => void
}

export function useXScrollArea(options: { height?: number | string; type?: 'auto' | 'always' | 'hover' } = {}) {
  const areaRef = ref<InstanceType<typeof XScrollArea>>()

  const ScrollArea = defineComponent({
    name: 'XScrollAreaBound',
    setup(_, { attrs, slots }) {
      return () => h(XScrollArea, { ...attrs, ...options, ref: areaRef }, slots)
    },
  })

  const api: XScrollAreaApi = {
    scrollTo: (top: number) => {
      areaRef.value?.$el?.querySelector('[data-slot=scroll-area-viewport]')?.scrollTo({ top })
    },
  }

  return [ScrollArea, api] as const
}
