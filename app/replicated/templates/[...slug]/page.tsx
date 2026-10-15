import { access, readdir } from "node:fs/promises"
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
}

/**
 * 模板路由
 * 一段路径（模板）渲染页面列表，两段路径（模板/页面）渲染单个页面快照
 */
export default async function ReplicatedTemplateRoute({ params }: PageProps) {
  const parts = (await params).slug
  const root = path.join(process.cwd(), "replicated/templates")

  if (parts.length === 1) {
    return <TemplatePage slug={parts[0]} root={root} />
  }

  const [slug, page] = parts
  const dir = path.join(root, slug ?? "")

  try {
    await access(path.join(dir, `${page}.html`))
  } catch {
    return <p className="p-8">未找到内容：{parts.join("/")}</p>
  }

  const siblings = (await readdir(dir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .sort()

  return (
    <>
      <PreviewBar
        label={`${slug} / ${page}`}
        siblings={siblings}
        hrefFor={(name) => `/replicated/templates/${slug}/${name}`}
      />
      <iframe
        src={`/api/replicated-template/${slug}/${page}`}
        title={`${slug}/${page}`}
        className="h-[calc(100svh-var(--header-height))] w-full border-0"
      />
    </>
  )
}

/** 模板页面列表：该模板全部页面的全宽卡片 */
async function TemplatePage({ slug, root }: { slug: string; root: string }) {
  const dir = path.join(root, slug)
  let pages: string[] = []
  try {
    pages = (await readdir(dir))
      .filter((f) => f.endsWith(".html"))
      .map((f) => f.replace(/\.html$/, ""))
      .sort()
  } catch {
    return <p className="p-8">未找到模板：{slug}</p>
  }

  // 相邻模板，用于上下页导航
  const allSlugs = (await readdir(root, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()
  const index = allSlugs.indexOf(slug)
  const toEntry = async (name: string | undefined): Promise<PagerEntry | null> => {
    if (!name) return null
    const count = (await readdir(path.join(root, name))).filter((f) => f.endsWith(".html")).length
    return {
      href: `/replicated/templates/${name}`,
      label: name,
      description: `${count} 个页面`,
    }
  }
  const [prev, next] = await Promise.all([
    toEntry(index > 0 ? allSlugs[index - 1] : undefined),
    toEntry(index < allSlugs.length - 1 ? allSlugs[index + 1] : undefined),
  ])

  return (
    <>
      <section>
        <div className="w-full px-6 pt-8 pb-6 sm:px-8 xl:px-10">
          <Breadcrumb className="mb-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/replicated/templates" prefetch={false}>
                    Templates
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex w-full flex-wrap items-end justify-between gap-3">
            <h1 className="mt-3 min-w-0 flex-1 text-xl font-bold text-balance sm:text-3xl">
              {slug}
            </h1>
            <span className="text-site-muted-foreground text-sm">{pages.length} 个页面</span>
          </div>
        </div>
      </section>

      <div className="w-full px-6 pt-2 pb-4 sm:px-8 xl:px-10">
        <div className="grid grid-cols-1 items-stretch gap-6">
          {pages.map((page) => (
            <SnapshotCard
              key={page}
              href={`/replicated/templates/${slug}/${page}`}
              src={`/api/replicated-template/${slug}/${page}`}
              title={page}
              description={slug}
              height={420}
            />
          ))}
        </div>
      </div>

      <SnapshotPager prev={prev} next={next} label="相邻模板" />
    </>
  )
}
