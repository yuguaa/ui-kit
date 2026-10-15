import type { Metadata } from "next"
import Link from "next/link"
import { readdir } from "node:fs/promises"
import path from "node:path"

export const metadata: Metadata = {
  title: "复刻资产索引 · ReUI",
}

/** 扫描复刻目录，返回 分组 → 分类 → slug 列表 */
async function scanBlocks() {
  const root = path.join(process.cwd(), "replicated/blocks")
  const groups = new Map<string, Map<string, string[]>>()

  for (const group of await readdir(root, { withFileTypes: true })) {
    if (!group.isDirectory()) continue
    const categories = new Map<string, string[]>()
    for (const cat of await readdir(path.join(root, group.name), { withFileTypes: true })) {
      if (!cat.isDirectory()) continue
      const files = await readdir(path.join(root, group.name, cat.name))
      categories.set(
        cat.name,
        files
          .filter((f) => f.endsWith(".html"))
          .map((f) => f.replace(/\.html$/, ""))
          .sort((a, b) => a.localeCompare(b, "en", { numeric: true })),
      )
    }
    groups.set(group.name, categories)
  }
  return groups
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

export default async function ReplicatedIndexPage() {
  const blocks = await scanBlocks()
  const templates = await scanTemplates()
  const blockTotal = [...blocks.values()].reduce(
    (sum, cats) => sum + [...cats.values()].reduce((n, list) => n + list.length, 0),
    0,
  )
  const templatePageTotal = [...templates.values()].reduce((sum, pages) => sum + pages.length, 0)

  return (
    <div className="bg-background text-foreground mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">复刻资产索引</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        共 <strong>{blockTotal}</strong> 个 blocks 快照 · <strong>{templates.size}</strong> 个模板（共{" "}
        <strong>{templatePageTotal}</strong> 个页面）
      </p>

      {templates.size > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Templates</h2>
          {[...templates.entries()].map(([slug, pages]) => (
            <div key={slug} className="mt-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                {slug} <span className="opacity-60">({pages.length})</span>
              </h3>
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
            </div>
          ))}
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Blocks</h2>
        {[...blocks.entries()].map(([group, categories]) => (
          <div key={group} className="mt-8">
            <h3 className="text-lg font-semibold capitalize">{group}</h3>
            {[...categories.entries()].map(([category, slugs]) => (
              <div key={category} className="mt-4">
                <h4 className="text-muted-foreground text-sm font-medium">
                  {category} <span className="opacity-60">({slugs.length})</span>
                </h4>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {slugs.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/replicated/blocks/${group}/${category}/${slug}`}
                        className="border-border hover:bg-accent block rounded border px-2 py-0.5 font-mono text-xs"
                      >
                        {slug}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}
