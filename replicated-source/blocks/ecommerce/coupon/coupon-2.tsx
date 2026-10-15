import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="lg:px-8 lg:py-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="coupon-2-heading">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2 min-w-0">
            <span className="font-semibold gap-1.5 inline-flex items-center text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
              <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" aria-hidden="true">
                <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M9 9h.01"></path>
                <path d="m15 9-6 6"></path>
                <path d="M15 15h.01"></path>
              </svg>
              Promotions
            </span>
            <h1 className="font-semibold sm:text-3xl text-2xl text-foreground tracking-tight" id="coupon-2-heading">
              Available offers
            </h1>
            <p className="leading-5 max-w-prose text-muted-foreground text-sm">
              Browse current promotions and copy any code straight to your clipboard.
            </p>
          </div>
          <div className="gap-1.5 inline-flex items-baseline self-start shrink-0 sm:self-auto tabular-nums text-muted-foreground text-sm" aria-live="polite">
            <strong className="font-semibold text-base text-foreground">
              6
            </strong>
            <span>
              offers
            </span>
          </div>
        </header>
        <div className="-mx-1 flex flex-wrap gap-1.5 mt-6 px-1" role="group" aria-label="Filter offers by category">
          <button className="bg-foreground font-medium px-3.5 py-1.5 rounded-full text-background text-sm transition-colors" type="button" aria-pressed="true" data-extracted="1">
            All offers
          </button>
          <button className="bg-background border border-border font-medium hover:text-foreground px-3.5 py-1.5 rounded-full text-muted-foreground text-sm transition-colors" type="button" aria-pressed="false">
            Welcome
          </button>
          <button className="bg-background border border-border font-medium hover:text-foreground px-3.5 py-1.5 rounded-full text-muted-foreground text-sm transition-colors" type="button" aria-pressed="false">
            Seasonal
          </button>
          <button className="bg-background border border-border font-medium hover:text-foreground px-3.5 py-1.5 rounded-full text-muted-foreground text-sm transition-colors" type="button" aria-pressed="false">
            Shipping
          </button>
          <button className="bg-background border border-border font-medium hover:text-foreground px-3.5 py-1.5 rounded-full text-muted-foreground text-sm transition-colors" type="button" aria-pressed="false">
            Bundle
          </button>
          <button className="bg-background border border-border font-medium hover:text-foreground px-3.5 py-1.5 rounded-full text-muted-foreground text-sm transition-colors" type="button" aria-pressed="false">
            Loyalty
          </button>
          <button className="bg-background border border-border font-medium hover:text-foreground px-3.5 py-1.5 rounded-full text-muted-foreground text-sm transition-colors" type="button" aria-pressed="false">
            Education
          </button>
        </div>
        <div className="gap-4 grid lg:gap-5 lg:grid-cols-3 mt-6 sm:grid-cols-2">
          <Frame className="min-w-0" spacing="sm" role="article" aria-labelledby="coupon-2-welcome10-name">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                Welcome
              </div>
            </header>
            <FramePanel className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                  <h2 className="font-semibold text-2xl text-foreground tracking-tight" id="coupon-2-welcome10-name">
                    10% off
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    Popular
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  first order
                </p>
              </div>
              <p className="leading-snug text-foreground text-sm">
                Discount applied automatically at checkout on your first cart.
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 items-center mt-1 text-muted-foreground text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    No minimum
                  </strong>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    No expiry
                  </strong>
                </span>
              </div>
            </FramePanel>
            <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <span className="font-mono font-semibold select-all text-foreground text-sm tracking-[0.14em]">
                WELCOME10
              </span>
              <Button type="button" tabIndex="0" aria-label="Copy code WELCOME10">
                <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
                Copy
              </Button>
            </footer>
          </Frame>
          <Frame className="min-w-0" spacing="sm" role="article" aria-labelledby="coupon-2-summer25-name">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                Seasonal
              </div>
            </header>
            <FramePanel className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                  <h2 className="font-semibold text-2xl text-foreground tracking-tight" id="coupon-2-summer25-name">
                    25% off
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    Featured
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  sitewide
                </p>
              </div>
              <p className="leading-snug text-foreground text-sm">
                Quarter off the entire catalog. One use per customer.
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 items-center mt-1 text-muted-foreground text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Min spend
                  <strong className="font-medium tabular-nums text-foreground">
                    $50
                  </strong>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    Ends Sun, Jul 31
                  </strong>
                </span>
              </div>
            </FramePanel>
            <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <span className="font-mono font-semibold select-all text-foreground text-sm tracking-[0.14em]">
                SUMMER25
              </span>
              <Button type="button" tabIndex="0" aria-label="Copy code SUMMER25">
                <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
                Copy
              </Button>
            </footer>
          </Frame>
          <Frame className="min-w-0" spacing="sm" role="article" aria-labelledby="coupon-2-free-ship-name">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                Shipping
              </div>
            </header>
            <FramePanel className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                  <h2 className="font-semibold text-2xl text-foreground tracking-tight" id="coupon-2-free-ship-name">
                    Free shipping
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  no minimum
                </p>
              </div>
              <p className="leading-snug text-foreground text-sm">
                Free standard delivery anywhere in the contiguous US.
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 items-center mt-1 text-muted-foreground text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    No minimum
                  </strong>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    Ongoing
                  </strong>
                </span>
              </div>
            </FramePanel>
            <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <span className="font-mono font-semibold select-all text-foreground text-sm tracking-[0.14em]">
                SHIPFREE
              </span>
              <Button type="button" tabIndex="0" aria-label="Copy code SHIPFREE">
                <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
                Copy
              </Button>
            </footer>
          </Frame>
          <Frame className="min-w-0" spacing="sm" role="article" aria-labelledby="coupon-2-first-bundle-name">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                Bundle
              </div>
            </header>
            <FramePanel className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                  <h2 className="font-semibold text-2xl text-foreground tracking-tight" id="coupon-2-first-bundle-name">
                    $30 off
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  any bundle
                </p>
              </div>
              <p className="leading-snug text-foreground text-sm">
                Save $30 when you add any 3 items from a single category.
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 items-center mt-1 text-muted-foreground text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Min spend
                  <strong className="font-medium tabular-nums text-foreground">
                    $150
                  </strong>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    Ends Aug 18
                  </strong>
                </span>
              </div>
            </FramePanel>
            <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <span className="font-mono font-semibold select-all text-foreground text-sm tracking-[0.14em]">
                BUNDLE30
              </span>
              <Button type="button" tabIndex="0" aria-label="Copy code BUNDLE30">
                <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
                Copy
              </Button>
            </footer>
          </Frame>
          <Frame className="min-w-0" spacing="sm" role="article" aria-labelledby="coupon-2-loyalty-name">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                Loyalty
              </div>
            </header>
            <FramePanel className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                  <h2 className="font-semibold text-2xl text-foreground tracking-tight" id="coupon-2-loyalty-name">
                    15% off
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    Members
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  members only
                </p>
              </div>
              <p className="leading-snug text-foreground text-sm">
                Recurring discount for active members of the loyalty program.
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 items-center mt-1 text-muted-foreground text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    No minimum
                  </strong>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    Renews monthly
                  </strong>
                </span>
              </div>
            </FramePanel>
            <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <span className="font-mono font-semibold select-all text-foreground text-sm tracking-[0.14em]">
                MEMBER15
              </span>
              <Button type="button" tabIndex="0" aria-label="Copy code MEMBER15">
                <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
                Copy
              </Button>
            </footer>
          </Frame>
          <Frame className="min-w-0" spacing="sm" role="article" aria-labelledby="coupon-2-student-name">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                Education
              </div>
            </header>
            <FramePanel className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                  <h2 className="font-semibold text-2xl text-foreground tracking-tight" id="coupon-2-student-name">
                    20% off
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  verified students
                </p>
              </div>
              <p className="leading-snug text-foreground text-sm">
                Verified through SheerID. Reverifies every 12 months.
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 items-center mt-1 text-muted-foreground text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    No minimum
                  </strong>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <strong className="font-medium text-foreground">
                    Verify required
                  </strong>
                </span>
              </div>
            </FramePanel>
            <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <span className="font-mono font-semibold select-all text-foreground text-sm tracking-[0.14em]">
                STUDENT20
              </span>
              <Button type="button" tabIndex="0" aria-label="Copy code STUDENT20">
                <svg className="lucide lucide-ticket-percent size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
                Copy
              </Button>
            </footer>
          </Frame>
        </div>
      </section>
    </main>
  )
}
