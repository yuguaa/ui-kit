<script setup lang="ts">
import XBreadcrumb from '@/components/kit/XBreadcrumb.vue'

const items = [
  { title: '首页', href: '/' },
  { title: '组件', href: '/components' },
  { title: '面包屑' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XBreadcrumb :items="items" color="primary" />
    <XBreadcrumb :items="items" color="success" />
    <XBreadcrumb :items="items" color="warning" />
  </div>
</template>
