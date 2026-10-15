import type { Metadata } from "next"
import Link from "next/link"
import { readdir } from "node:fs/promises"
import path from "node:path"

import { SnapshotNav } from "@/components/replicated/snapshot-nav"

export const metadata: Metadata = {
  title: "Templates · ReUI 复刻",
}

/** 扫描模板复刻目录，返回 模板 → 页面列表 */
async function scanTemplates() {
  const root = path.join(process.cwd(), "replicated/templates")
  const result = new Map<string, string[]>()
  let entries: string[] = []
  try {
    entries = (await readdir(root, { withFileTypes: true }))
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
  } catch {
    return result
  }
  for (const slug of entries.sort()) {
    const files = await readdir(path.join(root, slug))
    result.set(
      slug,
      files
        .filter((f) => f.endsWith(".html"))
        .map((f) => f.replace(/\.html$/, ""))
        .sort(),
    )
  }
  return result
}

export default async function ReplicatedTemplatesIndex() {
  const templates = await scanTemplates()
  const total = [...templates.values()].reduce((sum, pages) => sum + pages.length, 0)

  return (
    <div className="bg-background text-foreground min-h-svh">
      <SnapshotNav current="templates" />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Templates</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          共 <strong>{templates.size}</strong> 个模板、<strong>{total}</strong> 个页面
        </p>

        {[...templates.entries()].map(([slug, pages]) => (
          <section key={slug} className="mt-8">
            <h2 className="text-lg font-semibold">{slug}</h2>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {pages.map((page) => (
                <li key={page}>
                  <Link
                    href={`/replicated/templates/${slug}/${page}`}
                    className="border-border hover:bg-accent block rounded border px-2 py-0.5 font-mono text-xs"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
