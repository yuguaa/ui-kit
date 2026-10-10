<script setup lang="ts">
import XContainer from '@/components/kit/XContainer.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'] as const)" :key="size">
      <XContainer :size="size" class="rounded-lg border border-dashed border-border py-2 text-center text-sm text-muted-foreground">
        {{ size }}：{{ { xs: 640, sm: 768, md: 1024, lg: 1280, xl: 1536 }[size] }}px
      </XContainer>
    </div>
    <XContainer
      as="section"
      size="md"
      :ui="{ base: 'rounded-lg bg-primary/10 px-4 py-3 text-center text-sm text-primary' }"
    >
      as="section" 渲染为 section，ui.base 注入自定义类名
    </XContainer>
  </div>
</template>
