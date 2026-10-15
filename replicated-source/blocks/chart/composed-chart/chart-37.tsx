import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-2xl min-w-0 w-full" spacing="default">
        <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-px">
            <div className="flex gap-2 items-center">
              <div className="font-semibold text-sm">
                Latency
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                Over limit
              </Badge>
            </div>
            <div className="text-muted-foreground text-xs">
              p95 in milliseconds
            </div>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
            <span className="font-mono gap-1.5 inline-flex items-center">
              <span className="bg-sky-500 rounded-full size-2" aria-hidden="true"></span>
              v2.3.2
            </span>
            <span className="font-mono gap-1.5 inline-flex items-center">
              <span className="bg-slate-500 rounded-full size-2" aria-hidden="true"></span>
              v2.3.1
            </span>
          </div>
        </header>
        <FramePanel>
          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-40 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_1_">
            <style>{`
 [data-chart=chart-_r_1_] {
  --color-release: var(--color-sky-500);
  --color-baseline: var(--color-slate-500);
}


.dark [data-chart=chart-_r_1_] {
  --color-release: var(--color-sky-500);
  --color-baseline: var(--color-slate-500);
}
`}</style>
            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                <div className="recharts-wrapper" width="630" height="160" style={{position: "relative", cursor: "default", width: "630px", height: "160px"}}>
                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                  <svg className="recharts-surface" role="application" tabIndex="0" width="630" height="160" viewBox="0 0 630 160" style={{width: "100%", height: "100%", display: "block"}}>
                    <title></title>
                    <desc></desc>
                    <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                      <g className="recharts-cartesian-grid">
                        <g className="recharts-cartesian-grid-horizontal">
                          <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="614" height="118" x1="8" y1="130" x2="622" y2="130"></line>
                          <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="614" height="118" x1="8" y1="99.56349206349208" x2="622" y2="99.56349206349208"></line>
                          <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="614" height="118" x1="8" y1="69.12698412698413" x2="622" y2="69.12698412698413"></line>
                          <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="614" height="118" x1="8" y1="12" x2="622" y2="12"></line>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                    <defs>
                      <clippath id="recharts1-clip">
                        <rect x="8" y="12" height="118" width="614"></rect>
                      </clippath>
                    </defs>
                    <defs>
                      <lineargradient id="_r_0_-release" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-release)" stopOpacity="0.2"></stop>
                        <stop offset="100%" stopColor="var(--color-release)" stopOpacity="0"></stop>
                      </lineargradient>
                    </defs>
                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                      <g className="recharts-area recharts-layer">
                        <g className="recharts-layer">
                          <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_2_)">
                            <g className="recharts-layer">
                              <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#_r_0_-release)" fillOpacity="0.6" height="118" stroke="none" width="614" id="recharts-area-_r_2_" d="M8,95.349C25.056,95.349,42.111,95.349,59.167,95.349C76.222,95.349,93.278,95.349,110.333,95.349C127.389,95.349,144.444,91.104,161.5,88.981C178.556,86.858,195.611,84.735,212.667,82.613C229.722,80.49,246.778,78.367,263.833,76.244C280.889,74.122,297.944,71.999,315,69.876C332.056,67.753,349.111,65.631,366.167,63.508C383.222,61.385,400.278,59.262,417.333,57.14C434.389,55.017,451.444,52.894,468.5,50.771C485.556,48.649,502.611,46.526,519.667,44.403C536.722,42.28,553.778,40.158,570.833,38.035C587.889,35.912,604.944,33.789,622,31.667L622,130C604.944,130,587.889,130,570.833,130C553.778,130,536.722,130,519.667,130C502.611,130,485.556,130,468.5,130C451.444,130,434.389,130,417.333,130C400.278,130,383.222,130,366.167,130C349.111,130,332.056,130,315,130C297.944,130,280.889,130,263.833,130C246.778,130,229.722,130,212.667,130C195.611,130,178.556,130,161.5,130C144.444,130,127.389,130,110.333,130C93.278,130,76.222,130,59.167,130C42.111,130,25.056,130,8,130Z"></path>
                              <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="118" stroke="transparent" width="614" d="M8,95.349C25.056,95.349,42.111,95.349,59.167,95.349C76.222,95.349,93.278,95.349,110.333,95.349C127.389,95.349,144.444,91.104,161.5,88.981C178.556,86.858,195.611,84.735,212.667,82.613C229.722,80.49,246.778,78.367,263.833,76.244C280.889,74.122,297.944,71.999,315,69.876C332.056,67.753,349.111,65.631,366.167,63.508C383.222,61.385,400.278,59.262,417.333,57.14C434.389,55.017,451.444,52.894,468.5,50.771C485.556,48.649,502.611,46.526,519.667,44.403C536.722,42.28,553.778,40.158,570.833,38.035C587.889,35.912,604.944,33.789,622,31.667"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                    <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                    <g className="recharts-zIndex-layer_400" tabIndex="-1">
                      <g className="recharts-layer recharts-reference-line">
                        <line className="recharts-reference-line-line" y="120" stroke="var(--destructive)" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="8" y1="73.80952380952381" x2="622" y2="73.80952380952381"></line>
                      </g>
                      <g className="recharts-layer recharts-reference-line">
                        <line className="recharts-reference-line-line" x="0:00" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="8" y1="130" x2="8" y2="12"></line>
                      </g>
                      <g className="recharts-layer recharts-reference-line">
                        <line className="recharts-reference-line-line" x="2:00" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="622" y1="130" x2="622" y2="12"></line>
                      </g>
                      <g className="recharts-layer recharts-line">
                        <g className="recharts-layer recharts-shape">
                          <path className="recharts-curve recharts-line-curve" stroke="var(--color-release)" strokeWidth="2" fill="none" id="recharts-line-_r_3_" height="118" width="614" d="M8,95.349C25.056,95.349,42.111,95.349,59.167,95.349C76.222,95.349,93.278,95.349,110.333,95.349C127.389,95.349,144.444,91.104,161.5,88.981C178.556,86.858,195.611,84.735,212.667,82.613C229.722,80.49,246.778,78.367,263.833,76.244C280.889,74.122,297.944,71.999,315,69.876C332.056,67.753,349.111,65.631,366.167,63.508C383.222,61.385,400.278,59.262,417.333,57.14C434.389,55.017,451.444,52.894,468.5,50.771C485.556,48.649,502.611,46.526,519.667,44.403C536.722,42.28,553.778,40.158,570.833,38.035C587.889,35.912,604.944,33.789,622,31.667"></path>
                        </g>
                      </g>
                      <g className="recharts-layer recharts-line">
                        <g className="recharts-layer recharts-shape">
                          <path className="recharts-curve recharts-line-curve" stroke="var(--color-baseline)" strokeDasharray="4 4" strokeWidth="2" fill="none" id="recharts-line-_r_4_" height="118" width="614" d="M8,96.735C25.056,96.427,42.111,96.119,59.167,95.811C76.222,95.503,93.278,95.195,110.333,94.887C127.389,94.579,144.444,93.963,161.5,93.963C178.556,93.963,195.611,96.735,212.667,96.735C229.722,96.735,246.778,96.119,263.833,95.811C280.889,95.503,297.944,95.195,315,94.887C332.056,94.579,349.111,93.963,366.167,93.963C383.222,93.963,400.278,96.735,417.333,96.735C434.389,96.735,451.444,96.119,468.5,95.811C485.556,95.503,502.611,95.195,519.667,94.887C536.722,94.579,553.778,93.963,570.833,93.963C587.889,93.963,604.944,95.349,622,96.735"></path>
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
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="614" stroke="none" x="110.33333333333333" y="144" textAnchor="middle" fill="#666">
                            <tspan x="110.33333333333333" dy="0.71em">
                              0:20
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="614" stroke="none" x="212.66666666666666" y="144" textAnchor="middle" fill="#666">
                            <tspan x="212.66666666666666" dy="0.71em">
                              0:40
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="614" stroke="none" x="315" y="144" textAnchor="middle" fill="#666">
                            <tspan x="315" dy="0.71em">
                              1:00
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="614" stroke="none" x="417.3333333333333" y="144" textAnchor="middle" fill="#666">
                            <tspan x="417.3333333333333" dy="0.71em">
                              1:20
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="614" stroke="none" x="519.6666666666666" y="144" textAnchor="middle" fill="#666">
                            <tspan x="519.6666666666666" dy="0.71em">
                              1:40
                            </tspan>
                          </text>
                        </g>
                        <g className="recharts-cartesian-axis-tick-label recharts-layer">
                          <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="614" stroke="none" x="617.0390625" y="144" textAnchor="middle" fill="#666">
                            <tspan x="617.0390625" dy="0.71em">
                              2:00
                            </tspan>
                          </text>
                        </g>
                      </g>
                      <text className="recharts-label recharts-text" offset="5" x="617" y="78.80952380952381" textAnchor="end" fill="var(--destructive)">
                        <tspan x="617" dy="0.71em">
                          Limit 120 ms
                        </tspan>
                      </text>
                      <text className="recharts-label recharts-text" offset="5" x="13" y="17" textAnchor="start" fill="var(--muted-foreground)">
                        <tspan x="13" dy="0.71em">
                          25%
                        </tspan>
                      </text>
                      <text className="recharts-label recharts-text" offset="5" x="617" y="17" textAnchor="end" fill="var(--muted-foreground)">
                        <tspan x="617" dy="0.71em">
                          Rolled back
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
