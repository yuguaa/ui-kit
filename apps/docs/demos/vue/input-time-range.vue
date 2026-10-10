<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@lucide/vue'
import XInputTime from '@/components/kit/XInputTime.vue'

const timeRange = ref<string | string[]>(['09:00', '18:00'])
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInputTime v-model="timeRange" range class="w-56" />
    <XInputTime
      v-model="timeRange"
      range
      :separator-icon="ArrowRight"
      class="w-56"
    />
  </div>
</template>
