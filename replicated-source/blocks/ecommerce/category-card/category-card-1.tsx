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
    <div className="flex items-center justify-center md:p-10 min-h-svh p-6 w-full">
      <section className="flex flex-col gap-10 max-w-7xl md:gap-12 mx-auto w-full">
        <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto text-center">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList className="justify-center">
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
                  {"Categories"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold md:text-4xl text-3xl tracking-tight">
              {"Shop By Category"}
            </h2>
          </div>
        </div>
        <nav className="gap-x-5 gap-y-8 grid lg:gap-x-6 lg:gap-y-9 lg:grid-cols-4 sm:grid-cols-2" aria-label="Featured shopping categories">
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Neutral living room with a sofa, lounge chair, and side table" src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute left-2 top-2 z-10">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full shadow-xs text-white text-xs transition-shadow">
                  {"Trending"}
                </Badge>
              </div>
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Sofas & Armchairs collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Sofas & Armchairs, 128 items">
                    {"Sofas & Armchairs"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"128 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Lounging, accent seating, and living room sets."}
              </p>
            </div>
          </article>
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Dining table set with chairs in a bright home interior" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Tables & Chairs collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Tables & Chairs, 96 items">
                    {"Tables & Chairs"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"96 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Dining, work, and accent pieces for shared rooms."}
              </p>
            </div>
          </article>
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Layered bed with soft pillows and bedside lighting" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Beds collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Beds, 74 items">
                    {"Beds"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"74 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Frames, headboards, and restful bedroom foundations."}
              </p>
            </div>
          </article>
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Organized shelving with baskets, books, and home accessories" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Storage collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Storage, 142 items">
                    {"Storage"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"142 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Shelving, wardrobes, baskets, and home organization."}
              </p>
            </div>
          </article>
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Warm pendant lights above a clean interior table setting" src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute left-2 top-2 z-10">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full shadow-xs text-white text-xs transition-shadow">
                  {"Seasonal"}
                </Badge>
              </div>
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Lighting collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Lighting, 58 items">
                    {"Lighting"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"58 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Pendants, floor lamps, desk lights, and warm accents."}
              </p>
            </div>
          </article>
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Bright kitchen counter with cookware and organized utensils" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute left-2 top-2 z-10">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full shadow-xs text-white text-xs transition-shadow">
                  {"Restocked"}
                </Badge>
              </div>
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Kitchen collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Kitchen, 113 items">
                    {"Kitchen"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"113 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Cookware, prep tools, tableware, and pantry staples."}
              </p>
            </div>
          </article>
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Decorated living space with wall art, seating, and plants" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Decor collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Decor, 88 items">
                    {"Decor"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"88 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Mirrors, textiles, wall art, vases, and finishing pieces."}
              </p>
            </div>
          </article>
          <article className="group/tile min-w-0">
            <div className="aspect-[4/3] bg-muted overflow-hidden relative rounded-md">
              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/tile:scale-105 object-cover transition-transform w-full will-change-transform" alt="Outdoor patio with lounge seating and greenery" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&h=1050&q=90" />
              <div className="absolute duration-300 ease-out flex group-focus-within/tile:opacity-100 group-focus-within/tile:pointer-events-auto group-focus-within/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:pointer-events-auto group-hover/tile:translate-y-0 inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-2 z-10">
                <Button href="#" aria-label="Browse Outdoor collection" role="button" tabIndex={0}>
                  {"Browse Collection"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 mt-3">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h3 className="font-semibold min-w-0 text-base truncate">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="Shop Outdoor, 64 items">
                    {"Outdoor"}
                  </a>
                </h3>
                <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-xs">
                  {"64 items"}
                </span>
              </div>
              <p className="line-clamp-2 text-muted-foreground text-sm">
                {"Patio seating, planters, shade, and garden-ready pieces."}
              </p>
            </div>
          </article>
        </nav>
      </section>
    </div>
  )
}
