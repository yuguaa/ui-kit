<script setup lang="ts">
/**
 * XSplitter 分割面板：可拖拽调整大小的分栏面板。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref, useTemplateRef } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 方向 */
  orientation?: 'horizontal' | 'vertical'
  /** 最小尺寸（百分比） */
  minSize?: number
  /** 默认尺寸（百分比） */
  defaultSize?: number
  /** 受控尺寸（百分比） */
  size?: number
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
  minSize: 20,
  defaultSize: 50,
})

const emit = defineEmits<{
  /** 调整尺寸回调 */
  resize: [size: number]
}>()

const size = ref(props.defaultSize)
const dragging = ref(false)
const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
const currentSize = computed(() => props.size ?? size.value)

const isHorizontal = computed(() => props.orientation === 'horizontal')

/** 调整尺寸 */
function resize(next: number) {
  const clamped = Math.min(100 - props.minSize, Math.max(props.minSize, next))
  if (props.size == null) size.value = clamped
  emit('resize', clamped)
}

function onPointerDown(event: PointerEvent) {
  dragging.value = true
  document.body.style.cursor = isHorizontal.value ? 'col-resize' : 'row-resize'
  document.body.style.userSelect = 'none'
  event.preventDefault()
}

function onPointerMove(event: PointerEvent) {
  if (!dragging.value || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const ratio = isHorizontal.value
    ? ((event.clientX - rect.left) / rect.width) * 100
    : ((event.clientY - rect.top) / rect.height) * 100
  resize(ratio)
}

function onPointerUp() {
  dragging.value = false
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

defineExpose({ resize })
</script>

<template>
  <div
    ref="containerRef"
    :class="cn(
      'flex overflow-hidden rounded-lg border border-border',
      isHorizontal ? 'h-full flex-row' : 'flex-col',
      props.class,
    )"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
  >
    <div :style="{ flexBasis: `${currentSize}%` }" class="min-h-0 min-w-0 overflow-auto">
      <slot name="first" />
    </div>
    <div
      role="separator"
      :aria-orientation="orientation"
      :class="cn(
        'shrink-0 bg-border transition-colors hover:bg-primary-5',
        isHorizontal ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize',
      )"
      @pointerdown="onPointerDown"
    />
    <div class="min-h-0 min-w-0 flex-1 overflow-auto">
      <slot name="second" />
    </div>
  </div>
</template>
