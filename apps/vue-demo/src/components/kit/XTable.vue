<script setup lang="ts">
/**
 * XTable 表格：基于 TanStack Table 的行列数据展示。
 * 支持列排序、行选择、固定表头、状态标签、加载与分页。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import {
  getCoreRowModel,
  getSortedRowModel,
  useVueTable,
  type RowSelectionState,
  type SortingState,
  type Updater,
} from '@tanstack/vue-table'
import { ArrowDown, ArrowUp, ArrowUpDown } from '@lucide/vue'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import XCheckbox from '@/components/kit/XCheckbox.vue'
import XPagination from '@/components/kit/XPagination.vue'
import XSkeleton from '@/components/kit/XSkeleton.vue'
import { cn } from '@/lib/utils'

type TableAlign = 'left' | 'center' | 'right'

export interface TableColumnData {
  /** 列 key */
  key: string
  /** 列标题 */
  title: string
  /** 列宽 */
  width?: number | string
  /** 对齐方式 */
  align?: TableAlign
  /** 是否可排序（点击表头切换升序 / 降序 / 取消） */
  sortable?: boolean
}

const props = withDefaults(defineProps<{
  /** 表格列配置 */
  columns: TableColumnData[]
  /** 数据源数组 */
  dataSource: Record<string, unknown>[]
  /** 行唯一键 */
  rowKey?: string
  /** 加载状态 */
  loading?: boolean
  /** 表格尺寸 */
  size?: 'sm' | 'md'
  /** 固定表头，内容区在 maxHeight 内滚动 */
  sticky?: boolean
  /** 内容区最大高度（sticky 时生效） */
  maxHeight?: number | string
  /** 显示行选择列 */
  rowSelection?: boolean
  /** 受控选中行（与 rowSelection 搭配） */
  selectedRowKeys?: string[]
  /** 分页配置（false 关闭分页） */
  pagination?: { current?: number; pageSize?: number; total?: number } | false
  class?: HTMLAttributes['class']
}>(), {
  rowKey: 'key',
  loading: false,
  size: 'md',
  sticky: false,
  rowSelection: false,
  pagination: () => ({ pageSize: 10 }),
})

const emit = defineEmits<{
  /** 页码或每页条数变化回调 */
  pageChange: [page: number, pageSize: number]
  /** 选中行变化回调 */
  selectionChange: [keys: string[]]
}>()

const alignClasses: Record<TableAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const innerPage = ref(1)
const sorting = ref<SortingState>([])
const innerSelection = ref<RowSelectionState>({})

/* 受控选中行转成 TanStack 的行选择状态；未传入时使用内部状态 */
const selectionState = computed<RowSelectionState>(() =>
  props.selectedRowKeys != null
    ? Object.fromEntries(props.selectedRowKeys.map((key) => [key, true]))
    : innerSelection.value,
)

const table = useVueTable({
  get data() {
    return props.dataSource
  },
  get columns() {
    return props.columns.map((column) => ({
      id: column.key,
      accessorFn: (row: Record<string, unknown>) => row[column.key],
      enableSorting: column.sortable ?? false,
    }))
  },
  getRowId: (row) => String(row[props.rowKey] ?? ''),
  state: {
    get sorting() {
      return sorting.value
    },
    get rowSelection() {
      return selectionState.value
    },
  },
  onSortingChange: (updater: Updater<SortingState>) => {
    sorting.value = typeof updater === 'function' ? updater(sorting.value) : updater
  },
  onRowSelectionChange: (updater: Updater<RowSelectionState>) => {
    const next = typeof updater === 'function' ? updater(selectionState.value) : updater
    if (props.selectedRowKeys == null) innerSelection.value = next
    emit('selectionChange', Object.keys(next).filter((key) => next[key]))
  },
  enableRowSelection: () => props.rowSelection,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
})

const pageSize = computed(() => (props.pagination ? props.pagination.pageSize ?? 10 : props.dataSource.length))
const total = computed(() => (props.pagination ? props.pagination.total ?? props.dataSource.length : props.dataSource.length))
const current = computed(() => (props.pagination ? props.pagination.current ?? innerPage.value : 1))

const sortedRows = computed(() => table.getSortedRowModel().rows)
const rows = computed(() =>
  props.pagination
    ? sortedRows.value.slice((current.value - 1) * pageSize.value, current.value * pageSize.value)
    : sortedRows.value,
)

