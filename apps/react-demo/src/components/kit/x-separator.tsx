import * as React from "react"
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"
import { cn } from "@/lib/utils"
import { XAvatar, type XAvatarProps, type XAvatarSize } from "./x-avatar"
import { XIcon, type XIconName } from "./x-icon"

export type XSeparatorOrientation = "horizontal" | "vertical"
export type XSeparatorPosition = "start" | "center" | "end"
export type XSeparatorType = "solid" | "dashed" | "dotted"
export type XSeparatorSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XSeparatorColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XSeparatorUi {
  root?: string
  border?: string
  container?: string
  icon?: string
  avatar?: string
  /** 头像尺寸（值语义，与 Nuxt 主题 avatarSize 键一致） */
  avatarSize?: XAvatarSize
  label?: string
}

export interface XSeparatorProps
  extends Omit<React.ComponentProps<typeof SeparatorPrimitive>, "orientation" | "render" | "children"> {
  /** 方向 */
  orientation?: XSeparatorOrientation
  /** 纯装饰分割线，不渲染无障碍角色 */
  decorative?: boolean
  /** 标签文字 */
  label?: string
  /** 标签图标 */
  icon?: XIconName
  /** 标签头像 */
  avatar?: XAvatarProps
  /** 语义色 */
  color?: XSeparatorColor
  /** 边框粗细 */
  size?: XSeparatorSize
  /** 线条样式 */
  type?: XSeparatorType
  /** 标签位置 */
  position?: XSeparatorPosition
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XSeparatorUi
  children?: React.ReactNode
}

/** 语义色边框（Nuxt separator color 变体） */
const separatorBorderColorClasses: Record<XSeparatorColor, string> = {
  primary: "border-primary-6",
  secondary: "border-secondary",
  neutral: "border-border",
  success: "border-success-6",
  info: "border-info-6",
  warning: "border-warning-6",
  error: "border-error-6",
}

/** 边框粗细（Nuxt separator size 变体） */
const separatorHorizontalBorderSizeClasses: Record<XSeparatorSize, string> = {
  xs: "",
  sm: "border-t-[2px]",
  md: "border-t-[3px]",
  lg: "border-t-[4px]",
  xl: "border-t-[5px]",
}
const separatorVerticalBorderSizeClasses: Record<XSeparatorSize, string> = {
  xs: "",
  sm: "border-s-[2px]",
  md: "border-s-[3px]",
  lg: "border-s-[4px]",
  xl: "border-s-[5px]",
}

/** 线条样式 */
const separatorTypeClasses: Record<XSeparatorType, string> = {
  solid: "",
  dashed: "border-dashed",
  dotted: "border-dotted",
}

/** 容器与线条的间距（Nuxt separator position 变体） */
const separatorContainerPositionClasses: Record<XSeparatorOrientation, Record<XSeparatorPosition, string>> = {
  horizontal: { start: "me-3", center: "mx-3", end: "ms-3" },
  vertical: { start: "mb-2", center: "my-2", end: "mt-2" },
}

export function XSeparator({
  orientation = "horizontal",
  decorative = false,
  label,
  icon,
  avatar,
  color = "neutral",
  size = "xs",
  type = "solid",
  position = "center",
  render,
  ui,
  className,
  children,
  ...props
}: XSeparatorProps) {
  const horizontal = orientation === "horizontal"
  const hasContent = label != null || icon != null || avatar != null || children != null

  const rootClass = cn(
    "flex items-center text-center",
    horizontal ? "w-full flex-row" : "h-full flex-col",
    ui?.root,
    className,
  )

  const borderClass = cn(
    horizontal ? "w-full border-t" : "h-full border-s",
    separatorTypeClasses[type],
    separatorBorderColorClasses[color],
    horizontal ? separatorHorizontalBorderSizeClasses[size] : separatorVerticalBorderSizeClasses[size],
    ui?.border,
  )

  const containerClass = cn(
    "flex items-center font-medium text-sm text-muted-foreground",
    horizontal && "whitespace-nowrap",
    separatorContainerPositionClasses[orientation][position],
    ui?.container,
  )

  const container = hasContent ? (
    <div data-slot="container" className={containerClass}>
      {children ?? (
        <>
          {label != null && (
            <span data-slot="label" className={cn("text-sm", ui?.label)}>
              {label}
            </span>
          )}
          {label == null && icon != null && <XIcon name={icon} data-slot="icon" className={cn("shrink-0 size-5", ui?.icon)} />}
          {label == null && icon == null && avatar != null && (
            <XAvatar
              {...avatar}
              size={avatar.size ?? ui?.avatarSize ?? "xs"}
              className={cn("shrink-0", ui?.avatar, avatar.className)}
            />
          )}
        </>
      )}
    </div>
  ) : null

  const border = <div data-slot="border" className={borderClass} />

  return (
    <SeparatorPrimitive
      render={render}
      data-slot="separator"
      orientation={orientation}
      {...(decorative
        ? ({ role: "none", "aria-orientation": null } as Record<string, unknown>)
        : {})}
      className={rootClass}
      {...props}
    >
      {hasContent && position === "start" && container}
      {border}
      {hasContent && position === "center" && container}
      {hasContent && position === "center" && border}
      {hasContent && position === "end" && container}
    </SeparatorPrimitive>
  )
}
