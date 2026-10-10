<script setup lang="ts">
import { ref } from 'vue'
import { XFileUpload } from '@/components/kit'

const files = ref<File[]>([])
const single = ref<File | null>(null)
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-1.5">
      <span class="text-sm text-muted-foreground">multiple + layout=grid（文件在拖拽区内展示）</span>
      <XFileUpload v-model="files" multiple label="拖拽多个文件" />
    </div>
    <div class="flex flex-col gap-1.5">
      <span class="text-sm text-muted-foreground">单选 + layout=list（文件名与体积并列）</span>
      <XFileUpload v-model="single" layout="list" label="拖拽单个文件" />
    </div>
  </div>
</template>
