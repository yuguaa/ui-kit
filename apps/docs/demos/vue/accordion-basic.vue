<script setup lang="ts">
import XAccordion from '@/components/kit/XAccordion.vue'

const items = [
  { label: '什么是 ui-kit？', content: '基于 Tailwind 与 Reka UI 的组件库，提供完整的属性、插槽与 API。' },
  { label: '如何安装？', content: '通过 shadcn CLI 添加组件即可使用。' },
  { label: '支持哪些框架？', content: '同时支持 Vue 3 与 React。', disabled: true },
]
</script>

<template>
  <XAccordion :items="items" default-value="0" class="w-full" />
</template>
