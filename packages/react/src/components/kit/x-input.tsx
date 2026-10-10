/**
 * XInput 输入框：原生 input 的二次封装。
 * 注入 Nuxt UI 语义：variant × color、highlight、fixed、leading / trailing 内容与左侧头像。
 * 变体：outline | soft | subtle | ghost | none
 * 颜色：primary | secondary | neutral | success | info | warning | error
 * 保留 kit 既有能力：status、clearable、addon、prefix / suffix
 */
import * as React from "react"
import { X } from "lucide-react"
import { useRender } from "@base-ui/react/use-render"
import { XAvatar, type XAvatarProps } from "@/components/kit/x-avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type XInputSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XInputColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XInputVariant = "outline" | "soft" | "subtle" | "ghost" | "none"
export type XInputStatus = "error" | "warning"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XInputUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: XAvatarProps["size"]
  trailing?: string
  trailingIcon?: string
}

/** 尺寸 → 高度与内边距 */
const inputSizeClasses: Record<XInputSize, string> = {
  xs: "h-6 px-2 text-sm",
  sm: "h-7 px-2.5 text-sm",
  md: "h-8 px-2.5 text-base",
  lg: "h-9 px-3 text-base",
  xl: "h-11 px-3.5 text-base",
}

/** leading / trailing 内容存在时，控件补足的水平内边距 */
const leadingBasePaddings: Record<XInputSize, string> = {
  xs: "pl-7", sm: "pl-8", md: "pl-9", lg: "pl-10", xl: "pl-11",
}
const trailingBasePaddings: Record<XInputSize, string> = {
  xs: "pr-7", sm: "pr-8", md: "pr-9", lg: "pr-10", xl: "pr-11",
}

/** trailing 与清空按钮并存、仅清空按钮时的内边距 */
const trailingWithClearPaddings: Record<XInputSize, string> = {
  xs: "pr-10", sm: "pr-11", md: "pr-12", lg: "pr-13", xl: "pr-14",
}
const clearPaddings: Record<XInputSize, string> = {
  xs: "pr-5", sm: "pr-6", md: "pr-7", lg: "pr-8", xl: "pr-9",
}

/** leading / trailing 容器自身的内边距 */
const leadingPaddings: Record<XInputSize, string> = {
  xs: "pl-2", sm: "pl-2.5", md: "pl-2.5", lg: "pl-3", xl: "pl-3",
}
const trailingPaddings: Record<XInputSize, string> = {
  xs: "pr-2", sm: "pr-2.5", md: "pr-2.5", lg: "pr-3", xl: "pr-3",
}

/** trailing 与清空按钮并存时，容器额外避让的右内边距 */
const trailingClearExtras: Record<XInputSize, string> = {
  xs: "pr-5", sm: "pr-5", md: "pr-6", lg: "pr-7", xl: "pr-8",
}

