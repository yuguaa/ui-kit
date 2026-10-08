<script setup lang="ts">
import XBreadcrumb from '@/components/kit/XBreadcrumb.vue'

const items = [
  { name: '首页', href: '/' },
  { name: '组件', href: '/components' },
  { name: '面包屑' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XBreadcrumb :items="items" label-key="name" />
  </div>
</template>
