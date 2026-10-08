<script setup lang="ts">
import { ref } from 'vue'
import XSlider from '@/components/kit/XSlider.vue'

const value = ref(50)
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-8">
    <XSlider v-model="value" tooltip class="w-full" />
    <div class="text-muted-foreground text-sm">当前值：{{ value }}</div>
  </div>
</template>
