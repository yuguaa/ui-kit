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
      <section className="flex flex-col gap-8 max-w-4xl mx-auto w-full" aria-labelledby="collection-guides-heading">
        <div className="flex flex-col gap-5">
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
                  {"Collection Guides"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-balance tracking-tight" id="collection-guides-heading">
                {"Collection Guides"}
              </h2>
              <p className="leading-6 max-w-lg mt-2 text-muted-foreground text-pretty text-sm">
                {"Curated edits across tech, AI gear, style, and studio essentials."}
              </p>
            </div>
            <Button href="#" role="button" tabIndex="0">
              {"Browse Collections"}
              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="divide-y min-w-0">
          <article className="first:pt-0 gap-4 grid last:pb-0 md:gap-6 md:grid-cols-[13.5rem_minmax(0,1fr)] min-w-0 py-6">
            <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring group/media outline-none overflow-hidden relative rounded-md" href="#" aria-label="View Smart Carry collection">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.025] object-cover transition-transform w-full will-change-transform" alt="Dark tabletop with headphones, camera, and travel tech" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=920&h=690&q=88" />
              <div className="absolute left-2 top-2">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"Trending"}
                </Badge>
              </div>
            </a>
            <div className="flex flex-col md:pt-0.5 min-w-0">
              <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:gap-5 sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-semibold min-w-0 text-lg truncate">
                    <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      {"Smart Carry"}
                    </a>
                  </h3>
                  <p className="leading-6 line-clamp-2 mt-1.5 text-muted-foreground text-sm">
                    {"Portable power, compact audio, and commute organizers."}
                  </p>
                </div>
                <Button className="w-fit" href="#" role="button" tabIndex="0">
                  {"View Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
              <div className="gap-2.5 grid mt-4">
                <div className="flex flex-col gap-2 min-w-0">
                  <span className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm">
                    <svg className="lucide lucide-package shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    <span className="truncate">
                      {"42 items"}
                    </span>
                  </span>
                  <span className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm">
                    <svg className="lucide lucide-wallet shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    <span className="truncate">
                      {"From $28"}
                    </span>
                  </span>
                </div>
                <div className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm" aria-label="Smart Carry categories">
                  <svg className="lucide lucide-tag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="contents">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Chargers"}
                      </a>
                    </span>
                    <span className="contents">
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Audio"}
                      </a>
                    </span>
                    <span className="contents">
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Organizers"}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="first:pt-0 gap-4 grid last:pb-0 md:gap-6 md:grid-cols-[13.5rem_minmax(0,1fr)] min-w-0 py-6">
            <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring group/media outline-none overflow-hidden relative rounded-md" href="#" aria-label="View AI Desk collection">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.025] object-cover transition-transform w-full will-change-transform" alt="Laptop workstation with code and devices on a desk" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=920&h=690&q=88" />
              <div className="absolute left-2 top-2">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"Popular"}
                </Badge>
              </div>
            </a>
            <div className="flex flex-col md:pt-0.5 min-w-0">
              <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:gap-5 sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-semibold min-w-0 text-lg truncate">
                    <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      {"AI Desk"}
                    </a>
                  </h3>
                  <p className="leading-6 line-clamp-2 mt-1.5 text-muted-foreground text-sm">
                    {"Focused workspace tools for creative and technical work."}
                  </p>
                </div>
                <Button className="w-fit" href="#" role="button" tabIndex="0">
                  {"View Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
              <div className="gap-2.5 grid mt-4">
                <div className="flex flex-col gap-2 min-w-0">
                  <span className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm">
                    <svg className="lucide lucide-package shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    <span className="truncate">
                      {"54 items"}
                    </span>
                  </span>
                  <span className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm">
                    <svg className="lucide lucide-wallet shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    <span className="truncate">
                      {"From $48"}
                    </span>
                  </span>
                </div>
                <div className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm" aria-label="AI Desk categories">
                  <svg className="lucide lucide-tag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="contents">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Keyboards"}
                      </a>
                    </span>
                    <span className="contents">
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Lighting"}
                      </a>
                    </span>
                    <span className="contents">
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Docking"}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="first:pt-0 gap-4 grid last:pb-0 md:gap-6 md:grid-cols-[13.5rem_minmax(0,1fr)] min-w-0 py-6">
            <a className="aspect-[4/3] bg-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring group/media outline-none overflow-hidden relative rounded-md" href="#" aria-label="View Modern Wardrobe collection">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.025] object-cover transition-transform w-full will-change-transform" alt="Fashion model wearing layered streetwear outdoors" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=920&h=690&q=88" />
            </a>
            <div className="flex flex-col md:pt-0.5 min-w-0">
              <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:gap-5 sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-semibold min-w-0 text-lg truncate">
                    <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      {"Modern Wardrobe"}
                    </a>
                  </h3>
                  <p className="leading-6 line-clamp-2 mt-1.5 text-muted-foreground text-sm">
                    {"Sharp layers, bags, and essentials for daily rotation."}
                  </p>
                </div>
                <Button className="w-fit" href="#" role="button" tabIndex="0">
                  {"View Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
              <div className="gap-2.5 grid mt-4">
                <div className="flex flex-col gap-2 min-w-0">
                  <span className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm">
                    <svg className="lucide lucide-package shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    <span className="truncate">
                      {"68 items"}
                    </span>
                  </span>
                  <span className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm">
                    <svg className="lucide lucide-wallet shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    <span className="truncate">
                      {"From $36"}
                    </span>
                  </span>
                </div>
                <div className="flex font-medium gap-2 items-center leading-none min-w-0 text-muted-foreground text-sm" aria-label="Modern Wardrobe categories">
                  <svg className="lucide lucide-tag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="contents">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Outerwear"}
                      </a>
                    </span>
                    <span className="contents">
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Bags"}
                      </a>
                    </span>
                    <span className="contents">
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Footwear"}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
