import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export type XProgressType = "line" | "circle"
export type XProgressStatus = "normal" | "success" | "exception" | "active"

const statusIndicatorClasses: Record<XProgressStatus, string> = {
  normal: "[&_[data-slot=progress-indicator]]:bg-primary-6",
  success: "[&_[data-slot=progress-indicator]]:bg-success-6",
  exception: "[&_[data-slot=progress-indicator]]:bg-error-6",
  active: "[&_[data-slot=progress-indicator]]:bg-primary-6 [&_[data-slot=progress-indicator]]:animate-pulse",
}

export interface XProgressProps {
  /** 完成百分比 */
  percent?: number
  /** 进度类型 */
  type?: XProgressType
  /** 进度状态 */
  status?: XProgressStatus
  /** 进度条颜色 */
  strokeColor?: string
  /** 是否显示数值 */
  showInfo?: boolean
  /** 圆形直径（px） */
  size?: number
  className?: string
}

export function XProgress({
  percent = 0,
  type = "line",
  status = "normal",
  strokeColor,
  showInfo = true,
  size = 96,
  className,
}: XProgressProps) {
  const safePercent = Math.min(100, Math.max(0, percent))
  const color = strokeColor ?? undefined

  if (type === "circle") {
    const radius = 42
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (safePercent / 100) * circumference
    return (
      <span className={cn("inline-flex items-center gap-2", className)}>
        <svg width={size} height={size} viewBox="0 0 100 100" className="-rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="8" className="stroke-border" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            stroke={color ?? "currentColor"}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={cn(color == null && statusIndicatorClasses[status])}
            style={{ transition: "stroke-dashoffset 200ms ease-in-out" }}
          />
        </svg>
        {showInfo && <span className="text-sm font-medium">{safePercent}%</span>}
      </span>
    )
  }

  return (
    <span className={cn("flex w-full items-center gap-2", className)}>
      <Progress
        value={safePercent}
        className={cn(
          "h-2 flex-1 [&_[data-slot=progress-track]]:h-2",
          strokeColor == null && statusIndicatorClasses[status],
          strokeColor != null && "[&_[data-slot=progress-indicator]]:bg-(--progress-color)",
        )}
        style={strokeColor != null ? ({ "--progress-color": strokeColor } as React.CSSProperties) : undefined}
      />
      {showInfo && <span className="text-sm font-medium">{safePercent}%</span>}
    </span>
  )
}
