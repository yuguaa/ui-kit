import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Ecommerce checkout
      </h1>
      <div className="flex flex-col gap-6 lg:px-8 max-w-5xl mx-auto px-4 py-6 sm:px-6 w-full">
        <header className="flex flex-col gap-5">
          <div className="min-w-0">
            <nav className="flex flex-wrap gap-1.5 items-center mb-2 text-muted-foreground text-sm" aria-label="Breadcrumb">
              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                Store
              </a>
              <svg className="lucide lucide-chevron-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                Bag
              </a>
              <svg className="lucide lucide-chevron-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="text-foreground">
                Checkout
              </span>
            </nav>
            <h1 className="font-semibold sm:text-2xl text-xl tracking-tight">
              Checkout
            </h1>
          </div>
          <div className="flex flex-col gap-2 min-w-0">
            <Stepper className="max-w-3xl mx-auto" role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Checkout steps">
              <StepperNav className="items-center justify-center mx-auto w-full" data-state="1" data-orientation="horizontal">
                <StepperItem className="min-w-0 not-last:flex-none relative sm:not-last:flex-1" data-state="active">
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-2 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="-1" data-state="active" loading="false" aria-label="Customer: Your contact details" extracted="1">
                    <StepperIndicator className="border data-[state=active]:bg-primary/10 data-[state=active]:border-primary/20 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground size-7" data-state="active">
                      <div className="absolute">
                        1
                      </div>
                    </StepperIndicator>
                    <StepperTitle className="hidden sm:block text-foreground text-xs truncate" data-state="active">
                      Customer
                    </StepperTitle>
                  </StepperTrigger>
                  <StepperSeparator className="bg-border flex-none group-data-[state=completed]/step:bg-primary mx-2 sm:w-auto w-8" data-state="active"></StepperSeparator>
                </StepperItem>
                <StepperItem className="min-w-0 not-last:flex-none relative sm:not-last:flex-1" data-state="inactive">
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-2 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false" aria-label="Delivery: Where and how to ship">
                    <StepperIndicator className="border data-[state=active]:bg-primary/10 data-[state=active]:border-primary/20 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground size-7" data-state="inactive">
                      <div className="absolute">
                        2
                      </div>
                    </StepperIndicator>
                    <StepperTitle className="hidden sm:block text-foreground text-xs truncate" data-state="inactive">
                      Delivery
                    </StepperTitle>
                  </StepperTrigger>
                  <StepperSeparator className="bg-border flex-none group-data-[state=completed]/step:bg-primary mx-2 sm:w-auto w-8" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem className="min-w-0 not-last:flex-none relative sm:not-last:flex-1" data-state="inactive">
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-2 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false" aria-label="Payment: How you want to pay">
                    <StepperIndicator className="border data-[state=active]:bg-primary/10 data-[state=active]:border-primary/20 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground size-7" data-state="inactive">
                      <div className="absolute">
                        3
                      </div>
                    </StepperIndicator>
                    <StepperTitle className="hidden sm:block text-foreground text-xs truncate" data-state="inactive">
                      Payment
                    </StepperTitle>
                  </StepperTrigger>
                  <StepperSeparator className="bg-border flex-none group-data-[state=completed]/step:bg-primary mx-2 sm:w-auto w-8" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem className="min-w-0 not-last:flex-none relative sm:not-last:flex-1" data-state="inactive">
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-2 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false" aria-label="Review: Confirm and place order">
                    <StepperIndicator className="border data-[state=active]:bg-primary/10 data-[state=active]:border-primary/20 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground size-7" data-state="inactive">
                      <div className="absolute">
                        4
                      </div>
                    </StepperIndicator>
                    <StepperTitle className="hidden sm:block text-foreground text-xs truncate" data-state="inactive">
                      Review
                    </StepperTitle>
                  </StepperTrigger>
                </StepperItem>
              </StepperNav>
            </Stepper>
            <p className="sm:hidden text-center text-muted-foreground text-xs">
              Step 1 of 4: Customer
            </p>
          </div>
        </header>
        <form className="gap-7 grid lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start min-w-0" id="checkout-2-form" aria-label="Ecommerce checkout">
          <div className="min-w-0">
            <div className="mb-5">
              <div className="min-w-0">
                <h2 className="font-semibold text-base">
                  Customer
                </h2>
                <p className="leading-5 mt-0.5 text-muted-foreground text-sm">
                  Your contact details
                </p>
              </div>
            </div>
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                Checkout Steps
              </FieldLegend>
              <FieldDescription className="sr-only">
                Enter customer details, choose delivery, select payment, and review the order.
              </FieldDescription>
              <div className="flex flex-col min-w-0" style={{opacity: "1", transform: "none"}}>
                <section className="flex flex-col gap-5 min-w-0" aria-labelledby="checkout-2-contact-title">
                  <h2 className="sr-only" id="checkout-2-contact-title">
                    Customer Details
                  </h2>
                  <FieldSet className="gap-0">
                    <FieldLegend className="sr-only" variant="legend">
                      Customer information
                    </FieldLegend>
                    <FieldGroup className="gap-3 grid sm:grid-cols-2">
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-2-first-name">
                          First Name
                        </FieldLabel>
                        <Input id="checkout-2-first-name" autoComplete="given-name" aria-invalid="false" value="Morgan"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-2-last-name">
                          Last Name
                        </FieldLabel>
                        <Input id="checkout-2-last-name" autoComplete="family-name" aria-invalid="false" value="Lee"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-2-email">
                          Email
                        </FieldLabel>
                        <Input id="checkout-2-email" autoComplete="email" aria-invalid="false" type="email" value="morgan.lee@example.com"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-2-phone">
                          Phone
                        </FieldLabel>
                        <Input id="checkout-2-phone" autoComplete="tel" value="(415) 555-0148"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-2-country">
                          Country
                        </FieldLabel>
                        <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="checkout-2-country" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                          <span className="flex gap-2 items-center min-w-0">
                            <img className="block h-3 object-cover rounded-xs shrink-0 w-4" alt="" width="16" height="12" loading="eager" src="https://flagcdn.com/w40/us.png" />
                            <span className="truncate">
                              United States
                            </span>
                          </span>
                          <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </ComboboxTrigger>
                        <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="United States" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  <Field className="gap-3 items-start" role="group" data-orientation="horizontal">
                    <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-labelledby="checkout-2-create-account-label"></Checkbox>
                    <input id="checkout-2-create-account" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldContent className="gap-1">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-2-create-account" id="checkout-2-create-account-label">
                        Create an account
                      </FieldLabel>
                      <FieldDescription>
                        Save your details for faster checkout next time.
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                </section>
              </div>
            </FieldSet>
            <div className="border-t flex gap-3 items-center justify-end mt-7 pt-5">
              <Button type="submit" tabIndex="0">
                Continue
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
          <aside className="flex flex-col lg:sticky lg:top-6 min-w-0">
            <Card size="sm">
              <CardHeader>
                <CardTitle>
                  Order Summary
                </CardTitle>
                <CardAction>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                    2 items
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <ItemGroup className="gap-4" role="list">
                  <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                    <ItemMedia variant="image">
                      <Item className="bg-muted border flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                        <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Leather Biker Jacket">
                          <img className="absolute h-full inset-0 object-cover w-full" alt="Black leather biker jacket studio view" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=320&h=400&q=80" />
                        </a>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <div className="flex gap-2 items-start justify-between min-w-0">
                        <ItemTitle className="min-w-0 truncate">
                          <a className="block hover:text-primary hover:underline min-w-0 text-foreground transition-colors truncate underline-offset-4" href="#">
                            Leather Biker Jacket
                          </a>
                        </ItemTitle>
                        <span className="flex gap-1.5 items-baseline shrink-0">
                          <span className="font-medium tabular-nums text-sm">
                            $248.00
                          </span>
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemDescription className="flex gap-1.5 items-center min-w-0 overflow-hidden" aria-label="Black, M, quantity 1">
                          <span className="shrink-0">
                            Black
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            M
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            Qty 1
                          </span>
                        </ItemDescription>
                        <button className="hover:text-destructive hover:underline shrink-0 text-muted-foreground text-xs transition-colors underline-offset-4" type="button" aria-label="Remove Leather Biker Jacket">
                          Remove
                        </button>
                      </div>
                    </ItemContent>
                  </Item>
                  <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                    <ItemMedia variant="image">
                      <Item className="bg-muted border flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                        <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Ribbed Tank Set">
                          <img className="absolute h-full inset-0 object-cover w-full" alt="Ribbed tank set side studio view" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=320&h=400&q=80" />
                        </a>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <div className="flex gap-2 items-start justify-between min-w-0">
                        <ItemTitle className="min-w-0 truncate">
                          <a className="block hover:text-primary hover:underline min-w-0 text-foreground transition-colors truncate underline-offset-4" href="#">
                            Ribbed Tank Set
                          </a>
                        </ItemTitle>
                        <span className="flex gap-1.5 items-baseline shrink-0">
                          <span className="font-medium tabular-nums text-sm">
                            $86.00
                          </span>
                          <span className="line-through tabular-nums text-muted-foreground text-xs">
                            $118.00
                          </span>
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemDescription className="flex gap-1.5 items-center min-w-0 overflow-hidden" aria-label="Chalk, S, quantity 1">
                          <span className="shrink-0">
                            Chalk
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            S
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            Qty 1
                          </span>
                        </ItemDescription>
                        <button className="hover:text-destructive hover:underline shrink-0 text-muted-foreground text-xs transition-colors underline-offset-4" type="button" aria-label="Remove Ribbed Tank Set">
                          Remove
                        </button>
                      </div>
                    </ItemContent>
                  </Item>
                </ItemGroup>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-2-promo">
                    Promo Code
                  </FieldLabel>
                  <InputGroup role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                        <svg className="lucide lucide-tag size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                      </span>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="checkout-2-promo" placeholder="Enter code" aria-invalid="false" value="SPRING15" />
                    <InputGroupAddon role="group" data-align="inline-end">
                      <Button type="button" tabIndex="0">
                        Apply
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-3 items-center justify-between min-w-0 text-sm">
                    <span className="text-muted-foreground truncate">
                      Subtotal
                    </span>
                    <span className="shrink-0 tabular-nums">
                      $334.00
                    </span>
                  </div>
                  <div className="flex gap-3 items-center justify-between min-w-0 text-sm">
                    <span className="text-muted-foreground truncate">
                      Delivery
                    </span>
                    <span className="shrink-0 tabular-nums">
                      $12.00
                    </span>
                  </div>
                  <div className="flex gap-3 items-center justify-between min-w-0 text-sm">
                    <span className="text-muted-foreground truncate">
                      Tax
                    </span>
                    <span className="shrink-0 tabular-nums">
                      $30.28
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t justify-between">
                <span className="font-medium">
                  Total
                </span>
                <span className="font-semibold tabular-nums text-lg">
                  $376.28
                </span>
              </CardFooter>
            </Card>
          </aside>
        </form>
        <section className="border-t pt-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2 items-center justify-center text-muted-foreground text-sm">
            <span className="flex gap-1.5 items-center">
              <svg className="lucide lucide-lock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Secure checkout
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="flex gap-1.5 items-center">
              <svg className="lucide lucide-rotate-ccw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              14-day returns
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="flex gap-1.5 items-center">
              <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              Free shipping over $150
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}
