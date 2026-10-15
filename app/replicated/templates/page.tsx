import type { Metadata } from "next"
import Link from "next/link"
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import { CatalogPageHero } from "@/components/catalog-page-hero"
import { SnapshotList, type SnapshotListItem } from "@/components/replicated/snapshot-list"

export const metadata: Metadata = {
  title: "Templates",
  description: "NeUI 模板库，完整多页面模板，可直接预览。",
}

type CatalogTemplate = { slug: string; name: string; category: string }

/** 代表页面：优先 index，其次 dashboard/home，否则第一页 */
function pickCover(pages: string[]) {
  return pages.find((p) => p === "index") ?? pages.find((p) => /dashboard|home/.test(p)) ?? pages[0]
}

export default async function ReplicatedTemplatesPage() {
  const catalog = JSON.parse(
    await readFile(path.join(process.cwd(), "templates/templates-catalog.json"), "utf8"),
  ) as { templates: CatalogTemplate[] }

  const root = path.join(process.cwd(), "replicated/templates")
  const items: SnapshotListItem[] = []
  const categories: string[] = []
  let totalPages = 0

  for (const template of catalog.templates) {
    let pages: string[] = []
    try {
      pages = (await readdir(path.join(root, template.slug)))
        .filter((f) => f.endsWith(".html"))
        .map((f) => f.replace(/\.html$/, ""))
        .sort()
    } catch {
      continue
    }
    if (pages.length === 0) continue
    if (!categories.includes(template.category)) categories.push(template.category)
    totalPages += pages.length

    const cover = pickCover(pages)
    items.push({
      id: template.slug,
      src: `/api/replicated-template/${template.slug}/${cover}`,
      codeSrc: `/api/replicated-source/template/${template.slug}/${cover}`,
      registryName: `@neui/${template.slug}`,
      title: template.name,
      description: `${template.slug} · ${pages.length} 个页面`,
      group: template.category,
    })
  }

  return (
    <>
      <CatalogPageHero
        badge="Templates"
        title="Templates"
        count={items.length}
        description={`共 ${items.length} 个完整模板、${totalPages} 个页面。选择模板查看其全部页面。`}
        titleId="templates-page-title"
      >
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="border-site-border bg-site-background site-rounded-full border px-3 py-1.5 text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </CatalogPageHero>

      <div className="container-wrapper pb-16">
        <div className="container">
          <SnapshotList
            items={items}
            height={300}
            columns={2}
            searchPlaceholder="搜索模板..."
            emptyLabel="没有匹配的模板"
            unitLabel="个模板"
          />
        </div>
      </div>
    </>
  )
}
