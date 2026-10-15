import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-2xl w-full">
        <FramePanel className="space-y-8">
          <div className="flex gap-2 items-center justify-between p-2">
            <h3 className="font-semibold text-base">
              {"Social Media Activity"}
            </h3>
            <Select>
            <SelectTrigger className="min-w-[140px]" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
              <SelectValue>
                {"Last 24 hours"}
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                {"▼"}
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="24h" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </div>
          <div className="space-y-6">
            <ChartContainer>
            <div className="-ms-4 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[300px] justify-center text-xs w-full" data-chart="chart-_r_3_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-facebook: var(--color-blue-600);\n  --color-instagram: var(--color-orange-500);\n  --color-linkedin: var(--color-slate-600);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-facebook: var(--color-blue-600);\n  --color-instagram: var(--color-orange-500);\n  --color-linkedin: var(--color-slate-600);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width="630" height="300" style={{position: "relative", cursor: "default", width: "630px", height: "300px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex="0" width="630" height="300" viewBox="0 0 630 300" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="65" y="5" width="560" height="260" x1="65" y1="265" x2="625" y2="265"></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="65" y="5" width="560" height="260" x1="65" y1="200" x2="625" y2="200"></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="65" y="5" width="560" height="260" x1="65" y1="135" x2="625" y2="135"></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="65" y="5" width="560" height="260" x1="65" y1="70" x2="625" y2="70"></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="65" y="5" width="560" height="260" x1="65" y1="5" x2="625" y2="5"></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x="65" y="5" height="260" width="560"></rect>
                        </clippath>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_400" tabIndex="-1">
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-blue-600)" strokeWidth="2" fill="none" id="recharts-line-_r_4_" height="260" width="560" strokeDasharray="592.0315551757812px 592.0315551757812px" d="M65,256.333C102.333,241.889,139.667,227.444,177,213C214.333,198.556,251.667,182.667,289,169.667C326.333,156.667,363.667,135,401,135C438.333,135,475.667,158.833,513,169.667C550.333,180.5,587.667,190.25,625,200"></path>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-orange-500)" strokeWidth="2" fill="none" id="recharts-line-_r_5_" height="260" width="560" strokeDasharray="633.2936px 633.2936401367188px" d="M65,230.333C102.333,204.333,139.667,178.333,177,156.667C214.333,135,251.667,119.833,289,100.333C326.333,80.833,363.667,39.667,401,39.667C438.333,39.667,475.667,75.778,513,91.667C550.333,107.556,587.667,121.278,625,135"></path>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-slate-600)" strokeWidth="2" fill="none" id="recharts-line-_r_6_" height="260" width="560" strokeDasharray="614.0909px 614.0909423828125px" d="M65,243.333C102.333,217.333,139.667,191.333,177,169.667C214.333,148,251.667,122,289,113.333C326.333,104.667,363.667,100.333,401,100.333C438.333,100.333,475.667,129.222,513,143.667C550.333,158.111,587.667,172.556,625,187"></path>
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
                      <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                        <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="560" stroke="none" fontSize="11" x="65" y="281" textAnchor="middle" fill="#666">
                              <tspan x="65" dy="0.71em">
                                {"6AM"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="560" stroke="none" fontSize="11" x="177" y="281" textAnchor="middle" fill="#666">
                              <tspan x="177" dy="0.71em">
                                {"9AM"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="560" stroke="none" fontSize="11" x="289" y="281" textAnchor="middle" fill="#666">
                              <tspan x="289" dy="0.71em">
                                {"12PM"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="560" stroke="none" fontSize="11" x="401" y="281" textAnchor="middle" fill="#666">
                              <tspan x="401" dy="0.71em">
                                {"3PM"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="560" stroke="none" fontSize="11" x="513" y="281" textAnchor="middle" fill="#666">
                              <tspan x="513" dy="0.71em">
                                {"6PM"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="560" stroke="none" fontSize="11" x="618.1015625" y="281" textAnchor="middle" fill="#666">
                              <tspan x="618.1015625" dy="0.71em">
                                {"9PM"}
                              </tspan>
                            </text>
                          </g>
                        </g>
                        <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="49" y="265" textAnchor="end" fill="#666">
                              <tspan x="49" dy="0.355em">
                                {"0%"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="49" y="200" textAnchor="end" fill="#666">
                              <tspan x="49" dy="0.355em">
                                {"15%"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="49" y="135" textAnchor="end" fill="#666">
                              <tspan x="49" dy="0.355em">
                                {"30%"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="49" y="70" textAnchor="end" fill="#666">
                              <tspan x="49" dy="0.355em">
                                {"45%"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="49" y="8.25" textAnchor="end" fill="#666">
                              <tspan x="49" dy="0.355em">
                                {"60%"}
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
            <div className="flex gap-6 items-center justify-center mb-2.5">
              <div className="flex gap-2 items-center">
                <div className="rounded-full size-2" style={{backgroundColor: "var(--color-blue-600)"}}></div>
                <span className="font-medium text-muted-foreground text-xs">
                  {"Facebook"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full size-2" style={{backgroundColor: "var(--color-orange-500)"}}></div>
                <span className="font-medium text-muted-foreground text-xs">
                  {"Instagram"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full size-2" style={{backgroundColor: "var(--color-slate-600)"}}></div>
                <span className="font-medium text-muted-foreground text-xs">
                  {"LinkedIn"}
                </span>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
