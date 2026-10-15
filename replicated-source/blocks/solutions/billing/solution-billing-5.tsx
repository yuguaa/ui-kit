import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
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
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <div className="flex justify-center max-w-[1320px] md:p-4 mx-auto p-3 w-full">
        <form className="max-w-4xl w-full" id="solution-billing-5-invoice-builder-form" aria-label="Invoice builder wizard">
          <Card className="gap-0 p-0 w-full" size="default">
            <StepperItem>
            <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
              <CardHeader className="border-b gap-x-4 gap-y-1 px-5 py-4 sm:px-6">
                <CardTitle className="leading-5">
                  {"New Invoice"}
                </CardTitle>
                <CardDescription className="leading-5 max-w-[34rem]">
                  {"Billable account and invoice reference."}
                </CardDescription>
                <CardAction className="pl-3 self-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Invoice status: Draft INV-20437">
                    <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                    {"Draft INV-20437"}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-6 px-5 py-5 sm:px-6 sm:py-6">
                <div className="overflow-x-auto overflow-y-hidden py-4" data-stepper-scroll="true">
                  <Stepper>
                  <StepperNav className="items-start min-w-full" data-state="1" data-orientation="horizontal">
                    <Stepper>
                    <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="active">
                      <Stepper>
                      <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false" aria-label="Customer" extracted="1">
                        <Stepper>
                        <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                          <div className="absolute">
                            {"1"}
                          </div>
                        </StepperIndicator>
                        </Stepper>
                        <Stepper>
                        <StepperTitle className="leading-tight max-w-20 sm:max-w-full text-center whitespace-normal" data-state="active">
                          {"Customer"}
                        </StepperTitle>
                        </Stepper>
                      </StepperTrigger>
                      </Stepper>
                      <StepperSeparator className="absolute flex-none group-data-[state=completed]/step:bg-primary left-[calc(50%+1.125rem)] m-0 top-3 w-[calc(100%-2.25rem)]" data-state="active"></StepperSeparator>
                    </StepperItem>
                    </Stepper>
                    <Stepper>
                    <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="inactive">
                      <Stepper>
                      <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false" aria-label="Line Items">
                        <Stepper>
                        <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                          <div className="absolute">
                            {"2"}
                          </div>
                        </StepperIndicator>
                        </Stepper>
                        <Stepper>
                        <StepperTitle className="leading-tight max-w-20 sm:max-w-full text-center whitespace-normal" data-state="inactive">
                          {"Line Items"}
                        </StepperTitle>
                        </Stepper>
                      </StepperTrigger>
                      </Stepper>
                      <StepperSeparator className="absolute flex-none group-data-[state=completed]/step:bg-primary left-[calc(50%+1.125rem)] m-0 top-3 w-[calc(100%-2.25rem)]" data-state="inactive"></StepperSeparator>
                    </StepperItem>
                    </Stepper>
                    <Stepper>
                    <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="inactive">
                      <Stepper>
                      <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false" aria-label="Tax And Discount">
                        <Stepper>
                        <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                          <div className="absolute">
                            {"3"}
                          </div>
                        </StepperIndicator>
                        </Stepper>
                        <Stepper>
                        <StepperTitle className="leading-tight max-w-20 sm:max-w-full text-center whitespace-normal" data-state="inactive">
                          {"Tax And Discount"}
                        </StepperTitle>
                        </Stepper>
                      </StepperTrigger>
                      </Stepper>
                      <StepperSeparator className="absolute flex-none group-data-[state=completed]/step:bg-primary left-[calc(50%+1.125rem)] m-0 top-3 w-[calc(100%-2.25rem)]" data-state="inactive"></StepperSeparator>
                    </StepperItem>
                    </Stepper>
                    <Stepper>
                    <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="inactive">
                      <Stepper>
                      <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false" aria-label="Review And Send">
                        <Stepper>
                        <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                          <div className="absolute">
                            {"4"}
                          </div>
                        </StepperIndicator>
                        </Stepper>
                        <Stepper>
                        <StepperTitle className="leading-tight max-w-20 sm:max-w-full text-center whitespace-normal" data-state="inactive">
                          {"Review And Send"}
                        </StepperTitle>
                        </Stepper>
                      </StepperTrigger>
                      </Stepper>
                    </StepperItem>
                    </Stepper>
                  </StepperNav>
                  </Stepper>
                </div>
                <FieldSet className="gap-0">
                  <FieldLegend className="sr-only" variant="legend">
                    {"Invoice builder wizard"}
                  </FieldLegend>
                  <FieldDescription className="sr-only">
                    {"Build an invoice with customer, line items, tax and discount, then review and send."}
                  </FieldDescription>
                  <Stepper>
                  <StepperPanel data-state="1">
                    <Stepper>
                    <StepperContent data-state="1">
                      <div className="flex flex-col gap-7 min-w-0">
                        <section className="flex flex-col gap-4 sm:gap-5">
                          <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <h2 className="font-semibold leading-6 text-base text-foreground">
                                  {"Customer"}
                                </h2>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Required"}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground text-sm">
                                {"Billable account and invoice reference."}
                              </p>
                            </div>
                          </div>
                          <FieldGroup className="gap-4 grid md:grid-cols-2">
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-customer">
                                {"Customer"}
                              </FieldLabel>
                              <InputGroup className="cn-combobox-input" role="group">
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="solution-billing-5-customer" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Find a customer account..." type="text" value="Northwind Retail" />
                                <InputGroupAddon role="group" data-align="inline-end">
                                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                    <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-clear cn-input-group-button cn-input-group-button-size-icon-xs disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" data-size="icon-xs" data-visible="">
                                    <svg className="cn-combobox-clear-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                                      <path d="M18 6 6 18"></path>
                                      <path d="m6 6 12 12"></path>
                                    </svg>
                                  </button>
                                </InputGroupAddon>
                              </InputGroup>
                              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="Northwind Retail" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-tax-id">
                                {"Tax ID"}
                              </FieldLabel>
                              <InputGroup role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                    <path d="M10 12h4"></path>
                                    <path d="M10 8h4"></path>
                                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                  </svg>
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="solution-billing-5-tax-id" placeholder="Select a customer first" readOnly value="US-88-2947135" />
                              </InputGroup>
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-invoice-number">
                                {"Invoice Number"}
                              </FieldLabel>
                              <InputGroup role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  <svg className="lucide lucide-hash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                                    <line x1="4" x2="20" y1="9" y2="9"></line>
                                    <line x1="4" x2="20" y1="15" y2="15"></line>
                                    <line x1="10" x2="8" y1="3" y2="21"></line>
                                    <line x1="16" x2="14" y1="3" y2="21"></line>
                                  </svg>
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="solution-billing-5-invoice-number" value="INV-20437" />
                              </InputGroup>
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-po-number">
                                {"PO Reference"}
                              </FieldLabel>
                              <Input id="solution-billing-5-po-number" value="PO-4471"></Input>
                            </Field>
                          </FieldGroup>
                        </section>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <section className="flex flex-col gap-4 sm:gap-5">
                          <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="flex flex-wrap gap-2 items-center">
                                <h2 className="font-semibold leading-6 text-base text-foreground">
                                  {"Terms"}
                                </h2>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Net 14"}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground text-sm">
                                {"Dates, currency, and collection method."}
                              </p>
                            </div>
                          </div>
                          <FieldGroup className="gap-4 grid md:grid-cols-2">
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-issue-date">
                                {"Issue Date"}
                              </FieldLabel>
                              <Popover>
                              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="solution-billing-5-issue-date" aria-label="Choose issue date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                                <span className="truncate">
                                  {"Jun 16, 2026"}
                                </span>
                                <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-end" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                              </PopoverTrigger>
                              </Popover>
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-due-date">
                                {"Due Date"}
                              </FieldLabel>
                              <Popover>
                              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="solution-billing-5-due-date" aria-label="Choose due date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                                <span className="truncate">
                                  {"Jun 30, 2026"}
                                </span>
                                <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-end" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                              </PopoverTrigger>
                              </Popover>
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-currency">
                                {"Currency"}
                              </FieldLabel>
                              <Select>
                              <SelectTrigger className="w-full" type="button" tabIndex="0" id="solution-billing-5-currency" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  {"USD"}
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_c_-hidden-input" tabIndex="-1" aria-hidden="true" value="usd" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-payment-terms">
                                {"Payment Terms"}
                              </FieldLabel>
                              <Select>
                              <SelectTrigger className="w-full" type="button" tabIndex="0" id="solution-billing-5-payment-terms" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  {"Net 14"}
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_f_-hidden-input" tabIndex="-1" aria-hidden="true" value="net-14" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-collection-method">
                                {"Collection"}
                              </FieldLabel>
                              <Select>
                              <SelectTrigger className="w-full" type="button" tabIndex="0" id="solution-billing-5-collection-method" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  {"ACH transfer"}
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_i_-hidden-input" tabIndex="-1" aria-hidden="true" value="ach" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                            <Field role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="solution-billing-5-billing-address">
                                {"Billing Address"}
                              </FieldLabel>
                              <Input id="solution-billing-5-billing-address" placeholder="Select a customer first" readOnly value="14 Warren Street, Suite 620, New York, NY"></Input>
                            </Field>
                          </FieldGroup>
                        </section>
                      </div>
                    </StepperContent>
                    </Stepper>
                  </StepperPanel>
                  </Stepper>
                </FieldSet>
              </CardContent>
              <CardFooter className="border-t gap-3 justify-between px-5 py-4 sm:px-6">
                <span className="h-9 hidden sm:block w-28" aria-hidden="true"></span>
                <div className="flex gap-2 items-center justify-end ml-auto shrink-0">
                  <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
                    {"Save draft"}
                  </Button>
                  <Button className="min-w-0 px-3 sm:min-w-32 sm:px-4" type="submit" tabIndex="0">
                    {"Next step"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </CardFooter>
            </Stepper>
            </StepperItem>
          </Card>
        </form>
      </div>
    </div>
  )
}
