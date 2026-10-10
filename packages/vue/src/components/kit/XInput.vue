<script setup lang="ts">
/**
 * XInput 输入框：原生 input 的二次封装。
 * 注入 Nuxt UI 语义：variant × color、highlight、fixed、leading / trailing 插槽与左侧头像。
 * 变体：outline | soft | subtle | ghost | none
 * 颜色：primary | secondary | neutral | success | info | warning | error
 * 保留 kit 既有能力：status、clearable、addon、prefix / suffix 插槽
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useAttrs, useSlots, useTemplateRef } from 'vue'
import { X } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import XAvatar, { type AvatarProps } from './XAvatar.vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* 属性透传到内部 input，避免落到外层包装元素 */
defineOptions({ name: 'XInput', inheritAttrs: false })

type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type InputColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type InputVariant = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'
type InputStatus = 'error' | 'warning'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface InputUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: AvatarProps['size']
  trailing?: string
  trailingIcon?: string
}

const props = withDefaults(defineProps<{
  /** 控件尺寸 */
  size?: InputSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: InputColor
  /** 预设样式 */
  variant?: InputVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 校验状态 */
  status?: InputStatus
  /** 占位提示文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 最大输入长度 */
  maxLength?: number
  /** 是否显示清空按钮 */
  clearable?: boolean
  /** 左侧头像配置 */
  avatar?: AvatarProps
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: InputUi
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
  color: 'primary',
  variant: 'outline',
  highlight: false,
  fixed: true,
  clearable: false,
})

/** 输入值（支持 v-model） */
const model = defineModel<string | number>({ default: '' })

const emit = defineEmits<{
  /** 点击清空按钮时回调 */
  clear: []
}>()

const slots = useSlots()
const attrs = useAttrs()
const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

/** 尺寸 → 高度与内边距 */
const sizeClasses: Record<InputSize, string> = {
  xs: 'h-7 px-2 text-sm',
  sm: 'h-8 px-2.5 text-sm',
  md: 'h-9 px-2.5 text-sm',
  lg: 'h-10 px-3 text-sm',
  xl: 'h-11 px-3 text-base',
}

/** leading / trailing 内容存在时，控件补足的水平内边距 */
const leadingBasePaddings: Record<InputSize, string> = {
  xs: 'pl-7', sm: 'pl-8', md: 'pl-9', lg: 'pl-10', xl: 'pl-11',
}
const trailingBasePaddings: Record<InputSize, string> = {
  xs: 'pr-7', sm: 'pr-8', md: 'pr-9', lg: 'pr-10', xl: 'pr-11',
}

/** trailing 与清空按钮并存、仅清空按钮时的内边距 */
const trailingWithClearPaddings: Record<InputSize, string> = {
  xs: 'pr-10', sm: 'pr-11', md: 'pr-12', lg: 'pr-13', xl: 'pr-14',
}
const clearPaddings: Record<InputSize, string> = {
  xs: 'pr-5', sm: 'pr-6', md: 'pr-7', lg: 'pr-8', xl: 'pr-9',
}

/** leading / trailing 容器自身的内边距 */
const leadingPaddings: Record<InputSize, string> = {
  xs: 'pl-2', sm: 'pl-2.5', md: 'pl-2.5', lg: 'pl-3', xl: 'pl-3',
}
const trailingPaddings: Record<InputSize, string> = {
  xs: 'pr-2', sm: 'pr-2.5', md: 'pr-2.5', lg: 'pr-3', xl: 'pr-3',
}

/** trailing 与清空按钮并存时，容器额外避让的右内边距 */
const trailingClearExtras: Record<InputSize, string> = {
  xs: 'pr-5', sm: 'pr-5', md: 'pr-6', lg: 'pr-7', xl: 'pr-8',
}

