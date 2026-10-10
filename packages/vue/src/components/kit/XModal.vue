<script setup lang="ts">
/**
 * XModal 对话框：与 Nuxt UI Modal 对齐的模态对话框。
 * 属性、插槽与 ui 主题插槽键（overlay / content / header / wrapper / body / footer / title / description / close）一比一对应。
 * 支持 scrollable 滚动遮罩、fullscreen 全屏、close 关闭按钮、dismissible 关闭策略。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
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
export type ModalClose = boolean | {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'subtle' | 'link'
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ModalUi {
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
  /** 滚动遮罩模式：内容随遮罩滚动居中 */
  scrollable?: boolean
  /** 开关动画 */
  transition?: boolean
  /** 全屏模式 */
  fullscreen?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 显示关闭按钮 */
  close?: ModalClose
  /** 关闭按钮图标 */
  closeIcon?: Component
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  class?: HTMLAttributes['class']
  /** 主题插槽类名 */
  ui?: ModalUi
}>(), {
  modal: true,
  overlay: true,
  scrollable: false,
  transition: true,
  fullscreen: false,
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

defineOptions({ name: 'XModal', inheritAttrs: false })

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

const showWrapper = computed(
  () => props.title != null || !!slots.title || props.description != null || !!slots.description,
)

/** 内容面板与遮罩在 scrollable 两种模式下的复用模板 */
const [DefineModalContent, ReuseModalContent] = createReusableTemplate()
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
      <DefineModalContent>
        <DialogContent
          data-slot="content"
          :class="cn(
            'bg-background divide-y divide-border flex flex-col focus:outline-none z-50',
            props.transition && 'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            props.fullscreen ? 'inset-0' : 'w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring-1 ring-border',
            props.scrollable ? 'relative' : props.fullscreen ? 'fixed' : 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden origin-center',
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
                <div v-if="showWrapper" data-slot="wrapper" :class="cn('min-w-0 flex-1', props.ui?.wrapper)">
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
                    <XButton
                      v-if="props.close"
                      data-slot="close"
                      color="neutral"
                      variant="ghost"
                      square
                      aria-label="关闭"
                      v-bind="typeof props.close === 'object' ? props.close : {}"
                      :class="cn('absolute top-4 right-4', props.ui?.close)"
                    >
                      <component :is="props.closeIcon ?? XIcon" class="size-4" />
                    </XButton>
                  </slot>
                </DialogClose>
              </slot>
            </div>

            <div v-if="!!slots.body" data-slot="body" :class="cn('flex-1 p-4 sm:p-6', !props.scrollable && 'overflow-y-auto', props.ui?.body)">
              <slot name="body" />
            </div>

            <div v-if="!!slots.footer" data-slot="footer" :class="cn('flex items-center gap-1.5 p-4 sm:px-6', props.ui?.footer)">
              <slot name="footer" />
            </div>
          </slot>
        </DialogContent>
      </DefineModalContent>

      <template v-if="props.scrollable">
        <DialogOverlay
          data-slot="overlay"
          :class="cn(
            'fixed inset-0 z-50',
            props.overlay && 'bg-black/50',
            props.transition && 'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
            'overflow-y-auto grid place-items-center p-4 sm:py-8',
            props.ui?.overlay,
          )"
        >
          <ReuseModalContent />
        </DialogOverlay>
      </template>

      <template v-else>
        <DialogOverlay
          v-if="props.overlay"
          data-slot="overlay"
          :class="cn(
            'fixed inset-0 z-50 bg-black/50',
            props.transition && 'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
            props.ui?.overlay,
          )"
        />

        <ReuseModalContent />
      </template>
    </DialogPortal>
  </DialogRoot>
</template>
