/**
 * XPinInput 验证码输入：shadcn input-otp 原子的二次封装。
 * 分段输入验证码，输入完成触发 onComplete。
 */
import * as React from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { cn } from "@/lib/utils"

export interface XPinInputProps {
  /** 绑定值 */
  value?: string
  /** 默认值 */
  defaultValue?: string
  /** 位数 */
  length?: number
  /** 是否掩码 */
  mask?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 输入完成回调 */
  onComplete?: (value: string) => void
  className?: string
}

export function XPinInput({
  value,
  defaultValue = "",
  length = 6,
  mask = false,
  disabled = false,
  onChange,
  onComplete,
  className,
}: XPinInputProps) {
  const [innerValue, setInnerValue] = React.useState(defaultValue)
  const current = value ?? innerValue

  const handleChange = (next: string) => {
    if (value == null) setInnerValue(next)
    onChange?.(next)
    if (next.length === length) onComplete?.(next)
  }

  return (
    <InputOTP
      maxLength={length}
      value={current}
      disabled={disabled}
      onChange={handleChange}
      onComplete={onComplete}
      className={cn(
        "gap-2",
        mask && "[&_[data-slot=input-otp-slot]]:text-transparent",
        className,
      )}
    >
      <InputOTPGroup>
        {Array.from({ length }, (_, index) => (
          <React.Fragment key={index}>
            {index === Math.floor(length / 2) && index > 0 && <InputOTPSeparator />}
            <InputOTPSlot
              index={index}
              className="h-10 w-10 rounded-lg border-input text-base"
            />
          </React.Fragment>
        ))}
      </InputOTPGroup>
    </InputOTP>
  )
}
