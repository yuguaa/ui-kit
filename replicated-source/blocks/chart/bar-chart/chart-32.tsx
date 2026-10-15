import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
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
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-5xl min-w-0 w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              {"Run Time"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Runner time by start hour, UTC"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <ButtonGroup role="group" aria-label="Data scope">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Time window: Last 24 Hours" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Last 24 Hours"}
                </span>
                <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Jobs: all jobs" id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                <svg className="lucide lucide-square-terminal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareTerminalIcon" tabler="IconTerminal2" hugeicons="CommandLineIcon" phosphor="TerminalWindowIcon" remixicon="RiTerminalBoxLine" aria-hidden="true">
                  <path d="m7 11 2-2-2-2"></path>
                  <path d="M11 13h4"></path>
                  <rect width={18} height={18} x={3} y={3} rx={2} ry={2}></rect>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"All Jobs"}
                </span>
                <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </ComboboxTrigger>
              <input id="base-ui-_r_5_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ButtonGroup>
            <ButtonGroup role="group" aria-label="Chart view">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Outcomes shown: All Outcomes" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
                <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                  <path d="M2 5h20"></path>
                  <path d="M6 12h12"></path>
                  <path d="M9 19h6"></path>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"All Outcomes"}
                </span>
                <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx={17} cy={17} r={3}></circle>
                  <circle cx={7} cy={7} r={3}></circle>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Display"}
                </span>
                <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </ButtonGroup>
            <ButtonGroup role="group" aria-label="Chart actions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-disabled="false" aria-label="Refresh runs" aria-busy="false" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_o_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
          </div>
        </header>
        <FramePanel className="@container">
          <dl className="@3xl:-my-(--frame-panel-py) @3xl:gap-0 @3xl:grid-cols-4 gap-x-6 gap-y-5 grid grid-cols-2">
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"Runner Time"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"16h 07m"}
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-muted-foreground text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                      {"-5%"}
                    </span>
                  </Badge>
                  <span className="flex h-4 items-center">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"vs prior 24h"}
                    </span>
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"Runs"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"1,004"}
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="flex h-4 items-center tabular-nums">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"42 per hour"}
                    </span>
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"Failure Time"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"1h 40m"}
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="flex h-4 items-center tabular-nums">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"10.4% of runner time"}
                    </span>
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"Peak Hour"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"03:00"}
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="flex h-4 items-center tabular-nums">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"1h 32m runner time"}
                    </span>
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </FramePanel>
        <FramePanel className="flex flex-1 flex-col gap-4 min-h-0">
          <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c32-rise { from { transform: scaleY(0); } }\n@keyframes c32-fade { from { opacity: 0; } }\n[data-c32-rise] { animation: c32-rise 400ms cubic-bezier(0.23, 1, 0.32, 1) backwards; }\n[data-c32-fade] { animation: c32-fade 200ms cubic-bezier(0.23, 1, 0.32, 1) backwards; }\n@media (prefers-reduced-motion: reduce) {\n  [data-c32-rise] { animation-name: c32-fade; animation-duration: 200ms; }\n}\n" }} />
          <div className="@container min-w-0 relative">
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-auto cn-chart flex h-72 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-ring/50 justify-center min-w-0 ring-offset-card text-xs w-full" data-chart="chart-_r_r_" role="group" aria-label="Runner time per hour, last 24 hours: Succeeded, Timed Out, and Failed. Arrow keys move between hours.">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_r_] {\n  --color-succeededSec: var(--success);\n  --color-timedOutSec: var(--warning);\n  --color-failedSec: var(--destructive);\n  --color-succeeded: var(--success);\n  --color-timedOut: var(--warning);\n  --color-failed: var(--destructive);\n}\n\n\n.dark [data-chart=chart-_r_r_] {\n  --color-succeededSec: var(--success);\n  --color-timedOutSec: var(--warning);\n  --color-failedSec: var(--destructive);\n  --color-succeeded: var(--success);\n  --color-timedOut: var(--warning);\n  --color-failed: var(--destructive);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width={982} height={288} style={{position: "relative", cursor: "default", width: "982px", height: "288px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex={0} width={982} height={288} viewBox="0 0 982 288" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={36} y={28} width={938} height={230} x1={36} y1={258} x2={974} y2={258}></line>
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={36} y={28} width={938} height={230} x1={36} y1={189.1418477935453} x2={974} y2={189.1418477935453}></line>
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={36} y={28} width={938} height={230} x1={36} y1={120.28369558709059} x2={974} y2={120.28369558709059}></line>
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={36} y={28} width={938} height={230} x1={36} y1={51.4255433806359} x2={974} y2={51.4255433806359}></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x={36} y={28} height={230} width={938}></rect>
                        </clippath>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_s_">
                          <g className="recharts-bar-rectangles recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "0ms"}}>
                                    <path className="recharts-rectangle" x={45.38} y={182.5238} width={20} height={75.4762} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M45.38,184.0238A 1.5,1.5,0,0,1,46.88,182.5238L 63.88,182.5238A 1.5,1.5,0,0,1,\n        65.38,184.0238L 65.38,258L 45.38,258Z"}></path>
                                    <path className="recharts-rectangle" x={45.38} y={182.5238} width={20} height={3} fill="var(--success)" d={"M45.38,184.0238A 1.5,1.5,0,0,1,46.88,182.5238L 63.88,182.5238A 1.5,1.5,0,0,1,\n        65.38,184.0238L 65.38,185.5238L 45.38,185.5238Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "16ms"}}>
                                    <path className="recharts-rectangle" x={84.4633} y={158.5} width={20} height={99.5} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M84.4633,160A 1.5,1.5,0,0,1,85.9633,158.5L 102.9633,158.5A 1.5,1.5,0,0,1,\n        104.4633,160L 104.4633,258L 84.4633,258Z"}></path>
                                    <path className="recharts-rectangle" x={84.4633} y={158.5} width={20} height={3} fill="var(--success)" d={"M84.4633,160A 1.5,1.5,0,0,1,85.9633,158.5L 102.9633,158.5A 1.5,1.5,0,0,1,\n        104.4633,160L 104.4633,161.5L 84.4633,161.5Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "32ms"}}>
                                    <path className="recharts-rectangle" x={123.5467} y={167.7576} width={20} height={90.2424} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M123.5467,169.2576A 1.5,1.5,0,0,1,125.0467,167.7576L 142.0467,167.7576A 1.5,1.5,0,0,1,\n        143.5467,169.2576L 143.5467,258L 123.5467,258Z"}></path>
                                    <path className="recharts-rectangle" x={123.5467} y={167.7576} width={20} height={3} fill="var(--success)" d={"M123.5467,169.2576A 1.5,1.5,0,0,1,125.0467,167.7576L 142.0467,167.7576A 1.5,1.5,0,0,1,\n        143.5467,169.2576L 143.5467,170.7576L 123.5467,170.7576Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "48ms"}}>
                                    <path className="recharts-rectangle" x={162.63} y={179.6547} width={20} height={78.3453} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M162.63,181.1547A 1.5,1.5,0,0,1,164.13,179.6547L 181.13,179.6547A 1.5,1.5,0,0,1,\n        182.63,181.1547L 182.63,258L 162.63,258Z"}></path>
                                    <path className="recharts-rectangle" x={162.63} y={179.6547} width={20} height={3} fill="var(--success)" d={"M162.63,181.1547A 1.5,1.5,0,0,1,164.13,179.6547L 181.13,179.6547A 1.5,1.5,0,0,1,\n        182.63,181.1547L 182.63,182.6547L 162.63,182.6547Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "64ms"}}>
                                    <path className="recharts-rectangle" x={201.7133} y={180.7259} width={20} height={77.2741} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M201.7133,182.2259A 1.5,1.5,0,0,1,203.2133,180.7259L 220.2133,180.7259A 1.5,1.5,0,0,1,\n        221.7133,182.2259L 221.7133,258L 201.7133,258Z"}></path>
                                    <path className="recharts-rectangle" x={201.7133} y={180.7259} width={20} height={3} fill="var(--success)" d={"M201.7133,182.2259A 1.5,1.5,0,0,1,203.2133,180.7259L 220.2133,180.7259A 1.5,1.5,0,0,1,\n        221.7133,182.2259L 221.7133,183.7259L 201.7133,183.7259Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "80ms"}}>
                                    <path className="recharts-rectangle" x={240.7967} y={182.1795} width={20} height={75.8205} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M240.7967,183.6795A 1.5,1.5,0,0,1,242.2967,182.1795L 259.2967,182.1795A 1.5,1.5,0,0,1,\n        260.7967,183.6795L 260.7967,258L 240.7967,258Z"}></path>
                                    <path className="recharts-rectangle" x={240.7967} y={182.1795} width={20} height={3} fill="var(--success)" d={"M240.7967,183.6795A 1.5,1.5,0,0,1,242.2967,182.1795L 259.2967,182.1795A 1.5,1.5,0,0,1,\n        260.7967,183.6795L 260.7967,185.1795L 240.7967,185.1795Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "96ms"}}>
                                    <path className="recharts-rectangle" x={279.88} y={167.2985} width={20} height={90.7015} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M279.88,168.7985A 1.5,1.5,0,0,1,281.38,167.2985L 298.38,167.2985A 1.5,1.5,0,0,1,\n        299.88,168.7985L 299.88,258L 279.88,258Z"}></path>
                                    <path className="recharts-rectangle" x={279.88} y={167.2985} width={20} height={3} fill="var(--success)" d={"M279.88,168.7985A 1.5,1.5,0,0,1,281.38,167.2985L 298.38,167.2985A 1.5,1.5,0,0,1,\n        299.88,168.7985L 299.88,170.2985L 279.88,170.2985Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "112ms"}}>
                                    <path className="recharts-rectangle" x={318.9633} y={181.8735} width={20} height={76.1265} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M318.9633,183.3735A 1.5,1.5,0,0,1,320.4633,181.8735L 337.4633,181.8735A 1.5,1.5,0,0,1,\n        338.9633,183.3735L 338.9633,258L 318.9633,258Z"}></path>
                                    <path className="recharts-rectangle" x={318.9633} y={181.8735} width={20} height={3} fill="var(--success)" d={"M318.9633,183.3735A 1.5,1.5,0,0,1,320.4633,181.8735L 337.4633,181.8735A 1.5,1.5,0,0,1,\n        338.9633,183.3735L 338.9633,184.8735L 318.9633,184.8735Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "128ms"}}>
                                    <path className="recharts-rectangle" x={358.0467} y={181.5675} width={20} height={76.4325} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M358.0467,183.0675A 1.5,1.5,0,0,1,359.5467,181.5675L 376.5467,181.5675A 1.5,1.5,0,0,1,\n        378.0467,183.0675L 378.0467,258L 358.0467,258Z"}></path>
                                    <path className="recharts-rectangle" x={358.0467} y={181.5675} width={20} height={3} fill="var(--success)" d={"M358.0467,183.0675A 1.5,1.5,0,0,1,359.5467,181.5675L 376.5467,181.5675A 1.5,1.5,0,0,1,\n        378.0467,183.0675L 378.0467,184.5675L 358.0467,184.5675Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "144ms"}}>
                                    <path className="recharts-rectangle" x={397.13} y={148.7451} width={20} height={109.2549} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M397.13,150.2451A 1.5,1.5,0,0,1,398.63,148.7451L 415.63,148.7451A 1.5,1.5,0,0,1,\n        417.13,150.2451L 417.13,258L 397.13,258Z"}></path>
                                    <path className="recharts-rectangle" x={397.13} y={148.7451} width={20} height={3} fill="var(--success)" d={"M397.13,150.2451A 1.5,1.5,0,0,1,398.63,148.7451L 415.63,148.7451A 1.5,1.5,0,0,1,\n        417.13,150.2451L 417.13,151.7451L 397.13,151.7451Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "160ms"}}>
                                    <path className="recharts-rectangle" x={436.2133} y={152.4558} width={20} height={105.5442} fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 436.2133,152.4558 h 20 v 105.5442 h -20 Z"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "176ms"}}>
                                    <path className="recharts-rectangle" x={475.2967} y={176.4413} width={20} height={81.5587} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M475.2967,177.9413A 1.5,1.5,0,0,1,476.7967,176.4413L 493.7967,176.4413A 1.5,1.5,0,0,1,\n        495.2967,177.9413L 495.2967,258L 475.2967,258Z"}></path>
                                    <path className="recharts-rectangle" x={475.2967} y={176.4413} width={20} height={3} fill="var(--success)" d={"M475.2967,177.9413A 1.5,1.5,0,0,1,476.7967,176.4413L 493.7967,176.4413A 1.5,1.5,0,0,1,\n        495.2967,177.9413L 495.2967,179.4413L 475.2967,179.4413Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "192ms"}}>
                                    <path className="recharts-rectangle" x={514.38} y={182.7533} width={20} height={75.2467} fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 514.38,182.7533 h 20 v 75.2467 h -20 Z"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "208ms"}}>
                                    <path className="recharts-rectangle" x={553.4633} y={115.5019} width={20} height={142.4981} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M553.4633,117.0019A 1.5,1.5,0,0,1,554.9633,115.5019L 571.9633,115.5019A 1.5,1.5,0,0,1,\n        573.4633,117.0019L 573.4633,258L 553.4633,258Z"}></path>
                                    <path className="recharts-rectangle" x={553.4633} y={115.5019} width={20} height={3} fill="var(--success)" d={"M553.4633,117.0019A 1.5,1.5,0,0,1,554.9633,115.5019L 571.9633,115.5019A 1.5,1.5,0,0,1,\n        573.4633,117.0019L 573.4633,118.5019L 553.4633,118.5019Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "224ms"}}>
                                    <path className="recharts-rectangle" x={592.5467} y={179.5017} width={20} height={78.4983} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M592.5467,181.0017A 1.5,1.5,0,0,1,594.0467,179.5017L 611.0467,179.5017A 1.5,1.5,0,0,1,\n        612.5467,181.0017L 612.5467,258L 592.5467,258Z"}></path>
                                    <path className="recharts-rectangle" x={592.5467} y={179.5017} width={20} height={3} fill="var(--success)" d={"M592.5467,181.0017A 1.5,1.5,0,0,1,594.0467,179.5017L 611.0467,179.5017A 1.5,1.5,0,0,1,\n        612.5467,181.0017L 612.5467,182.5017L 592.5467,182.5017Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "240ms"}}>
                                    <path className="recharts-rectangle" x={631.63} y={169.3643} width={20} height={88.6357} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M631.63,170.8643A 1.5,1.5,0,0,1,633.13,169.3643L 650.13,169.3643A 1.5,1.5,0,0,1,\n        651.63,170.8643L 651.63,258L 631.63,258Z"}></path>
                                    <path className="recharts-rectangle" x={631.63} y={169.3643} width={20} height={3} fill="var(--success)" d={"M631.63,170.8643A 1.5,1.5,0,0,1,633.13,169.3643L 650.13,169.3643A 1.5,1.5,0,0,1,\n        651.63,170.8643L 651.63,172.3643L 631.63,172.3643Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "256ms"}}>
                                    <path className="recharts-rectangle" x={670.7133} y={166.4187} width={20} height={91.5813} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M670.7133,167.9187A 1.5,1.5,0,0,1,672.2133,166.4187L 689.2133,166.4187A 1.5,1.5,0,0,1,\n        690.7133,167.9187L 690.7133,258L 670.7133,258Z"}></path>
                                    <path className="recharts-rectangle" x={670.7133} y={166.4187} width={20} height={3} fill="var(--success)" d={"M670.7133,167.9187A 1.5,1.5,0,0,1,672.2133,166.4187L 689.2133,166.4187A 1.5,1.5,0,0,1,\n        690.7133,167.9187L 690.7133,169.4187L 670.7133,169.4187Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "272ms"}}>
                                    <path className="recharts-rectangle" x={709.7967} y={187.8794} width={20} height={70.1206} fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 709.7967,187.8794 h 20 v 70.1206 h -20 Z"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "288ms"}}>
                                    <path className="recharts-rectangle" x={748.88} y={178.3158} width={20} height={79.6842} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M748.88,179.8158A 1.5,1.5,0,0,1,750.38,178.3158L 767.38,178.3158A 1.5,1.5,0,0,1,\n        768.88,179.8158L 768.88,258L 748.88,258Z"}></path>
                                    <path className="recharts-rectangle" x={748.88} y={178.3158} width={20} height={3} fill="var(--success)" d={"M748.88,179.8158A 1.5,1.5,0,0,1,750.38,178.3158L 767.38,178.3158A 1.5,1.5,0,0,1,\n        768.88,179.8158L 768.88,181.3158L 748.88,181.3158Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "304ms"}}>
                                    <path className="recharts-rectangle" x={787.9633} y={183.8245} width={20} height={74.1755} fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M787.9633,185.3245A 1.5,1.5,0,0,1,789.4633,183.8245L 806.4633,183.8245A 1.5,1.5,0,0,1,\n        807.9633,185.3245L 807.9633,258L 787.9633,258Z"}></path>
                                    <path className="recharts-rectangle" x={787.9633} y={183.8245} width={20} height={3} fill="var(--success)" d={"M787.9633,185.3245A 1.5,1.5,0,0,1,789.4633,183.8245L 806.4633,183.8245A 1.5,1.5,0,0,1,\n        807.9633,185.3245L 807.9633,186.8245L 787.9633,186.8245Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "320ms"}}>
                                    <path className="recharts-rectangle" x={827.0467} y={195.1096} width={20} height={62.8904} fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 827.0467,195.1096 h 20 v 62.8904 h -20 Z"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "336ms"}}>
                                    <path className="recharts-rectangle" x={866.13} y={182.2943} width={20} height={75.7057} fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 866.13,182.2943 h 20 v 75.7057 h -20 Z"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "352ms"}}>
                                    <path className="recharts-rectangle" x={905.2133} y={169.8616} width={20} height={88.1384} fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 905.2133,169.8616 h 20 v 88.1384 h -20 Z"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "368ms"}}>
                                    <path className="recharts-rectangle" x={944.2967} y={230.801} width={20} height={27.199} fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 944.2967,230.801 h 20 v 27.199 h -20 Z"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_t_">
                          <g className="recharts-bar-rectangles recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "160ms"}}>
                                    <path className="recharts-rectangle" x={436.2133} y={106.5503} width={20} height={44.9054} fill="color-mix(in oklab, var(--warning) 20%, var(--card))" d={"M436.2133,108.0503A 1.5,1.5,0,0,1,437.7133,106.5503L 454.7133,106.5503A 1.5,1.5,0,0,1,\n        456.2133,108.0503L 456.2133,151.4558L 436.2133,151.4558Z"}></path>
                                    <path className="recharts-rectangle" x={436.2133} y={106.5503} width={20} height={3} fill="var(--warning)" d={"M436.2133,108.0503A 1.5,1.5,0,0,1,437.7133,106.5503L 454.7133,106.5503A 1.5,1.5,0,0,1,\n        456.2133,108.0503L 456.2133,109.5503L 436.2133,109.5503Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "192ms"}}>
                                    <path className="recharts-rectangle" x={514.38} y={45.037} width={20} height={136.7163} fill="color-mix(in oklab, var(--warning) 20%, var(--card))" d={"M514.38,46.537A 1.5,1.5,0,0,1,515.88,45.037L 532.88,45.037A 1.5,1.5,0,0,1,\n        534.38,46.537L 534.38,181.7533L 514.38,181.7533Z"}></path>
                                    <path className="recharts-rectangle" x={514.38} y={45.037} width={20} height={3} fill="var(--warning)" d={"M514.38,46.537A 1.5,1.5,0,0,1,515.88,45.037L 532.88,45.037A 1.5,1.5,0,0,1,\n        534.38,46.537L 534.38,48.037L 514.38,48.037Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_u_">
                          <g className="recharts-bar-rectangles recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "272ms"}}>
                                    <path className="recharts-rectangle" x={709.7967} y={184.054} width={20} height={2.8255} fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M709.7967,185.4667A 1.4128,1.4128,0,0,1,711.2094,184.054L 728.3839,184.054A 1.4128,1.4128,0,0,1,\n        729.7967,185.4667L 729.7967,186.8794L 709.7967,186.8794Z"}></path>
                                    <path className="recharts-rectangle" x={709.7967} y={184.054} width={20} height={3} fill="var(--destructive)" d={"M709.7967,185.554A 1.5,1.5,0,0,1,711.2967,184.054L 728.2967,184.054A 1.5,1.5,0,0,1,\n        729.7967,185.554L 729.7967,187.054L 709.7967,187.054Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g></g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "320ms"}}>
                                    <path className="recharts-rectangle" x={827.0467} y={185.4694} width={20} height={8.6401} fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M827.0467,186.9694A 1.5,1.5,0,0,1,828.5467,185.4694L 845.5467,185.4694A 1.5,1.5,0,0,1,\n        847.0467,186.9694L 847.0467,194.1096L 827.0467,194.1096Z"}></path>
                                    <path className="recharts-rectangle" x={827.0467} y={185.4694} width={20} height={3} fill="var(--destructive)" d={"M827.0467,186.9694A 1.5,1.5,0,0,1,828.5467,185.4694L 845.5467,185.4694A 1.5,1.5,0,0,1,\n        847.0467,186.9694L 847.0467,188.4694L 827.0467,188.4694Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "336ms"}}>
                                    <path className="recharts-rectangle" x={866.13} y={163.014} width={20} height={18.2803} fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M866.13,164.514A 1.5,1.5,0,0,1,867.63,163.014L 884.63,163.014A 1.5,1.5,0,0,1,\n        886.13,164.514L 886.13,181.2943L 866.13,181.2943Z"}></path>
                                    <path className="recharts-rectangle" x={866.13} y={163.014} width={20} height={3} fill="var(--destructive)" d={"M866.13,164.514A 1.5,1.5,0,0,1,867.63,163.014L 884.63,163.014A 1.5,1.5,0,0,1,\n        886.13,164.514L 886.13,166.014L 866.13,166.014Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "352ms"}}>
                                    <path className="recharts-rectangle" x={905.2133} y={160.2214} width={20} height={8.6401} fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M905.2133,161.7214A 1.5,1.5,0,0,1,906.7133,160.2214L 923.7133,160.2214A 1.5,1.5,0,0,1,\n        925.2133,161.7214L 925.2133,168.8616L 905.2133,168.8616Z"}></path>
                                    <path className="recharts-rectangle" x={905.2133} y={160.2214} width={20} height={3} fill="var(--destructive)" d={"M905.2133,161.7214A 1.5,1.5,0,0,1,906.7133,160.2214L 923.7133,160.2214A 1.5,1.5,0,0,1,\n        925.2133,161.7214L 925.2133,163.2214L 905.2133,163.2214Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity={1} style={{transformBox: "view-box", transformOrigin: "0px 258px", animationDelay: "368ms"}}>
                                    <path className="recharts-rectangle" x={944.2967} y={226.8226} width={20} height={2.9785} fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M944.2967,228.3118A 1.4893,1.4893,0,0,1,945.7859,226.8226L 962.8074,226.8226A 1.4893,1.4893,0,0,1,\n        964.2967,228.3118L 964.2967,229.801L 944.2967,229.801Z"}></path>
                                    <path className="recharts-rectangle" x={944.2967} y={226.8226} width={20} height={3} fill="var(--destructive)" d={"M944.2967,228.3226A 1.5,1.5,0,0,1,945.7967,226.8226L 962.7967,226.8226A 1.5,1.5,0,0,1,\n        964.2967,228.3226L 964.2967,229.8226L 944.2967,229.8226Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                        <g className="duration-150 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity={1} style={{animationDelay: "584ms"}}>
                          <line x1={524.5416666666666} x2={524.5416666666666} y1={23} y2={33.03703703703707} stroke="var(--muted-foreground)" strokeOpacity={0.5} strokeDasharray="2 2"></line>
                          <circle cx={524.5416666666666} cy={38.03703703703707} r={2.5} fill="var(--warning)" stroke="var(--card)" strokeWidth={1.5}></circle>
                          <text x={524.5416666666666} y={18} textAnchor="middle" fill="var(--muted-foreground)" stroke="var(--card)" strokeWidth={3} strokeLinejoin="round" paint-order="stroke">
                            {"Timeout burn"}
                          </text>
                        </g>
                      </g>
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
                      <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                        <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={55.54166666666667} y={274} textAnchor="middle" fill="#666">
                              <tspan x={55.54166666666667} dy="0.71em">
                                {"15:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={172.79166666666666} y={274} textAnchor="middle" fill="#666">
                              <tspan x={172.79166666666666} dy="0.71em">
                                {"18:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={290.0416666666667} y={274} textAnchor="middle" fill="#666">
                              <tspan x={290.0416666666667} dy="0.71em">
                                {"21:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={407.2916666666667} y={274} textAnchor="middle" fill="#666">
                              <tspan x={407.2916666666667} dy="0.71em">
                                {"00:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={524.5416666666666} y={274} textAnchor="middle" fill="#666">
                              <tspan x={524.5416666666666} dy="0.71em">
                                {"03:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={641.7916666666666} y={274} textAnchor="middle" fill="#666">
                              <tspan x={641.7916666666666} dy="0.71em">
                                {"06:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={759.0416666666666} y={274} textAnchor="middle" fill="#666">
                              <tspan x={759.0416666666666} dy="0.71em">
                                {"09:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={938} stroke="none" x={876.2916666666666} y={274} textAnchor="middle" fill="#666">
                              <tspan x={876.2916666666666} dy="0.71em">
                                {"12:00"}
                              </tspan>
                            </text>
                          </g>
                        </g>
                        <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={230} stroke="none" x={24} y={258} textAnchor="end" fill="#666">
                              <tspan x={24} dy="0.355em">
                                {"0m"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={230} stroke="none" x={24} y={189.1418477935453} textAnchor="end" fill="#666">
                              <tspan x={24} dy="0.355em">
                                {"30m"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={230} stroke="none" x={24} y={120.28369558709059} textAnchor="end" fill="#666">
                              <tspan x={24} dy="0.355em">
                                {"60m"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={36} orientation="left" height={230} stroke="none" x={24} y={51.4255433806359} textAnchor="end" fill="#666">
                              <tspan x={24} dy="0.355em">
                                {"90m"}
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
          <ul className="flex flex-wrap gap-x-4 gap-y-1 items-center justify-center pe-2 ps-9" aria-label="Legend">
            <li className="flex gap-1.5 h-4 items-center text-xs">
              <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"Succeeded"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                {"14h 27m"}
              </span>
            </li>
            <li className="flex gap-1.5 h-4 items-center text-xs">
              <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"Timed Out"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                {"1h 20m"}
              </span>
            </li>
            <li className="flex gap-1.5 h-4 items-center text-xs">
              <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"Failed"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                {"20m 12s"}
              </span>
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-muted-foreground text-xs">
          <span className="flex gap-1.5 items-center min-w-0">
            <span className="flex h-4 items-center">
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"All 32 jobs"}
              </span>
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="flex h-4 items-center tabular-nums">
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"As of 14:20 UTC"}
              </span>
            </span>
          </span>
          <span className="flex gap-1.5 items-center min-w-0">
            <span className="flex h-4 items-center tabular-nums">
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"Synced 4m ago"}
              </span>
            </span>
          </span>
        </footer>
      </Frame>
    </div>
  )
}
