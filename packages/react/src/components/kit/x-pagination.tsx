/**
 * XPagination 分页：按 Nuxt UI pagination 结构二次封装。
 * 内部实现 reka-ui 同款页码序列算法(省略号由 showEdges / siblingCount 控制)，
 * 页码与首末按钮用 XButton 渲染，color / variant / size 与激活态独立配置。
 */
import * as React from "react"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis } from "lucide-react"
import { useRender } from "@base-ui/react/use-render"
import { XButton, type XButtonColor, type XButtonSize, type XButtonVariant } from "@/components/kit/x-button"
import { XIcon, type XIconName } from "@/components/kit/x-icon"
import { cn } from "@/lib/utils"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XPaginationUi {
  root?: string
  list?: string
  ellipsis?: string
  label?: string
  first?: string
  prev?: string
  item?: string
  next?: string
  last?: string
}

/** 页码序列项:页码或省略号 */
export type XPaginationPageItem = { type: "page"; value: number } | { type: "ellipsis" }

export interface XPaginationProps {
  /** 渲染为指定元素 */
  render?: React.ReactElement
  /** 初始页码 */
  defaultPage?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 每页条数 */
  itemsPerPage?: number
  /** 当前页码(受控) */
  page?: number
  /** 始终显示第一页、最后一页与省略号 */
  showEdges?: boolean
  /** 当前页两侧的页码数量 */
  siblingCount?: number
  /** 数据总数 */
  total?: number
  /** 首页按钮图标 */
  firstIcon?: XIconName
  /** 上一页按钮图标 */
  prevIcon?: XIconName
  /** 下一页按钮图标 */
  nextIcon?: XIconName
  /** 末页按钮图标 */
  lastIcon?: XIconName
  /** 省略号图标 */
  ellipsisIcon?: XIconName
  /** 页码按钮颜色 */
  color?: XButtonColor
  /** 页码按钮样式 */
  variant?: XButtonVariant
  /** 激活页码颜色 */
  activeColor?: XButtonColor
  /** 激活页码样式 */
  activeVariant?: XButtonVariant
  /** 是否显示首页、上一页、下一页与末页按钮 */
  showControls?: boolean
  /** 页码按钮尺寸 */
  size?: XButtonSize
  /** 将页码控件渲染为链接(返回 XButton 的 render 元素) */
  to?: (page: number) => React.ReactElement | undefined
  /** 页码变化回调 */
  onPageChange?: (page: number) => void
  /** 主题插槽类名 */
  ui?: XPaginationUi
  className?: string
  /** 首页按钮内容(等价于 first 插槽) */
  first?: React.ReactNode
  /** 上一页按钮内容(等价于 prev 插槽) */
  prev?: React.ReactNode
  /** 下一页按钮内容(等价于 next 插槽) */
  next?: React.ReactNode
  /** 末页按钮内容(等价于 last 插槽) */
  last?: React.ReactNode
  /** 省略号内容(等价于 ellipsis 插槽) */
  ellipsis?: React.ReactNode
  /** 页码渲染函数(等价于 item 插槽) */
  itemSlot?: (props: {
    page: number
    pageCount: number
    item: XPaginationPageItem
    index: number
  }) => React.ReactNode
}

/* reka-ui 同款分页序列算法 */
function range(start: number, end: number) {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

function getPageRange(currentPage: number, pageCount: number, siblingCount: number, showEdges: boolean): (number | "ellipsis")[] {
  const firstPageIndex = 1
  const lastPageIndex = pageCount
  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex)

  if (showEdges) {
    const totalPageNumbers = Math.min(2 * siblingCount + 5, pageCount)
    const itemCount = totalPageNumbers - 2
    const showLeftEllipsis = leftSiblingIndex > firstPageIndex + 2 && Math.abs(lastPageIndex - itemCount - firstPageIndex + 1) > 2 && Math.abs(leftSiblingIndex - firstPageIndex) > 2
    const showRightEllipsis = rightSiblingIndex < lastPageIndex - 2 && Math.abs(lastPageIndex - itemCount) > 2 && Math.abs(lastPageIndex - rightSiblingIndex) > 2

    if (!showLeftEllipsis && showRightEllipsis) {
      return [...range(1, itemCount), "ellipsis", lastPageIndex]
    }
    if (showLeftEllipsis && !showRightEllipsis) {
      return [firstPageIndex, "ellipsis", ...range(lastPageIndex - itemCount + 1, lastPageIndex)]
    }
    if (showLeftEllipsis && showRightEllipsis) {
      return [firstPageIndex, "ellipsis", ...range(leftSiblingIndex, rightSiblingIndex), "ellipsis", lastPageIndex]
    }
    return range(firstPageIndex, lastPageIndex)
  }

  const itemCount = siblingCount * 2 + 1
  if (pageCount < itemCount) return range(1, lastPageIndex)
  if (currentPage <= siblingCount + 1) return range(firstPageIndex, itemCount)
  if (pageCount - currentPage <= siblingCount) return range(pageCount - itemCount + 1, lastPageIndex)
  return range(leftSiblingIndex, rightSiblingIndex)
}

