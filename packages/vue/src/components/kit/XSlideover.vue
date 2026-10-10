<script setup lang="ts">
/**
 * XSlideover 侧滑面板：与 Nuxt UI Slideover 对齐的侧边滑入面板。
 * 属性、插槽与 ui 主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）一比一对应。
 * 支持 side 四向、inset 内嵌与 dismissible 关闭策略。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import { XIcon } from '@lucide/vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  VisuallyHidden,
} from 'reka-ui'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

/** close 为对象时透传给关闭按钮的属性 */
export type SlideoverClose = boolean | {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'subtle' | 'link'
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface SlideoverUi {
  overlay?: string
  content?: string
  header?: string
  wrapper?: string
  body?: string
  footer?: string
  title?: string
  description?: string
  close?: string
}

const props = withDefaults(defineProps<{
  /** 标题 */
  title?: string
  /** 辅助说明 */
  description?: string
  /** 是否打开（支持 v-model:open） */
  open?: boolean
  /** 初始是否打开 */
  defaultOpen?: boolean
  /** 模态：聚焦锁定与遮罩拦截 */
  modal?: boolean
  /** 关闭后卸载内容 */
  unmountOnHide?: boolean
  /** 渲染遮罩 */
  overlay?: boolean
  /** 开关动画 */
  transition?: boolean
  /** 滑入方向 */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** 与屏幕边缘保留间距 */
  inset?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 显示关闭按钮 */
  close?: SlideoverClose
  /** 关闭按钮图标 */
  closeIcon?: Component
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  class?: HTMLAttributes['class']
  /** 主题插槽类名 */
  ui?: SlideoverUi
}>(), {
  open: undefined,
  modal: true,
  overlay: true,
  transition: true,
  side: 'right',
  inset: false,
  portal: true,
  close: true,
  dismissible: true,
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） */
  'close:prevent': []
}>()

defineOptions({ name: 'XSlideover', inheritAttrs: false })

const slots = useSlots()

/** dismissible 为 false 时阻止外部点击与 Esc 关闭 */
const contentEvents = computed(() => {
  if (props.dismissible) return {}
  return {
    interactOutside: (event: Event) => {
      event.preventDefault()
      emit('close:prevent')
    },
    escapeKeyDown: (event: Event) => {
      event.preventDefault()
      emit('close:prevent')
    },
  }
})

const showHeader = computed(
  () =>
    !!slots.header ||
    props.title != null ||
    !!slots.title ||
    props.description != null ||
    !!slots.description ||
    Boolean(props.close) ||
    !!slots.close,
)

/** 内容面板定位：side + inset 组合 */
const contentPositionClass = computed(() => {
  const positionMap: Record<'top' | 'right' | 'bottom' | 'left', { inset: string; plain: string }> = {
    top: {
      plain: 'inset-x-0 top-0 max-h-full',
      inset: 'inset-x-4 top-4 max-h-[calc(100%-2rem)]',
    },
    right: {
      plain: 'inset-y-0 right-0 w-full max-w-md',
      inset: 'inset-y-4 right-4 w-[calc(100%-2rem)]',
    },
    bottom: {
      plain: 'inset-x-0 bottom-0 max-h-full',
      inset: 'inset-x-4 bottom-4 max-h-[calc(100%-2rem)]',
    },
    left: {
      plain: 'inset-y-0 left-0 w-full max-w-md',
      inset: 'inset-y-4 left-4 w-[calc(100%-2rem)]',
    },
  }
  return props.inset ? positionMap[props.side].inset : positionMap[props.side].plain
})

/** 内容面板进出场动画方向 */
const contentAnimationClass = computed(() => {
  const animationMap: Record<'top' | 'right' | 'bottom' | 'left', string> = {
    top: 'data-[side=top]:data-[state=open]:slide-in-from-top data-[side=top]:data-[state=closed]:slide-out-to-top',
    right: 'data-[side=right]:data-[state=open]:slide-in-from-right data-[side=right]:data-[state=closed]:slide-out-to-right',
    bottom: 'data-[side=bottom]:data-[state=open]:slide-in-from-bottom data-[side=bottom]:data-[state=closed]:slide-out-to-bottom',
    left: 'data-[side=left]:data-[state=open]:slide-in-from-left data-[side=left]:data-[state=closed]:slide-out-to-left',
  }
  return animationMap[props.side]
})
</script>

<template>
  <DialogRoot
    :open="props.open"
    :default-open="props.defaultOpen"
    :modal="props.modal"
    :unmount-on-hide="props.unmountOnHide"
    @update:open="(next: boolean) => emit('update:open', next)"
  >
    <DialogTrigger v-if="slots.default" as-child :class="props.class" v-bind="$attrs">
      <slot />
    </DialogTrigger>

    <DialogPortal :disabled="!props.portal">
      <DialogOverlay
        v-if="props.overlay"
        data-slot="overlay"
        :class="cn(
          'fixed inset-0 z-50 bg-black/50',
          props.transition && 'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          props.ui?.overlay,
        )"
      />

      <DialogContent
        data-slot="content"
        :data-side="props.side"
        :class="cn(
          'bg-background divide-y divide-border sm:ring-1 ring-border sm:shadow-lg flex flex-col focus:outline-none fixed z-50',
          props.inset && 'rounded-lg',
          contentPositionClass,
          props.transition && cn(
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
            contentAnimationClass,
          ),
          !slots.default && props.class,
          props.ui?.content,
        )"
        v-on="contentEvents"
      >
        <VisuallyHidden
          v-if="(props.title == null && !slots.title) || (props.description == null && !slots.description) || !!slots.content || !!slots.header"
        >
          <DialogTitle v-if="props.title == null && !slots.title" />
          <DialogTitle v-else>
            <slot name="title">{{ props.title }}</slot>
          </DialogTitle>

          <DialogDescription v-if="props.description == null && !slots.description" />
          <DialogDescription v-else>
            <slot name="description">{{ props.description }}</slot>
          </DialogDescription>
        </VisuallyHidden>

        <slot name="content">
          <div
            v-if="showHeader"
            data-slot="header"
            :class="cn('flex items-center gap-1.5 p-4 sm:px-6', props.ui?.header)"
          >
            <slot name="header">
              <div v-if="props.title != null || !!slots.title || props.description != null || !!slots.description" data-slot="wrapper" :class="cn('min-w-0 flex-1', props.ui?.wrapper)">
                <DialogTitle
                  v-if="props.title != null || !!slots.title"
                  data-slot="title"
                  :class="cn('text-foreground font-semibold', props.ui?.title)"
                >
                  <slot name="title">{{ props.title }}</slot>
                </DialogTitle>

                <DialogDescription
                  v-if="props.description != null || !!slots.description"
                  data-slot="description"
                  :class="cn('mt-1 text-muted-foreground text-sm', props.ui?.description)"
                >
                  <slot name="description">{{ props.description }}</slot>
                </DialogDescription>
              </div>

              <slot name="actions" />

              <DialogClose v-if="Boolean(props.close) || !!slots.close" as-child>
                <slot name="close">
                  <span v-if="props.close" data-slot="close" :class="cn('absolute top-4 right-4', props.ui?.close)">
                    <XButton
                      color="neutral"
                      variant="ghost"
                      square
                      aria-label="关闭"
                      v-bind="typeof props.close === 'object' ? props.close : {}"
                    >
                      <component :is="props.closeIcon ?? XIcon" class="size-4" />
                    </XButton>
                  </span>
                </slot>
              </DialogClose>
            </slot>
          </div>

          <div data-slot="body" :class="cn('flex-1 overflow-y-auto p-4 sm:p-6', props.ui?.body)">
            <slot name="body" />
          </div>

          <div v-if="!!slots.footer" data-slot="footer" :class="cn('flex items-center gap-1.5 p-4 sm:px-6', props.ui?.footer)">
            <slot name="footer" />
          </div>
        </slot>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
