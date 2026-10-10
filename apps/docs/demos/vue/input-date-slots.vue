<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { parseStringToDateValue } from 'reka-ui/date'
import { CalendarCheck } from '@lucide/vue'
import XInputDate from '@/components/kit/XInputDate.vue'

const dateValue = parseStringToDateValue('2025-06-15', today(getLocalTimeZone()))
const dateRangeValue = [
  parseStringToDateValue('2025-06-01', today(getLocalTimeZone())),
  parseStringToDateValue('2025-06-15', today(getLocalTimeZone())),
]
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInputDate :model-value="dateValue" class="w-56">
      <template #leading>
        <CalendarCheck class="size-5 text-success" />
      </template>
      <template #trailing>
        <span class="text-xs text-muted-foreground">截止</span>
      </template>
    </XInputDate>
    <XInputDate
      :model-value="dateRangeValue"
      range
      class="w-72"
      :ui="{
        base: 'rounded-xl ring-2 ring-inset ring-primary',
        separatorIcon: 'text-error',
      }"
    >
      <template #separator>
        <span class="px-1 text-xs text-muted-foreground">至</span>
      </template>
    </XInputDate>
  </div>
</template>
