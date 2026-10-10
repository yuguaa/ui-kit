<script setup lang="ts">
/**
 * XChip 芯片：标记属性或数值的角标。
 * root 为定位壳，base 为芯片本体；支持七种语义色、五档尺寸、
 * 角标定位（position / inset / standalone）、显隐模型与可选关闭按钮。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useAttrs } from 'vue'
import { X } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ChipColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type ChipSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ChipPosition = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ChipUi {
  root?: string
  base?: string
}

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 芯片文本 */
  text?: string | number
  /** 标签颜色 */
  color?: ChipColor
  /** 标签尺寸 */
  size?: ChipSize
  /** 角标位置 */
  position?: ChipPosition
  /** 位于圆角元素内部时保持位置，不加外移 */
  inset?: boolean
  /** 相对父容器渲染，不做绝对定位 */
  standalone?: boolean
  /** 是否可关闭（kit 既有属性） */
  closable?: boolean
  /** 主题插槽类名 */
  ui?: ChipUi
  class?: HTMLAttributes['class']
}>(), {
  color: 'primary',
  size: 'md',
  position: 'top-right',
  inset: false,
  standalone: false,
  closable: false,
})

defineOptions({ name: 'XChip', inheritAttrs: false })

const emit = defineEmits<{
  /** 关闭时回调 */
  close: [event: MouseEvent]
}>()

/** 显隐模型：与 Nuxt UI 的 v-model:show 对齐，控制本体是否渲染 */
const show = defineModel<boolean>('show', { default: true })

const attrs = useAttrs()

/** data-slot 决定定位壳的插槽名（缺省 root），其余属性透传到芯片本体 */
const rootSlot = computed(() => (attrs['data-slot'] as string | undefined) ?? 'root')
const baseAttrs = computed(() => {
  const { 'data-slot': _slot, ...rest } = attrs
  return rest
})

const colorClasses: Record<ChipColor, string> = {
  primary: 'border-primary-3 bg-primary-1 text-primary-7',
  secondary: 'border-border bg-secondary text-secondary-foreground',
  neutral: 'border-border bg-muted text-muted-foreground',
  success: 'border-success-3 bg-success-1 text-success-7',
  info: 'border-info-3 bg-info-1 text-info-7',
  warning: 'border-warning-3 bg-warning-1 text-warning-8',
  error: 'border-error-3 bg-error-1 text-error-7',
}

const sizeClasses: Record<ChipSize, string> = {
  xs: 'h-4.5 gap-0.5 px-1.5 text-[10px]',
  sm: 'h-5.5 gap-1 px-2 text-xs',
  md: 'h-7 gap-1 px-2.5 text-sm',
  lg: 'h-8 gap-1.5 px-3 text-sm',
  xl: 'h-9 gap-1.5 px-3.5 text-base',
}

const positionClasses: Record<ChipPosition, string> = {
  'top-right': 'top-0 right-0',
  'bottom-right': 'bottom-0 right-0',
  'top-left': 'top-0 left-0',
  'bottom-left': 'bottom-0 left-0',
}

/** 非 inset 时外移半个身位，贴合圆角元素边沿 */
const translateClasses: Record<ChipPosition, string> = {
  'top-right': '-translate-y-1/2 translate-x-1/2',
  'bottom-right': 'translate-y-1/2 translate-x-1/2',
  'top-left': '-translate-y-1/2 -translate-x-1/2',
  'bottom-left': 'translate-y-1/2 -translate-x-1/2',
}

function handleClose(event: MouseEvent) {
  emit('close', event)
}
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    :data-slot="rootSlot"
    :class="cn(
      'relative inline-flex shrink-0 items-center justify-center',
      !standalone && 'absolute',
      positionClasses[position],
      !standalone && !inset && translateClasses[position],
      ui?.root,
      props.class,
    )"
  >
    <span
      v-if="show"
      v-bind="baseAttrs"
      data-slot="base"
      :class="cn(
        'inline-flex items-center justify-center rounded-full border font-medium whitespace-nowrap',
        colorClasses[color],
        sizeClasses[size],
        ui?.base,
      )"
    >
      <slot name="icon" />
      <slot name="content"><slot>{{ text }}</slot></slot>
      <Button
        v-if="closable"
        type="button"
        variant="ghost"
        size="icon-xs"
        aria-label="close"
        class="-mr-1 size-4 rounded-full opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3"
        @click="handleClose"
      >
        <X />
      </Button>
    </span>
  </Primitive>
</template>
