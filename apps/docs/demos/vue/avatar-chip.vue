<script setup lang="ts">
import { XAvatar, XIcon } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XAvatar text="A" chip />
    <XAvatar text="B" :chip="{ color: 'success' }" />
    <XAvatar text="C" :chip="{ text: 5, color: 'error', position: 'bottom-right' }" />
    <XAvatar :chip="{ text: 'NEW', color: 'info', size: 'sm', position: 'top-left' }">
      <template #icon><XIcon name="user" /></template>
    </XAvatar>
  </div>
</template>
