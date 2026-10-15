import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-3xl md:px-6 md:py-12 mx-auto px-4 py-8 w-full" aria-labelledby="receipt-heading">
        <header className="flex flex-wrap gap-4 items-center justify-between mb-6 md:mb-8">
          <div className="flex gap-2 items-center min-w-0">
            <Item className="bg-primary p-0 size-8 text-primary-foreground" variant="default" size="default" aria-hidden="true">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-4" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-foreground text-sm tracking-tight">
                {"NeUI"}
              </span>
              <span className="text-muted-foreground text-xs">
                {"neui.io"}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Button type="button" tabIndex="0" aria-label="Download receipt RCT-2026-018042 as PDF" extracted="1">
              <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              {"Download"}
            </Button>
            <Button type="button" tabIndex="0" aria-label="Email receipt RCT-2026-018042">
              <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              {"Email"}
            </Button>
            <Button type="button" tabIndex="0" aria-label="Print receipt RCT-2026-018042">
              <svg className="lucide lucide-printer size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PrinterIcon" tabler="IconPrinter" hugeicons="PrinterIcon" phosphor="PrinterIcon" remixicon="RiPrinterLine" aria-hidden="true">
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
                <rect x="6" y="14" width="12" height="8" rx="1"></rect>
              </svg>
            </Button>
          </div>
        </header>
        <Card size="default">
          <CardHeader>
            <div className="flex flex-wrap gap-4 items-start justify-between">
              <div className="flex flex-col gap-2 min-w-0">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {"Paid"}
                </Badge>
                <CardTitle className="md:text-3xl text-2xl tracking-tight" id="receipt-heading">
                  {"Thanks For Your Order"}
                </CardTitle>
                <CardDescription className="text-pretty">
                  {"A copy of this receipt was sent to"}
                  <span className="font-medium text-foreground">
                    {"jordan@example.com"}
                  </span>
                  {"."}
                </CardDescription>
              </div>
              <dl className="gap-x-6 gap-y-1.5 grid grid-cols-2 sm:text-right sm:w-auto text-muted-foreground text-xs w-full">
                <div className="contents">
                  <dt className="font-medium text-foreground">
                    {"Order"}
                  </dt>
                  <dd className="font-mono tabular-nums">
                    <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="View order HLD-2026-18042 details">
                      {"HLD-2026-18042"}
                    </a>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="font-medium text-foreground">
                    {"Receipt"}
                  </dt>
                  <dd className="font-mono tabular-nums">
                    {"RCT-2026-018042"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="font-medium text-foreground">
                    {"Date"}
                  </dt>
                  <dd>
                    {"May 18, 2026"}
                  </dd>
                </div>
              </dl>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-3">
              <div className="flex flex-col gap-2 min-w-0">
                <p className="font-medium text-muted-foreground text-xs tracking-[0.16em] uppercase">
                  {"Ship To"}
                </p>
                <address className="leading-snug not-italic text-foreground text-sm">
                  <p className="font-medium">
                    {"Jordan Reeves"}
                  </p>
                  <p className="text-muted-foreground">
                    {"180 Bedford Avenue"}
                  </p>
                  <p className="text-muted-foreground">
                    {"Apt 4F"}
                  </p>
                  <p className="text-muted-foreground">
                    {"Brooklyn, NY 11211"}
                  </p>
                  <p className="text-muted-foreground">
                    {"United States"}
                  </p>
                </address>
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <p className="font-medium text-muted-foreground text-xs tracking-[0.16em] uppercase">
                  {"Bill To"}
                </p>
                <address className="leading-snug not-italic text-foreground text-sm">
                  <p className="font-medium">
                    {"Jordan Reeves"}
                  </p>
                  <p className="text-muted-foreground">
                    {"180 Bedford Avenue"}
                  </p>
                  <p className="text-muted-foreground">
                    {"Apt 4F"}
                  </p>
                  <p className="text-muted-foreground">
                    {"Brooklyn, NY 11211"}
                  </p>
                  <p className="text-muted-foreground">
                    {"United States"}
                  </p>
                </address>
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <p className="font-medium text-muted-foreground text-xs tracking-[0.16em] uppercase">
                  {"Payment"}
                </p>
                <div className="flex flex-col gap-1 leading-snug text-sm">
                  <div className="flex gap-2 items-center">
                    <Item className="px-1.5 py-1 size-8 w-auto" variant="outline" size="default">
                      <svg className="lucide lucide-credit-card size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                    </Item>
                    <div className="flex flex-col min-w-0">
                      <span className="font-medium tabular-nums text-foreground">
                        {"Visa · 4242"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"Expires 04 / 28"}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {"Charged May 18, 2026 at 9:42 AM"}
                  </p>
                </div>
              </div>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-4" role="list" aria-label="Ordered items">
              <article className="flex gap-4 items-start min-w-0" role="listitem">
                <Item className="border-0 overflow-hidden p-0 relative shadow-none size-16 w-16" variant="muted" size="default">
                  <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Field Shell Jacket">
                    <img className="absolute inset-0 object-cover size-full" alt="Field Shell Jacket in olive" loading="lazy" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=160&h=160&q=80" />
                  </a>
                </Item>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Halden"}
                  </p>
                  <h3 className="font-medium leading-snug min-w-0 text-foreground text-sm">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                      {"Field Shell Jacket"}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {"Olive · M · Qty 1"}
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-sm">
                  <span className="font-semibold text-foreground">
                    {"$185.00"}
                  </span>
                </div>
              </article>
              <article className="flex gap-4 items-start min-w-0" role="listitem">
                <Item className="border-0 overflow-hidden p-0 relative shadow-none size-16 w-16" variant="muted" size="default">
                  <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Compass Down Vest">
                    <img className="absolute inset-0 object-cover size-full" alt="Compass Down Vest in slate" loading="lazy" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=160&h=160&q=80" />
                  </a>
                </Item>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Halden"}
                  </p>
                  <h3 className="font-medium leading-snug min-w-0 text-foreground text-sm">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                      {"Compass Down Vest"}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {"Slate · M · Qty 1"}
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-sm">
                  <span className="font-semibold text-foreground">
                    {"$228.00"}
                  </span>
                </div>
              </article>
              <article className="flex gap-4 items-start min-w-0" role="listitem">
                <Item className="border-0 overflow-hidden p-0 relative shadow-none size-16 w-16" variant="muted" size="default">
                  <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Linen Field Shirt">
                    <img className="absolute inset-0 object-cover size-full" alt="Linen Field Shirt in sand" loading="lazy" src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=160&h=160&q=80" />
                  </a>
                </Item>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Halden"}
                  </p>
                  <h3 className="font-medium leading-snug min-w-0 text-foreground text-sm">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                      {"Linen Field Shirt"}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {"Sand · M · Qty 2"}
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-sm">
                  <span className="font-semibold text-foreground">
                    {"$256.00"}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {"$128.00 each"}
                  </span>
                </div>
              </article>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <dl className="flex flex-col gap-2 self-end sm:min-w-72 text-sm">
              <div className="flex gap-4 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  {"Subtotal"}
                </dt>
                <dd className="font-medium tabular-nums text-foreground">
                  {"$669.00"}
                </dd>
              </div>
              <div className="flex gap-4 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  {"Shipping"}
                </dt>
                <dd className="font-medium tabular-nums text-foreground">
                  {"$12.00"}
                </dd>
              </div>
              <div className="flex gap-4 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  {"Discount (WELCOME15)"}
                </dt>
                <dd className="font-medium tabular-nums text-success">
                  {"-$100.35"}
                </dd>
              </div>
              <div className="flex gap-4 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  {"Estimated Tax"}
                </dt>
                <dd className="font-medium tabular-nums text-foreground">
                  {"$51.27"}
                </dd>
              </div>
              <Separator className="my-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex gap-4 items-baseline justify-between">
                <dt className="font-semibold text-base text-foreground">
                  {"Total"}
                </dt>
                <dd className="font-semibold tabular-nums text-base text-foreground">
                  {"$631.92"}
                </dd>
              </div>
            </dl>
          </CardContent>
          <CardFooter className="flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3 items-start min-w-0">
              <svg className="lucide lucide-truck mt-0.5 shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="font-medium leading-snug text-foreground text-sm">
                  {"Arrives May 22, 2026 to May 25, 2026"}
                </p>
                <p className="leading-snug text-muted-foreground text-xs">
                  {"UPS Ground · Standard, 3 - 5 business days"}
                </p>
                <a className="font-medium gap-1 hover:text-primary hover:underline inline-flex items-center mt-1 text-foreground text-xs transition-colors underline-offset-4 w-fit" href="#" aria-label="Track order HLD-2026-18042">
                  {"Track Shipment"}
                  <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <a className="gap-1.5 hover:text-foreground hover:underline inline-flex items-center text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="Contact Halden support">
              <svg className="lucide lucide-life-buoy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m4.93 4.93 4.24 4.24"></path>
                <path d="m14.83 9.17 4.24-4.24"></path>
                <path d="m14.83 14.83 4.24 4.24"></path>
                <path d="m9.17 14.83-4.24 4.24"></path>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              {"Need help with this order?"}
            </a>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
