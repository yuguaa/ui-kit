<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'

const colors = ['primary', 'secondary', 'neutral', 'success', 'info', 'warning', 'error'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XBadge v-for="color in colors" :key="color" :color="color" :count="5">消息</XBadge>
  </div>
  <div class="mt-6 flex flex-wrap items-center gap-8">
    <XBadge size="xs" :count="5">消息</XBadge>
    <XBadge size="sm" :count="5">消息</XBadge>
    <XBadge size="md" :count="5">消息</XBadge>
    <XBadge size="lg" :count="5">消息</XBadge>
    <XBadge size="xl" :count="5">消息</XBadge>
  </div>
</template>
