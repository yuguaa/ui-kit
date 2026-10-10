<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
import XButtonGroup from '@/components/kit/XButtonGroup.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">as 渲染为指定元素</span>
      <XButtonGroup as="nav">
        <XButton variant="soft" color="neutral">首页</XButton>
        <XButton variant="soft" color="neutral">文档</XButton>
        <XButton variant="soft" color="neutral">示例</XButton>
      </XButtonGroup>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">ui 插槽类名</span>
      <XButtonGroup :ui="{ root: 'gap-2' }">
        <XButton variant="soft" color="primary">确定</XButton>
        <XButton variant="soft" color="neutral">取消</XButton>
      </XButtonGroup>
    </div>
  </div>
</template>
