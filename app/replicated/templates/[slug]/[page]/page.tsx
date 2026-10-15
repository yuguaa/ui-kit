import type { Metadata } from "next"
import { access } from "node:fs/promises"
import path from "node:path"

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

  try {
    await access(path.join(process.cwd(), "replicated/templates", slug, `${page}.html`))
  } catch {
    return <p className="p-8">未找到复刻资产：{slug}/{page}</p>
  }

  return (
    <iframe
      src={`/api/replicated-template/${slug}/${page}`}
      title={`${slug}/${page}`}
      className="h-svh w-full border-0"
    />
  )
}
