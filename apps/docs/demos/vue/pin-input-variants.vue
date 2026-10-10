<script setup lang="ts">
import { XPinInput } from '@/components/kit'

const variants = ['outline', 'soft', 'subtle', 'ghost', 'none'] as const
const colors = ['primary', 'secondary', 'neutral', 'success', 'info', 'warning', 'error'] as const
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-wrap items-center gap-4">
      <div v-for="variant in variants" :key="variant" class="flex flex-col items-center gap-1.5">
        <XPinInput :variant="variant" :length="4" />
        <span class="text-xs text-muted-foreground">{{ variant }}</span>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <div v-for="color in colors" :key="color" class="flex flex-col items-center gap-1.5">
        <XPinInput :color="color" :length="3" />
        <span class="text-xs text-muted-foreground">{{ color }}</span>
      </div>
    </div>
  </div>
</template>
