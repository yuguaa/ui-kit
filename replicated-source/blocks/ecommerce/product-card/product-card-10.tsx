import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-10 min-h-svh p-6 w-full">
      <section className="max-w-7xl mx-auto w-full" aria-labelledby="fashion-studio-heading">
        <div className="flex flex-col gap-5 mb-8 md:mb-10">
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
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Studio"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Fashion Drop"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-balance" id="fashion-studio-heading">
                {"Fashion Studio"}
              </h2>
              <p className="leading-5 max-w-2xl mt-1 text-muted-foreground text-pretty text-sm">
                {"Studio-shot layers and off-duty essentials selected for sharp seasonal rotation."}
              </p>
            </div>
            <Button className="hover:text-primary hover:underline sm:w-auto transition-colors underline-offset-4 w-full" href="#" aria-label="Browse all fashion studio looks" role="button" tabIndex={0}>
              {"Browse All"}
              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="relaxed-studio-set-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Relaxed Studio Set details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model crouched at center in a relaxed studio outfit with ample negative space" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1674851993263-823aef958e73?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 58%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="relaxed-studio-set-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Relaxed Studio Set">
                  <span className="block">
                    {"Relaxed Studio"}
                  </span>
                  <span className="block">
                    {"Set"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-4 rounded-full text-white text-xs top-4 transition-shadow z-20">
              {"New"}
            </Badge>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Tailoring, Studio">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Tailoring">
                      {"Tailoring"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Studio">
                      {"Studio"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"Low-slung set with relaxed studio drape and easy day-to-night volume"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"s"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"l"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$132.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="gloss-puffer-jacket-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Gloss Puffer Jacket details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model centered in a glossy puffer jacket on a neutral studio backdrop" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 55%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="gloss-puffer-jacket-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Gloss Puffer Jacket">
                  <span className="block">
                    {"Gloss Puffer"}
                  </span>
                  <span className="block">
                    {"Jacket"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-4 rounded-full text-white text-xs top-4 transition-shadow z-20">
              {"Trending"}
            </Badge>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Winter, Outerwear">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Winter">
                      {"Winter"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Outerwear">
                      {"Outerwear"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"High-shine insulated shell with compact winter volume and clean street finish"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"l"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$148.00"}
                    </span>
                    <span className="font-normal line-through min-w-0 text-muted-foreground text-xs truncate">
                      {"$198.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="ribbed-tank-set-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Ribbed Tank Set details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model centered in a ribbed tank outfit with clean studio space around the body" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1763499390110-8221cb9cc28f?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 45%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="ribbed-tank-set-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Ribbed Tank Set">
                  <span className="block">
                    {"Ribbed Tank"}
                  </span>
                  <span className="block">
                    {"Set"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Travel Set, Knits">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Travel Set">
                      {"Travel Set"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Knits">
                      {"Knits"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"Soft ribbed co-ord made for travel days, warm layers, and clean movement"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"xs"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"s"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$86.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="black-studio-set-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Black Studio Set details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model in a black studio set seated on a clean sweep with open space around the body" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1774813958356-652b1f2a6b4c?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 52%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="black-studio-set-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Black Studio Set">
                  <span className="block">
                    {"Black Studio"}
                  </span>
                  <span className="block">
                    {"Set"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-4 rounded-full text-white text-xs top-4 transition-shadow z-20">
              {"Trending"}
            </Badge>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Studio, Monochrome">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Studio">
                      {"Studio"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Monochrome">
                      {"Monochrome"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"Clean monochrome layers with sculpted ease and a confident studio line"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"xs"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"s"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$168.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="ivory-studio-coat-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Ivory Studio Coat details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model centered in an ivory studio coat with open backdrop space" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1776273920142-f30bceff0cf3?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 54%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="ivory-studio-coat-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Ivory Studio Coat">
                  <span className="block">
                    {"Ivory Studio"}
                  </span>
                  <span className="block">
                    {"Coat"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-4 rounded-full text-white text-xs top-4 transition-shadow z-20">
              {"New"}
            </Badge>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Outerwear, Tailoring">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Outerwear">
                      {"Outerwear"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Tailoring">
                      {"Tailoring"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"Tailored ivory layer with soft volume, clean drape, and quiet polish"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"xs"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$226.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="leather-biker-jacket-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Leather Biker Jacket details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model centered in a black leather biker jacket with open studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 55%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="leather-biker-jacket-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Leather Biker Jacket">
                  <span className="block">
                    {"Leather Biker"}
                  </span>
                  <span className="block">
                    {"Jacket"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Outerwear, Leather">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Outerwear">
                      {"Outerwear"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Leather">
                      {"Leather"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"Cropped leather shape with structured attitude and a sharper evening edge"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$248.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="side-slit-tank-set-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Side-Slit Tank Set details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model centered in a side-slit tank set with wide studio negative space" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 47%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="side-slit-tank-set-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Side-Slit Tank Set">
                  <span className="block">
                    {"Side-Slit Tank"}
                  </span>
                  <span className="block">
                    {"Set"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-4 rounded-full text-white text-xs top-4 transition-shadow z-20">
              {"New"}
            </Badge>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Travel Set, Tailoring">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Travel Set">
                      {"Travel Set"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Tailoring">
                      {"Tailoring"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"Longline tank set with airy side movement and a light tailored finish"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"xs"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"s"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$92.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-[4/5] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:ring-ring min-h-96 min-w-0 overflow-hidden p-0 relative" size="default" aria-labelledby="stone-studio-trouser-title">
            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-lg z-10" href="#" aria-label="View Stone Studio Trouser details">
              <img className="absolute duration-500 ease-out group-focus-within/card:scale-[1.025] group-hover/card:scale-[1.025] h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full will-change-transform" alt="Fashion model centered in relaxed studio trousers with clean negative space" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1674851993957-f5d6cacd5e1b?auto=format&fit=crop&w=2000&h=2500&q=90" style={{objectPosition: "center 58%"}} />
            </a>
            <div className="absolute bg-gradient-to-t bottom-3 duration-200 ease-out from-card/65 h-20 inset-x-3 pointer-events-none rounded-b-xl sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 to-transparent transition-opacity via-card/25 z-[15]" aria-hidden="true"></div>
            <div className="absolute bottom-4 duration-200 ease-out left-4 pointer-events-none sm:group-focus-within/card:opacity-0 sm:group-hover/card:opacity-0 transition-opacity z-20">
              <CardTitle className="font-bold leading-snug max-w-[11rem] text-foreground text-lg" id="stone-studio-trouser-title">
                <a className="hover:text-primary hover:underline inline-block pointer-events-auto relative transition-colors underline-offset-4 z-30" href="#" aria-label="Stone Studio Trouser">
                  <span className="block">
                    {"Stone Studio"}
                  </span>
                  <span className="block">
                    {"Trouser"}
                  </span>
                </a>
              </CardTitle>
            </div>
            <CardContent className="absolute backdrop-blur-sm bg-card/95 bottom-4 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/card:opacity-100 group-focus-within/card:translate-y-0 inset-x-4 motion-reduce:transition-none pb-4 pt-3.5 px-3.5 ring-1 ring-border/80 rounded-xl sm:group-focus-within/card:pointer-events-auto sm:group-hover/card:opacity-100 sm:group-hover/card:pointer-events-auto sm:group-hover/card:translate-y-0 sm:opacity-0 sm:pointer-events-none sm:translate-y-full transition-[opacity,translate] will-change-transform z-30">
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex font-medium gap-1.5 h-5 items-center leading-5 max-w-full min-w-0 text-muted-foreground text-xs" aria-label="Product categories: Tailoring, Studio">
                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                  <div className="flex gap-1.5 items-center max-w-full min-w-0 overflow-hidden">
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Tailoring">
                      {"Tailoring"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 translate-y-px" aria-hidden="true"></span>
                    <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#" aria-label="Shop Studio">
                      {"Studio"}
                    </a>
                  </div>
                </div>
                <p className="font-medium leading-5 line-clamp-2 min-h-10 min-w-0 text-foreground text-sm">
                  {"Pleated stone trouser with relaxed drape and a refined studio fall"}
                </p>
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Sizes"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 items-center justify-end min-w-0">
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"s"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"m"}
                    </span>
                    <span className="bg-background/70 border border-border/70 font-medium inline-flex items-center justify-center rounded-full size-7 text-[0.6875rem] text-muted-foreground">
                      {"l"}
                    </span>
                  </div>
                </div>
                <div className="border-border/70 border-t flex gap-3 items-baseline justify-between min-w-0 pt-2">
                  <span className="font-medium leading-5 shrink-0 text-muted-foreground text-xs">
                    {"Price"}
                  </span>
                  <div className="flex font-semibold gap-2 items-baseline min-w-0 overflow-hidden tabular-nums text-right text-sm whitespace-nowrap">
                    <span className="shrink-0">
                      {"$118.00"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
