import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-3xl w-full">
        <FramePanel className="space-y-8">
          <div className="flex gap-2 items-center justify-between p-2">
            <h3 className="font-semibold text-base">
              E-commerce Sales
            </h3>
            <Select>
            <SelectTrigger className="min-w-[140px]" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
              <SelectValue>
                Last 30 days
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="30d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-10 items-center px-2.5">
              <div className="flex gap-3 items-center">
                <div className="bg-success rounded-full size-2"></div>
                <div>
                  <div className="text-muted-foreground text-xs tracking-wide uppercase">
                    Sales
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-xl">
                      £37,600
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      +8%
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-warning rounded-full size-2"></div>
                <div>
                  <div className="text-muted-foreground text-xs tracking-wide uppercase">
                    Views
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-xl">
                      30,700
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      +5%
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-full justify-center text-xs w-full" data-chart="chart-_r_3_">
                <style>{`
 [data-chart=chart-_r_3_] {
  --color-sales: var(--color-success);
  --color-views: var(--color-warning);
}


.dark [data-chart=chart-_r_3_] {
  --color-sales: var(--color-success);
  --color-views: var(--color-warning);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="726" height="300" style={{position: "relative", cursor: "default", width: "726px", height: "300px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="726" height="300" viewBox="0 0 726 300" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line strokeDasharray="4 12" stroke="var(--border)" fill="none" x="10" y="10" width="706" height="250" x1="10" y1="10" x2="716" y2="10"></line>
                              <line strokeDasharray="4 12" stroke="var(--border)" fill="none" x="10" y="10" width="706" height="250" x1="10" y1="260" x2="716" y2="260"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="10" y="10" height="250" width="706"></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-success)" strokeWidth="2" fill="none" id="recharts-line-_r_4_" height="250" width="706" strokeDasharray="681.3906px 681.390625px" d="M30,97.5L163.2,60L296.4,78.75L429.6,35L562.8,47.5L696,66.25"></path>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-warning)" strokeWidth="2" strokeDasharray="5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 1.0977000000000317px, 681.0977172851562px" fill="none" id="recharts-line-_r_5_" height="250" width="706" d="M30,60L163.2,43.333L296.4,68.333L429.6,18.333L562.8,35L696,55.833"></path>
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
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" fontSize="11" x="30" y="276" textAnchor="middle" fill="#666">
                                <tspan x="30" dy="0.71em">
                                  Week 1
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" fontSize="11" x="163.2" y="276" textAnchor="middle" fill="#666">
                                <tspan x="163.2" dy="0.71em">
                                  Week 2
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" fontSize="11" x="296.4" y="276" textAnchor="middle" fill="#666">
                                <tspan x="296.4" dy="0.71em">
                                  Week 3
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" fontSize="11" x="429.59999999999997" y="276" textAnchor="middle" fill="#666">
                                <tspan x="429.59999999999997" dy="0.71em">
                                  Week 4
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" fontSize="11" x="562.8" y="276" textAnchor="middle" fill="#666">
                                <tspan x="562.8" dy="0.71em">
                                  Week 5
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" fontSize="11" x="696" y="276" textAnchor="middle" fill="#666">
                                <tspan x="696" dy="0.71em">
                                  Week 6
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
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
