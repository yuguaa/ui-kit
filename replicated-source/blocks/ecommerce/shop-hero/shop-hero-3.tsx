import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Ecommerce shop hero
      </h1>
      <section className="lg:py-14 max-w-6xl md:py-12 mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="shop-hero-3-title">
        <Item className="bg-transparent block border-0 md:mt-8 mt-6 overflow-hidden p-0 relative shadow-none" variant="default" size="default">
          <img className="absolute inset-0 object-cover size-full" alt="Outpost 45L Pack in Slate, the headline piece of the 40% off sale" loading="eager" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&h=1100&q=80" />
          <div className="absolute bg-gradient-to-r from-black/90 inset-0 to-black/15 via-black/55" aria-hidden="true"></div>
          <div className="absolute bg-gradient-to-t from-black/75 inset-0 to-transparent via-transparent" aria-hidden="true"></div>
          <div className="dark flex flex-col lg:min-h-[580px] md:min-h-[540px] min-h-[480px] relative">
            <header className="flex gap-3 items-center justify-between lg:p-8 md:p-6 p-5">
              <span className="font-semibold text-white/85 text-xs">
                This Week's Top Deal
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                Live now
              </Badge>
            </header>
            <div className="flex-1" aria-hidden="true"></div>
            <div className="flex flex-col gap-7 lg:p-8 max-w-2xl md:gap-8 md:p-6 p-5">
              <div className="flex flex-col gap-3">
                <h2 className="flex flex-col gap-1 items-start" id="shop-hero-3-title">
                  <span className="font-bold leading-[0.92] lg:text-8xl md:text-7xl tabular-nums text-6xl text-balance text-white tracking-tight">
                    40% Off
                  </span>
                  <span className="font-medium leading-tight lg:text-2xl md:text-xl text-lg text-white/90">
                    The Outpost Collection
                  </span>
                </h2>
                <p className="leading-relaxed max-w-lg md:text-base text-sm text-white/75">
                  Travel packs, weekenders, and our most-carried bag. All 40% off through Sunday.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
                <Button href="#shop-sale-outpost" aria-label="Shop The Sale" role="button" tabIndex="0">
                  Shop The Sale
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <a className="font-medium gap-1 hover:opacity-100 hover:underline inline-flex items-center text-sm text-white/90 transition-opacity underline-offset-4" href="#deal-includes">
                  See What's Included
                  <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="border-t border-white/15 flex flex-wrap gap-x-3 gap-y-1 items-center pt-4 text-white/70 text-xs">
                <svg className="lucide lucide-clock shrink-0 size-3.5 text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span>
                  Ends in
                  <span className="font-semibold tabular-nums text-white">
                    02d 14h 23m
                  </span>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  2,847 saved this week
                </span>
              </div>
            </div>
          </div>
        </Item>
        <ul className="gap-3 grid grid-cols-1 lg:gap-4 lg:mt-4 mt-3 sm:grid-cols-3" role="list">
          <li>
            <Item className="flex-col gap-3 h-full items-start md:p-6 p-5" variant="outline" size="default">
              <svg className="lucide lucide-truck shrink-0 size-5 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold leading-snug text-base text-foreground">
                  Free Shipping Over $75
                </h3>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  No code needed. Continental US, ships in 24 hours.
                </p>
              </div>
              <a className="font-medium gap-1 hover:text-primary hover:underline inline-flex items-center mt-auto text-foreground text-sm transition-colors underline-offset-4" href="#shop-all" aria-label="Shop the shop">
                Shop the shop
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </Item>
          </li>
          <li>
            <Item className="flex-col gap-3 h-full items-start md:p-6 p-5" variant="outline" size="default">
              <svg className="lucide lucide-package shrink-0 size-5 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                <path d="M12 22V12"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <path d="m7.5 4.27 9 5.15"></path>
              </svg>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold leading-snug text-base text-foreground">
                  Save $30 On 2+ Pieces
                </h3>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  Auto-applied at checkout. Mix and match across collections.
                </p>
              </div>
              <a className="font-medium gap-1 hover:text-primary hover:underline inline-flex items-center mt-auto text-foreground text-sm transition-colors underline-offset-4" href="#shop-bundle" aria-label="Build a bundle">
                Build a bundle
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </Item>
          </li>
          <li>
            <Item className="flex-col gap-3 h-full items-start md:p-6 p-5" variant="outline" size="default">
              <svg className="lucide lucide-sparkles shrink-0 size-5 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold leading-snug text-base text-foreground">
                  Take 10% Off Your First Order
                </h3>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  Use code WELCOME10 at checkout. One redemption per customer.
                </p>
              </div>
              <a className="font-medium gap-1 hover:text-primary hover:underline inline-flex items-center mt-auto text-foreground text-sm transition-colors underline-offset-4" href="#subscribe" aria-label="Subscribe to save">
                Subscribe to save
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </Item>
          </li>
        </ul>
      </section>
    </main>
  )
}
