"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { CategoryCard } from "@/components/replicated/category-card"

export interface CategoryListItem {
  href: string
  label: string
  count: number
  imageBase: string
}

export interface CategoryListGroup {
  label: string
  items: CategoryListItem[]
}

/**
 * 分类卡片列表
 * 与 components 首页一致：搜索框 + 客户端过滤 + 按分组的分组卡片网格
 */
export function CategoryList({
  groups,
  unit = "blocks",
  searchPlaceholder = "Search...",
  emptyLabel = "没有匹配的分类",
}: {
  groups: CategoryListGroup[]
  unit?: string
  searchPlaceholder?: string
  emptyLabel?: string
}) {
  const [query, setQuery] = React.useState("")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groups
    return groups
      .map((group) => ({
        label: group.label,
        items: group.items.filter((item) =>
          `${item.label} ${group.label}`.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [groups, query])

  const total = filtered.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-site-muted-foreground text-sm">
          {query ? `${total} / ${groups.reduce((n, g) => n + g.items.length, 0)}` : `${total} 个分类`}
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
        filtered.map((group) => (
          <section key={group.label} className="mt-10 first:mt-2">
            <h2 className="text-site-foreground mb-4 text-xl font-semibold tracking-tight capitalize">
              {group.label}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item) => (
                <CategoryCard
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  count={item.count}
                  imageBase={item.imageBase}
                  unit={unit}
                />
              ))}
            </div>
          </section>
        ))
      )}
    </>
  )
}
