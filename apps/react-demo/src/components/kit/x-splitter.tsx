import * as React from "react"
import { createBoundStore, useBoundStore } from "@/lib/kit/bound-store"
import { cn } from "@/lib/utils"

export interface XSplitterProps {
  /** 方向 */
  orientation?: "horizontal" | "vertical"
  /** 最小尺寸（百分比） */
  minSize?: number
  /** 默认尺寸（百分比） */
  defaultSize?: number
  /** 受控尺寸（百分比） */
  size?: number
  /** 左侧（上方）面板 */
  first?: React.ReactNode
  /** 右侧（下方）面板 */
  second?: React.ReactNode
  /** 调整尺寸回调 */
  onResize?: (size: number) => void
  className?: string
}

export interface XSplitterApi {
  resize: (size: number) => void
}

export const XSplitter = React.forwardRef<XSplitterApi, XSplitterProps>(function XSplitter(
  { orientation = "horizontal", minSize = 20, defaultSize = 50, size: sizeProp, first, second, onResize, className },
  ref,
) {
  const [innerSize, setInnerSize] = React.useState(defaultSize)
  const size = sizeProp ?? innerSize
  const containerRef = React.useRef<HTMLDivElement>(null)
  const draggingRef = React.useRef(false)

  const isHorizontal = orientation === "horizontal"

  const resize = (next: number) => {
    const clamped = Math.min(100 - minSize, Math.max(minSize, next))
    if (sizeProp == null) setInnerSize(clamped)
    onResize?.(clamped)
  }

  React.useImperativeHandle(ref, () => ({ resize }))

  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!draggingRef.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const ratio = isHorizontal
        ? ((event.clientX - rect.left) / rect.width) * 100
        : ((event.clientY - rect.top) / rect.height) * 100
      resize(ratio)
    }
    const onUp = () => {
      draggingRef.current = false
      document.body.style.cursor = ""
      document.body.style.userSelect = ""
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  })

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex overflow-hidden rounded-lg border border-border",
        isHorizontal ? "h-full flex-row" : "flex-col",
        className,
      )}
    >
      <div style={{ flexBasis: `${size}%` }} className="min-h-0 min-w-0 overflow-auto">
        {first}
      </div>
      <div
        role="separator"
        aria-orientation={orientation}
        onPointerDown={(event) => {
          draggingRef.current = true
          document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize"
          document.body.style.userSelect = "none"
          event.preventDefault()
        }}
        className={cn(
          "shrink-0 bg-border transition-colors hover:bg-primary-5",
          isHorizontal ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize",
        )}
      />
      <div className="min-h-0 min-w-0 flex-1 overflow-auto">{second}</div>
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
          onResize={(size) => store.set({ size })}
        />
      )
    }
  }, [])

  return [Splitter, api] as const
}
