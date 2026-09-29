/**
 * useXCommandPalette：创建与 api 绑定的命令面板。
 * 用法：const [CommandPalette, paletteApi] = useXCommandPalette({ groups: [...] })
 */
import { defineComponent, h, reactive } from 'vue'
import XCommandPalette from './XCommandPalette.vue'

export interface XCommandPaletteApi {
  /** 打开面板 */
  open: () => void
  /** 关闭面板 */
  close: () => void
  /** 切换开关 */
  toggle: () => void
}

export function useXCommandPalette(options: { defaultOpen?: boolean } = {}) {
  const state = reactive({ open: options.defaultOpen ?? false })

  const CommandPalette = defineComponent({
    name: 'XCommandPaletteBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XCommandPalette,
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

  const api: XCommandPaletteApi = {
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

  return [CommandPalette, api] as const
}
