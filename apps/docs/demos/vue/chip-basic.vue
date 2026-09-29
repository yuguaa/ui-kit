<script setup lang="ts">
import XChip from '@/components/kit/XChip.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XChip color="primary">Primary</XChip>
    <XChip color="success">Success</XChip>
    <XChip color="warning">Warning</XChip>
    <XChip color="error" closable>Error</XChip>
    <XChip color="info">
      <template #icon><XIcon name="info" size="sm" /></template>
      Info
    </XChip>
    <XChip color="neutral" size="sm">small</XChip>
  </div>
</template>
