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
        :items="items"
        :selected="selected"
        multiple
        filterable
        @select="selected = toggle(selected, $event)"
      />
    </div>
    <div>
      <p class="mb-2 text-sm font-medium">自定义占位与空提示</p>
      <XListbox
        :items="items"
        :selected="customSelected"
        multiple
        filterable
        search-placeholder="输入框架名称"
        empty-text="没有匹配的框架"
        @select="customSelected = toggle(customSelected, $event)"
      />
    </div>
  </div>
</template>
