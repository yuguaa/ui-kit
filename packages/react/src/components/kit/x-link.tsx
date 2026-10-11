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
  /** 激活态附加类名 */
  activeClass?: string
  /** 非激活态附加类名 */
  inactiveClass?: string
  /** 激活时输出的 aria-current 值 */
  ariaCurrentValue?: string
  /** 强制视为外链，自动补充 noopener noreferrer */
  external?: boolean
  /** 关闭 rel 自动补充，仅保留显式传入的 rel */
  noRel?: boolean
  /** 只应用 class / activeClass / inactiveClass，跳过主题样式 */
  raw?: boolean
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

/** 协议判定：http: / mailto: 等协议或 // 协议相对地址 */
function hasProtocol(value: string) {
  return /^[a-z][a-z0-9+.-]*:/i.test(value) || value.startsWith("//")
}

export function XLink({
  to,
  color = "primary",
  active = false,
  activeClass,
  inactiveClass,
  ariaCurrentValue = "page",
  external = false,
  noRel = false,
  raw = false,
  disabled = false,
  render,
  ui,
  leading,
  trailing,
  className,
  children,
  onClick,
  target,
  rel,
  ...rest
}: XLinkProps) {
  /* 外链判定：显式 external 或地址带协议 */
  const isExternal = external || (to != null && hasProtocol(to))

  /* rel 默认值：外链或新窗口打开自动补 noopener noreferrer，noRel 时关闭 */
  const resolvedRel = noRel
    ? rel
    : (rel ?? ((isExternal || (target != null && target !== "_self")) ? "noopener noreferrer" : undefined))

  /* 主题样式：raw 时跳过，只保留 class 相关类名 */
  const themeClass = raw
    ? undefined
    : cn(
        "inline-flex items-center gap-1 rounded text-sm font-medium transition-colors outline-none cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50",
        linkColorClasses[color],
        active && "text-primary/75 underline underline-offset-4",
        disabled && "cursor-not-allowed opacity-75",
      )

  return useRender({
    defaultTagName: "a",
    render,
    props: {
      href: disabled ? undefined : to,
      rel: resolvedRel,
      target,
      "aria-current": active ? ariaCurrentValue : undefined,
      "aria-disabled": disabled || undefined,
      role: disabled ? "link" : undefined,
      tabIndex: disabled ? -1 : undefined,
      className: cn(
        themeClass,
        !raw && ui?.base,
        active && activeClass,
        !active && inactiveClass,
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
