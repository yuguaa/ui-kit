<script setup lang="ts">
/**
 * XPopover 气泡：点击或悬停触发的轻量气泡卡片。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 是否显示 */
  open?: boolean
  /** 触发方式 */
  trigger?: 'hover' | 'click'
  /** 位置 */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /** 标题 */
  title?: string
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
  trigger: 'hover',
  side: 'top',
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

/** 打开 */
function openPanel() {
  onOpenChange(true)
}

/** 关闭 */
function closePanel() {
  onOpenChange(false)
}

defineExpose({ open: openPanel, close: closePanel })
</script>

<template>
  <Popover :open="open ?? innerOpen" @update:open="onOpenChange">
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverContent :side="side" :class="cn('w-64', props.class)">
      <PopoverHeader v-if="title != null || $slots.title">
        <PopoverTitle><slot name="title">{{ title }}</slot></PopoverTitle>
      </PopoverHeader>
      <PopoverDescription as-child>
        <div>
          <slot name="content" />
        </div>
      </PopoverDescription>
    </PopoverContent>
  </Popover>
</template>
