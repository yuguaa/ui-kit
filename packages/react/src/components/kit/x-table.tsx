/**
 * XTable 表格：按 Nuxt UI table 结构二次封装。
 * columns 为 TanStack ColumnDef，支持排序、列筛选、固定列等全部 TanStack 能力，
 * caption / empty / sticky / loading 与行选择、行悬停、右键事件按 Nuxt 命名。
 */
import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type Cell,
  type Column,
  type ColumnDef,
  type ColumnFiltersOptions,
  type ColumnFiltersState,
  type ColumnPinningOptions,
  type ColumnPinningState,
  type ColumnSizingOptions,
  type ColumnSizingState,
  type ExpandedOptions,
  type ExpandedState,
  type FacetedOptions,
  type GlobalFilterOptions,
  type GroupingOptions,
  type GroupingState,
  type Header,
  type PaginationOptions,
  type PaginationState,
  type Row,
  type RowData,
  type RowPinningOptions,
  type RowPinningState,
  type RowSelectionOptions,
  type RowSelectionState,
  type SortingOptions,
  type SortingState,
  type Table,
  type TableMeta,
  type TableState,
  type VisibilityOptions,
  type VisibilityState,
} from "@tanstack/react-table"
import { useVirtualizer } from "@tanstack/react-virtual"
import { useRender } from "@base-ui/react/use-render"
import { XSkeleton } from "@/components/kit/x-skeleton"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export type XTableRow<T> = Row<T>
export type XTableData = RowData
export type XTableColumn<T extends RowData, D = unknown> = ColumnDef<T, D>

/** 列 meta 扩展字段(Nuxt Table 约定):类名 / 样式 / 合并数 */
export interface XTableColumnMeta<TData extends RowData, TValue> {
  class?: {
    th?: string | ((header: Header<TData, TValue>) => string)
    td?: string | ((cell: Cell<TData, TValue>) => string)
  }
  style?: {
    th?: string | Record<string, string> | ((header: Header<TData, TValue>) => string | Record<string, string>)
    td?: string | Record<string, string> | ((cell: Cell<TData, TValue>) => string | Record<string, string>)
  }
  colspan?: {
    td?: string | ((cell: Cell<TData, TValue>) => string)
  }
  rowspan?: {
    td?: string | ((cell: Cell<TData, TValue>) => string)
  }
}

