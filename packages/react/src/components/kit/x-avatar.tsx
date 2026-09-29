/**
 * XAvatar 头像：展示用户形象，支持圆形/方形、五档尺寸、图片与图标。
 */
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export type XAvatarShape = "circle" | "square"
export type XAvatarSize = "xs" | "sm" | "md" | "lg" | "xl"

const avatarSizeClasses: Record<XAvatarSize, string> = {
  xs: "size-5 text-xs",
  sm: "size-6 text-xs",
  md: "size-8 text-sm",
  lg: "size-10 text-base",
  xl: "size-12 text-lg",
}

export interface XAvatarProps extends Omit<React.ComponentProps<typeof Avatar>, "size" | "onError"> {
  /** 头像形状 */
  shape?: XAvatarShape
  /** 头像尺寸 */
  size?: XAvatarSize
  /** 图片地址 */
  src?: string
  /** 图标 */
  icon?: React.ReactNode
  /** 图片加载失败回调 */
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
}

export function XAvatar({
  shape = "circle",
  size = "md",
  src,
  icon,
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
        <AvatarImage src={src} alt={props["aria-label"] ?? "avatar"} onError={onError} />
      ) : null}
      <AvatarFallback className={cn(shape === "circle" ? "rounded-full" : "rounded-md")}>
        {icon ?? children}
      </AvatarFallback>
    </Avatar>
  )
}
