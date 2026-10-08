<script setup lang="ts">
import { ref } from 'vue'
import XTextarea from '@/components/kit/XTextarea.vue'

const content = ref('')
const limited = ref('')
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <XTextarea v-model="content" autosize placeholder="输入后高度自动调整" class="w-72" />
    <XTextarea
      v-model="limited"
      autosize
      show-count
      :max-length="30"
      placeholder="自动高度 + 字数统计"
      class="w-72"
    />
  </div>
</template>
