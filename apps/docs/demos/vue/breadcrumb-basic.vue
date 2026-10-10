<script setup lang="ts">
import XBreadcrumb from '@/components/kit/XBreadcrumb.vue'

const items = [
  { title: '首页', href: '/' },
  { title: '组件', href: '/components' },
  { title: '导航', href: '/components/navigation' },
  { title: '面包屑' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XBreadcrumb :items="items" />
  </div>
</template>
