<script setup lang="ts">
/**
 * XBadge 徽标：label / count 展示数量或状态，支持圆点、包裹角标与图标头像。
 * 有内容且带 count / dot 时作为右上角角标包裹内容，其余场景作为独立徽标展示。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import { Primitive } from 'reka-ui'
import { Badge } from '@/components/ui/badge'
import XAvatar from '@/components/kit/XAvatar.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

type BadgeColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type BadgeVariant = 'solid' | 'outline' | 'soft' | 'subtle'
type IconName = InstanceType<typeof XIcon>['$props']['name']

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface BadgeUi {
  base?: string
  label?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: BadgeSize
  trailingIcon?: string
}

/** avatar 属性：透传给 XAvatar 的头像配置 */
export interface BadgeAvatarProps {
  src?: string
  alt?: string
  text?: string
  size?: BadgeSize
  shape?: 'circle' | 'square'
  color?: BadgeColor
}

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 徽标文本 */
  label?: string | number
  /** 显示数字（kit 既有属性） */
  count?: number
  /** 圆点模式，不显示数字（kit 既有属性） */
  dot?: boolean
  /** 超出后显示 99+（kit 既有属性） */
  overflowCount?: number
  /** 预设样式 */
  variant?: BadgeVariant
  /** 徽标颜色 */
  color?: BadgeColor
  /** 徽标尺寸 */
  size?: BadgeSize
  /** 等边距模式，宽度等于高度，适合只放图标或单字符 */
  square?: boolean
  /** 图标名，显示在左侧 */
  icon?: IconName
  /** 左侧图标名 */
  leadingIcon?: IconName
  /** 右侧图标名 */
  trailingIcon?: IconName
  /** 左侧头像配置 */
  avatar?: BadgeAvatarProps
  /** 主题插槽类名 */
  ui?: BadgeUi
  class?: HTMLAttributes['class']
}>(), {
  overflowCount: 99,
  variant: 'solid',
  color: 'primary',
  size: 'md',
  square: false,
  dot: false,
})

const slots = useSlots()

/** 变体 × 语义色样式（字面量，保证 Tailwind 可扫描） */
const colorClasses: Record<BadgeVariant, Record<BadgeColor, string>> = {
  solid: {
    primary: 'bg-primary text-background',
    secondary: 'bg-secondary text-secondary-foreground',
    neutral: 'bg-foreground text-background',
    success: 'bg-success text-background',
    info: 'bg-info text-background',
    warning: 'bg-warning text-background',
    error: 'bg-error text-background',
  },
  outline: {
    primary: 'text-primary ring-1 ring-inset ring-primary/50',
    secondary: 'text-foreground ring-1 ring-inset ring-border',
    neutral: 'text-foreground ring-1 ring-inset ring-border',
    success: 'text-success ring-1 ring-inset ring-success/50',
    info: 'text-info ring-1 ring-inset ring-info/50',
    warning: 'text-warning ring-1 ring-inset ring-warning/50',
    error: 'text-error ring-1 ring-inset ring-error/50',
  },
  soft: {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-muted text-secondary-foreground',
    neutral: 'bg-muted text-foreground',
    success: 'bg-success/10 text-success',
    info: 'bg-info/10 text-info',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error',
  },
  subtle: {
    primary: 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/25',
    secondary: 'bg-muted text-secondary-foreground ring-1 ring-inset ring-border',
    neutral: 'bg-muted text-foreground ring-1 ring-inset ring-border',
    success: 'bg-success/10 text-success ring-1 ring-inset ring-success/25',
    info: 'bg-info/10 text-info ring-1 ring-inset ring-info/25',
    warning: 'bg-warning/10 text-warning ring-1 ring-inset ring-warning/25',
    error: 'bg-error/10 text-error ring-1 ring-inset ring-error/25',
  },
}

