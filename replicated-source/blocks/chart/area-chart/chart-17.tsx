import { ColorPickerSwatch } from "@/registry-neui/bases/base/neui/color-picker"
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-10 min-h-svh p-6 w-full">
      <Frame className="@container [--impressions-current:var(--impressions-accent,var(--color-indigo-500))] dark:[--impressions-current:var(--impressions-accent,var(--color-indigo-400))] max-w-5xl min-w-0 w-full" spacing="default" chart="chart-r0">
        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-r0] {\n  --color-search: var(--color-sky-400);\n  --color-social: var(--color-violet-400);\n  --color-display: var(--color-pink-400);\n  --color-video: var(--color-amber-400);\n  --color-current: var(--impressions-current);\n  --color-prior: var(--color-zinc-400);\n}\n\n\n.dark [data-chart=chart-r0] {\n  --color-search: var(--color-sky-300);\n  --color-social: var(--color-violet-300);\n  --color-display: var(--color-pink-300);\n  --color-video: var(--color-amber-300);\n  --color-current: var(--impressions-current);\n  --color-prior: var(--color-zinc-500);\n}\n" }} />
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="font-semibold text-sm">
              {"Campaign Impressions"}
            </div>
            <div className="text-muted-foreground text-sm truncate">
              {"Delivery by channel through Oct 11"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"Last 30 days"}
              </span>
              <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
              <svg className="lucide lucide-columns-2 lucide-columns2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns2Icon" tabler="IconColumns2" hugeicons="LayoutTwoColumnIcon" phosphor="SquareSplitHorizontalIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M12 3v18"></path>
              </svg>
              <span className="@max-md:sr-only [text-box:trim-both_cap_alphabetic]">
                {"Channels"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] font-normal tabular-nums text-muted-foreground">
                {"4/4"}
              </span>
              <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <ButtonGroup role="group" aria-label="Chart actions">
              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline data-placeholder:text-muted-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-center normal-case outline-none select-none shrink-0 tabular-nums tracking-normal transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Series color" id="_r_b_" data-base-ui-tooltip-trigger="" data-base-ui-click-trigger="" aria-haspopup="dialog" aria-expanded="false">
                <ColorPickerSwatch className="after:absolute after:inset-0 after:inset-ring after:inset-ring-foreground/10 after:pointer-events-none after:rounded-[inherit] forced-color-adjust-none inline-flex relative shrink-0 size-4" aria-hidden="true" style={{background: "var(--impressions-current)"}}></ColorPickerSwatch>
              </button>
              <span className="sr-only" role="status"></span>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_k_" baseUiTooltipTrigger="" aria-expanded="false">
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
          <dl className="@3xl:grid-cols-4 grid grid-cols-2">
            <div className="@3xl:not-first:border-s @3xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-2 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="text-muted-foreground text-sm">
                {"Impressions"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"14.3M"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 bg-success/10 border border-none border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="sr-only">
                      {"Up"}
                    </span>
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"16.2%"}
                    </span>
                  </Badge>
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                    {"vs 12.3M"}
                    <span className="@max-sm:hidden">
                      {"prior"}
                    </span>
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-2 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="text-muted-foreground text-sm">
                {"Daily Average"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"477K"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                    {"vs 410K prior"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-2 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="text-muted-foreground text-sm">
                {"Peak"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"1.5M"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                    {"Oct 6 to Oct 8"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-2 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="text-muted-foreground text-sm">
                {"Top Channel"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"38%"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="bg-(--color-social) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                    {"Social, 5.5M"}
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </FramePanel>
        <FramePanel>
          <div className="flex flex-col gap-6">
            <div className="flex justify-end text-xs">
              <ul className="flex gap-4 items-center">
                <li className="flex gap-1.5 h-4 items-center text-muted-foreground">
                  <svg className="h-2 shrink-0 w-4.5" aria-hidden="true" viewBox="0 0 18 8">
                    <line x1="0" y1="4" x2="18" y2="4" stroke="var(--color-current)" strokeWidth="1.5" strokeDasharray="3 2"></line>
                    <circle cx="9" cy="4" r="2.5" fill="var(--color-current)"></circle>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"This period"}
                  </span>
                </li>
                <li className="flex gap-1.5 h-4 items-center text-muted-foreground">
                  <svg className="h-2 shrink-0 w-4.5" aria-hidden="true" viewBox="0 0 18 8">
                    <line x1="0" y1="4" x2="18" y2="4" stroke="var(--color-prior)" strokeWidth="1.5" strokeDasharray="3 2"></line>
                    <circle cx="9" cy="4" r="2.5" fill="var(--color-prior)"></circle>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Prior period"}
                  </span>
                </li>
              </ul>
            </div>
            <div className="h-80 w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-80 justify-center text-xs w-full" data-chart="chart-_r_o_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_o_] {\n  --color-search: var(--color-sky-400);\n  --color-social: var(--color-violet-400);\n  --color-display: var(--color-pink-400);\n  --color-video: var(--color-amber-400);\n  --color-current: var(--impressions-current);\n  --color-prior: var(--color-zinc-400);\n}\n\n\n.dark [data-chart=chart-_r_o_] {\n  --color-search: var(--color-sky-300);\n  --color-social: var(--color-violet-300);\n  --color-display: var(--color-pink-300);\n  --color-video: var(--color-amber-300);\n  --color-current: var(--impressions-current);\n  --color-prior: var(--color-zinc-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="982" height="320" style={{position: "relative", cursor: "default", width: "982px", height: "320px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="982" height="320" viewBox="0 0 982 320" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line stroke="#ccc" fill="none" x="44" y="12" width="930" height="278" x1="44" y1="290" x2="974" y2="290"></line>
                              <line stroke="#ccc" fill="none" x="44" y="12" width="930" height="278" x1="44" y1="197.33333333333334" x2="974" y2="197.33333333333334"></line>
                              <line stroke="#ccc" fill="none" x="44" y="12" width="930" height="278" x1="44" y1="104.66666666666667" x2="974" y2="104.66666666666667"></line>
                              <line stroke="#ccc" fill="none" x="44" y="12" width="930" height="278" x1="44" y1="12" x2="974" y2="12"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="44" y="12" height="278" width="930"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="rn-fill-prior" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-prior)" stopOpacity="0.1"></stop>
                            <stop offset="100%" stopColor="var(--color-prior)" stopOpacity="0"></stop>
                          </lineargradient>
                          <lineargradient id="rn-fill-current" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-current)" stopOpacity="0.16"></stop>
                            <stop offset="100%" stopColor="var(--color-current)" stopOpacity="0"></stop>
                          </lineargradient>
                          <lineargradient id="rn-anchor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-current)"></stop>
                            <stop offset="100%" stopColor="var(--color-current)" stopOpacity="0.08"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="impressions-fill recharts-area recharts-layer" style={{transformBox: "view-box", transformOrigin: "0px 290px"}}>
                            <g className="recharts-layer">
                              <path className="recharts-area-area recharts-curve" strokeWidth="1.5" strokeDasharray="4 3" fill="url(#rn-fill-prior)" fillOpacity="1" height="278" stroke="none" width="930" id="recharts-area-_r_p_" d="M44,207.202L147.333,200.206L250.667,184.082L354,215.913L457.333,171.711L560.667,204.005L664,159.247L767.333,175.603L870.667,172.313L974,137.841L974,290L870.667,290L767.333,290L664,290L560.667,290L457.333,290L354,290L250.667,290L147.333,290L44,290Z"></path>
                              <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" strokeDasharray="4 3" fill="none" fillOpacity="1" height="278" stroke="var(--color-prior)" width="930" d="M44,207.202L147.333,200.206L250.667,184.082L354,215.913L457.333,171.711L560.667,204.005L664,159.247L767.333,175.603L870.667,172.313L974,137.841"></path>
                            </g>
                          </g>
                          <g className="impressions-fill recharts-area recharts-layer" style={{transformBox: "view-box", transformOrigin: "0px 290px"}}>
                            <g className="recharts-layer">
                              <path className="recharts-area-area recharts-curve" strokeWidth="1.5" strokeDasharray="4 3" fill="url(#rn-fill-current)" fillOpacity="1" height="278" stroke="none" width="930" id="recharts-area-_r_q_" d="M44,175.047L147.333,117.964L250.667,134.691L354,47.862L457.333,69.036L560.667,89.794L664,59.77L767.333,79.786L870.667,38.317L974,93.825L974,290L870.667,290L767.333,290L664,290L560.667,290L457.333,290L354,290L250.667,290L147.333,290L44,290Z"></path>
                              <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" strokeDasharray="4 3" fill="none" fillOpacity="1" height="278" stroke="var(--color-current)" width="930" d="M44,175.047L147.333,117.964L250.667,134.691L354,47.862L457.333,69.036L560.667,89.794L664,59.77L767.333,79.786L870.667,38.317L974,93.825"></path>
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
                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                          <g className="recharts-area-dots recharts-layer">
                            <circle className="impressions-dot pointer-events-none" cx="44" cy="207.2023333333333" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="207.2023333333333"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="147.33333333333331" cy="200.20600000000016" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="200.20600000000016"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="250.66666666666666" cy="184.08200000000008" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="184.08200000000008"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="354" cy="215.91299999999995" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="215.91299999999995"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="457.3333333333333" cy="171.7109999999999" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="171.7109999999999"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="560.6666666666666" cy="204.00533333333334" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="204.00533333333334"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="664" cy="159.2473333333333" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="159.2473333333333"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="767.3333333333333" cy="175.60299999999992" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="175.60299999999992"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="870.6666666666666" cy="172.31333333333333" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="172.31333333333333"></circle>
                            <circle className="impressions-dot pointer-events-none" cx="974" cy="137.8413333333334" r="3" fill="var(--color-prior)" stroke="var(--color-card)" strokeWidth="1.5" data-series="prior" data-cy="137.8413333333334"></circle>
                          </g>
                          <g className="recharts-area-dots recharts-layer">
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="175.04700000000003">
                              <circle cx="44" cy="175.04700000000003" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="117.96433333333336">
                              <circle cx="147.33333333333331" cy="117.96433333333336" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="134.69066666666663">
                              <circle cx="250.66666666666666" cy="134.69066666666663" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="47.86199999999994">
                              <circle cx="354" cy="47.86199999999994" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="69.0363333333334">
                              <circle cx="457.3333333333333" cy="69.0363333333334" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="89.79366666666671">
                              <circle cx="560.6666666666666" cy="89.79366666666671" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="59.769666666666744">
                              <circle cx="664" cy="59.769666666666744" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="79.78566666666664">
                              <circle cx="767.3333333333333" cy="79.78566666666664" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="38.31733333333331">
                              <circle cx="870.6666666666666" cy="38.31733333333331" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                            <g className="impressions-dot pointer-events-none" data-series="current" data-cy="93.82466666666664">
                              <circle className="[html[data-demo=frozen]_&]:animate-none [transform-box:fill-box] animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:animate-none origin-center" cx="974" cy="93.82466666666664" r="6" fill="var(--color-current)" fillOpacity="0.3"></circle>
                              <circle cx="974" cy="93.82466666666664" r="3.5" fill="var(--color-current)" stroke="var(--color-card)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="44" y="308" dy="0.71em" textAnchor="start"></text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="147.33333333333331" y="308" dy="0.71em" textAnchor="middle">
                                {"Sep 15"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="250.66666666666666" y="308" dy="0.71em" textAnchor="middle"></text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="354" y="308" dy="0.71em" textAnchor="middle">
                                {"Sep 21"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="457.3333333333333" y="308" dy="0.71em" textAnchor="middle"></text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="560.6666666666666" y="308" dy="0.71em" textAnchor="middle">
                                {"Sep 27"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="664" y="308" dy="0.71em" textAnchor="middle"></text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="767.3333333333333" y="308" dy="0.71em" textAnchor="middle">
                                {"Oct 3"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="870.6666666666666" y="308" dy="0.71em" textAnchor="middle"></text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="974" y="308" dy="0.71em" textAnchor="end">
                                {"Oct 9"}
                              </text>
                            </g>
                          </g>
                          <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="278" stroke="none" x="30" y="290" textAnchor="end" fill="#666">
                                <tspan x="30" dy="0.355em">
                                  {"1.0M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="278" stroke="none" x="30" y="197.33333333333334" textAnchor="end" fill="#666">
                                <tspan x="30" dy="0.355em">
                                  {"1.2M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="278" stroke="none" x="30" y="104.66666666666667" textAnchor="end" fill="#666">
                                <tspan x="30" dy="0.355em">
                                  {"1.4M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="278" stroke="none" x="30" y="12" textAnchor="end" fill="#666">
                                <tspan x="30" dy="0.355em">
                                  {"1.6M"}
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
          </div>
          <ul className="sr-only">
            <li>
              {"Sep 12 to Sep 14: 1.2M impressions"}
            </li>
            <li>
              {"Sep 15 to Sep 17: 1.4M impressions"}
            </li>
            <li>
              {"Sep 18 to Sep 20: 1.3M impressions"}
            </li>
            <li>
              {"Sep 21 to Sep 23: 1.5M impressions"}
            </li>
            <li>
              {"Sep 24 to Sep 26: 1.5M impressions"}
            </li>
            <li>
              {"Sep 27 to Sep 29: 1.4M impressions"}
            </li>
            <li>
              {"Sep 30 to Oct 2: 1.5M impressions"}
            </li>
            <li>
              {"Oct 3 to Oct 5: 1.5M impressions"}
            </li>
            <li>
              {"Oct 6 to Oct 8: 1.5M impressions"}
            </li>
            <li>
              {"Oct 9 to Oct 11: 1.4M impressions"}
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-muted-foreground text-xs">
          <span className="flex gap-2 h-4 items-center">
            <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic]">
              {"Updated hourly"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
              {"4 of 4 channels"}
            </span>
          </span>
          <span className="flex h-4 items-center tabular-nums">
            <span className="[text-box:trim-both_cap_alphabetic]">
              {"Sep 12 to Oct 11 vs Aug 13 to Sep 11"}
            </span>
          </span>
        </footer>
      </Frame>
    </div>
  )
}
