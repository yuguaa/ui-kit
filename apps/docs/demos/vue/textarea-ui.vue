<script setup lang="ts">
import XTextarea from '@/components/kit/XTextarea.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XTextarea
      placeholder="自定义 base 类名"
      class="w-72"
      :ui="{ base: 'bg-primary/10 ring-primary/20 text-primary' }"
    />
  </div>
</template>
