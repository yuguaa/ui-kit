<script setup lang="ts">
/**
 * XToast 单条通知结构组件：供 XToast.ts 的 useToast().show 内部渲染，
 * 属性与 Nuxt UI Toast 对齐：icon / avatar / actions / close / closeIcon /
 * orientation / progress，leading / title / description / actions / close 插槽。
 */
import type { Component, HTMLAttributes, VNode } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref, useSlots, watch } from 'vue'
import { cn } from '@/lib/utils'
import XAvatar, { type AvatarProps } from './XAvatar.vue'
import { type AvatarSize } from './XAvatarGroupContext'
import XButton from './XButton.vue'
import XIcon from './XIcon.vue'
import XProgress, { type ProgressUi } from './XProgress.vue'

type ToastColor = 'primary' | 'success' | 'warning' | 'error'
type ToastOrientation = 'vertical' | 'horizontal'
type IconName = InstanceType<typeof XIcon>['$props']['name']
type XButtonProps = InstanceType<typeof XButton>['$props']
type ProgressColor = InstanceType<typeof XProgress>['$props']['color']

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ToastUi {
  root?: string
  wrapper?: string
  title?: string
  description?: string
  icon?: string
  avatar?: string
  avatarSize?: AvatarSize
  actions?: string
  progress?: string
  close?: string
}

/** 按钮配置：close 对象与 actions 数组共用，整体透传给 XButton */
export type ToastButtonProps = Partial<XButtonProps>

/** 操作按钮（kit 既有属性）：点击后关闭通知 */
export interface ToastActionProps {
  label?: string
  onClick?: (event: MouseEvent) => void
}

/** progress 配置：透传 XProgress 的 color 与 ui */
export interface ToastProgressConfig {
  color?: ProgressColor
  ui?: ProgressUi
}

/** XToast 属性 */
export interface ToastProps {
  /** 通知标题，支持传入组件自定义渲染（等价 title 插槽） */
  title?: string | Component | VNode
  /** 说明文字，支持传入组件自定义渲染（等价 description 插槽） */
  description?: string | Component | VNode
  /** 图标名 */
  icon?: IconName
  /** 头像配置 */
  avatar?: AvatarProps
  /** 语义色 */
  color?: ToastColor
  /** 内容与操作区的排列方向 */
  orientation?: ToastOrientation
  /** 显示关闭按钮，支持布尔、按钮配置或组件（等价 close 插槽） */
  close?: boolean | ToastButtonProps | Component
  /** 关闭按钮图标 */
  closeIcon?: IconName
  /** 操作按钮列表或自定义组件（等价 actions 插槽） */
  actions?: ToastButtonProps[] | Component
  /** 操作按钮（kit 既有属性），点击后关闭通知 */
  action?: ToastActionProps
  /** 取消按钮（kit 既有属性），点击后关闭通知 */
  cancel?: ToastActionProps
  /** 自定义图标/头像区域（等价 leading 插槽） */
  leading?: Component | VNode
  /** 显示剩余时长进度条 */
  progress?: boolean | ToastProgressConfig
  /** 展示时长（ms），同时驱动进度条动画 */
  duration?: number
  /** 主题插槽类名 */
  ui?: ToastUi
  class?: HTMLAttributes['class']
  /** 关闭回调（内部：由通知 API 注入） */
  onCloseToast?: () => void
  /** 暂停进度计时（内部：由通知 API 注入，悬停/隐藏页面时为 true） */
  isPaused?: boolean
}

const props = withDefaults(defineProps<ToastProps>(), {
  color: 'primary',
  orientation: 'vertical',
  close: true,
  closeIcon: 'x',
  progress: true,
  duration: 3000,
  isPaused: false,
})

defineOptions({ name: 'XToast' })

const slots = useSlots()

/** 语义色样式：root 描边与 icon 文字色 */
const colorClasses: Record<ToastColor, { root: string; icon: string }> = {
  primary: { root: 'ring-primary-3/25', icon: 'text-primary-6' },
  success: { root: 'ring-success-3/25', icon: 'text-success-6' },
  warning: { root: 'ring-warning-3/25', icon: 'text-warning-7' },
  error: { root: 'ring-error-3/25', icon: 'text-error-6' },
}

/** close / actions 支持组件形式（函数组件或带 setup/render 的对象组件） */
function isComponentLike(value: unknown): value is Component {
  if (typeof value === 'function') return true
  return typeof value === 'object' && value !== null && ('setup' in value || 'render' in value)
}

const isCloseComponent = computed(() => isComponentLike(props.close))
const closeConfig = computed<ToastButtonProps>(() =>
  typeof props.close === 'object' && props.close !== null && !isCloseComponent.value ? (props.close as ToastButtonProps) : {},
)
const closeSlotVisible = computed(() => props.close !== false || !!slots.close)

const hasActions = computed(() => {
  if (slots.actions) return true
  if (Array.isArray(props.actions)) return props.actions.length > 0
  if (props.actions != null) return true
  return !!(props.action || props.cancel)
})

const progressEnabled = computed(() => props.progress !== false)
const progressConfig = computed<ToastProgressConfig>(() =>
  typeof props.progress === 'object' && props.progress !== null ? props.progress : {},
)

function handleClose() {
  props.onCloseToast?.()
}

/** 操作按钮点击：先执行用户回调，再关闭通知 */
function handleActionClick(fn?: (event: MouseEvent) => void) {
  return (event: MouseEvent) => {
    fn?.(event)
    handleClose()
  }
}

/**
 * 剩余时长进度：rAF 每帧更新，悬停/页面隐藏时暂停累计，
 * 与容器侧的自动关闭计时保持同步。
 */
