<script setup lang="ts">
import XInputNumber from '@/components/kit/XInputNumber.vue'
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-8">
    <XInputNumber
      placeholder="自定义 base"
      :ui="{ base: 'bg-primary/10 ring-primary/20 text-primary' }"
    />
    <XInputNumber
      as="div"
      placeholder="as 渲染为 div"
      class="w-48 justify-center"
    />
  </div>
</template>
