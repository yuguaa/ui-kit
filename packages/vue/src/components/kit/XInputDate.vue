<script setup lang="ts">
/**
 * XInputDate 日期选择：输入框 + popover 日历。
 * 按 Nuxt UI input-date 对齐：root(触发按钮) > base(输入容器) > leading / input / separator / trailing。
 * 支持最小/最大日期、底部自定义内容与日期区间（range）；range 时两个输入框由 separatorIcon 分隔。
 * 容器注入 Nuxt UI 语义：variant × color、highlight、fixed。
 */
import type { Component, HTMLAttributes } from 'vue'
import type { DateValue } from 'reka-ui'
import { computed, onMounted, onScopeDispose, ref, shallowRef, useTemplateRef, watch } from 'vue'
import { parseDate } from '@internationalized/date'
import { Calendar as CalendarIcon, Minus } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

/* 属性透传到内部输入框，避免落到 Popover 包装层 */
defineOptions({ inheritAttrs: false })

type FieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FieldColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type FieldVariant = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

/** XIcon 内置图标名 */
export type InputDateIconName = 'chevron-right'
/** 图标：XIcon 名称或自定义组件 */
export type InputDateIcon = InputDateIconName | Component

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface InputDateUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  separatorIcon?: string
  trailing?: string
}

const props = withDefaults(defineProps<{
  /** 绑定日期（yyyy-MM-dd，range 时为 [开始, 结束]） */
  modelValue?: string | string[]
  /** 日期区间选择 */
  range?: boolean
  /** 最小日期 */
  min?: string
  /** 最大日期 */
  max?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文字 */
  placeholder?: string
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
  separatorIcon?: InputDateIcon
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 挂载后自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延迟（毫秒） */
  autofocusDelay?: number
  /** 主题插槽类名 */
  ui?: InputDateUi
  class?: HTMLAttributes['class']
}>(), {
  modelValue: '',
  placeholder: '选择日期',
  size: 'md',
  color: 'primary',
  variant: 'outline',
  fixed: true,
  autofocusDelay: 0,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  /** 日期变化回调 */
  change: [value: string | string[]]
}>()

const open = ref(false)
/** range 模式下传给日历的选中数组（含区间内所有日期，日期对象无需深层响应） */
const rangeDraft = shallowRef<DateValue[]>([])

const calendarValue = computed(() => {
  if (typeof props.modelValue !== 'string' || !props.modelValue) return undefined
  try {
    return parseDate(props.modelValue)
  } catch {
    return undefined
  }
})

const pair = computed(() => (Array.isArray(props.modelValue) ? props.modelValue : []))
const pairStart = computed(() => pair.value[0] ?? '')
const pairEnd = computed(() => pair.value[1] ?? '')

function formatDateValue(date: DateValue): string {
  return `${String(date.year).padStart(4, '0')}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
}

/** 生成 [from, to] 闭区间内的全部日期，用于日历中间日期高亮 */
function buildDayRange(from: DateValue, to: DateValue): DateValue[] {
  const days: DateValue[] = []
  let cursor = from
  while (cursor.compare(to) <= 0) {
    days.push(cursor)
    cursor = cursor.add({ days: 1 })
  }
  return days
}

function parseRange(pair: string[]): DateValue[] {
  if (pair.length < 2 || !pair[0] || !pair[1]) return []
  try {
    const start = parseDate(pair[0]!)
    const end = parseDate(pair[1]!)
    return start.compare(end) <= 0 ? buildDayRange(start, end) : buildDayRange(end, start)
  } catch {
    return []
  }
}

/* 外部绑定值回流到日历选中数组 */
watch(() => props.modelValue, (value) => {
  if (!props.range) return
  rangeDraft.value = Array.isArray(value) ? parseRange(value) : []
}, { immediate: true })

function onSelect(date: DateValue | undefined) {
  if (!date) return
  const next = formatDateValue(date)
  emit('update:modelValue', next)
  emit('change', next)
  open.value = false
}

function onRangeSelect(next: DateValue | DateValue[] | undefined) {
  const values = Array.isArray(next) ? next : next ? [next] : []
  /* 本次点击的日期 = 日历回传数组中相对 rangeDraft 新增的一项 */
  const clicked = values.find((v) => !rangeDraft.value.some((d) => d.compare(v) === 0))
  if (!clicked) return

  if (rangeDraft.value.length === 1) {
    /* 已选开始，本次点击确定结束并补全区间 */
    const start = rangeDraft.value[0]!.compare(clicked) <= 0 ? rangeDraft.value[0]! : clicked
    const end = rangeDraft.value[0]!.compare(clicked) <= 0 ? clicked : rangeDraft.value[0]!
    rangeDraft.value = buildDayRange(start, end)
    const pair = [formatDateValue(start), formatDateValue(end)]
    emit('update:modelValue', pair)
    emit('change', pair)
    open.value = false
    return
  }
  /* 首次点击或已有完整区间时重新开始 */
  rangeDraft.value = [clicked]
}

function onCalendarSelect(next: DateValue | DateValue[] | undefined) {
  if (props.range) {
    onRangeSelect(next)
    return
  }
  onSelect(next as DateValue | undefined)
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

function isIconName(icon: InputDateIcon | undefined): icon is InputDateIconName {
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
              <CalendarIcon
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
            :placeholder="placeholder"
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
              :placeholder="placeholder"
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
              :placeholder="placeholder"
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
    <PopoverContent align="start" :class="cn('flex w-auto flex-col p-0')">
      <Calendar
        :model-value="range ? rangeDraft : calendarValue"
        :multiple="range"
        :prevent-deselect="range"
        :min-value="min ? parseDate(min) : undefined"
        :max-value="max ? parseDate(max) : undefined"
        class="p-2"
        @update:model-value="onCalendarSelect($event as DateValue | DateValue[] | undefined)"
      />
      <div v-if="$slots.footer" class="border-t border-border p-2">
        <slot name="footer" />
      </div>
    </PopoverContent>
  </Popover>
</template>
