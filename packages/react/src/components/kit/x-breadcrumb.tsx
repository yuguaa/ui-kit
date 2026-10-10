/**
 * XBreadcrumb 面包屑：显示当前页面在层级结构中的位置。
 * 与 Nuxt UI Breadcrumb 对齐：color / labelKey / separatorIcon 属性、
 * separator 插槽与 root · list · item · link 等主题插槽键。
 */
import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { XIcon } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

export type XBreadcrumbColor = "primary" | "secondary" | "neutral" | "success" | "info" | "warning" | "error"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XBreadcrumbUi {
  root?: string
  list?: string
  item?: string
  link?: string
  linkLeadingIcon?: string
  linkLabel?: string
  separator?: string
  separatorIcon?: string
}

export interface XBreadcrumbItem {
  /** 标题 */
  title?: string
  /** 链接地址（末项可省略） */
  href?: string
  /** 前置图标 */
  icon?: React.ReactNode
  /** 强制激活态（默认末项激活） */
  active?: boolean
}

/** 激活项文字颜色（与 XButton link 变体一致的字面量） */
const breadcrumbColorClasses: Record<XBreadcrumbColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  neutral: "text-foreground",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
}

export interface XBreadcrumbProps<T extends XBreadcrumbItem = XBreadcrumbItem> {
  /** 面包屑项数组，允许携带自定义字段 */
  items: T[]
  /** 标题字段名，items 可用自定义字段承载标题 */
  labelKey?: string
  /** 激活项文字颜色 */
  color?: XBreadcrumbColor
  /** 图标分隔符，设置后替换默认 chevron-right 图标 */
  separatorIcon?: React.ReactNode
  /** 分隔符插槽，设置后替换整个分隔符内容 */
  separator?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 主题插槽类名 */
  ui?: XBreadcrumbUi
  className?: string
}

export function XBreadcrumb<T extends XBreadcrumbItem>({
  items,
  labelKey = "title",
  color = "primary",
  separatorIcon,
  separator,
  disabled = false,
  render,
  ui,
  className,
}: XBreadcrumbProps<T>) {
  return useRender({
    defaultTagName: "nav",
    render,
    props: {
      "aria-label": "breadcrumb",
      "data-slot": "root",
      className: cn("relative min-w-0", disabled && "pointer-events-none opacity-50", ui?.root, className),
      children: (
        <ol data-slot="list" className={cn("flex items-center gap-1.5", ui?.list)}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const active = item.active ?? isLast
            const label = String((item as Record<string, unknown>)[labelKey] ?? "")

            /* 链接元素：有 href 渲染 a，末项渲染 span */
            const linkProps = {
              "data-slot": "link",
              "aria-current": active && isLast ? ("page" as const) : undefined,
              className: cn(
                "group relative flex items-center gap-1.5 text-sm min-w-0 rounded-md",
                active ? cn("font-semibold", breadcrumbColorClasses[color]) : "text-muted-foreground font-medium",
                item.href != null && !active && "hover:text-foreground transition-colors",
                ui?.link,
              ),
              children: (
                <>
                  {item.icon != null && (
                    <span data-slot="linkLeadingIcon" className={cn("shrink-0 size-5", ui?.linkLeadingIcon)}>
                      {item.icon}
                    </span>
                  )}
                  {label !== "" && (
                    <span data-slot="linkLabel" className={cn("truncate", ui?.linkLabel)}>
                      {label}
                    </span>
                  )}
                </>
              ),
            }

            return (
              <React.Fragment key={index}>
                <li data-slot="item" className={cn("flex min-w-0", ui?.item)}>
                  {item.href != null ? <a href={item.href} {...linkProps} /> : <span {...linkProps} />}
                </li>
                {!isLast && (
                  <li role="presentation" aria-hidden="true" data-slot="separator" className={cn("flex", ui?.separator)}>
                    {separator ?? (
                      separatorIcon ?? (
                        <XIcon name="chevron-right" data-slot="separatorIcon" className={cn("shrink-0 size-5 text-muted-foreground", ui?.separatorIcon)} />
                      )
                    )}
                  </li>
                )}
              </React.Fragment>
            )
          })}
        </ol>
      ),
    },
  })
}
