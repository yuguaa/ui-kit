import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:p-8 min-h-svh p-6 text-foreground w-full">
      <section className="flex flex-col gap-7 max-w-5xl mx-auto w-full" aria-labelledby="seasonal-heading">
        <div className="border-b border-dashed flex flex-col gap-4 pb-5">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Shop"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Seasonal Categories"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1.5 min-w-0">
              <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-balance tracking-tight" id="seasonal-heading">
                {"Seasonal Category Cards"}
              </h2>
              <p className="leading-6 max-w-2xl text-muted-foreground text-pretty text-sm">
                {"Four focused shopping edits with image-first browsing and collection details revealed at the bottom of each card."}
              </p>
            </div>
            <Button className="sm:w-auto w-full" href="#" aria-label="Browse all seasonal categories" role="button" tabIndex="0">
              {"Browse All"}
              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="gap-4 grid md:grid-cols-2">
          <article className="aspect-square bg-muted focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring group/card md:aspect-[16/9] min-w-0 overflow-hidden relative rounded-md" aria-labelledby="warm-lighting-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-10" href="#" aria-label="Browse Warm Lighting">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Warm pendant lights in a composed interior" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&h=900&q=90" />
            </a>
            <div className="absolute bg-gradient-to-t bottom-0 duration-200 ease-out from-zinc-950/65 h-36 hidden inset-x-0 md:block md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none to-transparent transition-opacity via-zinc-950/20 z-[12]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out gap-3 hidden inset-x-4 items-end justify-between md:flex md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none transition-opacity z-20">
              <div className="min-w-0">
                <p className="font-medium leading-5 text-xs text-zinc-50/80">
                  {"Collection"}
                </p>
                <h3 className="font-semibold leading-7 max-w-[16rem] text-balance text-xl text-zinc-50" id="warm-lighting-title">
                  <a className="hover:underline pointer-events-auto relative underline-offset-4 z-30" href="#">
                    {"Warm Lighting"}
                  </a>
                </h3>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-zinc-950/25 border border-white/30 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                {"Seasonal"}
              </Badge>
            </div>
            <div className="absolute bg-zinc-950/68 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 inset-0 md:group-focus-within/card:pointer-events-auto md:group-hover/card:opacity-100 md:group-hover/card:pointer-events-auto md:opacity-0 md:pointer-events-none motion-reduce:transition-none p-4 text-white transition-opacity z-30">
              <div className="flex flex-col h-full min-w-0">
                <div className="duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col gap-3 md:-translate-y-4 md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 min-w-0 motion-reduce:transition-none transition-[opacity,translate] will-change-transform">
                  <div className="min-w-0">
                    <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center leading-5 min-w-0 text-white/80 text-xs">
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="tabular-nums truncate">
                          {"58 items"}
                        </span>
                      </span>
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <a className="hover:text-white hover:underline transition-colors underline-offset-4" href="#">
                          {"Seasonal Edit"}
                        </a>
                      </span>
                    </div>
                    <h3 className="font-semibold leading-6 min-w-0 mt-3 text-white text-xl">
                      <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-50 hover:underline line-clamp-1 underline-offset-4" href="#">
                        {"Warm Lighting"}
                      </a>
                    </h3>
                  </div>
                  <p className="leading-5 line-clamp-3 max-w-md text-pretty text-sm text-white/85">
                    {"Low-glare lamps, shaded pendants, warmer bulbs, and dimmable accents for softer evening rooms."}
                  </p>
                </div>
                <div className="border-t border-white/25 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex gap-4 items-center justify-between md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 md:translate-y-4 min-w-0 motion-reduce:transition-none mt-auto opacity-100 pt-4 transition-[opacity,translate] translate-y-0 will-change-transform">
                  <span className="font-medium leading-5 text-white/80 text-xs">
                    {"Curated seasonal shopping"}
                  </span>
                  <Button href="#" aria-label="Browse Warm Lighting collection" role="button" tabIndex="0">
                    {"Shop Collection"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </article>
          <article className="aspect-square bg-muted focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring group/card md:aspect-[16/9] min-w-0 overflow-hidden relative rounded-md" aria-labelledby="layered-textiles-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-10" href="#" aria-label="Browse Layered Textiles">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Living room with soft textiles, seating, and wall art" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&h=900&q=90" />
            </a>
            <div className="absolute bg-gradient-to-t bottom-0 duration-200 ease-out from-zinc-950/65 h-36 hidden inset-x-0 md:block md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none to-transparent transition-opacity via-zinc-950/20 z-[12]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out gap-3 hidden inset-x-4 items-end justify-between md:flex md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none transition-opacity z-20">
              <div className="min-w-0">
                <p className="font-medium leading-5 text-xs text-zinc-50/80">
                  {"Collection"}
                </p>
                <h3 className="font-semibold leading-7 max-w-[16rem] text-balance text-xl text-zinc-50" id="layered-textiles-title">
                  <a className="hover:underline pointer-events-auto relative underline-offset-4 z-30" href="#">
                    {"Layered Textiles"}
                  </a>
                </h3>
              </div>
            </div>
            <div className="absolute bg-zinc-950/68 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 inset-0 md:group-focus-within/card:pointer-events-auto md:group-hover/card:opacity-100 md:group-hover/card:pointer-events-auto md:opacity-0 md:pointer-events-none motion-reduce:transition-none p-4 text-white transition-opacity z-30">
              <div className="flex flex-col h-full min-w-0">
                <div className="duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col gap-3 md:-translate-y-4 md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 min-w-0 motion-reduce:transition-none transition-[opacity,translate] will-change-transform">
                  <div className="min-w-0">
                    <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center leading-5 min-w-0 text-white/80 text-xs">
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="tabular-nums truncate">
                          {"86 items"}
                        </span>
                      </span>
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <a className="hover:text-white hover:underline transition-colors underline-offset-4" href="#">
                          {"Seasonal Edit"}
                        </a>
                      </span>
                    </div>
                    <h3 className="font-semibold leading-6 min-w-0 mt-3 text-white text-xl">
                      <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-50 hover:underline line-clamp-1 underline-offset-4" href="#">
                        {"Layered Textiles"}
                      </a>
                    </h3>
                  </div>
                  <p className="leading-5 line-clamp-3 max-w-md text-pretty text-sm text-white/85">
                    {"Throws, cushions, rugs, cotton bedding, and tactile layers that make seating and bedrooms feel finished."}
                  </p>
                </div>
                <div className="border-t border-white/25 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex gap-4 items-center justify-between md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 md:translate-y-4 min-w-0 motion-reduce:transition-none mt-auto opacity-100 pt-4 transition-[opacity,translate] translate-y-0 will-change-transform">
                  <span className="font-medium leading-5 text-white/80 text-xs">
                    {"Curated seasonal shopping"}
                  </span>
                  <Button href="#" aria-label="Browse Layered Textiles collection" role="button" tabIndex="0">
                    {"Shop Collection"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </article>
          <article className="aspect-square bg-muted focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring group/card md:aspect-[16/9] min-w-0 overflow-hidden relative rounded-md" aria-labelledby="hosting-table-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-10" href="#" aria-label="Browse Hosting Table">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Curated home decor objects and table accessories in warm light" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&h=900&q=90" />
            </a>
            <div className="absolute bg-gradient-to-t bottom-0 duration-200 ease-out from-zinc-950/65 h-36 hidden inset-x-0 md:block md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none to-transparent transition-opacity via-zinc-950/20 z-[12]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out gap-3 hidden inset-x-4 items-end justify-between md:flex md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none transition-opacity z-20">
              <div className="min-w-0">
                <p className="font-medium leading-5 text-xs text-zinc-50/80">
                  {"Collection"}
                </p>
                <h3 className="font-semibold leading-7 max-w-[16rem] text-balance text-xl text-zinc-50" id="hosting-table-title">
                  <a className="hover:underline pointer-events-auto relative underline-offset-4 z-30" href="#">
                    {"Hosting Table"}
                  </a>
                </h3>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-zinc-950/25 border border-white/30 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                {"Restocked"}
              </Badge>
            </div>
            <div className="absolute bg-zinc-950/68 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 inset-0 md:group-focus-within/card:pointer-events-auto md:group-hover/card:opacity-100 md:group-hover/card:pointer-events-auto md:opacity-0 md:pointer-events-none motion-reduce:transition-none p-4 text-white transition-opacity z-30">
              <div className="flex flex-col h-full min-w-0">
                <div className="duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col gap-3 md:-translate-y-4 md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 min-w-0 motion-reduce:transition-none transition-[opacity,translate] will-change-transform">
                  <div className="min-w-0">
                    <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center leading-5 min-w-0 text-white/80 text-xs">
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="tabular-nums truncate">
                          {"73 items"}
                        </span>
                      </span>
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <a className="hover:text-white hover:underline transition-colors underline-offset-4" href="#">
                          {"Seasonal Edit"}
                        </a>
                      </span>
                    </div>
                    <h3 className="font-semibold leading-6 min-w-0 mt-3 text-white text-xl">
                      <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-50 hover:underline line-clamp-1 underline-offset-4" href="#">
                        {"Hosting Table"}
                      </a>
                    </h3>
                  </div>
                  <p className="leading-5 line-clamp-3 max-w-md text-pretty text-sm text-white/85">
                    {"Serveware, trays, glasses, napkins, candles, and dining accents for casual dinners and planned gatherings."}
                  </p>
                </div>
                <div className="border-t border-white/25 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex gap-4 items-center justify-between md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 md:translate-y-4 min-w-0 motion-reduce:transition-none mt-auto opacity-100 pt-4 transition-[opacity,translate] translate-y-0 will-change-transform">
                  <span className="font-medium leading-5 text-white/80 text-xs">
                    {"Curated seasonal shopping"}
                  </span>
                  <Button href="#" aria-label="Browse Hosting Table collection" role="button" tabIndex="0">
                    {"Shop Collection"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </article>
          <article className="aspect-square bg-muted focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring group/card md:aspect-[16/9] min-w-0 overflow-hidden relative rounded-md" aria-labelledby="entryway-reset-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-10" href="#" aria-label="Browse Entryway Reset">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Entry storage and shelving with baskets and home accessories" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&h=900&q=90" />
            </a>
            <div className="absolute bg-gradient-to-t bottom-0 duration-200 ease-out from-zinc-950/65 h-36 hidden inset-x-0 md:block md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none to-transparent transition-opacity via-zinc-950/20 z-[12]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out gap-3 hidden inset-x-4 items-end justify-between md:flex md:group-focus-within/card:opacity-0 md:group-hover/card:opacity-0 pointer-events-none transition-opacity z-20">
              <div className="min-w-0">
                <p className="font-medium leading-5 text-xs text-zinc-50/80">
                  {"Collection"}
                </p>
                <h3 className="font-semibold leading-7 max-w-[16rem] text-balance text-xl text-zinc-50" id="entryway-reset-title">
                  <a className="hover:underline pointer-events-auto relative underline-offset-4 z-30" href="#">
                    {"Entryway Reset"}
                  </a>
                </h3>
              </div>
            </div>
            <div className="absolute bg-zinc-950/68 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 inset-0 md:group-focus-within/card:pointer-events-auto md:group-hover/card:opacity-100 md:group-hover/card:pointer-events-auto md:opacity-0 md:pointer-events-none motion-reduce:transition-none p-4 text-white transition-opacity z-30">
              <div className="flex flex-col h-full min-w-0">
                <div className="duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col gap-3 md:-translate-y-4 md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 min-w-0 motion-reduce:transition-none transition-[opacity,translate] will-change-transform">
                  <div className="min-w-0">
                    <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center leading-5 min-w-0 text-white/80 text-xs">
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="tabular-nums truncate">
                          {"49 items"}
                        </span>
                      </span>
                      <span className="gap-1.5 inline-flex items-center min-w-0">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <a className="hover:text-white hover:underline transition-colors underline-offset-4" href="#">
                          {"Seasonal Edit"}
                        </a>
                      </span>
                    </div>
                    <h3 className="font-semibold leading-6 min-w-0 mt-3 text-white text-xl">
                      <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-50 hover:underline line-clamp-1 underline-offset-4" href="#">
                        {"Entryway Reset"}
                      </a>
                    </h3>
                  </div>
                  <p className="leading-5 line-clamp-3 max-w-md text-pretty text-sm text-white/85">
                    {"Benches, hooks, trays, mirrors, baskets, and catchall storage for cleaner arrivals and faster exits."}
                  </p>
                </div>
                <div className="border-t border-white/25 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex gap-4 items-center justify-between md:group-focus-within/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:opacity-0 md:translate-y-4 min-w-0 motion-reduce:transition-none mt-auto opacity-100 pt-4 transition-[opacity,translate] translate-y-0 will-change-transform">
                  <span className="font-medium leading-5 text-white/80 text-xs">
                    {"Curated seasonal shopping"}
                  </span>
                  <Button href="#" aria-label="Browse Entryway Reset collection" role="button" tabIndex="0">
                    {"Shop Collection"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
