<script setup lang="ts">
import XScrollArea from '@/components/kit/XScrollArea.vue'

const cards = Array.from({ length: 10 }, (_, index) => index + 1)
</script>

<template>
  <XScrollArea :height="96" orientation="horizontal">
    <div
      v-for="card in cards"
      :key="card"
      class="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg bg-primary-1 text-sm text-primary-7"
    >
      卡片 {{ card }}
    </div>
  </XScrollArea>
</template>
