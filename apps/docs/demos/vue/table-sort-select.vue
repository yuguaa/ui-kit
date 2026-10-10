<script setup lang="ts">
import { ref } from 'vue'
import { XButton } from '@/components/kit'
import { XTable } from '@/components/kit'

const columns = [
  { accessorKey: 'name', header: '姓名', enableSorting: true },
  { accessorKey: 'age', header: '年龄', enableSorting: true },
  { accessorKey: 'city', header: '城市' },
  {
    accessorKey: 'actions',
    header: '操作',
    cell: () => '···',
  },
]

const data = ref([
  { key: '1', name: '张三', age: 32, city: '杭州' },
  { key: '2', name: '李四', age: 28, city: '成都' },
  { key: '3', name: '王五', age: 45, city: '北京' },
  { key: '4', name: '赵六', age: 24, city: '上海' },
  { key: '5', name: '孙七', age: 37, city: '广州' },
  { key: '6', name: '周八', age: 29, city: '深圳' },
])

/** 受控排序状态 */
const sorting = ref<{ id: string; desc: boolean }[]>([])
/** 固定列:姓名在左,操作在右 */
const columnPinning = ref({ left: ['name'], right: ['actions'] })
/** 行选择状态(索引 → 是否选中) */
const rowSelection = ref<Record<string, boolean>>({})
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <div class="max-h-64 overflow-hidden rounded-md border">
      <XTable
        :columns="columns"
        :data="data"
        :sorting-options="{ enableSorting: true }"
        v-model:sorting="sorting"
        :column-pinning-options="{ enableColumnPinning: true }"
        v-model:column-pinning="columnPinning"
        :row-selection-options="{ enableRowSelection: true }"
        v-model:row-selection="rowSelection"
        sticky
      >
        <template #name-header="{ column }">
          <button type="button" class="inline-flex items-center gap-1" @click="column.toggleSorting()">
            姓名
            <span v-if="column.getIsSorted() === 'asc'">↑</span>
            <span v-else-if="column.getIsSorted() === 'desc'">↓</span>
          </button>
        </template>
        <template #age-header="{ column }">
          <button type="button" class="inline-flex items-center gap-1" @click="column.toggleSorting()">
            年龄
            <span v-if="column.getIsSorted() === 'asc'">↑</span>
            <span v-else-if="column.getIsSorted() === 'desc'">↓</span>
          </button>
        </template>
      </XTable>
    </div>
    <div class="flex items-center gap-2">
      <XButton size="xs" variant="outline" color="neutral" @click="columnPinning = {}">取消固定</XButton>
      <span class="text-xs text-muted-foreground">已选 {{ Object.keys(rowSelection).length }} 行</span>
    </div>
  </div>
</template>
