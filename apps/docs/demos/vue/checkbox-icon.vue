<script setup lang="ts">
import { CircleCheck, Minus } from '@lucide/vue'
import { XCheckbox } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XCheckbox checked :icon="CircleCheck" label="自定义选中图标" />
    <XCheckbox indeterminate :indeterminate-icon="Minus" label="自定义半选图标" />
    <XCheckbox highlight label="常显聚焦环" />
    <XCheckbox color="success" highlight label="success 聚焦环" />
    <XCheckbox color="error" checked label="error 语义色" />
  </div>
</template>
