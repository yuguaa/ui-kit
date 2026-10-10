<script setup lang="ts">
import XSplitter from '@/components/kit/XSplitter.vue'

const items = [
  { id: 'left', defaultSize: 30, minSize: 15 },
  { id: 'center', defaultSize: 40, minSize: 20 },
  { id: 'right', minSize: 20 },
]
</script>

<template>
  <div class="h-72 w-full">
    <XSplitter :items="items" class="h-full">
      <template #panel-0="{ item }">
        <div class="flex h-full items-center justify-center p-4 text-sm">左侧面板（{{ item.id }}）</div>
      </template>
      <template #panel-1="{ item }">
        <div class="flex h-full items-center justify-center p-4 text-sm">中间面板（{{ item.id }}）</div>
      </template>
      <template #panel-2="{ item }">
        <div class="flex h-full items-center justify-center p-4 text-sm">右侧面板（{{ item.id }}）</div>
      </template>
    </XSplitter>
  </div>
</template>
