<script setup lang="ts">
import { XSeparator } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">类型与粗细</span>
      <XSeparator />
      <XSeparator type="dashed" size="md" />
      <XSeparator type="dotted" size="xl" />
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">语义色</span>
      <XSeparator color="primary" />
      <XSeparator color="success" size="sm" />
      <XSeparator color="error" type="dashed" />
    </div>

    <div class="flex h-10 items-center gap-3 text-sm">
      <span>垂直分割</span>
      <XSeparator orientation="vertical" />
      <span>内容 A</span>
      <XSeparator orientation="vertical" size="md" color="primary" />
      <span>内容 B</span>
    </div>
  </div>
</template>
