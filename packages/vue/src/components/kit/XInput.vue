<script setup lang="ts">
/**
 * XInput 输入框：shadcn-vue input 原子的二次封装。
 * 支持前缀/后缀图标、前后置标签（addon）与 error / warning 校验状态。
 */
import type { HTMLAttributes } from 'vue'
import { useTemplateRef } from 'vue'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type InputSize = 'sm' | 'md'
type InputStatus = 'error' | 'warning'

const props = withDefaults(defineProps<{
  /** 控件尺寸 */
  size?: InputSize
  /** 校验状态 */
  status?: InputStatus
  /** 占位提示文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 最大输入长度 */
  maxLength?: number
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
})

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-7 px-2 text-sm',
  md: 'h-9 px-3 text-sm',
}

const statusClasses: Record<InputStatus, string> = {
  error: 'border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20',
  warning: 'border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20',
}

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

/** 使输入框获得焦点 */
function focus() {
  inputRef.value?.focus()
}

/** 使输入框失去焦点 */
function blur() {
  inputRef.value?.blur()
}

/** 选中输入框内容 */
function select() {
  inputRef.value?.select()
}

defineExpose({ focus, blur, select })
</script>

<template>
  <span class="flex w-full items-stretch">
    <span
      v-if="$slots.addonBefore"
      class="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground"
    >
      <slot name="addonBefore" />
    </span>
    <span class="relative flex w-full min-w-0 flex-1 items-center" :class="cn($slots.addonBefore && '[&_input]:rounded-l-none', $slots.addonAfter && '[&_input]:rounded-r-none')">
      <span v-if="$slots.prefix" class="pointer-events-none absolute left-3 flex items-center text-muted-foreground [&_svg]:size-4">
        <slot name="prefix" />
      </span>
      <Input
        ref="inputRef"
        :class="cn(
          sizeClasses[size],
          $slots.prefix && 'pl-9',
          $slots.suffix && 'pr-9',
          status && statusClasses[status],
          props.class,
        )"
        :disabled="disabled"
        :maxlength="maxLength"
        :placeholder="placeholder"
      />
      <span v-if="$slots.suffix" class="pointer-events-none absolute right-3 flex items-center text-muted-foreground [&_svg]:size-4">
        <slot name="suffix" />
      </span>
    </span>
    <span
      v-if="$slots.addonAfter"
      class="inline-flex items-center rounded-r-lg border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground"
    >
      <slot name="addonAfter" />
    </span>
  </span>
</template>
