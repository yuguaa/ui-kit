import { Button } from "@/registry/bases/base/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/bases/base/ui/carousel"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="lg:px-8 lg:py-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="comparison-4-heading">
        <Carousel className="w-full" role="region" aria-roledescription="carousel" aria-label="Ranked product scorecards">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2 max-w-prose">
              <h1 className="font-semibold sm:text-3xl text-2xl tracking-tight" id="comparison-4-heading">
                Ranked by overall score
              </h1>
              <p className="leading-5 text-muted-foreground text-sm">
                Five dimensions, scored 0 to 10. Tested over 50 hours.
                <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#methodology">
                  How we score
                </a>
                .
              </p>
            </div>
            <div className="flex gap-3 items-center shrink-0">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow" aria-label="Page 1 of 2">
                1 / 2
              </Badge>
              <div className="flex gap-2 items-center">
                <CarouselPrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center left-auto outline-none select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Previous page" extracted="1">
                  <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  <span className="sr-only">
                    Previous slide
                  </span>
                </CarouselPrevious>
                <CarouselNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-auto select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" tabIndex="0" aria-label="Next page">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="sr-only">
                    Next slide
                  </span>
                </CarouselNext>
              </div>
            </div>
          </header>
          <CarouselContent>
            <div className="flex ml-0 mt-8" style={{transform: "translate3d(0px, 0px, 0px)"}}>
              <CarouselItem className="pl-0" role="group" aria-roledescription="slide">
                <div className="gap-4 grid items-stretch lg:gap-5 lg:grid-cols-3 px-1 sm:grid-cols-2">
                  <article className="bg-background border border-foreground/20 flex flex-col gap-5 h-full min-w-0 overflow-hidden p-5 relative rounded-lg shadow-black/5 shadow-md" aria-labelledby="comparison-4-studio-pro-name">
                    <div className="absolute overflow-hidden pointer-events-none right-0 size-28 top-0" aria-hidden="true">
                      <span className="absolute bg-yellow-400 font-semibold py-1 right-[-38px] rotate-45 shadow-sm text-[10px] text-center text-yellow-950 top-[28px] tracking-[0.12em] uppercase w-[150px]">
                        Top pick
                      </span>
                    </div>
                    <div className="flex gap-3 items-start justify-between min-w-0">
                      <div className="flex gap-3 items-center min-w-0">
                        <a className="aspect-square bg-muted/40 block group/image overflow-hidden relative rounded-md shrink-0 size-20" href="#studio-pro" aria-label="View Studio Pro">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Pro headphones product shot" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&h=600&q=80" />
                        </a>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors truncate underline-offset-4" id="comparison-4-studio-pro-name" href="#studio-pro">
                            Studio Pro
                          </a>
                          <p className="text-muted-foreground text-xs truncate">
                            Studio · Audiophile
                          </p>
                          <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.8 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "96%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="font-medium tabular-nums text-foreground">
                              4.8
                            </span>
                            <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-pro#reviews" aria-label="Read 96 reviews for Studio Pro">
                              (96)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 items-baseline justify-between">
                        <span className="font-semibold text-foreground text-sm">
                          1st place
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          1 of 5 wins
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-baseline">
                        <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                          8.7
                        </span>
                        <span className="tabular-nums text-muted-foreground text-sm">
                          / 10
                        </span>
                      </div>
                      <div className="bg-muted h-2 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.7">
                        <div className="bg-foreground duration-500 h-full rounded-full transition-all" style={{width: "87%"}}></div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-3" aria-label="Studio Pro score breakdown">
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Sound
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.2">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "92%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            9.2
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Battery
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.5">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "85%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.5
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="font-medium text-foreground text-xs truncate">
                            Noise cancel
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.1">
                            <div className="bg-foreground duration-500 h-full rounded-full transition-all" style={{width: "91%"}}></div>
                          </div>
                          <span className="font-semibold tabular-nums text-foreground text-right text-xs">
                            9.1
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Comfort
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.6">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "86%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.6
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Value
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="7.8">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "78%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            7.8
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="flex gap-3 items-center justify-between mt-auto pt-2">
                      <div className="flex gap-2 items-baseline min-w-0">
                        <span className="font-semibold tabular-nums text-foreground text-lg">
                          $399
                        </span>
                      </div>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        Add to cart
                      </Button>
                    </div>
                  </article>
                  <article className="bg-background border border-border flex flex-col gap-5 h-full min-w-0 overflow-hidden p-5 relative rounded-lg" aria-labelledby="comparison-4-studio-max-name">
                    <div className="flex gap-3 items-start justify-between min-w-0">
                      <div className="flex gap-3 items-center min-w-0">
                        <a className="aspect-square bg-muted/40 block group/image overflow-hidden relative rounded-md shrink-0 size-20" href="#studio-max" aria-label="View Studio Max">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Max headphones product shot" src="https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&h=600&q=80" />
                        </a>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors truncate underline-offset-4" id="comparison-4-studio-max-name" href="#studio-max">
                            Studio Max
                          </a>
                          <p className="text-muted-foreground text-xs truncate">
                            Studio · Long battery
                          </p>
                          <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.7 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "94%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="font-medium tabular-nums text-foreground">
                              4.7
                            </span>
                            <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-max#reviews" aria-label="Read 58 reviews for Studio Max">
                              (58)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 items-baseline justify-between">
                        <span className="font-medium text-muted-foreground text-sm">
                          2nd place
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          0 of 5 wins
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-baseline">
                        <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                          8.4
                        </span>
                        <span className="tabular-nums text-muted-foreground text-sm">
                          / 10
                        </span>
                      </div>
                      <div className="bg-muted h-2 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.4">
                        <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "84%"}}></div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-3" aria-label="Studio Max score breakdown">
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Sound
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "90%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            9.0
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Battery
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.4">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "94%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            9.4
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Noise cancel
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.8">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "88%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.8
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Comfort
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "80%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.0
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Value
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="7">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "70%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            7.0
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="flex gap-3 items-center justify-between mt-auto pt-2">
                      <div className="flex gap-2 items-baseline min-w-0">
                        <span className="font-semibold tabular-nums text-foreground text-lg">
                          $499
                        </span>
                      </div>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        Add to cart
                      </Button>
                    </div>
                  </article>
                  <article className="bg-background border border-border flex flex-col gap-5 h-full min-w-0 overflow-hidden p-5 relative rounded-lg" aria-labelledby="comparison-4-studio-elite-name">
                    <div className="flex gap-3 items-start justify-between min-w-0">
                      <div className="flex gap-3 items-center min-w-0">
                        <a className="aspect-square bg-muted/40 block group/image overflow-hidden relative rounded-md shrink-0 size-20" href="#studio-elite" aria-label="View Studio Elite">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Elite headphones product shot" src="https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&h=600&q=80" />
                        </a>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors truncate underline-offset-4" id="comparison-4-studio-elite-name" href="#studio-elite">
                            Studio Elite
                          </a>
                          <p className="text-muted-foreground text-xs truncate">
                            Studio · Premium
                          </p>
                          <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.9 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "98%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="font-medium tabular-nums text-foreground">
                              4.9
                            </span>
                            <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-elite#reviews" aria-label="Read 32 reviews for Studio Elite">
                              (32)
                            </a>
                          </div>
                        </div>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Flagship
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 items-baseline justify-between">
                        <span className="font-medium text-muted-foreground text-sm">
                          3rd place
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          3 of 5 wins
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-baseline">
                        <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                          8.4
                        </span>
                        <span className="tabular-nums text-muted-foreground text-sm">
                          / 10
                        </span>
                      </div>
                      <div className="bg-muted h-2 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.4">
                        <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "84%"}}></div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-3" aria-label="Studio Elite score breakdown">
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="font-medium text-foreground text-xs truncate">
                            Sound
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.6">
                            <div className="bg-foreground duration-500 h-full rounded-full transition-all" style={{width: "96%"}}></div>
                          </div>
                          <span className="font-semibold tabular-nums text-foreground text-right text-xs">
                            9.6
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="font-medium text-foreground text-xs truncate">
                            Battery
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.8">
                            <div className="bg-foreground duration-500 h-full rounded-full transition-all" style={{width: "98%"}}></div>
                          </div>
                          <span className="font-semibold tabular-nums text-foreground text-right text-xs">
                            9.8
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="font-medium text-foreground text-xs truncate">
                            Noise cancel
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.1">
                            <div className="bg-foreground duration-500 h-full rounded-full transition-all" style={{width: "91%"}}></div>
                          </div>
                          <span className="font-semibold tabular-nums text-foreground text-right text-xs">
                            9.1
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Comfort
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="7.4">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "74%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            7.4
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Value
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="6">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "60%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            6.0
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="flex gap-3 items-center justify-between mt-auto pt-2">
                      <div className="flex gap-2 items-baseline min-w-0">
                        <span className="font-semibold tabular-nums text-foreground text-lg">
                          $649
                        </span>
                      </div>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        Add to cart
                      </Button>
                    </div>
                  </article>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0" role="group" aria-roledescription="slide">
                <div className="gap-4 grid items-stretch lg:gap-5 lg:grid-cols-3 px-1 sm:grid-cols-2">
                  <article className="bg-background border border-border flex flex-col gap-5 h-full min-w-0 overflow-hidden p-5 relative rounded-lg" aria-labelledby="comparison-4-studio-name">
                    <div className="flex gap-3 items-start justify-between min-w-0">
                      <div className="flex gap-3 items-center min-w-0">
                        <a className="aspect-square bg-muted/40 block group/image overflow-hidden relative rounded-md shrink-0 size-20" href="#studio" aria-label="View Studio Wireless">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio wireless headphones product shot" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=600&q=80" />
                        </a>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors truncate underline-offset-4" id="comparison-4-studio-name" href="#studio">
                            Studio Wireless
                          </a>
                          <p className="text-muted-foreground text-xs truncate">
                            Wireless · Noise cancelling
                          </p>
                          <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.6 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "92%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="font-medium tabular-nums text-foreground">
                              4.6
                            </span>
                            <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio#reviews" aria-label="Read 412 reviews for Studio Wireless">
                              (412)
                            </a>
                          </div>
                        </div>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                        On sale
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 items-baseline justify-between">
                        <span className="font-medium text-muted-foreground text-sm">
                          4th place
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          2 of 5 wins
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-baseline">
                        <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                          8.1
                        </span>
                        <span className="tabular-nums text-muted-foreground text-sm">
                          / 10
                        </span>
                      </div>
                      <div className="bg-muted h-2 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.1">
                        <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "81%"}}></div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-3" aria-label="Studio Wireless score breakdown">
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Sound
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="7.6">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "76%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            7.6
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Battery
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="6.4">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "64%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            6.4
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Noise cancel
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "80%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.0
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="font-medium text-foreground text-xs truncate">
                            Comfort
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.1">
                            <div className="bg-foreground duration-500 h-full rounded-full transition-all" style={{width: "91%"}}></div>
                          </div>
                          <span className="font-semibold tabular-nums text-foreground text-right text-xs">
                            9.1
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="font-medium text-foreground text-xs truncate">
                            Value
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.6">
                            <div className="bg-foreground duration-500 h-full rounded-full transition-all" style={{width: "96%"}}></div>
                          </div>
                          <span className="font-semibold tabular-nums text-foreground text-right text-xs">
                            9.6
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="flex gap-3 items-center justify-between mt-auto pt-2">
                      <div className="flex gap-2 items-baseline min-w-0">
                        <span className="font-semibold tabular-nums text-foreground text-lg">
                          $249
                        </span>
                        <span className="line-through tabular-nums text-muted-foreground text-xs">
                          $299
                        </span>
                      </div>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        Add to cart
                      </Button>
                    </div>
                  </article>
                  <article className="bg-background border border-border flex flex-col gap-5 h-full min-w-0 overflow-hidden p-5 relative rounded-lg" aria-labelledby="comparison-4-studio-active-name">
                    <div className="flex gap-3 items-start justify-between min-w-0">
                      <div className="flex gap-3 items-center min-w-0">
                        <a className="aspect-square bg-muted/40 block group/image overflow-hidden relative rounded-md shrink-0 size-20" href="#studio-active" aria-label="View Studio Active">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Active sport headphones product shot" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&h=600&q=80" />
                        </a>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors truncate underline-offset-4" id="comparison-4-studio-active-name" href="#studio-active">
                            Studio Active
                          </a>
                          <p className="text-muted-foreground text-xs truncate">
                            Sport · Water resistant
                          </p>
                          <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.5 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "90%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="font-medium tabular-nums text-foreground">
                              4.5
                            </span>
                            <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-active#reviews" aria-label="Read 248 reviews for Studio Active">
                              (248)
                            </a>
                          </div>
                        </div>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                        New
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 items-baseline justify-between">
                        <span className="font-medium text-muted-foreground text-sm">
                          5th place
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          0 of 5 wins
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-baseline">
                        <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                          8.0
                        </span>
                        <span className="tabular-nums text-muted-foreground text-sm">
                          / 10
                        </span>
                      </div>
                      <div className="bg-muted h-2 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8">
                        <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "80%"}}></div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-3" aria-label="Studio Active score breakdown">
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Sound
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.1">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "81%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.1
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Battery
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "80%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.0
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Noise cancel
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="7.4">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "74%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            7.4
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Comfort
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.3">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "83%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.3
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Value
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.2">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "82%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.2
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="flex gap-3 items-center justify-between mt-auto pt-2">
                      <div className="flex gap-2 items-baseline min-w-0">
                        <span className="font-semibold tabular-nums text-foreground text-lg">
                          $329
                        </span>
                      </div>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        Add to cart
                      </Button>
                    </div>
                  </article>
                  <article className="bg-background border border-border flex flex-col gap-5 h-full min-w-0 overflow-hidden p-5 relative rounded-lg" aria-labelledby="comparison-4-studio-mini-name">
                    <div className="flex gap-3 items-start justify-between min-w-0">
                      <div className="flex gap-3 items-center min-w-0">
                        <a className="aspect-square bg-muted/40 block group/image overflow-hidden relative rounded-md shrink-0 size-20" href="#studio-mini" aria-label="View Studio Mini">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Mini headphones product shot" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=600&h=600&q=80" />
                        </a>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors truncate underline-offset-4" id="comparison-4-studio-mini-name" href="#studio-mini">
                            Studio Mini
                          </a>
                          <p className="text-muted-foreground text-xs truncate">
                            On ear · Wired
                          </p>
                          <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.3 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "86%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="font-medium tabular-nums text-foreground">
                              4.3
                            </span>
                            <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-mini#reviews" aria-label="Read 1208 reviews for Studio Mini">
                              (1208)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 items-baseline justify-between">
                        <span className="font-medium text-muted-foreground text-sm">
                          6th place
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          0 of 5 wins
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-baseline">
                        <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                          7.0
                        </span>
                        <span className="tabular-nums text-muted-foreground text-sm">
                          / 10
                        </span>
                      </div>
                      <div className="bg-muted h-2 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="7">
                        <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "70%"}}></div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-3" aria-label="Studio Mini score breakdown">
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Sound
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="6.8">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "68%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            6.8
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Battery
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="5">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "50%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            5.0
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Noise cancel
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="5.5">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "55%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            5.5
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Comfort
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8.2">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "82%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            8.2
                          </span>
                        </div>
                      </li>
                      <li role="listitem">
                        <div className="gap-3 grid grid-cols-[5.5rem_1fr_2.25rem] items-center">
                          <span className="text-muted-foreground text-xs truncate">
                            Value
                          </span>
                          <div className="bg-muted h-1.5 overflow-hidden rounded-full" role="meter" aria-valuemin="0" aria-valuemax="10" aria-valuenow="9.4">
                            <div className="bg-foreground/45 duration-500 h-full rounded-full transition-all" style={{width: "94%"}}></div>
                          </div>
                          <span className="tabular-nums text-foreground/70 text-right text-xs">
                            9.4
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="flex gap-3 items-center justify-between mt-auto pt-2">
                      <div className="flex gap-2 items-baseline min-w-0">
                        <span className="font-semibold tabular-nums text-foreground text-lg">
                          $89
                        </span>
                      </div>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        Add to cart
                      </Button>
                    </div>
                  </article>
                </div>
              </CarouselItem>
            </div>
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  )
}
