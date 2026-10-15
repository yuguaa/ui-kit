import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-4xl overflow-hidden w-full">
        <FramePanel className="p-0!">
          <div className="border-b border-border grid grid-cols-2 md:grid-cols-4">
            <Button className="[border-radius:0] bg-muted/50 border-b border-r flex-col gap-1 h-auto items-stretch justify-start md:border-b-0 md:border-r md:last:border-r-0! md:nth-[2n]:border-r nth-[2n]:border-r-0 nth-[n+3]:border-b-0 p-4 text-left transition-colors w-full" type="button" tabIndex="0" aria-pressed="true" extracted="1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground text-sm">
                  {"Orders"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  {"+18%"}
                </Badge>
              </div>
              <div className="font-semibold text-base text-foreground">
                {"2,865"}
              </div>
            </Button>
            <Button className="[border-radius:0] border-b border-r flex-col gap-1 h-auto hover:bg-muted/30 items-stretch justify-start md:border-b-0 md:border-r md:last:border-r-0! md:nth-[2n]:border-r nth-[2n]:border-r-0 nth-[n+3]:border-b-0 p-4 text-left transition-colors w-full" type="button" tabIndex="0" aria-pressed="false">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground text-sm">
                  {"Response"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  {"14%"}
                </Badge>
              </div>
              <div className="font-semibold text-base text-foreground">
                {"135ms"}
              </div>
            </Button>
            <Button className="[border-radius:0] border-b border-r flex-col gap-1 h-auto hover:bg-muted/30 items-stretch justify-start md:border-b-0 md:border-r md:last:border-r-0! md:nth-[2n]:border-r nth-[2n]:border-r-0 nth-[n+3]:border-b-0 p-4 text-left transition-colors w-full" type="button" tabIndex="0" aria-pressed="false">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground text-sm">
                  {"Revenue"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  {"+15%"}
                </Badge>
              </div>
              <div className="font-semibold text-base text-foreground">
                {"$8.67k"}
              </div>
            </Button>
            <Button className="[border-radius:0] border-b border-r flex-col gap-1 h-auto hover:bg-muted/30 items-stretch justify-start md:border-b-0 md:border-r md:last:border-r-0! md:nth-[2n]:border-r nth-[2n]:border-r-0 nth-[n+3]:border-b-0 p-4 text-left transition-colors w-full" type="button" tabIndex="0" aria-pressed="false">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground text-sm">
                  {"Users"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  {"+15%"}
                </Badge>
              </div>
              <div className="font-semibold text-base text-foreground">
                {"1,425"}
              </div>
            </Button>
          </div>
          <div className="pb-6 pt-8 px-2">
            <div className="w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[350px] justify-center text-xs w-full" data-chart="chart-_r_0_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_0_] {\n  --color-orders: var(--color-teal-500);\n  --color-response: var(--color-violet-500);\n  --color-revenue: var(--color-lime-500);\n  --color-customers: var(--color-sky-500);\n}\n\n\n.dark [data-chart=chart-_r_0_] {\n  --color-orders: var(--color-teal-500);\n  --color-response: var(--color-violet-500);\n  --color-revenue: var(--color-lime-500);\n  --color-customers: var(--color-sky-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="870" height="350" style={{position: "relative", cursor: "default", width: "870px", height: "350px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="870" height="350" viewBox="0 0 870 350" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="20" width="860" height="295" x1="5" y1="315" x2="865" y2="315"></line>
                              <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="20" width="860" height="295" x1="5" y1="241.25" x2="865" y2="241.25"></line>
                              <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="20" width="860" height="295" x1="5" y1="167.5" x2="865" y2="167.5"></line>
                              <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="20" width="860" height="295" x1="5" y1="93.75" x2="865" y2="93.75"></line>
                              <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="20" width="860" height="295" x1="5" y1="20" x2="865" y2="20"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="5" y="20" height="295" width="860"></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-teal-500)" strokeWidth="2" strokeDasharray="4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 1.158800000000042px, 0px, 933.1588134765625px" fill="none" id="recharts-line-_r_1_" height="295" width="860" d="M25,122.382L230,53.838L435,145.809L640,209.147L845,21.735"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_500" tabIndex="-1">
                          <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                            <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                              <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                          <g className="recharts-layer recharts-line-dots">
                            <g>
                              <circle cx="25" cy="122.38235294117646" r="3" fill="var(--color-teal-500)"></circle>
                              <circle cx="25" cy="122.38235294117646" r="3" stroke="var(--color-teal-500)" fill="none" strokeWidth="1" opacity="0.8">
                                <animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate>
                                <animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate>
                              </circle>
                            </g>
                            <g>
                              <circle cx="230" cy="53.83823529411766" r="3" fill="var(--color-teal-500)"></circle>
                              <circle cx="230" cy="53.83823529411766" r="3" stroke="var(--color-teal-500)" fill="none" strokeWidth="1" opacity="0.8">
                                <animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate>
                                <animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate>
                              </circle>
                            </g>
                            <g>
                              <circle cx="435" cy="145.80882352941177" r="3" fill="var(--color-teal-500)"></circle>
                              <circle cx="435" cy="145.80882352941177" r="3" stroke="var(--color-teal-500)" fill="none" strokeWidth="1" opacity="0.8">
                                <animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate>
                                <animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate>
                              </circle>
                            </g>
                            <g>
                              <circle cx="640" cy="209.1470588235294" r="3" fill="var(--color-teal-500)"></circle>
                              <circle cx="640" cy="209.1470588235294" r="3" stroke="var(--color-teal-500)" fill="none" strokeWidth="1" opacity="0.8">
                                <animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate>
                                <animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate>
                              </circle>
                            </g>
                            <g>
                              <circle cx="845" cy="21.73529411764705" r="3" fill="var(--color-teal-500)"></circle>
                              <circle cx="845" cy="21.73529411764705" r="3" stroke="var(--color-teal-500)" fill="none" strokeWidth="1" opacity="0.8">
                                <animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate>
                                <animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate>
                              </circle>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="860" stroke="none" fontSize="11" x="25" y="331" textAnchor="middle" fill="#666">
                                <tspan x="25" dy="0.71em">
                                  {"Apr 1"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="860" stroke="none" fontSize="11" x="230" y="331" textAnchor="middle" fill="#666">
                                <tspan x="230" dy="0.71em">
                                  {"Apr 5"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="860" stroke="none" fontSize="11" x="435" y="331" textAnchor="middle" fill="#666">
                                <tspan x="435" dy="0.71em">
                                  {"Apr 10"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="860" stroke="none" fontSize="11" x="640" y="331" textAnchor="middle" fill="#666">
                                <tspan x="640" dy="0.71em">
                                  {"Apr 15"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="860" stroke="none" fontSize="11" x="845" y="331" textAnchor="middle" fill="#666">
                                <tspan x="845" dy="0.71em">
                                  {"Apr 18"}
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
        </FramePanel>
      </Frame>
    </div>
  )
}
