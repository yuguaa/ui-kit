/**
 * useXModal：创建与 api 绑定的对话框。
 * 用法：const [Modal, modalApi] = useXModal({ title: '...' })
 */
import { defineComponent, h, reactive, ref } from 'vue'
import XModal from './XModal.vue'

/** 可由 api 管理的对话框状态 */
export interface XModalState {
  title?: string
  description?: string
  width?: number
  centered?: boolean
  loading?: boolean
}

export interface XModalApi {
  /** 打开对话框 */
  open: () => void
  /** 关闭对话框 */
  close: () => void
  /** 切换开合 */
  toggle: () => void
  /** 更新内部状态（标题、说明、宽度、加载态等） */
  setState: (patch: XModalState) => void
  /** 写入共享数据，供对话框内容读取 */
  setData: <T extends object = Record<string, unknown>>(payload: T) => void
  /** 读取共享数据 */
  getData: <T extends object = Record<string, unknown>>() => T
  /** 进入锁定（加载）状态：确定按钮 loading，阻止手动关闭 */
  lock: () => void
  /** 解除锁定 */
  unlock: () => void
}

export function useXModal(options: XModalState & { defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
    description: options.description,
    width: options.width,
    centered: options.centered,
    loading: options.loading,
  })

  /** 与对话框共享的数据载荷 */
  const payload = ref<Record<string, unknown>>({})

  const Modal = defineComponent({
    name: 'XModalBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XModal,
          {
            ...attrs,
            open: state.open,
            title: state.title ?? (attrs.title as string | undefined),
            description: state.description ?? (attrs.description as string | undefined),
            width: state.width ?? (attrs.width as number | undefined),
            centered: state.centered ?? (attrs.centered as boolean | undefined),
            loading: state.loading ?? (attrs.loading as boolean | undefined),
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

  return [Modal, api] as const
}
