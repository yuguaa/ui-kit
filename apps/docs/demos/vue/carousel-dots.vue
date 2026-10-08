<script setup lang="ts">
import XCarousel from '@/components/kit/XCarousel.vue'

const items = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
]
</script>

<template>
  <XCarousel :items="items" :arrows="false" :dots="true" autoplay :interval="2000">
    <template #item="{ item }">
      <div class="flex h-24 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide {{ item.key }}</div>
    </template>
  </XCarousel>
</template>
