<script setup lang="ts">
import { XPinInput } from '@/components/kit'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-1.5">
      <XPinInput :size="size" :length="4" />
      <span class="text-xs text-muted-foreground">{{ size }}</span>
    </div>
  </div>
</template>
