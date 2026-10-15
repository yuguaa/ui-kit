import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import { PreviewBar } from "@/components/replicated/preview-bar"

/**
 * 复刻 block 预览路由
 * 渲染 replicated/blocks/{分组}/{分类}/{slug}.html 快照
 */
export default async function ReplicatedBlockPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const parts = (await params).slug
  const [group, category, slug] = parts
  const dir = path.join(process.cwd(), "replicated/blocks", group ?? "", category ?? "")
  const file = path.join(dir, `${slug ?? ""}.html`)

  let html = ""
  try {
    html = await readFile(file, "utf8")
  } catch {
    return <p className="p-8">未找到复刻资产：{parts.join("/")}</p>
  }

  // 同分类下的其它 block，供导航条横向切换
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
        className="bg-background text-foreground mt-8 min-h-svh w-full p-3 antialiased sm:p-4 lg:p-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
