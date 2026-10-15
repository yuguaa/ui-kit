import Link from "next/link"

import { cn } from "cn"

export interface SidebarNavItem {
  href: string
  label: string
  count?: number
}

export interface SidebarNavGroup {
  label: string
  items: SidebarNavItem[]
}

/**
 * 复刻资源的左侧导航
 * 随页面一起滚动，与右侧列表保持同一滚动节奏
 */
export function SnapshotSidebar({
  groups,
  current,
}: {
  groups: SidebarNavGroup[]
  current: string
}) {
  return (
    <aside className="border-site-border/80 hidden w-60 shrink-0 border-r px-3 py-8 min-[992px]:block">
      <nav aria-label="复刻资源导航">
        {groups.map((group) => (
          <div key={group.label} className="mb-5 last:mb-0">
            <p className="text-site-muted-foreground px-2 pb-1.5 text-xs font-semibold tracking-wider uppercase">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = item.href === current
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch={false}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "focus-visible:ring-site-ring flex items-center justify-between gap-2 site-rounded-md px-2 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
                        active
                          ? "bg-site-muted text-site-foreground font-medium"
                          : "text-site-muted-foreground hover:bg-site-muted/50 hover:text-site-foreground"
                      )}
                    >
                      <span className="truncate">{item.label}</span>
                      {typeof item.count === "number" ? (
                        <span className="text-site-muted-foreground shrink-0 text-xs tabular-nums">
                          {item.count}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
