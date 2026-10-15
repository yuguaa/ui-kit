import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFoot,
  DataGridTableFootRow,
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Revenue by region grouped data grid"}
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <Frame>
          <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-1 min-w-0">
              <div className="font-semibold text-sm">
                {"Revenue By Region"}
              </div>
              <div className="text-muted-foreground text-sm">
                {"Net retention and renewals across the book."}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center min-w-0">
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Total ARR"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  {"$8.57M"}
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Portfolio NRR"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                  {"111%"}
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"At-Risk ARR"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                  {"$1.04M"}
                </Badge>
              </div>
              <Button type="button" tabIndex={0} extracted="1">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
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
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search accounts..." aria-label="Search accounts" value="" />
              </InputGroup>
              <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                  <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                  {"Health"}
                </DropdownMenuTrigger>
                </DropdownMenu>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_8_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx={17} cy={17} r={3}></circle>
                    <circle cx={7} cy={7} r={3}></circle>
                  </svg>
                  {"Display"}
                </PopoverTrigger>
                </Popover>
                <Button type="button" tabIndex={0}>
                  {"Expand all"}
                </Button>
              </div>
            </div>
            <DataGrid>
              <div className="relative">
                <DataGridProvider>
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_9_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridProvider>
                      <DataGridTableViewport>
                        <DataGridProvider>
                        <DataGridTable>
                          <colgroup>
                            <col style={{width: "240px"}} />
                            <col style={{width: "190px"}} />
                            <col style={{width: "120px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "120px"}} />
                            <col style={{width: "184px"}} />
                            <col style={{width: "56px"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="account" data-header-id="account" data-header-depth="0" style={{width: "240px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  {"Account"}
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "190px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  {"Owner"}
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="health" data-header-id="health" data-header-depth="0" style={{width: "120px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  {"Health"}
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="arr" data-header-id="arr" data-header-depth="0" style={{width: "150px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  {"ARR"}
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="nrr" data-header-id="nrr" data-header-depth="0" style={{width: "120px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  {"NRR"}
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="renewal" data-header-id="renewal" data-header-depth="0" style={{width: "184px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  {"Renewal"}
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}></th>
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="na">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0" data-portfolio-row="region">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse North America" aria-expanded="true">
                                    <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                  <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                    {"North America"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    {"7"}
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-muted-foreground text-sm truncate">
                                  {"US and Canada strategic accounts"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2"></td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$2,905,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"115%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                    <span className="text-muted-foreground">
                                      {"Next"}
                                    </span>
                                    <span className="tabular-nums text-foreground">
                                      {"Jun 30, 2026"}
                                    </span>
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="acc-northwind" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0 ps-8" data-portfolio-row="account">
                                  <Item className="bg-blue-100 border border-blue-200 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-300 font-semibold p-0 size-7 text-blue-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                    {"NT"}
                                  </Item>
                                  <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                    <span className="gap-1 group/account-name inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        {"Northwind Trading"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/account-name:opacity-100 group-hover/account-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="min-w-0 text-foreground text-sm truncate">
                                    {"Rina Holt"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Healthy"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$920,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"124%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                      <path d="M3 10h18"></path>
                                      <path d="M8 14h.01"></path>
                                      <path d="M12 14h.01"></path>
                                      <path d="M16 14h.01"></path>
                                      <path d="M8 18h.01"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M16 18h.01"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"Sep 14, 2026"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Northwind Trading" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="acc-cedar" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0 ps-8" data-portfolio-row="account">
                                  <Item className="bg-violet-100 border border-violet-200 dark:bg-violet-950 dark:border-violet-900 dark:text-violet-300 font-semibold p-0 size-7 text-violet-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                    {"CH"}
                                  </Item>
                                  <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                    <span className="gap-1 group/account-name inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        {"Cedar Health Systems"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/account-name:opacity-100 group-hover/account-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Evren Blake" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="min-w-0 text-foreground text-sm truncate">
                                    {"Evren Blake"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Watch"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$760,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"103%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                      <path d="M3 10h18"></path>
                                      <path d="M8 14h.01"></path>
                                      <path d="M12 14h.01"></path>
                                      <path d="M16 14h.01"></path>
                                      <path d="M8 18h.01"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M16 18h.01"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"Jul 2, 2026"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Cedar Health Systems" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="acc-vantage" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0 ps-8" data-portfolio-row="account">
                                  <Item className="bg-emerald-100 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-300 font-semibold p-0 size-7 text-emerald-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                    {"VR"}
                                  </Item>
                                  <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                    <span className="gap-1 group/account-name inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        {"Vantage Robotics"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/account-name:opacity-100 group-hover/account-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Rina Holt" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="min-w-0 text-foreground text-sm truncate">
                                    {"Rina Holt"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Healthy"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$410,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"118%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                      <path d="M3 10h18"></path>
                                      <path d="M8 14h.01"></path>
                                      <path d="M12 14h.01"></path>
                                      <path d="M16 14h.01"></path>
                                      <path d="M8 18h.01"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M16 18h.01"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"Nov 21, 2026"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Vantage Robotics" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="acc-brightline" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0 ps-8" data-portfolio-row="account">
                                  <Item className="bg-amber-100 border border-amber-200 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-300 font-semibold p-0 size-7 text-amber-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                    {"BM"}
                                  </Item>
                                  <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                    <span className="gap-1 group/account-name inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        {"Brightline Media"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/account-name:opacity-100 group-hover/account-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Mina Rowe" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="min-w-0 text-foreground text-sm truncate">
                                    {"Mina Rowe"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"At Risk"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$285,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-rose-500 gap-1 inline-flex items-center tabular-nums text-rose-600 text-sm">
                                    <svg className="lucide lucide-trending-down shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                      <path d="M16 17h6v-6"></path>
                                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                    </svg>
                                    {"92%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                      <path d="M3 10h18"></path>
                                      <path d="M8 14h.01"></path>
                                      <path d="M12 14h.01"></path>
                                      <path d="M16 14h.01"></path>
                                      <path d="M8 18h.01"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M16 18h.01"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"Jun 30, 2026"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Brightline Media" aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="acc-summit" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0 ps-8" data-portfolio-row="account">
                                  <Item className="bg-rose-100 border border-rose-200 dark:bg-rose-950 dark:border-rose-900 dark:text-rose-300 font-semibold p-0 size-7 text-rose-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                    {"SA"}
                                  </Item>
                                  <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                    <span className="gap-1 group/account-name inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        {"Summit Analytics"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/account-name:opacity-100 group-hover/account-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Evren Blake" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="min-w-0 text-foreground text-sm truncate">
                                    {"Evren Blake"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Healthy"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$138,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"129%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                      <path d="M3 10h18"></path>
                                      <path d="M8 14h.01"></path>
                                      <path d="M12 14h.01"></path>
                                      <path d="M16 14h.01"></path>
                                      <path d="M8 18h.01"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M16 18h.01"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"Oct 9, 2026"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Summit Analytics" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="acc-banyan" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0 ps-8" data-portfolio-row="account">
                                  <Item className="bg-cyan-100 border border-cyan-200 dark:bg-cyan-950 dark:border-cyan-900 dark:text-cyan-300 font-semibold p-0 size-7 text-cyan-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                    {"BA"}
                                  </Item>
                                  <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                    <span className="gap-1 group/account-name inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        {"Banyan AgriTech"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/account-name:opacity-100 group-hover/account-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Sora Min" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="min-w-0 text-foreground text-sm truncate">
                                    {"Sora Min"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Healthy"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$124,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"132%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                      <path d="M3 10h18"></path>
                                      <path d="M8 14h.01"></path>
                                      <path d="M12 14h.01"></path>
                                      <path d="M16 14h.01"></path>
                                      <path d="M8 18h.01"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M16 18h.01"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"Nov 12, 2026"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Banyan AgriTech" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="acc-andes" data-depth="1">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0 ps-8" data-portfolio-row="account">
                                  <Item className="bg-blue-100 border border-blue-200 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-300 font-semibold p-0 size-7 text-blue-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                    {"AF"}
                                  </Item>
                                  <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                    <span className="gap-1 group/account-name inline-flex items-center min-w-0 truncate">
                                      <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                        {"Andes Fintech"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/account-name:opacity-100 group-hover/account-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Noor Albright" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="min-w-0 text-foreground text-sm truncate">
                                    {"Noor Albright"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Healthy"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"$268,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"122%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                      <path d="M3 10h18"></path>
                                      <path d="M8 14h.01"></path>
                                      <path d="M12 14h.01"></path>
                                      <path d="M16 14h.01"></path>
                                      <path d="M8 18h.01"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M16 18h.01"></path>
                                    </svg>
                                    <span className="tabular-nums">
                                      {"Oct 30, 2026"}
                                    </span>
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Andes Fintech" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="emea">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0" data-portfolio-row="region">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Expand EMEA" aria-expanded="false">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                  <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                    {"EMEA"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    {"6"}
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Europe, Middle East, and Africa book"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2"></td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$3,495,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"109%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                    <span className="text-muted-foreground">
                                      {"Next"}
                                    </span>
                                    <span className="tabular-nums text-foreground">
                                      {"Jun 24, 2026"}
                                    </span>
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="apac">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0" data-portfolio-row="region">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Expand APAC" aria-expanded="false">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                  <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                    {"APAC"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    {"4"}
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Asia Pacific growth territory"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2"></td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$1,625,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"107%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                    <span className="text-muted-foreground">
                                      {"Next"}
                                    </span>
                                    <span className="tabular-nums text-foreground">
                                      {"Jun 27, 2026"}
                                    </span>
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                            </tr>
                            <tr className="[&:has([data-portfolio-row=region])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/portfolio-row hover:bg-muted/40" data-row-id="latam">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex gap-2 items-center min-w-0" data-portfolio-row="region">
                                  <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Expand LATAM" aria-expanded="false">
                                    <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                  </svg>
                                  <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                    {"LATAM"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    {"3"}
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Latin America emerging accounts"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2"></td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="font-semibold tabular-nums text-foreground text-sm">
                                    {"$550,000"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2 text-right!">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"108%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-end">
                                  <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                    <span className="text-muted-foreground">
                                      {"Next"}
                                    </span>
                                    <span className="tabular-nums text-foreground">
                                      {"Jun 22, 2026"}
                                    </span>
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                            </tr>
                          </DataGridTableBody>
                          </DataGridProvider>
                          <DataGridProvider>
                          <DataGridTableFoot>
                            <DataGridTableFootRow>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="font-semibold text-foreground text-sm">
                                    {"All Regions"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                    {"20"}
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  {"$8,575,000"}
                                </span>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                                <div className="flex items-center justify-end w-full">
                                  <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                    <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    {"111%"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                              <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
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
