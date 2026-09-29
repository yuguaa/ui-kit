import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const statusClasses = {
  error: "border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20",
  warning: "border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20",
}

export interface XTextareaProps extends React.ComponentProps<typeof Textarea> {
  /** 行数 */
  rows?: number
  /** 自动调整高度 */
  autosize?: boolean
  /** 校验状态 */
  status?: "error" | "warning"
}

export const XTextarea = React.forwardRef<HTMLTextAreaElement, XTextareaProps>(function XTextarea(
  { rows = 3, autosize = false, status, className, style, ...props },
  ref,
) {
  return (
    <Textarea
      ref={ref}
      rows={rows}
      className={cn(status && statusClasses[status], autosize && "field-sizing-content resize-none", className)}
      style={style}
      {...props}
    />
  )
})
