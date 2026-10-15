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
        <Carousel className="w-full" role="region" aria-roledescription="carousel" aria-label="Latest products">
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-balance text-xl tracking-tight">
              {"Latest Products"}
            </h2>
            <div className="flex gap-2 items-center shrink-0">
              <Carousel>
              <CarouselPrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center left-auto outline-none select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Previous latest products" extracted="1">
                <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="sr-only">
                  {"Previous slide"}
                </span>
              </CarouselPrevious>
              </Carousel>
              <Carousel>
              <CarouselNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-auto select-none shrink-0 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" tabIndex="0" aria-label="Next latest products">
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
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Wool Collar Jacket details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Wool Collar Jacket" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Add Wool Collar Jacket to wishlist" aria-pressed="false">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" tabIndex="0" aria-label="Add Wool Collar Jacket to cart">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Studio Outerwear products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Studio Outerwear"}
                          </span>
                        </a>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary text-xs transition-shadow">
                          {"New"}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Wool Collar Jacket"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Brushed wool blend with a clean city profile."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span>
                              {"$218.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"Added today"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Gloss Cropped Puffer details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Gloss Cropped Puffer" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute left-2 top-2">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                            {"-25%"}
                          </Badge>
                        </div>
                        <div className="absolute duration-200 motion-reduce:transition-none opacity-100 pointer-events-auto right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Remove Gloss Cropped Puffer from wishlist" aria-pressed="true">
                            <svg className="fill-destructive lucide lucide-heart text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" tabIndex="0" aria-label="Add Gloss Cropped Puffer to cart">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Cold Weather products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Cold Weather"}
                          </span>
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Gloss Cropped Puffer"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Compact shine with lightweight winter volume."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span className="font-normal line-through text-muted-foreground">
                              {"$198.00"}
                            </span>
                            <span>
                              {"$148.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"Added today"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Ribbed Flight Set details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Ribbed Flight Set" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Add Ribbed Flight Set to wishlist" aria-pressed="false">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" tabIndex="0" aria-label="Add Ribbed Flight Set to cart">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Travel Set products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Travel Set"}
                          </span>
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Ribbed Flight Set"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Soft ribbed layers for long-haul movement."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span>
                              {"$96.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"Added yesterday"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Wide-Leg Rinse Jean details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Wide-Leg Rinse Jean" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1762395271662-2a5a077f9662?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Add Wide-Leg Rinse Jean to wishlist" aria-pressed="false">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" tabIndex="0" aria-label="Add Wide-Leg Rinse Jean to cart">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Denim Studio products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Denim Studio"}
                          </span>
                        </a>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow">
                          {"Trending"}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Wide-Leg Rinse Jean"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Relaxed denim with a softened dark rinse."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span>
                              {"$132.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"Added yesterday"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem className="pl-0" role="group" aria-roledescription="slide">
                <div className="gap-4 grid lg:grid-cols-4 px-1 sm:grid-cols-2">
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Cognac Cafe Jacket details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Cognac Cafe Jacket" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1603748945907-60d79ed187d1?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Add Cognac Cafe Jacket to wishlist" aria-pressed="false">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" tabIndex="0" aria-label="Add Cognac Cafe Jacket to cart">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Studio Outerwear products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Studio Outerwear"}
                          </span>
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Cognac Cafe Jacket"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Soft leather with a relaxed zip-front shape."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span>
                              {"$188.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"May 8 drop"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Longline Utility Set details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Longline Utility Set" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1625224590908-d02e98d0cb3f?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute left-2 top-2">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                            {"-15%"}
                          </Badge>
                        </div>
                        <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Add Longline Utility Set to wishlist" aria-pressed="false">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" tabIndex="0" aria-label="Add Longline Utility Set to cart">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Travel Set products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Travel Set"}
                          </span>
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Longline Utility Set"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"A longline tank and tapered utility pant."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span className="font-normal line-through text-muted-foreground">
                              {"$198.00"}
                            </span>
                            <span>
                              {"$168.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"May 8 drop"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Padded City Coat details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Padded City Coat" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1583513702324-73e5c09c9dcf?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Add Padded City Coat to wishlist" aria-pressed="false">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" disabled="" tabIndex="0" disabled aria-label="Padded City Coat is sold out">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Sold Out"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Cold Weather products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Cold Weather"}
                          </span>
                        </a>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-foreground text-xs transition-shadow">
                          {"Sold Out"}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Padded City Coat"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"Insulated shape with a warm collar finish."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span>
                              {"$186.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"Back in stock"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group h-full pt-0" size="default">
                    <CardHeader className="px-0">
                      <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                        <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Slit-Hem Denim details">
                          <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Slit-Hem Denim" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1578693082747-50c396cacd81?auto=format&fit=crop&w=720&h=900&q=80" />
                        </a>
                        <div className="absolute left-2 top-2">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                            {"-17%"}
                          </Badge>
                        </div>
                        <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-2 top-2 transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Add Slit-Hem Denim to wishlist" aria-pressed="false">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center pointer-events-none z-10">
                          <Button className="duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 motion-reduce:transition-none opacity-0 pointer-events-none transition-[opacity,transform] translate-y-1" type="button" tabIndex="0" aria-label="Add Slit-Hem Denim to cart">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            {"Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-3">
                      <div className="flex gap-3 items-center justify-between min-h-6 min-w-0">
                        <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center max-w-full min-w-0 text-muted-foreground text-xs transition-colors underline-offset-2" href="#" aria-label="View Denim Studio products">
                          <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                          <span className="group-hover/category:underline min-w-0 truncate underline-offset-4">
                            {"Denim Studio"}
                          </span>
                        </a>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <CardTitle className="min-w-0">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                            {"Slit-Hem Denim"}
                          </a>
                        </CardTitle>
                        <CardDescription className="truncate">
                          {"A clean straight fit with a split hem finish."}
                        </CardDescription>
                      </div>
                      <div className="border-dashed border-t mt-auto pt-3">
                        <div className="flex gap-3 items-center justify-between min-w-0">
                          <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
                            <span className="font-normal line-through text-muted-foreground">
                              {"$142.00"}
                            </span>
                            <span>
                              {"$118.00"}
                            </span>
                          </div>
                          <span className="shrink-0 text-muted-foreground text-xs">
                            {"May 7 drop"}
                          </span>
                        </div>
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
