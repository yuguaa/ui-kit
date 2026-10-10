<script setup lang="ts">
import XInputDate from '@/components/kit/XInputDate.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputDate :model-value="'2025-06-15'" size="sm" class="w-48" />
      <XInputDate :model-value="'2025-06-15'" size="md" class="w-48" />
      <XInputDate :model-value="'2025-06-15'" size="lg" class="w-48" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInputDate :model-value="'2025-06-15'" color="success" variant="soft" class="w-48" />
      <XInputDate :model-value="'2025-06-15'" color="warning" variant="subtle" class="w-48" />
      <XInputDate :model-value="'2025-06-15'" color="error" highlight class="w-48" />
    </div>
  </div>
</template>
