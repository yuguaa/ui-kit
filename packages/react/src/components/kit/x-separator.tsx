/**
 * XSeparator 分割线：在内容之间插入水平或垂直分隔。
 */
import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export interface XSeparatorProps extends React.ComponentProps<typeof Separator> {
  /** 方向 */
  orientation?: "horizontal" | "vertical"
  /** 颜色 */
  color?: string
}

export function XSeparator({
  orientation = "horizontal",
  color,
  className,
  style,
  ...props
}: XSeparatorProps) {
  return (
    <Separator
      orientation={orientation}
      className={cn(
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      style={color ? { backgroundColor: color, ...style } : style}
      {...props}
    />
  )
}
