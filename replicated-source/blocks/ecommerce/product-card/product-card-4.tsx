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
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-10 min-h-svh p-6 w-full">
      <section className="max-w-7xl mx-auto w-full">
        <Carousel className="w-full" role="region" aria-roledescription="carousel" aria-label="Similar products">
          <div className="flex gap-4 items-center justify-between mb-6">
            <div className="flex gap-3 items-center min-w-0">
              <h2 className="font-semibold text-balance text-xl tracking-tight">
                {"Similar Products"}
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow" aria-label="Page 1 of 2">
                {"1 / 2"}
              </Badge>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Carousel>
              <CarouselPrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center left-auto outline-none select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Previous similar products" extracted="1">
                <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="sr-only">
                  {"Previous slide"}
                </span>
              </CarouselPrevious>
              </Carousel>
              <Carousel>
              <CarouselNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-auto select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" tabIndex="0" aria-label="Next similar products">
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
                  <Card className="h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Leather Biker Jacket details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Leather Biker Jacket" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Leather Biker Jacket to wishlist" aria-pressed="false">
                          <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Studio Outerwear products">
                          {"Studio Outerwear"}
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Leather Biker Jacket"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Polished leather with a sharp stance."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span>
                          {"$248.00"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Gloss Puffer Jacket details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Gloss Puffer Jacket" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute left-2 top-2">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                            {"-25%"}
                          </Badge>
                        </div>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Remove Gloss Puffer Jacket from wishlist" aria-pressed="true">
                          <svg className="fill-destructive lucide lucide-heart text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Cold Weather products">
                          {"Cold Weather"}
                        </a>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                          {"4 left"}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Gloss Puffer Jacket"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"High-shine warmth with a clean fit."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span className="font-normal line-through text-muted-foreground">
                          {"$198.00"}
                        </span>
                        <span>
                          {"$148.00"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Ribbed Tank Set details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Ribbed Tank Set" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Ribbed Tank Set to wishlist" aria-pressed="false">
                          <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Travel Set products">
                          {"Travel Set"}
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Ribbed Tank Set"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Soft tank with tapered pull-on pants."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span>
                          {"$86.00"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Wide-Leg Denim Set details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Wide-Leg Denim Set" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1762395271662-2a5a077f9662?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Wide-Leg Denim Set to wishlist" aria-pressed="false">
                          <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Denim Studio products">
                          {"Denim Studio"}
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Wide-Leg Denim Set"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Easy tank styling with wide-leg jeans."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span>
                          {"$132.00"}
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
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Leather Cafe Jacket details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Leather Cafe Jacket" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Leather Cafe Jacket to wishlist" aria-pressed="false">
                          <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Studio Outerwear products">
                          {"Studio Outerwear"}
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Leather Cafe Jacket"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Soft leather with a relaxed zip front."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span>
                          {"$188.00"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Longline Tank Set details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Longline Tank Set" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute left-2 top-2">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                            {"-15%"}
                          </Badge>
                        </div>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Longline Tank Set to wishlist" aria-pressed="false">
                          <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Travel Set products">
                          {"Travel Set"}
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Longline Tank Set"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Soft longline tank with tapered pants."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span className="font-normal line-through text-muted-foreground">
                          {"$198.00"}
                        </span>
                        <span>
                          {"$168.00"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Quilted Shell Jacket details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Quilted Shell Jacket" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Quilted Shell Jacket to wishlist" aria-pressed="false">
                          <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Cold Weather products">
                          {"Cold Weather"}
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Quilted Shell Jacket"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Glossy warmth with a compact street fit."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span>
                          {"$96.00"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Weekend Denim Set details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Weekend Denim Set" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1762395271662-2a5a077f9662?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute left-2 top-2">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                            {"-22%"}
                          </Badge>
                        </div>
                        <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Weekend Denim Set to wishlist" aria-pressed="false">
                          <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="font-medium hover:text-primary hover:underline max-w-full min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2 w-fit" href="#" aria-label="View Denim Studio products">
                          {"Denim Studio"}
                        </a>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                          {"2 left"}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Weekend Denim Set"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Ribbed tank styled with relaxed denim."}
                        </CardDescription>
                      </div>
                      <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                        <span className="font-normal line-through text-muted-foreground">
                          {"$118.00"}
                        </span>
                        <span>
                          {"$92.00"}
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
  )
}
