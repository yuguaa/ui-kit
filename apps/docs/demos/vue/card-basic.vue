<script setup lang="ts">
import XCard from '@/components/kit/XCard.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <XCard title="卡片标题" description="卡片内容区域，用于承载标题、操作区以及主体信息。">
      <template #extra><XButton size="sm" variant="ghost">更多</XButton></template>
      这是卡片的主体内容。
    </XCard>
    <XCard :bordered="false" hoverable size="small" title="无边框卡片">
      <template #cover><div class="h-20 bg-gradient-to-r from-primary-1 to-primary-3" /></template>
      悬浮试试。
    </XCard>
  </div>
</template>
