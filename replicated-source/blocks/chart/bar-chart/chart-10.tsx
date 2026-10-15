import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
      <Card className="@container/volume [--volume-accent:var(--color-violet-600)] dark:[--volume-accent:var(--color-violet-400)] max-w-5xl min-w-0 w-full" size="default">
        <CardHeader>
          <CardTitle>
            {"Training Volume"}
          </CardTitle>
          <CardDescription className="col-start-1">
            <span className="flex gap-1.5 h-5 items-center">
              <span className="font-medium gap-1 inline-flex items-center tabular-nums text-success">
                <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span className="sr-only">
                  {"Up"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"13.9%"}
                </span>
              </span>
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"vs last block"}
              </span>
            </span>
          </CardDescription>
          <CardAction className="@2xl/card-header:col-start-2 @2xl/card-header:justify-self-end @2xl/card-header:mt-0 @2xl/card-header:row-span-2 @2xl/card-header:row-start-1 col-start-1 justify-self-start mt-2 row-span-1 row-start-3">
            <div className="flex flex-wrap gap-2 items-center">
              <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Metric" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0" extracted="1">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Time"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Distance"}
                  </span>
                </ToggleGroupItem>
              </ToggleGroup>
              <ButtonGroup role="group" aria-label="Chart settings">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Display options" aria-haspopup="menu" id="base-ui-_r_15_" baseUiTooltipTrigger="" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Compare against" aria-haspopup="menu" id="base-ui-_r_1c_" baseUiTooltipTrigger="" aria-expanded="false">
                  <svg className="lucide lucide-scale" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ScaleIcon" tabler="IconScale" hugeicons="JusticeScale01Icon" phosphor="ScalesIcon" remixicon="RiScales3Line" aria-hidden="true">
                    <path d="M12 3v18"></path>
                    <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                    <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M7 21h10"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </ButtonGroup>
              <ButtonGroup role="group" aria-label="Chart actions">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Refresh data" aria-busy="false" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chart" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="m21 3-7 7"></path>
                    <path d="m3 21 7-7"></path>
                    <path d="M9 21H3v-6"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_1n_" baseUiTooltipTrigger="" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </ButtonGroup>
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mb-2 mt-1">
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 items-center justify-between text-xs" aria-live="polite">
              <span className="flex gap-2 h-5 items-center min-w-0">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <defs>
                    <pattern id="swatch-r1q" width="6" height="6" patternUnits="userSpaceOnUse" patterntransform="scale(0.75)">
                      <rect width="6" height="6" fill="var(--volume-accent)"></rect>
                      <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--card)" strokeOpacity="0.38" strokeWidth="1"></path>
                    </pattern>
                  </defs>
                  <rect width="12" height="12" rx="2.5" fill="url(#swatch-r1q)"></rect>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic] font-medium text-foreground">
                  {"Week 12"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                  {"Sep 22 to 28"}
                </span>
              </span>
              <span className="flex gap-2.5 h-5 items-center">
                <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-foreground text-sm">
                  {"4h 19m"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-destructive">
                  {"-3.4%"}
                  <span className="font-normal text-muted-foreground">
                    {"vs last block"}
                  </span>
                </span>
              </span>
            </div>
            <div className="@xl/volume:h-72 [&_.recharts-cartesian-grid-horizontal]:duration-300 [&_.recharts-cartesian-grid-horizontal]:transition-opacity [&_g]:outline-hidden [-webkit-tap-highlight-color:transparent] data-[grid=off]:[&_.recharts-cartesian-grid-horizontal]:opacity-0 group/plot h-64 has-[.recharts-surface:focus-visible]:outline-2 motion-reduce:[&_*]:transition-none outline-offset-4 outline-ring/50 w-full" data-compare="prior" data-grid="on" data-intro="off">
              <style dangerouslySetInnerHTML={{ __html: "\n@keyframes volume-march {\n  from { transform: translateY(0); }\n  to { transform: translateY(-6px); }\n}\n.volume-march { animation: volume-march 1.4s linear infinite; }\nhtml[data-demo=\"frozen\"] .volume-march { animation: none; }\n@media (prefers-reduced-motion: reduce) {\n  .volume-march { animation: none; }\n}\n" }} />
              <ChartContainer>
              <div className="@xl/volume:h-72 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-64 justify-center text-xs w-full" data-chart="chart-_r_1v_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_1v_] {\n  --color-volume: var(--volume-accent);\n  --color-prior: var(--muted-foreground);\n  --color-plan: var(--foreground);\n}\n\n\n.dark [data-chart=chart-_r_1v_] {\n  --color-volume: var(--volume-accent);\n  --color-prior: var(--muted-foreground);\n  --color-plan: var(--foreground);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="992" height="288" style={{position: "relative", cursor: "default", width: "992px", height: "288px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" aria-label="Weekly running time" role="application" tabIndex="0" width="992" height="288" viewBox="0 0 992 288" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc>
                          {"Each week of the block against its comparison; arrow keys move through the weeks."}
                        </desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line stroke="#ccc" fill="none" x="48" y="12" width="940" height="246" x1="48" y1="258" x2="988" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="48" y="12" width="940" height="246" x1="48" y1="176.00000000000003" x2="988" y2="176.00000000000003"></line>
                              <line stroke="#ccc" fill="none" x="48" y="12" width="940" height="246" x1="48" y1="94.00000000000001" x2="988" y2="94.00000000000001"></line>
                              <line stroke="#ccc" fill="none" x="48" y="12" width="940" height="246" x1="48" y1="12" x2="988" y2="12"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="48" y="12" height="246" width="940"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="r1u-diagonal-accent" width="6" height="6" patternUnits="userSpaceOnUse">
                            <rect width="6" height="6" fill="var(--volume-accent)"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--card)" strokeOpacity="0.38" strokeWidth="1"></path>
                          </pattern>
                          <pattern id="r1u-diagonal-muted" width="6" height="6" patternUnits="userSpaceOnUse">
                            <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 12%, var(--card))"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1"></path>
                          </pattern>
                          <pattern id="r1u-dots-accent" width="6" height="6" patternUnits="userSpaceOnUse">
                            <rect width="6" height="6" fill="var(--volume-accent)"></rect>
                            <circle cx="3" cy="3" r="1.2" fill="var(--card)" fillOpacity="0.48"></circle>
                          </pattern>
                          <pattern id="r1u-dots-muted" width="6" height="6" patternUnits="userSpaceOnUse">
                            <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 12%, var(--card))"></rect>
                            <circle cx="3" cy="3" r="1.2" fill="var(--muted-foreground)" fillOpacity="0.42000000000000004"></circle>
                          </pattern>
                          <pattern id="r1u-crosshatch-accent" width="6" height="6" patternUnits="userSpaceOnUse">
                            <rect width="6" height="6" fill="var(--volume-accent)"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5M-1 5 1 7M0 0 6 6M5-1 7 1" fill="none" stroke="var(--card)" strokeOpacity="0.38" strokeWidth="1"></path>
                          </pattern>
                          <pattern id="r1u-crosshatch-muted" width="6" height="6" patternUnits="userSpaceOnUse">
                            <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 12%, var(--card))"></rect>
                            <path d="M-1 1 1-1M0 6 6 0M5 7 7 5M-1 5 1 7M0 0 6 6M5-1 7 1" fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1"></path>
                          </pattern>
                          <pattern id="r1u-lanes" width="4" height="3" patternUnits="userSpaceOnUse">
                            <rect width="4" height="3" fill="color-mix(in oklab, var(--muted-foreground) 12%, var(--card))"></rect>
                            <rect width="4" height="1" fill="var(--muted-foreground)" fillOpacity="0.3"></rect>
                          </pattern>
                        </defs>
                        <defs>
                          <clippath id="r1u-floor">
                            <rect x="0" y="0" width="1036" height="258"></rect>
                          </clippath>
                        </defs>
                        <g className="text-border" data-track="" aria-hidden="true">
                          <line x1="48" x2="988" stroke="currentColor" y1="258.5" y2="258.5"></line>
                          <line x1="48" x2="988" stroke="currentColor" y1="262" y2="262" strokeDasharray="6 6"></line>
                          <line x1="48" x2="988" stroke="currentColor" y1="265.5" y2="265.5"></line>
                        </g>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1">
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_20_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="0">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M66.8,258V147.83333333333331A6,6 0 0 1 72.8,141.83333333333331H100.8A6,6 0 0 1 106.8,147.83333333333331V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-0" d="M66.8,258V121.86666666666666A6,6 0 0 1 72.8,115.86666666666666H100.8A6,6 0 0 1 106.8,121.86666666666666V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="1">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M145.13333333333333,258V138.26666666666668A6,6 0 0 1 151.13333333333333,132.26666666666668H179.13333333333333A6,6 0 0 1 185.13333333333333,138.26666666666668V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-1" d="M145.13333333333333,258V111.84444444444445A6,6 0 0 1 151.13333333333333,105.84444444444445H179.13333333333333A6,6 0 0 1 185.13333333333333,111.84444444444445V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="2">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M223.46666666666667,258V101.82222222222221A6,6 0 0 1 229.46666666666667,95.82222222222221H257.4666666666667A6,6 0 0 1 263.4666666666667,101.82222222222221V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-2" d="M223.46666666666667,258V103.64444444444446A6,6 0 0 1 229.46666666666667,97.64444444444446H257.4666666666667A6,6 0 0 1 263.4666666666667,103.64444444444446V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="3">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M301.8,258V156.48888888888888A6,6 0 0 1 307.8,150.48888888888888H335.8A6,6 0 0 1 341.8,156.48888888888888V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-3" d="M301.8,258V141.91111111111113A6,6 0 0 1 307.8,135.91111111111113H335.8A6,6 0 0 1 341.8,141.91111111111113V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="4">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M380.1333333333333,258V119.13333333333333A6,6 0 0 1 386.1333333333333,113.13333333333333H414.1333333333333A6,6 0 0 1 420.1333333333333,119.13333333333333V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-4" d="M380.1333333333333,258V88.15555555555557A6,6 0 0 1 386.1333333333333,82.15555555555557H414.1333333333333A6,6 0 0 1 420.1333333333333,88.15555555555557V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="5">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M458.46666666666664,258V94.98888888888887A6,6 0 0 1 464.46666666666664,88.98888888888887H492.46666666666664A6,6 0 0 1 498.46666666666664,94.98888888888887V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-5" d="M458.46666666666664,258V99.08888888888887A6,6 0 0 1 464.46666666666664,93.08888888888887H492.46666666666664A6,6 0 0 1 498.46666666666664,99.08888888888887V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="6">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M536.8,258V100.9111111111111A6,6 0 0 1 542.8,94.9111111111111H570.8A6,6 0 0 1 576.8,100.9111111111111V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-6" d="M536.8,258V63.10000000000001A6,6 0 0 1 542.8,57.10000000000001H570.8A6,6 0 0 1 576.8,63.10000000000001V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="7">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M615.1333333333332,258V135.98888888888888A6,6 0 0 1 621.1333333333332,129.98888888888888H649.1333333333332A6,6 0 0 1 655.1333333333332,135.98888888888888V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-7" d="M615.1333333333332,258V117.31111111111113A6,6 0 0 1 621.1333333333332,111.31111111111113H649.1333333333332A6,6 0 0 1 655.1333333333332,117.31111111111113V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="8">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M693.4666666666666,258V92.25555555555555A6,6 0 0 1 699.4666666666666,86.25555555555555H727.4666666666666A6,6 0 0 1 733.4666666666666,92.25555555555555V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-8" d="M693.4666666666666,258V55.35555555555554A6,6 0 0 1 699.4666666666666,49.35555555555554H727.4666666666666A6,6 0 0 1 733.4666666666666,55.35555555555554V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="9">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M771.8,258V86.33333333333334A6,6 0 0 1 777.8,80.33333333333334H805.8A6,6 0 0 1 811.8,86.33333333333334V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-9" d="M771.8,258V42.14444444444443A6,6 0 0 1 777.8,36.14444444444443H805.8A6,6 0 0 1 811.8,42.14444444444443V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="10">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M850.1333333333332,258V119.13333333333333A6,6 0 0 1 856.1333333333332,113.13333333333333H884.1333333333332A6,6 0 0 1 890.1333333333332,119.13333333333333V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-10" d="M850.1333333333332,258V104.10000000000002A6,6 0 0 1 856.1333333333332,98.10000000000002H884.1333333333332A6,6 0 0 1 890.1333333333332,104.10000000000002V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g clipPath="url(#r1u-floor)">
                                      <g data-bar-rise="11">
                                        <g className="duration-300 group-data-[compare=prior]/plot:opacity-100 opacity-0 transition-opacity">
                                          <path className="duration-300 ease-out transition-transform" d="M928.4666666666666,258V141.91111111111113A6,6 0 0 1 934.4666666666666,135.91111111111113H962.4666666666666A6,6 0 0 1 968.4666666666666,141.91111111111113V258Z" fill="url(#r1u-lanes)" opacity="0.6" style={{transform: "translateX(-10px)"}}></path>
                                        </g>
                                        <path id="r1u-shape-11" d="M928.4666666666666,258V146.01111111111112A6,6 0 0 1 934.4666666666666,140.01111111111112H962.4666666666666A6,6 0 0 1 968.4666666666666,146.01111111111112V258Z" fill="url(#r1u-diagonal-muted)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_320" tabIndex="-1">
                          <defs>
                            <clippath id="r1u-accent">
                              <use href="#r1u-shape-11"></use>
                            </clippath>
                          </defs>
                          <g className="pointer-events-none" clipPath="url(#r1u-floor)">
                            <g data-accent-rise="11">
                              <g clipPath="url(#r1u-accent)">
                                <rect x="48" y="12" width="940" height="252" fill="url(#r1u-diagonal-accent)"></rect>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_340" tabIndex="-1">
                          <defs>
                            <clippath id="r1u-bars">
                              <use href="#r1u-shape-0"></use>
                              <use href="#r1u-shape-1"></use>
                              <use href="#r1u-shape-2"></use>
                              <use href="#r1u-shape-3"></use>
                              <use href="#r1u-shape-4"></use>
                              <use href="#r1u-shape-5"></use>
                              <use href="#r1u-shape-6"></use>
                              <use href="#r1u-shape-7"></use>
                              <use href="#r1u-shape-8"></use>
                              <use href="#r1u-shape-9"></use>
                              <use href="#r1u-shape-10"></use>
                              <use href="#r1u-shape-11"></use>
                            </clippath>
                            <radialgradient id="r1u-glint">
                              <stop offset="0%" stopColor="color-mix(in oklab, var(--volume-accent), white 70%)" stopOpacity="0.55"></stop>
                              <stop offset="100%" stopColor="color-mix(in oklab, var(--volume-accent), white 70%)" stopOpacity="0"></stop>
                            </radialgradient>
                          </defs>
                          <g className="duration-300 group-data-[glint=on]/plot:opacity-100 group-data-[intro=on]/plot:invisible motion-reduce:hidden opacity-0 pointer-events-none transition-opacity" clipPath="url(#r1u-bars)">
                            <g>
                              <ellipse cx="0" cy="135" rx="56" ry="172.2" fill="url(#r1u-glint)"></ellipse>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_350" tabIndex="-1">
                          <g className="pointer-events-none" data-bar-tape="0">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <g transform="rotate(28 63.8 121.33333333333333)">
                                <line x1="63.8" x2="77.4" y1="121.33333333333333" y2="121.33333333333333" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="63.8" x2="77.4" y1="120.58333333333333" y2="120.58333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="63.8" x2="77.4" y1="122.08333333333333" y2="122.08333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                              <g transform="rotate(-28 109.8 121.33333333333333)">
                                <line x1="96.19999999999999" x2="109.8" y1="121.33333333333333" y2="121.33333333333333" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="96.19999999999999" x2="109.8" y1="120.58333333333333" y2="120.58333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="96.19999999999999" x2="109.8" y1="122.08333333333333" y2="122.08333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="1">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <g transform="rotate(28 142.13333333333333 107.66666666666664)">
                                <line x1="142.13333333333333" x2="155.73333333333332" y1="107.66666666666664" y2="107.66666666666664" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="142.13333333333333" x2="155.73333333333332" y1="106.91666666666664" y2="106.91666666666664" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="142.13333333333333" x2="155.73333333333332" y1="108.41666666666664" y2="108.41666666666664" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                              <g transform="rotate(-28 188.13333333333333 107.66666666666664)">
                                <line x1="174.53333333333333" x2="188.13333333333333" y1="107.66666666666664" y2="107.66666666666664" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="174.53333333333333" x2="188.13333333333333" y1="106.91666666666664" y2="106.91666666666664" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="174.53333333333333" x2="188.13333333333333" y1="108.41666666666664" y2="108.41666666666664" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="2">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <line x1="220.46666666666667" x2="266.4666666666667" y1="89.44444444444444" y2="89.44444444444444" stroke="var(--card)" strokeWidth="5"></line>
                              <line x1="220.46666666666667" x2="266.4666666666667" y1="88.69444444444444" y2="88.69444444444444" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                              <line x1="220.46666666666667" x2="266.4666666666667" y1="90.19444444444444" y2="90.19444444444444" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="3">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <line x1="298.8" x2="344.8" y1="130.44444444444443" y2="130.44444444444443" stroke="var(--card)" strokeWidth="5"></line>
                              <line x1="298.8" x2="344.8" y1="129.69444444444443" y2="129.69444444444443" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                              <line x1="298.8" x2="344.8" y1="131.19444444444443" y2="131.19444444444443" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="4">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <g transform="rotate(28 377.1333333333333 87.16666666666667)">
                                <line x1="377.1333333333333" x2="390.73333333333335" y1="87.16666666666667" y2="87.16666666666667" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="377.1333333333333" x2="390.73333333333335" y1="86.41666666666667" y2="86.41666666666667" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="377.1333333333333" x2="390.73333333333335" y1="87.91666666666667" y2="87.91666666666667" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                              <g transform="rotate(-28 423.1333333333333 87.16666666666667)">
                                <line x1="409.5333333333333" x2="423.1333333333333" y1="87.16666666666667" y2="87.16666666666667" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="409.5333333333333" x2="423.1333333333333" y1="86.41666666666667" y2="86.41666666666667" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="409.5333333333333" x2="423.1333333333333" y1="87.91666666666667" y2="87.91666666666667" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="5">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <line x1="455.46666666666664" x2="501.46666666666664" y1="73.5" y2="73.5" stroke="var(--card)" strokeWidth="5"></line>
                              <line x1="455.46666666666664" x2="501.46666666666664" y1="72.75" y2="72.75" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                              <line x1="455.46666666666664" x2="501.46666666666664" y1="74.25" y2="74.25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="6">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <g transform="rotate(28 533.8 59.83333333333333)">
                                <line x1="533.8" x2="547.4" y1="59.83333333333333" y2="59.83333333333333" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="533.8" x2="547.4" y1="59.08333333333333" y2="59.08333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="533.8" x2="547.4" y1="60.58333333333333" y2="60.58333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                              <g transform="rotate(-28 579.8 59.83333333333333)">
                                <line x1="566.1999999999999" x2="579.8" y1="59.83333333333333" y2="59.83333333333333" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="566.1999999999999" x2="579.8" y1="59.08333333333333" y2="59.08333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="566.1999999999999" x2="579.8" y1="60.58333333333333" y2="60.58333333333333" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="7">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <g transform="rotate(28 612.1333333333332 114.49999999999999)">
                                <line x1="612.1333333333332" x2="625.7333333333332" y1="114.49999999999999" y2="114.49999999999999" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="612.1333333333332" x2="625.7333333333332" y1="113.74999999999999" y2="113.74999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="612.1333333333332" x2="625.7333333333332" y1="115.24999999999999" y2="115.24999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                              <g transform="rotate(-28 658.1333333333332 114.49999999999999)">
                                <line x1="644.5333333333332" x2="658.1333333333332" y1="114.49999999999999" y2="114.49999999999999" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="644.5333333333332" x2="658.1333333333332" y1="113.74999999999999" y2="113.74999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="644.5333333333332" x2="658.1333333333332" y1="115.24999999999999" y2="115.24999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="8">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <g transform="rotate(28 690.4666666666666 52.99999999999999)">
                                <line x1="690.4666666666666" x2="704.0666666666666" y1="52.99999999999999" y2="52.99999999999999" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="690.4666666666666" x2="704.0666666666666" y1="52.24999999999999" y2="52.24999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="690.4666666666666" x2="704.0666666666666" y1="53.74999999999999" y2="53.74999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                              <g transform="rotate(-28 736.4666666666666 52.99999999999999)">
                                <line x1="722.8666666666666" x2="736.4666666666666" y1="52.99999999999999" y2="52.99999999999999" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="722.8666666666666" x2="736.4666666666666" y1="52.24999999999999" y2="52.24999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="722.8666666666666" x2="736.4666666666666" y1="53.74999999999999" y2="53.74999999999999" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="9">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <g transform="rotate(28 768.8 39.33333333333334)">
                                <line x1="768.8" x2="782.4" y1="39.33333333333334" y2="39.33333333333334" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="768.8" x2="782.4" y1="38.58333333333334" y2="38.58333333333334" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="768.8" x2="782.4" y1="40.08333333333334" y2="40.08333333333334" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                              <g transform="rotate(-28 814.8 39.33333333333334)">
                                <line x1="801.1999999999999" x2="814.8" y1="39.33333333333334" y2="39.33333333333334" stroke="var(--card)" strokeWidth="5"></line>
                                <line x1="801.1999999999999" x2="814.8" y1="38.58333333333334" y2="38.58333333333334" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                                <line x1="801.1999999999999" x2="814.8" y1="40.08333333333334" y2="40.08333333333334" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                              </g>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="10">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <line x1="847.1333333333332" x2="893.1333333333332" y1="87.16666666666667" y2="87.16666666666667" stroke="var(--card)" strokeWidth="5"></line>
                              <line x1="847.1333333333332" x2="893.1333333333332" y1="86.41666666666667" y2="86.41666666666667" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                              <line x1="847.1333333333332" x2="893.1333333333332" y1="87.91666666666667" y2="87.91666666666667" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                            </g>
                          </g>
                          <g className="pointer-events-none" data-bar-tape="11">
                            <g className="duration-300 group-data-[compare=plan]/plot:opacity-100 opacity-0 text-foreground transition-opacity">
                              <line x1="925.4666666666666" x2="971.4666666666666" y1="135" y2="135" stroke="var(--card)" strokeWidth="5"></line>
                              <line x1="925.4666666666666" x2="971.4666666666666" y1="134.25" y2="134.25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"></line>
                              <line x1="925.4666666666666" x2="971.4666666666666" y1="135.75" y2="135.75" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" strokeDashoffset="1.5"></line>
                            </g>
                          </g>
                        </g>
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
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="87.16666666666666" y="280" dy="0.71em" textAnchor="middle">
                                {"W1"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="165.5" y="280" dy="0.71em" textAnchor="middle">
                                {"W2"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="243.83333333333331" y="280" dy="0.71em" textAnchor="middle">
                                {"W3"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="322.1666666666667" y="280" dy="0.71em" textAnchor="middle">
                                {"W4"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="400.5" y="280" dy="0.71em" textAnchor="middle">
                                {"W5"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="478.8333333333333" y="280" dy="0.71em" textAnchor="middle">
                                {"W6"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="557.1666666666666" y="280" dy="0.71em" textAnchor="middle">
                                {"W7"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="635.4999999999999" y="280" dy="0.71em" textAnchor="middle">
                                {"W8"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="713.8333333333333" y="280" dy="0.71em" textAnchor="middle">
                                {"W9"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="792.1666666666666" y="280" dy="0.71em" textAnchor="middle">
                                {"W10"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="870.4999999999999" y="280" dy="0.71em" textAnchor="middle">
                                {"W11"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="948.8333333333333" y="280" dy="0.71em" textAnchor="middle">
                                {"W12"}
                              </text>
                            </g>
                          </g>
                          <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="48" orientation="left" height="246" stroke="none" x="34" y="258" textAnchor="end" fill="#666">
                                <tspan x="34" dy="0.355em">
                                  {"0h"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="48" orientation="left" height="246" stroke="none" x="34" y="176.00000000000003" textAnchor="end" fill="#666">
                                <tspan x="34" dy="0.355em">
                                  {"3h"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="48" orientation="left" height="246" stroke="none" x="34" y="94.00000000000001" textAnchor="end" fill="#666">
                                <tspan x="34" dy="0.355em">
                                  {"6h"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="48" orientation="left" height="246" stroke="none" x="34" y="12" textAnchor="end" fill="#666">
                                <tspan x="34" dy="0.355em">
                                  {"9h"}
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
          <div className="sr-only">
            <table>
              <caption>
                {"Weekly time, Jul 7 to Sep 28"}
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    {"Week"}
                  </th>
                  <th scope="col">
                    {"This Block"}
                  </th>
                  <th scope="col">
                    {"Last Block"}
                  </th>
                  <th scope="col">
                    {"Plan"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    {"Week 1, Jul 7 to 13"}
                  </th>
                  <td>
                    {"5h 12m"}
                  </td>
                  <td>
                    {"4h 15m"}
                  </td>
                  <td>
                    {"5h 00m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 2, Jul 14 to 20"}
                  </th>
                  <td>
                    {"5h 34m"}
                  </td>
                  <td>
                    {"4h 36m"}
                  </td>
                  <td>
                    {"5h 30m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 3, Jul 21 to 27"}
                  </th>
                  <td>
                    {"5h 52m"}
                  </td>
                  <td>
                    {"5h 56m"}
                  </td>
                  <td>
                    {"6h 10m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 4, Jul 28 to Aug 3"}
                  </th>
                  <td>
                    {"4h 28m"}
                  </td>
                  <td>
                    {"3h 56m"}
                  </td>
                  <td>
                    {"4h 40m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 5, Aug 4 to 10"}
                  </th>
                  <td>
                    {"6h 26m"}
                  </td>
                  <td>
                    {"5h 18m"}
                  </td>
                  <td>
                    {"6h 15m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 6, Aug 11 to 17"}
                  </th>
                  <td>
                    {"6h 02m"}
                  </td>
                  <td>
                    {"6h 11m"}
                  </td>
                  <td>
                    {"6h 45m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 7, Aug 18 to 24"}
                  </th>
                  <td>
                    {"7h 21m"}
                  </td>
                  <td>
                    {"5h 58m"}
                  </td>
                  <td>
                    {"7h 15m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 8, Aug 25 to 31"}
                  </th>
                  <td>
                    {"5h 22m"}
                  </td>
                  <td>
                    {"4h 41m"}
                  </td>
                  <td>
                    {"5h 15m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 9, Sep 1 to 7"}
                  </th>
                  <td>
                    {"7h 38m"}
                  </td>
                  <td>
                    {"6h 17m"}
                  </td>
                  <td>
                    {"7h 30m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 10, Sep 8 to 14"}
                  </th>
                  <td>
                    {"8h 07m"}
                  </td>
                  <td>
                    {"6h 30m"}
                  </td>
                  <td>
                    {"8h 00m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 11, Sep 15 to 21"}
                  </th>
                  <td>
                    {"5h 51m"}
                  </td>
                  <td>
                    {"5h 18m"}
                  </td>
                  <td>
                    {"6h 15m"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"Week 12, Sep 22 to 28"}
                  </th>
                  <td>
                    {"4h 19m"}
                  </td>
                  <td>
                    {"4h 28m"}
                  </td>
                  <td>
                    {"4h 30m"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <ul className="@md/volume:gap-x-5 flex flex-wrap gap-x-4 gap-y-2 items-center text-xs" aria-label="Legend">
            <li className="animate-in duration-300 fade-in-0 flex gap-1.5 h-4 items-center motion-reduce:animate-none">
              <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                <defs>
                  <pattern id="swatch-r1r" width="6" height="6" patternUnits="userSpaceOnUse" patterntransform="scale(0.75)">
                    <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 12%, var(--card))"></rect>
                    <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1"></path>
                  </pattern>
                </defs>
                <rect width="12" height="12" rx="2.5" fill="url(#swatch-r1r)"></rect>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                <span className="@md/volume:hidden">
                  {"Block"}
                </span>
                <span className="@md/volume:inline hidden">
                  {"This Block"}
                </span>
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-foreground">
                {"72h 12m"}
              </span>
            </li>
            <li className="animate-in duration-300 fade-in-0 flex gap-1.5 h-4 items-center motion-reduce:animate-none">
              <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                <defs>
                  <pattern id="ghost-r1s" width="4" height="3" patternUnits="userSpaceOnUse" patterntransform="scale(0.75)">
                    <rect width="4" height="3" fill="color-mix(in oklab, var(--muted-foreground) 12%, var(--card))"></rect>
                    <rect width="4" height="1" fill="var(--muted-foreground)" fillOpacity="0.3"></rect>
                  </pattern>
                </defs>
                <rect width="12" height="12" rx="2.5" fill="url(#ghost-r1s)" opacity="0.6"></rect>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                <span className="@md/volume:hidden">
                  {"Last"}
                </span>
                <span className="@md/volume:inline hidden">
                  {"Last Block"}
                </span>
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] font-medium tabular-nums text-foreground">
                {"63h 24m"}
              </span>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  )
}
