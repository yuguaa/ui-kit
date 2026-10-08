<script setup lang="ts">
/**
 * XAvatar 头像：展示用户形象，支持圆形/方形、五档尺寸、图片、图标与文字。
 */
import type { HTMLAttributes } from 'vue'
import { computed, inject, useSlots } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { XAvatarGroupColorKey, type AvatarColor } from './XAvatarGroupContext'

type AvatarShape = 'circle' | 'square'
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  /** 头像形状 */
  shape?: AvatarShape
  /** 头像尺寸 */
  size?: AvatarSize
  /** 图片地址 */
  src?: string
  /** 图片替代文本，缺省回退到 text */
  alt?: string
  /** 无图片时显示的文字（如姓名首字） */
  text?: string
  /** 语义色：文字/图标头像的背景与文字色 */
  color?: AvatarColor
  class?: HTMLAttributes['class']
}>(), {
  shape: 'circle',
  size: 'md',
})

const emit = defineEmits<{
  /** 图片加载失败回调 */
  error: [event: Event]
}>()

const slots = useSlots()

/** 头像组透传的语义色 */
const groupColor = inject(XAvatarGroupColorKey, undefined)

/** 自身 color 优先，其次头像组 color，缺省 neutral */
const effectiveColor = computed(() => props.color ?? groupColor?.value ?? 'neutral')

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'size-5 text-xs',
  sm: 'size-6 text-xs',
  md: 'size-8 text-sm',
  lg: 'size-10 text-base',
  xl: 'size-12 text-lg',
}

/** 语义色样式：1 阶背景、7 阶文字（warning 用 8 阶保证可读性） */
const colorClasses: Record<AvatarColor, string> = {
  primary: 'bg-primary-1 text-primary-7',
  secondary: 'bg-muted text-secondary-foreground',
  neutral: 'bg-neutral-1 text-neutral-7',
  success: 'bg-success-1 text-success-7',
  info: 'bg-info-1 text-info-7',
  warning: 'bg-warning-1 text-warning-8',
  error: 'bg-error-1 text-error-7',
}

const shapeClass = computed(() => (props.shape === 'circle' ? 'rounded-full' : 'rounded-md'))
const fallbackClass = computed(() => cn(shapeClass.value, colorClasses[effectiveColor.value]))
</script>

<template>
  <Avatar :class="cn(shapeClass, sizeClasses[size], props.class)">
    <AvatarImage v-if="src" :src="src" :alt="alt ?? text ?? 'avatar'" @error="emit('error', $event)" />
    <AvatarFallback :class="fallbackClass">
      <slot v-if="slots.default" />
      <slot v-else-if="slots.icon" name="icon" />
      <template v-else>{{ text }}</template>
    </AvatarFallback>
  </Avatar>
</template>
