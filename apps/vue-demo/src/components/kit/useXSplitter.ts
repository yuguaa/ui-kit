/**
 * useXSplitter：创建与 api 绑定的分割面板。
 * 用法：const [Splitter, splitterApi] = useXSplitter()
 */
import { defineComponent, h, reactive } from 'vue'
import XSplitter from './XSplitter.vue'

export interface XSplitterApi {
  /** 当前尺寸（百分比） */
  size: number
  /** 调整尺寸 */
  resize: (size: number) => void
}

export function useXSplitter(options: { defaultSize?: number; minSize?: number; orientation?: 'horizontal' | 'vertical' } = {}) {
  const { defaultSize = 50, ...componentProps } = options
  const state = reactive({ size: defaultSize })

  const Splitter = defineComponent({
    name: 'XSplitterBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XSplitter,
          {
            ...attrs,
            ...componentProps,
            size: state.size,
            onResize: (size: number) => {
              state.size = size
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XSplitterApi = {
    get size() {
      return state.size
    },
    resize: (size: number) => {
      state.size = size
    },
  }

  return [Splitter, api] as const
}
