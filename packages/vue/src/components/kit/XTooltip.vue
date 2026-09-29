<script setup lang="ts">
/**
 * XTooltip 文字提示：简单的文字提示气泡，悬浮时显示。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const props = withDefaults(defineProps<{
  /** 提示内容 */
  title?: string
  /** 弹出位置 */
  placement?: 'top' | 'bottom' | 'left' | 'right'
  /** 触发方式 */
  trigger?: 'hover' | 'click' | 'focus'
  /** 受控显示状态 */
  open?: boolean
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
  placement: 'top',
  trigger: 'hover',
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
}>()

const innerOpen = ref(false)

function onOpenChange(next: boolean) {
  if (props.open == null) innerOpen.value = next
  emit('update:open', next)
}

/** 显示提示气泡 */
function show() {
  onOpenChange(true)
}

/** 隐藏提示气泡 */
function hide() {
  onOpenChange(false)
}

defineExpose({ show, hide })
</script>

<template>
  <TooltipProvider>
    <Tooltip :open="open ?? innerOpen" @update:open="onOpenChange">
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent :side="placement" :class="props.class">
        <slot name="title">{{ title }}</slot>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
