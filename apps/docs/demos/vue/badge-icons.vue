<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'
import XAvatar from '@/components/kit/XAvatar.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XBadge color="info" label="带图标" icon="bell" />
    <XBadge color="success" label="两端图标" leading-icon="check" trailing-icon="chevron-right" />
    <XBadge color="warning" label="头像" :avatar="{ text: 'A', color: 'warning' }" />
    <XBadge color="primary" label="自定义头像" :avatar="{ text: 'Z' }" />
  </div>
</template>
