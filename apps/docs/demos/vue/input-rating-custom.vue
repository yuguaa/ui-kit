<script setup lang="ts">
import { Heart } from '@lucide/vue'
import XInputRating from '@/components/kit/XInputRating.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center gap-6">
      <XInputRating :model-value="3" icon="star" empty-icon="star" color="warning" />
      <XInputRating :model-value="4" :icon="Heart" :empty-icon="Heart" color="error" />
    </div>
    <div class="flex flex-wrap items-center gap-6">
      <XInputRating
        :model-value="3"
        color="primary"
        :ui="{ root: 'gap-2', indicator: 'fill-error-6 text-error-6' }"
      />
      <XInputRating :model-value="2">
        <template #item="{ index }">
          <span class="flex size-6 items-center justify-center rounded-lg bg-muted text-xs">{{ index + 1 }}</span>
        </template>
      </XInputRating>
    </div>
  </div>
</template>
