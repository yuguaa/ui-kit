<script setup lang="ts">
/**
 * XTooltip 文字提示：与 Nuxt UI Tooltip 对齐的悬浮提示。
 * 支持 text 文本、kbds 快捷键组合、content 插槽与 portal 渲染。
 */
import type { HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from 'reka-ui'
import XKbd from '@/components/kit/XKbd.vue'
import { cn } from '@/lib/utils'

/** 快捷键项：文本或 XKbd 属性对象 */
export type TooltipKbd = string | {
  value?: string
  variant?: 'solid' | 'outline' | 'soft' | 'subtle'
  color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface TooltipUi {
  content?: string
  arrow?: string
  text?: string
  kbds?: string
  kbdsSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<{
  /** 提示文本 */
  text?: string
  /** 快捷键组合 */
  kbds?: TooltipKbd[]
  /** 是否打开（支持 v-model:open） */
  open?: boolean
  /** 初始是否打开 */
  defaultOpen?: boolean
  /** 打开延迟（毫秒） */
  delayDuration?: number
  /** 内容可悬停保持 */
  disableHoverableContent?: boolean
  /** 点击触发器不关闭 */
  disableClosingTrigger?: boolean
  /** 非键盘聚焦不打开 */
  ignoreNonKeyboardFocus?: boolean
  /** 禁用提示 */
  disabled?: boolean
  /** 是否显示箭头 */
  arrow?: boolean
  /** 渲染到 body */
  portal?: boolean
  class?: HTMLAttributes['class']
  /** 主题插槽类名 */
  ui?: TooltipUi
}>(), {
  open: undefined,
  arrow: false,
  portal: true,
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
}>()

defineOptions({ name: 'XTooltip', inheritAttrs: false })

const slots = useSlots()

/** 无任何内容时禁用提示 */
const isDisabled = computed(
  () => !(props.text || props.kbds?.length || !!slots.content) || Boolean(props.disabled),
)

/** 内容定位默认值 */
const contentProps = computed(() => ({
  side: 'bottom' as const,
  sideOffset: 8,
  collisionPadding: 8,
}))

/** 快捷键尺寸：ui.kbdsSize 覆盖默认 sm */
const kbdSize = computed(() => props.ui?.kbdsSize ?? 'sm')
</script>

<template>
  <TooltipProvider :delay-duration="props.delayDuration ?? 700">
    <TooltipRoot
      :open="props.open"
      :default-open="props.defaultOpen"
      :delay-duration="props.delayDuration"
      :disable-hoverable-content="props.disableHoverableContent"
      :disable-closing-trigger="props.disableClosingTrigger"
      :ignore-non-keyboard-focus="props.ignoreNonKeyboardFocus"
      :disabled="isDisabled"
      @update:open="(next: boolean) => emit('update:open', next)"
    >
      <TooltipTrigger v-if="slots.default" as-child :class="props.class" v-bind="$attrs">
        <slot />
      </TooltipTrigger>

      <TooltipPortal :disabled="!props.portal">
        <TooltipContent
          data-slot="content"
          v-bind="contentProps"
          :class="cn(
            'flex items-center gap-1 bg-background text-foreground shadow-sm rounded-sm ring-1 ring-border h-6 px-2.5 py-1 text-xs select-none pointer-events-auto z-50',
            'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            !slots.default && props.class,
            props.ui?.content,
          )"
        >
          <slot name="content">
            <span v-if="props.text" data-slot="text" :class="cn('truncate', props.ui?.text)">{{ props.text }}</span>

            <span v-if="props.kbds?.length" data-slot="kbds" :class="cn('inline-flex items-center shrink-0 gap-0.5', props.ui?.kbds)">
              <XKbd v-for="(kbd, index) in props.kbds" :key="index" :size="kbdSize" v-bind="typeof kbd === 'string' ? { value: kbd } : kbd" />
            </span>
          </slot>

          <TooltipArrow
            v-if="props.arrow"
            data-slot="arrow"
            :class="cn('fill-background stroke-border', props.ui?.arrow)"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
