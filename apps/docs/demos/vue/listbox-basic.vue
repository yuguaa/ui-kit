<script setup lang="ts">
import { ref } from 'vue'
import XListbox from '@/components/kit/XListbox.vue'

const items = [
  { key: 'zh', label: '简体中文' },
  { key: 'en', label: 'English' },
  { key: 'ja', label: '日本語' },
  { key: 'ko', label: '한국어' },
]

const selected = ref('zh')
const multipleSelected = ref(['en', 'ja'])
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2">
    <div>
      <p class="mb-2 text-sm font-medium">单选</p>
      <XListbox v-model="selected" :items="items" value-key="key" />
    </div>
    <div>
      <p class="mb-2 text-sm font-medium">多选</p>
      <XListbox v-model="multipleSelected" :items="items" value-key="key" multiple />
    </div>
  </div>
</template>
