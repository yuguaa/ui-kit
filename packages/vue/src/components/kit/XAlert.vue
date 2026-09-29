<script setup lang="ts">
/**
 * XAlert 警告提示：展示需要关注的信息，提供四种语义。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { CircleAlert, CircleCheck, Info, OctagonX, X } from '@lucide/vue'
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

type AlertType = 'success' | 'info' | 'warning' | 'error'

const props = withDefaults(defineProps<{
  /** 提示类型 */
  type?: AlertType
  /** 提示标题 */
  message?: string
  /** 辅助说明文字 */
  description?: string
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 是否显示图标 */
  showIcon?: boolean
  class?: HTMLAttributes['class']
}>(), {
  type: 'info',
  closable: false,
  showIcon: false,
})

const emit = defineEmits<{
  /** 点击关闭按钮时的回调 */
  close: [event: MouseEvent]
}>()

const visible = ref(true)

const typeClasses: Record<AlertType, string> = {
  success: 'bg-success-1 text-success-8',
  info: 'bg-info-1 text-info-8',
  warning: 'bg-warning-1 text-warning-8',
  error: 'bg-error-1 text-error-8',
}

const icons: Record<AlertType, typeof CircleCheck> = {
  success: CircleCheck,
  info: Info,
  warning: CircleAlert,
  error: OctagonX,
}

function handleClose(event: MouseEvent) {
  visible.value = false
  emit('close', event)
}
</script>

<template>
  <Alert v-if="visible" :class="cn('flex items-start gap-2.5', typeClasses[type], props.class)">
    <component :is="icons[type]" v-if="showIcon" class="mt-0.5 size-4 shrink-0" />
    <div class="flex min-w-0 flex-1 flex-col gap-0.5">
      <AlertTitle v-if="message != null || $slots.message"><slot name="message">{{ message }}</slot></AlertTitle>
      <AlertDescription v-if="description != null || $slots.description">
        <slot name="description">{{ description }}</slot>
      </AlertDescription>
    </div>
    <AlertAction v-if="closable">
      <XButton
        variant="ghost"
        color="neutral"
        size="sm"
        aria-label="关闭"
        class="h-6 w-6 shrink-0 p-0"
        @click="handleClose"
      >
        <X class="size-3.5" />
      </XButton>
    </AlertAction>
  </Alert>
</template>