/** 表格 meta 扩展字段(Nuxt Table 约定):行级类名 / 样式 */
export interface XTableMetaExt<TData extends RowData> {
  class?: {
    tr?: string | ((row: Row<TData>) => string)
  }
  style?: {
    tr?: string | Record<string, string> | ((row: Row<TData>) => string | Record<string, string>)
  }
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XTableUi {
  root?: string
  base?: string
  caption?: string
  thead?: string
  tbody?: string
  tfoot?: string
  tr?: string
  th?: string
  td?: string
  separator?: string
  empty?: string
  loading?: string
}

/** 虚拟滚动配置：与 Nuxt UI virtualize 对齐 */
export interface XTableVirtualizeOptions {
  /** 外部滚动元素，未提供时使用表格自身 root 作为滚动容器 */
  getScrollElement?: () => HTMLElement
  /** 每行估计高度（px），可传函数按索引估算，默认 65 */
  estimateSize?: number | ((index: number) => number)
  /** 可视区外预渲染的行数，默认 12 */
  overscan?: number
}

export interface XTableProps<T extends RowData> {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 数据源数组 */
  data?: T[]
  /** 列配置(TanStack ColumnDef) */
  columns?: XTableColumn<T>[]
  /** 表格说明文字 */
  caption?: React.ReactNode
  /** 行与列的 meta 配置(类名 / 样式) */
  meta?: TableMeta<T>
  /** 无数据时展示的文字 */
  empty?: React.ReactNode
  /** 固定表头 / 表尾:true 两者都固定,header / footer 单独固定 */
  sticky?: boolean | "header" | "footer"
  /** 虚拟滚动开关，对象形态可配置外部滚动容器与行高估算；开启后行固定不生效 */
  virtualize?: boolean | XTableVirtualizeOptions
  /** 加载状态 */
  loading?: boolean
  /** 加载指示条颜色，默认 'primary'；neutral 映射为 inverted */
  loadingColor?: string
  /** 加载指示条动画，默认 'carousel' */
  loadingAnimation?: string
  /** Vue 响应式监控选项：React 数据流天然深度响应（等价 deep: true），deep: false 不支持 */
  watchOptions?: { deep?: boolean }
  /** TanStack 全局筛选选项(state 可受控) */
  globalFilterOptions?: GlobalFilterOptions<T> & { state?: { globalFilter?: TableState["globalFilter"] } }
  /** TanStack 列筛选选项(state 可受控) */
  columnFiltersOptions?: Omit<ColumnFiltersOptions<T>, "getFilteredRowModel"> & { state?: { columnFilters?: TableState["columnFilters"] } }
  /** TanStack 固定列选项(state 可受控) */
  columnPinningOptions?: ColumnPinningOptions & { state?: { columnPinning?: TableState["columnPinning"] } }
  /** TanStack 列宽调整选项(state 可受控) */
  columnSizingOptions?: ColumnSizingOptions & { state?: { columnSizing?: TableState["columnSizing"]; columnSizingInfo?: TableState["columnSizingInfo"] } }
  /** TanStack 列显示选项(state 可受控) */
  visibilityOptions?: VisibilityOptions & { state?: { columnVisibility?: TableState["columnVisibility"] } }
  /** TanStack 排序选项(state 可受控) */
  sortingOptions?: Omit<SortingOptions<T>, "getSortedRowModel"> & { state?: { sorting?: TableState["sorting"] } }
  /** TanStack 分组选项(state 可受控) */
  groupingOptions?: GroupingOptions & { state?: { grouping?: TableState["grouping"] } }
  /** TanStack 展开选项(state 可受控) */
  expandedOptions?: Omit<ExpandedOptions<T>, "getExpandedRowModel"> & { state?: { expanded?: TableState["expanded"] } }
  /** TanStack 行选择选项(state 可受控) */
  rowSelectionOptions?: RowSelectionOptions<T> & { state?: { rowSelection?: TableState["rowSelection"] } }
  /** TanStack 固定行选项(state 可受控) */
  rowPinningOptions?: RowPinningOptions<T> & { state?: { rowPinning?: TableState["rowPinning"] } }
  /** TanStack 分页选项(state 可受控) */
  paginationOptions?: PaginationOptions & { state?: { pagination?: TableState["pagination"] } }
  /** TanStack 列聚合选项 */
  facetedOptions?: FacetedOptions<T>
  /** 行选择回调(点击交互元素内部时忽略) */
  onSelect?: (event: React.SyntheticEvent, row: Row<T>) => void
  /** 行悬停回调 */
  onHover?: (event: React.SyntheticEvent, row: Row<T> | null) => void
  /** 行右键回调 */
  onContextMenu?: ((event: React.SyntheticEvent, row: Row<T>) => void) | Array<(event: React.SyntheticEvent, row: Row<T>) => void>
  /** 主题插槽类名 */
  ui?: XTableUi
  className?: string
  /** 展开行渲染函数(等价于 expanded 插槽) */
  expandedSlot?: (row: Row<T>) => React.ReactNode
  /** 加载内容(等价于 loading 插槽) */
  loadingSlot?: React.ReactNode
  /** 空数据内容(等价于 empty 插槽) */
  emptySlot?: React.ReactNode
  /** 表体上方内容 */
  bodyTop?: React.ReactNode
  /** 表体下方内容 */
  bodyBottom?: React.ReactNode
}

/** 取属性或函数(以单元格为参数)的返回值 */
function resolveValue<TValue, TArg>(prop: TValue | ((arg: TArg) => TValue), arg: TArg): TValue | undefined {
  if (typeof prop === "function") {
    return (prop as (arg: TArg) => TValue)(arg)
  }
  return prop
}

/** 无列配置时按数据字段名生成列 */
function processColumns<T extends RowData>(columns: XTableColumn<T>[]): XTableColumn<T>[] {
  return columns.map((column) => {
    const col = { ...column } as XTableColumn<T>

    if ("columns" in col && col.columns) {
      col.columns = processColumns(col.columns as XTableColumn<T>[])
    }

    if (!col.cell) {
      col.cell = ({ getValue }) => {
        const value = getValue()
        if (value === "" || value === null || value === undefined) {
          return "\u00A0"
        }
        return String(value)
      }
    }

    return col
  })
}

/** 表尾是否存在(footer 字段或分组列递归查找) */
function hasFooterRecursive<T extends RowData>(columns: XTableColumn<T>[]): boolean {
  for (const column of columns) {
    if ("footer" in column) {
      return true
    }
    if ("columns" in column && hasFooterRecursive(column.columns as XTableColumn<T>[])) {
      return true
    }
  }
  return false
}

/** 固定列的定位样式(left / right) */
function getColumnStyles<T extends RowData>(column: Column<T>): React.CSSProperties {
  const styles: React.CSSProperties = {}

  const pinned = column.getIsPinned()
  if (pinned === "left") {
    styles.left = `${column.getStart("left")}px`
  } else if (pinned === "right") {
    styles.right = `${column.getAfter("right")}px`
  }

  return styles
}

/** 列定义显式启用排序且当前可排序时表头才提供排序交互 */
function isSortable<T extends RowData>(column: Column<T, unknown>) {
  return column.columnDef.enableSorting === true && column.getCanSort()
}

/** 加载指示条动画类（keyframes 定义在包入口 index.css） */
const tableLoadingAnimationClasses: Record<string, string> = {
  carousel: "motion-safe:after:animate-[carousel_2s_linear_infinite]",
  "carousel-inverse": "motion-safe:after:animate-[carousel-inverse_2s_linear_infinite]",
  swing: "motion-safe:after:animate-[swing_2s_var(--ease-in-out)_infinite]",
  elastic: "motion-safe:after:animate-[elastic_2s_var(--ease-in-out)_infinite]",
}

/** 加载指示条颜色类（neutral 映射 inverted，对齐 Nuxt UI 主题） */
const tableLoadingColorClasses: Record<string, string> = {
  primary: "after:bg-primary",
  secondary: "after:bg-secondary",
  neutral: "after:bg-inverted",
  success: "after:bg-success",
  info: "after:bg-info",
  warning: "after:bg-warning",
  error: "after:bg-error",
}

export const XTable = function XTable<T extends RowData>(
  {
    render,
    data = [],
    columns = [],
    caption,
    meta,
    empty = "暂无数据",
    sticky = false,
    virtualize = false,
    loading = false,
    loadingColor = "primary",
    loadingAnimation = "carousel",
    watchOptions,
    globalFilterOptions,
    columnFiltersOptions,
    columnPinningOptions,
    columnSizingOptions,
    visibilityOptions,
    sortingOptions,
    groupingOptions,
    expandedOptions,
    rowSelectionOptions,
    rowPinningOptions,
    paginationOptions,
    facetedOptions,
    onSelect,
    onHover,
    onContextMenu,
    ui,
    className,
    expandedSlot,
    loadingSlot,
    emptySlot,
    bodyTop,
    bodyBottom,
    ref,
  }: XTableProps<T> & { ref?: React.Ref<XTableApi<T>> },
) {
  /* watchOptions.deep=false 要求关闭深度监听，React 数据流天然深度响应，无法提供该语义 */
  if (watchOptions?.deep === false) {
    throw new Error("XTable watchOptions.deep=false 不受支持：React 数据流天然深度响应，等价于 deep: true")
  }

  /* 受控 state 优先(TanStack options.state),否则组件内部维护 */
  const [globalFilter, setGlobalFilter] = React.useState<string>("")
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({})
  const [columnSizing, setColumnSizing] = React.useState<ColumnSizingState>({})
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [grouping, setGrouping] = React.useState<GroupingState>([])
  const [expanded, setExpanded] = React.useState<ExpandedState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [rowPinning, setRowPinning] = React.useState<RowPinningState>({})
  const [pagination, setPagination] = React.useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

  const resolvedColumns = React.useMemo(() => processColumns(columns), [columns])

  const table = useReactTable<T>({
    data,
    columns: resolvedColumns,
    meta,
    getCoreRowModel: getCoreRowModel(),
    ...(globalFilterOptions ?? {}),
    ...(columnFiltersOptions ?? {}),
    getFilteredRowModel: getFilteredRowModel(),
    ...(columnPinningOptions ?? {}),
    ...(columnSizingOptions ?? {}),
    ...(visibilityOptions ?? {}),
    ...(sortingOptions ?? {}),
    getSortedRowModel: getSortedRowModel(),
    ...(groupingOptions ?? {}),
    ...(expandedOptions ?? {}),
    getExpandedRowModel: getExpandedRowModel(),
    ...(rowSelectionOptions ?? {}),
    ...(rowPinningOptions ?? {}),
    ...(paginationOptions ?? {}),
    ...(facetedOptions ?? {}),
    state: {
      globalFilter: globalFilterOptions?.state?.globalFilter ?? globalFilter,
      columnFilters: columnFiltersOptions?.state?.columnFilters ?? columnFilters,
      columnPinning: columnPinningOptions?.state?.columnPinning ?? columnPinning,
      columnSizing: columnSizingOptions?.state?.columnSizing ?? columnSizing,
      columnVisibility: visibilityOptions?.state?.columnVisibility ?? columnVisibility,
      sorting: sortingOptions?.state?.sorting ?? sorting,
      grouping: groupingOptions?.state?.grouping ?? grouping,
      expanded: expandedOptions?.state?.expanded ?? expanded,
      rowSelection: rowSelectionOptions?.state?.rowSelection ?? rowSelection,
      rowPinning: rowPinningOptions?.state?.rowPinning ?? rowPinning,
      pagination: paginationOptions?.state?.pagination ?? pagination,
    },
    onGlobalFilterChange: globalFilterOptions?.onGlobalFilterChange ?? setGlobalFilter,
    onColumnFiltersChange: columnFiltersOptions?.onColumnFiltersChange ?? setColumnFilters,
    onColumnPinningChange: columnPinningOptions?.onColumnPinningChange ?? setColumnPinning,
    onColumnSizingChange: columnSizingOptions?.onColumnSizingChange ?? setColumnSizing,
    onColumnVisibilityChange: visibilityOptions?.onColumnVisibilityChange ?? setColumnVisibility,
    onSortingChange: sortingOptions?.onSortingChange ?? setSorting,
    onGroupingChange: groupingOptions?.onGroupingChange ?? setGrouping,
    onExpandedChange: expandedOptions?.onExpandedChange ?? setExpanded,
    onRowSelectionChange: rowSelectionOptions?.onRowSelectionChange ?? setRowSelection,
    onRowPinningChange: rowPinningOptions?.onRowPinningChange ?? setRowPinning,
    onPaginationChange: paginationOptions?.onPaginationChange ?? setPagination,
  })

  React.useImperativeHandle(ref, () => ({ tableApi: table }), [table])

  const rows = table.getRowModel().rows
  const hasFooter = hasFooterRecursive(resolvedColumns)
  const stickyThead = sticky === true || sticky === "header"
  const stickyTfoot = sticky === true || sticky === "footer"

  /* 虚拟滚动：外部滚动容器由 getScrollElement 提供，否则使用 root 自身 */
  const rootRef = React.useRef<HTMLDivElement>(null)
  const virtualOptions = typeof virtualize === "object" ? virtualize : {}
  const isExternalScroll = typeof virtualize === "object" && !!virtualize.getScrollElement

  const resolveScrollElement = React.useCallback(() => {
    if (isExternalScroll) {
      return virtualOptions.getScrollElement?.() ?? null
    }
    return rootRef.current
  }, [isExternalScroll, virtualOptions.getScrollElement])

  /* 外部容器 ref 在组件首次 layout effect 后才可用：effect 中同步一次，触发虚拟器重新绑定滚动容器 */
  const [scrollElement, setScrollElement] = React.useState<HTMLElement | null>(null)
  React.useEffect(() => {
    setScrollElement(resolveScrollElement())
  }, [resolveScrollElement])

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollElement,
    estimateSize: (index) => {
      const estimate = virtualOptions.estimateSize ?? 65
      return typeof estimate === "function" ? estimate(index) : estimate
    },
    overscan: virtualOptions.overscan ?? 12,
    enabled: !!virtualize,
  })

  const virtualItems = virtualizer.getVirtualItems()
  /* 上下占位行高度：把虚拟行垫到正确位置（外部滚动容器的 scrollMargin 未支持时恒为 0） */
  const virtualPaddingTop = virtualItems[0]?.start ?? 0
  const virtualPaddingBottom =
    virtualizer.getTotalSize() - (virtualItems[virtualItems.length - 1]?.end ?? 0)

  /** 行选择:点击交互元素(链接 / 按钮 / 输入框等)内部时不触发 */
  function onRowSelect(event: React.SyntheticEvent, row: Row<T>) {
    if (!onSelect) {
      return
    }
    const target = event.target as HTMLElement
    const isInteractive = target.closest("a, button, input, label, select, textarea")
    if (isInteractive) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    if ((event as React.KeyboardEvent).repeat) {
      return
    }

    onSelect(event, row)
  }

  function onRowHover(event: React.SyntheticEvent, row: Row<T> | null) {
    if (!onHover) {
      return
    }

    onHover(event, row)
  }

  function onRowContextmenu(event: React.SyntheticEvent, row: Row<T>) {
    if (!onContextMenu) {
      return
    }

    if (Array.isArray(onContextMenu)) {
      onContextMenu.forEach((fn) => fn(event, row))
    } else {
      onContextMenu(event, row)
    }
  }

  function getAriaSort(header: Header<T, unknown>): React.AriaAttributes["aria-sort"] {
    if (header.isPlaceholder || !isSortable(header.column)) {
      return undefined
    }

    const sorted = header.column.getIsSorted()
    if (!sorted) {
      return "none"
    }

    const sortableIds = new Set(table.getVisibleLeafColumns()
      .filter(isSortable)
      .map((column) => column.id))
    const primary = table.getState().sorting.find(({ id }) => sortableIds.has(id))

    if (primary?.id !== header.column.id) {
      return "none"
    }

    return sorted === "asc" ? "ascending" : "descending"
  }

  const columnMeta = (headerOrCell: Header<T, unknown> | Cell<T, unknown>) =>
    headerOrCell.column.columnDef.meta as XTableColumnMeta<T, unknown> | undefined

  const renderRow = (row: Row<T>, extraStyle?: React.CSSProperties) => {
    const tr = (
      <tr
        key={row.id}
        data-selected={row.getIsSelected()}
        data-selectable={!!onSelect || !!onHover || !!onContextMenu}
        data-expanded={row.getIsExpanded()}
        data-pinned={row.getIsPinned() || undefined}
        tabIndex={onSelect ? 0 : undefined}
        data-slot="tr"
        className={cn("data-[selected=true]:bg-muted/50", resolveValue((table.options.meta as XTableMetaExt<T> | undefined)?.class?.tr, row), ui?.tr)}
        style={{ ...(resolveValue((table.options.meta as XTableMetaExt<T> | undefined)?.style?.tr, row) as React.CSSProperties | undefined), ...extraStyle }}
        onClick={(event) => onRowSelect(event, row)}
        onKeyDown={(event) => {
          if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
            onRowSelect(event, row)
          }
        }}
        onPointerEnter={(event) => onRowHover(event, row)}
        onPointerLeave={(event) => onRowHover(event, null)}
        onContextMenu={(event) => onRowContextmenu(event, row)}
      >
        {row.getVisibleCells().map((cell) => (
          <td
            key={cell.id}
            data-pinned={cell.column.getIsPinned()}
            colSpan={resolveValue(columnMeta(cell)?.colspan?.td, cell) as number | undefined}
            rowSpan={resolveValue(columnMeta(cell)?.rowspan?.td, cell) as number | undefined}
            data-slot="td"
            className={cn(
              "whitespace-nowrap p-4 text-sm text-muted-foreground [&:has([role=checkbox])]:pe-0",
              cell.column.getIsPinned() && "sticky z-1 bg-background/75",
              resolveValue(columnMeta(cell)?.class?.td, cell),
              ui?.td,
            )}
            style={{ ...getColumnStyles(cell.column), ...(resolveValue(columnMeta(cell)?.style?.td, cell) as React.CSSProperties | undefined) }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    )

    if (row.getIsExpanded()) {
      return (
        <React.Fragment key={row.id}>
          {tr}
          <tr data-slot="tr" className={cn(ui?.tr)}>
            <td colSpan={row.getVisibleCells().length} data-slot="td" className={cn(ui?.td)}>
              {expandedSlot?.(row)}
            </td>
          </tr>
        </React.Fragment>
      )
    }

    return tr
  }

  const tableElement = (
    <table data-slot="base" className={cn("min-w-full overflow-clip", ui?.base)}>
      {caption != null && (
        <caption data-slot="caption" className={cn("sr-only", ui?.caption)}>
          {caption}
        </caption>
      )}

      <thead
        data-slot="thead"
        className={cn(
          "relative",
          stickyThead && "sticky inset-x-0 top-0 z-1 bg-background/75 backdrop-blur-sm",
          loading && "after:absolute after:z-1 after:h-px motion-reduce:after:inset-x-0 motion-reduce:after:animate-pulse",
          loading && tableLoadingColorClasses[loadingColor],
          loading && tableLoadingAnimationClasses[loadingAnimation],
          ui?.thead,
        )}
      >
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} data-slot="tr" className={cn(ui?.tr)}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                data-pinned={header.column.getIsPinned()}
                scope={header.colSpan > 1 ? "colgroup" : "col"}
                colSpan={header.colSpan > 1 ? header.colSpan : undefined}
                rowSpan={header.rowSpan > 1 ? header.rowSpan : undefined}
                aria-sort={getAriaSort(header)}
                data-slot="th"
                className={cn(
                  "px-4 py-3.5 text-start text-sm font-semibold text-foreground [&:has([role=checkbox])]:pe-0",
                  header.column.getIsPinned() && "sticky z-1 bg-background/75",
                  resolveValue(columnMeta(header)?.class?.th, header),
                  ui?.th,
                )}
                style={{ ...getColumnStyles(header.column), ...(resolveValue(columnMeta(header)?.style?.th, header) as React.CSSProperties | undefined) }}
              >
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}

        <tr data-slot="separator" className={cn("absolute start-0 z-1 h-px w-full bg-border", ui?.separator)} />
      </thead>

      <tbody
        data-slot="tbody"
        className={cn(
          "isolate divide-y divide-border",
          "[&>tr]:data-[selectable=true]:hover:bg-muted/50 [&>tr]:data-[selectable=true]:outline-primary/25 [&>tr]:data-[selectable=true]:focus-visible:outline-3 [&>tr]:data-[selectable=true]:-outline-offset-3",
          ui?.tbody,
        )}
      >
        {bodyTop}

        {rows.length > 0 && !!virtualize ? (
          <>
            {virtualPaddingTop > 0 && (
              <tr aria-hidden="true" style={{ height: `${virtualPaddingTop}px` }}>
                <td colSpan={table.getVisibleLeafColumns().length} />
              </tr>
            )}
            {virtualItems.map((virtualItem) => {
              const row = rows[virtualItem.index]
              return row ? renderRow(row, { height: `${virtualItem.size}px` }) : null
            })}
            {virtualPaddingBottom > 0 && (
              <tr aria-hidden="true" style={{ height: `${virtualPaddingBottom}px` }}>
                <td colSpan={table.getVisibleLeafColumns().length} />
              </tr>
            )}
          </>
        ) : rows.length > 0 ? (
          rows.map((row) => renderRow(row))
        ) : loading && loadingSlot != null ? (
          <tr>
            <td colSpan={table.getVisibleLeafColumns().length} data-slot="loading" className={cn("py-6 text-center", ui?.loading)}>
              {loadingSlot}
            </td>
          </tr>
        ) : loading ? (
          <tr>
            <td colSpan={table.getVisibleLeafColumns().length} data-slot="loading" className={cn("py-6", ui?.loading)}>
              <div className="flex flex-col gap-2">
                {[0, 1, 2].map((index) => (
                  <XSkeleton key={index} variant="text" className="h-4" />
                ))}
              </div>
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan={table.getVisibleLeafColumns().length} data-slot="empty" className={cn("py-6 text-center text-sm text-muted-foreground", ui?.empty)}>
              {emptySlot ?? empty}
            </td>
          </tr>
        )}

        {bodyBottom}
      </tbody>

      {hasFooter && (
        <tfoot
          data-slot="tfoot"
          className={cn(
            "relative [&>[data-slot=separator]]:z-2",
            stickyTfoot && "sticky inset-x-0 bottom-0 z-1 bg-background/75 backdrop-blur-sm",
            ui?.tfoot,
          )}
        >
          <tr data-slot="separator" className={cn("absolute start-0 z-1 h-px w-full bg-border", ui?.separator)} />

          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id} data-slot="tr" className={cn(ui?.tr)}>
              {footerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  data-pinned={header.column.getIsPinned()}
                  colSpan={header.colSpan > 1 ? header.colSpan : undefined}
                  rowSpan={header.rowSpan > 1 ? header.rowSpan : undefined}
                  data-slot="th"
                  className={cn(
                    "px-4 py-3.5 text-start text-sm font-semibold text-foreground",
                    header.column.getIsPinned() && "sticky z-1 bg-background/75",
                    resolveValue(columnMeta(header)?.class?.th, header),
                    ui?.th,
                  )}
                  style={{ ...getColumnStyles(header.column), ...(resolveValue(columnMeta(header)?.style?.th, header) as React.CSSProperties | undefined) }}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      )}
    </table>
  )

  return useRender({
    defaultTagName: "div",
    props: {
      "data-slot": "root",
      className: cn(
        "relative outline-primary/25 focus-visible:outline-3",
        isExternalScroll ? "overflow-visible" : "overflow-auto",
        ui?.root,
        className,
      ),
      children: tableElement,
    },
    render,
    ref: rootRef,
  })
}

