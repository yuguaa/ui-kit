<script setup lang="ts">
/**
 * XTable 表格：展示行列数据，支持状态标签、加载与分页。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import XPagination from '@/components/kit/XPagination.vue'
import XSkeleton from '@/components/kit/XSkeleton.vue'
import { cn } from '@/lib/utils'

export interface TableColumnData {
  /** 列 key */
  key: string
  /** 列标题 */
  title: string
  /** 列宽 */
  width?: number | string
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
  /** 分页配置（false 关闭分页） */
  pagination?: { current?: number; pageSize?: number; total?: number } | false
  class?: HTMLAttributes['class']
}>(), {
  rowKey: 'key',
  loading: false,
  size: 'md',
  pagination: () => ({ pageSize: 10 }),
})

const emit = defineEmits<{
  /** 页码或每页条数变化回调 */
  pageChange: [page: number, pageSize: number]
}>()

const innerPage = ref(1)

const pageSize = computed(() => (props.pagination ? props.pagination.pageSize ?? 10 : props.dataSource.length))
const total = computed(() => (props.pagination ? props.pagination.total ?? props.dataSource.length : props.dataSource.length))
const current = computed(() => (props.pagination ? props.pagination.current ?? innerPage.value : 1))

const rows = computed(() =>
  props.pagination
    ? props.dataSource.slice((current.value - 1) * pageSize.value, current.value * pageSize.value)
    : props.dataSource,
)

const cellClasses = computed(() => (props.size === 'sm' ? 'px-2 py-1.5 text-xs' : 'px-3 py-2.5 text-sm'))

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead v-for="column in columns" :key="column.key" :style="{ width: column.width }">
            <slot name="headerCell" :column="column">{{ column.title }}</slot>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-if="loading" v-for="index in 3" :key="`skeleton-${index}`">
          <TableCell v-for="column in columns" :key="column.key" :class="cellClasses">
            <XSkeleton variant="text" class="h-4" />
          </TableCell>
        </TableRow>
        <TableRow v-else v-for="(record, index) in rows" :key="String(record[rowKey] ?? index)">
          <TableCell v-for="column in columns" :key="column.key" :class="cellClasses">
            <slot name="bodyCell" :column="column" :record="record" :index="index">
              {{ record[column.key] }}
            </slot>
          </TableCell>
        </TableRow>
        <TableRow v-if="!loading && rows.length === 0">
          <TableCell :colspan="columns.length" class="py-8 text-center text-muted-foreground">
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
