import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "资源库",
}

/** 资源总览，指向区块与模板两个列表页 */
export default function ReplicatedIndexPage() {
  return (
    <div className="container-wrapper">
      <div className="container py-16">
        <h1 className="text-site-foreground text-3xl font-semibold tracking-tight">资源库</h1>
        <p className="text-site-muted-foreground mt-3 text-sm">
          现成的区块与完整模板，可直接预览。
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/replicated/blocks"
            className="border-site-border hover:bg-site-muted rounded-lg border p-6 transition-colors"
          >
            <h2 className="text-site-foreground text-lg font-semibold">Blocks</h2>
            <p className="text-site-muted-foreground mt-1 text-sm">645 个区块，覆盖 76 个分类</p>
          </Link>
          <Link
            href="/replicated/templates"
            className="border-site-border hover:bg-site-muted rounded-lg border p-6 transition-colors"
          >
            <h2 className="text-site-foreground text-lg font-semibold">Templates</h2>
            <p className="text-site-muted-foreground mt-1 text-sm">17 个完整模板，共 123 个页面</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
