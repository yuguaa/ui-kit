<script setup lang="ts">
import { parseTime } from '@internationalized/date'
import { ref } from 'vue'
import { ArrowRight } from '@lucide/vue'
import XInputTime from '@/components/kit/XInputTime.vue'

const timeRange = ref([parseTime('09:00'), parseTime('18:00')])
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
