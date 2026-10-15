import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-md w-full">
        <FramePanel className="p-0!">
          <ul className="flex flex-col">
            <li>
              <div className="flex gap-3 items-center justify-between min-h-20 px-4 py-4 sm:px-5">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="font-semibold text-base">
                      {"1,246"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      {"23.08%"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {"Cumulative Orders"}
                  </p>
                </div>
                <div className="h-11 relative shrink-0 sm:w-40 w-32">
                  <span className="[background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"></span>
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-11 justify-center relative text-xs w-full z-10" data-chart="chart-_r_0_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_0_] {\n  --color-value: var(--success);\n}\n\n\n.dark [data-chart=chart-_r_0_] {\n  --color-value: var(--success);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="44" style={{position: "relative", cursor: "default", width: "160px", height: "44px"}}>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="44" viewBox="0 0 160 44" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="0" y="4" height="36" width="160"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1">
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" fill="none" id="recharts-line-_r_5_" height="36" width="160" d="M0,34.162L5.161,36.108L10.323,31.243L15.484,35.135L20.645,28.324L25.806,30.27L30.968,24.432L36.129,27.351L41.29,20.541L46.452,22.486L51.613,14.703L56.774,16.649L61.935,8.865L67.097,11.784L72.258,7.892L77.419,18.595L82.581,20.541L87.742,15.676L92.903,31.243L98.065,31.243L103.226,31.243L108.387,30.27L113.548,22.486L118.71,22.486L123.871,33.189L129.032,26.378L134.194,36.108L139.355,35.135L144.516,14.703L149.677,23.459L154.839,25.405L160,31.243"></path>
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
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-3 items-center justify-between min-h-20 px-4 py-4 sm:px-5">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="font-semibold text-base">
                      {"$89.3"}
                      <span className="text-muted-foreground/45">
                        {"k"}
                      </span>
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      {"3.82%"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {"Cumulative Spend"}
                  </p>
                </div>
                <div className="h-11 relative shrink-0 sm:w-40 w-32">
                  <span className="[background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"></span>
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-11 justify-center relative text-xs w-full z-10" data-chart="chart-_r_1_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_1_] {\n  --color-value: var(--success);\n}\n\n\n.dark [data-chart=chart-_r_1_] {\n  --color-value: var(--success);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="44" style={{position: "relative", cursor: "default", width: "160px", height: "44px"}}>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="44" viewBox="0 0 160 44" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts2-clip">
                                <rect x="0" y="4" height="36" width="160"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1">
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" fill="none" id="recharts-line-_r_6_" height="36" width="160" d="M0,35.5L5.333,35.5L10.667,35.5L16,35.5L21.333,35.5L26.667,24.25L32,24.25L37.333,24.25L42.667,24.25L48,24.25L53.333,24.25L58.667,24.25L64,31L69.333,16.375L74.667,26.5L80,26.5L85.333,33.25L90.667,13L96,13L101.333,13L106.667,13L112,13L117.333,16.375L122.667,16.375L128,8.5L133.333,18.625L138.667,17.5L144,17.5L149.333,27.625L154.667,18.625L160,18.625"></path>
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
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-3 items-center justify-between min-h-20 px-4 py-4 sm:px-5">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="font-semibold text-base">
                      {"$68.1"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                      {"0.39%"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {"Avg. Order Value"}
                  </p>
                </div>
                <div className="h-11 relative shrink-0 sm:w-40 w-32">
                  <span className="[background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"></span>
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-11 justify-center relative text-xs w-full z-10" data-chart="chart-_r_2_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_2_] {\n  --color-value: var(--destructive);\n}\n\n\n.dark [data-chart=chart-_r_2_] {\n  --color-value: var(--destructive);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="44" style={{position: "relative", cursor: "default", width: "160px", height: "44px"}}>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="44" viewBox="0 0 160 44" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts3-clip">
                                <rect x="0" y="4" height="36" width="160"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1">
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" fill="none" id="recharts-line-_r_7_" height="36" width="160" d="M0,12.64L5.517,32.8L11.034,25.6L16.552,25.6L22.069,25.6L27.586,25.6L33.103,25.6L38.621,25.6L44.138,25.6L49.655,15.52L55.172,24.16L60.69,21.28L66.207,9.76L71.724,16.96L77.241,34.24L82.759,34.24L88.276,34.24L93.793,34.24L99.31,34.24L104.828,28.48L110.345,21.28L115.862,21.28L121.379,21.28L126.897,14.08L132.414,32.8L137.931,22.72L143.448,22.72L148.966,15.52L154.483,15.52L160,25.6"></path>
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
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-3 items-center justify-between min-h-20 px-4 py-4 sm:px-5">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="font-semibold text-base">
                      {"$2,3"}
                      <span className="text-muted-foreground/45">
                        {"k"}
                      </span>
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      {"1.04%"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {"Account Balance"}
                  </p>
                </div>
                <div className="h-11 relative shrink-0 sm:w-40 w-32">
                  <span className="[background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"></span>
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-11 justify-center relative text-xs w-full z-10" data-chart="chart-_r_3_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-value: var(--success);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-value: var(--success);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="44" style={{position: "relative", cursor: "default", width: "160px", height: "44px"}}>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="44" viewBox="0 0 160 44" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts4-clip">
                                <rect x="0" y="4" height="36" width="160"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1">
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" fill="none" id="recharts-line-_r_8_" height="36" width="160" d="M0,34.273L5.517,36.727L11.034,33.455L16.552,35.091L22.069,31.818L27.586,30.182L33.103,23.636L38.621,27.727L44.138,27.727L49.655,24.455L55.172,26.909L60.69,19.545L66.207,27.727L71.724,17.909L77.241,34.273L82.759,16.273L88.276,33.455L93.793,9.727L99.31,9.727L104.828,9.727L110.345,9.727L115.862,9.727L121.379,9.727L126.897,14.636L132.414,10.545L137.931,10.545L143.448,15.455L148.966,15.455L154.483,15.455L160,7.273"></path>
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
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-3 items-center justify-between min-h-20 px-4 py-4 sm:px-5">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <span className="font-semibold text-base">
                      {"$271.9"}
                      <span className="text-muted-foreground/45">
                        {"k"}
                      </span>
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                      {"0.39%"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {"Avg. Monthly Income"}
                  </p>
                </div>
                <div className="h-11 relative shrink-0 sm:w-40 w-32">
                  <span className="[background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"></span>
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-11 justify-center relative text-xs w-full z-10" data-chart="chart-_r_4_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_4_] {\n  --color-value: var(--destructive);\n}\n\n\n.dark [data-chart=chart-_r_4_] {\n  --color-value: var(--destructive);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="44" style={{position: "relative", cursor: "default", width: "160px", height: "44px"}}>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="44" viewBox="0 0 160 44" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts5-clip">
                                <rect x="0" y="4" height="36" width="160"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1">
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" fill="none" id="recharts-line-_r_9_" height="36" width="160" d="M0,17.935L6.154,8.645L12.308,8.645L18.462,8.645L24.615,8.645L30.769,22.581L36.923,22.581L43.077,22.581L49.231,22.581L55.385,29.548L61.538,27.226L67.692,31.871L73.846,26.065L80,33.032L86.154,22.581L92.308,22.581L98.462,22.581L104.615,22.581L110.769,22.581L116.923,26.065L123.077,33.032L129.231,33.032L135.385,15.613L141.538,35.355L147.692,30.71L153.846,26.065L160,29.548"></path>
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
            </li>
          </ul>
        </FramePanel>
      </Frame>
    </div>
  )
}
