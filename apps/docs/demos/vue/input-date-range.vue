<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@lucide/vue'
import XInputDate from '@/components/kit/XInputDate.vue'

const dateRange = ref<string | string[]>(['2025-06-01', '2025-06-15'])
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInputDate v-model="dateRange" range class="w-72" />
    <XInputDate
      v-model="dateRange"
      range
      :separator-icon="ArrowRight"
      class="w-72"
    />
  </div>
</template>
