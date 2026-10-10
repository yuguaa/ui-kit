<script setup lang="ts">
/**
 * XInputRating 评分：以星标形式进行评分输入。
 * 按 Nuxt UI input-rating 结构对齐：root > item(空星层 emptyIcon + 高亮层 indicator > icon)。
 * 支持半星、五档尺寸、七种语义色、横竖方向与自定义图标（XIcon 名称或组件）。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Star } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

type RatingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type RatingColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type RatingOrientation = 'horizontal' | 'vertical'

/** XIcon 内置图标名 */
export type InputRatingIconName = 'star'
/** 图标：XIcon 名称或自定义组件 */
export type InputRatingIcon = InputRatingIconName | Component

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface InputRatingUi {
  root?: string
  item?: string
  indicator?: string
  icon?: string
  emptyIcon?: string
}

const props = withDefaults(defineProps<{
  /** 评分值 */
  modelValue?: number
  /** 最大分值 */
  max?: number
  /** 允许半星 */
  allowHalf?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 只读展示，禁止点击与键盘操作 */
  readonly?: boolean
  /** 星星尺寸 */
  size?: RatingSize
  /** 组件颜色（填充星与聚焦描边） */
  color?: RatingColor
  /** 排列方向 */
  orientation?: RatingOrientation
  /** 高亮星图标，缺省使用空星图标 */
  icon?: InputRatingIcon
  /** 空星图标，缺省使用 icon */
  emptyIcon?: InputRatingIcon
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 根元素 id */
  id?: string
  /** 主题插槽类名 */
  ui?: InputRatingUi
  class?: HTMLAttributes['class']
}>(), {
  modelValue: 0,
  max: 5,
  size: 'md',
  color: 'primary',
  orientation: 'horizontal',
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  /** 评分变化回调，载荷为 change 事件（target.value 为评分值） */
  change: [event: Event]
}>()

/** 五档星星尺寸 */
const sizeClasses: Record<RatingSize, string> = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
}

/** 填充星颜色（星体填充与描边） */
const indicatorColorClasses: Record<RatingColor, string> = {
  primary: 'fill-primary text-primary',
  secondary: 'fill-secondary text-secondary',
  neutral: 'fill-foreground text-foreground',
  success: 'fill-success text-success',
  info: 'fill-info text-info',
  warning: 'fill-warning text-warning',
  error: 'fill-error text-error',
}

/** 聚焦描边颜色 */
const itemColorClasses: Record<RatingColor, string> = {
  primary: 'outline-primary/25 focus-visible:outline-3',
  secondary: 'outline-secondary/25 focus-visible:outline-3',
  neutral: 'outline-foreground/25 focus-visible:outline-3',
  success: 'outline-success/25 focus-visible:outline-3',
  info: 'outline-info/25 focus-visible:outline-3',
  warning: 'outline-warning/25 focus-visible:outline-3',
  error: 'outline-error/25 focus-visible:outline-3',
}

/** 空星图标：emptyIcon 缺省回退到 icon */
const resolvedEmptyIcon = computed(() => props.emptyIcon ?? props.icon)

function isIconName(icon: InputRatingIcon | undefined): icon is InputRatingIconName {
  return typeof icon === 'string'
}

function pick(index: number, event: MouseEvent) {
  if (props.disabled || props.readonly) return
  const target = event.currentTarget as HTMLElement
  const half = props.allowHalf && event.clientX > target.getBoundingClientRect().left + target.offsetWidth / 2
  const next = half && props.allowHalf ? index + 0.5 : index + 1
  emit('update:modelValue', next)
  const changeEvent = new Event('change')
  Object.defineProperty(changeEvent, 'target', { value: { value: next } })
  emit('change', changeEvent)
}
</script>

<template>
  <Primitive
    :as="as ?? 'span'"
    :id="id"
    v-bind="$attrs"
    data-slot="root"
    role="radiogroup"
    aria-label="rating"
    :aria-readonly="readonly || undefined"
    :class="cn(
      orientation === 'vertical'
        ? 'inline-flex flex-col items-center gap-0.5'
        : 'inline-flex items-center gap-0.5',
      disabled && 'pointer-events-none opacity-60',
      props.ui?.root,
      props.class,
    )"
  >
    <button
      v-for="index in max"
      :key="index"
      type="button"
      :aria-label="`${index} 星`"
      :tabindex="readonly ? -1 : 0"
      :class="cn(
        'relative inline-block cursor-pointer rounded-xs outline-none select-none transition',
        readonly ? 'cursor-default' : cn('hover:scale-110', itemColorClasses[color]),
        props.ui?.item,
      )"
      @click="pick(index - 1, $event)"
    >
      <slot
        name="item"
        :index="index - 1"
        :filled="modelValue >= index"
        :half="allowHalf && modelValue >= index - 0.5 && modelValue < index"
      >
        <XIcon
          v-if="isIconName(resolvedEmptyIcon)"
          :name="resolvedEmptyIcon"
          data-slot="emptyIcon"
          aria-hidden="true"
          :class="cn(sizeClasses[size], 'block h-full w-full text-muted-foreground', props.ui?.emptyIcon)"
        />
        <component
          :is="resolvedEmptyIcon ?? Star"
          v-else
          data-slot="emptyIcon"
          aria-hidden="true"
          :class="cn(sizeClasses[size], 'block h-full w-full text-muted-foreground', props.ui?.emptyIcon)"
        />
        <span
          v-if="modelValue >= index || (allowHalf && modelValue >= index - 0.5 && modelValue < index)"
          data-slot="indicator"
          aria-hidden="true"
          :class="cn(
            'absolute inset-0 overflow-hidden',
            allowHalf && modelValue >= index - 0.5 && modelValue < index && '[clip-path:inset(0_50%_0_0)]',
            indicatorColorClasses[color],
            props.ui?.indicator,
          )"
        >
          <XIcon
            v-if="isIconName(icon)"
            :name="icon"
            data-slot="icon"
            :class="cn(sizeClasses[size], 'block', props.ui?.icon)"
          />
          <component
            :is="icon ?? Star"
            v-else
            data-slot="icon"
            :class="cn(sizeClasses[size], 'block', props.ui?.icon)"
          />
        </span>
      </slot>
    </button>
  </Primitive>
</template>
