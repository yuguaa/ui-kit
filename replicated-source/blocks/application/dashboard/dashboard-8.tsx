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
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background min-h-svh text-foreground w-full">
      <main className="flex flex-col gap-5 lg:p-6 max-w-7xl mx-auto p-3 sm:p-4 w-full" aria-labelledby="page-heading">
        <h1 className="sr-only" id="page-heading">
          Royalty Desk
        </h1>
        <header className="flex flex-col gap-2 min-h-9 pb-1 shrink-0 sm:flex-row sm:items-center sm:justify-between w-full" aria-label="Royalty command header">
          <Breadcrumb className="min-w-0" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  Finance
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="min-w-0">
                <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                  Payout Studio
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2 items-center shrink-0">
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between leading-none max-w-full outline-none select-none shrink-0 tabular-nums transition-all w-[250px] whitespace-nowrap" type="button" tabIndex="0" aria-label="Royalty range, May 27, 2026 - Jun 25, 2026" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
              <span className="truncate">
                May 27, 2026 - Jun 25, 2026
              </span>
              <svg className="group-hover/pick-date:text-foreground lucide lucide-calendar shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </PopoverTrigger>
            </Popover>
            <Button type="button" tabIndex="0" aria-label="Export royalty report">
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <span className="hidden sm:block">
                Export
              </span>
            </Button>
          </div>
        </header>
        <Frame>
          <FramePanel className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between min-w-0">
              <div className="flex flex-col gap-3 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                    Creator Finance
                  </Badge>
                  <span className="tabular-nums text-muted-foreground text-xs">
                    Thursday, Jun 25, 2026
                  </span>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h2 className="font-semibold text-2xl tracking-tight truncate">
                    Royalty Desk
                  </h2>
                  <p className="text-muted-foreground text-sm" role="status" aria-live="polite">
                    Next payout closes at 4 PM.
                  </p>
                </div>
              </div>
              <div className="border-border border-t flex flex-col gap-3 lg:border-t-0 lg:pt-0 lg:w-[360px] min-w-0 pt-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="lg:text-right min-w-0">
                  <div className="text-muted-foreground text-sm">
                    Clear To Release
                  </div>
                  <div className="font-semibold mt-1 tabular-nums text-3xl tracking-tight">
                    $505,870
                  </div>
                  <div className="mt-1 tabular-nums text-muted-foreground text-sm">
                    $49,300 settling
                  </div>
                </div>
                <div className="gap-2 grid grid-cols-2 lg:w-full sm:w-60 w-full">
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Split
                  </Button>
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                    Sync
                  </Button>
                </div>
              </div>
            </div>
            <div className="gap-2 grid sm:grid-cols-2 xl:grid-cols-4">
              <Item className="flex-nowrap gap-2.5 min-w-0" variant="outline" size="sm">
                <ItemMedia className="[&_svg]:size-4 size-auto text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-circle-dollar-sign size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                    <path d="M12 18V6"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="font-medium text-muted-foreground text-xs truncate w-full">
                    Live Pot
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    claimable now
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end ml-auto shrink-0">
                  <span className="font-semibold leading-none tabular-nums text-sm">
                    $505,870
                  </span>
                </ItemActions>
              </Item>
              <Item className="flex-nowrap gap-2.5 min-w-0" variant="outline" size="sm">
                <ItemMedia className="[&_svg]:size-4 size-auto text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-shield-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="font-medium text-muted-foreground text-xs truncate w-full">
                    Buffer
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    under review
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end ml-auto shrink-0">
                  <span className="font-semibold leading-none tabular-nums text-sm">
                    $109,520
                  </span>
                </ItemActions>
              </Item>
              <Item className="flex-nowrap gap-2.5 min-w-0" variant="outline" size="sm">
                <ItemMedia className="[&_svg]:size-4 size-auto text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-landmark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LandmarkIcon" tabler="IconBuildingBank" hugeicons="BankIcon" phosphor="BankIcon" remixicon="RiBankLine" aria-hidden="true">
                    <path d="M10 18v-7"></path>
                    <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                    <path d="M14 18v-7"></path>
                    <path d="M18 18v-7"></path>
                    <path d="M3 22h18"></path>
                    <path d="M6 18v-7"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="font-medium text-muted-foreground text-xs truncate w-full">
                    Sweep Lanes
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    funds moving
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end ml-auto shrink-0">
                  <span className="font-semibold leading-none tabular-nums text-sm">
                    3
                  </span>
                </ItemActions>
              </Item>
              <Item className="flex-nowrap gap-2.5 min-w-0" variant="outline" size="sm">
                <ItemMedia className="[&_svg]:size-4 size-auto text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-list-checks size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                    <path d="M13 5h8"></path>
                    <path d="M13 12h8"></path>
                    <path d="M13 19h8"></path>
                    <path d="m3 17 2 2 4-4"></path>
                    <path d="m3 7 2 2 4-4"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="font-medium text-muted-foreground text-xs truncate w-full">
                    Moves
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    in range
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end ml-auto shrink-0">
                  <span className="font-semibold leading-none tabular-nums text-sm">
                    16
                  </span>
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
        <div className="gap-4 grid items-stretch lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)] min-w-0">
          <Frame className="h-full min-w-0">
            <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-px">
                <div className="font-semibold text-sm">
                  Royalty Pace
                </div>
                <div className="text-muted-foreground text-sm">
                  Receipts against buffer
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <span className="bg-success rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                  Receipts
                </Badge>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                  <span className="bg-info rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                  Buffer
                </Badge>
              </div>
            </header>
            <FramePanel className="flex flex-col gap-4">
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-80 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_2_" role="img" aria-label="Royalty receipts and buffer for May 27, 2026 - Jun 25, 2026">
                <style>{`
 [data-chart=chart-_r_2_] {
  --color-receipts: var(--color-success);
  --color-held: var(--color-info);
}


.dark [data-chart=chart-_r_2_] {
  --color-receipts: var(--color-success);
  --color-held: var(--color-info);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="706" height="320" style={{position: "relative", cursor: "default", width: "706px", height: "320px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="706" height="320" viewBox="0 0 706 320" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="706" height="270" x1="0" y1="290" x2="706" y2="290"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="706" height="270" x1="0" y1="222.5" x2="706" y2="222.5"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="706" height="270" x1="0" y1="155" x2="706" y2="155"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="706" height="270" x1="0" y1="87.5" x2="706" y2="87.5"></line>
                              <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="20" width="706" height="270" x1="0" y1="20" x2="706" y2="20"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="0" y="20" height="270" width="706"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="dashboard-8-crosshatch-receipts" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M0,8 L8,0" stroke="var(--color-success)" strokeWidth="0.8" opacity="0.45"></path>
                            <path d="M0,0 L8,8" stroke="var(--color-success)" strokeWidth="0.8" opacity="0.22"></path>
                          </pattern>
                          <pattern id="dashboard-8-crosshatch-held" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M0,8 L8,0" stroke="var(--color-info)" strokeWidth="0.8" opacity="0.45"></path>
                            <path d="M0,0 L8,8" stroke="var(--color-info)" strokeWidth="0.8" opacity="0.22"></path>
                          </pattern>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#dashboard-8-crosshatch-held)" fillOpacity="0.5" height="270" stroke="none" width="706" id="recharts-area-_r_1k_" d="M0,248.165C8.115,247.147,16.23,246.129,24.345,245.585C32.46,245.041,40.575,244.971,48.69,244.475C56.805,243.978,64.92,243.055,73.034,242.995C81.149,242.934,89.264,243.736,97.379,246.348C105.494,248.959,113.609,253.38,121.724,254.61C129.839,255.84,137.954,253.88,146.069,253.035C154.184,252.191,162.299,252.462,170.414,252.809C178.529,253.157,186.644,253.58,194.759,254.215C202.874,254.849,210.989,255.694,219.103,256.042C227.218,256.391,235.333,256.242,243.448,256.442C251.563,256.642,259.678,257.191,267.793,258.862C275.908,260.533,284.023,263.327,292.138,263.616C300.253,263.905,308.368,261.689,316.483,260.084C324.598,258.479,332.713,257.485,340.828,256.485C348.943,255.484,357.057,254.477,365.172,253.707C373.287,252.937,381.402,252.406,389.517,251.395C397.632,250.385,405.747,248.895,413.862,247.998C421.977,247.101,430.092,246.795,438.207,248.396C446.322,249.997,454.437,253.505,462.552,253.852C470.667,254.199,478.782,251.385,486.897,249.718C495.011,248.05,503.126,247.53,511.241,247.239C519.356,246.948,527.471,246.887,535.586,247.219C543.701,247.55,551.816,248.275,559.931,248.53C568.046,248.784,576.161,248.568,584.276,248.994C592.391,249.42,600.506,250.488,608.621,252.858C616.736,255.229,624.851,258.902,632.966,260.017C641.08,261.131,649.195,259.688,657.31,258.089C665.425,256.491,673.54,254.739,681.655,256.431C689.77,258.122,697.885,263.259,706,268.395L706,290C697.885,290,689.77,290,681.655,290C673.54,290,665.425,290,657.31,290C649.195,290,641.08,290,632.966,290C624.851,290,616.736,290,608.621,290C600.506,290,592.391,290,584.276,290C576.161,290,568.046,290,559.931,290C551.816,290,543.701,290,535.586,290C527.471,290,519.356,290,511.241,290C503.126,290,495.011,290,486.897,290C478.782,290,470.667,290,462.552,290C454.437,290,446.322,290,438.207,290C430.092,290,421.977,290,413.862,290C405.747,290,397.632,290,389.517,290C381.402,290,373.287,290,365.172,290C357.057,290,348.943,290,340.828,290C332.713,290,324.598,290,316.483,290C308.368,290,300.253,290,292.138,290C284.023,290,275.908,290,267.793,290C259.678,290,251.563,290,243.448,290C235.333,290,227.218,290,219.103,290C210.989,290,202.874,290,194.759,290C186.644,290,178.529,290,170.414,290C162.299,290,154.184,290,146.069,290C137.954,290,129.839,290,121.724,290C113.609,290,105.494,290,97.379,290C89.264,290,81.149,290,73.034,290C64.92,290,56.805,290,48.69,290C40.575,290,32.46,290,24.345,290C16.23,290,8.115,290,0,290Z"></path>
                              <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.5" height="270" stroke="var(--color-held)" width="706" d="M0,248.165C8.115,247.147,16.23,246.129,24.345,245.585C32.46,245.041,40.575,244.971,48.69,244.475C56.805,243.978,64.92,243.055,73.034,242.995C81.149,242.934,89.264,243.736,97.379,246.348C105.494,248.959,113.609,253.38,121.724,254.61C129.839,255.84,137.954,253.88,146.069,253.035C154.184,252.191,162.299,252.462,170.414,252.809C178.529,253.157,186.644,253.58,194.759,254.215C202.874,254.849,210.989,255.694,219.103,256.042C227.218,256.391,235.333,256.242,243.448,256.442C251.563,256.642,259.678,257.191,267.793,258.862C275.908,260.533,284.023,263.327,292.138,263.616C300.253,263.905,308.368,261.689,316.483,260.084C324.598,258.479,332.713,257.485,340.828,256.485C348.943,255.484,357.057,254.477,365.172,253.707C373.287,252.937,381.402,252.406,389.517,251.395C397.632,250.385,405.747,248.895,413.862,247.998C421.977,247.101,430.092,246.795,438.207,248.396C446.322,249.997,454.437,253.505,462.552,253.852C470.667,254.199,478.782,251.385,486.897,249.718C495.011,248.05,503.126,247.53,511.241,247.239C519.356,246.948,527.471,246.887,535.586,247.219C543.701,247.55,551.816,248.275,559.931,248.53C568.046,248.784,576.161,248.568,584.276,248.994C592.391,249.42,600.506,250.488,608.621,252.858C616.736,255.229,624.851,258.902,632.966,260.017C641.08,261.131,649.195,259.688,657.31,258.089C665.425,256.491,673.54,254.739,681.655,256.431C689.77,258.122,697.885,263.259,706,268.395"></path>
                            </g>
                          </g>
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#dashboard-8-crosshatch-receipts)" fillOpacity="0.5" height="270" stroke="none" width="706" id="recharts-area-_r_1l_" d="M0,54.757C8.115,51.687,16.23,48.617,24.345,47.575C32.46,46.534,40.575,47.522,48.69,45.689C56.805,43.855,64.92,39.2,73.034,38.449C81.149,37.699,89.264,40.854,97.379,53.669C105.494,66.484,113.609,88.959,121.724,93.536C129.839,98.113,137.954,84.792,146.069,77.181C154.184,69.57,162.299,67.668,170.414,66.221C178.529,64.773,186.644,63.78,194.759,64.39C202.874,64.999,210.989,67.21,219.103,66.619C227.218,66.028,235.333,62.633,243.448,62.277C251.563,61.92,259.678,64.601,267.793,75.769C275.908,86.936,284.023,106.589,292.138,109.65C300.253,112.711,308.368,99.179,316.483,90.608C324.598,82.038,332.713,78.428,340.828,75.196C348.943,71.965,357.057,69.112,365.172,67.827C373.287,66.542,381.402,66.825,389.517,64.251C397.632,61.677,405.747,56.247,413.862,53.966C421.977,51.685,430.092,52.555,438.207,63.006C446.322,73.457,454.437,93.489,462.552,96.052C470.667,98.615,478.782,83.709,486.897,74.419C495.011,65.128,503.126,61.455,511.241,58.423C519.356,55.39,527.471,52.999,535.586,52.38C543.701,51.761,551.816,52.914,559.931,51.057C568.046,49.199,576.161,44.33,584.276,43.053C592.391,41.776,600.506,44.09,608.621,55.64C616.736,67.19,624.851,87.976,632.966,92.617C641.08,97.257,649.195,85.753,657.31,73.357C665.425,60.962,673.54,47.675,681.655,59.027C689.77,70.379,697.885,106.369,706,142.359L706,268.395C697.885,263.259,689.77,258.122,681.655,256.431C673.54,254.739,665.425,256.491,657.31,258.089C649.195,259.688,641.08,261.131,632.966,260.017C624.851,258.902,616.736,255.229,608.621,252.858C600.506,250.488,592.391,249.42,584.276,248.994C576.161,248.568,568.046,248.784,559.931,248.53C551.816,248.275,543.701,247.55,535.586,247.219C527.471,246.887,519.356,246.948,511.241,247.239C503.126,247.53,495.011,248.05,486.897,249.718C478.782,251.385,470.667,254.199,462.552,253.852C454.437,253.505,446.322,249.998,438.207,248.396C430.092,246.795,421.977,247.101,413.862,247.998C405.747,248.895,397.632,250.385,389.517,251.395C381.402,252.406,373.287,252.937,365.172,253.707C357.057,254.476,348.943,255.484,340.828,256.485C332.713,257.485,324.598,258.479,316.483,260.084C308.368,261.689,300.253,263.905,292.138,263.616C284.023,263.327,275.908,260.533,267.793,258.862C259.678,257.191,251.563,256.643,243.448,256.442C235.333,256.242,227.218,256.391,219.103,256.042C210.989,255.694,202.874,254.849,194.759,254.215C186.644,253.581,178.529,253.157,170.414,252.809C162.299,252.462,154.184,252.191,146.069,253.035C137.954,253.88,129.839,255.84,121.724,254.61C113.609,253.38,105.494,248.959,97.379,246.348C89.264,243.736,81.149,242.934,73.034,242.995C64.92,243.055,56.805,243.978,48.69,244.475C40.575,244.971,32.46,245.041,24.345,245.585C16.23,246.129,8.115,247.147,0,248.165Z"></path>
                              <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.5" height="270" stroke="var(--color-receipts)" width="706" d="M0,54.757C8.115,51.687,16.23,48.617,24.345,47.575C32.46,46.534,40.575,47.522,48.69,45.689C56.805,43.855,64.92,39.2,73.034,38.449C81.149,37.699,89.264,40.854,97.379,53.669C105.494,66.484,113.609,88.959,121.724,93.536C129.839,98.113,137.954,84.792,146.069,77.181C154.184,69.57,162.299,67.668,170.414,66.221C178.529,64.773,186.644,63.78,194.759,64.39C202.874,64.999,210.989,67.21,219.103,66.619C227.218,66.028,235.333,62.633,243.448,62.277C251.563,61.92,259.678,64.601,267.793,75.769C275.908,86.936,284.023,106.589,292.138,109.65C300.253,112.711,308.368,99.179,316.483,90.608C324.598,82.038,332.713,78.428,340.828,75.196C348.943,71.965,357.057,69.112,365.172,67.827C373.287,66.542,381.402,66.825,389.517,64.251C397.632,61.677,405.747,56.247,413.862,53.966C421.977,51.685,430.092,52.555,438.207,63.006C446.322,73.457,454.437,93.489,462.552,96.052C470.667,98.615,478.782,83.709,486.897,74.419C495.011,65.128,503.126,61.455,511.241,58.423C519.356,55.39,527.471,52.999,535.586,52.38C543.701,51.761,551.816,52.914,559.931,51.057C568.046,49.199,576.161,44.33,584.276,43.053C592.391,41.776,600.506,44.09,608.621,55.64C616.736,67.19,624.851,87.976,632.966,92.617C641.08,97.257,649.195,85.753,657.31,73.357C665.425,60.962,673.54,47.675,681.655,59.027C689.77,70.379,697.885,106.369,706,142.359"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
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
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="48.689655172413794" y="304" textAnchor="middle" fill="#666">
                                <tspan x="48.689655172413794" dy="0.71em">
                                  May 29
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="97.37931034482759" y="304" textAnchor="middle" fill="#666">
                                <tspan x="97.37931034482759" dy="0.71em">
                                  May 31
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="146.0689655172414" y="304" textAnchor="middle" fill="#666">
                                <tspan x="146.0689655172414" dy="0.71em">
                                  Jun 2
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="194.75862068965517" y="304" textAnchor="middle" fill="#666">
                                <tspan x="194.75862068965517" dy="0.71em">
                                  Jun 4
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="243.44827586206895" y="304" textAnchor="middle" fill="#666">
                                <tspan x="243.44827586206895" dy="0.71em">
                                  Jun 6
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="292.1379310344828" y="304" textAnchor="middle" fill="#666">
                                <tspan x="292.1379310344828" dy="0.71em">
                                  Jun 8
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="340.82758620689657" y="304" textAnchor="middle" fill="#666">
                                <tspan x="340.82758620689657" dy="0.71em">
                                  Jun 10
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="389.51724137931035" y="304" textAnchor="middle" fill="#666">
                                <tspan x="389.51724137931035" dy="0.71em">
                                  Jun 12
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="438.2068965517241" y="304" textAnchor="middle" fill="#666">
                                <tspan x="438.2068965517241" dy="0.71em">
                                  Jun 14
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="486.8965517241379" y="304" textAnchor="middle" fill="#666">
                                <tspan x="486.8965517241379" dy="0.71em">
                                  Jun 16
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="535.5862068965517" y="304" textAnchor="middle" fill="#666">
                                <tspan x="535.5862068965517" dy="0.71em">
                                  Jun 18
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="584.2758620689656" y="304" textAnchor="middle" fill="#666">
                                <tspan x="584.2758620689656" dy="0.71em">
                                  Jun 20
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="632.9655172413793" y="304" textAnchor="middle" fill="#666">
                                <tspan x="632.9655172413793" dy="0.71em">
                                  Jun 22
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="706" stroke="none" x="686.5703125" y="304" textAnchor="middle" fill="#666">
                                <tspan x="686.5703125" dy="0.71em">
                                  Jun 25
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
          <Frame className="h-full min-w-0">
            <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-px">
                <div className="font-semibold text-sm">
                  Release Room
                </div>
                <div className="text-muted-foreground text-sm">
                  Buffer and sweep lanes
                </div>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                Vault Sweep
              </Badge>
            </header>
            <FramePanel className="flex flex-1 flex-col gap-5 justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Buffer drawn
                    </span>
                    <span className="font-medium tabular-nums">
                      50%
                    </span>
                  </div>
                  <div className="bg-muted h-2 overflow-hidden rounded-full" role="progressbar" aria-label="Buffer drawn" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                    <div className="bg-primary h-full rounded-full" style={{width: "50%"}}></div>
                  </div>
                  <div className="flex gap-3 items-center justify-between text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      $112,790 held
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      $225,000 limit
                    </span>
                  </div>
                </div>
                <Button className="w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  Tune Buffer
                </Button>
              </div>
              <div className="border-border border-t divide-border divide-y flex flex-col">
                <div className="first:pt-4 flex gap-3 items-center justify-between py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-credit-card size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        Studio Card
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          daily clear
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="shrink-0">
                          today
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium tabular-nums">
                      $284,650
                    </div>
                    <div className="tabular-nums text-muted-foreground text-xs">
                      **** 4576
                    </div>
                  </div>
                </div>
                <div className="first:pt-4 flex gap-3 items-center justify-between py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-landmark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LandmarkIcon" tabler="IconBuildingBank" hugeicons="BankIcon" phosphor="BankIcon" remixicon="RiBankLine" aria-hidden="true">
                          <path d="M10 18v-7"></path>
                          <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                          <path d="M14 18v-7"></path>
                          <path d="M18 18v-7"></path>
                          <path d="M3 22h18"></path>
                          <path d="M6 18v-7"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        Royalty Vault
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          Friday sweep
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="shrink-0">
                          Friday
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium tabular-nums">
                      $153,980
                    </div>
                    <div className="tabular-nums text-muted-foreground text-xs">
                      **** 9132
                    </div>
                  </div>
                </div>
                <div className="first:pt-4 flex gap-3 items-center justify-between py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-wallet size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        Collab Wallet
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          creator split
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="shrink-0">
                          queued
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium tabular-nums">
                      $67,240
                    </div>
                    <div className="tabular-nums text-muted-foreground text-xs">
                      **** 2841
                    </div>
                  </div>
                </div>
              </div>
            </FramePanel>
          </Frame>
        </div>
        <Frame className="min-w-0 w-full">
          <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-px">
              <div className="font-semibold text-sm">
                Recent Moves
              </div>
              <div className="text-muted-foreground text-sm">
                Moves over $10K by source
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end sm:w-auto w-full">
              <Input className="sm:w-64" id="base-ui-_r_4_" placeholder="Search royalties" aria-label="Search royalties" type="search" value=""></Input>
              <Select>
              <SelectTrigger className="sm:w-44 w-full" type="button" tabIndex="0" id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter royalties by channel">
                <SelectValue>
                  All Channels
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
          </header>
          <FramePanel className="p-0!">
            <div className="relative">
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "132px"}} />
                          <col style={{width: "220px"}} />
                          <col style={{width: "150px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "150px"}} />
                          <col style={{width: "52px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="id" data-header-id="id" data-header-depth="0" style={{width: "132px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Royalty ID
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="source" data-header-id="source" data-header-depth="0" style={{width: "220px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Source
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="amount" data-header-id="amount" data-header-depth="0" style={{width: "150px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Amount
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "140px"}}>
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
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="date" data-header-id="date" data-header-depth="0" style={{width: "150px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Date
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 pe-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "52px"}}></th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4283">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4283">
                                RYL-4283
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Pattern Pack Drop
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Mika Studio
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    direct
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $26,480
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $690 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                Pending
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 25, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  10:20 AM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4283" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4282">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4282">
                                RYL-4282
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Stream Royalty Batch
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Wave Circuit
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    stream
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $31,960
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $780 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                Cleared
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 25, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  07:30 AM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4282" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4281">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4281">
                                RYL-4281
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Canvas Pack Drop
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Mika Studio
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    direct
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $82,250
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $1,850 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                Cleared
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 24, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  03:45 PM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4281" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4280">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4280">
                                RYL-4280
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Cinema Sync Fee
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Northline Media
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    license
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $64,200
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $2,200 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                Pending
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 23, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  11:30 AM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4280" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4279">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4279">
                                RYL-4279
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Sample Pack
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Wave Circuit
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    stream
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $37,480
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $940 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                Cleared
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 22, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  12:00 PM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4279" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4278">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4278">
                                RYL-4278
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Live Premiere Tips
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Arc Room
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    tips
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $18,840
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $380 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                In Review
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 21, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  09:15 PM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4278" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4277">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4277">
                                RYL-4277
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Editorial License
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Quiet Atlas
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    license
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $51,750
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $1,750 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                <span className="bg-destructive rounded-full size-1.5" aria-hidden="true"></span>
                                Flagged
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 19, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  06:00 AM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4277" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RYL-4276">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <a className="font-medium hover:text-primary hover:underline text-sm transition-colors underline-offset-2" href="#" aria-label="View royalty RYL-4276">
                                RYL-4276
                              </a>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <a className="font-medium hover:text-primary hover:underline text-sm transition-colors truncate underline-offset-2" href="#">
                                  Preset Bundle
                                </a>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    Mika Studio
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="capitalize">
                                    direct
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="font-medium text-sm">
                                  $45,860
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  $1,220 fee
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                Cleared
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 tabular-nums">
                                <span className="text-sm">
                                  Jun 18, 2026
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  02:20 PM
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for royalty RYL-4276" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
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
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <DataGridPagination>
                <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                  <div className="text-muted-foreground text-sm">
                    Rows per page
                  </div>
                  <Select>
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_1h_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      8
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_1h_-hidden-input" tabIndex="-1" aria-hidden="true" value="8" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    1 - 8 of 16
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
          </FramePanel>
        </Frame>
      </main>
    </div>
  )
}
