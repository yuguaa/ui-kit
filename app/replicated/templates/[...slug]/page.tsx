import { access, readdir } from "node:fs/promises"
import path from "node:path"

import { CatalogPageHero } from "@/components/catalog-page-hero"
import { PreviewBar } from "@/components/replicated/preview-bar"
import { SnapshotCard } from "@/components/replicated/snapshot-card"

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

/** 模板页面列表：该模板全部页面的卡片网格 */
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

  return (
    <>
      <CatalogPageHero
        badge="Template"
        title={slug}
        count={pages.length}
        description={`${slug} 的全部页面，共 ${pages.length} 个。`}
        titleId="template-pages-title"
      />

      <div className="container-wrapper pb-16">
        <div className="container">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {pages.map((page) => (
              <SnapshotCard
                key={page}
                href={`/replicated/templates/${slug}/${page}`}
                src={`/api/replicated-template/${slug}/${page}`}
                title={page}
                description={slug}
                height={300}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
