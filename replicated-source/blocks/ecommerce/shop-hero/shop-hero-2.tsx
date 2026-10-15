import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Ecommerce shop hero"}
      </h1>
      <section className="lg:py-12 max-w-6xl md:py-10 mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="shop-hero-2-title">
        <div className="gap-3 grid grid-cols-1 lg:auto-rows-fr lg:gap-4 lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2">
          <Item className="aspect-[4/5] block group/feature lg:aspect-auto lg:h-full lg:row-span-2 overflow-hidden p-0 relative sm:aspect-[5/3] sm:col-span-2" variant="muted" size="default">
            <img className="absolute duration-700 ease-out group-hover/feature:scale-[1.02] inset-0 object-cover size-full transition-transform" alt="Outpost 45L Pack in Slate, the hero piece of the Outpost Collection" loading="eager" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1200&h=1200&q=80" />
            <div className="absolute bg-gradient-to-b from-black/55 h-1/3 inset-x-0 to-transparent top-0" aria-hidden="true"></div>
            <div className="absolute bg-gradient-to-t bottom-0 from-black/90 h-3/4 inset-x-0 to-transparent via-black/45" aria-hidden="true"></div>
            <div className="dark flex flex-col h-full justify-between lg:p-8 md:p-7 p-5 relative">
              <div className="flex gap-2 items-center text-white/85">
                <span className="font-semibold text-[0.625rem] tracking-[0.22em] uppercase">
                  {"Fall 2026 · Chapter 03"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="text-xs">
                  {"The Outpost Collection"}
                </span>
              </div>
              <div className="flex flex-col gap-5 max-w-md">
                <div className="flex flex-col gap-3">
                  <h2 className="font-semibold leading-[1.04] lg:text-[44px] md:text-4xl text-3xl text-balance text-white tracking-tight" id="shop-hero-2-title">
                    {"Built For The Long Way Home."}
                  </h2>
                  <p className="leading-relaxed md:text-base text-sm text-white/80">
                    {"An outdoor edit built in two small workshops we visit by name. Patched canvas, oiled leather, and seam-sealed shells."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
                  <Button href="#shop-outpost" aria-label="Shop The Outpost" role="button" tabIndex={0}>
                    {"Shop The Outpost"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                  <a className="font-medium gap-1.5 hover:underline inline-flex items-center text-sm text-white transition-colors underline-offset-4" href="#lookbook" aria-label="View Lookbook">
                    {"View Lookbook"}
                    <svg className="lucide lucide-arrow-up-right size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Item>
          <Item className="aspect-square block group/product overflow-hidden p-0 relative" variant="muted" size="default">
            <a className="absolute focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 z-0" href="#shop-sundown-weekender" aria-label="Shop Sundown Weekender">
              <img className="duration-700 ease-out group-hover/product:scale-[1.04] object-cover size-full transition-transform" alt="Sundown Weekender duffel on a marble surface" loading="lazy" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=480&h=480&q=80" />
            </a>
            <div className="absolute left-3 pointer-events-none top-3 z-10">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                {"New"}
              </Badge>
            </div>
            <div className="absolute bg-gradient-to-t bottom-0 from-black/85 h-1/2 inset-x-0 pointer-events-none to-transparent via-black/30 z-10" aria-hidden="true"></div>
            <div className="absolute bottom-0 dark flex gap-3 inset-x-0 items-end justify-between md:p-4 p-3 pointer-events-none z-20">
              <div className="flex flex-col min-w-0 text-white">
                <span className="font-medium text-sm truncate">
                  {"Sundown Weekender"}
                </span>
                <span className="flex gap-1.5 items-baseline text-white/80 text-xs">
                  <span className="tabular-nums">
                    {"$224"}
                  </span>
                </span>
              </div>
              <Button className="pointer-events-auto" type="button" tabIndex={0} aria-label="Add Sundown Weekender to cart" extracted="1">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </Button>
            </div>
          </Item>
          <Item className="aspect-square block group/product overflow-hidden p-0 relative" variant="muted" size="default">
            <a className="absolute focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 z-0" href="#shop-wayfarer-daypack" aria-label="Shop Wayfarer Daypack">
              <img className="duration-700 ease-out group-hover/product:scale-[1.04] object-cover size-full transition-transform" alt="Wayfarer Daypack in Charcoal, three-quarter studio shot" loading="lazy" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=480&h=480&q=80" />
            </a>
            <div className="absolute left-3 pointer-events-none top-3 z-10">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                {"20% Off"}
              </Badge>
            </div>
            <div className="absolute bg-gradient-to-t bottom-0 from-black/85 h-1/2 inset-x-0 pointer-events-none to-transparent via-black/30 z-10" aria-hidden="true"></div>
            <div className="absolute bottom-0 dark flex gap-3 inset-x-0 items-end justify-between md:p-4 p-3 pointer-events-none z-20">
              <div className="flex flex-col min-w-0 text-white">
                <span className="font-medium text-sm truncate">
                  {"Wayfarer Daypack"}
                </span>
                <span className="flex gap-1.5 items-baseline text-white/80 text-xs">
                  <span className="tabular-nums">
                    {"$148"}
                  </span>
                  <span className="line-through tabular-nums">
                    {"$185"}
                  </span>
                </span>
              </div>
              <Button className="pointer-events-auto" type="button" tabIndex={0} aria-label="Add Wayfarer Daypack to cart">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </Button>
            </div>
          </Item>
          <Item className="aspect-square block group/product overflow-hidden p-0 relative" variant="muted" size="default">
            <a className="absolute focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 z-0" href="#shop-field-shell-jacket" aria-label="Shop Field Shell Jacket">
              <img className="duration-700 ease-out group-hover/product:scale-[1.04] object-cover size-full transition-transform" alt="Field Shell Jacket in Olive on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=480&h=480&q=80" />
            </a>
            <div className="absolute bg-gradient-to-t bottom-0 from-black/85 h-1/2 inset-x-0 pointer-events-none to-transparent via-black/30 z-10" aria-hidden="true"></div>
            <div className="absolute bottom-0 dark flex gap-3 inset-x-0 items-end justify-between md:p-4 p-3 pointer-events-none z-20">
              <div className="flex flex-col min-w-0 text-white">
                <span className="font-medium text-sm truncate">
                  {"Field Shell Jacket"}
                </span>
                <span className="flex gap-1.5 items-baseline text-white/80 text-xs">
                  <span className="tabular-nums">
                    {"$185"}
                  </span>
                </span>
              </div>
              <Button className="pointer-events-auto" type="button" tabIndex={0} aria-label="Add Field Shell Jacket to cart">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </Button>
            </div>
          </Item>
          <Item className="aspect-square bg-foreground block md:p-6 overflow-hidden p-5 relative text-background" variant="default" size="default">
            <div className="flex flex-col gap-4 h-full justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[0.625rem] text-background/65 tracking-[0.22em] uppercase">
                  {"Limited Time"}
                </span>
                <span className="font-semibold leading-[1.04] md:text-4xl text-3xl text-balance tracking-tight">
                  {"Up To 40% Off"}
                </span>
              </div>
              <div className="flex gap-3 items-end justify-between">
                <p className="text-background/70 text-xs">
                  {"Fall Sale ends Sunday"}
                </p>
                <a className="font-semibold gap-1 hover:opacity-90 hover:underline inline-flex items-center text-xs transition-opacity underline-offset-4" href="#shop-sale" aria-label="Shop The Sale">
                  {"Shop The Sale"}
                  <svg className="lucide lucide-arrow-right size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Item>
        </div>
      </section>
    </main>
  )
}
