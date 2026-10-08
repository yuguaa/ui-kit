import * as React from "react"
import { X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
  /** 是否显示清空按钮 */
  clearable?: boolean
  /** 点击清空按钮时回调 */
  onClear?: () => void
}

export const XInput = React.forwardRef<HTMLInputElement, XInputProps>(function XInput(
  {
    size = "md",
    status,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    clearable = false,
    onClear,
    className,
    value,
    defaultValue,
    onChange,
    ...props
  },
  ref,
) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  React.useImperativeHandle(ref, () => inputRef.current!, [])

  /* 非受控用法在组件内部跟踪当前值，用于清空按钮的显隐判断 */
  const [innerValue, setInnerValue] = React.useState(() => String(defaultValue ?? ""))
  const currentValue = value !== undefined ? String(value) : innerValue

  /* 有值且未禁用、未只读时才展示清空按钮 */
  const showClear = clearable && currentValue.length > 0 && !props.disabled && !props.readOnly

  /** 清空值：用原生 setter 写入再派发 input 事件，受控与非受控都能同步值与 onChange */
  function handleClear() {
    const input = inputRef.current
    if (input != null) {
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set
      setter?.call(input, "")
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.focus()
    }
    onClear?.()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (value === undefined) setInnerValue(event.target.value)
    onChange?.(event)
  }

  const inner = (
    <span className="relative flex w-full items-center">
      {prefix != null && (
        <span className="pointer-events-none absolute left-3 flex items-center text-muted-foreground [&_svg]:size-4">
          {prefix}
        </span>
      )}
      <Input
        ref={inputRef}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={cn(
          inputSizeClasses[size],
          prefix != null && "pl-9",
          suffix != null && (showClear ? "pr-12" : "pr-9"),
          showClear && suffix == null && "pr-7",
          status && inputStatusClasses[status],
          className,
        )}
        {...props}
      />
      {suffix != null && (
        <span
          className={cn(
            "pointer-events-none absolute flex items-center text-muted-foreground [&_svg]:size-4",
            showClear ? "right-8" : "right-3",
          )}
        >
          {suffix}
        </span>
      )}
      {showClear && (
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          aria-label="清空"
          onClick={handleClear}
          className="absolute right-2 size-4 rounded-full text-muted-foreground opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3.5"
        >
          <X />
        </Button>
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
