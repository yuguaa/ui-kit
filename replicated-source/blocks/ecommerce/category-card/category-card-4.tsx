import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:p-8 min-h-svh p-6 text-foreground w-full">
      <section className="flex flex-col gap-7 max-w-7xl mx-auto w-full" aria-labelledby="catalog-heading">
        <div className="border-b border-dashed flex flex-col gap-4 pb-5">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Shop"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Catalog"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-1.5 min-w-0">
              <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-balance tracking-tight" id="catalog-heading">
                {"Catalog"}
              </h2>
              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                {"9 catalog paths, 1498 catalog items"}
              </span>
            </div>
            <Button href="#" aria-label="Browse all catalog paths" role="button" tabIndex={0}>
              {"Browse All"}
              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="gap-8 grid lg:gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] lg:h-[620px] lg:items-stretch">
          <article className="bg-muted flex group/feature lg:h-full lg:min-h-[620px] min-h-[520px] overflow-hidden relative rounded-md">
            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="Browse Living Room catalog">
              <img className="absolute duration-500 ease-out group-hover/feature:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Bright living room with sofas, table, and wall decor" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&h=1050&q=90" />
            </a>
            <div className="absolute left-3 top-3 z-10">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                {"Trending"}
              </Badge>
            </div>
            <div className="absolute bg-zinc-950/60 bottom-0 flex flex-col gap-4 inset-x-0 items-start p-4 pointer-events-none sm:p-5 text-zinc-50 z-10" data-feature-bar="true">
              <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-end sm:justify-between w-full">
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 sm:text-sm text-muted-foreground text-xs text-zinc-300">
                    <span className="gap-1.5 inline-flex items-center min-w-0">
                      <svg className="lucide lucide-package shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                        <path d="M12 22V12"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <path d="m7.5 4.27 9 5.15"></path>
                      </svg>
                      <span className="tabular-nums truncate">
                        {"286 items"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="gap-1.5 inline-flex items-center min-w-0">
                      <svg className="lucide lucide-tag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                      </svg>
                      <span className="tabular-nums truncate">
                        {"From $18"}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-semibold leading-tight text-2xl text-balance tracking-tight">
                    <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-50 hover:underline pointer-events-auto underline-offset-4" href="#">
                      {"Living Room"}
                    </a>
                  </h3>
                </div>
                <Button className="pointer-events-auto" href="#" aria-label="Browse Living Room catalog" role="button" tabIndex={0}>
                  {"Browse Catalog"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
              <p className="leading-6 max-w-xl text-pretty text-sm text-zinc-300">
                {"Seating, side tables, storage, textiles, and room anchors. Entry prices start at $18."}
              </p>
            </div>
          </article>
          <aside className="border flex flex-col gap-5 lg:h-full lg:min-h-0 min-w-0 p-5 rounded-md">
            <div className="border-b border-dashed flex flex-col gap-1 min-w-0 pb-4">
              <h3 className="font-semibold text-base">
                {"Browse by Catalog"}
              </h3>
              <p className="leading-6 max-w-sm text-muted-foreground text-sm">
                {"Smaller catalog paths stay visible without competing with the featured room."}
              </p>
            </div>
            <ScrollArea className="-mr-2 flex-1 min-h-0 pr-2" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "534px"}} data-has-overflow-y="" data-overflow-y-end="">
                <div className="divide-dashed divide-y flex flex-col min-w-0">
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Bedroom catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Layered bed with pillows, lamps, and soft neutral bedding" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"174 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $24"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Bedroom"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Beds, soft lighting, storage, linens, and nightstand details."}
                      </p>
                    </div>
                  </article>
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Kitchen catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Clean kitchen counter with cookware, fruit, and utensils" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"212 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $8"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Kitchen"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Cookware, prep tools, pantry pieces, and table settings."}
                      </p>
                    </div>
                  </article>
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Storage catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Organized shelving with baskets, books, and home accessories" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"198 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $12"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Storage"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Shelves, baskets, wardrobe helpers, and visible organization."}
                      </p>
                    </div>
                  </article>
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Lighting catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Warm pendant lights in a calm interior setting" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"92 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $16"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Lighting"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Pendants, floor lamps, desk lamps, bulbs, and warm accents."}
                      </p>
                    </div>
                  </article>
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Dining catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Dining table set with plates, glasses, and shared dishes" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"158 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $10"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Dining"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Tables, chairs, serveware, linens, and hosting details."}
                      </p>
                    </div>
                  </article>
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Bathroom catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Bright bathroom with vanity, mirror, and soft towels" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"146 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $9"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Bathroom"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Towels, mirrors, shelving, bath mats, and daily storage."}
                      </p>
                    </div>
                  </article>
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Workspace catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Workspace with desk, chair, shelves, and daylight" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"128 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $14"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Workspace"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Desks, task chairs, lamps, organizers, and cable control."}
                      </p>
                    </div>
                  </article>
                  <article className="first:pt-0 gap-4 grid grid-cols-[88px_minmax(0,1fr)] group/department last:pb-0 lg:grid-cols-[128px_minmax(0,1fr)] lg:items-center min-w-0 py-4 sm:grid-cols-[116px_minmax(0,1fr)]">
                    <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none overflow-hidden relative rounded-md" href="#" aria-label="Browse Outdoor catalog">
                      <img className="absolute duration-500 ease-out group-hover/department:scale-[1.035] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Outdoor lounge seating with plants and warm daylight" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&h=1050&q=90" />
                    </a>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0 py-1">
                      <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"104 items"}
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="gap-1.5 inline-flex items-center min-w-0">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="tabular-nums truncate">
                            {"From $20"}
                          </span>
                        </span>
                      </div>
                      <h3 className="font-semibold min-w-0 text-base">
                        <a className="gap-1 hover:text-primary hover:underline inline-flex items-center max-w-full transition-colors underline-offset-4" href="#">
                          <span className="truncate">
                            {"Outdoor"}
                          </span>
                          <svg className="lucide lucide-arrow-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </h3>
                      <p className="leading-5 lg:line-clamp-1 line-clamp-2 text-muted-foreground text-sm">
                        {"Patio seating, planters, lanterns, shade, and soft covers."}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "215.5105105105105px"}}>
                <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
              </div>
            </ScrollArea>
          </aside>
        </div>
      </section>
    </div>
  )
}
