/**
 * useXSlideover：创建与 api 绑定的侧滑面板。
 * 用法：const [Slideover, slideoverApi] = useXSlideover({ title: '...' })
 */
import { defineComponent, h, reactive } from 'vue'
import XSlideover from './XSlideover.vue'

export interface XSlideoverApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题等） */
  setState: (patch: { title?: string }) => void
}

export function useXSlideover(options: { title?: string; defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
  })

  const Slideover = defineComponent({
    name: 'XSlideoverBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XSlideover,
          {
            ...attrs,
            open: state.open,
            title: state.title,
            'onUpdate:open': (open: boolean) => {
              state.open = open
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XSlideoverApi = {
    open: () => {
      state.open = true
    },
    close: () => {
      state.open = false
    },
    toggle: () => {
      state.open = !state.open
    },
    setState: (patch) => Object.assign(state, patch),
  }

  return [Slideover, api] as const
}
