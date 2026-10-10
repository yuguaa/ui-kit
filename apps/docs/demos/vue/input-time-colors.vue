<script setup lang="ts">
import { parseTime } from '@internationalized/date'
import XInputTime from '@/components/kit/XInputTime.vue'

const timeValue = parseTime('14:30')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInputTime :model-value="timeValue" size="sm" class="w-36" />
      <XInputTime :model-value="timeValue" size="md" class="w-36" />
      <XInputTime :model-value="timeValue" size="lg" class="w-36" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInputTime :model-value="timeValue" color="success" variant="soft" class="w-36" />
      <XInputTime :model-value="timeValue" color="warning" variant="subtle" class="w-36" />
      <XInputTime :model-value="timeValue" color="error" highlight class="w-36" />
    </div>
  </div>
</template>
