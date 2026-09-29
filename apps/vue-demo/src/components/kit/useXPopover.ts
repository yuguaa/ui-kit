/**
 * useXPopover：创建与 api 绑定的气泡。
 * 用法：const [Popover, popoverApi] = useXPopover({ title: '...', content: '...' })
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
  /** 更新内部状态（标题、内容等） */
  setState: (patch: { title?: string; content?: string; side?: 'top' | 'bottom' | 'left' | 'right' }) => void
}

export function useXPopover(
  options: { title?: string; content?: string; side?: 'top' | 'bottom' | 'left' | 'right'; defaultOpen?: boolean } = {},
) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
    content: options.content,
    side: options.side ?? 'top',
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
            title: state.title,
            side: state.side,
            'onUpdate:open': (open: boolean) => {
              state.open = open
            },
          } as never,
          {
            trigger: slots.trigger,
            content: slots.content ?? (() => state.content),
          } as never,
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
    setState: (patch) => Object.assign(state, patch),
  }

  return [Popover, api] as const
}
