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
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/bases/base/ui/progress"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="@container flex flex-col gap-4 max-w-7xl min-h-svh mx-auto p-6 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Product Dashboard"}
      </h1>
      <header className="flex gap-2 items-center justify-between min-h-12 shrink-0 w-full">
        <Breadcrumb aria-label="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
                <svg className="size-5" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <defs>
                    <lineargradient id="solution-analytics-1-aster" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0ea5e9"></stop>
                      <stop offset="50%" stopColor="#6366f1"></stop>
                      <stop offset="100%" stopColor="#14b8a6"></stop>
                    </lineargradient>
                  </defs>
                  <circle cx={14} cy={14} r={14} fill="url(#solution-analytics-1-aster)"></circle>
                </svg>
                <span className="hidden md:block">
                  {"Aster Cloud"}
                </span>
                <svg className="lucide lucide-chevrons-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden sm:flex" role="presentation" aria-hidden="true">
              {"/"}
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <span className="bg-slate-400 rounded-full shrink-0 size-2"></span>
                <span className="hidden md:block">
                  {"All segments"}
                </span>
                <svg className="lucide lucide-chevrons-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-2 items-center shrink-0">
          <Button type="button" tabIndex={0} aria-label="Refresh dashboard">
            <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M8 16H3v5"></path>
            </svg>
          </Button>
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-file-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileDownIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownloadLine" aria-hidden="true">
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
              <path d="M12 18v-6"></path>
              <path d="m9 15 3 3 3-3"></path>
            </svg>
            <span className="hidden md:block">
              {"Export CSV"}
            </span>
          </Button>
          <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <Avatar className="rounded-md size-6" size="default" aria-label="Mira Stone, Product analytics lead">
            <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
          </Avatar>
        </div>
      </header>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5">
            <div className="font-semibold text-balance text-foreground text-sm" id="backlog-grid-heading">
              {"Signal Backlog"}
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              {"4 healthy · 2 at risk"}
            </div>
          </div>
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
              <path d="M12 17v5"></path>
              <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
            </svg>
            {"Review Queue"}
          </Button>
        </header>
        <FramePanel className="p-0 shadow-none">
          <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
            <div className="flex flex-1 flex-wrap gap-2 items-center min-w-0">
              <div className="flex-1 min-w-0 relative sm:max-w-xs">
                <svg className="-translate-y-1/2 absolute left-2.5 lucide lucide-search pointer-events-none size-4 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx={11} cy={11} r={8}></circle>
                </svg>
                <Input className="ps-8" id="base-ui-_r_b_" aria-label="Search backlog signals" placeholder="Search signals..." value=""></Input>
              </div>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                {"All segments"}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Table actions" aria-haspopup="menu" id="base-ui-_r_f_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
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
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_h_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport style={{width: "calc(1206px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridProvider>
                    <DataGridTable style={{"--header-signal-size": "376", "--col-signal-size": "376", "--header-tags-size": "210", "--col-tags-size": "210", "--header-score-size": "148", "--col-score-size": "148", "--header-trend-size": "108", "--col-trend-size": "108", "--header-events-size": "100", "--col-events-size": "100", "--header-priority-size": "94", "--col-priority-size": "94", "--header-status-size": "110", "--col-status-size": "110", "--header-actions-size": "60", "--col-actions-size": "60", width: "calc(1206px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-signal-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-tags-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-score-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-trend-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-events-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-priority-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="signal" data-header-id="signal" data-header-depth="0" style={{width: "calc(var(--header-signal-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                                {"Signal"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="tags" data-header-id="tags" data-header-depth="0" style={{width: "calc(var(--header-tags-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                {"Segment"}
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="score" data-header-id="score" data-header-depth="0" style={{width: "calc(var(--header-score-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                {"Score"}
                                <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                  <path d="M12 5v14"></path>
                                  <path d="m19 12-7 7-7-7"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="trend" data-header-id="trend" data-header-depth="0" style={{width: "calc(var(--header-trend-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                {"Trend"}
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="events" data-header-id="events" data-header-depth="0" style={{width: "calc(var(--header-events-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                {"Events"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="priority" data-header-id="priority" data-header-depth="0" style={{width: "calc(var(--header-priority-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1e_" aria-expanded="false">
                                {"Priority"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                                {"Status"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-001">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-signal-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-emerald-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground underline-offset-2" href="#">
                                  {"Template gallery depth"}
                                </a>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="Trial workspace activation">
                                  {"Trial workspace activation · FEA-118"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                {"Activation"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                {"Adoption"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar" aria-labelledby="base-ui-_r_1l_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1l_" role="presentation">
                                {"Health score"}
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                {"68%"}
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "68%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <svg className="shrink-0" width={92} height={26} viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 20 C 4.095238095238095 20.666666666666668, 10.38095238095238 24.666666666666668, 14.571428571428571 24 C 18.761904761904763 23.333333333333332, 22.952380952380953 16.5, 27.142857142857142 16 C 31.333333333333332 15.5, 35.523809523809526 21.666666666666668, 39.714285714285715 21 C 43.904761904761905 20.333333333333332, 48.095238095238095 13, 52.285714285714285 12 C 56.476190476190474 11, 60.66666666666667 15.833333333333334, 64.85714285714286 15 C 69.04761904761905 14.166666666666666, 73.23809523809524 9.166666666666666, 77.42857142857143 7 C 81.61904761904762 4.833333333333334, 87.9047619047619 2.8333333333333335, 90 2" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-events-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              {"486k"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              {"High"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              {"Healthy"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Template gallery depth" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-006">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-signal-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarFallback className="text-[10px]">
                                    {"IV"}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="absolute bg-emerald-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground underline-offset-2" href="#">
                                  {"Automation expansion"}
                                </a>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="Automation rule adoption">
                                  {"Automation rule adoption · SEG-307"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                {"Adoption"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-muted border-0 border-transparent dark:bg-muted/70 dark:text-muted-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-muted-foreground text-xs transition-shadow">
                                {"Data"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="62" aria-valuetext="62%" role="progressbar" aria-labelledby="base-ui-_r_1r_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1r_" role="presentation">
                                {"Health score"}
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                {"62%"}
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "62%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <svg className="shrink-0" width={92} height={26} viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 17.714285714285715 C 4.095238095238095 18.761904761904763, 10.38095238095238 24.785714285714285, 14.571428571428571 24 C 18.761904761904763 23.214285714285715, 22.952380952380953 13.785714285714286, 27.142857142857142 13 C 31.333333333333332 12.214285714285714, 35.523809523809526 19.80952380952381, 39.714285714285715 19.285714285714285 C 43.904761904761905 18.76190476190476, 48.095238095238095 10.642857142857142, 52.285714285714285 9.857142857142858 C 56.476190476190474 9.071428571428573, 60.66666666666667 15.357142857142858, 64.85714285714286 14.571428571428571 C 69.04761904761905 13.785714285714285, 73.23809523809524 7.238095238095237, 77.42857142857143 5.142857142857142 C 81.61904761904762 3.047619047619047, 87.9047619047619 2.5238095238095237, 90 2" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-events-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              {"92k"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              {"Low"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              {"Healthy"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Automation expansion" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-005">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-signal-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-emerald-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground underline-offset-2" href="#">
                                  {"Checklist nudge lift"}
                                </a>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="Dormant admin exposure">
                                  {"Dormant admin exposure · EXP-224"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-100 border-0 border-transparent dark:bg-amber-950/50 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-amber-800 text-xs transition-shadow">
                                {"Risk"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border-0 border-transparent dark:bg-sky-950/50 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-sky-800 text-xs transition-shadow">
                                {"Activation"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar" aria-labelledby="base-ui-_r_21_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_21_" role="presentation">
                                {"Health score"}
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                {"58%"}
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <svg className="shrink-0" width={92} height={26} viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 21.68421052631579 C 4.095238095238095 21.10526315789474, 10.38095238095238 17.82456140350877, 14.571428571428571 18.210526315789473 C 18.761904761904763 18.596491228070175, 22.952380952380953 24.57894736842105, 27.142857142857142 24 C 31.333333333333332 23.42105263157895, 35.523809523809526 15.894736842105262, 39.714285714285715 14.736842105263158 C 43.904761904761905 13.578947368421053, 48.095238095238095 18.017543859649123, 52.285714285714285 17.05263157894737 C 56.476190476190474 16.087719298245617, 60.66666666666667 10.684210526315788, 64.85714285714286 8.94736842105263 C 69.04761904761905 7.210526315789472, 73.23809523809524 7.7894736842105265, 77.42857142857143 6.631578947368421 C 81.61904761904762 5.473684210526316, 87.9047619047619 2.7719298245614037, 90 2" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-events-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              {"64k"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              {"Low"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              {"Healthy"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Checklist nudge lift" aria-haspopup="menu" id="base-ui-_r_25_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-007">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-signal-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-emerald-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground underline-offset-2" href="#">
                                  {"Week four replay"}
                                </a>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="Retention replay cohort">
                                  {"Retention replay cohort · COH-088"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border-0 border-transparent dark:bg-indigo-950/50 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-indigo-800 text-xs transition-shadow">
                                {"Retention"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="55" aria-valuetext="55%" role="progressbar" aria-labelledby="base-ui-_r_27_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_27_" role="presentation">
                                {"Health score"}
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                {"55%"}
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "55%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <svg className="shrink-0" width={92} height={26} viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 22.30769230769231 C 4.095238095238095 21.179487179487182, 10.38095238095238 15.256410256410259, 14.571428571428571 15.53846153846154 C 18.761904761904763 15.820512820512821, 22.952380952380953 24.564102564102566, 27.142857142857142 24 C 31.333333333333332 23.435897435897434, 35.523809523809526 13.282051282051283, 39.714285714285715 12.153846153846155 C 43.904761904761905 11.025641025641027, 48.095238095238095 18.076923076923077, 52.285714285714285 17.23076923076923 C 56.476190476190474 16.384615384615383, 60.66666666666667 8.487179487179487, 64.85714285714286 7.0769230769230775 C 69.04761904761905 5.666666666666668, 73.23809523809524 9.615384615384617, 77.42857142857143 8.76923076923077 C 81.61904761904762 7.923076923076923, 87.9047619047619 3.1282051282051286, 90 2" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-events-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              {"143k"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"Medium"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                              {"Healthy"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Week four replay" aria-haspopup="menu" id="base-ui-_r_2b_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-004">
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 truncate" style={{width: "calc(var(--col-signal-size) * 1px)"}}>
                            <div className="flex gap-2 items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-blue-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground underline-offset-2" href="#">
                                  {"Report viewed stream"}
                                </a>
                                <div className="line-clamp-1 text-muted-foreground text-xs" title="Saved report event stream">
                                  {"Saved report event stream · EVT-1842"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-tags-size) * 1px)"}}>
                            <div className="flex flex-wrap gap-1 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border-0 border-transparent dark:bg-violet-950/50 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-violet-800 text-xs transition-shadow">
                                {"Adoption"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-muted border-0 border-transparent dark:bg-muted/70 dark:text-muted-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-muted-foreground text-xs transition-shadow">
                                {"Data"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-score-size) * 1px)"}}>
                            <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:min-w-12 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-value]:order-2 flex-1 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="53" aria-valuetext="53%" role="progressbar" aria-labelledby="base-ui-_r_2d_">
                              <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2d_" role="presentation">
                                {"Health score"}
                              </ProgressLabel>
                              <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                                {"53%"}
                              </ProgressValue>
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "53%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-trend-size) * 1px)"}}>
                            <svg className="shrink-0" width={92} height={26} viewBox="0 0 92 26" aria-hidden="true">
                              <path className="dark:stroke-emerald-400 stroke-emerald-600" d="M 2 20 C 4.095238095238095 19, 10.38095238095238 13.333333333333334, 14.571428571428571 14 C 18.761904761904763 14.666666666666666, 22.952380952380953 24.333333333333332, 27.142857142857142 24 C 31.333333333333332 23.666666666666668, 35.523809523809526 13.333333333333334, 39.714285714285715 12 C 43.904761904761905 10.666666666666666, 48.095238095238095 16.666666666666668, 52.285714285714285 16 C 56.476190476190474 15.333333333333334, 60.66666666666667 9.666666666666666, 64.85714285714286 8 C 69.04761904761905 6.333333333333333, 73.23809523809524 7, 77.42857142857143 6 C 81.61904761904762 5, 87.9047619047619 2.6666666666666665, 90 2" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-events-size) * 1px)"}}>
                            <span className="font-semibold tabular-nums text-foreground text-sm">
                              {"198k"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-priority-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"Medium"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-blue-500 rounded-full! shrink-0 size-1.5"></span>
                              {"Loading"}
                            </Badge>
                          </td>
                          <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Report viewed stream" aria-haspopup="menu" id="base-ui-_r_2h_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
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
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_2j_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"5"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_2j_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
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
      <div className="@5xl:grid-cols-2 [&>*]:min-w-0 gap-4 grid">
        <Frame className="h-full text-foreground w-full">
          <FramePanel className="flex flex-col h-full">
            <div className="flex gap-3 items-start justify-between mb-6">
              <div className="flex flex-col gap-px">
                <h3 className="font-semibold text-base text-foreground">
                  {"Product Health"}
                </h3>
                <span className="font-normal text-muted-foreground text-xs">
                  {"486k events at 09:40"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Select>
                <SelectTrigger className="h-8! w-32" type="button" tabIndex={0} id="base-ui-_r_2m_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"Last 30 days"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_2m_-hidden-input" tabIndex={-1} aria-hidden="true" value="30d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Button type="button" tabIndex={0} aria-label="Open health rules">
                  <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx={12} cy={12} r={3}></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 justify-between">
              <div className="space-y-5">
                <div className="gap-2 grid grid-cols-3">
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      {"486k"}
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      {"Events"}
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      {"+21%"}
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      {"68%"}
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      {"Health"}
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                      <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      {"+7%"}
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      {"2"}
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      {"Risk"}
                    </div>
                    <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-destructive text-xs">
                      <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                      {"-4%"}
                    </span>
                  </div>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-medium text-foreground text-sm">
                      {"Health Progress"}
                    </span>
                    <span className="font-semibold text-foreground text-xs">
                      {"68%"}
                    </span>
                  </div>
                  <Progress className="**:data-[slot=progress-track]:h-2.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "68%"}}></ProgressIndicator>
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
                        <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="text-foreground text-xs truncate">
                          {"FEA-118 reached 68% health."}
                        </span>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"09:40"}
                      </Badge>
                    </li>
                    <li className="flex gap-2.5 items-center justify-between text-sm">
                      <span className="flex gap-2 items-center min-w-0">
                        <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="text-foreground text-xs truncate">
                          {"486k product events rebuilt."}
                        </span>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"09:32"}
                      </Badge>
                    </li>
                    <li className="flex gap-2.5 items-center justify-between text-sm">
                      <span className="flex gap-2 items-center min-w-0">
                        <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-destructive w-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="text-foreground text-xs truncate">
                          {"COH-071 fell to 29% health."}
                        </span>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"09:20"}
                      </Badge>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-row gap-2.5 items-center p-2! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <Button className="flex-1" type="button" tabIndex={0}>
              {"Review"}
            </Button>
            <Button className="flex-1" type="button" tabIndex={0}>
              {"Full Report"}
            </Button>
          </footer>
        </Frame>
        <Frame className="h-full text-foreground w-full">
          <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
            <div className="font-semibold text-sm">
              {"Trend"}
            </div>
            <Select>
            <SelectTrigger className="min-w-[140px]" type="button" tabIndex={0} id="base-ui-_r_2p_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
              <SelectValue>
                {"12 months"}
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                {"▼"}
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_2p_-hidden-input" tabIndex={-1} aria-hidden="true" value="12m" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </header>
          <FramePanel className="space-y-4">
            <div className="flex flex-col gap-1">
              <div className="font-medium text-muted-foreground text-xs">
                {"Latest (Jul 01 to Jun 15)"}
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="font-semibold leading-none text-foreground text-xl">
                  {"68%"}
                </span>
                <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  {"7.0%"}
                </span>
              </div>
            </div>
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[300px] justify-center text-xs w-full" data-chart="chart-_r_2s_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_2s_] {\n  --color-value: var(--color-violet-500);\n}\n\n\n.dark [data-chart=chart-_r_2s_] {\n  --color-value: var(--color-violet-500);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width={558} height={300} style={{position: "relative", cursor: "default", width: "558px", height: "300px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex={0} width={558} height={300} viewBox="0 0 558 300" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={538} height={250} x1={10} y1={260} x2={548} y2={260}></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={538} height={250} x1={10} y1={197.5} x2={548} y2={197.5}></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={538} height={250} x1={10} y1={135} x2={548} y2={135}></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={538} height={250} x1={10} y1={72.5} x2={548} y2={72.5}></line>
                            <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={538} height={250} x1={10} y1={10} x2={548} y2={10}></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x={10} y={10} height={250} width={538}></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <lineargradient id="dashboardTrendGradient" x1={0} y1={0} x2={0} y2={1}>
                          <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity={0.15}></stop>
                          <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity={0}></stop>
                        </lineargradient>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                        <g className="recharts-area recharts-layer">
                          <g className="recharts-layer">
                            <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#dashboardTrendGradient)" fillOpacity={0.6} height={250} stroke="none" width={538} id="recharts-area-_r_2t_" d="M10,144.375C26.303,135.553,42.606,126.731,58.909,128.75C75.212,130.769,91.515,143.629,107.818,141.25C124.121,138.871,140.424,121.254,156.727,119.375C173.03,117.496,189.333,131.356,205.636,131.875C221.939,132.394,238.242,119.573,254.545,110C270.848,100.427,287.152,94.102,303.455,97.5C319.758,100.898,336.061,114.018,352.364,113.125C368.667,112.232,384.97,97.325,401.273,88.125C417.576,78.925,433.879,75.432,450.182,72.5C466.485,69.568,482.788,67.198,499.091,63.125C515.394,59.052,531.697,53.276,548,47.5L548,260C531.697,260,515.394,260,499.091,260C482.788,260,466.485,260,450.182,260C433.879,260,417.576,260,401.273,260C384.97,260,368.667,260,352.364,260C336.061,260,319.758,260,303.455,260C287.152,260,270.848,260,254.545,260C238.242,260,221.939,260,205.636,260C189.333,260,173.03,260,156.727,260C140.424,260,124.121,260,107.818,260C91.515,260,75.212,260,58.909,260C42.606,260,26.303,260,10,260Z"></path>
                            <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.6} height={250} stroke="transparent" width={538} d="M10,144.375C26.303,135.553,42.606,126.731,58.909,128.75C75.212,130.769,91.515,143.629,107.818,141.25C124.121,138.871,140.424,121.254,156.727,119.375C173.03,117.496,189.333,131.356,205.636,131.875C221.939,132.394,238.242,119.573,254.545,110C270.848,100.427,287.152,94.102,303.455,97.5C319.758,100.898,336.061,114.018,352.364,113.125C368.667,112.232,384.97,97.325,401.273,88.125C417.576,78.925,433.879,75.432,450.182,72.5C466.485,69.568,482.788,67.198,499.091,63.125C515.394,59.052,531.697,53.276,548,47.5"></path>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-violet-500)" strokeWidth={2} fill="none" id="recharts-line-_r_2u_" height={250} width={538} strokeDasharray="574.0115966796875px 574.0115966796875px" d="M10,144.375C26.303,135.553,42.606,126.731,58.909,128.75C75.212,130.769,91.515,143.629,107.818,141.25C124.121,138.871,140.424,121.254,156.727,119.375C173.03,117.496,189.333,131.356,205.636,131.875C221.939,132.394,238.242,119.573,254.545,110C270.848,100.427,287.152,94.102,303.455,97.5C319.758,100.898,336.061,114.018,352.364,113.125C368.667,112.232,384.97,97.325,401.273,88.125C417.576,78.925,433.879,75.432,450.182,72.5C466.485,69.568,482.788,67.198,499.091,63.125C515.394,59.052,531.697,53.276,548,47.5"></path>
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
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={58.90909090909091} y={276} textAnchor="middle" fill="#666">
                              <tspan x={58.90909090909091} dy="0.71em">
                                {"AUG"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={107.81818181818181} y={276} textAnchor="middle" fill="#666">
                              <tspan x={107.81818181818181} dy="0.71em">
                                {"SEP"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={156.72727272727272} y={276} textAnchor="middle" fill="#666">
                              <tspan x={156.72727272727272} dy="0.71em">
                                {"OCT"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={205.63636363636363} y={276} textAnchor="middle" fill="#666">
                              <tspan x={205.63636363636363} dy="0.71em">
                                {"NOV"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={254.54545454545453} y={276} textAnchor="middle" fill="#666">
                              <tspan x={254.54545454545453} dy="0.71em">
                                {"DEC"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={303.45454545454544} y={276} textAnchor="middle" fill="#666">
                              <tspan x={303.45454545454544} dy="0.71em">
                                {"JAN"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={352.3636363636364} y={276} textAnchor="middle" fill="#666">
                              <tspan x={352.3636363636364} dy="0.71em">
                                {"FEB"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={401.27272727272725} y={276} textAnchor="middle" fill="#666">
                              <tspan x={401.27272727272725} dy="0.71em">
                                {"MAR"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={450.18181818181813} y={276} textAnchor="middle" fill="#666">
                              <tspan x={450.18181818181813} dy="0.71em">
                                {"APR"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={499.09090909090907} y={276} textAnchor="middle" fill="#666">
                              <tspan x={499.09090909090907} dy="0.71em">
                                {"MAY"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={538} stroke="none" fontSize="12" x={545.5859375} y={276} textAnchor="middle" fill="#666">
                              <tspan x={545.5859375} dy="0.71em">
                                {"JUN"}
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
    </main>
  )
}
