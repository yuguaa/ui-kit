<script setup lang="ts">
import XInputTime from '@/components/kit/XInputTime.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputTime :model-value="'14:30'" size="sm" class="w-36" />
      <XInputTime :model-value="'14:30'" size="md" class="w-36" />
      <XInputTime :model-value="'14:30'" size="lg" class="w-36" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInputTime :model-value="'14:30'" color="success" variant="soft" class="w-36" />
      <XInputTime :model-value="'14:30'" color="warning" variant="subtle" class="w-36" />
      <XInputTime :model-value="'14:30'" color="error" highlight class="w-36" />
    </div>
  </div>
</template>
