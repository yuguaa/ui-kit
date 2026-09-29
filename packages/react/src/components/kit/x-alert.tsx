/**
 * XAlert 警告提示：展示需要关注的信息，提供四种语义。
 */
import * as React from "react"
import { CircleAlert, CircleCheck, Info, OctagonX, X } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { XButton } from "@/components/kit/x-button"
import { cn } from "@/lib/utils"

export type XAlertType = "success" | "info" | "warning" | "error"

const alertTypeClasses: Record<XAlertType, string> = {
  success: "bg-success-1 text-success-8",
  info: "bg-info-1 text-info-8",
  warning: "bg-warning-1 text-warning-8",
  error: "bg-error-1 text-error-8",
}
const alertIcons: Record<XAlertType, React.ReactNode> = {
  success: <CircleCheck className="size-4" />,
  info: <Info className="size-4" />,
  warning: <CircleAlert className="size-4" />,
  error: <OctagonX className="size-4" />,
}

export interface XAlertProps {
  /** 提示类型 */
  type?: XAlertType
  /** 提示标题 */
  message?: React.ReactNode
  /** 辅助说明文字 */
  description?: React.ReactNode
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 是否显示图标 */
  showIcon?: boolean
  /** 点击关闭按钮时的回调 */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export function XAlert({
  type = "info",
  message,
  description,
  closable = false,
  showIcon = false,
  onClose,
  className,
}: XAlertProps) {
  const [visible, setVisible] = React.useState(true)

  if (!visible) return null

  return (
    <Alert className={cn("flex items-start gap-2.5", alertTypeClasses[type], className)}>
      {showIcon && <span className="mt-0.5 shrink-0">{alertIcons[type]}</span>}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        {message != null && <AlertTitle>{message}</AlertTitle>}
        {description != null && <AlertDescription>{description}</AlertDescription>}
      </div>
      {closable && (
        <AlertAction>
          <XButton
            variant="ghost"
            color="neutral"
            size="sm"
            aria-label="关闭"
            className="h-6 w-6 shrink-0 p-0"
            onClick={(event) => {
              setVisible(false)
              onClose?.(event)
            }}
          >
            <X className="size-3.5" />
          </XButton>
        </AlertAction>
      )}
    </Alert>
  )
}
