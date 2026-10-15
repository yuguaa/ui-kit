import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <style dangerouslySetInnerHTML={{ __html: "\n@keyframes chart-13-reveal-up {\n  from {\n    clip-path: inset(100% 0 0 0);\n    opacity: 0.75;\n  }\n  to {\n    clip-path: inset(0 0 0 0);\n    opacity: 1;\n  }\n}\n\n.chart-13-reveal-up {\n  animation: chart-13-reveal-up 680ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .chart-13-reveal-up {\n    animation: none;\n    clip-path: none;\n    opacity: 1;\n  }\n}\n" }} />
      <Frame className="@container max-w-[29rem] w-full">
        <FramePanel className="pb-3.5! pe-5! ps-3.5! pt-5!">
          <Tabs className="gap-6" data-orientation="horizontal" activationDirection="none">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-0.5 items-center min-w-0 ps-1.5">
                <h2 className="font-medium text-sm">
                  {"Capital Inflows"}
                </h2>
                <Tooltip>
                <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground/70 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Capital Inflows" id="base-ui-_r_1_" baseUiTooltipTrigger="" extracted="1">
                  <svg className="lucide lucide-info text-sm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-icon="inline-start" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <TabsList className="@sm:w-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_2_" compositeItemActive="" aria-controls="base-ui-_r_5_">
                  {"Week"}
                </TabsTrigger>
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                  {"Month"}
                </TabsTrigger>
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_4_">
                  {"Year"}
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_5_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_2_">
              <div className="@sm:grid-cols-[8.25rem_minmax(0,1fr)] @sm:items-center gap-6 grid">
                <div className="chart-13-reveal-up relative shrink-0 size-[8.25rem]">
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-square cn-chart flex justify-center size-[8.25rem] text-xs" data-chart="chart-_r_6_" aria-label="Capital Inflows: $12,4M total for Week">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_6_] {\n  --color-northline: oklch(0.6 0.145 181.2);\n  --color-copper: oklch(0.76 0.161 80.1);\n  --color-bridgewell: oklch(0.66 0.19 42.8);\n  --color-reserve: var(--muted);\n}\n\n\n.dark [data-chart=chart-_r_6_] {\n  --color-northline: oklch(0.6 0.145 181.2);\n  --color-copper: oklch(0.76 0.161 80.1);\n  --color-bridgewell: oklch(0.66 0.19 42.8);\n  --color-reserve: var(--muted);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="132" height="132" style={{position: "relative", cursor: "default", width: "132px", height: "132px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="132" height="132" viewBox="0 0 132 132" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="2" y="2" height="128" width="128"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-layer recharts-pie" tabIndex="0">
                                <g className="recharts-layer">
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-northline)" name="WaveMark Capital" color="oklch(0.6 0.145 181.2)" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_9_" d={"M 28.1246,20.8618\n    A3,3,0,0,1,28.6137,16.5403\n    A62,62,0,0,1,127.3483,57.0343\n    A3,3,0,0,1,124.6622,60.4548\n  L115.6884,61.3031\n      A3,3,0,0,1,112.4417,58.7774\n      A47,47,0,0,0,38.0037,28.2481\n      A3,3,0,0,1,33.9185,27.7668Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-copper)" name="Envato Market" color="oklch(0.76 0.161 80.1)" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_9_" d={"M 124.75,61.4794\n    A3,3,0,0,1,127.9792,64.3928\n    A62,62,0,0,1,41.0541,122.76\n    A3,3,0,0,1,39.5796,118.6684\n  L43.6212,110.6116\n      A3,3,0,0,1,47.4846,109.1993\n      A47,47,0,0,0,112.9934,65.2124\n      A3,3,0,0,1,115.7628,62.171Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-bridgewell)" name="QBridge Investment" color="oklch(0.66 0.19 42.8)" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_9_" d={"M 38.6644,118.1993\n    A3,3,0,0,1,34.4817,119.391\n    A62,62,0,0,1,6.236,82.5006\n    A3,3,0,0,1,8.4775,78.7735\n  L17.2769,76.8195\n      A3,3,0,0,1,20.8116,78.9233\n      A47,47,0,0,0,41.7371,106.2531\n      A3,3,0,0,1,42.8461,110.2142Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-reserve)" name="Other Sources" color="var(--muted)" tabIndex="-1" data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_9_" d={"M 8.2633,77.7676\n    A3,3,0,0,1,4.698,75.277\n    A62,62,0,0,1,22.9977,21.3368\n    A3,3,0,0,1,27.3426,21.5297\n  L33.2561,28.3325\n      A3,3,0,0,1,33.0925,32.4426\n      A47,47,0,0,0,19.4666,72.6063\n      A3,3,0,0,1,17.0955,75.9675Z"}></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  </ChartContainer>
                  <div className="absolute flex inset-0 items-center justify-center pointer-events-none" aria-hidden="true">
                    <div className="bg-background/90 border border-border/70 border-dashed flex flex-col items-center justify-center rounded-full size-[5.25rem]">
                      <span className="text-muted-foreground/70 text-xs">
                        {"Capital"}
                      </span>
                      <span className="font-semibold mt-0.5 text-sm">
                        {"$12,4M"}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="flex flex-1 flex-col min-w-0">
                  <li>
                    <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.6 0.145 181.2)"}}></span>
                        <span className="font-medium text-sm">
                          {"WaveMark Capital"}
                        </span>
                      </div>
                      <span className="font-medium text-sm">
                        {"$7,6M"}
                      </span>
                      <span className="text-muted-foreground/70 text-right text-xs w-8">
                        {"35%"}
                      </span>
                    </div>
                    <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </li>
                  <li>
                    <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.76 0.161 80.1)"}}></span>
                        <span className="font-medium text-sm">
                          {"Envato Market"}
                        </span>
                      </div>
                      <span className="font-medium text-sm">
                        {"$3,4M"}
                      </span>
                      <span className="text-muted-foreground/70 text-right text-xs w-8">
                        {"34%"}
                      </span>
                    </div>
                    <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </li>
                  <li>
                    <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.66 0.19 42.8)"}}></span>
                        <span className="font-medium text-sm">
                          {"QBridge Investment"}
                        </span>
                      </div>
                      <span className="font-medium text-sm">
                        {"$1,2M"}
                      </span>
                      <span className="text-muted-foreground/70 text-right text-xs w-8">
                        {"14%"}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </FramePanel>
      </Frame>
    </div>
  )
}
