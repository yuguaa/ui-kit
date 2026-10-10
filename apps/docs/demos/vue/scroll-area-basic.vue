<script setup lang="ts">
import XScrollArea from '@/components/kit/XScrollArea.vue'

const items = Array.from({ length: 12 }, (_, index) => ({ id: index, text: `滚动内容第 ${index + 1} 行` }))
</script>

<template>
  <XScrollArea :items="items" :height="160" class="w-full rounded-lg border border-border p-3">
    <template #default="{ item }">
      <div class="py-1 text-sm">{{ item.text }}</div>
    </template>
  </XScrollArea>
</template>
