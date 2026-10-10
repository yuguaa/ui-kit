/**
 * useXDrawer：创建与 api 绑定的抽屉。
 * 用法：const [Drawer, drawerApi] = useXDrawer({ title: '...' })
 */
import { defineComponent, h, reactive, ref } from 'vue'
import XDrawer from './XDrawer.vue'

/** 可由 api 管理的抽屉状态 */
export interface XDrawerState {
  title?: string
  description?: string
  direction?: 'top' | 'right' | 'bottom' | 'left'
  inset?: boolean
}

export interface XDrawerApi {
  /** 打开抽屉 */
  open: () => void
  /** 关闭抽屉 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、方向、内嵌等） */
  setState: (patch: XDrawerState) => void
  /** 写入共享数据，供抽屉内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
}

export function useXDrawer(options: XDrawerState & { defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
    description: options.description,
    direction: options.direction,
    inset: options.inset,
  })

  /** 与抽屉共享的数据载荷 */
  const payload = ref<Record<string, unknown>>({})

  const Drawer = defineComponent({
    name: 'XDrawerBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XDrawer,
          {
            ...attrs,
            open: state.open,
            title: state.title ?? (attrs.title as string | undefined),
            description: state.description ?? (attrs.description as string | undefined),
            direction: state.direction ?? (attrs.direction as XDrawerState['direction'] | undefined),
            inset: state.inset ?? (attrs.inset as boolean | undefined),
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
    setData: <T extends object = Record<string, unknown>>(data: T) => {
      payload.value = data as Record<string, unknown>
    },
    getData: <T extends object = Record<string, unknown>>() => payload.value as T,
  }

  return [Drawer, api] as const
}
