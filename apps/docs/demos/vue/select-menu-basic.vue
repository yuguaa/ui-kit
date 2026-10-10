<script setup lang="ts">
import { ref } from 'vue'
import XSelectMenu from '@/components/kit/XSelectMenu.vue'

const selected = ref('apple')
const city = ref(['bj'])
const cleared = ref('apple')

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
]
const cityOptions = [
  { label: '北京', value: 'bj' },
  { label: '上海', value: 'sh' },
  { label: '广州', value: 'gz' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XSelectMenu v-model="selected" :options="options" class="w-48" />
      <XSelectMenu v-model="selected" show-search placeholder="可搜索" :options="options" class="w-48" />
      <XSelectMenu v-model="city" multiple placeholder="多选" :options="cityOptions" class="w-48" />
      <XSelectMenu placeholder="禁用" disabled :options="options" class="w-48" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XSelectMenu v-model="cleared" clearable :options="options" class="w-48" />
      <XSelectMenu v-model="city" multiple clearable placeholder="多选可清空" :options="cityOptions" class="w-48" />
    </div>
  </div>
</template>
