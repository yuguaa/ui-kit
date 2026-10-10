<script setup lang="ts">
/**
 * XDrawer 抽屉：与 Nuxt UI Drawer 对齐的抽屉面板。
 * 属性、插槽与 ui 主题插槽键（overlay / content / handle / container / header / wrapper / title / description / actions / body / footer / close）一比一对应。
 * 支持方向、inset 内嵌、handle 拖拽把手与 close 关闭按钮。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, ref, useSlots } from 'vue'
import { XIcon } from '@lucide/vue'
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  VisuallyHidden,
} from 'reka-ui'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

/** close 为对象时透传给关闭按钮的属性 */
export type DrawerCloseConfig = boolean | {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'subtle' | 'link'
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface DrawerUi {
  overlay?: string
  content?: string
  handle?: string
  container?: string
  header?: string
  wrapper?: string
  title?: string
  description?: string
  actions?: string
  body?: string
  footer?: string
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
  /** 滑出方向 */
  direction?: 'top' | 'right' | 'bottom' | 'left'
  /** 预设停靠位置（0-1 比例或像素值） */
  snapPoints?: (number | string)[]
  /** 渲染遮罩 */
  overlay?: boolean
  /** 渲染拖拽把手 */
  handle?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 嵌套在另一个抽屉中（嵌套关系由底层原语自动识别） */
  nested?: boolean
  /** 与屏幕边缘保留间距 */
  inset?: boolean
  /** 显示关闭按钮 */
  close?: DrawerCloseConfig
  /** 关闭按钮图标 */
  closeIcon?: Component
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  class?: HTMLAttributes['class']
  /** 主题插槽类名 */
  ui?: DrawerUi
}>(), {
  open: undefined,
  modal: true,
  direction: 'bottom',
  overlay: true,
  handle: true,
  portal: true,
  nested: false,
  inset: false,
  close: false,
  dismissible: true,
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） */
  'close:prevent': []
}>()

defineOptions({ name: 'XDrawer', inheritAttrs: false })

const slots = useSlots()

/** 内部开合状态：DrawerRoot 始终受控，以便拦截 swipe 关闭 */
const innerOpen = ref(props.defaultOpen ?? false)
const resolvedOpen = computed(() => props.open ?? innerOpen.value)

function onOpenChange(next: boolean, details?: { reason?: string }) {
  /* dismissible 为 false 时拖拽关闭同样被拦截 */
  if (!props.dismissible && !next && details?.reason === 'swipe') {
    emit('close:prevent')
    return
  }
  if (props.open == null) innerOpen.value = next
  emit('update:open', next)
}

/** Nuxt 方向（top / bottom）映射到 reka-ui 的滑动方向（up / down） */
const swipeDirection = computed(() => {
  if (props.direction === 'top') return 'up'
  if (props.direction === 'bottom') return 'down'
  return props.direction
})

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
    !!slots.close ||
    !!slots.actions,
)

const showActions = computed(() => !!slots.actions || Boolean(props.close) || !!slots.close)

/** 内容面板定位：方向 + inset 组合 */
const contentPositionClass = computed(() => {
  if (props.inset) {
    const insetMap: Record<'top' | 'right' | 'bottom' | 'left', string> = {
      top: 'data-[swipe-direction=up]:inset-x-4 data-[swipe-direction=up]:top-4 rounded-lg overflow-hidden',
      right: 'data-[swipe-direction=right]:inset-y-4 data-[swipe-direction=right]:right-4 rounded-lg overflow-hidden',
      bottom: 'data-[swipe-direction=down]:inset-x-4 data-[swipe-direction=down]:bottom-4 rounded-lg overflow-hidden',
      left: 'data-[swipe-direction=left]:inset-y-4 data-[swipe-direction=left]:left-4 rounded-lg overflow-hidden',
    }
    return insetMap[props.direction]
  }

  const positionMap: Record<'top' | 'right' | 'bottom' | 'left', string> = {
    top: 'data-[swipe-direction=up]:inset-x-0 data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:mb-24 data-[swipe-direction=up]:max-h-[96%] data-[swipe-direction=up]:rounded-b-lg',
    right: 'data-[swipe-direction=right]:inset-y-0 data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:max-w-[calc(100%-2rem)] data-[swipe-direction=right]:rounded-l-lg',
    bottom: 'data-[swipe-direction=down]:inset-x-0 data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:mt-24 data-[swipe-direction=down]:max-h-[96%] data-[swipe-direction=down]:rounded-t-lg',
    left: 'data-[swipe-direction=left]:inset-y-0 data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:max-w-[calc(100%-2rem)] data-[swipe-direction=left]:rounded-r-lg',
  }
  return positionMap[props.direction]
})

