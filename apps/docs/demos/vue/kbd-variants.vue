<script setup lang="ts">
import XKbd from '@/components/kit/XKbd.vue'

const variants = ['solid', 'outline', 'soft', 'subtle'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XKbd v-for="variant in variants" :key="variant" :variant="variant" color="primary" value="K" />
  </div>
  <div class="mt-4 flex flex-wrap items-center gap-3">
    <XKbd variant="outline" value="Ctrl" />
    <XKbd variant="outline" value="K" />
    <XKbd variant="solid" color="neutral" value="↵" />
  </div>
</template>
