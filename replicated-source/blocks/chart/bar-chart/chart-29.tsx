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
      <Frame className="@container [--velocity-current:var(--velocity-accent,var(--color-blue-500))] dark:[--velocity-current:var(--velocity-accent,var(--color-blue-400))] max-w-5xl min-w-0 w-full" spacing="default" chart="chart-r0">
        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-r0] {\n  --color-velocity: var(--velocity-current);\n  --color-watch: var(--color-amber-400);\n  --color-slow: var(--color-zinc-400);\n}\n\n\n.dark [data-chart=chart-r0] {\n  --color-velocity: var(--velocity-current);\n  --color-watch: var(--color-amber-300);\n  --color-slow: var(--color-zinc-500);\n}\n" }} />
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="font-semibold text-sm">
              {"Inventory Velocity"}
            </div>
            <div className="text-muted-foreground text-sm truncate">
              {"Units sold per day by category"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span className="@max-md:sr-only [text-box:trim-both_cap_alphabetic]">
                {"Last 30 days"}
              </span>
              <span className="@md:hidden [text-box:trim-both_cap_alphabetic]" aria-hidden="true">
                {"30D"}
              </span>
              <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
              <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                <path d="M10 12h4"></path>
                <path d="M10 8h4"></path>
                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
              </svg>
              <span className="@max-md:sr-only [text-box:trim-both_cap_alphabetic]">
                {"Warehouses"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] font-normal tabular-nums text-muted-foreground">
                {"3/3"}
              </span>
              <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <ButtonGroup role="group" aria-label="Chart actions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Sort by catalog order" aria-haspopup="menu" id="base-ui-_r_f_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                  <path d="m21 16-4 4-4-4"></path>
                  <path d="M17 20V4"></path>
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline data-placeholder:text-muted-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-center normal-case outline-none select-none shrink-0 tabular-nums tracking-normal transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Bar color" id="_r_i_" data-base-ui-tooltip-trigger="" data-base-ui-click-trigger="" aria-haspopup="dialog" aria-expanded="false">
                <ColorPickerSwatch className="after:absolute after:inset-0 after:inset-ring after:inset-ring-foreground/10 after:pointer-events-none after:rounded-[inherit] forced-color-adjust-none inline-flex relative shrink-0 size-4" aria-hidden="true" style={{background: "var(--velocity-current)"}}></ColorPickerSwatch>
              </button>
              <span className="sr-only" role="status"></span>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Refresh data" aria-busy="false" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_t_" baseUiTooltipTrigger="" aria-expanded="false">
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
        <FramePanel className="p-0">
          <div className="@3xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] grid">
            <div className="@3xl:border-b-0 @3xl:border-e border-b flex flex-col gap-3 justify-between min-w-0 px-(--frame-panel-px) py-(--frame-panel-py)">
              <span className="flex h-5 items-center text-muted-foreground text-sm">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Units per Day"}
                </span>
              </span>
              <span className="flex gap-3 h-9 items-center">
                <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-4xl tracking-tight">
                  {"7,170"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 bg-success/10 border border-none border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  <span className="sr-only">
                    {"Up"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"13.5%"}
                  </span>
                </Badge>
              </span>
              <span className="flex h-5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                  {"vs 6,316 a day in the prior 30 days"}
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-3 justify-between min-w-0 px-(--frame-panel-px) py-(--frame-panel-py)">
              <span className="flex gap-3 h-5 items-center justify-between">
                <span className="[text-box:trim-both_cap_alphabetic] shrink-0 text-muted-foreground text-sm whitespace-nowrap">
                  {"Stock Health"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip tabular-nums text-ellipsis text-muted-foreground text-xs whitespace-nowrap">
                  {"24.5 days of supply"}
                  <span className="@max-md:hidden">
                    {", 175.3K on hand"}
                  </span>
                </span>
              </span>
              <span className="flex gap-1 h-1.5" aria-hidden="true">
                <span className="basis-0 bg-(--color-velocity) rounded-full" style={{flexGrow: "8"}}></span>
                <span className="basis-0 bg-(--color-watch) rounded-full" style={{flexGrow: "2"}}></span>
                <span className="basis-0 bg-(--color-slow) rounded-full" style={{flexGrow: "2"}}></span>
              </span>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                <li className="flex gap-2 h-5 items-center min-w-0">
                  <span className="bg-(--color-velocity) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-sm">
                    {"8"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] text-sm">
                    {"Healthy"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis text-muted-foreground text-xs whitespace-nowrap">
                    {"under 30 days"}
                  </span>
                </li>
                <li className="flex gap-2 h-5 items-center min-w-0">
                  <span className="bg-(--color-watch) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-sm">
                    {"2"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] text-sm">
                    {"Watch"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis text-muted-foreground text-xs whitespace-nowrap">
                    {"Toys and Health"}
                  </span>
                </li>
                <li className="flex gap-2 h-5 items-center min-w-0">
                  <span className="bg-(--color-slow) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-sm">
                    {"2"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] text-sm">
                    {"Slow"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis text-muted-foreground text-xs whitespace-nowrap">
                    {"Office and Electronics"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </FramePanel>
        <FramePanel>
          <div className="flex flex-col gap-6">
            <style dangerouslySetInnerHTML={{ __html: "\n@keyframes velocity-rise-y {\n  from { transform: scaleY(0); opacity: 0; }\n  to { transform: scaleY(1); opacity: 1; }\n}\n@keyframes velocity-rise-x {\n  from { transform: scaleX(0); opacity: 0; }\n  to { transform: scaleX(1); opacity: 1; }\n}\n.velocity-bar {\n  transform-box: fill-box;\n  transform-origin: bottom;\n  animation: velocity-rise-y 640ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.velocity-bar[data-sideways] {\n  transform-origin: left;\n  animation-name: velocity-rise-x;\n}\n@media (prefers-reduced-motion: reduce) {\n  .velocity-bar { animation: none; }\n}\nhtml[data-demo=\"frozen\"] .velocity-bar { animation: none; }\n" }} />
            <ul className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-end text-muted-foreground text-xs">
              <li className="flex gap-1.5 h-4 items-center">
                <span className="bg-(--color-velocity) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Healthy"}
                </span>
              </li>
              <li className="flex gap-1.5 h-4 items-center">
                <span className="bg-(--color-watch) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Watch"}
                </span>
              </li>
              <li className="flex gap-1.5 h-4 items-center">
                <span className="bg-(--color-slow) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Slow"}
                </span>
              </li>
            </ul>
            <div className="h-72 w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-72 justify-center text-xs w-full" data-chart="chart-_r_11_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_11_] {\n  --color-velocity: var(--velocity-current);\n  --color-watch: var(--color-amber-400);\n  --color-slow: var(--color-zinc-400);\n}\n\n\n.dark [data-chart=chart-_r_11_] {\n  --color-velocity: var(--velocity-current);\n  --color-watch: var(--color-amber-300);\n  --color-slow: var(--color-zinc-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={982} height={288} style={{position: "relative", cursor: "default", width: "982px", height: "288px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={982} height={288} viewBox="0 0 982 288" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={70.375} y={8} width={31} height={250} radius="15.5" d={"M 70.375,23.5\n            A 15.5,15.5,0,0,1,85.875,8\n            L 85.875,8\n            A 15.5,15.5,0,0,1,101.375,23.5\n            L 101.375,242.5\n            A 15.5,15.5,0,0,1,85.875,258\n            L 85.875,258\n            A 15.5,15.5,0,0,1,70.375,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={70.375} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 70.375,23.5\n            A 15.5,15.5,0,0,1,85.875,8\n            L 85.875,8\n            A 15.5,15.5,0,0,1,101.375,23.5\n            L 101.375,242.5\n            A 15.5,15.5,0,0,1,85.875,258\n            L 85.875,258\n            A 15.5,15.5,0,0,1,70.375,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={148.2917} y={8} width={31} height={250} radius="15.5" d={"M 148.2917,23.5\n            A 15.5,15.5,0,0,1,163.7917,8\n            L 163.7917,8\n            A 15.5,15.5,0,0,1,179.2917,23.5\n            L 179.2917,242.5\n            A 15.5,15.5,0,0,1,163.7917,258\n            L 163.7917,258\n            A 15.5,15.5,0,0,1,148.2917,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={148.2917} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 148.2917,23.5\n            A 15.5,15.5,0,0,1,163.7917,8\n            L 163.7917,8\n            A 15.5,15.5,0,0,1,179.2917,23.5\n            L 179.2917,242.5\n            A 15.5,15.5,0,0,1,163.7917,258\n            L 163.7917,258\n            A 15.5,15.5,0,0,1,148.2917,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={226.2083} y={8} width={31} height={250} radius="15.5" d={"M 226.2083,23.5\n            A 15.5,15.5,0,0,1,241.7083,8\n            L 241.7083,8\n            A 15.5,15.5,0,0,1,257.2083,23.5\n            L 257.2083,242.5\n            A 15.5,15.5,0,0,1,241.7083,258\n            L 241.7083,258\n            A 15.5,15.5,0,0,1,226.2083,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={226.2083} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 226.2083,23.5\n            A 15.5,15.5,0,0,1,241.7083,8\n            L 241.7083,8\n            A 15.5,15.5,0,0,1,257.2083,23.5\n            L 257.2083,242.5\n            A 15.5,15.5,0,0,1,241.7083,258\n            L 241.7083,258\n            A 15.5,15.5,0,0,1,226.2083,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={304.125} y={8} width={31} height={250} radius="15.5" d={"M 304.125,23.5\n            A 15.5,15.5,0,0,1,319.625,8\n            L 319.625,8\n            A 15.5,15.5,0,0,1,335.125,23.5\n            L 335.125,242.5\n            A 15.5,15.5,0,0,1,319.625,258\n            L 319.625,258\n            A 15.5,15.5,0,0,1,304.125,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={304.125} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 304.125,23.5\n            A 15.5,15.5,0,0,1,319.625,8\n            L 319.625,8\n            A 15.5,15.5,0,0,1,335.125,23.5\n            L 335.125,242.5\n            A 15.5,15.5,0,0,1,319.625,258\n            L 319.625,258\n            A 15.5,15.5,0,0,1,304.125,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={382.0417} y={8} width={31} height={250} radius="15.5" d={"M 382.0417,23.5\n            A 15.5,15.5,0,0,1,397.5417,8\n            L 397.5417,8\n            A 15.5,15.5,0,0,1,413.0417,23.5\n            L 413.0417,242.5\n            A 15.5,15.5,0,0,1,397.5417,258\n            L 397.5417,258\n            A 15.5,15.5,0,0,1,382.0417,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={382.0417} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 382.0417,23.5\n            A 15.5,15.5,0,0,1,397.5417,8\n            L 397.5417,8\n            A 15.5,15.5,0,0,1,413.0417,23.5\n            L 413.0417,242.5\n            A 15.5,15.5,0,0,1,397.5417,258\n            L 397.5417,258\n            A 15.5,15.5,0,0,1,382.0417,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={459.9583} y={8} width={31} height={250} radius="15.5" d={"M 459.9583,23.5\n            A 15.5,15.5,0,0,1,475.4583,8\n            L 475.4583,8\n            A 15.5,15.5,0,0,1,490.9583,23.5\n            L 490.9583,242.5\n            A 15.5,15.5,0,0,1,475.4583,258\n            L 475.4583,258\n            A 15.5,15.5,0,0,1,459.9583,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={459.9583} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 459.9583,23.5\n            A 15.5,15.5,0,0,1,475.4583,8\n            L 475.4583,8\n            A 15.5,15.5,0,0,1,490.9583,23.5\n            L 490.9583,242.5\n            A 15.5,15.5,0,0,1,475.4583,258\n            L 475.4583,258\n            A 15.5,15.5,0,0,1,459.9583,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={537.875} y={8} width={31} height={250} radius="15.5" d={"M 537.875,23.5\n            A 15.5,15.5,0,0,1,553.375,8\n            L 553.375,8\n            A 15.5,15.5,0,0,1,568.875,23.5\n            L 568.875,242.5\n            A 15.5,15.5,0,0,1,553.375,258\n            L 553.375,258\n            A 15.5,15.5,0,0,1,537.875,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={537.875} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 537.875,23.5\n            A 15.5,15.5,0,0,1,553.375,8\n            L 553.375,8\n            A 15.5,15.5,0,0,1,568.875,23.5\n            L 568.875,242.5\n            A 15.5,15.5,0,0,1,553.375,258\n            L 553.375,258\n            A 15.5,15.5,0,0,1,537.875,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={615.7917} y={8} width={31} height={250} radius="15.5" d={"M 615.7917,23.5\n            A 15.5,15.5,0,0,1,631.2917,8\n            L 631.2917,8\n            A 15.5,15.5,0,0,1,646.7917,23.5\n            L 646.7917,242.5\n            A 15.5,15.5,0,0,1,631.2917,258\n            L 631.2917,258\n            A 15.5,15.5,0,0,1,615.7917,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={615.7917} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 615.7917,23.5\n            A 15.5,15.5,0,0,1,631.2917,8\n            L 631.2917,8\n            A 15.5,15.5,0,0,1,646.7917,23.5\n            L 646.7917,242.5\n            A 15.5,15.5,0,0,1,631.2917,258\n            L 631.2917,258\n            A 15.5,15.5,0,0,1,615.7917,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={693.7083} y={8} width={31} height={250} radius="15.5" d={"M 693.7083,23.5\n            A 15.5,15.5,0,0,1,709.2083,8\n            L 709.2083,8\n            A 15.5,15.5,0,0,1,724.7083,23.5\n            L 724.7083,242.5\n            A 15.5,15.5,0,0,1,709.2083,258\n            L 709.2083,258\n            A 15.5,15.5,0,0,1,693.7083,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={693.7083} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 693.7083,23.5\n            A 15.5,15.5,0,0,1,709.2083,8\n            L 709.2083,8\n            A 15.5,15.5,0,0,1,724.7083,23.5\n            L 724.7083,242.5\n            A 15.5,15.5,0,0,1,709.2083,258\n            L 709.2083,258\n            A 15.5,15.5,0,0,1,693.7083,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={771.625} y={8} width={31} height={250} radius="15.5" d={"M 771.625,23.5\n            A 15.5,15.5,0,0,1,787.125,8\n            L 787.125,8\n            A 15.5,15.5,0,0,1,802.625,23.5\n            L 802.625,242.5\n            A 15.5,15.5,0,0,1,787.125,258\n            L 787.125,258\n            A 15.5,15.5,0,0,1,771.625,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={771.625} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 771.625,23.5\n            A 15.5,15.5,0,0,1,787.125,8\n            L 787.125,8\n            A 15.5,15.5,0,0,1,802.625,23.5\n            L 802.625,242.5\n            A 15.5,15.5,0,0,1,787.125,258\n            L 787.125,258\n            A 15.5,15.5,0,0,1,771.625,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={849.5417} y={8} width={31} height={250} radius="15.5" d={"M 849.5417,23.5\n            A 15.5,15.5,0,0,1,865.0417,8\n            L 865.0417,8\n            A 15.5,15.5,0,0,1,880.5417,23.5\n            L 880.5417,242.5\n            A 15.5,15.5,0,0,1,865.0417,258\n            L 865.0417,258\n            A 15.5,15.5,0,0,1,849.5417,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={849.5417} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 849.5417,23.5\n            A 15.5,15.5,0,0,1,865.0417,8\n            L 865.0417,8\n            A 15.5,15.5,0,0,1,880.5417,23.5\n            L 880.5417,242.5\n            A 15.5,15.5,0,0,1,865.0417,258\n            L 865.0417,258\n            A 15.5,15.5,0,0,1,849.5417,242.5 Z"}></path>
                            </g>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <g>
                              <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={927.4583} y={8} width={31} height={250} radius="15.5" d={"M 927.4583,23.5\n            A 15.5,15.5,0,0,1,942.9583,8\n            L 942.9583,8\n            A 15.5,15.5,0,0,1,958.4583,23.5\n            L 958.4583,242.5\n            A 15.5,15.5,0,0,1,942.9583,258\n            L 942.9583,258\n            A 15.5,15.5,0,0,1,927.4583,242.5 Z"}></path>
                              <path className="recharts-rectangle" x={927.4583} y={8} width={31} height={250} fill="url(#r10-track-lines)" radius="15.5" d={"M 927.4583,23.5\n            A 15.5,15.5,0,0,1,942.9583,8\n            L 942.9583,8\n            A 15.5,15.5,0,0,1,958.4583,23.5\n            L 958.4583,242.5\n            A 15.5,15.5,0,0,1,942.9583,258\n            L 942.9583,258\n            A 15.5,15.5,0,0,1,927.4583,242.5 Z"}></path>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x={47} y={8} height={250} width={935}></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="r10-track-lines" width={4} height={4} patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                            <rect className="fill-muted-foreground/25" width={0.75} height={4}></rect>
                          </pattern>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_12_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "120ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={70.375} y={172.5} width={31} height={85.5} fill="var(--color-slow)" radius="15.5" d={"M 70.375,188\n            A 15.5,15.5,0,0,1,85.875,172.5\n            L 85.875,172.5\n            A 15.5,15.5,0,0,1,101.375,188\n            L 101.375,242.5\n            A 15.5,15.5,0,0,1,85.875,258\n            L 85.875,258\n            A 15.5,15.5,0,0,1,70.375,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "165ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={148.2917} y={39} width={31} height={219} fill="var(--color-velocity)" radius="15.5" d={"M 148.2917,54.5\n            A 15.5,15.5,0,0,1,163.7917,39\n            L 163.7917,39\n            A 15.5,15.5,0,0,1,179.2917,54.5\n            L 179.2917,242.5\n            A 15.5,15.5,0,0,1,163.7917,258\n            L 163.7917,258\n            A 15.5,15.5,0,0,1,148.2917,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "210ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={226.2083} y={130} width={31} height={128} fill="var(--color-velocity)" radius="15.5" d={"M 226.2083,145.5\n            A 15.5,15.5,0,0,1,241.7083,130\n            L 241.7083,130\n            A 15.5,15.5,0,0,1,257.2083,145.5\n            L 257.2083,242.5\n            A 15.5,15.5,0,0,1,241.7083,258\n            L 241.7083,258\n            A 15.5,15.5,0,0,1,226.2083,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "255ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={304.125} y={100.75} width={31} height={157.25} fill="var(--color-velocity)" radius="15.5" d={"M 304.125,116.25\n            A 15.5,15.5,0,0,1,319.625,100.75\n            L 319.625,100.75\n            A 15.5,15.5,0,0,1,335.125,116.25\n            L 335.125,242.5\n            A 15.5,15.5,0,0,1,319.625,258\n            L 319.625,258\n            A 15.5,15.5,0,0,1,304.125,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "300ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={382.0417} y={143.5} width={31} height={114.5} fill="var(--color-watch)" radius="15.5" d={"M 382.0417,159\n            A 15.5,15.5,0,0,1,397.5417,143.5\n            L 397.5417,143.5\n            A 15.5,15.5,0,0,1,413.0417,159\n            L 413.0417,242.5\n            A 15.5,15.5,0,0,1,397.5417,258\n            L 397.5417,258\n            A 15.5,15.5,0,0,1,382.0417,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "345ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={459.9583} y={62.75} width={31} height={195.25} fill="var(--color-velocity)" radius="15.5" d={"M 459.9583,78.25\n            A 15.5,15.5,0,0,1,475.4583,62.75\n            L 475.4583,62.75\n            A 15.5,15.5,0,0,1,490.9583,78.25\n            L 490.9583,242.5\n            A 15.5,15.5,0,0,1,475.4583,258\n            L 475.4583,258\n            A 15.5,15.5,0,0,1,459.9583,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "390ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={537.875} y={159.5} width={31} height={98.5} fill="var(--color-watch)" radius="15.5" d={"M 537.875,175\n            A 15.5,15.5,0,0,1,553.375,159.5\n            L 553.375,159.5\n            A 15.5,15.5,0,0,1,568.875,175\n            L 568.875,242.5\n            A 15.5,15.5,0,0,1,553.375,258\n            L 553.375,258\n            A 15.5,15.5,0,0,1,537.875,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "435ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={615.7917} y={26.75} width={31} height={231.25} fill="var(--color-velocity)" radius="15.5" d={"M 615.7917,42.25\n            A 15.5,15.5,0,0,1,631.2917,26.75\n            L 631.2917,26.75\n            A 15.5,15.5,0,0,1,646.7917,42.25\n            L 646.7917,242.5\n            A 15.5,15.5,0,0,1,631.2917,258\n            L 631.2917,258\n            A 15.5,15.5,0,0,1,615.7917,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "480ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={693.7083} y={96.25} width={31} height={161.75} fill="var(--color-velocity)" radius="15.5" d={"M 693.7083,111.75\n            A 15.5,15.5,0,0,1,709.2083,96.25\n            L 709.2083,96.25\n            A 15.5,15.5,0,0,1,724.7083,111.75\n            L 724.7083,242.5\n            A 15.5,15.5,0,0,1,709.2083,258\n            L 709.2083,258\n            A 15.5,15.5,0,0,1,693.7083,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "525ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={771.625} y={125} width={31} height={133} fill="var(--color-velocity)" radius="15.5" d={"M 771.625,140.5\n            A 15.5,15.5,0,0,1,787.125,125\n            L 787.125,125\n            A 15.5,15.5,0,0,1,802.625,140.5\n            L 802.625,242.5\n            A 15.5,15.5,0,0,1,787.125,258\n            L 787.125,258\n            A 15.5,15.5,0,0,1,771.625,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "570ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={849.5417} y={57.25} width={31} height={200.75} fill="var(--color-velocity)" radius="15.5" d={"M 849.5417,72.75\n            A 15.5,15.5,0,0,1,865.0417,57.25\n            L 865.0417,57.25\n            A 15.5,15.5,0,0,1,880.5417,72.75\n            L 880.5417,242.5\n            A 15.5,15.5,0,0,1,865.0417,258\n            L 865.0417,258\n            A 15.5,15.5,0,0,1,849.5417,242.5 Z"}></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g className="velocity-bar" style={{animationDelay: "615ms"}}>
                                      <path className="duration-150 ease-out recharts-rectangle transition-opacity" x={927.4583} y={190.25} width={31} height={67.75} fill="var(--color-slow)" radius="15.5" d={"M 927.4583,205.75\n            A 15.5,15.5,0,0,1,942.9583,190.25\n            L 942.9583,190.25\n            A 15.5,15.5,0,0,1,958.4583,205.75\n            L 958.4583,242.5\n            A 15.5,15.5,0,0,1,942.9583,258\n            L 942.9583,258\n            A 15.5,15.5,0,0,1,927.4583,242.5 Z"}></path>
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
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={85.95833333333334} y={274} textAnchor="middle" fill="#666">
                                <tspan x={85.95833333333334} dy="0.71em">
                                  {"Electronics"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={163.875} y={274} textAnchor="middle" fill="#666">
                                <tspan x={163.875} dy="0.71em">
                                  {"Apparel"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={241.79166666666669} y={274} textAnchor="middle" fill="#666">
                                <tspan x={241.79166666666669} dy="0.71em">
                                  {"Home"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={319.7083333333333} y={274} textAnchor="middle" fill="#666">
                                <tspan x={319.7083333333333} dy="0.71em">
                                  {"Beauty"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={397.625} y={274} textAnchor="middle" fill="#666">
                                <tspan x={397.625} dy="0.71em">
                                  {"Health"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={475.5416666666667} y={274} textAnchor="middle" fill="#666">
                                <tspan x={475.5416666666667} dy="0.71em">
                                  {"Sports"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={553.4583333333334} y={274} textAnchor="middle" fill="#666">
                                <tspan x={553.4583333333334} dy="0.71em">
                                  {"Toys"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={631.3750000000001} y={274} textAnchor="middle" fill="#666">
                                <tspan x={631.3750000000001} dy="0.71em">
                                  {"Automotive"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={709.2916666666667} y={274} textAnchor="middle" fill="#666">
                                <tspan x={709.2916666666667} dy="0.71em">
                                  {"Garden"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={787.2083333333334} y={274} textAnchor="middle" fill="#666">
                                <tspan x={787.2083333333334} dy="0.71em">
                                  {"Grocery"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={865.1250000000001} y={274} textAnchor="middle" fill="#666">
                                <tspan x={865.1250000000001} dy="0.71em">
                                  {"Books"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={935} stroke="none" x={943.0416666666667} y={274} textAnchor="middle" fill="#666">
                                <tspan x={943.0416666666667} dy="0.71em">
                                  {"Office"}
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={47} orientation="left" height={250} stroke="none" x={33} y={258} textAnchor="end" fill="#666">
                                <tspan x={33} dy="0.355em">
                                  {"0"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={47} orientation="left" height={250} stroke="none" x={33} y={195.5} textAnchor="end" fill="#666">
                                <tspan x={33} dy="0.355em">
                                  {"250"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={47} orientation="left" height={250} stroke="none" x={33} y={133} textAnchor="end" fill="#666">
                                <tspan x={33} dy="0.355em">
                                  {"500"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={47} orientation="left" height={250} stroke="none" x={33} y={70.5} textAnchor="end" fill="#666">
                                <tspan x={33} dy="0.355em">
                                  {"750"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width={47} orientation="left" height={250} stroke="none" x={33} y={9} textAnchor="end" fill="#666">
                                <tspan x={33} dy="0.355em">
                                  {"1,000"}
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
              {"Electronics: 342 units a day, 52 days of supply, slow stock"}
            </li>
            <li>
              {"Apparel: 876 units a day, 18 days of supply"}
            </li>
            <li>
              {"Home: 512 units a day, 27 days of supply"}
            </li>
            <li>
              {"Beauty: 629 units a day, 22 days of supply"}
            </li>
            <li>
              {"Health: 458 units a day, 31 days of supply, watch stock"}
            </li>
            <li>
              {"Sports: 781 units a day, 20 days of supply"}
            </li>
            <li>
              {"Toys: 394 units a day, 43 days of supply, watch stock"}
            </li>
            <li>
              {"Automotive: 925 units a day, 16 days of supply"}
            </li>
            <li>
              {"Garden: 647 units a day, 24 days of supply"}
            </li>
            <li>
              {"Grocery: 532 units a day, 12 days of supply"}
            </li>
            <li>
              {"Books: 803 units a day, 19 days of supply"}
            </li>
            <li>
              {"Office: 271 units a day, 57 days of supply, slow stock"}
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-muted-foreground text-xs">
          <span className="flex gap-2 h-4 items-center">
            <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic]">
              {"Synced 12 min ago"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
              {"3 of 3 warehouses"}
            </span>
          </span>
          <span className="flex h-4 items-center tabular-nums">
            <span className="[text-box:trim-both_cap_alphabetic]">
              {"Sep 12 to Oct 11"}
            </span>
          </span>
        </footer>
      </Frame>
    </div>
  )
}
