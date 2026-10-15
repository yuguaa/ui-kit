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
                  <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/audio">
                    {"Audio"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/audio/headphones">
                    {"Headphones"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    {"Resonance Wave Pro"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <section className="max-w-6xl md:pb-8 md:pt-12 md:px-6 mx-auto pb-6 pt-8 px-4 w-full" id="buy" aria-label="Choose your configuration">
          <div className="gap-8 grid grid-cols-1 items-start lg:gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-4 sm:flex-row-reverse">
              <Item className="aspect-square overflow-hidden p-0 sm:flex-1" variant="muted" size="default">
                <img className="object-cover size-full" alt="Resonance Wave Pro, three-quarter front" loading="eager" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <ul className="gap-2 grid grid-cols-5 sm:flex sm:flex-col sm:gap-2 sm:shrink-0 sm:w-16" role="list" aria-label="Resonance Wave Pro gallery thumbnails">
                <li>
                  <Item className="aspect-square overflow-hidden p-0 ring-2 ring-foreground transition" type="button" aria-label="Show image 1 of 5" aria-pressed="true" variant="muted" size="default" extracted="1">
                    <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                </li>
                <li>
                  <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show image 2 of 5" aria-pressed="false" variant="muted" size="default">
                    <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                </li>
                <li>
                  <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show image 3 of 5" aria-pressed="false" variant="muted" size="default">
                    <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                </li>
                <li>
                  <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show image 4 of 5" aria-pressed="false" variant="muted" size="default">
                    <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                </li>
                <li>
                  <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-70 overflow-hidden p-0 transition" type="button" aria-label="Show image 5 of 5" aria-pressed="false" variant="muted" size="default">
                    <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                </li>
              </ul>
            </div>
            <div className="lg:sticky lg:top-8">
              <div className="flex flex-col gap-4 min-w-0">
                <div className="flex flex-col gap-3 min-w-0">
                  <nav className="flex flex-wrap gap-2 items-center text-xs" aria-label="Product categories">
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground tracking-wide transition-colors underline-offset-4 uppercase" href="/shop/audio/headphones">
                      {"Headphones"}
                    </a>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground tracking-wide transition-colors underline-offset-4 uppercase" href="/shop/audio/wireless">
                      {"Wireless"}
                    </a>
                  </nav>
                  <h1 className="font-semibold leading-tight md:text-3xl text-2xl text-foreground tracking-tight">
                    {"Resonance Wave Pro"}
                  </h1>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-sm">
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
                          <div className="absolute inset-0 overflow-hidden" style={{width: "70%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-xs w-5">
                        {"4.7"}
                      </span>
                    </Rating>
                    <a className="hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="#reviews" aria-label="Read 1243 reviews for Resonance Wave Pro">
                      {"1,243 reviews"}
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="flex font-semibold gap-2 items-baseline md:text-3xl tabular-nums text-2xl">
                    <span className="text-foreground">
                      {"$279"}
                    </span>
                    <span className="font-normal line-through text-muted-foreground">
                      {"$349"}
                    </span>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    {"20% OFF"}
                  </Badge>
                </div>
                <section className="flex flex-col gap-2.5" aria-label="Color">
                  <p className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Color ·"}
                    <span className="font-medium normal-case text-foreground">
                      {"Onyx"}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2 items-center" role="radiogroup" aria-label="Color">
                    <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring inline-flex items-center justify-center outline-none relative ring-2 ring-foreground ring-offset-2 ring-offset-background rounded-full size-7 transition" type="button" role="radio" aria-checked="true" aria-label="Onyx">
                      <span className="absolute bg-slate-900 inset-0 rounded-full" aria-hidden="true"></span>
                    </button>
                    <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Sand">
                      <span className="absolute bg-amber-200 inset-0 rounded-full" aria-hidden="true"></span>
                    </button>
                    <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Sage">
                      <span className="absolute bg-emerald-700 inset-0 rounded-full" aria-hidden="true"></span>
                    </button>
                  </div>
                </section>
                <ul className="flex flex-col gap-2" aria-label="Key highlights" role="list">
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"40-hour battery with adaptive ANC on"}
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"Adaptive noise cancellation with transparency"}
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"Hi-res wireless: LDAC / aptX HD / AAC"}
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 text-sm">
                    <span className="bg-muted-foreground/50 mt-2 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="leading-snug min-w-0 text-foreground">
                      {"USB-C fast charge: 10 min returns 5 hours"}
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
                    {"Add to Cart"}
                  </Button>
                  <Button type="button" tabIndex={0} aria-pressed="false" aria-label="Add Resonance Wave Pro to wishlist">
                    <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                  </Button>
                </div>
                <ul className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs" aria-label="Purchase guarantees" role="list">
                  <li>
                    {"Free 2-day shipping over $99"}
                  </li>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <li>
                    {"30-day returns"}
                  </li>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <li>
                    {"2-year limited warranty"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl md:pb-16 md:pt-12 md:px-6 mx-auto pb-12 pt-8 px-4 w-full" id="story" aria-label="Product story">
          <div className="flex flex-col gap-14 md:gap-20">
            <article className="gap-8 grid grid-cols-1 items-center lg:gap-16 lg:grid-cols-2" id="story-sound">
              <Item className="aspect-[5/4] group/media lg:order-2 overflow-hidden p-0 relative" variant="muted" size="default">
                <img className="duration-[700ms] ease-out group-hover/media:scale-[1.04] object-cover size-full transition-transform" alt="Close-up of the Resonance Wave Pro earcup, showing the acoustic mesh" loading="lazy" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&h=1000&q=80" />
                <div className="absolute bg-gradient-to-t duration-300 flex flex-col from-foreground/85 group-hover/media:opacity-100 inset-0 justify-end md:p-8 opacity-0 p-6 to-transparent transition-opacity" aria-hidden="true">
                  <div className="flex flex-col gap-1.5 text-background">
                    <span className="font-mono tabular-nums text-background/70 text-xs">
                      {"Chapter 01"}
                    </span>
                    <span className="font-semibold md:text-lg text-balance text-base tracking-tight">
                      {"A driver tuned by listening, not by chart."}
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
                    {"Sound"}
                  </span>
                </div>
                <h2 className="font-semibold leading-tight max-w-md md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"A driver tuned by listening, not by chart."}
                </h2>
                <p className="leading-relaxed max-w-md text-base text-muted-foreground text-pretty">
                  {"We rebuilt the 40 mm dynamic driver from the suspension up, then spent two seasons in the room with reference tracks across jazz, electronic, and orchestral recordings. The result is wider stereo separation, deeper sub-bass extension, and a midrange that holds vocals intimate without smearing the rest of the mix."}
                </p>
                <dl className="border-t gap-x-6 gap-y-3 grid grid-cols-1 pt-5 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Drivers"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"40 mm dynamic, neodymium"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Frequency"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"10 Hz to 40 kHz"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Codecs"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"LDAC / aptX HD / AAC"}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
            <article className="gap-8 grid grid-cols-1 items-center lg:gap-16 lg:grid-cols-2" id="story-comfort">
              <Item className="aspect-[5/4] group/media lg:order-1 overflow-hidden p-0 relative" variant="muted" size="default">
                <img className="duration-[700ms] ease-out group-hover/media:scale-[1.04] object-cover size-full transition-transform" alt="Side profile of the Resonance Wave Pro with the headband in view" loading="lazy" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1400&h=1000&q=80" />
                <div className="absolute bg-gradient-to-t duration-300 flex flex-col from-foreground/85 group-hover/media:opacity-100 inset-0 justify-end md:p-8 opacity-0 p-6 to-transparent transition-opacity" aria-hidden="true">
                  <div className="flex flex-col gap-1.5 text-background">
                    <span className="font-mono tabular-nums text-background/70 text-xs">
                      {"Chapter 02"}
                    </span>
                    <span className="font-semibold md:text-lg text-balance text-base tracking-tight">
                      {"Built to disappear over long sessions."}
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
                    {"Comfort"}
                  </span>
                </div>
                <h2 className="font-semibold leading-tight max-w-md md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"Built to disappear over long sessions."}
                </h2>
                <p className="leading-relaxed max-w-md text-base text-muted-foreground text-pretty">
                  {"A lighter aluminum yoke, denser memory-foam earpads, and a slip-resistant headband make the Pro vanish across a working day. Pads swap with a quarter-turn so you can refresh the fit without tools, and the clamp pressure stays even from a forty-minute call to a six-hour studio session."}
                </p>
                <dl className="border-t gap-x-6 gap-y-3 grid grid-cols-1 pt-5 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Weight"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"250 g"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Earpads"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"Memory-foam, swappable"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Pressure"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"Tuned for 8h sessions"}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
            <article className="gap-8 grid grid-cols-1 items-center lg:gap-16 lg:grid-cols-2" id="story-travel">
              <Item className="aspect-[5/4] group/media lg:order-2 overflow-hidden p-0 relative" variant="muted" size="default">
                <img className="duration-[700ms] ease-out group-hover/media:scale-[1.04] object-cover size-full transition-transform" alt="Resonance Wave Pro folded into its travel case beside a passport" loading="lazy" src="https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1400&h=1000&q=80" />
                <div className="absolute bg-gradient-to-t duration-300 flex flex-col from-foreground/85 group-hover/media:opacity-100 inset-0 justify-end md:p-8 opacity-0 p-6 to-transparent transition-opacity" aria-hidden="true">
                  <div className="flex flex-col gap-1.5 text-background">
                    <span className="font-mono tabular-nums text-background/70 text-xs">
                      {"Chapter 03"}
                    </span>
                    <span className="font-semibold md:text-lg text-balance text-base tracking-tight">
                      {"Forty hours, four flights, one charge."}
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
                    {"Travel"}
                  </span>
                </div>
                <h2 className="font-semibold leading-tight max-w-md md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"Forty hours, four flights, one charge."}
                </h2>
                <p className="leading-relaxed max-w-md text-base text-muted-foreground text-pretty">
                  {"Adaptive noise cancellation reads the cabin around you and adjusts every two seconds. Quieter at altitude, transparent at the gate. A ten-minute USB-C top-up returns five hours of playback, and the hard case carries the headphones, the cable, and a passport without bulking out a personal item."}
                </p>
                <dl className="border-t gap-x-6 gap-y-3 grid grid-cols-1 pt-5 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Battery"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"40 h ANC on · 60 h off"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"Charging"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"10 min = 5 h"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      {"ANC"}
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      {"Adaptive · 2 s refresh"}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </section>
        <section className="max-w-6xl md:px-6 md:py-16 mx-auto px-4 py-12 w-full" aria-label="Specifications">
          <section className="flex flex-col gap-8" id="specs" aria-labelledby="specs-heading">
            <header className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                  {"04"}
                </span>
                <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                  {"Specifications"}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold leading-tight max-w-xl md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"Every Number, In One Place."}
                </h2>
                <p className="leading-relaxed max-w-xl text-base text-muted-foreground text-pretty">
                  {"The full hardware loadout, from drivers and battery to codecs, build, and warranty, in a single readable column."}
                </p>
              </div>
            </header>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"Audio"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Drivers"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"40 mm dynamic, neodymium"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Frequency"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"10 Hz to 40 kHz"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Mics"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"8-mic beamforming array"}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"Power"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Battery"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"40 h ANC on · 60 h off"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Fast charge"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"USB-C · 10 min = 5 h"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Standby"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"180 days"}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"Connectivity"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Wireless"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Bluetooth 5.3"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Codecs"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"LDAC / aptX HD / AAC"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Multi-point"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"2 devices"}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card size="sm">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    {"Build"}
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Weight"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"250 g"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Frame"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"Aluminum yoke · vegan leather"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs">
                        {"Warranty"}
                      </dt>
                      <dd className="font-medium leading-snug text-foreground text-sm">
                        {"2 years, limited"}
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
                  {"05"}
                </span>
                <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
                <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                  {"Reviews"}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold leading-tight max-w-xl md:text-3xl text-2xl text-balance text-foreground tracking-tight">
                  {"What Buyers Say."}
                </h2>
                <p className="leading-relaxed max-w-xl text-base text-muted-foreground text-pretty">
                  {"Verified reviews aggregated from owners who've lived with the Pro for at least 30 days."}
                </p>
              </div>
            </header>
            <div className="gap-10 grid grid-cols-1 lg:gap-16 lg:grid-cols-2">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-baseline">
                    <span className="font-semibold leading-none tabular-nums text-5xl text-foreground">
                      {"4.7"}
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
                          <div className="absolute inset-0 overflow-hidden" style={{width: "70%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Rating>
                    <span className="text-muted-foreground text-sm">
                      {"1,243 verified reviews"}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2" role="list" aria-label="Rating breakdown">
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"5★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="76" aria-valuetext="76%" role="progressbar" aria-label="5-star reviews: 76%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "76%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"942"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"4★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="18" aria-valuetext="18%" role="progressbar" aria-label="4-star reviews: 18%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "18%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"218"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      {"3★"}
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="4" aria-valuetext="4%" role="progressbar" aria-label="3-star reviews: 4%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "4%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      {"52"}
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
                      {"18"}
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
                      {"13"}
                    </span>
                  </li>
                </ul>
              </div>
              <Carousel className="flex flex-col gap-5" role="region" aria-roledescription="carousel" aria-label="Featured customer reviews">
                <Carousel>
                <CarouselContent>
                  <div className="-ml-4 flex" style={{transform: "translate3d(-1072px, 0px, 0px)"}}>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                      <figure className="flex flex-col gap-5">
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
                        </div>
                        <blockquote className="font-medium leading-snug md:text-xl text-balance text-foreground text-lg tracking-tight">
                          {"Used these on a 12-hour flight. Pillow-quiet with ANC on, and the battery only dropped to 60%. Mids are warmer than I expected at this price, and the call mics held up over a windy taxi ride home."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-sm">
                          <Avatar size="sm">
                            <AvatarImage alt="Mara Tørnes" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/mara-tornes">
                            {"Mara Tørnes"}
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            {"1 week ago"}
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-5">
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
                        </div>
                        <blockquote className="font-medium leading-snug md:text-xl text-balance text-foreground text-lg tracking-tight">
                          {"The eight-mic array picks me up clearly even with the espresso machine running. Battery has been honest, around 38 hours with adaptive ANC on at moderate volume."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-sm">
                          <Avatar size="sm">
                            <AvatarImage alt="Daniel Park" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/daniel-park">
                            {"Daniel Park"}
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            {"3 days ago"}
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-5">
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
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                            {"Verified"}
                          </Badge>
                        </div>
                        <blockquote className="font-medium leading-snug md:text-xl text-balance text-foreground text-lg tracking-tight">
                          {"Comfort wins over six-hour studio sessions. Headband pressure stays even, ears don't get hot, and the soundstage is genuinely wider than the closest Sony at this price."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-sm">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Sharma" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/priya-sharma">
                            {"Priya Sharma"}
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            {"1 week ago"}
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-5">
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
                        </div>
                        <blockquote className="font-medium leading-snug md:text-xl text-balance text-foreground text-lg tracking-tight">
                          {"Bass extension is the real story. Sub-40 Hz feels physical without smearing the midrange, and the new Pro pads keep clamp pressure balanced on long flights."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-sm">
                          <Avatar size="sm">
                            <AvatarImage alt="Jules Akinyemi" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/jules-akinyemi">
                            {"Jules Akinyemi"}
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            {"2 weeks ago"}
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                  </div>
                </CarouselContent>
                </Carousel>
                <div className="flex gap-1.5 items-center">
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 1 of 4" data-active="false"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 2 of 4" data-active="false"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 3 of 4" data-active="true" aria-current="true"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 4 of 4" data-active="false"></button>
                </div>
              </Carousel>
            </div>
            <Button className="w-fit" href="/reviews/rw-pro-01" aria-label="See all 1243 reviews for Resonance Wave Pro" role="button" tabIndex={0}>
              {"See All 1,243 Reviews"}
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
