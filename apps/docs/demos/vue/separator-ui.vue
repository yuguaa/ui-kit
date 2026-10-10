<script setup lang="ts">
import { XSeparator } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <XSeparator
      label="自定义外观"
      :ui="{
        border: 'border-dashed border-info',
        container: 'text-info',
        label: 'text-base',
      }"
    />
    <XSeparator :avatar="{ text: 'A' }" :ui="{ avatarSize: 'lg' }" />
    <XSeparator
      icon="star"
      :ui="{ icon: 'text-warning', border: 'border-warning' }"
    />
  </div>
</template>
