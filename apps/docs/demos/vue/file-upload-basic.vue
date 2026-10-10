<script setup lang="ts">
import { ref } from 'vue'
import { XFileUpload } from '@/components/kit'

const file = ref<File | null>(null)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XFileUpload v-model="file" label="拖拽文件到此处，或点击上传" description="支持任意格式，单文件" />
    <p v-if="file" class="text-sm text-muted-foreground">
      已选择：<code class="rounded bg-muted px-1.5 py-0.5">{{ file.name }}</code>
      （{{ (file.size / 1024).toFixed(1) }} KB）
    </p>
  </div>
</template>
