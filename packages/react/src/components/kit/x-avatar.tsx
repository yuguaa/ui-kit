/**
 * XAvatar 头像：展示用户形象，支持圆形/方形、五档尺寸、图片、图标与文字。
 */
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export type XAvatarShape = "circle" | "square"
export type XAvatarSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XAvatarColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"

const avatarSizeClasses: Record<XAvatarSize, string> = {
  xs: "size-5 text-xs",
  sm: "size-6 text-xs",
  md: "size-8 text-sm",
  lg: "size-10 text-base",
  xl: "size-12 text-lg",
}

/** 语义色样式：1 阶背景、7 阶文字（warning 用 8 阶保证可读性） */
const avatarColorClasses: Record<XAvatarColor, string> = {
  primary: "bg-primary-1 text-primary-7",
  secondary: "bg-muted text-secondary-foreground",
  neutral: "bg-neutral-1 text-neutral-7",
  success: "bg-success-1 text-success-7",
  info: "bg-info-1 text-info-7",
  warning: "bg-warning-1 text-warning-8",
  error: "bg-error-1 text-error-7",
}

export interface XAvatarProps extends Omit<React.ComponentProps<typeof Avatar>, "size" | "onError"> {
  /** 头像形状 */
  shape?: XAvatarShape
  /** 头像尺寸 */
  size?: XAvatarSize
  /** 图片地址 */
  src?: string
  /** 图片替代文本，缺省回退到 text */
  alt?: string
  /** 无图片时显示的文字（如姓名首字） */
  text?: string
  /** 图标 */
  icon?: React.ReactNode
  /** 语义色：文字/图标头像的背景与文字色 */
  color?: XAvatarColor
  /** 图片加载失败回调 */
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
}

export function XAvatar({
  shape = "circle",
  size = "md",
  src,
  alt,
  text,
  icon,
  color = "neutral",
  onError,
  className,
  children,
  ...props
}: XAvatarProps) {
  return (
    <Avatar
      className={cn(
        shape === "circle" ? "rounded-full" : "rounded-md",
        avatarSizeClasses[size],
        className,
      )}
      {...props}
    >
      {src ? (
        <AvatarImage src={src} alt={alt ?? text ?? props["aria-label"] ?? "avatar"} onError={onError} />
      ) : null}
      <AvatarFallback
        className={cn(
          shape === "circle" ? "rounded-full" : "rounded-md",
          avatarColorClasses[color],
        )}
      >
        {children ?? icon ?? text}
      </AvatarFallback>
    </Avatar>
  )
}
