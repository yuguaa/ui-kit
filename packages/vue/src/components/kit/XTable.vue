<script lang="ts">
import type { AriaAttributes, HTMLAttributes, WatchOptions } from 'vue'
import type {
  Cell,
  Column,
  ColumnDef,
  ColumnFiltersOptions,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningOptions,
  ColumnPinningState,
  ColumnSizingInfoState,
  ColumnSizingOptions,
  ColumnSizingState,
  CoreOptions,
  ExpandedOptions,
  ExpandedState,
  FacetedOptions,
  GlobalFilterOptions,
  GroupingOptions,
  GroupingState,
  Header,
  PaginationOptions,
  PaginationState,
  Row,
  RowData,
  RowPinningOptions,
  RowPinningState,
  RowSelectionOptions,
  RowSelectionState,
  SortingOptions,
  SortingState,
  TableMeta,
  Updater,
  VisibilityOptions,
  VisibilityState,
} from '@tanstack/vue-table'

/** 列 meta 扩展字段(Nuxt Table 约定):类名 / 样式 / 合并数 */
export interface TableColumnMeta<TData extends RowData, TValue> {
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
export interface TableMetaExt<TData extends RowData> {
  class?: {
    tr?: string | ((row: Row<TData>) => string)
  }
  style?: {
    tr?: string | Record<string, string> | ((row: Row<TData>) => string | Record<string, string>)
  }
}

export type TableRow<T> = Row<T>
export type TableData = RowData
export type TableColumn<T extends TableData, D = unknown> = ColumnDef<T, D>

/** TanStack 核心选项:去掉由组件维护的 data / columns 与行模型 */
export interface TableOptions<T extends TableData = TableData>
  extends Omit<CoreOptions<T>, 'data' | 'columns' | 'getCoreRowModel' | 'state' | 'onStateChange' | 'renderFallbackValue'> {
  state?: CoreOptions<T>['state']
  onStateChange?: CoreOptions<T>['onStateChange']
  renderFallbackValue?: CoreOptions<T>['renderFallbackValue']
}

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface TableUi {
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

export interface TableProps<T extends TableData = TableData> extends TableOptions<T> {
  /** 渲染为指定元素或组件 */
  as?: any
  /** 数据源数组 */
  data?: T[]
  /** 列配置(TanStack ColumnDef) */
  columns?: TableColumn<T>[]
  /** 表格说明文字 */
  caption?: string
  /** 行与列的 meta 配置(类名 / 样式) */
  meta?: TableMeta<T>
  /** 无数据时展示的文字 */
  empty?: string
  /** 固定表头 / 表尾:true 两者都固定,header / footer 单独固定 */
  sticky?: boolean | 'header' | 'footer'
  /** 加载状态 */
  loading?: boolean
  /** TanStack 全局筛选选项 */
  globalFilterOptions?: Omit<GlobalFilterOptions<T>, 'onGlobalFilterChange'>
  /** TanStack 列筛选选项 */
  columnFiltersOptions?: Omit<ColumnFiltersOptions<T>, 'getFilteredRowModel' | 'onColumnFiltersChange'>
  /** TanStack 固定列选项 */
  columnPinningOptions?: Omit<ColumnPinningOptions, 'onColumnPinningChange'>
  /** TanStack 列宽调整选项 */
  columnSizingOptions?: Omit<ColumnSizingOptions, 'onColumnSizingChange' | 'onColumnSizingInfoChange'>
  /** TanStack 列显示选项 */
  visibilityOptions?: Omit<VisibilityOptions, 'onColumnVisibilityChange'>
  /** TanStack 排序选项 */
  sortingOptions?: Omit<SortingOptions<T>, 'getSortedRowModel' | 'onSortingChange'>
  /** TanStack 分组选项 */
  groupingOptions?: Omit<GroupingOptions, 'onGroupingChange'>
  /** TanStack 展开选项 */
  expandedOptions?: Omit<ExpandedOptions<T>, 'getExpandedRowModel' | 'onExpandedChange'>
  /** TanStack 行选择选项 */
  rowSelectionOptions?: Omit<RowSelectionOptions<T>, 'onRowSelectionChange'>
  /** TanStack 固定行选项 */
  rowPinningOptions?: Omit<RowPinningOptions<T>, 'onRowPinningChange'>
  /** TanStack 分页选项 */
  paginationOptions?: Omit<PaginationOptions, 'onPaginationChange'>
  /** TanStack 列聚合选项 */
  facetedOptions?: FacetedOptions<T>
  /** 数据变化监听配置(与 Vue watch 选项一致,默认深度监听) */
  watchOptions?: WatchOptions
  /** 行选择回调(点击交互元素内部时忽略) */
  onSelect?: (event: Event, row: TableRow<T>) => void
  /** 行悬停回调 */
  onHover?: (event: Event, row: TableRow<T> | null) => void
  /** 行右键回调 */
  onContextmenu?: ((event: Event, row: TableRow<T>) => void) | Array<(event: Event, row: TableRow<T>) => void>
  /** 主题插槽类名 */
  ui?: TableUi
  class?: HTMLAttributes['class']
}

export type TableSlots<T extends TableData = TableData> = {
  expanded?: (props: { row: Row<T> }) => unknown
  empty?: () => unknown
  loading?: () => unknown
  caption?: () => unknown
  'body-top'?: () => unknown
  'body-bottom'?: () => unknown
} & Record<string, (props: any) => unknown>
</script>

<script setup lang="ts" generic="T extends TableData">
import { computed, ref, useTemplateRef, watch } from 'vue'
import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { Primitive } from 'reka-ui'
import XSkeleton from '@/components/kit/XSkeleton.vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<TableProps<T>>(), {
  data: () => [],
  columns: () => [],
  sticky: false,
  loading: false,
  empty: '暂无数据',
  watchOptions: () => ({ deep: true }),
})

