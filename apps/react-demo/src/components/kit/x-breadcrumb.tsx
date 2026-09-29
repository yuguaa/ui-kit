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
  title: string
  /** 链接地址（末项可省略） */
  href?: string
}

export interface XBreadcrumbProps {
  /** 面包屑项数组 */
  items: XBreadcrumbItem[]
  /** 分隔符 */
  separator?: string
  /** 是否禁用 */
  disabled?: boolean
  className?: string
}

export function XBreadcrumb({ items, separator = "/", disabled = false, className }: XBreadcrumbProps) {
  return (
    <Breadcrumb className={cn(disabled && "pointer-events-none opacity-50", className)}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <React.Fragment key={`${item.title}-${index}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<XLink to={item.href} color="neutral">{item.title}</XLink>} />
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
