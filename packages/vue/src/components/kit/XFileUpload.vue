<script setup lang="ts">
/**
 * XFileUpload 文件上传：点击或拖拽上传文件。
 * 支持 area / button 两种形态、list / grid 两种文件布局、图片预览与删除。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, reactive, ref, watch } from 'vue'
import { FileText, Upload, X } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import { createReusableTemplate, useDropZone } from '@vueuse/core'
import XButton from '@/components/kit/XButton.vue'
import XIcon, { type IconName } from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

type FileUploadColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type FileUploadVariant = 'area' | 'button'
type FileUploadSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FileUploadLayout = 'list' | 'grid'
type FileUploadPosition = 'inside' | 'outside'

type FileUploadFiles = File | File[] | null

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface FileUploadUi {
  root?: string
  base?: string
  wrapper?: string
  icon?: string
  avatar?: string
  label?: string
  description?: string
  actions?: string
  files?: string
  file?: string
  fileLeadingAvatar?: string
  fileWrapper?: string
  fileName?: string
  fileSize?: string
  fileTrailingButton?: string
}

/** 文件删除按钮配置（布尔表示启用默认样式） */
export interface FileUploadFileDelete {
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'subtle' | 'link'
  size?: FileUploadSize
  color?: FileUploadColor
  label?: string
  ui?: { base?: string; label?: string; leadingIcon?: string; trailingIcon?: string }
  class?: HTMLAttributes['class']
}

/** 默认插槽参数 */
export interface FileUploadSlotProps {
  open: () => void
  removeFile: (index?: number) => void
  ui: FileUploadUi
}

/** 文件插槽参数 */
export interface FileUploadFileSlotProps {
  file: File
  index: number
  removeFile: (index?: number) => void
}

/* 属性透传到内部 file input，避免落到外层包装元素 */
defineOptions({ name: 'XFileUpload', inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 表单字段 id */
  id?: string
  /** 表单提交时的字段名 */
  name?: string
  /** 上传区域图标（XIcon 名称），false 隐藏 */
  icon?: string | false
  /** 上传区域文案 */
  label?: string
  /** 上传区域描述 */
  description?: string
  /** 组件颜色（聚焦描边与高亮） */
  color?: FileUploadColor
  /** 预设样式，button 仅在 multiple 为 false 时可用 */
  variant?: FileUploadVariant
  /** 控件尺寸 */
  size?: FileUploadSize
  /** 文件展示布局，仅在 variant 为 area 时生效 */
  layout?: FileUploadLayout
  /** 文件列表位置，仅在 variant 为 area 且 layout 为 list 时生效 */
  position?: FileUploadPosition
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 接受的文件类型（逗号分隔的 MIME 类型或扩展名） */
  accept?: string
  /** 是否多选 */
  multiple?: boolean
  /** 打开文件对话框前重置 input，保证重复选择同一文件也会触发 change */
  reset?: boolean
  /** 是否允许拖拽文件到上传区域 */
  dropzone?: boolean
  /** 点击上传区域是否打开文件对话框 */
  interactive?: boolean
  /** 是否必填 */
  required?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 文件缩略图图标（XIcon 名称） */
  fileIcon?: string
  /** 是否渲染图片预览，false 时仅显示 fileIcon */
  fileImage?: boolean
  /** 文件删除按钮：布尔或按钮配置 */
  fileDelete?: boolean | FileUploadFileDelete
  /** 删除按钮图标（XIcon 名称） */
  fileDeleteIcon?: string
  /** 上传后是否展示文件列表 */
  preview?: boolean
  /** 主题插槽类名 */
  ui?: FileUploadUi
  class?: HTMLAttributes['class']
}>(), {
  accept: '*',
  multiple: false,
  reset: false,
  dropzone: true,
  interactive: true,
  fileDelete: true,
  layout: 'grid',
  position: 'outside',
  preview: true,
  fileImage: true,
  color: 'primary',
  variant: 'area',
  size: 'md',
})

const modelValue = defineModel<FileUploadFiles>()

const emit = defineEmits<{
  change: [event: Event]
}>()

