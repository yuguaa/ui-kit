<script setup lang="ts">
/**
 * XSplitter 分割面板：可拖拽调整大小的分栏面板。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref, useTemplateRef } from 'vue'
import { PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from '@lucide/vue'
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
  /** 拖拽越过边界时折叠被压缩一侧的面板 */
  collapsible?: boolean
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
  minSize: 20,
  defaultSize: 50,
  collapsible: false,
})

const emit = defineEmits<{
  /** 调整尺寸回调（折叠时触发 0 / 100，展开时恢复原尺寸） */
  resize: [size: number]
}>()

const size = ref(props.defaultSize)
const collapsed = ref<'first' | 'second' | null>(null)
const prevSize = ref(props.defaultSize)
const dragging = ref(false)
const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
const currentSize = computed(() => props.size ?? size.value)

const isHorizontal = computed(() => props.orientation === 'horizontal')

/** 折叠面板：second 折叠后 first 占满，resize 事件收到 100 */
function collapse(side: 'first' | 'second') {
  if (collapsed.value === side) return
  prevSize.value = currentSize.value
  collapsed.value = side
  emit('resize', side === 'first' ? 0 : 100)
}

/** 展开面板：恢复折叠前的尺寸 */
function expand(side: 'first' | 'second') {
  if (collapsed.value !== side) return
  collapsed.value = null
  if (props.size == null) size.value = prevSize.value
  emit('resize', prevSize.value)
}

/** 调整尺寸 */
function resize(next: number) {
  const clamped = Math.min(100 - props.minSize, Math.max(props.minSize, next))
  if (props.size == null) size.value = clamped
  emit('resize', clamped)
}

function onPointerDown(event: PointerEvent) {
  if (collapsed.value) expand(collapsed.value)
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
  /* 越过一半最小尺寸即视为拖到边界，折叠被压缩一侧 */
  if (props.collapsible && ratio < props.minSize / 2) return collapse('first')
  if (props.collapsible && ratio > 100 - props.minSize / 2) return collapse('second')
  if (collapsed.value) expand(collapsed.value)
  resize(ratio)
}

function onPointerUp() {
  dragging.value = false
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

/* 折叠面板布局：被折叠一侧为 0，first 在 second 折叠后占满 */
const firstStyle = computed(() =>
  collapsed.value === 'first'
    ? { flex: '0 0 0%' }
    : collapsed.value === 'second'
      ? { flex: '1 1 0%' }
      : { flexBasis: `${currentSize.value}%` },
)

const secondStyle = computed(() => (collapsed.value === 'second' ? { flex: '0 0 0%' } : undefined))

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
    <div :style="firstStyle" class="min-h-0 min-w-0 overflow-auto">
      <slot name="first" />
    </div>
    <div
      role="separator"
      :aria-orientation="orientation"
      :class="cn(
        'relative shrink-0 bg-border transition-colors hover:bg-primary-5',
        isHorizontal ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize',
      )"
      @pointerdown="onPointerDown"
    >
      <template v-if="collapsible">
        <button
          type="button"
          :aria-label="collapsed === 'first' ? '展开面板' : '折叠面板'"
          :class="cn(
            'absolute z-10 flex size-4 cursor-pointer items-center justify-center rounded-full border border-border bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
            isHorizontal
              ? 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2'
              : 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
          )"
          @pointerdown.stop
          @click="collapsed === 'first' ? expand('first') : collapse('first')"
        >
          <PanelLeftOpen v-if="collapsed === 'first'" class="size-3" :class="isHorizontal ? '' : 'rotate-90'" />
          <PanelLeftClose v-else class="size-3" :class="isHorizontal ? '' : '-rotate-90'" />
        </button>
        <button
          type="button"
          :aria-label="collapsed === 'second' ? '展开面板' : '折叠面板'"
          :class="cn(
            'absolute z-10 flex size-4 cursor-pointer items-center justify-center rounded-full border border-border bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
            isHorizontal
              ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2'
              : 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
          )"
          @pointerdown.stop
          @click="collapsed === 'second' ? expand('second') : collapse('second')"
        >
          <PanelRightOpen v-if="collapsed === 'second'" class="size-3" :class="isHorizontal ? '' : '-rotate-90'" />
          <PanelRightClose v-else class="size-3" :class="isHorizontal ? '' : 'rotate-90'" />
        </button>
      </template>
    </div>
    <div :style="secondStyle" class="min-h-0 min-w-0 flex-1 overflow-auto">
      <slot name="second" />
    </div>
  </div>
</template>
