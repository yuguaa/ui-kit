<script setup lang="ts">
import XRadioGroup from '@/components/kit/XRadioGroup.vue'

const options = [
  { value: 'a', label: '选项 A' },
  { value: 'b', label: '选项 B' },
]
</script>

<template>
  <div class="flex w-full flex-wrap items-start gap-8">
    <XRadioGroup :options="options" model-value="a" color="success" legend="success" />
    <XRadioGroup :options="options" model-value="a" color="error" legend="error" />
    <XRadioGroup :options="options" model-value="a" size="sm" legend="sm" />
    <XRadioGroup :options="options" model-value="a" size="xl" legend="xl" />
    <XRadioGroup :options="options" model-value="a" color="info" highlight legend="highlight" />
  </div>
</template>
