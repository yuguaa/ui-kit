<script setup lang="ts">
/**
 * XAlert 警告提示：
 * 在语义色（color × variant）上提供标题、描述、图标/头像、操作区与受控关闭按钮。
 * leading / title / description / actions / close 插槽与 Nuxt UI 对齐，
 * icon / message 插槽为 kit 既有用法保留。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import { CircleAlert, CircleCheck, Info, OctagonX } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import XAvatar from '@/components/kit/XAvatar.vue'
import XButton from '@/components/kit/XButton.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

type AlertType = 'success' | 'info' | 'warning' | 'error'
type AlertColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type AlertVariant = 'solid' | 'outline' | 'soft' | 'subtle'
type AlertOrientation = 'vertical' | 'horizontal'
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type IconName = InstanceType<typeof XIcon>['$props']['name']
type XButtonProps = InstanceType<typeof XButton>['$props']

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface AlertUi {
  root?: string
  wrapper?: string
  title?: string
  description?: string
  icon?: string
  avatar?: string
  avatarSize?: AvatarSize
  actions?: string
  close?: string
}

/** avatar 属性：透传给 XAvatar 的头像配置 */
export interface AlertAvatarProps {
  src?: string
  alt?: string
  text?: string
  size?: AvatarSize
  shape?: 'circle' | 'square'
  color?: AlertColor
}

/** 按钮配置：close 对象与 actions 数组共用，整体透传给 XButton */
export type AlertButtonProps = Partial<XButtonProps>

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 提示类型（kit 既有属性，作为 color 的回退） */
  type?: AlertType
  /** 语义色 */
  color?: AlertColor
  /** 预设样式 */
  variant?: AlertVariant
  /** 内容与操作区的排列方向 */
  orientation?: AlertOrientation
  /** 提示标题（与 message 并存，优先于 message） */
  title?: string
  /** 提示标题（kit 既有属性） */
  message?: string
  /** 辅助说明文字 */
  description?: string
  /** 图标名 */
  icon?: IconName
  /** 显示类型默认图标（kit 既有属性） */
  showIcon?: boolean
  /** 头像配置 */
  avatar?: AlertAvatarProps
  /** 操作按钮列表，纵向时位于内容下方，横向时位于内容右侧 */
  actions?: AlertButtonProps[]
  /** 显示关闭按钮，点击后 open 置为 false */
  close?: boolean | AlertButtonProps
  /** 显示关闭按钮（kit 既有属性） */
  closable?: boolean
  /** 关闭按钮图标 */
  closeIcon?: IconName
  /** 主题插槽类名 */
  ui?: AlertUi
  class?: HTMLAttributes['class']
}>(), {
  variant: 'solid',
  orientation: 'vertical',
  closable: false,
  showIcon: false,
  closeIcon: 'x',
})

const emit = defineEmits<{
  /** 点击关闭按钮时的回调（kit 既有事件） */
  close: [event: MouseEvent]
}>()

/** 受控关闭模型：点击关闭按钮后置为 false */
const open = defineModel<boolean>('open', { default: true })

const slots = useSlots()

/** 变体 × 语义色样式（字面量，保证 Tailwind 可扫描） */
const colorClasses: Record<AlertColor, Record<AlertVariant, string>> = {
  primary: {
    solid: 'bg-primary text-background',
    outline: 'text-primary ring-1 ring-inset ring-primary/25',
    soft: 'bg-primary/10 text-primary',
    subtle: 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/25',
  },
  secondary: {
    solid: 'bg-secondary text-secondary-foreground',
    outline: 'text-foreground ring-1 ring-inset ring-border',
    soft: 'bg-muted text-secondary-foreground',
    subtle: 'bg-muted text-secondary-foreground ring-1 ring-inset ring-border',
  },
  neutral: {
    solid: 'bg-foreground text-background',
    outline: 'text-foreground ring-1 ring-inset ring-border',
    soft: 'bg-muted text-foreground',
    subtle: 'bg-muted text-foreground ring-1 ring-inset ring-border',
  },
  success: {
    solid: 'bg-success text-background',
    outline: 'text-success ring-1 ring-inset ring-success/25',
    soft: 'bg-success/10 text-success',
    subtle: 'bg-success/10 text-success ring-1 ring-inset ring-success/25',
  },
  info: {
    solid: 'bg-info text-background',
    outline: 'text-info ring-1 ring-inset ring-info/25',
    soft: 'bg-info/10 text-info',
    subtle: 'bg-info/10 text-info ring-1 ring-inset ring-info/25',
  },
  warning: {
    solid: 'bg-warning text-background',
    outline: 'text-warning ring-1 ring-inset ring-warning/25',
    soft: 'bg-warning/10 text-warning',
    subtle: 'bg-warning/10 text-warning ring-1 ring-inset ring-warning/25',
  },
  error: {
    solid: 'bg-error text-background',
    outline: 'text-error ring-1 ring-inset ring-error/25',
    soft: 'bg-error/10 text-error',
    subtle: 'bg-error/10 text-error ring-1 ring-inset ring-error/25',
  },
}