const startTime = Date.now()
const remaining = ref(props.duration)
const hoverPaused = ref(false)
const paused = computed(() => props.isPaused || hoverPaused.value)
let rafId = 0
let pauseStartedAt = 0
let pausedTotal = 0

function tick() {
  if (!paused.value && props.duration > 0) {
    const now = Date.now()
    const activePause = pauseStartedAt > 0 ? now - pauseStartedAt : 0
    remaining.value = Math.max(0, props.duration - (now - startTime - pausedTotal - activePause))
  }
  if (remaining.value > 0 && props.duration > 0) {
    rafId = requestAnimationFrame(tick)
  }
}

watch(paused, (isPaused) => {
  if (isPaused) {
    pauseStartedAt = Date.now()
  } else if (pauseStartedAt > 0) {
    pausedTotal += Date.now() - pauseStartedAt
    pauseStartedAt = 0
  }
})

onMounted(() => {
  if (props.duration > 0) rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
})

const remainingPercent = computed(() =>
  props.duration > 0 ? (remaining.value / props.duration) * 100 : 0,
)
</script>

<template>
  <div
    data-slot="root"
    :data-orientation="orientation"
    :class="cn(
      'relative flex gap-2.5 overflow-hidden rounded-lg bg-popover p-4 shadow-lg ring-1 ring-border',
      colorClasses[color].root,
      orientation === 'horizontal' ? 'items-center' : 'items-start',
      ui?.root,
      props.class,
    )"
    @mouseenter="hoverPaused = true"
    @mouseleave="hoverPaused = false"
  >
    <slot name="leading" :ui="ui">
      <component :is="leading" v-if="leading" />
      <XAvatar
        v-else-if="avatar"
        v-bind="avatar"
        :size="ui?.avatarSize ?? avatar.size ?? 'md'"
        data-slot="avatar"
        :class="cn('shrink-0', ui?.avatar)"
      />
      <XIcon
        v-else-if="icon"
        :name="icon"
        data-slot="icon"
        :class="cn('shrink-0 size-5', colorClasses[color].icon, ui?.icon)"
      />
    </slot>

    <div data-slot="wrapper" :class="cn('flex min-w-0 flex-1 flex-col', ui?.wrapper)">
      <div
        v-if="title != null || $slots.title"
        data-slot="title"
        :class="cn('text-sm font-medium', ui?.title)"
      >
        <slot name="title">
          <component :is="title" v-if="typeof title !== 'string'" />
          <template v-else>{{ title }}</template>
        </slot>
      </div>
      <div
        v-if="description != null || $slots.description"
        data-slot="description"
        :class="cn('text-sm text-muted-foreground', (title != null || $slots.title) && 'mt-1', ui?.description)"
      >
        <slot name="description">
          <component :is="description" v-if="typeof description !== 'string'" />
          <template v-else>{{ description }}</template>
        </slot>
      </div>

      <div
        v-if="orientation === 'vertical' && hasActions"
        data-slot="actions"
        :class="cn('mt-2.5 flex shrink-0 flex-wrap items-start gap-1.5', ui?.actions)"
      >
        <slot name="actions">
          <component :is="actions" v-if="isComponentLike(actions)" :on-close-toast="handleClose" />
          <template v-else>
            <XButton
              v-for="(item, index) in actions"
              :key="index"
              size="xs"
              :color="color"
              v-bind="item"
              @click="handleClose"
            />
            <XButton
              v-if="action"
              size="xs"
              :color="color"
              variant="soft"
              :label="action.label"
              @click="handleActionClick(action.onClick)"
            />
            <XButton
              v-if="cancel"
              size="xs"
              variant="ghost"
              color="neutral"
              :label="cancel.label"
              @click="handleActionClick(cancel.onClick)"
            />
          </template>
        </slot>
      </div>
    </div>

    <div
      v-if="(orientation === 'horizontal' && hasActions) || closeSlotVisible"
      data-slot="actions"
      :class="cn('flex shrink-0 flex-wrap gap-1.5', orientation === 'horizontal' ? 'items-center' : 'items-start', ui?.actions)"
    >
      <slot v-if="orientation === 'horizontal'" name="actions">
        <component :is="actions" v-if="isComponentLike(actions)" :on-close-toast="handleClose" />
        <template v-else>
          <XButton
            v-for="(item, index) in actions"
            :key="index"
            size="xs"
            :color="color"
            v-bind="item"
            @click="handleClose"
          />
          <XButton
            v-if="action"
            size="xs"
            :color="color"
            variant="soft"
            :label="action.label"
            @click="handleActionClick(action.onClick)"
          />
          <XButton
            v-if="cancel"
            size="xs"
            variant="ghost"
            color="neutral"
            :label="cancel.label"
            @click="handleActionClick(cancel.onClick)"
          />
        </template>
      </slot>
      <slot name="close" :ui="ui">
        <component :is="close" v-if="isCloseComponent" :on-close-toast="handleClose" />
        <XButton
          v-else-if="props.close !== false"
          variant="link"
          color="neutral"
          size="md"
          aria-label="关闭"
          v-bind="closeConfig"
          :class="cn('p-0', ui?.close)"
          @click="handleClose"
        >
          <template #leading>
            <XIcon :name="closeIcon" size="sm" />
          </template>
        </XButton>
      </slot>
    </div>

    <XProgress
      v-if="progressEnabled && duration > 0 && remaining > 0"
      :model-value="remainingPercent"
      :color="progressConfig.color ?? color"
      :ui="progressConfig.ui"
      :class="cn('absolute inset-x-0 bottom-0', ui?.progress)"
    />
  </div>
</template>
