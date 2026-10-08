import * as React from "react"
import { PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from "lucide-react"
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
  /** 拖拽越过边界时折叠被压缩一侧的面板 */
  collapsible?: boolean
  /** 左侧（上方）面板 */
  first?: React.ReactNode
  /** 右侧（下方）面板 */
  second?: React.ReactNode
  /** 调整尺寸回调（折叠时触发 0 / 100，展开时恢复原尺寸） */
  onResize?: (size: number) => void
  className?: string
}

export interface XSplitterApi {
  resize: (size: number) => void
}

type CollapsedSide = "first" | "second"

export const XSplitter = React.forwardRef<XSplitterApi, XSplitterProps>(function XSplitter(
  { orientation = "horizontal", minSize = 20, defaultSize = 50, size: sizeProp, collapsible = false, first, second, onResize, className },
  ref,
) {
  const [innerSize, setInnerSize] = React.useState(defaultSize)
  const [collapsed, setCollapsed] = React.useState<CollapsedSide | null>(null)
  const prevSizeRef = React.useRef(defaultSize)
  const size = sizeProp ?? innerSize
  const containerRef = React.useRef<HTMLDivElement>(null)
  const draggingRef = React.useRef(false)

  const isHorizontal = orientation === "horizontal"

  const resize = (next: number) => {
    const clamped = Math.min(100 - minSize, Math.max(minSize, next))
    if (sizeProp == null) setInnerSize(clamped)
    onResize?.(clamped)
  }

  /** 折叠面板：second 折叠后 first 占满，resize 事件收到 100 */
  const collapse = (side: CollapsedSide) => {
    if (collapsed === side) return
    prevSizeRef.current = size
    setCollapsed(side)
    onResize?.(side === "first" ? 0 : 100)
  }

  /** 展开面板：恢复折叠前的尺寸 */
  const expand = (side: CollapsedSide) => {
    if (collapsed !== side) return
    setCollapsed(null)
    if (sizeProp == null) setInnerSize(prevSizeRef.current)
    onResize?.(prevSizeRef.current)
  }

  React.useImperativeHandle(ref, () => ({ resize }))

  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!draggingRef.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const ratio = isHorizontal
        ? ((event.clientX - rect.left) / rect.width) * 100
        : ((event.clientY - rect.top) / rect.height) * 100
      /* 越过一半最小尺寸即视为拖到边界，折叠被压缩一侧 */
      if (collapsible && ratio < minSize / 2) return collapse("first")
      if (collapsible && ratio > 100 - minSize / 2) return collapse("second")
      if (collapsed) expand(collapsed)
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

  /* 折叠按钮：分隔条两端各一个，折叠后分隔条停在边界，按钮即位于被折叠一侧 */
  const collapseButtonClass =
    "absolute z-10 flex size-4 cursor-pointer items-center justify-center rounded-full border border-border bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex overflow-hidden rounded-lg border border-border",
        isHorizontal ? "h-full flex-row" : "flex-col",
        className,
      )}
    >
      <div
        style={
          collapsed === "first"
            ? { flex: "0 0 0%" }
            : collapsed === "second"
              ? { flex: "1 1 0%" }
              : { flexBasis: `${size}%` }
        }
        className="min-h-0 min-w-0 overflow-auto"
      >
        {first}
      </div>
      <div
        role="separator"
        aria-orientation={orientation}
        onPointerDown={(event) => {
          if (collapsed) expand(collapsed)
          draggingRef.current = true
          document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize"
          document.body.style.userSelect = "none"
          event.preventDefault()
        }}
        className={cn(
          "relative shrink-0 bg-border transition-colors hover:bg-primary-5",
          isHorizontal ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize",
        )}
      >
        {collapsible && (
          <>
            <button
              type="button"
              aria-label={collapsed === "first" ? "展开面板" : "折叠面板"}
              onClick={() => (collapsed === "first" ? expand("first") : collapse("first"))}
              onPointerDown={(event) => event.stopPropagation()}
              className={cn(
                collapseButtonClass,
                isHorizontal
                  ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  : "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
              )}
            >
              {collapsed === "first" ? (
                <PanelLeftOpen className={cn("size-3", !isHorizontal && "rotate-90")} />
              ) : (
                <PanelLeftClose className={cn("size-3", !isHorizontal && "-rotate-90")} />
              )}
            </button>
            <button
              type="button"
              aria-label={collapsed === "second" ? "展开面板" : "折叠面板"}
              onClick={() => (collapsed === "second" ? expand("second") : collapse("second"))}
              onPointerDown={(event) => event.stopPropagation()}
              className={cn(
                collapseButtonClass,
                isHorizontal
                  ? "right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                  : "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
              )}
            >
              {collapsed === "second" ? (
                <PanelRightOpen className={cn("size-3", !isHorizontal && "-rotate-90")} />
              ) : (
                <PanelRightClose className={cn("size-3", !isHorizontal && "rotate-90")} />
              )}
            </button>
          </>
        )}
      </div>
      <div
        style={collapsed === "second" ? { flex: "0 0 0%" } : undefined}
        className="min-h-0 min-w-0 flex-1 overflow-auto"
      >
        {second}
      </div>
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
