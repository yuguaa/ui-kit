<script setup lang="ts">
import XCarousel from '@/components/kit/XCarousel.vue'

const items = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
]
</script>

<template>
  <XCarousel :items="items" orientation="vertical">
    <template #item="{ item }">
      <div class="flex h-24 items-center justify-center rounded-lg bg-info/10 text-info">Slide {{ item.key }}</div>
    </template>
  </XCarousel>
</template>
