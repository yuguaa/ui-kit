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
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background min-h-svh text-foreground w-full">
      <main className="flex flex-col gap-4 lg:p-8 max-w-7xl mx-auto p-4 sm:p-6 w-full" aria-labelledby="page-heading">
        <h1 className="sr-only" id="page-heading">
          {"Coverage Desk"}
        </h1>
        <header className="flex gap-2 items-center justify-between min-h-9 shrink-0 w-full" aria-label="Coverage desk header">
          <Breadcrumb className="min-w-0" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  {"Home"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  {"Workforce"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="min-w-0">
                <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                  {"Coverage"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2 items-center shrink-0">
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between leading-none max-w-full outline-none select-none shrink-0 sm:w-60 tabular-nums transition-all w-40 whitespace-nowrap" type="button" tabIndex={0} aria-label="Demand range, Jun 22 - Jul 12, 2026" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
              <span className="truncate">
                <span className="hidden sm:inline">
                  {"Jun 22 - Jul 12, 2026"}
                </span>
                <span className="sm:hidden">
                  {"Jun 22 - Jul 12"}
                </span>
              </span>
              <svg className="group-hover/pick-date:text-foreground lucide lucide-square shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
              </svg>
            </PopoverTrigger>
            </Popover>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
              </svg>
              {"Export"}
            </Button>
          </div>
        </header>
        <div className="@container">
          <Frame spacing="default">
            <div className="@2xl:grid-cols-2 @5xl:grid-cols-5 gap-1 grid">
              <FramePanel className="flex flex-col gap-3 justify-between min-h-24">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Item className="[&_svg]:opacity-80 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-warning" variant="outline" size="sm" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                        <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <span className="font-medium leading-none text-sm truncate">
                    {"Open Gaps"}
                  </span>
                </div>
                <div className="flex gap-3 items-end justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                      {"11"}
                    </div>
                    <div className="leading-none text-muted-foreground text-xs truncate">
                      {"before kickoff"}
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                    </svg>
                    {"-4%"}
                  </Badge>
                </div>
              </FramePanel>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-24">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Item className="[&_svg]:opacity-80 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-success" variant="outline" size="sm" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <span className="font-medium leading-none text-sm truncate">
                    {"Standby Pool"}
                  </span>
                </div>
                <div className="flex gap-3 items-end justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                      {"24"}
                    </div>
                    <div className="leading-none text-muted-foreground text-xs truncate">
                      {"ready workers"}
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                    </svg>
                    {"+7"}
                  </Badge>
                </div>
              </FramePanel>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-24">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Item className="[&_svg]:opacity-80 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-destructive" variant="outline" size="sm" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <span className="font-medium leading-none text-sm truncate">
                    {"Swap Risk"}
                  </span>
                </div>
                <div className="flex gap-3 items-end justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                      {"8%"}
                    </div>
                    <div className="leading-none text-muted-foreground text-xs truncate">
                      {"open requests"}
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                    </svg>
                    {"-2%"}
                  </Badge>
                </div>
              </FramePanel>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-24">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Item className="[&_svg]:opacity-80 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-info" variant="outline" size="sm" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <span className="font-medium leading-none text-sm truncate">
                    {"Check Score"}
                  </span>
                </div>
                <div className="flex gap-3 items-end justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                      {"4.8"}
                    </div>
                    <div className="leading-none text-muted-foreground text-xs truncate">
                      {"site average"}
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                    </svg>
                    {"+0.3"}
                  </Badge>
                </div>
              </FramePanel>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-24">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Item className="[&_svg]:opacity-80 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-primary" variant="outline" size="sm" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <span className="font-medium leading-none text-sm truncate">
                    {"Crew Tenure"}
                  </span>
                </div>
                <div className="flex gap-3 items-end justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                      {"146d"}
                    </div>
                    <div className="leading-none text-muted-foreground text-xs truncate">
                      {"rolling median"}
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                    <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                    </svg>
                    {"+6d"}
                  </Badge>
                </div>
              </FramePanel>
            </div>
          </Frame>
        </div>
        <div className="gap-4 grid items-stretch lg:grid-cols-3">
          <div className="lg:col-span-2 min-w-0">
            <Frame className="h-full" spacing="default">
              <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-px">
                  <div className="font-semibold text-sm">
                    {"Coverage Review"}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {"Crew health by district"}
                  </div>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                  {"6 crews"}
                </Badge>
              </header>
              <FramePanel className="p-0!">
                <div className="overflow-x-auto">
                  <div className="cn-table-container">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>
                            {"Crew Lead"}
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            {"District"}
                          </TableHead>
                          <TableHead>
                            {"Coverage"}
                          </TableHead>
                          <TableHead>
                            {"Relief"}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {"Handoffs"}
                          </TableHead>
                          <TableHead>
                            {"Status"}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div className="flex gap-3 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium truncate">
                                  {"Mira Stone"}
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    {"Floor lead"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 sm:hidden" aria-hidden="true"></span>
                                  <span className="shrink-0 sm:hidden">
                                    {"Harbor"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {"Harbor"}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1.5 min-w-24">
                              <div className="flex gap-2 items-center justify-between">
                                <span className="font-medium tabular-nums">
                                  {"94%"}
                                </span>
                                <span className="hidden sm:inline text-muted-foreground text-xs">
                                  {"Adds two closers"}
                                </span>
                              </div>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                <div className="bg-success h-full rounded-full" style={{width: "94%"}}></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="tabular-nums">
                            {"6h"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell tabular-nums">
                            {"2"}
                          </TableCell>
                          <TableCell>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Stable"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="flex gap-3 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarFallback>
                                  {"AJ"}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium truncate">
                                  {"Alex Johnson"}
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    {"Stock lead"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 sm:hidden" aria-hidden="true"></span>
                                  <span className="shrink-0 sm:hidden">
                                    {"Harbor"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {"Harbor"}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1.5 min-w-24">
                              <div className="flex gap-2 items-center justify-between">
                                <span className="font-medium tabular-nums">
                                  {"91%"}
                                </span>
                                <span className="hidden sm:inline text-muted-foreground text-xs">
                                  {"Backfill locked"}
                                </span>
                              </div>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                <div className="bg-success h-full rounded-full" style={{width: "91%"}}></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="tabular-nums">
                            {"7h"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell tabular-nums">
                            {"1"}
                          </TableCell>
                          <TableCell>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Stable"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="flex gap-3 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium truncate">
                                  {"Leo Grant"}
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    {"Dispatch owner"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 sm:hidden" aria-hidden="true"></span>
                                  <span className="shrink-0 sm:hidden">
                                    {"Airport"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {"Airport"}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1.5 min-w-24">
                              <div className="flex gap-2 items-center justify-between">
                                <span className="font-medium tabular-nums">
                                  {"81%"}
                                </span>
                                <span className="hidden sm:inline text-muted-foreground text-xs">
                                  {"Driver window tight"}
                                </span>
                              </div>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                <div className="bg-warning h-full rounded-full" style={{width: "81%"}}></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="tabular-nums">
                            {"3h"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell tabular-nums">
                            {"5"}
                          </TableCell>
                          <TableCell>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"Watch"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="flex gap-3 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarFallback>
                                  {"TP"}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium truncate">
                                  {"Theo Park"}
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    {"Ramp lead"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 sm:hidden" aria-hidden="true"></span>
                                  <span className="shrink-0 sm:hidden">
                                    {"Airport"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {"Airport"}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1.5 min-w-24">
                              <div className="flex gap-2 items-center justify-between">
                                <span className="font-medium tabular-nums">
                                  {"89%"}
                                </span>
                                <span className="hidden sm:inline text-muted-foreground text-xs">
                                  {"Training overlap"}
                                </span>
                              </div>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                <div className="bg-success h-full rounded-full" style={{width: "89%"}}></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="tabular-nums">
                            {"5h"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell tabular-nums">
                            {"3"}
                          </TableCell>
                          <TableCell>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Stable"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="flex gap-3 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium truncate">
                                  {"Nora Vale"}
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    {"Inventory coach"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 sm:hidden" aria-hidden="true"></span>
                                  <span className="shrink-0 sm:hidden">
                                    {"Uptown"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {"Uptown"}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1.5 min-w-24">
                              <div className="flex gap-2 items-center justify-between">
                                <span className="font-medium tabular-nums">
                                  {"72%"}
                                </span>
                                <span className="hidden sm:inline text-muted-foreground text-xs">
                                  {"Cycle count open"}
                                </span>
                              </div>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                <div className="bg-destructive h-full rounded-full" style={{width: "72%"}}></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="tabular-nums">
                            {"2h"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell tabular-nums">
                            {"6"}
                          </TableCell>
                          <TableCell>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              {"Critical"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="flex gap-3 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarFallback>
                                  {"SQ"}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="font-medium truncate">
                                  {"Sana Qureshi"}
                                </div>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="truncate">
                                    {"Route floater"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1 sm:hidden" aria-hidden="true"></span>
                                  <span className="shrink-0 sm:hidden">
                                    {"Uptown"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {"Uptown"}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1.5 min-w-24">
                              <div className="flex gap-2 items-center justify-between">
                                <span className="font-medium tabular-nums">
                                  {"78%"}
                                </span>
                                <span className="hidden sm:inline text-muted-foreground text-xs">
                                  {"Awaiting confirm"}
                                </span>
                              </div>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                <div className="bg-info h-full rounded-full" style={{width: "78%"}}></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="tabular-nums">
                            {"4h"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell tabular-nums">
                            {"4"}
                          </TableCell>
                          <TableCell>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              {"Pending"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </FramePanel>
            </Frame>
          </div>
          <Frame className="h-full" spacing="default">
            <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-px">
                <div className="font-semibold text-sm">
                  {"Action Queue"}
                </div>
                <div className="text-muted-foreground text-sm">
                  {"6 open before cutoff"}
                </div>
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Action queue options" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </header>
            <FramePanel className="p-0!">
              <div className="divide-border divide-y">
                <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:opacity-80 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-warning" variant="outline" size="sm" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        {"3 swap approvals"}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {"before 2 PM"}
                      </div>
                    </div>
                  </div>
                  <Button type="button" tabIndex={0}>
                    {"Approve"}
                  </Button>
                </div>
                <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:opacity-80 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-info" variant="outline" size="sm" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        {"6 standby invites"}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {"Harbor route"}
                      </div>
                    </div>
                  </div>
                  <Button type="button" tabIndex={0}>
                    {"Invite"}
                  </Button>
                </div>
                <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:opacity-80 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-destructive" variant="outline" size="sm" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        {"1 lead missing"}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {"Uptown close"}
                      </div>
                    </div>
                  </div>
                  <Button type="button" tabIndex={0}>
                    {"Assign"}
                  </Button>
                </div>
                <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:opacity-80 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-success" variant="outline" size="sm" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        {"Timecard sync"}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {"before payroll run"}
                      </div>
                    </div>
                  </div>
                  <Button type="button" tabIndex={0}>
                    {"Sync"}
                  </Button>
                </div>
                <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:opacity-80 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-warning" variant="outline" size="sm" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        {"2 route gaps"}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {"Airport noon"}
                      </div>
                    </div>
                  </div>
                  <Button type="button" tabIndex={0}>
                    {"Fill"}
                  </Button>
                </div>
                <div className="flex gap-3 items-center justify-between px-(--frame-panel-px) py-3">
                  <div className="flex gap-3 items-center min-w-0">
                    <Item className="[&_svg]:opacity-80 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border flex-nowrap p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-success" variant="outline" size="sm" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">
                        {"Break audit"}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {"two sites"}
                      </div>
                    </div>
                  </div>
                  <Button type="button" tabIndex={0}>
                    {"Check"}
                  </Button>
                </div>
              </div>
            </FramePanel>
          </Frame>
        </div>
        <Frame spacing="default">
          <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-px">
              <div className="font-semibold text-sm">
                {"Demand Mix"}
              </div>
              <div className="tabular-nums text-muted-foreground text-sm">
                {"Supply against forecast, Jun 22 - Jul 12"}
              </div>
            </div>
            <div className="gap-2 grid grid-cols-1 lg:w-auto sm:grid-cols-3 w-full">
              <Item className="flex-nowrap gap-2.5 lg:min-w-48 min-w-0" variant="outline" size="sm">
                <ItemMedia className="size-auto" variant="icon">
                  <Item className="bg-sky-500/10 border-sky-500/20 p-0 size-7 text-sky-500" variant="outline" size="xs" aria-hidden="true">
                    <span className="bg-current rounded-full size-2"></span>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="font-medium text-muted-foreground text-xs truncate w-full">
                    <span className="lg:hidden">
                      {"Sup"}
                    </span>
                    <span className="hidden lg:inline">
                      {"Supply"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="2xl:block hidden text-xs truncate">
                    {"Scheduled + standby"}
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end ml-auto shrink-0">
                  <span className="font-semibold leading-none tabular-nums text-sm tracking-tight">
                    {"3,296"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden leading-none min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow xl:inline-flex">
                    {"108.3%"}
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="flex-nowrap gap-2.5 lg:min-w-48 min-w-0" variant="outline" size="sm">
                <ItemMedia className="size-auto" variant="icon">
                  <Item className="bg-rose-500/10 border-rose-500/20 p-0 size-7 text-rose-500" variant="outline" size="xs" aria-hidden="true">
                    <span className="bg-current rounded-full size-2"></span>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="font-medium text-muted-foreground text-xs truncate w-full">
                    <span className="lg:hidden">
                      {"Fcst"}
                    </span>
                    <span className="hidden lg:inline">
                      {"Forecast"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="2xl:block hidden text-xs truncate">
                    {"21 day demand"}
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end ml-auto shrink-0">
                  <span className="font-semibold leading-none tabular-nums text-sm tracking-tight">
                    {"3,043"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden leading-none min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow xl:inline-flex">
                    {"Avg 145"}
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="flex-nowrap gap-2.5 lg:min-w-48 min-w-0" variant="outline" size="sm">
                <ItemMedia className="size-auto" variant="icon">
                  <Item className="bg-success/10 border-success/20 p-0 size-7 text-success" variant="outline" size="xs" aria-hidden="true">
                    <span className="bg-current rounded-full size-2"></span>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="font-medium text-muted-foreground text-xs truncate w-full">
                    <span className="lg:hidden">
                      {"Gap"}
                    </span>
                    <span className="hidden lg:inline">
                      {"Gap"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="2xl:block hidden text-xs truncate">
                    {"Coverage surplus"}
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="flex-col gap-1 items-end ml-auto shrink-0">
                  <span className="font-semibold leading-none tabular-nums text-sm text-success tracking-tight">
                    {"+253"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden leading-none min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow xl:inline-flex">
                    {"+8.3%"}
                  </Badge>
                </ItemActions>
              </Item>
            </div>
          </header>
          <FramePanel className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3 items-center text-muted-foreground text-xs">
                <span className="flex gap-1.5 items-center">
                  <span className="-space-x-0.5 flex items-center" aria-hidden="true">
                    <span className="bg-sky-500 rounded-full size-2"></span>
                    <span className="bg-teal-400 rounded-full size-2"></span>
                  </span>
                  {"Supply"}
                  <span className="hidden sm:inline">
                    {"Scheduled + standby"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center">
                  <span className="bg-rose-500 h-0.5 rounded-full w-4" aria-hidden="true"></span>
                  {"Forecast"}
                </span>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                {"21 day view"}
              </Badge>
            </div>
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-72 justify-center lg:h-80 text-xs w-full" data-chart="chart-_r_7_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_7_] {\n  --color-scheduled: var(--color-sky-500);\n  --color-standby: var(--color-teal-400);\n  --color-forecast: var(--color-rose-500);\n}\n\n\n.dark [data-chart=chart-_r_7_] {\n  --color-scheduled: var(--color-sky-500);\n  --color-standby: var(--color-teal-400);\n  --color-forecast: var(--color-rose-500);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width={1174} height={320} style={{position: "relative", cursor: "default", width: "1174px", height: "320px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex={0} width={1174} height={320} viewBox="0 0 1174 320" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={4} y={14} width={1158} height={276} x1={4} y1={290} x2={1162} y2={290}></line>
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={4} y={14} width={1158} height={276} x1={4} y1={218.73239436619718} x2={1162} y2={218.73239436619718}></line>
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={4} y={14} width={1158} height={276} x1={4} y1={147.46478873239437} x2={1162} y2={147.46478873239437}></line>
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={4} y={14} width={1158} height={276} x1={4} y1={76.19718309859157} x2={1162} y2={76.19718309859157}></line>
                            <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={4} y={14} width={1158} height={276} x1={4} y1={14} x2={1162} y2={14}></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x={4} y={14} height={276} width={1158}></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <pattern id="dashboard6-scheduled-pattern" patternUnits="userSpaceOnUse" width={8} height={8}>
                          <rect width={8} height={8} fill="var(--color-scheduled)" opacity={0.12}></rect>
                          <path d="M0,8 L8,0 M4,12 L12,4 M-4,4 L4,-4" stroke="var(--color-scheduled)" strokeWidth={1.4} opacity={0.62}></path>
                          <path d="M2,10 L10,2 M6,14 L14,6 M-2,6 L6,-2" stroke="var(--color-scheduled)" strokeWidth={1} opacity={0.28}></path>
                        </pattern>
                        <pattern id="dashboard6-standby-pattern" patternUnits="userSpaceOnUse" width={8} height={8}>
                          <rect width={8} height={8} fill="var(--color-standby)" opacity={0.12}></rect>
                          <path d="M0,0 L8,8 M-4,4 L4,12 M4,-4 L12,4" stroke="var(--color-standby)" strokeWidth={1.4} opacity={0.58}></path>
                          <path d="M0,4 H8 M4,0 V8" stroke="var(--color-standby)" strokeWidth={0.9} opacity={0.2}></path>
                        </pattern>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_8_">
                          <g className="recharts-bar-rectangles recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={21.5} y={124.1408} width={20} height={165.8592} d={"M21.5,124.1408L 41.5,124.1408L 41.5,285A 5,5,0,0,1,\n        36.5,290L 26.5,290A 5,5,0,0,1,\n        21.5,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={76.6429} y={111.1831} width={20} height={178.8169} d={"M76.6429,111.1831L 96.6429,111.1831L 96.6429,285A 5,5,0,0,1,\n        91.6429,290L 81.6429,290A 5,5,0,0,1,\n        76.6429,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={131.7857} y={133.2113} width={20} height={156.7887} d={"M131.7857,133.2113L 151.7857,133.2113L 151.7857,285A 5,5,0,0,1,\n        146.7857,290L 136.7857,290A 5,5,0,0,1,\n        131.7857,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={186.9286} y={100.8169} width={20} height={189.1831} d={"M186.9286,100.8169L 206.9286,100.8169L 206.9286,285A 5,5,0,0,1,\n        201.9286,290L 191.9286,290A 5,5,0,0,1,\n        186.9286,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={242.0714} y={91.7465} width={20} height={198.2535} d={"M242.0714,91.7465L 262.0714,91.7465L 262.0714,285A 5,5,0,0,1,\n        257.0714,290L 247.0714,290A 5,5,0,0,1,\n        242.0714,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={297.2143} y={116.3662} width={20} height={173.6338} d={"M297.2143,116.3662L 317.2143,116.3662L 317.2143,285A 5,5,0,0,1,\n        312.2143,290L 302.2143,290A 5,5,0,0,1,\n        297.2143,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={352.3571} y={137.0986} width={20} height={152.9014} d={"M352.3571,137.0986L 372.3571,137.0986L 372.3571,285A 5,5,0,0,1,\n        367.3571,290L 357.3571,290A 5,5,0,0,1,\n        352.3571,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={407.5} y={118.9577} width={20} height={171.0423} d={"M407.5,118.9577L 427.5,118.9577L 427.5,285A 5,5,0,0,1,\n        422.5,290L 412.5,290A 5,5,0,0,1,\n        407.5,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={462.6429} y={94.338} width={20} height={195.662} d={"M462.6429,94.338L 482.6429,94.338L 482.6429,285A 5,5,0,0,1,\n        477.6429,290L 467.6429,290A 5,5,0,0,1,\n        462.6429,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={517.7857} y={104.7042} width={20} height={185.2958} d={"M517.7857,104.7042L 537.7857,104.7042L 537.7857,285A 5,5,0,0,1,\n        532.7857,290L 522.7857,290A 5,5,0,0,1,\n        517.7857,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={572.9286} y={126.7324} width={20} height={163.2676} d={"M572.9286,126.7324L 592.9286,126.7324L 592.9286,285A 5,5,0,0,1,\n        587.9286,290L 577.9286,290A 5,5,0,0,1,\n        572.9286,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={628.0714} y={112.4789} width={20} height={177.5211} d={"M628.0714,112.4789L 648.0714,112.4789L 648.0714,285A 5,5,0,0,1,\n        643.0714,290L 633.0714,290A 5,5,0,0,1,\n        628.0714,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={683.2143} y={122.8451} width={20} height={167.1549} d={"M683.2143,122.8451L 703.2143,122.8451L 703.2143,285A 5,5,0,0,1,\n        698.2143,290L 688.2143,290A 5,5,0,0,1,\n        683.2143,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={738.3571} y={139.6901} width={20} height={150.3099} d={"M738.3571,139.6901L 758.3571,139.6901L 758.3571,285A 5,5,0,0,1,\n        753.3571,290L 743.3571,290A 5,5,0,0,1,\n        738.3571,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={793.5} y={129.3239} width={20} height={160.6761} d={"M793.5,129.3239L 813.5,129.3239L 813.5,285A 5,5,0,0,1,\n        808.5,290L 798.5,290A 5,5,0,0,1,\n        793.5,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={848.6429} y={108.5915} width={20} height={181.4085} d={"M848.6429,108.5915L 868.6429,108.5915L 868.6429,285A 5,5,0,0,1,\n        863.6429,290L 853.6429,290A 5,5,0,0,1,\n        848.6429,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={903.7857} y={85.2676} width={20} height={204.7324} d={"M903.7857,85.2676L 923.7857,85.2676L 923.7857,285A 5,5,0,0,1,\n        918.7857,290L 908.7857,290A 5,5,0,0,1,\n        903.7857,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={958.9286} y={99.5211} width={20} height={190.4789} d={"M958.9286,99.5211L 978.9286,99.5211L 978.9286,285A 5,5,0,0,1,\n        973.9286,290L 963.9286,290A 5,5,0,0,1,\n        958.9286,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={1014.0714} y={115.0704} width={20} height={174.9296} d={"M1014.0714,115.0704L 1034.0714,115.0704L 1034.0714,285A 5,5,0,0,1,\n        1029.0714,290L 1019.0714,290A 5,5,0,0,1,\n        1014.0714,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={1069.2143} y={131.9155} width={20} height={158.0845} d={"M1069.2143,131.9155L 1089.2143,131.9155L 1089.2143,285A 5,5,0,0,1,\n        1084.2143,290L 1074.2143,290A 5,5,0,0,1,\n        1069.2143,285Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-scheduled-pattern)" stroke="var(--color-scheduled)" strokeWidth={1} name="undefined" x={1124.3571} y={135.8028} width={20} height={154.1972} d={"M1124.3571,135.8028L 1144.3571,135.8028L 1144.3571,285A 5,5,0,0,1,\n        1139.3571,290L 1129.3571,290A 5,5,0,0,1,\n        1124.3571,285Z"}></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_9_">
                          <g className="recharts-bar-rectangles recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={21.5} y={95.6338} width={20} height={28.507} d={"M21.5,100.6338A 5,5,0,0,1,26.5,95.6338L 36.5,95.6338A 5,5,0,0,1,\n        41.5,100.6338L 41.5,124.1408L 21.5,124.1408Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={76.6429} y={74.9014} width={20} height={36.2817} d={"M76.6429,79.9014A 5,5,0,0,1,81.6429,74.9014L 91.6429,74.9014A 5,5,0,0,1,\n        96.6429,79.9014L 96.6429,111.1831L 76.6429,111.1831Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={131.7857} y={108.5915} width={20} height={24.6197} d={"M131.7857,113.5915A 5,5,0,0,1,136.7857,108.5915L 146.7857,108.5915A 5,5,0,0,1,\n        151.7857,113.5915L 151.7857,133.2113L 131.7857,133.2113Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={186.9286} y={59.3521} width={20} height={41.4648} d={"M186.9286,64.3521A 5,5,0,0,1,191.9286,59.3521L 201.9286,59.3521A 5,5,0,0,1,\n        206.9286,64.3521L 206.9286,100.8169L 186.9286,100.8169Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={242.0714} y={60.6479} width={20} height={31.0986} d={"M242.0714,65.6479A 5,5,0,0,1,247.0714,60.6479L 257.0714,60.6479A 5,5,0,0,1,\n        262.0714,65.6479L 262.0714,91.7465L 242.0714,91.7465Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={297.2143} y={93.0423} width={20} height={23.3239} d={"M297.2143,98.0423A 5,5,0,0,1,302.2143,93.0423L 312.2143,93.0423A 5,5,0,0,1,\n        317.2143,98.0423L 317.2143,116.3662L 297.2143,116.3662Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={352.3571} y={117.662} width={20} height={19.4366} d={"M352.3571,122.662A 5,5,0,0,1,357.3571,117.662L 367.3571,117.662A 5,5,0,0,1,\n        372.3571,122.662L 372.3571,137.0986L 352.3571,137.0986Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={407.5} y={89.1549} width={20} height={29.8028} d={"M407.5,94.1549A 5,5,0,0,1,412.5,89.1549L 422.5,89.1549A 5,5,0,0,1,\n        427.5,94.1549L 427.5,118.9577L 407.5,118.9577Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={462.6429} y={59.3521} width={20} height={34.9859} d={"M462.6429,64.3521A 5,5,0,0,1,467.6429,59.3521L 477.6429,59.3521A 5,5,0,0,1,\n        482.6429,64.3521L 482.6429,94.338L 462.6429,94.338Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={517.7857} y={65.831} width={20} height={38.8732} d={"M517.7857,70.831A 5,5,0,0,1,522.7857,65.831L 532.7857,65.831A 5,5,0,0,1,\n        537.7857,70.831L 537.7857,104.7042L 517.7857,104.7042Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={572.9286} y={100.8169} width={20} height={25.9155} d={"M572.9286,105.8169A 5,5,0,0,1,577.9286,100.8169L 587.9286,100.8169A 5,5,0,0,1,\n        592.9286,105.8169L 592.9286,126.7324L 572.9286,126.7324Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={628.0714} y={81.3803} width={20} height={31.0986} d={"M628.0714,86.3803A 5,5,0,0,1,633.0714,81.3803L 643.0714,81.3803A 5,5,0,0,1,\n        648.0714,86.3803L 648.0714,112.4789L 628.0714,112.4789Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={683.2143} y={94.338} width={20} height={28.507} d={"M683.2143,99.338A 5,5,0,0,1,688.2143,94.338L 698.2143,94.338A 5,5,0,0,1,\n        703.2143,99.338L 703.2143,122.8451L 683.2143,122.8451Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={738.3571} y={116.3662} width={20} height={23.3239} d={"M738.3571,121.3662A 5,5,0,0,1,743.3571,116.3662L 753.3571,116.3662A 5,5,0,0,1,\n        758.3571,121.3662L 758.3571,139.6901L 738.3571,139.6901Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={793.5} y={103.4085} width={20} height={25.9155} d={"M793.5,108.4085A 5,5,0,0,1,798.5,103.4085L 808.5,103.4085A 5,5,0,0,1,\n        813.5,108.4085L 813.5,129.3239L 793.5,129.3239Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={848.6429} y={74.9014} width={20} height={33.6901} d={"M848.6429,79.9014A 5,5,0,0,1,853.6429,74.9014L 863.6429,74.9014A 5,5,0,0,1,\n        868.6429,79.9014L 868.6429,108.5915L 848.6429,108.5915Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={903.7857} y={45.0986} width={20} height={40.169} d={"M903.7857,50.0986A 5,5,0,0,1,908.7857,45.0986L 918.7857,45.0986A 5,5,0,0,1,\n        923.7857,50.0986L 923.7857,85.2676L 903.7857,85.2676Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={958.9286} y={68.4225} width={20} height={31.0986} d={"M958.9286,73.4225A 5,5,0,0,1,963.9286,68.4225L 973.9286,68.4225A 5,5,0,0,1,\n        978.9286,73.4225L 978.9286,99.5211L 958.9286,99.5211Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={1014.0714} y={86.5634} width={20} height={28.507} d={"M1014.0714,91.5634A 5,5,0,0,1,1019.0714,86.5634L 1029.0714,86.5634A 5,5,0,0,1,\n        1034.0714,91.5634L 1034.0714,115.0704L 1014.0714,115.0704Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={1069.2143} y={108.5915} width={20} height={23.3239} d={"M1069.2143,113.5915A 5,5,0,0,1,1074.2143,108.5915L 1084.2143,108.5915A 5,5,0,0,1,\n        1089.2143,113.5915L 1089.2143,131.9155L 1069.2143,131.9155Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <path className="recharts-rectangle" fill="url(#dashboard6-standby-pattern)" stroke="var(--color-standby)" strokeWidth={1} name="undefined" x={1124.3571} y={115.0704} width={20} height={20.7324} d={"M1124.3571,120.0704A 5,5,0,0,1,1129.3571,115.0704L 1139.3571,115.0704A 5,5,0,0,1,\n        1144.3571,120.0704L 1144.3571,135.8028L 1124.3571,135.8028Z"}></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-forecast)" strokeWidth={2.25} fill="none" id="recharts-line-_r_a_" height={276} width={1158} d="M31.571,106C49.952,101.465,68.333,96.93,86.714,96.93C105.095,96.93,123.476,113.775,141.857,113.775C160.238,113.775,178.619,94.77,197,89.155C215.381,83.54,233.762,80.085,252.143,80.085C270.524,80.085,288.905,91.531,307.286,98.225C325.667,104.92,344.048,120.254,362.429,120.254C380.81,120.254,399.19,114.423,417.571,108.592C435.952,102.761,454.333,85.268,472.714,85.268C491.095,85.268,509.476,86.131,527.857,87.859C546.238,89.587,564.619,109.887,583,109.887C601.381,109.887,619.762,95.634,638.143,95.634C656.524,95.634,674.905,97.362,693.286,100.817C711.667,104.272,730.048,124.141,748.429,124.141C766.81,124.141,785.19,118.31,803.571,113.775C821.952,109.239,840.333,103.192,858.714,96.93C877.095,90.667,895.476,76.197,913.857,76.197C932.238,76.197,950.619,85.484,969,90.451C987.381,95.418,1005.762,100.817,1024.143,106C1042.524,111.183,1060.905,118.958,1079.286,121.549C1097.667,124.141,1116.048,124.789,1134.429,125.437"></path>
                          </g>
                        </g>
                      </g>
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
                      <g className="recharts-zIndex-layer_600" tabIndex={-1}>
                        <g className="recharts-layer recharts-line-dots">
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={31.571428571428573} cy={106}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={86.71428571428572} cy={96.92957746478874}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={141.85714285714286} cy={113.77464788732395}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={197.00000000000003} cy={89.1549295774648}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={252.14285714285717} cy={80.08450704225352}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={307.2857142857143} cy={98.22535211267605}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={362.42857142857144} cy={120.25352112676056}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={417.57142857142856} cy={108.59154929577464}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={472.7142857142857} cy={85.2676056338028}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={527.8571428571429} cy={87.85915492957746}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={583} cy={109.88732394366198}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={638.1428571428571} cy={95.63380281690144}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={693.2857142857143} cy={100.81690140845069}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={748.4285714285714} cy={124.14084507042253}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={803.5714285714286} cy={113.77464788732395}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={858.7142857142858} cy={96.92957746478874}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={913.8571428571429} cy={76.19718309859157}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={969} cy={90.45070422535211}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={1024.1428571428573} cy={106}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={1079.2857142857144} cy={121.54929577464787}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={2.5} stroke="var(--color-forecast)" strokeWidth={0} fill="var(--color-forecast)" height={276} width={1158} cx={1134.4285714285716} cy={125.43661971830987}></circle>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                        <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={31.571428571428573} y={306} textAnchor="middle" fill="#666">
                              <tspan x={31.571428571428573} dy="0.71em">
                                {"Jun 22"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={86.71428571428572} y={306} textAnchor="middle" fill="#666">
                              <tspan x={86.71428571428572} dy="0.71em">
                                {"Jun 23"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={141.85714285714286} y={306} textAnchor="middle" fill="#666">
                              <tspan x={141.85714285714286} dy="0.71em">
                                {"Jun 24"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={197.00000000000003} y={306} textAnchor="middle" fill="#666">
                              <tspan x={197.00000000000003} dy="0.71em">
                                {"Jun 25"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={252.14285714285717} y={306} textAnchor="middle" fill="#666">
                              <tspan x={252.14285714285717} dy="0.71em">
                                {"Jun 26"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={307.2857142857143} y={306} textAnchor="middle" fill="#666">
                              <tspan x={307.2857142857143} dy="0.71em">
                                {"Jun 27"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={362.42857142857144} y={306} textAnchor="middle" fill="#666">
                              <tspan x={362.42857142857144} dy="0.71em">
                                {"Jun 28"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={417.57142857142856} y={306} textAnchor="middle" fill="#666">
                              <tspan x={417.57142857142856} dy="0.71em">
                                {"Jun 29"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={472.7142857142857} y={306} textAnchor="middle" fill="#666">
                              <tspan x={472.7142857142857} dy="0.71em">
                                {"Jun 30"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={527.8571428571429} y={306} textAnchor="middle" fill="#666">
                              <tspan x={527.8571428571429} dy="0.71em">
                                {"Jul 1"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={583} y={306} textAnchor="middle" fill="#666">
                              <tspan x={583} dy="0.71em">
                                {"Jul 2"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={638.1428571428571} y={306} textAnchor="middle" fill="#666">
                              <tspan x={638.1428571428571} dy="0.71em">
                                {"Jul 3"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={693.2857142857143} y={306} textAnchor="middle" fill="#666">
                              <tspan x={693.2857142857143} dy="0.71em">
                                {"Jul 4"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={748.4285714285714} y={306} textAnchor="middle" fill="#666">
                              <tspan x={748.4285714285714} dy="0.71em">
                                {"Jul 5"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={803.5714285714286} y={306} textAnchor="middle" fill="#666">
                              <tspan x={803.5714285714286} dy="0.71em">
                                {"Jul 6"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={858.7142857142858} y={306} textAnchor="middle" fill="#666">
                              <tspan x={858.7142857142858} dy="0.71em">
                                {"Jul 7"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={913.8571428571429} y={306} textAnchor="middle" fill="#666">
                              <tspan x={913.8571428571429} dy="0.71em">
                                {"Jul 8"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={969} y={306} textAnchor="middle" fill="#666">
                              <tspan x={969} dy="0.71em">
                                {"Jul 9"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={1024.1428571428573} y={306} textAnchor="middle" fill="#666">
                              <tspan x={1024.1428571428573} dy="0.71em">
                                {"Jul 10"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={1079.2857142857144} y={306} textAnchor="middle" fill="#666">
                              <tspan x={1079.2857142857144} dy="0.71em">
                                {"Jul 11"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={1158} stroke="none" fontSize="12" x={1134.4285714285716} y={306} textAnchor="middle" fill="#666">
                              <tspan x={1134.4285714285716} dy="0.71em">
                                {"Jul 12"}
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
      </main>
    </div>
  )
}
