import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Service Levels
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <div className="max-w-[1320px] md:p-6 mx-auto p-4 w-full">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex flex-wrap gap-2.5 items-center">
                <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                  Service Levels
                </h2>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                  2 exhausted
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                18 SLOs across 8 services, UTC rolling windows
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center shrink-0">
              <Select>
              <SelectTrigger className="w-36" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Team" extracted="1">
                <SelectValue>
                  All Teams
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New SLO
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
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
                                    <g className="recharts-bar recharts-layer" id="recharts-bar-_r_68_">
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
                  <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                    Ledger write success
                  </button>
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
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible aspect-auto cn-chart flex justify-center min-w-0 size-full text-xs" data-chart="chart-_r_4_">
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
                                    <g className="recharts-bar recharts-layer" id="recharts-bar-_r_69_">
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
                  <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                    Ledger write success
                  </button>
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
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible aspect-auto cn-chart flex justify-center min-w-0 size-full text-xs" data-chart="chart-_r_5_">
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
                                    <g className="recharts-bar recharts-layer" id="recharts-bar-_r_6a_">
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
                  <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                    Webhook delivery success
                  </button>
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
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible aspect-auto cn-chart flex justify-center min-w-0 size-full text-xs" data-chart="chart-_r_6_">
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
                                    <g className="recharts-bar recharts-layer" id="recharts-bar-_r_6b_">
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
                  <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button">
                    Webhook retry storm
                  </button>
                  <span className="dark:text-warning ms-auto shrink-0 text-warning-foreground">
                    Ongoing
                  </span>
                </footer>
              </Frame>
            </div>
            <div className="min-w-0">
              <Frame className="min-w-0" spacing="default">
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
                    <SelectTrigger className="max-sm:flex-1 min-w-0 sm:w-56" type="button" tabIndex="0" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="SLO">
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
                    <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="SLO-104" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open Ledger write success" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M15 3v18"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
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
                        <div className="-bottom-1.5 absolute bg-linear-to-b from-foreground/2 left-0 pointer-events-none to-foreground/8 top-3.5" aria-hidden="true" style={{width: "28px", borderRadius: "14px", transform: "translateX(934.027px)"}}></div>
                        <div className="h-8 shrink-0" aria-hidden="true"></div>
                        <div className="flex-1 min-h-0 relative">
                          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible [&_[class*=recharts-zIndex-layer]]:outline-hidden absolute aspect-auto cn-chart flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid h-auto inset-0 justify-center min-w-0 outline-hidden text-xs" data-chart="chart-_r_d_" role="group" aria-label="Ledger write success error budget, last 30 days: 42% over budget. Arrow keys move, Enter selects a day, Shift+Enter extends, Escape clears." tabIndex="0">
                            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                <div className="recharts-wrapper" width="1198" height="192" style={{position: "relative", cursor: "default", width: "1198px", height: "192px"}}>
                                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                  <svg className="recharts-surface" width="1198" height="192" viewBox="0 0 1198 192" style={{width: "100%", height: "100%", display: "block"}}>
                                    <title></title>
                                    <desc></desc>
                                    <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                    <defs>
                                      <clippath id="recharts5-clip">
                                        <rect x="12" y="10" height="178" width="1174"></rect>
                                      </clippath>
                                    </defs>
                                    <defs>
                                      <lineargradient id="bbc-overspend-rc" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0" stopColor="var(--destructive)" stopOpacity="0.07"></stop>
                                        <stop offset="1" stopColor="var(--destructive)" stopOpacity="0"></stop>
                                      </lineargradient>
                                    </defs>
                                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                      <g className="recharts-layer recharts-reference-area">
                                        <path className="recharts-rectangle recharts-reference-area-rect" y1="-1" y2="0" fill="url(#bbc-overspend-rc)" fillOpacity="1" strokeOpacity="0" stroke="none" strokeWidth="1" x="12" y="99" width="1174" height="89" radius="0" d="M 12,99 h 1174 v 89 h -1174 Z"></path>
                                      </g>
                                    </g>
                                    <g className="recharts-zIndex-layer_200" tabIndex="-1">
                                      <g className="recharts-layer recharts-reference-line">
                                        <line className="recharts-reference-line-line" y="0.25" stroke="var(--warning)" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="76.75" x2="1186" y2="76.75"></line>
                                      </g>
                                      <g className="recharts-layer recharts-reference-line">
                                        <line className="recharts-reference-line-line" y="0" stroke="var(--foreground)" strokeOpacity="0.22" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="99" x2="1186" y2="99"></line>
                                      </g>
                                      <g className="recharts-layer recharts-reference-line">
                                        <line className="recharts-reference-line-line" y="0" stroke="none" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="99" x2="1186" y2="99"></line>
                                      </g>
                                    </g>
                                    <g className="recharts-zIndex-layer_300" tabIndex="-1">
                                      <g className="recharts-bar recharts-layer" id="recharts-bar-_r_6c_">
                                        <g className="recharts-bar-rectangles recharts-layer">
                                          <g className="recharts-layer">
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="27.67297297297297" x2="27.67297297297297" y1="99" y2="17.95414243164059" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="24.17297297297297" x2="31.17297297297297" y1="12.966666666666656" y2="12.966666666666656" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="27.67297297297297" cy="10.954142431640589" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="59.4027027027027" x2="59.4027027027027" y1="99" y2="18.577607341846182" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="55.9027027027027" x2="62.9027027027027" y1="15.933333333333332" y2="15.933333333333332" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="59.4027027027027" cy="11.577607341846184" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="91.13243243243242" x2="91.13243243243242" y1="99" y2="19.745312339413523" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="87.63243243243242" x2="94.63243243243242" y1="18.90000000000001" y2="18.90000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="91.13243243243242" cy="12.745312339413523" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="122.86216216216216" x2="122.86216216216216" y1="99" y2="20.82690339910719" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="119.36216216216216" x2="126.36216216216216" y1="21.866666666666667" y2="21.866666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="122.86216216216216" cy="13.826903399107191" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="154.5918918918919" x2="154.5918918918919" y1="99" y2="21.508925787066886" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="151.0918918918919" x2="158.0918918918919" y1="24.83333333333332" y2="24.83333333333332" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="154.5918918918919" cy="14.508925787066888" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="186.32162162162163" x2="186.32162162162163" y1="99" y2="22.280506670415242" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="182.82162162162163" x2="189.82162162162163" y1="27.799999999999997" y2="27.799999999999997" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="186.32162162162163" cy="15.28050667041524" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="218.05135135135137" x2="218.05135135135137" y1="99" y2="23.07964401388316" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="214.55135135135137" x2="221.55135135135137" y1="30.76666666666667" y2="30.76666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="218.05135135135137" cy="16.07964401388316" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="249.78108108108108" x2="249.78108108108108" y1="99" y2="23.699664366573792" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="246.28108108108108" x2="253.28108108108108" y1="33.733333333333334" y2="33.733333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="249.78108108108108" cy="16.699664366573792" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="281.51081081081077" x2="281.51081081081077" y1="99" y2="24.416132329682966" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="278.01081081081077" x2="285.01081081081077" y1="36.7" y2="36.7" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="281.51081081081077" cy="17.416132329682966" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="313.2405405405405" x2="313.2405405405405" y1="99" y2="25.249715248300383" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="309.7405405405405" x2="316.7405405405405" y1="39.66666666666666" y2="39.66666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="313.2405405405405" cy="18.249715248300383" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="344.97027027027025" x2="344.97027027027025" y1="99" y2="26.072964494372954" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="341.47027027027025" x2="348.47027027027025" y1="42.63333333333333" y2="42.63333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="344.97027027027025" cy="19.072964494372954" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="376.7" x2="376.7" y1="99" y2="27.12355453643209" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="373.2" x2="380.2" y1="45.599999999999994" y2="45.599999999999994" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="376.7" cy="20.12355453643209" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="408.42972972972973" x2="408.42972972972973" y1="99" y2="28.091475198132454" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="404.92972972972973" x2="411.92972972972973" y1="48.56666666666667" y2="48.56666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="408.42972972972973" cy="21.091475198132454" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="440.15945945945947" x2="440.15945945945947" y1="99" y2="29.03183939971327" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="436.65945945945947" x2="443.65945945945947" y1="51.53333333333334" y2="51.53333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="440.15945945945947" cy="22.03183939971327" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="471.88918918918915" x2="471.88918918918915" y1="99" y2="30.233989972430088" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="468.38918918918915" x2="475.38918918918915" y1="54.5" y2="54.5" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="471.88918918918915" cy="23.233989972430088" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="503.6189189189189" x2="503.6189189189189" y1="99" y2="31.39136129745262" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="500.1189189189189" x2="507.1189189189189" y1="57.46666666666666" y2="57.46666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="503.6189189189189" cy="24.39136129745262" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="535.3486486486486" x2="535.3486486486486" y1="99" y2="32.37650474672772" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="531.8486486486486" x2="538.8486486486486" y1="60.43333333333333" y2="60.43333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="535.3486486486486" cy="25.376504746727722" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="567.0783783783784" x2="567.0783783783784" y1="99" y2="33.38576009860749" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="563.5783783783784" x2="570.5783783783784" y1="63.400000000000006" y2="63.400000000000006" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="567.0783783783784" cy="26.38576009860749" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="598.8081081081081" x2="598.8081081081081" y1="99" y2="34.78425044967636" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="595.3081081081081" x2="602.3081081081081" y1="66.36666666666666" y2="66.36666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="598.8081081081081" cy="27.784250449676357" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="630.5378378378379" x2="630.5378378378379" y1="99" y2="35.22859836910464" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="627.0378378378379" x2="634.0378378378379" y1="69.33333333333331" y2="69.33333333333331" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="630.5378378378379" cy="28.22859836910464" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="662.2675675675675" x2="662.2675675675675" y1="99" y2="35.69361363362262" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="658.7675675675675" x2="665.7675675675675" y1="72.3" y2="72.3" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="662.2675675675675" cy="28.69361363362262" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="693.9972972972973" x2="693.9972972972973" y1="90.42502637070965" y2="75.26666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="690.4972972972973" x2="697.4972972972973" y1="75.26666666666667" y2="75.26666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="693.9972972972973" cy="95.42502637070965" r="7" fill="none" stroke="var(--destructive)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                                  <circle cx="693.9972972972973" cy="95.42502637070965" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="725.727027027027" x2="725.727027027027" y1="91.36539057229044" y2="78.23333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="722.227027027027" x2="729.227027027027" y1="78.23333333333333" y2="78.23333333333333" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="725.727027027027" cy="96.36539057229044" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="757.4567567567567" x2="757.4567567567567" y1="92.19897349090785" y2="81.2" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="753.9567567567567" x2="760.9567567567567" y1="81.2" y2="81.2" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="757.4567567567567" cy="97.19897349090785" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="789.1864864864865" x2="789.1864864864865" y1="92.97744348928609" y2="84.16666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="785.6864864864865" x2="792.6864864864865" y1="84.16666666666667" y2="84.16666666666667" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="789.1864864864865" cy="97.97744348928609" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="820.9162162162162" x2="820.9162162162162" y1="99" y2="87.13333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="817.4162162162162" x2="824.4162162162162" y1="87.13333333333334" y2="87.13333333333334" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="820.9162162162162" cy="99.3139318050859" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="852.645945945946" x2="852.645945945946" y1="99" y2="127.13151916617997" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="852.645945945946" x2="852.645945945946" y1="99" y2="90.1" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="849.145945945946" x2="856.145945945946" y1="90.1" y2="90.1" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="852.645945945946" cy="134.13151916617997" r="7" fill="none" stroke="var(--destructive)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                                  <circle cx="852.645945945946" cy="134.13151916617997" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="884.3756756756757" x2="884.3756756756757" y1="99" y2="127.71364938620619" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="884.3756756756757" x2="884.3756756756757" y1="99" y2="93.06666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="880.8756756756757" x2="887.8756756756757" y1="93.06666666666666" y2="93.06666666666666" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="884.3756756756757" cy="134.71364938620619" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="916.1054054054053" x2="916.1054054054053" y1="99" y2="128.8227969060194" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="916.1054054054053" x2="916.1054054054053" y1="99" y2="96.03333333333335" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="912.6054054054053" x2="919.6054054054053" y1="96.03333333333335" y2="96.03333333333335" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="916.1054054054053" cy="135.8227969060194" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="947.8351351351351" x2="947.8351351351351" y1="99" y2="128.64949070960694" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <line x1="944.3351351351351" x2="951.3351351351351" y1="99" y2="99" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="947.8351351351351" cy="136.64949070960694" r="10" fill="var(--destructive)" fillOpacity="0.18"></circle>
                                                  <circle cx="947.8351351351351" cy="136.64949070960694" r="7" fill="var(--card)"></circle>
                                                  <circle cx="947.8351351351351" cy="136.64949070960694" r="5" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="979.5648648648648" x2="979.5648648648648" y1="99" y2="135.90436215779502" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="979.5648648648648" cy="142.40436215779502" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="1011.2945945945946" x2="1011.2945945945946" y1="99" y2="141.65923360598308" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="1011.2945945945946" cy="148.15923360598308" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="1043.0243243243242" x2="1043.0243243243242" y1="99" y2="147.4141050541711" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="1043.0243243243242" cy="153.9141050541711" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="1074.754054054054" x2="1074.754054054054" y1="99" y2="153.1689765023592" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="1074.754054054054" cy="159.6689765023592" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="1106.4837837837838" x2="1106.4837837837838" y1="99" y2="158.9238479505473" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="1106.4837837837838" cy="165.4238479505473" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="1138.2135135135136" x2="1138.2135135135136" y1="99" y2="164.67871939873535" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="1138.2135135135136" cy="171.17871939873535" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="1169.9432432432432" x2="1169.9432432432432" y1="99" y2="170.4335908469234" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="1169.9432432432432" cy="176.9335908469234" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
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
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "123.054px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "154.784px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "186.514px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "218.243px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "249.973px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "313.432px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "345.162px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "376.892px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "408.622px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "440.351px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "472.081px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "535.541px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "567.27px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "599px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "630.73px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "662.459px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "757.649px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "789.378px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "821.108px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "884.568px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "916.297px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "979.757px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "1011.49px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "1043.22px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "1074.95px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "1106.68px"}}></span>
                          <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-2 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 59.5946px, -100% + 100cqw))"}}>
                            Sep 1
                          </span>
                          <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 281.703px, -100% + 100cqw))"}}>
                            8
                          </span>
                          <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 503.811px, -100% + 100cqw))"}}>
                            15
                          </span>
                          <span className="absolute bg-destructive/10 flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 ring-1 ring-destructive/25 ring-inset rounded-full tabular-nums text-destructive text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 694.189px, -100% + 100cqw))"}}>
                            21
                          </span>
                          <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 725.919px, -100% + 100cqw))"}}>
                            22
                          </span>
                          <span className="absolute bg-destructive/10 flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 ring-1 ring-destructive/25 ring-inset rounded-full tabular-nums text-destructive text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 852.838px, -100% + 100cqw))"}}>
                            26
                          </span>
                          <span className="absolute bg-foreground flex font-semibold h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-background text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 948.027px, -100% + 100cqw))"}}>
                            29
                          </span>
                          <span className="absolute flex font-medium h-6 items-center justify-center left-0 min-w-6 px-2 ring-1 ring-border ring-inset rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 1170.14px, -100% + 100cqw))"}}>
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
            <Frame className="min-w-0 w-full" spacing="default">
              <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-1 gap-3 items-center min-w-0">
                  <IconTile variant="frame" size="sm" aria-hidden="true">
                    <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                      <path d="M13 5h8"></path>
                      <path d="M13 12h8"></path>
                      <path d="M13 19h8"></path>
                      <path d="m3 17 2 2 4-4"></path>
                      <path d="m3 7 2 2 4-4"></path>
                    </svg>
                  </IconTile>
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                      <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                        Objectives
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        <svg className="lucide lucide-bell-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellOffIcon" tabler="IconBellOff" hugeicons="NotificationOff03Icon" phosphor="BellSlashIcon" remixicon="RiNotificationOffLine" aria-hidden="true">
                          <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                          <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"></path>
                          <path d="m2 2 20 20"></path>
                          <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"></path>
                        </svg>
                        2 muted
                      </Badge>
                    </div>
                    <div className="text-muted-foreground text-sm truncate">
                      <span className="gap-1.5 inline-flex items-center tabular-nums whitespace-nowrap" role="status">
                        <span>
                          18 SLOs
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          6 need attention
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center max-sm:w-full shrink-0">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_g_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                      <path d="M14 17H5"></path>
                      <path d="M19 7h-9"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                    Display
                  </PopoverTrigger>
                  </Popover>
                </div>
              </header>
              <FramePanel className="p-0">
                <div className="border-b flex flex-col md:flex-row md:gap-4 md:h-12 md:items-stretch md:justify-between">
                  <Tabs className="h-11 items-stretch max-md:border-b md:h-auto min-w-0" data-orientation="horizontal" activationDirection="none">
                    <TabsList className="gap-5 h-full! justify-start max-w-full no-scrollbar overflow-x-auto px-(--frame-panel-header-px) py-0! scroll-fade-x translate-y-px" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_h_" compositeItemActive="">
                        All
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          18
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_i_">
                        <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        At Risk
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          4
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_j_">
                        <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        Exhausted
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          2
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_k_">
                        <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        Healthy
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          12
                        </Badge>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <div className="flex gap-2 items-center md:py-0 px-(--frame-panel-header-px) py-2">
                    <InputGroup className="flex-1 lg:w-64 md:flex-none md:w-56" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_l_" placeholder="Search SLOs or services..." aria-label="Search SLOs" value="" />
                    </InputGroup>
                    <div className="flex gap-2 items-center ms-auto shrink-0">
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_o_" aria-haspopup="dialog" aria-expanded="false">
                        <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                          <path d="M2 5h20"></path>
                          <path d="M6 12h12"></path>
                          <path d="M9 19h6"></path>
                        </svg>
                        <span className="max-sm:sr-only">
                          Filter
                        </span>
                      </PopoverTrigger>
                      </Popover>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_p_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                      <div role="presentation" style={{minWidth: "fit-content"}}>
                        <DataGridTableViewport>
                          <DataGridTable>
                            <colgroup>
                              <col style={{width: "40px"}} />
                              <col style={{width: "260px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "104px"}} />
                              <col style={{width: "168px"}} />
                              <col style={{width: "120px"}} />
                              <col style={{width: "96px"}} />
                              <col style={{width: "168px"}} />
                              <col style={{width: "48px"}} />
                            </colgroup>
                            <thead>
                              <tr className="[&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:pe-0 first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" style={{width: "40px"}}>
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_q_" aria-checked="false" aria-label="Select all"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" data-pinned="start" data-last-col="start" style={{width: "260px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                      SLO
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                      Status
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="objective" data-header-id="objective" data-header-depth="0" style={{width: "104px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                      Target
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="budget" data-header-id="budget" data-header-depth="0" style={{width: "168px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                      Budget
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="trend" data-header-id="trend" data-header-depth="0" style={{width: "120px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                      Trend
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="burn" data-header-id="burn" data-header-depth="0" style={{width: "96px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
                                      Burn 1h
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "168px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1u_" aria-expanded="false">
                                      Owner
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:pe-0 first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{width: "48px"}}></th>
                              </tr>
                            </thead>
                            <DataGridTableBody>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-104">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_20_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Ledger write success" type="button">
                                      Ledger write success
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        ledger-worker
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Correctness
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Exhausted
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.99%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      30d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r23" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="5.1314676332532425%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="5.1314676332532425%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r23)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="5.1314676332532425%" cy="50%" r="4" fill="var(--destructive)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-destructive text-sm">
                                        42%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        over
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 42% over budget, -39 pts over 7 days" id="base-ui-_r_25_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="7.556563214711238" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="7.598032187716895" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="7.494498179388996" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="7.566304507306625" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="7.52583820074521" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="7.435257353695353" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="7.371204849497289" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="7.291668771126995" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="7.316812239847448" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="7.335148609143116" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="7.3258330436754" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="7.31421341618516" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="7.323163911970618" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="7.343587090546971" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="7.34410504499566" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="7.291568997738274" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="7.3766768711985815" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="7.366571320801055" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="7.381336565907148" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="18.208430021852116" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="70.14814814814815" cy="18.146060730488266" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="73.55555555555556" cy="18.169229485613904" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="76.96296296296296" cy="18.133000047729418" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="80.37037037037037" cy="18.11544928426008" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="83.77777777777777" cy="23.76733700013971" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="87.18518518518519" cy="23.904237469444624" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="90.5925925925926" cy="23.7618146729701" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <line x1="94" x2="94" y1="17.5" y2="19.621077120684287" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                                        <circle cx="94" cy="23.871077120684287" r="2.75" fill="var(--destructive)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Ledger write success burn rate 0.26×, open burn rate" id="base-ui-_r_27_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.26×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Alex Johnson
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Ledger write success" aria-haspopup="menu" id="base-ui-_r_2b_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-118">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2d_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open SMS provider availability" type="button">
                                      SMS provider availability
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        notifications
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Availability
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Exhausted
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.5%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      28d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r2g" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="20.261281070488227%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="20.261281070488227%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r2g)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="20.261281070488227%" cy="50%" r="4" fill="var(--destructive)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-destructive text-sm">
                                        20%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        over
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 20% over budget, -96 pts over 7 days" id="base-ui-_r_2i_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="6.533960601165113" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="6.543061096580125" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="6.543671455109401" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="6.496004321723416" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="6.457225413538117" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="6.490885897993616" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="6.480500270206429" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="6.520658525111532" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="6.462436356485502" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="6.539306055755469" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="6.5923701621376" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="6.556305462210263" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="6.563407389549965" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="6.595980178283906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="6.59605126170395" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="6.578991600681434" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="6.583513572826227" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="6.544323205890312" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="6.623006381411603" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="6.526416762204746" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="6.504721695781527" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="20.185108266415938" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="76.96296296296296" cy="20.157450730039688" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="80.37037037037037" cy="20.228060048246675" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="83.77777777777777" cy="20.238556602441342" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="87.18518518518519" cy="20.277983324290297" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="90.5925925925926" cy="20.329552606847013" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                                        <circle cx="94" cy="20.54251816449259" r="2.75" fill="var(--destructive)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="SMS provider availability burn rate 0.24×, open burn rate" id="base-ui-_r_2k_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.24×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Nina Santos
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SMS provider availability" aria-haspopup="menu" id="base-ui-_r_2o_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-106">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2q_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Webhook delivery success" type="button">
                                      Webhook delivery success
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        webhook-dispatcher
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Availability
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      At Risk
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.9%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      28d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r2t" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="72.87543042821567%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="72.87543042821567%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r2t)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="72.87543042821567%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-foreground text-sm">
                                        59%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 59% left, -4 pts over 7 days" id="base-ui-_r_2v_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="5.841518852016539" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="5.84922830003494" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="5.8798518245518885" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="5.846667945848986" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="5.842180435617158" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="5.801362658001715" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="8.239815118396562" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="8.266212871211424" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="8.269531241436894" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="8.221892030187906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="8.21332245693054" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="8.262922275280937" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="8.319776396265066" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="8.276921572404959" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="8.287530328191258" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="8.26965428801008" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="8.287171934350383" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="8.305143069327569" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="8.330331951512523" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="8.307075259781334" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="8.357106558934978" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="8.352782028382396" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="8.372699374056651" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="8.34599607633315" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="8.385567379638072" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="8.37845766058696" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="8.384823982838494" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <line x1="94" x2="94" y1="17.5" y2="13.217405305792555" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                                        <circle cx="94" cy="8.967405305792555" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Webhook delivery success burn rate 18×, open burn rate" id="base-ui-_r_31_">
                                    <span className="font-medium tabular-nums text-destructive text-sm">
                                      18×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Omar Haddad
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Webhook delivery success" aria-haspopup="menu" id="base-ui-_r_35_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-112">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_37_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Reconciliation completeness" type="button">
                                      Reconciliation completeness
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        reconciliation
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Correctness
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      At Risk
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.9%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      30d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r3a" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="80.07301327667781%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="80.07301327667781%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r3a)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="80.07301327667781%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-foreground text-sm">
                                        70%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 70% left, -10 pts over 7 days" id="base-ui-_r_3c_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="6.062204711542078" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="6.111128941489964" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="6.045613096709651" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="6.036024341815946" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="6.041923525305842" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="5.978652490888084" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="5.975284761006592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="5.979459814429898" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="5.965496291296663" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="5.933557291674729" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="5.912490412558912" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="5.875065051222979" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="5.930920688436411" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="5.947199555290871" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="5.932006223945109" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="5.899298832716541" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="5.881809568030558" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="5.9107951214345364" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="5.901131268350918" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="5.8804255143836395" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="5.844785861977446" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="5.88574938718816" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="5.885458024756841" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="5.85053515515836" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="5.815838661786323" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="5.80317121049688" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="5.784872404883715" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <line x1="94" x2="94" y1="17.5" y2="11.633937079130881" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                                        <circle cx="94" cy="7.38393707913088" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Reconciliation completeness burn rate 0.21×, open burn rate" id="base-ui-_r_3e_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.21×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Sofia Romero
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Reconciliation completeness" aria-haspopup="menu" id="base-ui-_r_3i_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-115">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3k_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Index freshness" type="button">
                                      Index freshness
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        search-indexer
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Freshness
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      At Risk
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      7d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r3n" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="43.15789473684216%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="43.15789473684216%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r3n)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="43.15789473684216%" cy="50%" r="4" fill="var(--warning)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="dark:text-warning font-medium text-sm text-warning-foreground">
                                        15%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 15% left, -43 pts over 7 days" id="base-ui-_r_3p_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="7.9470899470899425" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="7.9470899470899425" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="8.529100529100523" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="8.965608465608462" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="8.965608465608462" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="8.820105820105816" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="8.238095238095232" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="8.092592592592588" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="9.111111111111107" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="9.111111111111107" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="9.402116402116395" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="9.984126984126979" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="9.54761904761904" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="9.402116402116395" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="15.222222222222207" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="15.076719576719565" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <circle cx="94" cy="15.505263157894728" r="2.75" fill="var(--warning)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Index freshness burn rate 0.42×, open burn rate" id="base-ui-_r_3r_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.42×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Michael Rodriguez
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Index freshness" aria-haspopup="menu" id="base-ui-_r_3v_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-110">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_41_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Payout batch on time" type="button">
                                      Payout batch on time
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        payouts-scheduler
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Freshness
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      At Risk
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.5%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      30d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r44" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="43.37556702643521%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="43.37556702643521%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r44)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="43.37556702643521%" cy="50%" r="4" fill="var(--warning)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="dark:text-warning font-medium text-sm text-warning-foreground">
                                        15%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 15% left, -18 pts over 7 days" id="base-ui-_r_46_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="9.993827160493822" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="9.858024691358018" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="9.790123456790116" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="9.858024691358018" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="13.117283950617274" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="13.049382716049374" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="13.049382716049374" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="13.049382716049374" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="12.845679012345672" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="12.77777777777777" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="12.845679012345672" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="15.493827160493815" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <circle cx="94" cy="15.457375254184253" r="2.75" fill="var(--warning)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Payout batch on time burn rate 0.38×, open burn rate" id="base-ui-_r_48_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.38×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Priya Patel
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Payout batch on time" aria-haspopup="menu" id="base-ui-_r_4c_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-108">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4e_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Fraud score latency" type="button">
                                      Fraud score latency
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        fraud-scorer
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Latency
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Healthy
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.9%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      28d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r4h" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="58.77362461284504%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="58.77362461284504%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r4h)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="58.77362461284504%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-foreground text-sm">
                                        38%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 38% left, -1 pts over 7 days" id="base-ui-_r_4j_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="7.6701413173709785" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="7.6424621014173315" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="7.721583605229229" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="7.726610960876272" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="7.688015932029742" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="7.679624964093518" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="7.683346055982794" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="7.668276655893445" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="7.696047114827024" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="7.838454797759315" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="7.744431941939315" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="7.770482756622658" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="7.7477242720771455" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="7.807261420171693" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="7.77565947528417" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="11.870305254447146" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="11.992176564888025" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="11.995186556093923" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="12.028458540975825" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="11.969056362608876" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="11.858877091862366" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="11.882342152588869" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="11.878941564405654" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="11.945166779213313" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="11.867546817145193" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="11.921266524371868" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="12.043021390339508" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <line x1="94" x2="94" y1="17.5" y2="16.319802585174088" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                                        <circle cx="94" cy="12.06980258517409" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Fraud score latency burn rate 0.35×, open burn rate" id="base-ui-_r_4l_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.35×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Kenji Tan
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Fraud score latency" aria-haspopup="menu" id="base-ui-_r_4p_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-101">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4r_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Charge API availability" type="button">
                                      Charge API availability
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        payments-api
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Availability
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Healthy
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.95%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      28d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r4u" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="65.66175261631295%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="65.66175261631295%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r4u)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="65.66175261631295%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-foreground text-sm">
                                        48%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 48% left, -31 pts over 7 days" id="base-ui-_r_50_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="5.901948509800085" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="5.899272598994678" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="5.906178316194657" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="5.93134191739086" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="5.92386899102064" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="5.912123886820176" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="5.925010499432244" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="5.91311201547178" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="5.913277661632234" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="5.957037334807621" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="5.967955209906474" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="5.937486717470439" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="5.92901891982126" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="5.983604088579133" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="5.9640132929347445" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="5.960322786488388" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="6.031501301931156" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="6.052403150185983" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="6.015482626183532" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="6.011193379436538" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="6.0462634986954376" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="6.062408949398377" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="10.498207167993353" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="10.488581631360757" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="10.459813009133219" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="10.517268749279118" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="10.471753936833457" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <line x1="94" x2="94" y1="17.5" y2="14.804414424411151" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                                        <circle cx="94" cy="10.554414424411151" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Charge API availability burn rate 0.17×, open burn rate" id="base-ui-_r_52_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.17×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        David Kim
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Charge API availability" aria-haspopup="menu" id="base-ui-_r_56_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-102">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_58_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Charge API latency" type="button">
                                      Charge API latency
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        payments-api
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Latency
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Healthy
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      28d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r5b" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="68.40106351587121%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="68.40106351587121%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r5b)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="68.40106351587121%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-foreground text-sm">
                                        53%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 53% left, 0 pts over 7 days" id="base-ui-_r_5d_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="6.684469377548746" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="6.739659406657701" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="6.804836933153693" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="6.837719637716149" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="6.809928750269012" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="6.8117632503167185" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="6.811084274799248" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="6.749256631594435" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="6.740987723694241" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="6.769439964911033" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="10.02628850013278" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="9.961580990604748" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="9.897056541186874" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="9.989938645275004" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="9.970489124866212" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="9.87396503757883" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="9.962729777476898" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="10.00090159939145" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="10.03034153490466" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="9.99604107370773" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="10.004897733060478" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="9.989017246266613" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="9.91472585455192" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="9.877136807624002" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="9.852052490992895" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="9.84860166846249" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="9.894702887061733" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <line x1="94" x2="94" y1="17.5" y2="14.201766026508334" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                                        <circle cx="94" cy="9.951766026508334" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Charge API latency burn rate 0.25×, open burn rate" id="base-ui-_r_5f_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.25×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        David Kim
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Charge API latency" aria-haspopup="menu" id="base-ui-_r_5j_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/slo-row hover:bg-muted/40" data-row-id="SLO-105">
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 w-[calc(var(--frame-panel-header-px)+--spacing(6))]!" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5l_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open Ledger posting freshness" type="button">
                                      Ledger posting freshness
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        ledger-worker
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0">
                                        Freshness
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Healthy
                                    </Badge>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex gap-1.5 items-baseline">
                                    <span className="font-medium min-w-13 tabular-nums text-sm">
                                      99.5%
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      28d
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-3 items-center">
                                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                                      </svg>
                                      <svg x="50%" y="50%" overflow="visible">
                                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                                      </svg>
                                      <mask id="lollipop-r5o" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                                        <circle cx="73.82989431303474%" cy="50%" r="6" fill="black"></circle>
                                      </mask>
                                      <line x1="33.33333333333333%" x2="73.82989431303474%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-r5o)"></line>
                                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                                        <circle cx="73.82989431303474%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                                      </g>
                                    </svg>
                                    <span className="flex gap-1 items-baseline tabular-nums">
                                      <span className="font-medium text-foreground text-sm">
                                        61%
                                      </span>
                                      <span className="text-muted-foreground text-xs">
                                        left
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 61% left, -1 pts over 7 days" id="base-ui-_r_5q_">
                                    <span className="flex h-7 w-24" aria-hidden="true">
                                      <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                                        <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                                        <circle cx="2" cy="5.546296296296293" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                                        <circle cx="5.407407407407407" cy="5.546296296296293" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                                        <circle cx="8.814814814814815" cy="5.546296296296293" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                                        <circle cx="12.222222222222221" cy="5.546296296296293" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                                        <circle cx="15.62962962962963" cy="5.619047619047617" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                                        <circle cx="19.037037037037038" cy="5.691798941798939" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                                        <circle cx="22.444444444444443" cy="5.619047619047617" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                                        <circle cx="25.85185185185185" cy="5.691798941798939" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                                        <circle cx="29.25925925925926" cy="5.691798941798939" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                                        <circle cx="32.66666666666667" cy="5.764550264550261" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                                        <circle cx="36.074074074074076" cy="5.764550264550261" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                                        <circle cx="39.48148148148148" cy="5.764550264550261" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                                        <circle cx="42.888888888888886" cy="5.837301587301584" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                                        <circle cx="46.2962962962963" cy="5.837301587301584" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                                        <circle cx="49.7037037037037" cy="5.910052910052906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                                        <circle cx="53.111111111111114" cy="5.910052910052906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                                        <circle cx="56.51851851851852" cy="5.910052910052906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                                        <circle cx="59.925925925925924" cy="5.910052910052906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                                        <circle cx="63.333333333333336" cy="5.910052910052906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                                        <circle cx="66.74074074074075" cy="8.747354497354493" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                                        <circle cx="70.14814814814815" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                                        <circle cx="73.55555555555556" cy="8.747354497354493" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                                        <circle cx="76.96296296296296" cy="8.747354497354493" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                                        <circle cx="80.37037037037037" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                                        <circle cx="83.77777777777777" cy="8.601851851851848" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                                        <circle cx="87.18518518518519" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                                        <circle cx="90.5925925925926" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                                        <line x1="94" x2="94" y1="17.5" y2="13.007423251132355" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                                        <circle cx="94" cy="8.757423251132355" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                                      </svg>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 min-w-0 outline-offset-2 text-left" type="button" aria-label="Ledger posting freshness burn rate 0.18×, open burn rate" id="base-ui-_r_5s_">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      0.18×
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        Alex Johnson
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:pe-0 first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Ledger posting freshness" aria-haspopup="menu" id="base-ui-_r_60_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                            </DataGridTableBody>
                          </DataGridTable>
                        </DataGridTableViewport>
                      </div>
                    </div>
                  </DataGridScrollArea>
                </div>
              </FramePanel>
              <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                <DataGridPagination>
                  <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                    <div className="text-muted-foreground text-sm">
                      Rows per page
                    </div>
                    <Select>
                    <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_62_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                      <SelectValue>
                        10
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_62_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                    <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                      1 - 10 of 18 SLOs
                    </div>
                    <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                      <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                        <span className="sr-only">
                          Go to previous page
                        </span>
                        <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </Button>
                      <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                        1
                      </Button>
                      <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                        2
                      </Button>
                      <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                        <span className="sr-only">
                          Go to next page
                        </span>
                        <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </DataGridPagination>
              </footer>
            </Frame>
          </div>
        </div>
      </div>
    </main>
  )
}
