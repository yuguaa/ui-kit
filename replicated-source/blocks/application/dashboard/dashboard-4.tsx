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
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background lg:p-6 min-h-svh p-3 sm:p-4 w-full">
      <div className="@container flex flex-col gap-3 max-w-6xl mx-auto text-foreground w-full">
        <header className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-end">
            <h1 className="font-semibold text-2xl tracking-tight">
              Overview
            </h1>
            <span className="font-medium gap-1.5 inline-flex items-center pb-1 text-muted-foreground text-xs">
              <svg className="dark:text-blue-400 lucide lucide-headphones size-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
              </svg>
              Active Calls
              <span className="tabular-nums text-foreground">
                294
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2.5 items-center">
              <Select>
              <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Date range">
                <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <SelectValue>
                  Last 7 days
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="7d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Select>
              <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Aggregation interval">
                <SelectValue>
                  Daily
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="daily" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Select>
              <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Agent scope">
                <SelectValue>
                  All agents
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add Filter
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <div className="flex flex-wrap gap-2.5 items-center sm:justify-end sm:w-auto w-full">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Configure
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <Frame className="overflow-hidden w-full">
          <header className="flex flex-col gap-(--frame-panel-header-gap) p-0! px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="grid lg:grid-cols-6 sm:grid-cols-3">
              <button className="bg-muted/60 border-b flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 gap-1 group hover:bg-muted/40 hover:text-foreground items-start justify-center lg:border-e min-h-18 min-w-0 outline-none px-4 py-3 relative sm:border-b-0 sm:border-e text-foreground text-start transition-colors" type="button" aria-pressed="true">
                <span className="text-foreground text-xs transition-colors">
                  Calls
                </span>
                <span className="font-semibold tabular-nums text-sm transition-colors">
                  482,032
                </span>
                <span className="absolute bg-foreground bottom-0 h-0.5 inset-x-4" aria-hidden="true"></span>
              </button>
              <button className="border-b flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 gap-1 group hover:bg-muted/40 hover:text-foreground items-start justify-center lg:border-e min-h-18 min-w-0 outline-none px-4 py-3 relative sm:border-b-0 sm:border-e text-foreground text-start transition-colors" type="button" aria-pressed="false">
                <span className="group-hover:text-foreground text-muted-foreground text-xs transition-colors">
                  Avg. duration
                </span>
                <span className="font-semibold tabular-nums text-sm transition-colors">
                  2:55
                </span>
              </button>
              <button className="border-b flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 gap-1 group hover:bg-muted/40 hover:text-foreground items-start justify-center lg:border-e min-h-18 min-w-0 outline-none px-4 py-3 relative sm:border-b-0 text-foreground text-start transition-colors" type="button" aria-pressed="false">
                <span className="group-hover:text-foreground text-muted-foreground text-xs transition-colors">
                  Total cost
                </span>
                <span className="font-semibold tabular-nums text-sm transition-colors">
                  207,732
                  <span className="font-normal ms-1 text-muted-foreground text-xs transition-colors">
                    credits
                  </span>
                </span>
              </button>
              <button className="border-b flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 gap-1 group hover:bg-muted/40 hover:text-foreground items-start justify-center lg:border-e min-h-18 min-w-0 outline-none px-4 py-3 relative sm:border-b-0 sm:border-e text-foreground text-start transition-colors" type="button" aria-pressed="false">
                <span className="group-hover:text-foreground text-muted-foreground text-xs transition-colors">
                  Avg. cost per call
                </span>
                <span className="font-semibold tabular-nums text-sm transition-colors">
                  0.43
                  <span className="font-normal ms-1 text-muted-foreground text-xs transition-colors">
                    credits
                  </span>
                </span>
              </button>
              <button className="border-b flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 gap-1 group hover:bg-muted/40 hover:text-foreground items-start justify-center lg:border-e min-h-18 min-w-0 outline-none px-4 py-3 relative sm:border-b-0 sm:border-e text-foreground text-start transition-colors" type="button" aria-pressed="false">
                <span className="group-hover:text-foreground text-muted-foreground text-xs transition-colors">
                  Total LLM cost
                </span>
                <span className="font-semibold tabular-nums text-sm transition-colors">
                  $46,342
                </span>
              </button>
              <button className="border-b flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 gap-1 group hover:bg-muted/40 hover:text-foreground items-start justify-center min-h-18 min-w-0 outline-none px-4 py-3 relative sm:border-b-0 text-foreground text-start transition-colors" type="button" aria-pressed="false">
                <span className="group-hover:text-foreground text-muted-foreground text-xs transition-colors">
                  Avg. LLM cost
                </span>
                <span className="font-semibold tabular-nums text-sm transition-colors">
                  $0.096
                </span>
              </button>
            </div>
          </header>
          <FramePanel className="p-0!">
            <div className="pb-3 pt-6 px-4">
              <div className="flex flex-wrap gap-2 items-center justify-end mb-5 text-muted-foreground text-xs">
                <span>
                  Min
                  <span className="font-medium tabular-nums text-foreground">
                    43,457
                  </span>
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  Max
                  <span className="font-medium tabular-nums text-foreground">
                    81,036
                  </span>
                </span>
              </div>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[400px] justify-center text-xs w-full" data-chart="chart-_r_j_">
                <style>{`
 [data-chart=chart-_r_j_] {
  --color-calls: var(--color-blue-600);
  --color-avgDuration: var(--color-blue-600);
  --color-totalCost: var(--color-blue-600);
  --color-avgCost: var(--color-blue-600);
  --color-llmCost: var(--color-blue-600);
  --color-avgLlmCost: var(--color-blue-600);
}


.dark [data-chart=chart-_r_j_] {
  --color-calls: var(--color-blue-600);
  --color-avgDuration: var(--color-blue-600);
  --color-totalCost: var(--color-blue-600);
  --color-avgCost: var(--color-blue-600);
  --color-llmCost: var(--color-blue-600);
  --color-avgLlmCost: var(--color-blue-600);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="1110" height="400" style={{position: "relative", cursor: "default", width: "1110px", height: "400px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="1110" height="400" viewBox="0 0 1110 400" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="1102" height="350" x1="0" y1="370" x2="1102" y2="370"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="1102" height="350" x1="0" y1="270.2102237952048" x2="1102" y2="270.2102237952048"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="1102" height="350" x1="0" y1="170.42044759040954" x2="1102" y2="170.42044759040954"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="1102" height="350" x1="0" y1="70.63067138561435" x2="1102" y2="70.63067138561435"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="1102" height="350" x1="0" y1="20" x2="1102" y2="20"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="0" y="20" height="350" width="1102"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="dashboard-4-call-volume-stripe" patternUnits="userSpaceOnUse" width="6" height="6">
                            <rect width="6" height="6" fill="var(--color-calls)" opacity="0.04"></rect>
                            <path d="M0,6 L6,0" stroke="var(--color-calls)" strokeWidth="0.8" opacity="0.15"></path>
                          </pattern>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#dashboard-4-call-volume-stripe)" fillOpacity="0.6" height="350" stroke="none" width="1102" id="recharts-area-_r_p_" d="M0,70C61.222,73.447,122.444,76.893,183.667,81.496C244.889,86.098,306.111,91.856,367.333,96.052C428.556,100.247,489.778,102.88,551,132.122C612.222,161.365,673.444,217.217,734.667,264.384C795.889,311.55,857.111,350.031,918.333,320C979.556,289.969,1040.778,191.427,1102,92.885L1102,370C1040.778,370,979.556,370,918.333,370C857.111,370,795.889,370,734.667,370C673.444,370,612.222,370,551,370C489.778,370,428.556,370,367.333,370C306.111,370,244.889,370,183.667,370C122.444,370,61.222,370,0,370Z"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-calls)" strokeWidth="1" fill="none" id="recharts-line-_r_q_" height="350" width="1102" d="M0,70C61.222,73.447,122.444,76.893,183.667,81.496C244.889,86.098,306.111,91.856,367.333,96.052C428.556,100.247,489.778,102.88,551,132.122C612.222,161.365,673.444,217.217,734.667,264.384C795.889,311.55,857.111,350.031,918.333,320C979.556,289.969,1040.778,191.427,1102,92.885"></path>
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
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="1102" stroke="none" x="19.2109375" y="384" textAnchor="middle" fill="#666">
                                <tspan x="19.2109375" dy="0.71em">
                                  18 Aug
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="1102" stroke="none" x="183.66666666666666" y="384" textAnchor="middle" fill="#666">
                                <tspan x="183.66666666666666" dy="0.71em">
                                  19 Aug
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="1102" stroke="none" x="367.3333333333333" y="384" textAnchor="middle" fill="#666">
                                <tspan x="367.3333333333333" dy="0.71em">
                                  20 Aug
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="1102" stroke="none" x="551" y="384" textAnchor="middle" fill="#666">
                                <tspan x="551" dy="0.71em">
                                  21 Aug
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="1102" stroke="none" x="734.6666666666666" y="384" textAnchor="middle" fill="#666">
                                <tspan x="734.6666666666666" dy="0.71em">
                                  22 Aug
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="1102" stroke="none" x="918.3333333333333" y="384" textAnchor="middle" fill="#666">
                                <tspan x="918.3333333333333" dy="0.71em">
                                  23 Aug
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="1102" stroke="none" x="1089.5" y="384" textAnchor="middle" fill="#666">
                                <tspan x="1089.5" dy="0.71em">
                                  24 Aug
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
              <div className="flex justify-end mt-2">
                <Button type="button" tabIndex="0">
                  View more
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </FramePanel>
        </Frame>
        <section className="@4xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-1 grid">
          <Frame className="min-h-full overflow-hidden w-full">
            <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="min-w-0">
                <div className="flex gap-1.5 items-center">
                  <div className="font-semibold text-sm">
                    Most Called Agents
                  </div>
                  <svg className="lucide lucide-circle-question-mark size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                <div className="text-muted-foreground text-xs">
                  Call volume by agent
                </div>
              </div>
              <Select>
              <SelectTrigger className="min-w-28 shrink-0" type="button" tabIndex="0" id="base-ui-_r_k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Agent metric">
                <SelectValue>
                  Calls
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="calls" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </header>
            <FramePanel className="p-0!">
              <div className="px-4 py-4 space-y-3">
                <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                  <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                    <div className="absolute bg-blue-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "100%"}}></div>
                    <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                      <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="truncate">
                        Docs Support Agent
                      </span>
                    </span>
                  </div>
                  <span className="dark:text-blue-400 font-semibold justify-self-end tabular-nums text-blue-600 text-end text-xs">
                    190,241
                  </span>
                </div>
                <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                  <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                    <div className="absolute bg-violet-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "60.4081%"}}></div>
                    <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                      <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="truncate">
                        Website Agent
                      </span>
                    </span>
                  </div>
                  <span className="dark:text-violet-400 font-semibold justify-self-end tabular-nums text-end text-violet-600 text-xs">
                    114,921
                  </span>
                </div>
                <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                  <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                    <div className="absolute bg-amber-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "28.3367%"}}></div>
                    <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                      <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="truncate">
                        Billing Triage Agent
                      </span>
                    </span>
                  </div>
                  <span className="dark:text-amber-400 font-semibold justify-self-end tabular-nums text-amber-600 text-end text-xs">
                    53,908
                  </span>
                </div>
                <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                  <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                    <div className="absolute bg-emerald-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "18.2169%"}}></div>
                    <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                      <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="truncate">
                        Acme Co.
                      </span>
                    </span>
                  </div>
                  <span className="dark:text-emerald-400 font-semibold justify-self-end tabular-nums text-emerald-600 text-end text-xs">
                    34,656
                  </span>
                </div>
                <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                  <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                    <div className="absolute bg-rose-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "16.8334%"}}></div>
                    <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                      <span className="bg-rose-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="truncate">
                        Store Assistant
                      </span>
                    </span>
                  </div>
                  <span className="dark:text-rose-400 font-semibold justify-self-end tabular-nums text-end text-rose-600 text-xs">
                    32,024
                  </span>
                </div>
                <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                  <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                    <div className="absolute bg-cyan-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "15.5545%"}}></div>
                    <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                      <span className="bg-cyan-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="truncate">
                        Onboarding Coach v2.4 Advanced
                      </span>
                    </span>
                  </div>
                  <span className="dark:text-cyan-400 font-semibold justify-self-end tabular-nums text-cyan-600 text-end text-xs">
                    29,591
                  </span>
                </div>
                <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                  <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                    <div className="absolute bg-indigo-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "14.0301%"}}></div>
                    <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                      <span className="bg-indigo-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="truncate">
                        Returns Concierge Agent
                      </span>
                    </span>
                  </div>
                  <span className="dark:text-indigo-400 font-semibold justify-self-end tabular-nums text-end text-indigo-600 text-xs">
                    26,691
                  </span>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame className="min-h-full w-full">
            <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="min-w-0">
                <div className="font-semibold text-sm">
                  Integrations
                </div>
                <div className="text-muted-foreground text-sm">
                  Connections for voice ops
                </div>
              </div>
              <Button type="button" tabIndex="0">
                Manage
                <svg className="lucide lucide-external-link opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </Button>
            </header>
            <FramePanel className="p-0!">
              <ul className="flex flex-col">
                <li>
                  <Item className="gap-3 px-3 py-3" variant="default" size="sm">
                    <ItemMedia className="size-8" variant="default">
                      <svg className="dark:hidden size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                        <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                      </svg>
                      <svg className="dark:block hidden size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                        <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium text-sm">
                        OpenAI
                      </ItemTitle>
                      <ItemDescription className="text-xs truncate">
                        Transcripts and response traces
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="flex-wrap gap-2 justify-end ms-auto">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Live
                      </Badge>
                      <Button type="button" tabIndex="0">
                        Disconnect
                      </Button>
                    </ItemActions>
                  </Item>
                  <Separator className="bg-transparent border-dashed border-t mx-3 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <Item className="gap-3 px-3 py-3" variant="default" size="sm">
                    <ItemMedia className="size-8" variant="default">
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                        <g clipRule="evenodd" fillRule="evenodd">
                          <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                          <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                          <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                          <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                        </g>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium text-sm">
                        Slack
                      </ItemTitle>
                      <ItemDescription className="text-xs truncate">
                        Escalation alerts and handoffs
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="flex-wrap gap-2 justify-end ms-auto">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Live
                      </Badge>
                      <Button type="button" tabIndex="0">
                        Disconnect
                      </Button>
                    </ItemActions>
                  </Item>
                  <Separator className="bg-transparent border-dashed border-t mx-3 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <Item className="gap-3 px-3 py-3" variant="default" size="sm">
                    <ItemMedia className="size-8" variant="default">
                      <IconTile variant="outline" size="sm">
                        <svg className="lucide lucide-network" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="NetworkIcon" tabler="IconSitemap" hugeicons="HierarchySquare01Icon" phosphor="TreeStructureIcon" remixicon="RiOrganizationChart" aria-hidden="true">
                          <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                          <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                          <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                          <path d="M12 12V8"></path>
                        </svg>
                      </IconTile>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium text-sm">
                        Voice Gateway
                      </ItemTitle>
                      <ItemDescription className="text-xs truncate">
                        SIP routing and failover
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="flex-wrap gap-2 justify-end ms-auto">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Live
                      </Badge>
                      <Button type="button" tabIndex="0">
                        Disconnect
                      </Button>
                    </ItemActions>
                  </Item>
                  <Separator className="bg-transparent border-dashed border-t mx-3 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <Item className="gap-3 px-3 py-3" variant="default" size="sm">
                    <ItemMedia className="size-8" variant="default">
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 622 512" fill="none">
                        <g clipPath="url(#googlemeet-clip0)">
                          <path d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z" fill="#00832D"></path>
                          <path d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z" fill="#0066DA"></path>
                          <path d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z" fill="#E94235"></path>
                          <path d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z" fill="#2684FC"></path>
                          <path d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317" fill="#00AC47"></path>
                          <path d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z" fill="#00AC47"></path>
                          <path d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891" fill="#FFBA00"></path>
                        </g>
                        <defs>
                          <clippath id="googlemeet-clip0">
                            <rect width="621.2" height="512" fill="white"></rect>
                          </clippath>
                        </defs>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium text-sm">
                        Google Meet
                      </ItemTitle>
                      <ItemDescription className="text-xs truncate">
                        Meetings and call context
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="flex-wrap gap-2 justify-end ms-auto">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        Syncing
                      </Badge>
                      <Button type="button" tabIndex="0">
                        Disconnect
                      </Button>
                    </ItemActions>
                  </Item>
                  <Separator className="bg-transparent border-dashed border-t mx-3 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <Item className="gap-3 px-3 py-3" variant="default" size="sm">
                    <ItemMedia className="size-8" variant="default">
                      <svg className="size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                        <defs>
                          <lineargradient id="_r_n_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                            <stop offset=".00006%" stopColor="#0845BF"></stop>
                            <stop offset="19.11%" stopColor="#0950DE"></stop>
                            <stop offset="38.23%" stopColor="#0B59F6"></stop>
                            <stop offset="50%" stopColor="#0B5CFF"></stop>
                            <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                            <stop offset="77.74%" stopColor="#1665FC"></stop>
                            <stop offset="86.33%" stopColor="#246FF9"></stop>
                            <stop offset="93.88%" stopColor="#387FF4"></stop>
                            <stop offset="100%" stopColor="#4F90EE"></stop>
                          </lineargradient>
                        </defs>
                        <path fill="url(#_r_n_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                        <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium text-sm">
                        Zoom
                      </ItemTitle>
                      <ItemDescription className="text-xs truncate">
                        Voice sessions and recordings
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="flex-wrap gap-2 justify-end ms-auto">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        Expired
                      </Badge>
                      <Button type="button" tabIndex="0">
                        Reconnect
                      </Button>
                    </ItemActions>
                  </Item>
                </li>
              </ul>
            </FramePanel>
          </Frame>
        </section>
      </div>
    </main>
  )
}
