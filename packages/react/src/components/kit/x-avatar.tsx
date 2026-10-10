/**
 * XAvatar 头像：展示用户形象。
 * 支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标，
 * 图片加载失败时自动展示 fallback 内容。
 */
import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "@/lib/utils"
import { XChip, type XChipColor, type XChipSize } from "./x-chip"
import { XIcon, type XIconName } from "./x-icon"

export type XAvatarShape = "circle" | "square"
export type XAvatarSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XAvatarColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"
export type XAvatarChipPosition = "top-right" | "bottom-right" | "top-left" | "bottom-left"

/** chip 徽标配置：布尔表示默认圆点，对象可指定文字、颜色、尺寸与位置 */
export interface XAvatarChip {
  /** 徽标文字 */
  text?: string | number
  /** 徽标颜色 */
  color?: XChipColor
  /** 徽标尺寸 */
  size?: XChipSize
  /** 徽标位置 */
  position?: XAvatarChipPosition
  /** 徽标类名 */
  className?: string
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XAvatarUi {
  root?: string
  image?: string
  fallback?: string
  icon?: string
}

export interface XAvatarProps extends Omit<AvatarPrimitive.Root.Props, "render" | "children" | "onError"> {
  /** 头像形状 */
  shape?: XAvatarShape
  /** 头像尺寸 */
  size?: XAvatarSize
  /** 图片地址 */
  src?: string
  /** 图片替代文本，同时用于生成首字母回退 */
  alt?: string
  /** 无图片时显示的文字（如姓名首字） */
  text?: string
  /** 图标名或图标元素 */
  icon?: XIconName | React.ReactNode
  /** 语义色：文字/图标头像的背景与文字色 */
  color?: XAvatarColor
  /** 头像上的徽标 */
  chip?: boolean | XAvatarChip
  /** 图片加载失败回调 */
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XAvatarUi
  children?: React.ReactNode
}

const avatarSizeClasses: Record<XAvatarSize, string> = {
  xs: "size-5 text-xs",
  sm: "size-6 text-xs",
  md: "size-8 text-sm",
  lg: "size-10 text-base",
  xl: "size-12 text-lg",
}

/** 语义色样式：1 阶背景、7 阶文字（warning 用 8 阶保证可读性） */
const avatarColorClasses: Record<XAvatarColor, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-muted text-secondary-foreground",
  neutral: "bg-muted text-foreground",
  success: "bg-success/10 text-success",
  info: "bg-info/10 text-info",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
}

/** 圆点模式（无文字）的实心语义色 */
const chipDotClasses: Record<XChipColor, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  neutral: "bg-foreground",
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
}

export function XAvatar({
  shape = "circle",
  size,
  src,
  alt,
  text,
  icon,
  color,
  chip,
  onError,
  render,
  ui,
  className,
  children,
  ...props
}: XAvatarProps) {
  /** 图片加载失败时切换为 fallback，src 变化后重置 */
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setError(false)
  }, [src])

  function handleError(event: React.SyntheticEvent<HTMLImageElement>) {
    setError(true)
    onError?.(event)
  }

  const chipConfig: XAvatarChip | null = chip === true ? {} : (typeof chip === "object" && chip != null ? chip : null)
  const hasChipText = chipConfig != null && chipConfig.text != null
  const effectiveSize = size ?? "md"
  const effectiveColor = color ?? "neutral"

  /** fallback 文字：text 优先，其次由 alt 生成首字母（最多两个） */
  const fallbackText =
    text || (alt ?? "").split(" ").map(word => word.charAt(0)).join("").substring(0, 2)

  return (
    <AvatarPrimitive.Root
      render={render}
      data-slot="avatar"
      className={cn(
        "relative inline-flex items-center justify-center select-none",
        shape === "circle" ? "rounded-full" : "rounded-md",
        avatarSizeClasses[effectiveSize],
        ui?.root,
        className,
      )}
      {...props}
    >
      {src && !error ? (
        <AvatarPrimitive.Image
          keepMounted
          data-slot="image"
          src={src}
          alt={alt ?? text ?? "avatar"}
          className={cn("h-full w-full rounded-[inherit] object-cover", ui?.image)}
          onError={handleError}
        />
      ) : (
        <AvatarPrimitive.Fallback
          data-slot="fallback"
          className={cn(
            shape === "circle" ? "rounded-full" : "rounded-md",
            avatarColorClasses[effectiveColor],
            ui?.fallback,
          )}
        >
          {children ?? (icon != null ? (
            <span data-slot="icon" className={cn("shrink-0", ui?.icon)}>
              {typeof icon === "string" ? <XIcon name={icon as XIconName} /> : icon}
            </span>
          ) : fallbackText)}
        </AvatarPrimitive.Fallback>
      )}
      {chipConfig != null && (
        <XChip
          inset
          text={chipConfig.text}
          color={chipConfig.color ?? "primary"}
          size={chipConfig.size ?? "xs"}
          position={chipConfig.position ?? "top-right"}
          ui={{
            base: cn(
              "z-1 ring-2 ring-background",
              !hasChipText && cn("size-2 rounded-full border-0 p-0", chipDotClasses[chipConfig.color ?? "primary"]),
              chipConfig.className,
            ),
          }}
        />
      )}
    </AvatarPrimitive.Root>
  )
}
