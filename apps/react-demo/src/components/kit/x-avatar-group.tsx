import * as React from "react"
import { cn } from "@/lib/utils"

export type XAvatarGroupSize = "xs" | "sm" | "md" | "lg" | "xl"

const avatarGroupSizeClasses: Record<XAvatarGroupSize, string> = {
  xs: "size-5 text-[10px]",
  sm: "size-6 text-xs",
  md: "size-8 text-sm",
  lg: "size-10 text-base",
  xl: "size-12 text-lg",
}

export interface XAvatarGroupProps extends React.ComponentProps<"div"> {
  /** 最多显示数量 */
  max?: number
  /** 头像尺寸 */
  size?: XAvatarGroupSize
  /** 自定义溢出标记 */
  plus?: React.ReactNode
}

export function XAvatarGroup({
  max = 4,
  size = "md",
  plus,
  className,
  children,
  ...props
}: XAvatarGroupProps) {
  const items = React.Children.toArray(children)
  const visible = items.slice(0, Math.max(max - 1, 1))
  const overflow = items.length - visible.length

  return (
    <div className={cn("inline-flex items-center -space-x-2", className)} {...props}>
      {visible.map((child, index) => (
        <span key={index} className="relative inline-flex rounded-full ring-2 ring-background">
          {child}
        </span>
      ))}
      {overflow > 0 &&
        (plus ?? (
          <span
            className={cn(
              "relative z-1 inline-flex items-center justify-center rounded-full border border-border bg-muted font-medium text-muted-foreground ring-2 ring-background",
              avatarGroupSizeClasses[size],
            )}
          >
            +{overflow}
          </span>
        ))}
    </div>
  )
}
