<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { parseStringToDateValue } from 'reka-ui/date'
import XInputDate from '@/components/kit/XInputDate.vue'

const dateValue = parseStringToDateValue('2025-06-15', today(getLocalTimeZone()))
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputDate :model-value="dateValue" size="sm" class="w-48" />
      <XInputDate :model-value="dateValue" size="md" class="w-48" />
      <XInputDate :model-value="dateValue" size="lg" class="w-48" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInputDate :model-value="dateValue" color="success" variant="soft" class="w-48" />
      <XInputDate :model-value="dateValue" color="warning" variant="subtle" class="w-48" />
      <XInputDate :model-value="dateValue" color="error" highlight class="w-48" />
    </div>
  </div>
</template>
