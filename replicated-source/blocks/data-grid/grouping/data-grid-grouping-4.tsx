import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableRowExpand,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
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
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Bill of materials tree data grid"}
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <Frame>
          <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col min-w-0">
              <div className="font-semibold text-sm">
                {"Bill Of Materials"}
              </div>
              <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                <span className="truncate">
                  {"Meridian C2 Cargo"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="shrink-0">
                  {"Rev C · 24 Jul 2026"}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center min-w-0">
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Build cost"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  {"$1,179.31"}
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Critical path"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  {"62d"}
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"At risk"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                  {"10"}
                </Badge>
              </div>
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                {"Export"}
              </Button>
            </div>
          </header>
          <FramePanel className="bg-card p-0! shadow-none!">
            <div className="border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:px-4 px-3 py-3">
              <InputGroup className="lg:max-w-xs" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search parts..." aria-label="Search parts" value="" />
              </InputGroup>
              <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
                <div className="flex gap-2 items-center">
                  <span className="font-medium text-muted-foreground text-xs">
                    {"Depth"}
                  </span>
                  <ToggleGroup className="shrink-0" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Tree depth" style={{"--gap": "0"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Collapse to systems">
                      {"Collapse"}
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand to level 1">
                      {"1"}
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand to level 2">
                      {"2"}
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand all levels">
                      {"All"}
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                  <svg className="lucide lucide-truck" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                  {"Supply"}
                </DropdownMenuTrigger>
                </DropdownMenu>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  {"Display"}
                </PopoverTrigger>
                </Popover>
              </div>
            </div>
            <DataGrid>
              <div className="relative">
                <DataGridProvider>
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_d_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridProvider>
                      <DataGridTableViewport style={{width: "calc(1142px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                        <DataGridProvider>
                        <DataGridTable style={{"--header-part-size": "356", "--col-part-size": "356", "--header-partNumber-size": "108", "--col-partNumber-size": "108", "--header-qty-size": "76", "--col-qty-size": "76", "--header-unitCost-size": "110", "--col-unitCost-size": "110", "--header-extendedCost-size": "196", "--col-extendedCost-size": "196", "--header-leadTime-size": "116", "--col-leadTime-size": "116", "--header-supply-size": "124", "--col-supply-size": "124", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1142px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-part-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-partNumber-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-qty-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-unitCost-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-extendedCost-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-leadTime-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-supply-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="part" data-header-id="part" data-header-depth="0" style={{width: "calc(var(--header-part-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                                    {"Part"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="partNumber" data-header-id="partNumber" data-header-depth="0" style={{width: "calc(var(--header-partNumber-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                    {"Number"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="qty" data-header-id="qty" data-header-depth="0" style={{width: "calc(var(--header-qty-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                                    {"Qty"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="unitCost" data-header-id="unitCost" data-header-depth="0" style={{width: "calc(var(--header-unitCost-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                    {"Unit Cost"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="extendedCost" data-header-id="extendedCost" data-header-depth="0" style={{width: "calc(var(--header-extendedCost-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                    {"Extended Cost"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="leadTime" data-header-id="leadTime" data-header-depth="0" style={{width: "calc(var(--header-leadTime-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                    {"Lead Time"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="supply" data-header-id="supply" data-header-depth="0" style={{width: "calc(var(--header-supply-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                    {"Supply"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 overflow-visible pe-8 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                                <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sys-100">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="true" aria-label="Collapse row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Drive System"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part SYS-100">
                                  <span className="truncate">
                                    {"SYS-100"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="23% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="43.72762598009558" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"23%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$267.38"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"62d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Shortage"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SYS-100" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="asm-110" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="true" aria-label="Collapse row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                                      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Mid-Drive Motor"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part ASM-110">
                                  <span className="truncate">
                                    {"ASM-110"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="16% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="47.465378269359505" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"16%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$189.43"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"62d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Shortage"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for ASM-110" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sub-111" data-depth="2">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="true" aria-label="Collapse row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <circle cx="12" cy="12" r="6"></circle>
                                      <circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Stator Assembly"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part SUB-111">
                                  <span className="truncate">
                                    {"SUB-111"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="5.8% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="53.26980308803042" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"5.8%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$68.38"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"45d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Single source"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SUB-111" aria-haspopup="menu" id="base-ui-_r_1u_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prt-1111" data-depth="3">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "60px"}}>
                                      <span className="shrink-0 w-2" aria-hidden="true"></span>
                                    </DataGridTableRowExpand>
                                    <span className="shrink-0 w-5" aria-hidden="true"></span>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Stator Lamination"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part PRT-1111">
                                  <span className="truncate">
                                    {"PRT-1111"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"52"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"$0.74"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$38.48"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"45d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Single source"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PRT-1111" aria-haspopup="menu" id="base-ui-_r_23_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prt-1112" data-depth="3">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "60px"}}>
                                      <span className="shrink-0 w-2" aria-hidden="true"></span>
                                    </DataGridTableRowExpand>
                                    <span className="shrink-0 w-5" aria-hidden="true"></span>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                      <circle cx="6" cy="19" r="3"></circle>
                                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                      <circle cx="18" cy="5" r="3"></circle>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Copper Winding"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part PRT-1112">
                                  <span className="truncate">
                                    {"PRT-1112"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"3"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"$7.40"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$22.20"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"28d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  {"Stocked"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PRT-1112" aria-haspopup="menu" id="base-ui-_r_28_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prt-1113" data-depth="3">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "60px"}}>
                                      <span className="shrink-0 w-2" aria-hidden="true"></span>
                                    </DataGridTableRowExpand>
                                    <span className="shrink-0 w-5" aria-hidden="true"></span>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-flame" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlameIcon" tabler="IconFlame" hugeicons="Fire02Icon" phosphor="FlameIcon" remixicon="RiFireLine" aria-hidden="true">
                                      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Thermal Sensor"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part PRT-1113">
                                  <span className="truncate">
                                    {"PRT-1113"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"2"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"$3.85"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$7.70"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"21d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  {"Stocked"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PRT-1113" aria-haspopup="menu" id="base-ui-_r_2d_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sub-112" data-depth="2">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" aria-hidden="true">
                                      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Rotor Assembly"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part SUB-112">
                                  <span className="truncate">
                                    {"SUB-112"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="5.0% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="53.743555398715834" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"5.0%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$58.50"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"62d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Shortage"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SUB-112" aria-haspopup="menu" id="base-ui-_r_2i_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prt-113" data-depth="2">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                      <span className="shrink-0 w-2" aria-hidden="true"></span>
                                    </DataGridTableRowExpand>
                                    <span className="shrink-0 w-5" aria-hidden="true"></span>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                      <path d="M12 22V12"></path>
                                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                      <path d="m7.5 4.27 9 5.15"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Motor Housing"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part PRT-113">
                                  <span className="truncate">
                                    {"PRT-113"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"2"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"$13.90"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$27.80"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"30d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  {"Stocked"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PRT-113" aria-haspopup="menu" id="base-ui-_r_2n_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prt-114" data-depth="2">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "40px"}}>
                                      <span className="shrink-0 w-2" aria-hidden="true"></span>
                                    </DataGridTableRowExpand>
                                    <span className="shrink-0 w-5" aria-hidden="true"></span>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="outline" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Torque Sensor Ring"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part PRT-114">
                                  <span className="truncate">
                                    {"PRT-114"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"$34.75"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$34.75"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"40d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Single source"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PRT-114" aria-haspopup="menu" id="base-ui-_r_2s_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="asm-120" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                      <path d="m17 2 4 4-4 4"></path>
                                      <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                      <path d="m7 22-4-4 4-4"></path>
                                      <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Drivetrain"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part ASM-120">
                                  <span className="truncate">
                                    {"ASM-120"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="6.6% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="52.81091547535235" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"6.6%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$77.95"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"54d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Long lead"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for ASM-120" aria-haspopup="menu" id="base-ui-_r_31_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sys-200">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Energy Pack"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part SYS-200">
                                  <span className="truncate">
                                    {"SYS-200"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="28% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="40.91819805670914" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"28%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$325.97"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"56d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Long lead"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SYS-200" aria-haspopup="menu" id="base-ui-_r_36_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sys-300">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                                      <path d="M15 3h6v6"></path>
                                      <path d="m21 3-7 7"></path>
                                      <path d="m3 21 7-7"></path>
                                      <path d="M9 21H3v-6"></path>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Frame Set"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part SYS-300">
                                  <span className="truncate">
                                    {"SYS-300"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="20% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="45.33780842876117" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$233.80"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"42d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Shortage"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SYS-300" aria-haspopup="menu" id="base-ui-_r_3b_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sys-400">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Cockpit"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part SYS-400">
                                  <span className="truncate">
                                    {"SYS-400"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="8.9% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="51.51385069761548" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"8.9%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$105.00"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"38d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Single source"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SYS-400" aria-haspopup="menu" id="base-ui-_r_3g_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sys-500">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-part-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                      <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                        <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </button>
                                    </DataGridTableRowExpand>
                                  </span>
                                  <IconTile className="text-muted-foreground" variant="elevated" size="xs" aria-hidden="true">
                                    <svg className="lucide lucide-truck" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                      <path d="M15 18H9"></path>
                                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                      <circle cx="17" cy="18" r="2"></circle>
                                      <circle cx="7" cy="18" r="2"></circle>
                                    </svg>
                                  </IconTile>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                        {"Rolling Gear"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-partNumber-size) * 1px)"}}>
                                <a className="focus-visible:text-foreground font-mono gap-1 group/part-number hover:text-foreground inline-flex items-center min-w-0 text-muted-foreground text-xs tracking-tight transition-colors" href="#" aria-label="Open part SYS-500">
                                  <span className="truncate">
                                    {"SYS-500"}
                                  </span>
                                  <svg className="-translate-x-0.5 duration-150 group-focus-visible/part-number:opacity-100 group-focus-visible/part-number:translate-x-0 group-hover/part-number:opacity-100 group-hover/part-number:translate-x-0 lucide lucide-external-link opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </a>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-qty-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"1"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-unitCost-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    {"--"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-extendedCost-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center justify-end w-full">
                                  <span className="flex gap-1.5 items-center shrink-0" role="img" aria-label="21% of build cost">
                                    <svg className="shrink-0 size-6 text-primary" viewBox="0 0 24 24">
                                      <circle className="stroke-muted" cx="12" cy="12" r="9" fill="none" strokeWidth="3"></circle>
                                      <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="44.69718789528373" transform="rotate(-90 12 12)"></circle>
                                    </svg>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"21%"}
                                    </span>
                                  </span>
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$247.16"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-leadTime-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"51d"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-supply-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Long lead"}
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SYS-500" aria-haspopup="menu" id="base-ui-_r_3l_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                          </DataGridTableBody>
                          </DataGridProvider>
                          <DataGridProvider>
                          <DataGridTableFoot>
                            <DataGridTableFootRow>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium lg:ps-4 ps-3 px-3 py-2 text-secondary-foreground/80">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="font-semibold text-foreground text-sm truncate">
                                    {"Meridian C2 Cargo"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                    {"31 lines"}
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  {"$1,179.31"}
                                </span>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  {"62d"}
                                </span>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium lg:pe-4 pe-3 px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="p-0" aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></td>
                            </DataGridTableFootRow>
                          </DataGridTableFoot>
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
            </DataGrid>
          </FramePanel>
        </Frame>
      </section>
    </main>
  )
}
