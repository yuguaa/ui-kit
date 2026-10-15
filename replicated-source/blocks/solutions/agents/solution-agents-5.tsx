import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
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
  Alert,
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
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/registry/bases/base/ui/sheet"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <div className="bg-background flex flex-col min-h-svh w-full">
      <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
        <div className="@container w-full">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex gap-2.5 items-center">
                <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                  {"Approval Inbox"}
                </h2>
                <span className="flex gap-1.5 items-center">
                  <span className="flex relative shrink-0 size-2" aria-hidden="true">
                    <span className="absolute animate-ping bg-emerald-500/60 inline-flex rounded-full size-full"></span>
                    <span className="bg-emerald-500 inline-flex relative rounded-full size-2"></span>
                  </span>
                  <span className="hidden sm:block text-muted-foreground text-sm">
                    {"Live"}
                  </span>
                </span>
              </div>
              <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-sm">
                <span className="tabular-nums">
                  {"8 requests"}
                </span>
                <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"6 pending"}
                </span>
                <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"1 over SLA"}
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Button type="button" tabIndex="0" aria-label="Refresh queue" extracted="1">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                <span className="hidden sm:block">
                  {"Export"}
                </span>
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                  <path d="M13 5h8"></path>
                  <path d="M13 12h8"></path>
                  <path d="M13 19h8"></path>
                  <path d="m3 17 2 2 4-4"></path>
                  <path d="m3 7 2 2 4-4"></path>
                </svg>
                <span className="hidden sm:block">
                  {"Review Next"}
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="@container w-full">
              <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-4 grid grid-cols-1">
                <Card size="default">
                  <CardContent className="flex flex-col gap-5">
                    <h3 className="font-medium text-muted-foreground text-sm">
                      {"Pending"}
                    </h3>
                    <div className="space-y-2.5">
                      <div className="flex gap-2.5 items-center">
                        <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                          {"6"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                            <path d="m5 12 7-7 7 7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                          {"3%"}
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="text-muted-foreground text-xs">
                        {"Awaiting a decision"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card size="default">
                  <CardContent className="flex flex-col gap-5">
                    <h3 className="font-medium text-muted-foreground text-sm">
                      {"Over SLA"}
                    </h3>
                    <div className="space-y-2.5">
                      <div className="flex gap-2.5 items-center">
                        <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                          {"1"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                            <path d="M12 5v14"></path>
                            <path d="m19 12-7 7-7-7"></path>
                          </svg>
                          {"4%"}
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="text-muted-foreground text-xs">
                        {"Past the 4h target"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card size="default">
                  <CardContent className="flex flex-col gap-5">
                    <h3 className="font-medium text-muted-foreground text-sm">
                      {"Approved Today"}
                    </h3>
                    <div className="space-y-2.5">
                      <div className="flex gap-2.5 items-center">
                        <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                          {"14"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                            <path d="m5 12 7-7 7 7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                          {"9%"}
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="text-muted-foreground text-xs">
                        {"Cleared since midnight"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card size="default">
                  <CardContent className="flex flex-col gap-5">
                    <h3 className="font-medium text-muted-foreground text-sm">
                      {"Median Decision"}
                    </h3>
                    <div className="space-y-2.5">
                      <div className="flex gap-2.5 items-center">
                        <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                          {"1h 22m"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                            <path d="M12 5v14"></path>
                            <path d="m19 12-7 7-7-7"></path>
                          </svg>
                          {"11%"}
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="text-muted-foreground text-xs">
                        {"From request to decision"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Card className="gap-0 h-full p-0 w-full" size="default">
              <CardHeader className="border-b gap-1 px-5 py-4">
                <CardTitle>
                  {"Approval Queue"}
                </CardTitle>
                <CardDescription className="text-xs">
                  {"8 requests in this view"}
                </CardDescription>
                <CardAction className="self-center">
                  <div className="flex gap-1.5 items-center">
                    <Button type="button" tabIndex="0" aria-pressed="false">
                      <svg className="lucide lucide-timer size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                        <line x1="10" x2="14" y1="2" y2="2"></line>
                        <line x1="12" x2="15" y1="14" y2="11"></line>
                        <circle cx="12" cy="14" r="8"></circle>
                      </svg>
                      {"Over SLA"}
                    </Button>
                    <Button type="button" tabIndex="0">
                      <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                        <path d="M12 15V3"></path>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10 5 5 5-5"></path>
                      </svg>
                      {"Export"}
                    </Button>
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2 items-center px-5 py-3">
                  <InputGroup className="min-w-56 sm:w-64" role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search requests..." aria-label="Search requests" value="" />
                  </InputGroup>
                  <Select>
                  <SelectTrigger className="w-[172px]" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"All risk tiers"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by status" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                    </svg>
                    {"Status"}
                  </PopoverTrigger>
                  </Popover>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="relative">
                  <DataGridProvider>
                  <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                      <div role="presentation" style={{minWidth: "fit-content"}}>
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
                            </colgroup>
                            <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                              <tr className="[&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-3! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0">
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_8_" aria-checked="false" aria-label="Select all"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="agent" data-header-id="agent" data-header-depth="0">
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      {"Agent"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="request" data-header-id="request" data-header-depth="0">
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      {"Request"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="risk" data-header-id="risk" data-header-depth="0">
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      {"Risk"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="sla" data-header-id="sla" data-header-depth="0">
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      {"SLA"}
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
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0"></th>
                              </tr>
                            </thead>
                            <DataGridProvider>
                            <DataGridTableBody>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="APR-7421">
                                <td className="align-middle ps-3! px-2 py-1.5">
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_b_" aria-checked="false" aria-label="Select row"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                          <line x1="2" x2="22" y1="10" y2="10"></line>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <div className="font-medium text-foreground truncate">
                                        {"Refund Resolver"}
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        {"stripe.refunds.create"}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 group/request min-w-0">
                                    <div className="flex gap-1 items-center min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium hover:underline min-w-0 rounded-sm text-foreground text-start truncate" type="button">
                                        {"Issue $1,240 refund on ORD-99214"}
                                      </button>
                                      <svg className="duration-150 group-hover/request:opacity-100 lucide lucide-arrow-up-right motion-reduce:transition-none opacity-0 pointer-events-none shrink-0 size-3.5 text-muted-foreground transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </div>
                                    <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        {"APR-7421"}
                                      </span>
                                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"5h 8m"}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"High"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-warning">
                                      {"Breached 1h 8m"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"Past the 4h review SLA"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5"></span>
                                    {"Pending"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="APR-7415">
                                <td className="align-middle ps-3! px-2 py-1.5">
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_j_" aria-checked="false" aria-label="Select row"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          <path d="M10 9H8"></path>
                                          <path d="M16 13H8"></path>
                                          <path d="M16 17H8"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <div className="font-medium text-foreground truncate">
                                        {"Contract Summarizer"}
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        {"kb.search"}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 group/request min-w-0">
                                    <div className="flex gap-1 items-center min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium hover:underline min-w-0 rounded-sm text-foreground text-start truncate" type="button">
                                        {"Share renewal summary with Globex"}
                                      </button>
                                      <svg className="duration-150 group-hover/request:opacity-100 lucide lucide-arrow-up-right motion-reduce:transition-none opacity-0 pointer-events-none shrink-0 size-3.5 text-muted-foreground transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </div>
                                    <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        {"APR-7415"}
                                      </span>
                                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"1h 42m"}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    {"Low"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-muted-foreground">
                                      {"Decided"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"No live SLA"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5"></span>
                                    {"Approved"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="APR-7429">
                                <td className="align-middle ps-3! px-2 py-1.5">
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_r_" aria-checked="false" aria-label="Select row"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                                          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                          <path d="m21.854 2.147-10.94 10.939"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <div className="font-medium text-foreground truncate">
                                        {"Outreach Composer"}
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        {"sendgrid.mail.send"}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 group/request min-w-0">
                                    <div className="flex gap-1 items-center min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium hover:underline min-w-0 rounded-sm text-foreground text-start truncate" type="button">
                                        {"Send bulk email to 2,480 EU customers"}
                                      </button>
                                      <svg className="duration-150 group-hover/request:opacity-100 lucide lucide-arrow-up-right motion-reduce:transition-none opacity-0 pointer-events-none shrink-0 size-3.5 text-muted-foreground transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </div>
                                    <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        {"APR-7429"}
                                      </span>
                                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"24m"}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"High"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground">
                                      {"36m left"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"Due within the hour"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5"></span>
                                    {"Pending"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="APR-7412">
                                <td className="align-middle ps-3! px-2 py-1.5">
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_13_" aria-checked="false" aria-label="Select row"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                          <line x1="2" x2="22" y1="10" y2="10"></line>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <div className="font-medium text-foreground truncate">
                                        {"Refund Resolver"}
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        {"stripe.refunds.create"}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 group/request min-w-0">
                                    <div className="flex gap-1 items-center min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium hover:underline min-w-0 rounded-sm text-foreground text-start truncate" type="button">
                                        {"Issue $2,150 refund on ORD-99102"}
                                      </button>
                                      <svg className="duration-150 group-hover/request:opacity-100 lucide lucide-arrow-up-right motion-reduce:transition-none opacity-0 pointer-events-none shrink-0 size-3.5 text-muted-foreground transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </div>
                                    <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        {"APR-7412"}
                                      </span>
                                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"1h 58m"}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"High"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-muted-foreground">
                                      {"Decided"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"No live SLA"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    <span className="bg-rose-500 dark:bg-rose-400 rounded-full! shrink-0 size-1.5"></span>
                                    {"Rejected"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="APR-7427">
                                <td className="align-middle ps-3! px-2 py-1.5">
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1b_" aria-checked="false" aria-label="Select row"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <div className="font-medium text-foreground truncate">
                                        {"Data Steward"}
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        {"postgres.query"}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 group/request min-w-0">
                                    <div className="flex gap-1 items-center min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium hover:underline min-w-0 rounded-sm text-foreground text-start truncate" type="button">
                                        {"Purge 1,290 stale lead records"}
                                      </button>
                                      <svg className="duration-150 group-hover/request:opacity-100 lucide lucide-arrow-up-right motion-reduce:transition-none opacity-0 pointer-events-none shrink-0 size-3.5 text-muted-foreground transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </div>
                                    <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        {"APR-7427"}
                                      </span>
                                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"31m"}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"High"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground">
                                      {"54m left"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"Due within the hour"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5"></span>
                                    {"Pending"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_1h_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="APR-7428">
                                <td className="align-middle ps-3! px-2 py-1.5">
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1j_" aria-checked="false" aria-label="Select row"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                          <path d="M20 2v4"></path>
                                          <path d="M22 4h-4"></path>
                                          <circle cx="4" cy="20" r="2"></circle>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <div className="font-medium text-foreground truncate">
                                        {"Lead Enricher"}
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        {"postgres.query"}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 group/request min-w-0">
                                    <div className="flex gap-1 items-center min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium hover:underline min-w-0 rounded-sm text-foreground text-start truncate" type="button">
                                        {"Backfill titles on 312 leads"}
                                      </button>
                                      <svg className="duration-150 group-hover/request:opacity-100 lucide lucide-arrow-up-right motion-reduce:transition-none opacity-0 pointer-events-none shrink-0 size-3.5 text-muted-foreground transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </div>
                                    <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        {"APR-7428"}
                                      </span>
                                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"46m"}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"Medium"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-foreground">
                                      {"1h 36m left"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"Within 4h target"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5"></span>
                                    {"Pending"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
                      </div>
                    </div>
                  </DataGridScrollArea>
                  </DataGridProvider>
                </div>
              </CardContent>
              <CardFooter className="border-t px-5 py-3">
                <div className="flex justify-end w-full">
                  <DataGridProvider>
                  <DataGridPagination>
                    <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                      <div className="text-muted-foreground text-sm">
                        {"Rows per page"}
                      </div>
                      <Select>
                      <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_1r_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                        <SelectValue>
                          {"6"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_1r_-hidden-input" tabIndex="-1" aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                      <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                        {"1 - 6 of 8"}
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
              </CardFooter>
            </Card>
            <div className="@2xl:grid-cols-2 @4xl:grid-cols-3 gap-4 grid grid-cols-1">
              <Card className="gap-0 h-full p-0" size="default">
                <CardHeader className="border-b gap-1 px-5 py-4">
                  <CardTitle>
                    {"Recent Decisions"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 py-5">
                  <Timeline data-orientation="vertical">
                    <TimelineItem className="ms-8 pb-8" completed="true">
                      <TimelineHeader>
                        <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-2 items-center">
                          <TimelineTitle className="font-semibold">
                            <a className="font-medium hover:text-primary hover:underline me-1.5 tabular-nums text-muted-foreground transition-colors underline-offset-2" href="#" aria-label="Open decision APR-7415">
                              {"APR-7415"}
                            </a>
                            <span>
                              {"Renewal summary"}
                            </span>
                          </TimelineTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"Approved"}
                          </Badge>
                        </div>
                        <TimelineIndicator className="bg-primary border-none flex items-center justify-center size-5 text-primary-foreground" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5">
                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="font-medium text-foreground">
                            {"Maya Perez"}
                          </span>
                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"1h ago"}
                          </span>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="ms-8 pb-8">
                      <TimelineHeader>
                        <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-2 items-center">
                          <TimelineTitle className="font-semibold">
                            <a className="font-medium hover:text-primary hover:underline me-1.5 tabular-nums text-muted-foreground transition-colors underline-offset-2" href="#" aria-label="Open decision APR-7412">
                              {"APR-7412"}
                            </a>
                            <span>
                              {"$2,150 refund"}
                            </span>
                          </TimelineTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            {"Rejected"}
                          </Badge>
                        </div>
                        <TimelineIndicator className="bg-muted border-none flex items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                          <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5">
                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <Avatar className="size-5" size="default">
                            <AvatarFallback className="text-[9px]">
                              {"JR"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-foreground">
                            {"Jonas Reed"}
                          </span>
                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"1h 30m ago"}
                          </span>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="ms-8 pb-8">
                      <TimelineHeader>
                        <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-2 items-center">
                          <TimelineTitle className="font-semibold">
                            <a className="font-medium hover:text-primary hover:underline me-1.5 tabular-nums text-muted-foreground transition-colors underline-offset-2" href="#" aria-label="Open decision APR-7409">
                              {"APR-7409"}
                            </a>
                            <span>
                              {"$42 credit"}
                            </span>
                          </TimelineTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"Approved"}
                          </Badge>
                        </div>
                        <TimelineIndicator className="bg-primary border-none flex items-center justify-center size-5 text-primary-foreground" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5">
                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="font-medium text-foreground">
                            {"Maya Perez"}
                          </span>
                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"2h ago"}
                          </span>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="ms-8 pb-0">
                      <TimelineHeader>
                        <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-2 items-center">
                          <TimelineTitle className="font-semibold">
                            <a className="font-medium hover:text-primary hover:underline me-1.5 tabular-nums text-muted-foreground transition-colors underline-offset-2" href="#" aria-label="Open decision APR-7404">
                              {"APR-7404"}
                            </a>
                            <span>
                              {"Lead purge held"}
                            </span>
                          </TimelineTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            {"Rejected"}
                          </Badge>
                        </div>
                        <TimelineIndicator className="bg-muted border-none flex items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                          <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5">
                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <Avatar className="size-5" size="default">
                            <AvatarFallback className="text-[9px]">
                              {"JR"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-foreground">
                            {"Jonas Reed"}
                          </span>
                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"2h 40m ago"}
                          </span>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </CardContent>
              </Card>
              <Card className="gap-0 h-full p-0" size="default">
                <CardHeader className="border-b gap-1 px-5 py-4">
                  <CardTitle>
                    {"Approval Policy"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 px-5 py-4">
                  <div className="flex gap-2.5 items-start">
                    <Item className="[&_svg]:size-4 [&_svg]:text-white bg-emerald-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <a className="font-medium hover:text-primary hover:underline leading-tight text-foreground text-sm transition-colors underline-offset-4" href="#">
                        {"Auto-Approve Threshold"}
                      </a>
                      <p className="leading-snug mt-0.5 text-muted-foreground text-xs">
                        {"Low-risk actions run without a human reviewer."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <Item className="[&_svg]:size-4 [&_svg]:text-white bg-indigo-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M6 12h.01M18 12h.01"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <a className="font-medium hover:text-primary hover:underline leading-tight text-foreground text-sm transition-colors underline-offset-4" href="#">
                        {"Finance Second Approval"}
                      </a>
                      <p className="leading-snug mt-0.5 text-muted-foreground text-xs">
                        {"Refunds over $500 need a finance sign-off."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <Item className="[&_svg]:size-4 [&_svg]:text-white bg-amber-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <a className="font-medium hover:text-primary hover:underline leading-tight text-foreground text-sm transition-colors underline-offset-4" href="#">
                        {"Bulk Send Cap"}
                      </a>
                      <p className="leading-snug mt-0.5 text-muted-foreground text-xs">
                        {"Sends above 2,000 recipients need review."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <Item className="[&_svg]:size-4 [&_svg]:text-white bg-rose-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="M12 8v4"></path>
                          <path d="M12 16h.01"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <a className="font-medium hover:text-primary hover:underline leading-tight text-foreground text-sm transition-colors underline-offset-4" href="#">
                        {"Irreversible Action Hold"}
                      </a>
                      <p className="leading-snug mt-0.5 text-muted-foreground text-xs">
                        {"Deletes and purges pause for a human."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <Item className="[&_svg]:size-4 [&_svg]:text-white bg-sky-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                          <line x1="10" x2="14" y1="2" y2="2"></line>
                          <line x1="12" x2="15" y1="14" y2="11"></line>
                          <circle cx="12" cy="14" r="8"></circle>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <a className="font-medium hover:text-primary hover:underline leading-tight text-foreground text-sm transition-colors underline-offset-4" href="#">
                        {"Review SLA"}
                      </a>
                      <p className="leading-snug mt-0.5 text-muted-foreground text-xs">
                        {"Every request gets a decision within 4 hours."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="gap-0 h-full p-0" size="default">
                <CardHeader className="border-b gap-1 px-5 py-4">
                  <CardTitle>
                    {"Review Coverage"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-2 grid grid-cols-2 px-5 py-5">
                  <Item className="cursor-pointer flex-col gap-4 h-full hover:bg-muted/60 hover:border-primary/30 items-stretch justify-between p-3 text-left" type="button" variant="outline" size="sm" aria-label="Focus Ops Lead coverage" aria-pressed="false">
                    <div className="flex gap-2 items-start justify-between">
                      <ItemContent className="gap-1 min-w-0">
                        <ItemTitle className="font-medium max-w-full text-muted-foreground text-xs truncate">
                          {"Ops Lead"}
                        </ItemTitle>
                        <span className="font-medium leading-tight text-foreground text-sm">
                          {"Maya Perez"}
                        </span>
                      </ItemContent>
                      <ItemMedia className="[&_svg]:size-4 [&_svg]:text-muted-foreground mt-0.5" variant="icon">
                        <svg className="lucide lucide-user-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCheckIcon" tabler="IconUserCheck" hugeicons="UserCheck01Icon" phosphor="UserCheckIcon" remixicon="RiUserFollowLine" aria-hidden="true">
                          <path d="m16 11 2 2 4-4"></path>
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </ItemMedia>
                    </div>
                    <ItemDescription className="leading-tight text-xs">
                      {"Breached high-risk"}
                    </ItemDescription>
                  </Item>
                  <Item className="cursor-pointer flex-col gap-4 h-full hover:bg-muted/60 hover:border-primary/30 items-stretch justify-between p-3 text-left" type="button" variant="outline" size="sm" aria-label="Focus Finance Desk coverage" aria-pressed="false">
                    <div className="flex gap-2 items-start justify-between">
                      <ItemContent className="gap-1 min-w-0">
                        <ItemTitle className="font-medium max-w-full text-muted-foreground text-xs truncate">
                          {"Finance Desk"}
                        </ItemTitle>
                        <span className="font-medium leading-tight text-foreground text-sm">
                          {"Finance"}
                        </span>
                      </ItemContent>
                      <ItemMedia className="[&_svg]:size-4 [&_svg]:text-muted-foreground mt-0.5" variant="icon">
                        <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                      </ItemMedia>
                    </div>
                    <ItemDescription className="leading-tight text-xs">
                      {"Refunds over $500"}
                    </ItemDescription>
                  </Item>
                  <Item className="cursor-pointer flex-col gap-4 h-full hover:bg-muted/60 hover:border-primary/30 items-stretch justify-between p-3 text-left" type="button" variant="outline" size="sm" aria-label="Focus Privacy Review coverage" aria-pressed="false">
                    <div className="flex gap-2 items-start justify-between">
                      <ItemContent className="gap-1 min-w-0">
                        <ItemTitle className="font-medium max-w-full text-muted-foreground text-xs truncate">
                          {"Privacy Review"}
                        </ItemTitle>
                        <span className="font-medium leading-tight text-foreground text-sm">
                          {"Consent"}
                        </span>
                      </ItemContent>
                      <ItemMedia className="[&_svg]:size-4 [&_svg]:text-muted-foreground mt-0.5" variant="icon">
                        <svg className="lucide lucide-lock-keyhole" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockKeyholeIcon" tabler="IconLock" hugeicons="LockKeyIcon" phosphor="LockKeyIcon" remixicon="RiLockLine" aria-hidden="true">
                          <circle cx="12" cy="16" r="1"></circle>
                          <rect x="3" y="10" width="18" height="12" rx="2"></rect>
                          <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                        </svg>
                      </ItemMedia>
                    </div>
                    <ItemDescription className="leading-tight text-xs">
                      {"EU bulk sends"}
                    </ItemDescription>
                  </Item>
                  <Item className="cursor-pointer flex-col gap-4 h-full hover:bg-muted/60 hover:border-primary/30 items-stretch justify-between p-3 text-left" type="button" variant="outline" size="sm" aria-label="Focus Safety Review coverage" aria-pressed="false">
                    <div className="flex gap-2 items-start justify-between">
                      <ItemContent className="gap-1 min-w-0">
                        <ItemTitle className="font-medium max-w-full text-muted-foreground text-xs truncate">
                          {"Safety Review"}
                        </ItemTitle>
                        <span className="font-medium leading-tight text-foreground text-sm">
                          {"Jonas Reed"}
                        </span>
                      </ItemContent>
                      <ItemMedia className="[&_svg]:size-4 [&_svg]:text-muted-foreground mt-0.5" variant="icon">
                        <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </ItemMedia>
                    </div>
                    <ItemDescription className="leading-tight text-xs">
                      {"Destructive actions"}
                    </ItemDescription>
                  </Item>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Sheet>
    <SheetContent className="gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(26rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_1u_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_21_" aria-describedby="base-ui-_r_22_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-3 pb-3 pt-4 px-4 shrink-0">
        <div className="flex gap-3 items-start justify-between">
          <div className="flex gap-2.5 items-center min-w-0">
            <Item className="[&_svg]:size-4.5 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </ItemMedia>
            </Item>
            <div className="min-w-0">
              <SheetTitle className="text-sm truncate" id="base-ui-_r_21_">
                {"Issue $1,240 refund on ORD-99214"}
              </SheetTitle>
              <SheetDescription className="text-xs truncate" id="base-ui-_r_22_">
                {"Refund Resolver · APR-7421"}
              </SheetDescription>
            </div>
          </div>
          <SheetClose className="-me-1.5 -mt-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
            {"High risk"}
          </Badge>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
            <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5"></span>
            {"Pending"}
          </Badge>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_23_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                  {"SLA breached"}
                </AlertTitle>
                <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                  {"Requested at 04:52, now past the 4h review SLA."}
                </AlertDescription>
              </Alert>
              <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                  {"Above the $500 finance threshold"}
                </AlertTitle>
                <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                  {"Refunds over $500 need a finance second approval."}
                </AlertDescription>
              </Alert>
              <section className="flex flex-col gap-3" aria-labelledby="APR-7421-payload">
                <h3 className="font-semibold text-foreground text-sm" id="APR-7421-payload">
                  {"Payload"}
                </h3>
                <dl className="flex flex-col gap-3">
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      {"Amount"}
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                      {"$1,240.00"}
                    </dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      {"Order"}
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                      {"ORD-99214"}
                    </dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      {"Customer"}
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                      {"Acme Corp"}
                    </dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      {"SLA"}
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                      <span className="text-warning">
                        {"Breached 1h 8m"}
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      {"Reviewer"}
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                      <span className="flex gap-1.5 items-center justify-end">
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        {"Maya Perez"}
                      </span>
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="border-t px-4 py-3 shrink-0">
        <div className="gap-3 grid grid-cols-2">
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
            {"Reject"}
          </Button>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            {"Approve"}
          </Button>
        </div>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
