import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Ecommerce shop hero
      </h1>
      <section className="lg:py-14 max-w-6xl md:py-12 mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="shop-hero-1-title">
        <div className="border-b border-border/60 flex flex-wrap gap-x-5 gap-y-3 items-center justify-between md:pb-5 pb-4">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-foreground text-xs tracking-[0.22em] uppercase">
              Halden Goods
            </span>
            <span className="hidden sm:flex sm:gap-2 sm:items-center">
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="text-muted-foreground text-xs">
                Carry-on, considered
              </span>
            </span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
            <ul className="gap-2 hidden items-center md:flex text-muted-foreground text-xs" role="list">
              <li className="flex gap-2 items-center">
                <span>
                  Free 60-day returns
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  3-year repair
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  Ships in 24h
                </span>
              </li>
            </ul>
            <Button href="#cart" aria-label="Cart with 0 items" role="button" tabIndex="0">
              <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
              <span>
                Cart
              </span>
              <span className="font-semibold tabular-nums text-foreground">
                0
              </span>
            </Button>
          </div>
        </div>
        <div className="gap-8 grid grid-cols-1 lg:gap-12 lg:grid-cols-[5fr_7fr] md:pt-10 pt-8">
          <div className="flex flex-col gap-7 lg:gap-8">
            <div className="flex flex-col gap-5">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                Collection 03 · Spring 2026
              </Badge>
              <h2 className="font-semibold leading-[1.05] lg:text-[56px] md:text-5xl text-4xl text-balance text-foreground tracking-tight" id="shop-hero-1-title">
                Made for the trips you actually take.
              </h2>
              <p className="leading-relaxed max-w-md text-base text-muted-foreground">
                Carry-on essentials built in two small workshops we visit by name. Pieces meant to outlast the trips, the seasons, the trends.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button href="#shop-the-edit" aria-label="Shop the Spring 2026 Edit" role="button" tabIndex="0">
                Shop The Edit
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
              <Button href="#shop-all" aria-label="Shop all Halden Goods pieces" role="button" tabIndex="0">
                Shop All
              </Button>
            </div>
            <div className="flex gap-3 items-center">
              <Avatar size="lg">
                <AvatarImage alt="Tomás Vega" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
              </Avatar>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-medium text-foreground text-sm truncate">
                  Tomás Vega
                </span>
                <div className="flex gap-2 items-center text-muted-foreground text-xs">
                  <span>
                    Founder
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    Curator of this edit
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-3 grid grid-cols-2 lg:gap-4 sm:grid-rows-2">
            <article className="col-span-2 flex flex-col gap-3 group/tile sm:col-span-1 sm:row-span-2">
              <Item className="aspect-[5/6] block overflow-hidden p-0 relative sm:aspect-auto sm:h-full" href="#shop-sundown-weekender" aria-label="Shop Sundown Weekender" variant="muted" size="default">
                <img className="duration-700 ease-out group-hover/tile:scale-[1.03] object-cover size-full transition-transform" alt="Sundown Weekender duffel on a marble surface" loading="lazy" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=900&h=1100&q=80" />
                <div className="absolute left-3 top-3">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                    New
                  </Badge>
                </div>
              </Item>
              <div className="flex gap-3 items-end justify-between">
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#shop-sundown-weekender">
                    Sundown Weekender
                  </a>
                  <div className="flex gap-2 items-center text-xs">
                    <span className="text-muted-foreground truncate">
                      48-hour duffel
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="font-medium tabular-nums text-foreground">
                      $224
                    </span>
                  </div>
                </div>
                <Button type="button" tabIndex="0" aria-label="Add Sundown Weekender to cart" extracted="1">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <span className="hidden sm:inline">
                    Add
                  </span>
                </Button>
              </div>
            </article>
            <article className="flex flex-col gap-3 group/tile">
              <Item className="aspect-square block overflow-hidden p-0 relative" href="#shop-wayfarer-daypack" aria-label="Shop Wayfarer Daypack" variant="muted" size="default">
                <img className="duration-700 ease-out group-hover/tile:scale-[1.03] object-cover size-full transition-transform" alt="Wayfarer Daypack in Charcoal, three-quarter studio shot" loading="lazy" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&h=700&q=80" />
                <div className="absolute left-3 top-3">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    20% Off
                  </Badge>
                </div>
              </Item>
              <div className="flex gap-3 items-end justify-between">
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#shop-wayfarer-daypack">
                    Wayfarer Daypack
                  </a>
                  <div className="flex gap-2 items-center text-xs">
                    <span className="text-muted-foreground truncate">
                      Everyday 18L
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="font-medium tabular-nums text-foreground">
                      $148
                    </span>
                    <span className="line-through tabular-nums text-muted-foreground">
                      $185
                    </span>
                  </div>
                </div>
                <Button type="button" tabIndex="0" aria-label="Add Wayfarer Daypack to cart">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <span className="hidden sm:inline">
                    Add
                  </span>
                </Button>
              </div>
            </article>
            <article className="flex flex-col gap-3 group/tile">
              <Item className="aspect-square block overflow-hidden p-0 relative" href="#shop-saddle-tote" aria-label="Shop Saddle Tote" variant="muted" size="default">
                <img className="duration-700 ease-out group-hover/tile:scale-[1.03] object-cover size-full transition-transform" alt="Saddle Tote in Cognac, packed for the day" loading="lazy" src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?auto=format&fit=crop&w=700&h=700&q=80" />
              </Item>
              <div className="flex gap-3 items-end justify-between">
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="block font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#shop-saddle-tote">
                    Saddle Tote
                  </a>
                  <div className="flex gap-2 items-center text-xs">
                    <span className="text-muted-foreground truncate">
                      Waxed canvas
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="font-medium tabular-nums text-foreground">
                      $98
                    </span>
                  </div>
                </div>
                <Button type="button" tabIndex="0" aria-label="Add Saddle Tote to cart">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <span className="hidden sm:inline">
                    Add
                  </span>
                </Button>
              </div>
            </article>
          </div>
        </div>
        <nav className="border-border/60 border-t flex flex-wrap gap-x-6 gap-y-3 items-center justify-between md:mt-12 mt-10 pt-5" aria-label="Shop categories">
          <ul className="flex flex-1 flex-wrap gap-x-5 gap-y-2 items-center" role="list">
            <li className="font-medium text-[0.625rem] text-muted-foreground tracking-[0.22em] uppercase">
              Browse
            </li>
            <li>
              <a className="hover:text-primary hover:underline text-foreground/80 text-sm transition-colors underline-offset-4" href="#shop-daypacks">
                Daypacks
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline text-foreground/80 text-sm transition-colors underline-offset-4" href="#shop-weekenders">
                Weekenders
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline text-foreground/80 text-sm transition-colors underline-offset-4" href="#shop-totes">
                Totes
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline text-foreground/80 text-sm transition-colors underline-offset-4" href="#shop-travel-packs">
                Travel Packs
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline text-foreground/80 text-sm transition-colors underline-offset-4" href="#shop-the-edit">
                The Edit
              </a>
            </li>
          </ul>
          <a className="gap-1.5 hover:text-primary hover:underline inline-flex items-center text-muted-foreground text-xs transition-colors underline-offset-4" href="#lookbook">
            View the Spring lookbook
            <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </nav>
      </section>
    </main>
  )
}
