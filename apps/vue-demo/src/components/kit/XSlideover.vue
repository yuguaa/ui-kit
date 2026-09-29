<script setup lang="ts">
/**
 * XSlideover 侧滑：从侧边滑入的浮层，常用于移动端导航。
 */
import type { HTMLAttributes } from 'vue'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet'
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
  <Sheet :open="open" @update:open="onOpenChange">
    <SheetContent :side="side" :class="cn('w-72 p-0 sm:max-w-72', props.class)">
      <SheetHeader class="flex items-center justify-between border-b border-border px-4 py-3">
        <slot name="header">
          <SheetTitle>{{ title }}</SheetTitle>
          <SheetDescription v-if="title" class="sr-only">{{ title }}</SheetDescription>
        </slot>
        <SheetClose as-child>
          <XButton variant="ghost" color="neutral" size="sm" aria-label="关闭">✕</XButton>
        </SheetClose>
      </SheetHeader>
      <div class="flex-1 overflow-auto px-4 py-3 text-sm">
        <slot name="content" />
      </div>
      <SheetFooter v-if="$slots.footer" class="border-t border-border px-4 py-3">
        <slot name="footer" />
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
