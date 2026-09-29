<script setup lang="ts">
/**
 * XInputRating 评分：以星标形式进行评分输入，支持半星与自定义图标插槽。
 */
import type { HTMLAttributes } from 'vue'
import { Star } from '@lucide/vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 评分值 */
  modelValue?: number
  /** 最大分值 */
  max?: number
  /** 允许半星 */
  allowHalf?: boolean
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  modelValue: 0,
  max: 5,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  /** 评分变化回调 */
  change: [value: number]
}>()

function pick(index: number, event: MouseEvent) {
  if (props.disabled) return
  const target = event.currentTarget as HTMLElement
  const half = props.allowHalf && event.clientX > target.getBoundingClientRect().left + target.offsetWidth / 2
  const next = half && props.allowHalf ? index + 0.5 : index + 1
  emit('update:modelValue', next)
  emit('change', next)
}
</script>

<template>
  <span
    role="radiogroup"
    aria-label="rating"
    :class="cn('inline-flex items-center gap-0.5', disabled && 'pointer-events-none opacity-60', props.class)"
  >
    <button
      v-for="index in max"
      :key="index"
      type="button"
      :aria-label="`${index} 星`"
      class="cursor-pointer outline-none transition-colors hover:text-primary-6 focus-visible:text-primary-6"
      @click="pick(index - 1, $event)"
    >
      <slot
        name="item"
        :index="index - 1"
        :filled="modelValue >= index"
        :half="allowHalf && modelValue >= index - 0.5 && modelValue < index"
      >
        <span class="relative inline-flex" aria-hidden="true">
          <Star class="size-5 text-border" />
          <Star
            v-if="allowHalf && modelValue >= index - 0.5 && modelValue < index"
            class="absolute inset-0 size-5 fill-warning-6 text-warning-6 [clip-path:inset(0_50%_0_0)]"
          />
          <Star v-if="modelValue >= index" class="absolute inset-0 size-5 fill-warning-6 text-warning-6" />
        </span>
      </slot>
    </button>
  </span>
</template>