/** 类型默认图标（showIcon 时使用） */
const typeIcons: Record<AlertType, typeof CircleCheck> = {
  success: CircleCheck,
  info: Info,
  warning: CircleAlert,
  error: OctagonX,
}

/** color 优先，其次 type，最后 primary */
const effectiveColor = computed<AlertColor>(() => props.color ?? props.type ?? 'primary')
const heading = computed(() => props.title ?? props.message)
const hasHeading = computed(() => heading.value != null || !!slots.title || !!slots.message)
const hasActions = computed(() => (props.actions?.length ?? 0) > 0 || !!slots.actions)
const closeButton = computed<AlertButtonProps>(() =>
  typeof props.close === 'object' && props.close !== null ? props.close : {},
)

function handleClose(event: MouseEvent) {
  emit('close', event)
  open.value = false
}
</script>

<template>
  <Primitive
    v-if="open"
    :as="as ?? 'div'"
    data-slot="root"
    :data-orientation="orientation"
    role="alert"
    :class="cn(
      'relative flex w-full gap-2.5 overflow-hidden rounded-lg p-4',
      orientation === 'horizontal' ? 'items-center' : 'items-start',
      colorClasses[effectiveColor][variant],
      ui?.root,
      props.class,
    )"
  >
    <slot name="leading" :ui="ui">
      <slot name="icon">
        <XAvatar
          v-if="avatar"
          v-bind="avatar"
          :size="ui?.avatarSize ?? avatar.size"
          data-slot="avatar"
          :class="cn('shrink-0', ui?.avatar)"
        />
        <XIcon
          v-else-if="icon"
          :name="icon"
          data-slot="icon"
          :class="cn('shrink-0 size-5', ui?.icon)"
        />
        <component
          :is="typeIcons[type ?? 'info']"
          v-else-if="showIcon"
          data-slot="icon"
          :class="cn('shrink-0 size-5', ui?.icon)"
        />
      </slot>
    </slot>

    <div data-slot="wrapper" :class="cn('flex min-w-0 flex-1 flex-col', ui?.wrapper)">
      <div v-if="hasHeading" data-slot="title" :class="cn('text-sm font-medium', ui?.title)">
        <slot name="title">
          <slot name="message">{{ heading }}</slot>
        </slot>
      </div>
      <div
        v-if="description != null || $slots.description"
        data-slot="description"
        :class="cn('text-sm opacity-90', hasHeading && 'mt-1', ui?.description)"
      >
        <slot name="description">{{ description }}</slot>
      </div>

      <div
        v-if="orientation === 'vertical' && hasActions"
        data-slot="actions"
        :class="cn('mt-2.5 flex shrink-0 flex-wrap items-start gap-1.5', ui?.actions)"
      >
        <slot name="actions">
          <XButton
            v-for="(action, index) in actions"
            :key="index"
            size="xs"
            v-bind="action"
          />
        </slot>
      </div>
    </div>

    <div
      v-if="(orientation === 'horizontal' && hasActions) || closable || close"
      data-slot="actions"
      :class="cn('flex shrink-0 flex-wrap gap-1.5', orientation === 'horizontal' ? 'items-center' : 'items-start', ui?.actions)"
    >
      <slot v-if="orientation === 'horizontal'" name="actions">
        <XButton
          v-for="(action, index) in actions"
          :key="index"
          size="xs"
          v-bind="action"
        />
      </slot>
      <slot name="close" :ui="ui">
        <XButton
          v-if="closable || close"
          variant="link"
          color="neutral"
          size="md"
          aria-label="关闭"
          v-bind="closeButton"
          :class="cn('p-0', ui?.close)"
          @click="handleClose"
        >
          <template #leading>
            <XIcon :name="closeIcon" size="sm" />
          </template>
        </XButton>
      </slot>
    </div>
  </Primitive>
</template>
