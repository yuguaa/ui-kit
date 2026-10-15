import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Ecommerce shop hero
      </h1>
      <section className="lg:py-12 max-w-6xl md:py-10 mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="shop-hero-5-title">
        <h2 className="sr-only" id="shop-hero-5-title">
          Two collections, side by side
        </h2>
        <ul className="gap-3 grid grid-cols-1 lg:gap-4 md:grid-cols-2" role="list">
          <li>
            <Item className="aspect-[4/5] bg-transparent block border-0 group md:aspect-[3/4] overflow-hidden p-0 relative shadow-none" variant="default" size="default">
              <img className="absolute duration-700 ease-out group-hover:scale-[1.03] inset-0 object-cover size-full transition-transform" alt="Outpost 45L Pack in Slate, hero studio shot" loading="eager" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&h=1100&q=80" />
              <div className="absolute left-4 md:left-5 md:top-5 top-4 z-10">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                  Save 20%
                </Badge>
              </div>
              <div className="absolute bg-gradient-to-t bottom-0 from-black/85 h-2/3 inset-x-0 to-transparent via-black/35" aria-hidden="true"></div>
              <div className="absolute bottom-0 dark flex flex-col gap-3 inset-x-0 lg:gap-4 lg:p-7 md:p-6 p-5">
                <span className="font-semibold text-white/85 text-xs">
                  The Outpost Collection
                </span>
                <h3 className="font-semibold leading-[1.05] lg:text-4xl md:text-3xl text-2xl text-balance text-white tracking-tight">
                  Two Weeks. One Shoulder.
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-white/80 text-xs">
                  <span className="flex gap-1 items-center">
                    <svg className="fill-amber-400 lucide lucide-star size-3.5 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="font-semibold tabular-nums text-white">
                      4.9
                    </span>
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="tabular-nums">
                    487 reviews
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    From
                    <span className="font-semibold tabular-nums text-white">
                      $98
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 items-center mt-1">
                  <Button href="#shop-outpost" aria-label="Shop The Outpost" role="button" tabIndex="0">
                    Shop The Outpost
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                  <a className="font-medium gap-1 hover:opacity-100 hover:underline inline-flex items-center text-sm text-white/90 transition-opacity underline-offset-4" href="#outpost-collection">
                    24 pieces in the collection
                    <svg className="lucide lucide-arrow-up-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Item>
          </li>
          <li>
            <Item className="aspect-[4/5] bg-transparent block border-0 group md:aspect-[3/4] overflow-hidden p-0 relative shadow-none" variant="default" size="default">
              <img className="absolute duration-700 ease-out group-hover:scale-[1.03] inset-0 object-cover size-full transition-transform" alt="Field Shell Jacket in Olive on a studio backdrop" loading="eager" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&h=1100&q=80" />
              <div className="absolute left-4 md:left-5 md:top-5 top-4 z-10">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                  Just Dropped
                </Badge>
              </div>
              <div className="absolute bg-gradient-to-t bottom-0 from-black/85 h-2/3 inset-x-0 to-transparent via-black/35" aria-hidden="true"></div>
              <div className="absolute bottom-0 dark flex flex-col gap-3 inset-x-0 lg:gap-4 lg:p-7 md:p-6 p-5">
                <span className="font-semibold text-white/85 text-xs">
                  The Apparel Drop
                </span>
                <h3 className="font-semibold leading-[1.05] lg:text-4xl md:text-3xl text-2xl text-balance text-white tracking-tight">
                  Built For Every Forecast.
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-white/80 text-xs">
                  <span className="flex gap-1 items-center">
                    <svg className="fill-amber-400 lucide lucide-star size-3.5 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="font-semibold tabular-nums text-white">
                      4.7
                    </span>
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="tabular-nums">
                    216 reviews
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    From
                    <span className="font-semibold tabular-nums text-white">
                      $148
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 items-center mt-1">
                  <Button href="#shop-apparel" aria-label="Shop The Layers" role="button" tabIndex="0">
                    Shop The Layers
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                  <a className="font-medium gap-1 hover:opacity-100 hover:underline inline-flex items-center text-sm text-white/90 transition-opacity underline-offset-4" href="#apparel-drop">
                    16 pieces in the drop
                    <svg className="lucide lucide-arrow-up-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Item>
          </li>
        </ul>
      </section>
    </main>
  )
}
