import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "复刻资产 · ReUI",
}

/** 复刻资产总览，指向 blocks 与 templates 两个列表页 */
export default function ReplicatedIndexPage() {
  return (
    <div className="bg-background text-foreground mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">复刻资产</h1>
      <p className="text-muted-foreground mt-3 text-sm">
        从 reui.io 复刻到本地的渲染快照，blocks 与 templates 均可在本地预览。
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/replicated/blocks"
          className="border-border hover:bg-accent rounded-lg border p-6 transition-colors"
        >
          <h2 className="text-lg font-semibold">Blocks</h2>
          <p className="text-muted-foreground mt-1 text-sm">645 个区块快照</p>
        </Link>
        <Link
          href="/replicated/templates"
          className="border-border hover:bg-accent rounded-lg border p-6 transition-colors"
        >
          <h2 className="text-lg font-semibold">Templates</h2>
          <p className="text-muted-foreground mt-1 text-sm">17 个模板、123 个页面快照</p>
        </Link>
      </div>
    </div>
  )
}
