<script setup lang="ts">
import XProgress from '@/components/kit/XProgress.vue'
</script>

<template>
  <div class="flex h-44 w-full items-start gap-10">
    <div class="flex h-full w-12 flex-col">
      <XProgress :model-value="70" orientation="vertical" status class="h-full" />
    </div>
    <div class="flex h-full w-12 flex-col">
      <XProgress :model-value="30" orientation="vertical" status inverted color="success" class="h-full" />
    </div>
  </div>
</template>
