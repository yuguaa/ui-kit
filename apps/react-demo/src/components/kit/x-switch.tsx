import * as React from "react"
import { LoaderCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export interface XSwitchProps extends Omit<React.ComponentProps<typeof Switch>, "size"> {
  /** 选中时显示内容 */
  checkedChildren?: React.ReactNode
  /** 未选中时显示内容 */
  unCheckedChildren?: React.ReactNode
  /** 控件尺寸 */
  size?: "default" | "small"
  /** 关联文字 */
  label?: React.ReactNode
  /** 加载态：阻止交互并显示旋转图标 */
  loading?: boolean
  /** label 下方的辅助说明文字 */
  description?: React.ReactNode
}

export const XSwitch = React.forwardRef<HTMLButtonElement, XSwitchProps>(function XSwitch(
  { checkedChildren, unCheckedChildren, size = "default", label, description, loading = false, id, className, checked, disabled, ...props },
  ref,
) {
  const text = checked ? checkedChildren : unCheckedChildren
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <Switch
        ref={ref}
        id={id}
        checked={checked}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        size={size === "small" ? "sm" : "default"}
        {...props}
      />
      {loading && (
        <LoaderCircle className={cn("animate-spin", size === "small" ? "size-3" : "size-3.5")} aria-hidden="true" />
      )}
      {text != null && <span className="text-sm">{text}</span>}
      {(label != null || description != null) && (
        <span className="flex flex-col gap-0.5">
          {label != null && (
            <Label htmlFor={id} className="text-sm font-normal">
              {label}
            </Label>
          )}
          {description != null && <span className="text-xs text-muted-foreground">{description}</span>}
        </span>
      )}
    </span>
  )
})
