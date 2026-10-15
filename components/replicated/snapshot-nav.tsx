import Link from "next/link"

const ITEMS = [
  { label: "复刻总览", href: "/replicated" },
  { label: "Blocks", href: "/replicated/blocks" },
  { label: "Templates", href: "/replicated/templates" },
]

/**
 * 复刻列表页顶栏
 * 复刻路由不套用站点外壳，这里提供三个列表页之间的切换
 */
export function SnapshotNav({ current }: { current: string }) {
  return (
    <div className="border-border bg-background/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="flex items-center gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
        {ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.href === `/replicated/${current}`
                ? "font-semibold"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
