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
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/bases/base/ui/table"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="max-w-6xl md:px-6 md:py-10 mx-auto px-4 py-6 w-full">
        <Breadcrumb className="mb-6 sm:mb-8" aria-label="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop">
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/audio">
                Audio
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/audio/headphones">
                Headphones
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                Atlas Pro Wireless
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="gap-8 grid grid-cols-1 lg:gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,1fr)] md:grid-cols-[minmax(0,1.3fr)_minmax(280px,1fr)]">
          <div className="flex flex-col gap-3">
            <Item className="aspect-square overflow-hidden p-0 relative" variant="muted" size="default">
              <img className="object-cover size-full" alt="Atlas Pro Wireless, three-quarter view" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&h=1200&q=80" />
            </Item>
            <ul className="gap-2 grid grid-cols-6" role="list" aria-label="Product images">
              <li>
                <Item className="aspect-square overflow-hidden p-0 relative ring-2 ring-foreground transition" type="button" aria-label="Show Atlas Pro Wireless, three-quarter view" aria-pressed="true" variant="muted" size="default" extracted="1">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&h=1200&q=80" />
                </Item>
              </li>
              <li>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 relative transition" type="button" aria-label="Show Atlas Pro Wireless, headband stitching detail" aria-pressed="false" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&h=600&q=80" />
                </Item>
              </li>
              <li>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 relative transition" type="button" aria-label="Show Atlas Pro Wireless, ear cup texture" aria-pressed="false" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=600&h=600&q=80" />
                </Item>
              </li>
              <li>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 relative transition" type="button" aria-label="Show Atlas Pro Wireless, side profile" aria-pressed="false" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=600&h=600&q=80" />
                </Item>
              </li>
              <li>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 relative transition" type="button" aria-label="Show Atlas Pro Wireless, in carrying case" aria-pressed="false" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=600&h=600&q=80" />
                </Item>
              </li>
              <li>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 relative transition" type="button" aria-label="Show Atlas Pro Wireless, top-down with cable" aria-pressed="false" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&h=600&q=80" />
                </Item>
              </li>
            </ul>
          </div>
          <div className="lg:top-8 md:self-start md:sticky md:top-6">
            <div className="flex flex-col gap-6 min-w-0">
              <div className="flex flex-col gap-3 min-w-0">
                <nav className="flex flex-wrap gap-2 items-center text-sm" aria-label="Product categories">
                  <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="/shop/audio">
                    Audio
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="/shop/audio/headphones">
                    Headphones
                  </a>
                </nav>
                <h1 className="font-semibold leading-tight md:text-4xl min-w-0 text-3xl text-foreground tracking-tight">
                  Atlas Pro Wireless
                </h1>
                <div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-[10px] text-secondary-foreground tracking-wide transition-shadow uppercase">
                    SKU: AERIAL-APW-22
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3 items-center text-sm">
                  <span className="text-muted-foreground">
                    By
                    <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/brands/aerial">
                      Aerial
                    </a>
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <Rating>
                      <div className="flex items-center">
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "70%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-xs w-5">
                        4.7
                      </span>
                    </Rating>
                    <a className="hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="#reviews" aria-label="Read 412 reviews for Atlas Pro Wireless">
                      (412 reviews)
                    </a>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                  Over-ear wireless headphones with 40-hour battery, hybrid active noise cancellation, and a hand-finished aluminum frame.
                </p>
                <div className="flex flex-wrap gap-3 items-center pt-1">
                  <div className="flex font-semibold gap-2 items-baseline md:text-2xl tabular-nums text-xl">
                    <span>
                      $349
                    </span>
                    <span className="font-normal line-through text-muted-foreground">
                      $399
                    </span>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    13% OFF
                  </Badge>
                </div>
              </div>
              <section className="flex flex-col gap-3" aria-label="Color">
                <p className="font-medium text-muted-foreground text-sm">
                  Color:
                  <span className="font-medium text-foreground">
                    Graphite
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 items-center" role="radiogroup" aria-label="Color">
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring inline-flex items-center justify-center outline-none relative ring-2 ring-foreground ring-offset-2 ring-offset-background rounded-full size-8 transition" type="button" role="radio" aria-checked="true" aria-label="Graphite">
                    <span className="absolute bg-neutral-800 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-8 transition" type="button" role="radio" aria-checked="false" aria-label="Sand">
                    <span className="absolute bg-stone-200 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-8 transition" type="button" role="radio" aria-checked="false" aria-label="Midnight">
                    <span className="absolute bg-slate-900 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                </div>
              </section>
              <section className="flex flex-col gap-3" aria-label="Plug type">
                <p className="font-medium text-foreground text-sm">
                  Plug Type:
                  <span className="font-normal text-muted-foreground">
                    USB-C
                  </span>
                </p>
                <div className="@container/field-group cn-field-group flex-col gap-2 grid grid-cols-3 group/field-group pt-1 w-full" role="group" aria-label="Plug Type">
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-plug-usb-c" id="pdp-plug-usb-c-label">
                    <Field className="bg-primary/5 border-primary/40 h-9 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_0_" aria-checked="true" aria-label="Plug type USB-C: Modern laptops & phones" aria-labelledby="pdp-plug-usb-c-label">
                        <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                      </Checkbox>
                      <input id="pdp-plug-usb-c" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                        USB-C
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-plug-lightning" id="pdp-plug-lightning-label">
                    <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3_" aria-checked="false" aria-label="Plug type Lightning: Older iPhone & iPad" aria-labelledby="pdp-plug-lightning-label"></Checkbox>
                      <input id="pdp-plug-lightning" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                        Lightning
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-plug-aux" id="pdp-plug-aux-label">
                    <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6_" aria-checked="false" aria-label="Plug type 3.5 mm: Universal analog" aria-labelledby="pdp-plug-aux-label"></Checkbox>
                      <input id="pdp-plug-aux" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                        3.5 mm
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
              </section>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-stretch">
                  <ButtonGroup role="group" aria-label="Quantity">
                    <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity">
                      <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                      </svg>
                    </Button>
                    <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-10 tabular-nums text-sm">
                      1
                    </div>
                    <Button type="button" tabIndex="0" aria-label="Increase quantity">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </Button>
                  </ButtonGroup>
                  <Button className="flex-1" type="button" tabIndex="0">
                    <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    Add to Cart
                  </Button>
                </div>
                <Button className="w-full" type="button" tabIndex="0" aria-pressed="false" aria-label="Add Atlas Pro Wireless to wishlist">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                  Add to Wishlist
                </Button>
              </div>
              <ul className="gap-2 grid grid-cols-1 sm:grid-cols-3" role="list">
                <li>
                  <Item className="border-dashed gap-2 h-full px-2.5 py-2" variant="outline" size="sm">
                    <ItemMedia className="size-auto text-foreground" variant="icon">
                      <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                        <path d="M15 18H9"></path>
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                        <circle cx="17" cy="18" r="2"></circle>
                        <circle cx="7" cy="18" r="2"></circle>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-1">
                      <ItemTitle className="font-semibold leading-tight text-xs truncate">
                        Free Shipping
                      </ItemTitle>
                      <ItemDescription className="leading-tight text-[11px] text-muted-foreground truncate">
                        2-day on orders $99+
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="border-dashed gap-2 h-full px-2.5 py-2" variant="outline" size="sm">
                    <ItemMedia className="size-auto text-foreground" variant="icon">
                      <svg className="lucide lucide-rotate-ccw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-1">
                      <ItemTitle className="font-semibold leading-tight text-xs truncate">
                        30-Day Returns
                      </ItemTitle>
                      <ItemDescription className="leading-tight text-[11px] text-muted-foreground truncate">
                        Used returns accepted
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="border-dashed gap-2 h-full px-2.5 py-2" variant="outline" size="sm">
                    <ItemMedia className="size-auto text-foreground" variant="icon">
                      <svg className="lucide lucide-shield-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-1">
                      <ItemTitle className="font-semibold leading-tight text-xs truncate">
                        2-Year Warranty
                      </ItemTitle>
                      <ItemDescription className="leading-tight text-[11px] text-muted-foreground truncate">
                        Free repair, free swap
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:gap-14 md:mt-16 mt-12">
          <section className="flex flex-col gap-8" id="overview" aria-labelledby="overview-heading">
            <header className="flex flex-col gap-3">
              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                Overview
              </span>
              <h2 className="font-semibold md:text-3xl text-2xl text-foreground tracking-tighter" id="overview-heading">
                A Flagship Over-Ear, Refined Twice
              </h2>
            </header>
            <div className="gap-8 grid grid-cols-1 lg:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="flex flex-col gap-4 text-pretty">
                <p className="leading-relaxed text-base text-foreground">
                  Atlas Pro is the third-generation flagship over-ear from Aerial, refined over two years of listening sessions with audio engineers in Berlin and Tokyo. A 40 mm beryllium-coated driver pairs with a closed-back acoustic chamber to deliver detailed mids and tight low end without the boom that ruins long studio days.
                </p>
                <p className="leading-relaxed text-base text-foreground">
                  Hybrid active noise cancellation uses six microphones to read your environment 48,000 times per second, while an open transparency mode lets a conversation through without taking the headphones off. A single charge runs 40 hours with ANC on, and 5 minutes on the included USB-C charger buys 3 hours of playback.
                </p>
              </div>
              <ul className="flex flex-col gap-4" role="list">
                <li className="flex gap-3 items-start">
                  <Item className="bg-primary/10 mt-0.5 p-0 rounded-full size-7 text-primary" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-foreground text-sm">
                      Hybrid ANC
                    </span>
                    <p className="leading-snug text-muted-foreground text-sm">
                      Six mics adapt to street, office, and flight cabins automatically.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Item className="bg-primary/10 mt-0.5 p-0 rounded-full size-7 text-primary" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-foreground text-sm">
                      40-Hour Battery
                    </span>
                    <p className="leading-snug text-muted-foreground text-sm">
                      Or 30 hours with ANC; 3 hours of playback from a 5-minute charge.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Item className="bg-primary/10 mt-0.5 p-0 rounded-full size-7 text-primary" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-foreground text-sm">
                      Multipoint Bluetooth
                    </span>
                    <p className="leading-snug text-muted-foreground text-sm">
                      Stay connected to a laptop and a phone at once with seamless switching.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Item className="bg-primary/10 mt-0.5 p-0 rounded-full size-7 text-primary" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold text-foreground text-sm">
                      Replaceable Ear Pads
                    </span>
                    <p className="leading-snug text-muted-foreground text-sm">
                      Memory-foam pads swap with a magnetic ring - no tools, no glue.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <section className="flex flex-col gap-8" id="specs" aria-labelledby="specs-heading">
            <header className="flex flex-col gap-3">
              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                Specifications
              </span>
              <h2 className="font-semibold md:text-3xl text-2xl text-foreground tracking-tighter" id="specs-heading">
                Built Like A Pro Tool, Tuned For Daily Use
              </h2>
            </header>
            <Item className="flex-col items-stretch overflow-hidden p-0" variant="outline" size="default">
              <div className="cn-table-container">
                <Table>
                  <TableBody>
                    <TableRow className="bg-muted/40 hover:bg-muted/40">
                      <TableCell className="font-semibold px-5 py-2.5 text-foreground text-xs tracking-wide uppercase" colSpan="2">
                        In The Box
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Headphones
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        Atlas Pro, hand-tuned at the factory
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Carrying case
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        Felted wool with magnetic closure
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Cables
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        USB-C charge cable, 3.5 mm audio cable
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Adapter
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        Airline 3.5 mm dual-plug adapter
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/40 border-border border-t hover:bg-muted/40">
                      <TableCell className="font-semibold px-5 py-2.5 text-foreground text-xs tracking-wide uppercase" colSpan="2">
                        Audio
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Drivers
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        40 mm beryllium-coated dynamic
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Frequency response
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        10 Hz - 40 kHz
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Impedance
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        32 Ω, 110 dB SPL/mW
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Codecs
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        LDAC · aptX Adaptive · AAC · SBC
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/40 border-border border-t hover:bg-muted/40">
                      <TableCell className="font-semibold px-5 py-2.5 text-foreground text-xs tracking-wide uppercase" colSpan="2">
                        Build & Fit
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Frame
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        CNC-machined 6061 aluminum, brushed finish
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Ear pads
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        Replaceable memory foam, vegan leather
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Weight
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        278 g · 9.8 oz
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Foldable
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        Flat-folding, gimballed yokes
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/40 border-border border-t hover:bg-muted/40">
                      <TableCell className="font-semibold px-5 py-2.5 text-foreground text-xs tracking-wide uppercase" colSpan="2">
                        Connectivity
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Wireless
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        Bluetooth 5.3, multipoint to 2 devices
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Wired
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        USB-C (24-bit/96 kHz) + 3.5 mm analog
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Battery
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        40 h (ANC off), 30 h (ANC on)
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top font-medium px-5 py-3 text-muted-foreground text-sm w-[34%] whitespace-normal">
                        Charge time
                      </TableCell>
                      <TableCell className="align-top leading-snug px-5 py-3 text-foreground text-sm whitespace-normal">
                        Full: 90 min · Quick: 3 h in 5 min
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Item>
          </section>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <section className="flex flex-col gap-6" id="reviews" aria-labelledby="reviews-heading">
            <header className="flex flex-col gap-3">
              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                Reviews
              </span>
              <h2 className="font-semibold md:text-3xl text-2xl text-foreground tracking-tighter" id="reviews-heading">
                What Buyers Are Saying
              </h2>
            </header>
            <Card size="sm">
              <CardContent className="gap-6 grid sm:gap-10 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-1 items-baseline">
                    <span className="font-semibold tabular-nums text-3xl text-foreground">
                      4.7
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / 5
                    </span>
                  </div>
                  <Rating>
                    <div className="flex items-center">
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "70%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Rating>
                  <span className="text-muted-foreground text-xs">
                    Based on 412 reviews
                  </span>
                </div>
                <ul className="flex flex-col gap-1.5" role="list">
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      5★
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="81" aria-valuetext="81%" role="progressbar" aria-label="5-star reviews: 81%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "81%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        x
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      332
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      4★
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="15" aria-valuetext="15%" role="progressbar" aria-label="4-star reviews: 15%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "15%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        x
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      60
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      3★
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="3" aria-valuetext="3%" role="progressbar" aria-label="3-star reviews: 3%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "3%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        x
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      12
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      2★
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="1" aria-valuetext="1%" role="progressbar" aria-label="2-star reviews: 1%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "1%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        x
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      6
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center">
                    <span className="font-medium tabular-nums text-muted-foreground text-xs">
                      1★
                    </span>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" aria-valuetext="0%" role="progressbar" aria-label="1-star reviews: 0%">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "0%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        x
                      </span>
                    </Progress>
                    <span className="tabular-nums text-muted-foreground text-right text-xs">
                      2
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div className="flex gap-3 items-center justify-between">
              <span className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
                Recent Reviews
              </span>
              <Button type="button" tabIndex="0">
                Write A Review
              </Button>
            </div>
            <ul className="flex flex-col" role="list">
              <li className="border-b border-border pt-0 py-5">
                <div className="flex gap-3">
                  <Avatar size="sm">
                    <AvatarImage alt="Mira Okonkwo" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-center justify-between">
                      <div className="flex flex-wrap gap-2 items-center">
                        <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/u/mira-okonkwo">
                          Mira Okonkwo
                        </a>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                          Verified
                        </Badge>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        3 weeks ago
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Rating>
                        <div className="flex items-center">
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Rating>
                      <h4 className="font-semibold text-foreground text-sm">
                        Replaced my studio cans on day three
                      </h4>
                    </div>
                    <p className="leading-snug text-foreground/90 text-sm">
                      Mixing on these for a week and the imaging is closer to my open-backs than I expected. ANC handles AC hum and street noise without that pressure feeling on long sessions.
                    </p>
                    <div className="text-muted-foreground text-xs">
                      Graphite · USB-C
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-b border-border py-5">
                <div className="flex gap-3">
                  <Avatar size="sm">
                    <AvatarImage alt="Theo Larsen" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=96&h=96&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-center justify-between">
                      <div className="flex flex-wrap gap-2 items-center">
                        <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/u/theo-larsen">
                          Theo Larsen
                        </a>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                          Verified
                        </Badge>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        1 month ago
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Rating>
                        <div className="flex items-center">
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Rating>
                      <h4 className="font-semibold text-foreground text-sm">
                        Lives in my carry-on now
                      </h4>
                    </div>
                    <p className="leading-snug text-foreground/90 text-sm">
                      Folded flat fits in the seat pocket and the case has held up to four flights. Battery is honest - I hit 38 hours with ANC on a transatlantic week.
                    </p>
                    <div className="text-muted-foreground text-xs">
                      Sand · USB-C
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-5">
                <div className="flex gap-3">
                  <Avatar size="sm">
                    <AvatarImage alt="Priya Anand" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-center justify-between">
                      <div className="flex flex-wrap gap-2 items-center">
                        <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/u/priya-anand">
                          Priya Anand
                        </a>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        2 months ago
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Rating>
                        <div className="flex items-center">
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Rating>
                      <h4 className="font-semibold text-foreground text-sm">
                        Multipoint actually works
                      </h4>
                    </div>
                    <p className="leading-snug text-foreground/90 text-sm">
                      Laptop and phone connected at the same time and the handoff between Meet and a phone call is invisible. Pads are easy to swap which sold me - I had to replace pads on my last pair after a year.
                    </p>
                    <div className="text-muted-foreground text-xs">
                      Midnight · Lightning
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <Button className="w-fit" href="/reviews/aerial-apw-22" aria-label="See all 412 reviews for Atlas Pro Wireless" role="button" tabIndex="0">
              See All 412 Reviews
              <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </section>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <section className="flex flex-col gap-6" id="related" aria-labelledby="related-heading">
            <header className="flex flex-col gap-3">
              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                You May Also Like
              </span>
              <h2 className="font-semibold md:text-3xl text-2xl text-foreground tracking-tighter" id="related-heading">
                Pairs Well With Atlas Pro
              </h2>
            </header>
            <ul className="gap-x-4 gap-y-8 grid grid-cols-2 lg:grid-cols-4" role="list">
              <li className="flex flex-col gap-3 group">
                <div className="relative">
                  <Item className="aspect-square block hover:opacity-95 overflow-hidden p-0 relative transition" href="/shop/audio/earbuds/atlas-mini" aria-label="View Atlas Mini True Wireless" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.02] object-cover size-full transition-transform" alt="Atlas Mini True Wireless" loading="lazy" src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&h=600&q=80" />
                  </Item>
                  <div className="absolute right-2 top-2">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                      New
                    </Badge>
                  </div>
                </div>
                <nav className="flex flex-wrap gap-1.5 items-center min-h-5" aria-label="Atlas Mini True Wireless categories">
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/audio/earbuds" aria-label="View Earbuds products">
                    Earbuds
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/audio/wireless" aria-label="View Wireless products">
                    Wireless
                  </a>
                </nav>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/shop/audio/earbuds/atlas-mini">
                  Atlas Mini True Wireless
                </a>
                <span className="-mt-1.5 font-semibold tabular-nums text-foreground text-sm">
                  $199
                </span>
              </li>
              <li className="flex flex-col gap-3 group">
                <div className="relative">
                  <Item className="aspect-square block hover:opacity-95 overflow-hidden p-0 relative transition" href="/shop/audio/headphones/echo-studio" aria-label="View Echo Studio Open-Back" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.02] object-cover size-full transition-transform" alt="Echo Studio Open-Back" loading="lazy" src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=600&h=600&q=80" />
                  </Item>
                </div>
                <nav className="flex flex-wrap gap-1.5 items-center min-h-5" aria-label="Echo Studio Open-Back categories">
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/audio/headphones/studio" aria-label="View Studio products">
                    Studio
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/audio/headphones/open-back" aria-label="View Open-Back products">
                    Open-Back
                  </a>
                </nav>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/shop/audio/headphones/echo-studio">
                  Echo Studio Open-Back
                </a>
                <span className="-mt-1.5 font-semibold tabular-nums text-foreground text-sm">
                  $449
                </span>
              </li>
              <li className="flex flex-col gap-3 group">
                <div className="relative">
                  <Item className="aspect-square block hover:opacity-95 overflow-hidden p-0 relative transition" href="/shop/audio/accessories/loop-case" aria-label="View Loop Travel Hard Case" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.02] object-cover size-full transition-transform" alt="Loop Travel Hard Case" loading="lazy" src="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=600&h=600&q=80" />
                  </Item>
                </div>
                <nav className="flex flex-wrap gap-1.5 items-center min-h-5" aria-label="Loop Travel Hard Case categories">
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/audio/accessories" aria-label="View Accessories products">
                    Accessories
                  </a>
                </nav>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/shop/audio/accessories/loop-case">
                  Loop Travel Hard Case
                </a>
                <span className="-mt-1.5 font-semibold tabular-nums text-foreground text-sm">
                  $39
                </span>
              </li>
              <li className="flex flex-col gap-3 group">
                <div className="relative">
                  <Item className="aspect-square block hover:opacity-95 overflow-hidden p-0 relative transition" href="/shop/audio/accessories/atlas-pads" aria-label="View Replacement Ear Pads" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.02] object-cover size-full transition-transform" alt="Replacement Ear Pads" loading="lazy" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&h=600&q=80" />
                  </Item>
                  <div className="absolute right-2 top-2">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                      Trending
                    </Badge>
                  </div>
                </div>
                <nav className="flex flex-wrap gap-1.5 items-center min-h-5" aria-label="Replacement Ear Pads categories">
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/audio/accessories" aria-label="View Accessories products">
                    Accessories
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/audio/parts" aria-label="View Parts products">
                    Parts
                  </a>
                </nav>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/shop/audio/accessories/atlas-pads">
                  Replacement Ear Pads
                </a>
                <span className="-mt-1.5 font-semibold tabular-nums text-foreground text-sm">
                  $29
                </span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}
