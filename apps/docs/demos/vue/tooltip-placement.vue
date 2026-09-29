<script setup lang="ts">
import XTooltip from '@/components/kit/XTooltip.vue'
import XButton from '@/components/kit/XButton.vue'

const placements = [
  { key: 'top', label: '上' },
  { key: 'bottom', label: '下' },
  { key: 'left', label: '左' },
  { key: 'right', label: '右' },
] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XTooltip v-for="item in placements" :key="item.key" :placement="item.key" :title="`${item.label}侧提示`">
      <XButton variant="outline" color="neutral">{{ item.label }}</XButton>
    </XTooltip>
  </div>
</template>
