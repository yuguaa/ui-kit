/**
 * XInputTags 标签输入：以标签形式输入多个值，回车添加、点击关闭移除。
 * 按 Nuxt UI input-tags 结构对齐：root > item(itemText + itemDelete > itemDeleteIcon) + input。
 * 容器注入 Nuxt UI 语义：variant × color、highlight、fixed；单个标签长度由 maxLength 限制。
 */
import * as React from "react"
import { X } from "lucide-react"
import { useRender } from "@base-ui/react/use-render"
import { Input } from "@/components/ui/input"
import { XIcon } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XInputTagsSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XInputTagsColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XInputTagsVariant = "outline" | "soft" | "subtle" | "ghost" | "none"

/** 图标：XIcon 名称或自定义组件 */
export type XInputTagsIcon = "x" | "trash" | React.ElementType

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XInputTagsUi {
  root?: string
  base?: string
  item?: string
  itemText?: string
  itemDelete?: string
  itemDeleteIcon?: string
  input?: string
  leading?: string
}

export interface XInputTagsProps
  extends Omit<React.ComponentProps<typeof Input>, "value" | "defaultValue" | "onChange" | "size"> {
  /** 标签数组 */
  value?: string[]
  /** 默认标签 */
  defaultValue?: string[]
  /** 最大标签数 */
  max?: number
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 单个标签最大长度 */
  maxLength?: number
  /** 删除标签图标 */
  deleteIcon?: XInputTagsIcon
  /** 控件尺寸 */
  size?: XInputTagsSize
  /** 组件颜色（聚焦描边与高亮） */
  color?: XInputTagsColor
  /** 预设样式 */
  variant?: XInputTagsVariant
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 挂载后自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延迟（毫秒） */
  autofocusDelay?: number
  /** 添加标签 */
  onAdd?: (tag: string) => void
  /** 删除标签 */
  onRemove?: (index: number) => void
  /** 前置内容 */
  leading?: React.ReactNode
  /** 自定义标签项渲染（对应 Vue 侧 tag 插槽） */
  tag?: (state: { tag: string; index: number }) => React.ReactNode
  /** 主题插槽类名 */
  ui?: XInputTagsUi
  className?: string
}

/** 变体样式（Nuxt UI 语义 → 本地 token） */
const tagsVariantClasses: Record<XInputTagsVariant, string> = {
  outline: "bg-background ring-1 ring-inset ring-border",
  soft: "bg-muted/50 hover:bg-muted has-focus-visible:bg-muted disabled:bg-muted/50",
  subtle: "bg-muted ring-1 ring-inset ring-border",
  ghost: "bg-transparent hover:bg-muted has-focus-visible:bg-muted disabled:bg-transparent",
  none: "bg-transparent has-focus-visible:outline-none",
}

/** 聚焦描边（颜色 × 变体）：容器内部输入聚焦时叠加 outline 与 ring */
const tagsFocusStyles: Record<XInputTagsColor, Record<XInputTagsVariant, string>> = {
  primary: {
    outline: "outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary",
    soft: "outline-primary/25 has-focus-visible:outline-3",
    subtle: "outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-primary",
    ghost: "outline-primary/25 has-focus-visible:outline-3",
    none: "",
  },
  secondary: {
    outline: "outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-secondary",
    soft: "outline-secondary/25 has-focus-visible:outline-3",
    subtle: "outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-secondary",
    ghost: "outline-secondary/25 has-focus-visible:outline-3",
    none: "",
  },
  neutral: {
    outline: "outline-foreground/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-foreground",
    soft: "outline-foreground/25 has-focus-visible:outline-3",
    subtle: "outline-foreground/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-foreground",
    ghost: "outline-foreground/25 has-focus-visible:outline-3",
    none: "",
  },
  success: {
    outline: "outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success",
    soft: "outline-success/25 has-focus-visible:outline-3",
    subtle: "outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-success",
    ghost: "outline-success/25 has-focus-visible:outline-3",
    none: "",
  },
  info: {
    outline: "outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info",
    soft: "outline-info/25 has-focus-visible:outline-3",
    subtle: "outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-info",
    ghost: "outline-info/25 has-focus-visible:outline-3",
    none: "",
  },
  warning: {
    outline: "outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning",
    soft: "outline-warning/25 has-focus-visible:outline-3",
    subtle: "outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-warning",
    ghost: "outline-warning/25 has-focus-visible:outline-3",
    none: "",
  },
  error: {
    outline: "outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error",
    soft: "outline-error/25 has-focus-visible:outline-3",
    subtle: "outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-1 has-focus-visible:ring-error",
    ghost: "outline-error/25 has-focus-visible:outline-3",
    none: "",
  },
}

/** 高亮描边色 */
const tagsHighlightClasses: Record<XInputTagsColor, string> = {
  primary: "ring-1 ring-inset ring-primary",
  secondary: "ring-1 ring-inset ring-secondary",
  neutral: "ring-1 ring-inset ring-border",
  success: "ring-1 ring-inset ring-success",
  info: "ring-1 ring-inset ring-info",
  warning: "ring-1 ring-inset ring-warning",
  error: "ring-1 ring-inset ring-error",
}

