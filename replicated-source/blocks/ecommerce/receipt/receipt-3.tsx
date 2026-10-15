import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-md md:py-12 mx-auto px-4 py-8 w-full" aria-labelledby="receipt-heading">
        <header className="flex gap-3 items-center justify-between mb-4">
          <span className="font-semibold text-[0.6875rem] text-muted-foreground tracking-[0.22em] uppercase" id="receipt-heading">
            Receipt
          </span>
          <div className="flex gap-1.5 items-center">
            <Button type="button" tabIndex="0" aria-label="Download receipt RCT-2026-018042 as PDF" extracted="1">
              <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              Download
            </Button>
            <Button type="button" tabIndex="0" aria-label="Email receipt RCT-2026-018042">
              <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
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
          <CardContent className="flex flex-col font-mono gap-3 p-6 text-sm">
            <div className="flex flex-col gap-3 items-center">
              <Item className="bg-primary p-0 size-10 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="size-[1.125rem]" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-1.5 items-center">
                <p className="font-bold text-foreground text-sm tracking-[0.22em] uppercase">
                  Order Receipt
                </p>
                <p className="text-[0.6875rem] text-muted-foreground tracking-[0.18em] uppercase">
                  NeUI · neui.io
                </p>
              </div>
            </div>
            <hr className="border-border/60 border-dashed border-t" />
            <dl className="flex flex-col gap-1.5 text-xs">
              <div className="flex gap-3 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  Receipt #
                </dt>
                <dd className="tabular-nums text-foreground">
                  RCT-2026-018042
                </dd>
              </div>
              <div className="flex gap-3 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  Order #
                </dt>
                <dd className="tabular-nums text-foreground">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#" aria-label="View order HLD-2026-18042">
                    HLD-2026-18042
                  </a>
                </dd>
              </div>
              <div className="flex gap-3 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  Date
                </dt>
                <dd className="tabular-nums text-foreground">
                  May 18, 2026
                </dd>
              </div>
              <div className="flex gap-3 items-baseline justify-between">
                <dt className="text-muted-foreground">
                  Customer
                </dt>
                <dd className="tabular-nums text-foreground">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="mailto:jordan@example.com" aria-label="Email customer jordan@example.com">
                    jordan@example.com
                  </a>
                </dd>
              </div>
            </dl>
            <hr className="border-border/60 border-dashed border-t" />
            <div className="flex flex-col gap-3.5" role="list" aria-label="Ordered items">
              <article className="flex flex-col gap-0.5 min-w-0" role="listitem">
                <div className="flex gap-3 items-baseline justify-between">
                  <h3 className="font-semibold min-w-0 text-foreground text-sm truncate">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                      Field Shell Jacket
                    </a>
                  </h3>
                  <span className="font-semibold shrink-0 tabular-nums text-foreground text-sm">
                    $185.00
                  </span>
                </div>
                <p className="leading-snug tabular-nums text-muted-foreground text-xs">
                  Olive · M · 1 × $185.00
                </p>
              </article>
              <article className="flex flex-col gap-0.5 min-w-0" role="listitem">
                <div className="flex gap-3 items-baseline justify-between">
                  <h3 className="font-semibold min-w-0 text-foreground text-sm truncate">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                      Compass Down Vest
                    </a>
                  </h3>
                  <span className="font-semibold shrink-0 tabular-nums text-foreground text-sm">
                    $228.00
                  </span>
                </div>
                <p className="leading-snug tabular-nums text-muted-foreground text-xs">
                  Slate · M · 1 × $228.00
                </p>
              </article>
              <article className="flex flex-col gap-0.5 min-w-0" role="listitem">
                <div className="flex gap-3 items-baseline justify-between">
                  <h3 className="font-semibold min-w-0 text-foreground text-sm truncate">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                      Linen Field Shirt
                    </a>
                  </h3>
                  <span className="font-semibold shrink-0 tabular-nums text-foreground text-sm">
                    $256.00
                  </span>
                </div>
                <p className="leading-snug tabular-nums text-muted-foreground text-xs">
                  Sand · M · 2 × $128.00
                </p>
              </article>
            </div>
            <hr className="border-border/60 border-dashed border-t" />
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-3 items-baseline justify-between text-xs">
                <span className="text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  $669.00
                </span>
              </div>
              <div className="flex gap-3 items-baseline justify-between text-xs">
                <span className="text-muted-foreground">
                  Shipping
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  $12.00
                </span>
              </div>
              <div className="flex gap-3 items-baseline justify-between text-xs">
                <span className="text-muted-foreground">
                  Discount (WELCOME15)
                </span>
                <span className="font-medium tabular-nums text-success">
                  -$100.35
                </span>
              </div>
              <div className="flex gap-3 items-baseline justify-between text-xs">
                <span className="text-muted-foreground">
                  Tax
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  $51.27
                </span>
              </div>
            </div>
            <div className="border-double border-foreground border-y-2 py-3">
              <div className="flex gap-3 items-baseline justify-between">
                <span className="font-bold text-base text-foreground tracking-[0.18em] uppercase">
                  Total
                </span>
                <span className="font-bold tabular-nums text-foreground text-lg">
                  $631.92
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[0.625rem] text-muted-foreground tracking-[0.22em] uppercase">
                Payment
              </p>
              <div className="flex flex-col gap-0.5 leading-snug text-xs">
                <p className="text-foreground">
                  Visa · 4242
                </p>
                <p className="text-muted-foreground text-xs">
                  Charged May 18, 2026 at 9:42 AM
                </p>
              </div>
            </div>
            <hr className="border-border/60 border-dashed border-t" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[0.625rem] text-muted-foreground tracking-[0.22em] uppercase">
                Ship To
              </p>
              <div className="flex flex-col gap-0.5 leading-snug text-xs">
                <address className="not-italic text-foreground">
                  <p>
                    Jordan Reeves
                  </p>
                  <p className="text-muted-foreground">
                    180 Bedford Avenue
                  </p>
                  <p className="text-muted-foreground">
                    Apt 4F
                  </p>
                  <p className="text-muted-foreground">
                    Brooklyn, NY 11211
                  </p>
                  <p className="text-muted-foreground">
                    United States
                  </p>
                </address>
              </div>
            </div>
            <hr className="border-border/60 border-dashed border-t" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[0.625rem] text-muted-foreground tracking-[0.22em] uppercase">
                Tracking
              </p>
              <div className="flex flex-col gap-0.5 leading-snug text-xs">
                <p className="break-all text-foreground">
                  1Z999AA10123456784
                </p>
                <p className="text-muted-foreground text-xs">
                  UPS Ground · Arrives May 22, 2026 to May 25, 2026
                </p>
                <a className="font-semibold gap-1 hover:text-primary hover:underline inline-flex items-center mt-1 text-foreground text-xs transition-colors underline-offset-4 w-fit" href="#" aria-label="Track order HLD-2026-18042">
                  Track Shipment
                  <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <hr className="border-border/60 border-dashed border-t" />
            <div className="flex flex-col gap-2 items-center pt-1 text-center">
              <p className="font-medium text-foreground text-sm">
                Thank you for shopping with NeUI.
              </p>
              <a className="hover:text-primary hover:underline text-muted-foreground text-xs tracking-wide transition-colors underline-offset-4" href="mailto:support@neui.io" aria-label="Email NeUI support at support@neui.io">
                support@neui.io
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
