<script setup lang="ts">
/**
 * XInputTime 时间选择：输入框 + popover 时间列表。
 * 按 Nuxt UI input-time 对齐：root(触发按钮) > base(输入容器) > leading / input / separator / trailing。
 * 支持 12/24 小时制、分钟步长与时间区间（range）；range 时两个输入框由 separatorIcon 分隔。
 * 容器注入 Nuxt UI 语义：variant × color、highlight、fixed。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, onMounted, onScopeDispose, ref, useTemplateRef, watch } from 'vue'
import { Check, Clock, Minus } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

/* 属性透传到内部输入框，避免落到 Popover 包装层 */
defineOptions({ inheritAttrs: false })

type FieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FieldColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type FieldVariant = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

/** XIcon 内置图标名 */
export type InputTimeIconName = 'chevron-right'
/** 图标：XIcon 名称或自定义组件 */
export type InputTimeIcon = InputTimeIconName | Component

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface InputTimeUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  separatorIcon?: string
  trailing?: string
}

const props = withDefaults(defineProps<{
  /** 绑定时间（HH:mm，range 时为 [开始, 结束]） */
  modelValue?: string | string[]
  /** 时间区间选择 */
  range?: boolean
  /** 12 小时制 */
  hour12?: boolean
  /** 步长（分钟） */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 控件尺寸 */
  size?: FieldSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: FieldColor
  /** 预设样式 */
  variant?: FieldVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 区间分隔图标 */
  separatorIcon?: InputTimeIcon
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 挂载后自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延迟（毫秒） */
  autofocusDelay?: number
  /** 主题插槽类名 */
  ui?: InputTimeUi
  class?: HTMLAttributes['class']
}>(), {
  modelValue: '',
  step: 1,
  size: 'md',
  color: 'primary',
  variant: 'outline',
  fixed: true,
  autofocusDelay: 0,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  /** 时间变化回调 */
  change: [value: string | string[]]
}>()

const open = ref(false)
/** range 模式下已点选的开始时间，空表示等待首次点击 */
const draftStart = ref('')

watch(open, (next) => {
  if (next) draftStart.value = ''
})

function buildTimeOptions(): string[] {
  const options: string[] = []
  const totalMinutes = props.hour12 ? 12 * 60 : 24 * 60
  for (let minutes = 0; minutes < totalMinutes; minutes += props.step) {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    options.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`)
  }
  return options
}

const timeOptions = computed(() => buildTimeOptions())

const pair = computed(() => (Array.isArray(props.modelValue) ? props.modelValue : []))
const pairStart = computed(() => pair.value[0] ?? '')
const pairEnd = computed(() => pair.value[1] ?? '')

function isActive(time: string): boolean {
  if (!props.range) return props.modelValue === time
  return time === draftStart.value || (Array.isArray(props.modelValue) && props.modelValue.includes(time))
}

function handleSelect(time: string) {
  if (!props.range) {
    emit('update:modelValue', time)
    emit('change', time)
    open.value = false
    return
  }
  if (!draftStart.value) {
    /* 第一次点击：记录开始，等待结束 */
    draftStart.value = time
    return
  }
  /* 第二次点击：完成区间（自动排序） */
  const pair = draftStart.value <= time ? [draftStart.value, time] : [time, draftStart.value]
  draftStart.value = ''
  emit('update:modelValue', pair)
  emit('change', pair)
  open.value = false
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const variantClasses: Record<FieldVariant, string> = {
  outline: 'bg-background ring-1 ring-inset ring-border',
  soft: 'bg-muted/50 hover:bg-muted has-focus-visible:bg-muted disabled:bg-muted/50',
  subtle: 'bg-muted ring-1 ring-inset ring-border',
  ghost: 'bg-transparent hover:bg-muted has-focus-visible:bg-muted disabled:bg-transparent',
  none: 'bg-transparent has-focus-visible:outline-none',
}

/** 聚焦描边（颜色 × 变体）：内部输入聚焦时叠加 outline 与 ring */
const focusStyles: Record<FieldColor, Record<FieldVariant, string>> = {
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
const highlightClasses: Record<FieldColor, string> = {
  primary: 'ring-1 ring-inset ring-primary',
  secondary: 'ring-1 ring-inset ring-secondary',
  neutral: 'ring-1 ring-inset ring-border',
  success: 'ring-1 ring-inset ring-success',
  info: 'ring-1 ring-inset ring-info',
  warning: 'ring-1 ring-inset ring-warning',
  error: 'ring-1 ring-inset ring-error',
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<FieldSize, string>> = {
  xs: 'md:text-xs',
  sm: 'md:text-xs',
  md: 'md:text-sm',
  lg: 'md:text-sm',
}

/** 容器高度与文本尺寸 */
const baseSizeClasses: Record<FieldSize, string> = {
  xs: 'h-6 text-sm',
  sm: 'h-7 text-sm',
  md: 'h-8 text-base',
  lg: 'h-9 text-base',
  xl: 'h-11 text-base',
}

/** 图标尺寸 */
const iconSizes: Record<FieldSize, string> = {
  xs: 'size-4',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-5',
  xl: 'size-6',
}

/** leading / trailing 容器自身的内边距 */
const leadingPaddings: Record<FieldSize, string> = {
  xs: 'pl-2', sm: 'pl-2.5', md: 'pl-2.5', lg: 'pl-3', xl: 'pl-3',
}
const trailingPaddings: Record<FieldSize, string> = {
  xs: 'pr-2', sm: 'pr-2.5', md: 'pr-2.5', lg: 'pr-3', xl: 'pr-3',
}

/** 输入框避让 leading / trailing 的水平内边距 */
const leadingBasePaddings: Record<FieldSize, string> = {
  xs: 'pl-7', sm: 'pl-8', md: 'pl-9', lg: 'pl-10', xl: 'pl-11',
}
const trailingBasePaddings: Record<FieldSize, string> = {
  xs: 'pr-7', sm: 'pr-8', md: 'pr-9', lg: 'pr-10', xl: 'pr-11',
}

function isIconName(icon: InputTimeIcon | undefined): icon is InputTimeIconName {
  return typeof icon === 'string'
}

const singleInputRef = useTemplateRef<HTMLInputElement>('singleInputRef')
const rangeInputRef = useTemplateRef<HTMLInputElement>('rangeInputRef')

function autoFocus() {
  if (!props.autofocus) return
  ;(singleInputRef.value ?? rangeInputRef.value)?.focus()
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
  <Popover v-model:open="open">
    <PopoverTrigger as-child :disabled="disabled">
      <Primitive
        :as="as ?? 'button'"
        type="button"
        data-slot="root"
        :class="cn('w-full cursor-pointer', props.ui?.root, props.class)"
      >
        <span
          data-slot="base"
          :class="cn(
            'relative flex w-full items-center rounded-md transition-colors',
            variantClasses[variant],
            focusStyles[color][variant],
            highlight && highlightClasses[color],
            fixed === false && fixedTextClasses[size],
            baseSizeClasses[size],
            props.ui?.base,
          )"
        >
          <span
            data-slot="leading"
            :class="cn('absolute inset-y-0 left-0 flex items-center', leadingPaddings[size], props.ui?.leading)"
          >
            <slot name="leading">
              <Clock
                data-slot="leadingIcon"
                :class="cn('shrink-0 text-muted-foreground', iconSizes[size], props.ui?.leadingIcon)"
              />
            </slot>
          </span>

          <input
            v-if="!range"
            ref="singleInputRef"
            v-bind="$attrs"
            type="text"
            readonly
            :value="modelValue as string"
            placeholder="选择时间"
            :class="cn(
              'h-full w-full min-w-0 border-0 bg-transparent px-2.5 outline-none placeholder:text-muted-foreground',
              leadingBasePaddings[size],
              $slots.trailing && trailingBasePaddings[size],
            )"
          />
          <template v-else>
            <input
              ref="rangeInputRef"
              v-bind="$attrs"
              type="text"
              readonly
              :value="pairStart"
              placeholder="选择时间"
              :class="cn(
                'h-full w-full min-w-0 flex-1 border-0 bg-transparent outline-none placeholder:text-muted-foreground',
                leadingBasePaddings[size],
              )"
            />
            <slot name="separator">
              <XIcon
                v-if="isIconName(separatorIcon)"
                :name="separatorIcon"
                data-slot="separatorIcon"
                :class="cn('shrink-0 size-4 text-muted-foreground', props.ui?.separatorIcon)"
              />
              <component
                :is="separatorIcon ?? Minus"
                v-else
                data-slot="separatorIcon"
                :class="cn('shrink-0 size-4 text-muted-foreground', props.ui?.separatorIcon)"
              />
            </slot>
            <input
              type="text"
              readonly
              :value="pairEnd"
              placeholder="选择时间"
              :class="cn(
                'h-full w-full min-w-0 flex-1 border-0 bg-transparent pr-2.5 outline-none placeholder:text-muted-foreground',
                $slots.trailing && trailingBasePaddings[size],
              )"
            />
          </template>

          <span
            v-if="$slots.trailing"
            data-slot="trailing"
            :class="cn('absolute inset-y-0 right-0 flex items-center', trailingPaddings[size], props.ui?.trailing)"
          >
            <slot name="trailing" />
          </span>
        </span>
      </Primitive>
    </PopoverTrigger>
    <PopoverContent align="start" :class="cn('flex min-w-32 flex-col p-0')">
      <div v-if="range" class="border-b border-border px-3 py-1.5 text-xs text-muted-foreground">
        {{ draftStart ? `${draftStart} → 选择结束时间` : '选择开始时间' }}
      </div>
      <div class="flex max-h-60 flex-col gap-0.5 overflow-auto p-1">
        <button
          v-for="time in timeOptions"
          :key="time"
          type="button"
          :class="cn(
            'flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none',
            'hover:bg-muted focus-visible:bg-muted',
            isActive(time) && 'bg-primary/10 text-primary hover:bg-primary/15',
          )"
          @click="handleSelect(time)"
        >
          {{ time }}
          <Check v-if="isActive(time)" class="size-4" />
        </button>
      </div>
    </PopoverContent>
  </Popover>
</template>
