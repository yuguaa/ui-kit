import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { Filters } from "@/registry-neui/bases/base/neui/filters/filters"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
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
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Shipment exceptions queue
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5">
            <div className="font-semibold text-balance text-sm">
              Exception Queue
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              40 of 8,000 loaded
            </div>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            Export
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="border-b border-border overflow-x-auto">
            <div className="divide-border divide-x flex min-w-max">
              <div className="flex flex-1 flex-col gap-1 min-w-36 px-4 py-3">
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  Open exceptions
                </span>
                <span className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  1,598
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 min-w-36 px-4 py-3">
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  Customs holds
                </span>
                <span className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  881
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 min-w-36 px-4 py-3">
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  Delayed packages
                </span>
                <span className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  28,321
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 min-w-36 px-4 py-3">
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  Unassigned
                </span>
                <span className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  460
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 min-w-36 px-4 py-3">
                <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  At-risk value
                </span>
                <span className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                  $5M
                </span>
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <InputGroup className="min-w-52 sm:w-72" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search shipment, route, customer..." aria-label="Search shipments" value="" />
                </InputGroup>
                <Filters empty="true">
                  <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal"></div>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
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
              <div className="flex gap-2 items-center">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                  Refresh
                </Button>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="View settings" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  Settings
                </PopoverTrigger>
                </Popover>
              </div>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div>
            <div className="relative">
              <DataGridScrollArea className="h-140" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" hasOverflowY="" overflowXEnd="" overflowYEnd="" overflowVertical="true">
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "722px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1612px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                  <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                    <DataGridTableViewport style={{width: "calc(1928px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                      <DataGridTable style={{"--header-select-size": "36", "--col-select-size": "36", "--header-shipment-size": "210", "--col-shipment-size": "210", "--header-customer-size": "190", "--col-customer-size": "190", "--header-route-size": "260", "--col-route-size": "260", "--header-carrier-size": "210", "--col-carrier-size": "210", "--header-status-size": "138", "--col-status-size": "138", "--header-priority-size": "116", "--col-priority-size": "116", "--header-issue-size": "176", "--col-issue-size": "176", "--header-owner-size": "180", "--col-owner-size": "180", "--header-eta-size": "132", "--col-eta-size": "132", "--header-packages-size": "122", "--col-packages-size": "122", "--header-value-size": "108", "--col-value-size": "108", "--header-actions-size": "50", "--col-actions-size": "50", width: "calc(1928px + var(--data-grid-fill-size, 0px))"}}>
                        <colgroup>
                          <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-shipment-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-customer-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-route-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-carrier-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-priority-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-issue-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-eta-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-packages-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-value-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                          <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        </colgroup>
                        <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_8_" aria-checked="false" aria-label="Select all"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="shipment" data-header-id="shipment" data-header-depth="0" style={{width: "calc(var(--header-shipment-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Shipment
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="customer" data-header-id="customer" data-header-depth="0" style={{width: "calc(var(--header-customer-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                                  Customer
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="route" data-header-id="route" data-header-depth="0" style={{width: "calc(var(--header-route-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                  Route
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="carrier" data-header-id="carrier" data-header-depth="0" style={{width: "calc(var(--header-carrier-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                                  Carrier
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                                  Status
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="priority" data-header-id="priority" data-header-depth="0" style={{width: "calc(var(--header-priority-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                                  Priority
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="issue" data-header-id="issue" data-header-depth="0" style={{width: "calc(var(--header-issue-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                                  Issue
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                  Owner
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="eta" data-header-id="eta" data-header-depth="0" style={{width: "calc(var(--header-eta-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1h_" aria-expanded="false">
                                  ETA
                                  <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="packages" data-header-id="packages" data-header-depth="0" style={{width: "calc(var(--header-packages-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1m_" aria-expanded="false">
                                  Packages
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="value" data-header-id="value" data-header-depth="0" style={{width: "calc(var(--header-value-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1r_" aria-expanded="false">
                                  Value
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                            <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="0" data-row-id="SHP-0063AF">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1t_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063AF">
                                  SHP-0063AF
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Beacon Works / ORD-02QXX
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Beacon Works
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QXX
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Oakland to Portland
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub OAK-2
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-blue-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    BlueLine Freight
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Cross Dock
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Delayed
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                High
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Weather Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Sana Qureshi
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  07:35
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    14 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    12.3 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $7.9K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063AF" aria-haspopup="menu" id="base-ui-_r_23_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="1" data-row-id="SHP-0063A7">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_25_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063A7">
                                  SHP-0063A7
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Beacon Works / ORD-02QX5
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Beacon Works
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QX5
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Los Angeles to Seattle
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub LAX-4
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-sky-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    AeroLink
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Priority Air
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Theo Park
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  08:27
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +6h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    19 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    52.4 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $4.5K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063A7" aria-haspopup="menu" id="base-ui-_r_2b_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="2" data-row-id="SHP-0063B2">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2d_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063B2">
                                  SHP-0063B2
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Pine Market / ORD-02QZP
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Pine Market
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QZP
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Los Angeles to Seattle
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub LAX-4
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-violet-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    MetroShip
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    International
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Exception
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Capacity Shortage
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Mira Stone
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  08:30
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    24 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    36.9 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $3.2K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063B2" aria-haspopup="menu" id="base-ui-_r_2j_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="3" data-row-id="SHP-0063BT">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2l_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063BT">
                                  SHP-0063BT
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Marlow Medical / ORD-02R1Y
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Marlow Medical
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R1Y
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Memphis to Nashville
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub MEM-7
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-emerald-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Northstar Parcel
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    International
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Delayed
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                High
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Capacity Shortage
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <Avatar className="size-7" size="default">
                                  <AvatarFallback className="bg-muted text-[10px] text-muted-foreground">
                                    --
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-muted-foreground text-sm">
                                  Unassigned
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  08:32
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    1 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    54.5 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $82.4
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063BT" aria-haspopup="menu" id="base-ui-_r_2r_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="4" data-row-id="SHP-0063AY">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2t_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063AY">
                                  SHP-0063AY
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Atlas Studio / ORD-02QZA
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Atlas Studio
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QZA
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Los Angeles to Seattle
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub LAX-4
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-cyan-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Harbor Express
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Cross Dock
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Mira Stone
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  08:33
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    12 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    51.9 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $1.7K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063AY" aria-haspopup="menu" id="base-ui-_r_33_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="5" data-row-id="SHP-0063BZ">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_35_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063BZ">
                                  SHP-0063BZ
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Atlas Studio / ORD-02R2D
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Atlas Studio
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R2D
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Long Beach to Honolulu
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub LGB-8
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-sky-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    AeroLink
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Ground
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Delayed
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                High
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Weather Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Sana Qureshi
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  08:34
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +8h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    5 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    59.8 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $3.5K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063BZ" aria-haspopup="menu" id="base-ui-_r_3b_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="6" data-row-id="SHP-0063C5">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3d_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063C5">
                                  SHP-0063C5
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Bloom Home / ORD-02R2Z
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Bloom Home
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R2Z
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Memphis to Nashville
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub MEM-7
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-sky-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    AeroLink
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Priority Air
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Delayed
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                High
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Weather Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Sana Qureshi
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  08:51
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    3 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    61.1 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $632.6
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063C5" aria-haspopup="menu" id="base-ui-_r_3j_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="7" data-row-id="SHP-0063CA">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3l_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063CA">
                                  SHP-0063CA
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Bloom Home / ORD-02R3E
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Bloom Home
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R3E
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Newark to Boston
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub EWR-5
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-emerald-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Northstar Parcel
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Ground
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Exception
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Damaged Scan
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Sana Qureshi
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  09:03
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    9 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    14 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $1.3K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063CA" aria-haspopup="menu" id="base-ui-_r_3r_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="8" data-row-id="SHP-0063BS">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3t_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063BS">
                                  SHP-0063BS
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Kova Retail / ORD-02R1V
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Kova Retail
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R1V
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Chicago to Detroit
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub ORD-3
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-blue-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    BlueLine Freight
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Ground
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Mira Stone
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  09:06
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    9 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    68.2 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $968.8
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063BS" aria-haspopup="menu" id="base-ui-_r_43_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="9" data-row-id="SHP-0063AE">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_45_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063AE">
                                  SHP-0063AE
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Northstar Labs / ORD-02QXT
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Northstar Labs
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QXT
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Dallas to Denver
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub DFW-2
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-violet-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    MetroShip
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Ground
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Delayed
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                High
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Capacity Shortage
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Nora Vale
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  09:06
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +6h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    1 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    35.8 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $400.4
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063AE" aria-haspopup="menu" id="base-ui-_r_4b_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="10" data-row-id="SHP-0063AJ">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4d_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063AJ">
                                  SHP-0063AJ
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Northstar Labs / ORD-02QY6
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Northstar Labs
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QY6
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Chicago to Detroit
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub ORD-3
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-violet-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    MetroShip
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Priority Air
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Mira Stone
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  09:11
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +6h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    11 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    5 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $8.4K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063AJ" aria-haspopup="menu" id="base-ui-_r_4j_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="11" data-row-id="SHP-0063AN">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4l_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063AN">
                                  SHP-0063AN
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Beacon Works / ORD-02QYF
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Beacon Works
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QYF
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Atlanta to Miami
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub ATL-1
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-emerald-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Northstar Parcel
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    International
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Nora Vale
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  09:19
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +6h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    2 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    4.9 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $6.6K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063AN" aria-haspopup="menu" id="base-ui-_r_4r_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="12" data-row-id="SHP-0063CC">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4t_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063CC">
                                  SHP-0063CC
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Northstar Labs / ORD-02R3M
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Northstar Labs
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R3M
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Dallas to Denver
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub DFW-2
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-violet-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    MetroShip
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Cross Dock
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Docs
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Theo Park
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  10:13
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +6h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    18 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    8.7 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $3.3K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063CC" aria-haspopup="menu" id="base-ui-_r_53_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="13" data-row-id="SHP-0063DG">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_55_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063DG">
                                  SHP-0063DG
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Pine Market / ORD-02R70
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Pine Market
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R70
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Long Beach to Honolulu
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub LGB-8
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-cyan-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Harbor Express
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    International
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Leo Grant
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  10:24
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    3 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    22.5 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $452.5
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063DG" aria-haspopup="menu" id="base-ui-_r_5b_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="14" data-row-id="SHP-0063BA">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5d_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063BA">
                                  SHP-0063BA
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Pine Market / ORD-02R0E
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Pine Market
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R0E
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Oakland to Portland
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub OAK-2
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-violet-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    MetroShip
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Cross Dock
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Nora Vale
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  10:31
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +5h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    17 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    3.9 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $1K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063BA" aria-haspopup="menu" id="base-ui-_r_5j_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="15" data-row-id="SHP-0063AA">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5l_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063AA">
                                  SHP-0063AA
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Bloom Home / ORD-02QXE
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Bloom Home
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QXE
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Los Angeles to Seattle
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub LAX-4
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-cyan-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Harbor Express
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Priority Air
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Delayed
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                High
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Capacity Shortage
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Theo Park
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  10:36
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +4h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    21 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    62.3 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $2.7K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063AA" aria-haspopup="menu" id="base-ui-_r_5r_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="16" data-row-id="SHP-0063AX">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5t_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063AX">
                                  SHP-0063AX
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Northstar Labs / ORD-02QZ7
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Northstar Labs
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QZ7
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Memphis to Nashville
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub MEM-7
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-cyan-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Harbor Express
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    International
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Sana Qureshi
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  10:46
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +4h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    5 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    20 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $362.1
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063AX" aria-haspopup="menu" id="base-ui-_r_63_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="17" data-row-id="SHP-0063A6">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_65_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063A6">
                                  SHP-0063A6
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Marlow Medical / ORD-02QX2
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Marlow Medical
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02QX2
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Los Angeles to Seattle
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub LAX-4
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-emerald-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    Northstar Parcel
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Cross Dock
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Delayed
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                High
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Capacity Shortage
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Leo Grant
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  11:00
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +4h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    23 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    22.4 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $305.8
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063A6" aria-haspopup="menu" id="base-ui-_r_6b_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="18" data-row-id="SHP-0063CG">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6d_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063CG">
                                  SHP-0063CG
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Pine Market / ORD-02R40
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Pine Market
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02R40
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Atlanta to Miami
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub ATL-1
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-violet-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    MetroShip
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    International
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Docs
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-foreground text-sm truncate">
                                  Theo Park
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  11:03
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +5h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    3 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    41.6 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $5.8K
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063CG" aria-haspopup="menu" id="base-ui-_r_6j_" aria-expanded="false">
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="19" data-row-id="SHP-0063F0">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6l_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-shipment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline tabular-nums text-foreground transition-colors truncate underline-offset-2" href="#" aria-label="View shipment SHP-0063F0">
                                  SHP-0063F0
                                </a>
                                <span className="text-muted-foreground text-xs truncate">
                                  Marlow Medical / ORD-02RBG
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground truncate">
                                  Marlow Medical
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  ORD-02RBG
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-route-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground truncate">
                                    Toronto to Montreal
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Hub YYZ-2
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-sky-500 inline-flex items-center justify-center rounded-full shrink-0 size-7 text-white" aria-hidden="true">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="text-foreground truncate">
                                    AeroLink
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    Cross Dock
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                Customs Hold
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Critical
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-issue-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Address Review
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <Avatar className="size-7" size="default">
                                  <AvatarFallback className="bg-muted text-[10px] text-muted-foreground">
                                    --
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-muted-foreground text-sm">
                                  Unassigned
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-eta-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  Jun 24
                                </span>
                                <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                  11:26
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-warning">
                                    +7h
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-packages-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="tabular-nums text-foreground">
                                    7 pkg
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    26.2 kg
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                $127.4
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SHP-0063F0" aria-haspopup="menu" id="base-ui-_r_6r_" aria-expanded="false">
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
                          <tr aria-hidden="true">
                            <td className="p-0" colSpan="13" style={{height: "1120px", padding: "0px"}}></td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                        </DataGridTableBody>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </div>
                </div>
                <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_7_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "753.1244813278008px"}}>
                  <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </DataGridScrollArea>
              <div className="absolute h-(--data-grid-scrollbar-track-height) inset-e-px pointer-events-none top-(--data-grid-scrollbar-header-height) z-20" aria-hidden="true" style={{"--data-grid-scrollbar-header-height": "32px", "--data-grid-scrollbar-thumb-height": "123.93691588785046px", "--data-grid-scrollbar-thumb-top": "0px", "--data-grid-scrollbar-track-height": "515px"}}>
                <div className="h-full p-px pointer-events-auto relative touch-none w-[var(--data-grid-scrollbar-size,0.625rem)]">
                  <div className="absolute before:-inset-0.5 before:absolute bg-border end-px h-(--data-grid-scrollbar-thumb-height) rounded-full top-(--data-grid-scrollbar-thumb-top) w-[calc(var(--data-grid-scrollbar-size,0.625rem)-0.1875rem)]"></div>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
            1.6K exceptions
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            virtualized
          </span>
          <span className="text-muted-foreground text-xs">
            Delayed packages
            <span className="font-medium tabular-nums text-foreground">
              28,321
            </span>
          </span>
        </footer>
      </Frame>
    </main>
  )
}
