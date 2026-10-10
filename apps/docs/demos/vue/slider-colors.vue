<script setup lang="ts">
import { ref } from 'vue'
import XSlider from '@/components/kit/XSlider.vue'

const value = ref(60)
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-8">
    <XSlider v-model="value" color="primary" />
    <XSlider v-model="value" color="success" />
    <XSlider v-model="value" color="error" />
    <XSlider v-model="value" disabled />
  </div>
</template>
