import { PageGridBackdrop } from "@/components/page-grid-backdrop"
import { SiteChrome } from "@/components/site-chrome"
import { SiteFooter } from "@/components/site-footer"

/**
 * 资源库布局
 * 与 components 页面一致：整页滚动，header 随页面滚走，侧栏自身 sticky
 */
export default function ReplicatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-theme-container bg-site-background font-site-sans relative flex min-h-svh flex-col">
      <PageGridBackdrop />
      <SiteChrome />
      <main className="relative flex min-h-0 flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  )
}
