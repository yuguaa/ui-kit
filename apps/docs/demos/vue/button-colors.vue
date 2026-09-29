<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'

const colors = ['primary', 'secondary', 'neutral', 'success', 'info', 'warning', 'error'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton v-for="color in colors" :key="color" :color="color">{{ color }}</XButton>
  </div>
</template>
