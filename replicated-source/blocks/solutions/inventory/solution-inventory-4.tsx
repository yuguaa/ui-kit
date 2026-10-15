import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/registry/bases/base/ui/alert-dialog"
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
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <header className="bg-background border-b border-border flex gap-3 items-center justify-between min-h-14 px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex items-center min-w-0">
          <Button className="-ms-2 size-8" type="button" tabIndex={0} aria-label="Back to purchase orders" extracted="1">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </Button>
          <Separator className="h-4 ml-2 mr-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <div className="flex gap-2 items-center min-w-0">
            <h1 className="font-medium leading-5 tabular-nums text-base text-foreground truncate">
              {"PO-2041"}
            </h1>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative self-center sm:inline-flex style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow translate-y-px">
              {"Draft"}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button className="hidden md:inline-flex" type="button" tabIndex={0}>
            <svg className="lucide lucide-printer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="PrinterIcon" tabler="IconPrinter" hugeicons="PrinterIcon" phosphor="PrinterIcon" remixicon="RiPrinterLine" aria-hidden="true">
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
              <rect x={6} y={14} width={12} height={8} rx={1}></rect>
            </svg>
            {"Print"}
          </Button>
          <Button className="hidden sm:inline-flex" type="button" tabIndex={0}>
            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            {"Export"}
          </Button>
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            {"Submit order"}
          </Button>
        </div>
      </header>
      <main className="flex flex-1 justify-center lg:px-10 px-4 py-7 sm:px-8 sm:py-9">
        <div className="gap-6 grid lg:grid-cols-[1fr_22rem] lg:items-start max-w-6xl w-full">
          <Card className="gap-0 p-0" size="default">
            <CardHeader className="gap-1 px-5 py-5 sm:px-6">
              <CardTitle className="tabular-nums">
                {"PO-2041"}
              </CardTitle>
              <CardDescription className="flex flex-col gap-0.5 sm:flex-row sm:gap-1.5 sm:items-center">
                <span>
                  {"Acme Components"}
                </span>
                <span className="bg-muted-foreground/40 hidden rounded-full shrink-0 size-1 sm:block" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"256 of 356 units received"}
                </span>
              </CardDescription>
              <CardAction className="flex gap-1.5 items-center self-center">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptTextIcon" tabler="IconReceipt" hugeicons="Invoice01Icon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                    <path d="M13 16H8"></path>
                    <path d="M14 8H8"></path>
                    <path d="M16 12H8"></path>
                    <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                  </svg>
                  {"Draft"}
                </Badge>
              </CardAction>
            </CardHeader>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <CardContent className="flex flex-col gap-7 px-5 py-5 sm:px-6 sm:py-6">
              <FieldSet className="gap-0">
                <FieldLegend className="sr-only" variant="legend">
                  {"Purchase order detail"}
                </FieldLegend>
                <FieldDescription className="sr-only">
                  {"Review the supplier, line items, and receiving status for this purchase order."}
                </FieldDescription>
                <FieldGroup className="gap-7">
                  <section className="flex flex-col gap-4 sm:gap-5">
                    <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <h2 className="font-semibold leading-6 text-base text-foreground">
                            {"Supplier"}
                          </h2>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"Editable"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {"Net 30 terms, active supplier."}
                        </p>
                      </div>
                    </div>
                    <FieldGroup className="gap-4 grid md:grid-cols-2">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="po-supplier">
                          {"Supplier"}
                        </FieldLabel>
                        <Input id="po-supplier" value="Acme Components"></Input>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="po-reference">
                          {"Reference"}
                        </FieldLabel>
                        <Input id="po-reference" value="REQ-0418"></Input>
                      </Field>
                      <Field className="md:col-span-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="po-ship-to">
                          {"Ship to"}
                        </FieldLabel>
                        <Input id="po-ship-to" value="Main Warehouse, Dock 4, Bin A-12-04"></Input>
                      </Field>
                    </FieldGroup>
                  </section>
                  <section className="flex flex-col gap-4 sm:gap-5">
                    <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <h2 className="font-semibold leading-6 text-base text-foreground">
                            {"Terms"}
                          </h2>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            {"Main Warehouse"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {"Dates, dock, and costing."}
                        </p>
                      </div>
                    </div>
                    <FieldGroup className="gap-4 grid md:grid-cols-2">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="po-order-date">
                          {"Order Date"}
                        </FieldLabel>
                        <Popover>
                        <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0} id="po-order-date" aria-label="Choose order date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                          <span className="truncate">
                            {"Jun 02, 2026"}
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
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="po-expected-date">
                          {"Expected Date"}
                        </FieldLabel>
                        <Popover>
                        <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0} id="po-expected-date" aria-label="Choose expected date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                          <span className="truncate">
                            {"Jun 19, 2026"}
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
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="po-warehouse">
                          {"Destination"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex={0} id="po-warehouse" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"Main Warehouse"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_7_-hidden-input" tabIndex={-1} aria-hidden="true" value="main" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="po-costing">
                          {"Costing"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex={0} id="po-costing" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"Average cost"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_a_-hidden-input" tabIndex={-1} aria-hidden="true" value="average" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
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
                            {"4 lines"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {"Received counts and landed cost."}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <Button type="button" tabIndex={0}>
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add line"}
                        </Button>
                      </div>
                    </div>
                    <div className="cn-table-container">
                      <Table className="min-w-[860px]" aria-label="Purchase order line items">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[34%]">
                              {"Item"}
                            </TableHead>
                            <TableHead className="text-right w-20">
                              {"Ordered"}
                            </TableHead>
                            <TableHead className="w-28">
                              {"Received"}
                            </TableHead>
                            <TableHead className="w-28">
                              {"Backordered"}
                            </TableHead>
                            <TableHead className="w-32">
                              {"Unit Cost"}
                            </TableHead>
                            <TableHead className="text-right w-32">
                              {"Line Total"}
                            </TableHead>
                            <TableHead className="w-10"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="align-middle">
                              <div className="flex gap-3 items-center min-w-0">
                                <ItemMedia className="size-11" variant="image">
                                  <img className="object-cover size-full" alt="Auralite Studio Pro" width={44} height={44} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80" />
                                </ItemMedia>
                                <Select>
                                <SelectTrigger className="flex-1 min-w-0" type="button" tabIndex={0} id="base-ui-_r_d_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-1">
                                  <SelectValue>
                                    {"Auralite Studio Pro"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_d_-hidden-input" tabIndex={-1} aria-hidden="true" value="auralite-studio-pro" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle tabular-nums text-right">
                              {"120"}
                            </TableCell>
                            <TableCell className="align-middle">
                              <Input className="w-24" id="base-ui-_r_g_" min={0} max={120} step={1} aria-label="Received quantity for Auralite Studio Pro" type="number" value="120"></Input>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Filled"}
                              </Badge>
                            </TableCell>
                            <TableCell className="align-middle">
                              <InputGroup className="min-w-28" role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  {"$"}
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_h_" min={0} step={1} aria-label="Unit cost for Auralite Studio Pro" type="number" value="64" />
                              </InputGroup>
                            </TableCell>
                            <TableCell className="align-middle font-medium tabular-nums text-right">
                              <span className="inline-flex items-center justify-end min-h-9">
                                {"$7,680.00"}
                              </span>
                            </TableCell>
                            <TableCell className="align-middle">
                              <AlertDialog>
                              <AlertDialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Auralite Studio Pro" baseUiClickTrigger="" id="base-ui-_r_j_" aria-haspopup="dialog" aria-expanded="false">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </AlertDialogTrigger>
                              </AlertDialog>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle">
                              <div className="flex gap-3 items-center min-w-0">
                                <ItemMedia className="size-11" variant="image">
                                  <img className="object-cover size-full" alt="Countertop Wireless Max" width={44} height={44} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1693895592595-9171d91a0f22?auto=format&fit=crop&w=900&q=80" />
                                </ItemMedia>
                                <Select>
                                <SelectTrigger className="flex-1 min-w-0" type="button" tabIndex={0} id="base-ui-_r_k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-2">
                                  <SelectValue>
                                    {"Countertop Wireless Max"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_k_-hidden-input" tabIndex={-1} aria-hidden="true" value="countertop-wireless-max" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle tabular-nums text-right">
                              {"80"}
                            </TableCell>
                            <TableCell className="align-middle">
                              <Input className="w-24" id="base-ui-_r_n_" min={0} max={80} step={1} aria-label="Received quantity for Countertop Wireless Max" type="number" value="40"></Input>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                                {"40"}
                              </Badge>
                            </TableCell>
                            <TableCell className="align-middle">
                              <InputGroup className="min-w-28" role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  {"$"}
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_o_" min={0} step={1} aria-label="Unit cost for Countertop Wireless Max" type="number" value="58" />
                              </InputGroup>
                            </TableCell>
                            <TableCell className="align-middle font-medium tabular-nums text-right">
                              <span className="inline-flex items-center justify-end min-h-9">
                                {"$2,320.00"}
                              </span>
                            </TableCell>
                            <TableCell className="align-middle">
                              <AlertDialog>
                              <AlertDialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Countertop Wireless Max" baseUiClickTrigger="" id="base-ui-_r_q_" aria-haspopup="dialog" aria-expanded="false">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </AlertDialogTrigger>
                              </AlertDialog>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle">
                              <div className="flex gap-3 items-center min-w-0">
                                <ItemMedia className="size-11" variant="image">
                                  <img className="object-cover size-full" alt="Soft Black Studio" width={44} height={44} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1753557346714-5bbe6b416861?auto=format&fit=crop&w=900&q=80" />
                                </ItemMedia>
                                <Select>
                                <SelectTrigger className="flex-1 min-w-0" type="button" tabIndex={0} id="base-ui-_r_r_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-3">
                                  <SelectValue>
                                    {"Soft Black Studio"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_r_-hidden-input" tabIndex={-1} aria-hidden="true" value="soft-black-studio" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle tabular-nums text-right">
                              {"60"}
                            </TableCell>
                            <TableCell className="align-middle">
                              <Input className="w-24" id="base-ui-_r_u_" min={0} max={60} step={1} aria-label="Received quantity for Soft Black Studio" type="number" value="0"></Input>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                                {"60"}
                              </Badge>
                            </TableCell>
                            <TableCell className="align-middle">
                              <InputGroup className="min-w-28" role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  {"$"}
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_v_" min={0} step={1} aria-label="Unit cost for Soft Black Studio" type="number" value="88" />
                              </InputGroup>
                            </TableCell>
                            <TableCell className="align-middle font-medium tabular-nums text-right">
                              <span className="inline-flex items-center justify-end min-h-9">
                                {"$0.00"}
                              </span>
                            </TableCell>
                            <TableCell className="align-middle">
                              <AlertDialog>
                              <AlertDialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Soft Black Studio" baseUiClickTrigger="" id="base-ui-_r_11_" aria-haspopup="dialog" aria-expanded="false">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </AlertDialogTrigger>
                              </AlertDialog>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle">
                              <div className="flex gap-3 items-center min-w-0">
                                <ItemMedia className="size-11" variant="image">
                                  <img className="object-cover size-full" alt="Matte White Wireless" width={44} height={44} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1625245488600-f03fef636a3c?auto=format&fit=crop&w=900&q=80" />
                                </ItemMedia>
                                <Select>
                                <SelectTrigger className="flex-1 min-w-0" type="button" tabIndex={0} id="base-ui-_r_12_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Item for line-4">
                                  <SelectValue>
                                    {"Matte White Wireless"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_12_-hidden-input" tabIndex={-1} aria-hidden="true" value="matte-white-wireless" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle tabular-nums text-right">
                              {"96"}
                            </TableCell>
                            <TableCell className="align-middle">
                              <Input className="w-24" id="base-ui-_r_15_" min={0} max={96} step={1} aria-label="Received quantity for Matte White Wireless" type="number" value="96"></Input>
                            </TableCell>
                            <TableCell className="align-middle">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Filled"}
                              </Badge>
                            </TableCell>
                            <TableCell className="align-middle">
                              <InputGroup className="min-w-28" role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  {"$"}
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_16_" min={0} step={1} aria-label="Unit cost for Matte White Wireless" type="number" value="49" />
                              </InputGroup>
                            </TableCell>
                            <TableCell className="align-middle font-medium tabular-nums text-right">
                              <span className="inline-flex items-center justify-end min-h-9">
                                {"$4,704.00"}
                              </span>
                            </TableCell>
                            <TableCell className="align-middle">
                              <AlertDialog>
                              <AlertDialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Matte White Wireless" baseUiClickTrigger="" id="base-ui-_r_18_" aria-haspopup="dialog" aria-expanded="false">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </AlertDialogTrigger>
                              </AlertDialog>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </section>
                </FieldGroup>
              </FieldSet>
            </CardContent>
            <CardFooter className="flex-col gap-4 items-stretch px-5 py-5 sm:px-6">
              <div className="gap-5 grid lg:grid-cols-[1fr_21rem] lg:items-start">
                <div className="flex flex-col gap-3 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      {"$14,704.00 received"}
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      <span>
                        {"Average Cost"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"Main Warehouse"}
                      </span>
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-1 min-w-0 text-muted-foreground text-sm">
                    <p>
                      {"Dock scans post received value."}
                    </p>
                    <p>
                      {"Tax includes freight, due Jun 19."}
                    </p>
                  </div>
                </div>
                <Item className="flex-col gap-4 items-stretch p-4" variant="outline" size="default">
                  <div className="gap-3 grid sm:grid-cols-[1fr_auto] sm:items-center">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-medium text-sm">
                        {"Freight"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"Added before tax."}
                      </span>
                    </div>
                    <InputGroup className="sm:w-40" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        {"$"}
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 font-semibold min-w-0 outline-none placeholder:text-muted-foreground tabular-nums text-right w-full" id="base-ui-_r_19_" min={0} step={10} aria-label="Freight cost" type="number" value="240" />
                    </InputGroup>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <dl className="gap-2.5 grid text-sm">
                    <div className="flex gap-4 items-center justify-between">
                      <dt>
                        {"Subtotal"}
                      </dt>
                      <dd className="tabular-nums text-foreground">
                        {"$14,704.00"}
                      </dd>
                    </div>
                    <div className="flex gap-4 items-center justify-between">
                      <dt>
                        {"Freight"}
                      </dt>
                      <dd className="tabular-nums text-foreground">
                        {"$240.00"}
                      </dd>
                    </div>
                    <div className="flex gap-4 items-center justify-between">
                      <dt>
                        {"Tax"}
                      </dt>
                      <dd className="tabular-nums text-foreground">
                        {"$1,232.88"}
                      </dd>
                    </div>
                    <div className="flex gap-4 items-center justify-between">
                      <dt className="font-medium text-foreground">
                        {"Total"}
                      </dt>
                      <dd className="font-semibold tabular-nums text-base text-foreground">
                        {"$16,176.88"}
                      </dd>
                    </div>
                  </dl>
                </Item>
              </div>
            </CardFooter>
          </Card>
          <Card className="gap-0 p-0 w-full" size="default">
            <CardHeader className="gap-1 px-5 py-4 sm:px-6">
              <div className="flex gap-3 items-center justify-between">
                <CardTitle>
                  {"Activity Log"}
                </CardTitle>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                  {"3 Events"}
                </Badge>
              </div>
              <CardDescription>
                {"Dock scans and receiving notes."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col grow pb-1 px-5 sm:px-6">
              <Timeline data-orientation="vertical" aria-label="Purchase order activity">
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                    <div className="flex flex-wrap gap-2 items-center">
                      <TimelineTitle className="font-semibold">
                        {"Partial Receipt Logged"}
                      </TimelineTitle>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Received"}
                      </Badge>
                    </div>
                    <TimelineIndicator className="bg-info border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 ring-4 ring-info/20 size-2" aria-hidden="true"></TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="mt-1.5 pb-0.5">
                    <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                      <span className="font-medium">
                        {"Alex Johnson"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        {"Jun 16, 10:24"}
                      </span>
                    </div>
                    <p className="leading-5 mt-1 text-muted-foreground text-xs">
                      {"256 units scanned. Soft Black remains backordered."}
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                    <div className="flex flex-wrap gap-2 items-center">
                      <TimelineTitle className="font-semibold">
                        {"Order Submitted"}
                      </TimelineTitle>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Submitted"}
                      </Badge>
                    </div>
                    <TimelineIndicator className="bg-success border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 ring-4 ring-background size-2" aria-hidden="true"></TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="mt-1.5 pb-0.5">
                    <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                      <span className="font-medium">
                        {"Nora Vale"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        {"Jun 02, 14:08"}
                      </span>
                    </div>
                    <p className="leading-5 mt-1 text-muted-foreground text-xs">
                      {"356 units sent, due Jun 19."}
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:pb-0">
                  <TimelineHeader>
                    <div className="flex flex-wrap gap-2 items-center">
                      <TimelineTitle className="font-semibold">
                        {"Draft Created"}
                      </TimelineTitle>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Note"}
                      </Badge>
                    </div>
                    <TimelineIndicator className="bg-success border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 ring-4 ring-background size-2" aria-hidden="true"></TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="mt-1.5 pb-0.5">
                    <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                      <span className="font-medium">
                        {"Mira Stone"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        {"Jun 01, 09:15"}
                      </span>
                    </div>
                    <p className="leading-5 mt-1 text-muted-foreground text-xs">
                      {"Four reorder alerts created the draft."}
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
            <CardFooter className="flex-col gap-2 items-stretch px-5 py-4 sm:px-6">
              <Textarea aria-label="Add receiving note" placeholder="Add a receiving note...">
                {"Check pallet seal before close."}
              </Textarea>
              <Button className="self-end" type="button" tabIndex={0}>
                <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                </svg>
                {"Add note"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
