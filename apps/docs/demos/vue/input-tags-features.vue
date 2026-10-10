<script setup lang="ts">
import XInputTags from '@/components/kit/XInputTags.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputTags :model-value="['Vue', 'Nuxt']" :max="2" class="w-64" />
      <XInputTags :model-value="['Nuxt']" max-length="4" placeholder="标签最多 4 个字符" class="w-64" />
      <XInputTags :model-value="['Nuxt']" delete-icon="trash" class="w-64" />
    </div>
  </div>
</template>
