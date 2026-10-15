import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-muted/25 flex items-center justify-center min-h-svh p-4 sm:p-6 w-full">
      <Card className="max-w-[880px] py-0 shadow-black/5 shadow-lg w-full" size="default">
        <div className="grid lg:grid-cols-2">
          <aside className="bg-muted/30 flex flex-col gap-6 lg:border-r lg:p-7 p-5 sm:p-6">
            <div className="flex gap-3 h-7 items-center">
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                <span className="sr-only">
                  {"Back to cart"}
                </span>
              </Button>
              <span className="bg-border h-4 shrink-0 w-px" aria-hidden="true"></span>
              <div className="flex gap-2.5 items-center">
                <div className="bg-foreground flex font-semibold items-center justify-center rounded-full size-7 text-background text-xs">
                  {"N"}
                </div>
                <span className="font-medium text-sm">
                  {"Northline Goods"}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-center justify-center">
              <a className="aspect-square bg-background block border group max-w-[220px] overflow-hidden relative rounded-xl shadow-sm w-full" href="#" aria-label="View Aero Wireless Headphones">
                <img className="absolute duration-300 group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Aero Wireless Headphones product photo" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=640&h=640&q=85" />
                <span className="absolute backdrop-blur-sm bg-background/95 font-medium px-2 py-0.5 right-2 ring-1 ring-border rounded-full tabular-nums text-[11px] text-foreground top-2">
                  {"Qty 1"}
                </span>
              </a>
              <div className="flex flex-col gap-1.5 items-center text-center">
                <a className="font-medium hover:text-primary hover:underline text-sm" href="#">
                  {"Aero Wireless Headphones"}
                </a>
                <p className="text-muted-foreground text-xs">
                  {"Graphite · Personal Audio"}
                </p>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 mt-0.5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                  <svg className="lucide lucide-truck" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                  {"Arrives Thu, May 16"}
                </Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex gap-4 items-baseline justify-between text-sm">
                  <span className="text-muted-foreground">
                    {"Subtotal"}
                  </span>
                  <span className="tabular-nums text-foreground">
                    {"$118.00"}
                  </span>
                </div>
                <div className="flex gap-4 items-baseline justify-between text-sm">
                  <span className="text-muted-foreground">
                    {"Delivery"}
                    <span className="font-normal ml-1.5 text-muted-foreground/80 text-xs">
                      {"FedEx 2-day"}
                    </span>
                  </span>
                  <span className="tabular-nums text-foreground">
                    {"$8.00"}
                  </span>
                </div>
                <div className="flex gap-4 items-baseline justify-between text-sm">
                  <span className="text-muted-foreground">
                    {"Estimated Tax"}
                  </span>
                  <span className="tabular-nums text-foreground">
                    {"$10.32"}
                  </span>
                </div>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex gap-4 items-baseline justify-between">
                <span className="font-medium text-foreground text-sm">
                  {"Total Due"}
                </span>
                <span className="font-semibold tabular-nums text-2xl text-foreground">
                  {"$136.32"}
                </span>
              </div>
            </div>
          </aside>
          <section className="flex items-center lg:p-8 p-5 sm:p-6">
            <div className="max-w-md mx-auto space-y-5 w-full">
              <div className="space-y-1.5">
                <p className="font-medium text-[11px] text-muted-foreground tracking-wider uppercase">
                  {"Express Checkout"}
                </p>
                <h1 className="font-semibold sm:text-2xl text-xl tracking-tight">
                  {"Confirm & Pay"}
                </h1>
                <p className="text-muted-foreground text-sm">
                  {"Saved details are ready. Confirm the security code to place your order."}
                </p>
              </div>
              <div className="bg-card border divide-y overflow-hidden rounded-xl">
                <div className="flex gap-3.5 items-center px-4 py-3">
                  <Item className="bg-muted p-0 size-9 text-muted-foreground" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[11px] text-muted-foreground tracking-wider uppercase">
                      {"Contact"}
                    </p>
                    <p className="font-medium text-foreground text-sm truncate">
                      {"riley.soto@example.com"}
                    </p>
                    <p className="text-muted-foreground text-xs truncate">
                      {"Receipt and tracking updates"}
                    </p>
                  </div>
                  <Button className="-mr-1.5 font-medium h-7 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                    {"Edit"}
                  </Button>
                </div>
                <div className="flex gap-3.5 items-center px-4 py-3">
                  <Item className="bg-muted p-0 size-9 text-muted-foreground" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-map-pin size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[11px] text-muted-foreground tracking-wider uppercase">
                      {"Deliver To"}
                    </p>
                    <p className="font-medium text-foreground text-sm truncate">
                      {"218 Ellis Street"}
                    </p>
                    <p className="text-muted-foreground text-xs truncate">
                      {"Oakland, CA 94607"}
                    </p>
                  </div>
                  <Button className="-mr-1.5 font-medium h-7 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                    {"Edit"}
                  </Button>
                </div>
                <div className="flex gap-3.5 items-center px-4 py-3">
                  <Item className="bg-muted p-0 size-9 text-muted-foreground" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-credit-card size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[11px] text-muted-foreground tracking-wider uppercase">
                      {"Pay With"}
                    </p>
                    <p className="font-medium text-foreground text-sm truncate">
                      {"Visa ending 1847"}
                    </p>
                    <p className="text-muted-foreground text-xs truncate">
                      {"Verified on this device"}
                    </p>
                  </div>
                  <Button className="-mr-1.5 font-medium h-7 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                    {"Edit"}
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2.5 items-end">
                  <Field className="gap-1.5 shrink-0 w-24" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-[11px] tracking-wider uppercase" htmlFor="checkout-4-cvv">
                      {"CVV"}
                    </FieldLabel>
                    <InputGroup role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground text-center tracking-widest w-full" id="checkout-4-cvv" placeholder="•••" inputmode="numeric" maxLength="4" autoComplete="cc-csc" aria-label="CVV for Visa ending 1847" title="3-digit security code on the back of your card" />
                    </InputGroup>
                  </Field>
                  <Button className="flex-1 gap-2" type="button" tabIndex="0">
                    <svg className="lucide lucide-lock-keyhole" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockKeyholeIcon" tabler="IconLock" hugeicons="LockKeyIcon" phosphor="LockKeyIcon" remixicon="RiLockLine" aria-hidden="true">
                      <circle cx="12" cy="16" r="1"></circle>
                      <rect x="3" y="10" width="18" height="12" rx="2"></rect>
                      <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                    </svg>
                    {"Pay $136.32"}
                  </Button>
                </div>
                <p className="text-center text-muted-foreground text-xs">
                  {"Charges Visa ending 1847. CVV is verified on this device."}
                </p>
              </div>
              <details className="[&_summary::-webkit-details-marker]:hidden bg-card border group overflow-hidden rounded-xl">
                <summary className="cursor-pointer flex focus-visible:ring-2 focus-visible:ring-ring gap-3 hover:bg-muted/40 items-center list-none outline-none px-4 py-3 transition-colors">
                  <Item className="bg-background border border-border p-0 size-9 text-muted-foreground" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <span className="flex flex-1 flex-col min-w-0">
                    <span className="font-medium text-foreground text-sm">
                      {"Use a different card"}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {"Pay this order with a new card instead"}
                    </span>
                  </span>
                  <svg className="duration-200 group-open:rotate-180 lucide lucide-chevron-down size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <form className="border-t pb-4 pt-4 px-4 space-y-3">
                  <FieldGroup className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-4-name">
                        {"Name on card"}
                      </FieldLabel>
                      <InputGroup role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="checkout-4-name" autoComplete="cc-name" value="Riley Soto" />
                      </InputGroup>
                    </Field>
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-4-expiry">
                        {"Expires"}
                      </FieldLabel>
                      <InputGroup role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="checkout-4-expiry" placeholder="MM / YY" inputmode="numeric" autoComplete="cc-exp" />
                      </InputGroup>
                    </Field>
                  </FieldGroup>
                  <Field className="gap-1.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-4-card">
                      {"Card number"}
                    </FieldLabel>
                    <InputGroup role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                          <span className="border font-semibold px-1.5 py-0.5 rounded-sm text-[0.625rem] text-foreground tracking-wide">
                            {"VISA"}
                          </span>
                        </span>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="checkout-4-card" placeholder="1234 1234 1234 1234" inputmode="numeric" autoComplete="cc-number" />
                    </InputGroup>
                  </Field>
                </form>
              </details>
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between text-xs">
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center">
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <svg className="lucide lucide-shield-check size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {"Encrypted checkout"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full size-1" aria-hidden="true"></span>
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <svg className="lucide lucide-rotate-ccw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                    </svg>
                    {"30-day returns"}
                  </span>
                </div>
                <a className="font-medium gap-1.5 hover:text-foreground hover:underline inline-flex items-center text-muted-foreground underline-offset-4" href="#">
                  {"Order policy"}
                  <svg className="lucide lucide-external-link size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </Card>
    </div>
  )
}
