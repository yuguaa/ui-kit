<script setup lang="ts">
/**
 * XModal 对话框：模态对话框，用于承载需要用户确认的信息或操作。
 * 底部操作区默认提供取消与确定按钮，可通过 footer 插槽自定义。
 */
import type { HTMLAttributes } from 'vue'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 是否显示对话框 */
  open: boolean
  /** 标题 */
  title?: string
  /** 辅助说明 */
  description?: string
  /** 对话框宽度 */
  width?: number
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
  /** 是否垂直居中显示 */
  centered?: boolean
  /** 确定按钮文字 */
  okText?: string
  /** 取消按钮文字 */
  cancelText?: string
  class?: HTMLAttributes['class']
}>(), {
  width: 520,
  maskClosable: true,
  centered: false,
  okText: '确 定',
  cancelText: '取 消',
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 点击确定按钮的回调 */
  ok: [event: MouseEvent]
  /** 点击取消按钮的回调 */
  cancel: [event: MouseEvent]
}>()

function onOpenChange(next: boolean) {
  if (!next && !props.maskClosable) return
  emit('update:open', next)
}
</script>

<template>
  <Dialog :open="open" @update:open="onOpenChange">
    <DialogContent
      :class="cn('p-0', centered && 'translate-y-0', !centered && 'top-24', props.class)"
      :style="{ width: `${width}px`, maxWidth: '90vw' }"
    >
      <DialogHeader class="border-b border-border px-5 py-4">
        <DialogTitle v-if="title != null || $slots.title"><slot name="title">{{ title }}</slot></DialogTitle>
        <DialogDescription v-if="description != null || $slots.description">
          <slot name="description">{{ description }}</slot>
        </DialogDescription>
      </DialogHeader>
      <div class="px-5 py-4 text-sm">
        <slot name="content" />
      </div>
      <DialogFooter class="border-t border-border px-5 py-3">
        <slot name="footer">
          <DialogClose as-child>
            <XButton variant="outline" color="neutral" @click="emit('cancel', $event)">{{ cancelText }}</XButton>
          </DialogClose>
          <DialogClose as-child>
            <XButton variant="solid" color="primary" @click="emit('ok', $event)">{{ okText }}</XButton>
          </DialogClose>
        </slot>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
