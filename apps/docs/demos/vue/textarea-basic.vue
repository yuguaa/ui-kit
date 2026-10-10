<script setup lang="ts">
import XTextarea from '@/components/kit/XTextarea.vue'
</script>

<template>
  <div class="flex w-full flex-wrap items-start gap-4">
    <XTextarea placeholder="Textarea（md）" class="w-72" />
    <XTextarea size="sm" placeholder="Textarea（sm）" class="w-56" />
    <XTextarea size="lg" placeholder="Textarea（lg）" class="w-72" />
    <XTextarea disabled placeholder="禁用状态" class="w-72" />
  </div>
</template>
