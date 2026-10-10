<script setup lang="ts">
import { ref } from 'vue'
import XListbox from '@/components/kit/XListbox.vue'

const items = [
  { key: 'zh', label: '简体中文' },
  { key: 'en', label: 'English' },
  { key: 'ja', label: '日本語' },
]

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const selected = ref<Record<string, string[]>>({ xs: ['zh'], sm: [], md: [], lg: [], xl: [] })

function select(size: string) {
  return (key: string) => {
    selected.value[size] = [key]
  }
}
</script>

<template>
  <div class="flex w-full flex-wrap items-start gap-4">
    <div v-for="size in sizes" :key="size" class="w-32">
      <p class="mb-2 text-sm font-medium">{{ size }}</p>
      <XListbox
        :items="items"
        :size="size"
        :selected="selected[size]"
        @select="select(size)"
      />
    </div>
  </div>
</template>
