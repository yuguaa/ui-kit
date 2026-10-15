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
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Reporting hierarchy tree data grid
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <Frame>
          <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col min-w-0">
              <div className="font-semibold text-sm">
                Reporting Lines
              </div>
              <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                <span className="truncate">
                  Meridian Cycles
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="shrink-0">
                  24 Jul 2026
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center min-w-0">
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Headcount
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  18
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Layers
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  5
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Avg Span
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                  2.1
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Open Roles
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                  6
                </Badge>
              </div>
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Export
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
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search people..." aria-label="Search people" value="" />
              </InputGroup>
              <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
                <div className="flex gap-2 items-center">
                  <span className="font-medium text-muted-foreground text-xs">
                    Depth
                  </span>
                  <ToggleGroup className="shrink-0" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Tree depth" style={{"--gap": "0"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Collapse to the chief executive">
                      Collapse
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="default" spacing="0" aria-label="Expand to level 1">
                      1
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand to level 2">
                      2
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Expand all levels">
                      All
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  Filter
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
                  Display
                </PopoverTrigger>
                </Popover>
              </div>
            </div>
            <DataGrid>
              <div className="relative">
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_d_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "2px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                    <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                      <DataGridTableViewport style={{width: "calc(1144px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                        <DataGridTable style={{"--header-select-size": "36", "--col-select-size": "36", "--header-person-size": "300", "--col-person-size": "300", "--header-department-size": "132", "--col-department-size": "132", "--header-location-size": "128", "--col-location-size": "128", "--header-span-size": "124", "--col-span-size": "124", "--header-openRoles-size": "116", "--col-openRoles-size": "116", "--header-tenure-size": "124", "--col-tenure-size": "124", "--header-status-size": "128", "--col-status-size": "128", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1144px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-person-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-department-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-location-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-span-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-openRoles-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-tenure-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 pe-0 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_e_" aria-checked="false" aria-label="Select all"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-hidden px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="person" data-header-id="person" data-header-depth="0" data-pinned="start" data-last-col="start" style={{width: "calc(var(--header-person-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_k_" aria-expanded="false">
                                    Person
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="absolute before:absolute before:bg-border before:end-0 before:inset-y-0 before:w-px cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="department" data-header-id="department" data-header-depth="0" style={{width: "calc(var(--header-department-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                                    Department
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="location" data-header-id="location" data-header-depth="0" style={{width: "calc(var(--header-location-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                                    Location
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="span" data-header-id="span" data-header-depth="0" style={{width: "calc(var(--header-span-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_13_" aria-expanded="false">
                                    Reports
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="openRoles" data-header-id="openRoles" data-header-depth="0" style={{width: "calc(var(--header-openRoles-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-end outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                                    Open Roles
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="tenure" data-header-id="tenure" data-header-depth="0" style={{width: "calc(var(--header-tenure-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1d_" aria-expanded="false">
                                    Tenure
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1i_" aria-expanded="false">
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
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-001">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1k_" aria-checked="false" aria-label="Select Mira Stone"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
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
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                        Mira Stone
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                        Executive
                                      </Badge>
                                    </span>
                                    <span className="min-w-0 text-muted-foreground text-xs truncate">
                                      Chief Executive
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                <span className="text-foreground text-sm truncate">
                                  Executive
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                <span className="text-muted-foreground text-sm truncate">
                                  Copenhagen
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    4
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    of 17
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                    6
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                <div className="flex flex-col min-w-0">
                                  <span className="text-foreground text-sm">
                                    9 years
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Mar 2017
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                  Active
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Mira Stone" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-010" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1s_" aria-checked="false" aria-label="Select Leo Grant"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
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
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                        Leo Grant
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                        Vice President
                                      </Badge>
                                    </span>
                                    <span className="min-w-0 text-muted-foreground text-xs truncate">
                                      VP Engineering
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                <span className="text-foreground text-sm truncate">
                                  Engineering
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                <span className="text-muted-foreground text-sm truncate">
                                  Copenhagen
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    2
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    of 6
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                    2
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                <div className="flex flex-col min-w-0">
                                  <span className="text-foreground text-sm">
                                    8 years
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    May 2018
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                  Active
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Leo Grant" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-011" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_24_" aria-checked="false" aria-label="Select Emma Wilson"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
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
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                        Emma Wilson
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                        Vice President
                                      </Badge>
                                    </span>
                                    <span className="min-w-0 text-muted-foreground text-xs truncate">
                                      VP Operations
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                <span className="text-foreground text-sm truncate">
                                  Operations
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                <span className="text-muted-foreground text-sm truncate">
                                  Utrecht
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    2
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    of 4
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                    2
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                <div className="flex flex-col min-w-0">
                                  <span className="text-foreground text-sm">
                                    7 years
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Nov 2018
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                  Active
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Emma Wilson" aria-haspopup="menu" id="base-ui-_r_2a_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-012" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2c_" aria-checked="false" aria-label="Select Kenji Tan"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
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
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                        Kenji Tan
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                        Vice President
                                      </Badge>
                                    </span>
                                    <span className="min-w-0 text-muted-foreground text-xs truncate">
                                      VP Commercial
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                <span className="text-foreground text-sm truncate">
                                  Commercial
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                <span className="text-muted-foreground text-sm truncate">
                                  Tokyo
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    2
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    of 3
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                    1
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                <div className="flex flex-col min-w-0">
                                  <span className="text-foreground text-sm">
                                    7 years
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Apr 2019
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                  Active
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Kenji Tan" aria-haspopup="menu" id="base-ui-_r_2i_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-013" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2k_" aria-checked="false" aria-label="Select Sofia Romero"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-person-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="flex items-center shrink-0">
                                    <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                      <span className="shrink-0 w-2" aria-hidden="true"></span>
                                    </DataGridTableRowExpand>
                                    <span className="shrink-0 w-5" aria-hidden="true"></span>
                                  </span>
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex flex-col min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                        Sofia Romero
                                      </span>
                                    </span>
                                    <span className="min-w-0 text-muted-foreground text-xs truncate">
                                      Director, People
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-department-size) * 1px)"}}>
                                <span className="text-foreground text-sm truncate">
                                  People
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-location-size) * 1px)"}}>
                                <span className="text-muted-foreground text-sm truncate">
                                  Copenhagen
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2 text-right! truncate" style={{width: "calc(var(--col-span-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <span className="text-muted-foreground text-sm">
                                    --
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-openRoles-size) * 1px)"}}>
                                <div className="flex items-center justify-end w-full">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                                    1
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-tenure-size) * 1px)"}}>
                                <div className="flex flex-col min-w-0">
                                  <span className="text-foreground text-sm">
                                    6 years
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    Jan 2020
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                  Active
                                </Badge>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Sofia Romero" aria-haspopup="menu" id="base-ui-_r_2q_" aria-expanded="false">
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
                          <DataGridTableFoot>
                            <DataGridTableFootRow>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium lg:ps-4 ps-3 px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="font-semibold text-foreground text-sm truncate">
                                    Meridian Cycles
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                    18 people
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  6
                                </span>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80">
                                <span className="text-muted-foreground text-xs">
                                  3 need attention
                                </span>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium lg:pe-4 pe-3 px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="p-0" aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></td>
                            </DataGridTableFootRow>
                          </DataGridTableFoot>
                        </DataGridTable>
                      </DataGridTableViewport>
                    </div>
                  </div>
                  <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_d_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1138.006993006993px"}}>
                    <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </DataGridScrollArea>
              </div>
            </DataGrid>
          </FramePanel>
        </Frame>
      </section>
    </main>
  )
}
