<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date'
import { parseStringToDateValue } from 'reka-ui/date'
import { ref } from 'vue'
import XInputDate from '@/components/kit/XInputDate.vue'

const date = ref(parseStringToDateValue('2025-06-15', today(getLocalTimeZone())))
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XInputDate v-model="date" class="w-56" />
    <span class="text-sm text-muted-foreground">当前日期：{{ date }}</span>
  </div>
</template>
