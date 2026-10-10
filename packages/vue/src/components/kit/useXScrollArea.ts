/**
 * useXScrollArea：创建与 api 绑定的滚动区域。
 * 用法：const [ScrollArea, scrollAreaApi] = useXScrollArea({ height: 200 })
 */
import { defineComponent, h, ref } from 'vue'
import XScrollArea from './XScrollArea.vue'

export interface XScrollAreaApi {
  /** 滚动到指定位置（垂直为 top，水平为 left） */
  scrollTo: (position: number) => void
}

export function useXScrollArea(options: {
  height?: number | string
  orientation?: 'vertical' | 'horizontal' | 'both'
  items?: any[]
  virtualize?: boolean | { estimateSize?: number | ((index: number) => number); overscan?: number }
  shadow?: boolean | { size?: number }
} = {}) {
  const areaRef = ref<InstanceType<typeof XScrollArea>>()

  const ScrollArea = defineComponent({
    name: 'XScrollAreaBound',
    setup(_, { attrs, slots }) {
      return () => h(XScrollArea, { ...attrs, ...options, ref: areaRef }, slots)
    },
  })

  const api: XScrollAreaApi = {
    scrollTo: (position: number) => {
      areaRef.value?.scrollTo(position)
    },
  }

  return [ScrollArea, api] as const
}
