"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "cn"
import { Input } from "@/components/ui/input"
import { SnapshotCard } from "@/components/replicated/snapshot-card"

export interface SnapshotListItem {
  id: string
  href: string
  src: string
  codeSrc: string
  title: string
  description?: string
  /** 可选分组标签；提供时按分组渲染 */
  group?: string
}

/**
 * 快照卡片列表
 * 与 components 一致：搜索框 + 客户端即时过滤 + 卡片网格（可选分组）
 */
export function SnapshotList({
  items,
  height = 280,
  columns = 2,
  searchPlaceholder = "Search...",
  emptyLabel = "没有匹配的条目",
  unitLabel,
}: {
  items: SnapshotListItem[]
  height?: number
  columns?: 1 | 2
  searchPlaceholder?: string
  emptyLabel?: string
  /** 计数文案，如「个区块」「个页面」，省略时只显示数量 */
  unitLabel?: string
}) {
  const [query, setQuery] = React.useState("")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) =>
      `${item.title} ${item.description ?? ""} ${item.group ?? ""}`.toLowerCase().includes(q),
    )
  }, [items, query])

  const grouped = React.useMemo(() => {
    const map = new Map<string, SnapshotListItem[]>()
    for (const item of filtered) {
      const key = item.group ?? ""
      const list = map.get(key) ?? []
      list.push(item)
      map.set(key, list)
    }
    return [...map.entries()]
  }, [filtered])

  const countLabel = (n: number) => (unitLabel ? `${n} ${unitLabel}` : `${n}`)

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-site-muted-foreground text-sm">
          {query ? `${filtered.length} / ${items.length}` : countLabel(items.length)}
        </p>
        <div className="relative w-full sm:w-72">
          <Search
            className="text-site-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-8 pl-8 text-sm"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-site-muted-foreground py-12 text-center text-sm">{emptyLabel}</p>
      ) : (
        grouped.map(([groupLabel, groupItems]) => (
          <section key={groupLabel || "all"} className="mb-8 last:mb-0">
            {groupLabel ? (
              <h2 className="text-site-foreground mb-4 text-xl font-semibold tracking-tight">
                {groupLabel}{" "}
                <span className="text-site-muted-foreground text-sm font-normal">
                  {countLabel(groupItems.length)}
                </span>
              </h2>
            ) : null}
            <div
              className={cn(
                "grid grid-cols-1 items-stretch gap-6",
                columns === 2 && "md:grid-cols-2",
              )}
            >
              {groupItems.map((item) => (
                <SnapshotCard
                  key={item.id}
                  href={item.href}
                  src={item.src}
                  codeSrc={item.codeSrc}
                  title={item.title}
                  description={item.description}
                  height={height}
                />
              ))}
            </div>
          </section>
        ))
      )}
    </>
  )
}
