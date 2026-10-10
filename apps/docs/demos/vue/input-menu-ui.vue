<script setup lang="ts">
import { ref } from 'vue'
import { MapPin } from '@lucide/vue'
import XInputMenu from '@/components/kit/XInputMenu.vue'

const last = ref('')

const cities = [
  { name: '上海', id: 'sh' },
  { name: '北京', id: 'bj', note: '首都' },
  { name: '广州', id: 'gz' },
]

const food = [
  { label: '苹果', value: 'apple', alias: '水果' },
  { label: '香蕉', value: 'banana', alias: '水果' },
  { label: '西兰花', value: 'broccoli', alias: '蔬菜' },
]

function handleSelect(item: { name: string }) {
  last.value = item.name
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputMenu
        :items="cities"
        label-key="name"
        value-key="id"
        description-key="note"
        selected-icon="star"
        clearable
        clear-icon="trash"
        placeholder="选择城市"
        class="w-56"
        @select="handleSelect"
      >
        <template #leading>
          <MapPin class="size-4 text-primary-6" />
        </template>
      </XInputMenu>
      <XInputMenu
        :items="food"
        :filter-fields="['alias']"
        placeholder="输入品类过滤"
        class="w-56"
      />
      <XInputMenu
        :items="cities"
        label-key="name"
        value-key="id"
        class="w-56"
        :ui="{ root: 'rounded-md ring-1 ring-primary-2', base: 'ring-primary-4', item: 'rounded-lg', itemLabel: 'font-medium' }"
      />
    </div>
    <p class="text-sm text-muted-foreground">最近选择：{{ last || '—' }}</p>
  </div>
</template>