defineSlots<{
  default?: (props: FileUploadSlotProps) => unknown
  leading?: (props: { ui: FileUploadUi }) => unknown
  label?: () => unknown
  description?: () => unknown
  actions?: (props: { files: FileUploadFiles | undefined; open: () => void; removeFile: (index?: number) => void }) => unknown
  files?: (props: { files: FileUploadFiles | undefined; removeFile: (index?: number) => void }) => unknown
  'files-top'?: (props: { files: FileUploadFiles | undefined; open: () => void; removeFile: (index?: number) => void }) => unknown
  'files-bottom'?: (props: { files: FileUploadFiles | undefined; open: () => void; removeFile: (index?: number) => void }) => unknown
  file?: (props: FileUploadFileSlotProps) => unknown
  'file-leading'?: (props: FileUploadFileSlotProps & { ui: FileUploadUi }) => unknown
  'file-name'?: (props: { file: File; index: number }) => unknown
  'file-size'?: (props: { file: File; index: number }) => unknown
  'file-trailing'?: (props: FileUploadFileSlotProps & { ui: FileUploadUi }) => unknown
}>()

/* multiple 为 true 时强制 area 形态，与 Nuxt UI 行为一致 */
const variant = computed(() => (props.multiple ? 'area' : props.variant))
/* button 形态无文件列表，布局固定为 grid */
const layout = computed(() => (props.variant === 'button' && !props.multiple ? 'grid' : props.layout))
const position = computed(() => {
  if (layout.value === 'grid' && props.multiple) return 'inside'
  if (variant.value === 'button') return 'outside'
  return props.position
})

const inputRef = ref<HTMLInputElement>()
const dropzoneRef = ref<HTMLElement>()
const isDragging = ref(false)

/** 拖拽命中文件并更新模型 */
function onDrop(files: FileList | File[] | null) {
  if (!files || files.length === 0) return
  let list = files instanceof FileList ? Array.from(files) : files
  if (list.length > 1 && !props.multiple) list = [list[0]!]
  onUpdate(list)
}

/** accept 属性 → useDropZone 的 dataTypes 过滤规则 */
function parseAcceptToDataTypes(accept: string): string[] {
  if (!accept || accept === '*') return []
  return accept
    .split(',')
    .map((type) => {
      const trimmed = type.trim()
      if (trimmed.includes('/') && trimmed.endsWith('/*')) {
        return trimmed.split('/')[0] || trimmed
      }
      return trimmed
    })
    .filter((type) => !type.startsWith('.'))
}

const dataTypes = computed(() => parseAcceptToDataTypes(props.accept))

const { isOverDropZone } = props.dropzone
  ? useDropZone(dropzoneRef, { dataTypes, onDrop })
  : { isOverDropZone: ref(false) }

watch(isOverDropZone, (value) => {
  isDragging.value = value
})

/** 打开文件对话框 */
function open() {
  if (props.reset && inputRef.value) inputRef.value.value = ''
  inputRef.value?.click()
}

/** 写入模型并派发 change 事件 */
function onUpdate(files: File[], reset = false) {
  if (props.disabled) return

  if (props.multiple) {
    if (reset) {
      modelValue.value = files
    } else {
      const existing = (modelValue.value as File[]) || []
      modelValue.value = [...existing, ...files]
    }
  } else {
    modelValue.value = files[0] ?? null
  }

  // @ts-expect-error target 不属于 EventInit，与 Nuxt UI 相同的构造方式
  const event = new Event('change', { target: { value: modelValue.value } })
  emit('change', event)
}

/** 移除文件：不传 index 时清空（单选场景） */
function removeFile(index?: number) {
  if (!modelValue.value) return

  if (!props.multiple || index === undefined) {
    onUpdate([], true)
    dropzoneRef.value?.focus()
    return
  }

  const files = [...(modelValue.value as File[])]
  files.splice(index, 1)
  onUpdate(files, true)
  dropzoneRef.value?.focus()
}

/* 模型清空时同步重置 file input，保证再次选择同一文件触发 change */
watch(modelValue, (value) => {
  const hasModelReset = props.multiple ? !(value as File[])?.length : !value
  if (hasModelReset && inputRef.value) {
    inputRef.value.value = ''
  }
})

function createObjectUrl(file: File): string | undefined {
  if (!props.fileImage) return undefined
  return URL.createObjectURL(file)
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const value = bytes / Math.pow(k, i)
  const formattedSize = i === 0 ? value.toString() : value.toFixed(0)
  return `${formattedSize}${sizes[i]}`
}

