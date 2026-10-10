<script setup lang="ts">
/**
 * XScrollArea 滚动区域：内容溢出时可滚动的区域。
 * 结构对齐 Nuxt UI：root（自身滚动）→ viewport → item；支持 items 数组、虚拟滚动与边缘阴影。
 */
import type { Component, CSSProperties, HTMLAttributes } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useScroll } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ScrollAreaUi {
  root?: string
  viewport?: string
  item?: string
}

/** 虚拟滚动配置 */
export interface ScrollAreaVirtualizeOptions {
  /** 每项沿滚动方向的估计尺寸（px），可传函数按索引估算，默认 100 */
  estimateSize?: number | ((index: number) => number)
  /** 可视区外预渲染的项数，默认 12 */
  overscan?: number
  /** 返回项 key */
  getItemKey?: (index: number) => string | number
}

defineOptions({ name: 'XScrollArea', inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 滚动方向 */
  orientation?: 'vertical' | 'horizontal' | 'both'
  /** 项数组 */
  items?: any[]
  /** 启用虚拟滚动 */
  virtualize?: boolean | ScrollAreaVirtualizeOptions
  /** 滚动边缘阴影，对象形态可配置阴影尺寸 */
  shadow?: boolean | { size?: number }
  /** 区域高度 */
  height?: number | string
  /** 主题插槽类名 */
  ui?: ScrollAreaUi
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'vertical',
  virtualize: false,
  shadow: false,
})

const emit = defineEmits<{
  /** 滚动状态变化 */
  scroll: [isScrolling: boolean]
}>()

const rootEl = ref<HTMLElement>()

/** 函数 ref：兼容组件实例（取 $el）与普通元素 */
function setRootRef(el: unknown) {
  rootEl.value = (el as { $el?: HTMLElement } | null)?.$el ?? (el as HTMLElement | null) ?? undefined
}

const isVertical = computed(() => props.orientation !== 'horizontal')

const heightStyle = computed<CSSProperties | undefined>(() =>
  props.height != null ? { height: typeof props.height === 'number' ? `${props.height}px` : props.height } : undefined,
)

/* ============================ 滚动阴影 ============================ */

const { arrivedState } = useScroll(rootEl, { throttle: 100 })

const shadowStyle = computed<CSSProperties | undefined>(() => {
  if (!props.shadow) return undefined
  const el = rootEl.value
  const size = `${typeof props.shadow === 'object' && props.shadow.size != null ? props.shadow.size : 24}px`
  const horizontal = props.orientation === 'horizontal'
  const showStart = horizontal ? !arrivedState.left : !arrivedState.top
  const showEnd = horizontal ? !arrivedState.right : !arrivedState.bottom
  if (!showStart && !showEnd) return undefined
  const overflows = el
    ? horizontal ? el.scrollWidth > el.clientWidth : el.scrollHeight > el.clientHeight
    : false
  if (!overflows) return undefined
  const angle = horizontal ? '90deg' : '180deg'
  if (showStart && showEnd) {
    return { maskImage: `linear-gradient(${angle}, transparent, #000 ${size}, #000 calc(100% - ${size}), transparent)` }
  }
  if (showStart) {
    return { maskImage: `linear-gradient(${angle}, transparent, #000 ${size})` }
  }
  return { maskImage: `linear-gradient(${angle}, #000, #000 calc(100% - ${size}), transparent)` }
})

/* ============================ 虚拟滚动 ============================ */

const isVirtual = computed(() => !!props.virtualize)
const virtualOptions = computed(() => (typeof props.virtualize === 'object' ? props.virtualize : {}))
const count = computed(() => props.items?.length ?? 0)

function estimateSize(index: number): number {
  const estimate = virtualOptions.value.estimateSize ?? 100
  return typeof estimate === 'function' ? estimate(index) : estimate
}

/** 当前项数组：虚拟分支与非虚拟分支统一使用 */
const currentItems = computed<any[]>(() => props.items ?? [])
/** 前缀和：prefix[i] 为前 i 项的累计尺寸 */
const prefix = computed(() => {
  const result: number[] = [0]
  for (let i = 0; i < count.value; i++) result.push(result[i]! + estimateSize(i))
  return result
})

const totalSize = computed(() => prefix.value[count.value] ?? 0)
const scrollOffset = ref(0)
const viewportSize = ref(0)
const overscan = computed(() => virtualOptions.value.overscan ?? 12)

