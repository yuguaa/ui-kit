/**
 * XLink 链接：页面内或跨页面的超链接。
 * 与 Nuxt UI Link 对齐：active / inactiveClass / ui.base / render，
 * 保留 kit 既有 color 语义与 leading / trailing 图标属性。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/lib/utils"

export type XLinkColor = "primary" | "secondary" | "neutral"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XLinkUi {
  base?: string
}

const linkColorClasses: Record<XLinkColor, string> = {
  primary: "text-primary hover:text-primary/75",
  secondary: "text-foreground hover:text-muted-foreground",
  neutral: "text-muted-foreground hover:text-foreground",
}

export interface XLinkProps extends Omit<React.ComponentProps<"a">, "href" | "children"> {
  /** 链接地址 */
  to?: string
  /** 颜色 */
  color?: XLinkColor
  /** 激活态 */
  active?: boolean
  /** 非激活态附加类名 */
  inactiveClass?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XLinkUi
  /** 前置图标 */
  leading?: React.ReactNode
  /** 后置图标 */
  trailing?: React.ReactNode
  children?: React.ReactNode
}

export function XLink({
  to,
  color = "primary",
  active = false,
  inactiveClass,
  disabled = false,
  render,
  ui,
  leading,
  trailing,
  className,
  children,
  onClick,
  ...rest
}: XLinkProps) {
  return useRender({
    defaultTagName: "a",
    render,
    props: {
      href: disabled ? undefined : to,
      "aria-current": active ? "page" : undefined,
      "aria-disabled": disabled || undefined,
      className: cn(
        "inline-flex items-center gap-1 rounded text-sm font-medium transition-colors outline-none cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50",
        linkColorClasses[color],
        active && "text-primary/75 underline underline-offset-4",
        !active && inactiveClass,
        disabled && "cursor-not-allowed opacity-75",
        ui?.base,
        className,
      ),
      onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!to || disabled) event.preventDefault()
        onClick?.(event)
      },
      children: (
        <>
          {leading}
          {children}
          {trailing}
        </>
      ),
      ...rest,
    },
  })
}
