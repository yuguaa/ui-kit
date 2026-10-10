<script setup lang="ts">
import XCarousel from '@/components/kit/XCarousel.vue'

const items = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }]
</script>

<template>
  <XCarousel :items="items">
    <template #default="{ item }">
      <div class="flex h-24 items-center justify-center rounded-lg bg-primary/10 text-primary">
        Slide {{ item.key }}
      </div>
    </template>
  </XCarousel>
</template>