/* ============================ vben 风格 hook ============================ */

/** ref 暴露的表格控制接口 */
export interface XTableApi<T extends RowData> {
  /** TanStack 表格实例 */
  tableApi: Table<T>
}

export interface XTableInstanceApi {
  /** 加载状态 */
  loading: boolean
  /** 设置加载状态 */
  setLoading: (loading: boolean) => void
  /** 重新加载(触发 onReload) */
  reload: () => void
}

/** 创建与 api 绑定的表格：调用即得 [Table, tableApi] */
export function useXTable<T extends RowData>(
  options: Partial<XTableProps<T>> & { onReload?: () => void } = {},
) {
  const { onReload, ...componentProps } = options
  const store = React.useState(() =>
    createBoundStore({
      loading: componentProps.loading ?? false,
    }),
  )[0]

  const api = React.useMemo<XTableInstanceApi>(
    () => ({
      get loading() {
        return store.get().loading
      },
      setLoading: (loading) => store.set({ loading }),
      reload: () => {
        store.set({ loading: true })
        onReload?.()
      },
    }),
    [],
  )

  const Table = React.useMemo(() => {
    return function BoundTable(props: Partial<XTableProps<T>> = {}) {
      const state = useBoundStore(store)
      return <XTable {...componentProps} {...props} loading={state.loading} />
    }
  }, [])

  return [Table, api] as const
}
