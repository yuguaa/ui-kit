<script setup lang="ts">
/**
 * XColorPicker 颜色选择器：饱和度/亮度色板 + 色相轨道拖拽选色。
 * 支持 hex / rgb / hsl / cmyk / lab 五种输出格式与五档尺寸。
 */
import type { Component, HTMLAttributes, MaybeRefOrGetter } from 'vue'
import { computed, nextTick, ref, toValue } from 'vue'
import { Primitive } from 'reka-ui'
import { useEventListener, watchPausable, watchThrottled } from '@vueuse/core'
import { cn } from '@/lib/utils'

type ColorPickerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ColorPickerFormat = 'hex' | 'rgb' | 'hsl' | 'cmyk' | 'lab'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ColorPickerUi {
  root?: string
  picker?: string
  selector?: string
  selectorBackground?: string
  selectorThumb?: string
  track?: string
  trackThumb?: string
}

interface HsvColor {
  h: number
  s: number
  v: number
}

interface HslColor {
  h: number
  s: number
  l: number
}

interface RgbColor {
  r: number
  g: number
  b: number
}

/* ---- 颜色空间转换 ---- */

/** HSL → HSV：与 Nuxt UI 相同的亮度补偿换算 */
function hslToHsv({ h, s, l }: HslColor): HsvColor {
  const x = s * (l < 50 ? l : 100 - l)
  const v = l + x / 100
  return { h, s: l === 0 ? s : (2 * x) / v, v }
}

function hsvToHsl({ h, s, v }: HsvColor): HslColor {
  const x = ((200 - s) * v) / 100
  return {
    h,
    s: x === 0 || x === 200 ? 0 : Math.round((s * v) / (x <= 100 ? x : 200 - x)),
    l: x / 2,
  }
}

function hslToRgb({ h, s, l }: HslColor): RgbColor {
  const c = ((100 - Math.abs(2 * l - 100)) / 100) * (s / 100)
  const hp = (((h % 360) + 360) % 360) / 60
  const x = c * (1 - Math.abs((hp % 2) - 1))
  const m = l / 100 - c / 2
  const [r1, g1, b1] =
    hp < 1 ? [c, x, 0] : hp < 2 ? [x, c, 0] : hp < 3 ? [0, c, x] : hp < 4 ? [0, x, c] : hp < 5 ? [x, 0, c] : [c, 0, x]
  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  }
}

function rgbToHsl({ r, g, b }: RgbColor): HslColor {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: l * 100 }
  const d = max - min
  const s = d / (1 - Math.abs(2 * l - 1))
  let h = 0
  if (max === rn) h = 60 * (((gn - bn) / d) % 6)
  else if (max === gn) h = 60 * ((bn - rn) / d + 2)
  else h = 60 * ((rn - gn) / d + 4)
  if (h < 0) h += 360
  return { h, s: s * 100, l: l * 100 }
}

function round1(value: number): number {
  return Math.round(value * 10) / 10
}

function round2(value: number): number {
  return Math.round(value * 100) / 100
}

/** RGB → Lab（D65 白点，百分比单位，与 colortranslator 输出一致） */
function rgbToLab({ r, g, b }: RgbColor): string {
  const pivot = (value: number) => {
    const n = value / 255
    return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92
  }
  const rl = pivot(r)
  const gl = pivot(g)
  const bl = pivot(b)
  const x = (0.4124 * rl + 0.3576 * gl + 0.1805 * bl) / 0.95047
  const y = 0.2126 * rl + 0.7152 * gl + 0.0722 * bl
  const z = (0.0193 * rl + 0.1192 * gl + 0.9505 * bl) / 1.08883
  const f = (value: number) => (value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116)
  const l = 116 * f(y) - 16
  const a = 500 * (f(x) - f(y))
  const bb = 200 * (f(y) - f(z))
  return `lab(${round2(l)}% ${round2(a)}% ${round2(bb)}%)`
}

/** HSV → 指定格式的颜色字符串 */
function formatHsv(value: HsvColor, format: ColorPickerFormat): string {
  const hsl = hsvToHsl(value)
  const rgb = hslToRgb(hsl)
  switch (format) {
    case 'rgb':
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    case 'hsl':
      return `hsl(${Math.round(hsl.h)}, ${round1(hsl.s)}%, ${round1(hsl.l)}%)`
    case 'cmyk': {
      const rn = rgb.r / 255
      const gn = rgb.g / 255
      const bn = rgb.b / 255
      const k = 1 - Math.max(rn, gn, bn)
      const c = k === 1 ? 0 : ((1 - rn - k) / (1 - k)) * 100
      const m = k === 1 ? 0 : ((1 - gn - k) / (1 - k)) * 100
      const y = k === 1 ? 0 : ((1 - bn - k) / (1 - k)) * 100
      return `cmyk(${round2(c)}%, ${round2(m)}%, ${round2(y)}%, ${round2(k * 100)}%)`
    }
    case 'lab':
      return rgbToLab(rgb)
    case 'hex':
    default:
      return `#${[rgb.r, rgb.g, rgb.b].map((n) => n.toString(16).padStart(2, '0')).join('').toUpperCase()}`
  }
}

