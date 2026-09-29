/**
 * useXCollapsible：创建与 api 绑定的折叠。
 * 用法：const [Collapsible, collapsibleApi] = useXCollapsible()
 */
import { defineComponent, h, reactive } from 'vue'
import XCollapsible from './XCollapsible.vue'

export interface XCollapsibleApi {
  /** 是否展开 */
  open: boolean
  /** 切换展开状态 */
  toggle: () => void
  /** 设置展开状态 */
  setOpen: (open: boolean) => void
}

export function useXCollapsible(options: { defaultOpen?: boolean; disabled?: boolean } = {}) {
  const { defaultOpen = false, ...componentProps } = options
  const state = reactive({ open: defaultOpen })

  const Collapsible = defineComponent({
    name: 'XCollapsibleBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XCollapsible,
          {
            ...attrs,
            ...componentProps,
            open: state.open,
            'onUpdate:open': (open: boolean) => {
              state.open = open
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XCollapsibleApi = {
    get open() {
      return state.open
    },
    toggle: () => {
      state.open = !state.open
    },
    setOpen: (open) => {
      state.open = open
    },
  }

  return [Collapsible, api] as const
}
