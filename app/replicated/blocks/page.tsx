import type { Metadata } from "next"
import Link from "next/link"
import { readFile } from "node:fs/promises"
import path from "node:path"

import { CatalogPageHero } from "@/components/catalog-page-hero"
import { CategoryList, type CategoryListGroup } from "@/components/replicated/category-list"

export const metadata: Metadata = {
  title: "Blocks",
  description: "NeUI 区块库，按分类浏览全部区块，可直接预览。",
}

type CatalogBlock = { slug: string; name: string; category: string; group: string }

/** 常用分类快捷入口 */
const featured = [
  { group: "data-grid", category: "base", label: "Data Grid" },
  { group: "application", category: "dashboard", label: "Dashboard" },
  { group: "application", category: "kanban-board", label: "Kanban" },
  { group: "application", category: "event-calendar", label: "Calendar" },
  { group: "chart", category: "area-chart", label: "Chart" },
  { group: "ai-agents", category: "ai-chat", label: "AI Chat" },
  { group: "marketing", category: "pricing", label: "Pricing" },
  { group: "ecommerce", category: "checkout", label: "Checkout" },
  { group: "ecommerce", category: "product-grid", label: "Product Grid" },
  { group: "application", category: "settings", label: "Settings" },
]

/** 读取区块清单，按分组与分类汇总 */
async function loadCatalog() {
  const raw = await readFile(path.join(process.cwd(), "blocks/blocks-catalog.json"), "utf8")
  const catalog = JSON.parse(raw) as { blocks: CatalogBlock[] }

  const groups = new Map<string, Map<string, CatalogBlock[]>>()
  for (const block of catalog.blocks) {
    const [, name] = block.category.split("/")
    if (!groups.has(block.group)) groups.set(block.group, new Map())
    const categories = groups.get(block.group)!
    if (!categories.has(name)) categories.set(name, [])
    categories.get(name)!.push(block)
  }
  return { groups, total: catalog.blocks.length }
}

export default async function ReplicatedBlocksPage() {
  const { groups, total } = await loadCatalog()

  // 命中的快捷分类才展示
  const available = new Set(
    [...groups.entries()].flatMap(([group, categories]) =>
      [...categories.keys()].map((name) => `${group}/${name}`),
    ),
  )
  const featuredLinks = featured.filter((item) => available.has(`${item.group}/${item.category}`))

  const listGroups: CategoryListGroup[] = [...groups.entries()].map(([group, categories]) => ({
    label: group,
    items: [...categories.entries()].map(([name, blocks]) => ({
      href: `/replicated/blocks/${group}/${name}`,
      label: name,
      count: blocks.length,
      imageBase: `/screenshots/blocks/${group}/${name}`,
    })),
  }))

  return (
    <>
      <CatalogPageHero
        badge="Blocks"
        title="Blocks"
        count={total}
        description={`共 ${total} 个区块，覆盖 ${groups.size} 个分组。选择分类查看其中的全部区块。`}
        titleId="blocks-page-title"
      >
        <div className="flex flex-wrap items-center gap-2">
          {featuredLinks.map((item) => (
            <Link
              key={`${item.group}/${item.category}`}
              href={`/replicated/blocks/${item.group}/${item.category}`}
              prefetch={false}
              className="border-site-border bg-site-background hover:bg-site-muted site-rounded-full border px-3 py-1.5 text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </CatalogPageHero>

      <div className="container-wrapper pb-16">
        <div className="container">
          <CategoryList
            groups={listGroups}
            searchPlaceholder="搜索分类..."
            emptyLabel="没有匹配的分类"
          />
        </div>
      </div>
    </>
  )
}
