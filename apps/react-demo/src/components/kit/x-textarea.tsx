import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const statusClasses = {
  error: "border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20",
  warning: "border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20",
}

/** textarea 的值可能是数组（原生多行回填），统一转成字符串用于统计 */
function stringifyValue(value: string | number | readonly string[] | null | undefined): string {
  if (value == null) return ""
  return Array.isArray(value) ? value.join("") : String(value)
}

export interface XTextareaProps extends React.ComponentProps<typeof Textarea> {
  /** 行数 */
  rows?: number
  /** 自动调整高度 */
  autosize?: boolean
  /** 自动调整高度的行数上限，超出后内容在控件内部滚动 */
  maxRows?: number
  /** 校验状态 */
  status?: "error" | "warning"
  /** 右下角显示字数统计，设置 maxLength 时显示「当前长度 / 最大长度」 */
  showCount?: boolean
}

export const XTextarea = React.forwardRef<HTMLTextAreaElement, XTextareaProps>(function XTextarea(
  { rows = 3, autosize = false, maxRows, status, showCount = false, className, style, onChange, ...rest },
  ref,
) {
  /* 非受控时用内部状态追踪当前值，受控时直接读 value */
  const [innerValue, setInnerValue] = React.useState(() =>
    stringifyValue(rest.value ?? rest.defaultValue),
  )
  /* maxRows 换算为 lh 单位的最大高度，随控件自身行高生效 */
  const maxHeightStyle = autosize && maxRows != null ? `${maxRows}lh` : undefined

  const count = stringifyValue(rest.value !== undefined ? rest.value : innerValue).length

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (showCount) setInnerValue(event.target.value)
    onChange?.(event)
  }

  /* 未开启统计时控件自身作为根节点，结构不变 */
  if (!showCount) {
    return (
      <Textarea
        ref={ref}
        rows={rows}
        className={cn(
          status && statusClasses[status],
          autosize && "field-sizing-content resize-none",
          maxHeightStyle != null && "overflow-auto",
          className,
        )}
        style={maxHeightStyle != null ? { ...style, maxHeight: maxHeightStyle } : style}
        {...rest}
        onChange={onChange}
      />
    )
  }

  /* 统计开启时外层包一层容器，宽度样式同步到容器保证统计对齐控件右下角 */
  return (
    <div className={cn("relative w-full", className)} style={style}>
      <Textarea
        ref={ref}
        rows={rows}
        className={cn(
          status && statusClasses[status],
          autosize && "field-sizing-content resize-none",
          maxHeightStyle != null && "overflow-auto",
          "pb-6",
          className,
        )}
        style={maxHeightStyle != null ? { maxHeight: maxHeightStyle } : undefined}
        {...rest}
        onChange={handleChange}
      />
      <span className="pointer-events-none absolute right-3 bottom-2 text-xs tabular-nums text-muted-foreground">
        {rest.maxLength != null ? `${count} / ${rest.maxLength}` : count}
      </span>
    </div>
  )
})
