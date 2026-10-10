/**
 * useXTable：创建与 api 绑定的表格。
 * 用法：const [Table, tableApi] = useXTable({ columns, data })
 */
import { defineComponent, h, reactive } from 'vue'
import type { TableColumn, TableData } from './XTable.vue'
import XTable from './XTable.vue'

export interface XTableApi {
  /** 加载状态 */
  loading: boolean
  /** 设置加载状态 */
  setLoading: (loading: boolean) => void
  /** 重新加载(触发 onReload) */
  reload: () => void
}

export function useXTable<T extends TableData>(options: {
  columns?: TableColumn<T>[]
  data?: T[]
  loading?: boolean
  onReload?: () => void
} = {}) {
  const { onReload, ...componentProps } = options
  const state = reactive({
    loading: options.loading ?? false,
  })

  const Table = defineComponent({
    name: 'XTableBound',
    setup(_, { attrs, slots }) {
      return () =>
        h(
          XTable,
          {
            ...attrs,
            ...componentProps,
            loading: state.loading,
          } as never,
          slots as never,
        )
    },
  })

  const api: XTableApi = {
    get loading() {
      return state.loading
    },
    setLoading: (loading) => {
      state.loading = loading
    },
    reload: () => {
      state.loading = true
      onReload?.()
    },
  }

  return [Table, api] as const
}
