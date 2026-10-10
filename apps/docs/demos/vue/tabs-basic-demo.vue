<script setup lang="ts">
import { ref } from 'vue'
import { XTabs } from '@/components/kit'

const pillKey = ref('a')
const linkKey = ref('x')
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <XTabs
      v-model="pillKey"
      variant="pill"
      :items="[
        { value: 'a', label: '标签一', content: 'pill 标签一的内容。' },
        { value: 'b', label: '标签二', content: 'pill 标签二的内容。' },
        { value: 'c', label: '标签三', content: 'pill 标签三的内容。' },
      ]"
    />
    <XTabs
      v-model="linkKey"
      variant="link"
      :items="[
        { value: 'x', label: '下划线式', content: 'link 标签内容一。' },
        { value: 'y', label: '下划线式二', content: 'link 标签内容二。' },
      ]"
    />
  </div>
</template>
