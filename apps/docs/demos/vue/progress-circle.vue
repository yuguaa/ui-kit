<script setup lang="ts">
import XProgress from '@/components/kit/XProgress.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XProgress :percent="75" type="circle" />
    <XProgress :percent="100" type="circle" status="success" />
    <XProgress :percent="30" type="circle" status="exception" />
    <XProgress :percent="65" type="circle" :show-info="false" />
  </div>
</template>
