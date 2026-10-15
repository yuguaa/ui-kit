import { SiteHeader } from "@/components/site-header"
import { StickySiteChrome } from "@/components/sticky-site-chrome"

export function SiteChrome() {
  return (
    <div data-slot="site-chrome">
      <StickySiteChrome announcement={null} header={<SiteHeader />} />
    </div>
  )
}
