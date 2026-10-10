<script setup lang="ts">
import { Star } from '@lucide/vue'
import XRadioGroup from '@/components/kit/XRadioGroup.vue'

const simple = [{ value: 'a', label: '选项 A' }]
</script>

<template>
  <div class="flex w-full flex-wrap items-start gap-8">
    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">indicator:start 圆点在左侧</span>
      <XRadioGroup :options="simple" model-value="a" />
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">indicator:end 圆点在右侧</span>
      <XRadioGroup :options="simple" model-value="a" indicator="end" />
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">indicator:hidden 圆点隐藏,图标显示在 label 上方</span>
      <XRadioGroup
        :options="[{ value: 'a', label: '选项 A', icon: Star, description: '辅助说明' }]"
        model-value="a"
        indicator="hidden"
      />
    </div>
  </div>
</template>
