<script setup lang="ts">
import { ref } from 'vue'
import XTabs from '@/components/kit/XTabs.vue'

const lineKey = ref('a')
const cardKey = ref('x')
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <XTabs
      :active-key="lineKey"
      type="line"
      :items="[
        { key: 'a', label: '标签一', content: '标签一的内容。' },
        { key: 'b', label: '标签二', content: '标签二的内容。' },
        { key: 'c', label: '标签三', content: '标签三的内容。' },
      ]"
      @change="lineKey = $event"
    />
    <XTabs
      :active-key="cardKey"
      type="card"
      :items="[
        { key: 'x', label: '卡片式', content: '卡片式标签内容。' },
        { key: 'y', label: '卡片式二', content: '卡片式标签内容二。' },
      ]"
      @change="cardKey = $event"
    />
  </div>
</template>
