import { SiteHeader } from "@/components/site-header"
import { StickySiteChrome } from "@/components/sticky-site-chrome"

export function SiteChrome() {
  return (
    <div data-slot="site-chrome" className="sticky top-0 z-50">
      <StickySiteChrome announcement={null} header={<SiteHeader />} />
    </div>
  )
}
