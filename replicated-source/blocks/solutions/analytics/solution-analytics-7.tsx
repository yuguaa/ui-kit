import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
    <main className="bg-background min-h-svh text-foreground w-full" aria-labelledby="page-heading">
      <div className="max-sm:p-4 max-sm:pt-6 max-w-7xl mx-auto p-6 pt-8 w-full">
        <h1 className="sr-only" id="page-heading">
          {"Experiment report"}
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <header className="flex gap-3 h-12 items-center px-1 shrink-0 w-full">
            <div className="flex gap-2 items-center shrink-0">
              <Item className="[&_svg]:size-4 bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
                <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </Item>
              <span className="font-semibold hidden sm:inline text-sm">
                {"Aster Cloud"}
              </span>
            </div>
            <nav className="flex gap-1.5 items-center min-w-0" aria-label="Breadcrumb">
              <span className="hidden sm:inline text-muted-foreground text-sm">
                {"Experiments"}
              </span>
              <span className="hidden sm:inline text-muted-foreground text-sm">
                {"/"}
              </span>
              <span className="font-medium text-sm truncate">
                {"Report"}
              </span>
            </nav>
            <div className="flex gap-1.5 items-center ml-auto shrink-0">
              <Button type="button" tabIndex={0} aria-label="Alerts" extracted="1">
                <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
              </Button>
              <Button type="button" tabIndex={0}>
                {"Share"}
              </Button>
              <Avatar className="size-7" size="default">
                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </div>
          </header>
          <Card className="w-full" size="sm">
            <CardHeader className="border-b">
              <CardTitle>
                {"Decision"}
              </CardTitle>
              <CardAction className="self-center text-muted-foreground text-xs">
                {"Updated Jun 15, 8:40 AM"}
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3.5 items-center min-w-0">
                <Item className="[&_svg]:size-5 [&_svg]:text-success bg-success/10 border border-success/20 dark:bg-success/15 p-0 size-11" variant="default" size="default">
                  <svg className="lucide lucide-flask-conical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlaskConicalIcon" tabler="IconFlask" hugeicons="TestTube01Icon" phosphor="FlaskIcon" remixicon="RiFlaskLine" aria-hidden="true">
                    <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                    <path d="M6.453 15h11.094"></path>
                    <path d="M8.5 2h7"></path>
                  </svg>
                </Item>
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex gap-2 items-center min-w-0">
                    <span className="font-medium leading-relaxed text-xs truncate uppercase">
                      {"EXP-224 · Checkout Copy B"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Winner likely"}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-1 md:flex-row md:gap-2 md:items-center">
                    <h2 className="font-semibold leading-tight text-2xl">
                      {"Ship Variant B"}
                    </h2>
                    <span className="dark:text-green-400 leading-relaxed text-green-800 text-xs">
                      {"94% confidence · +8.4% lift"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5 shrink-0">
                <Button type="button" tabIndex={0}>
                  {"Hold Control"}
                </Button>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                  </svg>
                  {"Approve Rollout"}
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="gap-0 p-0 w-full" size="sm">
            <CardHeader className="border-b gap-1 px-4 py-3">
              <CardTitle>
                {"Experiment Evidence"}
              </CardTitle>
              <CardDescription className="text-xs">
                {"6 experiments · 2 winner likely"}
              </CardDescription>
              <CardAction className="self-center">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  {"Export CSV"}
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-2 items-center px-4 py-3">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Select experiment period" aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false">
                  {"Last 14 days"}
                  <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter evidence" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                  {"Filters"}
                  <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="relative">
                <DataGridProvider>
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_b_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridProvider>
                      <DataGridTableViewport>
                        <DataGridProvider>
                        <DataGridTable>
                          <colgroup>
                            <col style={{width: "280px"}} />
                            <col style={{width: "170px"}} />
                            <col style={{width: "180px"}} />
                            <col style={{width: "100px"}} />
                            <col style={{width: "130px"}} />
                            <col style={{width: "170px"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="experiment" data-header-id="experiment" data-header-depth="0" style={{width: "280px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Experiment"}
                                    <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                      <path d="m5 12 7-7 7 7"></path>
                                      <path d="M12 19V5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="segment" data-header-id="segment" data-header-depth="0" style={{width: "170px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Segment"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="metric" data-header-id="metric" data-header-depth="0" style={{width: "180px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Metric"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lift" data-header-id="lift" data-header-depth="0" style={{width: "100px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Lift"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="confidence" data-header-id="confidence" data-header-depth="0" style={{width: "130px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Confidence"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "170px"}}>
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
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/evidence-row hover:bg-muted/40" data-row-id="exp-227">
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Admin Reactivation"}
                                    </div>
                                    <div className="text-muted-foreground text-sm truncate">
                                      {"Variant A · EXP-227"}
                                    </div>
                                  </div>
                                  <div className="flex gap-1 group-focus-within/evidence-row:opacity-100 group-focus-within/evidence-row:pointer-events-auto group-hover/evidence-row:opacity-100 group-hover/evidence-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                                    <Button type="button" tabIndex={0} aria-label="Inspect EXP-227">
                                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Dormant admins"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Weekly retained admins"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"-2.8%"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"74%"}
                                </span>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="text-sm truncate">
                                    {"Guardrail watch"}
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/evidence-row hover:bg-muted/40" data-row-id="exp-224">
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Checkout Copy B"}
                                    </div>
                                    <div className="text-muted-foreground text-sm truncate">
                                      {"Variant B · EXP-224"}
                                    </div>
                                  </div>
                                  <div className="flex gap-1 group-focus-within/evidence-row:opacity-100 group-focus-within/evidence-row:pointer-events-auto group-hover/evidence-row:opacity-100 group-hover/evidence-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                                    <Button type="button" tabIndex={0} aria-label="Inspect EXP-224">
                                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Trial workspaces"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Team activation"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"+8.4%"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"94%"}
                                </span>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="text-sm truncate">
                                    {"Winner likely"}
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/evidence-row hover:bg-muted/40" data-row-id="exp-230">
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarFallback>
                                      {"IV"}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Dashboard Load Hint"}
                                    </div>
                                    <div className="text-muted-foreground text-sm truncate">
                                      {"Variant B · EXP-230"}
                                    </div>
                                  </div>
                                  <div className="flex gap-1 group-focus-within/evidence-row:opacity-100 group-focus-within/evidence-row:pointer-events-auto group-hover/evidence-row:opacity-100 group-hover/evidence-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                                    <Button type="button" tabIndex={0} aria-label="Inspect EXP-230">
                                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Invite driven teams"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Report completion"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"-1.4%"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"69%"}
                                </span>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="text-sm truncate">
                                    {"Guardrail watch"}
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/evidence-row hover:bg-muted/40" data-row-id="exp-232">
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Expansion Prompt"}
                                    </div>
                                    <div className="text-muted-foreground text-sm truncate">
                                      {"Variant B · EXP-232"}
                                    </div>
                                  </div>
                                  <div className="flex gap-1 group-focus-within/evidence-row:opacity-100 group-focus-within/evidence-row:pointer-events-auto group-hover/evidence-row:opacity-100 group-hover/evidence-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                                    <Button type="button" tabIndex={0} aria-label="Inspect EXP-232">
                                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Expansion accounts"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Automation adoption"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"+3.2%"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"77%"}
                                </span>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="text-sm truncate">
                                    {"Inconclusive"}
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/evidence-row hover:bg-muted/40" data-row-id="exp-225">
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Invite Reminder Timing"}
                                    </div>
                                    <div className="text-muted-foreground text-sm truncate">
                                      {"Variant C · EXP-225"}
                                    </div>
                                  </div>
                                  <div className="flex gap-1 group-focus-within/evidence-row:opacity-100 group-focus-within/evidence-row:pointer-events-auto group-hover/evidence-row:opacity-100 group-hover/evidence-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                                    <Button type="button" tabIndex={0} aria-label="Inspect EXP-225">
                                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Invite driven teams"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Invite completion"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"+5.9%"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"91%"}
                                </span>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="text-sm truncate">
                                    {"Winner likely"}
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/evidence-row hover:bg-muted/40" data-row-id="exp-233">
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-8" size="default">
                                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">
                                      {"Support Ticket Deflection"}
                                    </div>
                                    <div className="text-muted-foreground text-sm truncate">
                                      {"Variant A · EXP-233"}
                                    </div>
                                  </div>
                                  <div className="flex gap-1 group-focus-within/evidence-row:opacity-100 group-focus-within/evidence-row:pointer-events-auto group-hover/evidence-row:opacity-100 group-hover/evidence-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                                    <Button type="button" tabIndex={0} aria-label="Inspect EXP-233">
                                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Expansion accounts"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block text-sm truncate">
                                  {"Support tickets"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"+1.9%"}
                                </span>
                              </td>
                              <td className="align-middle px-2 py-1.5">
                                <span className="block tabular-nums text-sm truncate">
                                  {"62%"}
                                </span>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                <div className="flex gap-2 items-center min-w-0">
                                  <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="text-sm truncate">
                                    {"Paused"}
                                  </span>
                                </div>
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
            </CardContent>
            <CardFooter className="border-t px-4 py-3">
              <div className="flex justify-end w-full">
                <DataGridProvider>
                <DataGridPagination className="py-0">
                  <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                    <div className="text-muted-foreground text-sm">
                      {"Rows per page"}
                    </div>
                    <Select>
                    <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_c_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                      <SelectValue>
                        {"6"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_c_-hidden-input" tabIndex={-1} aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                    <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                      {"1 - 6 of 6 evidence rows"}
                    </div>
                  </div>
                </DataGridPagination>
                </DataGridProvider>
              </div>
            </CardFooter>
          </Card>
          <div className="gap-4 grid lg:grid-cols-2">
            <Card className="h-full w-full" size="sm">
              <CardHeader className="border-b">
                <div className="flex gap-2 items-center">
                  <Item className="[&_svg]:size-4 [&_svg]:text-success bg-success/10 border border-success/20 dark:bg-success/15 p-0 size-8" variant="default" size="default">
                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                    </svg>
                  </Item>
                  <CardTitle>
                    {"Rollout Plan"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex gap-2 items-center min-w-0">
                  <svg className="lucide lucide-flag shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                    <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                  </svg>
                  <span className="text-sm truncate">
                    {"EXP-224 Checkout Copy B"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    {"Primary"}
                  </Badge>
                </div>
                <div className="flex gap-2 items-center min-w-0">
                  <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span className="text-sm truncate">
                    {"14 day read"}
                  </span>
                  <span className="text-muted-foreground text-sm truncate">
                    {"Next review Jun 17"}
                  </span>
                </div>
                <div className="flex gap-2 items-center min-w-0">
                  <svg className="lucide lucide-git-branch shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
                    <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                    <circle cx={18} cy={6} r={3}></circle>
                    <circle cx={6} cy={18} r={3}></circle>
                  </svg>
                  <span className="text-sm truncate">
                    {"Trial workspaces first"}
                  </span>
                  <span className="text-muted-foreground text-sm truncate">
                    {"Expansion on control"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-sm">
                    {"Decision Note"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"Ship to trial workspaces first. Hold expansion accounts on control until support tickets stay under guardrail."}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full w-full" size="sm">
              <CardHeader className="border-b">
                <div className="flex gap-2 items-center">
                  <Item className="[&_svg]:size-4 [&_svg]:text-success bg-success/10 border border-success/20 dark:bg-success/15 p-0 size-8" variant="default" size="default">
                    <svg className="lucide lucide-shield" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </Item>
                  <CardTitle>
                    {"Guardrails"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex gap-2 items-center min-w-0">
                  <span className="font-medium shrink-0 text-sm">
                    {"Support tickets"}
                  </span>
                  <span className="min-w-0 text-muted-foreground text-sm truncate">
                    {"+1.6% over limit"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Watch"}
                  </Badge>
                </div>
                <div className="flex gap-2 items-center min-w-0">
                  <span className="font-medium shrink-0 text-sm">
                    {"Activation drop"}
                  </span>
                  <span className="min-w-0 text-muted-foreground text-sm truncate">
                    {"No negative lift"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Clear"}
                  </Badge>
                </div>
                <div className="flex gap-2 items-center min-w-0">
                  <span className="font-medium shrink-0 text-sm">
                    {"Checkout latency"}
                  </span>
                  <span className="min-w-0 text-muted-foreground text-sm truncate">
                    {"+12 ms of 35 ms"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Clear"}
                  </Badge>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-sm">
                    {"Next Check"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"1 of 3 guardrails near limit. Next check Jun 17."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
