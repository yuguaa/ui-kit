<script setup lang="ts">
import { XSeparator } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">基础分割线</span>
      <XSeparator />
      <XSeparator type="dashed" color="#94a3b8" />
      <XSeparator type="dotted" color="#94a3b8" />
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">带标签（position：start / center / end）</span>
      <XSeparator label="居中对齐" />
      <XSeparator label="左对齐" position="start" />
      <XSeparator label="右对齐" position="end" />
      <XSeparator><span class="text-primary-6">自定义插槽内容</span></XSeparator>
    </div>

    <div class="flex h-10 items-center gap-3 text-sm">
      <span>垂直分割</span>
      <XSeparator orientation="vertical" />
      <span>内容 A</span>
      <XSeparator orientation="vertical" />
      <span>内容 B</span>
    </div>
  </div>
</template>
