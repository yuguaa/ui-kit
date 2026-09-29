import * as React from "react"
import { cn } from "@/lib/utils"

export interface XFieldGroupProps extends React.ComponentProps<"div"> {
  /** 尺寸 */
  size?: "sm" | "md" | "lg"
  /** 是否同行排列 */
  inline?: boolean
}

const fieldGroupGapClasses = {
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
}

export function XFieldGroup({
  size = "md",
  inline = true,
  className,
  ...props
}: XFieldGroupProps) {
  return (
    <div
      className={cn(
        inline ? "flex items-start" : "flex flex-col",
        fieldGroupGapClasses[size],
        className,
      )}
      {...props}
    />
  )
}
