<script setup lang="ts">
import XProgress from '@/components/kit/XProgress.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XProgress animation="carousel" />
    <XProgress animation="carousel-inverse" />
    <XProgress animation="swing" />
    <XProgress animation="elastic" />
  </div>
</template>
