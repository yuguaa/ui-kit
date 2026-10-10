<script setup lang="ts">
import { ref } from 'vue'
import XListbox from '@/components/kit/XListbox.vue'

const items = [
  { key: 'ts', label: 'TypeScript' },
  { key: 'vue', label: 'Vue.js' },
  { key: 'react', label: 'React' },
  { key: 'nuxt', label: 'Nuxt' },
  { key: 'svelte', label: 'Svelte' },
]

const selected = ref<string[]>([])
const customSelected = ref<string[]>([])

function toggle(list: string[], key: string) {
  return list.includes(key) ? list.filter((item) => item !== key) : [...list, key]
}
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2">
    <div>
      <p class="mb-2 text-sm font-medium">搜索过滤</p>
      <XListbox
        v-model="selected"
        :items="items"
        value-key="key"
        multiple
        filter
      />
    </div>
    <div>
      <p class="mb-2 text-sm font-medium">自定义占位与空提示</p>
      <XListbox
        v-model="customSelected"
        :items="items"
        value-key="key"
        multiple
        :filter="{ placeholder: '输入框架名称' }"
      />
    </div>
  </div>
</template>
