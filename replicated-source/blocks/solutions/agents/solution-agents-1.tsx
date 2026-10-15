import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
        <div className="@container w-full">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex gap-2.5 items-center">
                <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                  {"Agent Operations"}
                </h2>
                <span className="flex gap-1.5 items-center">
                  <span className="flex relative shrink-0 size-2" aria-hidden="true">
                    <span className="absolute animate-ping bg-emerald-500/60 inline-flex rounded-full size-full"></span>
                    <span className="bg-emerald-500 inline-flex relative rounded-full size-2"></span>
                  </span>
                  <span className="hidden sm:block text-muted-foreground text-sm">
                    {"Live"}
                  </span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Live run health, approvals, and incidents"}
              </p>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Select>
              <SelectTrigger className="w-[160px]" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" extracted="1">
                <svg className="lucide lucide-calendar-days size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
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
                <SelectValue>
                  {"Last 24 Hours"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="24h" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="hidden sm:block">
                  {"New Agent"}
                </span>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More options" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
          <div className="@4xl:grid-cols-3 gap-4 grid grid-cols-1 mt-4">
            <Frame className="@4xl:col-span-3 @container w-full">
              <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-1 grid">
                <FramePanel>
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-indigo-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                    {"Autonomous Runs"}
                  </a>
                  <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                    {"1,284 runs, 96% clean"}
                  </p>
                </FramePanel>
                <FramePanel>
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-amber-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-user-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCheckIcon" tabler="IconUserCheck" hugeicons="UserCheck01Icon" phosphor="UserCheckIcon" remixicon="RiUserFollowLine" aria-hidden="true">
                        <path d="m16 11 2 2 4-4"></path>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                    {"Approval Backlog"}
                  </a>
                  <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                    {"12 pending, oldest 38m"}
                  </p>
                </FramePanel>
                <FramePanel>
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-emerald-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                    {"Tool Reliability"}
                  </a>
                  <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                    {"96.2% of calls succeeded"}
                  </p>
                </FramePanel>
                <FramePanel>
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-rose-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                    {"Open Incidents"}
                  </a>
                  <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                    {"1 active, 2 resolved today"}
                  </p>
                </FramePanel>
              </div>
            </Frame>
            <Frame className="@4xl:col-span-2 h-full w-full" spacing="sm">
              <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="font-semibold text-sm">
                  {"Run Throughput"}
                </div>
                <Select>
                <SelectTrigger className="min-w-[140px]" type="button" tabIndex="0" id="base-ui-_r_8_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                  <SelectValue>
                    {"Last 24 hours"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_8_-hidden-input" tabIndex="-1" aria-hidden="true" value="24H" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </header>
              <FramePanel className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-muted-foreground text-xs">
                    {"Total (Last 24 hours)"}
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <span className="font-semibold leading-none tabular-nums text-2xl">
                      {"1,263"}
                    </span>
                    <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      {"+12.4%"}
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[240px] justify-center text-xs w-full" data-chart="chart-_r_b_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_b_] {\n  --color-runs: var(--color-violet-500);\n}\n\n\n.dark [data-chart=chart-_r_b_] {\n  --color-runs: var(--color-violet-500);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="793" height="240" style={{position: "relative", cursor: "default", width: "793px", height: "240px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="793" height="240" viewBox="0 0 793 240" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                              <g className="recharts-cartesian-grid">
                                <g className="recharts-cartesian-grid-horizontal">
                                  <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="773" height="190" x1="10" y1="200" x2="783" y2="200"></line>
                                  <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="773" height="190" x1="10" y1="152.5" x2="783" y2="152.5"></line>
                                  <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="773" height="190" x1="10" y1="105" x2="783" y2="105"></line>
                                  <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="773" height="190" x1="10" y1="57.5" x2="783" y2="57.5"></line>
                                  <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="773" height="190" x1="10" y1="10" x2="783" y2="10"></line>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="10" y="10" height="190" width="773"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <lineargradient id="throughputGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity="0.15"></stop>
                                <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity="0"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#throughputGradient)" fillOpacity="0.6" height="190" stroke="none" width="773" id="recharts-area-_r_1e_" d="M10,115.688L164.6,143L319.2,64.625L473.8,14.75L628.4,29.594L783,82.438L783,200L628.4,200L473.8,200L319.2,200L164.6,200L10,200Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="190" stroke="transparent" width="773" d="M10,115.688L164.6,143L319.2,64.625L473.8,14.75L628.4,29.594L783,82.438"></path>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1">
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-violet-500)" strokeWidth="3" fill="none" id="recharts-line-_r_1f_" height="190" width="773" strokeDasharray="811.4642944335938px 811.4642944335938px" d="M10,115.688L164.6,143L319.2,64.625L473.8,14.75L628.4,29.594L783,82.438"></path>
                                </g>
                              </g>
                            </g>
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
                            <g className="recharts-zIndex-layer_600" tabIndex="-1">
                              <g className="recharts-layer recharts-line-dots">
                                <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-violet-500)" strokeWidth="2" fill="var(--background)" height="190" width="773" cx="10" cy="115.6875"></circle>
                                <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-violet-500)" strokeWidth="2" fill="var(--background)" height="190" width="773" cx="164.6" cy="143"></circle>
                                <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-violet-500)" strokeWidth="2" fill="var(--background)" height="190" width="773" cx="319.2" cy="64.625"></circle>
                                <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-violet-500)" strokeWidth="2" fill="var(--background)" height="190" width="773" cx="473.79999999999995" cy="14.750000000000004"></circle>
                                <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-violet-500)" strokeWidth="2" fill="var(--background)" height="190" width="773" cx="628.4" cy="29.593750000000004"></circle>
                                <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-violet-500)" strokeWidth="2" fill="var(--background)" height="190" width="773" cx="783" cy="82.4375"></circle>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="773" stroke="none" fontSize="12" x="164.6" y="216" textAnchor="middle" fill="#666">
                                    <tspan x="164.6" dy="0.71em">
                                      {"04:00"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="773" stroke="none" fontSize="12" x="319.2" y="216" textAnchor="middle" fill="#666">
                                    <tspan x="319.2" dy="0.71em">
                                      {"08:00"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="773" stroke="none" fontSize="12" x="473.79999999999995" y="216" textAnchor="middle" fill="#666">
                                    <tspan x="473.79999999999995" dy="0.71em">
                                      {"12:00"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="773" stroke="none" fontSize="12" x="628.4" y="216" textAnchor="middle" fill="#666">
                                    <tspan x="628.4" dy="0.71em">
                                      {"16:00"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="773" stroke="none" fontSize="12" x="776.25" y="216" textAnchor="middle" fill="#666">
                                    <tspan x="776.25" dy="0.71em">
                                      {"20:00"}
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
                </div>
              </FramePanel>
            </Frame>
            <Frame className="@4xl:col-span-1 h-full w-full" spacing="sm">
              <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="font-semibold text-sm">
                  {"Incident Activity"}
                </div>
              </header>
              <FramePanel className="flex flex-col">
                <Timeline data-orientation="vertical">
                  <TimelineItem className="ms-8 pb-8" completed="true">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center">
                        <TimelineTitle className="font-semibold">
                          {"Payment Tool Timeout"}
                        </TimelineTitle>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                          {"Critical"}
                        </Badge>
                      </div>
                      <TimelineIndicator className="bg-muted border-none flex items-center justify-center ring-2 ring-primary/20 size-6 text-muted-foreground" aria-hidden="true">
                        <Spinner className="lucide lucide-loader-circle size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="status" aria-label="Loading">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                        </Spinner>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-1.5">
                      <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                        <span className="[&_svg]:size-3.5 [&_svg]:text-muted-foreground">
                          <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </span>
                        <span className="font-medium">
                          {"Refund Resolver / 09:12"}
                        </span>
                      </div>
                      <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                        {"The billing API exceeded its 8s budget on 6 consecutive calls, holding 4 runs at the charge step."}
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem className="ms-8 pb-8">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center">
                        <TimelineTitle className="font-semibold">
                          {"Retry Storm Contained"}
                        </TimelineTitle>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                          {"Major"}
                        </Badge>
                      </div>
                      <TimelineIndicator className="bg-primary border-none flex items-center justify-center size-6 text-primary-foreground" aria-hidden="true">
                        <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-1.5">
                      <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                        <span className="[&_svg]:size-3.5 [&_svg]:text-muted-foreground">
                          <svg className="lucide lucide-rotate-ccw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <path d="M3 3v5h5"></path>
                          </svg>
                        </span>
                        <span className="font-medium">
                          {"Invoice Reconciler / 08:47"}
                        </span>
                      </div>
                      <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                        {"Backoff was applied after a vendor 503 spike, capping retries and clearing the queued run backlog."}
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem className="ms-8 pb-0">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center">
                        <TimelineTitle className="font-semibold">
                          {"Vector Store Degraded"}
                        </TimelineTitle>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                          {"Minor"}
                        </Badge>
                      </div>
                      <TimelineIndicator className="bg-primary border-none flex items-center justify-center size-6 text-primary-foreground" aria-hidden="true">
                        <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-1.5">
                      <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                        <span className="[&_svg]:size-3.5 [&_svg]:text-muted-foreground">
                          <svg className="lucide lucide-database size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                        </span>
                        <span className="font-medium">
                          {"Lead Enricher / 08:05"}
                        </span>
                      </div>
                      <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
                        {"Read latency on the embeddings index rose to 1.9s, slowing enrichment lookups before it recovered."}
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </FramePanel>
            </Frame>
            <Frame className="@4xl:col-span-3 w-full" spacing="sm">
              <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-px">
                  <div className="font-semibold text-balance text-sm">
                    {"Run Queue"}
                  </div>
                  <div className="text-muted-foreground text-pretty text-xs">
                    {"8 runs in view"}
                  </div>
                </div>
                <div className="flex gap-2 items-center shrink-0">
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                    <span className="hidden sm:inline">
                      {"Refresh"}
                    </span>
                  </Button>
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                      <path d="M12 15V3"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10 5 5 5-5"></path>
                    </svg>
                    {"Export"}
                  </Button>
                </div>
              </header>
              <FramePanel className="p-0 shadow-none!">
                <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
                  <InputGroup className="min-w-52 sm:w-[260px]" role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_d_" placeholder="Search agent or run" aria-label="Search runs" value="" />
                  </InputGroup>
                  <Select>
                  <SelectTrigger className="w-[160px]" type="button" tabIndex="0" id="base-ui-_r_e_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"All Statuses"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_e_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="relative">
                  <DataGridProvider>
                  <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_h_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                      <div role="presentation" style={{minWidth: "fit-content"}}>
                        <DataGridProvider>
                        <DataGridTableViewport>
                          <DataGridProvider>
                          <DataGridTable>
                            <colgroup>
                              <col style={{width: "220px"}} />
                              <col style={{width: "132px"}} />
                              <col style={{width: "140px"}} />
                              <col style={{width: "118px"}} />
                              <col style={{width: "124px"}} />
                              <col style={{width: "56px"}} />
                            </colgroup>
                            <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                              <tr className="[&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="agent" data-header-id="agent" data-header-depth="0" style={{width: "220px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                    {"Agent / Run"}
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "132px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                    {"Status"}
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="environment" data-header-id="environment" data-header-depth="0" style={{width: "140px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                    {"Environment"}
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="latency" data-header-id="latency" data-header-depth="0" style={{width: "118px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      {"Latency"}
                                      <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="started" data-header-id="started" data-header-depth="0" style={{width: "124px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                    {"Started"}
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}></th>
                              </tr>
                            </thead>
                            <DataGridProvider>
                            <DataGridTableBody>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-8">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Fraud Screener"}
                                    </span>
                                    <span className="font-mono text-muted-foreground text-xs">
                                      {"RUN-4798"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    {"Failed"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-foreground text-sm">
                                    {"Production"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"6.92s"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-muted-foreground text-sm">
                                    {"41 min ago"}
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Fraud Screener" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-3">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Lead Enricher"}
                                    </span>
                                    <span className="font-mono text-muted-foreground text-xs">
                                      {"RUN-4817"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    {"Failed"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-foreground text-sm">
                                    {"Staging"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"5.46s"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-muted-foreground text-sm">
                                    {"11 min ago"}
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Lead Enricher" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-2">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Invoice Reconciler"}
                                    </span>
                                    <span className="font-mono text-muted-foreground text-xs">
                                      {"RUN-4820"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    {"Waiting"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-foreground text-sm">
                                    {"Production"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"3.12s"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-muted-foreground text-sm">
                                    {"6 min ago"}
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Invoice Reconciler" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-7">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Onboarding Guide"}
                                    </span>
                                    <span className="font-mono text-muted-foreground text-xs">
                                      {"RUN-4804"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    {"Running"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-foreground text-sm">
                                    {"Production"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"2.68s"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-muted-foreground text-sm">
                                    {"33 min ago"}
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Onboarding Guide" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-4">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Contract Summarizer"}
                                    </span>
                                    <span className="font-mono text-muted-foreground text-xs">
                                      {"RUN-4815"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    {"Completed"}
                                  </Badge>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-foreground text-sm">
                                    {"Production"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="font-medium tabular-nums text-foreground text-sm">
                                    {"2.21s"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="text-muted-foreground text-sm">
                                    {"18 min ago"}
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Contract Summarizer" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
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
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <DataGridProvider>
                  <DataGridPagination>
                    <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                      <div className="text-muted-foreground text-sm">
                        {"Rows per page"}
                      </div>
                      <Select>
                      <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_1b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                        <SelectValue>
                          {"5"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_1b_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                      <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                        {"1 - 5 of 8"}
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
              </FramePanel>
            </Frame>
          </div>
        </div>
      </div>
    </div>
  )
}
