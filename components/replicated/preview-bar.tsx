import Link from "next/link"

/**
 * 复刻预览页面的导航条
 * 复刻路由不套用站点外壳，这里提供返回索引与同组页面切换
 */
export function PreviewBar({
  label,
  siblings,
  hrefFor,
}: {
  label: string
  siblings: string[]
  hrefFor: (name: string) => string
}) {
  return (
    <div className="border-border bg-background/85 sticky top-0 z-[60] border-b backdrop-blur-md">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-3 py-1.5 text-xs">
        <Link href="/replicated" className="hover:text-primary font-medium whitespace-nowrap">
          ← 复刻资产索引
        </Link>
        <span className="text-muted-foreground truncate font-mono">{label}</span>
        <span className="text-border">|</span>
        <div className="flex flex-wrap items-center gap-1">
          {siblings.map((name) => (
            <Link
              key={name}
              href={hrefFor(name)}
              className="border-border hover:bg-accent rounded border px-1.5 py-0.5 font-mono"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
