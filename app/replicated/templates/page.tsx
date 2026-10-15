import type { Metadata } from "next"
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import { CatalogPageHero } from "@/components/catalog-page-hero"
import { SnapshotCard } from "@/components/replicated/snapshot-card"

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
  const entries: { template: CatalogTemplate; pages: string[]; cover: string }[] = []

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
    entries.push({ template, pages, cover: pickCover(pages) })
  }

  const groups = new Map<string, typeof entries>()
  for (const entry of entries) {
    const list = groups.get(entry.template.category) ?? []
    list.push(entry)
    groups.set(entry.template.category, list)
  }

  const totalPages = entries.reduce((sum, e) => sum + e.pages.length, 0)

  return (
    <>
      <CatalogPageHero
        badge="Templates"
        title="Templates"
        count={entries.length}
        description={`共 ${entries.length} 个完整模板、${totalPages} 个页面。选择模板查看其全部页面。`}
        titleId="templates-page-title"
      />

      <div className="container-wrapper pb-16">
        <div className="container">
          {[...groups.entries()].map(([category, list]) => (
            <section key={category} className="mt-10 first:mt-2">
              <h2 className="text-site-foreground mb-4 text-xl font-semibold tracking-tight">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {list.map(({ template, pages, cover }) => (
                  <SnapshotCard
                    key={template.slug}
                    href={`/replicated/templates/${template.slug}`}
                    src={`/api/replicated-template/${template.slug}/${cover}`}
                    title={template.name}
                    description={`${template.slug} · ${pages.length} 个页面`}
                    height={300}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
