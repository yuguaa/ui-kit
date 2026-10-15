import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Ecommerce shop hero"}
      </h1>
      <section className="lg:py-14 max-w-6xl md:py-12 mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="shop-hero-4-title">
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-baseline justify-between">
            <span className="font-semibold text-muted-foreground text-xs">
              {"Shop By Category"}
            </span>
            <a className="gap-1.5 hover:text-primary hover:underline inline-flex items-center text-muted-foreground text-xs transition-colors underline-offset-4" href="#shop-all">
              {"See all 60 pieces"}
              <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
          <h2 className="font-semibold leading-[1.05] lg:text-5xl md:text-4xl text-3xl text-balance text-foreground tracking-tight" id="shop-hero-4-title">
            {"Find What's In The Carry."}
          </h2>
          <p className="leading-relaxed max-w-xl text-base text-muted-foreground">
            {"Hand-built carry-on goods from two small workshops we visit by name. Browse by category or jump into the full catalog."}
          </p>
        </header>
        <ul className="gap-3 grid grid-cols-2 lg:gap-4 lg:grid-cols-4 md:mt-10 mt-8" role="list">
          <li>
            <a className="block group" href="#shop-daypacks" aria-label="Shop Daypacks, 24 styles">
              <Item className="aspect-square block overflow-hidden p-0" variant="muted" size="default">
                <img className="duration-500 ease-out group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Wayfarer Daypack in Charcoal, three-quarter studio shot" loading="lazy" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=600&q=80" />
              </Item>
              <div className="flex gap-2 items-baseline justify-between mt-3">
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold group-hover:text-primary leading-tight text-base text-foreground transition-colors">
                    {"Daypacks"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs">
                    {"24 styles"}
                  </span>
                </div>
                <svg className="group-hover:translate-x-0.5 lucide lucide-arrow-right shrink-0 size-4 text-foreground/60 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a className="block group" href="#shop-weekenders" aria-label="Shop Weekenders, 12 styles">
              <Item className="aspect-square block overflow-hidden p-0" variant="muted" size="default">
                <img className="duration-500 ease-out group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Sundown Weekender duffel on a marble surface" loading="lazy" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&h=600&q=80" />
              </Item>
              <div className="flex gap-2 items-baseline justify-between mt-3">
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold group-hover:text-primary leading-tight text-base text-foreground transition-colors">
                    {"Weekenders"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs">
                    {"12 styles"}
                  </span>
                </div>
                <svg className="group-hover:translate-x-0.5 lucide lucide-arrow-right shrink-0 size-4 text-foreground/60 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a className="block group" href="#shop-travel-packs" aria-label="Shop Travel Packs, 8 styles">
              <Item className="aspect-square block overflow-hidden p-0" variant="muted" size="default">
                <img className="duration-500 ease-out group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Outpost 45L Pack in Slate, hero studio shot" loading="lazy" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=600&h=600&q=80" />
              </Item>
              <div className="flex gap-2 items-baseline justify-between mt-3">
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold group-hover:text-primary leading-tight text-base text-foreground transition-colors">
                    {"Travel Packs"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs">
                    {"8 styles"}
                  </span>
                </div>
                <svg className="group-hover:translate-x-0.5 lucide lucide-arrow-right shrink-0 size-4 text-foreground/60 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a className="block group" href="#shop-apparel" aria-label="Shop Apparel, 16 styles">
              <Item className="aspect-square block overflow-hidden p-0" variant="muted" size="default">
                <img className="duration-500 ease-out group-hover:scale-[1.03] object-cover size-full transition-transform" alt="Field Shell Jacket in Olive on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&h=600&q=80" />
              </Item>
              <div className="flex gap-2 items-baseline justify-between mt-3">
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold group-hover:text-primary leading-tight text-base text-foreground transition-colors">
                    {"Apparel"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs">
                    {"16 styles"}
                  </span>
                </div>
                <svg className="group-hover:translate-x-0.5 lucide lucide-arrow-right shrink-0 size-4 text-foreground/60 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
