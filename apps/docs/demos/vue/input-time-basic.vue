<script setup lang="ts">
import { ref } from 'vue'
import XInputTime from '@/components/kit/XInputTime.vue'

const time = ref('14:30')
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XInputTime v-model="time" class="w-40" />
    <span class="text-sm text-muted-foreground">当前时间：{{ time }}</span>
  </div>
</template>
