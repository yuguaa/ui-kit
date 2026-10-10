<script setup lang="ts">
/**
 * XAvatar 头像：展示用户形象。
 * 支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标，
 * 图片加载失败时自动展示 fallback 内容。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, inject, ref, useSlots, useAttrs, watch } from 'vue'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import XChip from './XChip.vue'
import XIcon from './XIcon.vue'
import {
  XAvatarGroupColorKey,
  XAvatarGroupSizeKey,
  type AvatarColor,
  type AvatarSize,
} from './XAvatarGroupContext'

type AvatarShape = 'circle' | 'square'
type IconName = InstanceType<typeof XIcon>['$props']['name']
type XChipProps = InstanceType<typeof XChip>['$props']
type ChipColor = NonNullable<XChipProps['color']>
type ChipSize = NonNullable<XChipProps['size']>

/** chip 徽标配置：布尔表示默认圆点，对象可指定文字、颜色、尺寸与位置 */
export interface AvatarChip {
  /** 徽标文字 */
  text?: string | number
  /** 徽标颜色 */
  color?: ChipColor
  /** 徽标尺寸 */
  size?: ChipSize
  /** 徽标位置 */
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
  /** 徽标类名 */
  class?: HTMLAttributes['class']
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface AvatarUi {
  root?: string
  image?: string
  fallback?: string
  icon?: string
}

/** XAvatar 属性：供 XSeparator 等组件复用 */
export interface AvatarProps {
  /** 头像形状 */
  shape?: AvatarShape
  /** 头像尺寸 */
  size?: AvatarSize
  /** 图片地址 */
  src?: string
  /** 图片替代文本，同时用于生成首字母回退 */
  alt?: string
  /** 无图片时显示的文字（如姓名首字） */
  text?: string
  /** 图标名 */
  icon?: IconName
  /** 语义色：文字/图标头像的背景与文字色 */
  color?: AvatarColor
  /** 头像上的徽标 */
  chip?: boolean | AvatarChip
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: AvatarUi
  class?: HTMLAttributes['class']
  style?: HTMLAttributes['style']
}

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: 'circle',
})

defineOptions({ name: 'XAvatar', inheritAttrs: false })

const emit = defineEmits<{
  /** 图片加载失败回调 */
  error: [event: Event]
}>()

const attrs = useAttrs()
const slots = useSlots()

/** 头像组透传的语义色与尺寸，自身属性优先 */
const groupColor = inject(XAvatarGroupColorKey, undefined)
const groupSize = inject(XAvatarGroupSizeKey, undefined)

const effectiveSize = computed(() => props.size ?? groupSize?.value ?? 'md')
const effectiveColor = computed(() => props.color ?? groupColor?.value ?? 'neutral')

const shapeClass = computed(() => (props.shape === 'circle' ? 'rounded-full' : 'rounded-md'))

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'size-5 text-xs',
  sm: 'size-6 text-xs',
  md: 'size-8 text-sm',
  lg: 'size-10 text-base',
  xl: 'size-12 text-lg',
}

/** 语义色样式：1 阶背景、7 阶文字（warning 用 8 阶保证可读性） */
const colorClasses: Record<AvatarColor, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-muted text-secondary-foreground',
  neutral: 'bg-muted text-foreground',
  success: 'bg-success/10 text-success',
  info: 'bg-info/10 text-info',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
}

/** 图片加载失败时切换为 fallback，src 变化后重置 */
const error = ref(false)
watch(() => props.src, () => {
  if (error.value) {
    error.value = false
  }
})

function onError(event: Event) {
  error.value = true
  emit('error', event)
}

/** fallback 文字：text 优先，其次由 alt 生成首字母（最多两个） */
const fallbackText = computed(() =>
  props.text || (props.alt || '').split(' ').map(word => word.charAt(0)).join('').substring(0, 2),
)

/** chip 徽标解析：布尔 → 默认圆点；对象 → 配置 */
const chipConfig = computed(() => (props.chip === true ? {} : props.chip || null))
const hasChipText = computed(() => chipConfig.value?.text != null)

/** 圆点模式（无文字）的实心语义色 */
const chipDotClasses: Record<ChipColor, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  neutral: 'bg-foreground',
  success: 'bg-success',
  info: 'bg-info',
  warning: 'bg-warning',
  error: 'bg-error',
}

const chipClass = computed(() => {
  const cfg = chipConfig.value
  if (cfg == null) return undefined
  return cn(
    'z-1 ring-2 ring-background',
    !hasChipText.value && cn('size-2 rounded-full border-0 p-0', chipDotClasses[cfg.color ?? 'primary']),
    cfg.class,
  )
})
</script>

<template>
  <AvatarRoot
    :as="as ?? 'span'"
    data-slot="avatar"
    :style="props.style"
    :class="cn(
      'relative inline-flex items-center justify-center select-none',
      shapeClass,
      sizeClasses[effectiveSize],
      props.ui?.root,
      props.class,
    )"
    v-bind="attrs"
  >
    <AvatarImage
      v-if="src && !error"
      data-slot="image"
      :src="src"
      :alt="alt ?? text ?? 'avatar'"
      :class="cn('h-full w-full rounded-[inherit] object-cover', props.ui?.image)"
      @error="onError"
    />
    <AvatarFallback
      v-else
      data-slot="fallback"
      :class="cn(shapeClass, colorClasses[effectiveColor], props.ui?.fallback)"
    >
      <slot v-if="slots.default" />
      <span v-else-if="slots.icon" data-slot="icon" :class="cn('shrink-0', props.ui?.icon)">
        <slot name="icon" />
      </span>
      <span v-else-if="icon" data-slot="icon" :class="cn('shrink-0', props.ui?.icon)">
        <XIcon :name="icon" />
      </span>
      <template v-else>{{ fallbackText }}</template>
    </AvatarFallback>
    <XChip
      v-if="chipConfig"
      :text="chipConfig.text"
      :color="chipConfig.color ?? 'primary'"
      :size="chipConfig.size ?? 'xs'"
      :position="chipConfig.position ?? 'top-right'"
      inset
      :ui="{ base: chipClass }"
    />
  </AvatarRoot>
</template>
