<script setup lang="ts">
/**
 * XInputTags 标签输入：以标签形式输入多个值，回车添加、点击关闭移除。
 * 按 Nuxt UI input-tags 结构对齐：root > item(itemText + itemDelete > itemDeleteIcon) + input + leading。
 * 容器注入 Nuxt UI 语义：variant × color、highlight、fixed；单个标签长度由 maxLength 限制。
 */
import type { Component, HTMLAttributes } from 'vue'
import { onMounted, onScopeDispose, ref, useTemplateRef } from 'vue'
import { X } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

/* 属性透传到内部 input，避免落到外层包装元素 */
defineOptions({ inheritAttrs: false })

type TagsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TagsColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type TagsVariant = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

/** XIcon 内置图标名 */
export type InputTagsIconName = 'x' | 'trash'
/** 图标：XIcon 名称或自定义组件 */
export type InputTagsIcon = InputTagsIconName | Component

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface InputTagsUi {
  root?: string
  base?: string
  item?: string
  itemText?: string
  itemDelete?: string
  itemDeleteIcon?: string
  input?: string
  leading?: string
}

const props = withDefaults(defineProps<{
  /** 标签数组 */
  modelValue?: string[]
  /** 最大标签数 */
  max?: number
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 单个标签最大长度 */
  maxLength?: number
  /** 删除标签图标 */
  deleteIcon?: InputTagsIcon
  /** 控件尺寸 */
  size?: TagsSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: TagsColor
  /** 预设样式 */
  variant?: TagsVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 挂载后自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延迟（毫秒） */
  autofocusDelay?: number
  /** 主题插槽类名 */
  ui?: InputTagsUi
  class?: HTMLAttributes['class']
}>(), {
  modelValue: () => [],
  placeholder: '输入后回车添加…',
  deleteIcon: 'x',
  size: 'md',
  color: 'primary',
  variant: 'outline',
  fixed: true,
  autofocusDelay: 0,
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
  /** 添加标签 */
  add: [tag: string]
  /** 删除标签 */
  remove: [index: number]
}>()

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const variantClasses: Record<TagsVariant, string> = {
  outline: 'bg-background ring-1 ring-inset ring-border',
  soft: 'bg-muted/50 hover:bg-muted has-focus-visible:bg-muted disabled:bg-muted/50',
  subtle: 'bg-muted ring-1 ring-inset ring-border',
  ghost: 'bg-transparent hover:bg-muted has-focus-visible:bg-muted disabled:bg-transparent',
  none: 'bg-transparent has-focus-visible:outline-none',
}

/** 聚焦描边（颜色 × 变体）：容器内部输入聚焦时叠加 outline 与 ring */
const focusStyles: Record<TagsColor, Record<TagsVariant, string>> = {
  primary: {
    outline: 'outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary',
    soft: 'outline-primary/25 has-focus-visible:outline-3',
    subtle: 'outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary',
    ghost: 'outline-primary/25 has-focus-visible:outline-3',
    none: '',
  },
  secondary: {
    outline: 'outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-secondary',
    soft: 'outline-secondary/25 has-focus-visible:outline-3',
    subtle: 'outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-secondary',
    ghost: 'outline-secondary/25 has-focus-visible:outline-3',
    none: '',
  },
  neutral: {
    outline: 'outline-foreground/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-foreground',
    soft: 'outline-foreground/25 has-focus-visible:outline-3',
    subtle: 'outline-foreground/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-foreground',
    ghost: 'outline-foreground/25 has-focus-visible:outline-3',
    none: '',
  },
  success: {
    outline: 'outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success',
    soft: 'outline-success/25 has-focus-visible:outline-3',
    subtle: 'outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success',
    ghost: 'outline-success/25 has-focus-visible:outline-3',
    none: '',
  },
  info: {
    outline: 'outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info',
    soft: 'outline-info/25 has-focus-visible:outline-3',
    subtle: 'outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info',
    ghost: 'outline-info/25 has-focus-visible:outline-3',
    none: '',
  },
  warning: {
    outline: 'outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning',
    soft: 'outline-warning/25 has-focus-visible:outline-3',
    subtle: 'outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning',
    ghost: 'outline-warning/25 has-focus-visible:outline-3',
    none: '',
  },
  error: {
    outline: 'outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error',
    soft: 'outline-error/25 has-focus-visible:outline-3',
    subtle: 'outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error',
    ghost: 'outline-error/25 has-focus-visible:outline-3',
    none: '',
  },
}

/** 高亮描边色 */
const highlightClasses: Record<TagsColor, string> = {
  primary: 'ring-1 ring-inset ring-primary',
  secondary: 'ring-1 ring-inset ring-secondary',
  neutral: 'ring-1 ring-inset ring-border',
  success: 'ring-1 ring-inset ring-success',
  info: 'ring-1 ring-inset ring-info',
  warning: 'ring-1 ring-inset ring-warning',
  error: 'ring-1 ring-inset ring-error',
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<TagsSize, string>> = {
  xs: 'md:text-xs',
  sm: 'md:text-xs',
  md: 'md:text-sm',
  lg: 'md:text-sm',
}

/** 标签文字尺寸 */
const itemSizeClasses: Record<TagsSize, string> = {
  xs: 'text-[10px]/3',
  sm: 'text-[10px]/3',
  md: 'text-xs',
  lg: 'text-xs',
  xl: 'text-sm',
}

/** 删除图标尺寸 */
const deleteIconSizeClasses: Record<TagsSize, string> = {
  xs: 'size-3',
  sm: 'size-3',
  md: 'size-3.5',
  lg: 'size-3.5',
  xl: 'size-4',
}

const draft = ref('')

function isIconName(icon: InputTagsIcon): icon is InputTagsIconName {
  return typeof icon === 'string'
}

function addTag(raw: string) {
  const tag = raw.trim()
  if (!tag || props.modelValue.includes(tag)) return
  if (props.max != null && props.modelValue.length >= props.max) return
  emit('update:modelValue', [...props.modelValue, tag])
  emit('add', tag)
  draft.value = ''
}

function removeTag(index: number) {
  emit('update:modelValue', props.modelValue.filter((_, i) => i !== index))
  emit('remove', index)
}

/** maxLength 限制单个标签长度 */
function onDraft(value: string) {
  draft.value = props.maxLength != null ? value.slice(0, props.maxLength) : value
}

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

function autoFocus() {
  if (props.autofocus) {
    inputRef.value?.focus()
  }
}

let autofocusTimeoutId: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  autofocusTimeoutId = setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})

