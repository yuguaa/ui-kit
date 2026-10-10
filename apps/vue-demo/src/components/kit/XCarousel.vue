<script setup lang="ts">
/**
 * XCarousel 轮播：多张内容轮播展示。
 * 基于 embla，结构对齐 Nuxt UI：root → viewport → container → item，附带 controls（arrows / dots）。
 * 支持自动播放、循环、前后控制、指示点、纵向轮播、fade、autoHeight、autoScroll、classNames 与 wheelGestures。
 */
import type { Component, HTMLAttributes } from 'vue'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { Primitive } from 'reka-ui'
import XButton from '@/components/kit/XButton.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { createAutoScrollPlugin, type XCarouselAutoScrollOptions } from './auto-scroll-plugin'
import { createClassNamesPlugin, type XCarouselClassNamesOptions } from './class-names-plugin'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface CarouselUi {
  root?: string
  viewport?: string
  container?: string
  item?: string
  controls?: string
  arrows?: string
  prev?: string
  next?: string
  dots?: string
  dot?: string
}

export interface CarouselDataItem {
  /** 轮播项 key */
  key?: string
  class?: HTMLAttributes['class']
  ui?: { item?: string }
  [key: string]: any
}

defineOptions({ name: 'XCarousel', inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 轮播项数组 */
  items?: CarouselDataItem[]
  /** 自动播放 */
  autoplay?: boolean
  /** 自动播放间隔（ms） */
  interval?: number
  /** 循环播放 */
  loop?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示左右切换按钮 */
  arrows?: boolean
  /** 是否显示指示点 */
  dots?: boolean
  /** 轮播方向 */
  orientation?: 'horizontal' | 'vertical'
  /** 淡入淡出切换：每次只显示当前项 */
  fade?: boolean
  /** 容器高度跟随当前项 */
  autoHeight?: boolean
  /** 连续滚动 */
  autoScroll?: boolean | XCarouselAutoScrollOptions
  /** 类名钩子：loop / draggable / dragging / snapped / inView */
  classNames?: boolean | XCarouselClassNamesOptions
  /** 滚轮手势切换 */
  wheelGestures?: boolean | { forceWheelAxis?: 'x' | 'y' }
  /** 上一页按钮配置（XButton 属性） */
  prev?: Record<string, any>
  /** 上一页按钮图标（XIcon 图标名或组件） */
  prevIcon?: string | Component
  /** 下一页按钮配置（XButton 属性） */
  next?: Record<string, any>
  /** 下一页按钮图标（XIcon 图标名或组件） */
  nextIcon?: string | Component
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: CarouselUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  autoplay: false,
  interval: 3000,
  loop: true,
  disabled: false,
  arrows: true,
  dots: false,
  orientation: 'horizontal',
  fade: false,
  autoHeight: false,
  autoScroll: false,
  classNames: false,
  wheelGestures: false,
})

const emit = defineEmits<{
  /** 下一张 */
  next: []
  /** 上一张 */
  prev: []
  /** 选中项变化 */
  select: [index: number]
}>()

const emblaOptions = ref(buildEmblaOptions())
const emblaPlugins = ref<any[]>(buildEmblaPlugins())

function buildEmblaOptions(): { loop: boolean; align: 'center' | 'start'; containScroll?: false; axis: 'x' | 'y' } {
  return {
    ...(props.fade ? { align: 'center' as const, containScroll: false as const } : { align: 'start' as const }),
    loop: props.loop,
    axis: props.orientation === 'horizontal' ? ('x' as const) : ('y' as const),
  }
}

function buildEmblaPlugins(): any[] {
  const plugins: any[] = []
  if (props.autoplay) {
    plugins.push(Autoplay({ delay: props.interval, stopOnInteraction: true }))
  }
  if (props.autoScroll) {
    plugins.push(createAutoScrollPlugin(typeof props.autoScroll === 'boolean' ? {} : props.autoScroll))
  }
  if (props.classNames) {
    plugins.push(createClassNamesPlugin(typeof props.classNames === 'boolean' ? {} : props.classNames))
  }
  return plugins
}