/** 属性图标优先，否则渲染默认 lucide 图标 */
function PaginationIcon({ name, fallback: Fallback }: { name?: XIconName; fallback: React.ComponentType<{ className?: string }> }) {
  return name ? <XIcon name={name} size="sm" /> : <Fallback className="size-4" />
}

export function XPagination({
  render,
  defaultPage,
  disabled = false,
  itemsPerPage = 10,
  page: pageProp,
  showEdges = false,
  siblingCount = 2,
  total = 0,
  firstIcon,
  prevIcon,
  nextIcon,
  lastIcon,
  ellipsisIcon,
  color = "neutral",
  variant = "outline",
  activeColor = "primary",
  activeVariant = "solid",
  showControls = true,
  size,
  to,
  onPageChange,
  ui,
  className,
  first,
  prev,
  next,
  last,
  ellipsis,
  itemSlot,
}: XPaginationProps) {
  const [innerPage, setInnerPage] = React.useState(defaultPage ?? 1)
  const page = pageProp ?? innerPage
  const pageCount = Math.max(1, Math.ceil(total / (itemsPerPage || 1)))
  const items = getPageRange(page, pageCount, siblingCount, showEdges).map((value) =>
    typeof value === "number" ? { type: "page" as const, value } : { type: "ellipsis" as const },
  )

  const go = (value: number) => {
    if (disabled) return
    if (pageProp == null) setInnerPage(value)
    onPageChange?.(value)
  }

  const list = (
    <ul data-slot="list" className={cn("flex items-center gap-1", ui?.list)}>
      {(showControls || first != null) && (
        <li data-slot="first">
          {first ?? (
            <XButton
              color={color}
              variant={variant}
              size={size}
              render={to?.(1)}
              aria-label="首页"
              disabled={disabled || page <= 1}
              onClick={() => go(1)}
              className={ui?.first}
              leading={<PaginationIcon name={firstIcon} fallback={ChevronsLeft} />}
            />
          )}
        </li>
      )}
      {(showControls || prev != null) && (
        <li data-slot="prev">
          {prev ?? (
            <XButton
              color={color}
              variant={variant}
              size={size}
              render={page > 1 ? to?.(page - 1) : undefined}
              aria-label="上一页"
              disabled={disabled || page <= 1}
              onClick={() => go(page - 1)}
              className={ui?.prev}
              leading={<PaginationIcon name={prevIcon} fallback={ChevronLeft} />}
            />
          )}
        </li>
      )}

      {items.map((item, index) =>
        item.type === "page" ? (
          <li key={index} data-slot="item">
            {itemSlot != null ? (
              itemSlot({ item, index, page, pageCount })
            ) : (
              <XButton
                color={page === item.value ? activeColor : color}
                variant={page === item.value ? activeVariant : variant}
                size={size}
                label={String(item.value)}
                ui={{ label: cn("min-w-5 text-center", ui?.label) }}
                render={to?.(item.value)}
                aria-current={page === item.value ? "page" : undefined}
                className={ui?.item}
                square
                onClick={() => go(item.value)}
              />
            )}
          </li>
        ) : (
          <li key={index} data-slot="ellipsis">
            {ellipsis ?? (
              <XButton
                render={<div />}
                color={color}
                variant={variant}
                size={size}
                className={cn("pointer-events-none", ui?.ellipsis)}
                leading={<PaginationIcon name={ellipsisIcon} fallback={Ellipsis} />}
              />
            )}
          </li>
        ),
      )}

      {(showControls || next != null) && (
        <li data-slot="next">
          {next ?? (
            <XButton
              color={color}
              variant={variant}
              size={size}
              render={page < pageCount ? to?.(page + 1) : undefined}
              aria-label="下一页"
              disabled={disabled || page >= pageCount}
              onClick={() => go(page + 1)}
              className={ui?.next}
              leading={<PaginationIcon name={nextIcon} fallback={ChevronRight} />}
            />
          )}
        </li>
      )}
      {(showControls || last != null) && (
        <li data-slot="last">
          {last ?? (
            <XButton
              color={color}
              variant={variant}
              size={size}
              render={to?.(pageCount)}
              aria-label="末页"
              disabled={disabled || page >= pageCount}
              onClick={() => go(pageCount)}
              className={ui?.last}
              leading={<PaginationIcon name={lastIcon} fallback={ChevronsRight} />}
            />
          )}
        </li>
      )}
    </ul>
  )

  return useRender({
    defaultTagName: "nav",
    props: {
      "data-slot": "root",
      "aria-label": "pagination",
      className: cn(ui?.root, className),
      children: list,
    },
    render,
    state: { page, pageCount },
  })
}
