import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-6xl text-foreground w-full">
        <FramePanel className="[&::before]:z-0 isolate overflow-visible">
          <canvas className="[mask-image:linear-gradient(to_bottom,black,transparent_70%)] absolute h-full inset-0 pointer-events-none rounded-[calc(var(--frame-radius)-1px)] text-muted-foreground w-full" aria-hidden="true" width="1142" height="180"></canvas>
          <div className="relative z-10">
            <div className="flex flex-col gap-4 pb-1 pt-1 px-1.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-1 mb-5 min-w-0">
                <h2 className="font-semibold text-sm">
                  {"Catalog Health"}
                </h2>
                <p className="text-muted-foreground text-xs">
                  {"SKU coverage, replenishment pressure, and aging stock in one pass."}
                </p>
              </div>
              <Tabs className="shrink-0 sm:w-auto w-full" data-orientation="horizontal" activationDirection="none">
                <TabsList className="grid grid-cols-3 h-9 sm:w-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                  <TabsTrigger className="sm:min-w-16 text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" extracted="1">
                    {"Week"}
                  </TabsTrigger>
                  <TabsTrigger className="sm:min-w-16 text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                    {"Month"}
                  </TabsTrigger>
                  <TabsTrigger className="sm:min-w-16 text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                    {"Year"}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="grid items-stretch lg:grid-cols-4 sm:grid-cols-2">
              <div className="border-border/70 flex h-full lg:py-0 min-h-0 min-w-0 pe-2 py-4 sm:pe-5 w-full">
                <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5">
                  <div className="flex gap-2 items-center mb-2 min-w-0">
                    <svg className="lucide lucide-package shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    <span className="font-medium text-xs whitespace-nowrap">
                      {"In Stock"}
                    </span>
                  </div>
                  <div className="flex gap-0 items-stretch min-h-0">
                    <div className="flex flex-1 flex-col gap-1.5 justify-center min-w-0 pr-5">
                      <span className="font-semibold text-xl">
                        {"8,420"}
                      </span>
                      <div className="flex gap-1.5 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                          {"+3.4%"}
                        </Badge>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Rising"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-center pt-2 shrink-0">
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-12 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_3_" aria-label="In Stock trend">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-trend: var(--color-muted-foreground);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-trend: var(--color-muted-foreground);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                <defs>
                                  <clippath id="recharts1-clip">
                                    <rect x="2" y="6" height="36" width="92"></rect>
                                  </clippath>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                  <g className="recharts-layer recharts-line">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_7_" height="36" width="92" d="M2,22.65C4.044,20.794,6.089,18.938,8.133,19.05C10.178,19.162,12.222,21.244,14.267,20.85C16.311,20.456,18.356,17.588,20.4,17.25C22.444,16.912,24.489,19.104,26.533,18.6C28.578,18.096,30.622,14.895,32.667,15.45C34.711,16.005,36.756,20.314,38.8,19.95C40.844,19.586,42.889,14.548,44.933,13.2C46.978,11.852,49.022,14.193,51.067,15.9C53.111,17.607,55.156,18.68,57.2,16.35C59.244,14.02,61.289,8.287,63.333,9.6C65.378,10.913,67.422,19.271,69.467,19.5C71.511,19.729,73.556,11.828,75.6,7.8C77.644,3.772,79.689,3.618,81.733,6.45C83.778,9.282,85.822,15.102,87.867,16.35C89.911,17.598,91.956,14.274,94,10.95"></path>
                                    </g>
                                  </g>
                                </g>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-border/70 border-t flex h-full lg:py-0 min-h-0 min-w-0 pe-2 py-4 sm:border-t-0 sm:pe-5 w-full">
                <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
                <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5 sm:ps-5">
                  <div className="flex gap-2 items-center mb-2 min-w-0">
                    <svg className="lucide lucide-circle-x shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <span className="font-medium text-xs whitespace-nowrap">
                      {"Out-of-Stock"}
                    </span>
                  </div>
                  <div className="flex gap-0 items-stretch min-h-0">
                    <div className="flex flex-1 flex-col gap-1.5 justify-center min-w-0 pr-5">
                      <span className="font-semibold text-xl">
                        {"1,245"}
                      </span>
                      <div className="flex gap-1.5 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                          {"-1.2%"}
                        </Badge>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Gaps easing"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-center pt-2 shrink-0">
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-12 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_4_" aria-label="Out-of-Stock trend">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_4_] {\n  --color-trend: var(--color-muted-foreground);\n}\n\n\n.dark [data-chart=chart-_r_4_] {\n  --color-trend: var(--color-muted-foreground);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                <defs>
                                  <clippath id="recharts2-clip">
                                    <rect x="2" y="6" height="36" width="92"></rect>
                                  </clippath>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                  <g className="recharts-layer recharts-line">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_8_" height="36" width="92" d="M2,9.6C4.044,14.96,6.089,20.32,8.133,19.95C10.178,19.58,12.222,13.479,14.267,13.65C16.311,13.821,18.356,20.265,20.4,23.1C22.444,25.935,24.489,25.16,26.533,21.75C28.578,18.34,30.622,12.294,32.667,11.85C34.711,11.406,36.756,16.564,38.8,19.5C40.844,22.436,42.889,23.151,44.933,20.85C46.978,18.549,49.022,13.232,51.067,10.95C53.111,8.668,55.156,9.422,57.2,12.75C59.244,16.078,61.289,21.982,63.333,22.2C65.378,22.418,67.422,16.95,69.467,17.25C71.511,17.55,73.556,23.616,75.6,24.9C77.644,26.184,79.689,22.684,81.733,19.95C83.778,17.216,85.822,15.247,87.867,15.9C89.911,16.553,91.956,19.826,94,23.1"></path>
                                    </g>
                                  </g>
                                </g>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-border/70 border-t flex h-full lg:border-t-0 lg:py-0 min-h-0 min-w-0 pe-2 py-4 sm:border-t sm:pe-5 w-full">
                <div className="bg-border/70 h-18 hidden lg:block mb-2 self-center shrink-0 w-px" aria-hidden="true"></div>
                <div className="flex flex-1 flex-col lg:ps-5 min-h-0 min-w-0 ps-1.5">
                  <div className="flex gap-2 items-center mb-2 min-w-0">
                    <svg className="lucide lucide-truck shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                      <path d="M15 18H9"></path>
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle cx="17" cy="18" r="2"></circle>
                      <circle cx="7" cy="18" r="2"></circle>
                    </svg>
                    <span className="font-medium text-xs whitespace-nowrap">
                      {"Pending Restock"}
                    </span>
                  </div>
                  <div className="flex gap-0 items-stretch min-h-0">
                    <div className="flex flex-1 flex-col gap-1.5 justify-center min-w-0 pr-5">
                      <span className="font-semibold text-xl">
                        {"640"}
                      </span>
                      <div className="flex gap-1.5 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                          {"+2.1%"}
                        </Badge>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Moving"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-center pt-2 shrink-0">
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-12 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_5_" aria-label="Pending Restock trend">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_5_] {\n  --color-trend: var(--color-muted-foreground);\n}\n\n\n.dark [data-chart=chart-_r_5_] {\n  --color-trend: var(--color-muted-foreground);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                <defs>
                                  <clippath id="recharts3-clip">
                                    <rect x="2" y="6" height="36" width="92"></rect>
                                  </clippath>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                  <g className="recharts-layer recharts-line">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_9_" height="36" width="92" d="M2,29.4C4.044,30.371,6.089,31.343,8.133,30.75C10.178,30.157,12.222,28,14.267,28.05C16.311,28.1,18.356,30.356,20.4,29.85C22.444,29.344,24.489,26.077,26.533,25.8C28.578,25.523,30.622,28.238,32.667,27.6C34.711,26.962,36.756,22.973,38.8,22.65C40.844,22.327,42.889,25.67,44.933,25.35C46.978,25.03,49.022,21.045,51.067,20.4C53.111,19.755,55.156,22.449,57.2,21.75C59.244,21.051,61.289,16.958,63.333,15.9C65.378,14.842,67.422,16.817,69.467,17.25C71.511,17.683,73.556,16.573,75.6,14.55C77.644,12.527,79.689,9.592,81.733,8.25C83.778,6.908,85.822,7.159,87.867,9.15C89.911,11.141,91.956,14.87,94,18.6"></path>
                                    </g>
                                  </g>
                                </g>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-border/70 border-t flex h-full lg:border-t-0 lg:py-0 min-h-0 min-w-0 pr-2 py-4 sm:border-t w-full">
                <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
                <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5 sm:ps-5">
                  <div className="flex gap-2 items-center mb-2 min-w-0">
                    <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    <span className="font-medium text-xs whitespace-nowrap">
                      {"Slow Movers"}
                    </span>
                  </div>
                  <div className="flex gap-0 items-stretch min-h-0">
                    <div className="flex flex-1 flex-col gap-1.5 justify-center min-w-0 pr-5">
                      <span className="font-semibold text-xl">
                        {"1,105"}
                      </span>
                      <div className="flex gap-1.5 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                          {"0.0%"}
                        </Badge>
                        <span className="text-muted-foreground text-xs truncate">
                          {"Stable"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-center pt-2 shrink-0">
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-12 justify-center shrink-0 text-xs w-24" data-chart="chart-_r_6_" aria-label="Slow Movers trend">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_6_] {\n  --color-trend: var(--color-muted-foreground);\n}\n\n\n.dark [data-chart=chart-_r_6_] {\n  --color-trend: var(--color-muted-foreground);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                <defs>
                                  <clippath id="recharts4-clip">
                                    <rect x="2" y="6" height="36" width="92"></rect>
                                  </clippath>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                  <g className="recharts-layer recharts-line">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_a_" height="36" width="92" d="M2,21.3C4.044,18.546,6.089,15.792,8.133,17.7C10.178,19.608,12.222,26.178,14.267,24.9C16.311,23.622,18.356,14.495,20.4,13.65C22.444,12.805,24.489,20.243,26.533,20.85C28.578,21.457,30.622,15.233,32.667,15.45C34.711,15.667,36.756,22.327,38.8,22.65C40.844,22.973,42.889,16.961,44.933,16.35C46.978,15.739,49.022,20.529,51.067,19.95C53.111,19.371,55.156,13.421,57.2,14.1C59.244,14.779,61.289,22.085,63.333,21.75C65.378,21.415,67.422,13.437,69.467,13.2C71.511,12.963,73.556,20.466,75.6,20.4C77.644,20.334,79.689,12.698,81.733,11.85C83.778,11.002,85.822,16.944,87.867,18.6C89.911,20.256,91.956,17.628,94,15"></path>
                                    </g>
                                  </g>
                                </g>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-4 py-(--frame-panel-footer-py) py-1.5! sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
            <svg className="lucide lucide-circle-question-mark shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            {"12,845 products tracked across categories. 76% currently available in stock."}
          </div>
          <Button className="-me-2 hover:text-primary" type="button" tabIndex="0">
            {"Show full analytics"}
            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </footer>
      </Frame>
    </div>
  )
}
