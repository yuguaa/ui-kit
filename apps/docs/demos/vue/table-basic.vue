<script setup lang="ts">
import { ref } from 'vue'
import { XTable } from '@/components/kit'

const columns = [
  { accessorKey: 'name', header: '姓名' },
  { accessorKey: 'age', header: '年龄' },
  { accessorKey: 'city', header: '城市' },
]

const data = ref([
  { key: '1', name: '张三', age: 32, city: '杭州' },
  { key: '2', name: '李四', age: 28, city: '成都' },
  { key: '3', name: '王五', age: 45, city: '北京' },
  { key: '4', name: '赵六', age: 24, city: '上海' },
])

/** 受控列筛选:城市包含「州」的行 */
const columnFilters = ref([{ id: 'city', value: '州' }])
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XTable
      :columns="columns"
      :data="data"
      caption="员工花名册"
      :column-filters-options="{ enableColumnFilters: true }"
      v-model:column-filters="columnFilters"
      sticky
    />
    <span class="text-xs text-muted-foreground">当前筛选:城市包含「{{ columnFilters[0]?.value }}」</span>
  </div>
</template>
