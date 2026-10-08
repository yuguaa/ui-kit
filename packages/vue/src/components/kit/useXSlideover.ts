/**
 * useXSlideover：创建与 api 绑定的侧滑面板。
 * 用法：const [Slideover, slideoverApi] = useXSlideover({ title: '...' })
 */
import { defineComponent, h, reactive, ref } from 'vue'
import XSlideover from './XSlideover.vue'

/** 可由 api 管理的侧滑面板状态 */
export interface XSlideoverState {
  title?: string
  side?: 'left' | 'right'
  loading?: boolean
}

export interface XSlideoverApi {
  /** 打开 */
  open: () => void
  /** 关闭 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、方向、加载态等） */
  setState: (patch: XSlideoverState) => void
  /** 写入共享数据，供面板内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
  /** 进入锁定（加载）状态：阻止手动关闭 */
  lock: () => void
  /** 解除锁定 */
  unlock: () => void
}

export function useXSlideover(options: XSlideoverState & { defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
    side: options.side,
    loading: options.loading,
  })

  /** 与面板共享的数据载荷 */
  const payload = ref<Record<string, unknown>>({})

  const Slideover = defineComponent({
    name: 'XSlideoverBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XSlideover,
          {
            ...attrs,
            open: state.open,
            title: state.title ?? (attrs.title as string | undefined),
            side: state.side ?? (attrs.side as 'left' | 'right' | undefined),
            loading: state.loading ?? (attrs.loading as boolean | undefined),
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
    setData: <T extends object = Record<string, unknown>>(data: T) => {
      payload.value = data as Record<string, unknown>
    },
    getData: <T extends object = Record<string, unknown>>() => payload.value as T,
    lock: () => {
      state.loading = true
    },
    unlock: () => {
      state.loading = false
    },
  }

  return [Slideover, api] as const
}
