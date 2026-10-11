/**
 * XTextarea 多行文本：原生 textarea 的二次封装。
 * 注入 Nuxt UI 语义：color、highlight、size、autoresize（等价 autosize）。
 * 保留 kit 既有能力：showCount 字数统计与 error / warning 校验状态。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { variantClasses, type XInputVariant } from "@/components/kit/x-input"
import { cn } from "@/lib/utils"

export type XTextareaSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XTextareaColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XTextareaStatus = "error" | "warning"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XTextareaUi {
  base?: string
}

/** 尺寸 → 内边距与字号 */
const textareaSizeClasses: Record<XTextareaSize, string> = {
  xs: "px-2 py-1 text-sm",
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-2.5 py-1.5 text-base",
  lg: "px-3 py-2 text-base",
  xl: "px-3.5 py-2.5 text-base",
}

/** 聚焦描边色 */
const focusClasses: Record<XTextareaColor, string> = {
  primary: "outline-primary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary",
  secondary: "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary",
  neutral: "outline-foreground/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-foreground",
  success: "outline-success/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success",
  info: "outline-info/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info",
  warning: "outline-warning/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning",
  error: "outline-error/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error",
}

/** 高亮描边色 */
const highlightClasses: Record<XTextareaColor, string> = {
  primary: "ring-1 ring-inset ring-primary",
  secondary: "ring-1 ring-inset ring-secondary",
  neutral: "ring-1 ring-inset ring-border",
  success: "ring-1 ring-inset ring-success",
  info: "ring-1 ring-inset ring-info",
  warning: "ring-1 ring-inset ring-warning",
  error: "ring-1 ring-inset ring-error",
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<XTextareaSize, string>> = {
  xs: "md:text-xs",
  sm: "md:text-xs",
  md: "md:text-sm",
  lg: "md:text-sm",
}

const statusClasses: Record<XTextareaStatus, string> = {
  error: "border-error focus-visible:border-error focus-visible:ring-error/20",
  warning: "border-warning focus-visible:border-warning focus-visible:ring-warning/20",
}

/** textarea 的值可能是数组（原生多行回填），统一转成字符串用于统计 */
function stringifyValue(value: string | number | readonly string[] | null | undefined): string {
  if (value == null) return ""
  return Array.isArray(value) ? value.join("") : String(value)
}

export interface XTextareaProps
  extends Omit<React.ComponentProps<"textarea">, "size" | "color" | "autoFocus"> {
  /** 控件尺寸 */
  size?: XTextareaSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: XTextareaColor
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 行数 */
  rows?: number
  /** 自动调整高度 */
  autoresize?: boolean
  /** 自动调整高度的延迟（毫秒） */
  autoresizeDelay?: number
  /** 自动调整高度的行数上限，超出后内容在控件内部滚动 */
  maxrows?: number
  /** 自动调整高度（等价 autoresize） */
  autosize?: boolean
  /** 自动调整高度的行数上限（等价 maxrows） */
  maxRows?: number
  /** 校验状态 */
  status?: XTextareaStatus
  /** 右下角显示字数统计，设置 maxLength 时显示「当前长度 / 最大长度」 */
  showCount?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XTextareaUi
  /** 挂载后自动聚焦原生输入元素 */
  autofocus?: boolean
  /** 自动聚焦的延迟（毫秒） */
  autofocusDelay?: number
  /** 预设样式（与 Nuxt 版 variant prop 对齐） */
  variant?: XInputVariant
  /** 左侧头像内容 */
  avatar?: React.ReactNode
}

export const XTextarea = React.forwardRef<HTMLTextAreaElement, XTextareaProps>(function XTextarea(
  {
    size = "md",
    color = "primary",
    highlight = false,
    fixed = true,
    rows = 3,
    autoresize = false,
    autoresizeDelay = 0,
    autosize = false,
    maxrows = 0,
    maxRows,
    status,
    showCount = false,
    render,
    ui,
    autofocus,
    autofocusDelay = 0,
    variant = "outline",
    avatar,
    className,
    value,
    defaultValue,
    onChange,
    ...rest
  },
  ref,
) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  /* style 单独取出，与 maxHeight 上限样式合并后写回控件 */
  const { style, ...inputRest } = rest

  const resizeEnabled = autoresize || autosize
  /* autoresize 走 Nuxt JS 行数计算，旧 autosize 保持 CSS field-sizing 方案 */
  const jsResize = autoresize
  const cssAutosize = !autoresize && autosize
  const maxRowsValue = maxrows > 0 ? maxrows : (maxRows ?? 0)

  /* 旧 autosize 方案：maxRows 换算为 lh 单位的最大高度，随控件自身行高生效 */
  const maxHeightStyle = cssAutosize && maxRowsValue > 0 ? `${maxRowsValue}lh` : undefined

  /* 非受控时用内部状态追踪当前值，受控时直接读 value */
  const [innerValue, setInnerValue] = React.useState(() => stringifyValue(defaultValue))
  const currentValue = stringifyValue(value !== undefined ? value : innerValue)

  /** Nuxt 模式的自动高度：按内容换算行数，超出 maxrows 后内部滚动 */
  function resize() {
    const el = textareaRef.current
    if (!jsResize || el == null) return
    el.rows = rows
    const overflow = el.style.overflow
    el.style.overflow = "hidden"

    const styles = window.getComputedStyle(el)
    const padding = Number.parseInt(styles.paddingTop) + Number.parseInt(styles.paddingBottom)
    const lineHeight = Number.parseInt(styles.lineHeight)
    const newRows = (el.scrollHeight - padding) / lineHeight

    if (newRows > rows) {
      el.rows = maxRowsValue > 0 ? Math.min(newRows, maxRowsValue) : newRows
    }
    el.style.overflow = overflow
  }

  /* 值变化后按内容调整高度 */
  React.useLayoutEffect(() => {
    resize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultValue, resizeEnabled, rows, maxRowsValue])

  /* 挂载后按 autoresizeDelay 延迟调整一次 */
  React.useEffect(() => {
    if (!resizeEnabled) return
    const id = window.setTimeout(resize, autoresizeDelay)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* 挂载后按 autofocusDelay 延迟聚焦，卸载时清理定时器（对齐 Nuxt autofocus 行为） */
  React.useEffect(() => {
    const id = window.setTimeout(() => {
      if (autofocus) textareaRef.current?.focus()
    }, autofocusDelay)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (value === undefined) setInnerValue(event.target.value)
    onChange?.(event)
  }

  /* 合并转发 ref 与内部 ref：自动高度需要访问真实控件 */
  const mergedRef = (node: HTMLTextAreaElement | null) => {
    textareaRef.current = node
    if (typeof ref === "function") ref(node)
    else if (ref != null) ref.current = node
  }

  const root = useRender<Record<string, unknown>, HTMLDivElement>({
    render,
    defaultTagName: "div",
    props: {
      "data-slot": "root",
      className: cn("relative inline-flex items-center", className),
      children: (
        <>
          {avatar != null && (
            <span className="absolute start-0 flex items-start" data-slot="leadingAvatar">
              {avatar}
            </span>
          )}
          <textarea
            ref={mergedRef}
            data-slot="base"
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            rows={rows}
            style={maxHeightStyle != null ? { ...style, maxHeight: maxHeightStyle } : style}
            className={cn(
              "w-full rounded-md border-0 appearance-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-75 transition-colors",
              variantClasses[variant],
              textareaSizeClasses[size],
              focusClasses[color],
              highlight && highlightClasses[color],
              fixed === false && fixedTextClasses[size],
              resizeEnabled && "resize-none",
              cssAutosize && "field-sizing-content",
              maxHeightStyle != null && "overflow-auto",
              status && statusClasses[status],
              showCount && "pb-6",
              ui?.base,
            )}
            {...inputRest}
          />
          {showCount && (
            <span className="pointer-events-none absolute right-3 bottom-2 text-xs tabular-nums text-muted-foreground">
              {inputRest.maxLength != null ? `${currentValue.length} / ${inputRest.maxLength}` : currentValue.length}
            </span>
          )}
        </>
      ),
    },
  })

  return root
})
