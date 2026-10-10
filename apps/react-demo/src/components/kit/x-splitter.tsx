import * as React from "react"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XSplitterUi {
  root?: string
  panel?: string
  handle?: string
}

/** 分割面板项 */
export interface XSplitterItem {
  /** 面板 id，默认自动生成 */
  id?: string
  /** 初始尺寸（百分比） */
  defaultSize?: number
  /** 最小尺寸（百分比），默认 10 */
  minSize?: number
  /** 最大尺寸（百分比），默认 100 */
  maxSize?: number
  /** 拖拽越过最小尺寸一半时折叠 */
  collapsible?: boolean
  /** 折叠后的尺寸 */
  collapsedSize?: number
  /** 尺寸单位（当前实现按百分比处理） */
  sizeUnit?: "%" | "px"
  /** 内容插槽名 */
  slot?: string
  /** 面板内容 */
  content?: React.ReactNode
  className?: string
  ui?: { panel?: string }
  [key: string]: any
}

export interface XSplitterSlotProps {
  item: XSplitterItem
  index: number
  collapsed: boolean
  collapse: () => void
  expand: () => void
  resize: (size: number) => void
}

export type XSplitterSlot = React.ReactNode | ((props: XSplitterSlotProps) => React.ReactNode)

export interface XSplitterProps {
  /** 方向 */
  orientation?: "horizontal" | "vertical"
  /** 面板数组；未提供时使用 first / second 双面板形态 */
  items?: XSplitterItem[]
  /** 锁定全部拖拽 */
  disabled?: boolean
  /** 分组 id */
  id?: string
  /** 渲染为指定元素 */
  render?: React.ReactElement<Record<string, unknown>>
  /** 主题插槽类名 */
  ui?: XSplitterUi
  /** 双面板形态：最小尺寸（百分比） */
  minSize?: number
  /** 双面板形态：默认尺寸（百分比） */
  defaultSize?: number
  /** 双面板形态：受控尺寸（百分比） */
  size?: number
  /** 双面板形态：拖拽越过边界时折叠对应面板 */
  collapsible?: boolean
  /** 左侧（上方）面板 */
  first?: React.ReactNode
  /** 右侧（下方）面板 */
  second?: React.ReactNode
  /** 布局变化回调 */
  onLayout?: (sizes: number[]) => void
  /** 面板折叠回调 */
  onCollapse?: (index: number) => void
  /** 面板展开回调 */
  onExpand?: (index: number) => void
  /** 面板尺寸变化回调 */
  onResize?: (index: number, size: number, prevSize?: number) => void
  /** 拖拽状态变化回调 */
  onDragging?: (index: number, dragging: boolean) => void
  className?: string
}

export interface XSplitterApi {
  resize: (index: number, size: number) => void
}

/** 双面板便捷形态映射为两个面板项 */
function resolveItems(props: XSplitterProps): XSplitterItem[] {
  if (props.items) return props.items
  return [
    {
      defaultSize: props.size ?? props.defaultSize,
      minSize: props.minSize,
      collapsible: props.collapsible,
      slot: "first",
    },
    {
      collapsible: props.collapsible,
      slot: "second",
    },
  ]
}

/** 初始尺寸：未指定 defaultSize 的面板均分剩余空间 */
function resolveInitialSizes(items: XSplitterItem[]): number[] {
  const specifiedSum = items.reduce((sum, item) => sum + (item.defaultSize ?? 0), 0)
  const restCount = items.filter((item) => item.defaultSize == null).length
  const rest = restCount > 0 ? Math.max(0, 100 - specifiedSum) / restCount : 0
  return items.map((item) => item.defaultSize ?? rest)
}

function renderSlot(slot: XSplitterSlot | undefined, slotProps: XSplitterSlotProps): React.ReactNode {
  return typeof slot === "function" ? slot(slotProps) : slot
}

