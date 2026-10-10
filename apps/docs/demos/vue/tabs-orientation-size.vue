<script setup lang="ts">
import { ref } from 'vue'
import { XTabs } from '@/components/kit'

const items = [
  { value: 'a', label: '概览', content: '概览面板内容。' },
  { value: 'b', label: '详情', content: '详情面板内容。' },
  { value: 'c', label: '设置', content: '设置面板内容。' },
]

const verticalKey = ref('a')
const xsKey = ref('a')
const lgKey = ref('a')
</script>

<template>
  <div class="flex w-full flex-col gap-8">
    <XTabs v-model="verticalKey" orientation="vertical" :items="items" />
    <XTabs v-model="xsKey" size="xs" :items="items" />
    <XTabs v-model="lgKey" size="lg" :items="items" />
  </div>
</template>
