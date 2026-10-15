import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background flex items-center lg:px-20 min-h-svh px-4 py-12 sm:px-6 w-full" aria-labelledby="hero-15-title">
        <div className="border border-border max-w-7xl mx-auto overflow-hidden rounded-xl w-full">
          <div className="flex flex-col gap-4 items-start lg:pt-32 pb-6 pt-16 px-6 sm:pt-24">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-5 outline-none px-2 py-0.5 relative rounded-full text-foreground text-sm transition-colors" href="#">
              <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
              NeUI Pro is LIVE!
              <svg className="lucide lucide-arrow-up-right size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Badge>
            <h1 className="font-semibold lg:leading-[1.05] lg:text-5xl max-w-3xl sm:text-4xl text-3xl text-foreground tracking-tight" id="hero-15-title">
              Build better shadcn/ui products from design to production.
            </h1>
            <p className="leading-6 max-w-3xl text-base text-muted-foreground">
              A design-led
              <span className="font-medium text-foreground">
                shadcn/ui
              </span>
              platform with production-ready blocks,
              <span className="font-medium text-foreground">
                MCP tools
              </span>
              , reusable patterns, and a curated registry for moving from first draft to polished product with less repetition, stronger consistency, and
              <span className="font-medium text-foreground">
                faster delivery
              </span>
              .
            </p>
            <div className="flex flex-wrap gap-2 items-center pt-2">
              <Button href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-share-2 lucide-share2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
                Connect MCP
              </Button>
              <Button href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-layout-grid size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                  <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                  <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                </svg>
                Browse Registry
              </Button>
            </div>
          </div>
          <div className="bg-border border-border border-t gap-px grid grid-cols-1 group/grid lg:grid-cols-3">
            <a className="bg-background flex focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2.5 group-not-has-[a:hover]/grid:bg-muted group/feature hover:bg-muted items-start outline-none p-6 transition-colors" href="#" aria-current="true">
              <IconTile className="dark:bg-muted dark:group-hover/feature:bg-background dark:group-not-has-[a:hover]/grid:bg-background group-hover/feature:bg-background group-not-has-[a:hover]/grid:bg-background transition-colors" variant="outline" size="sm">
                <svg className="lucide lucide-layout-panel-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutPanelLeftIcon" tabler="IconLayoutBoardSplit" hugeicons="DashboardSquare01Icon" phosphor="LayoutIcon" remixicon="RiLayoutLeftLine" aria-hidden="true">
                  <rect width="7" height="18" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                </svg>
              </IconTile>
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-medium text-foreground text-sm">
                  Design with ready-made blocks
                </p>
                <p className="line-clamp-3 text-muted-foreground text-sm">
                  Start with polished patterns for screens and consistent shadcn/ui styling.
                </p>
              </div>
              <svg className="group-hover/feature:translate-x-0.5 group-not-has-[a:hover]/grid:translate-x-0.5 lucide lucide-arrow-right self-center shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a className="bg-background flex focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2.5 group/feature hover:bg-muted items-start outline-none p-6 transition-colors" href="#">
              <IconTile className="dark:bg-muted dark:group-hover/feature:bg-background group-hover/feature:bg-background transition-colors" variant="outline" size="sm">
                <svg className="lucide lucide-workflow size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WorkflowIcon" tabler="IconSitemap" hugeicons="WorkflowCircle01Icon" phosphor="TreeStructureIcon" remixicon="RiFlowChart" aria-hidden="true">
                  <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                  <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                  <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                </svg>
              </IconTile>
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-medium text-foreground text-sm">
                  Build directly with MCP
                </p>
                <p className="line-clamp-3 text-muted-foreground text-sm">
                  Search components, inspect APIs, and get commands inside your coding agent.
                </p>
              </div>
              <svg className="group-hover/feature:translate-x-0.5 lucide lucide-arrow-right self-center shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a className="bg-background flex focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2.5 group/feature hover:bg-muted items-start outline-none p-6 transition-colors" href="#">
              <IconTile className="dark:bg-muted dark:group-hover/feature:bg-background group-hover/feature:bg-background transition-colors" variant="outline" size="sm">
                <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
              </IconTile>
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-medium text-foreground text-sm">
                  Ship from one registry
                </p>
                <p className="line-clamp-3 text-muted-foreground text-sm">
                  Install components, blocks, and templates from one NeUI catalog.
                </p>
              </div>
              <svg className="group-hover/feature:translate-x-0.5 lucide lucide-arrow-right self-center shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
