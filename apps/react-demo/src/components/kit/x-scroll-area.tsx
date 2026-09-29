import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export interface XScrollAreaProps {
  /** 区域高度 */
  height?: number | string
  /** 滚动条显示时机 */
  type?: "auto" | "always" | "hover"
  /** 滚动内容 */
  children?: React.ReactNode
  className?: string
}

export interface XScrollAreaApi {
  scrollTo: (top: number) => void
}

export const XScrollArea = React.forwardRef<XScrollAreaApi, XScrollAreaProps>(function XScrollArea(
  { height, type = "auto", children, className },
  ref,
) {
  const viewportRef = React.useRef<HTMLDivElement>(null)

  React.useImperativeHandle(ref, () => ({
    scrollTo: (top: number) => {
      viewportRef.current?.scrollTo({ top })
    },
  }))

  return (
    <ScrollArea
      className={cn(
        "w-full",
        type === "always" && "[&_[data-slot=scroll-area-scrollbar]]:opacity-100",
        type === "hover" && "[&_[data-slot=scroll-area-scrollbar]]:opacity-0 hover:[&_[data-slot=scroll-area-scrollbar]]:opacity-100",
        className,
      )}
      style={height != null ? { height } : undefined}
    >
      <div ref={viewportRef} className="flex flex-col gap-1 p-1">
        {children}
      </div>
      <ScrollBar />
    </ScrollArea>
  )
})

/* ============================ vben 风格 hook ============================ */

export interface XScrollAreaInstanceApi {
  /** 滚动到指定位置 */
  scrollTo: (top: number) => void
}

/** 创建与 api 绑定的滚动区域：调用即得 [ScrollArea, scrollAreaApi] */
export function useXScrollArea(options: Partial<XScrollAreaProps> = {}) {
  const areaRef = React.useRef<XScrollAreaApi>(null)
  const api = React.useMemo<XScrollAreaInstanceApi>(
    () => ({
      scrollTo: (top: number) => areaRef.current?.scrollTo(top),
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
