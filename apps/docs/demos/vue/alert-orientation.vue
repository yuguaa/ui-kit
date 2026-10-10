<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert color="info" icon="info" orientation="vertical" title="vertical 排列" description="actions 插槽位于标题与描述下方。">
      <template #actions>
        <XButton size="sm" variant="soft" color="info">查看详情</XButton>
      </template>
    </XAlert>
    <XAlert color="success" icon="circle-check" orientation="horizontal" title="horizontal 排列" description="actions 插槽与关闭按钮位于内容右侧。" close>
      <template #actions>
        <XButton size="sm" variant="soft" color="success">重试</XButton>
      </template>
    </XAlert>
  </div>
</template>
