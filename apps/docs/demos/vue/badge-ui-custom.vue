<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XBadge
      color="info"
      label="ui 插槽"
      :ui="{ base: 'rounded-full px-3 shadow-sm', label: 'tracking-wide' }"
    />
    <XBadge
      as="a"
      href="/docs"
      color="primary"
      variant="outline"
      label="as 渲染为链接"
    />
  </div>
</template>
