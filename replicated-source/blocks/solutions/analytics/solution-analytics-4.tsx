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
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="@container bg-muted/35 lg:px-8 min-h-svh px-4 py-6 sm:px-6 w-full">
      <div className="flex flex-col gap-4 max-w-[72rem] mx-auto w-full">
        <Frame className="min-w-0 w-full">
          <FramePanel className="min-w-0 p-0!">
            <header className="bg-background border-b-0 border-border flex gap-3 h-12 items-center justify-between min-w-0 px-4 shrink-0 w-full">
              <div className="flex gap-2 items-center min-w-0 shrink-0">
                <Item className="[&_svg]:size-4 bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </Item>
                <div className="flex-col hidden min-w-0 sm:flex">
                  <span className="font-semibold text-sm truncate">
                    Cohort Retention
                  </span>
                  <span className="text-muted-foreground text-xs truncate">
                    Aster Insights
                  </span>
                </div>
              </div>
              <nav className="flex flex-1 items-center justify-center min-w-0 overflow-hidden" aria-label="Report navigation">
                <div className="flex gap-1 items-center min-w-0">
                  <Button type="button" tabIndex="0" extracted="1">
                    Overview
                  </Button>
                  <Button type="button" tabIndex="0">
                    Cohorts
                  </Button>
                  <Button type="button" tabIndex="0">
                    Signals
                  </Button>
                </div>
              </nav>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-download size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  <span className="hidden sm:block">
                    Export
                  </span>
                </Button>
                <Button type="button" tabIndex="0" aria-label="Open retention alerts">
                  <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                </Button>
                <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <Avatar className="rounded-md size-6" size="default">
                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
            </header>
          </FramePanel>
        </Frame>
        <div className="gap-4 grid lg:grid-cols-[minmax(0,1.5fr)_minmax(22rem,0.75fr)] min-w-0">
          <Frame className="h-full max-w-full min-w-0 w-full">
            <FramePanel className="flex flex-col h-full max-w-full min-w-0 p-5!">
              <div className="flex gap-3 items-center justify-between mb-5">
                <h3 className="font-semibold text-base">
                  Retention Overview
                </h3>
                <Tabs className="ml-auto shrink-0 w-auto" data-orientation="horizontal" activationDirection="none">
                  <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                    <TabsTrigger className="px-3.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_0_">
                      4W
                    </TabsTrigger>
                    <TabsTrigger className="px-3.5" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                      8W
                    </TabsTrigger>
                    <TabsTrigger className="px-3.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                      12W
                    </TabsTrigger>
                    <TabsTrigger className="px-3.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                      16W
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex flex-1 flex-col px-0">
                <div className="flex flex-wrap gap-10 items-center mb-10 py-6">
                  <div className="flex gap-3 items-center">
                    <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </Item>
                    <div className="space-y-px">
                      <div className="text-muted-foreground text-sm">
                        Week 4
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-base">
                          51%
                        </span>
                        <span className="font-medium text-emerald-600 text-sm">
                          +8 pts
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                      <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                    </Item>
                    <div className="space-y-px">
                      <div className="text-muted-foreground text-sm">
                        Events
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-base">
                          455k
                        </span>
                        <span className="font-medium text-emerald-600 text-sm">
                          +12k
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                      <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </Item>
                    <div className="space-y-px">
                      <div className="text-muted-foreground text-sm">
                        Weak
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-base">
                          1
                        </span>
                        <span className="font-medium text-destructive text-sm">
                          -7.6 pts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto w-full">
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[250px] justify-center text-xs w-full" data-chart="chart-_r_4_">
                    <style>{`
 [data-chart=chart-_r_4_] {
  --color-current: var(--color-slate-600);
  --color-previous: var(--color-zinc-400);
}


.dark [data-chart=chart-_r_4_] {
  --color-current: var(--color-slate-600);
  --color-previous: var(--color-zinc-400);
}
`}</style>
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="707" height="250" style={{position: "relative", cursor: "default", width: "707px", height: "250px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="707" height="250" viewBox="0 0 707 250" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="5" y="5" height="210" width="697"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <lineargradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-slate-600)" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="var(--color-slate-600)" stopOpacity="0.05"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#areaGradient)" fillOpacity="0.6" height="210" stroke="none" width="697" id="recharts-area-_r_21_" d="M5,5C63.083,22.15,121.167,39.3,179.25,51.2C237.333,63.1,295.417,69.05,353.5,76.4C411.583,83.75,469.667,90.05,527.75,95.3C585.833,100.55,643.917,104.225,702,107.9L702,215C643.917,215,585.833,215,527.75,215C469.667,215,411.583,215,353.5,215C295.417,215,237.333,215,179.25,215C121.167,215,63.083,215,5,215Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="210" stroke="var(--color-slate-600)" width="697" d="M5,5C63.083,22.15,121.167,39.3,179.25,51.2C237.333,63.1,295.417,69.05,353.5,76.4C411.583,83.75,469.667,90.05,527.75,95.3C585.833,100.55,643.917,104.225,702,107.9"></path>
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
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1">
                              <g className="recharts-area-dots recharts-layer">
                                <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-slate-600)" fillOpacity="0.6" height="210" stroke="white" width="697" cx="5" cy="5"></circle>
                                <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-slate-600)" fillOpacity="0.6" height="210" stroke="white" width="697" cx="179.25" cy="51.199999999999996"></circle>
                                <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-slate-600)" fillOpacity="0.6" height="210" stroke="white" width="697" cx="353.5" cy="76.39999999999999"></circle>
                                <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-slate-600)" fillOpacity="0.6" height="210" stroke="white" width="697" cx="527.75" cy="95.30000000000001"></circle>
                                <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-slate-600)" fillOpacity="0.6" height="210" stroke="white" width="697" cx="702" cy="107.89999999999999"></circle>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="697" stroke="none" fontSize="12" x="179.25" y="229" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="179.25" dy="0.71em">
                                      W1
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="697" stroke="none" fontSize="12" x="353.5" y="229" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="353.5" dy="0.71em">
                                      W2
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="697" stroke="none" fontSize="12" x="527.75" y="229" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="527.75" dy="0.71em">
                                      W3
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="697" stroke="none" fontSize="12" x="697.4140625" y="229" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="697.4140625" dy="0.71em">
                                      W4
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
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame className="h-full w-full">
            <FramePanel className="flex flex-col h-full">
              <div className="flex gap-3 items-start justify-between mb-6">
                <div className="flex flex-col gap-px">
                  <h3 className="font-semibold text-base">
                    Cohort Health
                  </h3>
                  <span className="font-normal text-muted-foreground text-xs">
                    MET-609 · Jun 12
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Select>
                  <SelectTrigger className="h-8! w-28" type="button" tabIndex="0" id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      8W
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="8W" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open cohort health actions" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex flex-1 flex-col space-y-5">
                <div className="gap-2 grid grid-cols-3">
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      51%
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      Week 4
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      +8%
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      455k
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      Events
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      +12%
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      1
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      Weak
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-destructive text-xs">
                      <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                      -7%
                    </span>
                  </div>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-medium text-foreground text-sm">
                      Target Progress
                    </span>
                    <span className="font-semibold text-foreground text-xs">
                      84%
                    </span>
                  </div>
                  <Progress className="**:data-[slot=progress-track]:h-2.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="84" aria-valuetext="84%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "84%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div>
                  <div className="font-medium mb-2.5 text-foreground text-sm">
                    Cohort Notes
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm">
                      <button className="flex gap-2.5 items-center justify-between text-left w-full" type="button" aria-pressed="true">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-circle-check text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            Invite Driven Teams
                          </span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          51%
                        </Badge>
                      </button>
                    </li>
                    <li className="text-sm">
                      <button className="flex gap-2.5 items-center justify-between text-left w-full" type="button" aria-pressed="false">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-circle-check text-warning w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            Trial Workspaces
                          </span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          41%
                        </Badge>
                      </button>
                    </li>
                    <li className="text-sm">
                      <button className="flex gap-2.5 items-center justify-between text-left w-full" type="button" aria-pressed="false">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-circle-check text-destructive w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            Dormant Admins
                          </span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          0
                        </Badge>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </FramePanel>
            <footer className="flex flex-row gap-2.5 items-center p-2! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <Button className="flex-1" type="button" tabIndex="0">
                Open Notes
              </Button>
              <Button className="flex-1" type="button" tabIndex="0">
                Export CSV
              </Button>
            </footer>
          </Frame>
        </div>
        <Frame className="w-full" spacing="sm">
          <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-px">
              <div className="font-semibold text-balance text-sm">
                Cohort Table
              </div>
              <div className="text-muted-foreground text-xs">
                <span className="flex-wrap gap-1.5 inline-flex items-center">
                  <span>
                    2 stable
                  </span>
                  <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    1 weak
                  </span>
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-columns-3 lucide-columns3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
                Columns
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Export
              </Button>
            </div>
          </header>
          <FramePanel className="bg-card p-0! shadow-none!">
            <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
              <Tabs data-orientation="horizontal" activationDirection="none">
                <TabsList className="gap-5" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                  <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_e_" compositeItemActive="">
                    <span>
                      All
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      4
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_f_">
                    <span>
                      Stable
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      2
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_g_">
                    <span>
                      Watch
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      1
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_h_">
                    <span>
                      Weak
                    </span>
                    <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                      1
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="relative">
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_i_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridTableViewport style={{width: "calc(1150px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                      <DataGridTable style={{"--header-cohort-size": "356", "--col-cohort-size": "356", "--header-signals-size": "170", "--col-signals-size": "170", "--header-event-size": "190", "--col-event-size": "190", "--header-owner-size": "110", "--col-owner-size": "110", "--header-weekFour-size": "118", "--col-weekFour-size": "118", "--header-delta-size": "96", "--col-delta-size": "96", "--header-status-size": "110", "--col-status-size": "110", width: "calc(1150px + var(--data-grid-fill-size, 0px))"}}>
                        <colgroup>
                          <col style={{width: "calc(var(--col-cohort-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-signals-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-event-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-weekFour-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-delta-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                          <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible ps-(--frame-panel-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="cohort" data-header-id="cohort" data-header-depth="0" style={{width: "calc(var(--header-cohort-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                  Cohort
                                  <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="signals" data-header-id="signals" data-header-depth="0" style={{width: "calc(var(--header-signals-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                                  Signals
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="event" data-header-id="event" data-header-depth="0" style={{width: "calc(var(--header-event-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                  Event
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
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
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
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="weekFour" data-header-id="weekFour" data-header-depth="0" style={{width: "calc(var(--header-weekFour-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                  Week 4
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="delta" data-header-id="delta" data-header-depth="0" style={{width: "calc(var(--header-delta-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                  Delta
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible pe-(--frame-panel-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                  Status
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="COH-071">
                            <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-cohort-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                  Invite Driven Teams
                                </span>
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                  <span>
                                    COH-071
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Expansion accounts with automation
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-signals-size) * 1px)"}}>
                              <div className="flex flex-wrap gap-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  MET-609
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  EVT-1842
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-event-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  invite_sent
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  184k events
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <Tooltip>
                              <TooltipTrigger className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background -space-x-1 cn-avatar-group flex group/avatar-group" aria-label="Owners for Invite Driven Teams" id="base-ui-_r_1n_" baseUiTooltipTrigger="">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarFallback className="text-[9px]">
                                    IV
                                  </AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-weekFour-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="27.708847204661975" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  51%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-emerald-600 text-sm">
                                +8.2
                              </span>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Stable
                              </Badge>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="COH-103">
                            <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-cohort-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                  May Activation Cohort
                                </span>
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                  <span>
                                    COH-103
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Customer success teams
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-signals-size) * 1px)"}}>
                              <div className="flex flex-wrap gap-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  MET-609
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  EVT-1842
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-event-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  report_viewed
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  128k events
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <Tooltip>
                              <TooltipTrigger className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background -space-x-1 cn-avatar-group flex group/avatar-group" aria-label="Owners for May Activation Cohort" id="base-ui-_r_1p_" baseUiTooltipTrigger="">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-weekFour-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="30.536280592892787" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  46%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-emerald-600 text-sm">
                                +6.4
                              </span>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Stable
                              </Badge>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="COH-117">
                            <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-cohort-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                  Q3 Onboarding Accounts
                                </span>
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                  <span>
                                    COH-117
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Automation adopters
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-signals-size) * 1px)"}}>
                              <div className="flex flex-wrap gap-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  MET-609
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  EVT-1842
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-event-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  dashboard_exported
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  52k events
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <Tooltip>
                              <TooltipTrigger className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background -space-x-1 cn-avatar-group flex group/avatar-group" aria-label="Owners for Q3 Onboarding Accounts" id="base-ui-_r_1r_" baseUiTooltipTrigger="">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarFallback className="text-[9px]">
                                    IV
                                  </AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-weekFour-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="38.45309407993906" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  32%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-rose-600 text-sm">
                                -7.6
                              </span>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Weak
                              </Badge>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="COH-084">
                            <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-cohort-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                  Trial Workspaces Over 20 Seats
                                </span>
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                  <span>
                                    COH-084
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Trial workspaces over 20 seats
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-signals-size) * 1px)"}}>
                              <div className="flex flex-wrap gap-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  MET-609
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  EVT-1842
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-event-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  template_applied
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  91k events
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <Tooltip>
                              <TooltipTrigger className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background -space-x-1 cn-avatar-group flex group/avatar-group" aria-label="Owners for Trial Workspaces Over 20 Seats" id="base-ui-_r_1t_" baseUiTooltipTrigger="">
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-5" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-weekFour-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="33.3637139811236" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  41%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                              <span className="font-medium tabular-nums text-rose-600 text-sm">
                                -2.1
                              </span>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Watch
                              </Badge>
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
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_1u_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      5
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_1u_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    1 - 4 of 4
                  </div>
                </div>
              </DataGridPagination>
            </footer>
          </FramePanel>
        </Frame>
      </div>
    </main>
  )
}
