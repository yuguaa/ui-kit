/**
 * XAvatarGroup 头像组：将多个头像重叠排列展示，超出 max 折叠为 +N。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"
import { XAvatar, type XAvatarColor, type XAvatarProps, type XAvatarSize } from "./x-avatar"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XAvatarGroupUi {
  root?: string
  base?: string
}

export interface XAvatarGroupProps extends React.ComponentProps<"div"> {
  /** 最多显示数量，超出部分折叠为 +N */
  max?: number | string
  /** 头像尺寸，透传给未指定 size 的子头像 */
  size?: XAvatarSize
  /** 透传给子头像的语义色（子头像自身指定 color 时不覆盖） */
  color?: XAvatarColor
  /** 自定义溢出标记 */
  plus?: React.ReactNode
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XAvatarGroupUi
}

/** base 环形描边与负边距（Nuxt avatar-group 主题按尺寸分档） */
const avatarGroupBaseSizeClasses: Record<XAvatarSize, string> = {
  xs: "ring -me-0.5",
  sm: "ring-2 -me-1.5",
  md: "ring-2 -me-1.5",
  lg: "ring-2 -me-1.5",
  xl: "ring-3 -me-2",
}

export function XAvatarGroup({
  max,
  size = "md",
  color,
  plus,
  render,
  ui,
  className,
  children,
  ...props
}: XAvatarGroupProps) {
  /** max 支持字符串，与 Nuxt 行为一致（parseInt） */
  const maxCount = typeof max === "string" ? Number.parseInt(max, 10) : max
  const items = React.Children.toArray(children)
  const visible = maxCount != null && maxCount > 0 ? items.slice(0, maxCount) : items
  const hiddenCount = items.length - visible.length
  const baseClass = cn("relative rounded-full ring-background", avatarGroupBaseSizeClasses[size], ui?.base)

  /** 子头像未指定 color / size 时透传头像组的配置 */
  function withGroupProps(child: React.ReactNode) {
    if (!React.isValidElement<XAvatarProps>(child) || child.type !== XAvatar) return child
    const merged: Partial<XAvatarProps> = {}
    if (color != null && child.props.color == null) merged.color = color
    if (child.props.size == null) merged.size = size
    return Object.keys(merged).length > 0 ? React.cloneElement(child, merged) : child
  }

  const content = (
    <>
      {hiddenCount > 0 && (
        <span data-slot="base" className={baseClass}>
          {plus ?? <XAvatar size={size} text={`+${hiddenCount}`} />}
        </span>
      )}
      {visible
        .slice()
        .reverse()
        .map((child, index) => (
          <span key={index} data-slot="base" className={baseClass}>
            {withGroupProps(child)}
          </span>
        ))}
    </>
  )

  const rootClass = cn("inline-flex flex-row-reverse justify-end", ui?.root, className)

  return useRender({
    defaultTagName: "div",
    props: {
      "data-slot": "root",
      className: rootClass,
      children: content,
      ...props,
    },
    render,
  })
}
