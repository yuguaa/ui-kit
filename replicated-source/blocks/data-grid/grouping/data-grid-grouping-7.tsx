import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Grouped delivery board data grid
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <Frame>
          <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col min-w-0">
              <div className="font-semibold text-sm">
                Delivery Board
              </div>
              <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                <span className="truncate">
                  Active studio engagements
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="shrink-0">
                  Week Of Mar 10
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center min-w-0">
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Engagements
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  12
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Near done
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                  4
                </Badge>
              </div>
            </div>
          </header>
          <FramePanel className="bg-card p-0! shadow-none!">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:px-4 px-3 py-3">
              <InputGroup className="lg:max-w-xs" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_0_" placeholder="Search engagements..." aria-label="Search engagements" value="" />
              </InputGroup>
              <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false" extracted="1">
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  Stages
                </DropdownMenuTrigger>
                </DropdownMenu>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_7_" aria-haspopup="dialog" aria-expanded="false">
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
            <div className="overflow-x-auto w-full">
              <div className="min-w-260">
                <section aria-labelledby="delivery-stage-discovery">
                  <div className="bg-muted/50 border-y flex gap-2.5 items-center lg:px-4 px-3 py-2">
                    <span className="font-semibold text-sm" id="delivery-stage-discovery">
                      Discovery
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-info-foreground transition-shadow">
                      3
                    </Badge>
                    <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                      Avg 23%
                    </span>
                  </div>
                  <DataGrid>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "44px"}} />
                          <col style={{width: "212px"}} />
                          <col style={{width: "288px"}} />
                          <col style={{width: "192px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "164px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "44px"}}>
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-label="Select every row in Discovery"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="client" data-header-id="client" data-header-depth="0" style={{width: "212px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Client
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="engagement" data-header-id="engagement" data-header-depth="0" style={{width: "288px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Engagement
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="completion" data-header-id="completion" data-header-depth="0" style={{width: "192px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Completion
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="crew" data-header-id="crew" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Crew
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="milestone" data-header-id="milestone" data-header-depth="0" style={{width: "164px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Milestone
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="discovery-spring-menu">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-label="Select Stripe"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                  <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Stripe
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Spring Menu Film
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Spring Menu Film" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="18% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-sky-500 rounded-full"></span>
                                  <span className="bg-sky-500 rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  18%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Stripe engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Concept Lock
                                </span>
                              </Badge>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="discovery-kestrel-slot">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_h_" aria-checked="false" aria-label="Select Docker"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 24 24" fill="#008fe2">
                                  <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z"></path>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Docker
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 border-dashed cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-6 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Name the Docker engagement" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center">
                                <span className="flex-1 min-w-16" aria-hidden="true"></span>
                                <span className="shrink-0 tabular-nums text-muted-foreground text-right text-sm w-10">
                                  -
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Docker engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <span className="text-muted-foreground text-sm">
                                No milestone
                              </span>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="discovery-type-specimen">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_m_" aria-checked="false" aria-label="Select Gemini"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 296 298" fill="none">
                                  <mask id="gemini-a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                                    <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
                                  </mask>
                                  <g mask="url(#gemini-a)">
                                    <g filter="url(#gemini-b)">
                                      <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                                    </g>
                                    <g filter="url(#gemini-c)">
                                      <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                    </g>
                                    <g filter="url(#gemini-d)">
                                      <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                    </g>
                                    <g filter="url(#gemini-e)">
                                      <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                                    </g>
                                    <g filter="url(#gemini-f)">
                                      <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                                    </g>
                                    <g filter="url(#gemini-g)">
                                      <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                                    </g>
                                    <g filter="url(#gemini-h)">
                                      <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                                    </g>
                                  </g>
                                  <defs>
                                    <filter id="gemini-b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></fegaussianblur>
                                    </filter>
                                    <filter id="gemini-c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="gemini-d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                  </defs>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Gemini
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Type Specimen
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Type Specimen" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="27% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-sky-500 rounded-full"></span>
                                  <span className="bg-sky-500 rounded-full"></span>
                                  <span className="bg-sky-500 rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  27%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Gemini engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarFallback className="text-[9px]">
                                    IB
                                  </AvatarFallback>
                                </Avatar>
                                <AvatarGroupCount className="bg-background border size-5 tabular-nums text-[9px]">
                                  +1
                                </AvatarGroupCount>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Art Direction
                                </span>
                              </Badge>
                            </td>
                          </tr>
                        </DataGridTableBody>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </DataGrid>
                </section>
                <section aria-labelledby="delivery-stage-production">
                  <div className="bg-muted/50 border-y flex gap-2.5 items-center lg:px-4 px-3 py-2">
                    <span className="font-semibold text-sm" id="delivery-stage-production">
                      In Production
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-primary transition-shadow">
                      4
                    </Badge>
                    <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                      Avg 62%
                    </span>
                  </div>
                  <DataGrid>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "44px"}} />
                          <col style={{width: "212px"}} />
                          <col style={{width: "288px"}} />
                          <col style={{width: "192px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "164px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "44px"}}>
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_s_" aria-checked="false" aria-label="Select every row in In Production"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="client" data-header-id="client" data-header-depth="0" style={{width: "212px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Client
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="engagement" data-header-id="engagement" data-header-depth="0" style={{width: "288px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Engagement
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="completion" data-header-id="completion" data-header-depth="0" style={{width: "192px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Completion
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="crew" data-header-id="crew" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Crew
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="milestone" data-header-id="milestone" data-header-depth="0" style={{width: "164px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Milestone
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="production-lab-site">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_v_" aria-checked="false" aria-label="Select Supabase"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Supabase
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Lab Site Rebuild
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Lab Site Rebuild" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="64% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  64%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Supabase engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="David Kim" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Priya Patel" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <AvatarGroupCount className="bg-background border size-5 tabular-nums text-[9px]">
                                  +4
                                </AvatarGroupCount>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Motion Pass
                                </span>
                              </Badge>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="production-docuseries">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_14_" aria-checked="false" aria-label="Select Neon"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
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
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Neon
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Docuseries Titles
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Docuseries Titles" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="52% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  52%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Neon engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <AvatarGroupCount className="bg-background border size-5 tabular-nums text-[9px]">
                                  +1
                                </AvatarGroupCount>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Style Frames
                                </span>
                              </Badge>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="production-catalog">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_19_" aria-checked="false" aria-label="Select Slack"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                                  <g clipRule="evenodd" fillRule="evenodd">
                                    <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                    <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                    <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                    <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                  </g>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Slack
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Catalog Relaunch
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Catalog Relaunch" id="base-ui-_r_1d_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="71% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  71%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Slack engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <AvatarGroupCount className="bg-background border size-5 tabular-nums text-[9px]">
                                  +2
                                </AvatarGroupCount>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Photo Edit
                                </span>
                              </Badge>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="production-sable-slot">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1e_" aria-checked="false" aria-label="Select Loom"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                  <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Loom
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 border-dashed cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-6 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Name the Loom engagement" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center">
                                <span className="flex-1 min-w-16" aria-hidden="true"></span>
                                <span className="shrink-0 tabular-nums text-muted-foreground text-right text-sm w-10">
                                  -
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Loom engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <span className="text-muted-foreground text-sm">
                                No milestone
                              </span>
                            </td>
                          </tr>
                        </DataGridTableBody>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </DataGrid>
                </section>
                <section aria-labelledby="delivery-stage-review">
                  <div className="bg-muted/50 border-y flex gap-2.5 items-center lg:px-4 px-3 py-2">
                    <span className="font-semibold text-sm" id="delivery-stage-review">
                      Client Review
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-warning-foreground transition-shadow">
                      3
                    </Badge>
                    <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                      Avg 83%
                    </span>
                  </div>
                  <DataGrid>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "44px"}} />
                          <col style={{width: "212px"}} />
                          <col style={{width: "288px"}} />
                          <col style={{width: "192px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "164px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "44px"}}>
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1k_" aria-checked="false" aria-label="Select every row in Client Review"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="client" data-header-id="client" data-header-depth="0" style={{width: "212px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Client
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="engagement" data-header-id="engagement" data-header-depth="0" style={{width: "288px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Engagement
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="completion" data-header-id="completion" data-header-depth="0" style={{width: "192px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Completion
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="crew" data-header-id="crew" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Crew
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="milestone" data-header-id="milestone" data-header-depth="0" style={{width: "164px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Milestone
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="review-annual-report">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1n_" aria-checked="false" aria-label="Select Hono"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 330">
                                  <path d="M134.129.029c.876-.113 1.65.108 2.319.662a1256.253 1256.253 0 0 1 69.573 93.427c16.094 24.231 29.788 49.851 41.082 76.862 18.037 48.108 8.65 89.963-28.16 125.564-32.209 27.22-69.314 37.822-111.318 31.805-50.208-10.237-84.332-39.28-102.373-87.133C.553 225.638-.993 209.736.614 193.51c2.676-27.93 9.302-54.877 19.878-80.838 4.407-10.592 10.15-20.31 17.228-29.154a381.88 381.88 0 0 1 16.565 21.203c2.44 2.55 4.98 4.98 7.62 7.289C82.06 72.01 106.135 34.685 134.13.029Z" fill="#FF5B11" opacity=".993"></path>
                                  <path d="M129.49 53.7c24.314 28.2 46.29 58.238 65.93 90.114a187.318 187.318 0 0 1 15.24 33.13c8.338 32.804-.607 59.86-26.836 81.169-25.367 17.85-53.196 23.15-83.488 15.902-32.666-10.136-51.55-32.113-56.653-65.929-1.238-10.662-.133-21.043 3.314-31.142a225.41 225.41 0 0 1 17.89-35.78l19.878-29.155a5509.508 5509.508 0 0 0 44.726-58.31Z" fill="#FF9758"></path>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Hono
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Annual Report
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Annual Report" id="base-ui-_r_1r_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="88% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  88%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Hono engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Priya Patel" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <AvatarGroupCount className="bg-background border size-5 tabular-nums text-[9px]">
                                  +3
                                </AvatarGroupCount>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Print Proof
                                </span>
                              </Badge>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="review-care-campaign">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1s_" aria-checked="false" aria-label="Select Convex"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="28 28 128 132" fill="none">
                                  <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                                  <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                                  <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Convex
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Care Campaign
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Care Campaign" id="base-ui-_r_20_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="79% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-amber-500 rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  79%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Convex engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="David Kim" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Final Cut
                                </span>
                              </Badge>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="review-cellar-identity">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_21_" aria-checked="false" aria-label="Select Redis"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                                  <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                  <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                                  <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                                  <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                                  <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                  <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                                  <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                                  <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                                  <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Redis
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Cellar Identity
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Cellar Identity" id="base-ui-_r_25_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="83% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-muted rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  83%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Redis engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Brand Book
                                </span>
                              </Badge>
                            </td>
                          </tr>
                        </DataGridTableBody>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </DataGrid>
                </section>
                <section aria-labelledby="delivery-stage-handoff">
                  <div className="bg-muted/50 border-y flex gap-2.5 items-center lg:px-4 px-3 py-2">
                    <span className="font-semibold text-sm" id="delivery-stage-handoff">
                      Ready To Ship
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-success-foreground transition-shadow">
                      2
                    </Badge>
                    <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                      Avg 98%
                    </span>
                  </div>
                  <DataGrid>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "44px"}} />
                          <col style={{width: "212px"}} />
                          <col style={{width: "288px"}} />
                          <col style={{width: "192px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "164px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "44px"}}>
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_27_" aria-checked="false" aria-label="Select every row in Ready To Ship"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="client" data-header-id="client" data-header-depth="0" style={{width: "212px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Client
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="engagement" data-header-id="engagement" data-header-depth="0" style={{width: "288px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Engagement
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="completion" data-header-id="completion" data-header-depth="0" style={{width: "192px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Completion
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="crew" data-header-id="crew" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Crew
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="milestone" data-header-id="milestone" data-header-depth="0" style={{width: "164px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Milestone
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="handoff-holiday-packaging">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2a_" aria-checked="false" aria-label="Select Stripe"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                  <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                </svg>
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Stripe
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Holiday Packaging
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Holiday Packaging" id="base-ui-_r_2e_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="96% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  96%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Stripe engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <AvatarGroupCount className="bg-background border size-5 tabular-nums text-[9px]">
                                  +5
                                </AvatarGroupCount>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Launch Kit
                                </span>
                              </Badge>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="handoff-investor-deck">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2f_" aria-checked="false" aria-label="Select Supabase"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <svg className="shrink-0 size-5" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
                                <span className="font-medium min-w-0 text-foreground text-sm truncate">
                                  Supabase
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-1 items-center min-w-0">
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Investor Deck
                                </span>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open the brief for Investor Deck" id="base-ui-_r_2j_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <div className="flex gap-2 items-center" aria-label="100% complete">
                                <span className="flex-1 gap-1 grid grid-cols-8 h-1.5 min-w-16" aria-hidden="true">
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                  <span className="bg-emerald-500 rounded-full"></span>
                                </span>
                                <span className="shrink-0 tabular-nums text-foreground text-right text-sm w-10">
                                  100%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5">
                              <AvatarGroup className="-space-x-1" aria-label="Crew on the Supabase engagement">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarFallback className="text-[9px]">
                                    IB
                                  </AvatarFallback>
                                </Avatar>
                              </AvatarGroup>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-w-full min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="min-w-0 truncate">
                                  Handoff
                                </span>
                              </Badge>
                            </td>
                          </tr>
                        </DataGridTableBody>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </DataGrid>
                </section>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </section>
    </main>
  )
}
