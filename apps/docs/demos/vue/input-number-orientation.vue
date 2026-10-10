<script setup lang="ts">
import { ref } from 'vue'
import XInputNumber from '@/components/kit/XInputNumber.vue'

const horizontal = ref(0)
const vertical = ref(0)
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-8">
    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">horizontal（两侧步进）</span>
      <XInputNumber v-model="horizontal" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">vertical（右侧堆叠步进）</span>
      <XInputNumber v-model="vertical" orientation="vertical" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">尺寸</span>
      <div class="flex items-center gap-2">
        <XInputNumber size="xs" />
        <XInputNumber size="sm" />
        <XInputNumber size="md" />
        <XInputNumber size="lg" />
      </div>
    </div>
  </div>
</template>
