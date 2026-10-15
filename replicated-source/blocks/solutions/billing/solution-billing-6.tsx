import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  FilterChip,
  Filters,
} from "@/registry-neui/bases/base/neui/filters/filters"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
import { Spinner } from "@/registry/bases/base/ui/spinner"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex flex-wrap gap-2.5 items-center">
              <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                Recovery Queue
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                $23,950 at risk
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              6 SaaS invoices with live retry paths
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center shrink-0">
            <Button className="text-foreground" type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                <path d="M14 17H5"></path>
                <path d="M19 7h-9"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
              Rules
            </Button>
            <Button className="text-foreground" type="button" tabIndex="0">
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              Export
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
              Retry Due
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="gap-3 grid grid-cols-1 sm:grid-cols-3">
            <Frame className="h-full min-w-0" spacing="sm">
              <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="font-semibold text-foreground text-sm">
                    Amount at Risk
                  </div>
                  <div className="text-muted-foreground text-xs truncate">
                    Open failed charges now
                  </div>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                  8%
                </Badge>
              </header>
              <FramePanel className="flex flex-col gap-4 h-full">
                <div className="flex gap-3 items-end justify-between">
                  <span className="font-semibold leading-none tabular-nums text-[2rem] text-foreground tracking-tight">
                    $23,950
                  </span>
                  <div className="flex flex-col gap-0.5 items-end pb-0.5 shrink-0">
                    <span className="leading-4 text-muted-foreground text-xs">
                      7 day move
                    </span>
                    <span className="font-medium leading-5 tabular-nums text-sm text-success">
                      -8%
                    </span>
                  </div>
                </div>
                <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div className="bg-warning h-full rounded-full w-3/4"></div>
                </div>
                <div className="gap-2 grid grid-cols-3 mt-auto">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      2
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Failed
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      2
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Retrying
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      2
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Scheduled
                    </span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <Frame className="h-full min-w-0" spacing="sm">
              <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="font-semibold text-foreground text-sm">
                    Recovered
                  </div>
                  <div className="text-muted-foreground text-xs truncate">
                    Recovered charges this month
                  </div>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                  12%
                </Badge>
              </header>
              <FramePanel className="flex flex-col gap-4 h-full">
                <div className="flex gap-3 items-end justify-between">
                  <span className="font-semibold leading-none tabular-nums text-[2rem] text-foreground tracking-tight">
                    $16,500
                  </span>
                  <div className="flex flex-col gap-0.5 items-end pb-0.5 shrink-0">
                    <span className="leading-4 text-muted-foreground text-xs">
                      7 day move
                    </span>
                    <span className="font-medium leading-5 tabular-nums text-sm text-success">
                      +12%
                    </span>
                  </div>
                </div>
                <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div className="bg-success h-full rounded-full w-4/5"></div>
                </div>
                <div className="gap-2 grid grid-cols-3 mt-auto">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      2
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Invoices
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      $8,900
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Top win
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      2
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Playbooks
                    </span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <Frame className="h-full min-w-0" spacing="sm">
              <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="font-semibold text-foreground text-sm">
                    Recovery Rate
                  </div>
                  <div className="text-muted-foreground text-xs truncate">
                    Smart retries across SaaS accounts
                  </div>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                  3%
                </Badge>
              </header>
              <FramePanel className="flex flex-col gap-4 h-full">
                <div className="flex gap-3 items-end justify-between">
                  <span className="font-semibold leading-none tabular-nums text-[2rem] text-foreground tracking-tight">
                    25%
                  </span>
                  <div className="flex flex-col gap-0.5 items-end pb-0.5 shrink-0">
                    <span className="leading-4 text-muted-foreground text-xs">
                      7 day move
                    </span>
                    <span className="font-medium leading-5 tabular-nums text-sm text-success">
                      +3%
                    </span>
                  </div>
                </div>
                <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div className="bg-info h-full rounded-full w-2/3"></div>
                </div>
                <div className="gap-2 grid grid-cols-3 mt-auto">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      19
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Attempts
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      32
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Capacity
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium tabular-nums text-foreground text-sm truncate">
                      4
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      Max tries
                    </span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
          </div>
          <Frame className="w-full" spacing="sm">
            <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-px">
                <div className="font-semibold text-balance text-sm">
                  Past Due Invoices
                </div>
                <div className="text-muted-foreground text-pretty text-xs">
                  Live SaaS retries, payment methods, and owners.
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <Button className="text-foreground" type="button" tabIndex="0">
                  <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  Export
                </Button>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                  Retry Due
                </Button>
              </div>
            </header>
            <FramePanel className="bg-card p-0! shadow-none!">
              <div className="flex flex-wrap gap-3 items-center px-(--frame-panel-header-px) py-2.5">
                <div className="flex flex-1 flex-wrap gap-2 items-center min-w-0">
                  <Filters>
                    <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                      <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Customer contains no value" ruleId="customerName-1" tabIndex="0" index="0">
                        <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Customer">
                          <span className="flex items-center">
                            <span>
                              Customer
                            </span>
                          </span>
                        </div>
                        <Popover>
                        <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false">
                          contains
                        </PopoverTrigger>
                        </Popover>
                        <Popover>
                        <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search customers..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
                          Search customers...
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
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                      <svg className="lucide lucide-funnel size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                      Filters
                    </PopoverTrigger>
                    </Popover>
                    <div className="sr-only" aria-live="polite" role="status">
                      <span></span>
                    </div>
                  </Filters>
                </div>
                <div className="flex items-center ml-auto shrink-0">
                  <Button className="text-foreground" type="button" disabled="" tabIndex="0" disabled>
                    <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    Clear
                  </Button>
                </div>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="relative">
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_d_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridTableViewport style={{width: "calc(1246px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                        <DataGridTable style={{"--header-customer-size": "404", "--col-customer-size": "404", "--header-status-size": "150", "--col-status-size": "150", "--header-billing-size": "180", "--col-billing-size": "180", "--header-owner-size": "168", "--col-owner-size": "168", "--header-amount-size": "136", "--col-amount-size": "136", "--header-nextRetry-size": "152", "--col-nextRetry-size": "152", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1246px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-customer-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-billing-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-amount-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-nextRetry-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="customer" data-header-id="customer" data-header-depth="0" style={{width: "calc(var(--header-customer-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    Customer
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    Status
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="billing" data-header-id="billing" data-header-depth="0" style={{width: "calc(var(--header-billing-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    Billing
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    Collector
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="amount" data-header-id="amount" data-header-depth="0" style={{width: "calc(var(--header-amount-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    Amount
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="nextRetry" data-header-id="nextRetry" data-header-depth="0" style={{width: "calc(var(--header-nextRetry-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    Next Retry
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                                <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Hide retry attempts for INV-20418">
                                    <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="size-4" fill="none" viewBox="100 100 312 312">
                                        <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Stripe invoice INV-20418">
                                      Stripe
                                    </a>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="tabular-nums truncate">
                                        SUB-4712
                                      </span>
                                      <Separator className="h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      <span className="truncate">
                                        Payments Cloud
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Failed
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-billing-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <div className="flex flex-wrap gap-1 items-center">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border-0 border-transparent dark:bg-warning/15 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning text-xs transition-shadow">
                                      Enterprise
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      Platform fee
                                    </Badge>
                                  </div>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Connect platform
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Karl Vogel" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="text-foreground text-sm truncate">
                                    Karl Vogel
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    $6,200
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                                    PM-7741
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-nextRetry-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-destructive text-sm">
                                    Jun 18
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Attempt 3 of 4
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for INV-20418" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b">
                              <td colSpan="8">
                                <div className="bg-muted/25 px-(--frame-panel-px) py-3">
                                  <Frame spacing="xs">
                                    <FramePanel className="p-0! shadow-none!">
                                      <div className="border-b gap-2 grid grid-cols-1 px-3 py-2.5 sm:grid-cols-[1fr_auto] sm:items-center">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="font-medium text-foreground text-sm">
                                            Retry Attempts
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Card update for Visa ending 4242
                                          </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 items-center leading-none text-muted-foreground text-xs">
                                          <span className="leading-none tabular-nums">
                                            INV-20418
                                          </span>
                                          <Separator className="h-3 self-center!" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                          <span className="leading-none">
                                            High ARR
                                          </span>
                                        </div>
                                      </div>
                                      <ul className="flex flex-col">
                                        <li className="gap-3 grid md:grid-cols-[minmax(220px,1.4fr)_minmax(160px,1fr)_minmax(128px,auto)] md:items-center px-3 py-2.5">
                                          <div className="flex gap-2.5 items-start min-w-0">
                                            <span className="bg-destructive/10 dark:bg-destructive/20 flex items-center justify-center relative rounded-full shrink-0 size-6 text-destructive z-10" aria-hidden="true">
                                              <svg className="lucide lucide-triangle-alert size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine">
                                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                                <path d="M12 9v4"></path>
                                                <path d="M12 17h.01"></path>
                                              </svg>
                                            </span>
                                            <div className="flex-1 min-w-0">
                                              <div className="flex flex-wrap gap-2 items-center min-w-0">
                                                <span className="font-medium text-foreground text-sm">
                                                  Attempt 1
                                                </span>
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                                  Failed
                                                </Badge>
                                              </div>
                                              <p className="mt-0.5 text-muted-foreground text-xs truncate">
                                                Retry at local wallet peak.
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <span className="text-foreground text-sm truncate">
                                              Insufficient funds
                                            </span>
                                            <span className="text-muted-foreground text-xs truncate">
                                              insufficient_funds
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-0.5 md:text-right min-w-0">
                                            <span className="font-medium tabular-nums text-foreground text-sm">
                                              $6,200
                                            </span>
                                            <span className="text-muted-foreground text-xs">
                                              May 29
                                            </span>
                                          </div>
                                        </li>
                                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                        <li className="gap-3 grid md:grid-cols-[minmax(220px,1.4fr)_minmax(160px,1fr)_minmax(128px,auto)] md:items-center px-3 py-2.5">
                                          <div className="flex gap-2.5 items-start min-w-0">
                                            <span className="bg-destructive/10 dark:bg-destructive/20 flex items-center justify-center relative rounded-full shrink-0 size-6 text-destructive z-10" aria-hidden="true">
                                              <svg className="lucide lucide-triangle-alert size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine">
                                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                                <path d="M12 9v4"></path>
                                                <path d="M12 17h.01"></path>
                                              </svg>
                                            </span>
                                            <div className="flex-1 min-w-0">
                                              <div className="flex flex-wrap gap-2 items-center min-w-0">
                                                <span className="font-medium text-foreground text-sm">
                                                  Attempt 2
                                                </span>
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                                  Failed
                                                </Badge>
                                              </div>
                                              <p className="mt-0.5 text-muted-foreground text-xs truncate">
                                                Issuer blocked repeat attempt.
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <span className="text-foreground text-sm truncate">
                                              Issuer declined
                                            </span>
                                            <span className="text-muted-foreground text-xs truncate">
                                              do_not_honor
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-0.5 md:text-right min-w-0">
                                            <span className="font-medium tabular-nums text-foreground text-sm">
                                              $6,200
                                            </span>
                                            <span className="text-muted-foreground text-xs">
                                              Jun 3
                                            </span>
                                          </div>
                                        </li>
                                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                        <li className="gap-3 grid md:grid-cols-[minmax(220px,1.4fr)_minmax(160px,1fr)_minmax(128px,auto)] md:items-center px-3 py-2.5">
                                          <div className="flex gap-2.5 items-start min-w-0">
                                            <span className="bg-destructive/10 dark:bg-destructive/20 flex items-center justify-center relative rounded-full shrink-0 size-6 text-destructive z-10" aria-hidden="true">
                                              <svg className="lucide lucide-triangle-alert size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine">
                                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                                <path d="M12 9v4"></path>
                                                <path d="M12 17h.01"></path>
                                              </svg>
                                            </span>
                                            <div className="flex-1 min-w-0">
                                              <div className="flex flex-wrap gap-2 items-center min-w-0">
                                                <span className="font-medium text-foreground text-sm">
                                                  Attempt 3
                                                </span>
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                                  Failed
                                                </Badge>
                                              </div>
                                              <p className="mt-0.5 text-muted-foreground text-xs truncate">
                                                Hosted card update requested.
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <span className="text-foreground text-sm truncate">
                                              Card declined
                                            </span>
                                            <span className="text-muted-foreground text-xs truncate">
                                              generic_decline
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-0.5 md:text-right min-w-0">
                                            <span className="font-medium tabular-nums text-foreground text-sm">
                                              $6,200
                                            </span>
                                            <span className="text-muted-foreground text-xs">
                                              Jun 10
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </FramePanel>
                                  </Frame>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show retry attempts for INV-20451">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="size-4" viewBox="0 0 109 113" fill="none">
                                        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                                        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                                        <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                                        <defs>
                                          <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#249361"></stop>
                                            <stop offset="1" stopColor="#3ECF8E"></stop>
                                          </lineargradient>
                                          <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                            <stop></stop>
                                            <stop offset="1" stopOpacity="0"></stop>
                                          </lineargradient>
                                        </defs>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Supabase invoice INV-20451">
                                      Supabase
                                    </a>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="tabular-nums truncate">
                                        SUB-4794
                                      </span>
                                      <Separator className="h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      <span className="truncate">
                                        Database Cloud
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Failed
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-billing-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <div className="flex flex-wrap gap-1 items-center">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-transparent dark:bg-success/15 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success text-xs transition-shadow">
                                      Scale
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      Usage based
                                    </Badge>
                                  </div>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Database usage
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Lena Fischer" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="text-foreground text-sm truncate">
                                    Lena Fischer
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    $4,800
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                                    PM-7743
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-nextRetry-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-destructive text-sm">
                                    Retries exhausted
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Attempt 4 of 4
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for INV-20451" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show retry attempts for INV-20436">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="size-4" viewBox="0 0 2447.6 2452.5">
                                        <g clipRule="evenodd" fillRule="evenodd">
                                          <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                          <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                          <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                          <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                        </g>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Slack invoice INV-20436">
                                      Slack
                                    </a>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="tabular-nums truncate">
                                        SUB-4806
                                      </span>
                                      <Separator className="h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      <span className="truncate">
                                        Enterprise Grid
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <Spinner className="lucide lucide-loader-circle shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="status" aria-label="Loading">
                                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                  </Spinner>
                                  Retrying
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-billing-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <div className="flex flex-wrap gap-1 items-center">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-transparent dark:bg-success/15 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success text-xs transition-shadow">
                                      Scale
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      Seat based
                                    </Badge>
                                  </div>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Team seats
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Priya Nair" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="text-foreground text-sm truncate">
                                    Priya Nair
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    $5,400
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                                    PM-7742
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-nextRetry-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm">
                                    Today
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Attempt 3 of 4
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for INV-20436" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="5">
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show retry attempts for INV-20402">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="size-4" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                        <defs>
                                          <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                            <stop offset="0%" stopColor="#62F755"></stop>
                                            <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                          </lineargradient>
                                          <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                            <stop offset="0%" stopOpacity=".9"></stop>
                                            <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                          </lineargradient>
                                        </defs>
                                        <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                        <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                        <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                        <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Neon invoice INV-20402">
                                      Neon
                                    </a>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="tabular-nums truncate">
                                        SUB-4660
                                      </span>
                                      <Separator className="h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      <span className="truncate">
                                        Serverless Postgres
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <Spinner className="lucide lucide-loader-circle shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="status" aria-label="Loading">
                                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                  </Spinner>
                                  Retrying
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-billing-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <div className="flex flex-wrap gap-1 items-center">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border-0 border-transparent dark:bg-info/15 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info text-xs transition-shadow">
                                      Growth
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      Usage based
                                    </Badge>
                                  </div>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Compute overages
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Karl Vogel" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="text-foreground text-sm truncate">
                                    Karl Vogel
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    $2,400
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                                    PM-7745
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-nextRetry-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm">
                                    Today
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Attempt 2 of 4
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for INV-20402" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="4">
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show retry attempts for INV-20447">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="dark:hidden size-4" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                        <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                      </svg>
                                      <svg className="dark:block hidden size-4" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                        <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View OpenAI invoice INV-20447">
                                      OpenAI
                                    </a>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="tabular-nums truncate">
                                        SUB-4830
                                      </span>
                                      <Separator className="h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      <span className="truncate">
                                        API Platform
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Retry scheduled
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-billing-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <div className="flex flex-wrap gap-1 items-center">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border-0 border-transparent dark:bg-info/15 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info text-xs transition-shadow">
                                      Growth
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      AI credits
                                    </Badge>
                                  </div>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Inference credits
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Dominic Reyes" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="text-foreground text-sm truncate">
                                    Dominic Reyes
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    $3,200
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                                    PM-7744
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-nextRetry-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm">
                                    Jun 18
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Attempt 1 of 4
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for INV-20447" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="6">
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Show retry attempts for INV-20444">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="dark:brightness-0 dark:invert size-4" fill="none" viewBox="0 0 128 128">
                                        <circle cx="64" cy="64" r="20" fill="#6C47FF"></circle>
                                        <path fill="#BAB1FF" d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.846 35.846 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.846 35.846 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64 0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788Z"></path>
                                        <path fill="#6C47FF" d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128c-13.164 0-25.399-3.974-35.572-10.788-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.322-1.32 3.37-1.53 5.033-.678A35.847 35.847 0 0 0 64 100a35.846 35.846 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678l14.616 14.616Z"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Clerk invoice INV-20444">
                                      Clerk
                                    </a>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="tabular-nums truncate">
                                        SUB-4828
                                      </span>
                                      <Separator className="h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      <span className="truncate">
                                        Auth Suite
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Retry scheduled
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-billing-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <div className="flex flex-wrap gap-1 items-center">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-muted border-0 border-transparent dark:bg-muted/70 dark:text-muted-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-muted-foreground text-xs transition-shadow">
                                      Starter
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      Seat based
                                    </Badge>
                                  </div>
                                  <span className="text-muted-foreground text-xs truncate">
                                    MAU bundle
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Yuki Tanaka" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="text-foreground text-sm truncate">
                                    Yuki Tanaka
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    $1,950
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                                    PM-7746
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-nextRetry-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm">
                                    Jun 18
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Attempt 1 of 4
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for INV-20444" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                          </DataGridTableBody>
                        </DataGridTable>
                      </DataGridTableViewport>
                    </div>
                  </div>
                </DataGridScrollArea>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                <DataGridPagination>
                  <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                    <div className="text-muted-foreground text-sm">
                      Rows per page
                    </div>
                    <Select>
                    <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_1c_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                      <SelectValue>
                        6
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_1c_-hidden-input" tabIndex="-1" aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                    <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                      1 - 6 of 8
                    </div>
                    <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                      <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                        <span className="sr-only">
                          Go to previous page
                        </span>
                        <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </Button>
                      <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                        1
                      </Button>
                      <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                        2
                      </Button>
                      <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                        <span className="sr-only">
                          Go to next page
                        </span>
                        <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </DataGridPagination>
              </footer>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </div>
  )
}
