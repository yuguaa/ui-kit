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
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemActions,
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
        {"Ecommerce checkout"}
      </h1>
      <div className="flex flex-col gap-0 lg:px-8 max-w-6xl mx-auto px-4 py-6 sm:px-6 w-full">
        <header className="flex flex-col">
          <div className="flex flex-col gap-3 min-w-0">
            <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-center sm:justify-between">
              <nav className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-sm" aria-label="Breadcrumb">
                <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Store"}
                </a>
                <svg className="lucide lucide-chevron-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Bag"}
                </a>
                <svg className="lucide lucide-chevron-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="text-foreground">
                  {"Checkout"}
                </span>
              </nav>
              <Button className="w-fit" type="button" tabIndex="0" extracted="1">
                {"Continue Shopping"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
            <div className="max-w-xl">
              <h1 className="font-semibold sm:text-2xl text-xl tracking-tight">
                {"Checkout"}
              </h1>
              <p className="leading-5 mt-0.5 text-muted-foreground text-sm">
                {"Confirm shipping, payment, and order details."}
              </p>
            </div>
          </div>
          <div className="py-6 w-full">
            <div className="hidden sm:block">
              <StepperItem>
              <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Checkout steps">
                <Stepper>
                <StepperNav className="items-center" data-state="1" data-orientation="horizontal">
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="active">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="-1" data-state="active" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                        <div className="absolute">
                          {"1"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="active">
                        {"Customer"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="active"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"2"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="inactive">
                        {"Delivery"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"3"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="inactive">
                        {"Payment"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"4"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="inactive">
                        {"Review"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                </StepperNav>
                </Stepper>
              </Stepper>
              </StepperItem>
            </div>
            <div className="sm:hidden">
              <StepperItem>
              <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Checkout steps">
                <Stepper>
                <StepperNav className="items-center" data-state="1" data-orientation="horizontal">
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="active">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="-1" data-state="active" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                        <div className="absolute">
                          {"1"}
                          <span className="sr-only">
                            {"Customer"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="active"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"2"}
                          <span className="sr-only">
                            {"Delivery"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"3"}
                          <span className="sr-only">
                            {"Payment"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"4"}
                          <span className="sr-only">
                            {"Review"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                </StepperNav>
                </Stepper>
              </Stepper>
              </StepperItem>
            </div>
          </div>
        </header>
        <form className="gap-8 grid lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-start min-w-0" id="checkout-1-form" aria-label="Ecommerce checkout">
          <div className="min-w-0">
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                {"Checkout Steps"}
              </FieldLegend>
              <FieldDescription className="sr-only">
                {"Enter customer details, choose delivery, select payment, and review the order."}
              </FieldDescription>
              <div className="flex flex-col gap-7 min-w-0" style={{opacity: "1", transform: "none"}}>
                <section className="flex flex-col gap-5 min-w-0" aria-labelledby="checkout-1-contact-title">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <h2 className="font-semibold text-base" id="checkout-1-contact-title">
                      {"Customer Details"}
                    </h2>
                    <p className="leading-5 max-w-xl text-muted-foreground text-sm">
                      {"Use details that can receive receipts and shipment changes."}
                    </p>
                  </div>
                  <FieldSet className="gap-0">
                    <FieldLegend className="sr-only" variant="legend">
                      {"Customer information"}
                    </FieldLegend>
                    <FieldDescription className="sr-only">
                      {"Enter the buyer name, email, phone, and country."}
                    </FieldDescription>
                    <FieldGroup className="gap-4 grid sm:grid-cols-2">
                      <Field role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-first-name">
                          {"First Name"}
                        </FieldLabel>
                        <Input id="checkout-1-first-name" autoComplete="given-name" aria-invalid="false" value="Morgan"></Input>
                      </Field>
                      <Field role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-last-name">
                          {"Last Name"}
                        </FieldLabel>
                        <Input id="checkout-1-last-name" autoComplete="family-name" aria-invalid="false" value="Lee"></Input>
                      </Field>
                      <Field role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-email">
                          {"Email"}
                        </FieldLabel>
                        <Input id="checkout-1-email" autoComplete="email" aria-invalid="false" type="email" value="morgan.lee@example.com"></Input>
                        <FieldDescription>
                          {"Receipts and shipment changes are sent here."}
                        </FieldDescription>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-phone">
                          {"Phone"}
                        </FieldLabel>
                        <Input id="checkout-1-phone" autoComplete="tel" value="(415) 555-0148"></Input>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-country">
                          {"Country"}
                        </FieldLabel>
                        <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="checkout-1-country" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                          <span className="flex gap-2 items-center min-w-0">
                            <img className="block h-3 object-cover rounded-xs shrink-0 w-4" alt="" width="16" height="12" loading="eager" src="https://flagcdn.com/w40/us.png" />
                            <span className="truncate">
                              {"United States"}
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
                  <FieldSet className="border-t gap-4 pt-5" aria-labelledby="checkout-1-account-title">
                    <FieldLegend className="sr-only" variant="legend">
                      {"Account options"}
                    </FieldLegend>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h2 className="font-semibold text-base" id="checkout-1-account-title">
                        {"Account Options"}
                      </h2>
                      <p className="leading-5 max-w-xl text-muted-foreground text-sm">
                        {"Sign in or create an account after checkout."}
                      </p>
                    </div>
                    <ItemGroup className="gap-3 grid items-start xl:grid-cols-2" role="list">
                      <Item className="gap-0 items-start p-4 sm:p-5" variant="outline" size="sm" role="listitem">
                        <ItemContent className="gap-4 min-w-0">
                          <div className="min-w-0">
                            <ItemTitle>
                              {"Returning Customer"}
                            </ItemTitle>
                            <ItemDescription>
                              {"Use saved checkout details."}
                            </ItemDescription>
                          </div>
                          <FieldGroup className="gap-3">
                            <Field className="gap-2" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-login-email">
                                {"Email"}
                              </FieldLabel>
                              <Input id="checkout-1-login-email" autoComplete="email" placeholder="you@example.com" type="email" value="morgan.lee@example.com"></Input>
                            </Field>
                            <Field className="gap-2" role="group" data-orientation="vertical">
                              <div className="flex gap-3 items-center justify-between">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-login-password">
                                  {"Password"}
                                </FieldLabel>
                                <Button className="font-normal h-auto hover:text-primary hover:underline p-0 text-xs underline-offset-4" type="button" tabIndex="0">
                                  {"Reset Password"}
                                </Button>
                              </div>
                              <Input id="checkout-1-login-password" autoComplete="current-password" placeholder="Enter password" type="password" value=""></Input>
                            </Field>
                          </FieldGroup>
                          <Button className="w-full" type="button" tabIndex="0">
                            {"Sign In"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </ItemContent>
                      </Item>
                      <Item className="gap-0 items-start p-4 sm:p-5" variant="outline" size="sm" role="listitem">
                        <ItemContent className="gap-4 min-w-0">
                          <div className="min-w-0">
                            <ItemTitle>
                              {"Create Account"}
                            </ItemTitle>
                            <ItemDescription>
                              {"Save details for next time."}
                            </ItemDescription>
                          </div>
                          <Field className="gap-3 items-start" role="group" data-orientation="horizontal">
                            <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_b_" aria-checked="false" aria-labelledby="checkout-1-create-account-label"></Checkbox>
                            <input id="checkout-1-create-account" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldContent className="gap-1">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-create-account" id="checkout-1-create-account-label">
                                {"Create Account After Checkout"}
                              </FieldLabel>
                              <FieldDescription>
                                {"Uses morgan.lee@example.com."}
                              </FieldDescription>
                            </FieldContent>
                          </Field>
                          <FieldGroup className="gap-3">
                            <Field className="gap-2" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-create-password">
                                {"New Password"}
                              </FieldLabel>
                              <Input id="checkout-1-create-password" autoComplete="new-password" placeholder="8+ characters" type="password" value=""></Input>
                            </Field>
                            <Field className="gap-3 items-start" role="group" data-orientation="horizontal">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="false" aria-labelledby="checkout-1-email-offers-label"></Checkbox>
                              <input id="checkout-1-email-offers" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldContent className="gap-1">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-email-offers" id="checkout-1-email-offers-label">
                                  {"Email Order Perks"}
                                </FieldLabel>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                          <Button className="w-full" type="button" tabIndex="0">
                            {"Create With Order"}
                          </Button>
                        </ItemContent>
                      </Item>
                    </ItemGroup>
                  </FieldSet>
                </section>
              </div>
            </FieldSet>
            <div className="border-t flex gap-3 items-center justify-end mt-7 pt-5">
              <Button type="submit" tabIndex="0">
                {"Continue"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
          <aside className="border-t flex flex-col gap-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0 lg:sticky lg:top-6 min-w-0 pt-6" aria-label="Order summary">
            <div className="flex gap-4 items-start justify-between">
              <div className="min-w-0">
                <h2 className="font-semibold text-base">
                  {"Order Summary"}
                </h2>
                <p className="leading-5 mt-0.5 text-muted-foreground text-sm">
                  {"2 items shipping to Home"}
                </p>
              </div>
            </div>
            <ItemGroup className="gap-4" role="list">
              <Item className="gap-3 group/product items-start px-0 py-0" variant="default" size="default" role="listitem">
                <ItemMedia variant="image">
                  <Item className="bg-muted border flex-nowrap overflow-hidden p-0 relative size-16 w-auto" variant="default" size="default">
                    <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Leather Biker Jacket">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Black leather biker jacket studio view" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=320&h=400&q=80" />
                    </a>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full truncate">
                    <a className="block group-hover/product:text-primary group-hover/product:underline hover:text-primary hover:underline min-w-0 text-foreground transition-colors truncate underline-offset-4" href="#">
                      {"Leather Biker Jacket"}
                    </a>
                  </ItemTitle>
                  <ItemDescription className="flex gap-1.5 items-center min-w-0 overflow-hidden" aria-label="Black, M, quantity 1">
                    <span className="shrink-0">
                      {"Black"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      {"M"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      {"Qty 1"}
                    </span>
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end shrink-0">
                  <span className="font-medium tabular-nums text-sm">
                    {"$248.00"}
                  </span>
                  <Button type="button" tabIndex="0" aria-label="Remove Leather Biker Jacket">
                    <svg className="lucide lucide-trash-2 lucide-trash2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
              <Item className="gap-3 group/product items-start px-0 py-0" variant="default" size="default" role="listitem">
                <ItemMedia variant="image">
                  <Item className="bg-muted border flex-nowrap overflow-hidden p-0 relative size-16 w-auto" variant="default" size="default">
                    <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Ribbed Tank Set">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Ribbed tank set side studio view" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=320&h=400&q=80" />
                    </a>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full truncate">
                    <a className="block group-hover/product:text-primary group-hover/product:underline hover:text-primary hover:underline min-w-0 text-foreground transition-colors truncate underline-offset-4" href="#">
                      {"Ribbed Tank Set"}
                    </a>
                  </ItemTitle>
                  <ItemDescription className="flex gap-1.5 items-center min-w-0 overflow-hidden" aria-label="Chalk, S, quantity 1">
                    <span className="shrink-0">
                      {"Chalk"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      {"S"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      {"Qty 1"}
                    </span>
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end shrink-0">
                  <span className="font-medium tabular-nums text-sm">
                    {"$86.00"}
                  </span>
                  <span className="line-through tabular-nums text-muted-foreground text-xs">
                    {"$118.00"}
                  </span>
                  <Button type="button" tabIndex="0" aria-label="Remove Ribbed Tank Set">
                    <svg className="lucide lucide-trash-2 lucide-trash2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-1-promo">
                {"Promo Code"}
              </FieldLabel>
              <div className="flex gap-2">
                <Input id="checkout-1-promo" aria-invalid="false" value="SPRING15"></Input>
                <Button type="button" tabIndex="0">
                  {"Apply"}
                </Button>
              </div>
              <FieldDescription>
                <strong>
                  {"SPRING15"}
                </strong>
                {"applied for $18.00 off."}
              </FieldDescription>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <ItemGroup className="gap-0" role="list">
              <Item className="gap-3 min-h-7 px-0 py-1" variant="default" size="xs" role="listitem">
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-normal leading-5 text-sm">
                    {"Subtotal"}
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="shrink-0">
                  <span className="font-medium leading-5 tabular-nums text-sm">
                    {"$334.00"}
                  </span>
                </ItemActions>
              </Item>
              <Item className="gap-3 min-h-7 px-0 py-1" variant="default" size="xs" role="listitem">
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-normal leading-5 text-sm">
                    {"Delivery"}
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="shrink-0">
                  <span className="font-medium leading-5 tabular-nums text-sm">
                    {"$12.00"}
                  </span>
                </ItemActions>
              </Item>
              <Item className="gap-3 min-h-7 px-0 py-1" variant="default" size="xs" role="listitem">
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-normal leading-5 text-sm">
                    {"Estimated Tax"}
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="shrink-0">
                  <span className="font-medium leading-5 tabular-nums text-sm">
                    {"$28.70"}
                  </span>
                </ItemActions>
              </Item>
              <Item className="gap-3 min-h-7 px-0 py-1" variant="default" size="xs" role="listitem">
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-semibold leading-5 text-sm text-success">
                    {"Discount"}
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="shrink-0">
                  <span className="font-semibold leading-5 tabular-nums text-sm text-success">
                    {"-$18.00"}
                  </span>
                </ItemActions>
              </Item>
            </ItemGroup>
            <ItemGroup role="list">
              <Item className="bg-background border-dashed flex-col gap-3 items-stretch px-4 py-4" variant="outline" size="default" role="listitem">
                <div className="flex gap-4 items-start justify-between min-w-0">
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle className="font-semibold text-base">
                      {"Total"}
                    </ItemTitle>
                    <ItemDescription>
                      {"Delivery, promo, and tax included."}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="shrink-0">
                    <span className="font-semibold leading-none tabular-nums text-2xl">
                      {"$356.70"}
                    </span>
                  </ItemActions>
                </div>
                <div className="border-dashed border-t flex gap-3 items-center justify-between min-w-0 pt-3">
                  <span className="text-muted-foreground text-xs truncate">
                    {"Charged after review"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Ready to place"}
                  </Badge>
                </div>
              </Item>
            </ItemGroup>
          </aside>
        </form>
      </div>
    </main>
  )
}
