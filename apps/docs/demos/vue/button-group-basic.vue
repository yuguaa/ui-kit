<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
import XButtonGroup from '@/components/kit/XButtonGroup.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">水平拼接（默认）</span>
      <XButtonGroup>
        <XButton variant="outline" color="neutral">上一页</XButton>
        <XButton variant="outline" color="neutral">1</XButton>
        <XButton variant="outline" color="neutral">2</XButton>
        <XButton variant="outline" color="neutral">下一页</XButton>
      </XButtonGroup>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">垂直拼接</span>
      <XButtonGroup orientation="vertical" class="w-32">
        <XButton variant="outline" color="neutral" block>编辑</XButton>
        <XButton variant="outline" color="neutral" block>复制</XButton>
        <XButton variant="outline" color="error" block>删除</XButton>
      </XButtonGroup>
    </div>
  </div>
</template>
