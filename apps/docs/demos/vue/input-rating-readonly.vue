<script setup lang="ts">
import { XInputRating } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XInputRating :model-value="3.5" allow-half readonly />
    <XInputRating :model-value="4" readonly />
  </div>
</template>
