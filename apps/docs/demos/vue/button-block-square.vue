<script setup lang="ts">
import { XButton, XIcon } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">block：撑满父容器宽度</span>
      <div class="flex w-80 flex-col gap-2">
        <XButton block>确认提交</XButton>
        <XButton block variant="outline">取消</XButton>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">square：等边距方形按钮，常用于图标操作</span>
      <div class="flex flex-wrap items-center gap-3">
        <XButton square size="sm" variant="soft" aria-label="搜索"><XIcon name="search" /></XButton>
        <XButton square variant="soft" aria-label="设置"><XIcon name="settings" /></XButton>
        <XButton square size="lg" aria-label="新增"><XIcon name="plus" /></XButton>
        <XButton square size="xl" color="error" variant="subtle" aria-label="删除"><XIcon name="trash" /></XButton>
      </div>
    </div>
  </div>
</template>