watch(
  () => [props.fade, props.loop, props.orientation],
  () => {
    emblaOptions.value = buildEmblaOptions()
    emblaApi.value?.reInit(emblaOptions.value, emblaPlugins.value)
  },
)

watch(
  () => [props.autoplay, props.interval, props.autoScroll, props.classNames],
  () => {
    emblaPlugins.value = buildEmblaPlugins()
    emblaApi.value?.reInit(emblaOptions.value, emblaPlugins.value)
  },
)

const emblaCarousel = useEmblaCarousel(emblaOptions, emblaPlugins)
const emblaRef = emblaCarousel[0]
const emblaApi = emblaCarousel[1]

const containerRef = ref<HTMLDivElement>()
const selectedIndex = ref(0)
const canScrollPrev = ref(false)
const canScrollNext = ref(false)
const scrollSnaps = ref<number[]>([])

/** 同步选中项状态与 autoHeight 容器高度 */
function onSelect(api: NonNullable<typeof emblaApi.value>) {
  canScrollNext.value = api.canScrollNext() || false
  canScrollPrev.value = api.canScrollPrev() || false
  selectedIndex.value = api.selectedScrollSnap() || 0
  syncAutoHeight(api)
  emit('select', selectedIndex.value)
}

function onInit(api: NonNullable<typeof emblaApi.value>) {
  scrollSnaps.value = api.scrollSnapList() || []
  onSelect(api)
}

function syncAutoHeight(api: NonNullable<typeof emblaApi.value>) {
  const container = containerRef.value
  if (!container) return
  if (!props.autoHeight) {
    container.style.height = ''
    return
  }
  const slide = api.slideNodes()[api.selectedScrollSnap()]
  if (slide) container.style.height = `${slide.offsetHeight}px`
}

onMounted(() => {
  if (!emblaApi.value) return
  emblaApi.value.on('init', onInit)
  emblaApi.value.on('reInit', onInit)
  emblaApi.value.on('select', onSelect)
  /* embla 创建时同步发出的 init 事件无法在 onMounted 注册前收到，主动同步一次状态 */
  onInit(emblaApi.value)
})

onBeforeUnmount(() => {
  if (!emblaApi.value) return
  emblaApi.value.off('init', onInit)
  emblaApi.value.off('reInit', onInit)
  emblaApi.value.off('select', onSelect)
})

/** 上一张 */
function scrollPrev() {
  emblaApi.value?.scrollPrev()
  emit('prev')
}

/** 下一张 */
function scrollNext() {
  emblaApi.value?.scrollNext()
  emit('next')
}

function scrollTo(index: number) {
  emblaApi.value?.scrollTo(index)
  /* 滚动后把焦点还给视口，键盘导航继续可用 */
  emblaRef.value?.focus({ preventScroll: true })
}

function onKeyDown(event: KeyboardEvent) {
  if (props.disabled) return
  const prevKey = props.orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp'
  const nextKey = props.orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown'
  if (event.key === prevKey) {
    event.preventDefault()
    scrollPrev()
    return
  }
  if (event.key === nextKey) {
    event.preventDefault()
    scrollNext()
  }
}

let lastWheelTime = 0

function onWheel(event: WheelEvent) {
  if (!props.wheelGestures || !emblaApi.value) return
  event.preventDefault()
  const now = performance.now()
  /* 与 embla wheel-gestures 插件一致：250ms 节流 */
  if (now - lastWheelTime < 250) return
  lastWheelTime = now
  const forceWheelAxis = typeof props.wheelGestures === 'object' ? props.wheelGestures.forceWheelAxis : undefined
  let delta: number
  if (forceWheelAxis === 'x') delta = event.deltaX
  else if (forceWheelAxis === 'y') delta = event.deltaY
  else if (props.orientation === 'horizontal') delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX
  else delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
  if (delta === 0) return
  if (delta > 0) scrollNext()
  else scrollPrev()
}

/** 图标渲染组件：字符串走 XIcon，否则原样渲染 */
function iconComponent(icon: string | Component): Component {
  return typeof icon === 'string' ? XIcon : icon
}

/** 字符串图标传给 XIcon 的 name */
function iconProps(icon: string | Component): Record<string, unknown> {
  return typeof icon === 'string' ? { name: icon as never } : {}
}

