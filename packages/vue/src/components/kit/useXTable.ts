/**
 * useXTable：创建与 api 绑定的表格。
 * 用法：const [Table, tableApi] = useXTable({ columns, dataSource })
 */
import { defineComponent, h, reactive } from 'vue'
import type { TableColumnData } from './XTable.vue'
import XTable from './XTable.vue'

export interface XTableApi {
  /** 加载状态 */
  loading: boolean
  /** 当前页码 */
  page: number
  /** 设置加载状态 */
  setLoading: (loading: boolean) => void
  /** 重新加载（回到第一页并触发 onReload） */
  reload: () => void
  /** 跳转页码 */
  setPage: (page: number) => void
}

export function useXTable(options: {
  columns?: TableColumnData[]
  dataSource?: Record<string, unknown>[]
  pagination?: { current?: number; pageSize?: number; total?: number } | false
  loading?: boolean
  size?: 'sm' | 'md'
  rowKey?: string
  onReload?: () => void
} = {}) {
  const { onReload, ...componentProps } = options
  const state = reactive({
    loading: options.loading ?? false,
    page: options.pagination !== false ? (options.pagination?.current ?? 1) : 1,
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
            pagination:
              componentProps.pagination === false
                ? false
                : { ...(componentProps.pagination ?? {}), current: state.page },
            onPageChange: (page: number) => {
              state.page = page
            },
          } as never,
          slots as never,
        )
    },
  })

  const api: XTableApi = {
    get loading() {
      return state.loading
    },
    get page() {
      return state.page
    },
    setLoading: (loading) => {
      state.loading = loading
    },
    reload: () => {
      state.page = 1
      state.loading = true
      onReload?.()
    },
    setPage: (page) => {
      state.page = page
    },
  }

  return [Table, api] as const
}