const slots = defineSlots<TableSlots<T>>()

const data = ref<T[]>(props.data ?? []) as { value: T[] }
const columns = computed<TableColumn<T>[]>(() => processColumns(
  props.columns?.length
    ? props.columns
    : Object.keys(data.value[0] ?? {}).map((accessorKey: string) => ({ accessorKey, header: upperFirst(accessorKey) })),
))

function processColumns(columns: TableColumn<T>[]): TableColumn<T>[] {
  return columns.map((column) => {
    const col = { ...column } as TableColumn<T>

    if ('columns' in col && col.columns) {
      col.columns = processColumns(col.columns as TableColumn<T>[])
    }

    if (!col.cell) {
      col.cell = ({ getValue }) => {
        const value = getValue()
        if (value === '' || value === null || value === undefined) {
          return '\u00A0'
        }
        return String(value)
      }
    }

    return col
  })
}

function upperFirst(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/** 表尾是否存在(footer 字段或分组列递归查找) */
const hasFooter = computed(() => {
  function hasFooterRecursive(columns: TableColumn<T>[]): boolean {
    for (const column of columns) {
      if ('footer' in column) {
        return true
      }
      if ('columns' in column && hasFooterRecursive(column.columns as TableColumn<T>[])) {
        return true
      }
    }
    return false
  }

  return hasFooterRecursive(columns.value)
})

const globalFilterState = defineModel<string>('globalFilter')
const columnFiltersState = defineModel<ColumnFiltersState>('columnFilters')
const columnOrderState = defineModel<ColumnOrderState>('columnOrder')
const columnVisibilityState = defineModel<VisibilityState>('columnVisibility')
const columnPinningState = defineModel<ColumnPinningState>('columnPinning')
const columnSizingState = defineModel<ColumnSizingState>('columnSizing')
const columnSizingInfoState = defineModel<ColumnSizingInfoState>('columnSizingInfo')
const rowSelectionState = defineModel<RowSelectionState>('rowSelection')
const rowPinningState = defineModel<RowPinningState>('rowPinning')
const sortingState = defineModel<SortingState>('sorting')
const groupingState = defineModel<GroupingState>('grouping')
const expandedState = defineModel<ExpandedState>('expanded')
const paginationState = defineModel<PaginationState>('pagination')

const tableRef = useTemplateRef<HTMLTableElement>('tableRef')

const tableApi = useVueTable({
  _features: props._features,
  autoResetAll: props.autoResetAll,
  debugAll: props.debugAll,
  debugCells: props.debugCells,
  debugColumns: props.debugColumns,
  debugHeaders: props.debugHeaders,
  debugRows: props.debugRows,
  debugTable: props.debugTable,
  defaultColumn: props.defaultColumn,
  getRowId: props.getRowId,
  getSubRows: props.getSubRows,
  initialState: props.initialState,
  mergeOptions: props.mergeOptions,
  renderFallbackValue: props.renderFallbackValue,
  get data() {
    return data.value
  },
  get columns() {
    return columns.value
  },
  meta: props.meta,
  getCoreRowModel: getCoreRowModel(),
  ...(props.globalFilterOptions || {}),
  ...(globalFilterState.value !== undefined && { onGlobalFilterChange: (updaterOrValue: Updater<string>) => valueUpdater(updaterOrValue, globalFilterState) }),
  ...(props.columnFiltersOptions || {}),
  getFilteredRowModel: getFilteredRowModel(),
  ...(columnFiltersState.value !== undefined && { onColumnFiltersChange: (updaterOrValue: Updater<ColumnFiltersState>) => valueUpdater(updaterOrValue, columnFiltersState) }),
  ...(columnOrderState.value !== undefined && { onColumnOrderChange: (updaterOrValue: Updater<ColumnOrderState>) => valueUpdater(updaterOrValue, columnOrderState) }),
  ...(props.visibilityOptions || {}),
  ...(columnVisibilityState.value !== undefined && { onColumnVisibilityChange: (updaterOrValue: Updater<VisibilityState>) => valueUpdater(updaterOrValue, columnVisibilityState) }),
  ...(props.columnPinningOptions || {}),
  ...(columnPinningState.value !== undefined && { onColumnPinningChange: (updaterOrValue: Updater<ColumnPinningState>) => valueUpdater(updaterOrValue, columnPinningState) }),
  ...(props.columnSizingOptions || {}),
  ...(columnSizingState.value !== undefined && { onColumnSizingChange: (updaterOrValue: Updater<ColumnSizingState>) => valueUpdater(updaterOrValue, columnSizingState) }),
  ...(columnSizingInfoState.value !== undefined && { onColumnSizingInfoChange: (updaterOrValue: Updater<ColumnSizingInfoState>) => valueUpdater(updaterOrValue, columnSizingInfoState) }),
  ...(props.rowSelectionOptions || {}),
  ...(rowSelectionState.value !== undefined && { onRowSelectionChange: (updaterOrValue: Updater<RowSelectionState>) => valueUpdater(updaterOrValue, rowSelectionState) }),
  ...(props.rowPinningOptions || {}),
  ...(rowPinningState.value !== undefined && { onRowPinningChange: (updaterOrValue: Updater<RowPinningState>) => valueUpdater(updaterOrValue, rowPinningState) }),
  ...(props.sortingOptions || {}),
  getSortedRowModel: getSortedRowModel(),
  ...(sortingState.value !== undefined && { onSortingChange: (updaterOrValue: Updater<SortingState>) => valueUpdater(updaterOrValue, sortingState) }),
  ...(props.groupingOptions || {}),
  ...(groupingState.value !== undefined && { onGroupingChange: (updaterOrValue: Updater<GroupingState>) => valueUpdater(updaterOrValue, groupingState) }),
  ...(props.expandedOptions || {}),
  getExpandedRowModel: getExpandedRowModel(),
  ...(expandedState.value !== undefined && { onExpandedChange: (updaterOrValue: Updater<ExpandedState>) => valueUpdater(updaterOrValue, expandedState) }),
  ...(props.paginationOptions || {}),
  ...(paginationState.value !== undefined && { onPaginationChange: (updaterOrValue: Updater<PaginationState>) => valueUpdater(updaterOrValue, paginationState) }),
  ...(props.facetedOptions || {}),
  state: {
    get globalFilter() {
      return globalFilterState.value
    },
    get columnFilters() {
      return columnFiltersState.value
    },
    get columnOrder() {
      return columnOrderState.value
    },
    get columnVisibility() {
      return columnVisibilityState.value
    },
    get columnPinning() {
      return columnPinningState.value
    },
    get expanded() {
      return expandedState.value
    },
    get rowSelection() {
      return rowSelectionState.value
    },
    get sorting() {
      return sortingState.value
    },
    get grouping() {
      return groupingState.value
    },
    get rowPinning() {
      return rowPinningState.value
    },
    get columnSizing() {
      return columnSizingState.value
    },
    get columnSizingInfo() {
      return columnSizingInfoState.value
    },
    get pagination() {
      return paginationState.value
    },
  },
})

const rows = computed(() => tableApi.getRowModel().rows)

watch(() => props.data, (next) => {
  data.value = next ? [...next] : []
}, props.watchOptions)

/** 列 meta 的扩展字段(断言为 Nuxt 约定的形状) */
function columnMeta(headerOrCell: Header<T, unknown> | Cell<T, unknown>): TableColumnMeta<T, unknown> | undefined {
  return headerOrCell.column.columnDef.meta as TableColumnMeta<T, unknown> | undefined
}

function valueUpdater<TValue extends Updater<any>>(updaterOrValue: TValue, ref: { value: TValue }) {
  ref.value = typeof updaterOrValue === 'function' ? updaterOrValue(ref.value) : updaterOrValue
}

/** 行选择:点击交互元素(链接 / 按钮 / 输入框等)内部时不触发 */
function onRowSelect(event: Event, row: TableRow<T>) {
  if (!props.onSelect) {
    return
  }
  const target = event.target as HTMLElement
  const isInteractive = target.closest('a, button, input, label, select, textarea')
  if (isInteractive) {
    return
  }

  event.preventDefault()
  event.stopPropagation()

  if ((event as KeyboardEvent).repeat) {
    return
  }

  props.onSelect(event, row)
}

function onRowHover(event: Event, row: TableRow<T> | null) {
  if (!props.onHover) {
    return
  }

  props.onHover(event, row)
}

function onRowContextmenu(event: Event, row: TableRow<T>) {
  if (!props.onContextmenu) {
    return
  }

  if (Array.isArray(props.onContextmenu)) {
    props.onContextmenu.forEach(fn => fn(event, row))
  } else {
    props.onContextmenu(event, row)
  }
}

/** 属性或函数(以单元格为参数)取类名 / 样式 / 合并数 */
function resolveValue<TValue, TArg = undefined>(prop: TValue | ((arg: TArg) => TValue), arg?: TArg): TValue | undefined {
  if (typeof prop === 'function') {
    return (prop as (arg: TArg) => TValue)(arg as TArg)
  }
  return prop
}

/** 固定列的定位样式(left / right) */
function getColumnStyles(column: Column<T>): Record<string, string> {
  const styles: Record<string, string> = {}

  const pinned = column.getIsPinned()
  if (pinned === 'left') {
    styles.left = `${column.getStart('left')}px`
  } else if (pinned === 'right') {
    styles.right = `${column.getAfter('right')}px`
  }

  return styles
}

/** 列定义显式启用排序且当前可排序时表头才提供排序交互 */
function isSortable(column: Column<T, unknown>) {
  return column.columnDef.enableSorting === true && column.getCanSort()
}

function getAriaSort(header: Header<T, unknown>): AriaAttributes['aria-sort'] {
  if (header.isPlaceholder || !isSortable(header.column)) {
    return undefined
  }

  const sorted = header.column.getIsSorted()
  if (!sorted) {
    return 'none'
  }

  const sortableIds = new Set(tableApi.getVisibleLeafColumns()
    .filter(isSortable)
    .map(column => column.id))
  const primary = tableApi.getState().sorting.find(({ id }) => sortableIds.has(id))

  if (primary?.id !== header.column.id) {
    return 'none'
  }

  return sorted === 'asc' ? 'ascending' : 'descending'
}

/** sticky 生效范围:true 表头表尾都固定 */
const stickyThead = computed(() => props.sticky === true || props.sticky === 'header')
const stickyTfoot = computed(() => props.sticky === true || props.sticky === 'footer')

defineExpose({ tableRef, tableApi })
</script>

<template>
  <Primitive
    :as="props.as ?? 'div'"
    v-bind="$attrs"
    data-slot="root"
    :class="cn('relative overflow-auto outline-primary/25 focus-visible:outline-3', props.ui?.root, props.class)"
  >
    <table data-slot="base" :class="cn('min-w-full overflow-clip', props.ui?.base)">
      <caption
        v-if="props.caption || !!slots.caption"
        data-slot="caption"
        :class="cn('sr-only', props.ui?.caption)"
      >
        <slot name="caption">
          {{ props.caption }}
        </slot>
      </caption>

      <thead
        data-slot="thead"
        :class="cn(
          'relative',
          stickyThead && 'sticky inset-x-0 top-0 z-1 bg-background/75 backdrop-blur-sm',
          props.ui?.thead,
        )"
      >
        <tr
          v-for="headerGroup in tableApi.getHeaderGroups()"
          :key="headerGroup.id"
          data-slot="tr"
          :class="cn(props.ui?.tr)"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :data-pinned="header.column.getIsPinned()"
            :scope="header.colSpan > 1 ? 'colgroup' : 'col'"
            :colspan="header.colSpan > 1 ? header.colSpan : undefined"
            :rowspan="header.rowSpan > 1 ? header.rowSpan : undefined"
            :aria-sort="getAriaSort(header)"
            data-slot="th"
            :class="cn(
              'px-4 py-3.5 text-start text-sm font-semibold text-foreground [&:has([role=checkbox])]:pe-0',
              header.column.getIsPinned() && 'sticky z-1 bg-background/75',
              resolveValue(columnMeta(header)?.class?.th, header),
              props.ui?.th,
            )"
            :style="[
              getColumnStyles(header.column),
              resolveValue(columnMeta(header)?.style?.th, header),
            ]"
          >
            <slot :name="`${header.id}-header`" v-bind="header.getContext()">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </slot>
          </th>
        </tr>

        <tr
          data-slot="separator"
          :class="cn('absolute start-0 z-1 h-px w-full bg-border', props.ui?.separator)"
        />
      </thead>

      <tbody
        data-slot="tbody"
        :class="cn(
          'isolate divide-y divide-border',
          '[&>tr]:data-[selectable=true]:hover:bg-muted/50 [&>tr]:data-[selectable=true]:outline-primary/25 [&>tr]:data-[selectable=true]:focus-visible:outline-3 [&>tr]:data-[selectable=true]:-outline-offset-3',
          props.ui?.tbody,
        )"
      >
        <slot name="body-top" />

        <template v-if="rows.length">
          <template v-for="row in rows" :key="row.id">
            <tr
            :data-selected="row.getIsSelected()"
            :data-selectable="!!props.onSelect || !!props.onHover || !!props.onContextmenu"
            :data-expanded="row.getIsExpanded()"
            :data-pinned="row.getIsPinned() || undefined"
            :tabindex="props.onSelect ? 0 : undefined"
            data-slot="tr"
            :class="cn('data-[selected=true]:bg-muted/50', resolveValue((tableApi.options.meta as TableMetaExt<T> | undefined)?.class?.tr, row), props.ui?.tr)"
            :style="[resolveValue((tableApi.options.meta as TableMetaExt<T> | undefined)?.style?.tr, row)]"
            @click="onRowSelect($event, row)"
            @keydown.self.exact.enter.space="onRowSelect($event, row)"
            @pointerenter="onRowHover($event, row)"
            @pointerleave="onRowHover($event, null)"
            @contextmenu="onRowContextmenu($event, row)"
          >
            <td
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              :data-pinned="cell.column.getIsPinned()"
              :colspan="resolveValue(columnMeta(cell)?.colspan?.td, cell)"
              :rowspan="resolveValue(columnMeta(cell)?.rowspan?.td, cell)"
              data-slot="td"
              :class="cn(
                'whitespace-nowrap p-4 text-sm text-muted-foreground [&:has([role=checkbox])]:pe-0',
                cell.column.getIsPinned() && 'sticky z-1 bg-background/75',
                resolveValue(columnMeta(cell)?.class?.td, cell),
                props.ui?.td,
              )"
              :style="[
                getColumnStyles(cell.column),
                resolveValue(columnMeta(cell)?.style?.td, cell),
              ]"
            >
              <slot :name="`${cell.column.id}-cell`" v-bind="cell.getContext()">
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </slot>
            </td>
          </tr>

          <tr v-if="row.getIsExpanded()" data-slot="tr" :class="cn(props.ui?.tr)">
            <td :colspan="row.getVisibleCells().length" data-slot="td" :class="cn(props.ui?.td)">
              <slot name="expanded" :row="row" />
            </td>
          </tr>
          </template>
        </template>

        <tr v-else-if="props.loading && !!slots.loading">
          <td
            :colspan="tableApi.getVisibleLeafColumns().length"
            data-slot="loading"
            :class="cn('py-6 text-center', props.ui?.loading)"
          >
            <slot name="loading" />
          </td>
        </tr>

        <tr v-else-if="props.loading">
          <td :colspan="tableApi.getVisibleLeafColumns().length" data-slot="loading" :class="cn('py-6', props.ui?.loading)">
            <div class="flex flex-col gap-2">
              <XSkeleton v-for="index in 3" :key="index" variant="text" class="h-4" />
            </div>
          </td>
        </tr>

        <tr v-else>
          <td
            :colspan="tableApi.getVisibleLeafColumns().length"
            data-slot="empty"
            :class="cn('py-6 text-center text-sm text-muted-foreground', props.ui?.empty)"
          >
            <slot name="empty">
              {{ props.empty }}
            </slot>
          </td>
        </tr>

        <slot name="body-bottom" />
      </tbody>

      <tfoot
        v-if="hasFooter"
        data-slot="tfoot"
        :class="cn(
          'relative [&>[data-slot=separator]]:z-2',
          stickyTfoot && 'sticky inset-x-0 bottom-0 z-1 bg-background/75 backdrop-blur-sm',
          props.ui?.tfoot,
        )"
      >
        <tr
          data-slot="separator"
          :class="cn('absolute start-0 z-1 h-px w-full bg-border', props.ui?.separator)"
        />

        <tr
          v-for="footerGroup in tableApi.getFooterGroups()"
          :key="footerGroup.id"
          data-slot="tr"
          :class="cn(props.ui?.tr)"
        >
          <th
            v-for="header in footerGroup.headers"
            :key="header.id"
            :data-pinned="header.column.getIsPinned()"
            :colspan="header.colSpan > 1 ? header.colSpan : undefined"
            :rowspan="header.rowSpan > 1 ? header.rowSpan : undefined"
            data-slot="th"
            :class="cn(
              'px-4 py-3.5 text-start text-sm font-semibold text-foreground',
              header.column.getIsPinned() && 'sticky z-1 bg-background/75',
              resolveValue(columnMeta(header)?.class?.th, header),
              props.ui?.th,
            )"
            :style="[
              getColumnStyles(header.column),
              resolveValue(columnMeta(header)?.style?.th, header),
            ]"
          >
            <slot :name="`${header.id}-footer`" v-bind="header.getContext()">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.footer"
                :props="header.getContext()"
              />
            </slot>
          </th>
        </tr>
      </tfoot>
    </table>
  </Primitive>
</template>
