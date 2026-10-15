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
        {"Payments transaction ledger"}
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5">
            <div className="font-semibold text-balance text-sm" id="page-heading">
              {"Transactions"}
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              {"25 of 10,000 loaded"}
            </div>
          </div>
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            {"Export"}
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="px-4 py-3">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <InputGroup className="min-w-48 sm:w-56" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx={11} cy={11} r={8}></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search id, customer, card..." aria-label="Search transactions" value="" />
                </InputGroup>
                <Filters empty="true">
                  <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal"></div>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
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
              <div className="flex gap-2 items-center">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                  {"Refresh"}
                </Button>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="View settings" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx={17} cy={17} r={3}></circle>
                    <circle cx={7} cy={7} r={3}></circle>
                  </svg>
                  {"View settings"}
                </PopoverTrigger>
                </Popover>
              </div>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div>
            <div className="relative">
              <DataGridProvider>
              <DataGridScrollArea className="h-140" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" hasOverflowY="" overflowXEnd="" overflowYEnd="" overflowVertical="true">
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "48px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "751px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                  <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                    <DataGridProvider>
                    <DataGridTableViewport style={{width: "calc(1254px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                      <DataGridProvider>
                      <DataGridTable style={{"--header-select-size": "36", "--col-select-size": "36", "--header-transaction-size": "178", "--col-transaction-size": "178", "--header-customer-size": "230", "--col-customer-size": "230", "--header-amount-size": "130", "--col-amount-size": "130", "--header-status-size": "124", "--col-status-size": "124", "--header-method-size": "160", "--col-method-size": "160", "--header-channel-size": "120", "--col-channel-size": "120", "--header-risk-size": "110", "--col-risk-size": "110", "--header-date-size": "116", "--col-date-size": "116", "--header-actions-size": "50", "--col-actions-size": "50", width: "calc(1254px + var(--data-grid-fill-size, 0px))"}}>
                        <colgroup>
                          <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-transaction-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-customer-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-amount-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-method-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-channel-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-risk-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-date-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                          <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        </colgroup>
                        <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_8_" aria-checked="false" aria-label="Select all"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="transaction" data-header-id="transaction" data-header-depth="0" style={{width: "calc(var(--header-transaction-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Transaction"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
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
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                                  {"Customer"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="amount" data-header-id="amount" data-header-depth="0" style={{width: "calc(var(--header-amount-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                  {"Amount"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
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
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                                  {"Status"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="method" data-header-id="method" data-header-depth="0" style={{width: "calc(var(--header-method-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                                  {"Method"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="channel" data-header-id="channel" data-header-depth="0" style={{width: "calc(var(--header-channel-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                                  {"Channel"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="risk" data-header-id="risk" data-header-depth="0" style={{width: "calc(var(--header-risk-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                                  {"Risk"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="date" data-header-id="date" data-header-depth="0" style={{width: "calc(var(--header-date-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                  {"Date"}
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
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
                        <DataGridProvider>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="0" data-row-id="TXN-0YGJ0">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ0"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_07wwdvx"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Sana Qureshi"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="sana.qureshi@outlook.com">
                                    {"sana.qureshi@outlook.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$1,805.97"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Refunded"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Mastercard ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"6685"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="font-medium tabular-nums text-destructive">
                                  {"87"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:59"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ0" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="1" data-row-id="TXN-0YGJ1">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1m_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ1"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0tk488s"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Omar Haddad"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="omar.haddad@outlook.com">
                                    {"omar.haddad@outlook.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$1,740.66"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Mastercard ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"5794"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-globe size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Web"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="font-medium tabular-nums text-destructive">
                                  {"96"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:57"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ1" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="2" data-row-id="TXN-0YGJ2">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1u_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ2"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_02vkqp9"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="David Kim" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"David Kim"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="david.kim@hey.com">
                                    {"david.kim@hey.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$16.04"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Mastercard ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"2845"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"64"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:55"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ2" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="3" data-row-id="TXN-0YGJ3">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_26_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ3"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0w982d5"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sofia Romero" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Sofia Romero"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="sofia.romero@gmail.com">
                                    {"sofia.romero@gmail.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$1,368.47"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"4792"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"26"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:53"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ3" aria-haspopup="menu" id="base-ui-_r_2c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="4" data-row-id="TXN-0YGJ4">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ4"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0533jmd"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="David Kim" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"David Kim"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="david.kim@hey.com">
                                    {"david.kim@hey.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$3,652.33"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"4535"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"51"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:52"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ4" aria-haspopup="menu" id="base-ui-_r_2k_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="5" data-row-id="TXN-0YGJ5">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2m_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ5"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0v4nad5"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sofia Romero" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Sofia Romero"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="sofia.romero@gmail.com">
                                    {"sofia.romero@gmail.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$7.83"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"5477"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-store size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                                    <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                                    <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                                    <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"POS"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"4"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:50"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ5" aria-haspopup="menu" id="base-ui-_r_2s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="6" data-row-id="TXN-0YGJ6">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2u_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ6"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_04deqvk"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Omar Haddad"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="omar.haddad@outlook.com">
                                    {"omar.haddad@outlook.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$1,345.10"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Pending"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"8407"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"37"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:48"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ6" aria-haspopup="menu" id="base-ui-_r_34_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="7" data-row-id="TXN-0YGJ7">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_36_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ7"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0wfayx9"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Mira Stone"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="mira.stone@northbeam.co">
                                    {"mira.stone@northbeam.co"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$1,168.61"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Refunded"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-2.5 w-auto" viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#1434CB" d="M651.19.5c-70.93 0-134.32 36.77-134.32 104.69 0 77.9 112.42 83.28 112.42 122.42 0 16.48-18.88 31.23-51.14 31.23-45.77 0-79.98-20.61-79.98-20.61l-14.64 68.55s39.41 17.41 91.73 17.41c77.55 0 138.58-38.57 138.58-107.66 0-82.32-112.89-87.54-112.89-123.86 0-12.91 15.5-27.05 47.66-27.05 36.29 0 65.89 14.99 65.89 14.99l14.33-66.2S696.61.5 651.18.5h.01ZM2.22 5.5.5 15.49s29.84 5.46 56.72 16.36c34.61 12.49 37.07 19.77 42.9 42.35l63.51 244.83h85.14L379.93 5.5h-84.94l-84.28 213.17-34.39-180.7C173.17 17.29 157.19 5.49 137.64 5.49H2.23l-.01.01Zm411.87 0-66.63 313.53h81L494.85 5.5h-80.76Zm451.76 0c-19.53 0-29.88 10.46-37.47 28.73l-118.67 284.8h84.94l16.43-47.47h103.48l9.99 47.47h74.95L934.12 5.5h-68.27Zm11.05 84.71 25.18 117.65h-67.45L876.91 90.21h-.01Z"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Visa ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"1934"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2}></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Mobile"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"67"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:45"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ7" aria-haspopup="menu" id="base-ui-_r_3c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="8" data-row-id="TXN-0YGJ8">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ8"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_020ybwy"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Alex Johnson"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="alex.johnson@gmail.com">
                                    {"alex.johnson@gmail.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$159.22"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Pending"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"2985"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2}></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Mobile"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="font-medium tabular-nums text-destructive">
                                  {"95"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:43"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ8" aria-haspopup="menu" id="base-ui-_r_3k_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="9" data-row-id="TXN-0YGJ9">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3m_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJ9"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_09dgccn"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Sana Qureshi"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="sana.qureshi@outlook.com">
                                    {"sana.qureshi@outlook.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$588.75"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-2.5 w-auto" viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#1434CB" d="M651.19.5c-70.93 0-134.32 36.77-134.32 104.69 0 77.9 112.42 83.28 112.42 122.42 0 16.48-18.88 31.23-51.14 31.23-45.77 0-79.98-20.61-79.98-20.61l-14.64 68.55s39.41 17.41 91.73 17.41c77.55 0 138.58-38.57 138.58-107.66 0-82.32-112.89-87.54-112.89-123.86 0-12.91 15.5-27.05 47.66-27.05 36.29 0 65.89 14.99 65.89 14.99l14.33-66.2S696.61.5 651.18.5h.01ZM2.22 5.5.5 15.49s29.84 5.46 56.72 16.36c34.61 12.49 37.07 19.77 42.9 42.35l63.51 244.83h85.14L379.93 5.5h-84.94l-84.28 213.17-34.39-180.7C173.17 17.29 157.19 5.49 137.64 5.49H2.23l-.01.01Zm411.87 0-66.63 313.53h81L494.85 5.5h-80.76Zm451.76 0c-19.53 0-29.88 10.46-37.47 28.73l-118.67 284.8h84.94l16.43-47.47h103.48l9.99 47.47h74.95L934.12 5.5h-68.27Zm11.05 84.71 25.18 117.65h-67.45L876.91 90.21h-.01Z"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Visa ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"1334"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2}></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Mobile"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"2"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:42"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJ9" aria-haspopup="menu" id="base-ui-_r_3s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="10" data-row-id="TXN-0YGJA">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3u_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJA"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0qvj8wt"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Sarah Chen"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="sarah.chen@proton.me">
                                    {"sarah.chen@proton.me"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$292.31"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"9693"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"0"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:40"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJA" aria-haspopup="menu" id="base-ui-_r_44_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="11" data-row-id="TXN-0YGJB">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_46_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJB"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_05yy01b"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Alex Johnson"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="alex.johnson@gmail.com">
                                    {"alex.johnson@gmail.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$3,552.66"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"7113"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-store size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                                    <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                                    <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                                    <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"POS"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="font-medium tabular-nums text-destructive">
                                  {"82"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:38"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJB" aria-haspopup="menu" id="base-ui-_r_4c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="12" data-row-id="TXN-0YGJC">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJC"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0xp8e9q"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Omar Haddad"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="omar.haddad@outlook.com">
                                    {"omar.haddad@outlook.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$206.82"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Refunded"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"8020"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2}></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Mobile"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"4"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:36"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJC" aria-haspopup="menu" id="base-ui-_r_4k_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="13" data-row-id="TXN-0YGJD">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4m_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJD"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_04a73zx"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Michael Rodriguez"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="michael.rodriguez@northbeam.co">
                                    {"michael.rodriguez@northbeam.co"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$1,373.46"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Mastercard ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"9707"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-globe size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Web"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"66"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:34"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJD" aria-haspopup="menu" id="base-ui-_r_4s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="14" data-row-id="TXN-0YGJE">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4u_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJE"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0wcvmxd"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Nina Santos" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Nina Santos"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="nina.santos@northbeam.co">
                                    {"nina.santos@northbeam.co"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$2,653.16"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"7306"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-globe size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Web"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"66"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:33"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJE" aria-haspopup="menu" id="base-ui-_r_54_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="15" data-row-id="TXN-0YGJF">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_56_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJF"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0bvya4a"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Kenji Tan" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Kenji Tan"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="kenji.tan@proton.me">
                                    {"kenji.tan@proton.me"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$354.21"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={96} height={60} rx={6} fill="#016FD0"></rect>
                                    <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                                    <text x={48} y={26} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                      {"AMERICAN"}
                                    </text>
                                    <text x={48} y={42} fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                      {"EXPRESS"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Amex ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"3177"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2}></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Mobile"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"40"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:31"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJF" aria-haspopup="menu" id="base-ui-_r_5c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="16" data-row-id="TXN-0YGJG">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJG"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0espr32"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Theo Park"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="theo.park@icloud.com">
                                    {"theo.park@icloud.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$7.03"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Pending"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-2.5 w-auto" viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#1434CB" d="M651.19.5c-70.93 0-134.32 36.77-134.32 104.69 0 77.9 112.42 83.28 112.42 122.42 0 16.48-18.88 31.23-51.14 31.23-45.77 0-79.98-20.61-79.98-20.61l-14.64 68.55s39.41 17.41 91.73 17.41c77.55 0 138.58-38.57 138.58-107.66 0-82.32-112.89-87.54-112.89-123.86 0-12.91 15.5-27.05 47.66-27.05 36.29 0 65.89 14.99 65.89 14.99l14.33-66.2S696.61.5 651.18.5h.01ZM2.22 5.5.5 15.49s29.84 5.46 56.72 16.36c34.61 12.49 37.07 19.77 42.9 42.35l63.51 244.83h85.14L379.93 5.5h-84.94l-84.28 213.17-34.39-180.7C173.17 17.29 157.19 5.49 137.64 5.49H2.23l-.01.01Zm411.87 0-66.63 313.53h81L494.85 5.5h-80.76Zm451.76 0c-19.53 0-29.88 10.46-37.47 28.73l-118.67 284.8h84.94l16.43-47.47h103.48l9.99 47.47h74.95L934.12 5.5h-68.27Zm11.05 84.71 25.18 117.65h-67.45L876.91 90.21h-.01Z"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Visa ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"6037"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-globe size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Web"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"22"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:29"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJG" aria-haspopup="menu" id="base-ui-_r_5k_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="17" data-row-id="TXN-0YGJH">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5m_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJH"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0y7pmem"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Emma Wilson"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="emma.wilson@fastmail.com">
                                    {"emma.wilson@fastmail.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$2,536.30"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-2.5 w-auto" viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#1434CB" d="M651.19.5c-70.93 0-134.32 36.77-134.32 104.69 0 77.9 112.42 83.28 112.42 122.42 0 16.48-18.88 31.23-51.14 31.23-45.77 0-79.98-20.61-79.98-20.61l-14.64 68.55s39.41 17.41 91.73 17.41c77.55 0 138.58-38.57 138.58-107.66 0-82.32-112.89-87.54-112.89-123.86 0-12.91 15.5-27.05 47.66-27.05 36.29 0 65.89 14.99 65.89 14.99l14.33-66.2S696.61.5 651.18.5h.01ZM2.22 5.5.5 15.49s29.84 5.46 56.72 16.36c34.61 12.49 37.07 19.77 42.9 42.35l63.51 244.83h85.14L379.93 5.5h-84.94l-84.28 213.17-34.39-180.7C173.17 17.29 157.19 5.49 137.64 5.49H2.23l-.01.01Zm411.87 0-66.63 313.53h81L494.85 5.5h-80.76Zm451.76 0c-19.53 0-29.88 10.46-37.47 28.73l-118.67 284.8h84.94l16.43-47.47h103.48l9.99 47.47h74.95L934.12 5.5h-68.27Zm11.05 84.71 25.18 117.65h-67.45L876.91 90.21h-.01Z"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Visa ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"4798"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"44"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:28"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJH" aria-haspopup="menu" id="base-ui-_r_5s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="18" data-row-id="TXN-0YGJJ">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5u_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJJ"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_099hxf0"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Theo Park"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="theo.park@icloud.com">
                                    {"theo.park@icloud.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$3,079.22"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Mastercard ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"9166"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"37"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:26"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJJ" aria-haspopup="menu" id="base-ui-_r_64_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="19" data-row-id="TXN-0YGJK">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_66_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJK"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_07sjstz"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Theo Park"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="theo.park@icloud.com">
                                    {"theo.park@icloud.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$5.05"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Settled"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-2.5 w-auto" viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#1434CB" d="M651.19.5c-70.93 0-134.32 36.77-134.32 104.69 0 77.9 112.42 83.28 112.42 122.42 0 16.48-18.88 31.23-51.14 31.23-45.77 0-79.98-20.61-79.98-20.61l-14.64 68.55s39.41 17.41 91.73 17.41c77.55 0 138.58-38.57 138.58-107.66 0-82.32-112.89-87.54-112.89-123.86 0-12.91 15.5-27.05 47.66-27.05 36.29 0 65.89 14.99 65.89 14.99l14.33-66.2S696.61.5 651.18.5h.01ZM2.22 5.5.5 15.49s29.84 5.46 56.72 16.36c34.61 12.49 37.07 19.77 42.9 42.35l63.51 244.83h85.14L379.93 5.5h-84.94l-84.28 213.17-34.39-180.7C173.17 17.29 157.19 5.49 137.64 5.49H2.23l-.01.01Zm411.87 0-66.63 313.53h81L494.85 5.5h-80.76Zm451.76 0c-19.53 0-29.88 10.46-37.47 28.73l-118.67 284.8h84.94l16.43-47.47h103.48l9.99 47.47h74.95L934.12 5.5h-68.27Zm11.05 84.71 25.18 117.65h-67.45L876.91 90.21h-.01Z"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Visa ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"2590"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2}></rect>
                                    <path d="M12 18h.01"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"Mobile"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="tabular-nums text-foreground">
                                  {"43"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:24"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJK" aria-haspopup="menu" id="base-ui-_r_6c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-index="20" data-row-id="TXN-0YGJM">
                            <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-transaction-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground">
                                  {"TXN-0YGJM"}
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  {"ch_0719sr8"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium line-clamp-1 text-foreground">
                                    {"Sana Qureshi"}
                                  </span>
                                  <span className="line-clamp-1 text-muted-foreground text-xs" title="sana.qureshi@outlook.com">
                                    {"sana.qureshi@outlook.com"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-foreground">
                                {"$31.72"}
                              </span>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Failed"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-method-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="inline-flex items-center justify-center shrink-0 w-8" aria-hidden="true">
                                  <svg className="h-5 w-auto" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                                    <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                                  </svg>
                                </span>
                                <span className="tabular-nums text-foreground">
                                  <span className="sr-only">
                                    {"Mastercard ending"}
                                  </span>
                                  <span aria-hidden="true">
                                    {"••••"}
                                  </span>
                                  {"5818"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-channel-size) * 1px)"}}>
                              <div className="flex gap-1.5 items-center">
                                <span className="shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="text-foreground">
                                  {"API"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                <span className="font-medium tabular-nums text-destructive">
                                  {"80"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-date-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Jun 23"}
                                </span>
                                <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                  {"16:22"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for TXN-0YGJM" aria-haspopup="menu" id="base-ui-_r_6k_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr aria-hidden="true">
                            <td className="p-0" colSpan="10" style={{height: "208px", padding: "0px"}}></td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                        </DataGridTableBody>
                        </DataGridProvider>
                      </DataGridTable>
                      </DataGridProvider>
                    </DataGridTableViewport>
                    </DataGridProvider>
                  </div>
                </div>
                <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_7_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1157.9138755980862px"}}>
                  <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </DataGridScrollArea>
              </DataGridProvider>
              <div className="absolute h-(--data-grid-scrollbar-track-height) inset-e-px pointer-events-none top-(--data-grid-scrollbar-header-height) z-20" aria-hidden="true" style={{"--data-grid-scrollbar-header-height": "32px", "--data-grid-scrollbar-thumb-height": "207.36903831118062px", "--data-grid-scrollbar-thumb-top": "0px", "--data-grid-scrollbar-track-height": "515px"}}>
                <div className="h-full p-px pointer-events-auto relative touch-none w-[var(--data-grid-scrollbar-size,0.625rem)]">
                  <div className="absolute before:-inset-0.5 before:absolute bg-border end-px h-(--data-grid-scrollbar-thumb-height) rounded-full top-(--data-grid-scrollbar-thumb-top) w-[calc(var(--data-grid-scrollbar-size,0.625rem)-0.1875rem)]"></div>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
            {"Virtualized"}
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            {"loads on scroll"}
          </span>
          <span className="text-muted-foreground text-xs">
            {"Settled volume"}
            <span className="font-medium tabular-nums text-foreground">
              {"$10M"}
            </span>
          </span>
        </footer>
      </Frame>
    </main>
  )
}
