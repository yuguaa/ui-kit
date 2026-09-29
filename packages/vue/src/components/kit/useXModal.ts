/**
 * useXModal：创建与 api 绑定的对话框。
 * 用法：const [Modal, modalApi] = useXModal({ title: '...' })
 */
import { defineComponent, h, reactive } from 'vue'
import XModal from './XModal.vue'

export interface XModalApi {
  /** 打开对话框 */
  open: () => void
  /** 关闭对话框 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、说明等） */
  setState: (patch: { title?: string; description?: string }) => void
}

export function useXModal(options: { title?: string; description?: string; defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
    description: options.description,
  })

  const Modal = defineComponent({
    name: 'XModalBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XModal,
          {
            ...attrs,
            open: state.open,
            title: state.title,
            description: state.description,
            'onUpdate:open': (open: boolean) => {
              state.open = open
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XModalApi = {
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

  return [Modal, api] as const
}