onScopeDispose(() => clearTimeout(autofocusTimeoutId))
</script>

<template>
  <Primitive
    :as="as ?? 'span'"
    data-slot="root"
    :class="cn(
      'relative inline-flex w-full flex-wrap items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors',
      variantClasses[variant],
      focusStyles[color][variant],
      highlight && highlightClasses[color],
      fixed === false && fixedTextClasses[size],
      disabled && 'pointer-events-none opacity-50',
      props.ui?.base,
      props.ui?.root,
      props.class,
    )"
  >
    <template v-for="(tag, index) in modelValue" :key="`${tag}-${index}`">
      <slot name="tag" :tag="tag" :index="index">
        <span
          data-slot="item"
          :class="cn(
            'inline-flex items-center gap-0.5 rounded-xs px-1.5 py-0.5 font-medium ring-1 ring-inset ring-border bg-muted text-foreground',
            itemSizeClasses[size],
            props.ui?.item,
          )"
        >
          <span data-slot="itemText" :class="cn(props.ui?.itemText)">{{ tag }}</span>
          <button
            type="button"
            data-slot="itemDelete"
            aria-label="close"
            :disabled="disabled"
            :class="cn(
              'inline-flex items-center rounded-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none',
              props.ui?.itemDelete,
            )"
            @click="removeTag(index)"
          >
            <XIcon
              v-if="isIconName(deleteIcon)"
              :name="deleteIcon"
              data-slot="itemDeleteIcon"
              :class="cn('shrink-0', deleteIconSizeClasses[size], props.ui?.itemDeleteIcon)"
            />
            <component
              :is="deleteIcon ?? X"
              v-else
              data-slot="itemDeleteIcon"
              :class="cn('shrink-0', deleteIconSizeClasses[size], props.ui?.itemDeleteIcon)"
            />
          </button>
        </span>
      </slot>
    </template>
    <span v-if="$slots.leading" data-slot="leading" :class="cn('inline-flex items-center', props.ui?.leading)">
      <slot name="leading" />
    </span>
    <input
      ref="inputRef"
      v-bind="$attrs"
      type="text"
      :value="draft"
      :disabled="disabled || (max != null && modelValue.length >= max)"
      :placeholder="modelValue.length === 0 ? placeholder : ''"
      :maxlength="maxLength"
      data-slot="input"
      :class="cn(
        'h-6 min-w-24 flex-1 bg-transparent p-0 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-75',
        props.ui?.input,
      )"
      @input="onDraft(($event.target as HTMLInputElement).value)"
      @keydown.enter.prevent="addTag(draft)"
      @keydown.backspace="!draft && modelValue.length > 0 && removeTag(modelValue.length - 1)"
      @blur="addTag(draft)"
    />
  </Primitive>
</template>
