import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 max-w-7xl sm:grid-cols-2 w-full">
        <Frame className="min-w-0" spacing="default">
          <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-1 gap-3 items-center min-w-0">
              <IconTile variant="frame" size="sm" aria-hidden="true">
                <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </IconTile>
              <div className="flex flex-col gap-px min-w-0">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                  <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                    Meeting Objective
                  </div>
                </div>
                <div className="text-muted-foreground text-xs truncate">
                  SLOs with budget left
                </div>
              </div>
            </div>
          </header>
          <FramePanel className="flex flex-col gap-3">
            <div className="flex gap-2 items-center min-w-0">
              <span className="font-semibold shrink-0 tabular-nums text-2xl tracking-tight whitespace-nowrap">
                16
                <span className="font-normal ms-1 text-muted-foreground text-sm">
                  of 18
                </span>
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-destructive bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
                <span className="sr-only">
                  Down
                </span>
                1
                <span className="sr-only">
                  vs 7 days ago
                </span>
              </Badge>
            </div>
            <div className="[&_[class*=recharts-zIndex-layer]]:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid min-w-0 mt-auto outline-hidden" role="group" aria-label="Budget left by SLO, lowest first: 12 healthy, 4 at risk, 2 exhausted. Newest miss Ledger write success, Sep 25" tabIndex="0">
              <div className="flex flex-col h-10 min-w-0 relative">
                <div className="absolute bg-linear-to-b bottom-0 from-foreground/2 left-0 pointer-events-none to-foreground/8 top-0" aria-hidden="true" style={{width: "12px", borderRadius: "6px", transform: "translateX(6.94444px)"}}></div>
                <div className="flex-1 min-h-0 relative">
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible aspect-auto cn-chart flex justify-center min-w-0 size-full text-xs" data-chart="chart-_r_0_">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="262" height="40" style={{position: "relative", cursor: "default", width: "262px", height: "40px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" width="262" height="40" viewBox="0 0 262 40" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="6" y="4" height="32" width="250"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="0" stroke="var(--foreground)" strokeOpacity="0.25" fill="none" fillOpacity="1" strokeWidth="1" x1="6" y1="25.333333333333336" x2="256" y2="25.333333333333336"></line>
                              </g>
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="0.25" stroke="var(--warning)" strokeOpacity="0.5" strokeDasharray="2 3" fill="none" fillOpacity="1" strokeWidth="1" x1="6" y1="20" x2="256" y2="20"></line>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_4_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="12.88888888888889" x2="12.88888888888889" y1="25.333333333333336" y2="28.857930357358967" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="12.88888888888889" cy="34.35793035735897" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="26.77777777777778" cy="29.51639005744377" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="40.666666666666664" cy="22.189473684210512" r="2.5" fill="var(--warning)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="54.55555555555556" cy="22.11981855154073" r="2.5" fill="var(--warning)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="68.44444444444444" x2="68.44444444444444" y1="25.333333333333336" y2="22.692440123889586" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="68.44444444444444" cy="17.192440123889586" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="82.33333333333333" x2="82.33333333333333" y1="25.333333333333336" y2="20.488239162779855" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="82.33333333333333" cy="14.988239162779855" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="96.22222222222223" x2="96.22222222222223" y1="25.333333333333336" y2="19.611659674921214" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="96.22222222222223" cy="14.111659674921214" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="110.11111111111111" x2="110.11111111111111" y1="25.333333333333336" y2="18.17986226297099" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="110.11111111111111" cy="12.679862262970989" r="5.5" fill="none" stroke="var(--warning)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                          <circle cx="110.11111111111111" cy="12.679862262970989" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="124" x2="124" y1="25.333333333333336" y2="17.87443381982888" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="124" cy="12.37443381982888" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="137.88888888888889" x2="137.88888888888889" y1="25.333333333333336" y2="16.298645268124332" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="137.88888888888889" cy="10.798645268124332" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="151.77777777777777" x2="151.77777777777777" y1="25.333333333333336" y2="16.250960467963" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="151.77777777777777" cy="10.750960467963" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="165.66666666666666" x2="165.66666666666666" y1="25.333333333333336" y2="15.876635751463098" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="165.66666666666666" cy="10.376635751463098" r="5.5" fill="none" stroke="var(--warning)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                          <circle cx="165.66666666666666" cy="10.376635751463098" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="179.55555555555557" x2="179.55555555555557" y1="25.333333333333336" y2="15.828675643574218" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="179.55555555555557" cy="10.328675643574218" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="193.44444444444446" x2="193.44444444444446" y1="25.333333333333336" y2="14.511104854021728" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="193.44444444444446" cy="9.011104854021728" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="207.33333333333334" x2="207.33333333333334" y1="25.333333333333336" y2="14.215789473684207" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="207.33333333333334" cy="8.715789473684207" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="221.22222222222223" x2="221.22222222222223" y1="25.333333333333336" y2="12.718806309882467" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="221.22222222222223" cy="7.218806309882467" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="235.11111111111111" x2="235.11111111111111" y1="25.333333333333336" y2="11.989581883052779" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="235.11111111111111" cy="6.489581883052779" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="249" x2="249" y1="25.333333333333336" y2="11.67362310748366" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="249" cy="6.17362310748366" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-dot">
                                <circle aria-hidden="true" cx="12.944444444444445" cy="34.35793035735897" r="3.5" fill="var(--destructive)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container min-w-0">
              <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                <span className="@max-[15.5rem]:sr-only flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="text-foreground">
                    12
                  </span>
                  <span>
                    Healthy
                  </span>
                </span>
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="text-foreground">
                    4
                  </span>
                  <span>
                    At Risk
                  </span>
                </span>
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="text-foreground">
                    2
                  </span>
                  <span>
                    Exhausted
                  </span>
                </span>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-nowrap flex-row gap-2 items-center justify-start min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs" aria-live="off">
            <span className="shrink-0">
              Newest miss
            </span>
            <span className="font-medium min-w-0 text-[13px] text-foreground truncate">
              Ledger write success
            </span>
            <span className="ms-auto shrink-0 tabular-nums">
              Sep 25
            </span>
          </footer>
        </Frame>
        <Frame className="min-w-0" spacing="default">
          <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-1 gap-3 items-center min-w-0">
              <IconTile variant="frame" size="sm" aria-hidden="true">
                <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
              </IconTile>
              <div className="flex flex-col gap-px min-w-0">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                  <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                    Median Budget Left
                  </div>
                </div>
                <div className="text-muted-foreground text-xs truncate">
                  Fleet median, last 28 days
                </div>
              </div>
            </div>
          </header>
          <FramePanel className="flex flex-col gap-3">
            <div className="flex gap-2 items-center min-w-0">
              <span className="font-semibold shrink-0 tabular-nums text-2xl text-foreground tracking-tight whitespace-nowrap">
                64%
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-destructive bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
                <span className="sr-only">
                  Down
                </span>
                9 pts
                <span className="sr-only">
                  vs 7 days ago
                </span>
              </Badge>
            </div>
            <div className="[&_[class*=recharts-zIndex-layer]]:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid min-w-0 mt-auto outline-hidden" role="group" aria-label="Median budget left, last 28 days: low 64% on Sep 29. Lowest Ledger write success, 42% over budget" tabIndex="0">
              <div className="flex flex-col h-10 min-w-0 relative">
                <div className="absolute bg-linear-to-b bottom-0 from-foreground/2 left-0 pointer-events-none to-foreground/8 top-0" aria-hidden="true" style={{width: "12px", borderRadius: "6px", transform: "translateX(245.536px)"}}></div>
                <div className="flex-1 min-h-0 relative">
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible aspect-auto cn-chart flex justify-center min-w-0 size-full text-xs" data-chart="chart-_r_1_">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="262" height="40" style={{position: "relative", cursor: "default", width: "262px", height: "40px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" width="262" height="40" viewBox="0 0 262 40" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts2-clip">
                                <rect x="6" y="4" height="32" width="250"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="0.7313709775135813" stroke="var(--foreground)" strokeOpacity="0.25" strokeDasharray="2 3" fill="none" fillOpacity="1" strokeWidth="1" x1="6" y1="16.202642996918637" x2="256" y2="16.202642996918637"></line>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_5_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="10.392857142857142" x2="10.392857142857142" y1="16.202642996918637" y2="13.605369874614695" stroke="var(--muted-foreground)" strokeOpacity="0.16" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="10.392857142857142" cy="8.105369874614695" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="19.32142857142857" x2="19.32142857142857" y1="16.202642996918637" y2="13.971398986163038" stroke="var(--muted-foreground)" strokeOpacity="0.16" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="19.32142857142857" cy="8.471398986163038" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="28.25" x2="28.25" y1="16.202642996918637" y2="13.624683547816936" stroke="var(--muted-foreground)" strokeOpacity="0.16" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="28.25" cy="8.124683547816936" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="37.17857142857143" x2="37.17857142857143" y1="16.202642996918637" y2="13.200785784543314" stroke="var(--muted-foreground)" strokeOpacity="0.16" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="37.17857142857143" cy="7.700785784543314" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="46.10714285714286" x2="46.10714285714286" y1="16.202642996918637" y2="13.99722191198612" stroke="var(--muted-foreground)" strokeOpacity="0.16" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="46.10714285714286" cy="8.49722191198612" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="55.03571428571429" cy="9.62741116959414" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="63.964285714285715" cy="10.70370409177751" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="72.89285714285714" cy="10.88162414985204" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="81.82142857142857" cy="10.309187877832443" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="90.75" cy="10.635111378479632" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="99.67857142857143" cy="10.612280354604994" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="108.60714285714286" cy="10.58503868534681" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="117.53571428571428" cy="10.727836504803253" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="126.46428571428571" cy="10.897236273275801" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="135.39285714285714" cy="11.013982243501662" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="144.32142857142858" cy="10.715950269178215" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="153.25" cy="10.943853752281179" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="162.17857142857142" cy="10.952337654652283" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="171.10714285714286" cy="11.685214460144454" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="180.03571428571428" cy="15.608510260316361" r="2.5" fill="var(--muted-foreground)" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="188.96428571428572" cy="16.202642996918637" r="3.5" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="1.5" opacity="0.45"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="197.89285714285714" x2="197.89285714285714" y1="16.202642996918637" y2="18.922989770218802" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="197.89285714285714" cy="24.422989770218802" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="206.82142857142858" x2="206.82142857142858" y1="16.202642996918637" y2="24.3676388175228" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="206.82142857142858" cy="29.8676388175228" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="215.75" x2="215.75" y1="16.202642996918637" y2="24.952922643972027" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="215.75" cy="30.452922643972027" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="224.67857142857142" x2="224.67857142857142" y1="16.202642996918637" y2="23.336676500080383" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="224.67857142857142" cy="28.836676500080383" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="233.60714285714286" x2="233.60714285714286" y1="16.202642996918637" y2="23.341460578056875" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="233.60714285714286" cy="28.841460578056875" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="242.53571428571428" x2="242.53571428571428" y1="16.202642996918637" y2="22.090201300374687" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="242.53571428571428" cy="27.590201300374687" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="251.46428571428572" x2="251.46428571428572" y1="16.202642996918637" y2="26.799214215456686" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="251.46428571428572" cy="32.299214215456686" r="2.5" fill="var(--success)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-dot">
                                <circle aria-hidden="true" cx="251.5357142857143" cy="32.299214215456686" r="3.5" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container min-w-0">
              <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <svg className="shrink-0" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
                    <line x1="0" x2="12" y1="6" y2="6" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeDasharray="3 1.5"></line>
                  </svg>
                  <span className="text-foreground">
                    73%
                  </span>
                  <span className="@max-[9rem]:sr-only">
                    on Sep 22
                  </span>
                </span>
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{background: "var(--success)"}}></span>
                  <span className="text-foreground">
                    64%
                  </span>
                  <span className="@max-[9rem]:sr-only">
                    today
                  </span>
                </span>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-nowrap flex-row gap-2 items-center justify-start min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs" aria-live="off">
            <span className="shrink-0">
              Lowest
            </span>
            <span className="font-medium min-w-0 text-[13px] text-foreground truncate">
              Ledger write success
            </span>
            <span className="ms-auto shrink-0 tabular-nums">
              <span className="font-medium text-destructive">
                42%
              </span>
              over
            </span>
          </footer>
        </Frame>
        <Frame className="min-w-0" spacing="default">
          <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-1 gap-3 items-center min-w-0">
              <IconTile variant="frame" size="sm" aria-hidden="true">
                <svg className="lucide lucide-flame" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlameIcon" tabler="IconFlame" hugeicons="Fire02Icon" phosphor="FlameIcon" remixicon="RiFireLine" aria-hidden="true">
                  <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
                </svg>
              </IconTile>
              <div className="flex flex-col gap-px min-w-0">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                  <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                    Burning Now
                  </div>
                </div>
                <div className="text-muted-foreground text-xs truncate">
                  Hourly fleet peak, last 24h
                </div>
              </div>
            </div>
          </header>
          <FramePanel className="flex flex-col gap-3">
            <div className="flex gap-2 items-center min-w-0">
              <span className="font-semibold shrink-0 tabular-nums text-2xl tracking-tight whitespace-nowrap">
                2
                <span className="font-normal ms-1 text-muted-foreground text-sm">
                  alerting
                </span>
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                1 Paging
              </Badge>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                1 Ticket
              </Badge>
            </div>
            <div className="[&_[class*=recharts-zIndex-layer]]:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid min-w-0 mt-auto outline-hidden" role="group" aria-label="Peak burn by hour, last 24 hours: 5 hours over the 14.4× page line. Peak Payout batch on time at 90×, 15:20. Hottest now Webhook delivery success at 18×" tabIndex="0">
              <div className="flex flex-col h-10 min-w-0 relative">
                <div className="absolute bg-linear-to-b bottom-0 from-foreground/2 left-0 pointer-events-none to-foreground/8 top-0" aria-hidden="true" style={{width: "12px", borderRadius: "6px", transform: "translateX(244.792px)"}}></div>
                <div className="flex-1 min-h-0 relative">
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible aspect-auto cn-chart flex justify-center min-w-0 size-full text-xs" data-chart="chart-_r_2_">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="262" height="40" style={{position: "relative", cursor: "default", width: "262px", height: "40px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" width="262" height="40" viewBox="0 0 262 40" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts3-clip">
                                <rect x="6" y="4" height="32" width="250"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="0" stroke="var(--foreground)" strokeOpacity="0.25" fill="none" fillOpacity="1" strokeWidth="1" x1="6" y1="25.333333333333336" x2="256" y2="25.333333333333336"></line>
                              </g>
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="1.1583624920952498" stroke="var(--destructive)" strokeOpacity="0.5" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="6" y1="12.977466750984004" x2="256" y2="12.977466750984004"></line>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_6_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="11.041666666666666" x2="11.041666666666666" y1="25.333333333333336" y2="9.985145234034576" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="11.041666666666666" cy="4.485145234034576" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="21.458333333333332" x2="21.458333333333332" y1="25.333333333333336" y2="13.992285248630008" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="21.458333333333332" cy="8.492285248630008" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="31.875" cy="27.390330739732114" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="42.291666666666664" cy="26.997205358153202" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="52.70833333333333" cy="27.883946892231236" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="63.12499999999999" cy="28.75032087801191" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="73.54166666666667" cy="29.50480421473814" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="83.95833333333333" cy="28.784214198353222" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="94.375" cy="28.897811276593806" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="104.79166666666667" cy="27.580444930412085" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="115.20833333333333" cy="27.80732889208327" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="125.625" x2="125.625" y1="25.333333333333336" y2="13.415618387075018" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="125.625" cy="7.915618387075018" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="136.04166666666666" cy="28.369558481488173" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="146.45833333333331" cy="27.367035705527066" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="156.87499999999997" cy="28.862778695558504" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="167.29166666666666" cy="27.70792175132007" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="177.70833333333331" cy="27.751048224975296" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="188.12499999999997" cy="27.433479378016933" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="198.54166666666666" cy="28.493606207626513" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="208.95833333333331" cy="29.27421090134423" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="219.37499999999997" x2="219.37499999999997" y1="25.333333333333336" y2="11.00311621730199" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="219.37499999999997" cy="5.50311621730199" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="229.79166666666666" cy="28.689624628333863" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <circle cx="240.20833333333331" cy="18.217471626328592" r="2.5" fill="var(--warning)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="250.62499999999997" x2="250.62499999999997" y1="25.333333333333336" y2="17.35668787590657" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="250.62499999999997" cy="11.85668787590657" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-dot">
                                <circle aria-hidden="true" cx="250.79166666666666" cy="11.85668787590657" r="3.5" fill="var(--destructive)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container min-w-0">
              <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="text-foreground">
                    5h
                  </span>
                  <span className="@max-[9rem]:sr-only">
                    over page
                  </span>
                </span>
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="text-foreground">
                    1h
                  </span>
                  <span className="@max-[9rem]:sr-only">
                    over pace
                  </span>
                </span>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-nowrap flex-row gap-2 items-center justify-start min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs" aria-live="off">
            <span className="shrink-0">
              Hottest
            </span>
            <span className="font-medium min-w-0 text-[13px] text-foreground truncate">
              Webhook delivery success
            </span>
            <span className="font-medium ms-auto shrink-0 tabular-nums text-destructive">
              18×
            </span>
          </footer>
        </Frame>
        <Frame className="min-w-0" spacing="default">
          <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-1 gap-3 items-center min-w-0">
              <IconTile variant="frame" size="sm" aria-hidden="true">
                <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                  <path d="M16 14v2.2l1.6 1"></path>
                  <path d="M16 2v4"></path>
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                  <path d="M3 10h5"></path>
                  <path d="M8 2v4"></path>
                  <circle cx="16" cy="16" r="6"></circle>
                </svg>
              </IconTile>
              <div className="flex flex-col gap-px min-w-0">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                  <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                    Budget Events
                  </div>
                </div>
                <div className="text-muted-foreground text-xs truncate">
                  Incidents and changes, 28 days
                </div>
              </div>
            </div>
          </header>
          <FramePanel className="flex flex-col gap-3">
            <div className="flex gap-2 items-center min-w-0">
              <span className="font-semibold shrink-0 tabular-nums text-2xl tracking-tight whitespace-nowrap">
                14
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                MTTR 1h 34m
              </Badge>
            </div>
            <div className="[&_[class*=recharts-zIndex-layer]]:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid min-w-0 mt-auto outline-hidden" role="group" aria-label="14 events in 28 days, 5 incidents. Latest Webhook retry storm, ongoing" tabIndex="0">
              <div className="flex flex-col h-10 min-w-0 relative">
                <div className="absolute bg-linear-to-b bottom-0 from-foreground/2 left-0 pointer-events-none to-foreground/8 top-0" aria-hidden="true" style={{width: "12px", borderRadius: "6px", transform: "translateX(245.536px)"}}></div>
                <div className="flex-1 min-h-0 relative">
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible aspect-auto cn-chart flex justify-center min-w-0 size-full text-xs" data-chart="chart-_r_3_">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="262" height="40" style={{position: "relative", cursor: "default", width: "262px", height: "40px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" width="262" height="40" viewBox="0 0 262 40" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts4-clip">
                                <rect x="6" y="4" height="32" width="250"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_7_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="10.392857142857142" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="19.32142857142857" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="28.25" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="37.17857142857143" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="46.10714285714286" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="55.03571428571429" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="63.964285714285715" x2="63.964285714285715" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="63.964285714285715" cy="29" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="72.89285714285714" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="81.82142857142857" x2="81.82142857142857" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="81.82142857142857" cy="29" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="90.75" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="99.67857142857143" x2="99.67857142857143" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="99.67857142857143" cy="29" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="108.60714285714286" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="117.53571428571428" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="126.46428571428571" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="135.39285714285714" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="144.32142857142858" x2="144.32142857142858" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="144.32142857142858" cy="29" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="153.25" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="162.17857142857142" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="171.10714285714286" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="180.03571428571428" x2="180.03571428571428" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="180.03571428571428" cy="29" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="188.96428571428572" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="197.89285714285714" x2="197.89285714285714" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="197.89285714285714" cy="29" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="206.82142857142858" x2="206.82142857142858" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="206.82142857142858" cy="29" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <circle aria-hidden="true" cx="215.75" cy="33" r="1" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="224.67857142857142" x2="224.67857142857142" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="224.67857142857142" cy="29" r="2.5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="233.60714285714286" x2="233.60714285714286" y1="33" y2="22" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="233.60714285714286" cy="29" r="2.5" fill="var(--destructive)"></circle>
                                          <circle cx="233.60714285714286" cy="22" r="2.5" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="1.25"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="242.53571428571428" x2="242.53571428571428" y1="33" y2="29" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="242.53571428571428" cy="29" r="2.5" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="251.46428571428572" x2="251.46428571428572" y1="33" y2="15" stroke="var(--muted-foreground)" strokeOpacity="0.3" strokeWidth="1"></line>
                                          <circle cx="251.46428571428572" cy="29" r="5.5" fill="var(--destructive)" fillOpacity="0.18"></circle>
                                          <circle cx="251.46428571428572" cy="29" r="2.5" fill="var(--destructive)"></circle>
                                          <circle cx="251.46428571428572" cy="22" r="2.5" fill="var(--muted-foreground)"></circle>
                                          <circle cx="251.46428571428572" cy="15" r="3" fill="var(--muted-foreground)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
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
                </div>
              </div>
            </div>
            <div className="@container min-w-0">
              <div className="flex flex-wrap font-medium gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="text-foreground">
                    5
                  </span>
                  <span className="@max-[9rem]:sr-only">
                    Incidents
                  </span>
                </span>
                <span className="flex gap-1 items-center tabular-nums whitespace-nowrap">
                  <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  <span className="text-foreground">
                    9
                  </span>
                  <span className="@max-[9rem]:sr-only">
                    Other
                  </span>
                </span>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-nowrap flex-row gap-2 items-center justify-start min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs" aria-live="off">
            <span className="shrink-0">
              Latest
            </span>
            <span className="font-medium min-w-0 text-[13px] text-foreground truncate">
              Webhook retry storm
            </span>
            <span className="dark:text-warning ms-auto shrink-0 text-warning-foreground">
              Ongoing
            </span>
          </footer>
        </Frame>
      </div>
    </div>
  )
}
