<script setup lang="ts">
import XInputTags from '@/components/kit/XInputTags.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputTags :model-value="['Nuxt']" size="sm" class="w-64" />
      <XInputTags :model-value="['Nuxt']" size="md" class="w-64" />
      <XInputTags :model-value="['Nuxt']" size="lg" class="w-64" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInputTags :model-value="['Nuxt']" color="success" variant="soft" class="w-64" />
      <XInputTags :model-value="['Nuxt']" color="warning" variant="subtle" class="w-64" />
      <XInputTags :model-value="['Nuxt']" color="error" highlight class="w-64" />
    </div>
  </div>
</template>
