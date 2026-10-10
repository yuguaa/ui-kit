<script setup lang="ts">
import { h } from 'vue'
import XBreadcrumb from '@/components/kit/XBreadcrumb.vue'
import XIcon from '@/components/kit/XIcon.vue'

const items = [
  { title: '首页', href: '/', icon: h(XIcon, { name: 'dashboard', size: 'sm' }) },
  { title: '组件', href: '/components', icon: h(XIcon, { name: 'bell', size: 'sm' }) },
  { title: '导航', href: '/components/navigation', icon: h(XIcon, { name: 'menu', size: 'sm' }) },
  { title: '面包屑', icon: h(XIcon, { name: 'info', size: 'sm' }) },
]
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XBreadcrumb :items="items" separator-icon="chevron-down" />
    <XBreadcrumb :items="items">
      <template #separator>
        <span class="text-muted-foreground">/</span>
      </template>
    </XBreadcrumb>
  </div>
</template>
