<script setup lang="ts">
/**
 * XStepper 步骤条：引导用户按步骤完成流程。
 * 受控（current 由外部维护）与非受控（next / prev / reset）两种用法。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { Check } from '@lucide/vue'
import { cn } from '@/lib/utils'

export interface StepItem {
  /** 步骤标题 */
  title: string
  /** 步骤描述 */
  description?: string
}

const props = withDefaults(defineProps<{
  /** 步骤项数组 */
  items: StepItem[]
  /** 当前步骤 */
  current?: number
  /** 初始步骤 */
  defaultCurrent?: number
  /** 方向 */
  orientation?: 'horizontal' | 'vertical'
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  defaultCurrent: 0,
  orientation: 'horizontal',
  disabled: false,
})

const emit = defineEmits<{
  /** 步骤变化回调 */
  change: [current: number]
}>()

const innerCurrent = ref(props.defaultCurrent)

function go(next: number) {
  if (next < 0 || next >= props.items.length || props.disabled) return
  if (props.current == null) innerCurrent.value = next
  if (next !== (props.current ?? innerCurrent.value)) emit('change', next)
}

/** 下一步 */
function next() {
  go((props.current ?? innerCurrent.value) + 1)
}

/** 上一步 */
function prev() {
  go((props.current ?? innerCurrent.value) - 1)
}

/** 重置 */
function reset() {
  go(0)
}

defineExpose({ next, prev, reset })
</script>

<template>
  <ol
    :class="cn(
      orientation === 'horizontal' ? 'flex items-start' : 'flex flex-col',
      disabled && 'pointer-events-none opacity-50',
      props.class,
    )"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="cn('relative flex gap-3', orientation === 'horizontal' ? 'flex-1' : 'pb-6 last:pb-0')"
    >
      <span class="flex flex-col items-center">
        <span
          :class="cn(
            'flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors',
            index < (current ?? innerCurrent) && 'border-primary-6 bg-primary-6 text-white',
            index === (current ?? innerCurrent) && 'border-primary-6 bg-primary-1 text-primary-7',
            index > (current ?? innerCurrent) && 'border-border bg-muted text-muted-foreground',
          )"
        >
          <Check v-if="index < (current ?? innerCurrent)" class="size-3.5" />
          <template v-else>{{ index + 1 }}</template>
        </span>
        <span
          v-if="index < items.length - 1"
          :class="cn(
            orientation === 'horizontal' ? 'absolute top-3.5 left-7 h-px w-[calc(100%-3.5rem)]' : 'absolute top-7 left-3.5 h-[calc(100%-3.5rem)] w-px',
            index < (current ?? innerCurrent) ? 'bg-primary-6' : 'bg-border',
          )"
        />
      </span>
      <span class="flex flex-col gap-0.5">
        <span :class="cn('text-sm font-medium', index > (current ?? innerCurrent) && 'text-muted-foreground')">
          <slot name="default" :item="item" :index="index">{{ item.title }}</slot>
        </span>
        <span v-if="item.description" class="text-xs text-muted-foreground">{{ item.description }}</span>
      </span>
    </li>
  </ol>
</template>
