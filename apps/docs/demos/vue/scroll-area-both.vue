<script setup lang="ts">
import XScrollArea from '@/components/kit/XScrollArea.vue'

const cells = Array.from({ length: 30 }, (_, index) => index + 1)
</script>

<template>
  <XScrollArea :height="160" orientation="both">
    <div class="grid w-max grid-cols-5 gap-2">
      <div
        v-for="cell in cells"
        :key="cell"
        class="flex h-16 w-28 items-center justify-center rounded-md bg-info/10 text-sm text-info"
      >
        格 {{ cell }}
      </div>
    </div>
  </XScrollArea>
</template>
