<script setup lang="ts">
import { ref } from 'vue'
import XSelectMenu from '@/components/kit/XSelectMenu.vue'

const selected = ref('apple')
const cities = ref(['bj'])
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
  <div class="flex w-full flex-wrap items-center gap-4">
    <XSelectMenu v-model="selected" :options="options" class="w-48" />
    <XSelectMenu v-model="selected" show-search placeholder="可搜索" :options="options" class="w-48" />
    <XSelectMenu v-model="cities" multiple placeholder="多选" :options="cityOptions" class="w-48" />
    <XSelectMenu placeholder="禁用" disabled :options="options" class="w-48" />
  </div>
</template>
