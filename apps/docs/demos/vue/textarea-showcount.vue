<script setup lang="ts">
import { ref } from 'vue'
import XTextarea from '@/components/kit/XTextarea.vue'

const content = ref('')
const limited = ref('')
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <XTextarea v-model="content" show-count placeholder="只显示当前字数" class="w-72" />
    <XTextarea v-model="limited" show-count :max-length="20" placeholder="最多输入 20 字" class="w-72" />
  </div>
</template>
