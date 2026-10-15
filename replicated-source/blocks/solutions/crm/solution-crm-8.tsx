import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
} from "@/registry-neui/bases/radix/neui/kanban"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
  ProgressLabel,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Forecast call"}
      </h1>
      <div className="bg-background flex flex-col h-full min-h-0 min-w-0 w-full">
        <header className="flex flex-col gap-4 lg:pt-4 lg:px-4 pb-4 pt-3 px-3 shrink-0">
          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-2 items-center min-w-0">
              <IconTile className="max-sm:hidden" variant="elevated" size="sm" aria-hidden="true">
                <svg className="lucide lucide-chart-line size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChartLineIcon" tabler="IconChartLine" hugeicons="Analytics01Icon" phosphor="ChartLineIcon" remixicon="RiLineChartLine" aria-hidden="true">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </IconTile>
              <h2 className="font-semibold shrink-0 text-base">
                {"Q3 Forecast"}
              </h2>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <p className="min-w-0 tabular-nums text-muted-foreground text-sm truncate">
                {"Team call, ends Sep 30"}
              </p>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Undo" id="base-ui-_r_1_" baseUiTooltipTrigger="" extracted="1">
                <svg className="lucide lucide-undo-2 lucide-undo2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="ArrowTurnBackwardIcon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                  <path d="M9 14 4 9l5-5"></path>
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="max-sm:sr-only">
                  {"New deal"}
                </span>
              </Button>
            </div>
          </div>
          <section className="gap-x-12 gap-y-4 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] md:items-end" aria-label="Q3 call">
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center">
                <p className="font-semibold lg:text-3xl tabular-nums text-2xl tracking-tight">
                  {"$404K"}
                  <span className="font-medium text-muted-foreground">
                    {"called of"}
                  </span>
                  {"$600K"}
                </p>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                  <span className="[&_svg]:size-3 flex">
                    <svg className="lucide lucide-trending-up size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </span>
                  {"Gap covered by best case"}
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-sm">
                <span className="shrink-0">
                  <span className="font-medium tabular-nums text-foreground">
                    {"67%"}
                  </span>
                  {"attainment"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="shrink-0">
                  {"Week 2 of 13"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <dl className="flex flex-wrap gap-x-4 gap-y-1 items-center text-sm">
                <div className="flex gap-1.5 items-center">
                  <span className="bg-emerald-500 h-2 inline-block rounded-full shrink-0 w-3.5" aria-hidden="true"></span>
                  <dt className="text-muted-foreground">
                    {"Won"}
                  </dt>
                  <dd className="font-medium tabular-nums">
                    {"$34K"}
                  </dd>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="bg-blue-600 h-2 inline-block rounded-full shrink-0 w-3.5" aria-hidden="true"></span>
                  <dt className="text-muted-foreground">
                    {"Commit"}
                  </dt>
                  <dd className="font-medium tabular-nums">
                    {"$370K"}
                  </dd>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="bg-blue-600/60 h-2 inline-block rounded-full shrink-0 w-3.5" aria-hidden="true"></span>
                  <dt className="text-muted-foreground">
                    {"Best case"}
                  </dt>
                  <dd className="font-medium tabular-nums">
                    {"+$381K"}
                  </dd>
                </div>
              </dl>
              <div className="flex flex-col gap-1.5">
                <div className="flex h-2 overflow-hidden rounded-full w-full" role="meter" aria-label="Q3 attainment" aria-valuemin="0" aria-valuemax="600000" aria-valuenow="403800" aria-valuetext="$403,800 won and committed of $600,000, $381,000 more in best case">
                  <span className="bg-emerald-500 h-full shrink-0" style={{width: "5.7%"}}></span>
                  <span className="bg-blue-600 h-full shrink-0" style={{width: "61.6%"}}></span>
                  <span className="bg-blue-600/60 h-full shrink-0" style={{width: "32.7%"}}></span>
                </div>
                <div className="flex gap-3 items-center justify-between tabular-nums text-muted-foreground text-xs">
                  <span>
                    {"Pace"}
                    <span className="font-medium text-foreground">
                      {"$78K"}
                    </span>
                  </span>
                  <span>
                    {"Gap"}
                    <span className="font-medium text-foreground">
                      {"$196K"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </header>
        <div className="border-y flex flex-col shrink-0">
          <div className="flex flex-wrap gap-2 items-center lg:px-4 px-3 py-2 shrink-0">
            <div className="max-xl:me-auto shrink-0">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by rep, All reps" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                <AvatarGroup aria-hidden="true">
                  <Avatar size="sm">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </AvatarGroup>
                <span className="max-sm:sr-only">
                  {"All reps"}
                </span>
                <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <Separator className="data-vertical:self-center h-5 max-xl:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <ToggleGroup className="[--scroll-fade-reveal:--spacing(8)] max-xl:order-last max-xl:w-full min-w-0 no-scrollbar overflow-x-auto overflow-y-hidden py-0.5 supports-[animation-timeline:scroll()]:scroll-fade-x xl:me-auto" multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Forecast hygiene" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Slipped, 4 deals">
                <span className="inline-flex shrink-0 text-warning" aria-hidden="true">
                  <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                <span>
                  {"Slipped"}
                </span>
                <span className="tabular-nums text-muted-foreground" aria-hidden="true">
                  {"4"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="No next step, 2 deals">
                <span className="inline-flex shrink-0 text-warning" aria-hidden="true">
                  <svg className="lucide lucide-calendar-off size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarOffIcon" tabler="IconCalendarOff" hugeicons="CalendarRemove01Icon" phosphor="CalendarXIcon" remixicon="RiCalendarCloseLine" aria-hidden="true">
                    <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"></path>
                    <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"></path>
                    <path d="M16 2v4"></path>
                    <path d="M3 10h7"></path>
                    <path d="M21 10h-5.5"></path>
                    <path d="m2 2 20 20"></path>
                  </svg>
                </span>
                <span>
                  {"No next step"}
                </span>
                <span className="tabular-nums text-muted-foreground" aria-hidden="true">
                  {"2"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Rotting, 3 deals">
                <span className="inline-flex shrink-0 text-warning" aria-hidden="true">
                  <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </span>
                <span>
                  {"Rotting"}
                </span>
                <span className="tabular-nums text-muted-foreground" aria-hidden="true">
                  {"3"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Overdue activity, 3 deals">
                <span className="inline-flex shrink-0 text-destructive" aria-hidden="true">
                  <svg className="lucide lucide-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </span>
                <span>
                  {"Overdue activity"}
                </span>
                <span className="tabular-nums text-muted-foreground" aria-hidden="true">
                  {"3"}
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="flex gap-2 items-center shrink-0">
              <InputGroup className="hidden md:flex w-44 xl:w-56" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_b_" placeholder="Search deals" aria-label="Search deals" value="" />
              </InputGroup>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_e_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-list-filter size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                  <path d="M2 5h20"></path>
                  <path d="M6 12h12"></path>
                  <path d="M9 19h6"></path>
                </svg>
                <span className="max-md:sr-only">
                  {"Filter"}
                </span>
              </PopoverTrigger>
              </Popover>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_g_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="max-md:sr-only">
                  {"Display"}
                </span>
              </PopoverTrigger>
              </Popover>
              <Separator className="data-vertical:self-center h-5" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <Tabs data-orientation="horizontal" activationDirection="none">
                <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Workspace view">
                  <TabsTrigger className="gap-1.5" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="view-tab-board" compositeItemActive="">
                    <svg className="lucide lucide-kanban size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KanbanIcon" tabler="IconLayoutKanban" hugeicons="DashboardSquare02Icon" phosphor="KanbanIcon" remixicon="RiKanbanView" aria-hidden="true">
                      <path d="M5 3v14"></path>
                      <path d="M12 3v8"></path>
                      <path d="M19 3v18"></path>
                    </svg>
                    <span className="max-sm:sr-only">
                      {"Board"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="gap-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="view-tab-table">
                    <svg className="lucide lucide-grid-2x2 lucide-grid2x2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Grid2x2Icon" tabler="IconBorderAll" hugeicons="Grid2X2Icon" phosphor="GridFourIcon" remixicon="RiLayoutGrid2Line" aria-hidden="true">
                      <path d="M12 3v18"></path>
                      <path d="M3 12h18"></path>
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    </svg>
                    <span className="max-sm:sr-only">
                      {"Table"}
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="border-t md:hidden px-3 py-2">
            <InputGroup role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_j_" placeholder="Search deals" aria-label="Search deals" value="" />
            </InputGroup>
          </div>
        </div>
        <section className="flex flex-1 flex-col min-h-0" role="tabpanel" id="view-panel" aria-labelledby="view-tab-board" aria-busy="false">
          <div className="flex flex-1 flex-col gap-2 min-h-0 w-full">
            <Kanban className="flex flex-1 flex-col min-h-0 w-full" dragging="false">
              <div className="flex-1 min-h-0 overflow-auto relative w-full">
                <KanbanBoard className="flex gap-3 items-start lg:pb-4 lg:pt-4 lg:px-3 min-w-max pb-3 pt-3 px-2">
                  <KanbanColumn className="self-start shrink-0 w-70" value="__none__" dragging="false">
                    <section className="bg-muted/40 flex flex-col gap-2 min-w-0 p-1 rounded-lg" aria-label="Not called, 3 deals" style={{"--lane-tone": "var(--muted-foreground)"}}>
                      <div className="min-h-9 min-w-0 px-1">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <h3 className="flex font-semibold gap-1.5 items-center min-w-0 text-sm" title="Not called">
                            <span className="border border-dashed border-muted-foreground/60 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Not called"}
                            </span>
                          </h3>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"3"}
                          </span>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 mt-0.5 tabular-nums text-muted-foreground text-xs">
                          <span className="font-medium shrink-0 text-foreground">
                            {"$43K"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            {"7% of target"}
                          </span>
                        </p>
                      </div>
                      <span className="**:data-[slot=progress-indicator]:bg-(--lane-tone) flex gap-2 items-center min-w-0 px-1">
                        <Progress className="**:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="7" aria-valuetext="7%" role="progressbar" aria-labelledby="base-ui-_r_k_">
                          <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_k_" role="presentation">
                            {"Not called closes 7% of the Q3 target"}
                          </ProgressLabel>
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "7%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </span>
                      <KanbanColumnContent>
                        <KanbanItem className="group/card relative" value="DEAL-4903" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Media team, 20 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$21,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-radio size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioIcon" tabler="IconBroadcast" hugeicons="LiveStreaming02Icon" phosphor="BroadcastIcon" remixicon="RiRfidLine" aria-hidden="true">
                                        <path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
                                        <path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
                                        <path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
                                        <path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Media team, 20 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Brightwave Media"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"BRW"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Qualified"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Sep 30"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarFallback className="text-[9px]">
                                        {"EW"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Emma Wilson"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-headphones size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Discovery call"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 14"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4918" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Pro Annual, 12 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$12,960"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-briefcase-business size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                                        <path d="M12 12h.01"></path>
                                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                        <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Pro Annual, 12 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Cedar & Co"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"CDR"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Qualified"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Aug 14"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarFallback className="text-[9px]">
                                        {"EW"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Emma Wilson"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-headphones size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Intro call"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 17"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4922" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Compliance add-on">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$9,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-landmark size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LandmarkIcon" tabler="IconBuildingBank" hugeicons="BankIcon" phosphor="BankIcon" remixicon="RiBankLine" aria-hidden="true">
                                        <path d="M10 18v-7"></path>
                                        <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                                        <path d="M14 18v-7"></path>
                                        <path d="M18 18v-7"></path>
                                        <path d="M3 22h18"></path>
                                        <path d="M6 18v-7"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Compliance add-on"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Summit Financial"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"SMF"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Qualified"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Sep 30"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="border border-dashed border-muted-foreground/35 rounded-full shrink-0 size-5" aria-hidden="true"></span>
                                    <span className="sr-only">
                                      {"Unassigned"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-warning text-xs">
                                  <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-warning" aria-hidden="true">
                                    <svg className="lucide lucide-calendar-off size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarOffIcon" tabler="IconCalendarOff" hugeicons="CalendarRemove01Icon" phosphor="CalendarXIcon" remixicon="RiCalendarCloseLine" aria-hidden="true">
                                      <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"></path>
                                      <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"></path>
                                      <path d="M16 2v4"></path>
                                      <path d="M3 10h7"></path>
                                      <path d="M21 10h-5.5"></path>
                                      <path d="m2 2 20 20"></path>
                                    </svg>
                                  </span>
                                  <span className="truncate">
                                    {"No next step booked"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <Button className="bg-transparent border border-transparent font-normal hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a deal to Not called">
                          <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add deal"}
                        </Button>
                      </KanbanColumnContent>
                    </section>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-70" value="pipeline" dragging="false">
                    <section className="flex flex-col gap-2 min-w-0 p-1" aria-label="Pipeline, 4 deals" style={{"--lane-tone": "color-mix(in oklab, var(--color-blue-600) 35%, transparent)"}}>
                      <div className="min-h-9 min-w-0 px-1">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <h3 className="flex font-semibold gap-1.5 items-center min-w-0 text-sm" title="Pipeline">
                            <span className="bg-blue-600/35 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Pipeline"}
                            </span>
                          </h3>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"4"}
                          </span>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 mt-0.5 tabular-nums text-muted-foreground text-xs">
                          <span className="font-medium shrink-0 text-foreground">
                            {"$229K"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            {"38% of target"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate" title="Closes after Q3">
                            {"+$18K later"}
                          </span>
                        </p>
                      </div>
                      <span className="**:data-[slot=progress-indicator]:bg-(--lane-tone) flex gap-2 items-center min-w-0 px-1">
                        <Progress className="**:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="38" aria-valuetext="38%" role="progressbar" aria-labelledby="base-ui-_r_l_">
                          <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_l_" role="presentation">
                            {"Pipeline closes 38% of the Q3 target"}
                          </ProgressLabel>
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "38%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </span>
                      <KanbanColumnContent>
                        <KanbanItem className="group/card relative" value="DEAL-4906" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Warehouse module">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$18,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-truck size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                        <path d="M15 18H9"></path>
                                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                        <circle cx="17" cy="18" r="2"></circle>
                                        <circle cx="7" cy="18" r="2"></circle>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Warehouse module"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Cobalt Logistics"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"CBL"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Qualified"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Oct 30"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Leo Grant"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-destructive text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-headphones size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                  </span>
                                  <span className="truncate">
                                    {"Scoping call"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Was due Jul 3"}
                                  </span>
                                  <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-destructive" aria-hidden="true">
                                    <svg className="lucide lucide-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4908" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag API overage plan">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$12,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-code size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                        <path d="m16 18 6-6-6-6"></path>
                                        <path d="m8 6-6 6 6 6"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"API overage plan"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Orbit Software"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"ORB"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Qualified"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Sep 30"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Alex Johnson"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-mail size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Send usage report"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Aug 2"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4909" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Enterprise Plan renewal">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$156,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-factory size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FactoryIcon" tabler="IconBuildingFactory2" hugeicons="FactoryIcon" phosphor="FactoryIcon" remixicon="RiBuilding2Line" aria-hidden="true">
                                        <path d="M12 16h.01"></path>
                                        <path d="M16 16h.01"></path>
                                        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                                        <path d="M8 16h.01"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Enterprise Plan renewal"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Apex Manufacturing"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"APX"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/65 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Discovery"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="font-medium tabular-nums text-foreground text-xs" title="Set by rep, stage default 35%">
                                      {"50%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Sep 30"}
                                      </span>
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-warning" tabIndex="0" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"No activity for 12 days, this stage allows 10"}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Alex Johnson"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-users size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Renewal kickoff"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 22"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4912" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Pro Annual, 60 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$61,200"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-briefcase-medical size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseMedicalIcon" tabler="IconStethoscope" hugeicons="Hospital02Icon" phosphor="StethoscopeIcon" remixicon="RiStethoscopeLine" aria-hidden="true">
                                        <path d="M12 11v4"></path>
                                        <path d="M14 13h-4"></path>
                                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                        <path d="M18 6v14"></path>
                                        <path d="M6 6v14"></path>
                                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Pro Annual, 60 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Vertex Health"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"VTX"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/65 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Discovery"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="35">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"35%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Aug 31"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Nora Vale"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-monitor size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                      <line x1="8" x2="16" y1="21" y2="21"></line>
                                      <line x1="12" x2="12" y1="17" y2="21"></line>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Clinical workflow demo"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 14"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <Button className="bg-transparent border border-transparent font-normal hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a deal to Pipeline">
                          <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add deal"}
                        </Button>
                      </KanbanColumnContent>
                    </section>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-70" value="best_case" dragging="false">
                    <section className="flex flex-col gap-2 min-w-0 p-1" aria-label="Best case, 4 deals" style={{"--lane-tone": "color-mix(in oklab, var(--color-blue-600) 60%, transparent)"}}>
                      <div className="min-h-9 min-w-0 px-1">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <h3 className="flex font-semibold gap-1.5 items-center min-w-0 text-sm" title="Best case">
                            <span className="bg-blue-600/60 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Best case"}
                            </span>
                          </h3>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"4"}
                          </span>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 mt-0.5 tabular-nums text-muted-foreground text-xs">
                          <span className="font-medium shrink-0 text-foreground">
                            {"$381K"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            {"64% of target"}
                          </span>
                        </p>
                      </div>
                      <span className="**:data-[slot=progress-indicator]:bg-(--lane-tone) flex gap-2 items-center min-w-0 px-1">
                        <Progress className="**:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="64" aria-valuetext="64%" role="progressbar" aria-labelledby="base-ui-_r_o_">
                          <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_o_" role="presentation">
                            {"Best case closes 64% of the Q3 target"}
                          </ProgressLabel>
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "64%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </span>
                      <KanbanColumnContent>
                        <KanbanItem className="group/card relative" value="DEAL-4910" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Plant floor tablets, 120 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$57,600"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-factory size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FactoryIcon" tabler="IconBuildingFactory2" hugeicons="FactoryIcon" phosphor="FactoryIcon" remixicon="RiBuilding2Line" aria-hidden="true">
                                        <path d="M12 16h.01"></path>
                                        <path d="M16 16h.01"></path>
                                        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                                        <path d="M8 16h.01"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Plant floor tablets, 120 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Apex Manufacturing"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"APX"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Proposal"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="55">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"55%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Aug 14"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Alex Johnson"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-map-pin size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                      <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Shutdown walkthrough"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 18"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4914" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Enterprise Plan, 250 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$210,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-store size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                                        <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                                        <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                                        <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Enterprise Plan, 250 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Larkspur Retail"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"LKR"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Proposal"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="55">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"55%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Sep 30"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Leo Grant"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-users size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Exec sponsor review"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 23"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4921" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Pro Annual, 80 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$86,400"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-landmark size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LandmarkIcon" tabler="IconBuildingBank" hugeicons="BankIcon" phosphor="BankIcon" remixicon="RiBankLine" aria-hidden="true">
                                        <path d="M10 18v-7"></path>
                                        <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                                        <path d="M14 18v-7"></path>
                                        <path d="M18 18v-7"></path>
                                        <path d="M3 22h18"></path>
                                        <path d="M6 18v-7"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Pro Annual, 80 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Summit Financial"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"SMF"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/65 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Discovery"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="35">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"35%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Aug 31"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Mira Stone"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-users size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Security questionnaire"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 15"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4923" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Pro Annual, 25 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$27,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-briefcase-medical size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseMedicalIcon" tabler="IconStethoscope" hugeicons="Hospital02Icon" phosphor="StethoscopeIcon" remixicon="RiStethoscopeLine" aria-hidden="true">
                                        <path d="M12 11v4"></path>
                                        <path d="M14 13h-4"></path>
                                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                        <path d="M18 6v14"></path>
                                        <path d="M6 6v14"></path>
                                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Pro Annual, 25 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Northstar Clinics"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"NSC"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-foreground/80 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Negotiation"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="font-medium tabular-nums text-foreground text-xs" title="Set by rep, stage default 75%">
                                      {"40%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex font-medium gap-1.5 items-center min-w-0 tabular-nums text-destructive text-xs">
                                      <span className="shrink-0">
                                        {"Closes Jul 10"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="text-destructive text-xs truncate">
                                        {"3d overdue"}
                                      </span>
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-warning" tabIndex="0" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"Pushed 2 times from Jun 26, 2026"}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-warning" tabIndex="0" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"No activity for 6 days, this stage allows 5"}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Leo Grant"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-destructive text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-headphones size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                  </span>
                                  <span className="truncate">
                                    {"Re-date close"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Was due Jul 10"}
                                  </span>
                                  <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-destructive" aria-hidden="true">
                                    <svg className="lucide lucide-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <Button className="bg-transparent border border-transparent font-normal hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a deal to Best case">
                          <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add deal"}
                        </Button>
                      </KanbanColumnContent>
                    </section>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-70" value="commit" dragging="false">
                    <section className="flex flex-col gap-2 min-w-0 p-1" aria-label="Commit, 4 deals" style={{"--lane-tone": "var(--color-blue-600)"}}>
                      <div className="min-h-9 min-w-0 px-1">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <h3 className="flex font-semibold gap-1.5 items-center min-w-0 text-sm" title="Commit">
                            <span className="bg-blue-600 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Commit"}
                            </span>
                          </h3>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"4"}
                          </span>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 mt-0.5 tabular-nums text-muted-foreground text-xs">
                          <span className="font-medium shrink-0 text-foreground">
                            {"$370K"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            {"62% of target"}
                          </span>
                        </p>
                      </div>
                      <span className="**:data-[slot=progress-indicator]:bg-(--lane-tone) flex gap-2 items-center min-w-0 px-1">
                        <Progress className="**:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="62" aria-valuetext="62%" role="progressbar" aria-labelledby="base-ui-_r_t_">
                          <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_t_" role="presentation">
                            {"Commit closes 62% of the Q3 target"}
                          </ProgressLabel>
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "62%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </span>
                      <KanbanColumnContent>
                        <KanbanItem className="group/card relative" value="DEAL-4901" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Growth Plan, 60 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$57,600"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-radio size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioIcon" tabler="IconBroadcast" hugeicons="LiveStreaming02Icon" phosphor="BroadcastIcon" remixicon="RiRfidLine" aria-hidden="true">
                                        <path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
                                        <path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
                                        <path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
                                        <path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Growth Plan, 60 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Brightwave Media"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"BRW"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-foreground/80 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Negotiation"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"75%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Jul 31"}
                                      </span>
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-warning" tabIndex="0" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"Pushed once from Jul 17, 2026"}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Mira Stone"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-users size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Pricing review"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 14"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4904" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Enterprise Plan renewal">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$132,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-truck size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                        <path d="M15 18H9"></path>
                                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                        <circle cx="17" cy="18" r="2"></circle>
                                        <circle cx="7" cy="18" r="2"></circle>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Enterprise Plan renewal"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Cobalt Logistics"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"CBL"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-foreground/80 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Negotiation"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"75%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Jul 31"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Sana Qureshi"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-users size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Renewal terms"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 13"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4907" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag SSO add-on">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$7,200"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-code size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                        <path d="m16 18 6-6-6-6"></path>
                                        <path d="m8 6-6 6 6 6"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"SSO add-on"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Orbit Software"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"ORB"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-foreground/80 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Negotiation"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"75%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Jul 24"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"in 11d"}
                                      </span>
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-warning" tabIndex="0" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"Pushed once from Jul 17, 2026"}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Leo Grant"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-mail size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Send security docs"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 15"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4917" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Enterprise Plan, 180 seats">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$172,800"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-zap size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Enterprise Plan, 180 seats"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Ridgeline Energy"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"RDG"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-foreground/80 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Negotiation"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="font-medium tabular-nums text-foreground text-xs" title="Set by rep, stage default 75%">
                                      {"60%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Jul 31"}
                                      </span>
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-warning" tabIndex="0" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"Pushed 2 times from Jul 1, 2026"}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Mira Stone"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-file-text size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                      <path d="M10 9H8"></path>
                                      <path d="M16 13H8"></path>
                                      <path d="M16 17H8"></path>
                                    </svg>
                                  </span>
                                  <span className="text-foreground truncate">
                                    {"Legal redlines"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Jul 20"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <Button className="bg-transparent border border-transparent font-normal hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a deal to Commit">
                          <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add deal"}
                        </Button>
                      </KanbanColumnContent>
                    </section>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-70" value="closed_won" dragging="false">
                    <section className="flex flex-col gap-2 min-w-0 p-1" aria-label="Closed won, 3 deals" style={{"--lane-tone": "var(--color-emerald-500)"}}>
                      <div className="min-h-9 min-w-0 px-1">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <h3 className="flex font-semibold gap-1.5 items-center min-w-0 text-sm" title="Closed won">
                            <span className="bg-emerald-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Closed won"}
                            </span>
                          </h3>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"3"}
                          </span>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 mt-0.5 tabular-nums text-muted-foreground text-xs">
                          <span className="font-medium shrink-0 text-foreground">
                            {"$34K"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0">
                            {"6% of target"}
                          </span>
                        </p>
                      </div>
                      <span className="**:data-[slot=progress-indicator]:bg-(--lane-tone) flex gap-2 items-center min-w-0 px-1">
                        <Progress className="**:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-1 gap-0 min-w-12" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="6" aria-valuetext="6%" role="progressbar" aria-labelledby="base-ui-_r_14_">
                          <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_14_" role="presentation">
                            {"Closed won closes 6% of the Q3 target"}
                          </ProgressLabel>
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "6%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </span>
                      <KanbanColumnContent>
                        <KanbanItem className="group/card relative" value="DEAL-4902" dragging="false" disabled="true" tabIndex="-1" aria-disabled="true" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <Frame spacing="default">
                            <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                              <div className="flex gap-1.5 items-baseline min-w-0">
                                <span className="font-semibold tabular-nums text-base text-foreground">
                                  {"$4,800"}
                                </span>
                                <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <IconTile variant="outline" size="sm" aria-hidden="true">
                                  <span className="inline-flex shrink-0 size-4">
                                    <svg className="lucide lucide-radio size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioIcon" tabler="IconBroadcast" hugeicons="LiveStreaming02Icon" phosphor="BroadcastIcon" remixicon="RiRfidLine" aria-hidden="true">
                                      <path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
                                      <path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
                                      <path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
                                      <path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                  </span>
                                </IconTile>
                                <div className="flex-1 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                      <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                        {"Pilot, 10 seats"}
                                      </span>
                                    </Button>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-muted-foreground" tabIndex="0" id="base-ui-_r_16_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-lock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"Countersigned. Locked by finance."}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                  <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      {"Brightwave Media"}
                                    </span>
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"BRW"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Closed won"}
                                  </span>
                                </Badge>
                                <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
                                  <span className="flex gap-0.5 items-center" aria-hidden="true">
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"100%"}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-success">
                                      <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="truncate">
                                      {"Won Jul 5"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-5" size="default">
                                    <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" />
                                  </Avatar>
                                  <span className="sr-only">
                                    {"Mira Stone"}
                                  </span>
                                </span>
                              </div>
                              <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="[&_svg]:size-3.5 flex shrink-0">
                                  <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </span>
                                <span className="truncate">
                                  {"Order form countersigned"}
                                </span>
                              </p>
                            </FramePanel>
                          </Frame>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4911" dragging="false" disabled="true" tabIndex="-1" aria-disabled="true" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <Frame spacing="default">
                            <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                              <div className="flex gap-1.5 items-baseline min-w-0">
                                <span className="font-semibold tabular-nums text-base text-foreground">
                                  {"$21,000"}
                                </span>
                                <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <IconTile variant="outline" size="sm" aria-hidden="true">
                                  <span className="inline-flex shrink-0 size-4">
                                    <svg className="lucide lucide-factory size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FactoryIcon" tabler="IconBuildingFactory2" hugeicons="FactoryIcon" phosphor="FactoryIcon" remixicon="RiBuilding2Line" aria-hidden="true">
                                      <path d="M12 16h.01"></path>
                                      <path d="M16 16h.01"></path>
                                      <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                                      <path d="M8 16h.01"></path>
                                    </svg>
                                  </span>
                                </IconTile>
                                <div className="flex-1 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                      <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                        {"Quality module"}
                                      </span>
                                    </Button>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-muted-foreground" tabIndex="0" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-lock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"Countersigned. Locked by finance."}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                  <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      {"Apex Manufacturing"}
                                    </span>
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"APX"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Closed won"}
                                  </span>
                                </Badge>
                                <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
                                  <span className="flex gap-0.5 items-center" aria-hidden="true">
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"100%"}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-success">
                                      <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="truncate">
                                      {"Won Jul 9"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-5" size="default">
                                    <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80" />
                                  </Avatar>
                                  <span className="sr-only">
                                    {"Alex Johnson"}
                                  </span>
                                </span>
                              </div>
                              <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="[&_svg]:size-3.5 flex shrink-0">
                                  <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </span>
                                <span className="truncate">
                                  {"Order form countersigned"}
                                </span>
                              </p>
                            </FramePanel>
                          </Frame>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4915" dragging="false" disabled="true" tabIndex="-1" aria-disabled="true" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <Frame spacing="default">
                            <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                              <div className="flex gap-1.5 items-baseline min-w-0">
                                <span className="font-semibold tabular-nums text-base text-foreground">
                                  {"$8,400"}
                                </span>
                                <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <IconTile variant="outline" size="sm" aria-hidden="true">
                                  <span className="inline-flex shrink-0 size-4">
                                    <svg className="lucide lucide-truck size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                      <path d="M15 18H9"></path>
                                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                      <circle cx="17" cy="18" r="2"></circle>
                                      <circle cx="7" cy="18" r="2"></circle>
                                    </svg>
                                  </span>
                                </IconTile>
                                <div className="flex-1 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                      <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                        {"Dispatch add-on"}
                                      </span>
                                    </Button>
                                  </div>
                                  <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      {"Atlas Freight"}
                                    </span>
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"ATF"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Closed won"}
                                  </span>
                                </Badge>
                                <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
                                  <span className="flex gap-0.5 items-center" aria-hidden="true">
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"100%"}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-success">
                                      <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="truncate">
                                      {"Won Jul 10"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-5" size="default">
                                    <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" />
                                  </Avatar>
                                  <span className="sr-only">
                                    {"Sana Qureshi"}
                                  </span>
                                </span>
                              </div>
                              <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="[&_svg]:size-3.5 flex shrink-0">
                                  <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </span>
                                <span className="truncate">
                                  {"Countersign pending"}
                                </span>
                              </p>
                            </FramePanel>
                          </Frame>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </section>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-70" value="closed_lost" dragging="false">
                    <section className="flex flex-col gap-2 min-w-0 p-1" aria-label="Closed lost, 3 deals" style={{"--lane-tone": "var(--color-rose-500)"}}>
                      <div className="min-h-9 min-w-0 px-1">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <h3 className="flex font-semibold gap-1.5 items-center min-w-0 text-sm" title="Closed lost">
                            <span className="bg-rose-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Closed lost"}
                            </span>
                          </h3>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"3"}
                          </span>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 mt-0.5 tabular-nums text-muted-foreground text-xs">
                          <span className="font-medium shrink-0 text-foreground">
                            {"$68K"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"Outside the call"}
                          </span>
                        </p>
                      </div>
                      <KanbanColumnContent>
                        <KanbanItem className="group/card relative" value="DEAL-4905" dragging="false" disabled="true" tabIndex="-1" aria-disabled="true" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <Frame spacing="default">
                            <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                              <div className="flex gap-1.5 items-baseline min-w-0">
                                <span className="font-semibold tabular-nums text-base text-foreground">
                                  {"$54,000"}
                                </span>
                                <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <IconTile variant="outline" size="sm" aria-hidden="true">
                                  <span className="inline-flex shrink-0 size-4">
                                    <svg className="lucide lucide-truck size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                      <path d="M15 18H9"></path>
                                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                      <circle cx="17" cy="18" r="2"></circle>
                                      <circle cx="7" cy="18" r="2"></circle>
                                    </svg>
                                  </span>
                                </IconTile>
                                <div className="flex-1 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                      <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                        {"Driver app, 150 seats"}
                                      </span>
                                    </Button>
                                  </div>
                                  <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      {"Cobalt Logistics"}
                                    </span>
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"CBL"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Closed lost"}
                                  </span>
                                </Badge>
                                <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                  <span className="flex gap-0.5 items-center" aria-hidden="true">
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"0%"}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                      </svg>
                                    </span>
                                    <span className="truncate">
                                      {"Lost Jul 6"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-5" size="default">
                                    <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" />
                                  </Avatar>
                                  <span className="sr-only">
                                    {"Sana Qureshi"}
                                  </span>
                                </span>
                              </div>
                              <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="[&_svg]:size-3.5 flex shrink-0">
                                  <svg className="lucide lucide-circle-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m15 9-6 6"></path>
                                    <path d="m9 9 6 6"></path>
                                  </svg>
                                </span>
                                <span className="truncate">
                                  {"Lost to a competitor"}
                                </span>
                              </p>
                            </FramePanel>
                          </Frame>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4913" dragging="false" disabled="true" tabIndex="-1" aria-disabled="true" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <Frame spacing="default">
                            <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                              <div className="flex gap-1.5 items-baseline min-w-0">
                                <span className="font-semibold tabular-nums text-base text-foreground">
                                  {"$12,000"}
                                </span>
                                <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <IconTile variant="outline" size="sm" aria-hidden="true">
                                  <span className="inline-flex shrink-0 size-4">
                                    <svg className="lucide lucide-briefcase-medical size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseMedicalIcon" tabler="IconStethoscope" hugeicons="Hospital02Icon" phosphor="StethoscopeIcon" remixicon="RiStethoscopeLine" aria-hidden="true">
                                      <path d="M12 11v4"></path>
                                      <path d="M14 13h-4"></path>
                                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                      <path d="M18 6v14"></path>
                                      <path d="M6 6v14"></path>
                                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                    </svg>
                                  </span>
                                </IconTile>
                                <div className="flex-1 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                      <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                        {"Data residency"}
                                      </span>
                                    </Button>
                                  </div>
                                  <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      {"Vertex Health"}
                                    </span>
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"VTX"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Closed lost"}
                                  </span>
                                </Badge>
                                <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                  <span className="flex gap-0.5 items-center" aria-hidden="true">
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"0%"}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                      </svg>
                                    </span>
                                    <span className="truncate">
                                      {"Lost Jul 7"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-5" size="default">
                                    <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80" />
                                  </Avatar>
                                  <span className="sr-only">
                                    {"Nora Vale"}
                                  </span>
                                </span>
                              </div>
                              <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="[&_svg]:size-3.5 flex shrink-0">
                                  <svg className="lucide lucide-circle-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m15 9-6 6"></path>
                                    <path d="m9 9 6 6"></path>
                                  </svg>
                                </span>
                                <span className="truncate">
                                  {"Stalled in security review"}
                                </span>
                              </p>
                            </FramePanel>
                          </Frame>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4919" dragging="false" disabled="true" tabIndex="-1" aria-disabled="true" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <Frame spacing="default">
                            <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                              <div className="flex gap-1.5 items-baseline min-w-0">
                                <span className="font-semibold tabular-nums text-base text-foreground">
                                  {"$2,400"}
                                </span>
                                <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <IconTile variant="outline" size="sm" aria-hidden="true">
                                  <span className="inline-flex shrink-0 size-4">
                                    <svg className="lucide lucide-briefcase-business size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                                      <path d="M12 12h.01"></path>
                                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                      <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                    </svg>
                                  </span>
                                </IconTile>
                                <div className="flex-1 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                      <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                        {"Starter, 5 seats"}
                                      </span>
                                    </Button>
                                  </div>
                                  <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                    <span className="truncate">
                                      {"Cedar & Co"}
                                    </span>
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"CDR"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Closed lost"}
                                  </span>
                                </Badge>
                                <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                  <span className="flex gap-0.5 items-center" aria-hidden="true">
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                  </span>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"0%"}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0">
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                      </svg>
                                    </span>
                                    <span className="truncate">
                                      {"Lost Jul 8"}
                                    </span>
                                  </span>
                                </span>
                                <span className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-5" size="default">
                                    <AvatarFallback className="text-[9px]">
                                      {"EW"}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="sr-only">
                                    {"Emma Wilson"}
                                  </span>
                                </span>
                              </div>
                              <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="[&_svg]:size-3.5 flex shrink-0">
                                  <svg className="lucide lucide-circle-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m15 9-6 6"></path>
                                    <path d="m9 9 6 6"></path>
                                  </svg>
                                </span>
                                <span className="truncate">
                                  {"Budget never confirmed"}
                                </span>
                              </p>
                            </FramePanel>
                          </Frame>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </section>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-70" value="omit" dragging="false">
                    <section className="flex flex-col gap-2 min-w-0 p-1" aria-label="Omit, 2 deals">
                      <div className="min-h-9 min-w-0 px-1">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <h3 className="flex font-semibold gap-1.5 items-center min-w-0 text-sm" title="Omit">
                            <span className="bg-zinc-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Omit"}
                            </span>
                          </h3>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"2"}
                          </span>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 mt-0.5 tabular-nums text-muted-foreground text-xs">
                          <span className="font-medium shrink-0 text-foreground">
                            {"$22K"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"Outside the call"}
                          </span>
                        </p>
                      </div>
                      <KanbanColumnContent>
                        <KanbanItem className="group/card relative" value="DEAL-4916" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Route optimizer">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$15,600"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-truck size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                        <path d="M15 18H9"></path>
                                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                        <circle cx="17" cy="18" r="2"></circle>
                                        <circle cx="7" cy="18" r="2"></circle>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Route optimizer"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Atlas Freight"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"ATF"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Qualified"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Aug 31"}
                                      </span>
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring/50 inline-flex items-center outline-none rounded-sm shrink-0 text-warning" tabIndex="0" id="base-ui-_r_1a_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                      <span className="sr-only">
                                        {"No activity for 20 days, this stage allows 14"}
                                      </span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <img className="aspect-square object-cover rounded-full size-full" alt="" width="20" height="20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" />
                                    </Avatar>
                                    <span className="sr-only">
                                      {"Sana Qureshi"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-destructive text-xs">
                                  <span className="inline-flex shrink-0 size-3.5">
                                    <svg className="lucide lucide-clipboard-check size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardCheckIcon" tabler="IconClipboardCheck" hugeicons="TaskDone02Icon" phosphor="ClipboardTextIcon" remixicon="RiClipboardLine" aria-hidden="true">
                                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                      <path d="m9 14 2 2 4-4"></path>
                                    </svg>
                                  </span>
                                  <span className="truncate">
                                    {"Chase new champion"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="shrink-0 tabular-nums">
                                    {"Was due Jul 7"}
                                  </span>
                                  <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-destructive" aria-hidden="true">
                                    <svg className="lucide lucide-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <KanbanItem className="group/card relative" value="DEAL-4920" dragging="false" disabled="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false" disabled="false" tabIndex="0" aria-label="Drag Hardware kits">
                            <Frame spacing="default">
                              <FramePanel className="flex flex-col gap-2 hover:border-foreground/20 transition-[border-color]">
                                <div className="flex gap-1.5 items-baseline min-w-0">
                                  <span className="font-semibold tabular-nums text-base text-foreground">
                                    {"$6,000"}
                                  </span>
                                  <span className="h-5 ms-auto shrink-0 w-8" aria-hidden="true"></span>
                                </div>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <IconTile variant="outline" size="sm" aria-hidden="true">
                                    <span className="inline-flex shrink-0 size-4">
                                      <svg className="lucide lucide-cpu size-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CpuIcon" tabler="IconCpu" hugeicons="Cpu02Icon" phosphor="CpuIcon" remixicon="RiCpuLine" aria-hidden="true">
                                        <path d="M12 20v2"></path>
                                        <path d="M12 2v2"></path>
                                        <path d="M17 20v2"></path>
                                        <path d="M17 2v2"></path>
                                        <path d="M2 12h2"></path>
                                        <path d="M2 17h2"></path>
                                        <path d="M2 7h2"></path>
                                        <path d="M20 12h2"></path>
                                        <path d="M20 17h2"></path>
                                        <path d="M20 7h2"></path>
                                        <path d="M7 20v2"></path>
                                        <path d="M7 2v2"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                        <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                                      </svg>
                                    </span>
                                  </IconTile>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <Button className="h-auto hover:underline justify-start min-w-0 no-underline normal-case p-0 shrink text-foreground text-start tracking-normal" type="button" tabIndex="0">
                                        <span className="font-medium leading-5 min-w-0 text-sm truncate">
                                          {"Hardware kits"}
                                        </span>
                                      </Button>
                                    </div>
                                    <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="truncate">
                                        {"Quanta Devices"}
                                      </span>
                                      <span className="font-mono shrink-0 tracking-wide uppercase">
                                        {"QNT"}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Qualified"}
                                    </span>
                                  </Badge>
                                  <span className="flex gap-1.5 items-center shrink-0" role="meter" aria-label="Win probability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20">
                                    <span className="flex gap-0.5 items-center" aria-hidden="true">
                                      <span className="bg-foreground/70 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                      <span className="bg-muted-foreground/20 h-1.5 rounded-full w-2.5"></span>
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs">
                                      {"20%"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                                    <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-xs">
                                      <span className="shrink-0">
                                        {"Closes Aug 31"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="border border-dashed border-muted-foreground/35 rounded-full shrink-0 size-5" aria-hidden="true"></span>
                                    <span className="sr-only">
                                      {"Unassigned"}
                                    </span>
                                  </span>
                                </div>
                                <p className="flex gap-1.5 items-center min-w-0 text-warning text-xs">
                                  <span className="[&_svg]:size-3.5 inline-flex shrink-0 text-warning" aria-hidden="true">
                                    <svg className="lucide lucide-calendar-off size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarOffIcon" tabler="IconCalendarOff" hugeicons="CalendarRemove01Icon" phosphor="CalendarXIcon" remixicon="RiCalendarCloseLine" aria-hidden="true">
                                      <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"></path>
                                      <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"></path>
                                      <path d="M16 2v4"></path>
                                      <path d="M3 10h7"></path>
                                      <path d="M21 10h-5.5"></path>
                                      <path d="m2 2 20 20"></path>
                                    </svg>
                                  </span>
                                  <span className="truncate">
                                    {"No next step booked"}
                                  </span>
                                </p>
                              </FramePanel>
                            </Frame>
                          </KanbanItemHandle>
                          <div className="absolute end-3 flex gap-0.5 group-focus-within/card:opacity-100 group-hover/card:opacity-100 items-center opacity-0 top-3 transition-opacity"></div>
                        </KanbanItem>
                        <Button className="bg-transparent border border-transparent font-normal hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a deal to Omit">
                          <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add deal"}
                        </Button>
                      </KanbanColumnContent>
                    </section>
                  </KanbanColumn>
                </KanbanBoard>
              </div>
            </Kanban>
            <div id="DndDescribedBy-0" style={{display: "none"}}>
              {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
            </div>
            <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
          </div>
        </section>
      </div>
    </main>
  )
}
