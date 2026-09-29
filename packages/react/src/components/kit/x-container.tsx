/**
 * XContainer 容器：约束内容宽度的居中布局容器。
 */
import * as React from "react"
import { cn } from "@/lib/utils"

export type XContainerSize = "xs" | "sm" | "md" | "lg" | "xl"

/** 最大宽度：640 / 768 / 1024 / 1280 / 1536 */
const containerSizeClasses: Record<XContainerSize, string> = {
  xs: "max-w-160",
  sm: "max-w-192",
  md: "max-w-256",
  lg: "max-w-320",
  xl: "max-w-384",
}

export interface XContainerProps extends React.ComponentProps<"div"> {
  /** 最大宽度 */
  size?: XContainerSize
  /** 渲染标签 */
  as?: keyof React.JSX.IntrinsicElements
}

export function XContainer({ size = "lg", as: Tag = "div", className, ...props }: XContainerProps) {
  const Comp = Tag as React.ElementType
  return <Comp className={cn("mx-auto w-full px-4", containerSizeClasses[size], className)} {...props} />
}
