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
import { SnapshotList } from "@/components/replicated/snapshot-list"
import { SnapshotPager, type PagerEntry } from "@/components/replicated/snapshot-pager"
import { SnapshotSidebar, type SidebarNavGroup } from "@/components/replicated/snapshot-sidebar"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

const BLOCKS_ROOT = path.join(process.cwd(), "replicated/blocks")

/** 读取区块展示名映射：slug -> name */
async function loadBlockNames() {
  const raw = await readFile(path.join(process.cwd(), "blocks/blocks-catalog.json"), "utf8")
  const catalog = JSON.parse(raw) as { blocks: { slug: string; name: string }[] }
  return new Map(catalog.blocks.map((block) => [block.slug, block.name]))
}

/** 扫描全部区块分类，按分组汇总，供侧栏与翻页复用 */
async function scanCategories() {
  const groups: SidebarNavGroup[] = []
  const counts = new Map<string, number>()
  const all: { group: string; category: string }[] = []

  const groupDirs = (await readdir(BLOCKS_ROOT, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()

  for (const group of groupDirs) {
    const items = []
    const categoryDirs = (await readdir(path.join(BLOCKS_ROOT, group), { withFileTypes: true }))
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort()
    for (const category of categoryDirs) {
      const count = (await readdir(path.join(BLOCKS_ROOT, group, category))).filter((f) =>
        f.endsWith(".html"),
      ).length
      const href = `/replicated/blocks/${group}/${category}`
      counts.set(href, count)
      all.push({ group, category })
      items.push({ href, label: category, count })
    }
    groups.push({ label: group, items })
  }
  return { groups, counts, all }
}

/**
 * 区块路由
 * 两段路径（分组/分类）渲染分类页，三段路径只作为卡片预览的渲染源
 */
export default async function ReplicatedBlockRoute({ params }: PageProps) {
  const parts = (await params).slug

  if (parts.length === 2) {
    return <CategoryPage group={parts[0]} category={parts[1]} />
  }

  const [group, category, slug] = parts
  const file = path.join(BLOCKS_ROOT, group ?? "", category ?? "", `${slug ?? ""}.html`)

  let html = ""
  try {
    html = await readFile(file, "utf8")
  } catch {
    return <p className="p-8">未找到内容：{parts.join("/")}</p>
  }

  return (
    <>
      {/* 卡片预览：去掉站点外壳，只保留快照本身 */}
      <style>{`[data-slot="site-chrome"],[data-slot="site-footer"]{display:none!important}`}</style>
      <div className="bg-background" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

/** 分类页：左侧分类导航 + 该分类下的卡片列表 */
async function CategoryPage({ group, category }: { group: string; category: string }) {
  const { groups, counts, all } = await scanCategories()
  const names = await loadBlockNames()
  const dir = path.join(BLOCKS_ROOT, group, category)
  const slugs = (await readdir(dir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))

  const index = all.findIndex((entry) => entry.group === group && entry.category === category)
  const toEntry = (entry: { group: string; category: string } | undefined): PagerEntry | null => {
    if (!entry) return null
    const href = `/replicated/blocks/${entry.group}/${entry.category}`
    return {
      href,
      label: entry.category,
      description: `${entry.group} · ${counts.get(href) ?? 0} 个区块`,
    }
  }

  return (
    <div className="flex items-start">
      <SnapshotSidebar groups={groups} current={`/replicated/blocks/${group}/${category}`} />

      <div className="mx-auto min-w-0 w-full max-w-6xl">
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
          <SnapshotList
            items={slugs.map((slug) => ({
              id: slug,
              src: `/replicated/blocks/${group}/${category}/${slug}`,
              codeSrc: `/api/replicated-source/block/${group}/${category}/${slug}`,
              registryName: `@neui/${slug}`,
              title: names.get(slug) ?? slug,
              nameLabel: slug,
              description: `${group} / ${category}`,
            }))}
            height={280}
            columns={2}
            searchPlaceholder="搜索区块..."
            emptyLabel="没有匹配的区块"
          />
        </div>

        <SnapshotPager
          prev={toEntry(index > 0 ? all[index - 1] : undefined)}
          next={toEntry(index < all.length - 1 ? all[index + 1] : undefined)}
          label="相邻区块分类"
        />
      </div>
    </div>
  )
}
