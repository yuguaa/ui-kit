<script setup lang="ts">
import { ref } from 'vue'
import { XButton, XSkeleton, XTable } from '@/components/kit'

const columns = [
  { accessorKey: 'name', header: '姓名' },
  { accessorKey: 'age', header: '年龄' },
  { accessorKey: 'city', header: '城市' },
]

const rows = [
  { key: '1', name: '张三', age: 32, city: '杭州' },
  { key: '2', name: '李四', age: 28, city: '成都' },
]

/** 加载态数据为空,展示 loading 插槽;切换后展示有数据状态 */
const loading = ref(true)
const data = ref<typeof rows>([])

function toggleLoading() {
  loading.value = !loading.value
  data.value = loading.value ? [] : rows
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XTable
      :columns="columns"
      :data="data"
      :loading="loading"
      :ui="{
        root: 'rounded-lg border shadow-xs',
        thead: 'bg-primary-1',
        th: 'text-primary-8',
        td: 'text-default',
        loading: 'py-10',
      }"
    >
      <template #caption>ui 插槽自定义示例</template>
      <template #loading>
        <div class="flex flex-col gap-2">
          <XSkeleton v-for="index in 3" :key="index" variant="text" class="h-4" />
        </div>
      </template>
    </XTable>

    <XTable :columns="columns" :data="[]" :ui="{ empty: 'py-10 text-base' }">
      <template #empty>
        <p class="text-error-6">一行数据都没有</p>
      </template>
    </XTable>

    <XButton size="xs" variant="outline" color="neutral" @click="toggleLoading">
      {{ loading ? '加载数据' : '重新加载' }}
    </XButton>
  </div>
</template>
