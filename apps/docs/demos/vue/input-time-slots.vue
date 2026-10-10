<script setup lang="ts">
import { AlarmClock } from '@lucide/vue'
import XInputTime from '@/components/kit/XInputTime.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInputTime :model-value="'14:30'" class="w-44">
      <template #leading>
        <AlarmClock class="size-5 text-success-6" />
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
        base: 'rounded-xl ring-2 ring-inset ring-primary-6',
        separatorIcon: 'text-error-6',
      }"
    />
  </div>
</template>
