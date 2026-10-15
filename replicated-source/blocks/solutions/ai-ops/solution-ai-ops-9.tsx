import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:p-10 min-h-svh p-4 sm:p-6 text-foreground w-full">
      <div className="@container flex flex-col gap-6 max-w-7xl mx-auto w-full">
        <header className="@4xl:flex-row @4xl:items-end @4xl:justify-between flex flex-col gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2 items-center min-w-0">
              <h1 className="font-semibold text-2xl text-foreground tracking-tight">
                {"Cost Dashboard"}
              </h1>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-warning-foreground text-xs transition-shadow">
                {"82% Cap"}
              </Badge>
            </div>
            <p className="max-w-2xl mt-0.5 text-muted-foreground text-sm">
              {"Model spend, token pace, and budget exceptions across HelioForge AI."}
            </p>
          </div>
          <div className="@4xl:justify-end flex flex-wrap gap-2 items-center">
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-start" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              {"Last 30 Days"}
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              {"Export Summary"}
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-bell-ring size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellRingIcon" tabler="IconBellRinging2" hugeicons="Notification03Icon" phosphor="BellRingingIcon" remixicon="RiNotification4Line" data-icon="inline-start" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
              </svg>
              {"Review Events"}
            </Button>
          </div>
        </header>
        <div className="@2xl:grid-cols-2 @5xl:grid-cols-4 gap-4 grid grid-cols-1">
          <Card className="h-full" size="default">
            <CardHeader className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center min-w-0">
                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <CardTitle className="font-medium text-muted-foreground text-sm truncate">
                  {"Monthly Spend"}
                </CardTitle>
              </div>
              <CardAction>
                <DropdownMenu>
                <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2.5 items-center">
                <span className="font-semibold text-2xl text-foreground tracking-tight">
                  {"$186K"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                  {"8.4%"}
                </Badge>
              </div>
              <div className="border-border/70 border-t pt-3 text-muted-foreground text-xs">
                {"82% of June cap"}
              </div>
            </CardContent>
          </Card>
          <Card className="h-full" size="default">
            <CardHeader className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center min-w-0">
                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <CardTitle className="font-medium text-muted-foreground text-sm truncate">
                  {"Token Volume"}
                </CardTitle>
              </div>
              <CardAction>
                <DropdownMenu>
                <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2.5 items-center">
                <span className="font-semibold text-2xl text-foreground tracking-tight">
                  {"64.0M"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                  {"11.2%"}
                </Badge>
              </div>
              <div className="border-border/70 border-t pt-3 text-muted-foreground text-xs">
                {"1.8M requests today"}
              </div>
            </CardContent>
          </Card>
          <Card className="h-full" size="default">
            <CardHeader className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center min-w-0">
                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <CardTitle className="font-medium text-muted-foreground text-sm truncate">
                  {"Budget Events"}
                </CardTitle>
              </div>
              <CardAction>
                <DropdownMenu>
                <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2.5 items-center">
                <span className="font-semibold text-2xl text-foreground tracking-tight">
                  {"7"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                  {"2 new"}
                </Badge>
              </div>
              <div className="border-border/70 border-t pt-3 text-muted-foreground text-xs">
                {"3 need owner action"}
              </div>
            </CardContent>
          </Card>
          <Card className="h-full" size="default">
            <CardHeader className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center min-w-0">
                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <CardTitle className="font-medium text-muted-foreground text-sm truncate">
                  {"Unit Cost"}
                </CardTitle>
              </div>
              <CardAction>
                <DropdownMenu>
                <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2.5 items-center">
                <span className="font-semibold text-2xl text-foreground tracking-tight">
                  {"$4.18/1M"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                  {"5.2%"}
                </Badge>
              </div>
              <div className="border-border/70 border-t pt-3 text-muted-foreground text-xs">
                {"$4.41 last month"}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="@5xl:grid-cols-3 gap-6 grid grid-cols-1 items-stretch">
          <div className="@5xl:col-span-2">
            <Card className="gap-0 h-full p-0" size="default">
              <CardHeader className="border-b px-5 py-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <CardTitle>
                    {"Spend Pace"}
                  </CardTitle>
                  <p className="text-muted-foreground text-xs">
                    {"Actual spend against budget pace"}
                  </p>
                </div>
                <CardAction className="self-center">
                  <Button type="button" tabIndex="0">
                    {"Export"}
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5 p-5">
                <div className="@2xl:flex-row @2xl:items-center @2xl:justify-between flex flex-col gap-4">
                  <div className="flex gap-4 items-center min-w-0">
                    <Item className="[&_svg]:size-5 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11 text-violet-600" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        {"Month To Date"}
                      </div>
                      <div className="flex flex-wrap gap-2 items-center min-w-0">
                        <span className="font-bold text-2xl">
                          {"$186K"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"82% Cap"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Tabs data-orientation="horizontal" activationDirection="none">
                    <TabsList className="@2xl:w-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                      <TabsTrigger className="@2xl:flex-none" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_k_">
                        {"7D"}
                      </TabsTrigger>
                      <TabsTrigger className="@2xl:flex-none" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_l_" compositeItemActive="">
                        {"30D"}
                      </TabsTrigger>
                      <TabsTrigger className="@2xl:flex-none" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_m_">
                        {"90D"}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="mt-auto w-full">
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[320px] justify-center text-xs w-full" data-chart="chart-_r_n_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_n_] {\n  --color-spend: var(--color-violet-500);\n  --color-cap: var(--color-sky-500);\n}\n\n\n.dark [data-chart=chart-_r_n_] {\n  --color-spend: var(--color-violet-500);\n  --color-cap: var(--color-sky-500);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="752" height="320" style={{position: "relative", cursor: "default", width: "752px", height: "320px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="752" height="320" viewBox="0 0 752 320" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                              <g className="recharts-cartesian-grid">
                                <g className="recharts-cartesian-grid-vertical">
                                  <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="10" y="10" width="732" height="270" x1="193" y1="10" x2="193" y2="280"></line>
                                  <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="10" y="10" width="732" height="270" x1="376" y1="10" x2="376" y2="280"></line>
                                  <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="10" y="10" width="732" height="270" x1="559" y1="10" x2="559" y2="280"></line>
                                  <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="10" y="10" width="732" height="270" x1="742" y1="10" x2="742" y2="280"></line>
                                  <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="10" y="10" width="732" height="270" x1="10" y1="10" x2="10" y2="280"></line>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="10" y="10" height="270" width="732"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1">
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-sky-500)" strokeWidth="2" strokeDasharray="5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 0.9850999999999885px, 760.985107421875px" fill="none" id="recharts-line-_r_1q_" height="270" width="732" d="M10,236.275C71,221.954,132,207.633,193,194.737C254,181.841,315,170.369,376,153.198C437,136.027,498,113.156,559,91.984C620,70.811,681,51.337,742,31.862"></path>
                                </g>
                              </g>
                              <g className="recharts-layer recharts-line">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-curve recharts-line-curve" stroke="var(--color-violet-500)" strokeWidth="2.5" fill="none" id="recharts-line-_r_1r_" height="270" width="732" strokeDasharray="758.2021px 758.2021484375px" d="M10,240.648C71,228.428,132,216.209,193,201.296C254,186.382,315,168.775,376,144.453C437,120.132,498,89.095,559,76.68C620,64.265,681,70.473,742,76.68"></path>
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
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="732" stroke="none" fontSize="12" x="10" y="294" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="10" dy="0.71em">
                                      {"W1"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="732" stroke="none" fontSize="12" x="193" y="294" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="193" dy="0.71em">
                                      {"W2"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="732" stroke="none" fontSize="12" x="376" y="294" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="376" dy="0.71em">
                                      {"W3"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="732" stroke="none" fontSize="12" x="559" y="294" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="559" dy="0.71em">
                                      {"W4"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="732" stroke="none" fontSize="12" x="738.375" y="294" textAnchor="middle" fill="var(--muted-foreground)">
                                    <tspan x="738.375" dy="0.71em">
                                      {"MTD"}
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
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="gap-0 h-full p-0" size="default">
              <CardHeader className="border-b px-5 py-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <CardTitle>
                    {"Provider Mix"}
                  </CardTitle>
                  <p className="text-muted-foreground text-xs">
                    {"Spend share by active route"}
                  </p>
                </div>
                <CardAction className="self-center">
                  <Button type="button" tabIndex="0">
                    {"View All"}
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5 p-5">
                <div className="flex gap-4 items-end justify-between">
                  <div>
                    <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                      {"Provider Spend"}
                    </div>
                    <div className="font-bold text-2xl">
                      {"$186K"}
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"5 Routes"}
                  </Badge>
                </div>
                <div className="bg-muted flex gap-0.5 h-2.5 items-center overflow-hidden rounded-full w-full">
                  <div className="bg-violet-500 h-full" style={{width: "37%"}}></div>
                  <div className="bg-sky-500 h-full" style={{width: "28%"}}></div>
                  <div className="bg-amber-500 h-full" style={{width: "17%"}}></div>
                  <div className="bg-emerald-500 h-full" style={{width: "12%"}}></div>
                  <div className="bg-rose-500 h-full" style={{width: "6%"}}></div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                    <div className="flex gap-2.5 items-center min-w-0">
                      <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"OpenRoute Primary"}
                        </div>
                        <div className="text-muted-foreground text-xs truncate">
                          {"Routing and fallback"}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center shrink-0">
                      <span className="font-medium tabular-nums text-foreground text-sm">
                        {"$68.2K"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Over Budget"}
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                    <div className="flex gap-2.5 items-center min-w-0">
                      <span className="bg-sky-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"Northstar Claude Pool"}
                        </div>
                        <div className="text-muted-foreground text-xs truncate">
                          {"Assistant reasoning"}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center shrink-0">
                      <span className="font-medium tabular-nums text-foreground text-sm">
                        {"$51.4K"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"Nearing Cap"}
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                    <div className="flex gap-2.5 items-center min-w-0">
                      <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"Batch Summarizer Fleet"}
                        </div>
                        <div className="text-muted-foreground text-xs truncate">
                          {"Nightly jobs"}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center shrink-0">
                      <span className="font-medium tabular-nums text-foreground text-sm">
                        {"$31.9K"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"Nearing Cap"}
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                    <div className="flex gap-2.5 items-center min-w-0">
                      <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"VectorEdge Small"}
                        </div>
                        <div className="text-muted-foreground text-xs truncate">
                          {"Embeddings"}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center shrink-0">
                      <span className="font-medium tabular-nums text-foreground text-sm">
                        {"$21.8K"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Within Budget"}
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                    <div className="flex gap-2.5 items-center min-w-0">
                      <span className="bg-rose-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"Local Guardrail Runner"}
                        </div>
                        <div className="text-muted-foreground text-xs truncate">
                          {"Safety checks"}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center shrink-0">
                      <span className="font-medium tabular-nums text-foreground text-sm">
                        {"$12.7K"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Within Budget"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-auto text-muted-foreground text-xs">
                  <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  {"OpenRoute is above target; VectorEdge has spare capacity."}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className="gap-0 p-0" size="default">
          <CardHeader className="border-b flex flex-row gap-4 items-center justify-between px-5 py-4">
            <div className="flex flex-1 flex-col gap-1 min-w-0">
              <CardTitle>
                {"Cost Activity"}
              </CardTitle>
              <CardDescription className="text-xs">
                {"20 records across spend, routing, and prompt owners."}
              </CardDescription>
            </div>
            <CardAction className="self-center">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                {"Export"}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="p-0">
            <div className="pt-1.5 px-5">
              <Tabs data-orientation="horizontal" activationDirection="none">
                <TabsList className="flex-wrap gap-0 h-auto justify-start w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                  <TabsTrigger className="first:pl-0 gap-2 pb-2 px-3 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_o_" compositeItemActive="">
                    <span>
                      {"All Activity"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-primary-foreground text-xs transition-shadow">
                      {"20"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="first:pl-0 gap-2 pb-2 px-3 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_p_">
                    <span>
                      {"Budget Events"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow">
                      {"11"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="first:pl-0 gap-2 pb-2 px-3 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_q_">
                    <span>
                      {"Providers"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow">
                      {"7"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="first:pl-0 gap-2 pb-2 px-3 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_r_">
                    <span>
                      {"Prompts"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow">
                      {"9"}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="relative">
              <DataGridProvider>
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_t_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridProvider>
                    <DataGridTableViewport>
                      <DataGridProvider>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "260px"}} />
                          <col style={{width: "120px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "150px"}} />
                          <col style={{width: "150px"}} />
                          <col style={{width: "120px"}} />
                          <col style={{width: "54px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-5 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="target" data-header-id="target" data-header-depth="0" style={{width: "260px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Target"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 hidden md:table-cell px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="scope" data-header-id="scope" data-header-depth="0" style={{width: "120px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Scope"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 hidden lg:table-cell px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Owner"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="spend" data-header-id="spend" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Spend"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 hidden md:table-cell px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="state" data-header-id="state" data-header-depth="0" style={{width: "150px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"State"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 hidden px-3 relative rtl:text-right text-foreground text-left xl:table-cell" scope="col" aria-sort="none" data-col-id="unitCost" data-header-id="unitCost" data-header-depth="0" style={{width: "150px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Unit Cost"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 hidden lg:table-cell px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="updatedAt" data-header-id="updatedAt" data-header-depth="0" style={{width: "120px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  {"Updated"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 pr-5 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "54px"}}></th>
                          </tr>
                        </thead>
                        <DataGridProvider>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="0">
                            <td className="align-middle ps-5 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                      <circle cx="6" cy="19" r="3"></circle>
                                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                      <circle cx="18" cy="5" r="3"></circle>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"OpenRoute Primary"}
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono">
                                      {"PROV-2041"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"OpenRoute Primary"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Provider"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"Mira Stone"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$68.2K"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"105% of $65.0K"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Over Budget"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden px-3 py-2 xl:table-cell">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$6.82/1M"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"18.6M tokens"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"8 min ago"}
                              </span>
                            </td>
                            <td className="align-middle pr-5 px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for OpenRoute Primary" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                            <td className="align-middle ps-5 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                      <circle cx="6" cy="19" r="3"></circle>
                                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                      <circle cx="18" cy="5" r="3"></circle>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Support Reply Draft"}
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono">
                                      {"PRM-4821"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"OpenRoute Primary"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Prompt"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"Alex Johnson"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$42.8K"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"107% of $40.0K"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Over Budget"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden px-3 py-2 xl:table-cell">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$7.12/1M"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"18.6M tokens"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"12 min ago"}
                              </span>
                            </td>
                            <td className="align-middle pr-5 px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Support Reply Draft" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                            <td className="align-middle ps-5 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                      <circle cx="6" cy="19" r="3"></circle>
                                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                      <circle cx="18" cy="5" r="3"></circle>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Northstar Claude Pool"}
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono">
                                      {"BUD-2210"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Northstar Claude Pool"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Provider"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"Nora Vale"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$51.4K"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"86% of $60.0K"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Nearing Cap"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden px-3 py-2 xl:table-cell">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$9.75/1M"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"12.9M tokens"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"18 min ago"}
                              </span>
                            </td>
                            <td className="align-middle pr-5 px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Northstar Claude Pool" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                            <td className="align-middle ps-5 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                      <circle cx="6" cy="19" r="3"></circle>
                                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                      <circle cx="18" cy="5" r="3"></circle>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Renewal Risk Summary"}
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono">
                                      {"PRM-4926"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Northstar Claude Pool"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Prompt"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"Priya Patel"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$34.2K"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"88% of $39.0K"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Nearing Cap"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden px-3 py-2 xl:table-cell">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$8.88/1M"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"12.9M tokens"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"24 min ago"}
                              </span>
                            </td>
                            <td className="align-middle pr-5 px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Renewal Risk Summary" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="4">
                            <td className="align-middle ps-5 px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <Item className="[&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                      <circle cx="6" cy="19" r="3"></circle>
                                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                      <circle cx="18" cy="5" r="3"></circle>
                                    </svg>
                                  </ItemMedia>
                                </Item>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"VectorEdge Small"}
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono">
                                      {"TOK-7740"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"VectorEdge Small"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Provider"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"Leo Grant"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$21.8K"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"55% of $40.0K"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden md:table-cell px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Within Budget"}
                              </Badge>
                            </td>
                            <td className="align-middle hidden px-3 py-2 xl:table-cell">
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$0.42/1M"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"22.4M tokens"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle hidden lg:table-cell px-3 py-2">
                              <span className="text-muted-foreground text-sm">
                                {"31 min ago"}
                              </span>
                            </td>
                            <td className="align-middle pr-5 px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for VectorEdge Small" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
              </DataGridScrollArea>
              </DataGridProvider>
            </div>
            <CardFooter className="justify-between px-5 py-3">
              <DataGridProvider>
              <DataGridPagination>
                <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                  <div className="text-muted-foreground text-sm">
                    {"Rows per page"}
                  </div>
                  <Select>
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_1n_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      {"5"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_1n_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    {"1 - 5 of 20"}
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
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
