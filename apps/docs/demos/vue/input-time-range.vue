<script setup lang="ts">
import { ref } from 'vue'
import XInputTime from '@/components/kit/XInputTime.vue'

const timeRange = ref<string | string[]>(['09:00', '18:00'])
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XInputTime v-model="timeRange" range class="w-40" />
  </div>
</template>
