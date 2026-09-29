<script setup lang="ts">
/**
 * XFileUpload 文件上传：支持点击与拖拽、多文件、体积限制。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { FileText, Trash, UploadCloud } from '@lucide/vue'
import { cn } from '@/lib/utils'

export interface UploadFile {
  name: string
  size: number
}

const props = withDefaults(defineProps<{
  /** 接受的文件类型（如 image/*, .pdf） */
  accept?: string
  /** 是否多选 */
  multiple?: boolean
  /** 最大体积（MB） */
  maxSize?: number
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  multiple: false,
})

const emit = defineEmits<{
  /** 上传回调 */
  upload: [files: UploadFile[]]
}>()

const files = ref<UploadFile[]>([])
const dragOver = ref(false)
const inputRef = ref<HTMLInputElement>()

function handleFiles(list: FileList | null) {
  if (!list || props.disabled) return
  const next: UploadFile[] = []
  for (const item of Array.from(list)) {
    if (props.maxSize != null && item.size > props.maxSize * 1024 * 1024) continue
    next.push({ name: item.name, size: item.size })
  }
  if (next.length === 0) return
  files.value = props.multiple ? [...files.value, ...next] : next
  emit('upload', next)
}

/** 清空文件 */
function clear() {
  files.value = []
}

defineExpose({ clear })
</script>

<template>
  <div :class="cn('flex flex-col gap-2', props.class)">
    <button
      type="button"
      :disabled="disabled"
      class="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input px-4 py-6 text-sm text-muted-foreground transition-colors outline-none hover:border-primary-5 hover:bg-primary-1/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
      :class="cn(dragOver && 'border-primary-5 bg-primary-1/40')"
      @click="inputRef?.click()"
      @dragover.prevent="dragOver = true"
      @dragleave="dragOver = false"
      @drop.prevent="dragOver = false; handleFiles($event.dataTransfer?.files ?? null)"
    >
      <UploadCloud class="size-8" />
      <slot>拖拽文件到此处，或点击上传</slot>
      <input
        ref="inputRef"
        type="file"
        :accept="accept"
        :multiple="multiple"
        class="sr-only"
        @change="handleFiles(($event.target as HTMLInputElement).files); ($event.target as HTMLInputElement).value = ''"
      />
    </button>
    <ul v-if="files.length > 0" class="flex flex-col gap-1">
      <li
        v-for="(item, index) in files"
        :key="`${item.name}-${index}`"
        class="flex items-center justify-between gap-2 rounded-md border border-border px-3 py-1.5 text-sm"
      >
        <slot name="file" :file="item" :index="index">
          <span class="flex min-w-0 items-center gap-2">
            <FileText class="size-4 shrink-0 text-muted-foreground" />
            <span class="truncate">{{ item.name }}</span>
            <span class="shrink-0 text-xs text-muted-foreground">{{ (item.size / 1024).toFixed(1) }} KB</span>
          </span>
        </slot>
        <button
          type="button"
          aria-label="移除文件"
          class="shrink-0 rounded p-1 text-muted-foreground outline-none hover:bg-muted hover:text-foreground"
          @click="files = files.filter((_, i) => i !== index)"
        >
          <Trash class="size-3.5" />
        </button>
      </li>
    </ul>
  </div>
</template>
