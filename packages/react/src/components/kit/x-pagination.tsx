/**
 * XPagination 分页：对长列表数据进行分页浏览。
 */
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { XSelectMenu } from "@/components/kit/x-select-menu"
import { cn } from "@/lib/utils"

export interface XPaginationProps {
  /** 当前页数 */
  current?: number
  /** 数据总数 */
  total: number
  /** 每页条数 */
  pageSize?: number
  /** 是否显示每页条数切换 */
  showSizeChanger?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 页码或每页条数变化回调 */
  onChange?: (page: number, pageSize: number) => void
  className?: string
}

/** 计算带省略号的页码序列 */
function buildPages(current: number, pageCount: number): (number | "ellipsis")[] {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1)
  const pages: (number | "ellipsis")[] = [1]
  if (current > 3) pages.push("ellipsis")
  for (let i = Math.max(2, current - 1); i <= Math.min(pageCount - 1, current + 1); i++) pages.push(i)
  if (current < pageCount - 2) pages.push("ellipsis")
  pages.push(pageCount)
  return pages
}

export function XPagination({
  current: currentProp,
  total,
  pageSize: pageSizeProp = 10,
  showSizeChanger = false,
  disabled = false,
  onChange,
  className,
}: XPaginationProps) {
  const [innerPage, setInnerPage] = React.useState(1)
  const current = currentProp ?? innerPage
  const pageSize = pageSizeProp
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  const safeCurrent = Math.min(current, pageCount)

  const go = (page: number) => {
    if (page < 1 || page > pageCount || disabled) return
    if (currentProp == null) setInnerPage(page)
    onChange?.(page, pageSize)
  }

  const changePageSize = (value: string | string[]) => {
    const next = Number(Array.isArray(value) ? value[0] : value)
    if (currentProp == null) {
      setInnerPage(1)
    }
    onChange?.(1, next)
  }

  return (
    <div className={cn("flex items-center gap-1.5", disabled && "pointer-events-none opacity-50", className)}>
      <Button
        variant="outline"
        size="sm"
        aria-label="上一页"
        disabled={safeCurrent <= 1}
        onClick={() => go(safeCurrent - 1)}
      >
        <ChevronLeft className="size-4" />
      </Button>
      {buildPages(safeCurrent, pageCount).map((page, index) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="inline-flex size-7 items-center justify-center text-sm text-muted-foreground">
            …
          </span>
        ) : (
          <Button
            key={page}
            variant={page === safeCurrent ? "default" : "outline"}
            size="sm"
            aria-current={page === safeCurrent ? "page" : undefined}
            onClick={() => go(page)}
            className={cn(page === safeCurrent && "bg-primary-6 text-white hover:bg-primary-5")}
          >
            {page}
          </Button>
        ),
      )}
      <Button
        variant="outline"
        size="sm"
        aria-label="下一页"
        disabled={safeCurrent >= pageCount}
        onClick={() => go(safeCurrent + 1)}
      >
        <ChevronRight className="size-4" />
      </Button>
      {showSizeChanger && (
        <XSelectMenu
          options={[10, 20, 50, 100].map((size) => ({ label: `${size} 条/页`, value: String(size) }))}
          value={String(pageSize)}
          onChange={changePageSize}
          className="ml-2 w-28"
        />
      )}
    </div>
  )
}
