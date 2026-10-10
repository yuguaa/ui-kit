<script setup lang="ts">
import { XColorPicker } from '@/components/kit'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-end gap-6">
      <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
        <XColorPicker :size="size" />
        <span class="text-xs text-muted-foreground">{{ size }}</span>
      </div>
    </div>
  </div>
</template>
