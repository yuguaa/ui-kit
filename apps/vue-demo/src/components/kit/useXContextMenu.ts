/**
 * useXContextMenu：创建与 api 绑定的右键菜单。
 * 用法：const [ContextMenu, menuApi] = useXContextMenu({ items: [...] })
 */
import { defineComponent, h, reactive } from 'vue'
import XContextMenu from './XContextMenu.vue'

export interface XContextMenuApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

export function useXContextMenu(options: { defaultOpen?: boolean } = {}) {
  const state = reactive({ open: options.defaultOpen ?? false })

  const ContextMenu = defineComponent({
    name: 'XContextMenuBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XContextMenu,
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

  const api: XContextMenuApi = {
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

  return [ContextMenu, api] as const
}
