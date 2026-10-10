<script setup lang="ts">
import XSplitter from '@/components/kit/XSplitter.vue'

const items = [
  { id: 'a', defaultSize: 35 },
  { id: 'b' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="h-56">
      <XSplitter :items="items" disabled :ui="{ panel: 'bg-muted', handle: 'bg-primary-5' }" class="h-full">
        <template #panel-0>
          <div class="flex h-full items-center justify-center p-4 text-sm">面板 A（disabled 锁定拖拽）</div>
        </template>
        <template #panel-1>
          <div class="flex h-full items-center justify-center p-4 text-sm">面板 B（ui 插槽自定义外观）</div>
        </template>
      </XSplitter>
    </div>
    <span class="text-muted-foreground text-sm">
      disabled 锁定全部拖拽条；ui 按 root / panel / handle 注入类名
    </span>
  </div>
</template>
