/**
 * XColorPicker 颜色选择器：饱和度/亮度色板 + 色相轨道拖拽选色。
 * 支持 hex / rgb / hsl / cmyk / lab 五种输出格式与五档尺寸。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XColorPickerSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XColorPickerFormat = "hex" | "rgb" | "hsl" | "cmyk" | "lab"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XColorPickerUi {
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
function formatHsv(value: HsvColor, format: XColorPickerFormat): string {
  const hsl = hsvToHsl(value)
  const rgb = hslToRgb(hsl)
  switch (format) {
    case "rgb":
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    case "hsl":
      return `hsl(${Math.round(hsl.h)}, ${round1(hsl.s)}%, ${round1(hsl.l)}%)`
    case "cmyk": {
      const rn = rgb.r / 255
      const gn = rgb.g / 255
      const bn = rgb.b / 255
      const k = 1 - Math.max(rn, gn, bn)
      const c = k === 1 ? 0 : ((1 - rn - k) / (1 - k)) * 100
      const m = k === 1 ? 0 : ((1 - gn - k) / (1 - k)) * 100
      const y = k === 1 ? 0 : ((1 - bn - k) / (1 - k)) * 100
      return `cmyk(${round2(c)}%, ${round2(m)}%, ${round2(y)}%, ${round2(k * 100)}%)`
    }
    case "lab":
      return rgbToLab(rgb)
    case "hex":
    default:
      return `#${[rgb.r, rgb.g, rgb.b].map((n) => n.toString(16).padStart(2, "0")).join("").toUpperCase()}`
  }
}

/** 解析颜色字符串为 HSL；无法识别时回退白色（与 Nuxt UI 行为一致） */
function parseColor(input: string): HslColor {
  const trimmed = input.trim()
  const hexMatch = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(trimmed)
  if (hexMatch) {
    let hex = hexMatch[1]!
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("")
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

function normalizeHue(hue: number, dir: "left" | "right" = "left"): number {
  if (dir === "right") return (hue * 100) / 360
  return (hue / 100) * 360
}

function normalizeBrightness(brightness: number): number {
  return 100 - brightness
}

const colorPickerSizeClasses: Record<XColorPickerSize, { selector: string; track: string }> = {
  xs: { selector: "w-38 h-38", track: "h-38" },
  sm: { selector: "w-40 h-40", track: "h-40" },
  md: { selector: "w-42 h-42", track: "h-42" },
  lg: { selector: "w-44 h-44", track: "h-44" },
  xl: { selector: "w-46 h-46", track: "h-46" },
}

export interface XColorPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "className" | "onChange"> {
  /** 节流间隔（ms），拖拽过程中限制值更新频率 */
  throttle?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 绑定颜色 */
  value?: string
  /** 默认颜色 */
  defaultValue?: string
  /** 输出格式 */
  format?: XColorPickerFormat
  /** 尺寸 */
  size?: XColorPickerSize
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
  ui?: XColorPickerUi
  /** 颜色变化回调 */
  onChange?: (color: string) => void
  className?: string
}

export const XColorPicker = React.forwardRef<HTMLDivElement, XColorPickerProps>(function XColorPicker(
  {
    throttle = 50,
    disabled = false,
    value,
    defaultValue = "#FFFFFF",
    format = "hex",
    size = "md",
    render,
    ui,
    onChange,
    className,
    ...rest
  },
  ref,
) {
  const currentInput = value ?? defaultValue

  /** 拖拽位置（百分比）：色板 x 饱和度、y 亮度（自顶向下），轨道 y 色相 */
  const initial = hslToHsv(parseColor(currentInput))
  const [selectorPosition, setSelectorPosition] = React.useState({
    x: initial.s,
    y: normalizeBrightness(initial.v),
  })
  const [trackPosition, setTrackPosition] = React.useState({
    y: normalizeHue(initial.h, "right"),
  })

  const selectorRef = React.useRef<HTMLDivElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)
  const draggingRef = React.useRef<{ axis: "x" | "y" | "both"; pressed: { x: number; y: number } } | null>(null)
  const lastCommitRef = React.useRef(0)

  /* 位置最新值镜像，供 window 事件回调读取，避免闭包过期 */
  const selectorPositionRef = React.useRef(selectorPosition)
  const trackPositionRef = React.useRef(trackPosition)
  React.useEffect(() => {
    selectorPositionRef.current = selectorPosition
    trackPositionRef.current = trackPosition
  }, [selectorPosition, trackPosition])

  /* 外部值变化时同步拖拽位置；拖拽过程中不覆盖 */
  React.useEffect(() => {
    if (draggingRef.current) return
    const next = hslToHsv(parseColor(currentInput))
    setSelectorPosition({ x: next.s, y: normalizeBrightness(next.v) })
    setTrackPosition({ y: normalizeHue(next.h, "right") })
  }, [currentInput])

  /** 位置 → 颜色值并节流通知 */
  function commit(sel: { x: number; y: number }, trk: { y: number }) {
    const now = Date.now()
    if (now - lastCommitRef.current < throttle) return
    lastCommitRef.current = now
    onChange?.(formatHsv({
      h: normalizeHue(trk.y),
      s: sel.x,
      v: normalizeBrightness(sel.y),
    }, format))
  }

  function onMove(event: PointerEvent) {
    const dragging = draggingRef.current
    if (!dragging) return
    const container = dragging.axis === "both" ? selectorRef.current : trackRef.current
    if (!container) return
    const sel = { ...selectorPositionRef.current }
    const trk = { ...trackPositionRef.current }
    if (dragging.axis === "x" || dragging.axis === "both") {
      const width = container.scrollWidth || container.clientWidth
      if (width > 0) {
        sel.x = Math.min(Math.max(0, ((event.clientX - dragging.pressed.x) / width) * 100), 100)
      }
    }
    if (dragging.axis === "y" || dragging.axis === "both") {
      const height = container.scrollHeight || container.clientHeight
      if (height > 0) {
        sel.y = Math.min(Math.max(0, ((event.clientY - dragging.pressed.y) / height) * 100), 100)
      }
    }
    if (dragging.axis === "both") {
      setSelectorPosition(sel)
      commit(sel, trk)
    } else {
      trk.y = sel.y
      setTrackPosition({ y: trk.y })
      commit(selectorPositionRef.current, trk)
    }
  }

  React.useEffect(() => {
    function onUp() {
      draggingRef.current = null
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [throttle, format, onChange])

  function startDrag(axis: "x" | "y" | "both") {
    return (event: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return event.preventDefault()
      const container = axis === "both" ? selectorRef.current : trackRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      draggingRef.current = { axis, pressed: { x: rect.left, y: rect.top } }
      /* 按下即按指针位置更新，与 Nuxt UI 的指针行为一致 */
      onMove(event.nativeEvent)
    }
  }

  /** 当前选择色（十六进制），用于拖拽圆点背景 */
  const pickedHex = React.useMemo(
    () => formatHsv(hslToHsv(parseColor(currentInput)), "hex"),
    [currentInput],
  )

  /** 色相轨道当前指向的纯色（饱和度与亮度 100%） */
  const trackHex = formatHsv(
    { h: normalizeHue(trackPosition.y), s: 100, v: 100 },
    "hex",
  )

  const root = useRender<Record<string, unknown>, HTMLDivElement>({
    render,
    defaultTagName: "div",
    props: {
      ref,
      "data-slot": "root",
      "data-disabled": disabled ? "true" : undefined,
      className: cn("data-[disabled]:opacity-75", ui?.root, className),
      ...rest,
      children: (
        <div data-slot="picker" className={cn("flex gap-4", ui?.picker)}>
          <div
            ref={selectorRef}
            data-slot="selector"
            className={cn(
              "touch-none rounded-md",
              colorPickerSizeClasses[size].selector,
              ui?.selector,
            )}
            style={{ backgroundColor: trackHex }}
            onPointerDown={startDrag("both")}
          >
            <div
              data-slot="selectorBackground"
              data-color-picker-background
              className={cn("relative h-full w-full rounded-md", ui?.selectorBackground)}
              style={{
                backgroundImage:
                  "linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              <div
                data-slot="selectorThumb"
                className={cn(
                  "absolute size-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full ring-2 ring-white data-[disabled]:cursor-not-allowed",
                  ui?.selectorThumb,
                )}
                style={{
                  backgroundColor: pickedHex,
                  left: `${selectorPosition.x}%`,
                  top: `${selectorPosition.y}%`,
                }}
                data-disabled={disabled ? "true" : undefined}
              />
            </div>
          </div>
          <div
            ref={trackRef}
            data-slot="track"
            data-color-picker-track
            className={cn(
              "relative w-[8px] touch-none rounded-md",
              colorPickerSizeClasses[size].track,
              ui?.track,
            )}
            style={{
              backgroundImage:
                "linear-gradient(0deg, red 0, #f0f 17%, #00f 33%, #0ff 50%, #0f0 67%, #ff0 83%, red)",
            }}
            onPointerDown={startDrag("y")}
          >
            <div
              data-slot="trackThumb"
              className={cn(
                "absolute size-4 -translate-x-[4px] -translate-y-1/2 cursor-pointer rounded-full ring-2 ring-white rtl:translate-x-[4px] data-[disabled]:cursor-not-allowed",
                ui?.trackThumb,
              )}
              style={{ backgroundColor: trackHex, top: `${trackPosition.y}%` }}
              data-disabled={disabled ? "true" : undefined}
            />
          </div>
        </div>
      ),
    },
  })

  return root
})
