import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 min-h-svh p-10 w-full">
      <Card className="bg-zinc-950 border-zinc-800 lg:max-w-3xl text-white w-full" size="default">
        <CardHeader className="flex gap-3 items-center justify-between py-2">
          <div className="flex flex-wrap gap-5 items-end">
            <div className="me-2.5 min-w-40 space-y-0.5">
              <div className="mb-1 text-sm text-zinc-400">
                {"Total Value Locked"}
              </div>
              <div className="font-bold leading-none text-3xl">
                {"$7,500.15"}
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 items-center mb-1.5">
              <div className="pe-10 space-y-0.5">
                <div className="flex font-normal gap-1.5 items-center text-[11px]" style={{color: "var(--color-emerald-500)"}}>
                  <div className="rounded-full size-1.5" style={{backgroundColor: "var(--color-emerald-500)"}}></div>
                  {"Total Deposits"}
                </div>
                <div className="font-bold leading-none text-xl">
                  {"$4,400.43"}
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="flex font-normal gap-1.5 items-center text-[11px]" style={{color: "var(--color-fuchsia-500)"}}>
                  <div className="rounded-full size-1.5" style={{backgroundColor: "var(--color-fuchsia-500)"}}></div>
                  {"Total Borrowed"}
                </div>
                <div className="font-bold leading-none text-xl">
                  {"$3,100.15"}
                </div>
              </div>
            </div>
          </div>
          <CardAction>
            <Tabs data-orientation="horizontal" activationDirection="left">
              <TabsList className="bg-zinc-800 border-0 p-1 rounded-full" data-orientation="horizontal" activationDirection="left" role="tablist" variant="default">
                <TabsTrigger className="border-0 data-active:bg-zinc-700 data-active:text-white hover:text-white px-4 py-2 rounded-full shadow-none text-sm text-zinc-400" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" extracted="1" data-active="" compositeItemActive="">
                  {"Day"}
                </TabsTrigger>
                <TabsTrigger className="border-0 data-active:bg-zinc-700 data-active:text-white hover:text-white px-4 py-2 rounded-full shadow-none text-sm text-zinc-400" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                  {"Week"}
                </TabsTrigger>
                <TabsTrigger className="border-0 data-active:bg-zinc-700 data-active:text-white hover:text-white px-4 py-2 rounded-full shadow-none text-sm text-zinc-400" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                  {"Month"}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardAction>
        </CardHeader>
        <CardContent className="pe-4.5 ps-2.5">
          <div className="h-[300px] w-full">
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-full justify-center overflow-visible text-xs w-full" data-chart="chart-_r_3_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-totalDeposits: var(--color-emerald-500);\n  --color-totalBorrowed: var(--color-fuchsia-500);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-totalDeposits: var(--color-emerald-500);\n  --color-totalBorrowed: var(--color-fuchsia-500);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width="740" height="300" style={{position: "relative", cursor: "default", width: "740px", height: "300px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex="0" width="740" height="300" viewBox="0 0 740 300" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x="65" y="20" height="230" width="670"></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <lineargradient id="depositsAreaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-emerald-500)" stopOpacity="0.3"></stop>
                          <stop offset="100%" stopColor="var(--color-emerald-500)" stopOpacity="0.02"></stop>
                        </lineargradient>
                        <lineargradient id="borrowedAreaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-fuchsia-500)" stopOpacity="0.3"></stop>
                          <stop offset="100%" stopColor="var(--color-fuchsia-500)" stopOpacity="0.02"></stop>
                        </lineargradient>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex="-1">
                        <g className="recharts-area recharts-layer">
                          <g className="recharts-layer">
                            <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#depositsAreaGradient)" fillOpacity="0.6" height="230" stroke="none" width="670" id="recharts-area-_r_4_" d="M65,43C109.667,84.688,154.333,126.375,199,126.375C243.667,126.375,288.333,122.542,333,120.625C377.667,118.708,422.333,114.875,467,114.875C511.667,114.875,556.333,116.313,601,117.75C645.667,119.188,690.333,121.344,735,123.5L735,250C690.333,250,645.667,250,601,250C556.333,250,511.667,250,467,250C422.333,250,377.667,250,333,250C288.333,250,243.667,250,199,250C154.333,250,109.667,250,65,250Z"></path>
                            <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="230" stroke="transparent" width="670" d="M65,43C109.667,84.688,154.333,126.375,199,126.375C243.667,126.375,288.333,122.542,333,120.625C377.667,118.708,422.333,114.875,467,114.875C511.667,114.875,556.333,116.313,601,117.75C645.667,119.188,690.333,121.344,735,123.5"></path>
                          </g>
                        </g>
                        <g className="recharts-area recharts-layer">
                          <g className="recharts-layer">
                            <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#borrowedAreaGradient)" fillOpacity="0.6" height="230" stroke="none" width="670" id="recharts-area-_r_5_" d="M65,160.875C109.667,159.917,154.333,158.958,199,158C243.667,157.042,288.333,155.125,333,155.125C377.667,155.125,422.333,155.125,467,155.125C511.667,155.125,556.333,157.042,601,158C645.667,158.958,690.333,159.917,735,160.875L735,250C690.333,250,645.667,250,601,250C556.333,250,511.667,250,467,250C422.333,250,377.667,250,333,250C288.333,250,243.667,250,199,250C154.333,250,109.667,250,65,250Z"></path>
                            <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="230" stroke="transparent" width="670" d="M65,160.875C109.667,159.917,154.333,158.958,199,158C243.667,157.042,288.333,155.125,333,155.125C377.667,155.125,422.333,155.125,467,155.125C511.667,155.125,556.333,157.042,601,158C645.667,158.958,690.333,159.917,735,160.875"></path>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_400" tabIndex="-1">
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-emerald-500)" strokeWidth="2" fill="none" id="recharts-line-_r_6_" height="230" width="670" strokeDasharray="697.7008056640625px 697.7008056640625px" d="M65,43C109.667,84.688,154.333,126.375,199,126.375C243.667,126.375,288.333,122.542,333,120.625C377.667,118.708,422.333,114.875,467,114.875C511.667,114.875,556.333,116.313,601,117.75C645.667,119.188,690.333,121.344,735,123.5"></path>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-fuchsia-500)" strokeWidth="2" fill="none" id="recharts-line-_r_7_" height="230" width="670" strokeDasharray="670.131591796875px 670.131591796875px" d="M65,160.875C109.667,159.917,154.333,158.958,199,158C243.667,157.042,288.333,155.125,333,155.125C377.667,155.125,422.333,155.125,467,155.125C511.667,155.125,556.333,157.042,601,158C645.667,158.958,690.333,159.917,735,160.875"></path>
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
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-emerald-500)" height="230" width="670" cx="65" cy="42.99999999999999"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-emerald-500)" height="230" width="670" cx="199" cy="126.375"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-emerald-500)" height="230" width="670" cx="333" cy="120.625"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-emerald-500)" height="230" width="670" cx="467" cy="114.875"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-emerald-500)" height="230" width="670" cx="601" cy="117.75000000000001"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-emerald-500)" height="230" width="670" cx="735" cy="123.49999999999999"></circle>
                        </g>
                        <g className="recharts-layer recharts-line-dots">
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-fuchsia-500)" height="230" width="670" cx="65" cy="160.875"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-fuchsia-500)" height="230" width="670" cx="199" cy="158"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-fuchsia-500)" height="230" width="670" cx="333" cy="155.125"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-fuchsia-500)" height="230" width="670" cx="467" cy="155.125"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-fuchsia-500)" height="230" width="670" cx="601" cy="158"></circle>
                          <circle className="recharts-dot recharts-line-dot" r="4" stroke="white" strokeWidth="2" fill="var(--color-fuchsia-500)" height="230" width="670" cx="735" cy="160.875"></circle>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                        <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="670" stroke="none" fontSize="12" x="65" y="271" textAnchor="middle" fill="rgb(148 163 184)">
                              <tspan x="65" dy="0.71em">
                                {"00:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="670" stroke="none" fontSize="12" x="199" y="271" textAnchor="middle" fill="rgb(148 163 184)">
                              <tspan x="199" dy="0.71em">
                                {"04:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="670" stroke="none" fontSize="12" x="333" y="271" textAnchor="middle" fill="rgb(148 163 184)">
                              <tspan x="333" dy="0.71em">
                                {"08:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="670" stroke="none" fontSize="12" x="467" y="271" textAnchor="middle" fill="rgb(148 163 184)">
                              <tspan x="467" dy="0.71em">
                                {"12:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="670" stroke="none" fontSize="12" x="601" y="271" textAnchor="middle" fill="rgb(148 163 184)">
                              <tspan x="601" dy="0.71em">
                                {"16:00"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="670" stroke="none" fontSize="12" x="723.25" y="271" textAnchor="middle" fill="rgb(148 163 184)">
                              <tspan x="723.25" dy="0.71em">
                                {"20:00"}
                              </tspan>
                            </text>
                          </g>
                        </g>
                        <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="230" stroke="none" fontSize="12" x="44" y="250" textAnchor="end" fill="rgb(148 163 184)">
                              <tspan x="44" dy="0.355em">
                                {"$0.0M"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="230" stroke="none" fontSize="12" x="44" y="192.5" textAnchor="end" fill="rgb(148 163 184)">
                              <tspan x="44" dy="0.355em">
                                {"$2.0M"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="230" stroke="none" fontSize="12" x="44" y="135" textAnchor="end" fill="rgb(148 163 184)">
                              <tspan x="44" dy="0.355em">
                                {"$4.0M"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="230" stroke="none" fontSize="12" x="44" y="77.5" textAnchor="end" fill="rgb(148 163 184)">
                              <tspan x="44" dy="0.355em">
                                {"$6.0M"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" width="60" height="230" stroke="none" fontSize="12" x="44" y="20" textAnchor="end" fill="rgb(148 163 184)">
                              <tspan x="44" dy="0.355em">
                                {"$8.0M"}
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
        </CardContent>
      </Card>
    </div>
  )
}
