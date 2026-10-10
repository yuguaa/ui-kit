<script setup lang="ts">
/**
 * XTextarea 多行文本：原生 textarea 的二次封装。
 * 注入 Nuxt UI 语义：color、highlight、size、autoresize（等价 autosize）。
 * 保留 kit 既有能力：showCount 字数统计与 error / warning 校验状态。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, nextTick, onMounted, onScopeDispose, useAttrs, useTemplateRef, watch } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

/* 属性透传到内部 textarea，避免落到外层包装元素 */
defineOptions({ name: 'XTextarea', inheritAttrs: false })

type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TextareaColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type TextareaStatus = 'error' | 'warning'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface TextareaUi {
  base?: string
}

const props = withDefaults(defineProps<{
  /** 控件尺寸 */
  size?: TextareaSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: TextareaColor
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 行数 */
  rows?: number
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否必填 */
  required?: boolean
  /** 自动调整高度 */
  autoresize?: boolean
  /** 自动调整高度的延迟（毫秒） */
  autoresizeDelay?: number
  /** 自动调整高度的行数上限，超出后内容在控件内部滚动 */
  maxrows?: number
  /** 自动调整高度（等价 autoresize） */
  autosize?: boolean
  /** 自动调整高度的行数上限（等价 maxrows） */
  maxRows?: number
  /** 校验状态 */
  status?: TextareaStatus
  /** 最大输入长度 */
  maxLength?: number
  /** 右下角显示字数统计，设置 maxLength 时显示「当前长度 / 最大长度」 */
  showCount?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: TextareaUi
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
  color: 'primary',
  highlight: false,
  fixed: true,
  rows: 3,
  autoresize: false,
  autoresizeDelay: 0,
  maxrows: 0,
  autosize: false,
  showCount: false,
})

/** 绑定值（支持 v-model） */
const model = defineModel<string>({ default: '' })

const attrs = useAttrs()
const textareaRef = useTemplateRef<HTMLTextAreaElement>('textareaRef')

/** 尺寸 → 内边距与字号 */
const sizeClasses: Record<TextareaSize, string> = {
  xs: 'px-2 py-1 text-sm',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-2.5 py-2 text-sm',
  lg: 'px-3 py-2 text-sm',
  xl: 'px-3 py-2.5 text-base',
}

/** 聚焦描边色 */
const focusClasses: Record<TextareaColor, string> = {
  primary: 'outline-primary-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary-6',
  secondary: 'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary',
  neutral: 'outline-neutral-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-neutral-6',
  success: 'outline-success-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success-6',
  info: 'outline-info-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info-6',
  warning: 'outline-warning-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning-6',
  error: 'outline-error-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error-6',
}

/** 高亮描边色 */
const highlightClasses: Record<TextareaColor, string> = {
  primary: 'ring-1 ring-inset ring-primary-6',
  secondary: 'ring-1 ring-inset ring-secondary',
  neutral: 'ring-1 ring-inset ring-neutral-6',
  success: 'ring-1 ring-inset ring-success-6',
  info: 'ring-1 ring-inset ring-info-6',
  warning: 'ring-1 ring-inset ring-warning-6',
  error: 'ring-1 ring-inset ring-error-6',
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<TextareaSize, string>> = {
  xs: 'md:text-xs',
  sm: 'md:text-xs',
  md: 'md:text-sm',
  lg: 'md:text-sm',
}

const statusClasses: Record<TextareaStatus, string> = {
  error: 'border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20',
  warning: 'border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20',
}

const resizeEnabled = computed(() => props.autoresize || props.autosize)
/** autoresize 走 Nuxt JS 行数计算，旧 autosize 保持 CSS field-sizing 方案 */
const jsResize = computed(() => props.autoresize)
const cssAutosize = computed(() => !props.autoresize && props.autosize)
const maxRowsValue = computed(() => props.maxrows || props.maxRows || 0)

/** 旧 autosize 方案：maxRows 换算为 lh 单位的最大高度，随控件自身行高生效 */
const maxHeightStyle = computed(() =>
  cssAutosize.value && maxRowsValue.value > 0 ? { maxHeight: `${maxRowsValue.value}lh` } : undefined,
)

/** Nuxt 模式的自动高度：按内容换算行数，超出 maxrows 后内部滚动 */
function autoResize() {
  const el = textareaRef.value
  if (!jsResize.value || el == null) return
  el.rows = props.rows
  const overflow = el.style.overflow
  el.style.overflow = 'hidden'

  const styles = window.getComputedStyle(el)
  const padding = Number.parseInt(styles.paddingTop) + Number.parseInt(styles.paddingBottom)
  const lineHeight = Number.parseInt(styles.lineHeight)
  const newRows = (el.scrollHeight - padding) / lineHeight

  if (newRows > props.rows) {
    el.rows = maxRowsValue.value > 0 ? Math.min(newRows, maxRowsValue.value) : newRows
  }
  el.style.overflow = overflow
}

watch(model, () => nextTick(autoResize))

let autoresizeTimeoutId: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  autoresizeTimeoutId = setTimeout(async () => {
    await nextTick()
    autoResize()
  }, props.autoresizeDelay)
})

onScopeDispose(() => clearTimeout(autoresizeTimeoutId))

const count = computed(() => model.value.length)

function focus() {
  textareaRef.value?.focus()
}

function blur() {
  textareaRef.value?.blur()
}

defineExpose({ focus, blur, autoResize })

function onClick(event: MouseEvent) {
  const handler = attrs.onClick as
    | ((event: MouseEvent) => unknown)
    | Array<(event: MouseEvent) => unknown>
    | undefined
  if (handler == null) return

  /* 透传的处理器可能是数组（上层 as-child 合并后），逐个调用 */
  const handlers = Array.isArray(handler) ? handler : [handler]
  handlers.forEach((fn) => fn(event))
}

/** 透传属性：onClick 换成包装后的处理函数，其余原样透传 */
const forwardedAttrs = computed(() => ({ ...attrs, onClick }))
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    data-slot="root"
    :class="cn('relative inline-flex items-center', props.class)"
  >
    <textarea
      ref="textareaRef"
      v-bind="forwardedAttrs"
      :value="model"
      :rows="rows"
      data-slot="base"
      :class="cn(
        'w-full rounded-md border-0 appearance-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-75 transition-colors',
        'bg-background ring-1 ring-inset ring-border',
        sizeClasses[size],
        focusClasses[color],
        highlight && highlightClasses[color],
        fixed === false && fixedTextClasses[size],
        resizeEnabled && 'resize-none',
        cssAutosize && 'field-sizing-content',
        maxHeightStyle != null && 'overflow-auto',
        status && statusClasses[status],
        showCount && 'pb-6',
        props.ui?.base,
      )"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :style="maxHeightStyle"
      @input="model = ($event.target as HTMLTextAreaElement).value"
    />
    <span
      v-if="showCount"
      class="pointer-events-none absolute right-3 bottom-2 text-xs tabular-nums text-muted-foreground"
    >
      <template v-if="maxLength != null">{{ count }} / {{ maxLength }}</template>
      <template v-else>{{ count }}</template>
    </span>
  </Primitive>
</template>
