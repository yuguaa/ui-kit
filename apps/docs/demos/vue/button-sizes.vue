<script setup lang="ts">
import { XButton } from '@/components/kit'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton v-for="size in sizes" :key="size" :size="size">{{ size }}</XButton>
  </div>
</template>
