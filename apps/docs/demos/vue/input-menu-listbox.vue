<script setup lang="ts">
import { ref } from 'vue'
import XInputMenu from '@/components/kit/XInputMenu.vue'

const last = ref('')

const items = [
  { label: '上海', value: 'sh', description: '直辖市' },
  { label: '北京', value: 'bj', description: '首都' },
  { label: '广州', value: 'gz', description: '省会' },
  { label: '深圳', value: 'sz', description: '特区' },
]

function handleSelect(item: { label: string, description: string }) {
  last.value = item.description
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputMenu
        :items="items"
        mode="listbox"
        search-input
        placeholder="点击选择城市"
        class="w-56"
        @select="handleSelect"
      />
      <XInputMenu
        :items="items"
        mode="listbox"
        :search-input="{ placeholder: '输入城市名过滤' }"
        class="w-56"
        @select="handleSelect"
      >
        <template #search-input="{ keyword, 'on-input': onInput }">
          <input
            :value="keyword"
            placeholder="自定义搜索框"
            class="h-8 w-full rounded-md px-2 text-sm ring-1 ring-inset ring-input focus-visible:ring-2 focus-visible:ring-ring"
            @input="onInput(($event.target as HTMLInputElement).value)"
          >
        </template>
      </XInputMenu>
    </div>
    <p class="text-sm text-muted-foreground">最近选择：{{ last || '—' }}</p>
  </div>
</template>
