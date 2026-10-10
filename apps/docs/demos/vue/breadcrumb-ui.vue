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
    <XBreadcrumb
      :items="items"
      :ui="{
        link: 'px-2 py-1 bg-primary-1 rounded-full',
        linkLabel: 'tracking-wide',
        separatorIcon: 'text-primary-6',
      }"
    />
  </div>
</template>
