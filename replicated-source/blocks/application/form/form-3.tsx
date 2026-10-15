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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <header className="bg-background border-b border-border flex gap-3 items-center justify-between min-h-14 px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex items-center min-w-0">
          <Button className="-ms-2 size-8" type="button" tabIndex="0" aria-label="Close invoice editor">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </Button>
          <Separator className="h-4 ml-2 mr-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <div className="flex gap-2 items-center min-w-0">
            <h1 className="font-medium leading-5 text-base text-foreground truncate">
              {"Create invoice"}
            </h1>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative self-center sm:inline-flex style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow translate-y-px">
              {"Draft"}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button className="hidden md:inline-flex" type="button" tabIndex="0">
            <svg className="lucide lucide-megaphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="MegaphoneIcon" tabler="IconSpeakerphone" hugeicons="Megaphone01Icon" phosphor="MegaphoneIcon" remixicon="RiMegaphoneLine" aria-hidden="true">
              <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
              <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
              <path d="M8 6v8"></path>
            </svg>
            {"Feedback"}
          </Button>
          <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
            <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" aria-hidden="true">
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
              <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
            </svg>
            {"Save draft"}
          </Button>
          <Button type="submit" tabIndex="0" form="form-3-invoice-creator">
            <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            {"Send invoice"}
          </Button>
        </div>
      </header>
      <main className="flex flex-1 justify-center lg:px-10 px-4 py-7 sm:px-8 sm:py-9">
        <form className="max-w-5xl w-full" id="form-3-invoice-creator">
          <Card className="gap-0 p-0" size="default">
            <CardHeader className="gap-1 px-5 py-5 sm:px-6">
              <CardTitle>
                {"Invoice Details"}
              </CardTitle>
              <CardDescription>
                {"Customer, terms, items, and payment notes."}
              </CardDescription>
              <CardAction className="flex gap-1.5 items-center self-center">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-receipt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptIcon" tabler="IconReceipt" hugeicons="ReceiptDollarIcon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                    <path d="M12 17V7"></path>
                    <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                    <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                  </svg>
                  {"Draft"}
                </Badge>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative sm:inline-flex style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                  {"USD"}
                </Badge>
              </CardAction>
            </CardHeader>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <CardContent className="flex flex-col gap-7 px-5 py-5 sm:px-6 sm:py-6">
              <FieldSet className="gap-0">
                <FieldLegend className="sr-only" variant="legend">
                  {"Invoice creation form"}
                </FieldLegend>
                <FieldDescription className="sr-only">
                  {"Create a customer invoice with billing terms, line items, and payment notes."}
                </FieldDescription>
                <FieldGroup className="gap-7">
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
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-customer">
                            {"Customer"}
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Customer info" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                        <InputGroup className="cn-combobox-input" role="group">
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-3-customer" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Find or add customer..." type="text" value="Orchid Ledger Group" />
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
                        <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="Orchid Ledger Group" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <div className="flex gap-1.5 items-center">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-tax-id">
                            {"Tax ID"}
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Tax ID info" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
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
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-3-tax-id" value="US-88-2947135" />
                        </InputGroup>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <div className="flex gap-1.5 items-center">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-invoice-number">
                            {"Invoice Number"}
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoice Number info" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                        <InputGroup role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <svg className="lucide lucide-hash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                              <line x1="4" x2="20" y1="9" y2="9"></line>
                              <line x1="4" x2="20" y1="15" y2="15"></line>
                              <line x1="10" x2="8" y1="3" y2="21"></line>
                              <line x1="16" x2="14" y1="3" y2="21"></line>
                            </svg>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-3-invoice-number" value="INV-2048" />
                        </InputGroup>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-po-number">
                          {"PO Reference"}
                        </FieldLabel>
                        <Input id="form-3-po-number" value="PO-7418"></Input>
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
                    <FieldGroup className="gap-4 grid md:grid-cols-3">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-issue-date">
                          {"Issue Date"}
                        </FieldLabel>
                        <Popover>
                        <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="form-3-issue-date" aria-label="Choose issue date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                          <span className="truncate">
                            {"Apr 24, 2026"}
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
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-due-date">
                          {"Due Date"}
                        </FieldLabel>
                        <Popover>
                        <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="form-3-due-date" aria-label="Choose due date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                          <span className="truncate">
                            {"May 08, 2026"}
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
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-currency">
                          {"Currency"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-3-currency" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"USD"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_i_-hidden-input" tabIndex="-1" aria-hidden="true" value="usd" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-payment-terms">
                          {"Payment Terms"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-3-payment-terms" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"Net 14"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_l_-hidden-input" tabIndex="-1" aria-hidden="true" value="net-14" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-collection-method">
                          {"Collection"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-3-collection-method" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"ACH transfer"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_o_-hidden-input" tabIndex="-1" aria-hidden="true" value="ach" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-billing-address">
                          {"Billing Address"}
                        </FieldLabel>
                        <Input id="form-3-billing-address" value="14 Warren Street, Suite 620, New York, NY"></Input>
                      </Field>
                    </FieldGroup>
                  </section>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <section className="flex flex-col gap-4 sm:gap-5">
                    <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <h2 className="font-semibold leading-6 text-base text-foreground">
                            {"Line Items"}
                          </h2>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                            {"2 items"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {"Products, services, quantity, tax, and amount."}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <Button type="button" tabIndex="0">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add item"}
                        </Button>
                      </div>
                    </div>
                    <div className="cn-table-container">
                      <Table className="min-w-[820px]" aria-label="Invoice line items">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[42%]">
                              {"Item"}
                            </TableHead>
                            <TableHead className="w-24">
                              {"Qty"}
                            </TableHead>
                            <TableHead className="w-36">
                              {"Rate"}
                            </TableHead>
                            <TableHead className="w-32">
                              {"Tax"}
                            </TableHead>
                            <TableHead className="text-right w-32">
                              {"Amount"}
                            </TableHead>
                            <TableHead className="w-10"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="align-middle">
                              <div className="flex gap-2 items-center min-w-0">
                                <Select>
                                <SelectTrigger className="flex-1 min-w-0" type="button" tabIndex="0" id="base-ui-_r_s_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-1">
                                  <SelectValue>
                                    {"Implementation retainer"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_s_-hidden-input" tabIndex="-1" aria-hidden="true" value="implementation-retainer" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Implementation retainer details" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Input className="w-20" id="base-ui-_r_11_" min="1" step="1" aria-label="Quantity for Implementation retainer" type="number" value="1"></Input>
                            </TableCell>
                            <TableCell className="align-middle">
                              <InputGroup className="min-w-28" role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  {"$"}
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_12_" min="0" step="50" aria-label="Rate for Implementation retainer" type="number" value="4800" />
                              </InputGroup>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Select>
                              <SelectTrigger className="min-w-24" type="button" tabIndex="0" id="base-ui-_r_13_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Tax rate for Implementation retainer">
                                <SelectValue>
                                  {"8.25%"}
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_13_-hidden-input" tabIndex="-1" aria-hidden="true" value="8.25" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </TableCell>
                            <TableCell className="align-middle font-medium tabular-nums text-right">
                              <span className="inline-flex items-center justify-end min-h-9">
                                {"$4,800.00"}
                              </span>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Button type="button" tabIndex="0" aria-label="Remove Implementation retainer">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle">
                              <div className="flex gap-2 items-center min-w-0">
                                <Select>
                                <SelectTrigger className="flex-1 min-w-0" type="button" tabIndex="0" id="base-ui-_r_16_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-2">
                                  <SelectValue>
                                    {"Priority support block"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_16_-hidden-input" tabIndex="-1" aria-hidden="true" value="priority-support" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Priority support block details" id="base-ui-_r_1a_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Input className="w-20" id="base-ui-_r_1b_" min="1" step="1" aria-label="Quantity for Priority support block" type="number" value="2"></Input>
                            </TableCell>
                            <TableCell className="align-middle">
                              <InputGroup className="min-w-28" role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  {"$"}
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1c_" min="0" step="50" aria-label="Rate for Priority support block" type="number" value="950" />
                              </InputGroup>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Select>
                              <SelectTrigger className="min-w-24" type="button" tabIndex="0" id="base-ui-_r_1d_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Tax rate for Priority support block">
                                <SelectValue>
                                  {"No tax"}
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_1d_-hidden-input" tabIndex="-1" aria-hidden="true" value="0" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </TableCell>
                            <TableCell className="align-middle font-medium tabular-nums text-right">
                              <span className="inline-flex items-center justify-end min-h-9">
                                {"$1,900.00"}
                              </span>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Button type="button" tabIndex="0" aria-label="Remove Priority support block">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </section>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <section className="flex flex-col gap-4 sm:gap-5">
                    <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <h2 className="font-semibold leading-6 text-base text-foreground">
                            {"Notes"}
                          </h2>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                            {"Optional"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {"Customer-facing memo and payment footer."}
                        </p>
                      </div>
                    </div>
                    <FieldGroup className="gap-4 grid md:grid-cols-2">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-memo">
                          {"Memo"}
                        </FieldLabel>
                        <Textarea id="form-3-memo">
                          {"Thanks for partnering with us. Please include the invoice number with payment."}
                        </Textarea>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-3-footer-note">
                          {"Footer Note"}
                        </FieldLabel>
                        <Textarea id="form-3-footer-note">
                          {"Bank transfer and card payment are both supported."}
                        </Textarea>
                      </Field>
                    </FieldGroup>
                  </section>
                </FieldGroup>
              </FieldSet>
            </CardContent>
            <CardFooter className="flex-col gap-4 items-stretch px-5 py-5 sm:px-6">
              <div className="gap-5 grid lg:grid-cols-[1fr_21rem] lg:items-start">
                <div className="flex flex-col gap-3 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      {"Payment link queued"}
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"PDF preview ready"}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-1 min-w-0 text-muted-foreground text-sm">
                    <p>
                      {"Payment link and PDF preview are prepared after sending."}
                    </p>
                    <p>
                      {"Totals update as items, taxes, and discounts change."}
                    </p>
                  </div>
                </div>
                <div className="bg-background border isolate overflow-hidden p-4 relative rounded-md shadow-xs">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute bg-[radial-gradient(ellipse_at_84%_12%,color-mix(in_oklch,var(--color-warning)_26%,transparent),transparent_34%),radial-gradient(circle_at_8%_96%,color-mix(in_oklch,var(--color-primary)_12%,transparent),transparent_30%),linear-gradient(135deg,color-mix(in_oklch,var(--color-warning)_7%,transparent),transparent_58%)] inset-0"></div>
                    <div className="[mask-image:linear-gradient(135deg,transparent_0%,black_22%,black_76%,transparent_100%)] absolute bg-[length:20px_20px] bg-[radial-gradient(circle,color-mix(in_oklch,var(--color-muted-foreground)_12%,transparent)_1px,transparent_1.6px)] inset-0 opacity-35"></div>
                    <svg className="absolute h-full inset-0 text-warning w-full" viewBox="0 0 360 220" preserveAspectRatio="none">
                      <path d="M236 8H331L360 37V126H236C225 126 216 117 216 106V28C216 17 225 8 236 8Z" fill="currentColor" opacity="0.12"></path>
                      <path d="M331 8V37H360" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.24"></path>
                      <circle cx="326" cy="41" r="6.5" fill="var(--color-background)" opacity="0.88"></circle>
                      <g opacity="0.24">
                        <circle cx="269" cy="56" r="15" fill="none" stroke="currentColor" strokeWidth="6.5"></circle>
                        <circle cx="315" cy="100" r="16" fill="none" stroke="currentColor" strokeWidth="6.5"></circle>
                        <path d="M251 116L333 37" fill="none" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round"></path>
                      </g>
                      <path d="M147 41L156 59L175 68L156 77L147 96L138 77L119 68L138 59Z" fill="currentColor" opacity="0.12"></path>
                      <path d="M201 145L207 157L219 163L207 169L201 181L195 169L183 163L195 157Z" fill="currentColor" opacity="0.1"></path>
                      <circle cx="333" cy="162" r="42" fill="currentColor" opacity="0.07"></circle>
                      <circle cx="333" cy="162" r="18" fill="currentColor" opacity="0.09"></circle>
                      <path d="M-14 204C39 175 91 164 152 171C213 178 259 164 371 116V220H-14Z" fill="currentColor" opacity="0.07"></path>
                    </svg>
                    <div className="-right-2 absolute bg-background/90 border rounded-full shadow-xs size-4 top-1/2"></div>
                    <div className="-bottom-2 absolute bg-background/90 border right-16 rounded-full shadow-xs size-4"></div>
                  </div>
                  <div className="flex flex-col gap-4 relative">
                    <div className="gap-3 grid sm:grid-cols-[1fr_8rem] sm:items-center">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium text-sm">
                          {"Invoice Discount"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Applied before tax calculation."}
                        </span>
                      </div>
                      <InputGroup className="bg-background/85" role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1g_" min="0" max="100" step="0.5" aria-label="Invoice discount percentage" type="number" value="3" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          {"%"}
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <dl className="backdrop-blur-sm bg-background/70 border gap-2.5 grid p-3 rounded-md text-sm">
                      <div className="flex gap-4 items-center justify-between">
                        <dt>
                          {"Subtotal"}
                        </dt>
                        <dd className="tabular-nums text-foreground">
                          {"$6,700.00"}
                        </dd>
                      </div>
                      <div className="flex gap-4 items-center justify-between">
                        <dt>
                          {"Discount"}
                        </dt>
                        <dd className="tabular-nums text-foreground">
                          {"-$201.00"}
                        </dd>
                      </div>
                      <div className="flex gap-4 items-center justify-between">
                        <dt>
                          {"Tax"}
                        </dt>
                        <dd className="tabular-nums text-foreground">
                          {"$396.00"}
                        </dd>
                      </div>
                      <div className="flex gap-4 items-center justify-between">
                        <dt className="font-medium text-foreground">
                          {"Total Due"}
                        </dt>
                        <dd className="font-semibold tabular-nums text-base text-foreground">
                          {"$6,895.00"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </form>
      </main>
    </div>
  )
}