/* 预览图加载失败的索引集合：加载失败后回退为文件图标 */
const imageErrors = reactive(new Set<string>())

function imageKey(file: File, index: number) {
  return `${index}:${file.name}`
}

defineExpose({
  inputRef,
  dropzoneRef,
})

/* ---- 样式映射（Nuxt UI 主题语义 → 本地 token） ---- */

const colorClasses: Record<FileUploadColor, string> = {
  primary: 'outline-primary-6/25 focus-visible:outline-3 focus-visible:border-primary-6',
  secondary: 'outline-secondary/25 focus-visible:outline-3 focus-visible:border-secondary',
  neutral: 'outline-foreground/25 focus-visible:outline-3 focus-visible:border-foreground',
  success: 'outline-success-6/25 focus-visible:outline-3 focus-visible:border-success-6',
  info: 'outline-info-6/25 focus-visible:outline-3 focus-visible:border-info-6',
  warning: 'outline-warning-6/25 focus-visible:outline-3 focus-visible:border-warning-6',
  error: 'outline-error-6/25 focus-visible:outline-3 focus-visible:border-error-6',
}

const highlightClasses: Record<FileUploadColor, string> = {
  primary: 'border-primary-6',
  secondary: 'border-secondary',
  neutral: 'border-border',
  success: 'border-success-6',
  info: 'border-info-6',
  warning: 'border-warning-6',
  error: 'border-error-6',
}

/** 尺寸 → 文字、图标与文件项 */
const sizeClasses: Record<FileUploadSize, {
  base: string
  icon: string
  avatar: string
  fileText: string
  fileGap: string
  filePadding: string
  fileSize?: string
}> = {
  xs: { base: 'text-xs', icon: 'size-4', avatar: 'size-5', fileText: 'text-xs', fileGap: 'gap-1', filePadding: 'px-2 py-1' },
  sm: { base: 'text-xs', icon: 'size-4', avatar: 'size-6', fileText: 'text-xs', fileGap: 'gap-1.5', filePadding: 'px-2.5 py-1.5' },
  md: { base: 'text-sm', icon: 'size-5', avatar: 'size-8', fileText: 'text-xs', fileGap: 'gap-1.5', filePadding: 'px-2.5 py-1.5' },
  lg: { base: 'text-sm', icon: 'size-5', avatar: 'size-10', fileText: 'text-sm', fileGap: 'gap-2', filePadding: 'px-3 py-2', fileSize: 'text-xs' },
  xl: { base: 'text-base', icon: 'size-6', avatar: 'size-12', fileText: 'text-sm', fileGap: 'gap-2', filePadding: 'px-3 py-2' },
}

/** xs / sm 时文件名与体积同行排列 */
const fileWrapperRowSizes: Partial<Record<FileUploadSize, string>> = {
  xs: 'flex-row gap-1',
  sm: 'flex-row gap-1',
}

/** button 形态的内边距 */
const buttonPaddings: Record<FileUploadSize, string> = {
  xs: 'p-1',
  sm: 'p-1.5',
  md: 'p-1.5',
  lg: 'p-2',
  xl: 'p-2',
}

/** list 布局删除按钮的负外边距（贴齐文件项边缘） */
const trailingButtonMargins: Record<FileUploadSize, string> = {
  xs: '-me-1',
  sm: '-me-1.5',
  md: '-me-1.5',
  lg: '-me-2',
  xl: '-me-2',
}

/** 删除按钮默认配置：grid 为悬浮方块，list 为行内链接 */
const fileDeleteProps = computed<{
  variant: 'solid' | 'outline' | 'soft' | 'ghost' | 'subtle' | 'link'
  size: FileUploadSize
  color: FileUploadColor
  label?: string
  ui?: FileUploadFileDelete['ui']
  class?: FileUploadFileDelete['class']
}>(() => {
  const defaults: { color: FileUploadColor; variant: 'solid' | 'link'; size: FileUploadSize } =
    layout.value === 'grid'
      ? { color: 'neutral', variant: 'solid', size: 'xs' }
      : { color: 'neutral', variant: 'link', size: props.size }
  return {
    ...defaults,
    ...(typeof props.fileDelete === 'object' ? props.fileDelete : undefined),
  }
})

