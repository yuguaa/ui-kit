<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XBadge label="新功能" />
    <XBadge color="success" label="在线" />
    <XBadge :count="5">消息</XBadge>
    <XBadge color="error" :count="120">订单</XBadge>
    <XBadge color="warning" dot>通知</XBadge>
  </div>
</template>
