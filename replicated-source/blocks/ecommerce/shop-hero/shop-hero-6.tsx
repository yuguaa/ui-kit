import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Ecommerce shop hero
      </h1>
      <section className="lg:py-12 max-w-6xl md:py-10 mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="shop-hero-6-title">
        <Card className="overflow-hidden p-0 shadow-none" size="default">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr]">
            <div className="flex flex-col gap-6 lg:p-10 md:gap-7 md:p-9 p-7">
              <div className="flex gap-3 items-baseline justify-between">
                <span className="font-semibold text-foreground text-xs tracking-[0.18em]">
                  Halden Goods
                </span>
                <span className="tabular-nums text-muted-foreground text-xs tracking-wider">
                  FW26 / 032
                </span>
              </div>
              <div className="flex flex-col gap-3.5">
                <span className="font-semibold text-muted-foreground text-xs tracking-wide">
                  The Carry-On Edit
                </span>
                <h2 className="font-semibold leading-[1] lg:text-[56px] md:text-[52px] text-[40px] text-balance text-foreground tracking-tight" id="shop-hero-6-title">
                  Built For The Way Back Home.
                </h2>
                <p className="leading-relaxed max-w-md md:text-base mt-1 text-muted-foreground text-sm">
                  Thirty-two new pieces, hand-built in two small workshops we visit by name. Patched canvas, oiled leather, lifetime repair.
                </p>
              </div>
              <div className="border-border/60 border-dashed border-y flex flex-wrap gap-x-3 gap-y-2 items-center py-3.5 text-xs">
                <span className="flex gap-1.5 items-center text-foreground">
                  <span className="flex relative size-1.5" aria-hidden="true">
                    <span className="absolute bg-primary/50 inline-flex motion-safe:animate-ping rounded-full size-full"></span>
                    <span className="bg-primary inline-flex relative rounded-full size-1.5"></span>
                  </span>
                  <span className="font-semibold">
                    Just Released
                  </span>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    32
                  </span>
                  new pieces
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    8
                  </span>
                  on sale
                </span>
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                <Button className="w-full" href="#shop-edit" aria-label="Shop The Edit" role="button" tabIndex="0">
                  Shop The Edit
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <Button className="w-full" href="#shop-sale" aria-label="Shop The Sale, Up to 40%" role="button" tabIndex="0">
                  Shop The Sale
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    Up to 40%
                  </Badge>
                </Button>
                <a className="gap-1.5 hover:text-primary hover:underline inline-flex items-center justify-center text-muted-foreground text-sm transition-colors underline-offset-4" href="#lookbook">
                  View the lookbook
                  <svg className="lucide lucide-arrow-up-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="aspect-square bg-muted lg:aspect-auto overflow-hidden relative w-full">
              <img className="absolute inset-0 object-cover size-full" alt="The Carry-On Edit FW26 collection, hand-built travel goods from the Halden studio" loading="eager" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1200&h=1400&q=80" />
              <div className="absolute bg-gradient-to-b from-black/35 h-24 inset-x-0 to-transparent top-0" aria-hidden="true"></div>
              <div className="absolute bg-gradient-to-t bottom-0 from-black/55 h-24 inset-x-0 to-transparent" aria-hidden="true"></div>
              <div className="absolute md:right-7 md:top-7 right-5 top-5">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                  New Drop
                </Badge>
              </div>
              <div className="absolute bottom-5 flex gap-3 inset-x-5 items-baseline justify-between md:bottom-7 md:inset-x-7">
                <span className="font-medium text-white/95 text-xs tracking-wider">
                  FW26 · The Carry-On Edit
                </span>
                <span className="tabular-nums text-white/70 text-xs tracking-wide">
                  32 Pieces · Just Released
                </span>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  )
}
