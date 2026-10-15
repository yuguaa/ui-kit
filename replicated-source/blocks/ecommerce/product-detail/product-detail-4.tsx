import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
} from "@/registry/bases/base/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/registry/bases/base/ui/carousel"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <article className="bg-background text-foreground w-full">
        <div className="border-b border-border/60">
          <div className="max-w-6xl md:px-6 mx-auto px-4 py-3 w-full">
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList className="text-xs">
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop">
                    {"Shop"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/ebooks">
                    {"Ebooks"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/ebooks/productivity">
                    {"Productivity"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    {"The Clear System"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <section className="max-w-6xl md:pb-8 md:pt-12 md:px-6 mx-auto pb-6 pt-8 px-4 w-full" id="buy" aria-label="Choose your edition">
          <div className="gap-8 grid grid-cols-1 items-start lg:gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <Item className="aspect-[4/3] overflow-hidden p-0" variant="muted" size="default">
                <img className="object-cover size-full" alt="The Clear System, hardcover edition on a desk" loading="eager" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1100&h=1300&q=80" />
              </Item>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <span className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"Look Inside"}
                  </span>
                  <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                  <span className="font-mono tabular-nums text-muted-foreground text-xs">
                    {"01 / 05"}
                  </span>
                </div>
                <ul className="gap-2 grid grid-cols-5" role="list" aria-label="The Clear System preview thumbnails">
                  <li className="flex flex-col gap-1.5">
                    <Item className="aspect-square overflow-hidden p-0 ring-2 ring-foreground transition" type="button" aria-label="Show Cover preview" aria-pressed="true" variant="muted" size="default" extracted="1">
                      <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1100&h=1300&q=80" />
                    </Item>
                    <span className="leading-tight text-[0.625rem] text-center text-foreground tracking-wide uppercase">
                      {"Cover"}
                    </span>
                  </li>
                  <li className="flex flex-col gap-1.5">
                    <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show Foreword preview" aria-pressed="false" variant="muted" size="default">
                      <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&h=700&q=80" />
                    </Item>
                    <span className="leading-tight text-[0.625rem] text-center text-muted-foreground tracking-wide uppercase">
                      {"Foreword"}
                    </span>
                  </li>
                  <li className="flex flex-col gap-1.5">
                    <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show Chapter 1 preview" aria-pressed="false" variant="muted" size="default">
                      <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&h=700&q=80" />
                    </Item>
                    <span className="leading-tight text-[0.625rem] text-center text-muted-foreground tracking-wide uppercase">
                      {"Chapter 1"}
                    </span>
                  </li>
                  <li className="flex flex-col gap-1.5">
                    <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show Workbook preview" aria-pressed="false" variant="muted" size="default">
                      <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&h=700&q=80" />
                    </Item>
                    <span className="leading-tight text-[0.625rem] text-center text-muted-foreground tracking-wide uppercase">
                      {"Workbook"}
                    </span>
                  </li>
                  <li className="flex flex-col gap-1.5">
                    <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show Audiobook preview" aria-pressed="false" variant="muted" size="default">
                      <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&h=700&q=80" />
                    </Item>
                    <span className="leading-tight text-[0.625rem] text-center text-muted-foreground tracking-wide uppercase">
                      {"Audiobook"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:sticky lg:top-8">
              <div className="flex flex-col gap-6 min-w-0">
                <div className="flex flex-col gap-3 min-w-0">
                  <nav className="flex flex-wrap gap-2 items-center text-xs" aria-label="Product categories">
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground tracking-wide transition-colors underline-offset-4 uppercase" href="/shop/ebooks">
                      {"Ebooks"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground tracking-wide transition-colors underline-offset-4 uppercase" href="/shop/ebooks/productivity">
                      {"Productivity"}
                    </a>
                  </nav>
                  <h1 className="font-semibold leading-tight md:text-3xl text-2xl text-foreground tracking-tight">
                    {"The Clear System"}
                  </h1>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-sm">
                    <span className="text-muted-foreground">
                      {"By"}
                      <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/brands/quiet-press">
                        {"Quiet Press"}
                      </a>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <Rating>
                        <div className="flex items-center">
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "90%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <span className="text-muted-foreground text-xs w-5">
                          {"4.9"}
                        </span>
                      </Rating>
                      <a className="hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="#reviews" aria-label="Read 2456 reviews for The Clear System">
                        {"(2,456)"}
                      </a>
                    </div>
                  </div>
                  <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                    {"A field-tested method for staying focused and unrushed in a world that asks for everything at once."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline tabular-nums">
                  <span className="font-semibold md:text-3xl text-2xl text-foreground">
                    {"$29"}
                  </span>
                  <span className="font-normal line-through md:text-lg text-base text-muted-foreground">
                    {"$44"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    {"34% Off"}
                  </Badge>
                </div>
                <section className="flex flex-col gap-2.5" aria-label="Format">
                  <p className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Format ·"}
                    <span className="font-medium normal-case text-foreground">
                      {"Ebook + Audio"}
                    </span>
                  </p>
                  <div className="gap-2 grid grid-cols-3" role="radiogroup" aria-label="Format">
                    <Item className="flex-col gap-0.5 hover:bg-muted/50 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="false" aria-label="Ebook, PDF · ePub" variant="outline" size="sm">
                      <span className="font-medium text-foreground text-sm">
                        {"Ebook"}
                      </span>
                      <span className="leading-tight text-[0.625rem] text-muted-foreground">
                        {"PDF · ePub"}
                      </span>
                    </Item>
                    <Item className="bg-foreground/[0.04] border-foreground flex-col gap-0.5 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="true" aria-label="Ebook + Audio, Plus 6 h audiobook" variant="outline" size="sm">
                      <span className="font-medium text-foreground text-sm">
                        {"Ebook + Audio"}
                      </span>
                      <span className="leading-tight text-[0.625rem] text-muted-foreground">
                        {"Plus 6 h audiobook"}
                      </span>
                    </Item>
                    <Item className="flex-col gap-0.5 hover:bg-muted/50 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="false" aria-label="Complete Bundle, Adds workbook + template" variant="outline" size="sm">
                      <span className="font-medium text-foreground text-sm">
                        {"Complete Bundle"}
                      </span>
                      <span className="leading-tight text-[0.625rem] text-muted-foreground">
                        {"Adds workbook + template"}
                      </span>
                    </Item>
                  </div>
                </section>
                <ul className="flex flex-wrap gap-2 items-center" aria-label="Included with this edition" role="list">
                  <li>
                    <Item className="border-border/70 border-dashed gap-2 px-3 py-1.5 text-muted-foreground" variant="outline" size="sm">
                      <svg className="lucide lucide-file-text size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                      <span className="font-medium text-foreground text-xs tracking-tight">
                        {"PDF · ePub"}
                      </span>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-border/70 border-dashed gap-2 px-3 py-1.5 text-muted-foreground" variant="outline" size="sm">
                      <svg className="lucide lucide-headphones size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span className="font-medium text-foreground text-xs tracking-tight">
                        {"6 h audiobook"}
                      </span>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-border/70 border-dashed gap-2 px-3 py-1.5 text-muted-foreground" variant="outline" size="sm">
                      <svg className="lucide lucide-lock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                        <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span className="font-medium text-foreground text-xs tracking-tight">
                        {"DRM-free"}
                      </span>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-border/70 border-dashed gap-2 px-3 py-1.5 text-muted-foreground" variant="outline" size="sm">
                      <svg className="lucide lucide-rotate-ccw size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                      </svg>
                      <span className="font-medium text-foreground text-xs tracking-tight">
                        {"Free updates"}
                      </span>
                    </Item>
                  </li>
                </ul>
                <ul className="flex flex-col gap-2" aria-label="Key highlights" role="list">
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"188 pages, 17 short chapters averaging 8 minutes each"}
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"Six worked examples drawn from real practitioners"}
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"Companion workbook and Notion template (Complete Bundle)"}
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"Single-reader, lifetime license with free updates"}
                    </span>
                  </li>
                </ul>
                <div className="flex gap-2 items-center">
                  <Button className="flex-1" type="button" tabIndex={0}>
                    <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    {"Add to Bag"}
                  </Button>
                  <Button type="button" tabIndex={0} aria-pressed="false" aria-label="Add The Clear System to wishlist">
                    <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                  </Button>
                </div>
                <ul className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs" aria-label="Purchase guarantees" role="list">
                  <li>
                    {"Instant download"}
                  </li>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <li>
                    {"30-day refund"}
                  </li>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <li>
                    {"Lifetime free updates"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl md:px-6 md:py-6 mx-auto px-4 py-4 w-full" aria-labelledby="sample-heading">
          <Item className="block lg:p-14 md:p-10 p-6" variant="muted" size="default">
            <div className="gap-8 grid grid-cols-1 md:gap-14 md:grid-cols-[14rem_minmax(0,1fr)]">
              <aside className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2 items-center">
                    <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                      {"00"}
                    </span>
                    <span className="bg-border h-px w-8" aria-hidden="true"></span>
                  </div>
                  <h2 className="font-medium text-foreground text-xs tracking-[0.18em] uppercase" id="sample-heading">
                    {"Read The Opening"}
                  </h2>
                  <p className="font-mono tabular-nums text-muted-foreground text-xs">
                    {"From The Foreword · Chapter Zero"}
                  </p>
                </div>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"Roughly 4 minutes to read"}
                </p>
              </aside>
              <figure className="flex flex-col gap-6 max-w-2xl">
                <blockquote className="flex flex-col font-serif gap-5 leading-[1.7] md:leading-[1.75] md:text-lg text-base text-foreground/90 text-pretty tracking-tight">
                  <p className="first-letter:float-left first-letter:font-semibold first-letter:font-serif first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-2 first-letter:text-[3rem] first-letter:text-foreground md:first-letter:mt-2.5 md:first-letter:text-[3.5rem]">
                    {"The first time I tried to fix my week, I bought a system. The second time I bought a planner. The third time I bought a productivity book that was three hundred pages long and full of acronyms. None of them survived a Tuesday afternoon with three meetings, a sick child, and a deadline that had been promised at the end of last week."}
                  </p>
                  <p>
                    {"What I needed, it turned out, was not a system but a practice. Something I could run in thirty minutes on a Sunday and revisit in five minutes on a Wednesday morning, on the train, with a hot drink and a phone that was still in airplane mode."}
                  </p>
                </blockquote>
                <div className="flex gap-1.5 items-center justify-center py-1 text-muted-foreground/40" aria-hidden="true">
                  <span className="bg-current rounded-full size-1"></span>
                  <span className="bg-current rounded-full size-1"></span>
                  <span className="bg-current rounded-full size-1"></span>
                </div>
                <figcaption className="flex flex-wrap gap-4 items-center justify-between">
                  <span className="leading-relaxed text-muted-foreground text-xs">
                    {"Excerpt from"}
                    <span className="font-medium text-foreground">
                      {"The Clear System"}
                    </span>
                    {"· Quiet Press"}
                  </span>
                  <Button href="/sample/the-clear-system" aria-label="Read The Full Sample, Free for The Clear System" role="button" tabIndex={0}>
                    {"Read The Full Sample, Free"}
                    <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </figcaption>
              </figure>
            </div>
          </Item>
        </section>
        <section className="max-w-6xl md:pb-16 md:pt-12 md:px-6 mx-auto pb-12 pt-8 px-4 w-full" id="story" aria-label="Inside the book">
          <div className="flex flex-col gap-14 md:gap-20">
            <article className="gap-8 grid grid-cols-1 items-center lg:gap-16 lg:grid-cols-2" id="story-method">
              <Item className="aspect-[5/4] group/media lg:order-2 overflow-hidden p-0 relative" variant="muted" size="default">
                <img className="duration-[700ms] ease-out group-hover/media:scale-[1.04] object-cover size-full transition-transform" alt="Open book on a wooden desk with a pen and a coffee cup" loading="lazy" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&h=1000&q=80" />
                <div className="absolute bg-gradient-to-t duration-300 flex flex-col from-foreground/85 group-hover/media:opacity-100 inset-0 justify-end md:p-8 opacity-0 p-6 to-transparent transition-opacity" aria-hidden="true">
                  <div className="flex flex-col gap-1.5 text-background">
                    <span className="font-mono tabular-nums text-background/70 text-xs">
                      {"Chapter 01"}
                    </span>
                    <span className="font-semibold md:text-lg text-balance text-base tracking-tight">
                      {"Clarity is a craft, not a personality type."}
                    </span>
                  </div>
                </div>
              </Item>
              <div className="flex flex-col gap-6 lg:order-1">
                <div className="flex gap-3 items-center">
                  <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                    {"01"}
                  </span>
                  <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                  <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                    {"The Method"}
                  </span>
                </div>
                <h2 className="font-semibold leading-tight max-w-md md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"Clarity is a craft, not a personality type."}
                </h2>
                <p className="leading-relaxed max-w-md text-base text-muted-foreground text-pretty">
                  {"The Clear System grew out of two years of weekly reviews, calendar audits, and quiet conversations with people who do focused work for a living. It is built around three habits that hold under pressure, scaled from a thirty-minute weekly ritual to a daily check-in that fits between meetings."}
                </p>
                <dl className="border-t gap-x-6 gap-y-3 grid grid-cols-1 pt-5 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Pages"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"188 pages"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Chapters"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"17 short chapters"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Examples"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"Six worked through"}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
            <article className="gap-8 grid grid-cols-1 items-center lg:gap-16 lg:grid-cols-2" id="story-inside">
              <Item className="aspect-[5/4] group/media lg:order-1 overflow-hidden p-0 relative" variant="muted" size="default">
                <img className="duration-[700ms] ease-out group-hover/media:scale-[1.04] object-cover size-full transition-transform" alt="Reader holding the book on a window seat, warm afternoon light" loading="lazy" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1400&h=1000&q=80" />
                <div className="absolute bg-gradient-to-t duration-300 flex flex-col from-foreground/85 group-hover/media:opacity-100 inset-0 justify-end md:p-8 opacity-0 p-6 to-transparent transition-opacity" aria-hidden="true">
                  <div className="flex flex-col gap-1.5 text-background">
                    <span className="font-mono tabular-nums text-background/70 text-xs">
                      {"Chapter 02"}
                    </span>
                    <span className="font-semibold md:text-lg text-balance text-base tracking-tight">
                      {"Three parts that build on each other."}
                    </span>
                  </div>
                </div>
              </Item>
              <div className="flex flex-col gap-6 lg:order-2">
                <div className="flex gap-3 items-center">
                  <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                    {"02"}
                  </span>
                  <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                  <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                    {"Inside The Book"}
                  </span>
                </div>
                <h2 className="font-semibold leading-tight max-w-md md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"Three parts that build on each other."}
                </h2>
                <p className="leading-relaxed max-w-md text-base text-muted-foreground text-pretty">
                  {"Part one clears the noise, part two builds the system, part three keeps it running through busy seasons. Each part closes with a recap and a small worked example, so you can run the practice on real work before you finish the book."}
                </p>
                <dl className="border-t gap-x-6 gap-y-3 grid grid-cols-1 pt-5 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Part one"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"5 chapters on attention"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Part two"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"7 chapters on the system"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Part three"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"5 chapters on staying clear"}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
            <article className="gap-8 grid grid-cols-1 items-center lg:gap-16 lg:grid-cols-2" id="story-for-daily-use">
              <Item className="aspect-[5/4] group/media lg:order-2 overflow-hidden p-0 relative" variant="muted" size="default">
                <img className="duration-[700ms] ease-out group-hover/media:scale-[1.04] object-cover size-full transition-transform" alt="Workbook spread with handwritten notes and a cup of coffee" loading="lazy" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&h=1000&q=80" />
                <div className="absolute bg-gradient-to-t duration-300 flex flex-col from-foreground/85 group-hover/media:opacity-100 inset-0 justify-end md:p-8 opacity-0 p-6 to-transparent transition-opacity" aria-hidden="true">
                  <div className="flex flex-col gap-1.5 text-background">
                    <span className="font-mono tabular-nums text-background/70 text-xs">
                      {"Chapter 03"}
                    </span>
                    <span className="font-semibold md:text-lg text-balance text-base tracking-tight">
                      {"Read it once, run it for years."}
                    </span>
                  </div>
                </div>
              </Item>
              <div className="flex flex-col gap-6 lg:order-1">
                <div className="flex gap-3 items-center">
                  <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                    {"03"}
                  </span>
                  <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                  <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                    {"For Daily Use"}
                  </span>
                </div>
                <h2 className="font-semibold leading-tight max-w-md md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"Read it once, run it for years."}
                </h2>
                <p className="leading-relaxed max-w-md text-base text-muted-foreground text-pretty">
                  {"Designed to be returned to. The Complete Bundle ships with a fillable workbook for the first weekly review, a Notion template the author uses, and an audiobook narrated by the author so you can revisit any chapter on a commute."}
                </p>
                <dl className="border-t gap-x-6 gap-y-3 grid grid-cols-1 pt-5 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Workbook"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"20 fillable pages"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Audiobook"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"6 h, author-narrated"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Template"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"Notion, free updates"}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </section>
        <section className="max-w-6xl md:px-6 md:py-16 mx-auto px-4 py-12 w-full" id="contents" aria-labelledby="contents-heading">
          <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                  {"04"}
                </span>
                <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                  {"Table Of Contents"}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold leading-tight max-w-xl md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"Seventeen short chapters, in three parts."}
                </h2>
                <p className="leading-relaxed max-w-xl text-base text-muted-foreground text-pretty">
                  {"Average chapter is eight to twelve minutes. Reading time totals roughly four hours; the audiobook clocks in just under six."}
                </p>
              </div>
            </header>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
              <Card size="sm">
                <CardContent className="flex flex-col gap-5">
                  <header className="flex flex-col gap-1.5">
                    <span className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                      {"Part One"}
                    </span>
                    <h3 className="font-semibold leading-snug text-base text-foreground tracking-tight">
                      {"Attention"}
                    </h3>
                  </header>
                  <ol className="divide-border/60 divide-y flex flex-col" role="list">
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"01"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Why The Week Slips"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"9m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"02"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"The Three Practices"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"8m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"03"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Calendar As Compass"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"11m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"04"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Notes Worth Keeping"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"7m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"05"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Recap And First Try"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"8m"}
                      </span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-5">
                  <header className="flex flex-col gap-1.5">
                    <span className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                      {"Part Two"}
                    </span>
                    <h3 className="font-semibold leading-snug text-base text-foreground tracking-tight">
                      {"The System"}
                    </h3>
                  </header>
                  <ol className="divide-border/60 divide-y flex flex-col" role="list">
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"06"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Sunday In Thirty Minutes"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"12m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"07"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"The Weekly Review"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"10m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"08"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Daily Check-In"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"8m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"09"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Decision Debt"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"11m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"10"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Saying No, Clearly"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"9m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"11"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Working With A Team"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"12m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"12"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Recap And Worked Example"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"9m"}
                      </span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-5">
                  <header className="flex flex-col gap-1.5">
                    <span className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                      {"Part Three"}
                    </span>
                    <h3 className="font-semibold leading-snug text-base text-foreground tracking-tight">
                      {"Staying Clear"}
                    </h3>
                  </header>
                  <ol className="divide-border/60 divide-y flex flex-col" role="list">
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"13"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Busy Seasons"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"8m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"14"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"The Bad Week"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"7m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"15"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Travel And Life Changes"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"9m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"16"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Coming Back After A Break"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"8m"}
                      </span>
                    </li>
                    <li className="first:pt-0 gap-3 grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline last:pb-0 py-2">
                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                        {"17"}
                      </span>
                      <span className="leading-snug text-foreground text-sm">
                        {"Recap And Long View"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"10m"}
                      </span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="max-w-6xl md:px-6 md:py-16 mx-auto px-4 py-12 w-full" aria-label="Specifications">
          <section className="flex flex-col gap-8" id="specs" aria-labelledby="specs-heading">
            <header className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                  {"05"}
                </span>
                <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                  {"The Details"}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold leading-tight max-w-xl md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"What ships with your order."}
                </h2>
                <p className="leading-relaxed max-w-xl text-base text-muted-foreground text-pretty">
                  {"DRM-free files, free updates, and clear terms. The same package whether you buy it once or as a gift."}
                </p>
              </div>
            </header>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"What You Get"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"PDF Edition"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Print-ready, tablet and desktop"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"ePub"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Reflowable for any ereader"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Audiobook"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"6 h, mp3 and m4b (Ebook + Audio and Bundle)"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Workbook"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"20 fillable pages (Bundle only)"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Template"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Notion personal operating system (Bundle only)"}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"Inside The Book"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Length"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"188 pages"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Chapters"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"17 short chapters"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Average chapter"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"8 to 12 minutes"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Worked examples"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Six, drawn from real practice"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Recap pages"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"End of each part"}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"About The Author"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Author"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Marin Holm"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Background"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Designer turned founder, in independent practice for 11 years"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Influences"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Drucker, Newport, Kondo, Allen"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Write back"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"marin@quietpress.co"}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"License and Refund"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"License"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Single reader, lifetime"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Refund"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"30 days, no questions"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Team license"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Available, contact support"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Translation"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Rights handled by Quiet Press"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Updates"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Lifetime, sent by email"}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </section>
        </section>
        <section className="max-w-6xl md:px-6 md:py-16 mx-auto px-4 py-12 w-full" aria-label="Reviews">
          <section className="flex flex-col gap-10" id="reviews" aria-labelledby="reviews-heading">
            <header className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                  {"06"}
                </span>
                <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                  {"From Readers"}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold leading-tight max-w-xl md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"2,456 readers, 4.9 stars on average."}
                </h2>
                <p className="leading-relaxed max-w-xl text-base text-muted-foreground text-pretty">
                  {"Field reports from solo founders, engineers, designers, parents, and product managers. We let the long-form reviews lead."}
                </p>
              </div>
            </header>
            <div className="gap-10 grid grid-cols-1 lg:gap-16 lg:grid-cols-2">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-baseline">
                    <span className="font-semibold leading-none tabular-nums text-5xl text-foreground">
                      {"4.9"}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {"/ 5"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                    <Rating>
                      <div className="flex items-center">
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "90%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Rating>
                    <span className="text-muted-foreground text-sm">
                      {"2,456 verified readers"}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2" role="list" aria-label="Rating breakdown">
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"5★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" aria-valuetext="82%" role="progressbar" aria-label="5-star reviews: 82%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "82%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"2,018"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"4★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="13" aria-valuetext="13%" role="progressbar" aria-label="4-star reviews: 13%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "13%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"318"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"3★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="3" aria-valuetext="3%" role="progressbar" aria-label="3-star reviews: 3%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "3%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"78"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"2★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="1" aria-valuetext="1%" role="progressbar" aria-label="2-star reviews: 1%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "1%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"28"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"1★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="1" aria-valuetext="1%" role="progressbar" aria-label="1-star reviews: 1%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "1%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"14"}
                    </span>
                  </li>
                </ul>
              </div>
              <Carousel className="flex flex-col gap-4" role="region" aria-roledescription="carousel" aria-label="Featured customer reviews">
                <Carousel>
                <CarouselContent>
                  <div className="-ml-4 flex" style={{transform: "translate3d(-1485.6px, 0px, 0px)"}}>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide" style={{transform: "translate3d(1608px, 0px, 0px)"}}>
                      <figure className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2 items-center">
                          <Rating>
                            <div className="flex items-center">
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </Rating>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                            {"Verified"}
                          </Badge>
                          <span className="text-muted-foreground text-xs">
                            {"2 weeks ago"}
                          </span>
                        </div>
                        <blockquote className="leading-relaxed text-balance text-foreground text-sm">
                          {"Short chapters made it easy to read between meetings. I built the weekly review at the end of Part 2 the same evening, and a month later my Sunday-night dread is gone. Worth every cent of the bundle."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs">
                          <Avatar size="sm">
                            <AvatarImage alt="Anaïs Béland" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/anais-beland">
                            {"Anaïs Béland"}
                          </a>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2 items-center">
                          <Rating>
                            <div className="flex items-center">
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </Rating>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                            {"Verified"}
                          </Badge>
                          <span className="text-muted-foreground text-xs">
                            {"1 month ago"}
                          </span>
                        </div>
                        <blockquote className="leading-relaxed text-balance text-foreground text-sm">
                          {"Bought the bundle for the Notion template and stayed for the audiobook. The chapter on decision debt alone paid for the whole set. Concrete, not philosophical, and the worked examples land."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs">
                          <Avatar size="sm">
                            <AvatarImage alt="Theo Larsen" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/theo-larsen">
                            {"Theo Larsen"}
                          </a>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2 items-center">
                          <Rating>
                            <div className="flex items-center">
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative">
                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </Rating>
                          <span className="text-muted-foreground text-xs">
                            {"3 weeks ago"}
                          </span>
                        </div>
                        <blockquote className="leading-relaxed text-balance text-foreground text-sm">
                          {"Refreshing to read a productivity book that respects your time. The worked examples land. I would have liked another chapter on shared calendars at work, but that is a small note."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Anand" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/priya-anand">
                            {"Priya Anand"}
                          </a>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                  </div>
                </CarouselContent>
                </Carousel>
                <div className="flex gap-1.5 items-center">
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 1 of 3" data-active="true" aria-current="true"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 2 of 3" data-active="false"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 3 of 3" data-active="false"></button>
                </div>
              </Carousel>
            </div>
            <Button className="w-fit" href="/reviews/qp-tcs-dig" aria-label="See all 2456 reviews for The Clear System" role="button" tabIndex={0}>
              {"See All 2,456 Reviews"}
              <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </section>
        </section>
      </article>
    </main>
  )
}
