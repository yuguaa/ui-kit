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
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/registry/bases/base/ui/carousel"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <article className="bg-background text-foreground w-full">
        <div className="border-b border-border/60">
          <div className="max-w-3xl md:px-6 mx-auto px-4 py-3 w-full">
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
                  <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/bags">
                    {"Bags"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/bags/backpacks">
                    {"Backpacks"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    {"Drift Mariner Pack"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <section className="flex flex-col gap-10 max-w-3xl md:gap-14 md:px-6 md:py-14 mx-auto px-4 py-10 w-full" aria-label="Product detail">
          <header className="flex flex-col gap-2.5 items-center text-center">
            <p className="flex flex-wrap font-medium gap-x-2 gap-y-1 items-center justify-center text-xs tracking-[0.18em] uppercase">
              <a className="hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="/brand/atlas-goods">
                {"Atlas Goods"}
              </a>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <a className="hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="/shop/bags" aria-label="View Bags products">
                {"Bags"}
              </a>
            </p>
            <h1 className="font-semibold leading-tight max-w-xl md:text-4xl text-3xl text-balance text-foreground tracking-tight">
              <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/p/drift-mariner-pack">
                {"Drift Mariner Pack"}
              </a>
            </h1>
            <p className="leading-relaxed max-w-lg text-base text-muted-foreground text-pretty">
              {"A full-grain leather backpack tuned for long commutes and longer travel days."}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-center justify-center text-sm">
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
                    <div className="absolute inset-0 overflow-hidden" style={{width: "80%"}}>
                      <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="text-muted-foreground text-xs w-5">
                  {"4.8"}
                </span>
              </Rating>
              <a className="hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="#reviews" aria-label="Read 1284 reviews for Drift Mariner Pack">
                {"(1,284 reviews)"}
              </a>
            </div>
          </header>
          <div className="flex flex-col gap-3 items-stretch">
            <Item className="aspect-[4/3] overflow-hidden p-0" variant="muted" size="default">
              <img className="animate-in duration-200 ease-out fade-in object-cover size-full" alt="Drift Mariner Pack, front view on a clean studio background" loading="eager" src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&h=900&q=80" />
            </Item>
            <div className="gap-2 grid grid-cols-5" role="radiogroup" aria-label="Drift Mariner Pack thumbnails, 5 images">
              <Item className="aspect-square overflow-hidden p-0 ring-2 ring-foreground transition" type="button" role="radio" aria-checked="true" aria-label="Show image 1 of 5" tabIndex={0} variant="muted" size="default" extracted="1">
                <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 2 of 5" tabIndex={-1} variant="muted" size="default">
                <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 3 of 5" tabIndex={-1} variant="muted" size="default">
                <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1680039211156-66c721b87625?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 4 of 5" tabIndex={-1} variant="muted" size="default">
                <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1622560257067-108402fcedc0?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 5 of 5" tabIndex={-1} variant="muted" size="default">
                <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <div className="flex font-semibold gap-2 items-baseline md:text-3xl tabular-nums text-2xl">
                <span className="text-foreground whitespace-nowrap">
                  {"$345.00"}
                </span>
                <span className="font-normal line-through text-muted-foreground whitespace-nowrap">
                  {"$399.00"}
                </span>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                {"Save $54"}
              </Badge>
            </div>
            <ul className="flex flex-col gap-2 max-w-md mx-auto" role="list" aria-label="Key highlights">
              <li className="flex gap-2.5 items-start min-w-0 text-sm">
                <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="leading-snug min-w-0 text-foreground">
                  {"Full-grain saddle leather, vegetable-tanned in Tuscany"}
                </span>
              </li>
              <li className="flex gap-2.5 items-start min-w-0 text-sm">
                <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="leading-snug min-w-0 text-foreground">
                  {"Padded 16-inch laptop sleeve, suspended off the bottom"}
                </span>
              </li>
              <li className="flex gap-2.5 items-start min-w-0 text-sm">
                <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="leading-snug min-w-0 text-foreground">
                  {"Lifetime repair warranty on hand-stitched main seam"}
                </span>
              </li>
            </ul>
            <div className="flex flex-col gap-5">
              <section className="flex flex-col gap-2.5 items-center text-center" aria-label="Color">
                <p className="font-medium text-foreground text-sm">
                  {"Color:"}
                  <span className="font-normal text-muted-foreground">
                    {"Tobacco"}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 items-center justify-center" role="radiogroup" aria-label="Color">
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring inline-flex items-center justify-center outline-none relative ring-2 ring-foreground ring-offset-2 ring-offset-background rounded-full size-7 transition" type="button" role="radio" aria-checked="true" aria-label="Tobacco">
                    <span className="absolute bg-amber-800 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Olive">
                    <span className="absolute bg-emerald-900 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Charcoal">
                    <span className="absolute bg-neutral-800 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Sand">
                    <span className="absolute bg-stone-300 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                </div>
              </section>
              <section className="flex flex-col gap-2.5 items-center text-center" aria-label="Size">
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-center">
                  <p className="font-medium text-foreground text-sm">
                    {"Size:"}
                    <span className="font-normal text-muted-foreground">
                      {"18 L"}
                    </span>
                  </p>
                  <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="#size-guide">
                    {"Size guide"}
                  </a>
                </div>
                <div className="gap-2 grid grid-cols-3 max-w-md w-full" role="radiogroup" aria-label="Size">
                  <Item className="flex-col gap-0.5 hover:bg-muted/50 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="false" aria-label="Size 14 L (Day pack)" variant="outline" size="sm">
                    <span className="font-medium text-foreground text-sm">
                      {"14 L"}
                    </span>
                    <span className="leading-tight tabular-nums text-[0.625rem] text-muted-foreground">
                      {"Day pack"}
                    </span>
                  </Item>
                  <Item className="bg-foreground/[0.04] border-foreground flex-col gap-0.5 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="true" aria-label="Size 18 L (Commute)" variant="outline" size="sm">
                    <span className="font-medium text-foreground text-sm">
                      {"18 L"}
                    </span>
                    <span className="leading-tight tabular-nums text-[0.625rem] text-muted-foreground">
                      {"Commute"}
                    </span>
                  </Item>
                  <Item className="flex-col gap-0.5 hover:bg-muted/50 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="false" aria-label="Size 24 L (Travel)" variant="outline" size="sm">
                    <span className="font-medium text-foreground text-sm">
                      {"24 L"}
                    </span>
                    <span className="leading-tight tabular-nums text-[0.625rem] text-muted-foreground">
                      {"Travel"}
                    </span>
                  </Item>
                </div>
              </section>
            </div>
            <p className="flex flex-wrap gap-x-3 gap-y-1 items-center justify-center text-muted-foreground text-sm" aria-label="Stock and shipping">
              <span className="font-medium gap-1.5 inline-flex items-center text-foreground">
                <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                {"Only 6 left in Tobacco"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"Free shipping over $150.00"}
              </span>
            </p>
            <div className="flex flex-wrap gap-2 items-stretch justify-center">
              <ButtonGroup role="group" aria-label="Quantity">
                <Button type="button" disabled="" tabIndex={0} disabled aria-label="Decrease quantity">
                  <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                  </svg>
                </Button>
                <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-10 tabular-nums text-sm">
                  {"1"}
                </div>
                <Button type="button" tabIndex={0} aria-label="Increase quantity">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </ButtonGroup>
              <Button className="px-8" type="button" tabIndex={0}>
                <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Add To Cart"}
              </Button>
              <Button type="button" tabIndex={0} aria-pressed="false" aria-label="Add Drift Mariner Pack to wishlist">
                <svg className="duration-200 lucide lucide-heart size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </div>
            <span className="sr-only" aria-live="polite"></span>
          </div>
          <article className="flex flex-col gap-12 md:gap-16" id="article" aria-label="Product story">
            <p className="leading-relaxed md:text-xl text-foreground text-lg text-pretty">
              {"Mariner is the carry we built for the year we stopped commuting in straight lines. A bag that survives a flight, a coffee meeting, and a thunderstorm, and looks better at the end of the week than it did at the start of it."}
            </p>
            <section className="gap-y-4 grid grid-cols-1 md:gap-x-6 md:grid-cols-[4rem_minmax(0,1fr)]" id="article-material" aria-labelledby="article-material-heading">
              <div className="flex items-baseline md:flex-col md:items-end" aria-hidden="true">
                <span className="font-light font-mono leading-none md:text-5xl tabular-nums text-3xl text-foreground/30">
                  {"01"}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-medium text-muted-foreground text-xs tracking-[0.2em] uppercase">
                  {"Material"}
                </span>
                <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-balance text-foreground tracking-tight" id="article-material-heading">
                  {"Leather that earns its patina."}
                </h2>
                <p className="leading-relaxed text-base text-foreground/90 text-pretty">
                  {"We use full-grain saddle leather from a single Tuscan tannery, vegetable-tanned and finished by hand. It scratches just enough to remember the trip, then settles back to a deeper, more honest tone after a few weeks of carry."}
                </p>
                <Item className="aspect-[16/10] group/media mt-2 overflow-hidden p-0" variant="muted" size="default">
                  <img className="duration-[700ms] ease-out group-hover/media:scale-[1.03] object-cover size-full transition-transform" alt="Close-up of the Mariner Pack's saddle-leather grain and hand stitching" loading="lazy" src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1600&h=1000&q=80" />
                </Item>
              </div>
            </section>
            <section className="gap-y-4 grid grid-cols-1 md:gap-x-6 md:grid-cols-[4rem_minmax(0,1fr)]" id="article-build" aria-labelledby="article-build-heading">
              <div className="flex items-baseline md:flex-col md:items-end" aria-hidden="true">
                <span className="font-light font-mono leading-none md:text-5xl tabular-nums text-3xl text-foreground/30">
                  {"02"}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-medium text-muted-foreground text-xs tracking-[0.2em] uppercase">
                  {"Build"}
                </span>
                <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-balance text-foreground tracking-tight" id="article-build-heading">
                  {"Built to carry a workday."}
                </h2>
                <p className="leading-relaxed text-base text-foreground/90 text-pretty">
                  {"A padded laptop sleeve floats off the bottom panel so a dropped bag never lands on your machine. The main compartment swallows a 13-inch tablet, a packed lunch, and a change of clothes without buckling its shape."}
                </p>
                <Item className="aspect-[16/10] group/media mt-2 overflow-hidden p-0" variant="muted" size="default">
                  <img className="duration-[700ms] ease-out group-hover/media:scale-[1.03] object-cover size-full transition-transform" alt="Mariner Pack opened to reveal the padded laptop sleeve and inner organization" loading="lazy" src="https://images.unsplash.com/photo-1680039211156-66c721b87625?auto=format&fit=crop&w=1600&h=1000&q=80" />
                </Item>
              </div>
            </section>
            <section className="gap-y-4 grid grid-cols-1 md:gap-x-6 md:grid-cols-[4rem_minmax(0,1fr)]" id="article-travel" aria-labelledby="article-travel-heading">
              <div className="flex items-baseline md:flex-col md:items-end" aria-hidden="true">
                <span className="font-light font-mono leading-none md:text-5xl tabular-nums text-3xl text-foreground/30">
                  {"03"}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-medium text-muted-foreground text-xs tracking-[0.2em] uppercase">
                  {"Travel"}
                </span>
                <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-balance text-foreground tracking-tight" id="article-travel-heading">
                  {"Carry-on legal, weather-resistant, lifetime backed."}
                </h2>
                <p className="leading-relaxed text-base text-foreground/90 text-pretty">
                  {"Waxed cotton canvas lines every seam so a sudden downpour stays out of your laptop sleeve. The hand-stitched main seam is covered by our lifetime repair warranty so the bag outlives the trip you bought it for."}
                </p>
                <Item className="aspect-[16/10] group/media mt-2 overflow-hidden p-0" variant="muted" size="default">
                  <img className="duration-[700ms] ease-out group-hover/media:scale-[1.03] object-cover size-full transition-transform" alt="Mariner Pack on a wooden bench during a morning commute" loading="lazy" src="https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?auto=format&fit=crop&w=1600&h=1000&q=80" />
                </Item>
              </div>
            </section>
          </article>
          <section className="flex flex-col gap-6" id="specs" aria-labelledby="specs-heading">
            <header className="flex flex-col gap-2">
              <span className="font-medium text-muted-foreground text-xs tracking-[0.2em] uppercase">
                {"Specifications"}
              </span>
              <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-foreground tracking-tight" id="specs-heading">
                {"Every Number, In One Place."}
              </h2>
            </header>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                  {"Material"}
                </h3>
                <dl className="flex flex-col">
                  <div className="gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Hide"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Full-grain saddle, 1.4 mm"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Lining"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Waxed cotton canvas"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Hardware"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Solid brass · YKK Excella"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                  {"Capacity"}
                </h3>
                <dl className="flex flex-col">
                  <div className="gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Sizes"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"14 L · 18 L · 24 L"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Laptop sleeve"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Up to 16-inch laptop"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Side pockets"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Two water-bottle slip pockets"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                  {"Build"}
                </h3>
                <dl className="flex flex-col">
                  <div className="gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Dimensions"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"44 x 30 x 14 cm"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Weight"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"1.4 kg empty"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Stitching"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Hand-stitched saddle seam"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-muted-foreground text-xs tracking-[0.15em] uppercase">
                  {"Care"}
                </h3>
                <dl className="flex flex-col">
                  <div className="gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Cleaning"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Damp cloth, then leather conditioner"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Storage"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Use cotton dust bag included"}
                    </dd>
                  </div>
                  <div className="border-border/60 border-t gap-3 grid grid-cols-[8rem_minmax(0,1fr)] items-baseline py-2.5">
                    <dt className="text-muted-foreground text-xs">
                      {"Warranty"}
                    </dt>
                    <dd className="leading-snug text-foreground text-sm">
                      {"Lifetime repair, no questions"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-8" id="reviews" aria-labelledby="reviews-heading">
            <header className="flex flex-wrap gap-x-6 gap-y-4 items-start justify-between">
              <div className="flex flex-col gap-2 min-w-0">
                <span className="font-medium text-muted-foreground text-xs tracking-[0.2em] uppercase">
                  {"Reviews"}
                </span>
                <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-foreground tracking-tight" id="reviews-heading">
                  {"What Owners Say."}
                </h2>
              </div>
              <dl className="border-border/70 border-l flex gap-4 items-center pl-4 py-1 shrink-0" aria-label="Review summary">
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[0.6875rem] text-muted-foreground tracking-wide uppercase">
                    {"Rating"}
                  </dt>
                  <dd className="flex gap-1 items-baseline">
                    <span className="font-semibold leading-none tabular-nums text-foreground text-xl">
                      {"4.8"}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {"/ 5"}
                    </span>
                  </dd>
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
                        <div className="absolute inset-0 overflow-hidden" style={{width: "80%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Rating>
                </div>
                <div className="border-border/70 border-l flex flex-col gap-0.5 pl-4">
                  <dt className="text-[0.6875rem] text-muted-foreground tracking-wide uppercase">
                    {"Recommend"}
                  </dt>
                  <dd className="font-semibold leading-none tabular-nums text-foreground text-xl">
                    {"92%"}
                  </dd>
                  <span className="text-[0.6875rem] text-muted-foreground">
                    {"1,284 verified"}
                  </span>
                </div>
              </dl>
            </header>
            <Carousel className="flex flex-col gap-8" role="region" aria-roledescription="carousel" aria-label="Featured customer reviews">
              <div className="md:pl-8 md:pt-14 pl-6 pt-10 relative">
                <span className="absolute font-serif leading-none left-0 md:text-[7rem] pointer-events-none select-none text-[5rem] text-foreground/10 top-0" aria-hidden="true">
                  {"“"}
                </span>
                <Carousel>
                <CarouselContent>
                  <div className="-ml-4 flex" style={{transform: "translate3d(-1408px, 0px, 0px)"}}>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                      <figure className="flex flex-col gap-6">
                        <blockquote className="font-medium leading-snug md:text-2xl text-balance text-foreground text-xl tracking-tight">
                          {"Sleeve fits my Pro perfectly, padded enough that I trust it on a bike commute. Leather darkened to a beautiful tobacco after three weeks of carry."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-3 gap-y-2 items-center text-sm">
                          <Avatar className="size-10" size="default">
                            <AvatarImage alt="Leon Vargas" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-center">
                              <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/leon-vargas">
                                {"Leon Vargas"}
                              </a>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                {"Verified"}
                              </Badge>
                            </div>
                            <span className="text-muted-foreground text-xs">
                              {"6 days ago"}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-6">
                        <blockquote className="font-medium leading-snug md:text-2xl text-balance text-foreground text-xl tracking-tight">
                          {"Waxed lining kept my laptop dry through a thunderstorm. The brass hardware breaks in like a good watch, no squeaks after a thousand zip pulls."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-3 gap-y-2 items-center text-sm">
                          <Avatar className="size-10" size="default">
                            <AvatarImage alt="Ines Carbone" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-center">
                              <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/ines-carbone">
                                {"Ines Carbone"}
                              </a>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                {"Verified"}
                              </Badge>
                            </div>
                            <span className="text-muted-foreground text-xs">
                              {"2 weeks ago"}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-6">
                        <blockquote className="font-medium leading-snug md:text-2xl text-balance text-foreground text-xl tracking-tight">
                          {"Build quality is genuinely premium and the leather smells incredible. Half-star off for the top-loading laptop sleeve being a touch tight on the 16-inch."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-3 gap-y-2 items-center text-sm">
                          <Avatar className="size-10" size="default">
                            <AvatarImage alt="Tomas Reinhardt" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-center">
                              <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/tomas-reinhardt">
                                {"Tomas Reinhardt"}
                              </a>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                {"Verified"}
                              </Badge>
                            </div>
                            <span className="text-muted-foreground text-xs">
                              {"3 weeks ago"}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-6">
                        <blockquote className="font-medium leading-snug md:text-2xl text-balance text-foreground text-xl tracking-tight">
                          {"Took it on three flights inside Europe, no issues with overhead sizing. Leather is developing exactly the patina I hoped for."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-3 gap-y-2 items-center text-sm">
                          <Avatar className="size-10" size="default">
                            <AvatarImage alt="Ada Mensah" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-center">
                              <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/ada-mensah">
                                {"Ada Mensah"}
                              </a>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                {"Verified"}
                              </Badge>
                            </div>
                            <span className="text-muted-foreground text-xs">
                              {"4 weeks ago"}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                    <Carousel>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-6">
                        <blockquote className="font-medium leading-snug md:text-2xl text-balance text-foreground text-xl tracking-tight">
                          {"Took it on a Friday to Sunday with a 13-inch laptop, change of clothes, and toiletries. Side pockets swallowed a water bottle and a coffee thermos without complaint."}
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-3 gap-y-2 items-center text-sm">
                          <Avatar className="size-10" size="default">
                            <AvatarImage alt="Noor Haidari" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-center">
                              <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/noor-haidari">
                                {"Noor Haidari"}
                              </a>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                {"Verified"}
                              </Badge>
                            </div>
                            <span className="text-muted-foreground text-xs">
                              {"1 month ago"}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    </Carousel>
                  </div>
                </CarouselContent>
                </Carousel>
              </div>
              <div className="auto-cols-fr gap-1.5 grid grid-flow-col items-center" role="presentation" aria-label="Showing review 3 of 5">
                <button className="bg-muted-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring h-1 overflow-hidden relative rounded-full w-full" type="button" aria-label="Go to review 1 of 5: Leon Vargas">
                  <span className="absolute bg-foreground ease-linear inset-y-0 left-0 rounded-full" aria-hidden="true" style={{width: "100%", transitionProperty: "width", transitionDuration: "0ms"}}></span>
                </button>
                <button className="bg-muted-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring h-1 overflow-hidden relative rounded-full w-full" type="button" aria-label="Go to review 2 of 5: Ines Carbone">
                  <span className="absolute bg-foreground ease-linear inset-y-0 left-0 rounded-full" aria-hidden="true" style={{width: "100%", transitionProperty: "width", transitionDuration: "0ms"}}></span>
                </button>
                <button className="bg-muted-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring h-1 overflow-hidden relative rounded-full w-full" type="button" aria-label="Go to review 3 of 5: Tomas Reinhardt" aria-current="true">
                  <span className="absolute bg-foreground ease-linear inset-y-0 left-0 rounded-full" aria-hidden="true" style={{width: "100%", transitionProperty: "width", transitionDuration: "8000ms"}}></span>
                </button>
                <button className="bg-muted-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring h-1 overflow-hidden relative rounded-full w-full" type="button" aria-label="Go to review 4 of 5: Ada Mensah">
                  <span className="absolute bg-foreground ease-linear inset-y-0 left-0 rounded-full" aria-hidden="true" style={{width: "0%", transitionProperty: "width", transitionDuration: "0ms"}}></span>
                </button>
                <button className="bg-muted-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring h-1 overflow-hidden relative rounded-full w-full" type="button" aria-label="Go to review 5 of 5: Noor Haidari">
                  <span className="absolute bg-foreground ease-linear inset-y-0 left-0 rounded-full" aria-hidden="true" style={{width: "0%", transitionProperty: "width", transitionDuration: "0ms"}}></span>
                </button>
              </div>
            </Carousel>
            <footer className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-between">
              <div className="flex gap-3 items-center">
                <ul className="-space-x-2 flex" role="list" aria-label="Reviewers">
                  <li>
                    <Avatar className="ring-2 ring-background size-8" size="default">
                      <AvatarImage alt="Leon Vargas" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                    </Avatar>
                  </li>
                  <li>
                    <Avatar className="ring-2 ring-background size-8" size="default">
                      <AvatarImage alt="Ines Carbone" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                    </Avatar>
                  </li>
                  <li>
                    <Avatar className="ring-2 ring-background size-8" size="default">
                      <AvatarImage alt="Tomas Reinhardt" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                    </Avatar>
                  </li>
                  <li>
                    <Avatar className="ring-2 ring-background size-8" size="default">
                      <AvatarImage alt="Ada Mensah" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                    </Avatar>
                  </li>
                  <li>
                    <Avatar className="ring-2 ring-background size-8" size="default">
                      <AvatarImage alt="Noor Haidari" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                    </Avatar>
                  </li>
                </ul>
                <span className="text-muted-foreground text-sm">
                  <span className="font-medium text-foreground">
                    {"+1,279"}
                  </span>
                  {"owners reviewed"}
                </span>
              </div>
              <Button className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/reviews/mariner-18" aria-label="Read all 1284 reviews for Drift Mariner Pack" role="button" tabIndex={0}>
                {"Read All Reviews"}
                <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </footer>
          </section>
        </section>
        <div className="bg-muted/30 border-border/60 border-t">
          <div className="max-w-6xl md:px-6 md:py-12 mx-auto px-4 py-10 w-full">
            <section className="flex flex-col gap-6" id="related" aria-labelledby="related-heading">
              <header className="flex gap-3 items-baseline justify-between">
                <h2 className="font-semibold leading-tight md:text-3xl text-2xl text-foreground tracking-tight" id="related-heading">
                  {"You May Also Like"}
                </h2>
                <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="/shop/bags" aria-label="View all Bags">
                  {"View All"}
                </a>
              </header>
              <ul className="gap-x-4 gap-y-8 grid grid-cols-2 sm:grid-cols-4" role="list">
                <li className="flex flex-col gap-3 group">
                  <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/mariner-laptop-sleeve" aria-label="View Mariner Laptop Sleeve" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Mariner Laptop Sleeve in matching saddle leather" loading="lazy" src="https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/accessories" aria-label="View Accessories products">
                      {"Accessories"}
                    </a>
                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/mariner-laptop-sleeve">
                      {"Mariner Laptop Sleeve"}
                    </a>
                    <span className="font-semibold tabular-nums text-foreground text-sm">
                      {"$129.00"}
                    </span>
                  </div>
                </li>
                <li className="flex flex-col gap-3 group">
                  <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/drift-card-holder" aria-label="View Drift Card Holder" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Drift Card Holder, minimal vegetable-tanned leather wallet" loading="lazy" src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/wallets" aria-label="View Wallets products">
                      {"Wallets"}
                    </a>
                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/drift-card-holder">
                      {"Drift Card Holder"}
                    </a>
                    <span className="font-semibold tabular-nums text-foreground text-sm">
                      {"$79.00"}
                    </span>
                  </div>
                </li>
                <li className="flex flex-col gap-3 group">
                  <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/mariner-shoulder-strap" aria-label="View Mariner Shoulder Strap" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Mariner Shoulder Strap, hand-stitched leather replacement" loading="lazy" src="https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/accessories" aria-label="View Accessories products">
                      {"Accessories"}
                    </a>
                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/mariner-shoulder-strap">
                      {"Mariner Shoulder Strap"}
                    </a>
                    <span className="font-semibold tabular-nums text-foreground text-sm">
                      {"$89.00"}
                    </span>
                  </div>
                </li>
                <li className="flex flex-col gap-3 group">
                  <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/drift-leather-care-kit" aria-label="View Drift Leather Care Kit" variant="muted" size="default">
                    <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Drift Leather Care Kit, beeswax balm and horsehair brush in a tin" loading="lazy" src="https://images.unsplash.com/photo-1628483211662-9bcc692c46dc?auto=format&fit=crop&w=900&h=900&q=80" />
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/accessories" aria-label="View Accessories products">
                      {"Accessories"}
                    </a>
                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/drift-leather-care-kit">
                      {"Drift Leather Care Kit"}
                    </a>
                    <span className="font-semibold tabular-nums text-foreground text-sm">
                      {"$39.00"}
                    </span>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
