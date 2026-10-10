/**
 * XSkeleton 骨架屏：内容加载时的占位骨架。
 * loading 为 true 时渲染骨架，为 false 时渲染子元素中的真实内容。
 * 骨架元素带 aria-busy / aria-label / aria-live / role 无障碍标记。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XSkeletonVariant = "text" | "circle" | "rect"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XSkeletonUi {
  base?: string
}

const skeletonVariantClasses: Record<XSkeletonVariant, string> = {
  text: "h-4 w-full",
  circle: "size-10 rounded-full",
  rect: "h-24 w-full rounded-md",
}

export interface XSkeletonProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  /** 是否显示骨架 */
  loading?: boolean
  /** 形状 */
  variant?: XSkeletonVariant
  /** 宽度（覆盖 variant 默认宽度） */
  width?: number | string
  /** 高度（覆盖 variant 默认高度） */
  height?: number | string
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XSkeletonUi
  children?: React.ReactNode
}

export function XSkeleton({
  loading = true,
  variant = "rect",
  width,
  height,
  render,
  ui,
  className,
  style,
  children,
  ...rest
}: XSkeletonProps) {
  if (!loading) return children ?? null

  return useRender({
    render,
    props: {
      "data-slot": "skeleton",
      "aria-busy": true,
      "aria-label": "loading",
      "aria-live": "polite",
      role: "alert",
      className: cn(
        "animate-pulse rounded-md bg-muted",
        skeletonVariantClasses[variant],
        ui?.base,
        className,
      ),
      style: { width, height, ...style },
      children,
      ...rest,
    },
  })
}
