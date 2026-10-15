import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-10 w-full">
      <div className="@container w-full">
        <Frame className="w-full">
          <FramePanel className="p-0!">
            <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 grid overflow-hidden">
              <div className="@4xl:border-b-0 @4xl:border-r border-b border-border/60 md:border-b md:border-r min-h-[102px] overflow-hidden p-4 relative">
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden absolute aspect-auto cn-chart flex h-8 justify-center right-4 text-xs top-5 w-[76px] z-10" data-chart="chart-_r_0_">
                  <style>{`
 [data-chart=chart-_r_0_] {
  --color-value: var(--muted-foreground);
}


.dark [data-chart=chart-_r_0_] {
  --color-value: var(--muted-foreground);
}
`}</style>
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="76" height="32" style={{position: "relative", cursor: "default", width: "76px", height: "32px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "30"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="76" height="32" viewBox="0 0 76 32" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts1-clip">
                              <rect x="2" y="2" height="28" width="72"></rect>
                            </clippath>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1">
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeWidth="2" strokeOpacity="0.45" fill="none" id="recharts-line-_r_4_" height="28" width="72" strokeDasharray="98.8974px 98.89744567871094px" d="M2,30L12.286,30L22.571,15.556L32.857,2L43.143,14.889L53.429,14.889L63.714,5.111L74,12.889"></path>
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
                <div className="flex flex-col gap-5 justify-between min-h-[70px]">
                  <div className="flex flex-col gap-0.5 pr-24">
                    <div className="font-semibold text-xl">
                      1,246
                      <span className="ps-0.5 text-muted-foreground/40"></span>
                    </div>
                    <h3 className="leading-none text-muted-foreground text-xs">
                      Total Orders
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                      <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      <span>
                        23.08%
                      </span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      Annual trend
                    </span>
                  </div>
                </div>
              </div>
              <div className="@4xl:border-b-0 @4xl:border-r border-b border-border/60 md:border-b min-h-[102px] overflow-hidden p-4 relative">
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden absolute aspect-auto cn-chart flex h-8 justify-center right-4 text-xs top-5 w-[76px] z-10" data-chart="chart-_r_1_">
                  <style>{`
 [data-chart=chart-_r_1_] {
  --color-value: var(--muted-foreground);
}


.dark [data-chart=chart-_r_1_] {
  --color-value: var(--muted-foreground);
}
`}</style>
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="76" height="32" style={{position: "relative", cursor: "default", width: "76px", height: "32px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "30"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="76" height="32" viewBox="0 0 76 32" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts2-clip">
                              <rect x="2" y="2" height="28" width="72"></rect>
                            </clippath>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1">
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeWidth="2" strokeOpacity="0.45" fill="none" id="recharts-line-_r_5_" height="28" width="72" strokeDasharray="97.5708px 97.57081604003906px" d="M2,5.348L12.286,16.609L22.571,30L32.857,18.435L43.143,16.913L53.429,3.522L63.714,7.478L74,2"></path>
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
                <div className="flex flex-col gap-5 justify-between min-h-[70px]">
                  <div className="flex flex-col gap-0.5 pr-24">
                    <div className="font-semibold text-xl">
                      $89.3
                      <span className="ps-0.5 text-muted-foreground/40">
                        k
                      </span>
                    </div>
                    <h3 className="leading-none text-muted-foreground text-xs">
                      Cumulative Spend
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                      <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      <span>
                        3.82%
                      </span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      Monthly trend
                    </span>
                  </div>
                </div>
              </div>
              <div className="@4xl:border-b-0 @4xl:border-r border-b border-border/60 md:border-b-0 md:border-r min-h-[102px] overflow-hidden p-4 relative">
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden absolute aspect-auto cn-chart flex h-8 justify-center right-4 text-xs top-5 w-[76px] z-10" data-chart="chart-_r_2_">
                  <style>{`
 [data-chart=chart-_r_2_] {
  --color-value: var(--muted-foreground);
}


.dark [data-chart=chart-_r_2_] {
  --color-value: var(--muted-foreground);
}
`}</style>
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="76" height="32" style={{position: "relative", cursor: "default", width: "76px", height: "32px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "30"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="76" height="32" viewBox="0 0 76 32" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts3-clip">
                              <rect x="2" y="2" height="28" width="72"></rect>
                            </clippath>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1">
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeWidth="2" strokeOpacity="0.45" fill="none" id="recharts-line-_r_6_" height="28" width="72" strokeDasharray="100.47956848144531px 100.47956848144531px" d="M2,2L12.286,2L22.571,18L32.857,18L43.143,10L53.429,26L63.714,18L74,30"></path>
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
                <div className="flex flex-col gap-5 justify-between min-h-[70px]">
                  <div className="flex flex-col gap-0.5 pr-24">
                    <div className="font-semibold text-xl">
                      $68
                      <span className="ps-0.5 text-muted-foreground/40"></span>
                    </div>
                    <h3 className="leading-none text-muted-foreground text-xs">
                      Avg. Order Value
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                      <svg className="lucide lucide-trending-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                      <span>
                        0.39%
                      </span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      Weekly trend
                    </span>
                  </div>
                </div>
              </div>
              <div className="@4xl:border-b-0 @4xl:border-r-0 border-border/60 md:border-b-0 min-h-[102px] overflow-hidden p-4 relative">
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden absolute aspect-auto cn-chart flex h-8 justify-center right-4 text-xs top-5 w-[76px] z-10" data-chart="chart-_r_3_">
                  <style>{`
 [data-chart=chart-_r_3_] {
  --color-value: var(--muted-foreground);
}


.dark [data-chart=chart-_r_3_] {
  --color-value: var(--muted-foreground);
}
`}</style>
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="76" height="32" style={{position: "relative", cursor: "default", width: "76px", height: "32px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "30"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="76" height="32" viewBox="0 0 76 32" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts4-clip">
                              <rect x="2" y="2" height="28" width="72"></rect>
                            </clippath>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1">
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeWidth="2" strokeOpacity="0.45" fill="none" id="recharts-line-_r_7_" height="28" width="72" strokeDasharray="95.5311px 95.53112030029297px" d="M2,13.2L12.286,24.4L22.571,30L32.857,30L43.143,18.8L53.429,2L63.714,7.6L74,2"></path>
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
                <div className="flex flex-col gap-5 justify-between min-h-[70px]">
                  <div className="flex flex-col gap-0.5 pr-24">
                    <div className="font-semibold text-xl">
                      $2.3
                      <span className="ps-0.5 text-muted-foreground/40">
                        k
                      </span>
                    </div>
                    <h3 className="leading-none text-muted-foreground text-xs">
                      Account Balance
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                      <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      <span>
                        1.04%
                      </span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      Daily trend
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
