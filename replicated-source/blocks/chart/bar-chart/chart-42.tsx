import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-6xl min-w-0 w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-1 gap-3 items-center min-w-0">
            <IconTile variant="frame" size="sm" aria-hidden="true">
              <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                <path d="M16 17h6v-6"></path>
                <path d="m22 17-8.5-8.5-5 5L2 7"></path>
              </svg>
            </IconTile>
            <div className="flex flex-col gap-px min-w-0">
              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                  Error Budget
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  Exhausted
                </Badge>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  <svg className="lucide lucide-octagon-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="OctagonXIcon" tabler="IconAlertOctagon" hugeicons="MultiplicationSignCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                    <path d="m15 9-6 6"></path>
                    <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  Deploys Frozen
                </Badge>
              </div>
              <div className="text-muted-foreground text-sm truncate">
                <span className="tabular-nums">
                  99.99% over 30 days
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center max-sm:w-full shrink-0">
            <Select>
            <SelectTrigger className="max-sm:flex-1 min-w-0 sm:w-56" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="SLO" extracted="1">
              <SelectValue>
                <span className="flex gap-2 items-center min-w-0">
                  <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="truncate">
                    Ledger write success
                  </span>
                </span>
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="SLO-104" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </div>
        </header>
        <FramePanel className="flex flex-col p-0">
          <dl className="bg-border border-b gap-px grid grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] sm:grid-cols-4">
            <div className="bg-(--frame-panel-bg) col-span-2 flex flex-col gap-1 lg:col-span-1 min-w-0 px-(--frame-panel-px) py-3 sm:col-span-4">
              <dt className="text-muted-foreground text-xs truncate">
                Budget
              </dt>
              <dd className="flex font-semibold gap-1.5 items-baseline min-w-0 tabular-nums text-2xl tracking-tight whitespace-nowrap">
                42%
                <span className="font-medium text-destructive text-sm tracking-normal">
                  over
                </span>
              </dd>
              <dd className="text-muted-foreground text-xs truncate">
                Two incidents spent 112% in six days.
              </dd>
            </div>
            <div className="bg-(--frame-panel-bg) flex flex-col gap-1 min-w-0 px-(--frame-panel-px) py-3">
              <dt className="text-muted-foreground text-xs truncate">
                Attained
              </dt>
              <dd className="flex font-semibold gap-1.5 items-baseline min-w-0 tabular-nums text-2xl tracking-tight whitespace-nowrap">
                99.986%
              </dd>
              <dd className="text-muted-foreground text-xs truncate">
                Target 99.99%
              </dd>
            </div>
            <div className="bg-(--frame-panel-bg) flex flex-col gap-1 min-w-0 px-(--frame-panel-px) py-3">
              <dt className="text-muted-foreground text-xs truncate">
                Burn 1h
              </dt>
              <dd className="flex font-semibold gap-1.5 items-baseline min-w-0 tabular-nums text-2xl text-foreground tracking-tight whitespace-nowrap">
                0.26×
              </dd>
              <dd className="text-muted-foreground text-xs truncate">
                0.32× over 6h
              </dd>
            </div>
            <div className="bg-(--frame-panel-bg) flex flex-col gap-1 min-w-0 px-(--frame-panel-px) py-3">
              <dt className="text-muted-foreground text-xs truncate">
                Daily pace
              </dt>
              <dd className="dark:text-warning flex font-semibold gap-1.5 items-baseline min-w-0 tabular-nums text-2xl text-warning-foreground tracking-tight whitespace-nowrap">
                6.5%
              </dd>
              <dd className="text-muted-foreground text-xs truncate">
                Even pace 3.3%
              </dd>
            </div>
            <div className="bg-(--frame-panel-bg) flex flex-col gap-1 min-w-0 px-(--frame-panel-px) py-3">
              <dt className="text-muted-foreground text-xs truncate">
                Ran out
              </dt>
              <dd className="flex font-semibold gap-1.5 items-baseline min-w-0 tabular-nums text-2xl text-destructive tracking-tight whitespace-nowrap">
                Sep 25
              </dd>
              <dd className="text-muted-foreground text-xs truncate">
                4 days ago
              </dd>
            </div>
          </dl>
          <div className="flex flex-1 flex-col min-w-0 px-(--frame-panel-px) py-(--frame-panel-py)">
            <div className="cursor-crosshair flex flex-1 flex-col min-h-0 min-w-0 select-none touch-pan-y" style={{opacity: "1"}}>
              <div className="flex flex-1 flex-col min-h-60 min-w-0 relative sm:min-h-64">
                <div className="-bottom-1.5 absolute bg-linear-to-b from-foreground/2 left-0 pointer-events-none to-foreground/8 top-3.5" aria-hidden="true" style={{width: "28px", borderRadius: "14px", transform: "translateX(870.243px)"}}></div>
                <div className="h-8 shrink-0" aria-hidden="true"></div>
                <div className="flex-1 min-h-0 relative">
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible [&_[class*=recharts-zIndex-layer]]:outline-hidden absolute aspect-auto cn-chart flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid h-auto inset-0 justify-center min-w-0 outline-hidden text-xs" data-chart="chart-_r_4_" role="group" aria-label="Ledger write success error budget, last 30 days: 42% over budget. Arrow keys move, Enter selects a day, Shift+Enter extends, Escape clears." tabIndex="0">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="1118" height="192" style={{position: "relative", cursor: "default", width: "1118px", height: "192px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" width="1118" height="192" viewBox="0 0 1118 192" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="12" y="10" height="178" width="1094"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <lineargradient id="bbc-overspend-r3" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" stopColor="var(--destructive)" stopOpacity="0.07"></stop>
                                <stop offset="1" stopColor="var(--destructive)" stopOpacity="0"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-area">
                                <path className="recharts-rectangle recharts-reference-area-rect" y1="-1" y2="0" fill="url(#bbc-overspend-r3)" fillOpacity="1" strokeOpacity="0" stroke="none" strokeWidth="1" x="12" y="99" width="1094" height="89" radius="0" d="M 12,99 h 1094 v 89 h -1094 Z"></path>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1">
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="0.25" stroke="var(--warning)" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="76.75" x2="1106" y2="76.75"></line>
                              </g>
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="0" stroke="var(--foreground)" strokeOpacity="0.22" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="99" x2="1106" y2="99"></line>
                              </g>
                              <g className="recharts-layer recharts-reference-line">
                                <line className="recharts-reference-line-line" y="0" stroke="none" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="99" x2="1106" y2="99"></line>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_5_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="26.456756756756757" x2="26.456756756756757" y1="99" y2="17.95414243164059" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="22.956756756756757" x2="29.956756756756757" y1="12.966666666666656" y2="12.966666666666656" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="26.456756756756757" cy="10.954142431640589" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="56.02432432432432" x2="56.02432432432432" y1="99" y2="18.577607341846182" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="52.52432432432432" x2="59.52432432432432" y1="15.933333333333332" y2="15.933333333333332" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="56.02432432432432" cy="11.577607341846184" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="85.59189189189189" x2="85.59189189189189" y1="99" y2="19.745312339413523" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="82.09189189189189" x2="89.09189189189189" y1="18.90000000000001" y2="18.90000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="85.59189189189189" cy="12.745312339413523" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="115.15945945945947" x2="115.15945945945947" y1="99" y2="20.82690339910719" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="111.65945945945947" x2="118.65945945945947" y1="21.866666666666667" y2="21.866666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="115.15945945945947" cy="13.826903399107191" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="144.72702702702702" x2="144.72702702702702" y1="99" y2="21.508925787066886" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="141.22702702702702" x2="148.22702702702702" y1="24.83333333333332" y2="24.83333333333332" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="144.72702702702702" cy="14.508925787066888" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="174.2945945945946" x2="174.2945945945946" y1="99" y2="22.280506670415242" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="170.7945945945946" x2="177.7945945945946" y1="27.799999999999997" y2="27.799999999999997" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="174.2945945945946" cy="15.28050667041524" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="203.86216216216218" x2="203.86216216216218" y1="99" y2="23.07964401388316" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="200.36216216216218" x2="207.36216216216218" y1="30.76666666666667" y2="30.76666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="203.86216216216218" cy="16.07964401388316" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="233.42972972972973" x2="233.42972972972973" y1="99" y2="23.699664366573792" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="229.92972972972973" x2="236.92972972972973" y1="33.733333333333334" y2="33.733333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="233.42972972972973" cy="16.699664366573792" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="262.99729729729734" x2="262.99729729729734" y1="99" y2="24.416132329682966" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="259.49729729729734" x2="266.49729729729734" y1="36.7" y2="36.7" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="262.99729729729734" cy="17.416132329682966" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="292.5648648648649" x2="292.5648648648649" y1="99" y2="25.249715248300383" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="289.0648648648649" x2="296.0648648648649" y1="39.66666666666666" y2="39.66666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="292.5648648648649" cy="18.249715248300383" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="322.13243243243244" x2="322.13243243243244" y1="99" y2="26.072964494372954" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="318.63243243243244" x2="325.63243243243244" y1="42.63333333333333" y2="42.63333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="322.13243243243244" cy="19.072964494372954" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="351.7" x2="351.7" y1="99" y2="27.12355453643209" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="348.2" x2="355.2" y1="45.599999999999994" y2="45.599999999999994" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="351.7" cy="20.12355453643209" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="381.2675675675676" x2="381.2675675675676" y1="99" y2="28.091475198132454" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="377.7675675675676" x2="384.7675675675676" y1="48.56666666666667" y2="48.56666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="381.2675675675676" cy="21.091475198132454" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="410.83513513513515" x2="410.83513513513515" y1="99" y2="29.03183939971327" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="407.33513513513515" x2="414.33513513513515" y1="51.53333333333334" y2="51.53333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="410.83513513513515" cy="22.03183939971327" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="440.4027027027027" x2="440.4027027027027" y1="99" y2="30.233989972430088" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="436.9027027027027" x2="443.9027027027027" y1="54.5" y2="54.5" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="440.4027027027027" cy="23.233989972430088" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="469.9702702702703" x2="469.9702702702703" y1="99" y2="31.39136129745262" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="466.4702702702703" x2="473.4702702702703" y1="57.46666666666666" y2="57.46666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="469.9702702702703" cy="24.39136129745262" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="499.53783783783786" x2="499.53783783783786" y1="99" y2="32.37650474672772" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="496.03783783783786" x2="503.03783783783786" y1="60.43333333333333" y2="60.43333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="499.53783783783786" cy="25.376504746727722" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="529.1054054054053" x2="529.1054054054053" y1="99" y2="33.38576009860749" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="525.6054054054053" x2="532.6054054054053" y1="63.400000000000006" y2="63.400000000000006" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="529.1054054054053" cy="26.38576009860749" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="558.672972972973" x2="558.672972972973" y1="99" y2="34.78425044967636" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="555.172972972973" x2="562.172972972973" y1="66.36666666666666" y2="66.36666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="558.672972972973" cy="27.784250449676357" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="588.2405405405405" x2="588.2405405405405" y1="99" y2="35.22859836910464" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="584.7405405405405" x2="591.7405405405405" y1="69.33333333333331" y2="69.33333333333331" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="588.2405405405405" cy="28.22859836910464" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="617.8081081081081" x2="617.8081081081081" y1="99" y2="35.69361363362262" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="614.3081081081081" x2="621.3081081081081" y1="72.3" y2="72.3" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="617.8081081081081" cy="28.69361363362262" r="4" fill="var(--success)" opacity="0.7"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="647.3756756756757" x2="647.3756756756757" y1="90.42502637070965" y2="75.26666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="643.8756756756757" x2="650.8756756756757" y1="75.26666666666667" y2="75.26666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="647.3756756756757" cy="95.42502637070965" r="7" fill="none" stroke="var(--destructive)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                          <circle cx="647.3756756756757" cy="95.42502637070965" r="4" fill="var(--warning)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="676.9432432432432" x2="676.9432432432432" y1="91.36539057229044" y2="78.23333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="673.4432432432432" x2="680.4432432432432" y1="78.23333333333333" y2="78.23333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="676.9432432432432" cy="96.36539057229044" r="4" fill="var(--warning)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="706.5108108108108" x2="706.5108108108108" y1="92.19897349090785" y2="81.2" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="703.0108108108108" x2="710.0108108108108" y1="81.2" y2="81.2" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="706.5108108108108" cy="97.19897349090785" r="4" fill="var(--warning)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="736.0783783783784" x2="736.0783783783784" y1="92.97744348928609" y2="84.16666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="732.5783783783784" x2="739.5783783783784" y1="84.16666666666667" y2="84.16666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="736.0783783783784" cy="97.97744348928609" r="4" fill="var(--warning)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="765.6459459459459" x2="765.6459459459459" y1="99" y2="87.13333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="762.1459459459459" x2="769.1459459459459" y1="87.13333333333334" y2="87.13333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="765.6459459459459" cy="99.3139318050859" r="4" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="795.2135135135135" x2="795.2135135135135" y1="99" y2="127.13151916617997" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="795.2135135135135" x2="795.2135135135135" y1="99" y2="90.1" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="791.7135135135135" x2="798.7135135135135" y1="90.1" y2="90.1" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="795.2135135135135" cy="134.13151916617997" r="7" fill="none" stroke="var(--destructive)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                          <circle cx="795.2135135135135" cy="134.13151916617997" r="4" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="824.7810810810811" x2="824.7810810810811" y1="99" y2="127.71364938620619" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="824.7810810810811" x2="824.7810810810811" y1="99" y2="93.06666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="821.2810810810811" x2="828.2810810810811" y1="93.06666666666666" y2="93.06666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="824.7810810810811" cy="134.71364938620619" r="4" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="854.3486486486486" x2="854.3486486486486" y1="99" y2="128.8227969060194" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="854.3486486486486" x2="854.3486486486486" y1="99" y2="96.03333333333335" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                          <line x1="850.8486486486486" x2="857.8486486486486" y1="96.03333333333335" y2="96.03333333333335" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="854.3486486486486" cy="135.8227969060194" r="4" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="883.9162162162162" x2="883.9162162162162" y1="99" y2="128.64949070960694" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <line x1="880.4162162162162" x2="887.4162162162162" y1="99" y2="99" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                          <circle cx="883.9162162162162" cy="136.64949070960694" r="10" fill="var(--destructive)" fillOpacity="0.18"></circle>
                                          <circle cx="883.9162162162162" cy="136.64949070960694" r="7" fill="var(--card)"></circle>
                                          <circle cx="883.9162162162162" cy="136.64949070960694" r="5" fill="var(--destructive)"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="913.4837837837838" x2="913.4837837837838" y1="99" y2="135.90436215779502" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                          <circle cx="913.4837837837838" cy="142.40436215779502" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="943.0513513513513" x2="943.0513513513513" y1="99" y2="141.65923360598308" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                          <circle cx="943.0513513513513" cy="148.15923360598308" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="972.6189189189189" x2="972.6189189189189" y1="99" y2="147.4141050541711" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                          <circle cx="972.6189189189189" cy="153.9141050541711" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="1002.1864864864865" x2="1002.1864864864865" y1="99" y2="153.1689765023592" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                          <circle cx="1002.1864864864865" cy="159.6689765023592" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="1031.754054054054" x2="1031.754054054054" y1="99" y2="158.9238479505473" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                          <circle cx="1031.754054054054" cy="165.4238479505473" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="1061.3216216216215" x2="1061.3216216216215" y1="99" y2="164.67871939873535" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                          <circle cx="1061.3216216216215" cy="171.17871939873535" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g aria-hidden="true">
                                          <line x1="1090.8891891891892" x2="1090.8891891891892" y1="99" y2="170.4335908469234" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                          <circle cx="1090.8891891891892" cy="176.9335908469234" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
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
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <text className="dark:fill-warning fill-warning-foreground font-medium text-xs" aria-hidden="true" x="12" y="70.75" textAnchor="start" stroke="var(--card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                Warn 25%
                              </text>
                              <text className="fill-muted-foreground font-medium text-xs" aria-hidden="true" x="12" y="93" textAnchor="start" stroke="var(--card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                0%
                              </text>
                              <text className="fill-destructive font-medium text-xs" aria-hidden="true" x="12" y="114" textAnchor="start" stroke="var(--card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                Over budget
                              </text>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="@container h-6 mt-2 relative shrink-0" aria-hidden="true">
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "115.486px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "145.054px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "174.622px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "204.189px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "233.757px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "292.892px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "322.459px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "352.027px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "381.595px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "411.162px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "440.73px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "499.865px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "529.432px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "559px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "588.568px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "618.135px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "706.838px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "736.405px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "765.973px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "825.108px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "854.676px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "913.811px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "943.378px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "972.946px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "1002.51px"}}></span>
                  <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "1032.08px"}}></span>
                  <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-2 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 56.3514px, -100% + 100cqw))"}}>
                    Sep 1
                  </span>
                  <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 263.324px, -100% + 100cqw))"}}>
                    8
                  </span>
                  <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 470.297px, -100% + 100cqw))"}}>
                    15
                  </span>
                  <span className="absolute bg-destructive/10 flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 ring-1 ring-destructive/25 ring-inset rounded-full tabular-nums text-destructive text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 647.703px, -100% + 100cqw))"}}>
                    21
                  </span>
                  <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 677.27px, -100% + 100cqw))"}}>
                    22
                  </span>
                  <span className="absolute bg-destructive/10 flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 ring-1 ring-destructive/25 ring-inset rounded-full tabular-nums text-destructive text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 795.541px, -100% + 100cqw))"}}>
                    26
                  </span>
                  <span className="absolute bg-foreground flex font-semibold h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-background text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 884.243px, -100% + 100cqw))"}}>
                    29
                  </span>
                  <span className="absolute flex font-medium h-6 items-center justify-center left-0 min-w-6 px-2 ring-1 ring-border ring-inset rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 1091.22px, -100% + 100cqw))"}}>
                    Oct 6
                  </span>
                </div>
                <div className="@container absolute h-7 inset-x-0 pointer-events-none top-1" aria-hidden="true">
                  <div className="absolute flex left-0 top-0" style={{transform: "translateX(clamp(0px, -50% + 503.135px, -100% + 100cqw))"}}>
                    <span className="bg-foreground font-semibold gap-1.5 h-7 inline-flex items-center px-3 rounded-full tabular-nums text-background text-xs whitespace-nowrap" aria-hidden="true">
                      42% over
                      <span className="bg-background/40 rounded-full size-1"></span>
                      <span className="font-medium text-background/65">
                        Today
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="sr-only" aria-live="polite"></p>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs">
          <div className="flex gap-4 items-center max-sm:hidden" aria-hidden="true">
            <span className="flex gap-1.5 items-center">
              <svg className="shrink-0" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
                <line x1="2.5" x2="9.5" y1="6" y2="6" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
              </svg>
              Even burn
            </span>
            <span className="flex gap-1.5 items-center">
              <svg className="shrink-0" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
                <circle cx="6" cy="6" r="3.5" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="1.5"></circle>
              </svg>
              Forecast
            </span>
            <span className="flex gap-1.5 items-center">
              <span className="bg-destructive/10 ring-1 ring-destructive/25 ring-inset rounded-full shrink-0 size-3" aria-hidden="true"></span>
              Incident
            </span>
          </div>
          <div className="flex gap-1.5 items-center min-w-0 sm:ms-auto" aria-live="off" aria-busy="false">
            <span>
              Drag across days to sum spend
            </span>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
