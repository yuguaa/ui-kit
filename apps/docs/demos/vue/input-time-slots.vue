<script setup lang="ts">
import { parseTime } from '@internationalized/date'
import { AlarmClock } from '@lucide/vue'
import XInputTime from '@/components/kit/XInputTime.vue'

const timeValue = parseTime('14:30')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInputTime :model-value="timeValue" class="w-44">
      <template #leading>
        <AlarmClock class="size-5 text-success" />
      </template>
      <template #trailing>
        <span class="text-xs text-muted-foreground">下午</span>
      </template>
    </XInputTime>
    <XInputTime
      :model-value="['09:00', '18:00']"
      range
      class="w-56"
      :ui="{
        base: 'rounded-xl ring-2 ring-inset ring-primary',
        separatorIcon: 'text-error',
      }"
    />
  </div>
</template>