export const XSplitter = React.forwardRef<XSplitterApi, XSplitterProps>(function XSplitter(props, ref) {
  const {
    orientation = "horizontal",
    disabled = false,
    id: _id,
    render,
    ui,
    minSize = 20,
    defaultSize = 50,
    size: sizeProp,
    collapsible = false,
    first,
    second,
    onLayout,
    onCollapse,
    onExpand,
    onResize,
    onDragging,
    className,
  } = props

  const items = React.useMemo(() => resolveItems(props), [props.items, sizeProp, defaultSize, minSize, collapsible])
  const [sizes, setSizes] = React.useState<number[]>(() => resolveInitialSizes(items))
  const [collapsedList, setCollapsedList] = React.useState<boolean[]>(() => items.map(() => false))
  const prevSizesRef = React.useRef<number[]>([])
  if (prevSizesRef.current.length === 0) prevSizesRef.current = resolveInitialSizes(items)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const draggingRef = React.useRef<number | null>(null)

  const isHorizontal = orientation === "horizontal"

  /* 受控尺寸：双面板形态下第一面板尺寸由 size 属性驱动 */
  /* 受控尺寸：双面板形态下第一面板尺寸由 size 属性驱动 */
  const currentSizes = React.useMemo(() => {
    const next = [...sizes]
    if (sizeProp != null && next.length > 0) next[0] = sizeProp
    return next
  }, [sizes, sizeProp])

  const clampSize = React.useCallback(
    (index: number, value: number) => {
      const item = items[index]
      const itemMin = item?.minSize ?? 10
      const itemMax = item?.maxSize ?? 100
      return Math.min(itemMax, Math.max(itemMin, value))
    },
    [items],
  )

  const collapsePanel = React.useCallback(
    (index: number) => {
      if (collapsedList[index]) return
      const item = items[index]
      if (!item?.collapsible) return
      const prevSize = currentSizes[index] ?? 0
      const collapsedSize = item.collapsedSize ?? 0
      prevSizesRef.current[index] = prevSize
      setSizes((prev) => {
        const next = [...prev]
        const delta = prevSize - collapsedSize
        next[index] = collapsedSize
        /* 折叠释放的空间补到对侧面板 */
        const sibling = index < next.length - 1 ? index + 1 : index - 1
        if (sibling >= 0 && sibling < next.length) next[sibling] = (next[sibling] ?? 0) + delta
        onLayout?.(next)
        return next
      })
      setCollapsedList((prev) => {
        const next = [...prev]
        next[index] = true
        return next
      })
      onResize?.(index, collapsedSize, prevSize)
      onCollapse?.(index)
    },
    [items, collapsedList, currentSizes, onLayout, onResize, onCollapse],
  )

  const expandPanel = React.useCallback(
    (index: number) => {
      if (!collapsedList[index]) return
      const restored = prevSizesRef.current[index] ?? (items[index]?.minSize ?? 10)
      setSizes((prev) => {
        const next = [...prev]
        const delta = restored - (next[index] ?? 0)
        next[index] = restored
        const sibling = index < next.length - 1 ? index + 1 : index - 1
        if (sibling >= 0 && sibling < next.length) next[sibling] = Math.max(items[sibling]?.minSize ?? 10, (next[sibling] ?? 0) - delta)
        onLayout?.(next)
        return next
      })
      setCollapsedList((prev) => {
        const next = [...prev]
        next[index] = false
        return next
      })
      onResize?.(index, restored)
      onExpand?.(index)
    },
    [items, collapsedList, onLayout, onResize, onExpand],
  )

  const resizePanel = React.useCallback(
    (index: number, value: number) => {
      const clamped = clampSize(index, value)
      setSizes((prev) => {
        const next = [...prev]
        next[index] = clamped
        onLayout?.(next)
        return next
      })
      onResize?.(index, clamped)
    },
    [clampSize, onLayout, onResize],
  )

  React.useImperativeHandle(ref, () => ({
    resize: (index: number, size: number) => {
      if (collapsedList[index]) expandPanel(index)
      resizePanel(index, clampSize(index, size))
    },
  }))

  /* 拖拽：handle i 调整面板 i 与 i+1，越过 minSize/2 时折叠被压缩一侧 */
  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const handleIndex = draggingRef.current
      if (handleIndex == null || !rootRef.current) return
      const rect = rootRef.current.getBoundingClientRect()
      const ratio = isHorizontal
        ? ((event.clientX - rect.left) / rect.width) * 100
        : ((event.clientY - rect.top) / rect.height) * 100
      const leftItem = items[handleIndex]
      const rightItem = items[handleIndex + 1]
      const leftMin = leftItem?.minSize ?? 10
      const rightMin = rightItem?.minSize ?? 10
      if (leftItem?.collapsible && ratio < leftMin / 2) {
        collapsePanel(handleIndex)
        return
      }
      if (rightItem?.collapsible && ratio > 100 - rightMin / 2) {
        collapsePanel(handleIndex + 1)
        return
      }
      if (collapsedList[handleIndex]) expandPanel(handleIndex)
      if (collapsedList[handleIndex + 1]) expandPanel(handleIndex + 1)
      const clamped = Math.min(100 - rightMin, Math.max(leftMin, ratio))
      setSizes((prev) => {
        const next = [...prev]
        next[handleIndex] = clamped
        next[handleIndex + 1] = 100 - clamped
        onLayout?.(next)
        return next
      })
      onResize?.(handleIndex, clamped)
    }
    const onUp = () => {
      const handleIndex = draggingRef.current
      draggingRef.current = null
      document.body.style.cursor = ""
      document.body.style.userSelect = ""
      if (handleIndex != null) onDragging?.(handleIndex, false)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
    }
  }, [items, isHorizontal, collapsedList, collapsePanel, expandPanel, onLayout, onResize, onDragging])

  function handleKeyDown(index: number, event: React.KeyboardEvent) {
    if (disabled) return
    const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp"
    const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown"
    if (event.key !== prevKey && event.key !== nextKey) return
    event.preventDefault()
    const delta = event.key === nextKey ? 10 : -10
    const current = currentSizes[index] ?? 0
    const nextValue = Math.min(100 - (items[index + 1]?.minSize ?? 10), Math.max(items[index]?.minSize ?? 10, current + delta))
    setSizes((prev) => {
      const next = [...prev]
      next[index] = nextValue
      next[index + 1] = 100 - nextValue
      onLayout?.(next)
      return next
    })
    onResize?.(index, nextValue)
  }

  const rootProps = {
    "data-orientation": orientation,
    "data-slot": "root",
    className: cn(
      "flex overflow-hidden rounded-lg border border-border",
      isHorizontal ? "h-full flex-row" : "flex-col",
      ui?.root,
      className,
    ),
  }

  const content = (
    <>
      {items.map((item, index) => {
        const isCollapsed = collapsedList[index] ?? false
        const panelSize = isCollapsed ? (item.collapsedSize ?? 0) : currentSizes[index]
        const slotProps: XSplitterSlotProps = {
          item,
          index,
          collapsed: isCollapsed,
          collapse: () => collapsePanel(index),
          expand: () => expandPanel(index),
          resize: (size: number) => resizePanel(index, size),
        }
        /* 面板内容：first / second 便捷插槽，或项上的 content 字段 */
        const panelSlot =
          item.slot === "first" ? (first as XSplitterSlot) : item.slot === "second" ? (second as XSplitterSlot) : (item.content as XSplitterSlot)
        return (
          <React.Fragment key={item.id ?? index}>
            <div
              style={{ flexBasis: `${panelSize}%`, flexGrow: 0, flexShrink: 0 }}
              data-panel-index={index}
              data-slot="panel"
              className={cn("flex min-h-0 min-w-0 overflow-auto", ui?.panel, item.ui?.panel, item.className)}
            >
              {renderSlot(panelSlot, slotProps)}
            </div>
            {index < items.length - 1 && (
              <div
                role="separator"
                aria-orientation={orientation}
                data-orientation={orientation}
                data-panel-resize-handle-enabled={!disabled}
                data-slot="handle"
                tabIndex={disabled ? -1 : 0}
                onPointerDown={(event) => {
                  if (disabled) return
                  if (collapsedList[index]) expandPanel(index)
                  if (collapsedList[index + 1]) expandPanel(index + 1)
                  draggingRef.current = index
                  document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize"
                  document.body.style.userSelect = "none"
                  onDragging?.(index, true)
                  event.preventDefault()
                }}
                onKeyDown={(event) => handleKeyDown(index, event)}
                className={cn(
                  "group relative shrink-0 bg-border transition-colors hover:bg-primary-5 focus-visible:outline-2 focus-visible:outline-primary-6",
                  isHorizontal ? "w-2 cursor-col-resize" : "h-2 cursor-row-resize",
                  disabled && "cursor-default",
                  ui?.handle,
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </>
  )

  if (render) {
    return React.cloneElement(
      render,
      { ...rootProps, className: cn((render.props as { className?: string }).className, rootProps.className) },
      content,
    )
  }

  return (
    <div ref={rootRef} {...rootProps}>
      {content}
    </div>
  )
})

/* ============================ vben 风格 hook ============================ */

export interface XSplitterInstanceApi {
  /** 当前尺寸（百分比） */
  size: number
  /** 调整尺寸 */
  resize: (size: number) => void
}

/** 创建与 api 绑定的分割面板：调用即得 [Splitter, splitterApi] */
export function useXSplitter(options: Partial<XSplitterProps> = {}) {
  const { defaultSize = 50, ...componentProps } = options
  const store = React.useState(() => createBoundStore({ size: defaultSize }))[0]

  const api = React.useMemo<XSplitterInstanceApi>(
    () => ({
      get size() {
        return store.get().size
      },
      resize: (size: number) => store.set({ size }),
    }),
    [],
  )

  const Splitter = React.useMemo(() => {
    return function BoundSplitter(props: Partial<XSplitterProps> = {}) {
      const state = useBoundStore(store)
      return (
        <XSplitter
          {...componentProps}
          {...props}
          size={state.size}
          onResize={(index, size) => {
            if (index === 0) store.set({ size })
          }}
        />
      )
    }
  }, [])

  return [Splitter, api] as const
}
