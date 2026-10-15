import { readFile } from "node:fs/promises"
import path from "node:path"

type Params = { slug: string; page: string }

/**
 * 模板复刻快照的渲染端点
 * 把 replicated/templates/{slug}/{page}.html 包装成独立 HTML 文档返回，
 * 由预览页面用 iframe 加载，避免快照 DOM 与宿主 React 应用互相干扰
 */
export async function GET(_request: Request, { params }: { params: Promise<Params> }) {
  const { slug, page } = await params
  const file = path.join(process.cwd(), "replicated/templates", slug, `${page}.html`)

  let snapshot: string
  try {
    snapshot = await readFile(file, "utf8")
  } catch {
    return new Response("未找到复刻资产", { status: 404 })
  }

  const document = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="/template-assets/${slug}/app.css" />
<style>html,body{margin:0;padding:0;min-height:100%}</style>
</head>
<body>
${snapshot}
</body>
</html>`

  return new Response(document, {
    headers: { "content-type": "text/html; charset=utf-8" },
  })
}