function lowerBound(values: number[], target: number): number {
  let lo = 0
  let hi = values.length
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (values[mid]! < target) lo = mid + 1
    else hi = mid
  }
  return lo
}

interface VirtualItem {
  index: number
  start: number
  size: number
}

const virtualItems = computed<VirtualItem[]>(() => {
  if (!isVirtual.value) return []
  const startOffset = scrollOffset.value
  const endOffset = startOffset + viewportSize.value
  const start = Math.max(0, lowerBound(prefix.value, startOffset) - overscan.value)
  const end = Math.min(count.value, lowerBound(prefix.value, endOffset) + overscan.value)
  const result: VirtualItem[] = []
  for (let i = start; i < end; i++) {
    result.push({ index: i, start: prefix.value[i]!, size: estimateSize(i) })
  }
  return result
})

const virtualViewportStyle = computed<CSSProperties | undefined>(() => {
  if (!isVirtual.value) return undefined
  return isVertical.value
    ? { position: 'relative', height: `${totalSize.value}px` }
    : { position: 'relative', width: `${totalSize.value}px` }
})

function virtualItemStyle(item: VirtualItem): CSSProperties {
  return isVertical.value
    ? { position: 'absolute', top: `${item.start}px`, left: 0, right: 0, height: `${item.size}px` }
    : { position: 'absolute', left: `${item.start}px`, top: 0, bottom: 0, width: `${item.size}px` }
}

function itemKey(item: any, index: number): string | number {
  if (virtualOptions.value.getItemKey) return virtualOptions.value.getItemKey(index)
  if (item && typeof item === 'object' && 'id' in item) return item.id
  return index
}

/* ============================ 滚动状态 ============================ */

let scrollTimer: ReturnType<typeof setTimeout> | undefined

function onScroll() {
  const el = rootEl.value
  if (!el) return
  scrollOffset.value = isVertical.value ? el.scrollTop : el.scrollLeft
  viewportSize.value = isVertical.value ? el.clientHeight : el.clientWidth
  if (scrollTimer == null) emit('scroll', true)
  clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    scrollTimer = undefined
    emit('scroll', false)
  }, 150)
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  onScroll()
  resizeObserver = new ResizeObserver(() => onScroll())
  if (rootEl.value) resizeObserver.observe(rootEl.value)
})

onBeforeUnmount(() => {
  clearTimeout(scrollTimer)
  resizeObserver?.disconnect()
})

/** 滚动到指定位置（垂直为 top，水平为 left） */
function scrollTo(position: number) {
  if (!rootEl.value) return
  if (isVertical.value) rootEl.value.scrollTo({ top: position })
  else rootEl.value.scrollTo({ left: position })
}

defineExpose({ scrollTo })
</script>

<template>
  <Primitive
    :ref="setRootRef"
    v-bind="$attrs"
    :as="as ?? 'div'"
    :data-orientation="orientation"
    data-slot="root"
    :class="cn(
      'relative outline-primary-6/25 focus-visible:outline-3',
      orientation === 'vertical' && 'overflow-x-hidden overflow-y-auto',
      orientation === 'horizontal' && 'overflow-x-auto overflow-y-hidden',
      orientation === 'both' && 'overflow-auto',
      ui?.root,
      props.class,
    )"
    :style="[heightStyle, shadowStyle]"
    @scroll="onScroll"
  >
    <div
      v-if="isVirtual"
      data-slot="viewport"
      :class="cn('relative flex', isVertical ? 'flex-col' : 'flex-row', ui?.viewport)"
      :style="virtualViewportStyle"
    >
      <div
        v-for="virtualItem in virtualItems"
        :key="itemKey(currentItems[virtualItem.index], virtualItem.index)"
        :data-index="virtualItem.index"
        data-slot="item"
        :style="virtualItemStyle(virtualItem)"
        :class="cn(ui?.item)"
      >
        <slot :item="currentItems[virtualItem.index]" :index="virtualItem.index" />
      </div>
    </div>

    <div v-else data-slot="viewport" :class="cn('relative flex', isVertical ? 'flex-col' : 'flex-row', ui?.viewport)">
      <template v-if="items">
        <div v-for="(item, index) in items" :key="itemKey(item, index)" data-slot="item" :class="cn(ui?.item)">
          <slot :item="item" :index="index" />
        </div>
      </template>
      <slot v-else :item="{}" :index="0" />
    </div>
  </Primitive>
</template>
