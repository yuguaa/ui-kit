import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Invoice send wizard layout"}
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <header className="backdrop-blur bg-background/95 border-b border-border shrink-0 sticky top-0 z-20">
          <div className="flex gap-3 items-center justify-between lg:px-8 min-h-14 px-4 relative sm:px-6">
            <div className="flex items-center min-w-0">
              <Button className="-ms-2 size-8" type="button" tabIndex={0} aria-label="Close invoice editor" extracted="1">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
              <Separator className="h-4 ml-2 mr-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex gap-2 items-center min-w-0">
                <h1 className="font-medium leading-5 text-base text-foreground truncate">
                  {"Send invoice"}
                </h1>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 max-w-72 min-w-28 w-[36vw]">
              <StepperItem>
              <Stepper className="h-1.5 leading-none" role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Invoice send progress">
                <Stepper>
                <StepperNav className="bg-muted flex h-1.5 overflow-hidden relative rounded-full" data-state="1" data-orientation="horizontal">
                  <span className="absolute bg-primary inset-y-0 left-0 origin-left overflow-hidden pointer-events-none w-full z-10" aria-hidden="true" style={{transform: "scaleX(0.25)"}}></span>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="active">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex={0} data-state="active" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="active">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Customer"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Items"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Notes"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
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
            <div className="flex gap-2 items-center ml-auto shrink-0">
              <span className="font-medium tabular-nums text-muted-foreground text-sm whitespace-nowrap">
                {"1 / 4"}
              </span>
            </div>
          </div>
        </header>
        <main className="flex flex-1 justify-center lg:px-10 min-h-0 overflow-y-auto px-4 py-7 sm:px-8 sm:py-9">
          <form className="max-w-3xl w-full" id="wizard-3-invoice-send-form">
            <Card className="gap-0 p-0" size="default">
              <CardHeader className="gap-1 px-5 py-5 sm:px-6">
                <CardTitle>
                  {"Customer Details"}
                </CardTitle>
                <CardDescription>
                  {"Customer, invoice references, and billing terms."}
                </CardDescription>
                <CardAction className="flex gap-1.5 items-center self-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                    <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                      <rect width={20} height={12} x={2} y={6} rx={2}></rect>
                      <circle cx={12} cy={12} r={2}></circle>
                      <path d="M6 12h.01M18 12h.01"></path>
                    </svg>
                    {"USD"}
                  </Badge>
                </CardAction>
              </CardHeader>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <CardContent className="flex flex-col gap-7 px-5 py-5 sm:px-6 sm:py-6">
                <FieldSet className="gap-0">
                  <FieldLegend className="sr-only" variant="legend">
                    {"Invoice send wizard"}
                  </FieldLegend>
                  <FieldDescription className="sr-only">
                    {"Send an invoice with customer, terms, line items, notes, and totals."}
                  </FieldDescription>
                  <div className="flex flex-col gap-7 min-w-0" style={{opacity: "1", transform: "none"}}>
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
                          <div className="flex gap-1.5 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-customer">
                              {"Customer"}
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Customer info" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="M12 16v-4"></path>
                                <path d="M12 8h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <InputGroup className="cn-combobox-input" role="group">
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="wizard-3-customer" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Find or add customer..." type="text" value="Orchid Ledger Group" />
                            <InputGroupAddon role="group" data-align="inline-end">
                              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </button>
                              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-clear cn-input-group-button cn-input-group-button-size-icon-xs disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={-1} data-size="icon-xs" data-visible="">
                                <svg className="cn-combobox-clear-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                              </button>
                            </InputGroupAddon>
                          </InputGroup>
                          <input id="base-ui-_r_4_-hidden-input" tabIndex={-1} aria-hidden="true" value="Orchid Ledger Group" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <div className="flex gap-1.5 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-tax-id">
                              {"Tax ID"}
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Tax ID info" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="M12 16v-4"></path>
                                <path d="M12 8h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <InputGroup role="group">
                            <InputGroupAddon role="group" data-align="inline-start">
                              <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                <path d="M10 12h4"></path>
                                <path d="M10 8h4"></path>
                                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                              </svg>
                            </InputGroupAddon>
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="wizard-3-tax-id" value="US-88-2947135" />
                          </InputGroup>
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <div className="flex gap-1.5 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-invoice-number">
                              {"Invoice Number"}
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Invoice Number info" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="M12 16v-4"></path>
                                <path d="M12 8h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <InputGroup role="group">
                            <InputGroupAddon role="group" data-align="inline-start">
                              <svg className="lucide lucide-hash" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                                <line x1={4} x2={20} y1={9} y2={9}></line>
                                <line x1={4} x2={20} y1={15} y2={15}></line>
                                <line x1={10} x2={8} y1={3} y2={21}></line>
                                <line x1={16} x2={14} y1={3} y2={21}></line>
                              </svg>
                            </InputGroupAddon>
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="wizard-3-invoice-number" value="INV-2048" />
                          </InputGroup>
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-po-number">
                            {"PO Reference"}
                          </FieldLabel>
                          <Input id="wizard-3-po-number" value="PO-7418"></Input>
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
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-issue-date">
                            {"Issue Date"}
                          </FieldLabel>
                          <Popover>
                          <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0} id="wizard-3-issue-date" aria-label="Choose issue date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                            <span className="truncate">
                              {"Apr 24, 2026"}
                            </span>
                            <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                              <path d="M3 10h18"></path>
                            </svg>
                          </PopoverTrigger>
                          </Popover>
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-due-date">
                            {"Due Date"}
                          </FieldLabel>
                          <Popover>
                          <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0} id="wizard-3-due-date" aria-label="Choose due date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                            <span className="truncate">
                              {"May 08, 2026"}
                            </span>
                            <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                              <path d="M3 10h18"></path>
                            </svg>
                          </PopoverTrigger>
                          </Popover>
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-currency">
                            {"Currency"}
                          </FieldLabel>
                          <Select>
                          <SelectTrigger className="w-full" type="button" tabIndex={0} id="wizard-3-currency" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                            <SelectValue>
                              {"USD"}
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_k_-hidden-input" tabIndex={-1} aria-hidden="true" value="usd" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-payment-terms">
                            {"Payment Terms"}
                          </FieldLabel>
                          <Select>
                          <SelectTrigger className="w-full" type="button" tabIndex={0} id="wizard-3-payment-terms" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                            <SelectValue>
                              {"Net 14"}
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_n_-hidden-input" tabIndex={-1} aria-hidden="true" value="net-14" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-collection-method">
                            {"Collection"}
                          </FieldLabel>
                          <Select>
                          <SelectTrigger className="w-full" type="button" tabIndex={0} id="wizard-3-collection-method" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                            <SelectValue>
                              {"ACH transfer"}
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_q_-hidden-input" tabIndex={-1} aria-hidden="true" value="ach" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-3-billing-address">
                            {"Billing Address"}
                          </FieldLabel>
                          <Input id="wizard-3-billing-address" value="14 Warren Street, Suite 620, New York, NY"></Input>
                        </Field>
                      </FieldGroup>
                    </section>
                  </div>
                </FieldSet>
              </CardContent>
            </Card>
          </form>
        </main>
        <footer className="backdrop-blur bg-background/95 border-border border-t flex items-center px-3 py-3 shrink-0 sm:px-6 sm:py-4">
          <div className="flex gap-2 items-center justify-between max-w-3xl mx-auto sm:gap-4 w-full">
            <div className="flex items-center min-w-0"></div>
            <div className="flex gap-2 items-center justify-end shrink-0">
              <Button className="hidden sm:inline-flex" type="button" tabIndex={0}>
                {"Save draft"}
              </Button>
              <Button className="min-w-0 px-3 sm:min-w-32 sm:px-4" type="submit" tabIndex={0} form="wizard-3-invoice-send-form">
                {"Next step"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
