<script setup lang="ts">
import { XInputRating } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XInputRating :model-value="3" size="sm" />
    <XInputRating :model-value="3" size="md" />
    <XInputRating :model-value="3" size="lg" />
  </div>
</template>
