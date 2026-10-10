<script setup lang="ts">
/**
 * XPinInput 验证码输入：shadcn-vue input-otp 原子的二次封装。
 * 注入 Nuxt UI 语义：variant × color、size、highlight、fixed、separator。
 * 变体：outline | soft | subtle | ghost | none
 * 颜色：primary | secondary | neutral | success | info | warning | error
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import { Primitive } from 'reka-ui'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { cn } from '@/lib/utils'

/* 根节点由 Primitive 渲染，未声明的属性透传到根元素 */
defineOptions({ name: 'XPinInput', inheritAttrs: false })

type PinInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type PinInputColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type PinInputVariant = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface PinInputUi {
  root?: string
  base?: string
  separator?: string
}

const props = withDefaults(defineProps<{
  /** 绑定值（支持 v-model） */
  modelValue?: string
  /** 默认值 */
  defaultValue?: string
  /** 位数 */
  length?: number
  /** 是否掩码（视觉隐藏已输入字符） */
  mask?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 控件尺寸 */
  size?: PinInputSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: PinInputColor
  /** 预设样式 */
  variant?: PinInputVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 分组分隔：数字表示每隔 N 个输入槽插入分隔符，数组表示指定位置之后插入 */
  separator?: number | number[]
  /** 自动聚焦第一个输入槽 */
  autofocus?: boolean
  /** 自动聚焦延迟（ms） */
  autofocusDelay?: number
  /** 以一次性验证码形式提示浏览器（autocomplete=one-time-code） */
  otp?: boolean
  /** 输入框类型（如 number） */
  type?: string
  /** 占位提示文字 */
  placeholder?: string
  /** 是否必填 */
  required?: boolean
  /** 与表单关联的 id */
  id?: string
  /** 表单提交时的字段名 */
  name?: string
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: PinInputUi
  class?: HTMLAttributes['class']
}>(), {
  defaultValue: '',
  length: 5,
  mask: false,
  disabled: false,
  size: 'md',
  color: 'primary',
  variant: 'outline',
  highlight: false,
  fixed: true,
  autofocus: false,
  autofocusDelay: 0,
  otp: false,
  type: 'text',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  /** 输入完成回调 */
  complete: [value: string]
  /** 输入完成时触发（带 target.value） */
  change: [event: Event]
  /** 焦点离开组件时触发 */
  blur: [event: FocusEvent]
  /** 焦点进入组件时触发 */
  focus: [event: FocusEvent]
}>()

/* 非受控用法在组件内部维护当前值 */
const inner = ref(props.defaultValue)
const current = computed(() => props.modelValue ?? inner.value)

const rootRef = useTemplateRef<HTMLElement>('rootRef')

/* autofocusDelay 后聚焦第一个输入槽 */
onMounted(() => {
  if (!props.autofocus) return
  setTimeout(() => {
    rootRef.value?.querySelector('input')?.focus()
  }, props.autofocusDelay)
})

function handleUpdate(value: string | undefined) {
  if (props.modelValue === undefined) inner.value = value ?? ''
  emit('update:modelValue', value ?? '')
}

/* 输入完成：派发 change 与 complete（与 Nuxt UI 相同的双事件语义） */
function onComplete(value: string) {
  // @ts-expect-error target 不属于 EventInit，与 Nuxt UI 相同的构造方式
  const event = new Event('change', { target: { value } })
  emit('change', event)
  emit('complete', value)
}

function onFocusIn(event: FocusEvent) {
  if (event.relatedTarget && (event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)) return
  emit('focus', event)
}

function onFocusOut(event: FocusEvent) {
  if (event.relatedTarget && (event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)) return
  emit('blur', event)
}

/* 分隔符插入位置：与 Nuxt UI PinInput 相同的计算规则 */
function shouldInsertSeparator(index: number) {
  if (props.separator === undefined) return false
  const position = index + 1
  if (position >= props.length) return false
  if (Array.isArray(props.separator)) return props.separator.includes(position)
  return Number.isInteger(props.separator) && props.separator > 0 && position % props.separator === 0
}

/** 尺寸 → 输入槽方块与字号 */
const slotSizeClasses: Record<PinInputSize, string> = {
  xs: 'size-6 text-sm/4',
  sm: 'size-7 text-sm/4',
  md: 'size-8 text-base/5',
  lg: 'size-9 text-base/5',
  xl: 'size-10 text-base',
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const variantClasses: Record<PinInputVariant, string> = {
  outline: 'bg-background ring-1 ring-inset ring-border',
  soft: 'bg-muted/50 hover:bg-muted focus:bg-muted disabled:bg-muted/50',
  subtle: 'bg-muted ring-1 ring-inset ring-border',
  ghost: 'bg-transparent hover:bg-muted focus:bg-muted disabled:bg-transparent',
  none: 'bg-transparent focus:outline-none',
}

/** 聚焦描边（颜色 × 变体）：outline / subtle 聚焦时叠加 ring */
const focusStyles: Record<PinInputColor, Record<PinInputVariant, string>> = {
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
    outline: 'outline-foreground/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-foreground',
    soft: 'outline-foreground/25 focus-visible:outline-3',
    subtle: 'outline-foreground/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-foreground',
    ghost: 'outline-foreground/25 focus-visible:outline-3',
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
const highlightClasses: Record<PinInputColor, string> = {
  primary: 'ring-1 ring-inset ring-primary-6',
  secondary: 'ring-1 ring-inset ring-secondary',
  neutral: 'ring-1 ring-inset ring-border',
  success: 'ring-1 ring-inset ring-success-6',
  info: 'ring-1 ring-inset ring-info-6',
  warning: 'ring-1 ring-inset ring-warning-6',
  error: 'ring-1 ring-inset ring-error-6',
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<PinInputSize, string>> = {
  xs: 'md:text-xs',
  sm: 'md:text-xs',
  md: 'md:text-sm',
  lg: 'md:text-sm',
}
</script>

<template>
  <Primitive
    ref="rootRef"
    :as="as ?? 'div'"
    v-bind="$attrs"
    data-slot="root"
    :class="cn(
      'relative inline-flex items-center gap-1.5',
      mask && '[&_[data-slot=input-otp-slot]]:text-transparent',
      props.ui?.root,
      props.class,
    )"
  >
    <InputOTP
      :model-value="current"
      :default-value="defaultValue"
      :maxlength="length"
      :disabled="disabled"
      container-class="flex items-center gap-1.5"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="otp ? 'one-time-code' : undefined"
      :inputmode="type === 'number' ? 'numeric' : undefined"
      @update:model-value="handleUpdate"
      @complete="onComplete"
      @focus="onFocusIn"
      @blur="onFocusOut"
    >
      <InputOTPGroup class="gap-1.5">
        <template v-for="index in length" :key="index">
          <InputOTPSlot
            :index="index - 1"
            :class="cn(
              'rounded-md border-0 placeholder:text-muted-foreground text-center disabled:cursor-not-allowed disabled:opacity-75 transition-colors',
              slotSizeClasses[size],
              variantClasses[variant],
              focusStyles[color][variant],
              highlight && highlightClasses[color],
              fixed === false && fixedTextClasses[size],
              props.ui?.base,
            )"
          />
          <span
            v-if="shouldInsertSeparator(index - 1)"
            data-slot="pin-input-separator"
            role="presentation"
            aria-hidden="true"
            :class="cn('flex items-center justify-center text-muted-foreground', props.ui?.separator)"
          >
            <slot name="separator" :index="index - 1">•</slot>
          </span>
        </template>
      </InputOTPGroup>
    </InputOTP>
  </Primitive>
</template>
