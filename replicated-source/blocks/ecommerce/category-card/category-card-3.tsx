import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
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
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:p-8 min-h-svh p-6 text-foreground w-full">
      <section className="max-w-7xl mx-auto w-full">
        <Carousel className="w-full" role="region" aria-roledescription="carousel" aria-label="Collection filters">
          <div className="flex gap-4 items-center justify-between mb-6">
            <div className="flex gap-3 items-center min-w-0">
              <h2 className="font-semibold text-balance text-xl tracking-tight" id="collections-heading">
                {"Filter"}
                <span className="text-muted-foreground">
                  {"by Collections"}
                </span>
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow" aria-label="Page 1 of 2">
                {"1 / 2"}
              </Badge>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Carousel>
              <CarouselPrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center left-auto outline-none select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Previous collection filters" extracted="1">
                <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="sr-only">
                  {"Previous slide"}
                </span>
              </CarouselPrevious>
              </Carousel>
              <Carousel>
              <CarouselNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-auto select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" tabIndex="0" aria-label="Next collection filters">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
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
                  <article className="h-full">
                    <Card className="bg-orange-500 dark:bg-orange-950 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Modern orange-toned lounge furniture in a city apartment" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse Urban collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                            <path d="M10 12h4"></path>
                            <path d="M10 8h4"></path>
                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"Urban"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                  <article className="h-full">
                    <Card className="bg-lime-200 dark:bg-lime-950 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Golf green with a flag and rolling landscape" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse Golf collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-flag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                            <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"Golf"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                  <article className="h-full">
                    <Card className="bg-stone-300 dark:bg-stone-900 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Neutral shelf styling with ceramics and sculptural home objects" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse Details collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-layers shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"Details"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                  <article className="h-full">
                    <Card className="bg-sky-300 dark:bg-sky-950 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Sorted recycled plastic bottles and reusable material pieces" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse RePlastic collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-package shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"RePlastic"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                </div>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem className="pl-0" role="group" aria-roledescription="slide">
                <div className="gap-4 grid lg:grid-cols-4 px-1 sm:grid-cols-2">
                  <article className="h-full">
                    <Card className="bg-amber-300 dark:bg-amber-950 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Forest path with dense green trees and soft natural light" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse Nature collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-map-pin shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"Nature"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                  <article className="h-full">
                    <Card className="bg-fuchsia-200 dark:bg-fuchsia-950 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Bright studio interior with seating, art, and soft daylight" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse Studio collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-sparkles shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"Studio"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                  <article className="h-full">
                    <Card className="bg-violet-300 dark:bg-violet-950 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Curated home objects and table accessories in warm light" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse Objects collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-tag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"Objects"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                  <article className="h-full">
                    <Card className="bg-rose-300 dark:bg-rose-950 h-full" size="default">
                      <CardHeader>
                        <div className="aspect-square bg-muted overflow-hidden relative rounded-md">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/card:scale-105 object-cover transition-transform w-full will-change-transform" alt="Notebook and writing tools arranged on a bright desk" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?auto=format&fit=crop&w=720&h=405&q=90" />
                          <div className="absolute bg-background/20 duration-200 ease-out flex group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto inset-0 items-center justify-center motion-reduce:transition-none opacity-0 pointer-events-none transition-opacity">
                            <Button href="#" aria-label="Browse Writing collection" role="button" tabIndex="0">
                              {"Browse Collection"}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 items-center justify-center">
                        <CardTitle className="flex gap-1.5 items-center justify-center text-center">
                          <svg className="lucide lucide-pencil shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                            <path d="m15 5 4 4"></path>
                          </svg>
                          <a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-ring hover:underline truncate underline-offset-4" href="#">
                            {"Writing"}
                          </a>
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </article>
                </div>
              </CarouselItem>
              </Carousel>
            </div>
          </CarouselContent>
          </Carousel>
        </Carousel>
      </section>
    </div>
  )
}
