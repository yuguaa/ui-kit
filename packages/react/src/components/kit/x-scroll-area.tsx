/**
 * XScrollArea 滚动区域：内容溢出时可滚动的区域。
 * 结构对齐 Nuxt UI：root（自身滚动）→ viewport → item；支持 items 数组、虚拟滚动与边缘阴影。
 */
import * as React from "react"
import { cn } from "@/lib/utils"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XScrollAreaUi {
  root?: string
  viewport?: string
  item?: string
}

/** 虚拟滚动配置 */
export interface XScrollAreaVirtualizeOptions {
  /** 每项沿滚动方向的估计尺寸（px），可传函数按索引估算，默认 100 */
  estimateSize?: number | ((index: number) => number)
  /** 可视区外预渲染的项数，默认 12 */
  overscan?: number
  /** 返回项 key */
  getItemKey?: (index: number) => string | number
}

export interface XScrollAreaProps {
  /** 渲染为指定元素 */
  render?: React.ReactElement<Record<string, unknown>>
  /** 滚动方向 */
  orientation?: "vertical" | "horizontal" | "both"
  /** 项数组 */
  items?: any[]
  /** 启用虚拟滚动 */
  virtualize?: boolean | XScrollAreaVirtualizeOptions
  /** 滚动边缘阴影，对象形态可配置阴影尺寸 */
  shadow?: boolean | { size?: number }
  /** 区域高度 */
  height?: number | string
  /** 主题插槽类名 */
  ui?: XScrollAreaUi
  /** 滚动内容（无 items 时的默认内容） */
  children?: React.ReactNode | ((props: { item: any; index: number }) => React.ReactNode)
  /** 滚动状态变化回调 */
  onScrollChange?: (isScrolling: boolean) => void
  className?: string
}

export interface XScrollAreaApi {
  scrollTo: (position: number) => void
}

interface ScrollState {
  scrollOffset: number
  viewportSize: number
  scrollSize: number
}

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

/** 合并 render 元素自带的 ref 与内部根节点 ref */
function composeRef<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(node)
      else if (ref != null) (ref as React.MutableRefObject<T | null>).current = node
    })
  }
}

