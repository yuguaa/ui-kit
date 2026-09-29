/**
 * useXDropdownMenu：创建与 api 绑定的下拉菜单。
 * 用法：const [DropdownMenu, menuApi] = useXDropdownMenu({ items: [...] })
 */
import { defineComponent, h, reactive } from 'vue'
import XDropdownMenu from './XDropdownMenu.vue'

export interface XDropdownMenuApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
}

export function useXDropdownMenu(options: { defaultOpen?: boolean } = {}) {
  const state = reactive({ open: options.defaultOpen ?? false })

  const DropdownMenu = defineComponent({
    name: 'XDropdownMenuBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XDropdownMenu,
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

  const api: XDropdownMenuApi = {
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

  return [DropdownMenu, api] as const
}
