<script setup lang="ts">
import XProgress from '@/components/kit/XProgress.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XProgress :percent="30" />
    <XProgress :percent="70" status="success" />
    <XProgress :percent="45" status="exception" />
    <XProgress :percent="60" status="active" />
  </div>
</template>
