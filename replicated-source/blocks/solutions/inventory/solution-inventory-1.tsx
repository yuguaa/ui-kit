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
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <div className="max-w-[1320px] md:p-3 mx-auto p-2.5 w-full">
        <div className="@container w-full">
          <header className="flex flex-wrap gap-2 items-center justify-between min-h-9 pb-1 shrink-0 w-full" aria-label="Inventory command header">
            <Breadcrumb className="min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="hidden md:inline-flex">
                  <BreadcrumbLink href="#">
                    {"Home"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="hidden md:inline-flex">
                  <BreadcrumbLink href="#">
                    {"Operations"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="min-w-0">
                  <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                    {"Inventory"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-wrap gap-2 items-center justify-end shrink-0">
              <Select>
              <SelectTrigger className="w-[150px]" type="button" tabIndex={0} id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" extracted="1">
                <svg className="lucide lucide-calendar-days size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
                <SelectValue>
                  {"Last 30 days"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="30d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="hidden sm:block">
                  {"New PO"}
                </span>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More inventory actions" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </header>
          <div className="flex flex-col gap-3 mt-3">
            <Frame className="@container w-full">
              <header className="flex-col gap-3 grid grid-cols-[minmax(0,1fr)_auto] items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="capitalize font-semibold text-base text-foreground tracking-tight">
                    {"Inventory Snapshot"}
                  </div>
                  <div className="text-muted-foreground text-pretty text-xs">
                    {"Generated Jun 25, 2026 from Main Warehouse feed."}
                  </div>
                </div>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                  {"Generate report"}
                </Button>
              </header>
              <FramePanel className="auto-rows-fr grid grid-cols-2 lg:grid-cols-4 p-0!">
                <div className="border-b border-border border-r flex flex-col gap-5 justify-between lg:border-b-0 min-h-[9.5rem] min-w-0 p-5">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold leading-4 text-foreground text-sm truncate">
                      {"Stock Value"}
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      {"On-hand cost"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                        {"$847K"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        {"5.1%"}
                      </Badge>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {"Last month:"}
                      <span className="font-medium tabular-nums text-foreground">
                        {"$806K"}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="border-b border-border flex flex-col gap-5 justify-between lg:border-b-0 lg:border-r min-h-[9.5rem] min-w-0 p-5">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold leading-4 text-foreground text-sm truncate">
                      {"Total SKUs"}
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      {"Active catalog"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                        {"1,284"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        {"3.4%"}
                      </Badge>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {"Last month:"}
                      <span className="font-medium tabular-nums text-foreground">
                        {"1,242"}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="border-border border-r flex flex-col gap-5 justify-between min-h-[9.5rem] min-w-0 p-5">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold leading-4 text-foreground text-sm truncate">
                      {"Low Stock"}
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      {"Below reorder"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                        {"37"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        {"8.8%"}
                      </Badge>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {"Last month:"}
                      <span className="font-medium tabular-nums text-foreground">
                        {"34"}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="border-border flex flex-col gap-5 justify-between min-h-[9.5rem] min-w-0 p-5">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-semibold leading-4 text-foreground text-sm truncate">
                      {"Days Cover"}
                    </span>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      {"Average runway"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-semibold leading-none tabular-nums text-3xl text-foreground tracking-tight">
                        {"68"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                          <path d="M12 5v14"></path>
                          <path d="m19 12-7 7-7-7"></path>
                        </svg>
                        {"2.9%"}
                      </Badge>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {"Last month:"}
                      <span className="font-medium tabular-nums text-foreground">
                        {"70"}
                      </span>
                    </span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <Frame className="h-full w-full">
              <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="capitalize font-semibold text-base text-foreground tracking-tight">
                    {"Stock Health"}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {"1,284 SKUs by availability"}
                  </div>
                </div>
              </header>
              <FramePanel className="flex flex-1 flex-col gap-3 justify-center">
                <div className="bg-muted flex gap-0.5 h-2.5 items-center overflow-hidden rounded-full w-full">
                  <div className="bg-emerald-500 h-full" style={{width: "92.1%"}}></div>
                  <div className="bg-amber-400 h-full" style={{width: "2.9%"}}></div>
                  <div className="bg-destructive h-full" style={{width: "0.9%"}}></div>
                  <div className="bg-sky-500 h-full" style={{width: "4.1%"}}></div>
                </div>
                <div className="gap-x-4 gap-y-2.5 grid grid-cols-2 sm:grid-cols-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1.5 items-center">
                      <span className="bg-emerald-500 inline-block rounded-full size-2" aria-hidden="true"></span>
                      <span className="text-muted-foreground text-xs">
                        {"In stock"}
                      </span>
                    </div>
                    <span className="font-semibold tabular-nums text-base text-foreground">
                      {"1,183"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1.5 items-center">
                      <span className="bg-amber-400 inline-block rounded-full size-2" aria-hidden="true"></span>
                      <span className="text-muted-foreground text-xs">
                        {"Low"}
                      </span>
                    </div>
                    <span className="font-semibold tabular-nums text-base text-foreground">
                      {"37"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1.5 items-center">
                      <span className="bg-destructive inline-block rounded-full size-2" aria-hidden="true"></span>
                      <span className="text-muted-foreground text-xs">
                        {"Out"}
                      </span>
                    </div>
                    <span className="font-semibold tabular-nums text-base text-foreground">
                      {"12"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1.5 items-center">
                      <span className="bg-sky-500 inline-block rounded-full size-2" aria-hidden="true"></span>
                      <span className="text-muted-foreground text-xs">
                        {"Backordered"}
                      </span>
                    </div>
                    <span className="font-semibold tabular-nums text-base text-foreground">
                      {"52"}
                    </span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <div className="@4xl:grid-cols-3 gap-3 grid grid-cols-1 items-stretch">
              <div className="@4xl:col-span-2 min-w-0">
                <Frame className="h-full min-w-0 w-full">
                  <header className="flex flex-col gap-2 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="capitalize font-semibold text-base text-foreground tracking-tight">
                        {"Inventory Pace"}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {"Available units against reserve buffer"}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                        {"Available"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                        {"Reserve"}
                      </Badge>
                    </div>
                  </header>
                  <FramePanel className="flex flex-1 flex-col">
                    <ChartContainer>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[320px] justify-center min-w-0 text-xs w-full" data-chart="chart-_r_8_">
                      <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_8_] {\n  --color-available: var(--color-success);\n  --color-reserved: var(--color-info);\n}\n\n\n.dark [data-chart=chart-_r_8_] {\n  --color-available: var(--color-success);\n  --color-reserved: var(--color-info);\n}\n" }} />
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width={799} height={320} style={{position: "relative", cursor: "default", width: "799px", height: "320px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" role="application" tabIndex={0} width={799} height={320} viewBox="0 0 799 320" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={6} y={16} width={787} height={274} x1={6} y1={290} x2={793} y2={290}></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={6} y={16} width={787} height={274} x1={6} y1={217.47058823529414} x2={793} y2={217.47058823529414}></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={6} y={16} width={787} height={274} x1={6} y1={144.94117647058823} x2={793} y2={144.94117647058823}></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={6} y={16} width={787} height={274} x1={6} y1={72.41176470588236} x2={793} y2={72.41176470588236}></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={6} y={16} width={787} height={274} x1={6} y1={16} x2={793} y2={16}></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                              <defs>
                                <clippath id="recharts1-clip">
                                  <rect x={6} y={16} height={274} width={787}></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <pattern id="inventory-pace-crosshatch-available" x={0} y={0} width={8} height={8} patternUnits="userSpaceOnUse">
                                  <path d="M0,8 L8,0" stroke="var(--color-success)" strokeWidth={0.8} opacity={0.4}></path>
                                  <path d="M0,0 L8,8" stroke="var(--color-success)" strokeWidth={0.8} opacity={0.2}></path>
                                </pattern>
                                <pattern id="inventory-pace-crosshatch-reserved" x={0} y={0} width={8} height={8} patternUnits="userSpaceOnUse">
                                  <path d="M0,8 L8,0" stroke="var(--color-info)" strokeWidth={0.8} opacity={0.4}></path>
                                  <path d="M0,0 L8,8" stroke="var(--color-info)" strokeWidth={0.8} opacity={0.2}></path>
                                </pattern>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_9_)">
                                      <g className="recharts-layer">
                                        <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#inventory-pace-crosshatch-reserved)" fillOpacity={0.5} height={274} stroke="none" width={787} id="recharts-area-_r_9_" d="M6,229.72C27.861,225.878,49.722,222.035,71.583,222.628C93.444,223.221,115.306,228.25,137.167,226.819C159.028,225.388,180.889,217.497,202.75,216.504C224.611,215.51,246.472,221.414,268.333,220.694C290.194,219.974,312.056,212.629,333.917,212.313C355.778,211.997,377.639,218.709,399.5,217.793C421.361,216.877,443.222,208.332,465.083,207.478C486.944,206.623,508.806,213.458,530.667,213.28C552.528,213.102,574.389,205.911,596.25,205.221C618.111,204.531,639.972,210.342,661.833,210.379C683.694,210.416,705.556,204.679,727.417,203.287C749.278,201.895,771.139,204.847,793,207.8L793,290C771.139,290,749.278,290,727.417,290C705.556,290,683.694,290,661.833,290C639.972,290,618.111,290,596.25,290C574.389,290,552.528,290,530.667,290C508.806,290,486.944,290,465.083,290C443.222,290,421.361,290,399.5,290C377.639,290,355.778,290,333.917,290C312.056,290,290.194,290,268.333,290C246.472,290,224.611,290,202.75,290C180.889,290,159.028,290,137.167,290C115.306,290,93.444,290,71.583,290C49.722,290,27.861,290,6,290Z"></path>
                                        <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.5} height={274} stroke="var(--color-reserved)" width={787} d="M6,229.72C27.861,225.878,49.722,222.035,71.583,222.628C93.444,223.221,115.306,228.25,137.167,226.819C159.028,225.388,180.889,217.497,202.75,216.504C224.611,215.51,246.472,221.414,268.333,220.694C290.194,219.974,312.056,212.629,333.917,212.313C355.778,211.997,377.639,218.709,399.5,217.793C421.361,216.877,443.222,208.332,465.083,207.478C486.944,206.623,508.806,213.458,530.667,213.28C552.528,213.102,574.389,205.911,596.25,205.221C618.111,204.531,639.972,210.342,661.833,210.379C683.694,210.416,705.556,204.679,727.417,203.287C749.278,201.895,771.139,204.847,793,207.8"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_a_)">
                                      <g className="recharts-layer">
                                        <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#inventory-pace-crosshatch-available)" fillOpacity={0.5} height={274} stroke="none" width={787} id="recharts-area-_r_a_" d="M6,145.586C27.861,148.425,49.722,151.264,71.583,147.198C93.444,143.131,115.306,132.158,137.167,129.468C159.028,126.778,180.889,132.372,202.75,130.113C224.611,127.854,246.472,117.743,268.333,116.252C290.194,114.76,312.056,121.888,333.917,119.798C355.778,117.707,377.639,106.399,399.5,104.647C421.361,102.895,443.222,110.699,465.083,108.838C486.944,106.976,508.806,95.45,530.667,93.042C552.528,90.635,574.389,97.345,596.25,97.555C618.111,97.765,639.972,91.475,661.833,93.042C683.694,94.61,705.556,104.036,727.417,105.936C749.278,107.837,771.139,102.213,793,96.588L793,207.8C771.139,204.847,749.278,201.895,727.417,203.287C705.556,204.679,683.694,210.416,661.833,210.379C639.972,210.342,618.111,204.531,596.25,205.221C574.389,205.911,552.528,213.102,530.667,213.28C508.806,213.458,486.944,206.623,465.083,207.478C443.222,208.332,421.361,216.877,399.5,217.793C377.639,218.709,355.778,211.997,333.917,212.313C312.056,212.629,290.194,219.974,268.333,220.694C246.472,221.414,224.611,215.51,202.75,216.504C180.889,217.497,159.028,225.388,137.167,226.819C115.306,228.25,93.444,223.221,71.583,222.628C49.722,222.035,27.861,225.878,6,229.72Z"></path>
                                        <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.5} height={274} stroke="var(--color-available)" width={787} d="M6,145.586C27.861,148.425,49.722,151.264,71.583,147.198C93.444,143.131,115.306,132.158,137.167,129.468C159.028,126.778,180.889,132.372,202.75,130.113C224.611,127.854,246.472,117.743,268.333,116.252C290.194,114.76,312.056,121.888,333.917,119.798C355.778,117.707,377.639,106.399,399.5,104.647C421.361,102.895,443.222,110.699,465.083,108.838C486.944,106.976,508.806,95.45,530.667,93.042C552.528,90.635,574.389,97.345,596.25,97.555C618.111,97.765,639.972,91.475,661.833,93.042C683.694,94.61,705.556,104.036,727.417,105.936C749.278,107.837,771.139,102.213,793,96.588"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_500" tabIndex={-1}>
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
                              </g>
                              <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                                <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={71.58333333333333} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={71.58333333333333} dy="0.71em">
                                        {"Jun 3"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={137.16666666666666} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={137.16666666666666} dy="0.71em">
                                        {"Jun 5"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={202.75} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={202.75} dy="0.71em">
                                        {"Jun 7"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={268.3333333333333} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={268.3333333333333} dy="0.71em">
                                        {"Jun 9"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={333.91666666666663} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={333.91666666666663} dy="0.71em">
                                        {"Jun 11"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={399.5} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={399.5} dy="0.71em">
                                        {"Jun 13"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={465.0833333333333} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={465.0833333333333} dy="0.71em">
                                        {"Jun 15"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={530.6666666666666} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={530.6666666666666} dy="0.71em">
                                        {"Jun 17"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={596.25} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={596.25} dy="0.71em">
                                        {"Jun 19"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={661.8333333333333} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={661.8333333333333} dy="0.71em">
                                        {"Jun 21"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={727.4166666666666} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={727.4166666666666} dy="0.71em">
                                        {"Jun 23"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={787} stroke="none" x={779.5703125} y={304} textAnchor="middle" fill="#666">
                                      <tspan x={779.5703125} dy="0.71em">
                                        {"Jun 25"}
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
                    </ChartContainer>
                  </FramePanel>
                </Frame>
              </div>
              <div>
                <Frame className="h-full w-full">
                  <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="capitalize font-semibold text-base text-foreground tracking-tight">
                        {"Low Stock"}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {"Fastest sellers below reorder point"}
                      </div>
                    </div>
                    <Button type="button" tabIndex={0}>
                      {"View all"}
                    </Button>
                  </header>
                  <FramePanel className="flex flex-1 flex-col p-0!">
                    <ul className="flex flex-col">
                      <li>
                        <a className="flex focus-visible:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 gap-2.5 group hover:bg-muted/40 items-center outline-none px-3.5 py-2.5 transition-colors" href="#sku-00574" aria-label="View Lumen Studio Speakers (SKU-00574)">
                          <div className="bg-muted overflow-hidden relative rounded-md shrink-0">
                            <img className="duration-300 group-hover:scale-105 object-cover size-9 transition-transform" alt="Lumen Studio Speakers" width={36} height={36} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=160&h=160&q=80" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold group-hover:text-primary leading-tight text-foreground text-sm transition-colors truncate">
                              {"Lumen Studio Speakers"}
                            </p>
                            <p className="leading-tight tabular-nums text-muted-foreground text-xs truncate">
                              {"18 on hand"}
                              <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                              {"reorder at 60"}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"31% sell-through"}
                          </Badge>
                        </a>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <a className="flex focus-visible:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 gap-2.5 group hover:bg-muted/40 items-center outline-none px-3.5 py-2.5 transition-colors" href="#sku-00533" aria-label="View Brava Espresso Machine (SKU-00533)">
                          <div className="bg-muted overflow-hidden relative rounded-md shrink-0">
                            <img className="duration-300 group-hover:scale-105 object-cover size-9 transition-transform" alt="Brava Espresso Machine" width={36} height={36} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=160&h=160&q=80" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold group-hover:text-primary leading-tight text-foreground text-sm transition-colors truncate">
                              {"Brava Espresso Machine"}
                            </p>
                            <p className="leading-tight tabular-nums text-muted-foreground text-xs truncate">
                              {"24 on hand"}
                              <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                              {"reorder at 80"}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"22% sell-through"}
                          </Badge>
                        </a>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <a className="flex focus-visible:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 gap-2.5 group hover:bg-muted/40 items-center outline-none px-3.5 py-2.5 transition-colors" href="#sku-00560" aria-label="View Aurora Pro Headphones (SKU-00560)">
                          <div className="bg-muted overflow-hidden relative rounded-md shrink-0">
                            <img className="duration-300 group-hover:scale-105 object-cover size-9 transition-transform" alt="Aurora Pro Headphones" width={36} height={36} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=160&h=160&q=80" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold group-hover:text-primary leading-tight text-foreground text-sm transition-colors truncate">
                              {"Aurora Pro Headphones"}
                            </p>
                            <p className="leading-tight tabular-nums text-muted-foreground text-xs truncate">
                              {"0 on hand"}
                              <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                              {"reorder at 50"}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                              <path d="M16 17h6v-6"></path>
                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                            </svg>
                            {"Stockout"}
                          </Badge>
                        </a>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <a className="flex focus-visible:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 gap-2.5 group hover:bg-muted/40 items-center outline-none px-3.5 py-2.5 transition-colors" href="#sku-00604" aria-label="View Pace Smart Lamp (SKU-00604)">
                          <div className="bg-muted overflow-hidden relative rounded-md shrink-0">
                            <img className="duration-300 group-hover:scale-105 object-cover size-9 transition-transform" alt="Pace Smart Lamp" width={36} height={36} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=160&h=160&q=80" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold group-hover:text-primary leading-tight text-foreground text-sm transition-colors truncate">
                              {"Pace Smart Lamp"}
                            </p>
                            <p className="leading-tight tabular-nums text-muted-foreground text-xs truncate">
                              {"31 on hand"}
                              <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                              {"reorder at 70"}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"18% sell-through"}
                          </Badge>
                        </a>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <a className="flex focus-visible:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 gap-2.5 group hover:bg-muted/40 items-center outline-none px-3.5 py-2.5 transition-colors" href="#sku-00591" aria-label="View Ceramic Table Set (SKU-00591)">
                          <div className="bg-muted overflow-hidden relative rounded-md shrink-0">
                            <img className="duration-300 group-hover:scale-105 object-cover size-9 transition-transform" alt="Ceramic Table Set" width={36} height={36} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=160&h=160&q=80" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold group-hover:text-primary leading-tight text-foreground text-sm transition-colors truncate">
                              {"Ceramic Table Set"}
                            </p>
                            <p className="leading-tight tabular-nums text-muted-foreground text-xs truncate">
                              {"42 on hand"}
                              <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                              {"reorder at 90"}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                              <path d="M16 17h6v-6"></path>
                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                            </svg>
                            {"12% sell-through"}
                          </Badge>
                        </a>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <a className="flex focus-visible:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 gap-2.5 group hover:bg-muted/40 items-center outline-none px-3.5 py-2.5 transition-colors" href="#sku-00622" aria-label="View Hinoki Care Duo (SKU-00622)">
                          <div className="bg-muted overflow-hidden relative rounded-md shrink-0">
                            <img className="duration-300 group-hover:scale-105 object-cover size-9 transition-transform" alt="Hinoki Care Duo" width={36} height={36} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=160&h=160&q=80" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold group-hover:text-primary leading-tight text-foreground text-sm transition-colors truncate">
                              {"Hinoki Care Duo"}
                            </p>
                            <p className="leading-tight tabular-nums text-muted-foreground text-xs truncate">
                              {"47 on hand"}
                              <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                              {"reorder at 75"}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"9% sell-through"}
                          </Badge>
                        </a>
                      </li>
                    </ul>
                  </FramePanel>
                </Frame>
              </div>
            </div>
            <Frame className="w-full">
              <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-0.5">
                  <div className="capitalize font-semibold text-base text-foreground tracking-tight">
                    {"Stock By SKU"}
                  </div>
                  <div className="text-muted-foreground text-pretty text-xs">
                    {"Every SKU tracked across Main Warehouse, East DC, and Store-Brooklyn"}
                  </div>
                </div>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  {"Export"}
                </Button>
              </header>
              <FramePanel className="p-0 shadow-none!">
                <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
                  <Tabs data-orientation="horizontal" activationDirection="none">
                    <TabsList className="gap-5" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                      <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_b_" compositeItemActive="">
                        <span>
                          {"All SKUs"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.6rem] text-primary-foreground transition-shadow">
                          {"8"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_c_">
                        <span>
                          {"In stock"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.6rem] text-secondary-foreground transition-shadow">
                          {"2"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_d_">
                        <span>
                          {"Low stock"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.6rem] text-secondary-foreground transition-shadow">
                          {"4"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_e_">
                        <span>
                          {"Out of stock"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.6rem] text-secondary-foreground transition-shadow">
                          {"1"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_f_">
                        <span>
                          {"Backordered"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.6rem] text-secondary-foreground transition-shadow">
                          {"1"}
                        </Badge>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="relative">
                  <DataGridProvider>
                  <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_h_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                      <div role="presentation" style={{minWidth: "fit-content"}}>
                        <DataGridProvider>
                        <DataGridTableViewport>
                          <DataGridProvider>
                          <DataGridTable>
                            <colgroup>
                              <col style={{width: "280px"}} />
                              <col style={{width: "220px"}} />
                              <col style={{width: "130px"}} />
                              <col style={{width: "130px"}} />
                              <col style={{width: "140px"}} />
                              <col style={{width: "50px"}} />
                            </colgroup>
                            <thead>
                              <tr className="[&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="product" data-header-id="product" data-header-depth="0" style={{width: "280px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                      {"SKU"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="category" data-header-id="category" data-header-depth="0" style={{width: "220px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                      {"Category"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="stock" data-header-id="stock" data-header-depth="0" style={{width: "130px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                      {"On hand"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="cover" data-header-id="cover" data-header-depth="0" style={{width: "130px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                      {"Days of cover"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "140px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                      {"Status"}
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 pr-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "50px"}}></th>
                              </tr>
                            </thead>
                            <DataGridProvider>
                            <DataGridTableBody>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="0">
                                <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                                  <div className="flex gap-3 items-center min-w-0">
                                    <div className="bg-muted overflow-hidden relative rounded-lg shrink-0">
                                      <img className="h-[42px] object-cover w-[42px]" alt="Auralite Studio Pro" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=120&h=120&q=80" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                        {"Auralite Studio Pro"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <span className="font-mono">
                                          {"SKU-00482"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          {"Apex Manufacturing"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-wrap gap-1 max-w-[220px]">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                      {"Studio"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border-0 border-transparent dark:bg-cyan-950/50 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-cyan-800 text-xs transition-shadow">
                                      {"Audio"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-purple-100 border-0 border-transparent dark:bg-purple-950/50 dark:text-purple-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-purple-800 text-xs transition-shadow">
                                      {"Premium"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      {"412"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"reorder at 120"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"52d"}
                                  </span>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"In stock"}
                                  </Badge>
                                </td>
                                <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Auralite Studio Pro" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                                <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                                  <div className="flex gap-3 items-center min-w-0">
                                    <div className="bg-muted overflow-hidden relative rounded-lg shrink-0">
                                      <img className="h-[42px] object-cover w-[42px]" alt="Countertop Wireless Max" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1693895592595-9171d91a0f22?auto=format&fit=crop&w=120&h=120&q=80" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                        {"Countertop Wireless Max"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <span className="font-mono">
                                          {"SKU-00518"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          {"Northwind Logistics"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-wrap gap-1 max-w-[220px]">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                      {"Wireless"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border-0 border-transparent dark:bg-cyan-950/50 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-cyan-800 text-xs transition-shadow">
                                      {"Audio"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-slate-100 border-0 border-transparent dark:bg-slate-900 dark:text-slate-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-slate-800 text-xs transition-shadow">
                                      {"Core"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium tabular-nums text-foreground text-sm">
                                      {"286"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"reorder at 100"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"38d"}
                                  </span>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"In stock"}
                                  </Badge>
                                </td>
                                <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Countertop Wireless Max" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                                <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                                  <div className="flex gap-3 items-center min-w-0">
                                    <div className="bg-muted overflow-hidden relative rounded-lg shrink-0">
                                      <img className="h-[42px] object-cover w-[42px]" alt="Signal Orange Edition" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1609788994700-73eda149ffb8?auto=format&fit=crop&w=120&h=120&q=80" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                        {"Signal Orange Edition"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <span className="font-mono">
                                          {"SKU-00533"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          {"Cobalt Supply Co"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-wrap gap-1 max-w-[220px]">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                      {"Wireless"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-100 border-0 border-transparent dark:bg-rose-950/50 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-rose-800 text-xs transition-shadow">
                                      {"Limited"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-semibold tabular-nums text-sm text-warning-foreground">
                                      {"24"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"reorder at 80"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"6d"}
                                  </span>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"Low stock"}
                                  </Badge>
                                </td>
                                <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Signal Orange Edition" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                                <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                                  <div className="flex gap-3 items-center min-w-0">
                                    <div className="bg-muted overflow-hidden relative rounded-lg shrink-0">
                                      <img className="h-[42px] object-cover w-[42px]" alt="Rose Cloud Wireless" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=120&h=120&q=80" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                        {"Rose Cloud Wireless"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <span className="font-mono">
                                          {"SKU-00560"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          {"Meridian Distribution"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-wrap gap-1 max-w-[220px]">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                      {"Wireless"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border-0 border-transparent dark:bg-cyan-950/50 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-cyan-800 text-xs transition-shadow">
                                      {"Audio"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-pink-100 border-0 border-transparent dark:bg-pink-950/50 dark:text-pink-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-pink-800 text-xs transition-shadow">
                                      {"Seasonal"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-semibold tabular-nums text-destructive-foreground text-sm">
                                      {"0"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"reorder at 50"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"-"}
                                  </span>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"Out of stock"}
                                  </Badge>
                                </td>
                                <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Rose Cloud Wireless" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="4">
                                <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                                  <div className="flex gap-3 items-center min-w-0">
                                    <div className="bg-muted overflow-hidden relative rounded-lg shrink-0">
                                      <img className="h-[42px] object-cover w-[42px]" alt="Tabletop Monitor One" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1677086813101-496781a0f327?auto=format&fit=crop&w=120&h=120&q=80" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="cursor-pointer font-medium hover:text-primary text-foreground text-sm truncate">
                                        {"Tabletop Monitor One"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <span className="font-mono">
                                          {"SKU-00574"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          {"Acme Components"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-wrap gap-1 max-w-[220px]">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                      {"Monitor"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-blue-100 border-0 border-transparent dark:bg-blue-950/50 dark:text-blue-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-blue-800 text-xs transition-shadow">
                                      {"Desktop"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-purple-100 border-0 border-transparent dark:bg-purple-950/50 dark:text-purple-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-purple-800 text-xs transition-shadow">
                                      {"Premium"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-semibold tabular-nums text-sm text-warning-foreground">
                                      {"18"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"reorder at 60"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <span className="tabular-nums text-foreground text-sm">
                                    {"4d"}
                                  </span>
                                </td>
                                <td className="align-middle px-3 py-2">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"Low stock"}
                                  </Badge>
                                </td>
                                <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Tabletop Monitor One" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
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
                  </DataGridScrollArea>
                  </DataGridProvider>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <DataGridProvider>
                  <DataGridPagination>
                    <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                      <div className="text-muted-foreground text-sm">
                        {"Rows per page"}
                      </div>
                      <Select>
                      <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_1b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                        <SelectValue>
                          {"5"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_1b_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                      <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                        {"1 - 5 of 8"}
                      </div>
                      <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                        <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex={0} disabled>
                          <span className="sr-only">
                            {"Go to previous page"}
                          </span>
                          <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </Button>
                        <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 1" aria-current="page">
                          {"1"}
                        </Button>
                        <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 2">
                          {"2"}
                        </Button>
                        <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex={0}>
                          <span className="sr-only">
                            {"Go to next page"}
                          </span>
                          <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </DataGridPagination>
                  </DataGridProvider>
                </footer>
              </FramePanel>
            </Frame>
          </div>
        </div>
      </div>
    </div>
  )
}
