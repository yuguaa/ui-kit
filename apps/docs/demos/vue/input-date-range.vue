<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { parseStringToDateValue } from 'reka-ui/date'
import { ref } from 'vue'
import { ArrowRight } from '@lucide/vue'
import XInputDate from '@/components/kit/XInputDate.vue'

const dateRange = ref([
  parseStringToDateValue('2025-06-01', today(getLocalTimeZone())),
  parseStringToDateValue('2025-06-15', today(getLocalTimeZone())),
])
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
