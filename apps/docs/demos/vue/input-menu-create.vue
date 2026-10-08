<script setup lang="ts">
import { ref } from 'vue'
import XInputMenu from '@/components/kit/XInputMenu.vue'

const items = [
  { label: '上海', value: 'sh' },
  { label: '北京', value: 'bj' },
  { label: '广州', value: 'gz' },
]

const last = ref('')
const created = ref<string[]>([])

function handleSelect(item: { label: string, value: string }) {
  last.value = item.label
}

function handleCreate(value: string) {
  created.value.push(value)
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputMenu
        :items="items"
        clearable
        create-item
        placeholder="搜索或输入新城市"
        class="w-56"
        @select="handleSelect"
        @create="handleCreate"
      />
    </div>
    <p class="text-sm text-muted-foreground">
      最近选择：{{ last || '—' }}，已创建：{{ created.join('、') || '—' }}
    </p>
  </div>
</template>
