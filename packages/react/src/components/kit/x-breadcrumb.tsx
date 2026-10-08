/**
 * XBreadcrumb 面包屑：显示当前页面在层级结构中的位置。
 * 分隔符支持文本与图标两种形态，面包屑项可带前置图标。
 */
import * as React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { XLink } from "@/components/kit/x-link"
import { cn } from "@/lib/utils"

export interface XBreadcrumbItem {
  /** 标题 */
  title?: string
  /** 链接地址（末项可省略） */
  href?: string
  /** 前置图标 */
  icon?: React.ReactNode
}

export interface XBreadcrumbProps<T extends XBreadcrumbItem = XBreadcrumbItem> {
  /** 面包屑项数组，允许携带自定义字段 */
  items: T[]
  /** 标题字段名，items 可用自定义字段承载标题 */
  labelKey?: string
  /** 分隔符 */
  separator?: string
  /** 图标分隔符，设置后优先于 separator 文本 */
  separatorIcon?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  className?: string
}

export function XBreadcrumb<T extends XBreadcrumbItem>({
  items,
  labelKey = "title",
  separator = "/",
  separatorIcon,
  disabled = false,
  className,
}: XBreadcrumbProps<T>) {
  return (
    <Breadcrumb className={cn(disabled && "pointer-events-none opacity-50", className)}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const label = String((item as Record<string, unknown>)[labelKey] ?? "")
          return (
            <React.Fragment key={`${label}-${index}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="inline-flex items-center gap-1">
                    {item.icon}
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<XLink to={item.href} color="neutral" leading={item.icon}>{label}</XLink>} />
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator>{separatorIcon ?? separator}</BreadcrumbSeparator>}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
