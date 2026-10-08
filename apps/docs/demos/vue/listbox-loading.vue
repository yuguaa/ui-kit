<script setup lang="ts">
import XListbox from '@/components/kit/XListbox.vue'

const items = [
  { key: 'a', label: '选项 A' },
  { key: 'b', label: '选项 B' },
  { key: 'c', label: '选项 C' },
]
</script>

<template>
  <XListbox :items="items" loading />
</template>