export const XScrollArea = React.forwardRef<XScrollAreaApi, XScrollAreaProps>(function XScrollArea(
  {
    render,
    orientation = "vertical",
    items,
    virtualize = false,
    shadow = false,
    height,
    ui,
    children,
    onScrollChange,
    className,
  },
  ref,
) {
  const rootElRef = React.useRef<HTMLDivElement>(null)
  const setRootElement = React.useCallback((node: HTMLDivElement | null) => {
    rootElRef.current = node
  }, [])
  const scrollTimerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined)
  const [scrollState, setScrollState] = React.useState<ScrollState>({ scrollOffset: 0, viewportSize: 0, scrollSize: 0 })

  const isVertical = orientation !== "horizontal"
  const virtualOptions = typeof virtualize === "object" ? virtualize : {}

  function estimateSize(index: number): number {
    const estimate = virtualOptions.estimateSize ?? 100
    return typeof estimate === "function" ? estimate(index) : estimate
  }

  /* 前缀和：prefix[i] 为前 i 项的累计尺寸 */
  const prefix = React.useMemo(() => {
    const count = items?.length ?? 0
    const result: number[] = [0]
    for (let i = 0; i < count; i++) result.push(result[i]! + estimateSize(i))
    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, virtualize])

  const count = items?.length ?? 0
  const totalSize = prefix[count] ?? 0
  const overscan = virtualOptions.overscan ?? 12
  const currentItems = items ?? []

  const virtualItems: { index: number; start: number; size: number }[] = React.useMemo(() => {
    if (!virtualize) return []
    const { scrollOffset, viewportSize } = scrollState
    const startOffset = scrollOffset
    const endOffset = startOffset + viewportSize
    const start = Math.max(0, lowerBound(prefix, startOffset) - overscan)
    const end = Math.min(count, lowerBound(prefix, endOffset) + overscan)
    const result: { index: number; start: number; size: number }[] = []
    for (let i = start; i < end; i++) {
      result.push({ index: i, start: prefix[i]!, size: estimateSize(i) })
    }
    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [virtualize, scrollState, prefix, count, overscan])

  React.useImperativeHandle(ref, () => ({
    scrollTo: (position: number) => {
      const el = rootElRef.current
      if (!el) return
      if (isVertical) el.scrollTo({ top: position })
      else el.scrollTo({ left: position })
    },
  }))

  /* 滚动状态与尺寸同步 */
  const onScroll = React.useCallback(() => {
    const el = rootElRef.current
    if (!el) return
    setScrollState({
      scrollOffset: isVertical ? el.scrollTop : el.scrollLeft,
      viewportSize: isVertical ? el.clientHeight : el.clientWidth,
      scrollSize: isVertical ? el.scrollHeight : el.scrollWidth,
    })
    if (scrollTimerRef.current == null) onScrollChange?.(true)
    clearTimeout(scrollTimerRef.current)
    scrollTimerRef.current = setTimeout(() => {
      scrollTimerRef.current = undefined
      onScrollChange?.(false)
    }, 150)
  }, [isVertical, onScrollChange])

  React.useEffect(() => {
    onScroll()
    const el = rootElRef.current
    if (!el) return
    const observer = new ResizeObserver(() => onScroll())
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(scrollTimerRef.current)
    }
  }, [onScroll])

  /* 边缘阴影：到达顶部 / 底部 / 左侧 / 右侧时分别隐藏对应方向的渐变 */
  const shadowStyle = React.useMemo<React.CSSProperties | undefined>(() => {
    if (!shadow) return undefined
    const el = rootElRef.current
    if (!el) return undefined
    const size = `${typeof shadow === "object" && shadow.size != null ? shadow.size : 24}px`
    const horizontal = orientation === "horizontal"
    const showStart = horizontal ? el.scrollLeft > 0 : el.scrollTop > 0
    const showEnd = horizontal
      ? el.scrollLeft < el.scrollWidth - el.clientWidth
      : el.scrollTop < el.scrollHeight - el.clientHeight
    if (!showStart && !showEnd) return undefined
    const overflows = horizontal ? el.scrollWidth > el.clientWidth : el.scrollHeight > el.clientHeight
    if (!overflows) return undefined
    const angle = horizontal ? "90deg" : "180deg"
    if (showStart && showEnd) {
      return { maskImage: `linear-gradient(${angle}, transparent, #000 ${size}, #000 calc(100% - ${size}), transparent)` }
    }
    if (showStart) {
      return { maskImage: `linear-gradient(${angle}, transparent, #000 ${size})` }
    }
    return { maskImage: `linear-gradient(${angle}, #000, #000 calc(100% - ${size}), transparent)` }
  }, [shadow, orientation, scrollState])

  function itemKey(item: any, index: number): string | number {
    if (virtualOptions.getItemKey) return virtualOptions.getItemKey(index)
    if (item && typeof item === "object" && "id" in item) return item.id
    return index
  }

  function renderItem(item: any, index: number): React.ReactNode {
    return typeof children === "function" ? children({ item, index }) : children
  }

  const heightStyle: React.CSSProperties | undefined =
    height != null ? { height: typeof height === "number" ? `${height}px` : height } : undefined

  const rootProps = {
    "data-orientation": orientation,
    "data-slot": "root",
    className: cn(
      "relative outline-primary-6/25 focus-visible:outline-3",
      orientation === "vertical" && "overflow-x-hidden overflow-y-auto",
      orientation === "horizontal" && "overflow-x-auto overflow-y-hidden",
      orientation === "both" && "overflow-auto",
      ui?.root,
      className,
    ),
    style: { ...heightStyle, ...shadowStyle },
    onScroll,
  }

  const content = virtualize ? (
    <div
      data-slot="viewport"
      className={cn("relative flex", isVertical ? "flex-col" : "flex-row", ui?.viewport)}
      style={
        isVertical
          ? { position: "relative", height: `${totalSize}px` }
          : { position: "relative", width: `${totalSize}px` }
      }
    >
      {virtualItems.map((virtualItem) => (
        <div
          key={itemKey(currentItems[virtualItem.index], virtualItem.index)}
          data-index={virtualItem.index}
          data-slot="item"
          className={cn(ui?.item)}
          style={
            isVertical
              ? { position: "absolute", top: `${virtualItem.start}px`, left: 0, right: 0, height: `${virtualItem.size}px` }
              : { position: "absolute", left: `${virtualItem.start}px`, top: 0, bottom: 0, width: `${virtualItem.size}px` }
          }
        >
          {renderItem(currentItems[virtualItem.index], virtualItem.index)}
        </div>
      ))}
    </div>
  ) : (
    <div data-slot="viewport" className={cn("relative flex", isVertical ? "flex-col" : "flex-row", ui?.viewport)}>
      {items
        ? items.map((item, index) => (
            <div key={itemKey(item, index)} data-slot="item" className={cn(ui?.item)}>
              {renderItem(item, index)}
            </div>
          ))
        : renderItem({}, 0)}
    </div>
  )

  if (render) {
    return React.cloneElement(
      render,
      {
        ...rootProps,
        ref: composeRef((render.props as { ref?: React.Ref<HTMLDivElement> }).ref, setRootElement),
        className: cn((render.props as { className?: string }).className, rootProps.className),
      },
      content,
    )
  }

  return (
    <div ref={setRootElement} {...rootProps}>
      {content}
    </div>
  )
})

/* ============================ vben 风格 hook ============================ */

export interface XScrollAreaInstanceApi {
  /** 滚动到指定位置 */
  scrollTo: (position: number) => void
}

/** 创建与 api 绑定的滚动区域：调用即得 [ScrollArea, scrollAreaApi] */
export function useXScrollArea(options: Partial<XScrollAreaProps> = {}) {
  const areaRef = React.useRef<XScrollAreaApi>(null)
  const api = React.useMemo<XScrollAreaInstanceApi>(
    () => ({
      scrollTo: (position: number) => areaRef.current?.scrollTo(position),
    }),
    [],
  )

  const ScrollArea = React.useMemo(() => {
    return function BoundScrollArea(props: Partial<XScrollAreaProps> = {}) {
      return <XScrollArea ref={areaRef} {...options} {...props} />
    }
  }, [])

  return [ScrollArea, api] as const
}
