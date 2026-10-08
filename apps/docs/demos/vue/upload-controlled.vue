<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import XFileUpload, { type UploadFile } from '@/components/kit/XFileUpload.vue'

/* 受控文件列表：包含上传中、失败、完成三种状态 */
const files = ref<UploadFile[]>([
  { name: '设计规范.pdf', size: 2048000, status: 'uploading', progress: 46 },
  { name: '原型截图.png', size: 524288, status: 'error' },
  { name: '需求文档.docx', size: 131072, status: 'done' },
])

/* 模拟上传进度：uploading 项每 300ms 前进 10%，到 100% 转为完成 */
const timer = setInterval(() => {
  const pending = files.value.filter((item) => item.status === 'uploading')
  if (pending.length === 0) return
  for (const item of pending) {
    item.progress = Math.min(100, (item.progress ?? 0) + 10)
    if (item.progress >= 100) item.status = 'done'
  }
}, 300)

onUnmounted(() => clearInterval(timer))

/* 新上传的文件进入 uploading 状态，由上面的定时器推进 */
function handleUpload(list: UploadFile[]) {
  for (const item of list) {
    item.status = 'uploading'
    item.progress = 0
  }
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XFileUpload v-model:files="files" multiple class="w-full" @upload="handleUpload" />
    <pre class="overflow-x-auto rounded-lg bg-muted p-4 text-xs">{{ files }}</pre>
  </div>
</template>
