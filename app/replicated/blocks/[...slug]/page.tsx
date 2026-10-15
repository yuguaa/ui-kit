import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import { CatalogPageHero } from "@/components/catalog-page-hero"
import { PreviewBar } from "@/components/replicated/preview-bar"
import { SnapshotCard } from "@/components/replicated/snapshot-card"

type PageProps = {
  params: Promise<{ slug: string[] }>
  searchParams: Promise<{ embed?: string }>
}

/**
 * 复刻 block 路由
 * 两段路径（分组/分类）渲染分类页，三段路径（分组/分类/名称）渲染单个快照
 */
export default async function ReplicatedBlockRoute({ params, searchParams }: PageProps) {
  const parts = (await params).slug
  const embed = (await searchParams).embed === "1"

  if (parts.length === 2) {
    return <CategoryPage group={parts[0]} category={parts[1]} />
  }

  const [group, category, slug] = parts
  const dir = path.join(process.cwd(), "replicated/blocks", group ?? "", category ?? "")
  const file = path.join(dir, `${slug ?? ""}.html`)

  let html = ""
  try {
    html = await readFile(file, "utf8")
  } catch {
    return <p className="p-8">未找到复刻资产：{parts.join("/")}</p>
  }

  if (embed) {
    return (
      <>
        {/* 卡片预览：去掉站点外壳，只保留快照本身 */}
        <style>{`[data-slot="site-chrome"],[data-slot="site-footer"]{display:none!important}`}</style>
        <div className="bg-background" dangerouslySetInnerHTML={{ __html: html }} />
      </>
    )
  }

  const siblings = (await readdir(dir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))

  return (
    <>
      <PreviewBar
        label={`${group} / ${category} / ${slug}`}
        siblings={siblings}
        hrefFor={(name) => `/replicated/blocks/${group}/${category}/${name}`}
      />
      <div
        className="bg-background text-foreground w-full antialiased"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

/** 分类页：该分类下全部 block 的卡片网格 */
async function CategoryPage({ group, category }: { group: string; category: string }) {
  const dir = path.join(process.cwd(), "replicated/blocks", group, category)
  const slugs = (await readdir(dir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))

  return (
    <>
      <CatalogPageHero
        badge={group}
        title={category}
        count={slugs.length}
        description={`${group} / ${category} 分类下的全部区块快照。`}
        titleId="block-category-title"
      />

      <div className="container-wrapper pb-16">
        <div className="container">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {slugs.map((slug) => (
              <SnapshotCard
                key={slug}
                href={`/replicated/blocks/${group}/${category}/${slug}`}
                src={`/replicated/blocks/${group}/${category}/${slug}?embed=1`}
                title={slug}
                description={`${group} / ${category}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
