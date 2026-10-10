<script setup lang="ts">
import XInputRating from '@/components/kit/XInputRating.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center gap-6">
      <XInputRating :model-value="3" color="primary" />
      <XInputRating :model-value="3" color="success" />
      <XInputRating :model-value="3" color="warning" />
      <XInputRating :model-value="3" color="error" />
    </div>
    <div class="flex flex-wrap items-center gap-6">
      <XInputRating :model-value="3" />
      <XInputRating :model-value="3" orientation="vertical" />
    </div>
  </div>
</template>
