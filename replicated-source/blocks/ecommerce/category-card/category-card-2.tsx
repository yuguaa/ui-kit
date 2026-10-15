import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/bases/base/ui/pagination"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:p-8 min-h-svh p-6 text-foreground w-full">
      <section className="flex flex-col gap-8 max-w-7xl md:gap-10 mx-auto w-full" aria-label="Curated category collections">
        <div className="flex flex-col gap-5 sm:px-6 xl:px-7">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  Shop
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  Collections
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  Curated Edits
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-5 items-start lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-2 max-w-2xl">
              <h1 className="font-semibold leading-tight md:text-3xl text-2xl text-balance tracking-tight">
                Curated Category Collections
              </h1>
              <p className="leading-6 max-w-md text-muted-foreground text-pretty text-sm">
                Curated edits for rooms, routines, and seasonal needs.
              </p>
            </div>
            <Button href="#" aria-label="Browse all curated category collections" role="button" tabIndex="0">
              Browse All
              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="sm:px-6 xl:px-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <InputGroup className="sm:max-w-sm" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_0_" placeholder="Search collections..." aria-label="Search collections" value="" />
            </InputGroup>
            <div className="flex flex-wrap gap-2 items-center">
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-sliders-horizontal size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SlidersHorizontalIcon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M10 5H3"></path>
                  <path d="M12 19H3"></path>
                  <path d="M14 3v4"></path>
                  <path d="M16 17v4"></path>
                  <path d="M21 12h-9"></path>
                  <path d="M21 19h-5"></path>
                  <path d="M21 5h-7"></path>
                  <path d="M8 10v4"></path>
                  <path d="M8 12H3"></path>
                </svg>
                Filters
              </PopoverTrigger>
              </Popover>
              <Select>
              <SelectTrigger className="w-[166px]" type="button" tabIndex="0" id="base-ui-_r_3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <span className="text-muted-foreground">
                  Sort by:
                </span>
                <SelectValue>
                  Featured
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="featured" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute hidden inset-y-0 left-0 pointer-events-none sm:block w-full" aria-hidden="true">
            <div className="absolute bg-border hidden inset-y-0 left-1/2 sm:block w-px xl:hidden"></div>
            <div className="absolute bg-border hidden inset-y-0 left-1/4 w-px xl:block"></div>
            <div className="absolute bg-border hidden inset-y-0 left-1/2 w-px xl:block"></div>
            <div className="absolute bg-border hidden inset-y-0 left-3/4 w-px xl:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:gap-x-12 sm:grid-cols-2 sm:px-6 xl:gap-x-14 xl:grid-cols-4 xl:px-7">
            <div className="border-border min-w-0 sm:border-t-0 sm:pt-0">
              <article className="bg-background flex flex-col group/collection h-full min-w-0" aria-labelledby="quiet-workbench-title">
                <div className="relative">
                  <svg className="absolute pointer-events-none size-0" aria-hidden="true" focusable="false">
                    <defs>
                      <mask id="category-card-2-media-mask-quiet-workbench" maskcontentunits="objectBoundingBox">
                        <path d="M 0.018 0 H 0.982 Q 1 0 1 0.018 V 0.885 C 1 0.948 0.948 1 0.885 1 H 0.018 Q 0 1 0 0.982 V 0.018 Q 0 0 0.018 0 Z" fill="white"></path>
                      </mask>
                    </defs>
                  </svg>
                  <div className="aspect-square bg-muted group/media min-w-0 overflow-hidden relative" style={{mask: "url(\"#category-card-2-media-mask-quiet-workbench\")"}}>
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="Browse Quiet Workbench collection">
                      <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.025] object-center object-cover transition-transform w-full will-change-transform" alt="Modern desk with laptop stand, chair, and organized workspace" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=920&h=920&q=85" />
                    </a>
                  </div>
                  <div className="absolute left-3 top-3">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                      New Edit
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start min-w-0 pt-5">
                  <div className="flex gap-4 items-start justify-between min-w-0 text-xs w-full">
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Collection categories: Workspace, Home">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <div className="flex gap-1.5 items-center min-w-0 overflow-hidden">
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Workspace
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Home
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="truncate">
                          48 pieces
                        </span>
                      </div>
                    </div>
                    <span className="font-medium shrink-0 tabular-nums text-foreground">
                      From $24
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 min-w-0 w-full">
                    <h2 className="font-semibold leading-tight text-balance text-lg tracking-tight" id="quiet-workbench-title">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        Quiet Workbench
                      </a>
                    </h2>
                    <p className="leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                      Desk tools, compact lighting, and organizers for focused rooms.
                    </p>
                  </div>
                  <Button href="#" role="button" tabIndex="0">
                    Browse Collection
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </article>
            </div>
            <div className="border-border border-t min-w-0 pt-10 sm:border-t-0 sm:pt-0">
              <article className="bg-background flex flex-col group/collection h-full min-w-0" aria-labelledby="warm-lighting-title">
                <div className="relative">
                  <svg className="absolute pointer-events-none size-0" aria-hidden="true" focusable="false">
                    <defs>
                      <mask id="category-card-2-media-mask-warm-lighting" maskcontentunits="objectBoundingBox">
                        <path d="M 0.018 0 H 0.982 Q 1 0 1 0.018 V 0.885 C 1 0.948 0.948 1 0.885 1 H 0.018 Q 0 1 0 0.982 V 0.018 Q 0 0 0.018 0 Z" fill="white"></path>
                      </mask>
                    </defs>
                  </svg>
                  <div className="aspect-square bg-muted group/media min-w-0 overflow-hidden relative" style={{mask: "url(\"#category-card-2-media-mask-warm-lighting\")"}}>
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="Browse Warm Lighting collection">
                      <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.025] object-center object-cover transition-transform w-full will-change-transform" alt="Warm pendant lights above a composed interior table setting" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=920&h=920&q=85" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start min-w-0 pt-5">
                  <div className="flex gap-4 items-start justify-between min-w-0 text-xs w-full">
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Collection categories: Home, Wellness">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <div className="flex gap-1.5 items-center min-w-0 overflow-hidden">
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Home
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Wellness
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="truncate">
                          36 pieces
                        </span>
                      </div>
                    </div>
                    <span className="font-medium shrink-0 tabular-nums text-foreground">
                      From $32
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 min-w-0 w-full">
                    <h2 className="font-semibold leading-tight text-balance text-lg tracking-tight" id="warm-lighting-title">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        Warm Lighting
                      </a>
                    </h2>
                    <p className="leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                      Table lamps, pendants, and dimmable accents for softer evenings.
                    </p>
                  </div>
                  <Button href="#" role="button" tabIndex="0">
                    Browse Collection
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </article>
            </div>
            <div className="border-border border-t min-w-0 pt-10 sm:border-t-0 sm:pt-12 xl:pt-0">
              <article className="bg-background flex flex-col group/collection h-full min-w-0" aria-labelledby="carry-on-systems-title">
                <div className="relative">
                  <svg className="absolute pointer-events-none size-0" aria-hidden="true" focusable="false">
                    <defs>
                      <mask id="category-card-2-media-mask-carry-on-systems" maskcontentunits="objectBoundingBox">
                        <path d="M 0.018 0 H 0.982 Q 1 0 1 0.018 V 0.885 C 1 0.948 0.948 1 0.885 1 H 0.018 Q 0 1 0 0.982 V 0.018 Q 0 0 0.018 0 Z" fill="white"></path>
                      </mask>
                    </defs>
                  </svg>
                  <div className="aspect-square bg-muted group/media min-w-0 overflow-hidden relative" style={{mask: "url(\"#category-card-2-media-mask-carry-on-systems\")"}}>
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="Browse Carry-On Systems collection">
                      <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.025] object-center object-cover transition-transform w-full will-change-transform" alt="Dark compact travel backpack with visible straps and structured edges" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=920&h=920&q=85" />
                    </a>
                  </div>
                  <div className="absolute left-3 top-3">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                      Popular
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start min-w-0 pt-5">
                  <div className="flex gap-4 items-start justify-between min-w-0 text-xs w-full">
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Collection categories: Travel, Style">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <div className="flex gap-1.5 items-center min-w-0 overflow-hidden">
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Travel
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Style
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="truncate">
                          29 pieces
                        </span>
                      </div>
                    </div>
                    <span className="font-medium shrink-0 tabular-nums text-foreground">
                      From $38
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 min-w-0 w-full">
                    <h2 className="font-semibold leading-tight text-balance text-lg tracking-tight" id="carry-on-systems-title">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        Carry-On Systems
                      </a>
                    </h2>
                    <p className="leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                      Weekenders, slings, pouches, and cabin-ready organization.
                    </p>
                  </div>
                  <Button href="#" role="button" tabIndex="0">
                    Browse Collection
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </article>
            </div>
            <div className="border-border border-t min-w-0 pt-10 sm:border-t-0 sm:pt-12 xl:pt-0">
              <article className="bg-background flex flex-col group/collection h-full min-w-0" aria-labelledby="open-storage-title">
                <div className="relative">
                  <svg className="absolute pointer-events-none size-0" aria-hidden="true" focusable="false">
                    <defs>
                      <mask id="category-card-2-media-mask-open-storage" maskcontentunits="objectBoundingBox">
                        <path d="M 0.018 0 H 0.982 Q 1 0 1 0.018 V 0.885 C 1 0.948 0.948 1 0.885 1 H 0.018 Q 0 1 0 0.982 V 0.018 Q 0 0 0.018 0 Z" fill="white"></path>
                      </mask>
                    </defs>
                  </svg>
                  <div className="aspect-square bg-muted group/media min-w-0 overflow-hidden relative" style={{mask: "url(\"#category-card-2-media-mask-open-storage\")"}}>
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="Browse Open Storage collection">
                      <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.025] object-center object-cover transition-transform w-full will-change-transform" alt="Organized shelving with woven storage and home accessories" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=920&h=920&q=85" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start min-w-0 pt-5">
                  <div className="flex gap-4 items-start justify-between min-w-0 text-xs w-full">
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Collection categories: Home, Workspace">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <div className="flex gap-1.5 items-center min-w-0 overflow-hidden">
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Home
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="block hover:text-primary hover:underline max-w-24 transition-colors truncate underline-offset-4" href="#">
                            Workspace
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span className="truncate">
                          54 pieces
                        </span>
                      </div>
                    </div>
                    <span className="font-medium shrink-0 tabular-nums text-foreground">
                      From $18
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 min-w-0 w-full">
                    <h2 className="font-semibold leading-tight text-balance text-lg tracking-tight" id="open-storage-title">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        Open Storage
                      </a>
                    </h2>
                    <p className="leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                      Shelving, woven bins, trays, and visible organization pieces.
                    </p>
                  </div>
                  <Button href="#" role="button" tabIndex="0">
                    Browse Collection
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="sm:px-6 xl:px-7">
          <div className="border-t flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground text-sm">
              Showing
              <span className="text-foreground">
                1
              </span>
              to
              <span className="text-foreground">
                4
              </span>
              of
              <span className="text-foreground">
                11
              </span>
              collections
            </p>
            <Pagination className="mx-0 w-fit" role="navigation" aria-label="pagination">
              <PaginationContent className="gap-1">
                <PaginationItem>
                  <PaginationLink className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-pagination-previous disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center opacity-50 outline-none pointer-events-none select-none shrink-0 transition-all whitespace-nowrap" aria-label="Go to previous page" href="#" aria-disabled="true" tabIndex="-1" role="button">
                    <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" data-icon="inline-start">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span className="cn-pagination-previous-text hidden sm:block">
                      Previous
                    </span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" aria-current="page" data-active="true" href="#" role="button" tabIndex="0">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" data-active="false" href="#" role="button" tabIndex="0">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" data-active="false" href="#" role="button" tabIndex="0">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-pagination-next disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" aria-label="Go to next page" href="#" aria-disabled="false" role="button">
                    <span className="cn-pagination-next-text hidden sm:block">
                      Next
                    </span>
                    <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" data-icon="inline-end">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </div>
  )
}
