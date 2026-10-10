<script setup lang="ts">
import { ref } from 'vue'
import XRadioGroup from '@/components/kit/XRadioGroup.vue'

const mode = ref('list')

const options = [
  { value: 'list', label: '列表' },
  { value: 'card', label: '卡片' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">variant:radio 普通圆形单选框</span>
      <XRadioGroup v-model="mode" :options="options" />
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">variant:button 按钮样式,buttonStyle 控制选中填充</span>
      <div class="flex flex-col items-start gap-4">
        <XRadioGroup v-model="mode" :options="options" variant="button" />
        <XRadioGroup v-model="mode" :options="options" variant="button" button-style="solid" />
        <XRadioGroup v-model="mode" :options="options" variant="button" button-style="outline" orientation="vertical" />
      </div>
    </div>
  </div>
</template>
