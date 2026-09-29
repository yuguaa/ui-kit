import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { XPagination } from "@/components/kit/x-pagination"
import { XSkeleton } from "@/components/kit/x-skeleton"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XTableColumn<T> {
  /** 列 key */
  key: string
  /** 列标题 */
  title: React.ReactNode
  /** 列宽 */
  width?: number | string
  /** 自定义单元格渲染 */
  render?: (value: unknown, record: T, index: number) => React.ReactNode
}

export interface XTableProps<T extends Record<string, unknown>> {
  /** 表格列配置 */
  columns?: XTableColumn<T>[]
  /** 数据源数组 */
  dataSource?: T[]
  /** 行唯一键 */
  rowKey?: string
  /** 加载状态 */
  loading?: boolean
  /** 表格尺寸 */
  size?: "sm" | "md"
  /** 分页配置（false 关闭分页） */
  pagination?: { current?: number; pageSize?: number; total?: number } | false
  /** 页码或每页条数变化回调 */
  onPageChange?: (page: number, pageSize: number) => void
  /** 空数据提示 */
  emptyText?: React.ReactNode
  className?: string
}

export function XTable<T extends Record<string, unknown>>({
  columns = [],
  dataSource = [],
  rowKey = "key",
  loading = false,
  size = "md",
  pagination,
  onPageChange,
  emptyText = "暂无数据",
  className,
}: XTableProps<T>) {
  const [innerPage, setInnerPage] = React.useState(1)
  const pageSize = pagination ? pagination.pageSize ?? 10 : dataSource.length
  const total = pagination ? pagination.total ?? dataSource.length : dataSource.length
  const current = pagination ? pagination.current ?? innerPage : 1

  const rows = pagination
    ? dataSource.slice((current - 1) * pageSize, current * pageSize)
    : dataSource

  const cellClasses = size === "sm" ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} style={{ width: column.width }}>
                {column.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: 3 }, (_, index) => (
                <TableRow key={`skeleton-${index}`}>
                  {columns.map((column) => (
                    <TableCell key={column.key} className={cellClasses}>
                      <XSkeleton variant="text" className="h-4" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : rows.map((record, index) => (
                <TableRow key={String(record[rowKey] ?? index)}>
                  {columns.map((column) => (
                    <TableCell key={column.key} className={cellClasses}>
                      {column.render ? column.render(record[column.key], record, index) : (record[column.key] as React.ReactNode)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          {!loading && rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length} className="py-8 text-center text-muted-foreground">
                {emptyText}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {pagination !== false && total > 0 && (
        <div className="flex justify-end">
          <XPagination
            current={current}
            total={total}
            pageSize={pageSize}
            onChange={(page, size) => {
              if (pagination && pagination.current == null) setInnerPage(page)
              onPageChange?.(page, size)
            }}
          />
        </div>
      )}
    </div>
  )
}

/* ============================ vben 风格 hook ============================ */

export interface XTableInstanceApi {
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

/** 创建与 api 绑定的表格：调用即得 [Table, tableApi] */
export function useXTable<T extends Record<string, unknown>>(
  options: Partial<XTableProps<T>> & { onReload?: () => void } = {},
) {
  const { onReload, ...componentProps } = options
  const store = React.useState(() =>
    createBoundStore({
      loading: componentProps.loading ?? false,
      page: componentProps.pagination !== false ? (componentProps.pagination?.current ?? 1) : 1,
    }),
  )[0]

  const api = React.useMemo<XTableInstanceApi>(
    () => ({
      get loading() {
        return store.get().loading
      },
      get page() {
        return store.get().page
      },
      setLoading: (loading) => store.set({ loading }),
      reload: () => {
        store.set({ page: 1, loading: true })
        onReload?.()
      },
      setPage: (page) => store.set({ page }),
    }),
    [],
  )

  const Table = React.useMemo(() => {
    return function BoundTable(props: Partial<XTableProps<T>> = {}) {
      const state = useBoundStore(store)
      const pagination =
        props.pagination === false
          ? false
          : { ...(componentProps.pagination ?? {}), ...(props.pagination ?? {}), current: state.page }
      return (
        <XTable
          {...componentProps}
          {...props}
          loading={state.loading}
          pagination={pagination}
          onPageChange={(page) => store.set({ page })}
        />
      )
    }
  }, [])

  return [Table, api] as const
}
