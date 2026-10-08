<script setup lang="ts">
import { XCheckbox } from '@/components/kit'

const colors = ['primary', 'secondary', 'neutral', 'success', 'info', 'warning', 'error'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XCheckbox v-for="color in colors" :key="color" :color="color" checked :label="color" />
    <XCheckbox color="warning" indeterminate label="indeterminate" />
  </div>
</template>
