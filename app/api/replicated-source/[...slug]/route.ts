import { readFile } from "node:fs/promises"
import path from "node:path"

/**
 * 复刻快照源码端点
 * /api/replicated-source/block/{分组}/{分类}/{名称}
 * /api/replicated-source/template/{模板}/{页面}
 */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const parts = (await params).slug
  const [kind, ...rest] = parts

  if (kind === "block" && rest.length === 3) {
    const [group, category, name] = rest
    return serve(path.join(process.cwd(), "replicated/blocks", group, category, `${name}.html`))
  }

  if (kind === "template" && rest.length === 2) {
    const [template, page] = rest
    return serve(path.join(process.cwd(), "replicated/templates", template, `${page}.html`))
  }

  return new Response("未找到内容", { status: 404 })
}

async function serve(file: string) {
  try {
    const code = await readFile(file, "utf8")
    return new Response(code, {
      headers: { "content-type": "text/plain; charset=utf-8" },
    })
  } catch {
    return new Response("未找到内容", { status: 404 })
  }
}
