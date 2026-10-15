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
  Avatar,
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
    <main className="bg-background lg:p-6 min-h-svh p-3 sm:p-4 w-full" aria-labelledby="page-heading">
      <div className="@container flex flex-col gap-2 max-w-7xl mx-auto text-foreground w-full">
        <h1 className="sr-only" id="page-heading">
          {"Fulfillment Command"}
        </h1>
        <header className="flex gap-2 items-center justify-between min-h-9 pb-1 shrink-0 w-full" aria-label="Fulfillment command header">
          <Breadcrumb className="min-w-0" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  {"Home"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  {"Operations"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="min-w-0">
                <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                  {"Fulfillment"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2 items-center shrink-0">
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between leading-none max-w-full outline-none select-none shrink-0 tabular-nums transition-all w-[250px] whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
              <span className="truncate">
                {"May 12, 2026 - Jun 10, 2026"}
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
                {"Export"}
              </span>
            </Button>
          </div>
        </header>
        <section aria-label="Fulfillment metrics">
          <Frame className="@container w-full">
            <div className="@2xl:grid-cols-2 @5xl:grid-cols-4 gap-1 grid">
              <FramePanel>
                <div className="flex gap-2.5 items-center">
                  <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-neutral-950 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                        <path d="M12 22V12"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <path d="m7.5 4.27 9 5.15"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1">
                    <p className="leading-tight text-muted-foreground text-sm">
                      {"Outbound"}
                    </p>
                    <h3 className="font-medium leading-tight text-sm">
                      {"Orders Ready"}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    {"Ready Volume"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      {"18,797"}
                    </span>
                    <span className="font-medium tabular-nums text-sm text-teal-600">
                      {"+4.0% (+731)"}
                    </span>
                  </div>
                </div>
              </FramePanel>
              <FramePanel>
                <div className="flex gap-2.5 items-center">
                  <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-indigo-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-truck" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                        <path d="M15 18H9"></path>
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                        <circle cx="17" cy="18" r="2"></circle>
                        <circle cx="7" cy="18" r="2"></circle>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1">
                    <p className="leading-tight text-muted-foreground text-sm">
                      {"Promise"}
                    </p>
                    <h3 className="font-medium leading-tight text-sm">
                      {"Same-Day SLA"}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    {"Service Level"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      {"94.6%"}
                    </span>
                    <span className="font-medium tabular-nums text-sm text-teal-600">
                      {"+0.8 pts (from 93.8%)"}
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
                  <div className="flex flex-col gap-1">
                    <p className="leading-tight text-muted-foreground text-sm">
                      {"Inventory"}
                    </p>
                    <h3 className="font-medium leading-tight text-sm">
                      {"Stock Risk"}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    {"Blocked SKUs"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      {"34"}
                    </span>
                    <span className="font-medium tabular-nums text-sm text-teal-600">
                      {"5 fewer (since May 11)"}
                    </span>
                  </div>
                </div>
              </FramePanel>
              <FramePanel>
                <div className="flex gap-2.5 items-center">
                  <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-cyan-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-col gap-1">
                    <p className="leading-tight text-muted-foreground text-sm">
                      {"Policy"}
                    </p>
                    <h3 className="font-medium leading-tight text-sm">
                      {"AI Autopilot"}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5">
                  <p className="leading-tight text-muted-foreground text-sm">
                    {"Auto Resolved"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-medium tabular-nums text-xl tracking-tight">
                      {"70.2%"}
                    </span>
                    <span className="font-medium tabular-nums text-sm text-teal-600">
                      {"+4.6 pts (from 65.6%)"}
                    </span>
                  </div>
                </div>
              </FramePanel>
            </div>
          </Frame>
        </section>
        <section className="@5xl:grid-cols-2 gap-3 grid items-stretch min-w-0" aria-label="Fulfillment operations">
          <div className="flex min-w-0">
            <Frame className="h-full w-full">
              <FramePanel>
                <div className="flex gap-3 items-start justify-between mb-6">
                  <div className="flex flex-col gap-px">
                    <h3 className="font-semibold text-base">
                      {"Shift Performance"}
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Select>
                    <SelectTrigger className="h-8! w-28" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Today"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="today" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="gap-2 grid grid-cols-3">
                    <div className="flex flex-col items-start justify-start">
                      <div className="font-bold tabular-nums text-foreground text-xl">
                        {"495"}
                      </div>
                      <div className="font-medium mb-1 text-muted-foreground text-xs">
                        {"Orders Cleared"}
                      </div>
                      <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center tabular-nums text-emerald-500 text-xs">
                        <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        {"+5.8%"}
                      </span>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="font-bold tabular-nums text-foreground text-xl">
                        {"91.3%"}
                      </div>
                      <div className="font-medium mb-1 text-muted-foreground text-xs">
                        {"SLA Recovery"}
                      </div>
                      <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center tabular-nums text-emerald-500 text-xs">
                        <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        {"+2.2 pts"}
                      </span>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="font-bold tabular-nums text-foreground text-xl">
                        {"$133.8k"}
                      </div>
                      <div className="font-medium mb-1 text-muted-foreground text-xs">
                        {"Risk Exposure"}
                      </div>
                      <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center tabular-nums text-emerald-500 text-xs">
                        <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                          <path d="M16 17h6v-6"></path>
                          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                        </svg>
                        {"-9.4%"}
                      </span>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-medium text-foreground text-sm">
                        {"Pipeline Progress"}
                      </span>
                      <span className="font-semibold text-foreground text-xs">
                        {"76%"}
                      </span>
                    </div>
                    <Progress className="**:data-[slot=progress-track]:h-1 h-1!" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="76" aria-valuetext="76%" role="progressbar">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "76%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div>
                    <div className="font-medium mb-2.5 text-foreground text-sm">
                      {"Recent Activity"}
                    </div>
                    <ul className="space-y-2">
                      <li className="flex gap-2.5 items-center justify-between text-sm">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            {"Released priority wave to dock B"}
                          </span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Cleared"}
                        </Badge>
                      </li>
                      <li className="flex gap-2.5 items-center justify-between text-sm">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-sky-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            {"Carrier mix repriced for zone 6"}
                          </span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Review"}
                        </Badge>
                      </li>
                      <li className="flex gap-2.5 items-center justify-between text-sm">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-amber-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            {"Inventory hold isolated to 3 SKUs"}
                          </span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"Watch"}
                        </Badge>
                      </li>
                    </ul>
                  </div>
                </div>
              </FramePanel>
              <footer className="flex flex-row gap-2.5 items-center p-2! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                <Button className="flex-1" type="button" tabIndex="0">
                  {"Schedule"}
                </Button>
                <Button className="flex-1" type="button" tabIndex="0">
                  {"Full Report"}
                </Button>
              </footer>
            </Frame>
          </div>
          <div className="flex min-w-0">
            <div className="@container auto-rows-fr gap-3 grid h-full min-w-0 w-full">
              <Frame className="@container h-full w-full">
                <FramePanel>
                  <Tabs className="gap-4 h-full min-w-0 w-full" data-orientation="horizontal" activationDirection="none">
                    <div className="flex flex-wrap gap-3 items-center justify-between">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <h2 className="font-medium text-sm">
                          {"Capacity Allocation"}
                        </h2>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-full shrink-0 text-muted-foreground/70 transition-colors" type="button" aria-label="Capacity Allocation info" id="base-ui-_r_6_" baseUiTooltipTrigger="">
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
                          {"Week"}
                        </TabsTrigger>
                        <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                          {"Month"}
                        </TabsTrigger>
                        <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                          {"Year"}
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_a_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_7_">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-x-2 items-baseline">
                          <span className="font-medium text-[26px]">
                            {"86%"}
                          </span>
                          <span className="font-medium text-success text-xs">
                            {"+5.8%"}
                          </span>
                          <span className="text-muted-foreground/70 text-xs">
                            {"vs labor plan"}
                          </span>
                        </div>
                        <div className="flex h-7 items-stretch justify-between w-full" aria-label="Week capacity allocation is 86%" role="img">
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
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between mt-1">
                          <p>
                            <span className="text-muted-foreground/70 text-xs">
                              {"Queued Orders:"}
                            </span>
                            <span className="font-medium text-sm">
                              {"3,840 orders"}
                            </span>
                          </p>
                          <div className="flex gap-2 items-center">
                            <AvatarGroup>
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="Maya Singh" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="Leo Martins" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="Nora Albright" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                            </AvatarGroup>
                            <span className="text-muted-foreground text-xs whitespace-nowrap">
                              {"6 Members"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </FramePanel>
              </Frame>
              <style dangerouslySetInnerHTML={{ __html: "\n@keyframes dashboard-1-flow-reveal-up {\n  from {\n    clip-path: inset(100% 0 0 0);\n    opacity: 0.75;\n  }\n  to {\n    clip-path: inset(0 0 0 0);\n    opacity: 1;\n  }\n}\n\n.dashboard-1-flow-reveal-up {\n  animation: dashboard-1-flow-reveal-up 680ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dashboard-1-flow-reveal-up {\n    animation: none;\n    clip-path: none;\n    opacity: 1;\n  }\n}\n" }} />
              <Frame className="@container h-full w-full">
                <FramePanel className="pb-3.5! pe-5! ps-3.5! pt-5!">
                  <Tabs className="gap-6" data-orientation="horizontal" activationDirection="none">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-0.5 items-center min-w-0 ps-1.5">
                        <h2 className="font-medium text-sm">
                          {"Decision Flow"}
                        </h2>
                        <Tooltip>
                        <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground/70 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Decision Flow" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info text-sm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-icon="inline-start" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <TabsList className="@sm:w-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                        <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_f_" compositeItemActive="" aria-controls="base-ui-_r_i_">
                          {"Week"}
                        </TabsTrigger>
                        <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_g_">
                          {"Month"}
                        </TabsTrigger>
                        <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_h_">
                          {"Year"}
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_i_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_f_">
                      <div className="@sm:grid-cols-[8.25rem_minmax(0,1fr)] @sm:items-center gap-6 grid">
                        <div className="dashboard-1-flow-reveal-up relative shrink-0 size-[8.25rem]">
                          <ChartContainer>
                          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-square cn-chart flex justify-center size-[8.25rem] text-xs" data-chart="chart-_r_j_" aria-label="Decision Flow: 18.4k total for Week">
                            <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_j_] {\n  --color-autopilot: oklch(0.62 0.19 149);\n  --color-copilot: oklch(0.58 0.18 257);\n  --color-manual: oklch(0.72 0.16 78);\n  --color-reserve: oklch(0.7 0.04 260);\n}\n\n\n.dark [data-chart=chart-_r_j_] {\n  --color-autopilot: oklch(0.62 0.19 149);\n  --color-copilot: oklch(0.58 0.18 257);\n  --color-manual: oklch(0.72 0.16 78);\n  --color-reserve: oklch(0.7 0.04 260);\n}\n" }} />
                            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                <div className="recharts-wrapper" width="132" height="132" style={{position: "relative", cursor: "default", width: "132px", height: "132px"}}>
                                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "30"}}></div>
                                  <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="132" height="132" viewBox="0 0 132 132" style={{width: "100%", height: "100%", display: "block"}}>
                                    <title></title>
                                    <desc></desc>
                                    <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                    <defs>
                                      <clippath id="recharts1-clip">
                                        <rect x="2" y="2" height="128" width="128"></rect>
                                      </clippath>
                                    </defs>
                                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                      <g className="recharts-layer recharts-pie" tabIndex="0">
                                        <g className="recharts-layer">
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-autopilot)" name="Autopilot" color="oklch(0.62 0.19 149)" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_3r_" d={"M 28.1246,20.8618\n    A3,3,0,0,1,28.6137,16.5403\n    A62,62,0,0,1,111.1179,108.525\n    A3,3,0,0,1,106.7688,108.543\n  L100.5322,102.0351\n      A3,3,0,0,1,100.4963,97.9218\n      A47,47,0,0,0,38.0037,28.2481\n      A3,3,0,0,1,33.9185,27.7668Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-copilot)" name="Copilot" color="oklch(0.58 0.18 257)" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_3r_" d={"M 106.0201,109.248\n    A3,3,0,0,1,105.7411,113.5882\n    A62,62,0,0,1,15.1795,101.5144\n    A3,3,0,0,1,16.0473,97.2527\n  L23.6888,92.4719\n      A3,3,0,0,1,27.7231,93.2742\n      A47,47,0,0,0,95.7944,102.3496\n      A3,3,0,0,1,99.8981,102.6322Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-manual)" name="Manual" color="oklch(0.72 0.16 78)" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_3r_" d={"M 15.5095,96.3761\n    A3,3,0,0,1,11.317,95.2193\n    A62,62,0,0,1,7.8005,44.6267\n    A3,3,0,0,1,11.7927,42.901\n  L20.085,46.4345\n      A3,3,0,0,1,21.7344,50.2027\n      A47,47,0,0,0,24.3455,87.7692\n      A3,3,0,0,1,23.2332,91.7294Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-reserve)" name="Reserve Capacity" color="var(--muted)" tabIndex="-1" data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_3r_" d={"M 12.2041,41.9584\n    A3,3,0,0,1,10.7549,37.8578\n    A62,62,0,0,1,22.9977,21.3368\n    A3,3,0,0,1,27.3426,21.5297\n  L33.2561,28.3325\n      A3,3,0,0,1,33.0925,32.4426\n      A47,47,0,0,0,24.318,44.2834\n      A3,3,0,0,1,20.4334,45.6362Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
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
                          </ChartContainer>
                          <div className="absolute flex inset-0 items-center justify-center pointer-events-none" aria-hidden="true">
                            <div className="bg-background/90 border border-border/70 border-dashed flex flex-col items-center justify-center rounded-full size-[5.25rem]">
                              <span className="text-muted-foreground/70 text-xs">
                                {"Flow"}
                              </span>
                              <span className="font-semibold mt-0.5 text-sm">
                                {"18.4k"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul className="flex flex-1 flex-col min-w-0">
                          <li>
                            <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.62 0.19 149)"}}></span>
                                <span className="font-medium text-sm">
                                  {"Autopilot"}
                                </span>
                              </div>
                              <span className="font-medium text-sm">
                                {"9.1k"}
                              </span>
                              <span className="text-muted-foreground/70 text-right text-xs w-8">
                                {"49.5%"}
                              </span>
                            </div>
                            <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </li>
                          <li>
                            <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.58 0.18 257)"}}></span>
                                <span className="font-medium text-sm">
                                  {"Copilot"}
                                </span>
                              </div>
                              <span className="font-medium text-sm">
                                {"5.2k"}
                              </span>
                              <span className="text-muted-foreground/70 text-right text-xs w-8">
                                {"28.3%"}
                              </span>
                            </div>
                            <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </li>
                          <li>
                            <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.72 0.16 78)"}}></span>
                                <span className="font-medium text-sm">
                                  {"Manual"}
                                </span>
                              </div>
                              <span className="font-medium text-sm">
                                {"2.8k"}
                              </span>
                              <span className="text-muted-foreground/70 text-right text-xs w-8">
                                {"15.2%"}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </FramePanel>
              </Frame>
            </div>
          </div>
        </section>
        <section aria-label="Fulfillment exception queue">
          <Frame className="w-full" spacing="sm">
            <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold text-balance text-sm">
                  {"Exception Queue"}
                </div>
                <div className="text-muted-foreground text-pretty text-xs">
                  {"10 of 10 fulfillment records"}
                </div>
              </div>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"Add exception"}
              </Button>
            </header>
            <FramePanel className="bg-card p-0! shadow-none!">
              <div className="px-4 py-3">
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex flex-wrap gap-2 items-center">
                    <InputGroup className="min-w-52 sm:w-60" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_n_" placeholder="Search orders..." aria-label="Search orders" value="" />
                    </InputGroup>
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by order status" baseUiClickTrigger="" id="base-ui-_r_p_" aria-haspopup="dialog" aria-expanded="false">
                      <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                      {"Status"}
                    </PopoverTrigger>
                    </Popover>
                  </div>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Exception queue actions" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    {"Actions"}
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="relative">
                <DataGridProvider>
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_v_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridProvider>
                      <DataGridTableViewport style={{width: "calc(1222px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                        <DataGridProvider>
                        <DataGridTable style={{"--header-id-size": "35", "--col-id-size": "35", "--header-reference-size": "138", "--col-reference-size": "138", "--header-customer-size": "304", "--col-customer-size": "304", "--header-lane-size": "165", "--col-lane-size": "165", "--header-stage-size": "160", "--col-stage-size": "160", "--header-automation-size": "112", "--col-automation-size": "112", "--header-value-size": "120", "--col-value-size": "120", "--header-status-size": "142", "--col-status-size": "142", "--header-actions-size": "46", "--col-actions-size": "46", width: "calc(1222px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-id-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-reference-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-customer-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-lane-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-stage-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-automation-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-value-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="id" data-header-id="id" data-header-depth="0" style={{width: "calc(var(--header-id-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_10_" aria-checked="false" aria-label="Select all"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="reference" data-header-id="reference" data-header-depth="0" style={{width: "calc(var(--header-reference-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                    {"Order"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="customer" data-header-id="customer" data-header-depth="0" style={{width: "calc(var(--header-customer-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                    {"Customer"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lane" data-header-id="lane" data-header-depth="0" style={{width: "calc(var(--header-lane-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                    {"Lane"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="stage" data-header-id="stage" data-header-depth="0" style={{width: "calc(var(--header-stage-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                    {"Stage"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="automation" data-header-id="automation" data-header-depth="0" style={{width: "calc(var(--header-automation-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                    {"Automation"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="value" data-header-id="value" data-header-depth="0" style={{width: "calc(var(--header-value-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                    {"Value"}
                                    <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                    {"State"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="row-1004">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_26_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View order NSC-84763">
                                    {"NSC-84763"}
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      {"LAX-4"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Leo Martins"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Northline Studio" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View customer Northline Studio">
                                      {"Northline Studio"}
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs" title="returns@northline.example">
                                      {"returns@northline.example"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-lane-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 max-w-full min-w-0">
                                  <span className="block font-medium max-w-full min-w-0 text-foreground truncate" title="Los Angeles to Seattle">
                                    {"Los Angeles to Seattle"}
                                  </span>
                                  <span className="block max-w-full min-w-0 text-muted-foreground text-xs truncate" title="LAX-4">
                                    {"LAX-4"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                      <ItemMedia className="size-auto text-muted-foreground" variant="icon">
                                        <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                          <path d="M12 22V12"></path>
                                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                          <path d="m7.5 4.27 9 5.15"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      {"Packing"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                      <span className="bg-success block h-full rounded-full" style={{width: "82%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"82%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-automation-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Autopilot"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    {"$52,210"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Value hint for NSC-84763: Priority lane" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                    {"On Time"}
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    {"Due Today 19:45"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for NSC-84763" aria-haspopup="menu" id="base-ui-_r_2e_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="row-1001">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View order NSC-84721">
                                    {"NSC-84721"}
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      {"ORD-2"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Maya Singh"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Avery Outdoor" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-warning bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View customer Avery Outdoor">
                                      {"Avery Outdoor"}
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs" title="ops@averyoutdoor.example">
                                      {"ops@averyoutdoor.example"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-lane-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 max-w-full min-w-0">
                                  <span className="block font-medium max-w-full min-w-0 text-foreground truncate" title="Chicago to Austin">
                                    {"Chicago to Austin"}
                                  </span>
                                  <span className="block max-w-full min-w-0 text-muted-foreground text-xs truncate" title="ORD-2">
                                    {"ORD-2"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                      <ItemMedia className="size-auto text-muted-foreground" variant="icon">
                                        <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                          <path d="M12 22V12"></path>
                                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                          <path d="m7.5 4.27 9 5.15"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      {"Carrier tender"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                      <span className="bg-warning block h-full rounded-full" style={{width: "72%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"72%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-automation-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Copilot"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    {"$38,240"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Value hint for NSC-84721: Priority lane" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                    {"At Risk"}
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    {"42 min buffer"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for NSC-84721" aria-haspopup="menu" id="base-ui-_r_2o_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="row-1005">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2q_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View order NSC-84801">
                                    {"NSC-84801"}
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      {"ATL-2"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Maya Singh"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Urban Pantry" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-info bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View customer Urban Pantry">
                                      {"Urban Pantry"}
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs" title="supply@urbanpantry.example">
                                      {"supply@urbanpantry.example"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-lane-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 max-w-full min-w-0">
                                  <span className="block font-medium max-w-full min-w-0 text-foreground truncate" title="Atlanta to Miami">
                                    {"Atlanta to Miami"}
                                  </span>
                                  <span className="block max-w-full min-w-0 text-muted-foreground text-xs truncate" title="ATL-2">
                                    {"ATL-2"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                      <ItemMedia className="size-auto text-muted-foreground" variant="icon">
                                        <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                          <path d="M12 22V12"></path>
                                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                          <path d="m7.5 4.27 9 5.15"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      {"Cold chain"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                      <span className="bg-info block h-full rounded-full" style={{width: "48%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"48%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-automation-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Copilot"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    {"$30,440"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Value hint for NSC-84801: Priority lane" id="base-ui-_r_2u_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                    {"Delayed"}
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    {"9 min buffer"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for NSC-84801" aria-haspopup="menu" id="base-ui-_r_32_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="row-1008">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_34_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View order NSC-84842">
                                    {"NSC-84842"}
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      {"BNA-2"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Nora Albright"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Casa Verde" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-info bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View customer Casa Verde">
                                      {"Casa Verde"}
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs" title="storeops@casaverde.example">
                                      {"storeops@casaverde.example"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-lane-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 max-w-full min-w-0">
                                  <span className="block font-medium max-w-full min-w-0 text-foreground truncate" title="Nashville to Charlotte">
                                    {"Nashville to Charlotte"}
                                  </span>
                                  <span className="block max-w-full min-w-0 text-muted-foreground text-xs truncate" title="BNA-2">
                                    {"BNA-2"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                      <ItemMedia className="size-auto text-muted-foreground" variant="icon">
                                        <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                          <path d="M12 22V12"></path>
                                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                          <path d="m7.5 4.27 9 5.15"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      {"Dock queue"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                      <span className="bg-info block h-full rounded-full" style={{width: "31%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"31%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-automation-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Manual"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    {"$22,750"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Value hint for NSC-84842: Standard lane" id="base-ui-_r_38_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                    {"Delayed"}
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    {"51 min overdue"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for NSC-84842" aria-haspopup="menu" id="base-ui-_r_3c_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="row-1002">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3e_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 min-w-0">
                                  <a className="font-medium hover:underline text-primary text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View order NSC-84734">
                                    {"NSC-84734"}
                                  </a>
                                  <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="shrink-0">
                                      {"DFW-1"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Leo Martins"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Field & Frame" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" href="#" aria-label="View customer Field & Frame">
                                      {"Field & Frame"}
                                    </a>
                                    <div className="line-clamp-1 text-muted-foreground text-xs" title="priority@fieldframe.example">
                                      {"priority@fieldframe.example"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-lane-size) * 1px)"}}>
                                <div className="flex flex-col gap-0.5 max-w-full min-w-0">
                                  <span className="block font-medium max-w-full min-w-0 text-foreground truncate" title="Dallas to Phoenix">
                                    {"Dallas to Phoenix"}
                                  </span>
                                  <span className="block max-w-full min-w-0 text-muted-foreground text-xs truncate" title="DFW-1">
                                    {"DFW-1"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Item className="border-0 p-0 w-auto" variant="default" size="default">
                                      <ItemMedia className="size-auto text-muted-foreground" variant="icon">
                                        <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                          <path d="M12 22V12"></path>
                                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                          <path d="m7.5 4.27 9 5.15"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <span className="font-medium min-w-0 text-foreground truncate">
                                      {"Pick wave"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                      <span className="bg-success block h-full rounded-full" style={{width: "64%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"64%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-automation-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Autopilot"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <span className="font-medium tabular-nums text-foreground">
                                    {"$21,480"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Value hint for NSC-84734: Standard lane" id="base-ui-_r_3i_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <div className="flex flex-col gap-1 items-start min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                    {"On Time"}
                                  </Badge>
                                  <span className="max-w-full text-muted-foreground text-xs truncate">
                                    {"Due Today 16:30"}
                                  </span>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for NSC-84734" aria-haspopup="menu" id="base-ui-_r_3m_" aria-expanded="false">
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
                          </DataGridProvider>
                        </DataGridTable>
                        </DataGridProvider>
                      </DataGridTableViewport>
                      </DataGridProvider>
                    </div>
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
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_3o_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      {"5"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_3o_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    {"1 - 5 of 10"}
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
        </section>
      </div>
    </main>
  )
}
