import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
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
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Connections
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex flex-wrap gap-2.5 items-center">
                <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                  Connections
                </h2>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                  1 failing
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                13 connections, 33 linked datasets
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center shrink-0">
              <Select>
              <SelectTrigger className="w-44" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Environment" extracted="1">
                <SelectValue>
                  All Environments
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
                New Connection
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="gap-2 grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-3">
              <Frame className="h-full min-w-0" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                    <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                      <path d="m2 22 3-3"></path>
                      <path d="M7.5 13.5 10 11"></path>
                      <path d="M10.5 16.5 13 14"></path>
                      <path d="m18 3-4 4h6l-4 4"></path>
                    </svg>
                    <span className="font-medium text-foreground text-sm truncate">
                      Connection Health
                    </span>
                    <span className="ms-auto shrink-0 text-xs">
                      Now
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                      <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                        10
                        <span className="font-normal text-base text-muted-foreground">
                          /13
                        </span>
                      </span>
                      <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-destructive text-sm">
                        <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                          <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                            <path d="M12 5v14"></path>
                            <path d="m19 12-7 7-7-7"></path>
                          </svg>
                        </span>
                        16.7%
                        <span className="sr-only">
                          down against yesterday
                        </span>
                      </span>
                    </div>
                    <span className="tabular-nums text-muted-foreground text-xs">
                      12 healthy yesterday
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5 mt-auto">
                    <div className="flex gap-1 h-2 w-full" role="img" aria-label="Connections by health: 10 healthy, 1 degraded, 1 failing, 1 paused">
                      <span className="bg-success h-full min-w-1 rounded-full" style={{flexGrow: "10"}}></span>
                      <span className="bg-warning h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                      <span className="bg-destructive h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                      <span className="bg-muted-foreground/40 h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                    </div>
                    <dl className="gap-x-4 gap-y-1 grid grid-cols-2">
                      <div className="flex gap-1.5 items-center min-w-0 text-xs">
                        <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <dt className="min-w-0 text-muted-foreground truncate">
                          Healthy
                        </dt>
                        <dd className="font-medium ms-auto tabular-nums">
                          10
                        </dd>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-xs">
                        <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <dt className="min-w-0 text-muted-foreground truncate">
                          Degraded
                        </dt>
                        <dd className="font-medium ms-auto tabular-nums">
                          1
                        </dd>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-xs">
                        <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <dt className="min-w-0 text-muted-foreground truncate">
                          Failing
                        </dt>
                        <dd className="font-medium ms-auto tabular-nums">
                          1
                        </dd>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-xs">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <dt className="min-w-0 text-muted-foreground truncate">
                          Paused
                        </dt>
                        <dd className="font-medium ms-auto tabular-nums">
                          1
                        </dd>
                      </div>
                    </dl>
                  </div>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                    <span className="truncate">
                      View risk-feature-store
                    </span>
                    <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </footer>
              </Frame>
              <Frame className="h-full min-w-0" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                    <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span className="font-medium text-foreground text-sm truncate">
                      Linked Datasets
                    </span>
                    <span className="ms-auto shrink-0 text-xs">
                      Now
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                      <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                        33
                        <span className="font-normal text-base text-muted-foreground">
                          /49
                        </span>
                      </span>
                      <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-sm text-success">
                        <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                          <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                            <path d="m5 12 7-7 7 7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                        </span>
                        6.5%
                        <span className="sr-only">
                          up against last week
                        </span>
                      </span>
                    </div>
                    <span className="tabular-nums text-muted-foreground text-xs">
                      31 linked last week
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5 mt-auto">
                    <div className="flex gap-1 h-2 w-full" role="img" aria-label="Datasets by sync state: 32 in sync, 1 drifted, 16 unlinked">
                      <span className="bg-info h-full min-w-1 rounded-full" style={{flexGrow: "32"}}></span>
                      <span className="bg-warning h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                      <span className="bg-muted-foreground/30 h-full min-w-1 rounded-full" style={{flexGrow: "16"}}></span>
                    </div>
                    <dl className="gap-x-4 gap-y-1 grid grid-cols-2">
                      <div className="flex gap-1.5 items-center min-w-0 text-xs">
                        <span className="bg-info rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <dt className="min-w-0 text-muted-foreground truncate">
                          In sync
                        </dt>
                        <dd className="font-medium ms-auto tabular-nums">
                          32
                        </dd>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-xs">
                        <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <dt className="min-w-0 text-muted-foreground truncate">
                          Drifted
                        </dt>
                        <dd className="font-medium ms-auto tabular-nums">
                          1
                        </dd>
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-xs">
                        <span className="bg-muted-foreground/30 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <dt className="min-w-0 text-muted-foreground truncate">
                          Unlinked
                        </dt>
                        <dd className="font-medium ms-auto tabular-nums">
                          16
                        </dd>
                      </div>
                    </dl>
                  </div>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                    <span className="truncate">
                      Review schema drift
                    </span>
                    <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </footer>
              </Frame>
              <Frame className="h-full min-w-0" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                    <svg className="lucide lucide-arrow-left-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftRightIcon" tabler="IconArrowsExchange" hugeicons="ArrowDataTransferHorizontalIcon" phosphor="ArrowsLeftRightIcon" remixicon="RiArrowLeftRightLine" aria-hidden="true">
                      <path d="M8 3 4 7l4 4"></path>
                      <path d="M4 7h16"></path>
                      <path d="m16 21 4-4-4-4"></path>
                      <path d="M20 17H4"></path>
                    </svg>
                    <span className="font-medium text-foreground text-sm truncate">
                      Rows Synced
                    </span>
                    <span className="ms-auto shrink-0 text-xs">
                      14 days
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                      <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                        8.4M
                      </span>
                      <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-sm text-success">
                        <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                          <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                            <path d="m5 12 7-7 7 7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                        </span>
                        4.4%
                        <span className="sr-only">
                          up against yesterday
                        </span>
                      </span>
                    </div>
                    <span className="tabular-nums text-muted-foreground text-xs">
                      8.1M yesterday
                    </span>
                  </div>
                  <div className="h-14 mt-auto w-full" role="img" aria-label="Rows synced per day, last 14 days, today 8.4M">
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-14 justify-center text-xs w-full" data-chart="chart-_r_4_">
                      <style>{`
 [data-chart=chart-_r_4_] {
  --color-rows: var(--success);
}


.dark [data-chart=chart-_r_4_] {
  --color-rows: var(--success);
}
`}</style>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="261" height="56" style={{position: "relative", cursor: "default", width: "261px", height: "56px"}}>
                            <svg className="recharts-surface" width="261" height="56" viewBox="0 0 261 56" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts1-clip">
                                  <rect x="0" y="6" height="50" width="255"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <lineargradient id="stat-fill-r3" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="var(--success)" stopOpacity="0.24"></stop>
                                  <stop offset="100%" stopColor="var(--success)" stopOpacity="0"></stop>
                                </lineargradient>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_7f_)">
                                      <g className="recharts-layer">
                                        <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="url(#stat-fill-r3)" fillOpacity="1" height="50" stroke="none" width="255" id="recharts-area-_r_7f_" d="M0,17.428C6.538,15.843,13.077,14.258,19.615,14.258C26.154,14.258,32.692,19.278,39.231,19.278C45.769,19.278,52.308,13.128,58.846,11.175C65.385,9.223,71.923,7.564,78.462,7.564C85,7.564,91.538,22.243,98.077,23.946C104.615,25.649,111.154,26.5,117.692,26.5C124.231,26.5,130.769,14.052,137.308,12.232C143.846,10.412,150.385,9.502,156.923,9.502C163.462,9.502,170,10.206,176.538,10.206C183.077,10.206,189.615,6.948,196.154,6.948C202.692,6.948,209.231,13.553,215.769,13.553C222.308,13.553,228.846,10.408,235.385,9.15C241.923,7.891,248.462,6.945,255,6L255,56C248.462,56,241.923,56,235.385,56C228.846,56,222.308,56,215.769,56C209.231,56,202.692,56,196.154,56C189.615,56,183.077,56,176.538,56C170,56,163.462,56,156.923,56C150.385,56,143.846,56,137.308,56C130.769,56,124.231,56,117.692,56C111.154,56,104.615,56,98.077,56C91.538,56,85,56,78.462,56C71.923,56,65.385,56,58.846,56C52.308,56,45.769,56,39.231,56C32.692,56,26.154,56,19.615,56C13.077,56,6.538,56,0,56Z"></path>
                                        <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="1" height="50" stroke="var(--success)" width="255" d="M0,17.428C6.538,15.843,13.077,14.258,19.615,14.258C26.154,14.258,32.692,19.278,39.231,19.278C45.769,19.278,52.308,13.128,58.846,11.175C65.385,9.223,71.923,7.564,78.462,7.564C85,7.564,91.538,22.243,98.077,23.946C104.615,25.649,111.154,26.5,117.692,26.5C124.231,26.5,130.769,14.052,137.308,12.232C143.846,10.412,150.385,9.502,156.923,9.502C163.462,9.502,170,10.206,176.538,10.206C183.077,10.206,189.615,6.948,196.154,6.948C202.692,6.948,209.231,13.553,215.769,13.553C222.308,13.553,228.846,10.408,235.385,9.15C241.923,7.891,248.462,6.945,255,6"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                <g className="recharts-layer recharts-reference-line">
                                  <line className="recharts-reference-line-line" x="Sep 29" stroke="var(--success)" strokeOpacity="0.5" strokeDasharray="2 3" fill="none" fillOpacity="1" strokeWidth="1" x1="255" y1="56" x2="255" y2="6"></line>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                <g className="recharts-layer recharts-reference-dot">
                                  <circle className="recharts-dot recharts-reference-dot-dot" x="Sep 29" y="8417609" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" fillOpacity="1" cx="255" cy="6"></circle>
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
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                    <span className="truncate">
                      View analytics-warehouse
                    </span>
                    <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </footer>
              </Frame>
              <Frame className="h-full min-w-0" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                    <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    <span className="font-medium text-foreground text-sm truncate">
                      Failed Syncs
                    </span>
                    <span className="ms-auto shrink-0 text-xs">
                      14 days
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                      <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                        7
                      </span>
                      <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-destructive text-sm">
                        <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                          <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                            <path d="m5 12 7-7 7 7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                        </span>
                        250%
                        <span className="sr-only">
                          up against yesterday
                        </span>
                      </span>
                    </div>
                    <span className="tabular-nums text-muted-foreground text-xs">
                      2 yesterday, 19 in 14 days
                    </span>
                  </div>
                  <div className="flex gap-1 h-14 items-end mt-auto w-full" role="img" aria-label="Failed runs per day, last 14 days: 0, 1, 0, 0, 2, 1, 0, 1, 0, 3, 2, 0, 2, 7">
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "14.2857%"}}></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "28.5714%"}}></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "14.2857%"}}></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "14.2857%"}}></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "42.8571%"}}></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "28.5714%"}}></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "28.5714%"}}></span>
                    </span>
                    <span className="flex-1 h-full relative">
                      <span className="absolute bg-muted inset-0 rounded-full"></span>
                      <span className="absolute bg-destructive bottom-0 inset-x-0 rounded-full" style={{height: "100%"}}></span>
                    </span>
                  </div>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                    <span className="truncate">
                      View risk-feature-store
                    </span>
                    <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </footer>
              </Frame>
            </div>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
              <Frame className="lg:col-span-2 min-w-0" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      Sync Activity
                    </div>
                    <div className="text-muted-foreground text-sm">
                      727 runs in 24 hours, 99.0% landed
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                      <li className="flex gap-1.5 items-center">
                        <span className="bg-success rounded-full size-2" aria-hidden="true"></span>
                        Succeeded
                      </li>
                      <li className="flex gap-1.5 items-center">
                        <span className="bg-warning rounded-full size-2" aria-hidden="true"></span>
                        Slow
                      </li>
                      <li className="flex gap-1.5 items-center">
                        <span className="bg-destructive rounded-full size-2" aria-hidden="true"></span>
                        Failed
                      </li>
                    </ul>
                    <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Activity shown" style={{"--gap": "0"}}>
                      <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0">
                        Runs
                      </ToggleGroupItem>
                      <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                        Rows
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </header>
                <FramePanel>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_8_">
                    <style>{`
 [data-chart=chart-_r_8_] {
  --color-succeeded: var(--success);
  --color-partial: var(--warning);
  --color-failed: var(--destructive);
  --color-volume: var(--info);
}


.dark [data-chart=chart-_r_8_] {
  --color-succeeded: var(--success);
  --color-partial: var(--warning);
  --color-failed: var(--destructive);
  --color-volume: var(--info);
}
`}</style>
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="785" height="224" style={{position: "relative", cursor: "default", width: "785px", height: "224px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="785" height="224" viewBox="0 0 785 224" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1">
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="31.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 31.3333,10\n            A 6,6,0,0,1,37.3333,4\n            L 44.3333,4\n            A 6,6,0,0,1,50.3333,10\n            L 50.3333,192\n            A 6,6,0,0,1,44.3333,198\n            L 37.3333,198\n            A 6,6,0,0,1,31.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="63" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 63,10\n            A 6,6,0,0,1,69,4\n            L 76,4\n            A 6,6,0,0,1,82,10\n            L 82,192\n            A 6,6,0,0,1,76,198\n            L 69,198\n            A 6,6,0,0,1,63,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="94.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 94.6667,10\n            A 6,6,0,0,1,100.6667,4\n            L 107.6667,4\n            A 6,6,0,0,1,113.6667,10\n            L 113.6667,192\n            A 6,6,0,0,1,107.6667,198\n            L 100.6667,198\n            A 6,6,0,0,1,94.6667,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="126.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 126.3333,10\n            A 6,6,0,0,1,132.3333,4\n            L 139.3333,4\n            A 6,6,0,0,1,145.3333,10\n            L 145.3333,192\n            A 6,6,0,0,1,139.3333,198\n            L 132.3333,198\n            A 6,6,0,0,1,126.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="158" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 158,10\n            A 6,6,0,0,1,164,4\n            L 171,4\n            A 6,6,0,0,1,177,10\n            L 177,192\n            A 6,6,0,0,1,171,198\n            L 164,198\n            A 6,6,0,0,1,158,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="189.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 189.6667,10\n            A 6,6,0,0,1,195.6667,4\n            L 202.6667,4\n            A 6,6,0,0,1,208.6667,10\n            L 208.6667,192\n            A 6,6,0,0,1,202.6667,198\n            L 195.6667,198\n            A 6,6,0,0,1,189.6667,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="221.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 221.3333,10\n            A 6,6,0,0,1,227.3333,4\n            L 234.3333,4\n            A 6,6,0,0,1,240.3333,10\n            L 240.3333,192\n            A 6,6,0,0,1,234.3333,198\n            L 227.3333,198\n            A 6,6,0,0,1,221.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="253" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 253,10\n            A 6,6,0,0,1,259,4\n            L 266,4\n            A 6,6,0,0,1,272,10\n            L 272,192\n            A 6,6,0,0,1,266,198\n            L 259,198\n            A 6,6,0,0,1,253,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="284.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 284.6667,10\n            A 6,6,0,0,1,290.6667,4\n            L 297.6667,4\n            A 6,6,0,0,1,303.6667,10\n            L 303.6667,192\n            A 6,6,0,0,1,297.6667,198\n            L 290.6667,198\n            A 6,6,0,0,1,284.6667,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="316.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 316.3333,10\n            A 6,6,0,0,1,322.3333,4\n            L 329.3333,4\n            A 6,6,0,0,1,335.3333,10\n            L 335.3333,192\n            A 6,6,0,0,1,329.3333,198\n            L 322.3333,198\n            A 6,6,0,0,1,316.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="348" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 348,10\n            A 6,6,0,0,1,354,4\n            L 361,4\n            A 6,6,0,0,1,367,10\n            L 367,192\n            A 6,6,0,0,1,361,198\n            L 354,198\n            A 6,6,0,0,1,348,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="379.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 379.6667,10\n            A 6,6,0,0,1,385.6667,4\n            L 392.6667,4\n            A 6,6,0,0,1,398.6667,10\n            L 398.6667,192\n            A 6,6,0,0,1,392.6667,198\n            L 385.6667,198\n            A 6,6,0,0,1,379.6667,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="411.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 411.3333,10\n            A 6,6,0,0,1,417.3333,4\n            L 424.3333,4\n            A 6,6,0,0,1,430.3333,10\n            L 430.3333,192\n            A 6,6,0,0,1,424.3333,198\n            L 417.3333,198\n            A 6,6,0,0,1,411.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="443" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 443,10\n            A 6,6,0,0,1,449,4\n            L 456,4\n            A 6,6,0,0,1,462,10\n            L 462,192\n            A 6,6,0,0,1,456,198\n            L 449,198\n            A 6,6,0,0,1,443,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="474.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 474.6667,10\n            A 6,6,0,0,1,480.6667,4\n            L 487.6667,4\n            A 6,6,0,0,1,493.6667,10\n            L 493.6667,192\n            A 6,6,0,0,1,487.6667,198\n            L 480.6667,198\n            A 6,6,0,0,1,474.6667,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="506.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 506.3333,10\n            A 6,6,0,0,1,512.3333,4\n            L 519.3333,4\n            A 6,6,0,0,1,525.3333,10\n            L 525.3333,192\n            A 6,6,0,0,1,519.3333,198\n            L 512.3333,198\n            A 6,6,0,0,1,506.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="538" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 538,10\n            A 6,6,0,0,1,544,4\n            L 551,4\n            A 6,6,0,0,1,557,10\n            L 557,192\n            A 6,6,0,0,1,551,198\n            L 544,198\n            A 6,6,0,0,1,538,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="569.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 569.6667,10\n            A 6,6,0,0,1,575.6667,4\n            L 582.6667,4\n            A 6,6,0,0,1,588.6667,10\n            L 588.6667,192\n            A 6,6,0,0,1,582.6667,198\n            L 575.6667,198\n            A 6,6,0,0,1,569.6667,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="601.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 601.3333,10\n            A 6,6,0,0,1,607.3333,4\n            L 614.3333,4\n            A 6,6,0,0,1,620.3333,10\n            L 620.3333,192\n            A 6,6,0,0,1,614.3333,198\n            L 607.3333,198\n            A 6,6,0,0,1,601.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="633" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 633,10\n            A 6,6,0,0,1,639,4\n            L 646,4\n            A 6,6,0,0,1,652,10\n            L 652,192\n            A 6,6,0,0,1,646,198\n            L 639,198\n            A 6,6,0,0,1,633,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="664.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 664.6667,10\n            A 6,6,0,0,1,670.6667,4\n            L 677.6667,4\n            A 6,6,0,0,1,683.6667,10\n            L 683.6667,192\n            A 6,6,0,0,1,677.6667,198\n            L 670.6667,198\n            A 6,6,0,0,1,664.6667,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="696.3333" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 696.3333,10\n            A 6,6,0,0,1,702.3333,4\n            L 709.3333,4\n            A 6,6,0,0,1,715.3333,10\n            L 715.3333,192\n            A 6,6,0,0,1,709.3333,198\n            L 702.3333,198\n            A 6,6,0,0,1,696.3333,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="728" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 728,10\n            A 6,6,0,0,1,734,4\n            L 741,4\n            A 6,6,0,0,1,747,10\n            L 747,192\n            A 6,6,0,0,1,741,198\n            L 734,198\n            A 6,6,0,0,1,728,192 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="759.6667" y="4" width="19" height="194" fill="var(--muted)" radius="6" d={"M 759.6667,10\n            A 6,6,0,0,1,765.6667,4\n            L 772.6667,4\n            A 6,6,0,0,1,778.6667,10\n            L 778.6667,192\n            A 6,6,0,0,1,772.6667,198\n            L 765.6667,198\n            A 6,6,0,0,1,759.6667,192 Z"}></path>
                              </g>
                            </g>
                            <defs>
                              <clippath id="recharts2-clip">
                                <rect x="25" y="4" height="194" width="760"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <pattern id="r5-succeeded" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                <rect width="5" height="5" fill="var(--color-succeeded)" fillOpacity="0.22"></rect>
                                <rect width="2" height="5" fill="var(--color-succeeded)" fillOpacity="0.5"></rect>
                              </pattern>
                              <pattern id="r5-partial" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                <rect width="5" height="5" fill="var(--color-partial)" fillOpacity="0.22"></rect>
                                <rect width="2" height="5" fill="var(--color-partial)" fillOpacity="0.5"></rect>
                              </pattern>
                              <pattern id="r5-failed" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                <rect width="5" height="5" fill="var(--color-failed)" fillOpacity="0.22"></rect>
                                <rect width="2" height="5" fill="var(--color-failed)" fillOpacity="0.5"></rect>
                              </pattern>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_7g_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="31.3333" y="51.4222" width="19" height="146.5778" fill="url(#r5-succeeded)" radius="4" d={"M 31.3333,55.4222\n            A 4,4,0,0,1,35.3333,51.4222\n            L 46.3333,51.4222\n            A 4,4,0,0,1,50.3333,55.4222\n            L 50.3333,194\n            A 4,4,0,0,1,46.3333,198\n            L 35.3333,198\n            A 4,4,0,0,1,31.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="63" y="51.4222" width="19" height="146.5778" fill="url(#r5-succeeded)" radius="4" d={"M 63,55.4222\n            A 4,4,0,0,1,67,51.4222\n            L 78,51.4222\n            A 4,4,0,0,1,82,55.4222\n            L 82,194\n            A 4,4,0,0,1,78,198\n            L 67,198\n            A 4,4,0,0,1,63,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="94.6667" y="51.4222" width="19" height="146.5778" fill="url(#r5-succeeded)" radius="4" d={"M 94.6667,55.4222\n            A 4,4,0,0,1,98.6667,51.4222\n            L 109.6667,51.4222\n            A 4,4,0,0,1,113.6667,55.4222\n            L 113.6667,194\n            A 4,4,0,0,1,109.6667,198\n            L 98.6667,198\n            A 4,4,0,0,1,94.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="126.3333" y="47.1111" width="19" height="150.8889" fill="url(#r5-succeeded)" radius="4" d={"M 126.3333,51.1111\n            A 4,4,0,0,1,130.3333,47.1111\n            L 141.3333,47.1111\n            A 4,4,0,0,1,145.3333,51.1111\n            L 145.3333,194\n            A 4,4,0,0,1,141.3333,198\n            L 130.3333,198\n            A 4,4,0,0,1,126.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="158" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 158,72.6667\n            A 4,4,0,0,1,162,68.6667\n            L 173,68.6667\n            A 4,4,0,0,1,177,72.6667\n            L 177,194\n            A 4,4,0,0,1,173,198\n            L 162,198\n            A 4,4,0,0,1,158,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="189.6667" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 189.6667,72.6667\n            A 4,4,0,0,1,193.6667,68.6667\n            L 204.6667,68.6667\n            A 4,4,0,0,1,208.6667,72.6667\n            L 208.6667,194\n            A 4,4,0,0,1,204.6667,198\n            L 193.6667,198\n            A 4,4,0,0,1,189.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="221.3333" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 221.3333,72.6667\n            A 4,4,0,0,1,225.3333,68.6667\n            L 236.3333,68.6667\n            A 4,4,0,0,1,240.3333,72.6667\n            L 240.3333,194\n            A 4,4,0,0,1,236.3333,198\n            L 225.3333,198\n            A 4,4,0,0,1,221.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="253" y="73.9778" width="19" height="124.0222" fill="url(#r5-succeeded)" radius="4" d={"M 253,77.9778\n            A 4,4,0,0,1,257,73.9778\n            L 268,73.9778\n            A 4,4,0,0,1,272,77.9778\n            L 272,194\n            A 4,4,0,0,1,268,198\n            L 257,198\n            A 4,4,0,0,1,253,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="284.6667" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 284.6667,72.6667\n            A 4,4,0,0,1,288.6667,68.6667\n            L 299.6667,68.6667\n            A 4,4,0,0,1,303.6667,72.6667\n            L 303.6667,194\n            A 4,4,0,0,1,299.6667,198\n            L 288.6667,198\n            A 4,4,0,0,1,284.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="316.3333" y="64.3556" width="19" height="133.6444" fill="url(#r5-succeeded)" radius="4" d={"M 316.3333,68.3556\n            A 4,4,0,0,1,320.3333,64.3556\n            L 331.3333,64.3556\n            A 4,4,0,0,1,335.3333,68.3556\n            L 335.3333,194\n            A 4,4,0,0,1,331.3333,198\n            L 320.3333,198\n            A 4,4,0,0,1,316.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="348" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 348,72.6667\n            A 4,4,0,0,1,352,68.6667\n            L 363,68.6667\n            A 4,4,0,0,1,367,72.6667\n            L 367,194\n            A 4,4,0,0,1,363,198\n            L 352,198\n            A 4,4,0,0,1,348,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="379.6667" y="82.6" width="19" height="115.4" fill="url(#r5-succeeded)" radius="4" d={"M 379.6667,86.6\n            A 4,4,0,0,1,383.6667,82.6\n            L 394.6667,82.6\n            A 4,4,0,0,1,398.6667,86.6\n            L 398.6667,194\n            A 4,4,0,0,1,394.6667,198\n            L 383.6667,198\n            A 4,4,0,0,1,379.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="411.3333" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 411.3333,72.6667\n            A 4,4,0,0,1,415.3333,68.6667\n            L 426.3333,68.6667\n            A 4,4,0,0,1,430.3333,72.6667\n            L 430.3333,194\n            A 4,4,0,0,1,426.3333,198\n            L 415.3333,198\n            A 4,4,0,0,1,411.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="443" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 443,72.6667\n            A 4,4,0,0,1,447,68.6667\n            L 458,68.6667\n            A 4,4,0,0,1,462,72.6667\n            L 462,194\n            A 4,4,0,0,1,458,198\n            L 447,198\n            A 4,4,0,0,1,443,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="474.6667" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 474.6667,72.6667\n            A 4,4,0,0,1,478.6667,68.6667\n            L 489.6667,68.6667\n            A 4,4,0,0,1,493.6667,72.6667\n            L 493.6667,194\n            A 4,4,0,0,1,489.6667,198\n            L 478.6667,198\n            A 4,4,0,0,1,474.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="506.3333" y="69.6667" width="19" height="128.3333" fill="url(#r5-succeeded)" radius="4" d={"M 506.3333,73.6667\n            A 4,4,0,0,1,510.3333,69.6667\n            L 521.3333,69.6667\n            A 4,4,0,0,1,525.3333,73.6667\n            L 525.3333,194\n            A 4,4,0,0,1,521.3333,198\n            L 510.3333,198\n            A 4,4,0,0,1,506.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="538" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 538,72.6667\n            A 4,4,0,0,1,542,68.6667\n            L 553,68.6667\n            A 4,4,0,0,1,557,72.6667\n            L 557,194\n            A 4,4,0,0,1,553,198\n            L 542,198\n            A 4,4,0,0,1,538,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="569.6667" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 569.6667,72.6667\n            A 4,4,0,0,1,573.6667,68.6667\n            L 584.6667,68.6667\n            A 4,4,0,0,1,588.6667,72.6667\n            L 588.6667,194\n            A 4,4,0,0,1,584.6667,198\n            L 573.6667,198\n            A 4,4,0,0,1,569.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="601.3333" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 601.3333,72.6667\n            A 4,4,0,0,1,605.3333,68.6667\n            L 616.3333,68.6667\n            A 4,4,0,0,1,620.3333,72.6667\n            L 620.3333,194\n            A 4,4,0,0,1,616.3333,198\n            L 605.3333,198\n            A 4,4,0,0,1,601.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="633" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 633,72.6667\n            A 4,4,0,0,1,637,68.6667\n            L 648,68.6667\n            A 4,4,0,0,1,652,72.6667\n            L 652,194\n            A 4,4,0,0,1,648,198\n            L 637,198\n            A 4,4,0,0,1,633,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="664.6667" y="68.6667" width="19" height="129.3333" fill="url(#r5-succeeded)" radius="4" d={"M 664.6667,72.6667\n            A 4,4,0,0,1,668.6667,68.6667\n            L 679.6667,68.6667\n            A 4,4,0,0,1,683.6667,72.6667\n            L 683.6667,194\n            A 4,4,0,0,1,679.6667,198\n            L 668.6667,198\n            A 4,4,0,0,1,664.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="696.3333" y="69.6667" width="19" height="128.3333" fill="url(#r5-succeeded)" radius="4" d={"M 696.3333,73.6667\n            A 4,4,0,0,1,700.3333,69.6667\n            L 711.3333,69.6667\n            A 4,4,0,0,1,715.3333,73.6667\n            L 715.3333,194\n            A 4,4,0,0,1,711.3333,198\n            L 700.3333,198\n            A 4,4,0,0,1,696.3333,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="728" y="86.9111" width="19" height="111.0889" fill="url(#r5-succeeded)" radius="4" d={"M 728,90.9111\n            A 4,4,0,0,1,732,86.9111\n            L 743,86.9111\n            A 4,4,0,0,1,747,90.9111\n            L 747,194\n            A 4,4,0,0,1,743,198\n            L 732,198\n            A 4,4,0,0,1,728,194 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="759.6667" y="138.6444" width="19" height="59.3556" fill="url(#r5-succeeded)" radius="4" d={"M 759.6667,142.6444\n            A 4,4,0,0,1,763.6667,138.6444\n            L 774.6667,138.6444\n            A 4,4,0,0,1,778.6667,142.6444\n            L 778.6667,194\n            A 4,4,0,0,1,774.6667,198\n            L 763.6667,198\n            A 4,4,0,0,1,759.6667,194 Z"}></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_7h_">
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
                                        <path className="recharts-rectangle" x="379.6667" y="64.3556" width="19" height="16.2444" fill="url(#r5-partial)" radius="4" d={"M 379.6667,68.3556\n            A 4,4,0,0,1,383.6667,64.3556\n            L 394.6667,64.3556\n            A 4,4,0,0,1,398.6667,68.3556\n            L 398.6667,76.6\n            A 4,4,0,0,1,394.6667,80.6\n            L 383.6667,80.6\n            A 4,4,0,0,1,379.6667,76.6 Z"}></path>
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
                                        <path className="recharts-rectangle" x="506.3333" y="64.3556" width="19" height="3.3111" fill="url(#r5-partial)" radius="4" d={"M 506.3333,66.0111\n            A 1.6556,1.6556,0,0,1,507.9889,64.3556\n            L 523.6778,64.3556\n            A 1.6556,1.6556,0,0,1,525.3333,66.0111\n            L 525.3333,66.0111\n            A 1.6556,1.6556,0,0,1,523.6778,67.6667\n            L 507.9889,67.6667\n            A 1.6556,1.6556,0,0,1,506.3333,66.0111 Z"}></path>
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
                                        <path className="recharts-rectangle" x="696.3333" y="64.3556" width="19" height="3.3111" fill="url(#r5-partial)" radius="4" d={"M 696.3333,66.0111\n            A 1.6556,1.6556,0,0,1,697.9889,64.3556\n            L 713.6778,64.3556\n            A 1.6556,1.6556,0,0,1,715.3333,66.0111\n            L 715.3333,66.0111\n            A 1.6556,1.6556,0,0,1,713.6778,67.6667\n            L 697.9889,67.6667\n            A 1.6556,1.6556,0,0,1,696.3333,66.0111 Z"}></path>
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
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_7i_">
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
                                        <path className="recharts-rectangle" x="253" y="68.6667" width="19" height="3.3111" fill="url(#r5-failed)" radius="4" d={"M 253,70.3222\n            A 1.6556,1.6556,0,0,1,254.6556,68.6667\n            L 270.3445,68.6667\n            A 1.6556,1.6556,0,0,1,272,70.3222\n            L 272,70.3222\n            A 1.6556,1.6556,0,0,1,270.3445,71.9778\n            L 254.6556,71.9778\n            A 1.6556,1.6556,0,0,1,253,70.3222 Z"}></path>
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
                                        <path className="recharts-rectangle" x="728" y="68.6667" width="19" height="16.2444" fill="url(#r5-failed)" radius="4" d={"M 728,72.6667\n            A 4,4,0,0,1,732,68.6667\n            L 743,68.6667\n            A 4,4,0,0,1,747,72.6667\n            L 747,80.9111\n            A 4,4,0,0,1,743,84.9111\n            L 732,84.9111\n            A 4,4,0,0,1,728,80.9111 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="759.6667" y="129.0222" width="19" height="7.6222" fill="url(#r5-failed)" radius="4" d={"M 759.6667,132.8333\n            A 3.8111,3.8111,0,0,1,763.4778,129.0222\n            L 774.8556,129.0222\n            A 3.8111,3.8111,0,0,1,778.6667,132.8333\n            L 778.6667,132.8333\n            A 3.8111,3.8111,0,0,1,774.8556,136.6444\n            L 763.4778,136.6444\n            A 3.8111,3.8111,0,0,1,759.6667,132.8333 Z"}></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
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
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="760" stroke="none" x="135.83333333333334" y="212" textAnchor="middle" fill="#666">
                                    <tspan x="135.83333333333334" dy="0.71em">
                                      18:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="760" stroke="none" x="262.5" y="212" textAnchor="middle" fill="#666">
                                    <tspan x="262.5" dy="0.71em">
                                      22:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="760" stroke="none" x="389.1666666666667" y="212" textAnchor="middle" fill="#666">
                                    <tspan x="389.1666666666667" dy="0.71em">
                                      02:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="760" stroke="none" x="515.8333333333334" y="212" textAnchor="middle" fill="#666">
                                    <tspan x="515.8333333333334" dy="0.71em">
                                      06:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="760" stroke="none" x="642.5000000000001" y="212" textAnchor="middle" fill="#666">
                                    <tspan x="642.5000000000001" dy="0.71em">
                                      10:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="760" stroke="none" x="769.1666666666667" y="212" textAnchor="middle" fill="#666">
                                    <tspan x="769.1666666666667" dy="0.71em">
                                      Now
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                              <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="15" y="198" textAnchor="end" fill="#666">
                                    <tspan x="15" dy="0.355em">
                                      0
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="15" y="133.33333333333337" textAnchor="end" fill="#666">
                                    <tspan x="15" dy="0.355em">
                                      15
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="15" y="68.66666666666669" textAnchor="end" fill="#666">
                                    <tspan x="15" dy="0.355em">
                                      30
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="15" y="9" textAnchor="end" fill="#666">
                                    <tspan x="15" dy="0.355em">
                                      45
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
                </FramePanel>
              </Frame>
              <Frame className="min-w-0" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      Needs Attention
                    </div>
                    <div className="text-muted-foreground text-sm">
                      5 items, worst first
                    </div>
                  </div>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Attention actions" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </header>
                <FramePanel>
                  <ItemGroup className="gap-0" role="list">
                    <Item className="px-0" variant="default" size="xs">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="xs" aria-hidden="true">
                          <svg aria-hidden="true" viewBox="0 0 109 113" fill="none">
                            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                            <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                            <defs>
                              <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#249361"></stop>
                                <stop offset="1" stopColor="#3ECF8E"></stop>
                              </lineargradient>
                              <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                <stop></stop>
                                <stop offset="1" stopOpacity="0"></stop>
                              </lineargradient>
                            </defs>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemTitle className="max-w-full min-w-0">
                          <HoverCard>
                          <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_r_f_">
                            risk-feature-store
                          </HoverCardTrigger>
                          </HoverCard>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            Failing
                          </Badge>
                        </ItemTitle>
                      </ItemContent>
                      <ItemActions>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Rotate risk-feature-store" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-key-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemActions>
                    </Item>
                    <Item className="px-0" variant="default" size="xs">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="xs" aria-hidden="true">
                          <svg aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                            <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                            <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                            <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                            <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemTitle className="max-w-full min-w-0">
                          <HoverCard>
                          <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_r_j_">
                            analytics-warehouse
                          </HoverCardTrigger>
                          </HoverCard>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            Degraded
                          </Badge>
                        </ItemTitle>
                      </ItemContent>
                      <ItemActions>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Review analytics-warehouse" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemActions>
                    </Item>
                    <Item className="px-0" variant="default" size="xs">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="xs" aria-hidden="true">
                          <svg aria-hidden="true" fill="none" viewBox="0 0 100 100">
                            <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemTitle className="max-w-full min-w-0">
                          <HoverCard>
                          <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_r_n_">
                            incident-tracker
                          </HoverCardTrigger>
                          </HoverCard>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            Token Expiring
                          </Badge>
                        </ItemTitle>
                      </ItemContent>
                      <ItemActions>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Renew incident-tracker" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemActions>
                    </Item>
                    <Item className="px-0" variant="default" size="xs">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="xs" aria-hidden="true">
                          <svg aria-hidden="true" viewBox="0 0 256 228">
                            <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                            <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                            <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                            <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                            <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemTitle className="max-w-full min-w-0">
                          <HoverCard>
                          <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_r_r_">
                            finance-close-sheets
                          </HoverCardTrigger>
                          </HoverCard>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            Schema Drift
                          </Badge>
                        </ItemTitle>
                      </ItemContent>
                      <ItemActions>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Review finance-close-sheets" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-columns-3 lucide-columns3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            <path d="M9 3v18"></path>
                            <path d="M15 3v18"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemActions>
                    </Item>
                    <Item className="px-0" variant="default" size="xs">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="xs" aria-hidden="true">
                          <svg aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                            <g clipRule="evenodd" fillRule="evenodd">
                              <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                              <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                              <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                              <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                            </g>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemTitle className="max-w-full min-w-0">
                          <HoverCard>
                          <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_r_v_">
                            sre-slack
                          </HoverCardTrigger>
                          </HoverCard>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            Paused
                          </Badge>
                        </ItemTitle>
                      </ItemContent>
                      <ItemActions>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resume sre-slack" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemActions>
                    </Item>
                  </ItemGroup>
                </FramePanel>
              </Frame>
            </div>
            <div className="scroll-mt-4">
              <Frame className="min-w-0 w-full" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      All Connections
                    </div>
                    <div className="text-muted-foreground text-sm">
                      <span role="status">
                        Grouped by category, worst first
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center min-w-0">
                    <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:ps-0 sm:ps-3">
                      <span className="font-medium text-muted-foreground text-xs truncate">
                        Connections
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        13
                      </Badge>
                    </div>
                    <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:ps-0 sm:ps-3">
                      <span className="font-medium text-muted-foreground text-xs truncate">
                        Unhealthy
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                        2
                      </Badge>
                    </div>
                  </div>
                </header>
                <FramePanel className="p-0">
                  <div className="flex flex-wrap gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <InputGroup className="basis-48 flex-1 sm:max-w-64" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_12_" placeholder="Search connections or datasets..." aria-label="Search connections" value="" />
                    </InputGroup>
                    <div className="flex gap-2 items-center ms-auto shrink-0">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-sm:px-0 max-sm:w-8 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Categories" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                        <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                        </svg>
                        <span className="max-sm:sr-only">
                          Categories
                        </span>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-sm:px-0 max-sm:w-8 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_1a_" aria-haspopup="dialog" aria-expanded="false">
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
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-sm:px-0 max-sm:w-8 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Display" baseUiClickTrigger="" id="base-ui-_r_1c_" aria-haspopup="dialog" aria-expanded="false">
                        <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                          <path d="M14 17H5"></path>
                          <path d="M19 7h-9"></path>
                          <circle cx="17" cy="17" r="3"></circle>
                          <circle cx="7" cy="7" r="3"></circle>
                        </svg>
                        <span className="max-sm:sr-only">
                          Display
                        </span>
                      </PopoverTrigger>
                      </Popover>
                    </div>
                  </div>
                  <section aria-labelledby="devops-6-group-database">
                    <div className="bg-muted/50 border-y flex gap-2.5 items-center px-(--frame-panel-header-px) py-2">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex text-muted-foreground">
                        <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                        </svg>
                      </span>
                      <span className="font-semibold text-sm" id="devops-6-group-database">
                        Databases
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        5
                      </Badge>
                      <span className="flex gap-1.5 items-center ms-auto tabular-nums text-muted-foreground text-xs">
                        <span className="font-medium text-destructive">
                          1 failing,
                        </span>
                        14 of 20 datasets linked
                      </span>
                    </div>
                    <DataGrid>
                      <div className="relative">
                        <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_1e_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" style={{minWidth: "fit-content"}}>
                              <DataGridTableViewport>
                                <DataGridTable>
                                  <colgroup>
                                    <col style={{width: "40px"}} />
                                    <col style={{width: "264px"}} />
                                    <col style={{width: "112px"}} />
                                    <col style={{width: "196px"}} />
                                    <col style={{width: "148px"}} />
                                    <col style={{width: "124px"}} />
                                    <col style={{width: "152px"}} />
                                    <col style={{width: "64px"}} />
                                    <col style={{width: "48px"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "40px"}}>
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1f_" aria-checked="false" aria-label="Select all"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "264px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Connection
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "112px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Status
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="datasets" data-header-id="datasets" data-header-depth="0" style={{width: "196px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Datasets
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="linked" data-header-id="linked" data-header-depth="0" style={{width: "148px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Linked
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lastSync" data-header-id="lastSync" data-header-depth="0" style={{width: "124px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Last Sync
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "152px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Owner
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="sync" data-header-id="sync" data-header-depth="0" style={{width: "64px"}}>
                                        <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                          Sync
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "48px"}}></th>
                                    </tr>
                                  </thead>
                                  <DataGridTableBody>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-105">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1i_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" viewBox="0 0 109 113" fill="none">
                                              <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                                              <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                                              <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                                              <defs>
                                                <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                                  <stop stopColor="#249361"></stop>
                                                  <stop offset="1" stopColor="#3ECF8E"></stop>
                                                </lineargradient>
                                                <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                                  <stop></stop>
                                                  <stop offset="1" stopOpacity="0"></stop>
                                                </lineargradient>
                                              </defs>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open risk-feature-store" type="button">
                                              risk-feature-store
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Supabase
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                db.xqzrhvkt.supabase.co
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                            Failing
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="risk-feature-store: 3 of 4 datasets linked, open datasets" id="base-ui-_r_1m_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                features.card_velocity
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +2
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="3 of 4 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            3/4
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-destructive text-sm truncate">
                                            Failed 4m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Every 15m
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
                                              Kenji Tan
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1n_" aria-checked="true" size="sm" aria-label="Syncs for risk-feature-store">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_1o_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for risk-feature-store" aria-haspopup="menu" id="base-ui-_r_1t_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-101">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1v_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                              <defs>
                                                <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                                  <stop offset="0%" stopColor="#62F755"></stop>
                                                  <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                                </lineargradient>
                                                <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                                  <stop offset="0%" stopOpacity=".9"></stop>
                                                  <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                                </lineargradient>
                                              </defs>
                                              <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                              <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                              <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                              <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open ledger-primary" type="button">
                                              ledger-primary
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Neon
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                ep-quiet-harbor-41.us-east-1.aws.neon.tech
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="ledger-primary: 4 of 6 datasets linked, open datasets" id="base-ui-_r_23_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                public.ledger_entries
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +3
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="4 of 6 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            4/6
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            4m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Every 15m
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
                                              Alex Johnson
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_24_" aria-checked="true" size="sm" aria-label="Syncs for ledger-primary">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_25_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for ledger-primary" aria-haspopup="menu" id="base-ui-_r_2a_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-112">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2c_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                              <defs>
                                                <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                                  <stop offset="0%" stopColor="#62F755"></stop>
                                                  <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                                </lineargradient>
                                                <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                                  <stop offset="0%" stopOpacity=".9"></stop>
                                                  <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                                </lineargradient>
                                              </defs>
                                              <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                              <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                              <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                              <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open ledger-staging" type="button">
                                              ledger-staging
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Neon
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                ep-calm-tide-07.us-east-1.aws.neon.tech
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="ledger-staging: 2 of 3 datasets linked, open datasets" id="base-ui-_r_2g_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                public.ledger_entries
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +1
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="2 of 3 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            2/3
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            7m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Hourly
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
                                              Alex Johnson
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_2h_" aria-checked="true" size="sm" aria-label="Syncs for ledger-staging">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_2i_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for ledger-staging" aria-haspopup="menu" id="base-ui-_r_2n_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-104">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2p_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg className="dark:hidden" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                              <path d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                                            </svg>
                                            <svg className="dark:block hidden" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                              <path fill="#fff" d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open merchant-directory" type="button">
                                              merchant-directory
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                PlanetScale
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                aws.connect.psdb.cloud/merchant-directory
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="merchant-directory: 3 of 4 datasets linked, open datasets" id="base-ui-_r_2t_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                merchants
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +2
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="3 of 4 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            3/4
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            9m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Hourly
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
                                              Priya Patel
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_2u_" aria-checked="true" size="sm" aria-label="Syncs for merchant-directory">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_2v_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for merchant-directory" aria-haspopup="menu" id="base-ui-_r_34_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-106">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_36_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                                              <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                              <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                                              <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                                              <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                                              <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                              <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                                              <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                                              <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                                              <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open rate-limit-cache" type="button">
                                              rate-limit-cache
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Redis
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                redis-prod.harbor.internal:6380
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="rate-limit-cache: 2 of 3 datasets linked, open datasets" id="base-ui-_r_3a_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                ratelimit:*
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +1
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="2 of 3 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            2/3
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            4m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Streaming
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
                                              Michael Rodriguez
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_3b_" aria-checked="true" size="sm" aria-label="Syncs for rate-limit-cache">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_3c_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for rate-limit-cache" aria-haspopup="menu" id="base-ui-_r_3h_" aria-expanded="false">
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
                    </DataGrid>
                  </section>
                  <section aria-labelledby="devops-6-group-warehouse">
                    <div className="bg-muted/50 border-y flex gap-2.5 items-center px-(--frame-panel-header-px) py-2">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex text-muted-foreground">
                        <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                        </svg>
                      </span>
                      <span className="font-semibold text-sm" id="devops-6-group-warehouse">
                        Warehouses
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        1
                      </Badge>
                      <span className="flex gap-1.5 items-center ms-auto tabular-nums text-muted-foreground text-xs">
                        3 of 5 datasets linked
                      </span>
                    </div>
                    <DataGrid>
                      <div className="relative">
                        <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_3k_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" style={{minWidth: "fit-content"}}>
                              <DataGridTableViewport>
                                <DataGridTable>
                                  <colgroup>
                                    <col style={{width: "40px"}} />
                                    <col style={{width: "264px"}} />
                                    <col style={{width: "112px"}} />
                                    <col style={{width: "196px"}} />
                                    <col style={{width: "148px"}} />
                                    <col style={{width: "124px"}} />
                                    <col style={{width: "152px"}} />
                                    <col style={{width: "64px"}} />
                                    <col style={{width: "48px"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "40px"}}>
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3l_" aria-checked="false" aria-label="Select all"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "264px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Connection
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "112px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Status
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="datasets" data-header-id="datasets" data-header-depth="0" style={{width: "196px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Datasets
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="linked" data-header-id="linked" data-header-depth="0" style={{width: "148px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Linked
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lastSync" data-header-id="lastSync" data-header-depth="0" style={{width: "124px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Last Sync
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "152px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Owner
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="sync" data-header-id="sync" data-header-depth="0" style={{width: "64px"}}>
                                        <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                          Sync
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "48px"}}></th>
                                    </tr>
                                  </thead>
                                  <DataGridTableBody>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-103">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3o_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                                              <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                                              <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                                              <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                                              <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open analytics-warehouse" type="button">
                                              analytics-warehouse
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                BigQuery
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                lumen-harbor-analytics
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                            Degraded
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="analytics-warehouse: 3 of 5 datasets linked, open datasets" id="base-ui-_r_3s_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                finance.daily_settlements
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +2
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="3 of 5 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            3/5
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            2h 19m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Every 6h
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
                                              Sofia Romero
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_3t_" aria-checked="true" size="sm" aria-label="Syncs for analytics-warehouse">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_3u_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for analytics-warehouse" aria-haspopup="menu" id="base-ui-_r_43_" aria-expanded="false">
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
                    </DataGrid>
                  </section>
                  <section aria-labelledby="devops-6-group-app">
                    <div className="bg-muted/50 border-y flex gap-2.5 items-center px-(--frame-panel-header-px) py-2">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex text-muted-foreground">
                        <svg className="lucide lucide-blocks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BlocksIcon" tabler="IconComponents" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiApps2Line" aria-hidden="true">
                          <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path>
                          <rect x="14" y="2" width="8" height="8" rx="1"></rect>
                        </svg>
                      </span>
                      <span className="font-semibold text-sm" id="devops-6-group-app">
                        Apps
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        5
                      </Badge>
                      <span className="flex gap-1.5 items-center ms-auto tabular-nums text-muted-foreground text-xs">
                        12 of 18 datasets linked
                      </span>
                    </div>
                    <DataGrid>
                      <div className="relative">
                        <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_46_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" style={{minWidth: "fit-content"}}>
                              <DataGridTableViewport>
                                <DataGridTable>
                                  <colgroup>
                                    <col style={{width: "40px"}} />
                                    <col style={{width: "264px"}} />
                                    <col style={{width: "112px"}} />
                                    <col style={{width: "196px"}} />
                                    <col style={{width: "148px"}} />
                                    <col style={{width: "124px"}} />
                                    <col style={{width: "152px"}} />
                                    <col style={{width: "64px"}} />
                                    <col style={{width: "48px"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "40px"}}>
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_47_" aria-checked="false" aria-label="Select all"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "264px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Connection
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "112px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Status
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="datasets" data-header-id="datasets" data-header-depth="0" style={{width: "196px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Datasets
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="linked" data-header-id="linked" data-header-depth="0" style={{width: "148px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Linked
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lastSync" data-header-id="lastSync" data-header-depth="0" style={{width: "124px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Last Sync
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "152px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Owner
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="sync" data-header-id="sync" data-header-depth="0" style={{width: "64px"}}>
                                        <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                          Sync
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "48px"}}></th>
                                    </tr>
                                  </thead>
                                  <DataGridTableBody>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-109">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4a_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                                              <g clipRule="evenodd" fillRule="evenodd">
                                                <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                                <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                                <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                                <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                              </g>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open sre-slack" type="button">
                                              sre-slack
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Slack
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                lumen-harbor.slack.com
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            Paused
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="sre-slack: 2 of 2 datasets linked, open datasets" id="base-ui-_r_4e_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                channels
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +1
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="2 of 2 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            2/2
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            19h 34m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Every 15m
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
                                              Omar Haddad
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_4f_" aria-checked="false" size="sm" aria-label="Syncs for sre-slack">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_4g_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for sre-slack" aria-haspopup="menu" id="base-ui-_r_4l_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-107">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4n_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg className="dark:hidden" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                              <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                                            </svg>
                                            <svg className="dark:block hidden" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open harbor-github" type="button">
                                              harbor-github
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                GitHub
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                github.com/lumen-harbor
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="harbor-github: 3 of 4 datasets linked, open datasets" id="base-ui-_r_4r_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                deployments
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +2
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="3 of 4 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            3/4
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            4m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Every 15m
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex min-w-0">
                                          <span className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate">
                                              Emma Wilson
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_4s_" aria-checked="true" size="sm" aria-label="Syncs for harbor-github">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_4t_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for harbor-github" aria-haspopup="menu" id="base-ui-_r_52_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-108">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_54_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" fill="none" viewBox="0 0 100 100">
                                              <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open incident-tracker" type="button">
                                              incident-tracker
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Linear
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                linear.app/lumen-harbor
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="incident-tracker: 1 of 3 datasets linked, open datasets" id="base-ui-_r_58_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                issues
                                              </span>
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="1 of 3 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            1/3
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            4m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Hourly
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
                                              Nina Santos
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_59_" aria-checked="true" size="sm" aria-label="Syncs for incident-tracker">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_5a_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for incident-tracker" aria-haspopup="menu" id="base-ui-_r_5f_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-102">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5h_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                              <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open stripe-live" type="button">
                                              stripe-live
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Stripe
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                acct_1Q8xLumenHarbor
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="stripe-live: 4 of 6 datasets linked, open datasets" id="base-ui-_r_5l_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                balance_transactions
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +3
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="4 of 6 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            4/6
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            14m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Hourly
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
                                              David Kim
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_5m_" aria-checked="true" size="sm" aria-label="Syncs for stripe-live">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_5n_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for stripe-live" aria-haspopup="menu" id="base-ui-_r_5s_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-113">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5u_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                              <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open stripe-sandbox" type="button">
                                              stripe-sandbox
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Stripe
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                acct_1Q8xLumenHarbor (test mode)
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="stripe-sandbox: 2 of 3 datasets linked, open datasets" id="base-ui-_r_62_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                charges
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +1
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="2 of 3 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            2/3
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            11m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Hourly
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
                                              David Kim
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_63_" aria-checked="true" size="sm" aria-label="Syncs for stripe-sandbox">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_64_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for stripe-sandbox" aria-haspopup="menu" id="base-ui-_r_69_" aria-expanded="false">
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
                    </DataGrid>
                  </section>
                  <section aria-labelledby="devops-6-group-files">
                    <div className="bg-muted/50 border-y flex gap-2.5 items-center px-(--frame-panel-header-px) py-2">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex text-muted-foreground">
                        <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                      </span>
                      <span className="font-semibold text-sm" id="devops-6-group-files">
                        Files
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        2
                      </Badge>
                      <span className="flex gap-1.5 items-center ms-auto tabular-nums text-muted-foreground text-xs">
                        4 of 6 datasets linked
                      </span>
                    </div>
                    <DataGrid>
                      <div className="relative">
                        <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_6c_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" style={{minWidth: "fit-content"}}>
                              <DataGridTableViewport>
                                <DataGridTable>
                                  <colgroup>
                                    <col style={{width: "40px"}} />
                                    <col style={{width: "264px"}} />
                                    <col style={{width: "112px"}} />
                                    <col style={{width: "196px"}} />
                                    <col style={{width: "148px"}} />
                                    <col style={{width: "124px"}} />
                                    <col style={{width: "152px"}} />
                                    <col style={{width: "64px"}} />
                                    <col style={{width: "48px"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "40px"}}>
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6d_" aria-checked="false" aria-label="Select all"></Checkbox>
                                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "264px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Connection
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "112px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Status
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="datasets" data-header-id="datasets" data-header-depth="0" style={{width: "196px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Datasets
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="linked" data-header-id="linked" data-header-depth="0" style={{width: "148px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Linked
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lastSync" data-header-id="lastSync" data-header-depth="0" style={{width: "124px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Last Sync
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "152px"}}>
                                        <div className="-ms-2 flex h-full items-center">
                                          <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                            Owner
                                            <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="sync" data-header-id="sync" data-header-depth="0" style={{width: "64px"}}>
                                        <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                          Sync
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "48px"}}></th>
                                    </tr>
                                  </thead>
                                  <DataGridTableBody>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-111">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" fill="none" viewBox="0 0 128 128">
                                              <path fill="#0061FE" d="M0 0h128v128H0z"></path>
                                              <path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open bank-settlement-files" type="button">
                                              bank-settlement-files
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Dropbox
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                /Lumen Harbor/Settlements
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="bank-settlement-files: 2 of 3 datasets linked, open datasets" id="base-ui-_r_6k_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                              <span className="truncate">
                                                /settlements/chase
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +1
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="2 of 3 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            2/3
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            17m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Hourly
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
                                              Alex Johnson
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_6l_" aria-checked="true" size="sm" aria-label="Syncs for bank-settlement-files">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_6m_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for bank-settlement-files" aria-haspopup="menu" id="base-ui-_r_6r_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([data-active-row])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/connection-row hover:bg-muted/40" data-row-id="CON-110">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <div className="flex">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6t_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2.5 items-center min-w-0">
                                          <span className="[&_svg]:size-5 flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                            <svg aria-hidden="true" viewBox="0 0 256 228">
                                              <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                                              <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                                              <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                                              <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                                              <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                                            </svg>
                                          </span>
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors truncate underline-offset-2" aria-label="Open finance-close-sheets" type="button">
                                              finance-close-sheets
                                            </button>
                                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                              <span className="shrink-0">
                                                Google Drive
                                              </span>
                                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                              <span className="font-mono truncate">
                                                Finance Close
                                              </span>
                                            </span>
                                          </div>
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
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-ring/50 gap-1 max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="finance-close-sheets: 2 of 3 datasets linked, open datasets" id="base-ui-_r_71_">
                                          <span className="flex gap-1 items-center max-w-full min-w-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                              <span className="truncate">
                                                Month-end close 2026-09
                                              </span>
                                            </Badge>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                              +1
                                            </Badge>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex gap-2 items-center" aria-label="2 of 3 datasets linked">
                                          <span className="flex flex-1 gap-1 h-1.5 min-w-16" aria-hidden="true">
                                            <span className="bg-warning flex-1 rounded-full"></span>
                                            <span className="bg-info flex-1 rounded-full"></span>
                                            <span className="bg-muted flex-1 rounded-full"></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-right text-sm w-8">
                                            2/3
                                          </span>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                          <span className="tabular-nums text-sm truncate">
                                            12h 19m ago
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Daily
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
                                              Sofia Romero
                                            </span>
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div className="flex items-center">
                                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_72_" aria-checked="true" size="sm" aria-label="Syncs for finance-close-sheets">
                                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                          </Switch>
                                          <input id="base-ui-_r_73_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </div>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for finance-close-sheets" aria-haspopup="menu" id="base-ui-_r_78_" aria-expanded="false">
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
                    </DataGrid>
                  </section>
                </FramePanel>
              </Frame>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
