import { PageGridBackdrop } from "@/components/page-grid-backdrop"
import { SiteChrome } from "@/components/site-chrome"
import { SiteFooter } from "@/components/site-footer"

/**
 * 资源库布局
 * 与线上 reui.io 组件页一致：整页滚动，header sticky 固定，侧栏在页面内 sticky
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
