import * as React from "react"
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type RowSelectionState,
  type SortingState,
  type Updater,
} from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { XCheckbox } from "@/components/kit/x-checkbox"
import { XPagination } from "@/components/kit/x-pagination"
import { XSkeleton } from "@/components/kit/x-skeleton"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export type XTableAlign = "left" | "center" | "right"

export interface XTableColumn<T> {
  /** 列 key */
  key: string
  /** 列标题 */
  title: React.ReactNode
  /** 列宽 */
  width?: number | string
  /** 对齐方式 */
  align?: XTableAlign
  /** 是否可排序（点击表头切换升序 / 降序 / 取消） */
  sortable?: boolean
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
  /** 固定表头，内容区在 maxHeight 内滚动 */
  sticky?: boolean
  /** 内容区最大高度（sticky 时生效） */
  maxHeight?: number | string
  /** 显示行选择列 */
  rowSelection?: boolean
  /** 受控选中行（与 rowSelection 搭配） */
  selectedRowKeys?: string[]
  /** 选中行变化回调 */
  onSelectionChange?: (keys: string[]) => void
  /** 分页配置（false 关闭分页） */
  pagination?: { current?: number; pageSize?: number; total?: number } | false
  /** 页码或每页条数变化回调 */
  onPageChange?: (page: number, pageSize: number) => void
  /** 空数据提示 */
  emptyText?: React.ReactNode
  className?: string
}

const alignClasses: Record<XTableAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

export function XTable<T extends Record<string, unknown>>({
  columns = [],
  dataSource = [],
  rowKey = "key",
  loading = false,
  size = "md",
  sticky = false,
  maxHeight,
  rowSelection = false,
  selectedRowKeys,
  onSelectionChange,
  pagination,
  onPageChange,
  emptyText = "暂无数据",
  className,
}: XTableProps<T>) {
  const [innerPage, setInnerPage] = React.useState(1)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [innerSelection, setInnerSelection] = React.useState<RowSelectionState>({})

  /* 受控选中行转成 TanStack 的行选择状态；未传入时使用内部状态 */
  const selectionState = React.useMemo<RowSelectionState>(
    () =>
      selectedRowKeys != null
        ? Object.fromEntries(selectedRowKeys.map((key) => [key, true]))
        : innerSelection,
    [selectedRowKeys, innerSelection],
  )

  const table = useReactTable({
    data: dataSource,
    columns: React.useMemo(
      () =>
        columns.map((column) => ({
          id: column.key,
          accessorFn: (row: T) => row[column.key],
          enableSorting: column.sortable ?? false,
        })),
      [columns],
    ),
    state: { sorting, rowSelection: selectionState },
    onSortingChange: setSorting,
    onRowSelectionChange: (updater: Updater<RowSelectionState>) => {
      const next = typeof updater === "function" ? updater(selectionState) : updater
      if (selectedRowKeys == null) setInnerSelection(next)
      onSelectionChange?.(Object.keys(next).filter((key) => next[key]))
    },
    getRowId: (row) => String(row[rowKey] ?? ""),
    enableRowSelection: rowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const pageSize = pagination ? pagination.pageSize ?? 10 : dataSource.length
  const total = pagination ? pagination.total ?? dataSource.length : dataSource.length
  const current = pagination ? pagination.current ?? innerPage : 1

  const sortedRows = table.getSortedRowModel().rows
  const rows = pagination
    ? sortedRows.slice((current - 1) * pageSize, current * pageSize)
    : sortedRows

  const cellClasses = size === "sm" ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"
  const headClasses = cn(
    size === "sm" ? "h-8 px-2 text-xs" : "h-10 px-3",
    sticky && "sticky top-0 z-10 bg-background",
  )

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Table
        className={cn(
          sticky &&
            "[&>[data-slot=table-container]]:max-h-(--x-table-max-height) [&>[data-slot=table-container]]:overflow-auto",
        )}
        style={
          sticky && maxHeight != null
            ? ({ "--x-table-max-height": typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight } as React.CSSProperties)
            : undefined
        }
      >
        <TableHeader>
          <TableRow>
            {rowSelection && (
              <TableHead className={cn(headClasses, "w-10")}>
                <XCheckbox
                  size="sm"
                  aria-label="全选"
                  checked={table.getIsAllRowsSelected()}
                  indeterminate={table.getIsSomeRowsSelected()}
                  onCheckedChange={(checked) => table.toggleAllRowsSelected(Boolean(checked))}
                />
              </TableHead>
            )}
            {columns.map((column) => {
              const sorted = table.getColumn(column.key)?.getIsSorted()
              return (
                <TableHead
                  key={column.key}
                  style={{ width: column.width }}
                  className={cn(headClasses, alignClasses[column.align ?? "left"])}
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      aria-label={`排序 ${typeof column.title === "string" ? column.title : column.key}`}
                      className="inline-flex cursor-pointer items-center gap-1 outline-none"
                      onClick={table.getColumn(column.key)?.getToggleSortingHandler()}
                    >
                      {column.title}
                      {sorted === "asc" ? (
                        <ArrowUp className="size-3.5" />
                      ) : sorted === "desc" ? (
                        <ArrowDown className="size-3.5" />
                      ) : (
                        <ArrowUpDown className="size-3.5 opacity-40" />
                      )}
                    </button>
                  ) : (
                    column.title
                  )}
                </TableHead>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: 3 }, (_, index) => (
                <TableRow key={`skeleton-${index}`}>
                  {rowSelection && (
                    <TableCell className={cellClasses}>
                      <XSkeleton variant="text" className="h-4 w-4" />
                    </TableCell>
                  )}
                  {columns.map((column) => (
                    <TableCell key={column.key} className={cellClasses}>
                      <XSkeleton variant="text" className="h-4" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
                  {rowSelection && (
                    <TableCell className={cellClasses}>
                      <XCheckbox
                        size="sm"
                        aria-label={`选择第 ${row.index + 1} 行`}
                        checked={row.getIsSelected()}
                        onCheckedChange={(checked) => row.toggleSelected(Boolean(checked))}
                      />
                    </TableCell>
                  )}
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={cn(cellClasses, alignClasses[column.align ?? "left"])}
                    >
                      {column.render
                        ? column.render(row.original[column.key], row.original, row.index)
                        : (row.original[column.key] as React.ReactNode)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          {!loading && rows.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={columns.length + (rowSelection ? 1 : 0)}
                className="py-8 text-center text-muted-foreground"
              >
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
