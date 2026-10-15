import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-6xl w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between min-w-0 px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex font-semibold gap-2 items-center text-sm">
              {"Error Budget Runway"}
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                <span className="flex relative size-1.5" aria-hidden="true">
                  <span className="absolute animate-ping bg-success inset-0 motion-reduce:animate-none opacity-60 rounded-full"></span>
                  <span className="bg-success relative rounded-full size-1.5"></span>
                </span>
                {"Live"}
              </Badge>
            </div>
            <div className="text-muted-foreground text-sm">
              {"Days until each service breaks its 30-day SLO"}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Runway at" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="sm" spacing="0" extracted="1">
                {"Current"}
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0">
                {"Baseline"}
              </ToggleGroupItem>
            </ToggleGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Runway options" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <FramePanel>
          <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c50-settle { from { transform: translateY(3px); opacity: 0.35; } }\n.c50-settle { animation: c50-settle 420ms cubic-bezier(0.22, 1, 0.36, 1); }\n@media (prefers-reduced-motion: reduce) { .c50-settle { animation: none; } }\nhtml[data-demo=\"frozen\"] .c50-settle { animation: none; }\n" }} />
          <div className="@3xl:grid-cols-4 gap-x-6 gap-y-5 grid grid-cols-2">
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 flex flex-col gap-2 min-w-0">
              <div className="flex gap-2 items-center justify-between min-h-5">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"At Risk"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  {"Steady"}
                </Badge>
              </div>
              <div className="flex gap-1 items-baseline">
                <span className="c50-settle font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"5"}
                </span>
                <span className="tabular-nums text-muted-foreground text-sm">
                  {"/ 14"}
                </span>
              </div>
              <div className="flex gap-1.5 h-5 items-center min-w-0 overflow-hidden tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                {"3 watch"}
                <span className="bg-success ms-1.5 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                {"6 healthy"}
              </div>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 flex flex-col gap-2 min-w-0">
              <div className="flex gap-2 items-center justify-between min-h-5">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Runs Out First"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                  {"-0.1d"}
                </Badge>
              </div>
              <div className="flex gap-1 items-baseline">
                <span className="c50-settle font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"1.9d"}
                </span>
              </div>
              <div className="flex gap-1.5 h-5 items-center min-w-0 overflow-hidden tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                <span className="font-mono text-foreground truncate">
                  {"billing-api"}
                </span>
                <span className="shrink-0">
                  {"at 3.6×"}
                </span>
              </div>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 flex flex-col gap-2 min-w-0">
              <div className="flex gap-2 items-center justify-between min-h-5">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Traffic at Risk"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  {"Steady"}
                </Badge>
              </div>
              <div className="flex gap-1 items-baseline">
                <span className="c50-settle font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"54%"}
                </span>
              </div>
              <div className="flex gap-1.5 h-5 items-center min-w-0 overflow-hidden tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                {"of 1,456M req/day"}
              </div>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 flex flex-col gap-2 min-w-0">
              <div className="flex gap-2 items-center justify-between min-h-5">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Budget Left"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  {"Steady"}
                </Badge>
              </div>
              <div className="flex gap-1 items-baseline">
                <span className="c50-settle font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"52%"}
                </span>
              </div>
              <div className="flex gap-1.5 h-5 items-center min-w-0 overflow-hidden tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                <div className="h-1.5 overflow-hidden relative rounded-full w-full">
                  <svg className="absolute inset-0 size-full text-muted-foreground/25" aria-hidden="true">
                    <defs>
                      <pattern id="r7-hatch" width={4} height={4} patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                        <line x1={0} y1={0} x2={0} y2={4} stroke="currentColor" strokeWidth={1.5}></line>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#r7-hatch)"></rect>
                  </svg>
                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-1.5 relative w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="51.52815934065935" aria-valuetext="52%" role="progressbar" aria-label="Traffic weighted error budget left">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "51.5282%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      {"x"}
                    </span>
                  </Progress>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
        <FramePanel className="min-w-0">
          <div className="overflow-x-auto">
            <div className="min-w-3xl">
              <div className="flex gap-4 items-center justify-between text-muted-foreground text-xs">
                <span className="text-end w-36">
                  {"Service, by traffic"}
                </span>
                <span className="flex gap-3 items-center">
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                    {"Critical"}
                  </span>
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                    {"Watch"}
                  </span>
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                    {"Healthy"}
                  </span>
                </span>
                <span className="w-40">
                  {"Runway, current burn"}
                </span>
              </div>
              <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c50-bead {\n  0% { offset-distance: 0%; opacity: 0; }\n  12%, 88% { opacity: 1; }\n  100% { offset-distance: 100%; opacity: 0; }\n}\n.c50-bead { offset-rotate: 0deg; animation: c50-bead var(--c50-dur) linear var(--c50-delay) infinite; }\n@media (prefers-reduced-motion: reduce) { .c50-bead { display: none; } }\nhtml[data-demo=\"frozen\"] .c50-bead { display: none; }\n" }} />
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-118 justify-center text-xs w-full" data-chart="chart-_r_9_" role="img" aria-label="Error budget runway for 14 services: traffic order on the left, runway order on the right">
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={1118} height={472} style={{position: "relative", cursor: "default", width: "1118px", height: "472px"}}>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={1118} height={472} viewBox="0 0 1118 472" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x={156} y={4} height={464} width={778}></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-auth-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--success)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,53.7143 L202.68,53.7143 C545,53.7143 545,352 887.32,352 L934,352" fill="none" strokeWidth={6.053398058252427} stroke="url(#r8-auth-trail)" strokeOpacity={0.35} strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M156,53.7143 L202.68,53.7143 C545,53.7143 545,352 887.32,352 L934,352" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-search-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--warning)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--warning)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--warning)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,120 L202.68,120 C545,120 545,252.5714 887.32,252.5714 L934,252.5714" fill="none" strokeWidth={3.725728155339806} stroke="url(#r8-search-trail)" strokeOpacity={0.9} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-warning pointer-events-none" cx={0} cy={0} r={3.362864077669903} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 120 L 202.68 120 C 545 120 545 252.571 887.32 252.571 L 934 252.571\")", "--c50-dur": "7.6s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-warning pointer-events-none" cx={0} cy={0} r={3.362864077669903} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 120 L 202.68 120 C 545 120 545 252.571 887.32 252.571 L 934 252.571\")", "--c50-dur": "7.6s", "--c50-delay": "-3.8s"}}></circle>
                                <path className="cursor-pointer" d="M156,120 L202.68,120 C545,120 545,252.5714 887.32,252.5714 L934,252.5714" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-ingest-worker-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--success)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,186.2857 L202.68,186.2857 C545,186.2857 545,385.1429 887.32,385.1429 L934,385.1429" fill="none" strokeWidth={3.1310679611650487} stroke="url(#r8-ingest-worker-trail)" strokeOpacity={0.35} strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M156,186.2857 L202.68,186.2857 C545,186.2857 545,385.1429 887.32,385.1429 L934,385.1429" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-notifications-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--success)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,252.5714 L202.68,252.5714 C545,252.5714 545,418.2857 887.32,418.2857 L934,418.2857" fill="none" strokeWidth={2.5364077669902914} stroke="url(#r8-notifications-trail)" strokeOpacity={0.35} strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M156,252.5714 L202.68,252.5714 C545,252.5714 545,418.2857 887.32,418.2857 L934,418.2857" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-file-storage-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--success)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,285.7143 L202.68,285.7143 C545,285.7143 545,285.7143 887.32,285.7143 L934,285.7143" fill="none" strokeWidth={2.2985436893203883} stroke="url(#r8-file-storage-trail)" strokeOpacity={0.35} strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M156,285.7143 L202.68,285.7143 C545,285.7143 545,285.7143 887.32,285.7143 L934,285.7143" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-reports-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--success)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,318.8571 L202.68,318.8571 C545,318.8571 545,318.8571 887.32,318.8571 L934,318.8571" fill="none" strokeWidth={2.0606796116504853} stroke="url(#r8-reports-trail)" strokeOpacity={0.35} strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M156,318.8571 L202.68,318.8571 C545,318.8571 545,318.8571 887.32,318.8571 L934,318.8571" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-audit-log-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--success)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,451.4286 L202.68,451.4286 C545,451.4286 545,451.4286 887.32,451.4286 L934,451.4286" fill="none" strokeWidth={1.5679611650485437} stroke="url(#r8-audit-log-trail)" strokeOpacity={0.35} strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M156,451.4286 L202.68,451.4286 C545,451.4286 545,451.4286 887.32,451.4286 L934,451.4286" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-webhooks-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--destructive)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--destructive)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,153.1429 L202.68,153.1429 C545,153.1429 545,153.1429 887.32,153.1429 L934,153.1429" fill="none" strokeWidth={3.5048543689320386} stroke="url(#r8-webhooks-trail)" strokeOpacity={1} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={3.2524271844660193} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 153.143 L 202.68 153.143 C 545 153.143 545 153.143 887.32 153.143 L 934 153.143\")", "--c50-dur": "5.2s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={3.2524271844660193} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 153.143 L 202.68 153.143 C 545 153.143 545 153.143 887.32 153.143 L 934 153.143\")", "--c50-dur": "5.2s", "--c50-delay": "-1.7333333333333334s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={3.2524271844660193} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 153.143 L 202.68 153.143 C 545 153.143 545 153.143 887.32 153.143 L 934 153.143\")", "--c50-dur": "5.2s", "--c50-delay": "-3.466666666666667s"}}></circle>
                                <path className="cursor-pointer" d="M156,153.1429 L202.68,153.1429 C545,153.1429 545,153.1429 887.32,153.1429 L934,153.1429" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-ledger-sync-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--warning)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--warning)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--warning)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,385.1429 L202.68,385.1429 C545,385.1429 545,219.4286 887.32,219.4286 L934,219.4286" fill="none" strokeWidth={1.737864077669903} stroke="url(#r8-ledger-sync-trail)" strokeOpacity={0.9} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-warning pointer-events-none" cx={0} cy={0} r={2.3689320388349513} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 385.143 L 202.68 385.143 C 545 385.143 545 219.429 887.32 219.429 L 934 219.429\")", "--c50-dur": "7.6s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-warning pointer-events-none" cx={0} cy={0} r={2.3689320388349513} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 385.143 L 202.68 385.143 C 545 385.143 545 219.429 887.32 219.429 L 934 219.429\")", "--c50-dur": "7.6s", "--c50-delay": "-3.8s"}}></circle>
                                <path className="cursor-pointer" d="M156,385.1429 L202.68,385.1429 C545,385.1429 545,219.4286 887.32,219.4286 L934,219.4286" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-sync-engine-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--warning)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--warning)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--warning)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,418.2857 L202.68,418.2857 C545,418.2857 545,186.2857 887.32,186.2857 L934,186.2857" fill="none" strokeWidth={1.6529126213592233} stroke="url(#r8-sync-engine-trail)" strokeOpacity={0.9} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-warning pointer-events-none" cx={0} cy={0} r={2.3264563106796117} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 418.286 L 202.68 418.286 C 545 418.286 545 186.286 887.32 186.286 L 934 186.286\")", "--c50-dur": "7.6s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-warning pointer-events-none" cx={0} cy={0} r={2.3264563106796117} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 418.286 L 202.68 418.286 C 545 418.286 545 186.286 887.32 186.286 L 934 186.286\")", "--c50-dur": "7.6s", "--c50-delay": "-3.8s"}}></circle>
                                <path className="cursor-pointer" d="M156,418.2857 L202.68,418.2857 C545,418.2857 545,186.2857 887.32,186.2857 L934,186.2857" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-api-gateway-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--destructive)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--destructive)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,20.5714 L202.68,20.5714 C545,20.5714 545,120 887.32,120 L934,120" fill="none" strokeWidth={8.5} stroke="url(#r8-api-gateway-trail)" strokeOpacity={1} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={4} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 20.5714 L 202.68 20.5714 C 545 20.5714 545 120 887.32 120 L 934 120\")", "--c50-dur": "5.2s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={4} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 20.5714 L 202.68 20.5714 C 545 20.5714 545 120 887.32 120 L 934 120\")", "--c50-dur": "5.2s", "--c50-delay": "-1.7333333333333334s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={4} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 20.5714 L 202.68 20.5714 C 545 20.5714 545 120 887.32 120 L 934 120\")", "--c50-dur": "5.2s", "--c50-delay": "-3.466666666666667s"}}></circle>
                                <path className="cursor-pointer" d="M156,20.5714 L202.68,20.5714 C545,20.5714 545,120 887.32,120 L934,120" fill="none" stroke="transparent" strokeWidth={18.5}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-billing-api-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--destructive)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--destructive)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,86.8571 L202.68,86.8571 C545,86.8571 545,20.5714 887.32,20.5714 L934,20.5714" fill="none" strokeWidth={4.116504854368932} stroke="url(#r8-billing-api-trail)" strokeOpacity={1} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={3.558252427184466} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 86.8571 L 202.68 86.8571 C 545 86.8571 545 20.5714 887.32 20.5714 L 934 20.5714\")", "--c50-dur": "5.2s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={3.558252427184466} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 86.8571 L 202.68 86.8571 C 545 86.8571 545 20.5714 887.32 20.5714 L 934 20.5714\")", "--c50-dur": "5.2s", "--c50-delay": "-1.7333333333333334s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={3.558252427184466} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 86.8571 L 202.68 86.8571 C 545 86.8571 545 20.5714 887.32 20.5714 L 934 20.5714\")", "--c50-dur": "5.2s", "--c50-delay": "-3.466666666666667s"}}></circle>
                                <path className="cursor-pointer" d="M156,86.8571 L202.68,86.8571 C545,86.8571 545,20.5714 887.32,20.5714 L934,20.5714" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-realtime-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--destructive)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--destructive)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,219.4286 L202.68,219.4286 C545,219.4286 545,86.8571 887.32,86.8571 L934,86.8571" fill="none" strokeWidth={2.9951456310679614} stroke="url(#r8-realtime-trail)" strokeOpacity={1} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={2.9975728155339807} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 219.429 L 202.68 219.429 C 545 219.429 545 86.8571 887.32 86.8571 L 934 86.8571\")", "--c50-dur": "5.2s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={2.9975728155339807} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 219.429 L 202.68 219.429 C 545 219.429 545 86.8571 887.32 86.8571 L 934 86.8571\")", "--c50-dur": "5.2s", "--c50-delay": "-1.7333333333333334s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={2.9975728155339807} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 219.429 L 202.68 219.429 C 545 219.429 545 86.8571 887.32 86.8571 L 934 86.8571\")", "--c50-dur": "5.2s", "--c50-delay": "-3.466666666666667s"}}></circle>
                                <path className="cursor-pointer" d="M156,219.4286 L202.68,219.4286 C545,219.4286 545,86.8571 887.32,86.8571 L934,86.8571" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r8-exports-trail" gradientUnits="userSpaceOnUse" x1={156} x2={934} y1={0} y2={0}>
                                    <stop offset="0%" stopColor="var(--destructive)" stopOpacity={0.3}></stop>
                                    <stop offset="55%" stopColor="var(--destructive)" stopOpacity={0.7}></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M156,352 L202.68,352 C545,352 545,53.7143 887.32,53.7143 L934,53.7143" fill="none" strokeWidth={1.8567961165048543} stroke="url(#r8-exports-trail)" strokeOpacity={1} strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={2.4283980582524274} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 352 L 202.68 352 C 545 352 545 53.7143 887.32 53.7143 L 934 53.7143\")", "--c50-dur": "5.2s", "--c50-delay": "0s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={2.4283980582524274} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 352 L 202.68 352 C 545 352 545 53.7143 887.32 53.7143 L 934 53.7143\")", "--c50-dur": "5.2s", "--c50-delay": "-1.7333333333333334s"}}></circle>
                                <circle className="c50-bead fill-destructive pointer-events-none" cx={0} cy={0} r={2.4283980582524274} stroke="var(--background)" strokeWidth={1.5} style={{offsetPath: "path(\"M 156 352 L 202.68 352 C 545 352 545 53.7143 887.32 53.7143 L 934 53.7143\")", "--c50-dur": "5.2s", "--c50-delay": "-3.466666666666667s"}}></circle>
                                <path className="cursor-pointer" d="M156,352 L202.68,352 C545,352 545,53.7143 887.32,53.7143 L934,53.7143" fill="none" stroke="transparent" strokeWidth={18}></path>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={37.7143} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={53.7143} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"auth"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"268M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={336} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={352} dominantBaseline="central">
                                {"24d"}
                              </text>
                              <rect className="fill-muted" x={988} y={349} width={96} height={6} rx={3}></rect>
                              <rect className="fill-success" x={988} y={349} width={76} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-success" x={988} y={349} width={76} height={6} rx={3} fillOpacity={0.4}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={170.2857} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={186.2857} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"ingest-worker"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"96M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={369.1429} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={385.1429} dominantBaseline="central">
                                {"27d"}
                              </text>
                              <rect className="fill-muted" x={988} y={382.1429} width={96} height={6} rx={3}></rect>
                              <rect className="fill-success" x={988} y={382.1429} width={96} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-success" x={988} y={382.1429} width={86} height={6} rx={3} fillOpacity={0.4}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={236.5714} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={252.5714} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"notifications"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"61M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={402.2857} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={418.2857} dominantBaseline="central">
                                {"30d+"}
                              </text>
                              <rect className="fill-muted" x={988} y={415.2857} width={96} height={6} rx={3}></rect>
                              <rect className="fill-success" x={988} y={415.2857} width={96} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-success" x={988} y={415.2857} width={96} height={6} rx={3} fillOpacity={0.4}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={269.7143} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={285.7143} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"file-storage"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"47M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={269.7143} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={285.7143} dominantBaseline="central">
                                {"17d"}
                              </text>
                              <rect className="fill-muted" x={988} y={282.7143} width={96} height={6} rx={3}></rect>
                              <rect className="fill-success" x={988} y={282.7143} width={75} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-success" x={988} y={282.7143} width={54} height={6} rx={3} fillOpacity={0.4}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={302.8571} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={318.8571} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"reports"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"33M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={302.8571} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={318.8571} dominantBaseline="central">
                                {"24d"}
                              </text>
                              <rect className="fill-muted" x={988} y={315.8571} width={96} height={6} rx={3}></rect>
                              <rect className="fill-success" x={988} y={315.8571} width={91} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-success" x={988} y={315.8571} width={75} height={6} rx={3} fillOpacity={0.4}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={435.4286} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={451.4286} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"audit-log"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"4M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={435.4286} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={451.4286} dominantBaseline="central">
                                {"30d+"}
                              </text>
                              <rect className="fill-muted" x={988} y={448.4286} width={96} height={6} rx={3}></rect>
                              <rect className="fill-success" x={988} y={448.4286} width={96} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-success" x={988} y={448.4286} width={96} height={6} rx={3} fillOpacity={0.4}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={104} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={120} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"search"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"131M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={236.5714} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={252.5714} dominantBaseline="central">
                                {"13d"}
                              </text>
                              <rect className="fill-muted" x={988} y={249.5714} width={96} height={6} rx={3}></rect>
                              <rect className="fill-warning" x={988} y={249.5714} width={77} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-warning" x={988} y={249.5714} width={43} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={369.1429} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={385.1429} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"ledger-sync"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"14M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={203.4286} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={219.4286} dominantBaseline="central">
                                {"8.1d"}
                              </text>
                              <rect className="fill-muted" x={988} y={216.4286} width={96} height={6} rx={3}></rect>
                              <rect className="fill-warning" x={988} y={216.4286} width={55} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-warning" x={988} y={216.4286} width={26} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={402.2857} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={418.2857} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"sync-engine"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"9M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={170.2857} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={186.2857} dominantBaseline="central">
                                {"8.1d"}
                              </text>
                              <rect className="fill-muted" x={988} y={183.2857} width={96} height={6} rx={3}></rect>
                              <rect className="fill-warning" x={988} y={183.2857} width={36} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-warning" x={988} y={183.2857} width={26} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={4.571400000000001} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={20.5714} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"api-gateway"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"412M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={104} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={120} dominantBaseline="central">
                                {"4.2d"}
                              </text>
                              <rect className="fill-muted" x={988} y={117} width={96} height={6} rx={3}></rect>
                              <rect className="fill-destructive" x={988} y={117} width={33} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-destructive" x={988} y={117} width={14} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={70.8571} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={86.8571} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"billing-api"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"154M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={4.571400000000001} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={20.5714} dominantBaseline="central">
                                {"1.9d"}
                              </text>
                              <rect className="fill-muted" x={988} y={17.5714} width={96} height={6} rx={3}></rect>
                              <rect className="fill-destructive" x={988} y={17.5714} width={15} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-destructive" x={988} y={17.5714} width={6} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={137.1429} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={153.1429} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"webhooks"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"118M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={137.1429} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={153.1429} dominantBaseline="central">
                                {"7.0d"}
                              </text>
                              <rect className="fill-muted" x={988} y={150.1429} width={96} height={6} rx={3}></rect>
                              <rect className="fill-destructive" x={988} y={150.1429} width={38} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-destructive" x={988} y={150.1429} width={22} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={203.4286} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={219.4286} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"realtime"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"88M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={70.8571} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={86.8571} dominantBaseline="central">
                                {"3.4d"}
                              </text>
                              <rect className="fill-muted" x={988} y={83.8571} width={96} height={6} rx={3}></rect>
                              <rect className="fill-destructive" x={988} y={83.8571} width={28} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-destructive" x={988} y={83.8571} width={11} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={0} y={336} width={156} height={32} fill="transparent"></rect>
                              <text className="text-xs" x={146} y={352} textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground font-mono">
                                  {"exports"}
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums" dx="6">
                                  {"21M"}
                                </tspan>
                              </text>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x={934} y={37.7143} width={184} height={32} fill="transparent"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x={944} y={53.7143} dominantBaseline="central">
                                {"3.2d"}
                              </text>
                              <rect className="fill-muted" x={988} y={50.7143} width={96} height={6} rx={3}></rect>
                              <rect className="fill-destructive" x={988} y={50.7143} width={19} height={6} rx={3} fillOpacity={0.25}></rect>
                              <rect className="fill-destructive" x={988} y={50.7143} width={10} height={6} rx={3} fillOpacity={1}></rect>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
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
              {"api-gateway, Critical: 4.2d of error budget left at current burn, 10d at baseline"}
            </li>
            <li>
              {"auth, Healthy: 24d of error budget left at current burn, 24d at baseline"}
            </li>
            <li>
              {"billing-api, Critical: 1.9d of error budget left at current burn, 4.7d at baseline"}
            </li>
            <li>
              {"search, Watch: 13d of error budget left at current burn, 24d at baseline"}
            </li>
            <li>
              {"webhooks, Critical: 7.0d of error budget left at current burn, 12d at baseline"}
            </li>
            <li>
              {"ingest-worker, Healthy: 27d of error budget left at current burn, 30d+ at baseline"}
            </li>
            <li>
              {"realtime, Critical: 3.4d of error budget left at current burn, 8.7d at baseline"}
            </li>
            <li>
              {"notifications, Healthy: 30d+ of error budget left at current burn, 30d+ at baseline"}
            </li>
            <li>
              {"file-storage, Healthy: 17d of error budget left at current burn, 24d at baseline"}
            </li>
            <li>
              {"reports, Healthy: 24d of error budget left at current burn, 29d at baseline"}
            </li>
            <li>
              {"exports, Critical: 3.2d of error budget left at current burn, 6.0d at baseline"}
            </li>
            <li>
              {"ledger-sync, Watch: 8.1d of error budget left at current burn, 17d at baseline"}
            </li>
            <li>
              {"sync-engine, Watch: 8.1d of error budget left at current burn, 11d at baseline"}
            </li>
            <li>
              {"audit-log, Healthy: 30d+ of error budget left at current burn, 30d+ at baseline"}
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-row gap-4 items-center justify-between min-w-0 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <div className="flex gap-2 items-center min-w-0">
            <span className="font-medium font-mono text-foreground text-xs truncate">
              {"billing-api"}
            </span>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
              <span className="gap-1.5 inline-flex items-center">
                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                {"Critical"}
              </span>
            </Badge>
          </div>
          <div className="flex gap-4 items-center shrink-0 tabular-nums text-muted-foreground text-xs">
            <span className="@2xl:inline hidden">
              {"Payments"}
            </span>
            <span className="@xl:inline hidden">
              {"Burning"}
              <span className="font-medium text-foreground">
                {"3.6×"}
              </span>
            </span>
            <span>
              {"Out in"}
              <span className="font-medium text-foreground">
                {"1.9d"}
              </span>
            </span>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
