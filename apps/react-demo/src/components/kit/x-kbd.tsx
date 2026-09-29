import * as React from "react"
import { cn } from "@/lib/utils"

export type XKbdSize = "xs" | "sm" | "md" | "lg" | "xl"

const kbdSizeClasses: Record<XKbdSize, string> = {
  xs: "h-4 min-w-4 px-1 text-[10px]",
  sm: "h-5 min-w-5 px-1 text-xs",
  md: "h-6 min-w-6 px-1.5 text-sm",
  lg: "h-7 min-w-7 px-2 text-sm",
  xl: "h-8 min-w-8 px-2.5 text-base",
}

export interface XKbdProps extends React.ComponentProps<"kbd"> {
  /** 按键内容 */
  value?: string
  /** 尺寸 */
  size?: XKbdSize
}

export function XKbd({ value, size = "md", className, children, ...props }: XKbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-border bg-muted font-sans font-medium text-muted-foreground shadow-xs",
        kbdSizeClasses[size],
        className,
      )}
      {...props}
    >
      {value ?? children}
    </kbd>
  )
}
