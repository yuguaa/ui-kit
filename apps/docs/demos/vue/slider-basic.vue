<script setup lang="ts">
import { ref } from 'vue'
import XSlider from '@/components/kit/XSlider.vue'

const value = ref(50)
const range = ref([30, 70])
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-8">
    <XSlider v-model="value" size="sm" />
    <XSlider v-model="value" size="md" />
    <XSlider v-model="value" size="lg" />
    <XSlider v-model="range" :ui="{ range: 'bg-info-6' }" />
  </div>
</template>
