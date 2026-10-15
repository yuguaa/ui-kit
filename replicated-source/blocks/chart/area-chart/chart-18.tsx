import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 min-h-svh p-10 w-full">
      <Frame className="@container/orders max-w-3xl min-w-0 w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              Orders Overview
            </div>
            <div className="text-muted-foreground text-xs truncate">
              Sep 30, compared with Sep 29
            </div>
          </div>
          <div className="@2xl/orders:w-auto flex flex-wrap gap-2 items-center w-full">
            <ButtonGroup role="group" aria-label="Period">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Period: Day" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                  <path d="M16 14v2.2l1.6 1"></path>
                  <path d="M16 2v4"></path>
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                  <path d="M3 10h5"></path>
                  <path d="M8 2v4"></path>
                  <circle cx="16" cy="16" r="6"></circle>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  Day
                </span>
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </ButtonGroup>
            <ButtonGroup className="ms-auto" role="group" aria-label="Display">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <svg className="lucide lucide-sliders-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SlidersHorizontalIcon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M10 5H3"></path>
                  <path d="M12 19H3"></path>
                  <path d="M14 3v4"></path>
                  <path d="M16 17v4"></path>
                  <path d="M21 12h-9"></path>
                  <path d="M21 19h-5"></path>
                  <path d="M21 5h-7"></path>
                  <path d="M8 10v4"></path>
                  <path d="M8 12H3"></path>
                </svg>
                <span className="@max-md/orders:sr-only [text-box:trim-both_cap_alphabetic]">
                  Display
                </span>
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </ButtonGroup>
            <ButtonGroup role="group" aria-label="Chart actions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Refresh data" aria-busy="false" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chart" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="m21 3-7 7"></path>
                  <path d="m3 21 7-7"></path>
                  <path d="M9 21H3v-6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_i_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
          </div>
        </header>
        <FramePanel className="p-0">
          <Tabs data-orientation="horizontal" activationDirection="none">
            <TabsList className="gap-4 h-auto! justify-start px-4 py-0 sm:gap-10 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Metric">
              <TabsTrigger className="after:-bottom-px! flex-col gap-1.5 h-auto! items-start justify-start min-w-0 px-0 py-3 sm:flex-none text-left" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_l_">
                <span className="font-medium text-muted-foreground text-xs truncate w-full">
                  Orders
                </span>
                <span className="flex flex-wrap gap-x-1.5 gap-y-1 items-baseline">
                  <span className="font-semibold leading-none tabular-nums text-lg">
                    543
                  </span>
                  <span className="[&_svg]:size-3.5 font-medium gap-0.5 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="sr-only">
                      Up
                    </span>
                    6.5%
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! flex-col gap-1.5 h-auto! items-start justify-start min-w-0 px-0 py-3 sm:flex-none text-left" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_m_" compositeItemActive="">
                <span className="font-medium text-muted-foreground text-xs truncate w-full">
                  Revenue
                </span>
                <span className="flex flex-wrap gap-x-1.5 gap-y-1 items-baseline">
                  <span className="font-semibold leading-none tabular-nums text-lg">
                    $33,770
                  </span>
                  <span className="[&_svg]:size-3.5 font-medium gap-0.5 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="sr-only">
                      Up
                    </span>
                    7.7%
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! flex-col gap-1.5 h-auto! items-start justify-start min-w-0 px-0 py-3 sm:flex-none text-left" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_n_">
                <span className="font-medium text-muted-foreground text-xs truncate w-full">
                  Avg. Order
                </span>
                <span className="flex flex-wrap gap-x-1.5 gap-y-1 items-baseline">
                  <span className="font-semibold leading-none tabular-nums text-lg">
                    $62.19
                  </span>
                  <span className="[&_svg]:size-3.5 font-medium gap-0.5 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="sr-only">
                      Up
                    </span>
                    1.2%
                  </span>
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </FramePanel>
        <FramePanel>
          <div className="h-80 w-full">
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-video cn-chart flex h-80 justify-center text-xs w-full" data-chart="chart-_r_q_">
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width="726" height="320" style={{position: "relative", cursor: "default", width: "726px", height: "320px"}}>
                    <div className="recharts-tooltip-wrapper recharts-tooltip-wrapper-left recharts-tooltip-wrapper-top" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "visible", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", transform: "translate(0px, 0px)"}}>
                      <div className="duration-200 ease-out motion-reduce:transition-none transition-transform w-max" style={{transform: "translate(clamp(0px, -50% + 396px, -100% + 726px), calc(-100% + 135.667px))"}}>
                        <div className="animate-in duration-300 fade-in motion-reduce:animate-none slide-in-from-bottom-2">
                          <div className="cn-chart-tooltip grid items-start min-w-0">
                            <div className="gap-1.5 grid">
                              <div className="[&>svg]:h-2.5 [&>svg]:text-muted-foreground [&>svg]:w-2.5 flex flex-wrap gap-2 items-center w-full">
                                <div className="gap-x-3 gap-y-1 grid grid-cols-[auto_auto] items-center">
                                  <span className="text-muted-foreground">
                                    12:00
                                  </span>
                                  <span className="font-medium font-mono tabular-nums text-foreground text-right">
                                    $3,500
                                  </span>
                                  <span className="text-muted-foreground">
                                    Sep 29
                                  </span>
                                  <span className="font-mono tabular-nums text-muted-foreground text-right">
                                    $3,200
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <svg className="recharts-surface" role="application" tabIndex="0" width="726" height="320" viewBox="0 0 726 320" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line strokeDasharray="4 4" stroke="#ccc" fill="none" x="0" y="48" width="726" height="244" x1="0" y1="292" x2="726" y2="292"></line>
                            <line strokeDasharray="4 4" stroke="#ccc" fill="none" x="0" y="48" width="726" height="244" x1="0" y1="210.66666666666669" x2="726" y2="210.66666666666669"></line>
                            <line strokeDasharray="4 4" stroke="#ccc" fill="none" x="0" y="48" width="726" height="244" x1="0" y1="129.33333333333334" x2="726" y2="129.33333333333334"></line>
                            <line strokeDasharray="4 4" stroke="#ccc" fill="none" x="0" y="48" width="726" height="244" x1="0" y1="48" x2="726" y2="48"></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x="0" y="48" height="244" width="726"></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <lineargradient id="orders-stroke-_r_o_" x1="0" y1="0" x2="1" y2="0">
                          <stop className="[stop-color:var(--color-sky-500)] dark:[stop-color:var(--color-sky-400)]" offset="0%"></stop>
                          <stop className="[stop-color:var(--color-indigo-500)] dark:[stop-color:var(--color-indigo-400)]" offset="55%"></stop>
                          <stop className="[stop-color:var(--color-rose-500)] dark:[stop-color:var(--color-rose-400)]" offset="100%"></stop>
                        </lineargradient>
                        <lineargradient id="orders-hue-_r_o_" x1="0" y1="0" x2="1" y2="0">
                          <stop className="[stop-color:var(--color-sky-500)] dark:[stop-color:var(--color-sky-400)]" offset="0%"></stop>
                          <stop className="[stop-color:var(--color-indigo-500)] dark:[stop-color:var(--color-indigo-400)]" offset="55%"></stop>
                          <stop className="[stop-color:var(--color-rose-500)] dark:[stop-color:var(--color-rose-400)]" offset="100%"></stop>
                        </lineargradient>
                        <pattern id="orders-hatch-_r_o_" width="4" height="4" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="4" stroke="white"></line>
                        </pattern>
                        <mask id="orders-hatch-mask-_r_o_">
                          <rect width="100%" height="100%" fill="url(#orders-hatch-_r_o_)"></rect>
                        </mask>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
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
                        <g className="recharts-cartesian-axis recharts-layer recharts-yAxis yAxis">
                          <g className="recharts-cartesian-axis-ticks recharts-yAxis-ticks">
                            <g className="recharts-cartesian-axis-tick-lines recharts-yAxis-tick-lines">
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
                      <g className="recharts-zIndex-layer_1100" tabIndex="-1">
                        <g className="duration-200 ease-out motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(376px)"}}>
                          <rect className="animate-in duration-300 fade-in fill-muted motion-reduce:animate-none slide-in-from-bottom-4" x="0" y="44" width="40" height="252" rx="6"></rect>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_1115" tabIndex="-1">
                        <g className="recharts-area recharts-layer">
                          <g className="recharts-layer">
                            <path className="recharts-area-area recharts-curve" mask="url(#orders-hatch-mask-_r_o_)" strokeWidth="1" fill="url(#orders-hue-_r_o_)" fillOpacity="0.7" height="244" stroke="none" width="726" id="recharts-area-_r_r_" d="M0,192.367C22,200.608,44,208.849,66,216.767C88,224.684,110,232.278,132,231C154,229.722,176,219.572,198,204.567C220,189.562,242,169.702,264,167.967C286,166.232,308,182.622,330,182.2C352,181.778,374,164.545,396,149.667C418,134.789,440,122.266,462,124.453C484,126.64,506,143.537,528,145.6C550,147.663,572,134.894,594,137.467C616,140.039,638,157.954,660,172.033C682,186.113,704,196.356,726,206.6L726,292C704,292,682,292,660,292C638,292,616,292,594,292C572,292,550,292,528,292C506,292,484,292,462,292C440,292,418,292,396,292C374,292,352,292,330,292C308,292,286,292,264,292C242,292,220,292,198,292C176,292,154,292,132,292C110,292,88,292,66,292C44,292,22,292,0,292Z"></path>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_1150" tabIndex="-1">
                        <g className="recharts-area recharts-layer">
                          <g className="recharts-layer">
                            <path className="recharts-area-area recharts-curve" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke" fill="none" fillOpacity="0.6" height="244" stroke="none" width="726" id="recharts-area-_r_s_" d="M0,192.367C22,200.608,44,208.849,66,216.767C88,224.684,110,232.278,132,231C154,229.722,176,219.572,198,204.567C220,189.562,242,169.702,264,167.967C286,166.232,308,182.622,330,182.2C352,181.778,374,164.545,396,149.667C418,134.789,440,122.266,462,124.453C484,126.64,506,143.537,528,145.6C550,147.663,572,134.894,594,137.467C616,140.039,638,157.954,660,172.033C682,186.113,704,196.356,726,206.6L726,292C704,292,682,292,660,292C638,292,616,292,594,292C572,292,550,292,528,292C506,292,484,292,462,292C440,292,418,292,396,292C374,292,352,292,330,292C308,292,286,292,264,292C242,292,220,292,198,292C176,292,154,292,132,292C110,292,88,292,66,292C44,292,22,292,0,292Z"></path>
                            <path className="recharts-area-curve recharts-curve" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke" fill="none" fillOpacity="0.6" height="244" stroke="url(#orders-stroke-_r_o_)" width="726" d="M0,192.367C22,200.608,44,208.849,66,216.767C88,224.684,110,232.278,132,231C154,229.722,176,219.572,198,204.567C220,189.562,242,169.702,264,167.967C286,166.232,308,182.622,330,182.2C352,181.778,374,164.545,396,149.667C418,134.789,440,122.266,462,124.453C484,126.64,506,143.537,528,145.6C550,147.663,572,134.894,594,137.467C616,140.039,638,157.954,660,172.033C682,186.113,704,196.356,726,206.6"></path>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_1170" tabIndex="-1">
                        <g className="recharts-layer recharts-reference-dot">
                          <g className="animate-in duration-300 fade-in pointer-events-none">
                            <circle className="[animation-duration:2s] [html[data-demo=frozen]_&]:hidden [transform-box:fill-box] animate-ping dark:fill-rose-400 fill-rose-500 motion-reduce:hidden opacity-40 origin-center" cx="726" cy="206.60000000000002" r="6"></circle>
                            <circle className="dark:fill-rose-400 dark:stroke-rose-400 fill-rose-500 stroke-rose-500" cx="726" cy="206.60000000000002" r="7" fillOpacity="0.3" strokeWidth="1.5"></circle>
                            <circle className="dark:fill-rose-400 fill-rose-500" cx="726" cy="206.60000000000002" r="3.5"></circle>
                            <circle cx="724.75" cy="205.10000000000002" r="1.25" fill="white" fillOpacity="0.85"></circle>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_1200" tabIndex="-1">
                        <g className="recharts-active-dot recharts-layer">
                          <circle className="animate-in duration-200 ease-out fade-in motion-reduce:animate-none motion-reduce:transition-none slide-in-from-bottom-2 transition-[cx,cy]" cx="396" cy="149.66666666666666" r="5" fill="var(--color-card)" stroke="var(--color-indigo-500)" strokeWidth="2.5"></circle>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                        <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="0" y="308" dy="0.71em" textAnchor="start">
                              00:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="66" y="308" dy="0.71em" textAnchor="middle">
                              02:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="132" y="308" dy="0.71em" textAnchor="middle">
                              04:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="198" y="308" dy="0.71em" textAnchor="middle">
                              06:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="264" y="308" dy="0.71em" textAnchor="middle">
                              08:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="330" y="308" dy="0.71em" textAnchor="middle">
                              10:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="396" y="308" dy="0.71em" textAnchor="middle">
                              12:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="462" y="308" dy="0.71em" textAnchor="middle">
                              14:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="528" y="308" dy="0.71em" textAnchor="middle">
                              16:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="594" y="308" dy="0.71em" textAnchor="middle">
                              18:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="660" y="308" dy="0.71em" textAnchor="middle">
                              20:00
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground" x="726" y="308" dy="0.71em" textAnchor="end">
                              22:00
                            </text>
                          </g>
                        </g>
                        <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="0" y="292" dy="-6" stroke="var(--color-card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="0" y="210.66666666666669" dy="-6" stroke="var(--color-card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                              $2K
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="0" y="129.33333333333334" dy="-6" stroke="var(--color-card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                              $4K
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="0" y="48" dy="-6" stroke="var(--color-card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                              $6K
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
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-muted-foreground text-xs">
          <span className="flex gap-2 h-4 items-center">
            <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic]">
              Updated 5 min ago
            </span>
          </span>
          <span className="flex h-4 items-center">
            <span className="[text-box:trim-both_cap_alphabetic]">
              Revenue per 2 hours
            </span>
          </span>
        </footer>
      </Frame>
    </div>
  )
}
