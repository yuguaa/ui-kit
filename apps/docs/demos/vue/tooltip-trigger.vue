<script setup lang="ts">
import XTooltip from '@/components/kit/XTooltip.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XTooltip title="悬浮触发（默认）">
      <XButton variant="outline" color="neutral">hover</XButton>
    </XTooltip>
    <XTooltip title="点击触发" trigger="click">
      <XButton variant="outline" color="neutral">click</XButton>
    </XTooltip>
    <XTooltip title="聚焦触发" trigger="focus">
      <XButton variant="outline" color="neutral">focus</XButton>
    </XTooltip>
  </div>
</template>
