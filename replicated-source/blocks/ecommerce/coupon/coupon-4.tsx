import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
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
      <section className="lg:px-8 lg:py-8 max-w-lg mx-auto px-4 py-6 sm:px-6 w-full" aria-labelledby="coupon-4-heading">
        <Card className="gap-6 p-6 sm:p-8" size="default">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
              <svg className="lucide lucide-ticket-percent size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" aria-hidden="true">
                <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M9 9h.01"></path>
                <path d="m15 9-6 6"></path>
                <path d="M15 15h.01"></path>
              </svg>
              {"Member offer"}
            </Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold sm:text-3xl text-2xl text-balance text-foreground tracking-tight" id="coupon-4-heading">
              {"15% off your next order"}
            </h1>
            <p className="leading-6 max-w-prose text-muted-foreground text-sm">
              {"Apply the code at checkout and the discount lands automatically on every eligible item in your cart."}
            </p>
          </div>
          <Item className="bg-muted/25 border border-border border-dashed" variant="muted" size="sm">
            <ItemContent className="gap-0.5 min-w-0">
              <span className="font-semibold text-[0.625rem] text-muted-foreground tracking-wider uppercase">
                {"Promo code"}
              </span>
              <ItemTitle className="font-mono font-semibold select-all sm:text-2xl text-foreground text-xl tracking-[0.18em] uppercase">
                {"WELCOME15"}
              </ItemTitle>
            </ItemContent>
            <ItemActions>
              <Button type="button" tabIndex={0} aria-label="Copy code WELCOME15" extracted="1">
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
          <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 items-center text-muted-foreground text-xs">
            <span className="gap-1.5 inline-flex items-center">
              <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                <circle cx={12} cy={12} r={10}></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <strong className="font-medium text-foreground">
                {"Expires Aug 15"}
              </strong>
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="gap-1.5 inline-flex items-center">
              <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
              {"Min spend"}
              <strong className="font-medium tabular-nums text-foreground">
                {"$50"}
              </strong>
            </span>
          </div>
          <ul className="flex flex-col gap-2 text-muted-foreground text-sm" aria-label="Offer terms">
            <li className="flex gap-2 items-start leading-snug">
              <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>
                {"Valid on regular-price items."}
              </span>
            </li>
            <li className="flex gap-2 items-start leading-snug">
              <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>
                {"One use per customer."}
              </span>
            </li>
            <li className="flex gap-2 items-start leading-snug">
              <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>
                {"Cannot stack with other percentage discounts."}
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 items-center">
            <Button type="button" tabIndex={0}>
              {"Shop now"}
              <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
            <a className="hover:text-foreground hover:underline text-muted-foreground text-sm underline-offset-4" href="#terms">
              {"Full terms"}
            </a>
          </div>
        </Card>
      </section>
    </main>
  )
}
