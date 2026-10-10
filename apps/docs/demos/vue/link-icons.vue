<script setup lang="ts">
import XIcon from '@/components/kit/XIcon.vue'
import XLink from '@/components/kit/XLink.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XLink to="/docs">
      <template #leading>
        <XIcon name="book" size="sm" />
      </template>
      文档
    </XLink>
    <XLink to="/examples">
      示例
      <template #trailing>
        <XIcon name="chevron-right" size="sm" />
      </template>
    </XLink>
  </div>
</template>
