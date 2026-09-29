<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'

const variants = ['solid', 'outline', 'soft', 'subtle'] as const
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-8">
      <XBadge v-for="variant in variants" :key="variant" :variant="variant" :count="5" color="primary">
        消息
      </XBadge>
    </div>
    <div class="flex flex-wrap items-center gap-8">
      <XBadge variant="solid" color="success" :count="8">订单</XBadge>
      <XBadge variant="outline" color="warning" :count="8">订单</XBadge>
      <XBadge variant="subtle" color="error" :count="8">订单</XBadge>
    </div>
  </div>
</template>
