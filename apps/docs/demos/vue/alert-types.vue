<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'

const colors = ['primary', 'secondary', 'neutral', 'success', 'info', 'warning', 'error'] as const
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert
      v-for="color in colors"
      :key="color"
      :color="color"
      variant="soft"
      :title="`${color} 提示`"
      description="color 属性提供七种语义色，type 仍可作为 color 的回退。"
    />
  </div>
</template>
