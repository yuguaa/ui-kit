import { PageGridBackdrop } from "@/components/page-grid-backdrop"
import { SiteChrome } from "@/components/site-chrome"
import { SiteFooter } from "@/components/site-footer"

/**
 * 资源库布局
 * 头部固定，中间区域独立滚动，侧栏在该滚动容器内保持可见
 */
export default function ReplicatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-theme-container bg-site-background font-site-sans flex h-svh flex-col overflow-hidden">
      <PageGridBackdrop />
      <SiteChrome />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <main className="relative flex min-h-full flex-col">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}
