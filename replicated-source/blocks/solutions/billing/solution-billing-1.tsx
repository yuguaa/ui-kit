import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  FilterChip,
  Filters,
} from "@/registry-neui/bases/base/neui/filters/filters"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col max-w-[1320px] md:p-4 min-h-svh mx-auto p-3 w-full">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-col gap-0.5 min-w-0">
          <div className="flex flex-wrap gap-2.5 items-center">
            <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
              {"Billing"}
            </h2>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
              {"$28,940 outstanding"}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-sm">
            <span>
              {"June 2026 statement"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              {"9 invoices outstanding"}
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            {"Export"}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Card className="gap-0 p-0" size="default">
          <CardHeader className="px-5 py-4">
            <div className="gap-5 grid items-center lg:grid-cols-[minmax(0,1fr)_minmax(24rem,32rem)]">
              <div className="flex gap-3 min-w-0">
                <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                  <svg className="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptTextIcon" tabler="IconReceipt" hugeicons="Invoice01Icon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                    <path d="M13 16H8"></path>
                    <path d="M14 8H8"></path>
                    <path d="M16 12H8"></path>
                    <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                  </svg>
                </Item>
                <div className="min-w-0 space-y-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    <CardTitle>
                      {"June 2026"}
                    </CardTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      {"Action needed"}
                    </Badge>
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                      {"Outstanding balance"}
                    </p>
                    <p className="font-semibold tabular-nums text-2xl tracking-tight">
                      {"$28,940"}
                    </p>
                  </div>
                  <p className="leading-5 max-w-xl text-muted-foreground text-sm">
                    {"16 invoices this billing cycle, oldest past due 18 days."}
                  </p>
                </div>
              </div>
              <dl className="border-t gap-x-5 gap-y-3 grid grid-cols-2 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0 pt-4">
                <div className="space-y-0.5">
                  <dt className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Current"}
                  </dt>
                  <dd className="font-medium tabular-nums text-sm">
                    {"$27,410"}
                  </dd>
                </div>
                <div className="space-y-0.5">
                  <dt className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Overdue"}
                  </dt>
                  <dd className="font-medium tabular-nums text-sm">
                    {"$1,530"}
                  </dd>
                </div>
                <div className="space-y-0.5">
                  <dt className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Collected"}
                  </dt>
                  <dd className="font-medium tabular-nums text-sm">
                    {"$48,480"}
                  </dd>
                </div>
                <div className="space-y-0.5">
                  <dt className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                    {"Next payout"}
                  </dt>
                  <dd className="font-medium tabular-nums text-sm">
                    {"Jun 30"}
                  </dd>
                </div>
              </dl>
            </div>
          </CardHeader>
          <CardFooter className="border-t flex-col gap-2 items-start justify-between px-5 py-2.5 sm:flex-row sm:items-center">
            <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-sm">
              <span>
                {"Statement closes June 30"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"auto-collection on."}
              </span>
            </p>
            <Button type="button" tabIndex="0">
              {"View statement"}
            </Button>
          </CardFooter>
        </Card>
        <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
          <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
            {"Past due recovery"}
          </AlertTitle>
          <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
            {"$1,530 overdue across 2 invoices, oldest 18 days past due."}
          </AlertDescription>
          <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
            <Button type="button" tabIndex="0">
              {"View past due"}
            </Button>
            <Button type="button" tabIndex="0">
              {"Start recovery"}
            </Button>
          </AlertAction>
        </Alert>
        <Card className="gap-0 p-0 w-full" size="default">
          <CardHeader className="border-b flex flex-row gap-4 items-center justify-between px-5 py-3">
            <div className="flex flex-1 flex-col gap-1 min-w-0">
              <CardTitle>
                {"Invoice Ledger"}
              </CardTitle>
              <CardDescription className="text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <span>
                    {"7 open"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"2 past due"}
                  </span>
                </span>
              </CardDescription>
            </div>
            <CardAction className="self-center">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"New invoice"}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-2 items-center justify-between px-5 py-2.5">
              <div className="flex flex-1 flex-wrap gap-1.5 items-center min-w-0">
                <Filters>
                  <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                    <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Customer contains no value" ruleId="customerName-1" tabIndex="0" index="0">
                      <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Customer">
                        <svg className="lucide lucide-building-2 lucide-building2 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                        <span className="flex items-center">
                          <span>
                            {"Customer"}
                          </span>
                        </span>
                      </div>
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false">
                        {"contains"}
                      </PopoverTrigger>
                      </Popover>
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search customers..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
                        {"Search customers..."}
                      </PopoverTrigger>
                      </Popover>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Customer filter options" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </FilterChip>
                  </div>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter invoices" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                    </svg>
                    {"Filters"}
                  </PopoverTrigger>
                  </Popover>
                  <div className="sr-only" aria-live="polite" role="status">
                    <span></span>
                  </div>
                </Filters>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center justify-end ml-auto shrink-0">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-funnel-x size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FunnelXIcon" tabler="IconFilterOff" hugeicons="FilterRemoveIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilterOffLine" aria-hidden="true">
                    <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                    <path d="m16.5 3.5 5 5"></path>
                    <path d="m21.5 3.5-5 5"></path>
                  </svg>
                  {"Clear"}
                </Button>
              </div>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <DataGridProvider>
            <DataGridTableViewport>
              <DataGridProvider>
              <DataGridTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr className="[&>th]:border-b bg-transparent">
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-2! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0">
                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_d_" aria-checked="false" aria-label="Select all"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </th>
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="customer" data-header-id="customer" data-header-depth="0">
                      <div className="-ms-2 flex h-full items-center">
                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                          {"Customer"}
                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </Button>
                      </div>
                    </th>
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="invoice" data-header-id="invoice" data-header-depth="0">
                      <div className="-ms-2 flex h-full items-center">
                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                          {"Invoice"}
                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </Button>
                      </div>
                    </th>
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="plan" data-header-id="plan" data-header-depth="0">
                      <div className="-ms-2 flex h-full items-center">
                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                          {"Plan"}
                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </Button>
                      </div>
                    </th>
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="amount" data-header-id="amount" data-header-depth="0">
                      <div className="-ms-2 flex h-full items-center">
                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                          {"Amount"}
                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </Button>
                      </div>
                    </th>
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="due" data-header-id="due" data-header-depth="0">
                      <div className="-ms-2 flex h-full items-center">
                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                          {"Due"}
                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </Button>
                      </div>
                    </th>
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0">
                      <div className="-ms-2 flex h-full items-center">
                        <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                          {"Status"}
                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </Button>
                      </div>
                    </th>
                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0"></th>
                  </tr>
                </thead>
                <DataGridProvider>
                <DataGridTableBody>
                  <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="INV-20418">
                    <td className="align-middle ps-2! px-2 py-1.5">
                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_g_" aria-checked="false" aria-label="Select row"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex gap-3 items-center min-w-0">
                        <svg className="shrink-0 size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                          <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                        </svg>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <div className="font-medium text-foreground truncate">
                            {"Stripe"}
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Karl Vogel"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="truncate">
                              {"ACC-3092"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"INV-20418"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"May usage · seats"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Scale"}
                      </Badge>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"$890"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Visa ending 4242"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-destructive">
                          {"18d overdue"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"May 28"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Past due"}
                      </Badge>
                    </td>
                    <td className="align-middle pe-4! px-2 py-1.5">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoice actions" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </td>
                  </tr>
                  <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="INV-20402">
                    <td className="align-middle ps-2! px-2 py-1.5">
                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_p_" aria-checked="false" aria-label="Select row"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex gap-3 items-center min-w-0">
                        <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                          <g clipRule="evenodd" fillRule="evenodd">
                            <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                            <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                            <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                            <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                          </g>
                        </svg>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <div className="font-medium text-foreground truncate">
                            {"Slack"}
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Karl Vogel"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="truncate">
                              {"ACC-3088"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"INV-20402"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"May usage overage"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Growth"}
                      </Badge>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"$640"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Mastercard ending 8829"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-destructive">
                          {"6d overdue"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 10"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Past due"}
                      </Badge>
                    </td>
                    <td className="align-middle pe-4! px-2 py-1.5">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoice actions" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </td>
                  </tr>
                  <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="INV-20425">
                    <td className="align-middle ps-2! px-2 py-1.5">
                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_12_" aria-checked="false" aria-label="Select row"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex gap-3 items-center min-w-0">
                        <svg className="shrink-0 size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                          <defs>
                            <lineargradient id="_r_15_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                              <stop offset=".00006%" stopColor="#0845BF"></stop>
                              <stop offset="19.11%" stopColor="#0950DE"></stop>
                              <stop offset="38.23%" stopColor="#0B59F6"></stop>
                              <stop offset="50%" stopColor="#0B5CFF"></stop>
                              <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                              <stop offset="77.74%" stopColor="#1665FC"></stop>
                              <stop offset="86.33%" stopColor="#246FF9"></stop>
                              <stop offset="93.88%" stopColor="#387FF4"></stop>
                              <stop offset="100%" stopColor="#4F90EE"></stop>
                            </lineargradient>
                          </defs>
                          <path fill="url(#_r_15_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                          <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                        </svg>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <div className="font-medium text-foreground truncate">
                            {"Zoom"}
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Andre Costa"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="truncate">
                              {"ACC-3090"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"INV-20425"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"June seats"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Growth"}
                      </Badge>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"$2,480"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Mastercard ending 4417"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-warning">
                          {"Due in 3d"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 19"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Open"}
                      </Badge>
                    </td>
                    <td className="align-middle pe-4! px-2 py-1.5">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoice actions" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </td>
                  </tr>
                  <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="INV-20429">
                    <td className="align-middle ps-2! px-2 py-1.5">
                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1c_" aria-checked="false" aria-label="Select row"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex gap-3 items-center min-w-0">
                        <svg className="shrink-0 size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                          <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                          <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                          <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                          <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                        </svg>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <div className="font-medium text-foreground truncate">
                            {"Google Cloud"}
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Dominic Reyes"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="truncate">
                              {"ACC-3101"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"INV-20429"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"June seats"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Scale"}
                      </Badge>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"$4,800"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Visa ending 1190"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-warning">
                          {"Due in 6d"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 22"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Open"}
                      </Badge>
                    </td>
                    <td className="align-middle pe-4! px-2 py-1.5">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoice actions" aria-haspopup="menu" id="base-ui-_r_1i_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </td>
                  </tr>
                  <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="INV-20419">
                    <td className="align-middle ps-2! px-2 py-1.5">
                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1l_" aria-checked="false" aria-label="Select row"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex gap-3 items-center min-w-0">
                        <span className="dark:hidden flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                          <svg className="shrink-0 size-5" aria-hidden="true" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                            <title>
                              {"Anthropic"}
                            </title>
                            <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                          </svg>
                        </span>
                        <span className="dark:flex hidden items-center justify-center shrink-0 size-5" aria-hidden="true">
                          <svg className="shrink-0 size-5" aria-hidden="true" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                            <title>
                              {"Anthropic"}
                            </title>
                            <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                          </svg>
                        </span>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <div className="font-medium text-foreground truncate">
                            {"Anthropic"}
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                            <Avatar className="size-4" size="default">
                              <AvatarFallback className="font-medium text-[9px]">
                                {"SO"}
                              </AvatarFallback>
                            </Avatar>
                            <span className="truncate">
                              {"Sam Okafor"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="truncate">
                              {"ACC-3072"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"INV-20419"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"June seats"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Growth"}
                      </Badge>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"$2,980"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"ACH · Mercury"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"Due in 9d"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 25"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Open"}
                      </Badge>
                    </td>
                    <td className="align-middle pe-4! px-2 py-1.5">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoice actions" aria-haspopup="menu" id="base-ui-_r_1r_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </td>
                  </tr>
                  <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="INV-20423">
                    <td className="align-middle ps-2! px-2 py-1.5">
                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1u_" aria-checked="false" aria-label="Select row"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex gap-3 items-center min-w-0">
                        <span className="dark:hidden flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                          <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                            <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span className="dark:flex hidden items-center justify-center shrink-0 size-5" aria-hidden="true">
                          <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                          </svg>
                        </span>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <div className="font-medium text-foreground truncate">
                            {"GitHub"}
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Yuki Tanaka"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="truncate">
                              {"ACC-3085"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"INV-20423"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"June usage"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Growth"}
                      </Badge>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"$1,950"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Visa ending 7732"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium tabular-nums text-foreground">
                          {"Due in 12d"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 28"}
                        </span>
                      </div>
                    </td>
                    <td className="align-middle px-2 py-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Open"}
                      </Badge>
                    </td>
                    <td className="align-middle pe-4! px-2 py-1.5">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoice actions" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </td>
                  </tr>
                </DataGridTableBody>
                </DataGridProvider>
              </DataGridTable>
              </DataGridProvider>
            </DataGridTableViewport>
            </DataGridProvider>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="px-5 py-3">
              <DataGridProvider>
              <DataGridPagination>
                <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                  <div className="text-muted-foreground text-sm">
                    {"Rows per page"}
                  </div>
                  <Select>
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_27_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      {"6"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_27_-hidden-input" tabIndex="-1" aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    {"1 - 6 of 16"}
                  </div>
                  <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                    <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                      <span className="sr-only">
                        {"Go to previous page"}
                      </span>
                      <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </Button>
                    <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                      {"1"}
                    </Button>
                    <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                      {"2"}
                    </Button>
                    <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 3">
                      {"3"}
                    </Button>
                    <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                      <span className="sr-only">
                        {"Go to next page"}
                      </span>
                      <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </DataGridPagination>
              </DataGridProvider>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
