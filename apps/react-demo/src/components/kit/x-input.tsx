import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export type XInputSize = "sm" | "md"
export type XInputStatus = "error" | "warning"

const inputSizeClasses: Record<XInputSize, string> = {
  sm: "h-7 px-2 text-sm",
  md: "h-9 px-3 text-sm",
}

const inputStatusClasses: Record<XInputStatus, string> = {
  error:
    "border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20 aria-invalid:border-error-6",
  warning:
    "border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20 aria-invalid:border-warning-6",
}

export interface XInputProps extends Omit<React.ComponentProps<typeof Input>, "size" | "prefix"> {
  /** 控件尺寸 */
  size?: XInputSize
  /** 校验状态 */
  status?: XInputStatus
  /** 前置图标 */
  prefix?: React.ReactNode
  /** 后置图标 */
  suffix?: React.ReactNode
  /** 前置标签 */
  addonBefore?: React.ReactNode
  /** 后置标签 */
  addonAfter?: React.ReactNode
}

export const XInput = React.forwardRef<HTMLInputElement, XInputProps>(function XInput(
  { size = "md", status, prefix, suffix, addonBefore, addonAfter, className, ...props },
  ref,
) {
  const inner = (
    <span className="relative flex w-full items-center">
      {prefix != null && (
        <span className="pointer-events-none absolute left-3 flex items-center text-muted-foreground [&_svg]:size-4">
          {prefix}
        </span>
      )}
      <Input
        ref={ref}
        className={cn(
          inputSizeClasses[size],
          prefix != null && "pl-9",
          suffix != null && "pr-9",
          status && inputStatusClasses[status],
          className,
        )}
        {...props}
      />
      {suffix != null && (
        <span className="pointer-events-none absolute right-3 flex items-center text-muted-foreground [&_svg]:size-4">
          {suffix}
        </span>
      )}
    </span>
  )

  if (addonBefore == null && addonAfter == null) return inner

  return (
    <span className="flex w-full items-stretch">
      {addonBefore != null && (
        <span className="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
          {addonBefore}
        </span>
      )}
      <span
        className={cn(
          "flex-1",
          addonBefore != null && "[&_input]:rounded-l-none",
          addonAfter != null && "[&_input]:rounded-r-none",
        )}
      >
        {inner}
      </span>
      {addonAfter != null && (
        <span className="inline-flex items-center rounded-r-lg border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground">
          {addonAfter}
        </span>
      )}
    </span>
  )
})
