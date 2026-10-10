<script setup lang="ts">
import { ref } from 'vue'
import { XFileUpload } from '@/components/kit'

const file = ref<File | null>(null)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XFileUpload v-model="file" variant="button">
      选择文件
    </XFileUpload>
    <p v-if="file" class="text-sm text-muted-foreground">
      已选择：<code class="rounded bg-muted px-1.5 py-0.5">{{ file.name }}</code>
    </p>
  </div>
</template>
