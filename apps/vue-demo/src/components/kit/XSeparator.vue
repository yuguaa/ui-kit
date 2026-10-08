<script setup lang="ts">
/**
 * XSeparator 分割线：在内容之间插入水平或垂直分隔，可带标签与自定义线条样式。
 * 说明：shadcn-vue 的 separator 原子不转发插槽，带标签形态无法通过原子承载内容，
 * 因此根节点由本组件渲染，线条样式与原子保持一致。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type SeparatorOrientation = 'horizontal' | 'vertical'
type SeparatorPosition = 'start' | 'center' | 'end'
type SeparatorType = 'solid' | 'dashed' | 'dotted'

const props = withDefaults(defineProps<{
  /** 方向 */
  orientation?: SeparatorOrientation
  /** 线条颜色 */
  color?: string
  /** 标签文字（也可用默认插槽） */
  label?: string
  /** 标签位置（仅水平方向带标签时生效） */
  position?: SeparatorPosition
  /** 线条样式 */
  type?: SeparatorType
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
  position: 'center',
  type: 'solid',
})

const slots = defineSlots<{ default?: () => unknown }>()

/** 是否渲染为带标签的形态 */
const withLabel = computed(
  () => props.orientation === 'horizontal' && (Boolean(slots.default) || props.label != null),
)

/** 虚线 / 点线样式 */
const typeClasses: Record<SeparatorType, string> = {
  solid: '',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
}

const rootClasses = computed(() => {
  if (withLabel.value) {
    return 'flex items-center gap-3 bg-transparent text-xs text-muted-foreground'
  }
  if (props.type === 'solid') {
    return cn(
      'shrink-0 bg-border',
      props.orientation === 'horizontal' ? 'h-px w-full' : 'w-px self-stretch',
    )
  }
  return cn(
    'shrink-0 bg-transparent',
    typeClasses[props.type],
    props.orientation === 'horizontal' ? 'h-px w-full border-t' : 'w-px self-stretch border-l',
  )
})

const labelLineClasses = computed(() => cn('flex-1 border-t', typeClasses[props.type]))
const lineStyle = computed(() => (props.color ? { borderColor: props.color } : undefined))
const rootStyle = computed(() =>
  props.color && !withLabel.value && props.type === 'solid' ? { backgroundColor: props.color } : undefined,
)
</script>

<template>
  <div
    role="separator"
    data-slot="separator"
    :aria-orientation="orientation"
    :class="cn(rootClasses, props.class)"
    :style="rootStyle"
  >
    <template v-if="withLabel">
      <span v-if="position !== 'start'" :class="labelLineClasses" :style="lineStyle" />
      <span class="flex shrink-0 items-center gap-1.5">
        <slot>{{ label }}</slot>
      </span>
      <span v-if="position !== 'end'" :class="labelLineClasses" :style="lineStyle" />
    </template>
  </div>
</template>
