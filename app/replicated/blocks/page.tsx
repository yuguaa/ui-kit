import type { Metadata } from "next"
import Link from "next/link"
import { readdir } from "node:fs/promises"
import path from "node:path"

import { SnapshotNav } from "@/components/replicated/snapshot-nav"

export const metadata: Metadata = {
  title: "Blocks · ReUI 复刻",
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

export default async function ReplicatedBlocksIndex() {
  const blocks = await scanBlocks()
  const total = [...blocks.values()].reduce(
    (sum, cats) => sum + [...cats.values()].reduce((n, list) => n + list.length, 0),
    0,
  )

  return (
    <div className="bg-background text-foreground min-h-svh">
      <SnapshotNav current="blocks" />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Blocks</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          共 <strong>{total}</strong> 个 blocks，覆盖 {blocks.size} 个分组
        </p>

        {[...blocks.entries()].map(([group, categories]) => (
          <section key={group} className="mt-10">
            <h2 className="text-xl font-semibold capitalize">{group}</h2>
            {[...categories.entries()].map(([category, slugs]) => (
              <div key={category} className="mt-4">
                <h3 className="text-muted-foreground text-sm font-medium">
                  {category} <span className="opacity-60">({slugs.length})</span>
                </h3>
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
          </section>
        ))}
      </div>
    </div>
  )
}
