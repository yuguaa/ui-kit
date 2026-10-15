import { readFile } from "node:fs/promises"
import path from "node:path"

/**
 * 复刻 block 预览路由
 * 渲染 replicated/blocks/{group}/{category}/{slug}.html 快照
 */
export default async function ReplicatedBlockPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const parts = (await params).slug
  const file = path.join(process.cwd(), "replicated/blocks", ...parts) + ".html"
  let html = ""
  try {
    html = await readFile(file, "utf8")
  } catch {
    return <p className="p-8 text-muted-foreground">未找到复刻资产：{parts.join("/")}</p>
  }

  return (
    <div
      className="bg-background text-foreground min-h-svh w-full p-3 sm:p-4 lg:p-6 antialiased"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
