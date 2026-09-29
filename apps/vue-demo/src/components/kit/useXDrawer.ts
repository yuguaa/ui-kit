/**
 * useXDrawer：创建与 api 绑定的抽屉。
 * 用法：const [Drawer, drawerApi] = useXDrawer({ title: '...' })
 */
import { defineComponent, h, reactive } from 'vue'
import XDrawer from './XDrawer.vue'

export interface XDrawerApi {
  /** 打开抽屉 */
  open: () => void
  /** 关闭抽屉 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题等） */
  setState: (patch: { title?: string }) => void
}

export function useXDrawer(options: { title?: string; defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
  })

  const Drawer = defineComponent({
    name: 'XDrawerBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XDrawer,
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

  const api: XDrawerApi = {
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

  return [Drawer, api] as const
}