/** 解析颜色字符串为 HSL；无法识别时回退白色（与 Nuxt UI 行为一致） */
function parseColor(input: string): HslColor {
  const trimmed = input.trim()
  const hexMatch = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(trimmed)
  if (hexMatch) {
    let hex = hexMatch[1]!
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('')
    return rgbToHsl({
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16),
    })
  }
  const rgbMatch = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/.exec(trimmed)
  if (rgbMatch) {
    return rgbToHsl({ r: Number(rgbMatch[1]), g: Number(rgbMatch[2]), b: Number(rgbMatch[3]) })
  }
  const hslMatch = /^hsl\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/.exec(trimmed)
  if (hslMatch) {
    return { h: Number(hslMatch[1]), s: Number(hslMatch[2]), l: Number(hslMatch[3]) }
  }
  return { h: 0, s: 0, l: 100 }
}

/* ---- 组件 ---- */

const props = withDefaults(defineProps<{
  /** 节流间隔（ms），拖拽过程中限制值更新频率 */
  throttle?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 默认颜色 */
  defaultValue?: string
  /** 输出格式 */
  format?: ColorPickerFormat
  /** 尺寸 */
  size?: ColorPickerSize
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: ColorPickerUi
  class?: HTMLAttributes['class']
}>(), {
  throttle: 50,
  disabled: false,
  defaultValue: '#FFFFFF',
  format: 'hex',
  size: 'md',
})

const modelValue = defineModel<string>()

/** 当前选择色（HSV），输入按 Nuxt UI 语义解析，输出按 format 序列化 */
const pickedColor = computed<HsvColor>({
  get() {
    return hslToHsv(parseColor(modelValue.value || props.defaultValue))
  },
  set(value) {
    modelValue.value = formatHsv(value, props.format)
  },
})

function normalizeHue(hue: number, dir: 'left' | 'right' = 'left'): number {
  if (dir === 'right') return (hue * 100) / 360
  return (hue / 100) * 360
}

function normalizeBrightness(brightness: number): number {
  return 100 - brightness
}

/** 指针拖拽：pointerdown 于容器开始，pointermove / pointerup 挂到 window */
function useColorDraggable(
  targetElement: MaybeRefOrGetter<HTMLElement | null>,
  containerElement: MaybeRefOrGetter<HTMLElement | null>,
  axis: 'x' | 'y' | 'both',
  initialPosition: { x: number; y: number },
) {
  const position = ref(initialPosition)
  let pressedDelta: { x: number; y: number } | undefined

  function start(event: PointerEvent) {
    if (props.disabled) return event.preventDefault()
    const container = toValue(containerElement)
    const target = toValue(targetElement)
    if (!target) return
    /* 按压起点：容器存在时以容器左上角为原点，否则用拖拽目标自身 */
    pressedDelta = {
      x: container ? container.getBoundingClientRect().left : target.getBoundingClientRect().left,
      y: container ? container.getBoundingClientRect().top : target.getBoundingClientRect().top,
    }
    move(event)
  }

  function move(event: PointerEvent) {
    if (!pressedDelta) return
    const container = toValue(containerElement)
    if (!container) return
    if (axis === 'x' || axis === 'both') {
      const width = container.scrollWidth || container.clientWidth
      if (width > 0) {
        position.value = {
          ...position.value,
          x: Math.min(Math.max(0, ((event.clientX - pressedDelta.x) / width) * 100), 100),
        }
      }
    }
    if (axis === 'y' || axis === 'both') {
      const height = container.scrollHeight || container.clientHeight
      if (height > 0) {
        position.value = {
          ...position.value,
          y: Math.min(Math.max(0, ((event.clientY - pressedDelta.y) / height) * 100), 100),
        }
      }
    }
  }

  function end() {
    pressedDelta = undefined
  }

  useEventListener(containerElement, 'pointerdown', start)
  /* SSR 阶段 window 不存在，客户端 setup 时再挂监听 */
  if (typeof window !== 'undefined') {
    useEventListener(window, 'pointermove', move)
    useEventListener(window, 'pointerup', end)
  }

  return { position }
}

