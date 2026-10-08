/**
 * XSeparator 分割线：在内容之间插入水平或垂直分隔，可带标签与自定义线条样式。
 */
import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export type XSeparatorOrientation = "horizontal" | "vertical"
export type XSeparatorPosition = "start" | "center" | "end"
export type XSeparatorType = "solid" | "dashed" | "dotted"

export interface XSeparatorProps extends React.ComponentProps<typeof Separator> {
  /** 方向 */
  orientation?: XSeparatorOrientation
  /** 线条颜色 */
  color?: string
  /** 标签内容 */
  label?: React.ReactNode
  /** 标签位置（仅水平方向带标签时生效） */
  position?: XSeparatorPosition
  /** 线条样式 */
  type?: XSeparatorType
}

/** 虚线 / 点线样式 */
const separatorTypeClasses: Record<XSeparatorType, string> = {
  solid: "",
  dashed: "border-dashed",
  dotted: "border-dotted",
}

export function XSeparator({
  orientation = "horizontal",
  color,
  label,
  position = "center",
  type = "solid",
  className,
  style,
  children,
  ...props
}: XSeparatorProps) {
  const content = label ?? children
  const withLabel = orientation === "horizontal" && content != null
  const labelLineClass = cn("flex-1 border-t", separatorTypeClasses[type])
  const labelLineStyle = color ? { borderColor: color } : undefined

  return (
    <Separator
      orientation={orientation}
      className={cn(
        withLabel
          ? "flex items-center gap-3 bg-transparent text-xs text-muted-foreground data-horizontal:h-auto"
          : type === "solid"
            ? orientation === "horizontal"
              ? "h-px w-full"
              : "h-full w-px"
            : cn(
                "bg-transparent",
                separatorTypeClasses[type],
                orientation === "horizontal" ? "h-px w-full border-t" : "h-full w-px border-l",
              ),
        className,
      )}
      style={!withLabel && type === "solid" && color ? { backgroundColor: color, ...style } : style}
      {...props}
    >
      {withLabel ? (
        <>
          {position !== "start" && <span className={labelLineClass} style={labelLineStyle} />}
          <span className="flex shrink-0 items-center gap-1.5">{content}</span>
          {position !== "end" && <span className={labelLineClass} style={labelLineStyle} />}
        </>
      ) : null}
    </Separator>
  )
}
