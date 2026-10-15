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
    <div className="flex items-center justify-center md:p-20 p-4 sm:p-10 w-full">
      <Frame className="@container/transit max-w-5xl min-w-0 w-full" spacing="default" chart="chart-r0">
        <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c30-ping {\n  0% { transform: scale(1); opacity: 0; }\n  12% { opacity: 0.5; }\n  100% { transform: scale(2.6); opacity: 0; }\n}\n.c30-ping {\n  opacity: 0;\n  animation: c30-ping 2400ms cubic-bezier(0.23, 1, 0.32, 1) infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .c30-ping { animation: none; }\n}\nhtml[data-demo=\"frozen\"] .c30-ping { animation: none; }\n" }} />
        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-r0] {\n  --color-road: var(--color-blue-500);\n  --color-rail: var(--color-amber-500);\n}\n\n\n.dark [data-chart=chart-r0] {\n  --color-road: var(--color-blue-400);\n  --color-rail: var(--color-amber-400);\n}\n" }} />
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex gap-2 h-5 items-center">
              <div className="[text-box:trim-both_cap_alphabetic] font-semibold text-sm">
                {"Transit vs Target"}
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                  <path d="M16 17h6v-6"></path>
                  <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                </svg>
                <span className="sr-only">
                  {"Faster:"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"-3.9% vs Q2"}
                </span>
              </Badge>
            </div>
            <div className="text-muted-foreground text-sm truncate">
              {"Median door-to-door days against target"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Statistic" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="Median transit days" extracted="1">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Median"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="P90 transit days">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"P90"}
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Sort: Most Behind" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
              <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                <path d="m21 16-4 4-4-4"></path>
                <path d="M17 20V4"></path>
                <path d="m3 8 4-4 4 4"></path>
                <path d="M7 4v16"></path>
              </svg>
              <span className="@max-md/transit:sr-only [text-box:trim-both_cap_alphabetic]">
                {"Most Behind"}
              </span>
              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Display options" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
              <svg className="lucide lucide-sliders-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SlidersHorizontalIcon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
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
              <span className="@max-md/transit:sr-only [text-box:trim-both_cap_alphabetic]">
                {"Display"}
              </span>
              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <ButtonGroup role="group" aria-label="Chart actions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Refresh data" aria-busy="false" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Expand chart" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="m21 3-7 7"></path>
                  <path d="m3 21 7-7"></path>
                  <path d="M9 21H3v-6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_l_" baseUiTooltipTrigger="" aria-expanded="false">
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
        <FramePanel className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-x-5 gap-y-2 items-center justify-between text-xs">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 items-center" aria-label="Modes">
              <li className="animate-in duration-200 fade-in-0 flex gap-1.5 h-4 items-center motion-reduce:animate-none">
                <span className="bg-(--color-road) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                  {"Road Freight"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-foreground">
                  {"4.5 d"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                  {"target"}
                </span>
              </li>
              <li className="animate-in duration-200 fade-in-0 flex gap-1.5 h-4 items-center motion-reduce:animate-none">
                <span className="bg-(--color-rail) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                  {"Rail Freight"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-foreground">
                  {"7.0 d"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                  {"target"}
                </span>
              </li>
            </ul>
          </div>
          <ChartContainer>
          <div className="@xl/transit:h-80 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-72 justify-center relative text-xs w-full" data-chart="chart-_r_o_">
            <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_o_] {\n  --color-road: var(--color-blue-500);\n  --color-rail: var(--color-amber-500);\n}\n\n\n.dark [data-chart=chart-_r_o_] {\n  --color-road: var(--color-blue-400);\n  --color-rail: var(--color-amber-400);\n}\n" }} />
            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                <div className="@md/transit:[--label-w:7.5rem] [--label-w:3.75rem] absolute gap-y-1 grid grid-cols-[var(--label-w)_minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)_auto] inset-0">
                  <div className="col-start-2 mb-2 relative row-start-1" aria-hidden="true">
                    <div className="gap-2 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center mx-8 text-muted-foreground">
                      <span className="flex gap-1 h-4 items-center justify-end">
                        <svg className="lucide lucide-arrow-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                          <path d="m12 19-7-7 7-7"></path>
                          <path d="M19 12H5"></path>
                        </svg>
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"Ahead"}
                        </span>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"Target"}
                        </span>
                      </Badge>
                      <span className="flex gap-1 h-4 items-center">
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"Behind"}
                        </span>
                        <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="col-start-2 pointer-events-none relative row-start-2" aria-hidden="true">
                    <div className="absolute bg-destructive/[0.035] duration-200 ease-[ease] inset-y-0 left-1/2 motion-reduce:transition-none right-0 transition-opacity"></div>
                    <svg className="absolute h-full inset-x-8 inset-y-0 overflow-visible w-[calc(100%-4rem)]">
                      <line className="stroke-foreground/[0.06]" x1="10%" x2="10%" y1={0} y2="100%" strokeWidth={1} shape-rendering="crispEdges"></line>
                      <line className="stroke-foreground/[0.06]" x1="30%" x2="30%" y1={0} y2="100%" strokeWidth={1} shape-rendering="crispEdges"></line>
                      <line className="stroke-foreground/20" x1="50%" x2="50%" y1={0} y2="100%" strokeWidth={1} shape-rendering="crispEdges"></line>
                      <line className="stroke-foreground/[0.06]" x1="70%" x2="70%" y1={0} y2="100%" strokeWidth={1} shape-rendering="crispEdges"></line>
                      <line className="stroke-foreground/[0.06]" x1="90%" x2="90%" y1={0} y2="100%" strokeWidth={1} shape-rendering="crispEdges"></line>
                    </svg>
                  </div>
                  <ul className="col-span-2 col-start-1 flex flex-col min-h-0 relative row-start-2" aria-label="Median transit against target by region; arrow keys move between regions">
                    <li className="border-b border-border/60 border-dashed flex-1 grid grid-cols-[var(--label-w)_minmax(0,1fr)] group/row items-center last:border-b-0 min-h-0 relative" data-lit="false">
                      <span className="absolute bg-muted/70 dark:bg-muted/40 duration-150 ease-[ease] group-data-[lit=true]/row:opacity-100 inset-0 motion-reduce:transition-none opacity-0 ring-1 ring-border/80 ring-inset rounded-full transition-opacity" aria-hidden="true"></span>
                      <button className="[-webkit-tap-highlight-color:transparent] absolute focus-visible:outline-2 inset-0 outline-ring/50 rounded-full" type="button" tabIndex={0} aria-label="Africa: Road Freight 6.9 days, 2.4 days behind target; Rail Freight 10.4 days, 3.4 days behind target; 1,596 shipments, 77% on time"></button>
                      <span className="duration-150 ease-[ease] flex group-data-[lit=true]/row:text-foreground h-4 items-center min-w-0 pointer-events-none ps-3 relative text-muted-foreground transition-colors">
                        <span className="@md/transit:block [text-box:trim-both_cap_alphabetic] hidden overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Africa"}
                        </span>
                        <span className="@md/transit:hidden [text-box:trim-both_cap_alphabetic]">
                          {"AFR"}
                        </span>
                      </span>
                      <div className="duration-150 ease-[ease] overflow-x-clip pointer-events-none relative self-stretch transition-[opacity,filter]">
                        <div className="absolute flex flex-col gap-1 inset-x-8 inset-y-0 justify-center">
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-road), color-mix(in oklab, var(--color-road) 72%, transparent) 50%, var(--color-road))", clipPath: "inset(0% 26% 0% 50% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(74%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center left-0 motion-reduce:transition-none ms-1.5 tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"+2.4 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-rail), color-mix(in oklab, var(--color-rail) 72%, transparent) 50%, var(--color-rail))", clipPath: "inset(0% 16% 0% 50% round 9999px)"}}></div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(84%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center left-0 motion-reduce:transition-none ms-1.5 tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"+3.4 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-border/60 border-dashed flex-1 grid grid-cols-[var(--label-w)_minmax(0,1fr)] group/row items-center last:border-b-0 min-h-0 relative" data-lit="false">
                      <span className="absolute bg-muted/70 dark:bg-muted/40 duration-150 ease-[ease] group-data-[lit=true]/row:opacity-100 inset-0 motion-reduce:transition-none opacity-0 ring-1 ring-border/80 ring-inset rounded-full transition-opacity" aria-hidden="true"></span>
                      <button className="[-webkit-tap-highlight-color:transparent] absolute focus-visible:outline-2 inset-0 outline-ring/50 rounded-full" type="button" tabIndex={-1} aria-label="Latin America: Road Freight 5.7 days, 1.2 days behind target; Rail Freight 9.0 days, 2.0 days behind target; 3,004 shipments, 82% on time"></button>
                      <span className="duration-150 ease-[ease] flex group-data-[lit=true]/row:text-foreground h-4 items-center min-w-0 pointer-events-none ps-3 relative text-muted-foreground transition-colors">
                        <span className="@md/transit:block [text-box:trim-both_cap_alphabetic] hidden overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Latin America"}
                        </span>
                        <span className="@md/transit:hidden [text-box:trim-both_cap_alphabetic]">
                          {"LATAM"}
                        </span>
                      </span>
                      <div className="duration-150 ease-[ease] overflow-x-clip pointer-events-none relative self-stretch transition-[opacity,filter]">
                        <div className="absolute flex flex-col gap-1 inset-x-8 inset-y-0 justify-center">
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-road), color-mix(in oklab, var(--color-road) 72%, transparent) 50%, var(--color-road))", clipPath: "inset(0% 38% 0% 50% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(62%)"}}>
                              <span className="-ms-1.5 -translate-x-1/2 -translate-y-1/2 absolute bg-(--color-road) left-0 rounded-full size-3 top-1/2" style={{opacity: "0", transform: "scale(2.6)"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(62%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center left-0 motion-reduce:transition-none ms-1.5 tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"+1.2 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-rail), color-mix(in oklab, var(--color-rail) 72%, transparent) 50%, var(--color-rail))", clipPath: "inset(0% 30% 0% 50% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(70%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center left-0 motion-reduce:transition-none ms-1.5 tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"+2.0 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-border/60 border-dashed flex-1 grid grid-cols-[var(--label-w)_minmax(0,1fr)] group/row items-center last:border-b-0 min-h-0 relative" data-lit="false">
                      <span className="absolute bg-muted/70 dark:bg-muted/40 duration-150 ease-[ease] group-data-[lit=true]/row:opacity-100 inset-0 motion-reduce:transition-none opacity-0 ring-1 ring-border/80 ring-inset rounded-full transition-opacity" aria-hidden="true"></span>
                      <button className="[-webkit-tap-highlight-color:transparent] absolute focus-visible:outline-2 inset-0 outline-ring/50 rounded-full" type="button" tabIndex={-1} aria-label="Asia Pacific: Road Freight 4.4 days, 0.1 days ahead of target; Rail Freight 7.3 days, 0.3 days behind target; 9,793 shipments, 84% on time"></button>
                      <span className="duration-150 ease-[ease] flex group-data-[lit=true]/row:text-foreground h-4 items-center min-w-0 pointer-events-none ps-3 relative text-muted-foreground transition-colors">
                        <span className="@md/transit:block [text-box:trim-both_cap_alphabetic] hidden overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Asia Pacific"}
                        </span>
                        <span className="@md/transit:hidden [text-box:trim-both_cap_alphabetic]">
                          {"APAC"}
                        </span>
                      </span>
                      <div className="duration-150 ease-[ease] overflow-x-clip pointer-events-none relative self-stretch transition-[opacity,filter]">
                        <div className="absolute flex flex-col gap-1 inset-x-8 inset-y-0 justify-center">
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-road), color-mix(in oklab, var(--color-road) 72%, transparent) 50%, var(--color-road))", clipPath: "inset(0% 50% 0% 48.5112% round 9999px)"}}></div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(48.5112%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center me-1.5 motion-reduce:transition-none right-full tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"−0.1 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-rail), color-mix(in oklab, var(--color-rail) 72%, transparent) 50%, var(--color-rail))", clipPath: "inset(0% 47% 0% 50% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(53%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center left-0 motion-reduce:transition-none ms-1.5 tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"+0.3 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-border/60 border-dashed flex-1 grid grid-cols-[var(--label-w)_minmax(0,1fr)] group/row items-center last:border-b-0 min-h-0 relative" data-lit="false">
                      <span className="absolute bg-muted/70 dark:bg-muted/40 duration-150 ease-[ease] group-data-[lit=true]/row:opacity-100 inset-0 motion-reduce:transition-none opacity-0 ring-1 ring-border/80 ring-inset rounded-full transition-opacity" aria-hidden="true"></span>
                      <button className="[-webkit-tap-highlight-color:transparent] absolute focus-visible:outline-2 inset-0 outline-ring/50 rounded-full" type="button" tabIndex={-1} aria-label="Middle East: Road Freight 4.1 days, 0.4 days ahead of target; Rail Freight 6.7 days, 0.3 days ahead of target; 2,374 shipments, 89% on time"></button>
                      <span className="duration-150 ease-[ease] flex group-data-[lit=true]/row:text-foreground h-4 items-center min-w-0 pointer-events-none ps-3 relative text-muted-foreground transition-colors">
                        <span className="@md/transit:block [text-box:trim-both_cap_alphabetic] hidden overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Middle East"}
                        </span>
                        <span className="@md/transit:hidden [text-box:trim-both_cap_alphabetic]">
                          {"ME"}
                        </span>
                      </span>
                      <div className="duration-150 ease-[ease] overflow-x-clip pointer-events-none relative self-stretch transition-[opacity,filter]">
                        <div className="absolute flex flex-col gap-1 inset-x-8 inset-y-0 justify-center">
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-road), color-mix(in oklab, var(--color-road) 72%, transparent) 50%, var(--color-road))", clipPath: "inset(0% 50% 0% 46% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(46%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center me-1.5 motion-reduce:transition-none right-full tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"−0.4 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-rail), color-mix(in oklab, var(--color-rail) 72%, transparent) 50%, var(--color-rail))", clipPath: "inset(0% 50% 0% 47% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(47%)"}}>
                              <span className="-translate-x-1/2 -translate-y-1/2 absolute bg-(--color-rail) left-0 ms-1.5 rounded-full size-3 top-1/2" style={{opacity: "0", transform: "scale(2.6)"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(47%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center me-1.5 motion-reduce:transition-none right-full tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"−0.3 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-border/60 border-dashed flex-1 grid grid-cols-[var(--label-w)_minmax(0,1fr)] group/row items-center last:border-b-0 min-h-0 relative" data-lit="false">
                      <span className="absolute bg-muted/70 dark:bg-muted/40 duration-150 ease-[ease] group-data-[lit=true]/row:opacity-100 inset-0 motion-reduce:transition-none opacity-0 ring-1 ring-border/80 ring-inset rounded-full transition-opacity" aria-hidden="true"></span>
                      <button className="[-webkit-tap-highlight-color:transparent] absolute focus-visible:outline-2 inset-0 outline-ring/50 rounded-full" type="button" tabIndex={-1} aria-label="North America: Road Freight 3.5 days, 1.0 days ahead of target; Rail Freight 5.7 days, 1.3 days ahead of target; 7,085 shipments, 92% on time"></button>
                      <span className="duration-150 ease-[ease] flex group-data-[lit=true]/row:text-foreground h-4 items-center min-w-0 pointer-events-none ps-3 relative text-muted-foreground transition-colors">
                        <span className="@md/transit:block [text-box:trim-both_cap_alphabetic] hidden overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"North America"}
                        </span>
                        <span className="@md/transit:hidden [text-box:trim-both_cap_alphabetic]">
                          {"NAM"}
                        </span>
                      </span>
                      <div className="duration-150 ease-[ease] overflow-x-clip pointer-events-none relative self-stretch transition-[opacity,filter]">
                        <div className="absolute flex flex-col gap-1 inset-x-8 inset-y-0 justify-center">
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-road), color-mix(in oklab, var(--color-road) 72%, transparent) 50%, var(--color-road))", clipPath: "inset(0% 50% 0% 40% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(40%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center me-1.5 motion-reduce:transition-none right-full tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"−1.0 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-rail), color-mix(in oklab, var(--color-rail) 72%, transparent) 50%, var(--color-rail))", clipPath: "inset(0% 50% 0% 37% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(37%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center me-1.5 motion-reduce:transition-none right-full tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"−1.3 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-border/60 border-dashed flex-1 grid grid-cols-[var(--label-w)_minmax(0,1fr)] group/row items-center last:border-b-0 min-h-0 relative" data-lit="false">
                      <span className="absolute bg-muted/70 dark:bg-muted/40 duration-150 ease-[ease] group-data-[lit=true]/row:opacity-100 inset-0 motion-reduce:transition-none opacity-0 ring-1 ring-border/80 ring-inset rounded-full transition-opacity" aria-hidden="true"></span>
                      <button className="[-webkit-tap-highlight-color:transparent] absolute focus-visible:outline-2 inset-0 outline-ring/50 rounded-full" type="button" tabIndex={-1} aria-label="Europe: Road Freight 2.8 days, 1.7 days ahead of target; Rail Freight 4.7 days, 2.3 days ahead of target; 8,902 shipments, 95% on time"></button>
                      <span className="duration-150 ease-[ease] flex group-data-[lit=true]/row:text-foreground h-4 items-center min-w-0 pointer-events-none ps-3 relative text-muted-foreground transition-colors">
                        <span className="@md/transit:block [text-box:trim-both_cap_alphabetic] hidden overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Europe"}
                        </span>
                        <span className="@md/transit:hidden [text-box:trim-both_cap_alphabetic]">
                          {"EUR"}
                        </span>
                      </span>
                      <div className="duration-150 ease-[ease] overflow-x-clip pointer-events-none relative self-stretch transition-[opacity,filter]">
                        <div className="absolute flex flex-col gap-1 inset-x-8 inset-y-0 justify-center">
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-road), color-mix(in oklab, var(--color-road) 72%, transparent) 50%, var(--color-road))", clipPath: "inset(0% 50% 0% 33% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(33%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center me-1.5 motion-reduce:transition-none right-full tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"−1.7 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="h-3 relative">
                            <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, var(--color-rail), color-mix(in oklab, var(--color-rail) 72%, transparent) 50%, var(--color-rail))", clipPath: "inset(0% 50% 0% 27% round 9999px)"}}>
                              <span className="absolute bg-white inset-0" aria-hidden="true" style={{opacity: "0"}}></span>
                            </div>
                            <div className="absolute inset-0" aria-hidden="true" style={{transform: "translateX(27%)", opacity: "1"}}>
                              <span className="-translate-y-1/2 absolute duration-200 ease-[ease] flex font-medium group-data-[lit=true]/row:text-foreground h-4 items-center me-1.5 motion-reduce:transition-none right-full tabular-nums text-muted-foreground top-1/2 transition-opacity whitespace-nowrap">
                                <span className="[text-box:trim-both_cap_alphabetic]">
                                  {"−2.3 d"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="col-start-2 h-4 relative row-start-3" aria-hidden="true">
                    <div className="absolute inset-x-8 inset-y-0">
                      <span className="-translate-x-1/2 absolute flex h-4 items-center tabular-nums text-muted-foreground whitespace-nowrap" style={{left: "10%"}}>
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"−4 d"}
                        </span>
                      </span>
                      <span className="-translate-x-1/2 @max-sm/transit:hidden absolute flex h-4 items-center tabular-nums text-muted-foreground whitespace-nowrap" style={{left: "30%"}}>
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"−2 d"}
                        </span>
                      </span>
                      <span className="-translate-x-1/2 absolute flex h-4 items-center tabular-nums text-muted-foreground whitespace-nowrap" style={{left: "50%"}}>
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"0"}
                        </span>
                      </span>
                      <span className="-translate-x-1/2 @max-sm/transit:hidden absolute flex h-4 items-center tabular-nums text-muted-foreground whitespace-nowrap" style={{left: "70%"}}>
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"+2 d"}
                        </span>
                      </span>
                      <span className="-translate-x-1/2 absolute flex h-4 items-center tabular-nums text-muted-foreground whitespace-nowrap" style={{left: "90%"}}>
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"+4 d"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ChartContainer>
          <div className="sr-only">
            <table>
              <caption>
                {"Median transit days against target by region, Q3 2026"}
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    {"Region"}
                  </th>
                  <th scope="col">
                    {"Road Freight"}
                  </th>
                  <th scope="col">
                    {"Road Freight gap to target"}
                  </th>
                  <th scope="col">
                    {"Rail Freight"}
                  </th>
                  <th scope="col">
                    {"Rail Freight gap to target"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    {"Africa"}
                  </th>
                  <td>
                    {"6.9 d"}
                  </td>
                  <td>
                    {"+2.4 d"}
                  </td>
                  <td>
                    {"10.4 d"}
                  </td>
                  <td>
                    {"+3.4 d"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Latin America"}
                  </th>
                  <td>
                    {"5.7 d"}
                  </td>
                  <td>
                    {"+1.2 d"}
                  </td>
                  <td>
                    {"9.0 d"}
                  </td>
                  <td>
                    {"+2.0 d"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Asia Pacific"}
                  </th>
                  <td>
                    {"4.4 d"}
                  </td>
                  <td>
                    {"−0.1 d"}
                  </td>
                  <td>
                    {"7.3 d"}
                  </td>
                  <td>
                    {"+0.3 d"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Middle East"}
                  </th>
                  <td>
                    {"4.1 d"}
                  </td>
                  <td>
                    {"−0.4 d"}
                  </td>
                  <td>
                    {"6.7 d"}
                  </td>
                  <td>
                    {"−0.3 d"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"North America"}
                  </th>
                  <td>
                    {"3.5 d"}
                  </td>
                  <td>
                    {"−1.0 d"}
                  </td>
                  <td>
                    {"5.7 d"}
                  </td>
                  <td>
                    {"−1.3 d"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Europe"}
                  </th>
                  <td>
                    {"2.8 d"}
                  </td>
                  <td>
                    {"−1.7 d"}
                  </td>
                  <td>
                    {"4.7 d"}
                  </td>
                  <td>
                    {"−2.3 d"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-muted-foreground text-xs">
          <span className="flex gap-2 h-4 items-center">
            <span className="flex relative shrink-0 size-1.5" aria-hidden="true">
              <span className="absolute bg-success c30-ping inset-0 rounded-full"></span>
              <span className="bg-success duration-200 ease-[ease] relative rounded-full size-1.5 transition-colors"></span>
            </span>
            <span className="[text-box:trim-both_cap_alphabetic] text-foreground">
              {"Live"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
              {"32,754 shipments"}
            </span>
          </span>
          <span className="flex h-4 items-center">
            <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
              {"7 of 12 lanes on target"}
            </span>
          </span>
        </footer>
      </Frame>
    </div>
  )
}