/* 文件列表区域在 upload 区域内外共用 */
const [DefineFilesTemplate, ReuseFilesTemplate] = createReusableTemplate()
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    data-slot="root"
    :class="cn(
      'relative flex flex-col',
      layout === 'list' && 'items-start gap-2',
      props.ui?.root,
      props.class,
    )"
  >
    <slot :open="open" :remove-file="removeFile" :ui="{ ...(props.ui ?? {}) }">
      <component
        :is="variant === 'button' ? 'button' : 'div'"
        ref="dropzoneRef"
        :type="variant === 'button' ? 'button' : undefined"
        :role="variant === 'button' ? undefined : 'button'"
        :disabled="variant === 'button' ? disabled : undefined"
        :aria-disabled="variant === 'button' ? undefined : disabled || undefined"
        :data-dragging="isDragging"
        data-slot="base"
        :class="cn(
          'flex w-full flex-1 flex-col items-stretch justify-center gap-2 rounded-lg border border-border bg-background transition-[background] ease-out focus-visible:outline-3',
          variant === 'area' && 'p-4',
          variant === 'button' && buttonPaddings[size],
          dropzone && 'border-dashed data-[dragging=true]:bg-muted/25',
          disabled && 'cursor-not-allowed opacity-75',
          interactive && !disabled && 'hover:bg-muted/25',
          sizeClasses[size].base,
          colorClasses[color],
          highlight && highlightClasses[color],
          props.ui?.base,
        )"
        :tabindex="interactive && !disabled ? 0 : -1"
        @click="interactive && !disabled && open()"
        @keydown.space.prevent
        @keyup.enter.space="interactive && !disabled && open()"
      >
        <DefineFilesTemplate>
          <template v-if="preview && modelValue && (Array.isArray(modelValue) ? modelValue.length : true)">
            <slot name="files-top" :files="modelValue" :open="open" :remove-file="removeFile" />

            <div
              data-slot="files"
              :class="cn(
                layout === 'list'
                  ? 'flex w-full flex-col gap-2'
                  : multiple && 'grid w-full grid-cols-2 gap-4 md:grid-cols-3',
                props.ui?.files,
              )"
            >
              <slot name="files" :files="modelValue" :remove-file="removeFile">
                <div
                  v-for="(file, index) in Array.isArray(modelValue) ? modelValue : [modelValue]"
                  :key="(file as File).name"
                  data-slot="file"
                  :class="cn(
                    'relative',
                    layout === 'list'
                      ? cn('flex w-full min-w-0 items-center rounded-md border border-border', sizeClasses[size].fileText, sizeClasses[size].fileGap, sizeClasses[size].filePadding)
                      : cn(sizeClasses[size].fileText, sizeClasses[size].fileGap, multiple ? 'aspect-square p-0' : 'absolute inset-0 p-0'),
                    props.ui?.file,
                  )"
                >
                  <slot name="file" :file="file" :index="index" :remove-file="removeFile">
                    <slot name="file-leading" :file="file" :index="index" :ui="{ ...(props.ui ?? {}) }" :remove-file="removeFile">
                      <span
                        data-slot="fileLeadingAvatar"
                        :class="cn(
                          'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted',
                          sizeClasses[size].avatar,
                          layout === 'grid' && 'size-full rounded-lg',
                          props.ui?.fileLeadingAvatar,
                        )"
                      >
                        <img
                          v-if="createObjectUrl(file as File) && !imageErrors.has(imageKey(file as File, index))"
                          :src="createObjectUrl(file as File)"
                          :alt="(file as File).name"
                          class="h-full w-full rounded-[inherit] object-cover"
                          @error="imageErrors.add(imageKey(file as File, index))"
                        />
                        <template v-else>
                          <XIcon
                            v-if="fileIcon"
                            :name="fileIcon as IconName"
                            :class="cn(sizeClasses[size].icon, 'text-muted-foreground')"
                          />
                          <FileText v-else :class="cn(sizeClasses[size].icon, 'text-muted-foreground')" />
                        </template>
                      </span>
                    </slot>

                    <div
                      data-slot="fileWrapper"
                      :class="cn(
                        'flex min-w-0 flex-col',
                        layout === 'list' && fileWrapperRowSizes[size],
                        layout === 'grid' && 'hidden',
                        props.ui?.fileWrapper,
                      )"
                    >
                      <span data-slot="fileName" :class="cn('truncate text-foreground', props.ui?.fileName)">
                        <slot name="file-name" :file="file" :index="index">
                          {{ (file as File).name }}
                        </slot>
                      </span>

                      <span
                        data-slot="fileSize"
                        :class="cn('truncate text-muted-foreground', sizeClasses[size].fileSize, props.ui?.fileSize)"
                      >
                        <slot name="file-size" :file="file" :index="index">
                          {{ formatFileSize((file as File).size) }}
                        </slot>
                      </span>
                    </div>

                    <slot name="file-trailing" :file="file" :index="index" :ui="{ ...(props.ui ?? {}) }" :remove-file="removeFile">
                      <XButton
                        v-if="fileDelete"
                        v-bind="fileDeleteProps"
                        :square="layout === 'grid'"
                        :aria-label="`移除文件 ${(file as File).name}`"
                        data-slot="fileTrailingButton"
                        :class="cn(
                          layout === 'list'
                            ? cn('ms-auto', trailingButtonMargins[size])
                            : 'absolute -top-1.5 -end-1.5 rounded-full border-2 border-background p-0',
                          props.ui?.fileTrailingButton,
                        )"
                        @click.stop.prevent="removeFile(index)"
                      >
                        <template #trailing>
                          <XIcon v-if="fileDeleteIcon" :name="fileDeleteIcon as IconName" />
                          <X v-else class="size-4" />
                        </template>
                      </XButton>
                    </slot>
                  </slot>
                </div>
              </slot>
            </div>

            <slot name="files-bottom" :files="modelValue" :open="open" :remove-file="removeFile" />
          </template>
        </DefineFilesTemplate>

        <ReuseFilesTemplate v-if="position === 'inside'" />

        <div
          v-if="position === 'inside' ? (!preview || (multiple ? !(modelValue as File[])?.length : !modelValue)) : true"
          data-slot="wrapper"
          :class="cn('flex flex-col items-center justify-center text-center', variant === 'area' && 'px-4 py-3', props.ui?.wrapper)"
        >
          <slot name="leading" :ui="{ ...(props.ui ?? {}) }">
            <template v-if="icon !== false">
              <XIcon
                v-if="variant === 'button' && icon"
                :name="icon as IconName"
                data-slot="icon"
                :class="cn('shrink-0', sizeClasses[size].icon, props.ui?.icon)"
              />
              <Upload
                v-else-if="variant === 'button'"
                data-slot="icon"
                :class="cn('shrink-0', sizeClasses[size].icon, props.ui?.icon)"
              />
              <span
                v-else
                data-slot="avatar"
                :class="cn(
                  'inline-flex shrink-0 items-center justify-center rounded-full bg-muted',
                  sizeClasses[size].avatar,
                  props.ui?.avatar,
                )"
              >
                <XIcon v-if="icon" :name="icon as IconName" />
                <Upload v-else :class="sizeClasses[size].icon" />
              </span>
            </template>
          </slot>

          <template v-if="variant !== 'button'">
            <div v-if="label || $slots.label" data-slot="label" :class="cn('mt-2 font-medium text-foreground', props.ui?.label)">
              <slot name="label">
                {{ label }}
              </slot>
            </div>
            <div v-if="description || $slots.description" data-slot="description" :class="cn('mt-1 text-muted-foreground', props.ui?.description)">
              <slot name="description">
                {{ description }}
              </slot>
            </div>

            <div v-if="$slots.actions" data-slot="actions" :class="cn('mt-4 flex shrink-0 flex-wrap gap-1.5', props.ui?.actions)">
              <slot name="actions" :files="modelValue" :open="open" :remove-file="removeFile" />
            </div>
          </template>
        </div>
      </component>

      <ReuseFilesTemplate v-if="position === 'outside'" />
    </slot>

    <input
      ref="inputRef"
      v-bind="{ ...$attrs, 'data-slot': undefined }"
      :id="id"
      type="file"
      class="sr-only"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      :required="required"
      :disabled="disabled"
      @change="onDrop(($event.target as HTMLInputElement).files)"
    />
  </Primitive>
</template>
