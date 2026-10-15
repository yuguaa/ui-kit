import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="flex flex-col gap-10 max-w-6xl md:gap-14 md:px-6 md:py-12 mx-auto px-4 py-8 w-full" aria-label="Product detail">
        <div className="gap-8 grid grid-cols-1 items-start lg:gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-8">
            <div className="flex flex-col gap-3">
              <Item className="aspect-square overflow-hidden p-0" variant="muted" size="default">
                <img className="animate-in duration-200 ease-out fade-in object-cover size-full" alt="Drift Pour-Over Kit, dripper on the carafe, three-quarter view" loading="eager" src="https://images.unsplash.com/photo-1495862433577-132cf20d7902?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <div className="gap-2 grid grid-cols-5" role="radiogroup" aria-label="5 product image thumbnails">
                <Item className="aspect-square overflow-hidden p-0 ring-2 ring-foreground transition" type="button" role="radio" aria-checked="true" aria-label="Show image 1 of 5" tabIndex="0" variant="muted" size="default" extracted="1">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1495862433577-132cf20d7902?auto=format&fit=crop&w=900&h=900&q=80" />
                </Item>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 2 of 5" tabIndex="-1" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&h=900&q=80" />
                </Item>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 3 of 5" tabIndex="-1" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1522012188892-24beb302783d?auto=format&fit=crop&w=900&h=900&q=80" />
                </Item>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 4 of 5" tabIndex="-1" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1522992319-0365e5f11656?auto=format&fit=crop&w=900&h=900&q=80" />
                </Item>
                <Item className="aspect-square focus-visible:ring-2 focus-visible:ring-ring hover:opacity-100 opacity-80 overflow-hidden p-0 transition" type="button" role="radio" aria-checked="false" aria-label="Show image 5 of 5" tabIndex="-1" variant="muted" size="default">
                  <img className="object-cover size-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1522726336270-3a0053210f06?auto=format&fit=crop&w=900&h=900&q=80" />
                </Item>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 min-w-0">
            <header className="flex flex-col gap-2 min-w-0">
              <p className="flex flex-wrap font-medium gap-x-2 gap-y-1 items-center min-w-0 text-xs tracking-wide uppercase">
                <a className="hover:text-primary hover:underline min-w-0 text-muted-foreground transition-colors truncate underline-offset-4" href="/brand/atlas-goods">
                  Atlas Goods
                </a>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <a className="hover:text-primary hover:underline min-w-0 text-muted-foreground transition-colors truncate underline-offset-4" href="/shop/coffee" aria-label="View Coffee products">
                  Coffee
                </a>
              </p>
              <h1 className="font-semibold leading-tight md:text-2xl text-foreground text-xl tracking-tight">
                <a className="block hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/p/drift-pour-over-kit">
                  Drift Pour-Over Kit
                </a>
              </h1>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-sm">
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
                <a className="hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="#reviews" aria-label="Read 1842 reviews for Drift Pour-Over Kit">
                  (1,842 reviews)
                </a>
              </div>
            </header>
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex font-semibold gap-2 items-baseline md:text-2xl tabular-nums text-xl">
                <span className="text-foreground whitespace-nowrap">
                  $89.00
                </span>
                <span className="font-normal line-through text-muted-foreground whitespace-nowrap">
                  $112.00
                </span>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                Save $23
              </Badge>
            </div>
            <ul className="flex flex-col gap-2" role="list" aria-label="Key highlights">
              <li className="flex gap-2.5 items-start min-w-0 text-sm">
                <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="leading-snug min-w-0 text-foreground">
                  Hand-thrown ceramic with 60-degree cone for even extraction
                </span>
              </li>
              <li className="flex gap-2.5 items-start min-w-0 text-sm">
                <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="leading-snug min-w-0 text-foreground">
                  Double-wall borosilicate carafe keeps coffee hot through the second cup
                </span>
              </li>
              <li className="flex gap-2.5 items-start min-w-0 text-sm">
                <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="leading-snug min-w-0 text-foreground">
                  Dishwasher-safe carafe and lid, hand-wash dripper
                </span>
              </li>
            </ul>
            <section className="flex flex-col gap-2.5" aria-label="Color">
              <p className="font-medium text-foreground text-sm">
                Color:
                <span className="font-normal text-muted-foreground">
                  Cream
                </span>
              </p>
              <div className="flex flex-wrap gap-2 items-center" role="radiogroup" aria-label="Color">
                <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring inline-flex items-center justify-center outline-none relative ring-2 ring-foreground ring-offset-2 ring-offset-background rounded-full size-7 transition" type="button" role="radio" aria-checked="true" aria-label="Cream">
                  <span className="absolute bg-stone-100 inset-0 rounded-full" aria-hidden="true"></span>
                </button>
                <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Charcoal">
                  <span className="absolute bg-neutral-800 inset-0 rounded-full" aria-hidden="true"></span>
                </button>
                <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Sage">
                  <span className="absolute bg-emerald-700 inset-0 rounded-full" aria-hidden="true"></span>
                </button>
                <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Cobalt">
                  <span className="absolute bg-blue-700 inset-0 rounded-full" aria-hidden="true"></span>
                </button>
              </div>
            </section>
            <section className="flex flex-col gap-2.5" aria-label="Size">
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
                <p className="font-medium text-foreground text-sm">
                  Size:
                  <span className="font-normal text-muted-foreground">
                    700 ml
                  </span>
                </p>
                <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="#size-guide">
                  Size guide
                </a>
              </div>
              <div className="gap-2 grid grid-cols-3" role="radiogroup" aria-label="Size">
                <Item className="flex-col gap-0.5 hover:bg-muted/50 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="false" aria-label="Size 350 ml (1 cup)" variant="outline" size="sm">
                  <span className="font-medium text-foreground text-sm">
                    350 ml
                  </span>
                  <span className="leading-tight tabular-nums text-[0.625rem] text-muted-foreground">
                    1 cup
                  </span>
                </Item>
                <Item className="flex-col gap-0.5 hover:bg-muted/50 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="false" aria-label="Size 500 ml (2 cups)" variant="outline" size="sm">
                  <span className="font-medium text-foreground text-sm">
                    500 ml
                  </span>
                  <span className="leading-tight tabular-nums text-[0.625rem] text-muted-foreground">
                    2 cups
                  </span>
                </Item>
                <Item className="bg-foreground/[0.04] border-foreground flex-col gap-0.5 min-w-0 px-2 py-2 text-center" type="button" role="radio" aria-checked="true" aria-label="Size 700 ml (3 cups)" variant="outline" size="sm">
                  <span className="font-medium text-foreground text-sm">
                    700 ml
                  </span>
                  <span className="leading-tight tabular-nums text-[0.625rem] text-muted-foreground">
                    3 cups
                  </span>
                </Item>
              </div>
            </section>
            <p className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-sm" aria-label="Stock and shipping">
              <span className="font-medium gap-1.5 inline-flex items-center text-foreground">
                <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                Only 4 left in Cream
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                Free shipping over $75.00
              </span>
            </p>
            <div className="flex flex-col gap-2.5">
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
                  Add To Cart
                </Button>
              </div>
              <div className="flex gap-2 items-stretch">
                <Button className="flex-1" type="button" tabIndex="0">
                  Buy Now
                </Button>
                <Button type="button" tabIndex="0" aria-pressed="false" aria-label="Add Drift Pour-Over Kit to wishlist">
                  <svg className="duration-200 lucide lucide-heart size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <span className="sr-only" aria-live="polite"></span>
          </div>
        </div>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <section className="flex flex-col gap-6" id="details" aria-labelledby="details-heading">
          <header className="flex gap-3 items-baseline">
            <h2 className="font-semibold leading-tight md:text-xl text-foreground text-lg tracking-tight" id="details-heading">
              Product Details
            </h2>
          </header>
          <div className="gap-8 grid grid-cols-1 lg:gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                About
              </span>
              <p className="leading-relaxed text-base text-foreground text-pretty">
                Drift pairs a hand-thrown ceramic dripper with a double-wall borosilicate carafe so a pour-over brews evenly and stays hot through the second cup. The 60-degree cone shape and tapered ribs guide water to the bed corners for full extraction without bypass channels.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                Specs
              </span>
              <dl className="flex flex-col">
                <div className="gap-3 grid grid-cols-[7rem_minmax(0,1fr)] items-baseline py-2.5">
                  <dt className="text-muted-foreground text-xs">
                    Capacity
                  </dt>
                  <dd className="leading-snug text-foreground text-sm">
                    350 ml · 500 ml · 700 ml
                  </dd>
                </div>
                <div className="border-border/60 border-t gap-3 grid grid-cols-[7rem_minmax(0,1fr)] items-baseline py-2.5">
                  <dt className="text-muted-foreground text-xs">
                    Dripper
                  </dt>
                  <dd className="leading-snug text-foreground text-sm">
                    Hand-thrown stoneware · 60-degree cone
                  </dd>
                </div>
                <div className="border-border/60 border-t gap-3 grid grid-cols-[7rem_minmax(0,1fr)] items-baseline py-2.5">
                  <dt className="text-muted-foreground text-xs">
                    Carafe
                  </dt>
                  <dd className="leading-snug text-foreground text-sm">
                    Double-wall borosilicate glass
                  </dd>
                </div>
                <div className="border-border/60 border-t gap-3 grid grid-cols-[7rem_minmax(0,1fr)] items-baseline py-2.5">
                  <dt className="text-muted-foreground text-xs">
                    Includes
                  </dt>
                  <dd className="leading-snug text-foreground text-sm">
                    Dripper · carafe · 50 paper filters
                  </dd>
                </div>
                <div className="border-border/60 border-t gap-3 grid grid-cols-[7rem_minmax(0,1fr)] items-baseline py-2.5">
                  <dt className="text-muted-foreground text-xs">
                    Brew time
                  </dt>
                  <dd className="leading-snug text-foreground text-sm">
                    3 to 4 minutes per cup
                  </dd>
                </div>
                <div className="border-border/60 border-t gap-3 grid grid-cols-[7rem_minmax(0,1fr)] items-baseline py-2.5">
                  <dt className="text-muted-foreground text-xs">
                    Care
                  </dt>
                  <dd className="leading-snug text-foreground text-sm">
                    Carafe dishwasher-safe, hand-wash dripper
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <section className="flex flex-col gap-6" id="reviews" aria-labelledby="reviews-heading">
          <header className="flex gap-3 items-baseline justify-between">
            <h2 className="font-semibold leading-tight md:text-xl text-foreground text-lg tracking-tight" id="reviews-heading">
              What Buyers Say
            </h2>
            <Button className="gap-1.5 hover:bg-transparent hover:text-primary px-0" href="/reviews/drift-po" aria-label="Read all 1842 reviews for Drift Pour-Over Kit" role="button" tabIndex="0">
              See All 1,842
              <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </header>
          <div className="gap-8 grid grid-cols-1 lg:gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                Rating
              </span>
              <div className="flex gap-2 items-baseline">
                <span className="font-semibold leading-none tabular-nums text-4xl text-foreground">
                  4.7
                </span>
                <span className="text-muted-foreground text-sm">
                  / 5
                </span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
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
                  1,842 verified reviews
                </span>
              </div>
              <ul className="flex flex-col gap-1.5 pt-1" role="list" aria-label="Rating breakdown">
                <li className="gap-3 grid grid-cols-[1.25rem_minmax(0,1fr)_2.5rem] items-center">
                  <span className="font-medium tabular-nums text-muted-foreground text-xs">
                    5★
                  </span>
                  <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" aria-valuetext="75%" role="progressbar" aria-label="5-star reviews: 75%">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "75%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                  <span className="tabular-nums text-muted-foreground text-right text-xs">
                    1,390
                  </span>
                </li>
                <li className="gap-3 grid grid-cols-[1.25rem_minmax(0,1fr)_2.5rem] items-center">
                  <span className="font-medium tabular-nums text-muted-foreground text-xs">
                    4★
                  </span>
                  <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="17" aria-valuetext="17%" role="progressbar" aria-label="4-star reviews: 17%">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "17%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                  <span className="tabular-nums text-muted-foreground text-right text-xs">
                    312
                  </span>
                </li>
                <li className="gap-3 grid grid-cols-[1.25rem_minmax(0,1fr)_2.5rem] items-center">
                  <span className="font-medium tabular-nums text-muted-foreground text-xs">
                    3★
                  </span>
                  <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="5" aria-valuetext="5%" role="progressbar" aria-label="3-star reviews: 5%">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "5%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                  <span className="tabular-nums text-muted-foreground text-right text-xs">
                    87
                  </span>
                </li>
                <li className="gap-3 grid grid-cols-[1.25rem_minmax(0,1fr)_2.5rem] items-center">
                  <span className="font-medium tabular-nums text-muted-foreground text-xs">
                    2★
                  </span>
                  <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="2" aria-valuetext="2%" role="progressbar" aria-label="2-star reviews: 2%">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "2%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                  <span className="tabular-nums text-muted-foreground text-right text-xs">
                    34
                  </span>
                </li>
                <li className="gap-3 grid grid-cols-[1.25rem_minmax(0,1fr)_2.5rem] items-center">
                  <span className="font-medium tabular-nums text-muted-foreground text-xs">
                    1★
                  </span>
                  <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="1" aria-valuetext="1%" role="progressbar" aria-label="1-star reviews: 1%">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "1%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                  <span className="tabular-nums text-muted-foreground text-right text-xs">
                    19
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-muted-foreground text-xs tracking-[0.18em] uppercase">
                Featured Reviews
              </span>
              <Carousel className="flex flex-col gap-4" role="region" aria-roledescription="carousel" aria-label="Featured customer reviews">
                <CarouselContent>
                  <div className="-ml-4 flex" style={{transform: "translate3d(-1632px, 0px, 0px)"}}>
                    <CarouselItem role="group" aria-roledescription="slide" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                      <figure className="flex flex-col gap-4">
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
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                            Verified
                          </Badge>
                        </div>
                        <h3 className="font-semibold leading-snug text-base text-foreground">
                          Replaced my $200 setup and tastes better.
                        </h3>
                        <blockquote className="border-border/70 border-l-2 leading-relaxed pl-4 text-foreground/90 text-pretty text-sm">
                          The cone shape is the real story. Water hits the bed evenly, no channeling, no bypass. Carafe still warm after a 25-minute breakfast and the dripper rinses clean in seconds.
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs">
                          <Avatar size="sm">
                            <AvatarImage alt="Noor Haidari" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/noor-haidari">
                            Noor Haidari
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            4 days ago
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-4">
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
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                            Verified
                          </Badge>
                        </div>
                        <h3 className="font-semibold leading-snug text-base text-foreground">
                          Even extraction across three different roasts.
                        </h3>
                        <blockquote className="border-border/70 border-l-2 leading-relaxed pl-4 text-foreground/90 text-pretty text-sm">
                          I tested a Yirgacheffe, a Brazil natural, and a Sumatra back to back. Each tasted clean and balanced. The 60-degree cone really does pull a uniform brew without bypass.
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs">
                          <Avatar size="sm">
                            <AvatarImage alt="Daniel Park" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/daniel-park">
                            Daniel Park
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            1 week ago
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-4">
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
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                            Verified
                          </Badge>
                        </div>
                        <h3 className="font-semibold leading-snug text-base text-foreground">
                          Carafe stays hot through the second cup.
                        </h3>
                        <blockquote className="border-border/70 border-l-2 leading-relaxed pl-4 text-foreground/90 text-pretty text-sm">
                          Double-wall glass keeps the brew warm long enough for a slow breakfast. Lid threads in cleanly and the dripper sits flush without sliding.
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Sharma" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/priya-sharma">
                            Priya Sharma
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            2 weeks ago
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                    <CarouselItem role="group" aria-roledescription="slide">
                      <figure className="flex flex-col gap-4">
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
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                            Verified
                          </Badge>
                        </div>
                        <h3 className="font-semibold leading-snug text-base text-foreground">
                          Worth replacing my old plastic dripper.
                        </h3>
                        <blockquote className="border-border/70 border-l-2 leading-relaxed pl-4 text-foreground/90 text-pretty text-sm">
                          The ceramic body holds heat much better than the plastic V60 I had before. Brews land sweeter and the rinse-out is much faster too.
                        </blockquote>
                        <figcaption className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs">
                          <Avatar size="sm">
                            <AvatarImage alt="Jules Akinyemi" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
                          </Avatar>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="/u/jules-akinyemi">
                            Jules Akinyemi
                          </a>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            3 weeks ago
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                  </div>
                </CarouselContent>
                <div className="flex gap-1.5 items-center">
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 1 of 4" data-active="false"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 2 of 4" data-active="false"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 3 of 4" data-active="false"></button>
                  <button className="bg-muted-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-6 duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:bg-muted-foreground/60 rounded-full size-1.5 transition-all" type="button" aria-label="Go to review 4 of 4" data-active="true" aria-current="true"></button>
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <section className="flex flex-col gap-5" id="related" aria-labelledby="related-heading">
          <header className="flex gap-3 items-baseline justify-between">
            <h2 className="font-semibold leading-tight md:text-xl text-foreground text-lg tracking-tight" id="related-heading">
              You May Also Like
            </h2>
            <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="/shop/coffee" aria-label="View all Coffee">
              View All
            </a>
          </header>
          <ul className="gap-x-4 gap-y-6 grid grid-cols-2 sm:grid-cols-4" role="list">
            <li className="flex flex-col gap-3 group">
              <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/drift-gooseneck-kettle" aria-label="View Drift Gooseneck Kettle" variant="muted" size="default">
                <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Drift Gooseneck Kettle, 1L stainless steel with temperature dial" loading="lazy" src="https://images.unsplash.com/photo-1594213114663-d94db9b17125?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/coffee" aria-label="View Coffee products">
                  Coffee
                </a>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/drift-gooseneck-kettle">
                  Drift Gooseneck Kettle
                </a>
                <span className="font-semibold tabular-nums text-foreground text-sm">
                  $119.00
                </span>
              </div>
            </li>
            <li className="flex flex-col gap-3 group">
              <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/drift-hand-grinder" aria-label="View Drift Hand Grinder" variant="muted" size="default">
                <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Drift Hand Grinder with 38 mm conical burr" loading="lazy" src="https://images.unsplash.com/photo-1537130508299-46ab547b4be3?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/coffee" aria-label="View Coffee products">
                  Coffee
                </a>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/drift-hand-grinder">
                  Drift Hand Grinder
                </a>
                <span className="font-semibold tabular-nums text-foreground text-sm">
                  $79.00
                </span>
              </div>
            </li>
            <li className="flex flex-col gap-3 group">
              <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/drift-paper-filters" aria-label="View Drift Paper Filters" variant="muted" size="default">
                <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Drift Paper Filters, 100-pack of bleached cone filters" loading="lazy" src="https://images.unsplash.com/photo-1521677446241-d182a96ec49f?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/accessories" aria-label="View Accessories products">
                  Accessories
                </a>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/drift-paper-filters">
                  Drift Paper Filters
                </a>
                <span className="font-semibold tabular-nums text-foreground text-sm">
                  $12.00
                </span>
              </div>
            </li>
            <li className="flex flex-col gap-3 group">
              <Item className="aspect-square block overflow-hidden p-0 transition" href="/p/drift-brew-scale" aria-label="View Drift Brew Scale" variant="muted" size="default">
                <img className="duration-300 group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Drift Brew Scale, glass-top with built-in timer" loading="lazy" src="https://images.unsplash.com/photo-1612012060851-20f943c02d3d?auto=format&fit=crop&w=900&h=900&q=80" />
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" href="/shop/accessories" aria-label="View Accessories products">
                  Accessories
                </a>
                <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="/p/drift-brew-scale">
                  Drift Brew Scale
                </a>
                <span className="font-semibold tabular-nums text-foreground text-sm">
                  $59.00
                </span>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}
