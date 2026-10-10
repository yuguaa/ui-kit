<script setup lang="ts">
/**
 * XSeparator 分割线：在内容之间插入水平或垂直分隔。
 * 支持标签、图标、头像、语义色、五档粗细与实线 / 虚线 / 点线。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { Separator } from 'reka-ui'
import { cn } from '@/lib/utils'
import XAvatar, { type AvatarProps } from './XAvatar.vue'
import XIcon from './XIcon.vue'
import type { AvatarSize } from './XAvatarGroupContext'

type SeparatorOrientation = 'horizontal' | 'vertical'
type SeparatorPosition = 'start' | 'center' | 'end'
type SeparatorType = 'solid' | 'dashed' | 'dotted'
type SeparatorSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type SeparatorColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type IconName = InstanceType<typeof XIcon>['$props']['name']

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface SeparatorUi {
  root?: string
  border?: string
  container?: string
  icon?: string
  avatar?: string
  /** 头像尺寸（值语义，与 Nuxt 主题 avatarSize 键一致） */
  avatarSize?: AvatarSize
  label?: string
}

const props = withDefaults(defineProps<{
  /** 方向 */
  orientation?: SeparatorOrientation
  /** 纯装饰分割线，不渲染无障碍角色 */
  decorative?: boolean
  /** 标签文字 */
  label?: string
  /** 标签图标 */
  icon?: IconName
  /** 标签头像 */
  avatar?: AvatarProps
  /** 语义色 */
  color?: SeparatorColor
  /** 边框粗细 */
  size?: SeparatorSize
  /** 线条样式 */
  type?: SeparatorType
  /** 标签位置 */
  position?: SeparatorPosition
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: SeparatorUi
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
  decorative: false,
  color: 'neutral',
  size: 'xs',
  type: 'solid',
  position: 'center',
})

defineOptions({ name: 'XSeparator', inheritAttrs: false })

const slots = useSlots()

const horizontal = computed(() => props.orientation === 'horizontal')

/** 语义色边框（Nuxt separator color 变体） */
const borderColorClasses: Record<SeparatorColor, string> = {
  primary: 'border-primary-6',
  secondary: 'border-secondary',
  neutral: 'border-border',
  success: 'border-success-6',
  info: 'border-info-6',
  warning: 'border-warning-6',
  error: 'border-error-6',
}

/** 边框粗细（Nuxt separator size 变体） */
const borderHorizontalSizeClasses: Record<SeparatorSize, string> = {
  xs: '',
  sm: 'border-t-[2px]',
  md: 'border-t-[3px]',
  lg: 'border-t-[4px]',
  xl: 'border-t-[5px]',
}
const borderVerticalSizeClasses: Record<SeparatorSize, string> = {
  xs: '',
  sm: 'border-s-[2px]',
  md: 'border-s-[3px]',
  lg: 'border-s-[4px]',
  xl: 'border-s-[5px]',
}

/** 线条样式 */
const typeClasses: Record<SeparatorType, string> = {
  solid: '',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
}

/** 容器与线条的间距（Nuxt separator position 变体） */
const containerPositionClasses: Record<SeparatorOrientation, Record<SeparatorPosition, string>> = {
  horizontal: { start: 'me-3', center: 'mx-3', end: 'ms-3' },
  vertical: { start: 'mb-2', center: 'my-2', end: 'mt-2' },
}

const hasContent = computed(() => !!(props.label || props.icon || props.avatar || slots.default))

const rootClass = computed(() =>
  cn(
    'flex items-center text-center',
    horizontal.value ? 'w-full flex-row' : 'h-full flex-col',
    props.ui?.root,
    props.class,
  ),
)

const borderClass = computed(() =>
  cn(
    horizontal.value ? 'w-full border-t' : 'h-full border-s',
    typeClasses[props.type],
    borderColorClasses[props.color],
    horizontal.value ? borderHorizontalSizeClasses[props.size] : borderVerticalSizeClasses[props.size],
    props.ui?.border,
  ),
)

const containerClass = computed(() =>
  cn(
    'flex items-center font-medium text-sm text-muted-foreground',
    horizontal.value && 'whitespace-nowrap',
    containerPositionClasses[props.orientation][props.position],
    props.ui?.container,
  ),
)

const [DefineContainer, ReuseContainer] = createReusableTemplate()
</script>

<template>
  <DefineContainer>
    <div data-slot="container" :class="containerClass">
      <slot>
        <span v-if="label" data-slot="label" :class="cn('text-sm', props.ui?.label)">{{ label }}</span>
        <XIcon v-else-if="icon" :name="icon" data-slot="icon" :class="cn('shrink-0 size-5', props.ui?.icon)" />
        <XAvatar
          v-else-if="avatar"
          v-bind="avatar"
          :size="avatar.size ?? props.ui?.avatarSize ?? 'xs'"
          data-slot="avatar"
          :class="cn('shrink-0', props.ui?.avatar, avatar.class)"
        />
      </slot>
    </div>
  </DefineContainer>

  <Separator
    data-slot="separator"
    :as="as ?? 'div'"
    :decorative="decorative"
    :orientation="orientation"
    v-bind="$attrs"
    :class="rootClass"
  >
    <ReuseContainer v-if="hasContent && position === 'start'" />

    <div data-slot="border" :class="borderClass" />

    <template v-if="hasContent && position === 'center'">
      <ReuseContainer />
      <div data-slot="border" :class="borderClass" />
    </template>

    <ReuseContainer v-if="hasContent && position === 'end'" />
  </Separator>
</template>
