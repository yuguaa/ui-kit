/**
 * useXStepper：创建与 api 绑定的步骤条。
 * 用法：const [Stepper, stepperApi] = useXStepper({ items: [...] })
 */
import { defineComponent, h, reactive } from 'vue'
import type { StepItem } from './XStepper.vue'
import XStepper from './XStepper.vue'

export interface XStepperApi {
  /** 当前步骤 */
  current: number
  /** 下一步 */
  next: () => void
  /** 上一步 */
  prev: () => void
  /** 重置 */
  reset: () => void
  /** 跳转到指定步骤 */
  go: (index: number) => void
}

export function useXStepper(options: { items?: StepItem[]; defaultCurrent?: number; orientation?: 'horizontal' | 'vertical'; disabled?: boolean } = {}) {
  const { defaultCurrent = 0, ...componentProps } = options
  const state = reactive({ current: defaultCurrent })

  const itemsCount = options.items?.length ?? 0

  function go(index: number) {
    if (index < 0 || index >= itemsCount) return
    state.current = index
  }

  const Stepper = defineComponent({
    name: 'XStepperBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XStepper,
          {
            ...attrs,
            ...componentProps,
            current: state.current,
            onChange: (current: number) => {
              state.current = current
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XStepperApi = {
    get current() {
      return state.current
    },
    next: () => go(state.current + 1),
    prev: () => go(state.current - 1),
    reset: () => go(0),
    go,
  }

  return [Stepper, api] as const
}
