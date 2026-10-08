<script setup lang="ts">
/**
 * XFileUpload 文件上传：支持点击与拖拽、多文件、体积限制。
 * files 为受控文件列表（v-model:files），未传入时组件内部维护。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { FileText, Trash, UploadCloud } from '@lucide/vue'
import XProgress from '@/components/kit/XProgress.vue'
import { cn } from '@/lib/utils'

export interface UploadFile {
  name: string
  size: number
  /** 上传状态 */
  status?: 'uploading' | 'done' | 'error'
  /** 上传进度（0-100），status 为 uploading 时展示 */
  progress?: number
}

/* 属性透传到内部 file input，避免落到外层包装元素 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 接受的文件类型（如 image/*, .pdf） */
  accept?: string
  /** 是否多选 */
  multiple?: boolean
  /** 最大体积（MB） */
  maxSize?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 受控文件列表，未传入时组件内部维护 */
  files?: UploadFile[]
  class?: HTMLAttributes['class']
}>(), {
  multiple: false,
})

const emit = defineEmits<{
  /** 上传回调 */
  upload: [files: UploadFile[]]
  /** 文件列表变化（v-model:files） */
  'update:files': [files: UploadFile[]]
  /** 移除文件回调 */
  remove: [file: UploadFile, index: number]
}>()

const innerFiles = ref<UploadFile[]>([])
const dragOver = ref(false)
const inputRef = ref<HTMLInputElement>()

/* 传入 files 时以 props 为准，否则使用内部状态 */
const list = computed(() => props.files ?? innerFiles.value)

function changeFiles(next: UploadFile[]) {
  innerFiles.value = next
  emit('update:files', next)
}

function handleFiles(rawList: FileList | null) {
  if (!rawList || props.disabled) return
  const next: UploadFile[] = []
  for (const item of Array.from(rawList)) {
    if (props.maxSize != null && item.size > props.maxSize * 1024 * 1024) continue
    next.push({ name: item.name, size: item.size })
  }
  if (next.length === 0) return
  changeFiles(props.multiple ? [...list.value, ...next] : next)
  emit('upload', next)
}

function removeFile(item: UploadFile, index: number) {
  changeFiles(list.value.filter((_, i) => i !== index))
  emit('remove', item, index)
}

/** 清空文件 */
function clear() {
  changeFiles([])
}

defineExpose({ clear })
</script>

<template>
  <div :class="cn('flex flex-col gap-2', props.class)">
    <button
      type="button"
      :disabled="disabled"
      class="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input px-4 py-6 text-sm text-muted-foreground transition-colors outline-none hover:border-primary-5 hover:bg-primary-1/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
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
        v-bind="$attrs"
        type="file"
        :accept="accept"
        :multiple="multiple"
        class="sr-only"
        @change="handleFiles(($event.target as HTMLInputElement).files); ($event.target as HTMLInputElement).value = ''"
      />
    </button>
    <ul v-if="list.length > 0" class="flex flex-col gap-1">
      <li
        v-for="(item, index) in list"
        :key="`${item.name}-${index}`"
        class="flex flex-col gap-1.5 rounded-md border px-3 py-1.5 text-sm"
        :class="cn(item.status === 'error' ? 'border-error-3' : 'border-border')"
      >
        <span class="flex items-center justify-between gap-2">
          <slot name="file" :file="item" :index="index">
            <span class="flex min-w-0 items-center gap-2">
              <FileText
                class="size-4 shrink-0"
                :class="item.status === 'error' ? 'text-error-6' : 'text-muted-foreground'"
              />
              <span class="truncate" :class="item.status === 'error' && 'text-error-6'">{{ item.name }}</span>
              <span class="shrink-0 text-xs text-muted-foreground">{{ (item.size / 1024).toFixed(1) }} KB</span>
            </span>
          </slot>
          <button
            type="button"
            aria-label="移除文件"
            class="shrink-0 rounded p-1 text-muted-foreground outline-none hover:bg-muted hover:text-foreground"
            @click="removeFile(item, index)"
          >
            <Trash class="size-3.5" />
          </button>
        </span>
        <XProgress
          v-if="item.status === 'uploading'"
          :percent="item.progress"
          status="active"
          class="[&>span]:text-xs"
        />
      </li>
    </ul>
  </div>
</template>
