<script setup lang="ts">
import { ref } from 'vue'
import XInputDate from '@/components/kit/XInputDate.vue'

const dateRange = ref<string | string[]>(['2025-06-01', '2025-06-15'])
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XInputDate v-model="dateRange" range class="w-64" />
  </div>
</template>
