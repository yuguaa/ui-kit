import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-5xl w-full">
        <FramePanel className="flex flex-col gap-5 items-stretch p-8!">
          <div className="mb-5">
            <h1 className="font-medium mb-1 text-base text-muted-foreground">
              {"Current Balance"}
            </h1>
            <div className="flex flex-wrap gap-1.5 items-baseline sm:gap-3.5">
              <span className="font-bold text-3xl">
                {"$24,847.83"}
              </span>
              <div className="flex gap-1 items-center text-emerald-600">
                <svg className="h-4 lucide lucide-trending-up w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span className="font-medium">
                  {"+12.7%"}
                </span>
                <span className="font-normal text-muted-foreground">
                  {"Last 24 hours"}
                </span>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="flex flex-wrap gap-2.5 items-center justify-between mb-2.5 text-sm">
              <div className="flex gap-6 items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-muted-foreground">
                    {"Today's Sales:"}
                  </span>
                  <span className="font-semibold">
                    {"$1,249"}
                  </span>
                  <div className="flex gap-1 items-center text-emerald-600">
                    <svg className="h-3 lucide lucide-trending-up w-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span>
                      {"(+8%)"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-center text-muted-foreground">
                <span>
                  {"High:"}
                  <span className="font-medium text-sky-600">
                    {"2,900.08"}
                  </span>
                </span>
                <span>
                  {"Low:"}
                  <span className="font-medium text-yellow-600">
                    {"850.42"}
                  </span>
                </span>
                <span>
                  {"Change:"}
                  <span className="font-medium text-red-600">
                    {"-0.082%"}
                  </span>
                </span>
              </div>
            </div>
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-initial [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-96 justify-center text-xs w-full" data-chart="chart-_r_0_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_0_] {\n  --color-value: var(--color-purple-500);\n}\n\n\n.dark [data-chart=chart-_r_0_] {\n  --color-value: var(--color-purple-500);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width={950} height={384} style={{position: "relative", cursor: "default", width: "950px", height: "384px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex={0} width={950} height={384} viewBox="0 0 950 384" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line strokeDasharray="4 8" stroke="var(--input)" strokeOpacity={1} fill="none" x={65} y={20} width={875} height={314} x1={65} y1={334} x2={940} y2={334}></line>
                            <line strokeDasharray="4 8" stroke="var(--input)" strokeOpacity={1} fill="none" x={65} y={20} width={875} height={314} x1={65} y1={255.5} x2={940} y2={255.5}></line>
                            <line strokeDasharray="4 8" stroke="var(--input)" strokeOpacity={1} fill="none" x={65} y={20} width={875} height={314} x1={65} y1={177} x2={940} y2={177}></line>
                            <line strokeDasharray="4 8" stroke="var(--input)" strokeOpacity={1} fill="none" x={65} y={20} width={875} height={314} x1={65} y1={98.5} x2={940} y2={98.5}></line>
                            <line strokeDasharray="4 8" stroke="var(--input)" strokeOpacity={1} fill="none" x={65} y={20} width={875} height={314} x1={65} y1={20} x2={940} y2={20}></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x={65} y={20} height={314} width={875}></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <lineargradient id="areaGradient" x1={0} y1={0} x2={0} y2={1}>
                          <stop offset="0%" stopColor="var(--color-purple-500)" stopOpacity={0.1}></stop>
                          <stop offset="100%" stopColor="var(--color-purple-500)" stopOpacity={0}></stop>
                        </lineargradient>
                        <pattern id="dotGrid" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                          <circle cx={10} cy={10} r={1} fill="var(--input)" fillOpacity={0.3}></circle>
                        </pattern>
                        <filter id="dotShadow" x="-50%" y="-50%" width="200%" height="200%">
                          <fedropshadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.8)"></fedropshadow>
                        </filter>
                        <filter id="lineShadow" x="-100%" y="-100%" width="300%" height="300%">
                          <fedropshadow dx="4" dy="6" stdDeviation="25" floodColor="rgba(59, 130, 246, 0.9)"></fedropshadow>
                        </filter>
                      </defs>
                      <rect x={0} y={0} width="100%" height="100%" fill="url(#dotGrid)" style={{pointerEvents: "none"}}></rect>
                      <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                        <g className="recharts-layer recharts-reference-line">
                          <line className="recharts-reference-line-line" x="Jan 17" stroke="var(--color-purple-500)" strokeDasharray="4 4" strokeWidth={1} fill="none" fillOpacity={1} x1={531.6666666666667} y1={334} x2={531.6666666666667} y2={20}></line>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-purple-500)" strokeWidth={2} filter="url(#lineShadow)" fill="none" id="recharts-line-_r_1_" height={314} width={875} strokeDasharray="1117.26708984375px 1117.26708984375px" d="M65,245.033C74.722,239.189,84.444,233.346,94.167,218.867C103.889,204.388,113.611,158.16,123.333,158.16C133.056,158.16,142.778,178.047,152.5,178.047C162.222,178.047,171.944,126.76,181.667,122.573C191.389,118.387,201.111,119.084,210.833,116.293C220.556,113.502,230.278,108.792,240,105.827C249.722,102.861,259.444,103.384,269.167,98.5C278.889,93.616,288.611,74.427,298.333,74.427C308.056,74.427,317.778,94.313,327.5,94.313C337.222,94.313,346.944,77.567,356.667,77.567C366.389,77.567,376.111,80.881,385.833,84.893C395.556,88.906,405.278,94.662,415,101.64C424.722,108.618,434.444,118.561,444.167,126.76C453.889,134.959,463.611,144.553,473.333,150.833C483.056,157.113,492.778,159.73,502.5,164.44C512.222,169.15,521.944,179.093,531.667,179.093C541.389,179.093,551.111,174.558,560.833,168.627C570.556,162.696,580.278,149.961,590,143.507C599.722,137.052,609.444,134.436,619.167,129.9C628.889,125.364,638.611,121.003,648.333,116.293C658.056,111.583,667.778,106.873,677.5,101.64C687.222,96.407,696.944,90.65,706.667,84.893C716.389,79.137,726.111,67.1,735.833,67.1C745.556,67.1,755.278,74.427,765,74.427C774.722,74.427,784.444,56.633,794.167,49.307C803.889,41.98,813.611,30.467,823.333,30.467C833.056,30.467,842.778,56.982,852.5,67.1C862.222,77.218,871.944,86.289,881.667,91.173C891.389,96.058,901.111,93.616,910.833,98.5C920.556,103.384,930.278,119.259,940,135.133"></path>
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
                      <g className="recharts-zIndex-layer_600" tabIndex={-1}>
                        <g className="recharts-layer recharts-line-dots">
                          <circle cx={65} cy={245.03333333333333} r={6} fill="var(--color-purple-500)" stroke="white" strokeWidth={2} filter="url(#dotShadow)"></circle>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <circle cx={531.6666666666667} cy={179.0933333333333} r={6} fill="var(--color-purple-500)" stroke="white" strokeWidth={2} filter="url(#dotShadow)"></circle>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <circle cx={823.3333333333334} cy={30.46666666666666} r={6} fill="var(--color-purple-500)" stroke="white" strokeWidth={2} filter="url(#dotShadow)"></circle>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                        <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={65} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={65} dy="0.71em">
                                {"Jan 1"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={123.33333333333334} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={123.33333333333334} dy="0.71em">
                                {"Jan 3"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={181.66666666666669} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={181.66666666666669} dy="0.71em">
                                {"Jan 5"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={240} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={240} dy="0.71em">
                                {"Jan 7"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={298.33333333333337} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={298.33333333333337} dy="0.71em">
                                {"Jan 9"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={356.6666666666667} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={356.6666666666667} dy="0.71em">
                                {"Jan 11"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={415} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={415} dy="0.71em">
                                {"Jan 13"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={473.33333333333337} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={473.33333333333337} dy="0.71em">
                                {"Jan 15"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={531.6666666666667} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={531.6666666666667} dy="0.71em">
                                {"Jan 17"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={590} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={590} dy="0.71em">
                                {"Jan 19"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={648.3333333333334} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={648.3333333333334} dy="0.71em">
                                {"Jan 21"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={706.6666666666667} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={706.6666666666667} dy="0.71em">
                                {"Jan 23"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={765} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={765} dy="0.71em">
                                {"Jan 25"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={823.3333333333334} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={823.3333333333334} dy="0.71em">
                                {"Jan 27"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={881.6666666666667} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={881.6666666666667} dy="0.71em">
                                {"Jan 29"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={875} stroke="none" fontSize="12" x={929.8203125} y={355} textAnchor="middle" fill="var(--color-purple-500)">
                              <tspan x={929.8203125} dy="0.71em">
                                {"Mar 24"}
                              </tspan>
                            </text>
                          </g>
                        </g>
                        <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width={60} height={314} stroke="none" fontSize="12" x={44} y={334} textAnchor="end" fill="var(--color-purple-500)">
                              <tspan x={44} dy="0.355em">
                                {"$0"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width={60} height={314} stroke="none" fontSize="12" x={44} y={255.5} textAnchor="end" fill="var(--color-purple-500)">
                              <tspan x={44} dy="0.355em">
                                {"$1,500"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width={60} height={314} stroke="none" fontSize="12" x={44} y={177} textAnchor="end" fill="var(--color-purple-500)">
                              <tspan x={44} dy="0.355em">
                                {"$3,000"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width={60} height={314} stroke="none" fontSize="12" x={44} y={98.5} textAnchor="end" fill="var(--color-purple-500)">
                              <tspan x={44} dy="0.355em">
                                {"$4,500"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width={60} height={314} stroke="none" fontSize="12" x={44} y={20} textAnchor="end" fill="var(--color-purple-500)">
                              <tspan x={44} dy="0.355em">
                                {"$6,000"}
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
        </FramePanel>
      </Frame>
    </div>
  )
}
