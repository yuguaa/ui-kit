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
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Cron Jobs"}
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex flex-wrap gap-2.5 items-center">
                <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                  {"Cron Jobs"}
                </h2>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                  {"3 failing"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                {"32 jobs across 3 clusters, times in UTC"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center shrink-0">
              <Select>
              <SelectTrigger className="w-44" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Environment" extracted="1">
                <SelectValue>
                  {"All Environments"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"New Job"}
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="gap-2 grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-3">
              <Frame spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-3 items-start min-w-0">
                    <IconTile variant="elevated" size="sm" aria-hidden="true">
                      <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                      </svg>
                    </IconTile>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"Active Jobs"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"5 paused"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"27"}
                      <span className="font-normal text-muted-foreground text-sm">
                        {"of 32"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex h-3.5 items-center justify-between w-full" role="img" aria-label="32 jobs: 24 healthy, 3 failing, 5 paused">
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-success h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-destructive h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-destructive h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-destructive h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-info h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-info h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-info h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-info h-3.5 rounded-full w-0.75"></span>
                      <span className="bg-info h-3.5 rounded-full w-0.75"></span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                      <span className="flex gap-1 items-center">
                        <span className="bg-success h-2 rounded-full shrink-0 w-0.75" aria-hidden="true"></span>
                        <span className="font-medium tabular-nums text-muted-foreground text-xs">
                          {"24 Healthy"}
                        </span>
                      </span>
                      <span className="flex gap-1 items-center">
                        <span className="bg-destructive h-2 rounded-full shrink-0 w-0.75" aria-hidden="true"></span>
                        <span className="font-medium tabular-nums text-muted-foreground text-xs">
                          {"3 Failing"}
                        </span>
                      </span>
                      <span className="flex gap-1 items-center">
                        <span className="bg-info h-2 rounded-full shrink-0 w-0.75" aria-hidden="true"></span>
                        <span className="font-medium tabular-nums text-muted-foreground text-xs">
                          {"5 Paused"}
                        </span>
                      </span>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-3 items-start min-w-0">
                    <IconTile variant="elevated" size="sm" aria-hidden="true">
                      <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                    </IconTile>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"Success Rate"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"995 of 1,004 runs"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"99.1%"}
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      {"Below SLO"}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="min-w-0" role="img" aria-label="Success rate by hour, last 24 hours: 17 of 24 hours in SLO, lowest 86.7% at 14:00 UTC">
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-11.5 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_4_">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_4_] {\n  --color-rate: var(--success);\n}\n\n\n.dark [data-chart=chart-_r_4_] {\n  --color-rate: var(--success);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width="261" height="46" style={{position: "relative", cursor: "default", width: "261px", height: "46px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                              <svg className="recharts-surface" width="261" height="46" viewBox="0 0 261 46" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                <defs>
                                  <clippath id="recharts1-clip">
                                    <rect x="3" y="4" height="39" width="255"></rect>
                                  </clippath>
                                </defs>
                                <defs>
                                  <lineargradient id="success-fill-r3" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--color-rate)" stopOpacity="0.25"></stop>
                                    <stop offset="100%" stopColor="var(--color-rate)" stopOpacity="0"></stop>
                                  </lineargradient>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                  <g className="recharts-area recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_68_)">
                                        <g className="recharts-layer">
                                          <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="url(#success-fill-r3)" fillOpacity="0.6" height="39" stroke="none" width="255" id="recharts-area-_r_68_" d="M3,4C6.696,4,10.391,4,14.087,4C17.783,4,21.478,4,25.174,4C28.87,4,32.565,4,36.261,4C39.957,4,43.652,4,47.348,4C51.043,4,54.739,4,58.435,4C62.13,4,65.826,4,69.522,4C73.217,4,76.913,4,80.609,4C84.304,4,88,4,91.696,4C95.391,4,99.087,4,102.783,4C106.478,4,110.174,18.638,113.87,18.638C117.565,18.638,121.261,4,124.957,4C128.652,4,132.348,18.807,136.043,18.807C139.739,18.807,143.435,4,147.13,4C150.826,4,154.522,4,158.217,4C161.913,4,165.609,4,169.304,4C173,4,176.696,4,180.391,4C184.087,4,187.783,18.807,191.478,18.807C195.174,18.807,198.87,4,202.565,4C206.261,4,209.957,4,213.652,4C217.348,4,221.043,15.752,224.739,19.164C228.435,22.576,232.13,24.47,235.826,24.47C239.522,24.47,243.217,18.638,246.913,18.638C250.609,18.638,254.304,29.046,258,39.455L258,43C254.304,43,250.609,43,246.913,43C243.217,43,239.522,43,235.826,43C232.13,43,228.435,43,224.739,43C221.043,43,217.348,43,213.652,43C209.957,43,206.261,43,202.565,43C198.87,43,195.174,43,191.478,43C187.783,43,184.087,43,180.391,43C176.696,43,173,43,169.304,43C165.609,43,161.913,43,158.217,43C154.522,43,150.826,43,147.13,43C143.435,43,139.739,43,136.043,43C132.348,43,128.652,43,124.957,43C121.261,43,117.565,43,113.87,43C110.174,43,106.478,43,102.783,43C99.087,43,95.391,43,91.696,43C88,43,84.304,43,80.609,43C76.913,43,73.217,43,69.522,43C65.826,43,62.13,43,58.435,43C54.739,43,51.043,43,47.348,43C43.652,43,39.957,43,36.261,43C32.565,43,28.87,43,25.174,43C21.478,43,17.783,43,14.087,43C10.391,43,6.696,43,3,43Z"></path>
                                          <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.6" height="39" stroke="var(--color-rate)" width="255" d="M3,4C6.696,4,10.391,4,14.087,4C17.783,4,21.478,4,25.174,4C28.87,4,32.565,4,36.261,4C39.957,4,43.652,4,47.348,4C51.043,4,54.739,4,58.435,4C62.13,4,65.826,4,69.522,4C73.217,4,76.913,4,80.609,4C84.304,4,88,4,91.696,4C95.391,4,99.087,4,102.783,4C106.478,4,110.174,18.638,113.87,18.638C117.565,18.638,121.261,4,124.957,4C128.652,4,132.348,18.807,136.043,18.807C139.739,18.807,143.435,4,147.13,4C150.826,4,154.522,4,158.217,4C161.913,4,165.609,4,169.304,4C173,4,176.696,4,180.391,4C184.087,4,187.783,18.807,191.478,18.807C195.174,18.807,198.87,4,202.565,4C206.261,4,209.957,4,213.652,4C217.348,4,221.043,15.752,224.739,19.164C228.435,22.576,232.13,24.47,235.826,24.47C239.522,24.47,243.217,18.638,246.913,18.638C250.609,18.638,254.304,29.046,258,39.455"></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                  <g className="recharts-layer recharts-reference-line">
                                    <line className="recharts-reference-line-line" y="0.9292893218813452" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="3" y1="10.865743204640431" x2="258" y2="10.865743204640431"></line>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                  <g className="recharts-area-dots recharts-layer">
                                    <circle cx="113.86956521739131" cy="18.63781369543002" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1"></circle>
                                    <circle cx="136.04347826086956" cy="18.8070425971808" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1"></circle>
                                    <circle cx="191.47826086956522" cy="18.8070425971808" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1"></circle>
                                    <circle cx="224.73913043478262" cy="19.163889994528986" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1"></circle>
                                    <circle cx="235.82608695652175" cy="24.469691362177628" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1"></circle>
                                    <circle cx="246.91304347826087" cy="18.63781369543002" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1"></circle>
                                    <circle cx="258" cy="39.45454545454545" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1"></circle>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                  <text className="recharts-label recharts-text" offset="5" x="8" y="15.865743204640431" textAnchor="start" fill="var(--muted-foreground)">
                                    <tspan x="8" dy="0.71em">
                                      {"SLO 99.5%"}
                                    </tspan>
                                  </text>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      </ChartContainer>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                      <span className="flex gap-1 items-center">
                        <span className="bg-success h-2 rounded-full shrink-0 w-0.75" aria-hidden="true"></span>
                        <span className="font-medium tabular-nums text-muted-foreground text-xs">
                          {"17 of 24 hours in SLO"}
                        </span>
                      </span>
                      <span className="flex gap-1 items-center">
                        <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium tabular-nums text-muted-foreground text-xs">
                          {"7 below"}
                        </span>
                      </span>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-3 items-start min-w-0">
                    <IconTile variant="elevated" size="sm" aria-hidden="true">
                      <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    </IconTile>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"Failed Runs"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"across 5 jobs"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"9"}
                    </div>
                  </div>
                  <div className="flex gap-2 h-5 items-center min-w-0">
                    <span className="shrink-0 text-muted-foreground text-xs">
                      {"Worst"}
                    </span>
                    <button className="[&_svg:not([class*=size-])]:size-3.5 cursor-pointer flex font-medium gap-1.5 hover:text-primary hover:underline items-center min-w-0 text-foreground text-left text-sm transition-colors underline-offset-2" type="button">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"Import bank settlement files"}
                      </span>
                    </button>
                    <span className="ml-auto shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"4 of 9"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex gap-0.5 h-3.5 items-center w-full" role="img" aria-label="9 failed runs: 7 failed, 2 timed out">
                      <span className="basis-0 bg-destructive h-1.5 min-w-1.5 rounded-full" style={{flexGrow: "7"}}></span>
                      <span className="basis-0 bg-warning h-1.5 min-w-1.5 rounded-full" style={{flexGrow: "2"}}></span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                      <span className="flex gap-1 items-center">
                        <span className="bg-destructive h-2 rounded-full shrink-0 w-0.75" aria-hidden="true"></span>
                        <span className="font-medium tabular-nums text-muted-foreground text-xs">
                          {"7 Failed"}
                        </span>
                      </span>
                      <span className="flex gap-1 items-center">
                        <span className="bg-warning h-2 rounded-full shrink-0 w-0.75" aria-hidden="true"></span>
                        <span className="font-medium tabular-nums text-muted-foreground text-xs">
                          {"2 Timed Out"}
                        </span>
                      </span>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-3 items-start min-w-0">
                    <IconTile variant="elevated" size="sm" aria-hidden="true">
                      <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                        <path d="M16 14v2.2l1.6 1"></path>
                        <path d="M16 2v4"></path>
                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                        <path d="M3 10h5"></path>
                        <path d="M8 2v4"></path>
                        <circle cx="16" cy="16" r="6"></circle>
                      </svg>
                    </IconTile>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"Next Run"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"42 runs in the next hour"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"in 5m"}
                      <span className="font-normal text-muted-foreground text-sm">
                        {"14:25 UTC"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 h-5 items-center min-w-0">
                    <button className="[&_svg:not([class*=size-])]:size-3.5 cursor-pointer flex font-medium gap-1.5 hover:text-primary hover:underline items-center min-w-0 text-foreground text-left text-sm transition-colors underline-offset-2" type="button">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                          <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                          <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                          <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"Drain webhook retry queue"}
                      </span>
                    </button>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      {"Failing"}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex h-3.5 items-center">
                      <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/40 **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" aria-valuetext="5 of 10 minutes elapsed since the last run" role="progressbar" aria-label="Drain webhook retry queue run interval">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "50%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </div>
                    <div className="flex font-medium gap-2 items-center justify-between min-w-0 tabular-nums text-muted-foreground text-xs">
                      <span className="flex gap-1 items-center min-w-0">
                        <span className="[&_svg]:size-3.5 flex shrink-0 text-destructive" aria-hidden="true">
                          <svg className="lucide lucide-circle-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </span>
                        <span className="shrink-0">
                          {"14:15"}
                        </span>
                        <span className="text-destructive truncate">
                          {"Failed"}
                        </span>
                      </span>
                      <span className="shrink-0">
                        {"14:25"}
                      </span>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
            </div>
            <Frame className="min-w-0 w-full" spacing="default">
              <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-px min-w-0">
                  <div className="font-semibold text-sm">
                    {"Jobs"}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <span className="gap-1.5 inline-flex items-center tabular-nums whitespace-nowrap" role="status">
                      <span>
                        {"32 jobs"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"3 failing"}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 items-center ms-auto shrink-0">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_7_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                      <path d="M14 17H5"></path>
                      <path d="M19 7h-9"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                    <span className="max-sm:sr-only">
                      {"Display"}
                    </span>
                  </PopoverTrigger>
                  </Popover>
                </div>
              </header>
              <FramePanel className="p-0">
                <Tabs data-orientation="horizontal" activationDirection="none">
                  <TabsList className="border-b gap-3 h-10! justify-start no-scrollbar overflow-x-auto px-(--frame-panel-header-px) py-0! sm:gap-5 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                    <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_8_" compositeItemActive="">
                      {"All"}
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                        {"32"}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                      {"Healthy"}
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                        {"24"}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_a_">
                      {"Failing"}
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                        {"3"}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_b_">
                      {"Paused"}
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                        {"5"}
                      </Badge>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="flex gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <InputGroup className="flex-1 sm:max-w-64" role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_c_" placeholder="Search jobs or commands..." aria-label="Search jobs" value="" />
                  </InputGroup>
                  <div className="flex gap-2 items-center ms-auto shrink-0">
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_f_" aria-haspopup="dialog" aria-expanded="false">
                      <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                        <path d="M2 5h20"></path>
                        <path d="M6 12h12"></path>
                        <path d="M9 19h6"></path>
                      </svg>
                      <span className="max-sm:sr-only">
                        {"Filter"}
                      </span>
                    </PopoverTrigger>
                    </Popover>
                  </div>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="relative">
                  <DataGridProvider>
                  <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_g_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "38px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                      <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                        <DataGridProvider>
                        <DataGridTableViewport>
                          <DataGridProvider>
                          <DataGridTable>
                            <colgroup>
                              <col style={{width: "36px"}} />
                              <col style={{width: "228px"}} />
                              <col style={{width: "140px"}} />
                              <col style={{width: "80px"}} />
                              <col style={{width: "160px"}} />
                              <col style={{width: "136px"}} />
                              <col style={{width: "128px"}} />
                              <col style={{width: "156px"}} />
                              <col style={{width: "168px"}} />
                              <col style={{width: "44px"}} />
                            </colgroup>
                            <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                              <tr className="[&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" style={{width: "36px", top: "0px"}}>
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_h_" aria-checked="false" aria-label="Select all"></Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" data-pinned="start" data-last-col="start" style={{width: "228px", top: "0px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                      {"Job"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="schedule" data-header-id="schedule" data-header-depth="0" style={{width: "140px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                                      {"Schedule"}
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="enabled" data-header-id="enabled" data-header-depth="0" style={{width: "80px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                      {"Enabled"}
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lastRun" data-header-id="lastRun" data-header-depth="0" style={{width: "160px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                      {"Last Run"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="history" data-header-id="history" data-header-depth="0" style={{width: "136px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                      {"Last 20 Runs"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="nextRun" data-header-id="nextRun" data-header-depth="0" style={{width: "128px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                      {"Next Run"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="target" data-header-id="target" data-header-depth="0" style={{width: "156px"}}>
                                  <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                      {"Target"}
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
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                      {"Owner"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{width: "44px", top: "0px"}}></th>
                              </tr>
                            </thead>
                            <DataGridProvider>
                            <DataGridTableBody>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-233">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1s_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Drain webhook retry queue">
                                      {"Drain webhook retry queue"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"retries:drain --max=5000"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Every 5 minutes"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"*/5 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1v_" aria-checked="true" size="sm" aria-label="Enable Drain webhook retry queue">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_20_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      {"Failed"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"5m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"52s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="18 of 20 runs succeeded, last failure 5m ago" id="base-ui-_r_23_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "91.8033%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.1311%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.9672%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "93.4426%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "73.7705%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "83.6066%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "95.082%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "75.4098%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "86.8852%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "96.7213%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "77.0492%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "88.5246%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "98.3607%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "78.6885%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.1639%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "80.3279%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "91.8033%"}}></span>
                                        <span className="bg-destructive rounded-full w-1" style={{height: "85.2459%"}}></span>
                                        <span className="bg-destructive rounded-full w-1" style={{height: "85.2459%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 5m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:25 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                          <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                          <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                          <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"webhook-dispatcher"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-eu-west-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Omar Haddad"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Drain webhook retry queue" aria-haspopup="menu" id="base-ui-_r_27_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-219">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_29_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Import bank settlement files">
                                      {"Import bank settlement files"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"settlements:import --banks=all"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Hourly at :30"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"30 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_2c_" aria-checked="true" size="sm" aria-label="Enable Import bank settlement files">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_2d_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      {"Failed"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"50m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"4m 12s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="16 of 20 runs succeeded, last failure 50m ago" id="base-ui-_r_2g_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "94.9495%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "74.7475%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "85.8586%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "96.633%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.431%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "87.5421%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "98.3165%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "78.1145%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "89.2256%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "79.798%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "70.3704%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.4815%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.5926%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.0539%"}}></span>
                                        <span className="bg-destructive rounded-full w-1" style={{height: "84.8485%"}}></span>
                                        <span className="bg-destructive rounded-full w-1" style={{height: "84.8485%"}}></span>
                                        <span className="bg-destructive rounded-full w-1" style={{height: "84.8485%"}}></span>
                                        <span className="bg-destructive rounded-full w-1" style={{height: "84.8485%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 10m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:30 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"ledger-worker"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-us-east-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Alex Johnson"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Import bank settlement files" aria-haspopup="menu" id="base-ui-_r_2k_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-240">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2m_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Rebuild merchant search index">
                                      {"Rebuild merchant search index"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"reindex merchants --shards=12"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Daily at 03:30"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"30 3 * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_2p_" aria-checked="true" size="sm" aria-label="Enable Rebuild merchant search index">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_2q_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      {"Timed Out"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"10h 50m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"1h 00m"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="18 of 20 runs succeeded, last failure 10h 50m ago" id="base-ui-_r_2t_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "74.6667%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "85%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "65.9444%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.2778%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "86.5833%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "67.5278%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "77.8611%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "88.1944%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "69.1111%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "79.4444%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "89.7778%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "70.6944%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.0278%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "91.3611%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.3056%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "82.6111%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.9444%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "73.8889%"}}></span>
                                        <span className="bg-warning rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-warning rounded-full w-1" style={{height: "100%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 13h 10m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Sep 30, 03:30"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                          <path d="m21 21-4.34-4.34"></path>
                                          <circle cx="11" cy="11" r="8"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"search-indexer"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-eu-west-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Sofia Romero"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Rebuild merchant search index" aria-haspopup="menu" id="base-ui-_r_31_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-301">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_33_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Send failed charge alerts">
                                      {"Send failed charge alerts"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"alerts:failed-charges --batch=500"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Every 5 minutes"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"*/5 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_36_" aria-checked="true" size="sm" aria-label="Enable Send failed charge alerts">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_37_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      {"Succeeded"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"5m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"12s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="20 of 20 runs succeeded" id="base-ui-_r_3a_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.9231%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.3077%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "69.2308%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.9231%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.3077%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "69.2308%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "84.6154%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.3077%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "69.2308%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "84.6154%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.3077%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.9231%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "84.6154%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.9231%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "84.6154%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.9231%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.3077%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 5m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:25 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                          <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"notifications"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-us-east-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Michael Rodriguez"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Send failed charge alerts" aria-haspopup="menu" id="base-ui-_r_3e_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-226">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Expire stale payout holds">
                                      {"Expire stale payout holds"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"holds:expire --older-than=72h"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Every 15 minutes"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"*/15 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_3j_" aria-checked="true" size="sm" aria-label="Enable Expire stale payout holds">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_3k_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      {"Succeeded"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"5m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"20s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="19 of 20 runs succeeded" id="base-ui-_r_3n_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "71.4286%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "85.7143%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "95.2381%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.1905%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "85.7143%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "95.2381%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.1905%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "85.7143%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-info/40 rounded-full w-1" style={{height: "16%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.4762%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "80.9524%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.4762%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "71.4286%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "80.9524%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.4762%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "71.4286%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "80.9524%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "95.2381%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 10m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:30 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                                          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"payouts-scheduler"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-us-east-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Priya Patel"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Expire stale payout holds" aria-haspopup="menu" id="base-ui-_r_3r_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-263">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3t_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Sync FX reference rates">
                                      {"Sync FX reference rates"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"fx:sync --source=central-banks"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Every 10 minutes"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"*/10 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_40_" aria-checked="true" size="sm" aria-label="Enable Sync FX reference rates">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_41_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      {"Succeeded"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"10m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"11s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="20 of 20 runs succeeded" id="base-ui-_r_44_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.8182%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "63.6364%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.8182%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.8182%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.8182%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.8182%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.8182%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 10m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:30 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                                          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                          <circle cx="12" cy="12" r="2"></circle>
                                          <path d="M6 12h.01M18 12h.01"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"payments-api"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-us-east-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"David Kim"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Sync FX reference rates" aria-haspopup="menu" id="base-ui-_r_48_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-281">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4a_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Retry failed payouts">
                                      {"Retry failed payouts"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"payouts:retry --max-attempts=3"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Every 30 minutes"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"*/30 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_4d_" aria-checked="true" size="sm" aria-label="Enable Retry failed payouts">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_4e_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      {"Succeeded"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"20m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"1m 57s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="19 of 20 runs succeeded, last failure 5h 50m ago" id="base-ui-_r_4h_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "77.9661%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "88.9831%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "79.661%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.678%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "70.339%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.3559%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.3729%"}}></span>
                                        <span className="bg-destructive rounded-full w-1" style={{height: "84.7458%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "83.0508%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "94.0678%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "73.7288%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "84.7458%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "95.7627%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "75.4237%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "86.4407%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "97.4576%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "77.1186%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "88.1356%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "99.1525%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 10m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:30 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                                          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"payouts-scheduler"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-eu-west-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Priya Patel"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Retry failed payouts" aria-haspopup="menu" id="base-ui-_r_4l_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-284">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4n_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Warm merchant search cache">
                                      {"Warm merchant search cache"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"cache:warm merchants"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Every 20 minutes"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"*/20 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_4q_" aria-checked="true" size="sm" aria-label="Enable Warm merchant search cache">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_4r_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      {"Succeeded"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"20m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"38s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="20 of 20 runs succeeded" id="base-ui-_r_4u_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "97.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "77.2727%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "88.6364%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "79.5455%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "79.5455%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "90.9091%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "70.4545%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.8182%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "93.1818%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "72.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "84.0909%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "95.4545%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "75%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "86.3636%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "97.7273%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "75%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "86.3636%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 20m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:40 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                          <path d="m21 21-4.34-4.34"></path>
                                          <circle cx="11" cy="11" r="8"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"search-indexer"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-eu-west-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Sofia Romero"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Warm merchant search cache" aria-haspopup="menu" id="base-ui-_r_52_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-288">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_54_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Purge expired idempotency keys">
                                      {"Purge expired idempotency keys"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"idempotency:purge --ttl=24h"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Hourly at :45"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"45 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_57_" aria-checked="true" size="sm" aria-label="Enable Purge expired idempotency keys">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_58_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      {"Succeeded"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"35m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"1m 55s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="20 of 20 runs succeeded" id="base-ui-_r_5b_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "89.0411%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "79.4521%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "91.0959%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "70.5479%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "81.5068%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "92.4658%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "71.9178%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "82.8767%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "94.5205%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "73.9726%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "84.9315%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "95.8904%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "75.3425%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "86.3014%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "97.9452%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "76.7123%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "88.3562%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "99.3151%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "78.7671%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 25m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"14:45 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                                          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                          <circle cx="12" cy="12" r="2"></circle>
                                          <path d="M6 12h.01M18 12h.01"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"payments-api"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-us-east-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Nina Santos"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Purge expired idempotency keys" aria-haspopup="menu" id="base-ui-_r_5f_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/job-row hover:bg-muted/40" data-row-id="JOB-237">
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5h_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Refresh fraud model features">
                                      {"Refresh fraud model features"}
                                    </button>
                                    <span className="font-mono text-muted-foreground text-xs truncate">
                                      {"features:refresh --model=fs-v7"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm truncate">
                                      {"Hourly at :00"}
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"0 * * * *"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex items-center">
                                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_5k_" aria-checked="true" size="sm" aria-label="Enable Refresh fraud model features">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_5l_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      {"Succeeded"}
                                    </Badge>
                                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                                      {"20m ago"}
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      {"5m 48s"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 items-end outline-offset-2" type="button" aria-label="19 of 20 runs succeeded, last failure 13h 20m ago" id="base-ui-_r_5o_">
                                      <div className="flex gap-0.5 h-5 items-end" aria-hidden="true">
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "33%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "37.3333%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "29.3333%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "33.6667%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "38%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "30%"}}></span>
                                        <span className="bg-warning rounded-full w-1" style={{height: "100%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "38.6667%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "30.6667%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "35%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "39.3333%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "31.3333%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "35.6667%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "27.6667%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "32%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "36.3333%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "28.3333%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "32.6667%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "37%"}}></span>
                                        <span className="bg-success/40 rounded-full w-1" style={{height: "29%"}}></span>
                                      </div>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-sm">
                                      {"in 40m"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"15:00 UTC"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                        <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"fraud-scorer"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono truncate">
                                        {"prod-us-east-1"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="flex min-w-0">
                                    <span className="flex gap-2 items-center min-w-0">
                                      <Avatar className="size-5" size="sm">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="truncate">
                                        {"Kenji Tan"}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Refresh fraud model features" aria-haspopup="menu" id="base-ui-_r_5s_" aria-expanded="false">
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
                            </DataGridProvider>
                          </DataGridTable>
                          </DataGridProvider>
                        </DataGridTableViewport>
                        </DataGridProvider>
                      </div>
                    </div>
                    <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_g_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1199.191222570533px"}}>
                      <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                    </div>
                  </DataGridScrollArea>
                  </DataGridProvider>
                </div>
              </FramePanel>
              <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                <DataGridProvider>
                <DataGridPagination>
                  <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                    <div className="text-muted-foreground text-sm">
                      {"Rows per page"}
                    </div>
                    <Select>
                    <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_5u_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                      <SelectValue>
                        {"10"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_5u_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                    <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                      {"1 - 10 of 32 jobs"}
                    </div>
                    <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                      <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                        <span className="sr-only">
                          {"Go to previous page"}
                        </span>
                        <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </Button>
                      <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                        {"1"}
                      </Button>
                      <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                        {"2"}
                      </Button>
                      <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 3">
                        {"3"}
                      </Button>
                      <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 4">
                        {"4"}
                      </Button>
                      <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                        <span className="sr-only">
                          {"Go to next page"}
                        </span>
                        <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </DataGridPagination>
                </DataGridProvider>
              </footer>
            </Frame>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
              <Frame className="h-full lg:col-span-2 min-w-0" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      {"Run Time"}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {"Runner time by start hour, UTC"}
                    </div>
                  </div>
                  <ToggleGroup className="flex-wrap" multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Outcomes in the chart" style={{"--gap": "2"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2" aria-label="Succeeded, 14h 27m runner time">
                      <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      {"Succeeded"}
                      <span className="tabular-nums">
                        {"14h 27m"}
                      </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2" aria-label="Timed Out, 1h 20m runner time">
                      <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      {"Timed Out"}
                      <span className="tabular-nums">
                        {"1h 20m"}
                      </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2" aria-label="Failed, 20m 12s runner time">
                      <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      {"Failed"}
                      <span className="tabular-nums">
                        {"20m 12s"}
                      </span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </header>
                <FramePanel className="flex flex-1 flex-col gap-4 min-h-0">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline min-w-0">
                    <div className="flex gap-1.5 items-baseline shrink-0">
                      <span className="font-semibold tabular-nums text-2xl tracking-tight">
                        {"16h 07m"}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {"runner time"}
                      </span>
                    </div>
                    <p className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-muted-foreground text-xs">
                      <span>
                        {"-5% vs prior 24h"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        {"10.4% on failed or timed out runs"}
                      </span>
                    </p>
                  </div>
                  <div className="@container flex flex-1 flex-col min-h-56 min-w-0 relative">
                    <ChartContainer>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex flex-1 has-[.recharts-surface:focus-visible]:ring-[3px] has-[.recharts-surface:focus-visible]:ring-offset-2 has-[.recharts-surface:focus-visible]:ring-ring/50 justify-center min-w-0 ring-offset-card rounded-md text-xs w-full" data-chart="chart-_r_66_" role="group" aria-label="Runner time per hour, last 24 hours: Succeeded, Timed Out, and Failed. Arrow keys move between hours.">
                      <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_66_] {\n  --color-succeededSec: var(--success);\n  --color-timedOutSec: var(--warning);\n  --color-failedSec: var(--destructive);\n}\n\n\n.dark [data-chart=chart-_r_66_] {\n  --color-succeededSec: var(--success);\n  --color-timedOutSec: var(--warning);\n  --color-failedSec: var(--destructive);\n}\n" }} />
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="785" height="280" style={{position: "relative", cursor: "default", width: "785px", height: "280px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="785" height="280" viewBox="0 0 785 280" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="36" y="28" width="693" height="222" x1="36" y1="250" x2="729" y2="250"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="36" y="28" width="693" height="222" x1="36" y1="183.53691395724806" x2="729" y2="183.53691395724806"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="36" y="28" width="693" height="222" x1="36" y1="117.07382791449615" x2="729" y2="117.07382791449615"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="36" y="28" width="693" height="222" x1="36" y1="50.610741871744224" x2="729" y2="50.610741871744224"></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts2-clip">
                                  <rect x="36" y="28" height="222" width="693"></rect>
                                </clippath>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_250" tabIndex="-1">
                                <g className="recharts-layer recharts-reference-line">
                                  <line className="recharts-reference-line-line" y="2418.7083333333335" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="36" y1="160.6917666274142" x2="729" y2="160.6917666274142"></line>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1">
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_69_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="42.93" y="177.1491" width="15" height="72.8509" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M42.93,178.6491A 1.5,1.5,0,0,1,44.43,177.1491L 56.43,177.1491A 1.5,1.5,0,0,1,\n        57.93,178.6491L 57.93,250L 42.93,250Z"}></path>
                                            <path className="recharts-rectangle" x="42.93" y="177.1491" width="15" height="3" fill="var(--success)" d={"M42.93,178.6491A 1.5,1.5,0,0,1,44.43,177.1491L 56.43,177.1491A 1.5,1.5,0,0,1,\n        57.93,178.6491L 57.93,180.1491L 42.93,180.1491Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="71.805" y="153.9608" width="15" height="96.0392" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M71.805,155.4608A 1.5,1.5,0,0,1,73.305,153.9608L 85.305,153.9608A 1.5,1.5,0,0,1,\n        86.805,155.4608L 86.805,250L 71.805,250Z"}></path>
                                            <path className="recharts-rectangle" x="71.805" y="153.9608" width="15" height="3" fill="var(--success)" d={"M71.805,155.4608A 1.5,1.5,0,0,1,73.305,153.9608L 85.305,153.9608A 1.5,1.5,0,0,1,\n        86.805,155.4608L 86.805,156.9608L 71.805,156.9608Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="100.68" y="162.8964" width="15" height="87.1036" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M100.68,164.3964A 1.5,1.5,0,0,1,102.18,162.8964L 114.18,162.8964A 1.5,1.5,0,0,1,\n        115.68,164.3964L 115.68,250L 100.68,250Z"}></path>
                                            <path className="recharts-rectangle" x="100.68" y="162.8964" width="15" height="3" fill="var(--success)" d={"M100.68,164.3964A 1.5,1.5,0,0,1,102.18,162.8964L 114.18,162.8964A 1.5,1.5,0,0,1,\n        115.68,164.3964L 115.68,165.8964L 100.68,165.8964Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="129.555" y="174.3798" width="15" height="75.6202" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M129.555,175.8798A 1.5,1.5,0,0,1,131.055,174.3798L 143.055,174.3798A 1.5,1.5,0,0,1,\n        144.555,175.8798L 144.555,250L 129.555,250Z"}></path>
                                            <path className="recharts-rectangle" x="129.555" y="174.3798" width="15" height="3" fill="var(--success)" d={"M129.555,175.8798A 1.5,1.5,0,0,1,131.055,174.3798L 143.055,174.3798A 1.5,1.5,0,0,1,\n        144.555,175.8798L 144.555,177.3798L 129.555,177.3798Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="158.43" y="175.4136" width="15" height="74.5864" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M158.43,176.9136A 1.5,1.5,0,0,1,159.93,175.4136L 171.93,175.4136A 1.5,1.5,0,0,1,\n        173.43,176.9136L 173.43,250L 158.43,250Z"}></path>
                                            <path className="recharts-rectangle" x="158.43" y="175.4136" width="15" height="3" fill="var(--success)" d={"M158.43,176.9136A 1.5,1.5,0,0,1,159.93,175.4136L 171.93,175.4136A 1.5,1.5,0,0,1,\n        173.43,176.9136L 173.43,178.4136L 158.43,178.4136Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="187.305" y="176.8168" width="15" height="73.1832" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M187.305,178.3168A 1.5,1.5,0,0,1,188.805,176.8168L 200.805,176.8168A 1.5,1.5,0,0,1,\n        202.305,178.3168L 202.305,250L 187.305,250Z"}></path>
                                            <path className="recharts-rectangle" x="187.305" y="176.8168" width="15" height="3" fill="var(--success)" d={"M187.305,178.3168A 1.5,1.5,0,0,1,188.805,176.8168L 200.805,176.8168A 1.5,1.5,0,0,1,\n        202.305,178.3168L 202.305,179.8168L 187.305,179.8168Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="216.18" y="162.4533" width="15" height="87.5467" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M216.18,163.9533A 1.5,1.5,0,0,1,217.68,162.4533L 229.68,162.4533A 1.5,1.5,0,0,1,\n        231.18,163.9533L 231.18,250L 216.18,250Z"}></path>
                                            <path className="recharts-rectangle" x="216.18" y="162.4533" width="15" height="3" fill="var(--success)" d={"M216.18,163.9533A 1.5,1.5,0,0,1,217.68,162.4533L 229.68,162.4533A 1.5,1.5,0,0,1,\n        231.18,163.9533L 231.18,165.4533L 216.18,165.4533Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="245.055" y="176.5214" width="15" height="73.4786" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M245.055,178.0214A 1.5,1.5,0,0,1,246.555,176.5214L 258.555,176.5214A 1.5,1.5,0,0,1,\n        260.055,178.0214L 260.055,250L 245.055,250Z"}></path>
                                            <path className="recharts-rectangle" x="245.055" y="176.5214" width="15" height="3" fill="var(--success)" d={"M245.055,178.0214A 1.5,1.5,0,0,1,246.555,176.5214L 258.555,176.5214A 1.5,1.5,0,0,1,\n        260.055,178.0214L 260.055,179.5214L 245.055,179.5214Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="273.93" y="176.226" width="15" height="73.774" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M273.93,177.726A 1.5,1.5,0,0,1,275.43,176.226L 287.43,176.226A 1.5,1.5,0,0,1,\n        288.93,177.726L 288.93,250L 273.93,250Z"}></path>
                                            <path className="recharts-rectangle" x="273.93" y="176.226" width="15" height="3" fill="var(--success)" d={"M273.93,177.726A 1.5,1.5,0,0,1,275.43,176.226L 287.43,176.226A 1.5,1.5,0,0,1,\n        288.93,177.726L 288.93,179.226L 273.93,179.226Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="302.805" y="144.5452" width="15" height="105.4548" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M302.805,146.0452A 1.5,1.5,0,0,1,304.305,144.5452L 316.305,144.5452A 1.5,1.5,0,0,1,\n        317.805,146.0452L 317.805,250L 302.805,250Z"}></path>
                                            <path className="recharts-rectangle" x="302.805" y="144.5452" width="15" height="3" fill="var(--success)" d={"M302.805,146.0452A 1.5,1.5,0,0,1,304.305,144.5452L 316.305,144.5452A 1.5,1.5,0,0,1,\n        317.805,146.0452L 317.805,147.5452L 302.805,147.5452Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="331.68" y="148.1269" width="15" height="101.8731" fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 331.68,148.1269 h 15 v 101.8731 h -15 Z"></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="360.555" y="171.2782" width="15" height="78.7218" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M360.555,172.7782A 1.5,1.5,0,0,1,362.055,171.2782L 374.055,171.2782A 1.5,1.5,0,0,1,\n        375.555,172.7782L 375.555,250L 360.555,250Z"}></path>
                                            <path className="recharts-rectangle" x="360.555" y="171.2782" width="15" height="3" fill="var(--success)" d={"M360.555,172.7782A 1.5,1.5,0,0,1,362.055,171.2782L 374.055,171.2782A 1.5,1.5,0,0,1,\n        375.555,172.7782L 375.555,174.2782L 360.555,174.2782Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="389.43" y="177.3706" width="15" height="72.6294" fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 389.43,177.3706 h 15 v 72.6294 h -15 Z"></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="418.305" y="112.4583" width="15" height="137.5417" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M418.305,113.9583A 1.5,1.5,0,0,1,419.805,112.4583L 431.805,112.4583A 1.5,1.5,0,0,1,\n        433.305,113.9583L 433.305,250L 418.305,250Z"}></path>
                                            <path className="recharts-rectangle" x="418.305" y="112.4583" width="15" height="3" fill="var(--success)" d={"M418.305,113.9583A 1.5,1.5,0,0,1,419.805,112.4583L 431.805,112.4583A 1.5,1.5,0,0,1,\n        433.305,113.9583L 433.305,115.4583L 418.305,115.4583Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="447.18" y="174.2321" width="15" height="75.7679" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M447.18,175.7321A 1.5,1.5,0,0,1,448.68,174.2321L 460.68,174.2321A 1.5,1.5,0,0,1,\n        462.18,175.7321L 462.18,250L 447.18,250Z"}></path>
                                            <path className="recharts-rectangle" x="447.18" y="174.2321" width="15" height="3" fill="var(--success)" d={"M447.18,175.7321A 1.5,1.5,0,0,1,448.68,174.2321L 460.68,174.2321A 1.5,1.5,0,0,1,\n        462.18,175.7321L 462.18,177.2321L 447.18,177.2321Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="476.055" y="164.4472" width="15" height="85.5528" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M476.055,165.9472A 1.5,1.5,0,0,1,477.555,164.4472L 489.555,164.4472A 1.5,1.5,0,0,1,\n        491.055,165.9472L 491.055,250L 476.055,250Z"}></path>
                                            <path className="recharts-rectangle" x="476.055" y="164.4472" width="15" height="3" fill="var(--success)" d={"M476.055,165.9472A 1.5,1.5,0,0,1,477.555,164.4472L 489.555,164.4472A 1.5,1.5,0,0,1,\n        491.055,165.9472L 491.055,167.4472L 476.055,167.4472Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="504.93" y="161.6041" width="15" height="88.3959" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M504.93,163.1041A 1.5,1.5,0,0,1,506.43,161.6041L 518.43,161.6041A 1.5,1.5,0,0,1,\n        519.93,163.1041L 519.93,250L 504.93,250Z"}></path>
                                            <path className="recharts-rectangle" x="504.93" y="161.6041" width="15" height="3" fill="var(--success)" d={"M504.93,163.1041A 1.5,1.5,0,0,1,506.43,161.6041L 518.43,161.6041A 1.5,1.5,0,0,1,\n        519.93,163.1041L 519.93,164.6041L 504.93,164.6041Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="533.805" y="182.3184" width="15" height="67.6816" fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 533.805,182.3184 h 15 v 67.6816 h -15 Z"></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="562.68" y="173.0874" width="15" height="76.9126" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M562.68,174.5874A 1.5,1.5,0,0,1,564.18,173.0874L 576.18,173.0874A 1.5,1.5,0,0,1,\n        577.68,174.5874L 577.68,250L 562.68,250Z"}></path>
                                            <path className="recharts-rectangle" x="562.68" y="173.0874" width="15" height="3" fill="var(--success)" d={"M562.68,174.5874A 1.5,1.5,0,0,1,564.18,173.0874L 576.18,173.0874A 1.5,1.5,0,0,1,\n        577.68,174.5874L 577.68,176.0874L 562.68,176.0874Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="591.555" y="178.4045" width="15" height="71.5955" fill="color-mix(in oklab, var(--success) 20%, var(--card))" d={"M591.555,179.9045A 1.5,1.5,0,0,1,593.055,178.4045L 605.055,178.4045A 1.5,1.5,0,0,1,\n        606.555,179.9045L 606.555,250L 591.555,250Z"}></path>
                                            <path className="recharts-rectangle" x="591.555" y="178.4045" width="15" height="3" fill="var(--success)" d={"M591.555,179.9045A 1.5,1.5,0,0,1,593.055,178.4045L 605.055,178.4045A 1.5,1.5,0,0,1,\n        606.555,179.9045L 606.555,181.4045L 591.555,181.4045Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="620.43" y="189.297" width="15" height="60.703" fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 620.43,189.297 h 15 v 60.703 h -15 Z"></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="649.305" y="176.9275" width="15" height="73.0725" fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 649.305,176.9275 h 15 v 73.0725 h -15 Z"></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="678.18" y="164.9272" width="15" height="85.0728" fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 678.18,164.9272 h 15 v 85.0728 h -15 Z"></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="707.055" y="223.7471" width="15" height="26.2529" fill="color-mix(in oklab, var(--success) 20%, var(--card))" radius="0" d="M 707.055,223.7471 h 15 v 26.2529 h -15 Z"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_6a_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="331.68" y="103.8181" width="15" height="43.3087" fill="color-mix(in oklab, var(--warning) 20%, var(--card))" d={"M331.68,105.3181A 1.5,1.5,0,0,1,333.18,103.8181L 345.18,103.8181A 1.5,1.5,0,0,1,\n        346.68,105.3181L 346.68,147.1269L 331.68,147.1269Z"}></path>
                                            <path className="recharts-rectangle" x="331.68" y="103.8181" width="15" height="3" fill="var(--warning)" d={"M331.68,105.3181A 1.5,1.5,0,0,1,333.18,103.8181L 345.18,103.8181A 1.5,1.5,0,0,1,\n        346.68,105.3181L 346.68,106.8181L 331.68,106.8181Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="389.43" y="44.4444" width="15" height="131.9262" fill="color-mix(in oklab, var(--warning) 20%, var(--card))" d={"M389.43,45.9444A 1.5,1.5,0,0,1,390.93,44.4444L 402.93,44.4444A 1.5,1.5,0,0,1,\n        404.43,45.9444L 404.43,176.3706L 389.43,176.3706Z"}></path>
                                            <path className="recharts-rectangle" x="389.43" y="44.4444" width="15" height="3" fill="var(--warning)" d={"M389.43,45.9444A 1.5,1.5,0,0,1,390.93,44.4444L 402.93,44.4444A 1.5,1.5,0,0,1,\n        404.43,45.9444L 404.43,47.4444L 389.43,47.4444Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_6b_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="533.805" y="178.626" width="15" height="2.6924" fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M533.805,179.9722A 1.3462,1.3462,0,0,1,535.1512,178.626L 547.4588,178.626A 1.3462,1.3462,0,0,1,\n        548.805,179.9722L 548.805,181.3184L 533.805,181.3184Z"}></path>
                                            <path className="recharts-rectangle" x="533.805" y="178.626" width="15" height="3" fill="var(--destructive)" d={"M533.805,180.126A 1.5,1.5,0,0,1,535.305,178.626L 547.305,178.626A 1.5,1.5,0,0,1,\n        548.805,180.126L 548.805,181.626L 533.805,181.626Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g></g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="620.43" y="179.9922" width="15" height="8.3048" fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M620.43,181.4922A 1.5,1.5,0,0,1,621.93,179.9922L 633.93,179.9922A 1.5,1.5,0,0,1,\n        635.43,181.4922L 635.43,188.297L 620.43,188.297Z"}></path>
                                            <path className="recharts-rectangle" x="620.43" y="179.9922" width="15" height="3" fill="var(--destructive)" d={"M620.43,181.4922A 1.5,1.5,0,0,1,621.93,179.9922L 633.93,179.9922A 1.5,1.5,0,0,1,\n        635.43,181.4922L 635.43,182.9922L 620.43,182.9922Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="649.305" y="158.3179" width="15" height="17.6097" fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M649.305,159.8179A 1.5,1.5,0,0,1,650.805,158.3179L 662.805,158.3179A 1.5,1.5,0,0,1,\n        664.305,159.8179L 664.305,175.9275L 649.305,175.9275Z"}></path>
                                            <path className="recharts-rectangle" x="649.305" y="158.3179" width="15" height="3" fill="var(--destructive)" d={"M649.305,159.8179A 1.5,1.5,0,0,1,650.805,158.3179L 662.805,158.3179A 1.5,1.5,0,0,1,\n        664.305,159.8179L 664.305,161.3179L 649.305,161.3179Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="678.18" y="155.6224" width="15" height="8.3048" fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M678.18,157.1224A 1.5,1.5,0,0,1,679.68,155.6224L 691.68,155.6224A 1.5,1.5,0,0,1,\n        693.18,157.1224L 693.18,163.9272L 678.18,163.9272Z"}></path>
                                            <path className="recharts-rectangle" x="678.18" y="155.6224" width="15" height="3" fill="var(--destructive)" d={"M678.18,157.1224A 1.5,1.5,0,0,1,679.68,155.6224L 691.68,155.6224A 1.5,1.5,0,0,1,\n        693.18,157.1224L 693.18,158.6224L 678.18,158.6224Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g className="duration-150 motion-reduce:transition-none transition-opacity" opacity="1">
                                            <path className="recharts-rectangle" x="707.055" y="219.907" width="15" height="2.8401" fill="color-mix(in oklab, var(--destructive) 20%, var(--card))" d={"M707.055,221.327A 1.4201,1.4201,0,0,1,708.475,219.907L 720.635,219.907A 1.4201,1.4201,0,0,1,\n        722.055,221.327L 722.055,222.7471L 707.055,222.7471Z"}></path>
                                            <path className="recharts-rectangle" x="707.055" y="219.907" width="15" height="3" fill="var(--destructive)" d={"M707.055,221.407A 1.5,1.5,0,0,1,708.555,219.907L 720.555,219.907A 1.5,1.5,0,0,1,\n        722.055,221.407L 722.055,222.907L 707.055,222.907Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                <g className="duration-150 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                  <line x1="396.9375" x2="396.9375" y1="23" y2="32.44444444444447" stroke="var(--muted-foreground)" strokeOpacity="0.5" strokeDasharray="2 2"></line>
                                  <circle cx="396.9375" cy="37.44444444444447" r="2.5" fill="var(--warning)" stroke="var(--card)" strokeWidth="1.5"></circle>
                                  <text x="396.9375" y="18" textAnchor="middle" fill="var(--muted-foreground)" stroke="var(--card)" strokeWidth="3" strokeLinejoin="round" paint-order="stroke">
                                    {"Timeout burn"}
                                  </text>
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
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="50.4375" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="50.4375" dy="0.71em">
                                        {"15:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="137.0625" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="137.0625" dy="0.71em">
                                        {"18:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="223.6875" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="223.6875" dy="0.71em">
                                        {"21:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="310.3125" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="310.3125" dy="0.71em">
                                        {"00:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="396.9375" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="396.9375" dy="0.71em">
                                        {"03:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="483.5625" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="483.5625" dy="0.71em">
                                        {"06:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="570.1875" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="570.1875" dy="0.71em">
                                        {"09:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="693" stroke="none" x="656.8125" y="266" textAnchor="middle" fill="#666">
                                      <tspan x="656.8125" dy="0.71em">
                                        {"12:00"}
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                                <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="222" stroke="none" x="24" y="250" textAnchor="end" fill="#666">
                                      <tspan x="24" dy="0.355em">
                                        {"0m"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="222" stroke="none" x="24" y="183.53691395724806" textAnchor="end" fill="#666">
                                      <tspan x="24" dy="0.355em">
                                        {"30m"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="222" stroke="none" x="24" y="117.07382791449615" textAnchor="end" fill="#666">
                                      <tspan x="24" dy="0.355em">
                                        {"60m"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="222" stroke="none" x="24" y="50.610741871744224" textAnchor="end" fill="#666">
                                      <tspan x="24" dy="0.355em">
                                        {"90m"}
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                                <text className="recharts-label recharts-text" offset="6" x="735" y="160.6917666274142" textAnchor="start" fill="var(--muted-foreground)">
                                  <tspan x="735" dy="0.355em">
                                    {"Avg 40m"}
                                  </tspan>
                                </text>
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
              <Frame className="h-full min-w-0" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      {"Up Next"}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {"Next 30 minutes"}
                    </div>
                  </div>
                </header>
                <FramePanel className="flex flex-col gap-1">
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Drain webhook retry queue"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          {"Failing"}
                        </Badge>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 5m"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Send failed charge alerts"}
                        </span>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 5m"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Import bank settlement files"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          {"Failing"}
                        </Badge>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 10m"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Expire stale payout holds"}
                        </span>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 10m"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                        <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M6 12h.01M18 12h.01"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Sync FX reference rates"}
                        </span>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 10m"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Retry failed payouts"}
                        </span>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 10m"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Warm merchant search cache"}
                        </span>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 20m"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="cursor-pointer hover:bg-muted text-start" type="button" variant="default" size="xs">
                    <ItemMedia variant="icon">
                      <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                        <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M6 12h.01M18 12h.01"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Purge expired idempotency keys"}
                        </span>
                      </ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        {"in 25m"}
                      </span>
                    </ItemActions>
                  </Item>
                </FramePanel>
              </Frame>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
