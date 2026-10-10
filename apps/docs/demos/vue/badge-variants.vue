<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'

const variants = ['solid', 'outline', 'soft', 'subtle'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XBadge v-for="variant in variants" :key="variant" :variant="variant" color="primary" label="primary" />
  </div>
  <div class="mt-6 flex flex-wrap items-center gap-8">
    <XBadge variant="solid" color="success" label="成功" />
    <XBadge variant="outline" color="warning" label="警告" />
    <XBadge variant="subtle" color="error" label="错误" />
  </div>
</template>
