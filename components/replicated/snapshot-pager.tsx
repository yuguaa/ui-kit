import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "cn"

export interface PagerEntry {
  href: string
  label: string
  description: string
}

const linkClass =
  "border-site-border bg-site-background hover:bg-site-muted/50 focus-visible:ring-site-ring text-site-foreground group flex min-h-14 w-full min-w-0 items-center gap-3 site-rounded-xl border px-4 py-3 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:min-h-16 sm:px-5"

/**
 * 相邻条目翻页
 * 与 components 分类页的上下页导航一致
 */
export function SnapshotPager({
  prev,
  next,
  label = "Adjacent pages",
}: {
  prev?: PagerEntry | null
  next?: PagerEntry | null
  label?: string
}) {
  if (!prev && !next) return null

  return (
    <nav className="w-full px-6 pt-2 pb-10 sm:px-8 xl:px-10" aria-label={label}>
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="min-w-0">
          {prev ? (
            <Link href={prev.href} prefetch={false} className={cn(linkClass, "justify-between")}>
              <ChevronLeft
                className="text-site-muted-foreground group-hover:text-site-foreground size-4 shrink-0 transition-colors"
                aria-hidden
              />
              <span className="min-w-0 flex-1 text-right">
                <span className="text-site-muted-foreground block text-xs font-medium">
                  Previous
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium">{prev.label}</span>
                <span className="text-site-muted-foreground block truncate text-xs">
                  {prev.description}
                </span>
              </span>
            </Link>
          ) : null}
        </div>
        <div className="min-w-0">
          {next ? (
            <Link href={next.href} prefetch={false} className={cn(linkClass, "justify-between")}>
              <span className="min-w-0 flex-1">
                <span className="text-site-muted-foreground block text-xs font-medium">Next</span>
                <span className="mt-0.5 block truncate text-sm font-medium">{next.label}</span>
                <span className="text-site-muted-foreground block truncate text-xs">
                  {next.description}
                </span>
              </span>
              <ChevronRight
                className="text-site-muted-foreground group-hover:text-site-foreground size-4 shrink-0 transition-colors"
                aria-hidden
              />
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
