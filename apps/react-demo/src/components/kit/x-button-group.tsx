import * as React from "react"
import { cn } from "@/lib/utils"

export interface XButtonGroupProps extends React.ComponentProps<"div"> {
  /** 排列方向 */
  orientation?: "horizontal" | "vertical"
}

export function XButtonGroup({ orientation = "horizontal", className, ...props }: XButtonGroupProps) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(
        "inline-flex",
        orientation === "horizontal"
          ? "flex-row items-center [&>*+*]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none"
          : "flex-col items-stretch [&>*+*]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
        className,
      )}
      {...props}
    />
  )
}
