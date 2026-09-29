/**
 * XSwitch 开关：shadcn switch 原子的二次封装。
 * 支持选中/未选中文字内容与 default / small 两档尺寸。
 */
import * as React from "react"
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
}

export const XSwitch = React.forwardRef<HTMLButtonElement, XSwitchProps>(function XSwitch(
  { checkedChildren, unCheckedChildren, size = "default", label, id, className, checked, ...props },
  ref,
) {
  const text = checked ? checkedChildren : unCheckedChildren
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <Switch ref={ref} id={id} checked={checked} size={size === "small" ? "sm" : "default"} {...props} />
      {text != null && <span className="text-sm">{text}</span>}
      {label != null && (
        <Label htmlFor={id} className="text-sm font-normal">
          {label}
        </Label>
      )}
    </span>
  )
})
