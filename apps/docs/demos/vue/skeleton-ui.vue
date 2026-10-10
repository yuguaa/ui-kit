<script setup lang="ts">
import XSkeleton from '@/components/kit/XSkeleton.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XSkeleton
      :ui="{ base: 'rounded-full bg-primary-1' }"
      variant="rect"
      width="60%"
      height="2rem"
    />
    <XSkeleton
      as="span"
      :ui="{ base: 'inline-block rounded-full bg-success-1' }"
      variant="circle"
    />
    <XSkeleton
      variant="text"
      width="40%"
    >
      <span class="text-sm text-success-7">ui.base 注入自定义类名，as 控制渲染标签，骨架带 aria-busy / aria-live 标记</span>
    </XSkeleton>
  </div>
</template>
