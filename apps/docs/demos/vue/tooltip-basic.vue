<script setup lang="ts">
import XTooltip from '@/components/kit/XTooltip.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XTooltip text="基础提示">
      <XButton variant="outline" color="neutral">悬停查看</XButton>
    </XTooltip>

    <XTooltip text="延迟显示" :delay-duration="800">
      <XButton variant="outline" color="neutral">延迟 800ms</XButton>
    </XTooltip>

    <XTooltip text="带箭头提示" arrow>
      <XButton variant="outline" color="neutral">带箭头</XButton>
    </XTooltip>
  </div>
</template>