/** fade 模式下当前项显示、其余项隐藏 */
function fadeItemClass(index: number): string {
  if (!props.fade) return ''
  const selected = selectedIndex.value % Math.max(props.items.length, 1)
  return index === selected ? 'opacity-100' : 'opacity-0'
}

defineExpose({ next: scrollNext, prev: scrollPrev })
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :as="as ?? 'div'"
    role="region"
    aria-roledescription="carousel"
    :data-orientation="orientation"
    data-slot="root"
    tabindex="0"
    :class="cn('relative focus:outline-none', ui?.root, props.class)"
    @keydown="onKeyDown"
    @wheel="onWheel"
  >
    <div ref="emblaRef" data-slot="viewport" tabindex="-1" :class="cn('overflow-hidden', ui?.viewport)">
      <div
        ref="containerRef"
        data-slot="container"
        :class="cn(
          'flex items-start',
          orientation === 'horizontal' ? '-ms-4 flex-row' : '-mt-4 flex-col',
          ui?.container,
        )"
      >
        <div
          v-for="(item, index) in items"
          :key="item.key ?? index"
          role="group"
          aria-roledescription="slide"
          data-slot="item"
          :class="cn(
            'min-w-0 shrink-0 basis-full',
            orientation === 'horizontal' ? 'ps-4' : 'pt-4',
            fade && 'transition-opacity duration-300',
            fadeItemClass(index),
            ui?.item,
            item.ui?.item,
            item.class,
          )"
        >
          <slot :item="item" :index="index">
            <slot name="item" :item="item" :index="index" />
          </slot>
        </div>
      </div>
    </div>

    <div v-if="arrows || dots" data-slot="controls" :class="cn('', ui?.controls)">
      <div v-if="arrows" data-slot="arrows" :class="cn('', ui?.arrows)">
        <XButton
          variant="outline"
          color="neutral"
          :disabled="!canScrollPrev"
          aria-label="上一张"
          data-slot="prev"
          v-bind="typeof prev === 'object' ? prev : undefined"
          :class="cn(
            'absolute rounded-full',
            orientation === 'horizontal' ? 'top-1/2 start-4 -translate-y-1/2 sm:-start-12' : 'top-4 left-1/2 -translate-x-1/2 rotate-90 sm:-top-12',
            ui?.prev,
          )"
          @click="scrollPrev"
        >
          <template #leading>
            <component :is="iconComponent(prevIcon ?? ChevronLeft)" v-bind="iconProps(prevIcon ?? ChevronLeft)" class="size-5" />
          </template>
        </XButton>
        <XButton
          variant="outline"
          color="neutral"
          :disabled="!canScrollNext"
          aria-label="下一张"
          data-slot="next"
          v-bind="typeof next === 'object' ? next : undefined"
          :class="cn(
            'absolute rounded-full',
            orientation === 'horizontal' ? 'top-1/2 end-4 -translate-y-1/2 sm:-end-12' : 'bottom-4 left-1/2 -translate-x-1/2 rotate-90 sm:-bottom-12',
            ui?.next,
          )"
          @click="scrollNext"
        >
          <template #leading>
            <component :is="iconComponent(nextIcon ?? ChevronRight)" v-bind="iconProps(nextIcon ?? ChevronRight)" class="size-5" />
          </template>
        </XButton>
      </div>

      <div
        v-if="dots"
        role="tablist"
        aria-label="指示点"
        data-slot="dots"
        :class="cn('absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3', ui?.dots)"
      >
        <button
          v-for="(_, index) in scrollSnaps"
          :key="index"
          type="button"
          role="tab"
          :aria-label="`跳转到第 ${index + 1} 张`"
          :aria-selected="selectedIndex === index"
          :data-state="selectedIndex === index ? 'active' : undefined"
          data-slot="dot"
          :class="cn(
            'size-3 cursor-pointer rounded-full bg-accent outline-foreground/25 focus-visible:outline-3 data-[state=active]:bg-foreground',
            ui?.dot,
          )"
          @click="scrollTo(index)"
        />
      </div>
    </div>
  </Primitive>
</template>
