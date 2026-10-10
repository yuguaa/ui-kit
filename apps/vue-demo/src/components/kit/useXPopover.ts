/**
 * useXPopover：创建与 api 绑定的气泡。
 * 用法：const [Popover, popoverApi] = useXPopover()
 */
import { defineComponent, h, reactive } from 'vue'
import XPopover from './XPopover.vue'

export interface XPopoverApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

export function useXPopover(options: { defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
  })

  const Popover = defineComponent({
    name: 'XPopoverBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XPopover,
          {
            ...attrs,
            open: state.open,
            'onUpdate:open': (open: boolean) => {
              state.open = open
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XPopoverApi = {
    open: () => {
      state.open = true
    },
    close: () => {
      state.open = false
    },
    toggle: () => {
      state.open = !state.open
    },
  }

  return [Popover, api] as const
}
