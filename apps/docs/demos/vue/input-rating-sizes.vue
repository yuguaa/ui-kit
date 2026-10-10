<script setup lang="ts">
import XInputRating from '@/components/kit/XInputRating.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XInputRating :model-value="3" size="xs" />
    <XInputRating :model-value="3" size="sm" />
    <XInputRating :model-value="3" size="md" />
    <XInputRating :model-value="3" size="lg" />
    <XInputRating :model-value="3" size="xl" />
  </div>
  <div class="mt-6 flex flex-wrap items-center gap-6">
    <XInputRating :model-value="3.5" allow-half readonly />
    <XInputRating :model-value="3" disabled />
  </div>
</template>
