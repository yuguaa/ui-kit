<script setup lang="ts">
/**
 * XDrawer 抽屉：从屏幕边缘滑出的面板，承载额外内容或操作。
 */
import type { HTMLAttributes } from 'vue'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 是否打开 */
  open: boolean
  /** 滑出方向 */
  side?: 'left' | 'right'
  /** 点击遮罩关闭 */
  dismissible?: boolean
  /** 标题 */
  title?: string
  class?: HTMLAttributes['class']
}>(), {
  side: 'right',
  dismissible: true,
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
}>()

function onOpenChange(next: boolean) {
  if (!next && !props.dismissible) return
  emit('update:open', next)
}
</script>

<template>
  <Drawer :open="open" @update:open="onOpenChange">
    <DrawerContent :class="cn('h-full w-80 rounded-none', props.class)">
      <DrawerHeader class="flex items-center justify-between border-b border-border px-4 py-3">
        <slot name="header">
          <DrawerTitle>{{ title }}</DrawerTitle>
          <DrawerDescription v-if="title" class="sr-only">{{ title }}</DrawerDescription>
        </slot>
        <DrawerClose as-child>
          <XButton variant="ghost" color="neutral" size="sm" aria-label="关闭">✕</XButton>
        </DrawerClose>
      </DrawerHeader>
      <div class="flex-1 overflow-auto px-4 py-3 text-sm">
        <slot name="content" />
      </div>
      <DrawerFooter v-if="$slots.footer" class="border-t border-border px-4 py-3">
        <slot name="footer" />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
