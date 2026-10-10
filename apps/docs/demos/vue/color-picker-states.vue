<script setup lang="ts">
import { XColorPicker } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">disabled 禁用选择</span>
      <XColorPicker disabled defaultValue="#1677ff" />
    </div>
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">throttle 拖拽节流（200ms）</span>
      <XColorPicker :throttle="200" />
    </div>
  </div>
</template>
