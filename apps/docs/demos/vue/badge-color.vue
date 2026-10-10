<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'

const colors = ['primary', 'secondary', 'neutral', 'success', 'info', 'warning', 'error'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XBadge v-for="color in colors" :key="color" :color="color" :label="color" />
  </div>
  <div class="mt-6 flex flex-wrap items-center gap-8">
    <XBadge v-for="size in sizes" :key="size" :size="size" :label="size" />
  </div>
</template>
