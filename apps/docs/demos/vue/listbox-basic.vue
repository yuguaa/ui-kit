<script setup lang="ts">
import { ref } from 'vue'
import XListbox from '@/components/kit/XListbox.vue'

const items = [
  { key: 'zh', label: '简体中文' },
  { key: 'en', label: 'English' },
  { key: 'ja', label: '日本語' },
  { key: 'ko', label: '한국어' },
]

const selected = ref<string[]>(['zh'])
const multipleSelected = ref<string[]>(['en', 'ja'])

function toggleMultiple(key: string) {
  multipleSelected.value = multipleSelected.value.includes(key)
    ? multipleSelected.value.filter((item) => item !== key)
    : [...multipleSelected.value, key]
}
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2">
    <div>
      <p class="mb-2 text-sm font-medium">单选</p>
      <XListbox :items="items" :selected="selected" @select="selected = [$event]" />
    </div>
    <div>
      <p class="mb-2 text-sm font-medium">多选</p>
      <XListbox :items="items" :selected="multipleSelected" multiple @select="toggleMultiple" />
    </div>
  </div>
</template>
