<script setup lang="ts">
import XKbd from '@/components/kit/XKbd.vue'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const colors = ['primary', 'success', 'warning', 'error', 'neutral'] as const
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">五档尺寸</span>
      <div class="flex flex-wrap items-center gap-3">
        <XKbd v-for="size in sizes" :key="size" :size="size" value="K" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">as 渲染为指定元素</span>
      <div class="flex flex-wrap items-center gap-3">
        <XKbd as="span" value="span" />
        <XKbd as="code" value="code" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">ui 插槽类名</span>
      <div class="flex flex-wrap items-center gap-3">
        <XKbd v-for="color in colors" :key="color" :color="color" value="K" :ui="{ base: 'bg-muted' }" />
      </div>
    </div>
  </div>
</template>
