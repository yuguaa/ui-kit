<script setup lang="ts">
import { ref } from 'vue'
import XSlider from '@/components/kit/XSlider.vue'

const value = ref(30)
</script>

<template>
  <div class="flex items-center gap-10">
    <XSlider v-model="value" orientation="vertical" tooltip class="h-40" />
    <XSlider v-model="value" orientation="vertical" color="info" class="h-40" />
    <div class="text-muted-foreground text-sm">当前值：{{ value }}</div>
  </div>
</template>
