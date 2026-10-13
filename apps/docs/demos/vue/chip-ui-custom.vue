<script setup lang="ts">
import XChip from '@/components/kit/XChip.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XChip
      standalone
      size="3xl"
      color="info"
      text="ui 插槽"
      :ui="{ base: 'rounded-md px-3' }"
    />
    <XChip
      as="span"
      standalone
      size="3xl"
      color="success"
      text="as 渲染为 span"
    />
  </div>
</template>
