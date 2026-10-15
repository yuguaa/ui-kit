import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
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
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-6xl min-h-svh mx-auto p-4 pt-8 sm:p-8 sm:pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Modules data grid"}
      </h1>
      <div className="flex flex-col max-w-6xl w-full">
        <div className="border-b flex flex-col gap-3 lg:flex-row lg:gap-4 lg:items-center lg:min-h-14 lg:py-0 px-0 py-3">
          <div className="flex gap-2 items-center min-w-0">
            <svg className="fill-amber-400 lucide lucide-flag shrink-0 size-3.5 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
              <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
            </svg>
            <span className="text-muted-foreground text-sm truncate">
              {"Newcapec"}
            </span>
            <svg className="lucide lucide-chevron-right shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
            <svg className="lucide lucide-package shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
              <path d="M12 22V12"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <path d="m7.5 4.27 9 5.15"></path>
            </svg>
            <h2 className="font-medium text-foreground text-sm truncate">
              {"Modules"}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 items-center lg:flex-nowrap lg:ml-auto min-w-0">
            <InputGroup className="min-w-40 sm:w-48" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search..." aria-label="Search modules" value="" />
            </InputGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" data-icon="inline-start" aria-hidden="true">
                <path d="m21 16-4 4-4-4"></path>
                <path d="M17 20V4"></path>
                <path d="m3 8 4-4 4 4"></path>
                <path d="M7 4v16"></path>
              </svg>
              {"Name"}
              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
              <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
              </svg>
              {"Filters"}
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Button type="button" tabIndex="0">
              {"Add Module"}
            </Button>
          </div>
        </div>
        <div className="relative">
          <DataGridProvider>
          <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_c_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
              <div role="presentation" style={{minWidth: "fit-content"}}>
                <DataGridProvider>
                <DataGridTableViewport>
                  <DataGridProvider>
                  <DataGridTable>
                    <colgroup>
                      <col style={{width: "210px"}} />
                      <col style={{width: "300px"}} />
                      <col style={{width: "180px"}} />
                      <col style={{width: "126px"}} />
                      <col style={{width: "104px"}} />
                    </colgroup>
                    <thead>
                      <tr className="[&>th]:border-b bg-transparent">
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="progress" data-header-id="progress" data-header-depth="0" style={{width: "210px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                              {"Progress"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "300px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                              {"Module"}
                              <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                <path d="m5 12 7-7 7 7"></path>
                                <path d="M12 19V5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="dateStart" data-header-id="dateStart" data-header-depth="0" style={{width: "180px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                              {"Window"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "126px"}}>
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
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "104px"}}>
                          <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                            {"Actions"}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <DataGridProvider>
                    <DataGridTableBody>
                      <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="api-console">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <div className="relative shrink-0 size-10">
                              <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                <circle className="dark:text-emerald-400 stroke-current text-emerald-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="10.178760197630922"></circle>
                              </svg>
                              <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                {"91%"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"91% ready"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"29/32 tasks"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"API Console"}
                            </span>
                            <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="shrink-0">
                                {"Feature"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Lena Brooks"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="font-mono tracking-wide truncate uppercase">
                                {"api-console"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="font-medium tabular-nums text-foreground text-sm truncate">
                              {"Apr 12 - Apr 26"}
                            </span>
                            <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                              <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                                <path d="M8 14h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 18h.01"></path>
                                <path d="M12 18h.01"></path>
                                <path d="M16 18h.01"></path>
                              </svg>
                              {"14-day window"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                            {"In Progress"}
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex="0" aria-label="Open API Console">
                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                            </Button>
                            <Button className="text-amber-500" type="button" tabIndex="0" aria-label="Unfavorite API Console">
                              <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for API Console" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="audit-trail">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <div className="relative shrink-0 size-10">
                              <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                <circle className="dark:text-emerald-400 stroke-current text-emerald-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="27.143360527015815"></circle>
                              </svg>
                              <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                {"76%"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"76% ready"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"19/25 tasks"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Audit Trail"}
                            </span>
                            <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="shrink-0">
                                {"System"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Omar Haddad"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="font-mono tracking-wide truncate uppercase">
                                {"audit-trail"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="font-medium tabular-nums text-foreground text-sm truncate">
                              {"Apr 15 - Apr 30"}
                            </span>
                            <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                              <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                                <path d="M8 14h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 18h.01"></path>
                                <path d="M12 18h.01"></path>
                                <path d="M16 18h.01"></path>
                              </svg>
                              {"15-day window"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                            {"In Progress"}
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex="0" aria-label="Open Audit Trail">
                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                            </Button>
                            <Button className="text-amber-500" type="button" tabIndex="0" aria-label="Unfavorite Audit Trail">
                              <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Audit Trail" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="billing-rules">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <div className="relative shrink-0 size-10">
                              <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="40.715040790523716"></circle>
                              </svg>
                              <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                {"64%"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"64% ready"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"21/33 tasks"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Billing Rules"}
                            </span>
                            <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="shrink-0">
                                {"Feature"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Elijah Morgan"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="font-mono tracking-wide truncate uppercase">
                                {"billing-rules"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="font-medium tabular-nums text-foreground text-sm truncate">
                              {"Apr 18 - May 02"}
                            </span>
                            <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                              <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                                <path d="M8 14h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 18h.01"></path>
                                <path d="M12 18h.01"></path>
                                <path d="M16 18h.01"></path>
                              </svg>
                              {"14-day window"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                            {"In Progress"}
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex="0" aria-label="Open Billing Rules">
                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex="0" aria-label="Favorite Billing Rules">
                              <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Billing Rules" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="core-workflow">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <div className="relative shrink-0 size-10">
                              <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="84.82300164692441"></circle>
                              </svg>
                              <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                {"25%"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"25% ready"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"8/32 tasks"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Core Workflow"}
                            </span>
                            <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="shrink-0">
                                {"System"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Maya Patel"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="font-mono tracking-wide truncate uppercase">
                                {"core-workflow"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="font-medium tabular-nums text-foreground text-sm truncate">
                              {"Apr 17 - May 01"}
                            </span>
                            <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                              <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                                <path d="M8 14h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 18h.01"></path>
                                <path d="M12 18h.01"></path>
                                <path d="M16 18h.01"></path>
                              </svg>
                              {"14-day window"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            <span className="bg-sky-500 dark:bg-sky-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                            {"Planned"}
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex="0" aria-label="Open Core Workflow">
                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex="0" aria-label="Favorite Core Workflow">
                              <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Core Workflow" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="data-retention">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <div className="relative shrink-0 size-10">
                              <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="88.21592171280139"></circle>
                              </svg>
                              <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                {"22%"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"22% ready"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                {"7/32 tasks"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-medium leading-5 text-foreground text-sm truncate">
                              {"Data Retention"}
                            </span>
                            <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <span className="shrink-0">
                                {"System"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Kenji Tan"}
                              </span>
                              <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="font-mono tracking-wide truncate uppercase">
                                {"data-retention"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="font-medium tabular-nums text-foreground text-sm truncate">
                              {"Apr 27 - May 14"}
                            </span>
                            <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                              <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                                <path d="M8 14h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 18h.01"></path>
                                <path d="M12 18h.01"></path>
                                <path d="M16 18h.01"></path>
                              </svg>
                              {"17-day window"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span className="bg-muted-foreground/50 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                            {"Backlog"}
                          </Badge>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-1 items-center justify-end">
                            <Button type="button" tabIndex="0" aria-label="Open Data Retention">
                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                              </svg>
                            </Button>
                            <Button type="button" tabIndex="0" aria-label="Favorite Data Retention">
                              <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Data Retention" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
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
        <div className="border-t px-0 py-3">
          <DataGridProvider>
          <DataGridPagination className="py-0">
            <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
              <div className="text-muted-foreground text-sm">
                {"Rows per page"}
              </div>
              <Select>
              <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_16_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                <SelectValue>
                  {"5"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_16_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
              <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                {"1 - 5 of 17 modules"}
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
                <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 4">
                  {"4"}
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
      </div>
    </main>
  )
}
