import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="lg:px-8 lg:py-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="coupon-3-heading">
        <Frame spacing="default">
          <FramePanel className="p-0">
            <div className="grid items-stretch lg:grid-cols-[1.1fr_minmax(0,1fr)]">
              <div className="flex flex-col gap-6 lg:p-10 p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    {"Members only"}
                  </Badge>
                  <span className="font-medium gap-1 inline-flex items-center text-muted-foreground text-xs">
                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    {"Members get 48 hours"}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="coupon-3-heading">
                    {"Early access: 30% off the holiday drop"}
                  </h1>
                  <p className="leading-6 max-w-prose sm:text-base text-muted-foreground text-sm">
                    {"Shop the holiday collection 48 hours before everyone else. Active loyalty members save 30% on every item, automatically applied at checkout."}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Item className="bg-muted/25 border border-border border-dashed" variant="muted" size="sm">
                    <ItemContent className="gap-0.5 min-w-0">
                      <span className="font-semibold text-[0.625rem] text-muted-foreground tracking-wider uppercase">
                        {"Promo code"}
                      </span>
                      <ItemTitle className="font-mono font-semibold select-all sm:text-2xl text-foreground text-xl tracking-[0.18em] uppercase">
                        {"EARLY30"}
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <Button type="button" tabIndex={0} aria-label="Copy code EARLY30" extracted="1">
                        <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" data-icon="inline-start" aria-hidden="true">
                          <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                          <path d="M9 9h.01"></path>
                          <path d="m15 9-6 6"></path>
                          <path d="M15 15h.01"></path>
                        </svg>
                        {"Copy"}
                      </Button>
                    </ItemActions>
                  </Item>
                  <ul className="flex flex-col gap-2 text-muted-foreground text-sm" aria-label="Promotion terms">
                    <li className="flex gap-2 items-start leading-snug">
                      <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>
                        {"Open to active loyalty members."}
                      </span>
                    </li>
                    <li className="flex gap-2 items-start leading-snug">
                      <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>
                        {"Discount covers the full holiday catalog."}
                      </span>
                    </li>
                    <li className="flex gap-2 items-start leading-snug">
                      <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>
                        {"Stacks with free shipping on orders over $75."}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button type="button" tabIndex={0}>
                    {"Shop early access"}
                    <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                  <a className="hover:text-foreground hover:underline text-muted-foreground text-sm underline-offset-4" href="#terms">
                    {"Full terms"}
                  </a>
                </div>
              </div>
              <div className="before:absolute before:bg-gradient-to-tr before:from-background/30 before:inset-0 before:pointer-events-none before:to-transparent before:via-transparent before:z-10 lg:min-h-0 min-h-[14rem] overflow-hidden relative">
                <img className="absolute h-full inset-0 object-cover w-full" alt="Holiday gift box wrapped in linen with a sprig of pine" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&h=900&q=80" />
              </div>
            </div>
          </FramePanel>
        </Frame>
      </section>
    </main>
  )
}
