/**
 * useXStepper：创建与 api 绑定的步骤条。
 * 用法：const [Stepper, stepperApi] = useXStepper({ items: [...] })
 */
import { defineComponent, h, reactive } from 'vue'
import type { StepperItem } from './XStepper.vue'
import XStepper from './XStepper.vue'

export interface XStepperApi {
  /** 当前步骤索引 */
  current: number
  /** 下一步 */
  next: () => void
  /** 上一步 */
  prev: () => void
  /** 重置到第一步 */
  reset: () => void
  /** 跳转到指定步骤 */
  go: (index: number) => void
}

export function useXStepper(options: { items?: StepperItem[]; defaultValue?: number; orientation?: 'horizontal' | 'vertical'; disabled?: boolean; linear?: boolean } = {}) {
  const { defaultValue = 0, ...componentProps } = options
  const state = reactive({ current: defaultValue })

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
            modelValue: state.current,
            'onUpdate:modelValue': (value: number) => {
              state.current = value
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
