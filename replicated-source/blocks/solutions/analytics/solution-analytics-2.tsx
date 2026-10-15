import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="@container flex flex-col gap-4 max-w-7xl min-h-svh mx-auto p-6 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Feature Adoption
      </h1>
      <header className="flex gap-2 items-center justify-between min-h-12 shrink-0 w-full">
        <Breadcrumb aria-label="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
                <svg className="size-5" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <defs>
                    <lineargradient id="solution-analytics-2-aster" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0ea5e9"></stop>
                      <stop offset="50%" stopColor="#6366f1"></stop>
                      <stop offset="100%" stopColor="#14b8a6"></stop>
                    </lineargradient>
                  </defs>
                  <circle cx="14" cy="14" r="14" fill="url(#solution-analytics-2-aster)"></circle>
                </svg>
                <span className="hidden md:block">
                  Aster Cloud
                </span>
                <svg className="lucide lucide-chevrons-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden sm:flex" role="presentation" aria-hidden="true">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <span className="bg-slate-400 rounded-full shrink-0 size-2"></span>
                <span className="hidden md:block">
                  All segments
                </span>
                <svg className="lucide lucide-chevrons-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-2 items-center shrink-0">
          <Button type="button" tabIndex="0" aria-label="Refresh report">
            <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M8 16H3v5"></path>
            </svg>
          </Button>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-file-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileDownIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownloadLine" aria-hidden="true">
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
              <path d="M12 18v-6"></path>
              <path d="m9 15 3 3 3-3"></path>
            </svg>
            <span className="hidden md:block">
              Export CSV
            </span>
          </Button>
          <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <Avatar className="rounded-md size-6" size="default" aria-label="Mira Stone, Product analytics lead">
            <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
          </Avatar>
        </div>
      </header>
      <div className="@5xl:grid-cols-2 [&>*]:min-w-0 gap-4 grid">
        <Frame className="h-full text-foreground w-full">
          <FramePanel className="flex flex-col h-full">
            <div className="flex gap-3 items-start justify-between mb-6">
              <div className="flex flex-col gap-px">
                <h3 className="font-semibold text-base text-foreground">
                  Adoption Health
                </h3>
                <span className="font-normal text-muted-foreground text-xs">
                  412k events at 09:20
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Select>
                <SelectTrigger className="h-8! w-32" type="button" tabIndex="0" id="base-ui-_r_a_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    Last 30 days
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_a_-hidden-input" tabIndex="-1" aria-hidden="true" value="30d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Button type="button" tabIndex="0" aria-label="Open adoption rules">
                  <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 justify-between">
              <div className="space-y-5">
                <div className="gap-2 grid grid-cols-3">
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      412k
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      Events
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      +13%
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      74%
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      Adoption
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      +7%
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      2
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      Watch
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-destructive text-xs">
                      <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                      -3%
                    </span>
                  </div>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-medium text-foreground text-sm">
                      Adoption Progress
                    </span>
                    <span className="font-semibold text-foreground text-xs">
                      74%
                    </span>
                  </div>
                  <Progress className="**:data-[slot=progress-track]:h-2.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="74" aria-valuetext="74%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "74%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div>
                  <div className="font-medium mb-2.5 text-foreground text-sm">
                    Recent Activity
                  </div>
                  <ul className="space-y-2">
                    <li className="flex gap-2.5 items-center justify-between text-sm">
                      <span className="flex gap-2 items-center min-w-0">
                        <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="text-foreground text-xs truncate">
                          FEA-118 reached 74% adoption.
                        </span>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        09:20
                      </Badge>
                    </li>
                    <li className="flex gap-2.5 items-center justify-between text-sm">
                      <span className="flex gap-2 items-center min-w-0">
                        <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="text-foreground text-xs truncate">
                          286k invite events processed.
                        </span>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        09:18
                      </Badge>
                    </li>
                    <li className="flex gap-2.5 items-center justify-between text-sm">
                      <span className="flex gap-2 items-center min-w-0">
                        <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-destructive w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="text-foreground text-xs truncate">
                          Checklist nudge fell to 35%.
                        </span>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        08:41
                      </Badge>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-row gap-2.5 items-center p-2! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <Button className="flex-1" type="button" tabIndex="0">
              Review
            </Button>
            <Button className="flex-1" type="button" tabIndex="0">
              Full Report
            </Button>
          </footer>
        </Frame>
        <Frame className="h-full text-foreground w-full">
          <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
            <div className="font-semibold text-sm">
              Trend
            </div>
            <Select>
            <SelectTrigger className="min-w-[140px]" type="button" tabIndex="0" id="base-ui-_r_d_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
              <SelectValue>
                12 months
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_d_-hidden-input" tabIndex="-1" aria-hidden="true" value="12m" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </header>
          <FramePanel className="space-y-4">
            <div className="flex flex-col gap-1">
              <div className="font-medium text-muted-foreground text-xs">
                Latest (Jul 01 to Jun 15)
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="font-semibold leading-none text-foreground text-xl">
                  74%
                </span>
                <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  13.0%
                </span>
              </div>
            </div>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[300px] justify-center text-xs w-full" data-chart="chart-_r_g_">
              <style>{`
 [data-chart=chart-_r_g_] {
  --color-value: var(--color-violet-500);
}


.dark [data-chart=chart-_r_g_] {
  --color-value: var(--color-violet-500);
}
`}</style>
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width="558" height="300" style={{position: "relative", cursor: "default", width: "558px", height: "300px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex="0" width="558" height="300" viewBox="0 0 558 300" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="538" height="250" x1="10" y1="260" x2="548" y2="260"></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="538" height="250" x1="10" y1="197.5" x2="548" y2="197.5"></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="538" height="250" x1="10" y1="135" x2="548" y2="135"></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="538" height="250" x1="10" y1="72.5" x2="548" y2="72.5"></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="538" height="250" x1="10" y1="10" x2="548" y2="10"></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x="10" y="10" height="250" width="538"></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <lineargradient id="adoptionTrendGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity="0.15"></stop>
                          <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex="-1">
                        <g className="recharts-area recharts-layer">
                          <g className="recharts-layer">
                            <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#adoptionTrendGradient)" fillOpacity="0.6" height="250" stroke="none" width="538" id="recharts-area-_r_1f_" d="M10,141.25C26.303,138.118,42.606,134.985,58.909,131.875C75.212,128.765,91.515,125.676,107.818,122.5C124.121,119.324,140.424,116.059,156.727,113.125C173.03,110.191,189.333,107.586,205.636,103.75C221.939,99.914,238.242,94.846,254.545,91.25C270.848,87.654,287.152,85.531,303.455,81.875C319.758,78.219,336.061,73.031,352.364,69.375C368.667,65.719,384.97,63.595,401.273,60C417.576,56.405,433.879,51.34,450.182,47.5C466.485,43.66,482.788,41.046,499.091,38.125C515.394,35.204,531.697,31.977,548,28.75L548,260C531.697,260,515.394,260,499.091,260C482.788,260,466.485,260,450.182,260C433.879,260,417.576,260,401.273,260C384.97,260,368.667,260,352.364,260C336.061,260,319.758,260,303.455,260C287.152,260,270.848,260,254.545,260C238.242,260,221.939,260,205.636,260C189.333,260,173.03,260,156.727,260C140.424,260,124.121,260,107.818,260C91.515,260,75.212,260,58.909,260C42.606,260,26.303,260,10,260Z"></path>
                            <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="250" stroke="transparent" width="538" d="M10,141.25C26.303,138.118,42.606,134.985,58.909,131.875C75.212,128.765,91.515,125.676,107.818,122.5C124.121,119.324,140.424,116.059,156.727,113.125C173.03,110.191,189.333,107.586,205.636,103.75C221.939,99.914,238.242,94.846,254.545,91.25C270.848,87.654,287.152,85.531,303.455,81.875C319.758,78.219,336.061,73.031,352.364,69.375C368.667,65.719,384.97,63.595,401.273,60C417.576,56.405,433.879,51.34,450.182,47.5C466.485,43.66,482.788,41.046,499.091,38.125C515.394,35.204,531.697,31.977,548,28.75"></path>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_400" tabIndex="-1">
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-violet-500)" strokeWidth="2" fill="none" id="recharts-line-_r_1g_" height="250" width="538" strokeDasharray="549.8759765625px 549.8759765625px" d="M10,141.25C26.303,138.118,42.606,134.985,58.909,131.875C75.212,128.765,91.515,125.676,107.818,122.5C124.121,119.324,140.424,116.059,156.727,113.125C173.03,110.191,189.333,107.586,205.636,103.75C221.939,99.914,238.242,94.846,254.545,91.25C270.848,87.654,287.152,85.531,303.455,81.875C319.758,78.219,336.061,73.031,352.364,69.375C368.667,65.719,384.97,63.595,401.273,60C417.576,56.405,433.879,51.34,450.182,47.5C466.485,43.66,482.788,41.046,499.091,38.125C515.394,35.204,531.697,31.977,548,28.75"></path>
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
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="58.90909090909091" y="276" textAnchor="middle" fill="#666">
                              <tspan x="58.90909090909091" dy="0.71em">
                                AUG
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="107.81818181818181" y="276" textAnchor="middle" fill="#666">
                              <tspan x="107.81818181818181" dy="0.71em">
                                SEP
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="156.72727272727272" y="276" textAnchor="middle" fill="#666">
                              <tspan x="156.72727272727272" dy="0.71em">
                                OCT
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="205.63636363636363" y="276" textAnchor="middle" fill="#666">
                              <tspan x="205.63636363636363" dy="0.71em">
                                NOV
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="254.54545454545453" y="276" textAnchor="middle" fill="#666">
                              <tspan x="254.54545454545453" dy="0.71em">
                                DEC
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="303.45454545454544" y="276" textAnchor="middle" fill="#666">
                              <tspan x="303.45454545454544" dy="0.71em">
                                JAN
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="352.3636363636364" y="276" textAnchor="middle" fill="#666">
                              <tspan x="352.3636363636364" dy="0.71em">
                                FEB
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="401.27272727272725" y="276" textAnchor="middle" fill="#666">
                              <tspan x="401.27272727272725" dy="0.71em">
                                MAR
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="450.18181818181813" y="276" textAnchor="middle" fill="#666">
                              <tspan x="450.18181818181813" dy="0.71em">
                                APR
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="499.09090909090907" y="276" textAnchor="middle" fill="#666">
                              <tspan x="499.09090909090907" dy="0.71em">
                                MAY
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="538" stroke="none" fontSize="12" x="545.5859375" y="276" textAnchor="middle" fill="#666">
                              <tspan x="545.5859375" dy="0.71em">
                                JUN
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
      </div>
      <Frame>
        <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="font-semibold text-sm">
              Adoption By Area
            </div>
            <div className="text-muted-foreground text-sm">
              Weekly momentum across product areas.
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center min-w-0">
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                Total Events
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                1.76M
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                Avg Momentum
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                114%
              </Badge>
            </div>
            <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
              <span className="font-medium text-muted-foreground text-xs truncate">
                At-Risk Events
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                76K
              </Badge>
            </div>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              Export
            </Button>
          </div>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:px-4 px-3 py-3">
            <InputGroup className="lg:max-w-xs" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_i_" placeholder="Search features..." aria-label="Search features" value="" />
            </InputGroup>
            <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
                Status
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_p_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                Display
              </PopoverTrigger>
              </Popover>
              <Button type="button" tabIndex="0">
                Expand all
              </Button>
            </div>
          </div>
          <DataGrid>
            <div className="relative">
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_q_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "240px"}} />
                          <col style={{width: "190px"}} />
                          <col style={{width: "120px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "168px"}} />
                          <col style={{width: "56px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="feature" data-header-id="feature" data-header-depth="0" style={{width: "240px"}}>
                              <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                Feature
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "190px"}}>
                              <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                Owner
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "120px"}}>
                              <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                Status
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="events" data-header-id="events" data-header-depth="0" style={{width: "130px"}}>
                              <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                Events
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="momentum" data-header-id="momentum" data-header-depth="0" style={{width: "130px"}}>
                              <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                Momentum
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="active" data-header-id="active" data-header-depth="0" style={{width: "168px"}}>
                              <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                Last Active
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}></th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="onboarding">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0" data-adoption-row="area">
                                <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse Onboarding" aria-expanded="true">
                                  <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <svg className="lucide lucide-rocket shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                                  <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                                </svg>
                                <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                  Onboarding
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  4
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-muted-foreground text-sm truncate">
                                Trial activation surfaces
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2"></td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  724K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  115%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                  <span className="text-muted-foreground">
                                    Latest
                                  </span>
                                  <span className="tabular-nums text-foreground">
                                    Jul 13
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                          </tr>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="adp-template-gallery" data-depth="1">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-adoption-row="feature">
                                <Item className="bg-blue-100 border border-blue-200 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-300 font-semibold p-0 size-7 text-blue-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                  TG
                                </Item>
                                <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                  <span className="gap-1 group/feature-name inline-flex items-center min-w-0 truncate">
                                    <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                      Template gallery
                                    </span>
                                    <svg className="-translate-x-1 group-hover/feature-name:opacity-100 group-hover/feature-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-6" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Mira Stone
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Growing
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  412K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  118%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                    <path d="M8 14h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 18h.01"></path>
                                    <path d="M12 18h.01"></path>
                                    <path d="M16 18h.01"></path>
                                  </svg>
                                  <span className="tabular-nums">
                                    Jul 13
                                  </span>
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Template gallery" aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="adp-guided-setup" data-depth="1">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-adoption-row="feature">
                                <Item className="bg-violet-100 border border-violet-200 dark:bg-violet-950 dark:border-violet-900 dark:text-violet-300 font-semibold p-0 size-7 text-violet-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                  GS
                                </Item>
                                <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                  <span className="gap-1 group/feature-name inline-flex items-center min-w-0 truncate">
                                    <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                      Guided setup
                                    </span>
                                    <svg className="-translate-x-1 group-hover/feature-name:opacity-100 group-hover/feature-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-6" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Theo Park
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                Growing
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  156K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  121%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                    <path d="M8 14h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 18h.01"></path>
                                    <path d="M12 18h.01"></path>
                                    <path d="M16 18h.01"></path>
                                  </svg>
                                  <span className="tabular-nums">
                                    Jul 12
                                  </span>
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Guided setup" aria-haspopup="menu" id="base-ui-_r_13_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="adp-bulk-invite-import" data-depth="1">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-adoption-row="feature">
                                <Item className="bg-emerald-100 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-300 font-semibold p-0 size-7 text-emerald-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                  BI
                                </Item>
                                <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                  <span className="gap-1 group/feature-name inline-flex items-center min-w-0 truncate">
                                    <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                      Bulk invite import
                                    </span>
                                    <svg className="-translate-x-1 group-hover/feature-name:opacity-100 group-hover/feature-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-6" size="default">
                                  <AvatarFallback className="text-[10px]">
                                    IV
                                  </AvatarFallback>
                                </Avatar>
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Iris Vale
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Steady
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  92K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  104%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                    <path d="M8 14h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 18h.01"></path>
                                    <path d="M12 18h.01"></path>
                                    <path d="M16 18h.01"></path>
                                  </svg>
                                  <span className="tabular-nums">
                                    Jul 10
                                  </span>
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Bulk invite import" aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="adp-checklist-nudge" data-depth="1">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-adoption-row="feature">
                                <Item className="bg-amber-100 border border-amber-200 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-300 font-semibold p-0 size-7 text-amber-700 text-xs tracking-tight" variant="default" size="default" aria-hidden="true">
                                  CN
                                </Item>
                                <div className="flex-1 font-medium leading-5 min-w-0 text-sm">
                                  <span className="gap-1 group/feature-name inline-flex items-center min-w-0 truncate">
                                    <span className="cursor-pointer hover:text-primary max-w-full py-0.25 text-foreground transition-colors truncate">
                                      Checklist nudge
                                    </span>
                                    <svg className="-translate-x-1 group-hover/feature-name:opacity-100 group-hover/feature-name:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-6" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="min-w-0 text-foreground text-sm truncate">
                                  Leo Grant
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                At Risk
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  64K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-rose-500 gap-1 inline-flex items-center tabular-nums text-rose-600 text-sm">
                                  <svg className="lucide lucide-trending-down shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                    <path d="M16 17h6v-6"></path>
                                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                  </svg>
                                  92%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                    <path d="M8 14h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 18h.01"></path>
                                    <path d="M12 18h.01"></path>
                                    <path d="M16 18h.01"></path>
                                  </svg>
                                  <span className="tabular-nums">
                                    Jul 8
                                  </span>
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex justify-end">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Checklist nudge" aria-haspopup="menu" id="base-ui-_r_1d_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="collaboration">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0" data-adoption-row="area">
                                <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand Collaboration" aria-expanded="false">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                  Collaboration
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  3
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-muted-foreground text-sm truncate">
                                Team invites and sharing
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2"></td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  588K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  118%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                  <span className="text-muted-foreground">
                                    Latest
                                  </span>
                                  <span className="tabular-nums text-foreground">
                                    Jul 13
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                          </tr>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="insights">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0" data-adoption-row="area">
                                <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand Insights" aria-expanded="false">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <svg className="lucide lucide-chart-column shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                  <path d="M18 17V9"></path>
                                  <path d="M13 17V5"></path>
                                  <path d="M8 17v-3"></path>
                                </svg>
                                <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                  Insights
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  2
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-muted-foreground text-sm truncate">
                                Reports and dashboards
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2"></td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  286K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  111%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                  <span className="text-muted-foreground">
                                    Latest
                                  </span>
                                  <span className="tabular-nums text-foreground">
                                    Jul 12
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                          </tr>
                          <tr className="[&:has([data-adoption-row=area])>td]:h-11 [&:not(:last-child)>td]:border-b [&>td]:h-11 data-[state=selected]:bg-muted/50 group/adoption-row hover:bg-muted/40" data-row-id="automation">
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                              <div className="flex gap-2 items-center min-w-0" data-adoption-row="area">
                                <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand Automation" aria-expanded="false">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <svg className="lucide lucide-zap shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                                <span className="font-semibold min-w-0 text-foreground text-sm truncate">
                                  Automation
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  2
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-muted-foreground text-sm truncate">
                                Rules and admin tooling
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2"></td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="font-semibold tabular-nums text-foreground text-sm">
                                  158K
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2 text-right!">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  104%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex justify-end">
                                <span className="gap-1.5 inline-flex items-baseline text-sm whitespace-nowrap">
                                  <span className="text-muted-foreground">
                                    Latest
                                  </span>
                                  <span className="tabular-nums text-foreground">
                                    Jul 11
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2"></td>
                          </tr>
                        </DataGridTableBody>
                        <DataGridTableFoot>
                          <DataGridTableFootRow>
                            <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80">
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="font-semibold text-foreground text-sm">
                                  All Areas
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  11
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                1.76M
                              </span>
                            </td>
                            <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-right! text-secondary-foreground/80">
                              <div className="flex items-center justify-end w-full">
                                <span className="dark:text-emerald-500 gap-1 inline-flex items-center tabular-nums text-emerald-600 text-sm">
                                  <svg className="lucide lucide-trending-up shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  114%
                                </span>
                              </div>
                            </td>
                            <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                            <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-3 py-2 text-secondary-foreground/80"></td>
                          </DataGridTableFootRow>
                        </DataGridTableFoot>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </div>
                </div>
              </DataGridScrollArea>
            </div>
          </DataGrid>
        </FramePanel>
      </Frame>
    </main>
  )
}