/** fixed=false 时桌面端缩小一档字号 */
const tagsFixedTextClasses: Partial<Record<XInputTagsSize, string>> = {
  xs: "md:text-xs",
  sm: "md:text-xs",
  md: "md:text-sm",
  lg: "md:text-sm",
}

/** 标签文字尺寸 */
const tagsItemSizeClasses: Record<XInputTagsSize, string> = {
  xs: "text-[10px]/3",
  sm: "text-[10px]/3",
  md: "text-xs",
  lg: "text-xs",
  xl: "text-sm",
}

/** 删除图标尺寸 */
const tagsDeleteIconSizeClasses: Record<XInputTagsSize, string> = {
  xs: "size-3",
  sm: "size-3",
  md: "size-3.5",
  lg: "size-3.5",
  xl: "size-4",
}

function isIconName(icon: XInputTagsIcon): icon is "x" | "trash" {
  return typeof icon === "string"
}

export function XInputTags({
  value,
  defaultValue = [],
  max,
  placeholder = "输入后回车添加…",
  disabled = false,
  maxLength,
  deleteIcon = "x",
  size = "md",
  color = "primary",
  variant = "outline",
  highlight = false,
  fixed = true,
  render,
  autofocus = false,
  autofocusDelay = 0,
  onAdd,
  onRemove,
  leading,
  tag,
  ui,
  className,
  ...props
}: XInputTagsProps) {
  const [innerValue, setInnerValue] = React.useState<string[]>(defaultValue)
  const [draft, setDraft] = React.useState("")
  const tags = value ?? innerValue
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (!autofocus) return
    const timeoutId = setTimeout(() => inputRef.current?.focus(), autofocusDelay)
    return () => clearTimeout(timeoutId)
  }, [autofocus, autofocusDelay])

  const addTag = (raw: string) => {
    const tag = raw.trim()
    if (!tag || tags.includes(tag)) return
    if (max != null && tags.length >= max) return
    const next = [...tags, tag]
    if (value == null) setInnerValue(next)
    setDraft("")
    onAdd?.(tag)
  }

  const removeTag = (index: number) => {
    const next = tags.filter((_, i) => i !== index)
    if (value == null) setInnerValue(next)
    onRemove?.(index)
  }

  /* maxLength 限制单个标签长度 */
  const onDraftChange = (raw: string) => {
    setDraft(maxLength != null ? raw.slice(0, maxLength) : raw)
  }

  const DeleteIcon = isIconName(deleteIcon) ? null : deleteIcon
  const renderDeleteIcon = () => {
    if (isIconName(deleteIcon)) {
      return <XIcon name={deleteIcon} data-slot="itemDeleteIcon" className={cn("shrink-0", tagsDeleteIconSizeClasses[size], ui?.itemDeleteIcon)} />
    }
    const Comp = DeleteIcon ?? X
    return <Comp data-slot="itemDeleteIcon" className={cn("shrink-0", tagsDeleteIconSizeClasses[size], ui?.itemDeleteIcon)} />
  }

  return useRender({
    defaultTagName: "span",
    props: {
      "data-slot": "root",
      className: cn(
        "relative inline-flex w-full flex-wrap items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors",
        tagsVariantClasses[variant],
        tagsFocusStyles[color][variant],
        highlight && tagsHighlightClasses[color],
        fixed === false && tagsFixedTextClasses[size],
        disabled && "pointer-events-none opacity-50",
        ui?.base,
        ui?.root,
        className,
      ),
      children: (
        <>
          {tags.map((item, index) =>
            tag ? (
              <React.Fragment key={`${item}-${index}`}>{tag({ tag: item, index })}</React.Fragment>
            ) : (
              <span
                key={`${item}-${index}`}
                data-slot="item"
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-xs px-1.5 py-0.5 font-medium ring-1 ring-inset ring-border bg-muted text-foreground",
                  tagsItemSizeClasses[size],
                  ui?.item,
                )}
              >
                <span data-slot="itemText" className={cn(ui?.itemText)}>
                  {item}
                </span>
                <button
                  type="button"
                  data-slot="itemDelete"
                  aria-label="close"
                  disabled={disabled}
                  onClick={() => removeTag(index)}
                  className={cn(
                    "inline-flex items-center rounded-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none",
                    ui?.itemDelete,
                  )}
                >
                  {renderDeleteIcon()}
                </button>
              </span>
            ),
          )}
          {leading != null && (
            <span data-slot="leading" className={cn("inline-flex items-center", ui?.leading)}>
              {leading}
            </span>
          )}
          <Input
            ref={inputRef}
            value={draft}
            disabled={disabled || (max != null && tags.length >= max)}
            onChange={(event) => onDraftChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault()
                addTag(draft)
              }
              if (event.key === "Backspace" && !draft && tags.length > 0) {
                removeTag(tags.length - 1)
              }
            }}
            onBlur={() => addTag(draft)}
            placeholder={tags.length === 0 ? placeholder : ""}
            {...props}
            className={cn(
              "h-6 min-w-24 flex-1 border-0 bg-transparent p-0 text-sm shadow-none outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-75",
              ui?.input,
            )}
          />
        </>
      ),
    },
    render,
    state: { slot: "root" },
  })
}
