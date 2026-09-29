<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert message="可关闭提示" description="点击右侧关闭按钮隐藏提示。" show-icon closable />
    <XAlert type="warning" message="自定义操作" description="可以在提示中嵌入操作按钮。">
      <template #description>
        可以在提示中嵌入操作按钮。
        <XButton size="sm" variant="soft" color="warning" class="mt-2">立即处理</XButton>
      </template>
    </XAlert>
  </div>
</template>
