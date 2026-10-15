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
    <div className="flex items-center justify-center md:p-20 min-h-svh p-10 w-full">
      <Frame className="max-w-3xl w-full">
        <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
          <div className="font-semibold text-sm">
            {"Cashflow"}
          </div>
          <Select>
          <SelectTrigger className="min-w-[140px]" type="button" tabIndex={0} id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
            <SelectValue>
              {"12 months"}
            </SelectValue>
            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
              {"▼"}
            </svg>
          </SelectTrigger>
          </Select>
          <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="12m" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
        </header>
        <FramePanel className="space-y-4">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-muted-foreground text-xs">
              {"Total (Jan 01 - Dec 31, 2024)"}
            </div>
            <div className="flex gap-2.5 items-center">
              <span className="font-semibold leading-none text-2xl">
                {"$81,000"}
              </span>
              <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                {"12.5%"}
              </span>
            </div>
          </div>
          <ChartContainer>
          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[300px] justify-center text-xs w-full" data-chart="chart-_r_3_">
            <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-value: var(--color-violet-500);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-value: var(--color-violet-500);\n}\n" }} />
            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                <div className="recharts-wrapper" width={726} height={300} style={{position: "relative", cursor: "default", width: "726px", height: "300px"}}>
                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                  <svg className="recharts-surface" role="application" tabIndex={0} width={726} height={300} viewBox="0 0 726 300" style={{width: "100%", height: "100%", display: "block"}}>
                    <title></title>
                    <desc></desc>
                    <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                      <g className="recharts-cartesian-grid">
                        <g className="recharts-cartesian-grid-horizontal">
                          <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={706} height={250} x1={10} y1={260} x2={716} y2={260}></line>
                          <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={706} height={250} x1={10} y1={197.5} x2={716} y2={197.5}></line>
                          <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={706} height={250} x1={10} y1={135} x2={716} y2={135}></line>
                          <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={706} height={250} x1={10} y1={72.5} x2={716} y2={72.5}></line>
                          <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={706} height={250} x1={10} y1={10} x2={716} y2={10}></line>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                    <defs>
                      <clippath id="recharts1-clip">
                        <rect x={10} y={10} height={250} width={706}></rect>
                      </clippath>
                    </defs>
                    <defs>
                      <lineargradient id="cashflowGradient" x1={0} y1={0} x2={0} y2={1}>
                        <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity={0.15}></stop>
                        <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity={0}></stop>
                      </lineargradient>
                    </defs>
                    <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                      <g className="recharts-area recharts-layer">
                        <g className="recharts-layer">
                          <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#cashflowGradient)" fillOpacity={0.6} height={250} stroke="none" width={706} id="recharts-area-_r_4_" d="M10,216.25L74.182,212.083L138.364,220.417L202.545,160L266.727,151.667L330.909,74.583L395.091,130.833L459.273,112.083L523.455,64.167L587.636,47.5L651.818,28.75L716,14.167L716,260L651.818,260L587.636,260L523.455,260L459.273,260L395.091,260L330.909,260L266.727,260L202.545,260L138.364,260L74.182,260L10,260Z"></path>
                          <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.6} height={250} stroke="transparent" width={706} d="M10,216.25L74.182,212.083L138.364,220.417L202.545,160L266.727,151.667L330.909,74.583L395.091,130.833L459.273,112.083L523.455,64.167L587.636,47.5L651.818,28.75L716,14.167"></path>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                    <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                    <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                      <g className="recharts-layer recharts-line">
                        <g className="recharts-layer recharts-shape">
                          <path className="recharts-curve recharts-line-curve" stroke="var(--color-violet-500)" strokeWidth={3} fill="none" id="recharts-line-_r_5_" height={250} width={706} strokeDasharray="813.504150390625px 813.504150390625px" d="M10,216.25L74.182,212.083L138.364,220.417L202.545,160L266.727,151.667L330.909,74.583L395.091,130.833L459.273,112.083L523.455,64.167L587.636,47.5L651.818,28.75L716,14.167"></path>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_500" tabIndex={-1}>
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
                          </g>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_600" tabIndex={-1}>
                      <g className="recharts-layer recharts-line-dots">
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={10} cy={216.25}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={74.18181818181819} cy={212.08333333333331}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={138.36363636363637} cy={220.41666666666669}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={202.54545454545456} cy={160}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={266.72727272727275} cy={151.66666666666669}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={330.90909090909093} cy={74.58333333333333}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={395.0909090909091} cy={130.83333333333331}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={459.2727272727273} cy={112.08333333333334}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={523.4545454545455} cy={64.16666666666667}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={587.6363636363637} cy={47.50000000000001}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={651.8181818181819} cy={28.74999999999999}></circle>
                        <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={250} width={706} cx={716} cy={14.166666666666679}></circle>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                    <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                    <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                    <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                      <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={74.18181818181819} y={276} textAnchor="middle" fill="#666">
                            <tspan x={74.18181818181819} dy="0.71em">
                              {"FEB"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={138.36363636363637} y={276} textAnchor="middle" fill="#666">
                            <tspan x={138.36363636363637} dy="0.71em">
                              {"MAR"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={202.54545454545456} y={276} textAnchor="middle" fill="#666">
                            <tspan x={202.54545454545456} dy="0.71em">
                              {"APR"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={266.72727272727275} y={276} textAnchor="middle" fill="#666">
                            <tspan x={266.72727272727275} dy="0.71em">
                              {"MAY"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={330.90909090909093} y={276} textAnchor="middle" fill="#666">
                            <tspan x={330.90909090909093} dy="0.71em">
                              {"JUN"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={395.0909090909091} y={276} textAnchor="middle" fill="#666">
                            <tspan x={395.0909090909091} dy="0.71em">
                              {"JUL"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={459.2727272727273} y={276} textAnchor="middle" fill="#666">
                            <tspan x={459.2727272727273} dy="0.71em">
                              {"AUG"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={523.4545454545455} y={276} textAnchor="middle" fill="#666">
                            <tspan x={523.4545454545455} dy="0.71em">
                              {"SEP"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={587.6363636363637} y={276} textAnchor="middle" fill="#666">
                            <tspan x={587.6363636363637} dy="0.71em">
                              {"OCT"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={651.8181818181819} y={276} textAnchor="middle" fill="#666">
                            <tspan x={651.8181818181819} dy="0.71em">
                              {"NOV"}
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={706} stroke="none" fontSize="12" x={713.6796875} y={276} textAnchor="middle" fill="#666">
                            <tspan x={713.6796875} dy="0.71em">
                              {"DEC"}
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
        </FramePanel>
      </Frame>
    </div>
  )
}
