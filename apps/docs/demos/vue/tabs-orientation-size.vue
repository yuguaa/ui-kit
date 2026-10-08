<script setup lang="ts">
import { ref } from 'vue'
import XTabs from '@/components/kit/XTabs.vue'

const items = [
  { key: 'a', label: '概览', content: '概览面板内容。' },
  { key: 'b', label: '详情', content: '详情面板内容。' },
  { key: 'c', label: '设置', content: '设置面板内容。' },
]

const verticalKey = ref('a')
const smKey = ref('a')
const mdKey = ref('a')
const lgKey = ref('a')
</script>

<template>
  <div class="flex w-full flex-col gap-8">
    <XTabs
      :active-key="verticalKey"
      orientation="vertical"
      :items="items"
      @change="verticalKey = $event"
    />
    <XTabs
      :active-key="smKey"
      size="sm"
      :items="items"
      @change="smKey = $event"
    />
    <XTabs
      :active-key="mdKey"
      size="md"
      :items="items"
      @change="mdKey = $event"
    />
    <XTabs
      :active-key="lgKey"
      size="lg"
      type="card"
      :items="items"
      @change="lgKey = $event"
    />
  </div>
</template>
