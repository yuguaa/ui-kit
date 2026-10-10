<script setup lang="ts">
/**
 * XPopover 气泡卡片：与 Nuxt UI Popover 对齐的气泡浮层。
 * mode 区分点击（click）与悬停（hover）触发，支持 anchor 锚点插槽、dismissible 关闭策略与 portal 渲染。
 */
import type { HTMLAttributes } from 'vue'
import { computed, useSlots } from 'vue'
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'reka-ui'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface PopoverUi {
  content?: string
  arrow?: string
}

const props = withDefaults(defineProps<{
  /** 触发模式：click 点击 / hover 悬停 */
  mode?: 'click' | 'hover'
  /** 是否打开（支持 v-model:open） */
  open?: boolean
  /** 初始是否打开 */
  defaultOpen?: boolean
  /** 模态：聚焦锁定与遮罩拦截（仅 click 模式） */
  modal?: boolean
  /** 悬停打开延迟（毫秒，仅 hover 模式） */
  openDelay?: number
  /** 悬停关闭延迟（毫秒，仅 hover 模式） */
  closeDelay?: number
  /** 触屏设备点击触发器时切换开合（仅 hover 模式） */
  enableTouch?: boolean
  /** 是否显示指向触发元素的箭头 */
  arrow?: boolean
  /** 渲染到 body */
  portal?: boolean
  /** 允许点击外部或按 Esc 关闭 */
  dismissible?: boolean
  class?: HTMLAttributes['class']
  /** 主题插槽类名 */
  ui?: PopoverUi
}>(), {
  open: undefined,
  mode: 'click',
  modal: false,
  openDelay: 0,
  closeDelay: 0,
  arrow: false,
  portal: true,
  dismissible: true,
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） */
  'close:prevent': []
}>()

defineOptions({ name: 'XPopover', inheritAttrs: false })

const slots = useSlots()

/** 根组件属性：click 传 modal，hover 传悬停延迟 */
const clickRootProps = computed(() => ({
  open: props.open,
  defaultOpen: props.defaultOpen,
  modal: props.modal,
}))

const hoverRootProps = computed(() => ({
  open: props.open,
  defaultOpen: props.defaultOpen,
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
  enableTouch: props.enableTouch,
}))

/** 内容定位默认值 */
const contentProps = computed(() => ({
  side: 'bottom' as const,
  sideOffset: 8,
  collisionPadding: 8,
}))

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

/** 内容面板与箭头的共用类名 */
const panelClass = computed(() =>
  cn(
    'bg-background shadow-lg rounded-md ring-1 ring-border focus:outline-none pointer-events-auto z-50',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    !slots.default && props.class,
    props.ui?.content,
  ),
)
</script>

<template>
  <PopoverRoot
    v-if="props.mode !== 'hover'"
    v-slot="{ open, close }"
    v-bind="clickRootProps"
    @update:open="(next: boolean) => emit('update:open', next)"
  >
    <PopoverTrigger as-child :class="props.class" v-bind="$attrs">
      <slot :open="open" />
    </PopoverTrigger>

    <PopoverAnchor v-if="slots.anchor" as-child>
      <slot name="anchor" :close="close" />
    </PopoverAnchor>

    <PopoverPortal :disabled="!props.portal">
      <PopoverContent data-slot="content" v-bind="contentProps" :class="panelClass" v-on="contentEvents">
        <slot name="content" :close="close" />

        <PopoverArrow v-if="props.arrow" data-slot="arrow" :class="cn('fill-background stroke-border', props.ui?.arrow)" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>

  <HoverCardRoot
    v-else
    v-slot="{ open }"
    v-bind="hoverRootProps"
    @update:open="(next: boolean) => emit('update:open', next)"
  >
    <HoverCardTrigger as-child :class="props.class" v-bind="$attrs">
      <slot :open="open" />
    </HoverCardTrigger>

    <HoverCardPortal :disabled="!props.portal">
      <HoverCardContent data-slot="content" v-bind="contentProps" :class="panelClass" v-on="contentEvents">
        <slot name="content" />

        <HoverCardArrow v-if="props.arrow" data-slot="arrow" :class="cn('fill-background stroke-border', props.ui?.arrow)" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
