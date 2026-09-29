import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export type XSkeletonVariant = "text" | "circle" | "rect"

const skeletonVariantClasses: Record<XSkeletonVariant, string> = {
  text: "h-4 w-full",
  circle: "size-10 rounded-full",
  rect: "h-24 w-full rounded-md",
}

export interface XSkeletonProps extends React.ComponentProps<typeof Skeleton> {
  /** 是否显示骨架 */
  loading?: boolean
  /** 形状 */
  variant?: XSkeletonVariant
  /** 宽度（覆盖 variant 默认宽度） */
  width?: number | string
  /** 高度（覆盖 variant 默认高度） */
  height?: number | string
}

export function XSkeleton({
  loading = true,
  variant = "rect",
  width,
  height,
  className,
  style,
  children,
  ...props
}: XSkeletonProps) {
  if (!loading) return children ?? null
  return (
    <Skeleton
      className={cn(skeletonVariantClasses[variant], className)}
      style={{ width, height, ...style }}
      {...props}
    />
  )
}