/** 图标尺寸（随控件尺寸） */
const iconSizes: Record<XInputSize, string> = {
  xs: "size-4", sm: "size-4", md: "size-5", lg: "size-5", xl: "size-6",
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const variantClasses: Record<XInputVariant, string> = {
  outline: "bg-background ring-1 ring-inset ring-border",
  soft: "bg-muted/50 hover:bg-muted focus:bg-muted disabled:bg-muted/50",
  subtle: "bg-muted ring-1 ring-inset ring-border",
  ghost: "bg-transparent hover:bg-muted focus:bg-muted disabled:bg-transparent",
  none: "bg-transparent focus:outline-none",
}

/** 聚焦描边（颜色 × 变体）：outline / subtle 聚焦时叠加 ring */
const focusStyles: Record<XInputColor, Record<XInputVariant, string>> = {
  primary: {
    outline: "outline-primary-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary-6",
    soft: "outline-primary-6/25 focus-visible:outline-3",
    subtle: "outline-primary-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-primary-6",
    ghost: "outline-primary-6/25 focus-visible:outline-3",
    none: "",
  },
  secondary: {
    outline: "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary",
    soft: "outline-secondary/25 focus-visible:outline-3",
    subtle: "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-secondary",
    ghost: "outline-secondary/25 focus-visible:outline-3",
    none: "",
  },
  neutral: {
    outline: "outline-foreground/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-foreground",
    soft: "outline-foreground/25 focus-visible:outline-3",
    subtle: "outline-foreground/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-foreground",
    ghost: "outline-foreground/25 focus-visible:outline-3",
    none: "",
  },
  success: {
    outline: "outline-success-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success-6",
    soft: "outline-success-6/25 focus-visible:outline-3",
    subtle: "outline-success-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-success-6",
    ghost: "outline-success-6/25 focus-visible:outline-3",
    none: "",
  },
  info: {
    outline: "outline-info-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info-6",
    soft: "outline-info-6/25 focus-visible:outline-3",
    subtle: "outline-info-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-info-6",
    ghost: "outline-info-6/25 focus-visible:outline-3",
    none: "",
  },
  warning: {
    outline: "outline-warning-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning-6",
    soft: "outline-warning-6/25 focus-visible:outline-3",
    subtle: "outline-warning-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-warning-6",
    ghost: "outline-warning-6/25 focus-visible:outline-3",
    none: "",
  },
  error: {
    outline: "outline-error-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error-6",
    soft: "outline-error-6/25 focus-visible:outline-3",
    subtle: "outline-error-6/25 focus-visible:outline-3 focus-visible:ring-1 focus-visible:ring-error-6",
    ghost: "outline-error-6/25 focus-visible:outline-3",
    none: "",
  },
}

/** 高亮描边色 */
const highlightClasses: Record<XInputColor, string> = {
  primary: "ring-1 ring-inset ring-primary-6",
  secondary: "ring-1 ring-inset ring-secondary",
  neutral: "ring-1 ring-inset ring-border",
  success: "ring-1 ring-inset ring-success-6",
  info: "ring-1 ring-inset ring-info-6",
  warning: "ring-1 ring-inset ring-warning-6",
  error: "ring-1 ring-inset ring-error-6",
}

/** fixed=false 时桌面端缩小一档字号 */
const fixedTextClasses: Partial<Record<XInputSize, string>> = {
  xs: "md:text-xs",
  sm: "md:text-xs",
  md: "md:text-sm",
  lg: "md:text-sm",
}

const statusClasses: Record<XInputStatus, string> = {
  error: "border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20",
  warning: "border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20",
}

export interface XInputProps
  extends Omit<React.ComponentProps<"input">, "size" | "color" | "prefix"> {
  /** 控件尺寸 */
  size?: XInputSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: XInputColor
  /** 预设样式 */
  variant?: XInputVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 校验状态 */
  status?: XInputStatus
  /** 是否显示清空按钮 */
  clearable?: boolean
  /** 左侧头像配置 */
  avatar?: XAvatarProps
  /** 前置内容（对应 Nuxt leading 插槽） */
  leading?: React.ReactNode
  /** 后置内容（对应 Nuxt trailing 插槽） */
  trailing?: React.ReactNode
  /** 前置图标 */
  prefix?: React.ReactNode
  /** 后置图标 */
  suffix?: React.ReactNode
  /** 前置标签 */
  addonBefore?: React.ReactNode
  /** 后置标签 */
  addonAfter?: React.ReactNode
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XInputUi
  /** 点击清空按钮时回调 */
  onClear?: () => void
}

export const XInput = React.forwardRef<HTMLInputElement, XInputProps>(function XInput(
  {
    size = "md",
    color = "primary",
    variant = "outline",
    highlight = false,
    fixed = true,
    status,
    clearable = false,
    avatar,
    leading,
    trailing,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    render,
    ui,
    onClear,
    className,
    value,
    defaultValue,
    onChange,
    disabled,
    placeholder,
    maxLength,
    ...rest
  },
  ref,
) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  /* 非受控用法在组件内部跟踪当前值，用于清空按钮的显隐判断 */
  const [innerValue, setInnerValue] = React.useState(() => String(defaultValue ?? ""))
  const currentValue = value !== undefined ? String(value) : innerValue

  /* 有值且未禁用、未只读时才展示清空按钮 */
  const showClear = clearable && currentValue.length > 0 && !disabled && !rest.readOnly
  const hasLeading = leading != null || prefix != null || avatar != null
  const hasTrailing = trailing != null || suffix != null

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

  /* 合并转发 ref 与内部 ref：清空按钮需要访问真实控件 */
  const mergedRef = (node: HTMLInputElement | null) => {
    inputRef.current = node
    if (typeof ref === "function") ref(node)
    else if (ref != null) ref.current = node
  }

  const root = useRender<Record<string, unknown>, HTMLDivElement>({
    render,
    defaultTagName: "div",
    props: {
      "data-slot": "root",
      className: cn(
        "relative inline-flex items-center",
        (addonBefore != null || addonAfter != null) && "flex w-full items-stretch",
        ui?.root,
        className,
      ),
      children: (
        <>
          {addonBefore != null && (
            <span className="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              {addonBefore}
            </span>
          )}
          <input
            ref={mergedRef}
            data-slot="base"
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            className={cn(
              "w-full rounded-md border-0 appearance-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-75 transition-colors",
              inputSizeClasses[size],
              hasLeading && leadingBasePaddings[size],
              hasTrailing && (showClear ? trailingWithClearPaddings[size] : trailingBasePaddings[size]),
              showClear && !hasTrailing && clearPaddings[size],
              addonBefore != null && "rounded-l-none",
              addonAfter != null && "rounded-r-none",
              variantClasses[variant],
              focusStyles[color][variant],
              highlight && highlightClasses[color],
              fixed === false && fixedTextClasses[size],
              status && statusClasses[status],
              ui?.base,
            )}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={maxLength}
            {...rest}
          />
          {hasLeading && (
            <span
              data-slot="leading"
              className={cn("absolute inset-y-0 left-0 flex items-center", leadingPaddings[size], ui?.leading)}
            >
              {leading ??
                (prefix != null ? (
                  <span
                    className={cn(
                      "shrink-0 text-muted-foreground [&_svg]:size-full",
                      iconSizes[size],
                      ui?.leadingIcon,
                    )}
                  >
                    {prefix}
                  </span>
                ) : avatar != null ? (
                  <XAvatar
                    {...avatar}
                    data-slot="leadingAvatar"
                    size={ui?.leadingAvatarSize ?? avatar.size}
                    className={cn("shrink-0", ui?.leadingAvatar, avatar.className)}
                  />
                ) : null)}
            </span>
          )}
          {hasTrailing && (
            <span
              data-slot="trailing"
              className={cn(
                "absolute inset-y-0 right-0 flex items-center",
                trailingPaddings[size],
                showClear && trailingClearExtras[size],
                ui?.trailing,
              )}
            >
              {trailing ?? (
                <span
                  className={cn(
                    "shrink-0 text-muted-foreground [&_svg]:size-full",
                    iconSizes[size],
                    ui?.trailingIcon,
                  )}
                >
                  {suffix}
                </span>
              )}
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
          {addonAfter != null && (
            <span className="inline-flex items-center rounded-r-lg border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              {addonAfter}
            </span>
          )}
        </>
      ),
    },
  })

  return root
})
