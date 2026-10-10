<script setup lang="ts">
import XTextarea from '@/components/kit/XTextarea.vue'
</script>

<template>
  <div class="flex w-full flex-wrap items-start gap-4">
    <XTextarea color="primary" placeholder="primary" class="w-64" />
    <XTextarea color="success" placeholder="success" class="w-64" />
    <XTextarea color="warning" placeholder="warning" class="w-64" />
    <XTextarea highlight color="error" placeholder="highlight + error" class="w-64" />
  </div>
</template>
