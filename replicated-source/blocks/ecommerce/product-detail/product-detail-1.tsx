import { Rating } from "@/registry-neui/bases/base/neui/rating"
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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/bases/base/ui/carousel"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
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
                {"Shop"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/sneakers">
                {"Sneakers"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="/shop/sneakers/running">
                {"Running"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                {"Cloud Shift Runner"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="gap-8 grid grid-cols-1 lg:gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,1fr)]">
            <div className="lg:sticky lg:top-6">
              <div className="flex gap-3 sm:gap-4">
                <ul className="flex flex-col gap-2 shrink-0" role="list">
                  <li>
                    <button className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none" type="button" aria-label="Show image 1 of 5" aria-pressed="false" data-extracted="1">
                      <Item className="bg-muted hover:border-foreground/40 overflow-hidden p-0 relative size-14 sm:size-16" variant="outline" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&h=900&q=80" />
                      </Item>
                    </button>
                  </li>
                  <li>
                    <button className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none" type="button" aria-label="Show image 2 of 5" aria-pressed="false">
                      <Item className="bg-muted hover:border-foreground/40 overflow-hidden p-0 relative size-14 sm:size-16" variant="outline" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=900&h=900&q=80" />
                      </Item>
                    </button>
                  </li>
                  <li>
                    <button className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none" type="button" aria-label="Show image 3 of 5" aria-pressed="false">
                      <Item className="bg-muted hover:border-foreground/40 overflow-hidden p-0 relative size-14 sm:size-16" variant="outline" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&h=900&q=80" />
                      </Item>
                    </button>
                  </li>
                  <li>
                    <button className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none" type="button" aria-label="Show image 4 of 5" aria-pressed="false">
                      <Item className="bg-muted hover:border-foreground/40 overflow-hidden p-0 relative size-14 sm:size-16" variant="outline" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&h=900&q=80" />
                      </Item>
                    </button>
                  </li>
                  <li>
                    <button className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none" type="button" aria-label="Show image 5 of 5" aria-pressed="true">
                      <Item className="bg-muted border-foreground overflow-hidden p-0 relative size-14 sm:size-16" variant="outline" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&h=900&q=80" />
                      </Item>
                    </button>
                  </li>
                </ul>
                <Item className="aspect-square bg-muted flex-1 overflow-hidden p-0 relative" variant="outline" size="default">
                  <img className="absolute h-full inset-0 object-cover w-full" alt="Cloud Shift Runner, on-foot shot" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&h=900&q=80" />
                </Item>
              </div>
            </div>
            <div className="flex flex-col gap-5 min-w-0">
              <nav className="flex flex-wrap gap-2 items-center text-sm" aria-label="Product categories">
                <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="/shop/sneakers">
                  {"Sneakers"}
                </a>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-4" href="/shop/sneakers/running">
                  {"Running"}
                </a>
              </nav>
              <div className="flex flex-col gap-2 min-w-0">
                <h1 className="font-semibold leading-tight md:text-2xl min-w-0 text-foreground text-xl tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#wm-8421">
                    {"Cloud Shift Runner"}
                  </a>
                </h1>
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
                        <div className="absolute inset-0 overflow-hidden" style={{width: "50%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className="text-muted-foreground text-xs w-5">
                      {"4.5"}
                    </span>
                  </Rating>
                  <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="#reviews" aria-label="Read 834 reviews for Cloud Shift Runner">
                    {"(834 reviews)"}
                  </a>
                </div>
                <p className="leading-relaxed line-clamp-2 text-muted-foreground text-sm">
                  {"Daily road runner with breathable mesh, a single-density foam midsole, and a rubber outsole built for steady miles."}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex font-semibold gap-2 items-baseline tabular-nums text-xl">
                  <span>
                    {"$96.23"}
                  </span>
                  <span className="font-normal line-through text-muted-foreground">
                    {"$128.00"}
                  </span>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"25% OFF"}
                </Badge>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <section className="flex flex-col gap-3" aria-label="Color">
                <p className="font-medium text-foreground text-sm">
                  {"Color:"}
                  <span className="font-normal text-muted-foreground">
                    {"Cherry"}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 items-center" role="radiogroup" aria-label="Color">
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring inline-flex items-center justify-center outline-none relative ring-2 ring-foreground ring-offset-2 ring-offset-background rounded-full size-7 transition" type="button" role="radio" aria-checked="true" aria-label="Cherry">
                    <span className="absolute bg-red-500 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Midnight">
                    <span className="absolute bg-slate-900 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Cloud">
                    <span className="absolute bg-white border border-border inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Sand">
                    <span className="absolute bg-amber-200 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                  <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-foreground/40 inline-flex items-center justify-center outline-none relative ring-1 ring-border rounded-full size-7 transition" type="button" role="radio" aria-checked="false" aria-label="Moss">
                    <span className="absolute bg-emerald-700 inset-0 rounded-full" aria-hidden="true"></span>
                  </button>
                </div>
              </section>
              <section className="flex flex-col gap-3" aria-label="Size">
                <div className="flex gap-3 items-center justify-between">
                  <p className="font-medium text-foreground text-sm">
                    {"Select Size"}
                  </p>
                  <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="#size-guide">
                    {"Size guide"}
                  </a>
                </div>
                <div className="@container/field-group cn-field-group flex-col gap-2 grid grid-cols-4 group/field-group pt-1 sm:grid-cols-7 w-full" role="group" aria-label="Select Size">
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-size-eu-39" id="pdp-size-eu-39-label">
                    <Field className="bg-primary/5 border-primary/40 h-9 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_0_" aria-checked="true" aria-label="Size EU 39, in stock" aria-labelledby="pdp-size-eu-39-label">
                        <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                      </Checkbox>
                      <input id="pdp-size-eu-39" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-sm w-full">
                        {"39"}
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-size-eu-40" id="pdp-size-eu-40-label">
                    <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3_" aria-checked="false" aria-label="Size EU 40, in stock" aria-labelledby="pdp-size-eu-40-label"></Checkbox>
                      <input id="pdp-size-eu-40" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-sm w-full">
                        {"40"}
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-size-eu-41" id="pdp-size-eu-41-label">
                    <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6_" aria-checked="false" aria-label="Size EU 41, low stock" aria-labelledby="pdp-size-eu-41-label"></Checkbox>
                      <input id="pdp-size-eu-41" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-sm w-full">
                        {"41"}
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-size-eu-42" id="pdp-size-eu-42-label">
                    <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_9_" aria-checked="false" aria-label="Size EU 42, in stock" aria-labelledby="pdp-size-eu-42-label"></Checkbox>
                      <input id="pdp-size-eu-42" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-sm w-full">
                        {"42"}
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-size-eu-43" id="pdp-size-eu-43-label">
                    <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_c_" aria-checked="false" aria-label="Size EU 43, in stock" aria-labelledby="pdp-size-eu-43-label"></Checkbox>
                      <input id="pdp-size-eu-43" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-sm w-full">
                        {"43"}
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-not-allowed group-data-[disabled=true]:pointer-events-none items-center min-w-0 opacity-60 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-size-eu-44" id="pdp-size-eu-44-label">
                    <Field className="bg-muted/30 border-border/70 h-9 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" disabled="" unchecked="" role="checkbox" tabIndex={-1} aria-disabled="true" id="base-ui-_r_f_" aria-checked="false" aria-label="Size EU 44, out of stock" aria-labelledby="pdp-size-eu-44-label"></Checkbox>
                      <input disabled id="pdp-size-eu-44" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center line-through tabular-nums text-sm w-full">
                        {"44"}
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pdp-size-eu-45" id="pdp-size-eu-45-label">
                    <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_i_" aria-checked="false" aria-label="Size EU 45, low stock" aria-labelledby="pdp-size-eu-45-label"></Checkbox>
                      <input id="pdp-size-eu-45" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-sm w-full">
                        {"45"}
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
              </section>
              <div className="gap-2 grid">
                <Button className="w-full" type="button" tabIndex={0}>
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  {"Add to Bag"}
                </Button>
                <Button className="w-full" type="button" tabIndex={0} aria-pressed="false" aria-label="Add Cloud Shift Runner to wishlist">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                  {"Wishlist"}
                </Button>
              </div>
              <ul className="gap-2 grid grid-cols-3" role="list">
                <li>
                  <Item className="border-dashed flex-col gap-1.5 h-full px-2 py-3 text-center" variant="outline" size="sm">
                    <ItemMedia className="size-auto text-foreground" variant="icon">
                      <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                        <path d="M15 18H9"></path>
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                        <circle cx={17} cy={18} r={2}></circle>
                        <circle cx={7} cy={18} r={2}></circle>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-0 items-center">
                      <ItemTitle className="font-medium leading-tight text-xs">
                        {"Free shipping"}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="border-dashed flex-col gap-1.5 h-full px-2 py-3 text-center" variant="outline" size="sm">
                    <ItemMedia className="size-auto text-foreground" variant="icon">
                      <svg className="lucide lucide-rotate-ccw size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-0 items-center">
                      <ItemTitle className="font-medium leading-tight text-xs">
                        {"30-day returns"}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="border-dashed flex-col gap-1.5 h-full px-2 py-3 text-center" variant="outline" size="sm">
                    <ItemMedia className="size-auto text-foreground" variant="icon">
                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-0 items-center">
                      <ItemTitle className="font-medium leading-tight text-xs">
                        {"1-year warranty"}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                </li>
              </ul>
            </div>
          </div>
          <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
            <TabsList className="border-b gap-6 h-10! justify-start p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
              <TabsTrigger className="after:-bottom-0.5! after:bg-primary font-medium pb-3 px-0 text-foreground text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_l_" compositeItemActive="" aria-controls="base-ui-_r_p_">
                {"Description"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-0.5! after:bg-primary font-medium pb-3 px-0 text-muted-foreground text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_m_">
                {"Specs"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-0.5! after:bg-primary font-medium pb-3 px-0 text-muted-foreground text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_n_">
                {"Shipping & Returns"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-0.5! after:bg-primary font-medium pb-3 px-0 text-muted-foreground text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_o_">
                {"Reviews"}
              </TabsTrigger>
            </TabsList>
            <TabsContent className="max-w-3xl mt-6" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_p_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_l_">
              <div className="flex flex-col gap-4 leading-relaxed text-sm">
                <p className="text-foreground">
                  {"Cloud Shift Runner is built for daily mileage on roads and treadmills. The engineered mesh upper keeps weight low and airflow high, and a single-density EVA midsole delivers consistent cushion from the first mile to the last."}
                </p>
                <p className="text-foreground">
                  {"An exposed forefoot flex groove keeps each toe-off quick, and a padded heel collar reduces friction on long efforts. Light enough for tempo days, supportive enough for easy runs."}
                </p>
                <ul className="flex flex-col gap-2 text-foreground">
                  <li className="flex gap-2 items-start">
                    <svg className="lucide lucide-check mt-1 shrink-0 size-3.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Engineered mesh upper with recycled yarn"}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <svg className="lucide lucide-check mt-1 shrink-0 size-3.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Single-density EVA midsole, 8 mm drop"}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <svg className="lucide lucide-check mt-1 shrink-0 size-3.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Rubber outsole with forefoot flex groove"}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <svg className="lucide lucide-check mt-1 shrink-0 size-3.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"248 g (US 9), true-to-size fit"}
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <section aria-labelledby="related-heading">
            <Carousel className="w-full" role="region" aria-roledescription="carousel" aria-label="You may also like">
              <div className="flex gap-4 items-center justify-between mb-6">
                <div className="flex gap-3 items-center min-w-0">
                  <h2 className="font-semibold text-balance text-xl tracking-tight" id="related-heading">
                    {"You May Also Like"}
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow" aria-label="Page 1 of 2">
                    {"1 / 2"}
                  </Badge>
                </div>
                <div className="flex gap-2 items-center shrink-0">
                  <Carousel>
                  <CarouselPrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center left-auto outline-none select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" disabled="" tabIndex={0} disabled aria-label="Previous related products">
                    <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span className="sr-only">
                      {"Previous slide"}
                    </span>
                  </CarouselPrevious>
                  </Carousel>
                  <Carousel>
                  <CarouselNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-auto select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" tabIndex={0} aria-label="Next related products">
                    <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="sr-only">
                      {"Next slide"}
                    </span>
                  </CarouselNext>
                  </Carousel>
                </div>
              </div>
              <Carousel>
              <CarouselContent>
                <div className="flex ml-0 py-1" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                  <Carousel>
                  <CarouselItem className="pl-0" role="group" aria-roledescription="slide">
                    <div className="gap-4 grid lg:grid-cols-4 px-1 sm:grid-cols-2">
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/trail-runner-z2" aria-label="View Trail Runner Z2 details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Trail Runner Z2" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <Button className="absolute focus-visible:opacity-100 group-hover/media:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Add Trail Runner Z2 to wishlist" aria-pressed="false">
                              <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Trail Runner Z2 categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/trail">
                                {"Trail"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/off-road">
                                {"Off-road"}
                              </a>
                            </nav>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                              {"Trending"}
                            </Badge>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/trail-runner-z2">
                                {"Trail Runner Z2"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Aggressive lug pattern for wet trails."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span>
                              {"$142.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/sport-performance-pro" aria-label="View Sport Performance Pro details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Sport Performance Pro" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <div className="absolute left-2 top-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                                {"-22%"}
                              </Badge>
                            </div>
                            <Button className="absolute opacity-100 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Remove Sport Performance Pro from wishlist" aria-pressed="true">
                              <svg className="fill-destructive lucide lucide-heart text-destructive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Sport Performance Pro categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/racing">
                                {"Racing"}
                              </a>
                            </nav>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/sport-performance-pro">
                                {"Sport Performance Pro"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Race-day cushioning with a snug knit upper."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span className="font-normal line-through text-muted-foreground">
                              {"$198.00"}
                            </span>
                            <span>
                              {"$155.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/heritage-court-low" aria-label="View Heritage Court Low details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Heritage Court Low" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <Button className="absolute focus-visible:opacity-100 group-hover/media:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Add Heritage Court Low to wishlist" aria-pressed="false">
                              <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Heritage Court Low categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/lifestyle">
                                {"Lifestyle"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/court">
                                {"Court"}
                              </a>
                            </nav>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                              {"New"}
                            </Badge>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/heritage-court-low">
                                {"Heritage Court Low"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Classic court silhouette in tumbled leather."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span>
                              {"$118.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/modern-street-elite" aria-label="View Modern Street Elite details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Modern Street Elite" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <Button className="absolute focus-visible:opacity-100 group-hover/media:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Add Modern Street Elite to wishlist" aria-pressed="false">
                              <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Modern Street Elite categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/lifestyle">
                                {"Lifestyle"}
                              </a>
                            </nav>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/modern-street-elite">
                                {"Modern Street Elite"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Chunky midsole, all-day street comfort."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span>
                              {"$175.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  </Carousel>
                  <Carousel>
                  <CarouselItem className="pl-0" role="group" aria-roledescription="slide">
                    <div className="gap-4 grid lg:grid-cols-4 px-1 sm:grid-cols-2">
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/alpine-trekker-mid" aria-label="View Alpine Trekker Mid details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Alpine Trekker Mid" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <Button className="absolute focus-visible:opacity-100 group-hover/media:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Add Alpine Trekker Mid to wishlist" aria-pressed="false">
                              <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Alpine Trekker Mid categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/trail">
                                {"Trail"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/hiking">
                                {"Hiking"}
                              </a>
                            </nav>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/alpine-trekker-mid">
                                {"Alpine Trekker Mid"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Mid-cut hiker with a sticky rubber outsole."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span>
                              {"$168.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/pulse-sensor-trainer" aria-label="View Pulse Sensor Trainer details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Pulse Sensor Trainer" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <Button className="absolute focus-visible:opacity-100 group-hover/media:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Add Pulse Sensor Trainer to wishlist" aria-pressed="false">
                              <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Pulse Sensor Trainer categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/training">
                                {"Training"}
                              </a>
                            </nav>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                              {"4 left"}
                            </Badge>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/pulse-sensor-trainer">
                                {"Pulse Sensor Trainer"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Foot-strike sensor in a low-profile trainer."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span>
                              {"$199.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/cloud-stride-2" aria-label="View Cloud Stride 2 details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Cloud Stride 2" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <Button className="absolute focus-visible:opacity-100 group-hover/media:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Add Cloud Stride 2 to wishlist" aria-pressed="false">
                              <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Cloud Stride 2 categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/road">
                                {"Road"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/daily">
                                {"Daily"}
                              </a>
                            </nav>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/cloud-stride-2">
                                {"Cloud Stride 2"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Second-gen daily trainer, lighter midsole."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span>
                              {"$145.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="h-full pt-0" size="default">
                        <CardHeader className="px-0">
                          <Item className="aspect-[4/5] bg-muted border-0 group/media overflow-hidden p-0 relative shadow-none" variant="default" size="default">
                            <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="/products/studio-knit-slip-on" aria-label="View Studio Knit Slip-On details">
                              <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Studio Knit Slip-On" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=720&h=900&q=80" />
                            </a>
                            <Button className="absolute focus-visible:opacity-100 group-hover/media:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Add Studio Knit Slip-On to wishlist" aria-pressed="false">
                              <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                              </svg>
                            </Button>
                          </Item>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col gap-2.5">
                          <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                            <nav className="flex flex-wrap gap-1.5 items-center min-w-0" aria-label="Studio Knit Slip-On categories">
                              <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="/shop/sneakers/lifestyle">
                                {"Lifestyle"}
                              </a>
                            </nav>
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <CardTitle className="min-w-0 text-base">
                              <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="/products/studio-knit-slip-on">
                                {"Studio Knit Slip-On"}
                              </a>
                            </CardTitle>
                            <CardDescription className="text-xs truncate">
                              {"Knit slip-on with cushioned insole."}
                            </CardDescription>
                          </div>
                          <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto pt-1 tabular-nums text-sm">
                            <span>
                              {"$88.00"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  </Carousel>
                </div>
              </CarouselContent>
              </Carousel>
            </Carousel>
          </section>
        </div>
      </section>
    </main>
  )
}
