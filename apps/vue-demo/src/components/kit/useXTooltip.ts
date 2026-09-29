/**
 * useXTooltip：创建与 api 绑定的提示气泡。
 * 用法：const [Tooltip, tooltipApi] = useXTooltip({ title: '...' })
 */
import { defineComponent, h, reactive } from 'vue'
import XTooltip from './XTooltip.vue'

export interface XTooltipApi {
  /** 显示提示气泡 */
  show: () => void
  /** 隐藏提示气泡 */
  hide: () => void
  /** 切换显示状态 */
  toggle: () => void
  /** 更新提示内容 */
  setState: (patch: { title?: string; placement?: 'top' | 'bottom' | 'left' | 'right' }) => void
}

export function useXTooltip(options: { title?: string; placement?: 'top' | 'bottom' | 'left' | 'right'; defaultOpen?: boolean } = {}) {
  const state = reactive({
    open: options.defaultOpen ?? false,
    title: options.title,
    placement: options.placement ?? 'top',
  })

  const Tooltip = defineComponent({
    name: 'XTooltipBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XTooltip,
          {
            ...attrs,
            open: state.open,
            title: state.title,
            placement: state.placement,
            'onUpdate:open': (open: boolean) => {
              state.open = open
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XTooltipApi = {
    show: () => {
      state.open = true
    },
    hide: () => {
      state.open = false
    },
    toggle: () => {
      state.open = !state.open
    },
    setState: (patch) => Object.assign(state, patch),
  }

  return [Tooltip, api] as const
}
