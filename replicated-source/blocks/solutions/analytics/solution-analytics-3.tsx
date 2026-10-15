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
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
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
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex justify-center md:p-10 min-h-svh p-4 sm:p-6 w-full">
      <div className="@container flex flex-col gap-6 max-w-7xl mx-auto w-full">
        <header className="@5xl:flex-row @5xl:items-center @5xl:justify-between flex flex-col gap-3 shrink-0 w-full">
          <div className="flex items-center min-w-0">
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="flex gap-1 items-center" href="#">
                    <svg className="lucide lucide-chart-column size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                    <span className="hidden md:inline">
                      {"Analytics"}
                    </span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    {"Activation Funnel"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="@5xl:justify-end flex flex-wrap gap-2 items-center">
            <div className="flex gap-2 items-center">
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-calendar opacity-30 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="text-foreground truncate">
                  {"May cohort"}
                </span>
              </PopoverTrigger>
              </Popover>
              <Button type="button" tabIndex="0" aria-pressed="true">
                <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span className="hidden md:inline">
                  {"Compare"}
                </span>
              </Button>
            </div>
            <div className="flex gap-1 items-center">
              <Button type="button" tabIndex="0" aria-label="Refresh report">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open report actions" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <div className="flex gap-2 items-center">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
                <span className="hidden md:block">
                  {"Share"}
                </span>
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                <span className="hidden md:block">
                  {"Export"}
                </span>
              </Button>
            </div>
          </div>
        </header>
        <div className="@5xl:auto-rows-fr @5xl:grid-cols-12 gap-6 grid grid-cols-1 items-stretch">
          <div className="@5xl:col-span-8 flex h-full">
            <Frame className="h-full w-full">
              <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
                <div className="font-semibold text-sm">
                  {"Activation Funnel"}
                </div>
                <Select>
                <SelectTrigger className="min-w-[140px]" type="button" tabIndex="0" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"Last 30 days"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="30d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </header>
              <FramePanel className="flex flex-1 flex-col gap-6">
                <div className="gap-6 grid grid-cols-2 md:grid-cols-4 p-2">
                  <div className="space-y-1">
                    <div className="flex gap-2.5 items-center">
                      <div className="bg-border h-12 rounded-full w-0.5"></div>
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-muted-foreground text-xs">
                          {"Account Created"}
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <span className="font-semibold leading-none text-base">
                            {"3,572"}
                          </span>
                          <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"14%"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex gap-2.5 items-center">
                      <div className="bg-border h-12 rounded-full w-0.5"></div>
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-muted-foreground text-xs">
                          {"Invite Sent"}
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <span className="font-semibold leading-none text-base">
                            {"2,638"}
                          </span>
                          <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"19%"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex gap-2.5 items-center">
                      <div className="bg-border h-12 rounded-full w-0.5"></div>
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-muted-foreground text-xs">
                          {"Saved Report"}
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <span className="font-semibold leading-none text-base">
                            {"1,788"}
                          </span>
                          <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"11%"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex gap-2.5 items-center">
                      <div className="bg-border h-12 rounded-full w-0.5"></div>
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-muted-foreground text-xs">
                          {"Week Four Retained"}
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <span className="font-semibold leading-none text-base">
                            {"1,014"}
                          </span>
                          <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-destructive text-xs">
                            <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                              <path d="M16 17h6v-6"></path>
                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                            </svg>
                            {"6%"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[250px] justify-center mt-auto text-xs w-full" data-chart="chart-_r_a_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_a_] {\n  --color-accountCreated: var(--color-indigo-400);\n  --color-inviteSent: var(--color-indigo-500);\n  --color-savedReport: var(--color-indigo-600);\n  --color-weekFourRetained: var(--color-indigo-700);\n}\n\n\n.dark [data-chart=chart-_r_a_] {\n  --color-accountCreated: var(--color-indigo-400);\n  --color-inviteSent: var(--color-indigo-500);\n  --color-savedReport: var(--color-indigo-600);\n  --color-weekFourRetained: var(--color-indigo-700);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="750" height="250" style={{position: "relative", cursor: "default", width: "750px", height: "250px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="750" height="250" viewBox="0 0 750 250" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="740" height="200" x1="5" y1="210" x2="745" y2="210"></line>
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="740" height="200" x1="5" y1="160" x2="745" y2="160"></line>
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="740" height="200" x1="5" y1="110" x2="745" y2="110"></line>
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="740" height="200" x1="5" y1="60" x2="745" y2="60"></line>
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="740" height="200" x1="5" y1="10" x2="745" y2="10"></line>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts1-clip">
                              <rect x="5" y="10" height="200" width="740"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <lineargradient id="fillAccountCreated" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-accountCreated)" stopOpacity="0.8"></stop>
                              <stop offset="95%" stopColor="var(--color-accountCreated)" stopOpacity="0.1"></stop>
                            </lineargradient>
                            <lineargradient id="fillInviteSent" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-inviteSent)" stopOpacity="0.8"></stop>
                              <stop offset="95%" stopColor="var(--color-inviteSent)" stopOpacity="0.1"></stop>
                            </lineargradient>
                            <lineargradient id="fillSavedReport" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-savedReport)" stopOpacity="0.8"></stop>
                              <stop offset="95%" stopColor="var(--color-savedReport)" stopOpacity="0.1"></stop>
                            </lineargradient>
                            <lineargradient id="fillWeekFourRetained" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-weekFourRetained)" stopOpacity="0.8"></stop>
                              <stop offset="95%" stopColor="var(--color-weekFourRetained)" stopOpacity="0.1"></stop>
                            </lineargradient>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillWeekFourRetained)" fillOpacity="0.6" height="200" stroke="none" width="740" id="recharts-area-_r_n_" d="M5,196.32C54.333,195.049,103.667,193.778,153,193.56C202.333,193.342,251.667,194.177,301,195.84C350.333,197.503,399.667,199.994,449,198.96C498.333,197.926,547.667,193.367,597,191.24C646.333,189.113,695.667,189.416,745,189.72L745,210C695.667,210,646.333,210,597,210C547.667,210,498.333,210,449,210C399.667,210,350.333,210,301,210C251.667,210,202.333,210,153,210C103.667,210,54.333,210,5,210Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-weekFourRetained)" width="740" d="M5,196.32C54.333,195.049,103.667,193.778,153,193.56C202.333,193.342,251.667,194.177,301,195.84C350.333,197.503,399.667,199.994,449,198.96C498.333,197.926,547.667,193.367,597,191.24C646.333,189.113,695.667,189.416,745,189.72"></path>
                              </g>
                            </g>
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillSavedReport)" fillOpacity="0.6" height="200" stroke="none" width="740" id="recharts-area-_r_o_" d="M5,171.04C54.333,167.458,103.667,163.877,153,163.32C202.333,162.763,251.667,165.232,301,169.88C350.333,174.528,399.667,181.356,449,178.64C498.333,175.924,547.667,163.664,597,157.96C646.333,152.256,695.667,153.108,745,153.96L745,189.72C695.667,189.416,646.333,189.113,597,191.24C547.667,193.367,498.333,197.926,449,198.96C399.667,199.994,350.333,197.503,301,195.84C251.667,194.177,202.333,193.342,153,193.56C103.667,193.778,54.333,195.049,5,196.32Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-savedReport)" width="740" d="M5,171.04C54.333,167.458,103.667,163.877,153,163.32C202.333,162.763,251.667,165.232,301,169.88C350.333,174.528,399.667,181.356,449,178.64C498.333,175.924,547.667,163.664,597,157.96C646.333,152.256,695.667,153.108,745,153.96"></path>
                              </g>
                            </g>
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillInviteSent)" fillOpacity="0.6" height="200" stroke="none" width="740" id="recharts-area-_r_p_" d="M5,131.44C54.333,125.115,103.667,118.789,153,117.44C202.333,116.091,251.667,119.718,301,127.76C350.333,135.802,399.667,148.261,449,143.8C498.333,139.339,547.667,117.96,597,108.04C646.333,98.12,695.667,99.66,745,101.2L745,153.96C695.667,153.108,646.333,152.256,597,157.96C547.667,163.664,498.333,175.924,449,178.64C399.667,181.356,350.333,174.528,301,169.88C251.667,165.232,202.333,162.763,153,163.32C103.667,163.877,54.333,167.458,5,171.04Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-inviteSent)" width="740" d="M5,131.44C54.333,125.115,103.667,118.789,153,117.44C202.333,116.091,251.667,119.718,301,127.76C350.333,135.802,399.667,148.261,449,143.8C498.333,139.339,547.667,117.96,597,108.04C646.333,98.12,695.667,99.66,745,101.2"></path>
                              </g>
                            </g>
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillAccountCreated)" fillOpacity="0.6" height="200" stroke="none" width="740" id="recharts-area-_r_q_" d="M5,74.64C54.333,65.548,103.667,56.455,153,54.28C202.333,52.105,251.667,56.847,301,68.24C350.333,79.633,399.667,97.677,449,91.44C498.333,85.203,547.667,54.687,597,40.36C646.333,26.033,695.667,27.897,745,29.76L745,101.2C695.667,99.66,646.333,98.12,597,108.04C547.667,117.96,498.333,139.339,449,143.8C399.667,148.261,350.333,135.802,301,127.76C251.667,119.718,202.333,116.091,153,117.44C103.667,118.789,54.333,125.115,5,131.44Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-accountCreated)" width="740" d="M5,74.64C54.333,65.548,103.667,56.455,153,54.28C202.333,52.105,251.667,56.847,301,68.24C350.333,79.633,399.667,97.677,449,91.44C498.333,85.203,547.667,54.687,597,40.36C646.333,26.033,695.667,27.897,745,29.76"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_500" tabIndex="-1">
                            <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                              <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                  <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                            <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="740" stroke="none" fontSize="12" x="153" y="226" textAnchor="middle" fill="#666">
                                  <tspan x="153" dy="0.71em">
                                    {"W2"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="740" stroke="none" fontSize="12" x="301" y="226" textAnchor="middle" fill="#666">
                                  <tspan x="301" dy="0.71em">
                                    {"W3"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="740" stroke="none" fontSize="12" x="449" y="226" textAnchor="middle" fill="#666">
                                  <tspan x="449" dy="0.71em">
                                    {"W4"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="740" stroke="none" fontSize="12" x="597" y="226" textAnchor="middle" fill="#666">
                                  <tspan x="597" dy="0.71em">
                                    {"W5"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="740" stroke="none" fontSize="12" x="740.3671875" y="226" textAnchor="middle" fill="#666">
                                  <tspan x="740.3671875" dy="0.71em">
                                    {"W6"}
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </ChartContainer>
              </FramePanel>
            </Frame>
          </div>
          <div className="@5xl:col-span-4 flex h-full">
            <Frame className="h-full w-full">
              <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
                <div className="flex gap-2 items-center">
                  <div className="font-semibold text-sm">
                    {"Segment Mix"}
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-none border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span>
                      {"+8.6%"}
                    </span>
                  </Badge>
                </div>
                <Button type="button" tabIndex="0">
                  {"Export"}
                </Button>
              </header>
              <FramePanel className="flex flex-1 flex-col gap-6">
                <div className="flex flex-1 flex-col gap-6">
                  <div className="flex gap-3 items-center px-2">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-chart-pie" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PieChartIcon" tabler="IconChartPie" hugeicons="PieChartIcon" phosphor="ChartPieIcon" remixicon="RiPieChartLine" aria-hidden="true">
                          <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div>
                      <div className="font-medium text-muted-foreground text-sm">
                        {"Activated Workspaces"}
                      </div>
                      <div className="font-bold text-2xl">
                        {"976"}
                      </div>
                    </div>
                  </div>
                  <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
                    <TabsList className="w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                      <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_b_" compositeItemActive="">
                        {"5D"}
                      </TabsTrigger>
                      <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_c_">
                        {"2W"}
                      </TabsTrigger>
                      <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_d_">
                        {"1M"}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-square cn-chart flex justify-center max-h-[200px] mt-auto mx-auto overflow-visible text-xs w-full" data-chart="chart-_r_e_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_e_] {\n  --color-organic: var(--color-blue-500);\n  --color-partner: var(--color-sky-500);\n  --color-sales: var(--color-orange-500);\n  --color-imported: var(--color-indigo-500);\n  --color-dormant: var(--color-slate-500);\n}\n\n\n.dark [data-chart=chart-_r_e_] {\n  --color-organic: var(--color-blue-500);\n  --color-partner: var(--color-sky-500);\n  --color-sales: var(--color-orange-500);\n  --color-imported: var(--color-indigo-500);\n  --color-dormant: var(--color-slate-500);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="overflow-visible recharts-wrapper" width="342" height="200" style={{position: "relative", cursor: "default", width: "342px", height: "200px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="342" height="200" viewBox="0 0 342 200" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts2-clip">
                                <rect x="5" y="5" height="190" width="332"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-layer recharts-pie" tabIndex="0">
                                <g className="recharts-layer">
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="171" cy="100" fill="var(--color-blue-500)" name="organic" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_r_" d={"M 262.6515,100\n    A8,8,0,0,0,270.6212,91.3043\n    A100,100,0,0,0,138.3634,5.4757\n    A8,8,0,0,0,133.6681,16.2962\n  L153.7908,61.4145\n      A8,8,0,0,0,162.9395,65.9408\n      A35,35,0,0,1,205.3889,93.4884\n      A8,8,0,0,0,213.2493,100Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="171" cy="100" fill="var(--color-sky-500)" name="partner" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_r_" d={"M 130.7696,17.6501\n    A8,8,0,0,0,119.4581,14.3061\n    A100,100,0,0,0,76.6001,132.9947\n    A8,8,0,0,0,87.4383,137.649\n  L132.48,117.3553\n      A8,8,0,0,0,136.9716,108.1896\n      A35,35,0,0,1,150.0542,71.9594\n      A8,8,0,0,0,152.4547,62.0386Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="171" cy="100" fill="var(--color-orange-500)" name="sales" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_r_" d={"M 88.8032,140.5423\n    A8,8,0,0,0,85.5022,151.8663\n    A100,100,0,0,0,166.2007,199.8848\n    A8,8,0,0,0,174.5786,191.5816\n  L172.6496,142.217\n      A8,8,0,0,0,165.8361,134.617\n      A35,35,0,0,1,143.039,121.0519\n      A8,8,0,0,0,133.1091,118.6891Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="171" cy="100" fill="var(--color-indigo-500)" name="imported" tabIndex="-1" data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_r_" d={"M 177.7725,191.4009\n    A8,8,0,0,0,187.0333,198.7063\n    A100,100,0,0,0,251.6521,159.1206\n    A8,8,0,0,0,249.3506,147.552\n  L207.1178,121.9204\n      A8,8,0,0,0,197.0198,123.4088\n      A35,35,0,0,1,180.035,133.8137\n      A8,8,0,0,0,174.122,142.1338Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="171" cy="100" fill="var(--color-slate-500)" name="dormant" tabIndex="-1" data-recharts-item-index="4" data-recharts-item-id="recharts-pie-_r_r_" d={"M 250.9624,144.7886\n    A8,8,0,0,0,262.165,141.0966\n    A100,100,0,0,0,270.2571,112.1671\n    A8,8,0,0,0,262.5957,103.1986\n  L213.2235,101.4745\n      A8,8,0,0,0,205.1407,107.7078\n      A35,35,0,0,1,204.1851,111.1242\n      A8,8,0,0,0,207.8608,120.6465Z"}></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <g className="recharts-label-list recharts-layer">
                                <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="207.74491099339798" y="43.3779061135385" textAnchor="middle" fill="white">
                                  <tspan x="207.74491099339798" dy="0.355em">
                                    {"318"}
                                  </tspan>
                                </text>
                                <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="107.51232921181938" y="77.07478118116218" textAnchor="middle" fill="white">
                                  <tspan x="107.51232921181938" dy="0.355em">
                                    {"246"}
                                  </tspan>
                                </text>
                                <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="136.48356733413578" y="158.00746396820725" textAnchor="middle" fill="white">
                                  <tspan x="136.48356733413578" dy="0.355em">
                                    {"184"}
                                  </tspan>
                                </text>
                                <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="206.26041920803334" y="157.5582560305101" textAnchor="middle" fill="white">
                                  <tspan x="206.26041920803334" dy="0.355em">
                                    {"152"}
                                  </tspan>
                                </text>
                                <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="236.00489646329808" y="118.1827785499328" textAnchor="middle" fill="white">
                                  <tspan x="236.00489646329808" dy="0.355em">
                                    {"76"}
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  </ChartContainer>
                  <div className="flex gap-2 items-center px-2 text-muted-foreground text-xs">
                    <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    <span>
                      {"Mix reflects retained workspaces in the active cohort."}
                    </span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
          </div>
        </div>
        <Frame className="w-full" spacing="sm">
          <header className="flex flex-col gap-3 items-start px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="font-semibold text-sm">
                {"Stage Breakdown"}
              </div>
              <div className="text-muted-foreground text-pretty text-xs">
                {"Segment cohorts by invite, report, and retained usage."}
              </div>
            </div>
            <div className="flex gap-2 items-center shrink-0 sm:w-auto w-full">
              <Select>
              <SelectTrigger className="flex-1 min-w-0 sm:flex-none sm:min-w-[170px]" type="button" tabIndex="0" id="base-ui-_r_g_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"All Segments"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_g_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                {"Export"}
              </Button>
            </div>
          </header>
          <FramePanel className="p-0! shadow-none!">
            <div className="relative">
              <DataGridProvider>
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_j_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridProvider>
                    <DataGridTableViewport style={{width: "calc(1190px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                      <DataGridProvider>
                      <DataGridTable style={{"--header-segment-size": "370", "--col-segment-size": "370", "--header-owner-size": "160", "--col-owner-size": "160", "--header-inviteSent-size": "130", "--col-inviteSent-size": "130", "--header-savedReport-size": "150", "--col-savedReport-size": "150", "--header-weekFourRetained-size": "140", "--col-weekFourRetained-size": "140", "--header-risk-size": "120", "--col-risk-size": "120", "--header-updatedAt-size": "120", "--col-updatedAt-size": "120", width: "calc(1190px + var(--data-grid-fill-size, 0px))"}}>
                        <colgroup>
                          <col style={{width: "calc(var(--col-segment-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-inviteSent-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-savedReport-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-risk-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-updatedAt-size) * 1px)"}} />
                          <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible ps-5 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="segment" data-header-id="segment" data-header-depth="0" style={{width: "calc(var(--header-segment-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Segment"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden lg:table-cell overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Owner"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="inviteSent" data-header-id="inviteSent" data-header-depth="0" style={{width: "calc(var(--header-inviteSent-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Invites"}
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden md:table-cell overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="savedReport" data-header-id="savedReport" data-header-depth="0" style={{width: "calc(var(--header-savedReport-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Saved Reports"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden overflow-visible px-2 relative rtl:text-right text-foreground text-left xl:table-cell" scope="col" aria-sort="none" data-col-id="weekFourRetained" data-header-id="weekFourRetained" data-header-depth="0" style={{width: "calc(var(--header-weekFourRetained-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"W4 Retained"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden md:table-cell overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="risk" data-header-id="risk" data-header-depth="0" style={{width: "calc(var(--header-risk-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Risk"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden lg:table-cell overflow-visible pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="updatedAt" data-header-id="updatedAt" data-header-depth="0" style={{width: "calc(var(--header-updatedAt-size) * 1px)"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Updated"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                              <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          </tr>
                        </thead>
                        <DataGridProvider>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="0">
                            <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Trial workspaces over 20 seats"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"SEG-307 - May activation cohort"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Mira Stone"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"1,046"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"73%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"721"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"50%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"418"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"29%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Healthy"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                              <span className="text-muted-foreground text-sm">
                                {"8 min ago"}
                              </span>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                            <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Invite driven teams"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"COH-071 - Q3 onboarding accounts"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Leo Grant"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"902"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"76%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"534"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"45%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"286"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"24%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Watch"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                              <span className="text-muted-foreground text-sm">
                                {"18 min ago"}
                              </span>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                            <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Expansion accounts with automation"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"MET-609 - Automation trial cohort"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Nora Vale"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"688"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"71%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"462"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"48%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"301"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"31%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Healthy"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                              <span className="text-muted-foreground text-sm">
                                {"24 min ago"}
                              </span>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="4">
                            <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Template gallery default"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"EXP-224 - Invite copy refresh"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Theo Park"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"548"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"74%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"388"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"53%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"214"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"29%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Watch"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                              <span className="text-muted-foreground text-sm">
                                {"1 hr ago"}
                              </span>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                            <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Dormant admins"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"EVT-1842 - Checklist nudge exposure"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="text-muted-foreground text-sm truncate">
                                  {"Sana Qureshi"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"486"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"58%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"248"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"29%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"118"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"14%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Drop Off"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                              <span className="text-muted-foreground text-sm">
                                {"42 min ago"}
                              </span>
                            </td>
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
              </DataGridScrollArea>
              </DataGridProvider>
            </div>
          </FramePanel>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"5"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 5 of 6"}
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
          </footer>
        </Frame>
      </div>
    </div>
  )
}