const selectorRef = ref<HTMLDivElement | null>(null)
const selectorThumbRef = ref<HTMLDivElement | null>(null)
const trackRef = ref<HTMLDivElement | null>(null)
const trackThumbRef = ref<HTMLDivElement | null>(null)

const { position: selectorThumbPosition } = useColorDraggable(selectorThumbRef, selectorRef, 'both', {
  x: pickedColor.value.s,
  y: normalizeBrightness(pickedColor.value.v),
})

const { position: trackThumbPosition } = useColorDraggable(trackThumbRef, trackRef, 'y', {
  x: 0,
  y: normalizeHue(pickedColor.value.h, 'right'),
})

/* 输入色变化 → 同步拖拽位置；拖拽过程中暂停，避免写回抖动 */
const { pause: pauseWatchColor, resume: resumeWatchColor } = watchPausable(pickedColor, (hsb) => {
  selectorThumbPosition.value = { x: hsb.s, y: normalizeBrightness(hsb.v) }
  trackThumbPosition.value = { x: 0, y: normalizeHue(hsb.h, 'right') }
})

/* 拖拽位置变化 → 节流写回颜色值 */
watchThrottled([selectorThumbPosition, trackThumbPosition], () => {
  pauseWatchColor()
  pickedColor.value = {
    h: normalizeHue(trackThumbPosition.value.y),
    s: selectorThumbPosition.value.x,
    v: normalizeBrightness(selectorThumbPosition.value.y),
  }
  nextTick(resumeWatchColor)
}, { throttle: () => props.throttle })

/** 色相轨道当前指向的纯色（饱和度与亮度 100%） */
const trackThumbColor = computed(() =>
  formatHsv({ h: normalizeHue(trackThumbPosition.value.y), s: 100, v: 100 }, 'hex'),
)

const selectorStyle = computed(() => ({ backgroundColor: trackThumbColor.value }))

const selectorThumbStyle = computed(() => ({
  backgroundColor: formatHsv(pickedColor.value, 'hex'),
  left: `${selectorThumbPosition.value.x}%`,
  top: `${selectorThumbPosition.value.y}%`,
}))

const trackThumbStyle = computed(() => ({
  backgroundColor: trackThumbColor.value,
  top: `${trackThumbPosition.value.y}%`,
}))

const sizeClasses: Record<ColorPickerSize, { selector: string; track: string }> = {
  xs: { selector: 'w-38 h-38', track: 'h-38' },
  sm: { selector: 'w-40 h-40', track: 'h-40' },
  md: { selector: 'w-42 h-42', track: 'h-42' },
  lg: { selector: 'w-44 h-44', track: 'h-44' },
  xl: { selector: 'w-46 h-46', track: 'h-46' },
}
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    data-slot="root"
    :class="cn('data-[disabled]:opacity-75', props.ui?.root, props.class)"
    :data-disabled="disabled ? true : undefined"
  >
    <div data-slot="picker" :class="cn('flex gap-4', props.ui?.picker)">
      <div
        ref="selectorRef"
        data-slot="selector"
        :class="cn('touch-none rounded-md', sizeClasses[size].selector, props.ui?.selector)"
        :style="selectorStyle"
      >
        <div
          data-slot="selectorBackground"
          data-color-picker-background
          :class="cn('relative h-full w-full rounded-md', props.ui?.selectorBackground)"
        >
          <div
            ref="selectorThumbRef"
            data-slot="selectorThumb"
            :class="cn(
              'absolute size-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full ring-2 ring-white data-[disabled]:cursor-not-allowed',
              props.ui?.selectorThumb,
            )"
            :style="selectorThumbStyle"
            :data-disabled="disabled ? true : undefined"
          />
        </div>
      </div>
      <div
        ref="trackRef"
        data-slot="track"
        data-color-picker-track
        :class="cn('relative w-[8px] touch-none rounded-md', sizeClasses[size].track, props.ui?.track)"
      >
        <div
          ref="trackThumbRef"
          data-slot="trackThumb"
          :class="cn(
            'absolute size-4 -translate-x-[4px] -translate-y-1/2 cursor-pointer rounded-full ring-2 ring-white rtl:translate-x-[4px] data-[disabled]:cursor-not-allowed',
            props.ui?.trackThumb,
          )"
          :style="trackThumbStyle"
          :data-disabled="disabled ? true : undefined"
        />
      </div>
    </div>
  </Primitive>
</template>

<style scoped>
[data-color-picker-background] {
  background-image:
    linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

[data-color-picker-track] {
  background-image: linear-gradient(0deg, red 0, #f0f 17%, #00f 33%, #0ff 50%, #0f0 67%, #ff0 83%, red);
}
</style>
