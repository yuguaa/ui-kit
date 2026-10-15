import { Button } from "@/registry/bases/base/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Ecommerce shop hero"}
      </h1>
      <section className="lg:py-12 max-w-6xl md:py-10 mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="shop-hero-7-title">
        <h2 className="sr-only" id="shop-hero-7-title">
          {"Browse current collections"}
        </h2>
        <Tabs className="gap-4 md:gap-5" data-orientation="horizontal" activationDirection="none">
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-baseline justify-between">
            <h3 className="flex font-semibold gap-3 items-baseline md:text-2xl text-foreground text-xl tracking-tight">
              <span>
                {"Browse The Catalog"}
              </span>
              <span className="font-normal tabular-nums text-muted-foreground text-sm">
                {"3 Live"}
              </span>
            </h3>
            <a className="gap-1.5 group/cta hover:text-primary hover:underline inline-flex items-center text-muted-foreground text-sm transition-colors underline-offset-4" href="#shop-all" aria-label="Browse the full Halden Goods catalog">
              {"See The Full Catalog"}
              <svg className="group-hover/cta:-translate-y-px group-hover/cta:translate-x-px lucide lucide-arrow-up-right size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
          <TabsList className="gap-2 grid grid-cols-1 h-auto lg:gap-3 p-0 sm:grid-cols-3 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
            <TabsTrigger className="data-active:ring-2 data-active:ring-primary duration-200 ease-out flex gap-3 group/chip h-auto hover:bg-muted/30 justify-start lg:gap-3.5 lg:p-3 p-2.5 ring-1 ring-border text-left" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_3_" extracted="1">
              <Item className="lg:size-14 overflow-hidden p-0 relative size-12" variant="muted" size="default">
                <img className="duration-500 ease-out group-data-active/chip:scale-[1.06] group-hover/chip:scale-[1.05] object-cover size-full transition-transform" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1400&h=1000&q=80" />
              </Item>
              <div className="flex flex-1 flex-col gap-1 min-w-0">
                <div className="flex gap-2 items-baseline">
                  <span className="font-semibold group-data-active/chip:text-foreground tabular-nums text-[10px] text-muted-foreground/70 tracking-[0.18em] transition-colors">
                    {"01"}
                  </span>
                  <span className="font-semibold lg:text-base text-foreground text-sm truncate">
                    {"The Outpost"}
                  </span>
                </div>
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-blue-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Just Released"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0 tabular-nums">
                    {"32 Pieces"}
                  </span>
                </span>
              </div>
              <svg className="-translate-x-1 duration-300 group-data-active/chip:opacity-100 group-data-active/chip:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-4 text-foreground/40 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </TabsTrigger>
            <TabsTrigger className="data-active:ring-2 data-active:ring-primary duration-200 ease-out flex gap-3 group/chip h-auto hover:bg-muted/30 justify-start lg:gap-3.5 lg:p-3 p-2.5 ring-1 ring-border text-left" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
              <Item className="lg:size-14 overflow-hidden p-0 relative size-12" variant="muted" size="default">
                <img className="duration-500 ease-out group-data-active/chip:scale-[1.06] group-hover/chip:scale-[1.05] object-cover size-full transition-transform" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1400&h=1000&q=80" />
              </Item>
              <div className="flex flex-1 flex-col gap-1 min-w-0">
                <div className="flex gap-2 items-baseline">
                  <span className="font-semibold group-data-active/chip:text-foreground tabular-nums text-[10px] text-muted-foreground/70 tracking-[0.18em] transition-colors">
                    {"02"}
                  </span>
                  <span className="font-semibold lg:text-base text-foreground text-sm truncate">
                    {"The Carry-On Edit"}
                  </span>
                </div>
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Live Now"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0 tabular-nums">
                    {"24 Pieces"}
                  </span>
                </span>
              </div>
              <svg className="-translate-x-1 duration-300 group-data-active/chip:opacity-100 group-data-active/chip:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-4 text-foreground/40 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </TabsTrigger>
            <TabsTrigger className="data-active:ring-2 data-active:ring-primary duration-200 ease-out flex gap-3 group/chip h-auto hover:bg-muted/30 justify-start lg:gap-3.5 lg:p-3 p-2.5 ring-1 ring-border text-left" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
              <Item className="lg:size-14 overflow-hidden p-0 relative size-12" variant="muted" size="default">
                <img className="duration-500 ease-out group-data-active/chip:scale-[1.06] group-hover/chip:scale-[1.05] object-cover size-full transition-transform" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1400&h=1000&q=80" />
              </Item>
              <div className="flex flex-1 flex-col gap-1 min-w-0">
                <div className="flex gap-2 items-baseline">
                  <span className="font-semibold group-data-active/chip:text-foreground tabular-nums text-[10px] text-muted-foreground/70 tracking-[0.18em] transition-colors">
                    {"03"}
                  </span>
                  <span className="font-semibold lg:text-base text-foreground text-sm truncate">
                    {"The Apparel Drop"}
                  </span>
                </div>
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Drops Friday"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0 tabular-nums">
                    {"16 Pieces"}
                  </span>
                </span>
              </div>
              <svg className="-translate-x-1 duration-300 group-data-active/chip:opacity-100 group-data-active/chip:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-4 text-foreground/40 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </TabsTrigger>
          </TabsList>
          <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_3_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
            <Item className="aspect-[4/5] block group/panel lg:aspect-[16/9] md:aspect-[16/10] overflow-hidden p-0 relative" variant="muted" size="default">
              <img className="absolute duration-700 ease-out group-hover/panel:scale-[1.02] inset-0 object-cover size-full transition-transform" alt="Outpost 45L Pack in Slate, the hero piece of the Outpost Collection" loading="eager" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1400&h=1000&q=80" />
              <div className="absolute bg-gradient-to-t bottom-0 from-black/90 h-3/4 inset-x-0 to-transparent via-black/45" aria-hidden="true"></div>
              <div className="absolute bottom-0 dark flex flex-col gap-5 inset-x-0 lg:p-9 md:gap-6 md:p-7 p-5">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-white/85 text-xs">
                  <span className="font-semibold">
                    {"Fall 2026"}
                  </span>
                  <span className="bg-white/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Chapter 03 · Drop 032"}
                  </span>
                </div>
                <div className="flex flex-col gap-3 max-w-2xl">
                  <h3 className="font-semibold leading-[1.04] lg:text-[44px] md:text-4xl text-3xl text-balance text-white tracking-tight">
                    {"Built For The Long Way Home."}
                  </h3>
                  <p className="leading-relaxed max-w-lg md:text-base text-sm text-white/80">
                    {"An outdoor edit hand-built in two small workshops we visit by name. Patched canvas, oiled leather, and seam-sealed shells for two-week trips."}
                  </p>
                </div>
                <div className="border-t border-white/15 flex flex-wrap gap-x-5 gap-y-3 items-center justify-between pt-5">
                  <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
                    <Button href="#shop-outpost" aria-label="Shop The Outpost" role="button" tabIndex="0">
                      {"Shop The Outpost"}
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Button>
                    <a className="font-medium gap-1.5 hover:opacity-90 hover:underline inline-flex items-center text-sm text-white transition-opacity underline-offset-4" href="#lookbook-outpost" aria-label="View The Lookbook">
                      {"View The Lookbook"}
                      <svg className="lucide lucide-arrow-up-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-white/70 text-xs">
                    <span>
                      <span className="font-semibold tabular-nums text-white">
                        {"32"}
                      </span>
                      {"Pieces"}
                    </span>
                    <span className="bg-white/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      {"Available Now"}
                    </span>
                  </div>
                </div>
              </div>
            </Item>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
