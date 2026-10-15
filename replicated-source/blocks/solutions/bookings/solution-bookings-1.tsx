import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center md:p-10 min-h-svh mx-auto p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Booking Operations
      </h1>
      <div className="@container bg-background flex flex-col gap-2 max-w-7xl mx-auto text-foreground w-full">
        <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between min-h-9 pb-1 shrink-0 w-full" aria-label="Booking command header">
          <Breadcrumb className="min-w-0" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  Lumen Studio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  Bookings
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="min-w-0">
                <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                  Command Desk
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-wrap gap-2 items-center justify-end shrink-0">
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between leading-none max-w-full outline-none select-none shrink-0 tabular-nums transition-all w-[250px] whitespace-nowrap" type="button" tabIndex="0" aria-label="Booking date range Jun 25, 2026 - Jul 24, 2026" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
              <span className="truncate">
                Jun 25, 2026 - Jul 24, 2026
              </span>
              <svg className="group-hover/pick-date:text-foreground lucide lucide-calendar shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </PopoverTrigger>
            </Popover>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <span className="hidden sm:block">
                Export
              </span>
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="hidden sm:block">
                New Booking
              </span>
            </Button>
          </div>
        </header>
        <section aria-label="Booking metrics">
          <Frame className="@container w-full">
            <div className="@2xl:grid-cols-2 @5xl:grid-cols-4 gap-1 grid">
              <FramePanel>
                <div className="flex gap-2.5 items-center">
                  <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-neutral-950 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarCheckIcon" tabler="IconCalendarCheck" hugeicons="CalendarCheckIn01Icon" phosphor="CalendarCheckIcon" remixicon="RiCalendarCheckLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                        <path d="m9 16 2 2 4-4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="leading-tight text-muted-foreground text-sm truncate">
                      Schedule
                    </p>
                    <h3 className="font-medium leading-tight text-sm truncate">
                      Booked Today
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    Appointments
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      42
                    </span>
                    <span className="font-medium text-sm text-teal-600">
                      +8 (vs Tue)
                    </span>
                  </div>
                </div>
              </FramePanel>
              <FramePanel>
                <div className="flex gap-2.5 items-center">
                  <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-indigo-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-user-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCheckIcon" tabler="IconUserCheck" hugeicons="UserCheck01Icon" phosphor="UserCheckIcon" remixicon="RiUserFollowLine" aria-hidden="true">
                        <path d="m16 11 2 2 4-4"></path>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="leading-tight text-muted-foreground text-sm truncate">
                      Capacity
                    </p>
                    <h3 className="font-medium leading-tight text-sm truncate">
                      Chair Load
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    Utilization
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      86%
                    </span>
                    <span className="font-medium text-sm text-teal-600">
                      +5 pts (today)
                    </span>
                  </div>
                </div>
              </FramePanel>
              <FramePanel>
                <div className="flex gap-2.5 items-center">
                  <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-cyan-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="leading-tight text-muted-foreground text-sm truncate">
                      Payments
                    </p>
                    <h3 className="font-medium leading-tight text-sm truncate">
                      Deposits
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    Cleared
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      $2.4k
                    </span>
                    <span className="font-medium text-sm text-teal-600">
                      +12% (prepaid)
                    </span>
                  </div>
                </div>
              </FramePanel>
              <FramePanel>
                <div className="flex gap-2.5 items-center">
                  <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-amber-400 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="leading-tight text-muted-foreground text-sm truncate">
                      Risk
                    </p>
                    <h3 className="font-medium leading-tight text-sm truncate">
                      Watchlist
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    Needs Desk
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      7
                    </span>
                    <span className="font-medium text-rose-600 text-sm">
                      +2 (no-show)
                    </span>
                  </div>
                </div>
              </FramePanel>
            </div>
          </Frame>
        </section>
        <section className="@5xl:grid-cols-2 gap-3 grid items-stretch min-w-0" aria-label="Booking operations">
          <div className="flex min-w-0">
            <Frame className="h-full w-full">
              <FramePanel className="flex flex-col h-full">
                <div className="flex gap-3 items-start justify-between mb-4">
                  <div className="flex flex-col gap-px">
                    <h3 className="font-semibold text-base">
                      Desk Performance
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Select>
                    <SelectTrigger className="h-8! w-28" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        Today
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="today" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </div>
                <div className="font-medium mb-3 text-foreground text-sm">
                  Recent Activity
                </div>
                <Timeline className="gap-2.5" data-orientation="vertical">
                  <TimelineItem className="group-data-[orientation=vertical]/timeline:not-last:pb-0">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-0.625rem)]" aria-hidden="true"></TimelineSeparator>
                      <TimelineIndicator className="bg-emerald-500 border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                      <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase">
                        4 min ago
                      </TimelineDate>
                    </TimelineHeader>
                    <TimelineContent className="font-medium text-foreground">
                      <div className="min-w-0 pt-1 space-y-1.5">
                        <p className="leading-snug">
                          Hannah checked in for Balayage
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="font-normal text-muted-foreground text-xs">
                            Check-In
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            Ready
                          </Badge>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem className="group-data-[orientation=vertical]/timeline:not-last:pb-0">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-0.625rem)]" aria-hidden="true"></TimelineSeparator>
                      <TimelineIndicator className="bg-sky-500 border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                      <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase">
                        11 min ago
                      </TimelineDate>
                    </TimelineHeader>
                    <TimelineContent className="font-medium text-foreground">
                      <div className="min-w-0 pt-1 space-y-1.5">
                        <p className="leading-snug">
                          Deposit reminder sent to Priya
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="font-normal text-muted-foreground text-xs">
                            Message
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            Sent
                          </Badge>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem className="group-data-[orientation=vertical]/timeline:not-last:pb-0">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-0.625rem)]" aria-hidden="true"></TimelineSeparator>
                      <TimelineIndicator className="bg-amber-500 border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                      <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase">
                        22 min ago
                      </TimelineDate>
                    </TimelineHeader>
                    <TimelineContent className="font-medium text-foreground">
                      <div className="min-w-0 pt-1 space-y-1.5">
                        <p className="leading-snug">
                          James marked as no-show
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="font-normal text-muted-foreground text-xs">
                            Alert
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            Watch
                          </Badge>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
                <div className="gap-2 grid grid-cols-2 mt-auto pt-4">
                  <Button type="button" tabIndex="0">
                    Schedule
                  </Button>
                  <Button type="button" tabIndex="0">
                    Full Report
                  </Button>
                </div>
              </FramePanel>
            </Frame>
          </div>
          <div className="flex min-w-0">
            <Frame className="@container h-full w-full">
              <FramePanel className="flex flex-col h-full">
                <Tabs className="flex-col gap-3 h-full min-w-0 w-full" data-orientation="horizontal" activationDirection="none">
                  <div className="flex flex-wrap gap-3 items-center justify-between">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <h2 className="font-medium text-sm">
                        Chair Capacity
                      </h2>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-full shrink-0 text-muted-foreground/70 transition-colors" type="button" aria-label="Chair capacity info" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                      <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_7_" compositeItemActive="" aria-controls="base-ui-_r_a_">
                        Today
                      </TabsTrigger>
                      <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                        Week
                      </TabsTrigger>
                      <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                        Month
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_a_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_7_">
                    <div className="flex flex-col gap-3 min-w-0">
                      <div className="flex flex-wrap gap-x-2 items-baseline">
                        <span className="font-medium tabular-nums text-[26px]">
                          86%
                        </span>
                        <span className="font-medium text-success text-xs">
                          +5 pts
                        </span>
                        <span className="text-muted-foreground/70 text-xs">
                          vs plan
                        </span>
                      </div>
                      <div className="flex h-7 items-stretch justify-between w-full" aria-label="Today chair capacity is 86%" role="img">
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                        <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-between">
                        <p>
                          <span className="text-muted-foreground/70 text-xs">
                            Booked Hours:
                          </span>
                          <span className="font-medium text-sm">
                            34 booked hours
                          </span>
                        </p>
                        <div className="flex gap-2 items-center">
                          <AvatarGroup>
                            <Avatar className="size-6" size="default">
                              <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-6" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-6" size="default">
                              <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="text-muted-foreground text-xs whitespace-nowrap">
                            5 Staff
                          </span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <div className="gap-2 grid grid-cols-2 mt-auto pt-3">
                    <Button type="button" tabIndex="0">
                      Open Slots
                    </Button>
                    <Button type="button" tabIndex="0">
                      Staff Plan
                    </Button>
                  </div>
                </Tabs>
              </FramePanel>
            </Frame>
          </div>
        </section>
        <section aria-label="Appointment queue">
          <Frame className="w-full" spacing="sm">
            <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold text-balance text-sm">
                  Appointment Queue
                </div>
                <div className="flex flex-wrap gap-2 items-center text-muted-foreground text-pretty text-xs">
                  <span>
                    8 Booked
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full self-center shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    2 Conflicts
                  </span>
                </div>
              </div>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add Booking
              </Button>
            </header>
            <FramePanel className="bg-card p-0! shadow-none!">
              <div className="px-4 py-3">
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex flex-wrap gap-2 items-center">
                    <InputGroup className="min-w-52 sm:w-64" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_e_" placeholder="Search bookings..." aria-label="Search bookings" value="" />
                    </InputGroup>
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by booking status" baseUiClickTrigger="" id="base-ui-_r_g_" aria-haspopup="dialog" aria-expanded="false">
                      <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                      Status
                    </PopoverTrigger>
                    </Popover>
                  </div>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Appointment queue actions" aria-haspopup="menu" id="base-ui-_r_k_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    Actions
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="relative">
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_m_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridTableViewport style={{width: "calc(1166px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "24px", "--data-grid-fill": "24"}}>
                        <DataGridTable style={{"--header-select-size": "40", "--col-select-size": "40", "--header-id-size": "150", "--col-id-size": "150", "--header-client-size": "220", "--col-client-size": "220", "--header-service-size": "230", "--col-service-size": "230", "--header-staff-size": "190", "--col-staff-size": "190", "--header-payment-size": "130", "--col-payment-size": "130", "--header-state-size": "150", "--col-state-size": "150", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1166px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-id-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-client-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-service-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-staff-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-payment-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-state-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_n_" aria-checked="false" aria-label="Select all"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="id" data-header-id="id" data-header-depth="0" style={{width: "calc(var(--header-id-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                                    Appointment
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="client" data-header-id="client" data-header-depth="0" style={{width: "calc(var(--header-client-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                                    Client
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="service" data-header-id="service" data-header-depth="0" style={{width: "calc(var(--header-service-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                                    Service
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="staff" data-header-id="staff" data-header-depth="0" style={{width: "calc(var(--header-staff-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                    Staff
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="payment" data-header-id="payment" data-header-depth="0" style={{width: "calc(var(--header-payment-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1h_" aria-expanded="false">
                                    Payment
                                    <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="state" data-header-id="state" data-header-depth="0" style={{width: "calc(var(--header-state-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1m_" aria-expanded="false">
                                    State
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                                <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="APT-4821">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1o_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View appointment APT-4821">
                                    APT-4821
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      10:30
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Chair 3
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-client-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-info bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View client Hannah Brooks">
                                      Hannah Brooks
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs">
                                      VIP
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-sparkles shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                      <path d="M20 2v4"></path>
                                      <path d="M22 4h-4"></path>
                                      <circle cx="4" cy="20" r="2"></circle>
                                    </svg>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      Balayage
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Progress className="flex-1 min-w-16" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar" aria-label="Balayage readiness">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      58%
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-staff-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <span className="block font-medium truncate">
                                      Nora Vale
                                    </span>
                                    <span className="block text-muted-foreground text-xs truncate">
                                      Colorist
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-payment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    $210
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    Deposit
                                  </Badge>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-state-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                    Checked In
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    $50 paid
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for APT-4821" aria-haspopup="menu" id="base-ui-_r_1u_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="APT-4827">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_20_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View appointment APT-4827">
                                    APT-4827
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      14:00
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Chair 2
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-client-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Sofia Marchetti" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View client Sofia Marchetti">
                                      Sofia Marchetti
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs">
                                      Active
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-sparkles shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                      <path d="M20 2v4"></path>
                                      <path d="M22 4h-4"></path>
                                      <circle cx="4" cy="20" r="2"></circle>
                                    </svg>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      Balayage
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Progress className="flex-1 min-w-16" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="64" aria-valuetext="64%" role="progressbar" aria-label="Balayage readiness">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "64%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      64%
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-staff-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <span className="block font-medium truncate">
                                      Nora Vale
                                    </span>
                                    <span className="block text-muted-foreground text-xs truncate">
                                      Colorist
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-payment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    $185
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    Paid
                                  </Badge>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-state-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                    Confirmed
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    $50 paid
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for APT-4827" aria-haspopup="menu" id="base-ui-_r_26_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="APT-4828">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_28_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View appointment APT-4828">
                                    APT-4828
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      15:30
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Chair 4
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-client-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Jordan Mills" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-muted-foreground bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View client Jordan Mills">
                                      Jordan Mills
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs">
                                      Active
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-sparkles shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                      <path d="M20 2v4"></path>
                                      <path d="M22 4h-4"></path>
                                      <circle cx="4" cy="20" r="2"></circle>
                                    </svg>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      Keratin Treatment
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Progress className="flex-1 min-w-16" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" aria-valuetext="0%" role="progressbar" aria-label="Keratin Treatment readiness">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "0%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      0%
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-staff-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <span className="block font-medium truncate">
                                      Mira Stone
                                    </span>
                                    <span className="block text-muted-foreground text-xs truncate">
                                      Senior Stylist
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-payment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    $165
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    Refunded
                                  </Badge>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-state-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground rounded-full size-1.5" aria-hidden="true"></span>
                                    Cancelled
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    Refunded
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for APT-4828" aria-haspopup="menu" id="base-ui-_r_2e_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="APT-4824">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View appointment APT-4824">
                                    APT-4824
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      12:00
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Room 1
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-client-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Daniel Cho" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View client Daniel Cho">
                                      Daniel Cho
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs">
                                      Active
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-sparkles shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                      <path d="M20 2v4"></path>
                                      <path d="M22 4h-4"></path>
                                      <circle cx="4" cy="20" r="2"></circle>
                                    </svg>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      Deep-Tissue Massage
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Progress className="flex-1 min-w-16" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" aria-valuetext="82%" role="progressbar" aria-label="Deep-Tissue Massage readiness">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "82%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      82%
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-staff-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <span className="block font-medium truncate">
                                      Leo Grant
                                    </span>
                                    <span className="block text-muted-foreground text-xs truncate">
                                      Massage Therapist
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-payment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    $120
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    Deposit
                                  </Badge>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-state-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                    Confirmed
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    $30 paid
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for APT-4824" aria-haspopup="menu" id="base-ui-_r_2m_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="APT-4825">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2o_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View appointment APT-4825">
                                    APT-4825
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      12:30
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Room 2
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-client-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarFallback>
                                        AR
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="absolute bg-warning bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View client Ava Rossi">
                                      Ava Rossi
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs">
                                      VIP
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-sparkles shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                      <path d="M20 2v4"></path>
                                      <path d="M22 4h-4"></path>
                                      <circle cx="4" cy="20" r="2"></circle>
                                    </svg>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      Signature Facial
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Progress className="flex-1 min-w-16" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="36" aria-valuetext="36%" role="progressbar" aria-label="Signature Facial readiness">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "36%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      36%
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-staff-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <span className="block font-medium truncate">
                                      Sana Qureshi
                                    </span>
                                    <span className="block text-muted-foreground text-xs truncate">
                                      Esthetician
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-payment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    $95
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    Due
                                  </Badge>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-state-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                    Pending
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    Awaiting deposit
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for APT-4825" aria-haspopup="menu" id="base-ui-_r_2u_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="APT-4826">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_30_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View appointment APT-4826">
                                    APT-4826
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      13:15
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      Room 2
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-client-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Kenji Tan" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View client Kenji Tan">
                                      Kenji Tan
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs">
                                      Active
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-sparkles shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                      <path d="M20 2v4"></path>
                                      <path d="M22 4h-4"></path>
                                      <circle cx="4" cy="20" r="2"></circle>
                                    </svg>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      Signature Facial
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <Progress className="flex-1 min-w-16" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="88" aria-valuetext="88%" role="progressbar" aria-label="Signature Facial readiness">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "88%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      88%
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-staff-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <span className="block font-medium truncate">
                                      Sana Qureshi
                                    </span>
                                    <span className="block text-muted-foreground text-xs truncate">
                                      Esthetician
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-payment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    $95
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    Deposit
                                  </Badge>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-state-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                    Confirmed
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    $25 paid
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for APT-4826" aria-haspopup="menu" id="base-ui-_r_36_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
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
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_38_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      6
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_38_-hidden-input" tabIndex="-1" aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    1 - 6 of 9
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
        </section>
      </div>
    </main>
  )
}
