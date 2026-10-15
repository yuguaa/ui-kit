import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex flex-col lg:p-10 max-w-6xl min-h-svh mx-auto p-6 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Metric detail
      </h1>
      <div className="flex flex-col gap-6 w-full">
        <div className="border-b flex flex-col gap-4 pb-5">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="flex gap-1 items-center" href="#">
                  <svg className="lucide lucide-chart-column size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                  Metrics
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  Activation rate
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-start justify-between">
            <div className="flex flex-col gap-2.5 min-w-0">
              <div className="flex flex-wrap gap-2.5 items-center">
                <h1 className="font-semibold text-2xl text-foreground tracking-tight">
                  Activation rate
                </h1>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  On track
                </Badge>
                <span className="font-mono text-muted-foreground text-xs">
                  MET-609
                </span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center">
                <AvatarGroup className="-space-x-1">
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarFallback className="text-[10px]">
                      IV
                    </AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <p className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs">
                  <span>
                    Owned by
                    <span className="font-medium text-foreground">
                      Mira Stone
                    </span>
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    Last 28 days
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center shrink-0">
              <Select>
              <SelectTrigger className="w-[9.5rem]" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                <SelectValue>
                  Last 12 weeks
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="12w" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span className="hidden md:block">
                  Watching
                </span>
              </Button>
              <Button type="button" tabIndex="0" aria-label="Refresh metric">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-2 lg:gap-6 lg:grid-cols-4">
          <Frame>
            <FramePanel className="flex flex-col gap-4">
              <h3 className="font-medium text-muted-foreground text-sm">
                Activation rate
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                    62.4%
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                    3.1 pts
                  </Badge>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="text-muted-foreground text-xs">
                  vs
                  <span className="font-medium text-foreground">
                    59.3% prior 28 days
                  </span>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="flex flex-col gap-4">
              <h3 className="font-medium text-muted-foreground text-sm">
                Activated workspaces
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                    801
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                    128
                  </Badge>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="text-muted-foreground text-xs">
                  vs
                  <span className="font-medium text-foreground">
                    673 prior 28 days
                  </span>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="flex flex-col gap-4">
              <h3 className="font-medium text-muted-foreground text-sm">
                New workspaces
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                    1,284
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                    9.2%
                  </Badge>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="text-muted-foreground text-xs">
                  vs
                  <span className="font-medium text-foreground">
                    1,176 prior 28 days
                  </span>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="flex flex-col gap-4">
              <h3 className="font-medium text-muted-foreground text-sm">
                Time to first value
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <span className="font-medium tabular-nums text-2xl text-foreground tracking-tight">
                    3.8 d
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                    0.6 d
                  </Badge>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="text-muted-foreground text-xs">
                  vs
                  <span className="font-medium text-foreground">
                    4.4 d prior 28 days
                  </span>
                </div>
              </div>
            </FramePanel>
          </Frame>
        </div>
        <Frame className="h-full">
          <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-sm">
                Activation Rate Trend
              </div>
              <div className="text-muted-foreground text-sm">
                Weekly rate tracked against target
              </div>
            </div>
            <div className="flex gap-3 items-center pt-0.5 shrink-0">
              <span className="flex gap-1.5 items-center">
                <span className="rounded-full size-2" aria-hidden="true" style={{backgroundColor: "var(--color-teal-500)"}}></span>
                <span className="text-muted-foreground text-xs">
                  Activation rate
                </span>
              </span>
            </div>
          </header>
          <FramePanel className="flex flex-col">
            <div className="mt-auto">
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[300px] justify-center text-xs w-full" data-chart="chart-_r_8_">
                <style>{`
 [data-chart=chart-_r_8_] {
  --color-rate: var(--color-teal-500);
}


.dark [data-chart=chart-_r_8_] {
  --color-rate: var(--color-teal-500);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="1030" height="300" style={{position: "relative", cursor: "default", width: "1030px", height: "300px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="1030" height="300" viewBox="0 0 1030 300" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="36" y="10" width="982" height="255" x1="36" y1="265" x2="1018" y2="265"></line>
                              <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="36" y="10" width="982" height="255" x1="36" y1="201.25" x2="1018" y2="201.25"></line>
                              <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="36" y="10" width="982" height="255" x1="36" y1="137.5" x2="1018" y2="137.5"></line>
                              <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="36" y="10" width="982" height="255" x1="36" y1="73.75" x2="1018" y2="73.75"></line>
                              <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="36" y="10" width="982" height="255" x1="36" y1="10" x2="1018" y2="10"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="36" y="10" height="255" width="982"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-teal-500)" stopOpacity="0.18"></stop>
                            <stop offset="100%" stopColor="var(--color-teal-500)" stopOpacity="0"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#rateGradient)" fillOpacity="0.6" height="255" stroke="none" width="982" id="recharts-area-_r_9_" d="M36,189.775C65.758,187.438,95.515,185.1,125.273,182.125C155.03,179.15,184.788,174.05,214.545,171.925C244.303,169.8,274.061,170.863,303.818,168.737C333.576,166.612,363.333,160.344,393.091,157.9C422.848,155.456,452.606,155.563,482.364,154.075C512.121,152.588,541.879,150.994,571.636,148.975C601.394,146.956,631.152,143.769,660.909,141.963C690.667,140.156,720.424,139.731,750.182,138.138C779.939,136.544,809.697,134.1,839.455,132.4C869.212,130.7,898.97,129.638,928.727,127.938C958.485,126.238,988.242,124.219,1018,122.2L1018,265C988.242,265,958.485,265,928.727,265C898.97,265,869.212,265,839.455,265C809.697,265,779.939,265,750.182,265C720.424,265,690.667,265,660.909,265C631.152,265,601.394,265,571.636,265C541.879,265,512.121,265,482.364,265C452.606,265,422.848,265,393.091,265C363.333,265,333.576,265,303.818,265C274.061,265,244.303,265,214.545,265C184.788,265,155.03,265,125.273,265C95.515,265,65.758,265,36,265Z"></path>
                              <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="255" stroke="transparent" width="982" d="M36,189.775C65.758,187.438,95.515,185.1,125.273,182.125C155.03,179.15,184.788,174.05,214.545,171.925C244.303,169.8,274.061,170.863,303.818,168.737C333.576,166.612,363.333,160.344,393.091,157.9C422.848,155.456,452.606,155.563,482.364,154.075C512.121,152.588,541.879,150.994,571.636,148.975C601.394,146.956,631.152,143.769,660.909,141.963C690.667,140.156,720.424,139.731,750.182,138.138C779.939,136.544,809.697,134.1,839.455,132.4C869.212,130.7,898.97,129.638,928.727,127.938C958.485,126.238,988.242,124.219,1018,122.2"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-teal-500)" strokeWidth="2" fill="none" id="recharts-line-_r_a_" height="255" width="982" strokeDasharray="984.7412719726562px 984.7412719726562px" d="M36,189.775C65.758,187.438,95.515,185.1,125.273,182.125C155.03,179.15,184.788,174.05,214.545,171.925C244.303,169.8,274.061,170.863,303.818,168.737C333.576,166.612,363.333,160.344,393.091,157.9C422.848,155.456,452.606,155.563,482.364,154.075C512.121,152.588,541.879,150.994,571.636,148.975C601.394,146.956,631.152,143.769,660.909,141.963C690.667,140.156,720.424,139.731,750.182,138.138C779.939,136.544,809.697,134.1,839.455,132.4C869.212,130.7,898.97,129.638,928.727,127.938C958.485,126.238,988.242,124.219,1018,122.2"></path>
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
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="36.00000000000006" cy="189.775"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="125.27272727272732" cy="182.125"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="214.5454545454546" cy="171.925"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="303.81818181818187" cy="168.73749999999998"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="393.0909090909091" cy="157.9"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="482.3636363636364" cy="154.07500000000002"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="571.6363636363637" cy="148.975"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="660.909090909091" cy="141.9625"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="750.1818181818182" cy="138.13750000000002"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="839.4545454545455" cy="132.40000000000003"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="928.7272727272727" cy="127.9375"></circle>
                            <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="982" cx="1018" cy="122.2"></circle>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="36.00000000000006" y="283" textAnchor="middle" fill="#666">
                                <tspan x="36.00000000000006" dy="0.71em">
                                  Mar 24
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="125.27272727272732" y="283" textAnchor="middle" fill="#666">
                                <tspan x="125.27272727272732" dy="0.71em">
                                  Mar 31
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="214.5454545454546" y="283" textAnchor="middle" fill="#666">
                                <tspan x="214.5454545454546" dy="0.71em">
                                  Apr 7
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="303.81818181818187" y="283" textAnchor="middle" fill="#666">
                                <tspan x="303.81818181818187" dy="0.71em">
                                  Apr 14
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="393.0909090909091" y="283" textAnchor="middle" fill="#666">
                                <tspan x="393.0909090909091" dy="0.71em">
                                  Apr 21
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="482.3636363636364" y="283" textAnchor="middle" fill="#666">
                                <tspan x="482.3636363636364" dy="0.71em">
                                  Apr 28
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="571.6363636363637" y="283" textAnchor="middle" fill="#666">
                                <tspan x="571.6363636363637" dy="0.71em">
                                  May 5
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="660.909090909091" y="283" textAnchor="middle" fill="#666">
                                <tspan x="660.909090909091" dy="0.71em">
                                  May 12
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="750.1818181818182" y="283" textAnchor="middle" fill="#666">
                                <tspan x="750.1818181818182" dy="0.71em">
                                  May 19
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="839.4545454545455" y="283" textAnchor="middle" fill="#666">
                                <tspan x="839.4545454545455" dy="0.71em">
                                  May 26
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="928.7272727272727" y="283" textAnchor="middle" fill="#666">
                                <tspan x="928.7272727272727" dy="0.71em">
                                  Jun 2
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="982" stroke="none" fontSize="11" x="1015.3984375" y="283" textAnchor="middle" fill="#666">
                                <tspan x="1015.3984375" dy="0.71em">
                                  Jun 9
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="255" stroke="none" fontSize="11" x="22" y="265" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  40%
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="255" stroke="none" fontSize="11" x="22" y="201.25" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  50%
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="255" stroke="none" fontSize="11" x="22" y="137.5" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  60%
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="255" stroke="none" fontSize="11" x="22" y="73.75" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  70%
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="255" stroke="none" fontSize="11" x="22" y="10" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  80%
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
            </div>
          </FramePanel>
          <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-2.5 gap-y-1.5 items-center px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <span className="[&_svg]:size-4 grid place-items-center shrink-0 size-5 text-warning">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </span>
            <span className="font-medium text-foreground text-sm">
              Activation drop
            </span>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
              Armed
            </Badge>
            <span className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs">
              <span>
                Fires below 55%
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                2 day window
              </span>
            </span>
            <span className="flex gap-1.5 items-center ms-auto text-muted-foreground text-xs">
              <Avatar className="size-5" size="default">
                <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              Sana Qureshi
            </span>
          </footer>
        </Frame>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <Frame className="h-full">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-sm">
                Cohort Breakdown
              </div>
              <div className="text-muted-foreground text-sm">
                Share activated in their first 28 days
              </div>
            </header>
            <FramePanel className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-between">
                  <span className="flex gap-1.5 items-baseline min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      Sales assisted accounts
                    </span>
                    <span className="font-mono shrink-0 text-[11px] text-muted-foreground">
                      COH-075
                    </span>
                  </span>
                  <div className="flex gap-2.5 items-center shrink-0 text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      168 of 210
                    </span>
                    <span className="font-medium tabular-nums text-foreground text-right w-9">
                      80%
                    </span>
                  </div>
                </div>
                <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-full">
                  <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" aria-valuetext="80%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "80%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-between">
                  <span className="flex gap-1.5 items-baseline min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      Invite driven teams
                    </span>
                    <span className="font-mono shrink-0 text-[11px] text-muted-foreground">
                      COH-071
                    </span>
                  </span>
                  <div className="flex gap-2.5 items-center shrink-0 text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      312 of 440
                    </span>
                    <span className="font-medium tabular-nums text-foreground text-right w-9">
                      71%
                    </span>
                  </div>
                </div>
                <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-full">
                  <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="71" aria-valuetext="71%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "71%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-between">
                  <span className="flex gap-1.5 items-baseline min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      Self serve signups
                    </span>
                    <span className="font-mono shrink-0 text-[11px] text-muted-foreground">
                      COH-076
                    </span>
                  </span>
                  <div className="flex gap-2.5 items-center shrink-0 text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      402 of 620
                    </span>
                    <span className="font-medium tabular-nums text-foreground text-right w-9">
                      65%
                    </span>
                  </div>
                </div>
                <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-full">
                  <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="65" aria-valuetext="65%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "65%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-between">
                  <span className="flex gap-1.5 items-baseline min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      May activation cohort
                    </span>
                    <span className="font-mono shrink-0 text-[11px] text-muted-foreground">
                      COH-072
                    </span>
                  </span>
                  <div className="flex gap-2.5 items-center shrink-0 text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      288 of 450
                    </span>
                    <span className="font-medium tabular-nums text-foreground text-right w-9">
                      64%
                    </span>
                  </div>
                </div>
                <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-full">
                  <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                  <Progress className="**:data-[slot=progress-indicator]:bg-primary **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="64" aria-valuetext="64%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "64%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-between">
                  <span className="flex gap-1.5 items-baseline min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      Q3 onboarding accounts
                    </span>
                    <span className="font-mono shrink-0 text-[11px] text-muted-foreground">
                      COH-073
                    </span>
                  </span>
                  <div className="flex gap-2.5 items-center shrink-0 text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      174 of 300
                    </span>
                    <span className="font-medium tabular-nums text-foreground text-right w-9">
                      58%
                    </span>
                  </div>
                </div>
                <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-full">
                  <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                  <Progress className="**:data-[slot=progress-indicator]:bg-primary **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-between">
                  <span className="flex gap-1.5 items-baseline min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      Dormant admins
                    </span>
                    <span className="font-mono shrink-0 text-[11px] text-muted-foreground">
                      COH-074
                    </span>
                  </span>
                  <div className="flex gap-2.5 items-center shrink-0 text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      47 of 188
                    </span>
                    <span className="font-medium tabular-nums text-foreground text-right w-9">
                      25%
                    </span>
                  </div>
                </div>
                <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-full">
                  <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" aria-valuetext="25%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "25%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame className="h-full">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-sm">
                Recent Changes
              </div>
              <div className="text-muted-foreground text-sm">
                Edits to this metric over the last weeks
              </div>
            </header>
            <FramePanel>
              <Timeline data-orientation="vertical">
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-primary/10 border dark:bg-primary/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-primary" aria-hidden="true">
                      <svg className="lucide lucide-target size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Target raised to 70%
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      2 days ago
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Leo Grant lifted the goal from 65% after the Q3 onboarding push.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Leo Grant
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-warning/10 border border-warning/20 dark:bg-warning/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-warning" aria-hidden="true">
                      <svg className="lucide lucide-bell size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Alert threshold set to 55%
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      Jun 9
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Sana Qureshi widened the activation drop guard to a 2 day window.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Sana Qureshi
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-info/10 border border-info/20 dark:bg-info/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-info" aria-hidden="true">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Definition updated
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      Jun 2
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      template_applied (EVT-1842) replaced first_report_viewed as the activation event.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Mira Stone
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </main>
  )
}
