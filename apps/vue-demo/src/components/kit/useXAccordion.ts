/**
 * useXAccordion：创建与 api 绑定的手风琴。
 * 用法：const [Accordion, accordionApi] = useXAccordion({ items: [...] })
 */
import { defineComponent, h, reactive } from 'vue'
import type { AccordionDataItem } from './XAccordion.vue'
import XAccordion from './XAccordion.vue'

export interface XAccordionApi {
  /** 当前展开项 */
  value: string[]
  /** 展开指定项 */
  open: (index: number) => void
  /** 折叠指定项 */
  close: (index: number) => void
  /** 切换指定项 */
  toggle: (index: number) => void
}

export function useXAccordion(options: { items?: AccordionDataItem[]; defaultValue?: string[]; multiple?: boolean; disabled?: boolean } = {}) {
  const { defaultValue = [], ...componentProps } = options
  const state = reactive({ value: [...defaultValue] })

  const Accordion = defineComponent({
    name: 'XAccordionBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XAccordion,
          {
            ...attrs,
            ...componentProps,
            modelValue: state.value,
            'onUpdate:modelValue': (value: string | string[]) => {
              state.value = Array.isArray(value) ? value : [value]
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XAccordionApi = {
    get value() {
      return state.value
    },
    open: (index: number) => {
      const key = String(index)
      if (!state.value.includes(key)) state.value = [...state.value, key]
    },
    close: (index: number) => {
      state.value = state.value.filter((key) => key !== String(index))
    },
    toggle: (index: number) => {
      const key = String(index)
      if (state.value.includes(key)) state.value = state.value.filter((k) => k !== key)
      else state.value = [...state.value, key]
    },
  }

  return [Accordion, api] as const
}
