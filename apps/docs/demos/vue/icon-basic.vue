<script setup lang="ts">
import { XIcon } from '@/components/kit'

const names = [
  'dashboard',
  'settings',
  'user',
  'search',
  'bell',
  'star',
  'plus',
  'check',
  'trash',
  'copy',
] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">内置图标集合</span>
      <div class="flex flex-wrap items-center gap-4">
        <XIcon v-for="name in names" :key="name" :name="name" size="lg" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">五档尺寸</span>
      <div class="flex flex-wrap items-center gap-4">
        <XIcon v-for="size in sizes" :key="size" name="star" :size="size" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">自定义颜色</span>
      <div class="flex flex-wrap items-center gap-4">
        <XIcon name="circle-check" size="lg" color="#52c41a" />
        <XIcon name="circle-alert" size="lg" color="#faad14" />
        <XIcon name="info" size="lg" color="#1677ff" />
      </div>
    </div>
  </div>
</template>
