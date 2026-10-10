<script setup lang="ts">
import { ref } from 'vue'
import XTextarea from '@/components/kit/XTextarea.vue'

const content = ref('')
const delayed = ref('')
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <XTextarea v-model="content" autoresize placeholder="输入后高度自动调整" class="w-72" />
    <XTextarea
      v-model="delayed"
      autoresize
      :autoresize-delay="300"
      placeholder="挂载后延迟 300ms 调整"
      class="w-72"
    />
  </div>
</template>
