<script setup lang="ts">
import XSplitter from '@/components/kit/XSplitter.vue'
</script>

<template>
  <div class="h-72 w-full">
    <XSplitter collapsible :default-size="35" class="h-full">
      <template #first>
        <div class="flex h-full flex-col items-center justify-center gap-2 p-6">
          <span class="font-medium">左侧面板</span>
          <span class="text-sm text-muted-foreground">拖到最左侧即可折叠</span>
        </div>
      </template>
      <template #second>
        <div class="flex h-full flex-col items-center justify-center gap-2 p-6">
          <span class="font-medium">右侧面板</span>
          <span class="text-sm text-muted-foreground">拖到最右侧即可折叠</span>
        </div>
      </template>
    </XSplitter>
  </div>
</template>
