import type { Metadata } from "next"
import { access, readdir } from "node:fs/promises"
import path from "node:path"

import { PreviewBar } from "@/components/replicated/preview-bar"

type Params = { slug: string; page: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, page } = await params
  return { title: `${slug} / ${page} · 复刻模板` }
}

/**
 * 模板复刻预览路由
 * 通过 iframe 加载 /api/replicated-template/{slug}/{page} 返回的独立快照文档
 */
export default async function ReplicatedTemplatePage({ params }: { params: Promise<Params> }) {
  const { slug, page } = await params
  const dir = path.join(process.cwd(), "replicated/templates", slug)

  try {
    await access(path.join(dir, `${page}.html`))
  } catch {
    return <p className="p-8">未找到复刻资产：{slug}/{page}</p>
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
        className="mt-8 h-[calc(100svh-2rem)] w-full border-0"
      />
    </>
  )
}
