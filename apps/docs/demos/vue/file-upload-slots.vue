<script setup lang="ts">
import { ref } from 'vue'
import { XFileUpload } from '@/components/kit'

const files = ref<File[]>([])
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XFileUpload v-model="files" multiple label="拖拽文件到此处" description="文件项与操作区均可自定义">
      <template #actions="{ open }">
        <button
          type="button"
          class="rounded-md bg-primary-6 px-3 py-1.5 text-sm text-white hover:bg-primary-5"
          @click="open"
        >
          浏览文件
        </button>
      </template>
      <template #file="{ file, index, removeFile }">
        <div class="flex w-full items-center gap-2 rounded-md border border-border px-3 py-2 text-sm">
          <span class="truncate">{{ file.name }}</span>
          <button
            type="button"
            class="ml-auto shrink-0 text-xs text-muted-foreground underline-offset-4 hover:underline"
            @click="removeFile(index)"
          >
            移除
          </button>
        </div>
      </template>
    </XFileUpload>
  </div>
</template>