const sizeClasses: Record<BadgeSize, string> = {
  xs: 'h-4 min-w-4 gap-0.5 px-1 text-[10px]',
  sm: 'h-5 min-w-5 gap-1 px-1.5 text-xs',
  md: 'h-6 min-w-6 gap-1 px-2 text-sm',
  lg: 'h-7 min-w-7 gap-1.5 px-2.5 text-sm',
  xl: 'h-8 min-w-8 gap-1.5 px-3 text-base',
}

/** square 模式：去掉水平内边距，宽度与高度一致 */
const squareClasses: Record<BadgeSize, string> = {
  xs: 'w-4 px-0',
  sm: 'w-5 px-0',
  md: 'w-6 px-0',
  lg: 'w-7 px-0',
  xl: 'w-8 px-0',
}

/** 图标尺寸随徽标尺寸 */
const iconSizeClasses: Record<BadgeSize, 'xs' | 'sm' | 'md'> = {
  xs: 'xs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'md',
}

const displayCount = computed(() => {
  if (props.count == null) return null
  return props.count > props.overflowCount ? `${props.overflowCount}+` : props.count
})

/** 有内容且带 count 时，徽标作为右上角角标包裹内容 */
const wrapMode = computed(() => props.count != null && !!slots.default)

/** 空徽标自动等边距（Nuxt UI 行为） */
const isSquare = computed(() => props.square || (!slots.default && props.label == null && props.count == null && !props.dot))

const leadingIconName = computed(() => props.leadingIcon ?? props.icon)
</script>

<template>
  <Primitive v-if="dot" :as="as ?? 'span'" data-slot="badge" :class="cn('relative inline-flex', props.class)">
    <span :class="cn('absolute top-0 right-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-error', ui?.base)" />
    <slot />
  </Primitive>
  <span v-else-if="wrapMode" class="relative inline-flex">
    <slot />
    <span class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
      <Badge
        :as="as ?? 'span'"
        :class="cn(colorClasses[variant][color], sizeClasses[size], isSquare && squareClasses[size], ui?.base, props.class)"
      >
        <slot name="leading">
          <XIcon
            v-if="leadingIconName"
            :name="leadingIconName"
            :size="iconSizeClasses[size]"
            :class="cn('shrink-0', ui?.leadingIcon)"
          />
          <XAvatar
            v-else-if="avatar"
            v-bind="avatar"
            :size="ui?.leadingAvatarSize ?? avatar.size"
            :class="cn('shrink-0', ui?.leadingAvatar)"
          />
        </slot>
        <span v-if="label != null" :class="cn('truncate', ui?.label)">{{ label }}</span>
        <template v-else>{{ displayCount }}</template>
        <slot name="trailing">
          <XIcon
            v-if="trailingIcon"
            :name="trailingIcon"
            :size="iconSizeClasses[size]"
            :class="cn('shrink-0', ui?.trailingIcon)"
          />
        </slot>
      </Badge>
    </span>
  </span>
  <Badge
    v-else
    :as="as ?? 'span'"
    :class="cn(colorClasses[variant][color], sizeClasses[size], isSquare && squareClasses[size], ui?.base, props.class)"
  >
    <slot name="leading">
      <XIcon
        v-if="leadingIconName"
        :name="leadingIconName"
        :size="iconSizeClasses[size]"
        :class="cn('shrink-0', ui?.leadingIcon)"
      />
      <XAvatar
        v-else-if="avatar"
        v-bind="avatar"
        :size="ui?.leadingAvatarSize ?? avatar.size"
        :class="cn('shrink-0', ui?.leadingAvatar)"
      />
    </slot>
    <slot>
      <span v-if="label != null" :class="cn('truncate', ui?.label)">{{ label }}</span>
      <template v-else>{{ displayCount }}</template>
    </slot>
    <slot name="trailing">
      <XIcon
        v-if="trailingIcon"
        :name="trailingIcon"
        :size="iconSizeClasses[size]"
        :class="cn('shrink-0', ui?.trailingIcon)"
      />
    </slot>
  </Badge>
</template>
