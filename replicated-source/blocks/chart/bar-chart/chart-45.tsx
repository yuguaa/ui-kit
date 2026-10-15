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

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-3xl min-w-0 w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              {"Sync Activity"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Harbor Ops connections, last 24 hours"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Columns measure" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="default" spacing="0" extracted="1">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Runs"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="default" spacing="0">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Rows"}
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
              <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                <path d="m2 22 3-3"></path>
                <path d="M7.5 13.5 10 11"></path>
                <path d="M10.5 16.5 13 14"></path>
                <path d="m18 3-4 4h6l-4 4"></path>
              </svg>
              <span className="@max-md:sr-only [text-box:trim-both_cap_alphabetic]">
                {"Sources"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] font-normal tabular-nums text-muted-foreground">
                {"4/4"}
              </span>
              <svg className="lucide lucide-chevron-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <ButtonGroup role="group" aria-label="Chart actions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-disabled="false" aria-label="Refresh runs" aria-busy="false" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_d_" baseUiTooltipTrigger="" aria-expanded="false">
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
          <dl className="@2xl:grid-cols-4 grid grid-cols-2">
            <div className="@2xl:not-first:border-s @2xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-3 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="flex h-5 items-center text-muted-foreground text-sm">
                <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                  {"Runs"}
                </span>
              </dt>
              <dd className="flex flex-col gap-3 min-w-0">
                <span className="flex h-7 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                    {"727"}
                  </span>
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                    {"31 an hour on average"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-3 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="flex h-5 items-center text-muted-foreground text-sm">
                <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                  {"Landed"}
                </span>
              </dt>
              <dd className="flex flex-col gap-3 min-w-0">
                <span className="flex h-7 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                    {"99.0%"}
                  </span>
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                    {"720 of 727, 6 slow"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-3 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="flex h-5 items-center text-muted-foreground text-sm">
                <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                  {"Failed"}
                </span>
              </dt>
              <dd className="flex flex-col gap-3 min-w-0">
                <span className="flex h-7 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                    {"7"}
                  </span>
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                  <span className="flex gap-1.5 items-center min-w-0 text-foreground">
                    <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis whitespace-nowrap">
                      {"risk-feature-store"}
                    </span>
                  </span>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 inline-flex items-center justify-center min-w-5 outline-none px-1.25 py-0.5 relative shrink-0 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow w-fit whitespace-nowrap" tabIndex={0} aria-label="1 more failing connection" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"+1"}
                    </span>
                  </TooltipTrigger>
                  </Tooltip>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:nth-[n+3]:border-t-0 even:border-s flex flex-col gap-3 min-w-0 nth-[n+3]:border-t px-(--frame-panel-px) py-(--frame-panel-py)">
              <dt className="flex h-5 items-center text-muted-foreground text-sm">
                <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                  {"Rows Synced"}
                </span>
              </dt>
              <dd className="flex flex-col gap-3 min-w-0">
                <span className="flex h-7 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                    {"8.1M"}
                  </span>
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                  <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                    {"Peak 1.4M at 18:00"}
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </FramePanel>
        <FramePanel>
          <div className="flex flex-col gap-4">
            <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c45-rise { from { transform: scaleY(0); } }\n@keyframes c45-fade { from { opacity: 0; } }\n[data-c45-motion=\"rise\"] { animation: c45-rise 400ms cubic-bezier(0.23, 1, 0.32, 1) backwards; }\n[data-c45-motion=\"fade\"] { animation: c45-fade 200ms cubic-bezier(0.23, 1, 0.32, 1) backwards; }\n@media (prefers-reduced-motion: reduce) {\n  [data-c45-motion] { animation-name: c45-fade; animation-duration: 200ms; }\n}\nhtml[data-demo=\"frozen\"] [data-c45-motion] { animation: none; }\n" }} />
            <ul className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-end text-muted-foreground text-xs">
              <li className="flex gap-1.5 h-4 items-center">
                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Succeeded"}
                </span>
              </li>
              <li className="flex gap-1.5 h-4 items-center">
                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Slow"}
                </span>
              </li>
              <li className="flex gap-1.5 h-4 items-center">
                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Failed"}
                </span>
              </li>
            </ul>
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-auto cn-chart flex h-60 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-ring/50 justify-center min-w-0 ring-offset-card text-xs w-full" data-chart="chart-_r_j_" role="group" aria-label="Runs per hour by outcome, last 24 hours">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_j_] {\n  --color-succeeded: var(--success);\n  --color-partial: var(--warning);\n  --color-failed: var(--destructive);\n  --color-rows: var(--info);\n}\n\n\n.dark [data-chart=chart-_r_j_] {\n  --color-succeeded: var(--success);\n  --color-partial: var(--warning);\n  --color-failed: var(--destructive);\n  --color-rows: var(--info);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width={726} height={240} style={{position: "relative", cursor: "default", width: "726px", height: "240px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex={0} width={726} height={240} viewBox="0 0 726 240" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_-50" tabIndex={-1}>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={35.8} y={8} width={17} height={206} radius="6" d={"M 35.8,14\n            A 6,6,0,0,1,41.8,8\n            L 46.8,8\n            A 6,6,0,0,1,52.8,14\n            L 52.8,208\n            A 6,6,0,0,1,46.8,214\n            L 41.8,214\n            A 6,6,0,0,1,35.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={35.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 35.8,14\n            A 6,6,0,0,1,41.8,8\n            L 46.8,8\n            A 6,6,0,0,1,52.8,14\n            L 52.8,208\n            A 6,6,0,0,1,46.8,214\n            L 41.8,214\n            A 6,6,0,0,1,35.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={64.8} y={8} width={17} height={206} radius="6" d={"M 64.8,14\n            A 6,6,0,0,1,70.8,8\n            L 75.8,8\n            A 6,6,0,0,1,81.8,14\n            L 81.8,208\n            A 6,6,0,0,1,75.8,214\n            L 70.8,214\n            A 6,6,0,0,1,64.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={64.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 64.8,14\n            A 6,6,0,0,1,70.8,8\n            L 75.8,8\n            A 6,6,0,0,1,81.8,14\n            L 81.8,208\n            A 6,6,0,0,1,75.8,214\n            L 70.8,214\n            A 6,6,0,0,1,64.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={93.8} y={8} width={17} height={206} radius="6" d={"M 93.8,14\n            A 6,6,0,0,1,99.8,8\n            L 104.8,8\n            A 6,6,0,0,1,110.8,14\n            L 110.8,208\n            A 6,6,0,0,1,104.8,214\n            L 99.8,214\n            A 6,6,0,0,1,93.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={93.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 93.8,14\n            A 6,6,0,0,1,99.8,8\n            L 104.8,8\n            A 6,6,0,0,1,110.8,14\n            L 110.8,208\n            A 6,6,0,0,1,104.8,214\n            L 99.8,214\n            A 6,6,0,0,1,93.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={122.8} y={8} width={17} height={206} radius="6" d={"M 122.8,14\n            A 6,6,0,0,1,128.8,8\n            L 133.8,8\n            A 6,6,0,0,1,139.8,14\n            L 139.8,208\n            A 6,6,0,0,1,133.8,214\n            L 128.8,214\n            A 6,6,0,0,1,122.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={122.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 122.8,14\n            A 6,6,0,0,1,128.8,8\n            L 133.8,8\n            A 6,6,0,0,1,139.8,14\n            L 139.8,208\n            A 6,6,0,0,1,133.8,214\n            L 128.8,214\n            A 6,6,0,0,1,122.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={151.8} y={8} width={17} height={206} radius="6" d={"M 151.8,14\n            A 6,6,0,0,1,157.8,8\n            L 162.8,8\n            A 6,6,0,0,1,168.8,14\n            L 168.8,208\n            A 6,6,0,0,1,162.8,214\n            L 157.8,214\n            A 6,6,0,0,1,151.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={151.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 151.8,14\n            A 6,6,0,0,1,157.8,8\n            L 162.8,8\n            A 6,6,0,0,1,168.8,14\n            L 168.8,208\n            A 6,6,0,0,1,162.8,214\n            L 157.8,214\n            A 6,6,0,0,1,151.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={180.8} y={8} width={17} height={206} radius="6" d={"M 180.8,14\n            A 6,6,0,0,1,186.8,8\n            L 191.8,8\n            A 6,6,0,0,1,197.8,14\n            L 197.8,208\n            A 6,6,0,0,1,191.8,214\n            L 186.8,214\n            A 6,6,0,0,1,180.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={180.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 180.8,14\n            A 6,6,0,0,1,186.8,8\n            L 191.8,8\n            A 6,6,0,0,1,197.8,14\n            L 197.8,208\n            A 6,6,0,0,1,191.8,214\n            L 186.8,214\n            A 6,6,0,0,1,180.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={209.8} y={8} width={17} height={206} radius="6" d={"M 209.8,14\n            A 6,6,0,0,1,215.8,8\n            L 220.8,8\n            A 6,6,0,0,1,226.8,14\n            L 226.8,208\n            A 6,6,0,0,1,220.8,214\n            L 215.8,214\n            A 6,6,0,0,1,209.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={209.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 209.8,14\n            A 6,6,0,0,1,215.8,8\n            L 220.8,8\n            A 6,6,0,0,1,226.8,14\n            L 226.8,208\n            A 6,6,0,0,1,220.8,214\n            L 215.8,214\n            A 6,6,0,0,1,209.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={238.8} y={8} width={17} height={206} radius="6" d={"M 238.8,14\n            A 6,6,0,0,1,244.8,8\n            L 249.8,8\n            A 6,6,0,0,1,255.8,14\n            L 255.8,208\n            A 6,6,0,0,1,249.8,214\n            L 244.8,214\n            A 6,6,0,0,1,238.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={238.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 238.8,14\n            A 6,6,0,0,1,244.8,8\n            L 249.8,8\n            A 6,6,0,0,1,255.8,14\n            L 255.8,208\n            A 6,6,0,0,1,249.8,214\n            L 244.8,214\n            A 6,6,0,0,1,238.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={267.8} y={8} width={17} height={206} radius="6" d={"M 267.8,14\n            A 6,6,0,0,1,273.8,8\n            L 278.8,8\n            A 6,6,0,0,1,284.8,14\n            L 284.8,208\n            A 6,6,0,0,1,278.8,214\n            L 273.8,214\n            A 6,6,0,0,1,267.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={267.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 267.8,14\n            A 6,6,0,0,1,273.8,8\n            L 278.8,8\n            A 6,6,0,0,1,284.8,14\n            L 284.8,208\n            A 6,6,0,0,1,278.8,214\n            L 273.8,214\n            A 6,6,0,0,1,267.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={296.8} y={8} width={17} height={206} radius="6" d={"M 296.8,14\n            A 6,6,0,0,1,302.8,8\n            L 307.8,8\n            A 6,6,0,0,1,313.8,14\n            L 313.8,208\n            A 6,6,0,0,1,307.8,214\n            L 302.8,214\n            A 6,6,0,0,1,296.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={296.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 296.8,14\n            A 6,6,0,0,1,302.8,8\n            L 307.8,8\n            A 6,6,0,0,1,313.8,14\n            L 313.8,208\n            A 6,6,0,0,1,307.8,214\n            L 302.8,214\n            A 6,6,0,0,1,296.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={325.8} y={8} width={17} height={206} radius="6" d={"M 325.8,14\n            A 6,6,0,0,1,331.8,8\n            L 336.8,8\n            A 6,6,0,0,1,342.8,14\n            L 342.8,208\n            A 6,6,0,0,1,336.8,214\n            L 331.8,214\n            A 6,6,0,0,1,325.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={325.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 325.8,14\n            A 6,6,0,0,1,331.8,8\n            L 336.8,8\n            A 6,6,0,0,1,342.8,14\n            L 342.8,208\n            A 6,6,0,0,1,336.8,214\n            L 331.8,214\n            A 6,6,0,0,1,325.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={354.8} y={8} width={17} height={206} radius="6" d={"M 354.8,14\n            A 6,6,0,0,1,360.8,8\n            L 365.8,8\n            A 6,6,0,0,1,371.8,14\n            L 371.8,208\n            A 6,6,0,0,1,365.8,214\n            L 360.8,214\n            A 6,6,0,0,1,354.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={354.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 354.8,14\n            A 6,6,0,0,1,360.8,8\n            L 365.8,8\n            A 6,6,0,0,1,371.8,14\n            L 371.8,208\n            A 6,6,0,0,1,365.8,214\n            L 360.8,214\n            A 6,6,0,0,1,354.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={383.8} y={8} width={17} height={206} radius="6" d={"M 383.8,14\n            A 6,6,0,0,1,389.8,8\n            L 394.8,8\n            A 6,6,0,0,1,400.8,14\n            L 400.8,208\n            A 6,6,0,0,1,394.8,214\n            L 389.8,214\n            A 6,6,0,0,1,383.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={383.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 383.8,14\n            A 6,6,0,0,1,389.8,8\n            L 394.8,8\n            A 6,6,0,0,1,400.8,14\n            L 400.8,208\n            A 6,6,0,0,1,394.8,214\n            L 389.8,214\n            A 6,6,0,0,1,383.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={412.8} y={8} width={17} height={206} radius="6" d={"M 412.8,14\n            A 6,6,0,0,1,418.8,8\n            L 423.8,8\n            A 6,6,0,0,1,429.8,14\n            L 429.8,208\n            A 6,6,0,0,1,423.8,214\n            L 418.8,214\n            A 6,6,0,0,1,412.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={412.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 412.8,14\n            A 6,6,0,0,1,418.8,8\n            L 423.8,8\n            A 6,6,0,0,1,429.8,14\n            L 429.8,208\n            A 6,6,0,0,1,423.8,214\n            L 418.8,214\n            A 6,6,0,0,1,412.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={441.8} y={8} width={17} height={206} radius="6" d={"M 441.8,14\n            A 6,6,0,0,1,447.8,8\n            L 452.8,8\n            A 6,6,0,0,1,458.8,14\n            L 458.8,208\n            A 6,6,0,0,1,452.8,214\n            L 447.8,214\n            A 6,6,0,0,1,441.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={441.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 441.8,14\n            A 6,6,0,0,1,447.8,8\n            L 452.8,8\n            A 6,6,0,0,1,458.8,14\n            L 458.8,208\n            A 6,6,0,0,1,452.8,214\n            L 447.8,214\n            A 6,6,0,0,1,441.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={470.8} y={8} width={17} height={206} radius="6" d={"M 470.8,14\n            A 6,6,0,0,1,476.8,8\n            L 481.8,8\n            A 6,6,0,0,1,487.8,14\n            L 487.8,208\n            A 6,6,0,0,1,481.8,214\n            L 476.8,214\n            A 6,6,0,0,1,470.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={470.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 470.8,14\n            A 6,6,0,0,1,476.8,8\n            L 481.8,8\n            A 6,6,0,0,1,487.8,14\n            L 487.8,208\n            A 6,6,0,0,1,481.8,214\n            L 476.8,214\n            A 6,6,0,0,1,470.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={499.8} y={8} width={17} height={206} radius="6" d={"M 499.8,14\n            A 6,6,0,0,1,505.8,8\n            L 510.8,8\n            A 6,6,0,0,1,516.8,14\n            L 516.8,208\n            A 6,6,0,0,1,510.8,214\n            L 505.8,214\n            A 6,6,0,0,1,499.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={499.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 499.8,14\n            A 6,6,0,0,1,505.8,8\n            L 510.8,8\n            A 6,6,0,0,1,516.8,14\n            L 516.8,208\n            A 6,6,0,0,1,510.8,214\n            L 505.8,214\n            A 6,6,0,0,1,499.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={528.8} y={8} width={17} height={206} radius="6" d={"M 528.8,14\n            A 6,6,0,0,1,534.8,8\n            L 539.8,8\n            A 6,6,0,0,1,545.8,14\n            L 545.8,208\n            A 6,6,0,0,1,539.8,214\n            L 534.8,214\n            A 6,6,0,0,1,528.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={528.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 528.8,14\n            A 6,6,0,0,1,534.8,8\n            L 539.8,8\n            A 6,6,0,0,1,545.8,14\n            L 545.8,208\n            A 6,6,0,0,1,539.8,214\n            L 534.8,214\n            A 6,6,0,0,1,528.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={557.8} y={8} width={17} height={206} radius="6" d={"M 557.8,14\n            A 6,6,0,0,1,563.8,8\n            L 568.8,8\n            A 6,6,0,0,1,574.8,14\n            L 574.8,208\n            A 6,6,0,0,1,568.8,214\n            L 563.8,214\n            A 6,6,0,0,1,557.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={557.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 557.8,14\n            A 6,6,0,0,1,563.8,8\n            L 568.8,8\n            A 6,6,0,0,1,574.8,14\n            L 574.8,208\n            A 6,6,0,0,1,568.8,214\n            L 563.8,214\n            A 6,6,0,0,1,557.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={586.8} y={8} width={17} height={206} radius="6" d={"M 586.8,14\n            A 6,6,0,0,1,592.8,8\n            L 597.8,8\n            A 6,6,0,0,1,603.8,14\n            L 603.8,208\n            A 6,6,0,0,1,597.8,214\n            L 592.8,214\n            A 6,6,0,0,1,586.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={586.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 586.8,14\n            A 6,6,0,0,1,592.8,8\n            L 597.8,8\n            A 6,6,0,0,1,603.8,14\n            L 603.8,208\n            A 6,6,0,0,1,597.8,214\n            L 592.8,214\n            A 6,6,0,0,1,586.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={615.8} y={8} width={17} height={206} radius="6" d={"M 615.8,14\n            A 6,6,0,0,1,621.8,8\n            L 626.8,8\n            A 6,6,0,0,1,632.8,14\n            L 632.8,208\n            A 6,6,0,0,1,626.8,214\n            L 621.8,214\n            A 6,6,0,0,1,615.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={615.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 615.8,14\n            A 6,6,0,0,1,621.8,8\n            L 626.8,8\n            A 6,6,0,0,1,632.8,14\n            L 632.8,208\n            A 6,6,0,0,1,626.8,214\n            L 621.8,214\n            A 6,6,0,0,1,615.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={644.8} y={8} width={17} height={206} radius="6" d={"M 644.8,14\n            A 6,6,0,0,1,650.8,8\n            L 655.8,8\n            A 6,6,0,0,1,661.8,14\n            L 661.8,208\n            A 6,6,0,0,1,655.8,214\n            L 650.8,214\n            A 6,6,0,0,1,644.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={644.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 644.8,14\n            A 6,6,0,0,1,650.8,8\n            L 655.8,8\n            A 6,6,0,0,1,661.8,14\n            L 661.8,208\n            A 6,6,0,0,1,655.8,214\n            L 650.8,214\n            A 6,6,0,0,1,644.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={673.8} y={8} width={17} height={206} radius="6" d={"M 673.8,14\n            A 6,6,0,0,1,679.8,8\n            L 684.8,8\n            A 6,6,0,0,1,690.8,14\n            L 690.8,208\n            A 6,6,0,0,1,684.8,214\n            L 679.8,214\n            A 6,6,0,0,1,673.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={673.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 673.8,14\n            A 6,6,0,0,1,679.8,8\n            L 684.8,8\n            A 6,6,0,0,1,690.8,14\n            L 690.8,208\n            A 6,6,0,0,1,684.8,214\n            L 679.8,214\n            A 6,6,0,0,1,673.8,208 Z"}></path>
                          </g>
                        </g>
                        <g className="recharts-inactive-bar recharts-layer">
                          <g>
                            <path className="duration-150 fill-muted recharts-rectangle transition-[fill]" x={702.8} y={8} width={17} height={206} radius="6" d={"M 702.8,14\n            A 6,6,0,0,1,708.8,8\n            L 713.8,8\n            A 6,6,0,0,1,719.8,14\n            L 719.8,208\n            A 6,6,0,0,1,713.8,214\n            L 708.8,214\n            A 6,6,0,0,1,702.8,208 Z"}></path>
                            <path className="recharts-rectangle" x={702.8} y={8} width={17} height={206} fill="url(#ri-lines)" radius="6" d={"M 702.8,14\n            A 6,6,0,0,1,708.8,8\n            L 713.8,8\n            A 6,6,0,0,1,719.8,14\n            L 719.8,208\n            A 6,6,0,0,1,713.8,214\n            L 708.8,214\n            A 6,6,0,0,1,702.8,208 Z"}></path>
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x={30} y={8} height={206} width={696}></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <pattern id="ri-lines" width={4} height={4} patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                          <rect className="fill-muted-foreground/25" width={0.75} height={4}></rect>
                        </pattern>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_k_">
                          <g className="recharts-bar-rectangles recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={35.8} y={38.9} width={17} height={175.1} fill="var(--color-succeeded)" radius="4" d={"M 35.8,42.9\n            A 4,4,0,0,1,39.8,38.9\n            L 48.8,38.9\n            A 4,4,0,0,1,52.8,42.9\n            L 52.8,210\n            A 4,4,0,0,1,48.8,214\n            L 39.8,214\n            A 4,4,0,0,1,35.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={64.8} y={38.9} width={17} height={175.1} fill="var(--color-succeeded)" radius="4" d={"M 64.8,42.9\n            A 4,4,0,0,1,68.8,38.9\n            L 77.8,38.9\n            A 4,4,0,0,1,81.8,42.9\n            L 81.8,210\n            A 4,4,0,0,1,77.8,214\n            L 68.8,214\n            A 4,4,0,0,1,64.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={93.8} y={38.9} width={17} height={175.1} fill="var(--color-succeeded)" radius="4" d={"M 93.8,42.9\n            A 4,4,0,0,1,97.8,38.9\n            L 106.8,38.9\n            A 4,4,0,0,1,110.8,42.9\n            L 110.8,210\n            A 4,4,0,0,1,106.8,214\n            L 97.8,214\n            A 4,4,0,0,1,93.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={122.8} y={33.75} width={17} height={180.25} fill="var(--color-succeeded)" radius="4" d={"M 122.8,37.75\n            A 4,4,0,0,1,126.8,33.75\n            L 135.8,33.75\n            A 4,4,0,0,1,139.8,37.75\n            L 139.8,210\n            A 4,4,0,0,1,135.8,214\n            L 126.8,214\n            A 4,4,0,0,1,122.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={151.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 151.8,63.5\n            A 4,4,0,0,1,155.8,59.5\n            L 164.8,59.5\n            A 4,4,0,0,1,168.8,63.5\n            L 168.8,210\n            A 4,4,0,0,1,164.8,214\n            L 155.8,214\n            A 4,4,0,0,1,151.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={180.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 180.8,63.5\n            A 4,4,0,0,1,184.8,59.5\n            L 193.8,59.5\n            A 4,4,0,0,1,197.8,63.5\n            L 197.8,210\n            A 4,4,0,0,1,193.8,214\n            L 184.8,214\n            A 4,4,0,0,1,180.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={209.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 209.8,63.5\n            A 4,4,0,0,1,213.8,59.5\n            L 222.8,59.5\n            A 4,4,0,0,1,226.8,63.5\n            L 226.8,210\n            A 4,4,0,0,1,222.8,214\n            L 213.8,214\n            A 4,4,0,0,1,209.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={238.8} y={65.65} width={17} height={148.35} fill="var(--color-succeeded)" radius="4" d={"M 238.8,69.65\n            A 4,4,0,0,1,242.8,65.65\n            L 251.8,65.65\n            A 4,4,0,0,1,255.8,69.65\n            L 255.8,210\n            A 4,4,0,0,1,251.8,214\n            L 242.8,214\n            A 4,4,0,0,1,238.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={267.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 267.8,63.5\n            A 4,4,0,0,1,271.8,59.5\n            L 280.8,59.5\n            A 4,4,0,0,1,284.8,63.5\n            L 284.8,210\n            A 4,4,0,0,1,280.8,214\n            L 271.8,214\n            A 4,4,0,0,1,267.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={296.8} y={54.35} width={17} height={159.65} fill="var(--color-succeeded)" radius="4" d={"M 296.8,58.35\n            A 4,4,0,0,1,300.8,54.35\n            L 309.8,54.35\n            A 4,4,0,0,1,313.8,58.35\n            L 313.8,210\n            A 4,4,0,0,1,309.8,214\n            L 300.8,214\n            A 4,4,0,0,1,296.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={325.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 325.8,63.5\n            A 4,4,0,0,1,329.8,59.5\n            L 338.8,59.5\n            A 4,4,0,0,1,342.8,63.5\n            L 342.8,210\n            A 4,4,0,0,1,338.8,214\n            L 329.8,214\n            A 4,4,0,0,1,325.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={354.8} y={75.95} width={17} height={138.05} fill="var(--color-succeeded)" radius="4" d={"M 354.8,79.95\n            A 4,4,0,0,1,358.8,75.95\n            L 367.8,75.95\n            A 4,4,0,0,1,371.8,79.95\n            L 371.8,210\n            A 4,4,0,0,1,367.8,214\n            L 358.8,214\n            A 4,4,0,0,1,354.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={383.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 383.8,63.5\n            A 4,4,0,0,1,387.8,59.5\n            L 396.8,59.5\n            A 4,4,0,0,1,400.8,63.5\n            L 400.8,210\n            A 4,4,0,0,1,396.8,214\n            L 387.8,214\n            A 4,4,0,0,1,383.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={412.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 412.8,63.5\n            A 4,4,0,0,1,416.8,59.5\n            L 425.8,59.5\n            A 4,4,0,0,1,429.8,63.5\n            L 429.8,210\n            A 4,4,0,0,1,425.8,214\n            L 416.8,214\n            A 4,4,0,0,1,412.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={441.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 441.8,63.5\n            A 4,4,0,0,1,445.8,59.5\n            L 454.8,59.5\n            A 4,4,0,0,1,458.8,63.5\n            L 458.8,210\n            A 4,4,0,0,1,454.8,214\n            L 445.8,214\n            A 4,4,0,0,1,441.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={470.8} y={60.5} width={17} height={153.5} fill="var(--color-succeeded)" radius="4" d={"M 470.8,64.5\n            A 4,4,0,0,1,474.8,60.5\n            L 483.8,60.5\n            A 4,4,0,0,1,487.8,64.5\n            L 487.8,210\n            A 4,4,0,0,1,483.8,214\n            L 474.8,214\n            A 4,4,0,0,1,470.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={499.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 499.8,63.5\n            A 4,4,0,0,1,503.8,59.5\n            L 512.8,59.5\n            A 4,4,0,0,1,516.8,63.5\n            L 516.8,210\n            A 4,4,0,0,1,512.8,214\n            L 503.8,214\n            A 4,4,0,0,1,499.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={528.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 528.8,63.5\n            A 4,4,0,0,1,532.8,59.5\n            L 541.8,59.5\n            A 4,4,0,0,1,545.8,63.5\n            L 545.8,210\n            A 4,4,0,0,1,541.8,214\n            L 532.8,214\n            A 4,4,0,0,1,528.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={557.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 557.8,63.5\n            A 4,4,0,0,1,561.8,59.5\n            L 570.8,59.5\n            A 4,4,0,0,1,574.8,63.5\n            L 574.8,210\n            A 4,4,0,0,1,570.8,214\n            L 561.8,214\n            A 4,4,0,0,1,557.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={586.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 586.8,63.5\n            A 4,4,0,0,1,590.8,59.5\n            L 599.8,59.5\n            A 4,4,0,0,1,603.8,63.5\n            L 603.8,210\n            A 4,4,0,0,1,599.8,214\n            L 590.8,214\n            A 4,4,0,0,1,586.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={615.8} y={59.5} width={17} height={154.5} fill="var(--color-succeeded)" radius="4" d={"M 615.8,63.5\n            A 4,4,0,0,1,619.8,59.5\n            L 628.8,59.5\n            A 4,4,0,0,1,632.8,63.5\n            L 632.8,210\n            A 4,4,0,0,1,628.8,214\n            L 619.8,214\n            A 4,4,0,0,1,615.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={644.8} y={60.5} width={17} height={153.5} fill="var(--color-succeeded)" radius="4" d={"M 644.8,64.5\n            A 4,4,0,0,1,648.8,60.5\n            L 657.8,60.5\n            A 4,4,0,0,1,661.8,64.5\n            L 661.8,210\n            A 4,4,0,0,1,657.8,214\n            L 648.8,214\n            A 4,4,0,0,1,644.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={673.8} y={81.1} width={17} height={132.9} fill="var(--color-succeeded)" radius="4" d={"M 673.8,85.1\n            A 4,4,0,0,1,677.8,81.1\n            L 686.8,81.1\n            A 4,4,0,0,1,690.8,85.1\n            L 690.8,210\n            A 4,4,0,0,1,686.8,214\n            L 677.8,214\n            A 4,4,0,0,1,673.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={702.8} y={142.9} width={17} height={71.1} fill="var(--color-succeeded)" radius="4" d={"M 702.8,146.9\n            A 4,4,0,0,1,706.8,142.9\n            L 715.8,142.9\n            A 4,4,0,0,1,719.8,146.9\n            L 719.8,210\n            A 4,4,0,0,1,715.8,214\n            L 706.8,214\n            A 4,4,0,0,1,702.8,210 Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_l_">
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
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={354.8} y={54.35} width={17} height={19.6} fill="var(--color-partial)" radius="4" d={"M 354.8,58.35\n            A 4,4,0,0,1,358.8,54.35\n            L 367.8,54.35\n            A 4,4,0,0,1,371.8,58.35\n            L 371.8,69.95\n            A 4,4,0,0,1,367.8,73.95\n            L 358.8,73.95\n            A 4,4,0,0,1,354.8,69.95 Z"}></path>
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
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={470.8} y={54.35} width={17} height={4.15} fill="var(--color-partial)" radius="4" d={"M 470.8,56.425\n            A 2.075,2.075,0,0,1,472.875,54.35\n            L 485.725,54.35\n            A 2.075,2.075,0,0,1,487.8,56.425\n            L 487.8,56.425\n            A 2.075,2.075,0,0,1,485.725,58.5\n            L 472.875,58.5\n            A 2.075,2.075,0,0,1,470.8,56.425 Z"}></path>
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
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={644.8} y={54.35} width={17} height={4.15} fill="var(--color-partial)" radius="4" d={"M 644.8,56.425\n            A 2.075,2.075,0,0,1,646.875,54.35\n            L 659.725,54.35\n            A 2.075,2.075,0,0,1,661.8,56.425\n            L 661.8,56.425\n            A 2.075,2.075,0,0,1,659.725,58.5\n            L 646.875,58.5\n            A 2.075,2.075,0,0,1,644.8,56.425 Z"}></path>
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
                            </g>
                          </g>
                        </g>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_m_">
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
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={238.8} y={59.5} width={17} height={4.15} fill="var(--color-failed)" radius="4" d={"M 238.8,61.575\n            A 2.075,2.075,0,0,1,240.875,59.5\n            L 253.725,59.5\n            A 2.075,2.075,0,0,1,255.8,61.575\n            L 255.8,61.575\n            A 2.075,2.075,0,0,1,253.725,63.65\n            L 240.875,63.65\n            A 2.075,2.075,0,0,1,238.8,61.575 Z"}></path>
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
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={673.8} y={59.5} width={17} height={19.6} fill="var(--color-failed)" radius="4" d={"M 673.8,63.5\n            A 4,4,0,0,1,677.8,59.5\n            L 686.8,59.5\n            A 4,4,0,0,1,690.8,63.5\n            L 690.8,75.1\n            A 4,4,0,0,1,686.8,79.1\n            L 677.8,79.1\n            A 4,4,0,0,1,673.8,75.1 Z"}></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 ease-out motion-reduce:transition-none transition-opacity" style={{transformBox: "view-box", transformOrigin: "0px 214px"}}>
                                    <path className="recharts-rectangle" x={702.8} y={131.6} width={17} height={9.3} fill="var(--color-failed)" radius="4" d={"M 702.8,135.6\n            A 4,4,0,0,1,706.8,131.6\n            L 715.8,131.6\n            A 4,4,0,0,1,719.8,135.6\n            L 719.8,136.9\n            A 4,4,0,0,1,715.8,140.9\n            L 706.8,140.9\n            A 4,4,0,0,1,702.8,136.9 Z"}></path>
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
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={26} orientation="bottom" width={696} stroke="none" x={131.5} y={228} textAnchor="middle" fill="#666">
                              <tspan x={131.5} dy="0.71em">
                                {"18:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={26} orientation="bottom" width={696} stroke="none" x={247.5} y={228} textAnchor="middle" fill="#666">
                              <tspan x={247.5} dy="0.71em">
                                {"22:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={26} orientation="bottom" width={696} stroke="none" x={363.5} y={228} textAnchor="middle" fill="#666">
                              <tspan x={363.5} dy="0.71em">
                                {"02:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={26} orientation="bottom" width={696} stroke="none" x={479.5} y={228} textAnchor="middle" fill="#666">
                              <tspan x={479.5} dy="0.71em">
                                {"06:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={26} orientation="bottom" width={696} stroke="none" x={595.5} y={228} textAnchor="middle" fill="#666">
                              <tspan x={595.5} dy="0.71em">
                                {"10:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={26} orientation="bottom" width={696} stroke="none" x={711.5} y={228} textAnchor="middle" fill="#666">
                              <tspan x={711.5} dy="0.71em">
                                {"Now"}
                              </tspan>
                            </text>
                          </g>
                        </g>
                        <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={30} orientation="left" height={206} stroke="none" x={20} y={214} textAnchor="end" fill="#666">
                              <tspan x={20} dy="0.355em">
                                {"0"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={30} orientation="left" height={206} stroke="none" x={20} y={162.5} textAnchor="end" fill="#666">
                              <tspan x={20} dy="0.355em">
                                {"10"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={30} orientation="left" height={206} stroke="none" x={20} y={111} textAnchor="end" fill="#666">
                              <tspan x={20} dy="0.355em">
                                {"20"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={30} orientation="left" height={206} stroke="none" x={20} y={59.5} textAnchor="end" fill="#666">
                              <tspan x={20} dy="0.355em">
                                {"30"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width={30} orientation="left" height={206} stroke="none" x={20} y={9} textAnchor="end" fill="#666">
                              <tspan x={20} dy="0.355em">
                                {"40"}
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
          <ul className="sr-only">
            <li>
              {"15:00 to 16:00 UTC: 34 runs, 0 failed, 231.7K rows"}
            </li>
            <li>
              {"16:00 to 17:00 UTC: 34 runs, 0 failed, 238.4K rows"}
            </li>
            <li>
              {"17:00 to 18:00 UTC: 34 runs, 0 failed, 227K rows"}
            </li>
            <li>
              {"18:00 to 19:00 UTC: 35 runs, 0 failed, 1.4M rows"}
            </li>
            <li>
              {"19:00 to 20:00 UTC: 30 runs, 0 failed, 200.7K rows"}
            </li>
            <li>
              {"20:00 to 21:00 UTC: 30 runs, 0 failed, 205.7K rows"}
            </li>
            <li>
              {"21:00 to 22:00 UTC: 30 runs, 0 failed, 240.1K rows"}
            </li>
            <li>
              {"22:00 to 23:00 UTC: 30 runs, 1 failed, 188.1K rows"}
            </li>
            <li>
              {"23:00 to 00:00 UTC: 30 runs, 0 failed, 224.1K rows"}
            </li>
            <li>
              {"00:00 to 01:00 UTC: 31 runs, 0 failed, 1.1M rows"}
            </li>
            <li>
              {"01:00 to 02:00 UTC: 30 runs, 0 failed, 209.3K rows"}
            </li>
            <li>
              {"02:00 to 03:00 UTC: 31 runs, 0 failed, 226.3K rows"}
            </li>
            <li>
              {"03:00 to 04:00 UTC: 30 runs, 0 failed, 223.3K rows"}
            </li>
            <li>
              {"04:00 to 05:00 UTC: 30 runs, 0 failed, 205.2K rows"}
            </li>
            <li>
              {"05:00 to 06:00 UTC: 30 runs, 0 failed, 206.3K rows"}
            </li>
            <li>
              {"06:00 to 07:00 UTC: 31 runs, 0 failed, 770.7K rows"}
            </li>
            <li>
              {"07:00 to 08:00 UTC: 30 runs, 0 failed, 224.7K rows"}
            </li>
            <li>
              {"08:00 to 09:00 UTC: 30 runs, 0 failed, 214.7K rows"}
            </li>
            <li>
              {"09:00 to 10:00 UTC: 30 runs, 0 failed, 205.7K rows"}
            </li>
            <li>
              {"10:00 to 11:00 UTC: 30 runs, 0 failed, 210K rows"}
            </li>
            <li>
              {"11:00 to 12:00 UTC: 30 runs, 0 failed, 204.3K rows"}
            </li>
            <li>
              {"12:00 to 13:00 UTC: 31 runs, 0 failed, 760.4K rows"}
            </li>
            <li>
              {"13:00 to 14:00 UTC: 30 runs, 4 failed, 135.3K rows"}
            </li>
            <li>
              {"14:00 to 14:20 UTC: 16 runs, 2 failed, 68.9K rows"}
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-muted-foreground text-xs">
          <span className="flex gap-2 h-4 items-center">
            <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic]">
              {"Synced 2 min ago"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
              {"12 of 13 connections active"}
            </span>
          </span>
          <span className="flex h-4 items-center">
            <span className="[text-box:trim-both_cap_alphabetic]">
              {"Times in UTC"}
            </span>
          </span>
        </footer>
      </Frame>
    </div>
  )
}
