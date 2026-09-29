<script setup lang="ts">
import XCard from '@/components/kit/XCard.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <XCard title="默认卡片" description="bordered 卡片，带标题、说明与操作区。">
      <template #extra><XButton size="sm" variant="ghost">更多</XButton></template>
      这是卡片的主体内容。
    </XCard>
    <XCard :bordered="false" size="small" title="无边框卡片">
      <template #cover><div class="h-20 bg-gradient-to-r from-primary-1 to-primary-3" /></template>
      无边框卡片适合嵌入页面背景。
    </XCard>
  </div>
</template>
