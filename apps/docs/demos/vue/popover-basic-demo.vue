<script setup lang="ts">
import XPopover from '@/components/kit/XPopover.vue'
import XButton from '@/components/kit/XButton.vue'

const sides = [
  { key: 'top', label: '上' },
  { key: 'bottom', label: '下' },
  { key: 'left', label: '左' },
  { key: 'right', label: '右' },
] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XPopover v-for="item in sides" :key="item.key" :side="item.key" trigger="click" :title="`${item.label}侧气泡`" content="这是一段气泡说明文字。">
      <XButton variant="outline" color="neutral">{{ item.label }}</XButton>
    </XPopover>
  </div>
</template>
