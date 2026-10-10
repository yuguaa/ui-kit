<script setup lang="ts">
import { CalendarCheck } from '@lucide/vue'
import XInputDate from '@/components/kit/XInputDate.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInputDate :model-value="'2025-06-15'" class="w-56">
      <template #leading>
        <CalendarCheck class="size-5 text-success" />
      </template>
      <template #trailing>
        <span class="text-xs text-muted-foreground">截止</span>
      </template>
    </XInputDate>
    <XInputDate
      :model-value="['2025-06-01', '2025-06-15']"
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