const cellClasses = computed(() => (props.size === 'sm' ? 'px-2 py-1.5 text-xs' : 'px-3 py-2.5 text-sm'))
const headClasses = computed(() =>
  cn(props.size === 'sm' ? 'h-8 px-2 text-xs' : 'h-10 px-3', props.sticky && 'sticky top-0 z-10 bg-background'),
)
const containerClasses = computed(() =>
  props.sticky
    ? '[&>[data-slot=table-container]]:max-h-(--x-table-max-height) [&>[data-slot=table-container]]:overflow-auto'
    : undefined,
)
const containerStyle = computed(() =>
  props.sticky && props.maxHeight != null
    ? { '--x-table-max-height': typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight }
    : undefined,
)

function onPageChange(page: number, size: number) {
  if (props.pagination && props.pagination.current == null) innerPage.value = page
  emit('pageChange', page, size)
}

/** 重新加载数据 */
function reload() {
  if (props.pagination && props.pagination.current == null) innerPage.value = 1
}

defineExpose({ reload })
</script>

<template>
  <div :class="cn('flex flex-col gap-2', props.class)">
    <Table :class="containerClasses" :style="containerStyle">
      <TableHeader>
        <TableRow>
          <TableHead v-if="rowSelection" :class="cn(headClasses, 'w-10')">
            <XCheckbox
              size="sm"
              aria-label="全选"
              :model-value="table.getIsAllRowsSelected()"
              :indeterminate="table.getIsSomeRowsSelected()"
              @update:model-value="table.toggleAllRowsSelected(Boolean($event))"
            />
          </TableHead>
          <TableHead
            v-for="column in columns"
            :key="column.key"
            :style="{ width: column.width }"
            :class="cn(headClasses, alignClasses[column.align ?? 'left'])"
          >
            <slot name="headerCell" :column="column">
              <button
                v-if="column.sortable"
                type="button"
                :aria-label="`排序 ${column.title}`"
                class="inline-flex cursor-pointer items-center gap-1 outline-none"
                @click="table.getColumn(column.key)?.getToggleSortingHandler()?.($event)"
              >
                {{ column.title }}
                <ArrowUp v-if="table.getColumn(column.key)?.getIsSorted() === 'asc'" class="size-3.5" />
                <ArrowDown v-else-if="table.getColumn(column.key)?.getIsSorted() === 'desc'" class="size-3.5" />
                <ArrowUpDown v-else class="size-3.5 opacity-40" />
              </button>
              <template v-else>{{ column.title }}</template>
            </slot>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-if="loading" v-for="index in 3" :key="`skeleton-${index}`">
          <TableCell v-if="rowSelection" :class="cellClasses">
            <XSkeleton variant="text" class="h-4 w-4" />
          </TableCell>
          <TableCell v-for="column in columns" :key="column.key" :class="cellClasses">
            <XSkeleton variant="text" class="h-4" />
          </TableCell>
        </TableRow>
        <TableRow
          v-else
          v-for="row in rows"
          :key="row.id"
          :data-state="row.getIsSelected() ? 'selected' : undefined"
        >
          <TableCell v-if="rowSelection" :class="cellClasses">
            <XCheckbox
              size="sm"
              :aria-label="`选择第 ${row.index + 1} 行`"
              :model-value="row.getIsSelected()"
              @update:model-value="row.toggleSelected(Boolean($event))"
            />
          </TableCell>
          <TableCell
            v-for="column in columns"
            :key="column.key"
            :class="cn(cellClasses, alignClasses[column.align ?? 'left'])"
          >
            <slot name="bodyCell" :column="column" :record="row.original" :index="row.index">
              {{ row.original[column.key] }}
            </slot>
          </TableCell>
        </TableRow>
        <TableRow v-if="!loading && rows.length === 0">
          <TableCell :colspan="columns.length + (rowSelection ? 1 : 0)" class="py-8 text-center text-muted-foreground">
            <slot name="emptyText">暂无数据</slot>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div v-if="pagination !== false && total > 0" class="flex justify-end">
      <XPagination :current="current" :total="total" :page-size="pageSize" @change="onPageChange" />
    </div>
  </div>
</template>
