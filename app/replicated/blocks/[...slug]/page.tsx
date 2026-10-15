import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PreviewBar } from "@/components/replicated/preview-bar"
import { SnapshotCard } from "@/components/replicated/snapshot-card"
import { SnapshotPager, type PagerEntry } from "@/components/replicated/snapshot-pager"

type PageProps = {
  params: Promise<{ slug: string[] }>
  searchParams: Promise<{ embed?: string }>
}

/**
 * 区块路由
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
    return <p className="p-8">未找到内容：{parts.join("/")}</p>
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

/** 分类页：该分类下全部区块的全宽卡片列表 */
async function CategoryPage({ group, category }: { group: string; category: string }) {
  const root = path.join(process.cwd(), "replicated/blocks", group)
  const dir = path.join(root, category)
  const slugs = (await readdir(dir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))

  // 同分组内的相邻分类，用于上下页导航
  const categories = (await readdir(root, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()
  const index = categories.indexOf(category)
  const toEntry = async (name: string | undefined): Promise<PagerEntry | null> => {
    if (!name) return null
    const count = (await readdir(path.join(root, name))).filter((f) => f.endsWith(".html")).length
    return {
      href: `/replicated/blocks/${group}/${name}`,
      label: name,
      description: `${count} 个区块`,
    }
  }
  const [prev, next] = await Promise.all([
    toEntry(index > 0 ? categories[index - 1] : undefined),
    toEntry(index < categories.length - 1 ? categories[index + 1] : undefined),
  ])

  return (
    <>
      <section>
        <div className="w-full px-6 pt-8 pb-6 sm:px-8 xl:px-10">
          <Breadcrumb className="mb-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/replicated/blocks" prefetch={false}>
                    Blocks
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {group} / {category}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex w-full flex-wrap items-end justify-between gap-3">
            <h1 className="mt-3 min-w-0 flex-1 text-xl font-bold text-balance sm:text-3xl">
              {category}
            </h1>
            <span className="text-site-muted-foreground text-sm">{slugs.length} 个区块</span>
          </div>
        </div>
      </section>

      <div className="w-full px-6 pt-2 pb-4 sm:px-8 xl:px-10">
        <div className="grid grid-cols-1 items-stretch gap-6">
          {slugs.map((slug) => (
            <SnapshotCard
              key={slug}
              href={`/replicated/blocks/${group}/${category}/${slug}`}
              src={`/replicated/blocks/${group}/${category}/${slug}?embed=1`}
              title={slug}
              description={`${group} / ${category}`}
              height={420}
            />
          ))}
        </div>
      </div>

      <SnapshotPager prev={prev} next={next} label="相邻区块分类" />
    </>
  )
}
