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
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
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
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background lg:p-6 min-h-svh p-3 sm:p-4 w-full" aria-labelledby="page-heading">
      <div className="bg-background min-h-svh text-foreground w-full">
        <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full">
          <header className="flex flex-col gap-2 justify-between min-h-9 pb-1 shrink-0 sm:flex-row sm:items-center w-full" aria-label="Retail pulse header">
            <div className="flex flex-col gap-0.5 min-w-0 sm:flex-row sm:gap-2 sm:items-center">
              <h1 className="font-semibold text-sm tracking-tight truncate" id="page-heading">
                {"Retail Pulse"}
              </h1>
              <span className="bg-muted-foreground/40 hidden rounded-full shrink-0 size-1 sm:block" aria-hidden="true"></span>
              <p className="text-muted-foreground text-xs truncate">
                {"Monday, Aug 04, 2025"}
              </p>
              <span className="bg-muted-foreground/40 hidden md:block rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <p className="text-muted-foreground text-xs truncate" role="status" aria-live="polite">
                {"Synced at 09:20."}
              </p>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between leading-none max-w-full outline-none select-none shrink-0 tabular-nums transition-all w-60 whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                <span className="truncate">
                  {"Aug 1, 2025 - Aug 4, 2025"}
                </span>
                <svg className="group-hover/pick-date:text-foreground lucide lucide-calendar shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </PopoverTrigger>
              </Popover>
              <Button type="button" tabIndex="0" aria-label="Export orders">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                <span className="hidden sm:inline">
                  {"Export"}
                </span>
              </Button>
            </div>
          </header>
          <div className="gap-2 grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-3">
            <Frame>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-28">
                <div className="flex gap-2 items-start justify-between">
                  <div className="flex gap-3 items-start min-w-0">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-circle-dollar-sign size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                          <path d="M12 18V6"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"Net Revenue"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"8.8% above plan"}
                      </span>
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    {"+12.8%"}
                  </Badge>
                </div>
                <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                  <div className="min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"$128,420"}
                    </div>
                  </div>
                  <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "66.6667%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "72.2222%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "69.4444%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "80.5556%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "84.7222%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "76.3889%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "90.2778%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "100%"}}></span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <Frame>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-28">
                <div className="flex gap-2 items-start justify-between">
                  <div className="flex gap-3 items-start min-w-0">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"Units Moved"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"84% of monthly goal"}
                      </span>
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    {"+9.4%"}
                  </Badge>
                </div>
                <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                  <div className="min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"4,892"}
                    </div>
                  </div>
                  <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "55.3571%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "62.5%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "75%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "69.6429%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "78.5714%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "92.8571%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "87.5%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "100%"}}></span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <Frame>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-28">
                <div className="flex gap-2 items-start justify-between">
                  <div className="flex gap-3 items-start min-w-0">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"New Buyers"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"188 via referral"}
                      </span>
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    {"+18.6%"}
                  </Badge>
                </div>
                <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                  <div className="min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"642"}
                    </div>
                  </div>
                  <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "38.2979%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "55.3191%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "51.0638%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "65.9574%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "74.4681%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "80.8511%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "93.617%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "100%"}}></span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <Frame>
              <FramePanel className="flex flex-col gap-3 justify-between min-h-28">
                <div className="flex gap-2 items-start justify-between">
                  <div className="flex gap-3 items-start min-w-0">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-shopping-cart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" aria-hidden="true">
                          <circle cx="8" cy="21" r="1"></circle>
                          <circle cx="19" cy="21" r="1"></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-medium text-sm truncate">
                        {"Cart Recovery"}
                      </span>
                      <span className="block text-muted-foreground text-xs truncate">
                        {"risk in paid social"}
                      </span>
                    </div>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    {"-2.1%"}
                  </Badge>
                </div>
                <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                  <div className="min-w-0">
                    <div className="font-semibold tabular-nums text-xl tracking-tight">
                      {"38.4%"}
                    </div>
                  </div>
                  <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "100%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "95.4545%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "93.1818%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "88.6364%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "90.9091%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "84.0909%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "86.3636%"}}></span>
                    <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "81.8182%"}}></span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
          </div>
          <section className="gap-3 grid lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,1fr)] min-w-0" aria-label="Revenue analytics">
            <Frame className="h-full min-w-0">
              <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-px">
                  <div className="font-semibold text-sm">
                    {"Revenue Pace"}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {"Daily revenue, month to date"}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center sm:justify-end">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center sm:justify-end text-muted-foreground text-xs">
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="rounded-full size-2" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></span>
                      {"Online"}
                    </span>
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="rounded-full size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                      {"Retail"}
                    </span>
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="rounded-full size-2" aria-hidden="true" style={{backgroundColor: "var(--color-slate-500)"}}></span>
                      {"Plan"}
                    </span>
                  </div>
                  <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Revenue period" style={{"--gap": "0"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0">
                      {"Month"}
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                      {"Quarter"}
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </header>
              <FramePanel className="flex flex-1 flex-col gap-4 min-h-[360px]">
                <div className="gap-3 grid sm:grid-cols-3">
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      {"Booked"}
                    </div>
                    <div className="font-semibold tabular-nums text-lg">
                      {"$128K"}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      {"Plan Gap"}
                    </div>
                    <div className="font-semibold tabular-nums text-lg">
                      {"+$10K"}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      {"Gross Profit"}
                    </div>
                    <div className="flex gap-1.5 items-baseline">
                      <span className="font-semibold tabular-nums text-lg">
                        {"$41K"}
                      </span>
                      <span className="font-medium text-success text-xs">
                        {"32%"}
                      </span>
                    </div>
                  </div>
                </div>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-64 justify-center min-w-0 mt-auto text-xs w-full" data-chart="chart-_r_4_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_4_] {\n  --color-online: var(--color-sky-500);\n  --color-store: var(--color-violet-500);\n  --color-target: var(--color-slate-500);\n}\n\n\n.dark [data-chart=chart-_r_4_] {\n  --color-online: var(--color-sky-500);\n  --color-store: var(--color-violet-500);\n  --color-target: var(--color-slate-500);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="690" height="256" style={{position: "relative", cursor: "default", width: "690px", height: "256px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="690" height="256" viewBox="0 0 690 256" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="682" height="218" x1="0" y1="226" x2="682" y2="226"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="682" height="218" x1="0" y1="171.5" x2="682" y2="171.5"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="682" height="218" x1="0" y1="117" x2="682" y2="117"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="682" height="218" x1="0" y1="62.5" x2="682" y2="62.5"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="682" height="218" x1="0" y1="8" x2="682" y2="8"></line>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts1-clip">
                              <rect x="0" y="8" height="218" width="682"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <pattern id="dashboard-7-revenue-online" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                              <path d="M0,8 L8,0" stroke="var(--color-sky-500)" strokeOpacity="0.42" strokeWidth="0.9"></path>
                              <path d="M0,0 L8,8" stroke="var(--color-sky-500)" strokeOpacity="0.22" strokeWidth="0.9"></path>
                            </pattern>
                            <pattern id="dashboard-7-revenue-store" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                              <path d="M0,8 L8,0" stroke="var(--color-violet-500)" strokeOpacity="0.42" strokeWidth="0.9"></path>
                              <path d="M0,0 L8,8" stroke="var(--color-violet-500)" strokeOpacity="0.22" strokeWidth="0.9"></path>
                            </pattern>
                            <pattern id="dashboard-7-revenue-target" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                              <path d="M0,8 L8,0" stroke="var(--color-slate-500)" strokeOpacity="0.42" strokeWidth="0.9"></path>
                              <path d="M0,0 L8,8" stroke="var(--color-slate-500)" strokeOpacity="0.22" strokeWidth="0.9"></path>
                            </pattern>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#dashboard-7-revenue-online)" fillOpacity="0.65" height="218" stroke="none" width="682" id="recharts-area-_r_d_" d="M0,123.056C75.778,108.119,151.556,93.181,227.333,92.778C303.111,92.374,378.889,106.504,454.667,110.944C530.444,115.385,606.222,110.137,682,104.889L682,226C606.222,226,530.444,226,454.667,226C378.889,226,303.111,226,227.333,226C151.556,226,75.778,226,0,226Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.65" height="218" stroke="var(--color-online)" width="682" d="M0,123.056C75.778,108.119,151.556,93.181,227.333,92.778C303.111,92.374,378.889,106.504,454.667,110.944C530.444,115.385,606.222,110.137,682,104.889"></path>
                              </g>
                            </g>
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#dashboard-7-revenue-store)" fillOpacity="0.65" height="218" stroke="none" width="682" id="recharts-area-_r_e_" d="M0,56.444C75.778,33.299,151.556,10.153,227.333,8C303.111,5.847,378.889,24.686,454.667,32.222C530.444,39.758,606.222,35.99,682,32.222L682,104.889C606.222,110.137,530.444,115.385,454.667,110.944C378.889,106.504,303.111,92.374,227.333,92.778C151.556,93.182,75.778,108.119,0,123.056Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.65" height="218" stroke="var(--color-store)" width="682" d="M0,56.444C75.778,33.299,151.556,10.153,227.333,8C303.111,5.847,378.889,24.686,454.667,32.222C530.444,39.758,606.222,35.99,682,32.222"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1">
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-target)" strokeDasharray="4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 3.1435546875px, 683.1435546875px" strokeWidth="2" fill="none" id="recharts-line-_r_f_" height="218" width="682" d="M0,44.333C75.778,39.623,151.556,34.914,227.333,38.278C303.111,41.642,378.889,53.08,454.667,56.444C530.444,59.809,606.222,55.099,682,50.389"></path>
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
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="682" stroke="none" x="227.33333333333334" y="242" textAnchor="middle" fill="#666">
                                  <tspan x="227.33333333333334" dy="0.71em">
                                    {"Aug 02"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="682" stroke="none" x="454.6666666666667" y="242" textAnchor="middle" fill="#666">
                                  <tspan x="454.6666666666667" dy="0.71em">
                                    {"Aug 03"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="682" stroke="none" x="669.28125" y="242" textAnchor="middle" fill="#666">
                                  <tspan x="669.28125" dy="0.71em">
                                    {"Aug 04"}
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
            <Frame className="h-full min-w-0">
              <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-px">
                  <div className="font-semibold text-sm">
                    {"Channel Mix"}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {"Daily order share"}
                  </div>
                </div>
                <Button type="button" tabIndex="0" aria-label="Focus direct channel" aria-pressed="false">
                  {"Direct"}
                </Button>
              </header>
              <FramePanel className="flex flex-1 flex-col gap-4 min-h-[360px]">
                <div className="gap-3 grid grid-cols-2">
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      {"Latest Orders"}
                    </div>
                    <div className="font-semibold tabular-nums text-lg">
                      {"46"}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      {"Direct Share"}
                    </div>
                    <div className="font-semibold tabular-nums text-lg">
                      {"39%"}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-cyan-500 rounded-full size-2" aria-hidden="true"></span>
                    {"Direct"}
                  </span>
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-violet-500 rounded-full size-2" aria-hidden="true"></span>
                    {"Partners"}
                  </span>
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-amber-400 rounded-full size-2" aria-hidden="true"></span>
                    {"Marketplace"}
                  </span>
                </div>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-64 justify-center min-w-0 mt-auto text-xs w-full" data-chart="chart-_r_5_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_5_] {\n  --color-direct: var(--color-cyan-500);\n  --color-partners: var(--color-violet-500);\n  --color-marketplace: var(--color-amber-400);\n}\n\n\n.dark [data-chart=chart-_r_5_] {\n  --color-direct: var(--color-cyan-500);\n  --color-partners: var(--color-violet-500);\n  --color-marketplace: var(--color-amber-400);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="446" height="256" style={{position: "relative", cursor: "default", width: "446px", height: "256px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="446" height="256" viewBox="0 0 446 256" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="438" height="218" x1="0" y1="226" x2="438" y2="226"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="438" height="218" x1="0" y1="171.5" x2="438" y2="171.5"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="438" height="218" x1="0" y1="117" x2="438" y2="117"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="438" height="218" x1="0" y1="62.5" x2="438" y2="62.5"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="438" height="218" x1="0" y1="8" x2="438" y2="8"></line>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts2-clip">
                              <rect x="0" y="8" height="218" width="438"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <pattern id="dashboard-7-channel-direct" width="8" height="8" patternUnits="userSpaceOnUse">
                              <rect width="8" height="8" fill="var(--color-direct)"></rect>
                              <path d="M-1 8L8 -1M3 9L9 3" stroke="var(--color-background)" strokeOpacity="0.2" strokeWidth="1"></path>
                            </pattern>
                            <pattern id="dashboard-7-channel-partners" width="8" height="8" patternUnits="userSpaceOnUse">
                              <rect width="8" height="8" fill="var(--color-partners)"></rect>
                              <circle cx="2" cy="2" r="0.9" fill="var(--color-background)" fillOpacity="0.22"></circle>
                              <circle cx="6" cy="6" r="0.9" fill="var(--color-background)" fillOpacity="0.22"></circle>
                            </pattern>
                            <pattern id="dashboard-7-channel-marketplace" width="8" height="8" patternUnits="userSpaceOnUse">
                              <rect width="8" height="8" fill="var(--color-marketplace)"></rect>
                              <path d="M2 0V8M6 0V8" stroke="var(--color-background)" strokeOpacity="0.18" strokeWidth="1"></path>
                            </pattern>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1">
                            <g className="recharts-bar recharts-layer" id="recharts-bar-_r_g_">
                              <g className="recharts-bar-rectangles recharts-layer">
                                <g className="recharts-layer">
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="10.95" y="125.72" width="87" height="100.28" d={"M10.95,125.72L 97.95,125.72L 97.95,222A 4,4,0,0,1,\n        93.95,226L 14.95,226A 4,4,0,0,1,\n        10.95,222Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="120.45" y="125.72" width="87" height="100.28" d={"M120.45,125.72L 207.45,125.72L 207.45,222A 4,4,0,0,1,\n        203.45,226L 124.45,226A 4,4,0,0,1,\n        120.45,222Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="229.95" y="123.54" width="87" height="102.46" d={"M229.95,123.54L 316.95,123.54L 316.95,222A 4,4,0,0,1,\n        312.95,226L 233.95,226A 4,4,0,0,1,\n        229.95,222Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="339.45" y="140.98" width="87" height="85.02" d={"M339.45,140.98L 426.45,140.98L 426.45,222A 4,4,0,0,1,\n        422.45,226L 343.45,226A 4,4,0,0,1,\n        339.45,222Z"}></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-bar recharts-layer" id="recharts-bar-_r_h_">
                              <g className="recharts-bar-rectangles recharts-layer">
                                <g className="recharts-layer">
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="10.95" y="75.58" width="87" height="50.14" radius="0" d="M 10.95,75.58 h 87 v 50.14 h -87 Z"></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="120.45" y="75.58" width="87" height="50.14" radius="0" d="M 120.45,75.58 h 87 v 50.14 h -87 Z"></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="229.95" y="73.4" width="87" height="50.14" radius="0" d="M 229.95,73.4 h 87 v 50.14 h -87 Z"></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="339.45" y="84.3" width="87" height="56.68" radius="0" d="M 339.45,84.3 h 87 v 56.68 h -87 Z"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-bar recharts-layer" id="recharts-bar-_r_i_">
                              <g className="recharts-bar-rectangles recharts-layer">
                                <g className="recharts-layer">
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="10.95" y="8" width="87" height="67.58" d={"M10.95,12A 4,4,0,0,1,14.95,8L 93.95,8A 4,4,0,0,1,\n        97.95,12L 97.95,75.58L 10.95,75.58Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="120.45" y="8" width="87" height="67.58" d={"M120.45,12A 4,4,0,0,1,124.45,8L 203.45,8A 4,4,0,0,1,\n        207.45,12L 207.45,75.58L 120.45,75.58Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="229.95" y="8" width="87" height="65.4" d={"M229.95,12A 4,4,0,0,1,233.95,8L 312.95,8A 4,4,0,0,1,\n        316.95,12L 316.95,73.4L 229.95,73.4Z"}></path>
                                    </g>
                                  </g>
                                  <g className="recharts-bar-rectangle recharts-layer">
                                    <g className="recharts-inactive-bar recharts-layer">
                                      <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="339.45" y="8" width="87" height="76.3" d={"M339.45,12A 4,4,0,0,1,343.45,8L 422.45,8A 4,4,0,0,1,\n        426.45,12L 426.45,84.3L 339.45,84.3Z"}></path>
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
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="438" stroke="none" x="54.75" y="242" textAnchor="middle" fill="#666">
                                  <tspan x="54.75" dy="0.71em">
                                    {"Fri"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="438" stroke="none" x="164.25" y="242" textAnchor="middle" fill="#666">
                                  <tspan x="164.25" dy="0.71em">
                                    {"Sat"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="438" stroke="none" x="273.75" y="242" textAnchor="middle" fill="#666">
                                  <tspan x="273.75" dy="0.71em">
                                    {"Sun"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="438" stroke="none" x="383.25" y="242" textAnchor="middle" fill="#666">
                                  <tspan x="383.25" dy="0.71em">
                                    {"Mon"}
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
          </section>
          <Frame className="min-w-0">
            <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-px">
                <div className="font-semibold text-sm">
                  {"Order Queue"}
                </div>
                <div className="text-muted-foreground text-sm">
                  {"6 orders from Aug 1, 2025 - Aug 4, 2025"}
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:w-auto sm:flex-row w-full">
                <InputGroup className="lg:w-64 sm:min-w-56" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_7_" placeholder="Search orders" aria-label="Search orders" value="" />
                </InputGroup>
                <Button type="button" tabIndex="0" aria-pressed="false">
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  {"Exceptions"}
                </Button>
              </div>
            </header>
            <FramePanel className="p-0!">
              <div className="relative">
                <DataGridProvider>
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridProvider>
                      <DataGridTableViewport style={{width: "calc(1222px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                        <DataGridProvider>
                        <DataGridTable style={{"--header-id-size": "144", "--col-id-size": "144", "--header-customer-size": "350", "--col-customer-size": "350", "--header-product-size": "196", "--col-product-size": "196", "--header-fulfillment-size": "196", "--col-fulfillment-size": "196", "--header-amount-size": "120", "--col-amount-size": "120", "--header-status-size": "128", "--col-status-size": "128", "--header-actions-size": "88", "--col-actions-size": "88", width: "calc(1222px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-id-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-customer-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-product-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-fulfillment-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-amount-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="id" data-header-id="id" data-header-depth="0" style={{width: "calc(var(--header-id-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    {"Order"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="customer" data-header-id="customer" data-header-depth="0" style={{width: "calc(var(--header-customer-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    {"Customer"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="product" data-header-id="product" data-header-depth="0" style={{width: "calc(var(--header-product-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    {"Product"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="fulfillment" data-header-id="fulfillment" data-header-depth="0" style={{width: "calc(var(--header-fulfillment-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    {"Fulfillment"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="amount" data-header-id="amount" data-header-depth="0" style={{width: "calc(var(--header-amount-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    {"Amount"}
                                    <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                    {"Status"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RVO-8033">
                              <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View order RVO-8033" aria-haspopup="dialog">
                                    {"RVO-8033"}
                                  </button>
                                  <div className="text-muted-foreground text-xs truncate">
                                    {"Aug 02, 2025"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Alex Johnson"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Partner"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm truncate">
                                    {"Aero Carry Kit"}
                                  </div>
                                  <div className="font-mono text-muted-foreground text-xs truncate">
                                    {"AERO-30L"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    {"Shipped"}
                                  </span>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                      <span className="bg-success block h-full rounded-full" style={{width: "84%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"84%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium tabular-nums text-sm">
                                    {"$652"}
                                  </div>
                                  <div className="tabular-nums text-muted-foreground text-xs">
                                    {"Qty 4"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                  {"Paid"}
                                </Badge>
                              </td>
                              <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <Button type="button" tabIndex="0" aria-label="View RVO-8033" aria-haspopup="dialog">
                                  {"View"}
                                </Button>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RVO-8131">
                              <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View order RVO-8131" aria-haspopup="dialog">
                                    {"RVO-8131"}
                                  </button>
                                  <div className="text-muted-foreground text-xs truncate">
                                    {"Aug 04, 2025"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Mira Stone"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Direct"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm truncate">
                                    {"Aero Carry Kit"}
                                  </div>
                                  <div className="font-mono text-muted-foreground text-xs truncate">
                                    {"AERO-30L"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    {"Shipped"}
                                  </span>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                      <span className="bg-success block h-full rounded-full" style={{width: "100%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"100%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium tabular-nums text-sm">
                                    {"$489"}
                                  </div>
                                  <div className="tabular-nums text-muted-foreground text-xs">
                                    {"Qty 3"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                  {"Paid"}
                                </Badge>
                              </td>
                              <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <Button type="button" tabIndex="0" aria-label="View RVO-8131" aria-haspopup="dialog">
                                  {"View"}
                                </Button>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RVO-8088">
                              <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View order RVO-8088" aria-haspopup="dialog">
                                    {"RVO-8088"}
                                  </button>
                                  <div className="text-muted-foreground text-xs truncate">
                                    {"Aug 03, 2025"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-info bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Nora Vale"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Marketplace"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm truncate">
                                    {"Orbit Weekender"}
                                  </div>
                                  <div className="font-mono text-muted-foreground text-xs truncate">
                                    {"ORBIT-WK"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    {"On Hold"}
                                  </span>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                      <span className="bg-info block h-full rounded-full" style={{width: "28%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"28%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium tabular-nums text-sm">
                                    {"$319"}
                                  </div>
                                  <div className="tabular-nums text-muted-foreground text-xs">
                                    {"Qty 1"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                  {"Review"}
                                </Badge>
                              </td>
                              <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <Button type="button" tabIndex="0" aria-label="View RVO-8088" aria-haspopup="dialog">
                                  {"View"}
                                </Button>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RVO-8117">
                              <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View order RVO-8117" aria-haspopup="dialog">
                                    {"RVO-8117"}
                                  </button>
                                  <div className="text-muted-foreground text-xs truncate">
                                    {"Aug 04, 2025"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-warning bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Leo Grant"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Partner"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm truncate">
                                    {"Pulse Desk Lamp"}
                                  </div>
                                  <div className="font-mono text-muted-foreground text-xs truncate">
                                    {"PULSE-LMP"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    {"Packing"}
                                  </span>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                      <span className="bg-warning block h-full rounded-full" style={{width: "62%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"62%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium tabular-nums text-sm">
                                    {"$268"}
                                  </div>
                                  <div className="tabular-nums text-muted-foreground text-xs">
                                    {"Qty 2"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                  {"Pending"}
                                </Badge>
                              </td>
                              <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <Button type="button" tabIndex="0" aria-label="View RVO-8117" aria-haspopup="dialog">
                                  {"View"}
                                </Button>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="RVO-8054">
                              <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View order RVO-8054" aria-haspopup="dialog">
                                    {"RVO-8054"}
                                  </button>
                                  <div className="text-muted-foreground text-xs truncate">
                                    {"Aug 02, 2025"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <div className="relative shrink-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="absolute bg-destructive bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Sana Qureshi"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Retail"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm truncate">
                                    {"Slate Travel Dock"}
                                  </div>
                                  <div className="font-mono text-muted-foreground text-xs truncate">
                                    {"SLATE-DCK"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    {"Returned"}
                                  </span>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                      <span className="bg-destructive block h-full rounded-full" style={{width: "100%"}}></span>
                                    </span>
                                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                      {"100%"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                <div className="min-w-0">
                                  <div className="font-medium tabular-nums text-sm">
                                    {"$238"}
                                  </div>
                                  <div className="tabular-nums text-muted-foreground text-xs">
                                    {"Qty 2"}
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full size-1.5" aria-hidden="true"></span>
                                  {"Refunded"}
                                </Badge>
                              </td>
                              <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                <Button type="button" tabIndex="0" aria-label="View RVO-8054" aria-haspopup="dialog">
                                  {"View"}
                                </Button>
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
              <DataGridPagination className="py-0">
                <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                  <div className="text-muted-foreground text-sm">
                    {"Rows per page"}
                  </div>
                  <Select>
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_9_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      {"5"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_9_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    {"1 - 5 of 6 orders"}
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
        </div>
      </div>
    </main>
  )
}