/** 内容面板进出场动画方向 */
const contentAnimationClass = computed(() => {
  const animationMap: Record<'top' | 'right' | 'bottom' | 'left', string> = {
    top: 'data-[swipe-direction=up]:data-[state=open]:slide-in-from-top data-[swipe-direction=up]:data-[state=closed]:slide-out-to-top',
    right: 'data-[swipe-direction=right]:data-[state=open]:slide-in-from-right data-[swipe-direction=right]:data-[state=closed]:slide-out-to-right',
    bottom: 'data-[swipe-direction=down]:data-[state=open]:slide-in-from-bottom data-[swipe-direction=down]:data-[state=closed]:slide-out-to-bottom',
    left: 'data-[swipe-direction=left]:data-[state=open]:slide-in-from-left data-[swipe-direction=left]:data-[state=closed]:slide-out-to-left',
  }
  return animationMap[props.direction]
})

/** 拖拽把手：方向决定尺寸与位置 */
const handleClass = computed(() => {
  const handleMap: Record<'top' | 'right' | 'bottom' | 'left', string> = {
    top: 'mb-4 !w-12 !h-1.5 mx-auto rounded-full',
    right: '!ml-4 !h-12 !w-1.5 my-auto rounded-full',
    bottom: 'mt-4 !w-12 !h-1.5 mx-auto rounded-full',
    left: '!mr-4 !h-12 !w-1.5 my-auto rounded-full',
  }
  return handleMap[props.direction]
})
</script>

<template>
  <DrawerRoot
    :open="resolvedOpen"
    :default-open="props.defaultOpen"
    :modal="props.modal"
    :swipe-direction="swipeDirection"
    :snap-points="props.snapPoints"
    @update:open="onOpenChange"
  >
    <DrawerTrigger v-if="slots.default" as-child :class="props.class" v-bind="$attrs">
      <slot />
    </DrawerTrigger>

    <DrawerPortal :disabled="!props.portal">
      <DrawerOverlay
        v-if="props.overlay"
        data-slot="overlay"
        :class="cn('fixed inset-0 z-50 bg-black/50', props.ui?.overlay)"
      />

      <DrawerContent
        data-slot="content"
        :class="cn(
          'bg-background ring-1 ring-border flex flex-col focus:outline-none fixed z-50 will-change-transform',
          'transform-[translate3d(var(--drawer-swipe-movement-x,0px),var(--drawer-swipe-movement-y,0px),0)]',
          'transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0 data-swiping:select-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          props.direction === 'top' || props.direction === 'bottom' ? 'flex-col' : 'flex-row',
          contentPositionClass,
          contentAnimationClass,
          !slots.default && props.class,
          props.ui?.content,
        )"
        v-on="contentEvents"
      >
        <DrawerHandle v-if="props.handle" data-slot="handle" :class="cn('shrink-0 bg-border', handleClass, props.ui?.handle)" />

        <VisuallyHidden
          v-if="(props.title == null && !slots.title) || (props.description == null && !slots.description) || !!slots.content"
        >
          <DrawerTitle v-if="props.title == null && !slots.title" />
          <DrawerTitle v-else-if="!!slots.content">
            <slot name="title">{{ props.title }}</slot>
          </DrawerTitle>

          <DrawerDescription v-if="props.description == null && !slots.description" />
          <DrawerDescription v-else-if="!!slots.content">
            <slot name="description">{{ props.description }}</slot>
          </DrawerDescription>
        </VisuallyHidden>

        <slot name="content">
          <div data-slot="container" :class="cn('w-full flex flex-col gap-4 p-4 overflow-y-auto', props.ui?.container)">
            <div
              v-if="showHeader"
              data-slot="header"
              :class="cn('flex items-center gap-1.5', props.ui?.header)"
            >
              <slot name="header">
                <div v-if="props.title != null || !!slots.title || props.description != null || !!slots.description" data-slot="wrapper" :class="cn('min-w-0 flex-1', props.ui?.wrapper)">
                  <DrawerTitle
                    v-if="props.title != null || !!slots.title"
                    data-slot="title"
                    :class="cn('text-foreground font-semibold', props.ui?.title)"
                  >
                    <slot name="title">{{ props.title }}</slot>
                  </DrawerTitle>

                  <DrawerDescription
                    v-if="props.description != null || !!slots.description"
                    data-slot="description"
                    :class="cn('mt-1 text-muted-foreground text-sm', props.ui?.description)"
                  >
                    <slot name="description">{{ props.description }}</slot>
                  </DrawerDescription>
                </div>

                <div v-if="showActions" data-slot="actions" :class="cn('flex items-center gap-1.5 shrink-0 ms-auto', props.ui?.actions)">
                  <slot name="actions" />

                  <DrawerClose v-if="Boolean(props.close) || !!slots.close" as-child>
                    <slot name="close">
                      <span v-if="props.close" data-slot="close" :class="cn(props.ui?.close)">
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
                  </DrawerClose>
                </div>
              </slot>
            </div>

            <div v-if="!!slots.body" data-slot="body" :class="cn('flex-1', props.ui?.body)">
              <slot name="body" />
            </div>

            <div v-if="!!slots.footer" data-slot="footer" :class="cn('flex flex-col gap-1.5', props.ui?.footer)">
              <slot name="footer" />
            </div>
          </div>
        </slot>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
