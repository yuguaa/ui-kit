import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-3xl min-w-0 w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex gap-3 items-center min-w-0">
            <IconTile variant="outline" size="default" aria-hidden="true">
              <svg aria-hidden="true" fill="none" viewBox="0 0 128 128">
                <path fill="#0061FE" d="M0 0h128v128H0z"></path>
                <path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z"></path>
              </svg>
            </IconTile>
            <div className="flex flex-col gap-px min-w-0">
              <div className="flex gap-2 h-5 items-center min-w-0">
                <div className="[text-box:trim-both_cap_alphabetic] font-semibold overflow-x-clip text-ellipsis text-sm whitespace-nowrap">
                  {"bank-settlement-files"}
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Healthy"}
                  </span>
                </Badge>
              </div>
              <div className="flex gap-1.5 h-5 items-center min-w-0 text-muted-foreground text-sm">
                <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                  {"Dropbox Files API"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic] whitespace-nowrap">
                  {"Production"}
                </span>
              </div>
            </div>
          </div>
          <ButtonGroup role="group" aria-label="Connection actions">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Sync now" aria-busy="false" id="base-ui-_r_1_" baseUiTooltipTrigger="" extracted="1">
              <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </TooltipTrigger>
            </Tooltip>
          </ButtonGroup>
        </header>
        <FramePanel className="flex flex-col gap-6 min-w-0">
          <div className="@lg:flex-row @lg:gap-8 @lg:items-end @lg:justify-between flex flex-col gap-4">
            <div className="flex flex-col gap-2 min-w-0">
              <span className="flex h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Success Rate"}
                </span>
              </span>
              <span className="flex gap-3 h-7 items-center">
                <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-foreground text-xl">
                  {"96.7%"}
                </span>
                <span className="[&_svg]:size-3.5 flex font-medium gap-1 h-4 items-center tabular-nums text-success text-xs">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"+2.2 pts"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] font-normal text-muted-foreground">
                    {"vs prior 24h"}
                  </span>
                  <span className="sr-only">
                    {", better"}
                  </span>
                </span>
              </span>
              <span className="flex h-4 items-center tabular-nums text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"89 of 92 runs in 24h completed"}
                </span>
              </span>
            </div>
            <dl className="@lg:w-64 gap-x-6 gap-y-1.5 grid grid-cols-[auto_1fr] text-xs">
              <dt className="flex h-4 items-center text-muted-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Rows Synced"}
                </span>
              </dt>
              <dd className="flex font-medium gap-1.5 h-4 items-center justify-end tabular-nums text-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"189.1K"}
                </span>
              </dd>
              <dt className="flex h-4 items-center text-muted-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"p50 Duration"}
                </span>
              </dt>
              <dd className="flex font-medium gap-1.5 h-4 items-center justify-end tabular-nums text-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"33s"}
                </span>
              </dd>
              <dt className="flex h-4 items-center text-muted-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Freshness"}
                </span>
              </dt>
              <dd className="flex font-medium gap-1.5 h-4 items-center justify-end tabular-nums text-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"1m"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] font-normal text-muted-foreground">
                  {"within 30m SLO"}
                </span>
              </dd>
              <dt className="flex h-4 items-center text-muted-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Next Sync"}
                </span>
              </dt>
              <dd className="flex font-medium gap-1.5 h-4 items-center justify-end tabular-nums text-foreground">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"14:32"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] font-normal text-muted-foreground">
                  {"in 12m"}
                </span>
              </dd>
            </dl>
          </div>
          <section className="flex flex-col gap-3 min-w-0">
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-between min-w-0">
              <h3 className="flex font-medium h-5 items-center text-sm">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Last 24 Hours"}
                </span>
              </h3>
              <div className="flex gap-2 items-center">
                <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Plotted metric" style={{"--gap": "0"}}>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="sm" spacing="0">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"Rows"}
                    </span>
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"Runs"}
                    </span>
                  </ToggleGroupItem>
                </ToggleGroup>
                <ButtonGroup role="group" aria-label="Chart settings">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Compare against" aria-haspopup="menu" id="base-ui-_r_f_" baseUiTooltipTrigger="" aria-expanded="false">
                    <svg className="lucide lucide-scale" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ScaleIcon" tabler="IconScale" hugeicons="JusticeScale01Icon" phosphor="ScalesIcon" remixicon="RiScales3Line" aria-hidden="true">
                      <path d="M12 3v18"></path>
                      <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                      <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                      <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                      <path d="M7 21h10"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ButtonGroup>
              </div>
            </div>
            <div className="[&_g]:outline-hidden [-webkit-tap-highlight-color:transparent] data-[tip=move]:[&_.recharts-tooltip-wrapper]:duration-150 data-[tip=move]:[&_.recharts-tooltip-wrapper]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[tip=move]:[&_.recharts-tooltip-wrapper]:transition-transform h-52 has-[.recharts-surface:focus-visible]:outline-2 motion-reduce:[&_.recharts-tooltip-wrapper]:transition-none outline-offset-4 outline-ring/50 relative w-full" data-tip="rest">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-52 justify-center text-xs w-full" data-chart="chart-_r_21_">
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={726} height={208} style={{position: "relative", cursor: "default", width: "726px", height: "208px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" aria-label="Hourly rows for bank-settlement-files" role="application" tabIndex={0} width={726} height={208} viewBox="0 0 726 208" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc>
                          {"Each hour stacks its runs by outcome; arrow keys move through the hours and the tooltip reads each one out."}
                        </desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x={36} y={2} height={176} width={690}></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="r20-succeeded" width={6} height={6} patternUnits="userSpaceOnUse">
                            <rect width={6} height={6} fill="color-mix(in oklab, var(--success) 18%, var(--card))"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--success)" strokeOpacity={0.62} strokeWidth={1}></path>
                          </pattern>
                          <pattern id="r20-partial" width={6} height={6} patternUnits="userSpaceOnUse">
                            <rect width={6} height={6} fill="color-mix(in oklab, var(--warning) 18%, var(--card))"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--warning)" strokeOpacity={0.62} strokeWidth={1}></path>
                          </pattern>
                          <pattern id="r20-failed" width={6} height={6} patternUnits="userSpaceOnUse">
                            <rect width={6} height={6} fill="color-mix(in oklab, var(--destructive) 18%, var(--card))"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--destructive)" strokeOpacity={0.62} strokeWidth={1}></path>
                          </pattern>
                          <pattern id="r20-maintenance" width={6} height={6} patternUnits="userSpaceOnUse">
                            <rect width={6} height={6} fill="var(--muted)"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--muted-foreground)" strokeOpacity={0.3} strokeWidth={1}></path>
                          </pattern>
                        </defs>
                        <defs>
                          <clippath id="r20-floor">
                            <rect x={0} y={0} width={762} height={178}></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_22_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="15:00">
                                      <rect data-fade="" x={42.325} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={42.325} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="0" data-series="rows">
                                          <rect x={42.325} y={12} width={16} height={166} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={42.325} y={12} width={16} height={166} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="16:00">
                                      <rect data-fade="" x={71.075} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={71.075} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="1" data-series="rows">
                                          <rect x={71.075} y={39} width={16} height={139} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={71.075} y={39} width={16} height={139} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="17:00">
                                      <rect data-fade="" x={99.825} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={99.825} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="2" data-series="rows">
                                          <rect x={99.825} y={48} width={16} height={130} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={99.825} y={48} width={16} height={130} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="18:00">
                                      <rect data-fade="" x={128.575} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={128.575} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="3" data-series="rows">
                                          <rect x={128.575} y={74} width={16} height={104} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={128.575} y={74} width={16} height={104} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="19:00">
                                      <rect data-fade="" x={157.325} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={157.325} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="4" data-series="rows">
                                          <rect x={157.325} y={96} width={16} height={82} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={157.325} y={96} width={16} height={82} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="20:00">
                                      <rect data-fade="" x={186.075} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={186.075} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="5" data-series="rows">
                                          <rect x={186.075} y={96} width={16} height={82} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={186.075} y={96} width={16} height={82} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="21:00">
                                      <rect data-fade="" x={214.825} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={214.825} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="6" data-series="rows">
                                          <rect x={214.825} y={145} width={16} height={33} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={214.825} y={145} width={16} height={33} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                      <rect data-fade="" x={214.825} y={181} width={16} height={3} rx={1.5} fill="var(--destructive)"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="22:00">
                                      <rect data-fade="" x={243.575} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={243.575} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="7" data-series="rows">
                                          <rect x={243.575} y={122} width={16} height={56} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={243.575} y={122} width={16} height={56} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="23:00">
                                      <rect data-fade="" x={272.325} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={272.325} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="8" data-series="rows">
                                          <rect x={272.325} y={128} width={16} height={50} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={272.325} y={128} width={16} height={50} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="00:00">
                                      <rect data-fade="" x={301.075} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={301.075} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="9" data-series="rows">
                                          <rect x={301.075} y={134} width={16} height={44} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={301.075} y={134} width={16} height={44} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="01:00">
                                      <rect data-fade="" x={329.825} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={329.825} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="10" data-series="rows">
                                          <rect x={329.825} y={135} width={16} height={43} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={329.825} y={135} width={16} height={43} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="02:00">
                                      <rect data-fade="" x={358.575} y={2} width={16} height={176} rx={4} fill="url(#r20-maintenance)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={358.575} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="11" data-series="rows">
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity"></g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="03:00">
                                      <rect data-fade="" x={387.325} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={387.325} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="12" data-series="rows">
                                          <rect x={387.325} y={138} width={16} height={40} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={387.325} y={138} width={16} height={40} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="04:00">
                                      <rect data-fade="" x={416.075} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={416.075} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="13" data-series="rows">
                                          <rect x={416.075} y={137} width={16} height={41} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={416.075} y={137} width={16} height={41} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="05:00">
                                      <rect data-fade="" x={444.825} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={444.825} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="14" data-series="rows">
                                          <rect x={444.825} y={123} width={16} height={55} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={444.825} y={123} width={16} height={55} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="06:00">
                                      <rect data-fade="" x={473.575} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={473.575} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="15" data-series="rows">
                                          <rect x={473.575} y={108} width={16} height={70} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={473.575} y={108} width={16} height={70} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="07:00">
                                      <rect data-fade="" x={502.325} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={502.325} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="16" data-series="rows">
                                          <rect x={502.325} y={88} width={16} height={90} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={502.325} y={88} width={16} height={90} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="08:00">
                                      <rect data-fade="" x={531.075} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={531.075} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="17" data-series="rows">
                                          <rect x={531.075} y={114} width={16} height={64} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <rect x={531.075} y={78} width={16} height={36} rx={4} fill="url(#r20-partial)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={531.075} y={114} width={16} height={64} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                            <rect x={531.075} y={78} width={16} height={36} rx={4} fill="var(--warning)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="09:00">
                                      <rect data-fade="" x={559.825} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={559.825} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="18" data-series="rows">
                                          <rect x={559.825} y={41} width={16} height={137} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={559.825} y={41} width={16} height={137} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="10:00">
                                      <rect data-fade="" x={588.575} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={588.575} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="19" data-series="rows">
                                          <rect x={588.575} y={24} width={16} height={154} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={588.575} y={24} width={16} height={154} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="11:00">
                                      <rect data-fade="" x={617.325} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={617.325} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="20" data-series="rows">
                                          <rect x={617.325} y={50} width={16} height={128} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={617.325} y={50} width={16} height={128} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="12:00">
                                      <rect data-fade="" x={646.075} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={646.075} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="21" data-series="rows">
                                          <rect x={646.075} y={48} width={16} height={130} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={646.075} y={48} width={16} height={130} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="13:00">
                                      <rect data-fade="" x={674.825} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={674.825} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="22" data-series="rows">
                                          <rect x={674.825} y={63} width={16} height={115} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <rect x={674.825} y={43} width={16} height={20} rx={4} fill="url(#r20-partial)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={674.825} y={63} width={16} height={115} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                            <rect x={674.825} y={43} width={16} height={20} rx={4} fill="var(--warning)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                      <rect data-fade="" x={674.825} y={181} width={16} height={3} rx={1.5} fill="var(--destructive)"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="group/hour" data-hour="14:00">
                                      <rect data-fade="" x={703.575} y={2} width={16} height={176} rx={4} fill="var(--muted)"></rect>
                                      <rect className="duration-150 ease-out fill-foreground/[0.06] group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity" x={703.575} y={2} width={16} height={176} rx={4}></rect>
                                      <g clipPath="url(#r20-floor)">
                                        <g className="[transform-box:fill-box]" data-rise="23" data-series="rows">
                                          <rect x={703.575} y={105} width={16} height={73} rx={4} fill="url(#r20-succeeded)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          <g className="duration-150 ease-out group-data-[lit]/hour:opacity-100 motion-reduce:transition-none opacity-0 transition-opacity">
                                            <rect x={703.575} y={105} width={16} height={73} rx={4} fill="var(--success)" stroke="var(--card)" strokeWidth={4} paint-order="stroke" vector-effect="non-scaling-stroke"></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                          <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                            <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                              <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
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
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground tabular-nums" x={136.625} y={196} dy="0.71em" textAnchor="middle">
                                {"18:00"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground tabular-nums" x={251.625} y={196} dy="0.71em" textAnchor="middle">
                                {"22:00"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground tabular-nums" x={366.625} y={196} dy="0.71em" textAnchor="middle">
                                {"02:00"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground tabular-nums" x={481.625} y={196} dy="0.71em" textAnchor="middle">
                                {"06:00"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground tabular-nums" x={596.625} y={196} dy="0.71em" textAnchor="middle">
                                {"10:00"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground tabular-nums" x={726} y={196} dy="0.71em" textAnchor="end">
                                {"Now"}
                              </text>
                            </g>
                          </g>
                          <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={176} stroke="none" x={24} y={178} textAnchor="end" fill="#666">
                                <tspan x={24} dy="0.355em">
                                  {"0"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={176} stroke="none" x={24} y={134} textAnchor="end" fill="#666">
                                <tspan x={24} dy="0.355em">
                                  {"4K"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={176} stroke="none" x={24} y={90} textAnchor="end" fill="#666">
                                <tspan x={24} dy="0.355em">
                                  {"8K"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={176} stroke="none" x={24} y={46} textAnchor="end" fill="#666">
                                <tspan x={24} dy="0.355em">
                                  {"12K"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={176} stroke="none" x={24} y={9} textAnchor="end" fill="#666">
                                <tspan x={24} dy="0.355em">
                                  {"16K"}
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
            <ul className="flex gap-x-3 items-center text-muted-foreground text-xs" aria-label="Legend">
              <li className="flex gap-1.5 h-4 items-center">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <defs>
                    <pattern id="ri-succeeded" width={6} height={6} patternUnits="userSpaceOnUse">
                      <rect width={6} height={6} fill="color-mix(in oklab, var(--success) 18%, var(--card))"></rect>
                      <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--success)" strokeOpacity={0.62} strokeWidth={1}></path>
                    </pattern>
                  </defs>
                  <rect width={12} height={12} rx={3} fill="url(#ri-succeeded)"></rect>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Succeeded"}
                </span>
              </li>
              <li className="flex gap-1.5 h-4 items-center">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <defs>
                    <pattern id="rj-partial" width={6} height={6} patternUnits="userSpaceOnUse">
                      <rect width={6} height={6} fill="color-mix(in oklab, var(--warning) 18%, var(--card))"></rect>
                      <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--warning)" strokeOpacity={0.62} strokeWidth={1}></path>
                    </pattern>
                  </defs>
                  <rect width={12} height={12} rx={3} fill="url(#rj-partial)"></rect>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Partial"}
                </span>
              </li>
              <li className="flex gap-1.5 h-4 items-center">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <rect data-fade="" x={0} y={4.5} width={12} height={3} rx={1.5} fill="var(--destructive)"></rect>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Failed"}
                </span>
              </li>
              <li className="flex gap-1.5 h-4 items-center">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <defs>
                    <pattern id="rk-maintenance" width={6} height={6} patternUnits="userSpaceOnUse">
                      <rect width={6} height={6} fill="var(--muted)"></rect>
                      <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--muted-foreground)" strokeOpacity={0.3} strokeWidth={1}></path>
                    </pattern>
                  </defs>
                  <rect width={12} height={12} rx={3} fill="url(#rk-maintenance)"></rect>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Paused"}
                </span>
              </li>
            </ul>
          </section>
        </FramePanel>
        <FramePanel>
          <section className="flex flex-col gap-3 min-w-0">
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-between min-w-0">
              <h3 className="flex font-medium h-5 items-center text-sm">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Recent Runs"}
                </span>
              </h3>
              <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Runs shown" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="sm" spacing="0">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"All"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Issues"}
                  </span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="-my-2 @xl:gap-x-6 @xl:grid-cols-2 grid min-w-0">
              <ul className="divide-border divide-y flex flex-col min-w-0">
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-success">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="sr-only">
                          {"Succeeded"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48303"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                            <path d="M16 14v2.2l1.6 1"></path>
                            <path d="M16 2v4"></path>
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                            <path d="M3 10h5"></path>
                            <path d="M8 2v4"></path>
                            <circle cx={16} cy={16} r={6}></circle>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Scheduled"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"14:17"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"2m ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"2.9K rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"47s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48303" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-success">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="sr-only">
                          {"Succeeded"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48302"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                            <path d="M16 14v2.2l1.6 1"></path>
                            <path d="M16 2v4"></path>
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                            <path d="M3 10h5"></path>
                            <path d="M8 2v4"></path>
                            <circle cx={16} cy={16} r={6}></circle>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Scheduled"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"14:02"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"17m ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"3.7K rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"55s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48302" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-success">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="sr-only">
                          {"Succeeded"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48301"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx={12} cy={7} r={4}></circle>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Manual"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"13:55"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"24m ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"1.2K rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"27s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48301" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-warning">
                        <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <span className="sr-only">
                          {"Partial"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48300"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                            <path d="M16 14v2.2l1.6 1"></path>
                            <path d="M16 2v4"></path>
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                            <path d="M3 10h5"></path>
                            <path d="M8 2v4"></path>
                            <circle cx={16} cy={16} r={6}></circle>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Scheduled"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"13:47"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"32m ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"1.8K rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"1m 16s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <p className="ps-6.5 text-muted-foreground text-pretty text-xs">
                    <span className="font-medium font-mono text-foreground">
                      {"W_RATE_LIMIT"}
                    </span>
                    {"HTTP 429, 3 files deferred"}
                  </p>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48300" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
              </ul>
              <ul className="@xl:border-t-0 border-border border-t divide-border divide-y flex flex-col min-w-0">
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-success">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="sr-only">
                          {"Succeeded"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48299"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                            <path d="M16 14v2.2l1.6 1"></path>
                            <path d="M16 2v4"></path>
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                            <path d="M3 10h5"></path>
                            <path d="M8 2v4"></path>
                            <circle cx={16} cy={16} r={6}></circle>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Scheduled"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"13:32"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"47m ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"3.3K rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"49s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48299" aria-haspopup="menu" id="base-ui-_r_1e_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-success">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="sr-only">
                          {"Succeeded"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48298"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <path d="M3 3v5h5"></path>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Retry"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"13:24"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"55m ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"3.1K rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"51s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48298" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-destructive">
                        <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                        <span className="sr-only">
                          {"Failed"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48297"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                            <path d="M16 14v2.2l1.6 1"></path>
                            <path d="M16 2v4"></path>
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                            <path d="M3 10h5"></path>
                            <path d="M8 2v4"></path>
                            <circle cx={16} cy={16} r={6}></circle>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Scheduled"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"13:17"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"1h ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"0 rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"2m 00s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <p className="ps-6.5 text-muted-foreground text-pretty text-xs">
                    <span className="font-medium font-mono text-foreground">
                      {"E_LIST_TIMEOUT"}
                    </span>
                    {"Folder listing timed out after 120s"}
                  </p>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48297" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
                <li className="flex flex-col gap-1 group/run min-w-0 py-2 relative">
                  <div className="flex gap-2.5 items-start min-w-0">
                    <span className="flex h-4 items-center">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex items-center justify-center shrink-0 size-4 text-success">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="sr-only">
                          {"Succeeded"}
                        </span>
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="flex gap-2 h-4 items-center min-w-0">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-xs">
                          {"RUN-48296"}
                        </span>
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 flex gap-1 h-4 items-center text-muted-foreground text-xs">
                          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                            <path d="M16 14v2.2l1.6 1"></path>
                            <path d="M16 2v4"></path>
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                            <path d="M3 10h5"></path>
                            <path d="M8 2v4"></path>
                            <circle cx={16} cy={16} r={6}></circle>
                          </svg>
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"Scheduled"}
                          </span>
                        </span>
                      </span>
                      <span className="flex gap-1.5 h-4 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"13:02"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"1h ago"}
                        </span>
                      </span>
                    </div>
                    <div className="duration-150 flex flex-col gap-1 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/run:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/run:opacity-0 pointer-fine:group-hover/run:opacity-0 shrink-0 tabular-nums text-xs transition-opacity">
                      <span className="flex h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                          {"2.9K rows"}
                        </span>
                      </span>
                      <span className="flex h-4 items-center text-muted-foreground">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"41s"}
                        </span>
                      </span>
                    </div>
                    <span className="hidden pointer-coarse:block shrink-0 w-7" aria-hidden="true"></span>
                  </div>
                  <div className="absolute end-0 top-3">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-150 group-has-[:focus-visible]/run:opacity-100 group-hover/run:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for RUN-48296" aria-haspopup="menu" id="base-ui-_r_1t_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={19} cy={12} r={1}></circle>
                        <circle cx={5} cy={12} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </FramePanel>
      </Frame>
    </div>
  )
}
