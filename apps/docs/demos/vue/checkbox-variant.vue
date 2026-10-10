<script setup lang="ts">
import { Star } from '@lucide/vue'
import { XCheckbox } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">variant:list 与 card,card 时整个卡片可点击</span>
      <div class="flex flex-wrap items-center gap-4">
        <XCheckbox checked label="列表样式" />
        <XCheckbox variant="card" checked label="卡片样式" description="点击卡片任意位置切换" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">indicator:start / end / hidden</span>
      <div class="flex flex-wrap items-center gap-4">
        <XCheckbox checked label="指示块在左侧" />
        <XCheckbox checked indicator="end" label="指示块在右侧" />
        <XCheckbox checked indicator="hidden" :icon="Star" label="指示块隐藏" description="图标显示在 label 上方" />
      </div>
    </div>
  </div>
</template>
