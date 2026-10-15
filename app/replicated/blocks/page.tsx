import type { Metadata } from "next"
import Link from "next/link"
import { readFile } from "node:fs/promises"
import path from "node:path"

import { CatalogPageHero } from "@/components/catalog-page-hero"
import { CategoryCard } from "@/components/replicated/category-card"

export const metadata: Metadata = {
  title: "Blocks",
  description: "NeUI 区块库，按分类浏览全部区块，可直接预览。",
}

type CatalogBlock = { slug: string; name: string; category: string; group: string }

/** 读取 block 清单，按分组与分类汇总 */
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

  return (
    <>
      <CatalogPageHero
        badge="Blocks"
        title="Blocks"
        count={total}
        description={`共 ${total} 个区块，覆盖 ${groups.size} 个分组。选择分类查看其中的全部区块。`}
        titleId="blocks-page-title"
      />

      <div className="container-wrapper pb-16">
        <div className="container">
          {[...groups.entries()].map(([group, categories]) => (
            <section key={group} className="mt-10 first:mt-2">
              <h2 className="text-site-foreground mb-4 text-xl font-semibold tracking-tight capitalize">
                {group}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {[...categories.entries()].map(([name, blocks]) => (
                  <CategoryCard
                    key={name}
                    href={`/replicated/blocks/${group}/${name}`}
                    label={name}
                    count={blocks.length}
                    imageBase={`/screenshots/blocks/${group}/${name}`}
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