/** 图标尺寸（随控件尺寸） */
const iconSizes: Record<InputSize, string> = {
  xs: 'size-4', sm: 'size-4', md: 'size-5', lg: 'size-5', xl: 'size-6',
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const variantClasses: Record<InputVariant, string> = {
  outline: 'bg-background ring-1 ring-inset ring-border',
  soft: 'bg-muted/50 hover:bg-muted focus:bg-muted disabled:bg-muted/50',
  subtle: 'bg-muted ring-1 ring-inset ring-border',
  ghost: 'bg-transparent hover:bg-muted focus:bg-muted disabled:bg-transparent',
  none: 'bg-transparent focus:outline-none',
}

/** 聚焦描边（颜色 × 变体）：outline / subtle 聚焦时叠加 ring */
const focusStyles: Record<InputColor, Record<InputVariant, string>> = {
  primary: {
    outline: 'outline-primary-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary-6',
    soft: 'outline-primary-6/25 focus-visible:outline-3',
    subtle: 'outline-primary-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary-6',
    ghost: 'outline-primary-6/25 focus-visible:outline-3',
    none: '',
  },
  secondary: {
    outline: 'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary',
    soft: 'outline-secondary/25 focus-visible:outline-3',
    subtle: 'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary',
    ghost: 'outline-secondary/25 focus-visible:outline-3',
    none: '',
  },
  neutral: {
    outline: 'outline-neutral-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-neutral-6',
    soft: 'outline-neutral-6/25 focus-visible:outline-3',
    subtle: 'outline-neutral-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-neutral-6',
    ghost: 'outline-neutral-6/25 focus-visible:outline-3',
    none: '',
  },
  success: {
    outline: 'outline-success-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success-6',
    soft: 'outline-success-6/25 focus-visible:outline-3',
    subtle: 'outline-success-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success-6',
    ghost: 'outline-success-6/25 focus-visible:outline-3',
    none: '',
  },
  info: {
    outline: 'outline-info-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info-6',
    soft: 'outline-info-6/25 focus-visible:outline-3',
    subtle: 'outline-info-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info-6',
    ghost: 'outline-info-6/25 focus-visible:outline-3',
    none: '',
  },
  warning: {
    outline: 'outline-warning-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning-6',
    soft: 'outline-warning-6/25 focus-visible:outline-3',
    subtle: 'outline-warning-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning-6',
    ghost: 'outline-warning-6/25 focus-visible:outline-3',
    none: '',
  },
  error: {
    outline: 'outline-error-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error-6',
    soft: 'outline-error-6/25 focus-visible:outline-3',
    subtle: 'outline-error-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error-6',
    ghost: 'outline-error-6/25 focus-visible:outline-3',
    none: '',
  },
}

/** 高亮描边色 */
const highlightClasses: Record<InputColor, string> = {
  primary: 'ring-1 ring-inset ring-primary-6',
  secondary: 'ring-1 ring-inset ring-secondary',
  neutral: 'ring-1 ring-inset ring-neutral-6',
  success: 'ring-1 ring-inset ring-success-6',
  info: 'ring-1 ring-inset ring-info-6',
  warning: 'ring-1 ring-inset ring-warning-6',
  error: 'ring-1 ring-inset ring-error-6',
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<InputSize, string>> = {
  xs: 'md:text-xs',
  sm: 'md:text-xs',
  md: 'md:text-sm',
  lg: 'md:text-sm',
}

const statusClasses: Record<InputStatus, string> = {
  error: 'border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20',
  warning: 'border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20',
}

const hasLeading = computed(() => !!slots.leading || !!slots.prefix || props.avatar != null)
const hasTrailing = computed(() => !!slots.trailing || !!slots.suffix)

/* 只读状态经 $attrs 透传，此处读取用于控制清空按钮显隐 */
const isReadonly = computed(() => attrs.readonly === '' || attrs.readonly === true)

/* 有值且未禁用、未只读时才展示清空按钮 */
const showClear = computed(
  () => props.clearable && model.value !== '' && model.value != null && !props.disabled && !isReadonly.value,
)

/** 清空值并恢复焦点 */
function handleClear() {
  model.value = ''
  emit('clear')
  focus()
}

/** 使输入框获得焦点 */
function focus() {
  inputRef.value?.focus()
}

/** 使输入框失去焦点 */
function blur() {
  inputRef.value?.blur()
}

/** 选中输入框内容 */
function select() {
  inputRef.value?.select()
}

defineExpose({ focus, blur, select })

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
    :class="cn(
      'relative inline-flex items-center',
      (slots.addonBefore || slots.addonAfter) && 'flex w-full items-stretch',
      props.ui?.root,
      props.class,
    )"
  >
    <span
      v-if="slots.addonBefore"
      class="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground"
    >
      <slot name="addonBefore" />
    </span>
    <input
      ref="inputRef"
      v-bind="forwardedAttrs"
      :value="model"
      data-slot="base"
      :class="cn(
        'w-full rounded-md border-0 appearance-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-75 transition-colors',
        sizeClasses[size],
        hasLeading && leadingBasePaddings[size],
        hasTrailing && (showClear ? trailingWithClearPaddings[size] : trailingBasePaddings[size]),
        showClear && !hasTrailing && clearPaddings[size],
        slots.addonBefore && 'rounded-l-none',
        slots.addonAfter && 'rounded-r-none',
        variantClasses[variant],
        focusStyles[color][variant],
        highlight && highlightClasses[color],
        fixed === false && fixedTextClasses[size],
        status && statusClasses[status],
        props.ui?.base,
      )"
      :disabled="disabled"
      :maxlength="maxLength"
      :placeholder="placeholder"
      @input="model = ($event.target as HTMLInputElement).value"
    />

    <span
      v-if="hasLeading"
      data-slot="leading"
      :class="cn('absolute inset-y-0 left-0 flex items-center', leadingPaddings[size], props.ui?.leading)"
    >
      <slot name="leading">
        <span
          v-if="slots.prefix"
          :class="cn('shrink-0 text-muted-foreground [&_svg]:size-full', iconSizes[size], props.ui?.leadingIcon)"
        >
          <slot name="prefix" />
        </span>
        <XAvatar
          v-else-if="avatar"
          v-bind="avatar"
          :size="props.ui?.leadingAvatarSize ?? avatar.size"
          data-slot="leadingAvatar"
          :class="cn('shrink-0', props.ui?.leadingAvatar, avatar.class)"
        />
      </slot>
    </span>

    <span
      v-if="hasTrailing"
      data-slot="trailing"
      :class="cn(
        'absolute inset-y-0 right-0 flex items-center',
        trailingPaddings[size],
        showClear && trailingClearExtras[size],
        props.ui?.trailing,
      )"
    >
      <slot name="trailing">
        <span
          v-if="slots.suffix"
          :class="cn('shrink-0 text-muted-foreground [&_svg]:size-full', iconSizes[size], props.ui?.trailingIcon)"
        >
          <slot name="suffix" />
        </span>
      </slot>
    </span>

    <Button
      v-if="showClear"
      type="button"
      variant="ghost"
      size="icon-xs"
      aria-label="清空"
      class="absolute right-2 size-4 rounded-full text-muted-foreground opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3.5"
      @click="handleClear"
    >
      <X />
    </Button>

    <span
      v-if="slots.addonAfter"
      class="inline-flex items-center rounded-r-lg border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground"
    >
      <slot name="addonAfter" />
    </span>
  </Primitive>
</template>
