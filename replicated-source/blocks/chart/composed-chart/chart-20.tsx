import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 min-h-svh p-10 w-full">
      <Card className="lg:max-w-3xl space-y-4 w-full" size="default">
        <CardHeader>
          <CardTitle>
            {"Sales Overview"}
          </CardTitle>
          <CardAction className="flex gap-3 items-center justify-between">
            <div className="flex gap-4 items-center mr-2">
              <div className="flex gap-1.5 items-center">
                <div className="bg-background border-2 rounded-full size-3" style={{borderColor: "var(--color-teal-500)"}}></div>
                <span className="text-muted-foreground text-xs">
                  {"Sales"}
                </span>
              </div>
              <div className="flex gap-1.5 items-center">
                <div className="bg-background border-2 rounded-full size-3" style={{borderColor: "var(--color-pink-500)"}}></div>
                <span className="text-muted-foreground text-xs">
                  {"Goals"}
                </span>
              </div>
            </div>
            <span aria-hidden="true" tabIndex="0" data-base-ui-focus-guard="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1" popupOpen="" pressed="" aria-controls="_r_1_">
              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <span aria-hidden="true" tabIndex="0" data-base-ui-focus-guard="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
            <span data-type="outside" aria-hidden="true" tabIndex="0" data-base-ui-focus-guard="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
            <span aria-owns="_r_9_" style={{clipPath: "inset(50%)", position: "fixed", top: "0px", left: "0px"}}></span>
            <span data-type="outside" aria-hidden="true" tabIndex="0" data-base-ui-focus-guard="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
          </CardAction>
        </CardHeader>
        <CardContent className="px-2.5">
          <ChartContainer>
          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[300px] justify-center text-xs w-full" data-chart="chart-_r_5_">
            <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_5_] {\n  --color-goals: var(--color-pink-500);\n  --color-sales: var(--color-teal-500);\n}\n\n\n.dark [data-chart=chart-_r_5_] {\n  --color-goals: var(--color-pink-500);\n  --color-sales: var(--color-teal-500);\n}\n" }} />
            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                <div className="recharts-wrapper" width="748" height="300" style={{position: "relative", cursor: "default", width: "748px", height: "300px"}}>
                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                  <svg className="recharts-surface" role="application" tabIndex="0" width="748" height="300" viewBox="0 0 748 300" style={{width: "100%", height: "100%", display: "block"}}>
                    <title></title>
                    <desc></desc>
                    <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                      <g className="recharts-cartesian-grid">
                        <g className="recharts-cartesian-grid-horizontal">
                          <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="65" y="5" width="668" height="260" x1="65" y1="265" x2="733" y2="265"></line>
                          <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="65" y="5" width="668" height="260" x1="65" y1="200" x2="733" y2="200"></line>
                          <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="65" y="5" width="668" height="260" x1="65" y1="135" x2="733" y2="135"></line>
                          <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="65" y="5" width="668" height="260" x1="65" y1="70" x2="733" y2="70"></line>
                          <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="65" y="5" width="668" height="260" x1="65" y1="5" x2="733" y2="5"></line>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                    <defs>
                      <clippath id="recharts1-clip">
                        <rect x="65" y="5" height="260" width="668"></rect>
                      </clippath>
                    </defs>
                    <defs>
                      <lineargradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-teal-500)" stopOpacity="0.2"></stop>
                        <stop offset="100%" stopColor="var(--color-teal-500)" stopOpacity="0"></stop>
                      </lineargradient>
                    </defs>
                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                      <g className="recharts-area recharts-layer">
                        <g className="recharts-layer">
                          <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#salesGradient)" fillOpacity="0.6" height="260" stroke="none" width="668" id="recharts-area-_r_6_" d="M65,143.667L198.6,113.333L332.2,57L465.8,96L599.4,39.667L733,63.5L733,265L599.4,265L465.8,265L332.2,265L198.6,265L65,265Z"></path>
                          <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="260" stroke="transparent" width="668" d="M65,143.667L198.6,113.333L332.2,57L465.8,96L599.4,39.667L733,63.5"></path>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                    <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                    <g className="recharts-zIndex-layer_400" tabIndex="-1">
                      <g className="recharts-layer recharts-reference-line">
                        <line className="recharts-reference-line-line" x="Mar 24" stroke="var(--color-teal-500)" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="332.2" y1="265" x2="332.2" y2="5"></line>
                      </g>
                      <g className="recharts-layer recharts-line">
                        <g className="recharts-layer recharts-shape">
                          <path className="recharts-curve recharts-line-curve" stroke="var(--color-teal-500)" strokeWidth="2" fill="none" id="recharts-line-_r_7_" height="260" width="668" strokeDasharray="701.8673706054688px 701.8673706054688px" d="M65,143.667L198.6,113.333L332.2,57L465.8,96L599.4,39.667L733,63.5"></path>
                        </g>
                      </g>
                      <g className="recharts-layer recharts-line">
                        <g className="recharts-layer recharts-shape">
                          <path className="recharts-curve recharts-line-curve" stroke="var(--color-pink-500)" strokeWidth="2" strokeDasharray="4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 2.141357421875px, 770.141357421875px" fill="none" id="recharts-line-_r_8_" height="260" width="668" d="M65,156.667L198.6,83L332.2,100.333L465.8,39.667L599.4,135L733,26.667"></path>
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
                    <g className="recharts-zIndex-layer_600" tabIndex="-1">
                      <g className="recharts-layer recharts-line-dots">
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="260" width="668" cx="65" cy="143.66666666666669"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="260" width="668" cx="198.6" cy="113.33333333333333"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="260" width="668" cx="332.2" cy="56.999999999999986"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="260" width="668" cx="465.79999999999995" cy="96"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="260" width="668" cx="599.4" cy="39.666666666666664"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="260" width="668" cx="733" cy="63.49999999999999"></circle>
                      </g>
                      <g className="recharts-layer recharts-line-dots">
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-pink-500)" strokeWidth="2" strokeDasharray="4 4" fill="var(--background)" height="260" width="668" cx="65" cy="156.66666666666666"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-pink-500)" strokeWidth="2" strokeDasharray="4 4" fill="var(--background)" height="260" width="668" cx="198.6" cy="83.00000000000001"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-pink-500)" strokeWidth="2" strokeDasharray="4 4" fill="var(--background)" height="260" width="668" cx="332.2" cy="100.33333333333334"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-pink-500)" strokeWidth="2" strokeDasharray="4 4" fill="var(--background)" height="260" width="668" cx="465.79999999999995" cy="39.666666666666664"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-pink-500)" strokeWidth="2" strokeDasharray="4 4" fill="var(--background)" height="260" width="668" cx="599.4" cy="135"></circle>
                        <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-pink-500)" strokeWidth="2" strokeDasharray="4 4" fill="var(--background)" height="260" width="668" cx="733" cy="26.666666666666675"></circle>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                    <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                    <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                    <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                      <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="668" stroke="none" fontSize="11" x="65" y="283" textAnchor="middle" fill="#666">
                            <tspan x="65" dy="0.71em">
                              {"Jan 24"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="668" stroke="none" fontSize="11" x="198.6" y="283" textAnchor="middle" fill="#666">
                            <tspan x="198.6" dy="0.71em">
                              {"Feb 24"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="668" stroke="none" fontSize="11" x="332.2" y="283" textAnchor="middle" fill="#666">
                            <tspan x="332.2" dy="0.71em">
                              {"Mar 24"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="668" stroke="none" fontSize="11" x="465.79999999999995" y="283" textAnchor="middle" fill="#666">
                            <tspan x="465.79999999999995" dy="0.71em">
                              {"Apr 24"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="668" stroke="none" fontSize="11" x="599.4" y="283" textAnchor="middle" fill="#666">
                            <tspan x="599.4" dy="0.71em">
                              {"May 24"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="668" stroke="none" fontSize="11" x="729.984375" y="283" textAnchor="middle" fill="#666">
                            <tspan x="729.984375" dy="0.71em">
                              {"Jun 24"}
                            </tspan>
                          </text>
                        </g>
                      </g>
                      <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="47" y="265" textAnchor="end" fill="#666">
                            <tspan x="47" dy="0.355em">
                              {"$0.0M"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="47" y="200" textAnchor="end" fill="#666">
                            <tspan x="47" dy="0.355em">
                              {"$0.1M"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="47" y="135" textAnchor="end" fill="#666">
                            <tspan x="47" dy="0.355em">
                              {"$0.3M"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="47" y="70" textAnchor="end" fill="#666">
                            <tspan x="47" dy="0.355em">
                              {"$0.5M"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="260" stroke="none" fontSize="11" x="47" y="8.25" textAnchor="end" fill="#666">
                            <tspan x="47" dy="0.355em">
                              {"$0.6M"}
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
        </CardContent>
      </Card>
    </div>
  )
}
